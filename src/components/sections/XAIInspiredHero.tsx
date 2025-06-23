import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, Shield, Users, Zap, X, UserPlus, ArrowRight, Star, Check, Globe, TrendingUp, Wallet } from 'lucide-react';
import { useWallet } from '@/services/wallet';
import { useAuth } from '@/services/auth';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';
import { CircularMeerkats } from '@/components/ui/circular-meerkats';
import { InteroperabilityBadges } from '@/components/ui/interoperability-badges';
import { smoothScrollToSection } from '@/utils/smoothScroll';
import { toast } from 'sonner';

export const XAIInspiredHero: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [showOnboarding, setShowOnboarding] = useState(false);
  const navigate = useNavigate();
  
  // Wallet and auth hooks
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      id="hero"
    >
      {/* xAI-Inspired Black Background with Subtle Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Subtle neon particle effects */}
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-to-r from-green-500/10 to-cyan-400/10 rounded-full filter blur-3xl animate-floating-particles"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full filter blur-3xl animate-floating-particles" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-green-400/10 rounded-full filter blur-2xl animate-floating-particles" style={{ animationDelay: '4s' }}></div>
        
        {/* Minimal grid pattern for depth */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(51,51,51,0.1)_25px,rgba(51,51,51,0.1)_26px,transparent_27px)] bg-[size:25px_25px]"></div>
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
      </div>

      {/* Floating Meerkats Animation */}
      <CircularMeerkats />

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* xAI-Style Trust Signals */}
        <div className="text-center mb-16">
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
            <div className="group flex items-center gap-3 neon-border-green rounded-full px-8 py-4 backdrop-blur-sm hover:neon-glow-green transition-all duration-300 cursor-pointer">
              <Shield size={20} className="text-green-400" />
              <span className="text-sm font-medium text-white font-inter">CertiK Audited</span>
              <div className="flex items-center gap-1">
                <Check size={16} className="text-green-400" />
                <Star size={16} className="text-green-400" />
              </div>
            </div>
            <div className="group flex items-center gap-3 neon-border-pink rounded-full px-8 py-4 backdrop-blur-sm hover:neon-glow-pink transition-all duration-300 cursor-pointer">
              <Globe size={20} className="text-pink-400" />
              <span className="text-sm font-medium text-white font-inter">Multi-Chain Ready</span>
              <div className="flex gap-2 ml-2">
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
            <div className="group flex items-center gap-3 border border-gray-600 hover:border-blue-400 rounded-full px-8 py-4 backdrop-blur-sm hover:neon-glow-blue transition-all duration-300 cursor-pointer">
              <TrendingUp size={20} className="text-blue-400" />
              <span className="text-sm font-medium text-white font-inter">Zero Platform Fees</span>
              <Check size={16} className="text-blue-400 ml-1" />
            </div>
          </div>
        </div>

        {/* xAI-Inspired Main Title Section */}
        <div className="text-center mb-20">
          <div className="mb-12">
            <h1 className={`text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} animate-hero-text-glow`}>
              <span className="text-white font-helvetica tracking-tight">
                Too Savvy
              </span>
            </h1>
            <div className={`flex items-center justify-center gap-8 mb-10 transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent w-40"></div>
              <span className="text-green-400 font-semibold tracking-wider text-xl uppercase font-inter neon-glow-green">Your Web3 Creator Platform</span>
              <div className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent w-40"></div>
            </div>
          </div>
          
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-10 leading-tight transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-white font-helvetica tracking-tight">
              Create. Own. Thrive.
            </span>
          </h2>
          
          <p className={`text-xl md:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed font-inter transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Build your creator empire with decentralized tools for{' '}
            <span className="text-green-400 font-semibold text-glow-green">content creation</span>,{' '}
            <span className="text-pink-400 font-semibold text-glow-pink">true ownership</span>, and{' '}
            <span className="text-blue-400 font-semibold">community monetization</span>—powered by Web3.
          </p>

          {/* Key Benefits - xAI Style with Neon Effects */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto transition-all duration-1000 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="group xai-card p-8 hover:neon-glow-green">
              <Shield className="w-10 h-10 text-green-400 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-white font-semibold text-lg mb-3 font-helvetica">True Ownership</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-inter">You control your content, data, and digital identity—forever.</p>
            </div>
            <div className="group xai-card p-8 hover:neon-glow-pink">
              <Zap className="w-10 h-10 text-pink-400 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-white font-semibold text-lg mb-3 font-helvetica">Multi-Chain Support</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-inter">ETH, MATIC, BSC, AVAX - deploy across all major networks.</p>
            </div>
            <div className="group xai-card p-8 hover:neon-glow-blue">
              <Users className="w-10 h-10 text-blue-400 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-white font-semibold text-lg mb-3 font-helvetica">Community Governance</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-inter">Token-powered audiences that grow and govern with you.</p>
            </div>
          </div>

          {/* Chain Support Badges */}
          <div className={`flex flex-col items-center gap-6 mb-16 transition-all duration-1000 delay-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <InteroperabilityBadges className="justify-center" />
            <div className="text-gray-400 text-sm font-medium font-inter">Seamlessly integrated across all major blockchains</div>
          </div>
        </div>

        {/* xAI-Style Uniform CTA Section */}
        <div className={`flex flex-col items-center gap-10 mb-20 transition-all duration-1000 delay-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Main Action Buttons - Uniform Design */}
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <button 
              onClick={handleConnectWallet}
              disabled={isConnecting || wallet.isConnected}
              className="group relative cta-primary px-12 py-5 rounded-xl font-semibold text-lg min-h-[72px] flex items-center justify-center font-inter animate-neon-pulse disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="flex items-center gap-3">
                <Wallet size={24} />
                {isConnecting ? 'Connecting...' : wallet.isConnected ? 'Wallet Connected' : 'Connect Wallet'}
                {!isConnecting && <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform duration-300" />}
              </span>
            </button>
            
            <button
              onClick={handleCreateAccount}
              className="group relative cta-secondary px-12 py-5 rounded-xl font-semibold text-lg min-h-[72px] flex items-center justify-center font-inter animate-neon-pulse-pink"
            >
              <span className="relative z-10 flex items-center gap-3">
                <UserPlus size={24} />
                {isAuthenticated ? 'Go to Studio' : 'Create Your Account'}
                <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>

          {/* Enhanced Onboarding Support */}
          <div className="text-center xai-card p-10 max-w-2xl border-gray-600">
            <p className="text-gray-300 text-lg mb-6 font-inter">
              New to Web3? 🚀 <span className="text-white font-semibold">No problem!</span> Start with email and upgrade later.
            </p>
            <button
              onClick={handleGuidedSetup}
              className="group bg-gray-800 hover:bg-gray-700 text-gray-200 hover:text-white border border-gray-600 hover:border-green-400 px-10 py-4 rounded-xl transition-all duration-300 font-semibold flex items-center gap-3 mx-auto font-inter hover:neon-glow-green"
            >
              <Sparkles size={22} />
              Get Started with Guided Setup
              <span className="text-gray-400 text-sm">(2 min)</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Navigation Buttons - xAI Style */}
        <div className={`flex flex-col items-center gap-10 mb-20 transition-all duration-1000 delay-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={() => {
                handleSectionNavigation('create');
                toast.info("Scrolling to Create section", {
                  description: "Discover our content creation tools"
                });
              }}
              className="group xai-card hover:neon-glow-green px-10 py-4 rounded-xl font-semibold text-lg min-h-[64px] flex items-center justify-center font-inter border-gray-600 hover:border-green-400 transition-all duration-300"
            >
              <span className="flex items-center gap-3">
                <Sparkles size={22} className="text-green-400" />
                <span className="text-white">Create</span>
              </span>
            </button>

            <button
              onClick={() => {
                handleSectionNavigation('own');
                toast.info("Scrolling to Own section", {
                  description: "Learn about true digital ownership"
                });
              }}
              className="group xai-card hover:neon-glow-blue px-10 py-4 rounded-xl font-semibold text-lg min-h-[64px] flex items-center justify-center font-inter border-gray-600 hover:border-blue-400 transition-all duration-300"
            >
              <span className="flex items-center gap-3">
                <Shield size={22} className="text-blue-400" />
                <span className="text-white">Own</span>
              </span>
            </button>

            <button
              onClick={() => {
                handleSectionNavigation('thrive');
                toast.info("Scrolling to Thrive section", {
                  description: "Explore monetization opportunities"
                });
              }}
              className="group xai-card hover:neon-glow-pink px-10 py-4 rounded-xl font-semibold text-lg min-h-[64px] flex items-center justify-center font-inter border-gray-600 hover:border-pink-400 transition-all duration-300"
            >
              <span className="flex items-center gap-3">
                <Users size={22} className="text-pink-400" />
                <span className="text-white">Thrive</span>
              </span>
            </button>
          </div>
        </div>

        {/* xAI-Style Stats Section with Neon Effects */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 transition-all duration-1000 delay-900 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="stats-card green p-8 text-center">
            <div className="text-5xl md:text-6xl font-bold text-green-400 mb-3 font-helvetica text-glow-green">12.8K+</div>
            <div className="text-gray-300 text-sm font-medium font-inter">Active Creators</div>
          </div>
          
          <div className="stats-card pink p-8 text-center">
            <div className="text-5xl md:text-6xl font-bold text-pink-400 mb-3 font-helvetica text-glow-pink">$4.2M+</div>
            <div className="text-gray-300 text-sm font-medium font-inter">Creator Earnings</div>
          </div>
          
          <div className="stats-card blue p-8 text-center">
            <div className="text-5xl md:text-6xl font-bold text-blue-400 mb-3 font-helvetica">421K+</div>
            <div className="text-gray-300 text-sm font-medium font-inter">NFTs Minted</div>
          </div>
          
          <div className="stats-card green p-8 text-center">
            <div className="text-5xl md:text-6xl font-bold text-green-400 mb-3 font-helvetica text-glow-green">4</div>
            <div className="text-gray-300 text-sm font-medium font-inter">Supported Chains</div>
          </div>
        </div>
      </div>

      {/* xAI-Style Onboarding Modal */}
      {showOnboarding && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="xai-card p-10 max-w-lg w-full shadow-2xl border-gray-600">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-bold text-white font-helvetica">Web3 Quick Start</h3>
              <button
                onClick={() => {
                  setShowOnboarding(false);
                  toast.info("Setup cancelled", {
                    description: "You can always start the guided setup later!"
                  });
                }}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
              >
                <X size={26} />
              </button>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-4 p-6 bg-gray-900/50 rounded-xl neon-border-green">
                <div className="w-10 h-10 neon-border-green rounded-full flex items-center justify-center text-sm font-bold text-green-400">1</div>
                <div>
                  <div className="font-semibold text-white mb-2 font-helvetica">Connect Your Wallet</div>
                  <div className="text-sm text-gray-400 font-inter">We support MetaMask, WalletConnect, Coinbase, and more</div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gray-900/50 rounded-xl neon-border-pink">
                <div className="w-10 h-10 neon-border-pink rounded-full flex items-center justify-center text-sm font-bold text-pink-400">2</div>
                <div>
                  <div className="font-semibold text-white mb-2 font-helvetica">Choose Your Chain</div>
                  <div className="text-sm text-gray-400 font-inter">Ethereum, Polygon, BSC, or Avalanche</div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gray-900/50 rounded-xl border border-blue-400">
                <div className="w-10 h-10 border border-blue-400 rounded-full flex items-center justify-center text-sm font-bold text-blue-400">3</div>
                <div>
                  <div className="font-semibold text-white mb-2 font-helvetica">Start Creating</div>
                  <div className="text-sm text-gray-400 font-inter">Mint NFTs, build communities, earn rewards</div>
                </div>
              </div>
              <div className="pt-8 border-t border-gray-700">
                <WalletConnectButton />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
