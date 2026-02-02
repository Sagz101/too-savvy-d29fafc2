import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { z } from "https://esm.sh/zod@3.23.8";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Input validation schema
const checkoutRequestSchema = z.object({
  productId: z.string().uuid({ message: "Invalid product ID format" }),
  quantity: z.number().int().min(1).max(100).optional().default(1),
});

// Helper logging function for debugging (no PII)
const logStep = (step: string, details?: Record<string, unknown>) => {
  // Sanitize details to remove any potential PII
  const sanitizedDetails = details ? Object.fromEntries(
    Object.entries(details).filter(([key]) => 
      !['email', 'customerEmail', 'user_email'].includes(key.toLowerCase())
    )
  ) : undefined;
  const detailsStr = sanitizedDetails ? ` - ${JSON.stringify(sanitizedDetails)}` : '';
  console.log(`[CREATE-CHECKOUT] ${step}${detailsStr}`);
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");

    // Parse and validate request body FIRST (before checking dependencies)
    let rawBody: unknown;
    try {
      rawBody = await req.json();
    } catch {
      throw new Error("Invalid JSON in request body");
    }

    const validationResult = checkoutRequestSchema.safeParse(rawBody);
    if (!validationResult.success) {
      const errorMessages = validationResult.error.errors.map(e => e.message).join(", ");
      throw new Error(`Validation error: ${errorMessages}`);
    }

    const { productId, quantity } = validationResult.data;
    logStep("Request data validated", { productId, quantity });

    // Now check for required configuration
    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) throw new Error("STRIPE_SECRET_KEY is not set");
    logStep("Stripe key verified");

    // Initialize Supabase client with service role key for secure operations
    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    const authHeader = req.headers.get("Authorization");
    if (!authHeader) throw new Error("No authorization header provided");
    logStep("Authorization header found");

    const token = authHeader.replace("Bearer ", "");
    const { data: userData, error: userError } = await supabaseClient.auth.getUser(token);
    if (userError) throw new Error(`Authentication error: ${userError.message}`);
    const user = userData.user;
    if (!user?.email) throw new Error("User not authenticated or email not available");
    logStep("User authenticated", { userId: user.id });

    // Fetch product details from Supabase
    const { data: product, error: productError } = await supabaseClient
      .from("products")
      .select("*")
      .eq("id", productId)
      .single();

    if (productError || !product) {
      throw new Error("Product not found");
    }
    logStep("Product found", { productName: product.name, price: product.price });

    const stripe = new Stripe(stripeKey, { apiVersion: "2023-10-16" });

    // Check if customer exists
    const customers = await stripe.customers.list({ email: user.email, limit: 1 });
    let customerId;
    if (customers.data.length > 0) {
      customerId = customers.data[0].id;
      logStep("Found existing customer", { customerId });
    } else {
      logStep("No existing customer found, will create during checkout");
    }

    const origin = req.headers.get("origin") || "http://localhost:3000";
    
    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      customer_email: customerId ? undefined : user.email,
      line_items: [
        {
          price_data: {
            currency: product.currency || "usd",
            product_data: {
              name: product.name,
              description: product.description || "",
              images: product.images || [],
            },
            unit_amount: Math.round(product.price * 100), // Convert to cents
          },
          quantity: quantity,
        },
      ],
      mode: "payment",
      success_url: `${origin}/store/success?session_id={CHECKOUT_SESSION_ID}&product_id=${productId}`,
      cancel_url: `${origin}/store?cancelled=true`,
      metadata: {
        productId: productId,
        userId: user.id,
        quantity: quantity.toString(),
      },
    });

    logStep("Checkout session created", { sessionId: session.id });

    // Create pending order record
    const { error: orderError } = await supabaseClient
      .from("orders")
      .insert({
        user_id: user.id,
        product_id: productId,
        stripe_session_id: session.id,
        amount: product.price * quantity,
        currency: product.currency || "usd",
        status: "pending",
      });

    if (orderError) {
      logStep("Error creating order", { error: orderError.message });
    } else {
      logStep("Order created successfully");
    }

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in create-checkout", { message: errorMessage });
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
