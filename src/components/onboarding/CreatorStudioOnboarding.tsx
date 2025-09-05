
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
    { code: 'US', name: 'United States', currency: 'USD', methods: ['Visa', 'Mastercard', 'American Express', 'Discover'] },
    { code: 'CA', name: 'Canada', currency: 'CAD', methods: ['Visa', 'Mastercard', 'American Express'] },
    { code: 'UK', name: 'United Kingdom', currency: 'GBP', methods: ['Visa', 'Mastercard', 'American Express'] },
    { code: 'AU', name: 'Australia', currency: 'AUD', methods: ['Visa', 'Mastercard', 'American Express'] },
    { code: 'DE', name: 'Germany', currency: 'EUR', methods: ['Visa', 'Mastercard', 'American Express', 'SEPA'] },
    { code: 'FR', name: 'France', currency: 'EUR', methods: ['Visa', 'Mastercard', 'American Express', 'SEPA'] },
    { code: 'IT', name: 'Italy', currency: 'EUR', methods: ['Visa', 'Mastercard', 'American Express', 'SEPA'] },
    { code: 'ES', name: 'Spain', currency: 'EUR', methods: ['Visa', 'Mastercard', 'American Express', 'SEPA'] },
    { code: 'NL', name: 'Netherlands', currency: 'EUR', methods: ['Visa', 'Mastercard', 'American Express', 'iDEAL'] },
    { code: 'JP', name: 'Japan', currency: 'JPY', methods: ['Visa', 'Mastercard', 'JCB', 'American Express'] },
    { code: 'KR', name: 'South Korea', currency: 'KRW', methods: ['Visa', 'Mastercard', 'Union Pay'] },
    { code: 'CN', name: 'China', currency: 'CNY', methods: ['Union Pay', 'Visa', 'Mastercard'] },
    { code: 'HK', name: 'Hong Kong', currency: 'HKD', methods: ['Visa', 'Mastercard', 'Union Pay', 'American Express'] },
    { code: 'SG', name: 'Singapore', currency: 'SGD', methods: ['Visa', 'Mastercard', 'American Express', 'Union Pay'] },
    { code: 'IN', name: 'India', currency: 'INR', methods: ['Visa', 'Mastercard', 'RuPay', 'American Express'] },
    { code: 'BR', name: 'Brazil', currency: 'BRL', methods: ['Visa', 'Mastercard', 'American Express'] },
    { code: 'MX', name: 'Mexico', currency: 'MXN', methods: ['Visa', 'Mastercard', 'American Express'] },
    { code: 'AR', name: 'Argentina', currency: 'ARS', methods: ['Visa', 'Mastercard'] },
    { code: 'ZA', name: 'South Africa', currency: 'ZAR', methods: ['Visa', 'Mastercard'] },
    { code: 'AE', name: 'United Arab Emirates', currency: 'AED', methods: ['Visa', 'Mastercard', 'American Express'] },
    { code: 'SA', name: 'Saudi Arabia', currency: 'SAR', methods: ['Visa', 'Mastercard', 'American Express'] },
    { code: 'EG', name: 'Egypt', currency: 'EGP', methods: ['Visa', 'Mastercard'] },
    { code: 'NG', name: 'Nigeria', currency: 'NGN', methods: ['Visa', 'Mastercard'] },
    { code: 'KE', name: 'Kenya', currency: 'KES', methods: ['Visa', 'Mastercard'] },
    { code: 'SE', name: 'Sweden', currency: 'SEK', methods: ['Visa', 'Mastercard', 'American Express'] },
    { code: 'NO', name: 'Norway', currency: 'NOK', methods: ['Visa', 'Mastercard', 'American Express'] },
    { code: 'DK', name: 'Denmark', currency: 'DKK', methods: ['Visa', 'Mastercard', 'American Express'] },
    { code: 'FI', name: 'Finland', currency: 'EUR', methods: ['Visa', 'Mastercard', 'American Express'] },
    { code: 'CH', name: 'Switzerland', currency: 'CHF', methods: ['Visa', 'Mastercard', 'American Express'] },
    { code: 'AT', name: 'Austria', currency: 'EUR', methods: ['Visa', 'Mastercard', 'American Express'] },
    { code: 'BE', name: 'Belgium', currency: 'EUR', methods: ['Visa', 'Mastercard', 'American Express'] },
    { code: 'PT', name: 'Portugal', currency: 'EUR', methods: ['Visa', 'Mastercard', 'American Express'] },
    { code: 'IE', name: 'Ireland', currency: 'EUR', methods: ['Visa', 'Mastercard', 'American Express'] },
    { code: 'NZ', name: 'New Zealand', currency: 'NZD', methods: ['Visa', 'Mastercard', 'American Express'] },
    { code: 'MY', name: 'Malaysia', currency: 'MYR', methods: ['Visa', 'Mastercard', 'American Express'] },
    { code: 'TH', name: 'Thailand', currency: 'THB', methods: ['Visa', 'Mastercard', 'American Express'] },
    { code: 'ID', name: 'Indonesia', currency: 'IDR', methods: ['Visa', 'Mastercard'] },
    { code: 'PH', name: 'Philippines', currency: 'PHP', methods: ['Visa', 'Mastercard'] },
    { code: 'VN', name: 'Vietnam', currency: 'VND', methods: ['Visa', 'Mastercard'] },
    { code: 'TW', name: 'Taiwan', currency: 'TWD', methods: ['Visa', 'Mastercard', 'Union Pay'] },
    { code: 'CL', name: 'Chile', currency: 'CLP', methods: ['Visa', 'Mastercard'] },
    { code: 'CO', name: 'Colombia', currency: 'COP', methods: ['Visa', 'Mastercard'] },
    { code: 'PE', name: 'Peru', currency: 'PEN', methods: ['Visa', 'Mastercard'] },
    { code: 'RU', name: 'Russia', currency: 'RUB', methods: ['Visa', 'Mastercard', 'Mir'] },
    { code: 'TR', name: 'Turkey', currency: 'TRY', methods: ['Visa', 'Mastercard'] },
    { code: 'IL', name: 'Israel', currency: 'ILS', methods: ['Visa', 'Mastercard', 'American Express'] },
    { code: 'GR', name: 'Greece', currency: 'EUR', methods: ['Visa', 'Mastercard', 'American Express'] },
    { code: 'CZ', name: 'Czech Republic', currency: 'CZK', methods: ['Visa', 'Mastercard'] },
    { code: 'PL', name: 'Poland', currency: 'PLN', methods: ['Visa', 'Mastercard'] },
    { code: 'HU', name: 'Hungary', currency: 'HUF', methods: ['Visa', 'Mastercard'] },
    { code: 'RO', name: 'Romania', currency: 'RON', methods: ['Visa', 'Mastercard'] }
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
                  <div className="mb-6">
                    <label className="block text-white mb-3 flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      Country of Residence
                    </label>
                    <select
                      value={user.country}
                      onChange={(e) => setUser({ ...user, country: e.target.value })}
                      className="w-full p-3 bg-slate-700/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition-colors"
                      required
                    >
                      <option value="">Select Your Country</option>
                      {countries.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.name} ({country.currency})
                        </option>
                      ))}
                    </select>
                  </div>

                  {user.country && (
                    <div className="mb-6">
                      <h3 className="text-white mb-3 font-medium">Available Payment Methods</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {countries.find(c => c.code === user.country)?.methods.map((method) => (
                          <div
                            key={method}
                            className="p-3 bg-slate-700/30 border border-gray-600 rounded-lg text-center"
                          >
                            <div className="w-8 h-5 mx-auto mb-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded flex items-center justify-center">
                              <span className="text-xs font-bold text-white">
                                {method === 'Visa' && '💳'}
                                {method === 'Mastercard' && '🔴'}
                                {method === 'American Express' && '🔵'}
                                {method === 'Union Pay' && '🟡'}
                                {method === 'JCB' && '🟢'}
                                {method === 'Discover' && '🟠'}
                                {method === 'SEPA' && '🏦'}
                                {method === 'iDEAL' && '🇳🇱'}
                                {method === 'RuPay' && '🇮🇳'}
                                {method === 'Mir' && '🇷🇺'}
                                {!['Visa', 'Mastercard', 'American Express', 'Union Pay', 'JCB', 'Discover', 'SEPA', 'iDEAL', 'RuPay', 'Mir'].includes(method) && '💳'}
                              </span>
                            </div>
                            <span className="text-sm text-gray-300">{method}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-4">
                    <h3 className="text-white font-medium">Choose Payment Processor</h3>
                    
                    <div className="space-y-3">
                      <div className="p-4 border border-gray-600 rounded-lg hover:border-cyan-400/50 transition-colors">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded flex items-center justify-center">
                              <span className="text-white font-bold text-sm">S</span>
                            </div>
                            <div>
                              <h4 className="text-white font-medium">Stripe</h4>
                              <p className="text-sm text-gray-400">Global payment processing</p>
                            </div>
                          </div>
                          <Button
                            onClick={() => handlePaymentSetup('Stripe')}
                            disabled={!user.country}
                            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white disabled:opacity-50"
                          >
                            Set Up Stripe
                          </Button>
                        </div>
                        <div className="text-xs text-gray-400">
                          Supports: {user.country && countries.find(c => c.code === user.country)?.methods.join(', ')}
                        </div>
                      </div>

                      <div className="p-4 border border-gray-600 rounded-lg hover:border-cyan-400/50 transition-colors">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded flex items-center justify-center">
                              <span className="text-white font-bold text-sm">P</span>
                            </div>
                            <div>
                              <h4 className="text-white font-medium">PayPal</h4>
                              <p className="text-sm text-gray-400">Digital wallet & payments</p>
                            </div>
                          </div>
                          <Button
                            onClick={() => handlePaymentSetup('PayPal')}
                            disabled={!user.country}
                            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white disabled:opacity-50"
                          >
                            Set Up PayPal
                          </Button>
                        </div>
                        <div className="text-xs text-gray-400">
                          Global coverage with buyer protection
                        </div>
                      </div>

                      {user.country === 'CN' && (
                        <div className="p-4 border border-gray-600 rounded-lg hover:border-cyan-400/50 transition-colors">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-8 bg-gradient-to-r from-red-500 to-red-600 rounded flex items-center justify-center">
                                <span className="text-white font-bold text-sm">支</span>
                              </div>
                              <div>
                                <h4 className="text-white font-medium">Alipay</h4>
                                <p className="text-sm text-gray-400">China's leading payment platform</p>
                              </div>
                            </div>
                            <Button
                              onClick={() => handlePaymentSetup('Alipay')}
                              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white"
                            >
                              Set Up Alipay
                            </Button>
                          </div>
                          <div className="text-xs text-gray-400">
                            Optimized for Chinese market
                          </div>
                        </div>
                      )}
                    </div>

                    {!user.country && (
                      <div className="text-center p-4 bg-yellow-500/10 border border-yellow-400/30 rounded-lg">
                        <p className="text-yellow-300 text-sm">
                          Please select your country to see available payment methods
                        </p>
                      </div>
                    )}
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
