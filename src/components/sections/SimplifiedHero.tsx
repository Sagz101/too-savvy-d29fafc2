
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Sparkles, Code, Play, Users, Zap, Shield, X, UserPlus, ArrowRight, Star, Check, Globe, TrendingUp } from 'lucide-react';
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black"
      id="hero"
    >
      {/* Enhanced xAI-inspired Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Subtle gradient orbs - more refined */}
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-400/15 rounded-full filter blur-2xl animate-cosmic-pulse"></div>
        
        {/* Professional grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(148,163,184,0.02)_25px,rgba(148,163,184,0.02)_26px,transparent_27px)] bg-[size:25px_25px]"></div>
        
        {/* Subtle depth layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-black/80"></div>
      </div>

      {/* Circular Meerkats Animation */}
      <CircularMeerkats />

      <div className="container mx-auto px-4 py-20 relative z-10">
        {/* Professional Trust Signals - xAI Style */}
        <div className="text-center mb-12">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <div className="group flex items-center gap-3 bg-gradient-to-r from-green-500/10 to-emerald-400/10 border border-green-400/20 rounded-full px-6 py-3 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:border-green-400/40">
              <Shield size={18} className="text-green-400" />
              <span className="text-sm font-medium text-green-400">CertiK Audited</span>
              <div className="flex items-center gap-1">
                <Check size={14} className="text-green-300" />
                <Star size={14} className="text-green-300" />
              </div>
            </div>
            <div className="group flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-cyan-400/10 border border-blue-400/20 rounded-full px-6 py-3 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:border-blue-400/40">
              <Globe size={18} className="text-blue-400" />
              <span className="text-sm font-medium text-blue-400">Multi-Chain Ready</span>
              <div className="flex gap-1 ml-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
            <div className="group flex items-center gap-3 bg-gradient-to-r from-purple-500/10 to-pink-400/10 border border-purple-400/20 rounded-full px-6 py-3 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:border-purple-400/40">
              <TrendingUp size={18} className="text-purple-400" />
              <span className="text-sm font-medium text-purple-400">Zero Platform Fees</span>
              <Check size={14} className="text-purple-300 ml-1" />
            </div>
          </div>
        </div>

        {/* xAI-Inspired Hero Title Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent font-inter tracking-tight">
                Too Savvy
              </span>
            </h1>
            <div className={`flex items-center justify-center gap-6 mb-8 transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent w-32"></div>
              <span className="text-blue-400 font-medium tracking-wider text-lg uppercase">Your Web3 Creator Platform</span>
              <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent w-32"></div>
            </div>
          </div>
          
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-white font-inter tracking-tight">
              Create. Own. Thrive.
            </span>
          </h2>
          
          <p className={`text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-inter transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Build your creator empire with decentralized tools for{' '}
            <span className="text-blue-400 font-semibold">content creation</span>,{' '}
            <span className="text-purple-400 font-semibold">true ownership</span>, and{' '}
            <span className="text-cyan-400 font-semibold">community monetization</span>—powered by Web3.
          </p>

          {/* Key Benefits - xAI Style */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto transition-all duration-1000 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="group bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300 hover:bg-slate-800/50">
              <Shield className="w-8 h-8 text-blue-400 mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-white font-semibold mb-2">True Ownership</h3>
              <p className="text-slate-400 text-sm">You control your content, data, and digital identity—forever.</p>
            </div>
            <div className="group bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300 hover:bg-slate-800/50">
              <Zap className="w-8 h-8 text-purple-400 mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-white font-semibold mb-2">Multi-Chain Support</h3>
              <p className="text-slate-400 text-sm">ETH, MATIC, BSC, AVAX - deploy across all major networks.</p>
            </div>
            <div className="group bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:bg-slate-800/50">
              <Users className="w-8 h-8 text-cyan-400 mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-white font-semibold mb-2">Community Governance</h3>
              <p className="text-slate-400 text-sm">Token-powered audiences that grow and govern with you.</p>
            </div>
          </div>

          {/* Chain Support Badges */}
          <div className={`flex flex-col items-center gap-4 mb-12 transition-all duration-1000 delay-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <InteroperabilityBadges className="justify-center" />
            <div className="text-slate-400 text-sm font-medium">Seamlessly integrated across all major blockchains</div>
          </div>
        </div>

        {/* Enhanced Primary CTA Section - xAI Style Uniform Buttons */}
        <div className={`flex flex-col items-center gap-8 mb-16 transition-all duration-1000 delay-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Main Action Buttons - Professional Uniform Design */}
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
              <button className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 min-h-[64px] flex items-center justify-center border border-blue-500/30 font-inter">
                <span className="flex items-center gap-3">
                  <Shield size={22} />
                  Connect Wallet
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
            
            <Link
              to="/auth"
              className="group relative overflow-hidden bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-white px-12 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-slate-500/25 min-h-[64px] flex items-center justify-center border border-slate-500/50 font-inter"
            >
              <span className="relative z-10 flex items-center gap-3">
                <UserPlus size={22} />
                Create Your Account
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </div>

          {/* Enhanced Onboarding Support - xAI Style */}
          <div className="text-center bg-slate-800/20 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30 max-w-2xl">
            <p className="text-slate-300 text-lg mb-6 font-inter">
              New to Web3? 🚀 <span className="text-white font-semibold">No problem!</span> Start with email and upgrade later.
            </p>
            <button
              onClick={() => setShowOnboarding(true)}
              className="group bg-gradient-to-r from-slate-700/50 to-slate-600/50 hover:from-slate-600/60 hover:to-slate-500/60 text-slate-200 hover:text-white border border-slate-600/50 hover:border-slate-500/70 px-8 py-4 rounded-xl transition-all duration-300 font-semibold flex items-center gap-3 mx-auto font-inter"
            >
              <Play size={20} />
              Get Started with Guided Setup
              <span className="text-slate-400 text-sm">(2 min)</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Enhanced Navigation Buttons - xAI Style */}
        <div className={`flex flex-col items-center gap-8 mb-16 transition-all duration-1000 delay-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Core Action Buttons - Professional Design */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={() => handleSectionNavigation('create')}
              className="group relative overflow-hidden bg-slate-800/40 border border-slate-700/50 hover:border-blue-400/50 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-400/20 min-h-[56px] flex items-center justify-center backdrop-blur-sm hover:bg-slate-800/60 font-inter"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Sparkles size={20} className="text-blue-400" />
                Create
              </span>
            </button>

            <button
              onClick={() => handleSectionNavigation('own')}
              className="group relative overflow-hidden bg-slate-800/40 border border-slate-700/50 hover:border-cyan-400/50 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-400/20 min-h-[56px] flex items-center justify-center backdrop-blur-sm hover:bg-slate-800/60 font-inter"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Shield size={20} className="text-cyan-400" />
                Own
              </span>
            </button>

            <button
              onClick={() => handleSectionNavigation('thrive')}
              className="group relative overflow-hidden bg-slate-800/40 border border-slate-700/50 hover:border-purple-400/50 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-400/20 min-h-[56px] flex items-center justify-center backdrop-blur-sm hover:bg-slate-800/60 font-inter"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Users size={20} className="text-purple-400" />
                Thrive
              </span>
            </button>
          </div>
        </div>

        {/* Enhanced Stats Section - xAI Style Professional Cards */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 transition-all duration-1000 delay-900 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="group relative bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 text-center backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:bg-slate-800/40">
            <div className="relative z-10">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2 font-inter">12.8K+</div>
              <div className="text-slate-300 text-sm font-medium font-inter">Active Creators</div>
            </div>
          </div>
          
          <div className="group relative bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 text-center backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:bg-slate-800/40">
            <div className="relative z-10">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2 font-inter">$4.2M+</div>
              <div className="text-slate-300 text-sm font-medium font-inter">Creator Earnings</div>
            </div>
          </div>
          
          <div className="group relative bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 text-center backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:bg-slate-800/40">
            <div className="relative z-10">
              <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2 font-inter">421K+</div>
              <div className="text-slate-300 text-sm font-medium font-inter">NFTs Minted</div>
            </div>
          </div>
          
          <div className="group relative bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 text-center backdrop-blur-sm hover:border-green-400/50 transition-all duration-300 hover:scale-105 hover:bg-slate-800/40">
            <div className="relative z-10">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2 font-inter">4</div>
              <div className="text-slate-300 text-sm font-medium font-inter">Supported Chains</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Onboarding Modal - xAI Style */}
      {showOnboarding && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 max-w-lg w-full shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white font-inter">Web3 Quick Start</h3>
              <button
                onClick={() => setShowOnboarding(false)}
                className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-lg"
              >
                <X size={24} />
              </button>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/30">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-sm font-bold text-blue-400 border border-blue-500/30">1</div>
                <div>
                  <div className="font-semibold text-white mb-1 font-inter">Connect Your Wallet</div>
                  <div className="text-sm text-slate-400">We support MetaMask, WalletConnect, Coinbase, and more</div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/30">
                <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center text-sm font-bold text-purple-400 border border-purple-500/30">2</div>
                <div>
                  <div className="font-semibold text-white mb-1 font-inter">Choose Your Chain</div>
                  <div className="text-sm text-slate-400">Ethereum, Polygon, BSC, or Avalanche</div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/30">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center text-sm font-bold text-cyan-400 border border-cyan-500/30">3</div>
                <div>
                  <div className="font-semibold text-white mb-1 font-inter">Start Creating</div>
                  <div className="text-sm text-slate-400">Mint NFTs, build communities, earn rewards</div>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-700/30">
                <WalletConnectButton />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
