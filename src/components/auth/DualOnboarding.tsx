import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Wallet, 
  ArrowRight, 
  Shield, 
  Zap, 
  Globe, 
  CheckCircle,
  Star,
  Crown,
  Coins
} from 'lucide-react';
import { useAuth } from '@/components/auth/AuthProvider';
import { toast } from 'sonner';

interface DualOnboardingProps {
  onComplete?: () => void;
}

export const DualOnboarding: React.FC<DualOnboardingProps> = ({ onComplete }) => {
  const [activeTab, setActiveTab] = useState<'web2' | 'web3'>('web2');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });
  const [isSignUp, setIsSignUp] = useState(true);
  
  const { loading, signOut } = useAuth();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleEmailAuth = async () => {
    try {
      // For demo purposes, just simulate success
      toast.success(isSignUp ? 'Account created successfully!' : 'Welcome back!');
      onComplete?.();
    } catch (error) {
      toast.error(isSignUp ? 'Failed to create account' : 'Failed to sign in');
    }
  };

  const handleOAuthLogin = async (provider: 'google' | 'yahoo') => {
    try {
      // For demo purposes, just simulate success
      toast.success(`Connected with ${provider.charAt(0).toUpperCase() + provider.slice(1)}!`);
      onComplete?.();
    } catch (error) {
      toast.error(`Failed to connect with ${provider}`);
    }
  };

  const handleWalletConnect = async (walletType: string) => {
    try {
      // For demo purposes, just simulate success
      toast.success(`Connected with ${walletType}!`);
      onComplete?.();
    } catch (error) {
      toast.error(`Failed to connect ${walletType}`);
    }
  };

  const web3Benefits = [
    { icon: <Coins className="w-4 h-4" />, text: "NFT Creation & Trading" },
    { icon: <Crown className="w-4 h-4" />, text: "DAO Governance Rights" },
    { icon: <Star className="w-4 h-4" />, text: "Token Rewards & Airdrops" },
    { icon: <Shield className="w-4 h-4" />, text: "Full Asset Ownership" }
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-solar-core"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">
          <span className="bg-gradient-to-r from-solar-core via-solar-radiative to-solar-photosphere bg-clip-text text-transparent">
            Welcome to Too Savvy
          </span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Choose your journey: Start simple with traditional login or dive into Web3 with crypto wallets
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'web2' | 'web3')} className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-gradient-to-r from-solar-photosphere/20 to-solar-corona/20">
          <TabsTrigger value="web2" className="data-[state=active]:bg-solar-photosphere/30">
            <Mail className="w-4 h-4 mr-2" />
            Easy Start
          </TabsTrigger>
          <TabsTrigger value="web3" className="data-[state=active]:bg-solar-photosphere/30">
            <Wallet className="w-4 h-4 mr-2" />
            Web3 Native
          </TabsTrigger>
        </TabsList>

        <TabsContent value="web2" className="space-y-6">
          <Card className="enhanced-card shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Traditional Login</span>
                <Badge variant="secondary" className="bg-solar-photosphere/20">Recommended for beginners</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* OAuth Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  className="h-12 border-2"
                  onClick={() => handleOAuthLogin('google')}
                  disabled={loading}
                >
                  <div className="w-5 h-5 bg-gradient-to-br from-red-500 to-yellow-500 rounded mr-3"></div>
                  Continue with Google
                </Button>
                <Button 
                  variant="outline" 
                  className="h-12 border-2"
                  onClick={() => handleOAuthLogin('yahoo')}
                  disabled={loading}
                >
                  <div className="w-5 h-5 bg-gradient-to-br from-purple-600 to-purple-800 rounded mr-3"></div>
                  Continue with Yahoo
                </Button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-gray-500">Or continue with email</span>
                </div>
              </div>

              {/* Email Form */}
              <div className="space-y-4">
                {isSignUp && (
                  <Input
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="h-12"
                  />
                )}
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="h-12"
                />
                <Input
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="h-12"
                />
                {isSignUp && (
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    className="h-12"
                  />
                )}
                
                <Button 
                  onClick={handleEmailAuth}
                  disabled={loading}
                  className="w-full h-12"
                >
                  {isSignUp ? 'Create Account' : 'Sign In'}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>

                <p className="text-center text-sm text-gray-600">
                  {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                  <button
                    onClick={() => setIsSignUp(!isSignUp)}
                    className="text-solar-core hover:underline font-medium"
                  >
                    {isSignUp ? 'Sign In' : 'Sign Up'}
                  </button>
                </p>
              </div>

              {/* Web2 Benefits */}
              <div className="bg-gradient-to-r from-solar-photosphere/10 to-solar-corona/10 p-4 rounded-lg">
                <h4 className="font-medium mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-solar-core" />
                  What you get with traditional login:
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Globe className="w-4 h-4 mr-2 text-solar-radiative" />
                    Access to all platform features
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-solar-radiative" />
                    Secure custodial wallet created for you
                  </li>
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-solar-radiative" />
                    Easy upgrade to Web3 features later
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="web3" className="space-y-6">
          <Card className="enhanced-card shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Connect Crypto Wallet</span>
                <Badge variant="outline" className="border-solar-radiative text-solar-core">For crypto users</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Wallet Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'MetaMask', popular: true },
                  { name: 'WalletConnect', popular: false },
                  { name: 'Coinbase Wallet', popular: false },
                  { name: 'Rainbow', popular: false }
                ].map((wallet) => (
                  <Button
                    key={wallet.name}
                    variant="outline"
                    className="h-16 border-2 relative"
                    onClick={() => handleWalletConnect(wallet.name)}
                    disabled={loading}
                  >
                    {wallet.popular && (
                      <Badge className="absolute -top-2 -right-2 bg-solar-core text-white text-xs">
                        Popular
                      </Badge>
                    )}
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-solar-radiative/20 to-solar-photosphere/30 rounded-full flex items-center justify-center mb-2 border border-solar-corona/40">
                        <Wallet size={16} className="text-solar-core" />
                      </div>
                      <span className="font-medium">{wallet.name}</span>
                    </div>
                  </Button>
                ))}
              </div>

              {/* Web3 Benefits */}
              <div className="bg-gradient-to-r from-solar-core/10 to-solar-radiative/10 p-6 rounded-lg">
                <h4 className="font-medium mb-4 flex items-center text-solar-core">
                  <Crown className="w-5 h-5 mr-2" />
                  Unlock Web3 Premium Features:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {web3Benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <div className="text-solar-radiative mr-2">{benefit.icon}</div>
                      <span className="text-gray-700">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center text-sm text-gray-500">
                <p>
                  New to crypto wallets?{' '}
                  <button 
                    onClick={() => setActiveTab('web2')}
                    className="text-solar-core hover:underline font-medium"
                  >
                    Start with traditional login
                  </button>
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="text-center mt-6 text-xs text-gray-500">
        By continuing, you agree to Too Savvy's Terms of Service and Privacy Policy
      </div>
    </div>
  );
};
