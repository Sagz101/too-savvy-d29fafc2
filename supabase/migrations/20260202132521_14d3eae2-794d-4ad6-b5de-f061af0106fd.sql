-- Drop the vulnerable policies
DROP POLICY IF EXISTS "insert_subscription" ON public.subscribers;
DROP POLICY IF EXISTS "update_own_subscription" ON public.subscribers;
DROP POLICY IF EXISTS "select_own_subscription" ON public.subscribers;

-- Create secure SELECT policy - users can only view their own subscription
CREATE POLICY "Users can view own subscription"
ON public.subscribers
FOR SELECT
TO authenticated
USING (auth.uid() = user_id OR auth.email() = email);

-- Create secure INSERT policy - users can only insert their own subscription record
CREATE POLICY "Users can insert own subscription"
ON public.subscribers
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id AND auth.email() = email);

-- Create secure UPDATE policy - users can only update their own subscription
CREATE POLICY "Users can update own subscription"
ON public.subscribers
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id OR auth.email() = email)
WITH CHECK (auth.uid() = user_id OR auth.email() = email);