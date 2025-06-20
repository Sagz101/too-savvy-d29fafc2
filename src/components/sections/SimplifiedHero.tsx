import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Sparkles, Code, Play, Users, Zap, Shield } from 'lucide-react';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';

export const SimplifiedHero: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [showOnboarding, setShowOnboarding] = useState(false);

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cosmos-dark via-neura-dark to-cosmos-darker"
      id="hero"
    >
      {/* Enhanced background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-neura-cyan/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-neura-purple/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cosmos-cyan/10 rounded-full filter blur-2xl animate-cosmic-pulse"></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Trust Signals */}
        <div className="text-center mb-8">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2">
              <Shield size={16} className="text-green-400" />
              <span className="text-sm font-medium text-green-400">Smart Contract Audited</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2">
              <Zap size={16} className="text-blue-400" />
              <span className="text-sm font-medium text-blue-400">Multi-Chain Ready</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center mb-16">
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-orbitron leading-tight transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="bg-gradient-to-r from-neura-cyan via-neura-purple to-cosmos-cyan bg-clip-text text-transparent animate-hero-glow">
              Create. Own. Thrive.
            </span>
          </h1>
          
          <p className={`text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            The Web3 Creator Platform where you control your content, data, and digital identity—forever.
          </p>

          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-1000 delay-400 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-white/70 text-lg">Smart Contract Audited</span>
            <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full"></div>
            <span className="text-white/70 text-lg">Multi-Chain: ETH, MATIC, BSC, AVAX</span>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className={`flex flex-col items-center gap-8 transition-all duration-1000 delay-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link 
              to="/video-studio"
              className="group relative overflow-hidden bg-gradient-to-r from-neura-cyan to-neura-purple text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-neura-cyan/25 min-h-[56px] flex items-center justify-center"
              aria-label="Create your first NFT in Creator Studio"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles size={20} />
                Create Your First NFT
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-neura-purple to-neura-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <Link 
              to="/video-integration"
              className="group relative overflow-hidden bg-transparent border-2 border-neura-cyan text-neura-cyan px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-neura-cyan hover:text-black hover:scale-105 hover:shadow-xl hover:shadow-neura-cyan/25 min-h-[56px] flex items-center justify-center"
              aria-label="Build on T00 Savvy platform"
            >
              <span className="flex items-center gap-2">
                <Code size={20} />
                Build on T00 Savvy
              </span>
            </Link>
          </div>

          {/* Secondary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={() => setShowOnboarding(true)}
              className="flex items-center justify-center gap-2 text-white/90 hover:text-neura-cyan px-6 py-3 rounded-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm min-h-[48px]"
              aria-label="Watch T00 Savvy tutorial"
            >
              <Play size={18} />
              Watch Tutorial (2 min)
            </button>

            <Link
              to="/global-innovators"
              className="flex items-center justify-center gap-2 text-white/90 hover:text-neura-purple px-6 py-3 rounded-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm min-h-[48px]"
              aria-label="Join DAO governance - Earn $Neurax tokens"
            >
              <Users size={18} />
              Join DAO (Earn $Neurax)
            </Link>
          </div>

          {/* Onboarding Support */}
          <div className="text-center mt-8">
            <p className="text-white/60 text-sm mb-2">New to Web3?</p>
            <button
              onClick={() => setShowOnboarding(true)}
              className="text-neura-cyan hover:text-neura-purple underline underline-offset-4 transition-colors duration-300"
              aria-label="Get started with Web3 guidance"
            >
              Get Started with Guided Setup
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 transition-all duration-1000 delay-800 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-neura-cyan mb-2">10K+</div>
            <div className="text-white/70 text-sm">Active Creators</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-neura-purple mb-2">$2M+</div>
            <div className="text-white/70 text-sm">Creator Earnings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-cosmos-cyan mb-2">50K+</div>
            <div className="text-white/70 text-sm">NFTs Minted</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-neura-cyan mb-2">4</div>
            <div className="text-white/70 text-sm">Supported Chains</div>
          </div>
        </div>
      </div>

      {/* Onboarding Modal */}
      {showOnboarding && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card/95 backdrop-blur-xl border border-border/50 rounded-xl p-6 max-w-md w-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">Web3 Quick Start</h3>
              <button
                onClick={() => setShowOnboarding(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close onboarding"
              >
                <X size={20} />
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-sm font-bold text-primary">1</div>
                <div>
                  <div className="font-medium">Connect Your Wallet</div>
                  <div className="text-sm text-muted-foreground">We support MetaMask, WalletConnect, and more</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-sm font-bold text-primary">2</div>
                <div>
                  <div className="font-medium">Choose Your Chain</div>
                  <div className="text-sm text-muted-foreground">Ethereum, Polygon, BSC, or Avalanche</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center text-sm font-bold text-primary">3</div>
                <div>
                  <div className="font-medium">Start Creating</div>
                  <div className="text-sm text-muted-foreground">Mint NFTs, build communities, earn rewards</div>
                </div>
              </div>
              <div className="pt-4 border-t border-border/30">
                <WalletConnectButton />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
