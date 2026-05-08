-- 1) Drop unused public.users table (CASCADE removes any stale FK constraints referencing it)
DROP TABLE IF EXISTS public.users CASCADE;

-- 2) Prevent users from self-granting verified status on profiles
CREATE OR REPLACE FUNCTION public.prevent_profile_privilege_escalation()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Only the service role (edge functions / admin) may set is_verified to true
  IF current_setting('request.jwt.claim.role', true) IS DISTINCT FROM 'service_role' THEN
    IF TG_OP = 'INSERT' THEN
      NEW.is_verified := false;
    ELSIF TG_OP = 'UPDATE' THEN
      NEW.is_verified := OLD.is_verified;
    END IF;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS profiles_prevent_privilege_escalation ON public.profiles;
CREATE TRIGGER profiles_prevent_privilege_escalation
BEFORE INSERT OR UPDATE ON public.profiles
FOR EACH ROW EXECUTE FUNCTION public.prevent_profile_privilege_escalation();

-- 3) Add WITH CHECK to profile UPDATE policy so users can't change their id
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
CREATE POLICY "Users can update their own profile"
ON public.profiles
FOR UPDATE
TO authenticated
USING (auth.uid() = id)
WITH CHECK (auth.uid() = id);

-- 4) Ensure no permissive UPDATE policy exists on subscribers (only service role may update)
DROP POLICY IF EXISTS "update_own_subscription" ON public.subscribers;