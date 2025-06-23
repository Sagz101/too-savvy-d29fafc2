
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { Sparkles, Shield, Users, Zap, X, UserPlus, ArrowRight, Star, Check, Globe, TrendingUp, Wallet, Play } from 'lucide-react';
import { useWallet } from '@/services/wallet';
import { useAuth } from '@/services/auth';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';
import { CircularMeerkats } from '@/components/ui/circular-meerkats';
import { InteroperabilityBadges } from '@/components/ui/interoperability-badges';
import { smoothScrollToSection } from '@/utils/smoothScroll';
import { toast } from 'sonner';

export const SequenceInspiredHero: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [showOnboarding, setShowOnboarding] = useState(false);
  const navigate = useNavigate();
  
  const { wallet, connectWallet, isConnecting } = useWallet();
  const { isAuthenticated, signUpWithEmail } = useAuth();

  const handleSectionNavigation = (sectionId: string) => {
    smoothScrollToSection(sectionId);
  };

  const handleConnectWallet = async () => {
    try {
      await connectWallet();
      toast.success("Wallet connected successfully!", {
        description: "Welcome to Too Savvy! Your Web3 journey begins now."
      });
    } catch (error) {
      console.error("Wallet connection failed:", error);
      toast.error("Connection failed", {
        description: "Please try again or use email signup."
      });
    }
  };

  const handleCreateAccount = () => {
    if (isAuthenticated) {
      navigate('/creator-studio');
      toast.success("Welcome back!", {
        description: "Redirecting to your Creator Studio..."
      });
    } else {
      navigate('/auth');
    }
  };

  const handleGuidedSetup = () => {
    setShowOnboarding(true);
    toast.info("Starting guided setup", {
      description: "We'll help you get started in just 2 minutes!"
    });
  };

  return (
    <section 
      ref={ref}
      className="sequence-hero"
      id="hero"
    >
      {/* Cosmic-inspired background effects */}
      <div className="absolute inset-0 -z-10">
        {/* Enhanced cosmic gradient orbs */}
        <div className="absolute top-1/4 right-1/3 w-96 h-96 gradient-cosmic-orb rounded-full filter blur-3xl animate-cosmic-float"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-cosmic-blue/20 to-cosmic-purple/20 rounded-full filter blur-3xl animate-cosmic-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cosmic-purple-light/15 to-cosmic-purple-soft/15 rounded-full filter blur-2xl animate-cosmic-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Enhanced cosmic beam */}
        <div className="absolute top-0 left-1/2 w-px h-full gradient-cosmic-beam transform -translate-x-1/2"></div>
        
        {/* Subtle grid overlay with cosmic theme */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(147,51,234,0.05)_25px,rgba(147,51,234,0.05)_26px,transparent_27px)] bg-[size:25px_25px]"></div>
        
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-cosmic-deep via-cosmic-deep/95 to-cosmic-deep"></div>
      </div>

      {/* Floating Meerkats Animation */}
      <CircularMeerkats />

      <div className="container mx-auto px-4 py-20 relative z-10 max-w-7xl">
        {/* Trust Signals - Enhanced cosmic style */}
        <div className="text-center mb-16">
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
            <div className="group flex items-center gap-3 bg-gradient-to-r from-cosmic-purple/10 to-cosmic-purple-light/10 border border-cosmic-purple/40 rounded-full px-8 py-4 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:border-cosmic-purple/70 glow-cosmic-soft">
              <Shield size={20} className="text-cosmic-purple-light" />
              <span className="text-sm font-semibold text-cosmic-purple-light font-inter">CertiK Audited</span>
              <div className="flex items-center gap-1">
                <Check size={16} className="text-cosmic-purple-soft" />
                <Star size={16} className="text-cosmic-purple-soft" />
              </div>
            </div>
            <div className="group flex items-center gap-3 bg-gradient-to-r from-cosmic-blue/10 to-cosmic-purple/10 border border-cosmic-blue/40 rounded-full px-8 py-4 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:border-cosmic-purple/70 glow-cosmic-purple">
              <Globe size={20} className="text-cosmic-blue" />
              <span className="text-sm font-semibold text-cosmic-blue font-inter">Multi-Chain Ready</span>
              <div className="flex gap-2 ml-2">
                <div className="w-2 h-2 bg-cosmic-blue rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-cosmic-purple rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
            <div className="group flex items-center gap-3 bg-gradient-to-r from-cosmic-purple/10 to-cosmic-pink/10 border border-cosmic-purple/40 rounded-full px-8 py-4 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:border-cosmic-purple/70 glow-cosmic-purple">
              <TrendingUp size={20} className="text-cosmic-purple" />
              <span className="text-sm font-semibold text-cosmic-purple font-inter">Zero Platform Fees</span>
              <Check size={16} className="text-cosmic-purple-soft ml-1" />
            </div>
          </div>
        </div>

        {/* Main Hero Content - Enhanced cosmic typography */}
        <div className="text-center mb-20">
          <div className="mb-12">
            <h1 className={`text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-cosmic-hero-text font-poppins`}>
              <span className="text-white tracking-tight text-glow-cosmic-white">
                Too Savvy
              </span>
            </h1>
            <div className={`flex items-center justify-center gap-8 mb-10 transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="h-px bg-gradient-to-r from-transparent via-cosmic-purple to-transparent w-40"></div>
              <span className="text-cosmic-purple font-semibold tracking-wider text-xl uppercase font-inter text-glow-cosmic-purple">Your Web3 Creator Platform</span>
              <div className="h-px bg-gradient-to-r from-transparent via-cosmic-purple to-transparent w-40"></div>
            </div>
          </div>
          
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-10 leading-tight transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} font-poppins`}>
            <span className="text-white tracking-tight">
              Create. Own. Thrive.
            </span>
          </h2>
          
          <p className={`text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed font-inter transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Build your creator empire with decentralized tools for{' '}
            <span className="text-cosmic-purple font-semibold text-glow-cosmic-purple">content creation</span>,{' '}
            <span className="text-cosmic-blue font-semibold text-glow-cosmic-blue">true ownership</span>, and{' '}
            <span className="text-cosmic-purple-light font-semibold text-glow-cosmic-soft">community monetization</span>—powered by Web3.
          </p>

          {/* Key Benefits - Enhanced cosmic style */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto transition-all duration-1000 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="sequence-card group">
              <Shield className="w-12 h-12 text-cosmic-purple-light mb-6 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-white font-bold text-xl mb-4 font-poppins">True Ownership</h3>
              <p className="text-gray-400 leading-relaxed font-inter">You control your content, data, and digital identity—forever.</p>
            </div>
            <div className="sequence-card group">
              <Zap className="w-12 h-12 text-cosmic-purple mb-6 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-white font-bold text-xl mb-4 font-poppins">Multi-Chain Support</h3>
              <p className="text-gray-400 leading-relaxed font-inter">ETH, MATIC, BSC, AVAX - deploy across all major networks.</p>
            </div>
            <div className="sequence-card group">
              <Users className="w-12 h-12 text-cosmic-blue mb-6 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-white font-bold text-xl mb-4 font-poppins">Community Governance</h3>
              <p className="text-gray-400 leading-relaxed font-inter">Token-powered audiences that grow and govern with you.</p>
            </div>
          </div>

          {/* Chain Support Badges */}
          <div className={`flex flex-col items-center gap-6 mb-16 transition-all duration-1000 delay-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <InteroperabilityBadges className="justify-center" />
            <div className="text-gray-400 font-medium font-inter">Seamlessly integrated across all major blockchains</div>
          </div>
        </div>

        {/* Primary CTAs - Enhanced cosmic style */}
        <div className={`flex flex-col items-center gap-10 mb-20 transition-all duration-1000 delay-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <button 
              onClick={handleConnectWallet}
              disabled={isConnecting || wallet.isConnected}
              className="sequence-btn-primary min-h-[72px] flex items-center justify-center animate-cosmic-glow disabled:opacity-50 disabled:cursor-not-allowed font-inter"
            >
              <span className="flex items-center gap-3">
                <Wallet size={24} />
                {isConnecting ? 'Connecting...' : wallet.isConnected ? 'Wallet Connected' : 'Connect Wallet'}
                {!isConnecting && <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform duration-300" />}
              </span>
            </button>
            
            <button
              onClick={handleCreateAccount}
              className="sequence-btn-secondary min-h-[72px] flex items-center justify-center font-inter"
            >
              <span className="flex items-center gap-3">
                <UserPlus size={24} />
                {isAuthenticated ? 'Go to Studio' : 'Create Your Account'}
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>

          {/* Enhanced Onboarding Support */}
          <div className="sequence-card max-w-2xl">
            <p className="text-gray-300 text-lg mb-6 font-inter">
              New to Web3? 🚀 <span className="text-white font-semibold">No problem!</span> Start with email and upgrade later.
            </p>
            <button
              onClick={handleGuidedSetup}
              className="sequence-btn-secondary flex items-center gap-3 mx-auto group font-inter"
            >
              <Sparkles size={22} />
              Get Started with Guided Setup
              <span className="text-gray-400 text-sm">(2 min)</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className={`flex flex-col items-center gap-10 mb-20 transition-all duration-1000 delay-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={() => handleSectionNavigation('create')}
              className="sequence-card group min-h-[64px] flex items-center justify-center font-inter hover:border-cosmic-purple-light/60"
            >
              <span className="flex items-center gap-3">
                <Sparkles size={22} className="text-cosmic-purple-light" />
                <span className="text-white font-semibold">Create</span>
              </span>
            </button>

            <button
              onClick={() => handleSectionNavigation('own')}
              className="sequence-card group min-h-[64px] flex items-center justify-center font-inter hover:border-cosmic-blue/60"
            >
              <span className="flex items-center gap-3">
                <Shield size={22} className="text-cosmic-blue" />
                <span className="text-white font-semibold">Own</span>
              </span>
            </button>

            <button
              onClick={() => handleSectionNavigation('thrive')}
              className="sequence-card group min-h-[64px] flex items-center justify-center font-inter hover:border-cosmic-purple/60"
            >
              <span className="flex items-center gap-3">
                <Users size={22} className="text-cosmic-purple" />
                <span className="text-white font-semibold">Thrive</span>
              </span>
            </button>
          </div>
        </div>

        {/* Enhanced Stats Section with cosmic colors */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 transition-all duration-1000 delay-900 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="sequence-stats-card emerald text-center">
            <div className="text-5xl md:text-6xl font-bold text-cosmic-purple-light mb-3 font-poppins">12.8K+</div>
            <div className="text-gray-300 font-medium font-inter">Active Creators</div>
          </div>
          
          <div className="sequence-stats-card purple text-center">
            <div className="text-5xl md:text-6xl font-bold text-cosmic-purple mb-3 font-poppins">$4.2M+</div>
            <div className="text-gray-300 font-medium font-inter">Creator Earnings</div>
          </div>
          
          <div className="sequence-stats-card blue text-center">
            <div className="text-5xl md:text-6xl font-bold text-cosmic-blue mb-3 font-poppins">421K+</div>
            <div className="text-gray-300 font-medium font-inter">NFTs Minted</div>
          </div>
          
          <div className="sequence-stats-card emerald text-center">
            <div className="text-5xl md:text-6xl font-bold text-cosmic-purple-light mb-3 font-poppins">4</div>
            <div className="text-gray-300 font-medium font-inter">Supported Chains</div>
          </div>
        </div>
      </div>

      {/* Enhanced Onboarding Modal with cosmic styling */}
      {showOnboarding && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="sequence-card max-w-lg w-full shadow-2xl glow-cosmic-purple">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-bold text-white font-poppins">Web3 Quick Start</h3>
              <button
                onClick={() => setShowOnboarding(false)}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-cosmic-dark rounded-lg"
              >
                <X size={26} />
              </button>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-4 p-6 bg-cosmic-dark/50 rounded-xl border border-cosmic-purple-light/30">
                <div className="w-10 h-10 border border-cosmic-purple-light/60 rounded-full flex items-center justify-center text-sm font-bold text-cosmic-purple-light">1</div>
                <div>
                  <div className="font-semibold text-white mb-2 font-poppins">Connect Your Wallet</div>
                  <div className="text-sm text-gray-400 font-inter">We support MetaMask, WalletConnect, Coinbase, and more</div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-cosmic-dark/50 rounded-xl border border-cosmic-purple/30">
                <div className="w-10 h-10 border border-cosmic-purple/60 rounded-full flex items-center justify-center text-sm font-bold text-cosmic-purple">2</div>
                <div>
                  <div className="font-semibold text-white mb-2 font-poppins">Choose Your Chain</div>
                  <div className="text-sm text-gray-400 font-inter">Ethereum, Polygon, BSC, or Avalanche</div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-cosmic-dark/50 rounded-xl border border-cosmic-blue/30">
                <div className="w-10 h-10 border border-cosmic-blue/60 rounded-full flex items-center justify-center text-sm font-bold text-cosmic-blue">3</div>
                <div>
                  <div className="font-semibold text-white mb-2 font-poppins">Start Creating</div>
                  <div className="text-sm text-gray-400 font-inter">Mint NFTs, build communities, earn rewards</div>
                </div>
              </div>
              <div className="pt-8 border-t border-cosmic-border">
                <WalletConnectButton />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
