
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import { CosmicPageLayout } from '@/components/layout/CosmicPageLayout';
import { z } from 'zod';

const passwordSchema = z
  .string()
  .min(12, 'Password must be at least 12 characters')
  .max(128, 'Password must be less than 128 characters')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number')
  .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character');

const emailSchema = z.string().trim().email('Invalid email address').max(255);
const usernameSchema = z
  .string()
  .trim()
  .min(3, 'Username must be at least 3 characters')
  .max(32, 'Username must be less than 32 characters')
  .regex(/^[a-zA-Z0-9_-]+$/, 'Username may only contain letters, numbers, _ and -');

const Auth = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        navigate('/');
      }
    };
    checkUser();
  }, [navigate]);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailCheck = emailSchema.safeParse(email);
    if (!emailCheck.success) { toast.error(emailCheck.error.errors[0].message); return; }
    const usernameCheck = usernameSchema.safeParse(username);
    if (!usernameCheck.success) { toast.error(usernameCheck.error.errors[0].message); return; }
    const passwordCheck = passwordSchema.safeParse(password);
    if (!passwordCheck.success) { toast.error(passwordCheck.error.errors[0].message); return; }
    setLoading(true);
    try {
      const redirectUrl = `${window.location.origin}/`;
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: redirectUrl,
          data: { username, display_name: username }
        }
      });
      if (error) {
        if (error.message.includes('already registered')) {
          toast.error('This email is already registered. Please try signing in instead.');
        } else {
          toast.error(error.message);
        }
      } else {
        toast.success('Account created successfully! Please check your email to verify your account.');
      }
    } catch (error) {
      toast.error('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        if (error.message.includes('Invalid login credentials')) {
          toast.error('Invalid email or password. Please try again.');
        } else {
          toast.error(error.message);
        }
      } else {
        toast.success('Welcome back!');
        navigate('/');
      }
    } catch (error) {
      toast.error('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <CosmicPageLayout>
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-white/5 border-white/10 backdrop-blur-sm">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Welcome to Renegade</CardTitle>
            <CardDescription className="text-white/60">
              Create your account or sign in to access the Web3 creator platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="signin" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-white/5">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              
              <TabsContent value="signin">
                <form onSubmit={handleSignIn} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signin-email" className="text-white/80">Email</Label>
                    <Input id="signin-email" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required className="bg-white/5 border-white/10 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signin-password" className="text-white/80">Password</Label>
                    <Input id="signin-password" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required className="bg-white/5 border-white/10 text-white" />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700" disabled={loading}>
                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Sign In
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="signup">
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-username" className="text-white/80">Username</Label>
                    <Input id="signup-username" type="text" placeholder="Choose a username" value={username} onChange={(e) => setUsername(e.target.value)} required className="bg-white/5 border-white/10 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email" className="text-white/80">Email</Label>
                    <Input id="signup-email" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required className="bg-white/5 border-white/10 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password" className="text-white/80">Password</Label>
                    <Input id="signup-password" type="password" placeholder="Create a password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={12} aria-describedby="password-requirements" className="bg-white/5 border-white/10 text-white" />
                    <p id="password-requirements" className="text-xs text-white/50 mt-1">
                      At least 12 characters with uppercase, lowercase, number, and special character.
                    </p>
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700" disabled={loading}>
                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Create Account
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </CosmicPageLayout>
  );
};

export default Auth;
