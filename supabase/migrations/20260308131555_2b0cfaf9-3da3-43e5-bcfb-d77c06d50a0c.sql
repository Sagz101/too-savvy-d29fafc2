
-- =============================================================
-- FIX 1: Recreate all RLS policies as PERMISSIVE (default)
-- All existing policies are RESTRICTIVE which blocks all access
-- =============================================================

-- ---- USERS TABLE ----
DROP POLICY IF EXISTS "Users can update their own profile" ON public.users;
DROP POLICY IF EXISTS "Users can view their own profile" ON public.users;

CREATE POLICY "Users can view their own profile"
  ON public.users FOR SELECT TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON public.users FOR UPDATE TO authenticated
  USING (auth.uid() = id);

-- ---- ORDERS TABLE ----
DROP POLICY IF EXISTS "Users can create orders" ON public.orders;
DROP POLICY IF EXISTS "Users can view their own orders" ON public.orders;

CREATE POLICY "Users can view their own orders"
  ON public.orders FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create orders"
  ON public.orders FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- ---- CONTENT TABLE ----
DROP POLICY IF EXISTS "Anyone can view published content" ON public.content;
DROP POLICY IF EXISTS "Creators can manage their own content" ON public.content;

CREATE POLICY "Anyone can view published content"
  ON public.content FOR SELECT
  USING (is_published = true);

CREATE POLICY "Creators can manage their own content"
  ON public.content FOR ALL TO authenticated
  USING (auth.uid() = creator_id)
  WITH CHECK (auth.uid() = creator_id);

-- ---- STORES TABLE ----
DROP POLICY IF EXISTS "Anyone can view active stores" ON public.stores;
DROP POLICY IF EXISTS "Creators can manage their own stores" ON public.stores;

CREATE POLICY "Anyone can view active stores"
  ON public.stores FOR SELECT
  USING (is_active = true);

CREATE POLICY "Creators can manage their own stores"
  ON public.stores FOR ALL TO authenticated
  USING (auth.uid() = creator_id)
  WITH CHECK (auth.uid() = creator_id);

-- ---- PRODUCTS TABLE ----
DROP POLICY IF EXISTS "Anyone can view active products" ON public.products;
DROP POLICY IF EXISTS "Creators can manage their own products" ON public.products;

CREATE POLICY "Anyone can view active products"
  ON public.products FOR SELECT
  USING (status = 'active');

CREATE POLICY "Creators can manage their own products"
  ON public.products FOR ALL TO authenticated
  USING (auth.uid() = creator_id)
  WITH CHECK (auth.uid() = creator_id);

-- ---- PROFILES TABLE ----
DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can view own profile" ON public.profiles;

CREATE POLICY "Users can view own profile"
  ON public.profiles FOR SELECT TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile"
  ON public.profiles FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE TO authenticated
  USING (auth.uid() = id);

-- ---- ANALYTICS TABLE ----
DROP POLICY IF EXISTS "Users can insert analytics" ON public.analytics;
DROP POLICY IF EXISTS "Users can view their own analytics" ON public.analytics;

CREATE POLICY "Users can view their own analytics"
  ON public.analytics FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert analytics"
  ON public.analytics FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- ---- NFTS TABLE ----
DROP POLICY IF EXISTS "Anyone can view NFTs" ON public.nfts;
DROP POLICY IF EXISTS "Owners can manage their NFTs" ON public.nfts;

CREATE POLICY "Anyone can view NFTs"
  ON public.nfts FOR SELECT
  USING (true);

CREATE POLICY "Owners can manage their NFTs"
  ON public.nfts FOR ALL TO authenticated
  USING (auth.uid() = owner_id)
  WITH CHECK (auth.uid() = owner_id);

-- ---- SUBSCRIBERS TABLE ----
DROP POLICY IF EXISTS "Users can view own subscription" ON public.subscribers;
DROP POLICY IF EXISTS "Users can insert own subscription" ON public.subscribers;

CREATE POLICY "Users can view own subscription"
  ON public.subscribers FOR SELECT TO authenticated
  USING ((auth.uid() = user_id) OR (auth.email() = email));

CREATE POLICY "Users can insert own subscription"
  ON public.subscribers FOR INSERT TO authenticated
  WITH CHECK ((auth.uid() = user_id) AND (auth.email() = email));

-- =============================================================
-- FIX 2: Fix mutable search_path on update_updated_at_column
-- =============================================================
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
  RETURNS trigger
  LANGUAGE plpgsql
  SECURITY INVOKER
  SET search_path = public
AS $function$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$function$;

-- =============================================================
-- FIX 3: Note on views (orders_creator, profiles_public)
-- Views inherit RLS from their underlying tables, so they are
-- already protected. No additional action needed.
-- =============================================================
