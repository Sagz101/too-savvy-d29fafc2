import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";
import { z } from "https://esm.sh/zod@3.23.8";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Input validation schema - Stripe session IDs start with "cs_"
const verifyPaymentSchema = z.object({
  sessionId: z.string()
    .min(1, { message: "Session ID is required" })
    .max(500, { message: "Session ID is too long" })
    .regex(/^cs_/, { message: "Invalid Stripe session ID format" }),
});

// Helper logging function (no PII)
const logStep = (step: string, details?: Record<string, unknown>) => {
  // Sanitize details to remove any potential PII
  const sanitizedDetails = details ? Object.fromEntries(
    Object.entries(details).filter(([key]) => 
      !['email', 'customerEmail', 'customer_email', 'user_email'].includes(key.toLowerCase())
    )
  ) : undefined;
  const detailsStr = sanitizedDetails ? ` - ${JSON.stringify(sanitizedDetails)}` : '';
  console.log(`[VERIFY-PAYMENT] ${step}${detailsStr}`);
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");

    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) throw new Error("STRIPE_SECRET_KEY is not set");

    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
      { auth: { persistSession: false } }
    );

    // Parse and validate request body
    let rawBody: unknown;
    try {
      rawBody = await req.json();
    } catch {
      throw new Error("Invalid JSON in request body");
    }

    const validationResult = verifyPaymentSchema.safeParse(rawBody);
    if (!validationResult.success) {
      const errorMessages = validationResult.error.errors.map(e => e.message).join(", ");
      throw new Error(`Validation error: ${errorMessages}`);
    }

    const { sessionId } = validationResult.data;
    logStep("Session ID validated", { sessionId });

    const stripe = new Stripe(stripeKey, { apiVersion: "2023-10-16" });
    
    // Retrieve the checkout session
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    logStep("Stripe session retrieved", { 
      paymentStatus: session.payment_status
    });

    if (session.payment_status === "paid") {
      // Update order status in database
      const { error: updateError } = await supabaseClient
        .from("orders")
        .update({
          status: "completed",
          stripe_payment_id: session.payment_intent as string,
        })
        .eq("stripe_session_id", sessionId);

      if (updateError) {
        logStep("Error updating order", { error: updateError.message });
        throw updateError;
      }

      // Record analytics
      const { error: analyticsError } = await supabaseClient
        .from("analytics")
        .insert({
          user_id: session.metadata?.userId,
          event_type: "purchase",
          product_id: session.metadata?.productId,
          amount: session.amount_total ? session.amount_total / 100 : 0,
          metadata: {
            session_id: sessionId,
            payment_intent: session.payment_intent,
            quantity: session.metadata?.quantity || 1,
          },
        });

      if (analyticsError) {
        logStep("Error recording analytics", { error: analyticsError.message });
      }

      logStep("Payment verified and order updated");
      
      return new Response(JSON.stringify({ 
        success: true, 
        status: "completed",
        order: {
          productId: session.metadata?.productId,
          amount: session.amount_total ? session.amount_total / 100 : 0,
          currency: session.currency,
        }
      }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    } else {
      logStep("Payment not completed", { paymentStatus: session.payment_status });
      
      return new Response(JSON.stringify({ 
        success: false, 
        status: session.payment_status 
      }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      });
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR in verify-payment", { message: errorMessage });
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
