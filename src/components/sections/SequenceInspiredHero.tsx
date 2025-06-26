
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { ModernButton } from '@/components/ui/modern-button';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';
import { CircularMeerkats } from '@/components/ui/circular-meerkats';
import { Badge } from '@/components/ui/badge';
import { Shield, Layers, DollarSign } from 'lucide-react';
import { smoothScrollToSection } from '@/utils/smoothScroll';

export const SequenceInspiredHero: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const handleStartCreating = () => {
    smoothScrollToSection('creator-interests');
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-cosmic-deep via-cosmic-dark to-cosmic-deep overflow-hidden">
      {/* Enhanced cosmic background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/3 w-[600px] h-[600px] gradient-cosmic-orb rounded-full filter blur-3xl animate-cosmic-float opacity-30"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-gradient-to-r from-cosmic-blue/20 to-cosmic-purple/20 rounded-full filter blur-3xl animate-cosmic-float opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-r from-cosmic-purple-light/15 to-cosmic-purple-soft/15 rounded-full filter blur-2xl animate-cosmic-pulse opacity-50" style={{ animationDelay: '4s' }}></div>
        
        {/* Cosmic grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(147,51,234,0.03)_25px,rgba(147,51,234,0.03)_26px,transparent_27px)] bg-[size:25px_25px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-cosmic-deep/90 via-cosmic-deep/95 to-cosmic-deep"></div>
      </div>

      {/* Main hero content */}
      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10" ref={ref}>
        <div className={`text-center transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="outline" className="bg-cosmic-purple/10 border-cosmic-purple/30 text-cosmic-purple-light px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              CertiK Audited
            </Badge>
            <Badge variant="outline" className="bg-cosmic-blue/10 border-cosmic-blue/30 text-cosmic-blue px-4 py-2">
              <Layers className="w-4 h-4 mr-2" />
              Multi-Chain Ready
            </Badge>
            <Badge variant="outline" className="bg-cosmic-purple-light/10 border-cosmic-purple-light/30 text-cosmic-purple-light px-4 py-2">
              <DollarSign className="w-4 h-4 mr-2" />
              Zero Platform Fees
            </Badge>
          </div>

          {/* Main title with SPHERE FEZ font */}
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-4 relative">
            <span className="bg-gradient-to-r from-white via-cosmic-purple-light to-cosmic-blue bg-clip-text text-transparent animate-hero-glow font-sphere-fez">
              Too Savvy
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-poppins">
            Your Web3 Creator Platform
          </p>

          {/* Main tagline */}
          <p className="text-4xl md:text-5xl font-bold mb-12 font-poppins">
            <span className="bg-gradient-to-r from-cosmic-purple-light via-white to-cosmic-blue bg-clip-text text-transparent">
              Create. Own. Thrive.
            </span>
          </p>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-inter">
            The first creator platform where you truly own your content, community, and revenue. 
            Built on Web3 infrastructure with zero platform fees.
          </p>

          {/* CTA buttons with Connect Wallet - Updated layout for better visibility */}
          <div className="flex flex-col lg:flex-row gap-4 justify-center items-center mb-16 max-w-2xl mx-auto">
            <ModernButton size="lg" className="px-8 py-4 text-lg w-full lg:w-auto" onClick={handleStartCreating}>
              Start Creating
            </ModernButton>
            <div className="w-full lg:w-auto">
              <WalletConnectButton />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cosmic-purple-light mb-2 font-poppins">12,847+</div>
              <div className="text-gray-400 font-inter">Active Creators</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cosmic-blue mb-2 font-poppins">421,071</div>
              <div className="text-gray-400 font-inter">NFTs Minted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cosmic-purple mb-2 font-poppins">$2.1M+</div>
              <div className="text-gray-400 font-inter">Creator Earnings</div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated meerkats */}
      <CircularMeerkats className="opacity-60" />
    </div>
  );
};
