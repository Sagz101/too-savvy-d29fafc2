-- Create a safe view for creator-facing order data (excludes PII and payment details)
CREATE OR REPLACE VIEW public.orders_creator
WITH (security_invoker = on) AS
  SELECT 
    o.id,
    o.product_id,
    o.amount,
    o.currency,
    o.status,
    o.created_at,
    o.updated_at
  FROM public.orders o
  INNER JOIN public.products p ON o.product_id = p.id
  WHERE p.creator_id = auth.uid();
-- Excludes: shipping_address, stripe_payment_id, stripe_session_id, user_id