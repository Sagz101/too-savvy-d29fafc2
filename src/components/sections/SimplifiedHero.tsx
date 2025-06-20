
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Sparkles, Code, Play, Users, Zap, Shield, X, UserPlus, ArrowRight, Star } from 'lucide-react';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';
import { CircularMeerkats } from '@/components/ui/circular-meerkats';
import { InteroperabilityBadges } from '@/components/ui/interoperability-badges';
import { smoothScrollToSection } from '@/utils/smoothScroll';

export const SimplifiedHero: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [showOnboarding, setShowOnboarding] = useState(false);

  const handleSectionNavigation = (sectionId: string) => {
    smoothScrollToSection(sectionId);
  };

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cosmos-dark via-neura-dark to-cosmos-darker"
      id="hero"
    >
      {/* Enhanced Futuristic Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Primary gradient orbs */}
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-neura-cyan/30 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-neura-purple/30 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cosmos-cyan/20 rounded-full filter blur-2xl animate-cosmic-pulse"></div>
        
        {/* Additional depth layers */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-neura-purple/5 to-cosmos-cyan/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-cosmos-cyan/5 to-transparent"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(103,232,249,0.03)_25px,rgba(103,232,249,0.03)_26px,transparent_27px)] bg-[size:25px_25px] animate-pulse"></div>
      </div>

      {/* Circular Meerkats Animation */}
      <CircularMeerkats />

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Enhanced Trust Signals */}
        <div className="text-center mb-12">
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="group flex items-center gap-3 bg-gradient-to-r from-green-500/20 to-emerald-400/20 border border-green-400/40 rounded-full px-6 py-3 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <Shield size={20} className="text-green-400 group-hover:animate-pulse" />
              <span className="text-sm font-semibold text-green-400">Smart Contract Audited</span>
              <Star size={16} className="text-green-300 animate-pulse" />
            </div>
            <div className="group flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 border border-blue-400/40 rounded-full px-6 py-3 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <Zap size={20} className="text-blue-400 group-hover:animate-pulse" />
              <span className="text-sm font-semibold text-blue-400">Multi-Chain Ready</span>
              <div className="flex gap-1 ml-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Title Section - Enhanced */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <h1 className={`text-6xl md:text-8xl lg:text-9xl font-bold mb-4 font-orbitron leading-tight transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="bg-gradient-to-r from-neura-cyan via-neura-purple to-cosmos-cyan bg-clip-text text-transparent animate-hero-glow drop-shadow-2xl">
                Too Savvy
              </span>
            </h1>
            <div className={`flex items-center justify-center gap-4 mb-6 transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="h-px bg-gradient-to-r from-transparent via-neura-cyan to-transparent w-24"></div>
              <span className="text-neura-cyan font-semibold tracking-wider text-lg">WEB3 CREATOR PLATFORM</span>
              <div className="h-px bg-gradient-to-r from-transparent via-neura-cyan to-transparent w-24"></div>
            </div>
          </div>
          
          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-bold mb-8 font-orbitron leading-tight transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="bg-gradient-to-r from-white via-neura-cyan to-white bg-clip-text text-transparent">
              Create. Own. Thrive.
            </span>
          </h2>
          
          <p className={`text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 max-w-5xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            The ultimate Web3 Creator Platform where you control your{' '}
            <span className="text-neura-cyan font-semibold">content</span>,{' '}
            <span className="text-neura-purple font-semibold">data</span>, and{' '}
            <span className="text-cosmos-cyan font-semibold">digital identity</span>—forever.
          </p>

          {/* Chain Support Badges */}
          <div className={`flex flex-col items-center gap-4 mb-12 transition-all duration-1000 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <InteroperabilityBadges className="justify-center" />
            <div className="text-white/60 text-sm">Seamlessly integrated across all major blockchains</div>
          </div>
        </div>

        {/* Enhanced Primary CTA Section */}
        <div className={`flex flex-col items-center gap-8 mb-16 transition-all duration-1000 delay-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Main Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <div className="group relative">
              <WalletConnectButton />
              <div className="absolute -inset-1 bg-gradient-to-r from-neura-cyan to-neura-purple rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
            </div>
            
            <Link
              to="/auth"
              className="group relative overflow-hidden bg-gradient-to-r from-neura-purple via-cosmos-purple to-neura-cyan text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neura-purple/40 min-h-[64px] flex items-center justify-center border border-neura-purple/30"
            >
              <span className="relative z-10 flex items-center gap-3">
                <UserPlus size={22} />
                Create Your Account
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cosmos-purple via-neura-purple to-cosmos-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Enhanced Onboarding Support */}
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-neura-cyan/20">
            <p className="text-white/80 text-lg mb-4 font-medium">
              New to Web3? 🚀 No problem! Start with email and upgrade later.
            </p>
            <button
              onClick={() => setShowOnboarding(true)}
              className="group bg-gradient-to-r from-neura-cyan/20 to-neura-purple/20 hover:from-neura-cyan/30 hover:to-neura-purple/30 text-neura-cyan border border-neura-cyan/40 px-8 py-3 rounded-lg transition-all duration-300 font-semibold flex items-center gap-2 mx-auto"
            >
              <Play size={18} />
              Get Started with Guided Setup (2 min)
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Enhanced Navigation Buttons */}
        <div className={`flex flex-col items-center gap-8 mb-16 transition-all duration-1000 delay-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Core Action Buttons - Create, Own, Thrive */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={() => handleSectionNavigation('create')}
              className="group relative overflow-hidden bg-gradient-to-r from-neura-cyan/20 to-neura-purple/20 border border-neura-cyan/40 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-neura-cyan/25 hover:border-neura-cyan/60 min-h-[56px] flex items-center justify-center backdrop-blur-sm"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles size={20} className="group-hover:animate-pulse" />
                Create
              </span>
            </button>

            <button
              onClick={() => handleSectionNavigation('own')}
              className="group relative overflow-hidden bg-gradient-to-r from-cosmos-cyan/20 to-neura-cyan/20 border border-cosmos-cyan/40 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cosmos-cyan/25 hover:border-cosmos-cyan/60 min-h-[56px] flex items-center justify-center backdrop-blur-sm"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Shield size={20} className="group-hover:animate-pulse" />
                Own
              </span>
            </button>

            <button
              onClick={() => handleSectionNavigation('thrive')}
              className="group relative overflow-hidden bg-gradient-to-r from-neura-purple/20 to-cosmos-purple/20 border border-neura-purple/40 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-neura-purple/25 hover:border-neura-purple/60 min-h-[56px] flex items-center justify-center backdrop-blur-sm"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Users size={20} className="group-hover:animate-pulse" />
                Thrive
              </span>
            </button>
          </div>
        </div>

        {/* Enhanced Stats Section with Glowing Cards */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 transition-all duration-1000 delay-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="group relative bg-gradient-to-br from-neura-cyan/10 to-transparent border border-neura-cyan/30 rounded-2xl p-6 text-center backdrop-blur-sm hover:border-neura-cyan/50 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-neura-cyan/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-4xl md:text-5xl font-bold text-neura-cyan mb-2 font-orbitron group-hover:animate-pulse">10K+</div>
              <div className="text-white/70 text-sm font-medium">Active Creators</div>
            </div>
          </div>
          
          <div className="group relative bg-gradient-to-br from-neura-purple/10 to-transparent border border-neura-purple/30 rounded-2xl p-6 text-center backdrop-blur-sm hover:border-neura-purple/50 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-neura-purple/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-4xl md:text-5xl font-bold text-neura-purple mb-2 font-orbitron group-hover:animate-pulse">$2M+</div>
              <div className="text-white/70 text-sm font-medium">Creator Earnings</div>
            </div>
          </div>
          
          <div className="group relative bg-gradient-to-br from-cosmos-cyan/10 to-transparent border border-cosmos-cyan/30 rounded-2xl p-6 text-center backdrop-blur-sm hover:border-cosmos-cyan/50 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-cosmos-cyan/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-4xl md:text-5xl font-bold text-cosmos-cyan mb-2 font-orbitron group-hover:animate-pulse">50K+</div>
              <div className="text-white/70 text-sm font-medium">NFTs Minted</div>
            </div>
          </div>
          
          <div className="group relative bg-gradient-to-br from-green-400/10 to-transparent border border-green-400/30 rounded-2xl p-6 text-center backdrop-blur-sm hover:border-green-400/50 transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2 font-orbitron group-hover:animate-pulse">4</div>
              <div className="text-white/70 text-sm font-medium">Supported Chains</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Onboarding Modal */}
      {showOnboarding && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-card/95 to-card/90 backdrop-blur-xl border border-neura-cyan/30 rounded-2xl p-8 max-w-lg w-full shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-neura-cyan to-neura-purple bg-clip-text text-transparent">Web3 Quick Start</h3>
              <button
                onClick={() => setShowOnboarding(false)}
                className="text-muted-foreground hover:text-neura-cyan transition-colors p-2 hover:bg-white/10 rounded-lg"
              >
                <X size={24} />
              </button>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-neura-cyan/10 to-transparent rounded-xl border border-neura-cyan/20">
                <div className="w-8 h-8 bg-neura-cyan/20 rounded-full flex items-center justify-center text-sm font-bold text-neura-cyan border border-neura-cyan/30">1</div>
                <div>
                  <div className="font-semibold text-white mb-1">Connect Your Wallet</div>
                  <div className="text-sm text-white/70">We support MetaMask, WalletConnect, Coinbase, and more</div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-neura-purple/10 to-transparent rounded-xl border border-neura-purple/20">
                <div className="w-8 h-8 bg-neura-purple/20 rounded-full flex items-center justify-center text-sm font-bold text-neura-purple border border-neura-purple/30">2</div>
                <div>
                  <div className="font-semibold text-white mb-1">Choose Your Chain</div>
                  <div className="text-sm text-white/70">Ethereum, Polygon, BSC, or Avalanche</div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-cosmos-cyan/10 to-transparent rounded-xl border border-cosmos-cyan/20">
                <div className="w-8 h-8 bg-cosmos-cyan/20 rounded-full flex items-center justify-center text-sm font-bold text-cosmos-cyan border border-cosmos-cyan/30">3</div>
                <div>
                  <div className="font-semibold text-white mb-1">Start Creating</div>
                  <div className="text-sm text-white/70">Mint NFTs, build communities, earn rewards</div>
                </div>
              </div>
              <div className="pt-6 border-t border-border/30">
                <WalletConnectButton />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
