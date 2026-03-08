-- Remove the dangerously permissive UPDATE policy
DROP POLICY IF EXISTS "update_own_subscription" ON public.subscribers;

-- Remove old policies that may conflict, then recreate properly
DROP POLICY IF EXISTS "Users can update own subscription" ON public.subscribers;
DROP POLICY IF EXISTS "Users can insert own subscription" ON public.subscribers;
DROP POLICY IF EXISTS "Users can view own subscription" ON public.subscribers;

-- SELECT: users can only view their own subscription
CREATE POLICY "Users can view own subscription"
  ON public.subscribers FOR SELECT
  TO authenticated
  USING ((auth.uid() = user_id) OR (auth.email() = email));

-- INSERT: users can only create their own subscription record
CREATE POLICY "Users can insert own subscription"
  ON public.subscribers FOR INSERT
  TO authenticated
  WITH CHECK ((auth.uid() = user_id) AND (auth.email() = email));

-- No UPDATE policy for regular users — only service_role (edge functions) can update subscriptions