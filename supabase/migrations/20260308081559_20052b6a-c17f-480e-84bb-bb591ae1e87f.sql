-- Drop the overly permissive SELECT policy
DROP POLICY IF EXISTS "Profiles are viewable by everyone" ON public.profiles;

-- Allow users to view only their own profile (full access including wallet_address)
CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

-- Create a public view without sensitive fields for display purposes (e.g. creator cards)
CREATE OR REPLACE VIEW public.profiles_public
WITH (security_invoker = on) AS
  SELECT id, username, display_name, avatar_url, bio, twitter_handle, website_url, is_verified, created_at
  FROM public.profiles;