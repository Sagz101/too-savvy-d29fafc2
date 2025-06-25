
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '@/services/wallet';
import { toast } from 'sonner';
import { 
  Palette, 
  Music, 
  FileText, 
  Brush, 
  Video,
  Mail,
  Lock,
  CheckCircle,
  Wallet,
  CreditCard,
  Globe,
  Home
} from 'lucide-react';

interface User {
  email: string;
  password: string;
  interests: string[];
  country: string;
}

export const CreatorStudioOnboarding = () => {
  const [step, setStep] = useState<'register' | 'interests' | 'wallet' | 'payment'>('register');
  const [user, setUser] = useState<User>({ 
    email: '', 
    password: '', 
    interests: [], 
    country: '' 
  });
  const [walletIntegrated, setWalletIntegrated] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const navigate = useNavigate();
  const { wallet, connectWallet } = useWallet();

  const interests = [
    { id: 'Art & Design', label: 'Art & Design', icon: <Palette className="w-5 h-5" /> },
    { id: 'Music & Audio', label: 'Music & Audio', icon: <Music className="w-5 h-5" /> },
    { id: 'Writing & Content', label: 'Writing & Content', icon: <FileText className="w-5 h-5" /> },
    { id: 'Graphic Design', label: 'Graphic Design', icon: <Brush className="w-5 h-5" /> },
    { id: 'Video Production', label: 'Video Production', icon: <Video className="w-5 h-5" /> }
  ];

  const countries = [
    { code: 'US', name: 'United States' },
    { code: 'UK', name: 'United Kingdom' },
    { code: 'CA', name: 'Canada' },
    { code: 'AU', name: 'Australia' },
    { code: 'DE', name: 'Germany' },
    { code: 'FR', name: 'France' },
    { code: 'JP', name: 'Japan' },
    { code: 'IN', name: 'India' }
  ];

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user.email || !user.password) {
      toast.error('Please fill in all fields');
      return;
    }
    toast.success('Registration successful!');
    setStep('interests');
  };

  const handleOAuth = (provider: string) => {
    toast.info(`Redirecting to ${provider} login...`);
    // Simulate OAuth delay
    setTimeout(() => {
      toast.success(`Successfully logged in with ${provider}`);
      setStep('interests');
    }, 1500);
  };

  const handleInterests = () => {
    if (user.interests.length === 0) {
      toast.error('Please select at least one interest');
      return;
    }
    toast.success(`Selected ${user.interests.length} interests`);
    setStep('wallet');
  };

  const handleWalletIntegration = async (integrate: boolean) => {
    if (integrate) {
      try {
        await connectWallet();
        setWalletIntegrated(true);
        toast.success('Wallet connected successfully!');
      } catch (error) {
        toast.error('Failed to connect wallet');
        setWalletIntegrated(false);
      }
    } else {
      setWalletIntegrated(false);
      toast.info('Proceeding with traditional payment methods');
    }
    setStep('payment');
  };

  const handlePaymentSetup = (method: string) => {
    if (!walletIntegrated && !user.country) {
      toast.error('Please select your country');
      return;
    }
    
    setPaymentMethod(method);
    toast.success(`Payment method set to ${method}${user.country ? ` for ${user.country}` : ''}`);
    
    // Complete onboarding and navigate to studio
    setTimeout(() => {
      navigate('/studio');
    }, 2000);
  };

  const toggleInterest = (interest: string) => {
    setUser(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Home Button - Always visible */}
        <div className="mb-4 flex justify-start">
          <Button
            onClick={handleGoHome}
            variant="ghost"
            size="sm"
            className="text-white/70 hover:text-white hover:bg-white/10 flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Button>
        </div>

        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {['Register', 'Interests', 'Wallet', 'Payment'].map((stepName, index) => {
              const stepKeys = ['register', 'interests', 'wallet', 'payment'];
              const currentIndex = stepKeys.indexOf(step);
              const isActive = index <= currentIndex;
              
              return (
                <div
                  key={stepName}
                  className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                    isActive 
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white' 
                      : 'bg-gray-600 text-gray-300'
                  }`}
                >
                  {index < currentIndex ? <CheckCircle className="w-4 h-4" /> : index + 1}
                </div>
              );
            })}
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(((['register', 'interests', 'wallet', 'payment'].indexOf(step)) + 1) / 4) * 100}%` }}
            />
          </div>
        </div>

        {step === 'register' && (
          <Card className="bg-gradient-to-br from-slate-800/90 to-gray-800/90 border border-cyan-400/20 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <Mail className="w-6 h-6 text-cyan-400" />
                Create Your Account
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleRegister} className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Email address"
                    value={user.email}
                    onChange={(e) => setUser({ ...user, email: e.target.value })}
                    className="bg-slate-700/50 border-gray-600 text-white placeholder-gray-400"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                    className="bg-slate-700/50 border-gray-600 text-white placeholder-gray-400"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white hover:from-cyan-300 hover:via-blue-400 hover:to-purple-500"
                >
                  <Lock className="w-4 h-4 mr-2" />
                  Start Creating
                </Button>
              </form>
              
              <div className="text-center">
                <p className="text-gray-400 mb-3">Or continue with:</p>
                <div className="flex gap-2">
                  <Button
                    onClick={() => handleOAuth('Google')}
                    variant="outline"
                    className="flex-1 border-gray-600 text-white hover:bg-red-500/20"
                  >
                    Google
                  </Button>
                  <Button
                    onClick={() => handleOAuth('Yahoo')}
                    variant="outline"
                    className="flex-1 border-gray-600 text-white hover:bg-purple-500/20"
                  >
                    Yahoo
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 'interests' && (
          <Card className="bg-gradient-to-br from-slate-800/90 to-gray-800/90 border border-cyan-400/20 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Select Your Interests</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {interests.map((interest) => (
                  <div
                    key={interest.id}
                    className="flex items-center space-x-3 p-3 rounded-lg border border-gray-600 hover:border-cyan-400/50 transition-colors cursor-pointer"
                    onClick={() => toggleInterest(interest.id)}
                  >
                    <Checkbox
                      checked={user.interests.includes(interest.id)}
                      onChange={() => toggleInterest(interest.id)}
                      className="data-[state=checked]:bg-cyan-400 data-[state=checked]:border-cyan-400"
                    />
                    <div className="flex items-center gap-2 text-white">
                      {interest.icon}
                      <span>{interest.label}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button
                onClick={handleInterests}
                disabled={user.interests.length === 0}
                className="w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white disabled:opacity-50"
              >
                Continue ({user.interests.length} selected)
              </Button>
            </CardContent>
          </Card>
        )}

        {step === 'wallet' && (
          <Card className="bg-gradient-to-br from-slate-800/90 to-gray-800/90 border border-cyan-400/20 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <Wallet className="w-6 h-6 text-cyan-400" />
                Crypto Wallet Integration
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 mb-6">
                Connect a crypto wallet for Web3 transactions, NFT minting, and token rewards.
              </p>
              <div className="space-y-3">
                <Button
                  onClick={() => handleWalletIntegration(true)}
                  className="w-full bg-gradient-to-r from-emerald-400 to-green-500 text-white hover:from-emerald-300 hover:to-green-400"
                >
                  <Wallet className="w-4 h-4 mr-2" />
                  Connect Crypto Wallet
                </Button>
                <Button
                  onClick={() => handleWalletIntegration(false)}
                  variant="outline"
                  className="w-full border-gray-600 text-white hover:bg-gray-700/50"
                >
                  Skip (Use Traditional Payments)
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {step === 'payment' && (
          <Card className="bg-gradient-to-br from-slate-800/90 to-gray-800/90 border border-cyan-400/20 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center gap-2">
                <CreditCard className="w-6 h-6 text-cyan-400" />
                Payment Setup
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {walletIntegrated ? (
                <div className="text-center">
                  <div className="mb-4 p-4 bg-emerald-500/20 border border-emerald-400/30 rounded-lg">
                    <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                    <p className="text-emerald-300">
                      Crypto wallet connected successfully! You can now transact in cryptocurrency.
                    </p>
                  </div>
                  <Button
                    onClick={() => navigate('/studio')}
                    className="w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white"
                  >
                    Enter Creator Studio
                  </Button>
                </div>
              ) : (
                <>
                  <div className="mb-4">
                    <label className="block text-white mb-2 flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      Country of Residence
                    </label>
                    <select
                      value={user.country}
                      onChange={(e) => setUser({ ...user, country: e.target.value })}
                      className="w-full p-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white"
                      required
                    >
                      <option value="">Select Country</option>
                      {countries.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <p className="text-gray-300 mb-4">Select a payment method:</p>
                  <div className="space-y-3">
                    <Button
                      onClick={() => handlePaymentSetup('PayPal')}
                      disabled={!user.country}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50"
                    >
                      Set Up PayPal
                    </Button>
                    <Button
                      onClick={() => handlePaymentSetup('Stripe')}
                      disabled={!user.country}
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-50"
                    >
                      Set Up Stripe
                    </Button>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};
