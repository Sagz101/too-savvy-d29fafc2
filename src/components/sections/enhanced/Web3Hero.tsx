
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';
import { Hexagon, Sparkles, Network, Users, Globe, Zap } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export const Web3Hero = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const features = [
    { label: 'Decentralized', icon: <Network className="w-5 h-5" /> },
    { label: 'Creator-Owned', icon: <Users className="w-5 h-5" /> },
    { label: 'Multi-Chain', icon: <Globe className="w-5 h-5" /> },
    { label: 'Zero Fees', icon: <Zap className="w-5 h-5" /> }
  ];

  return (
    <div className="text-center mb-32 relative" ref={ref}>
      <div className={`transition-all duration-1000 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        {/* Web3 Badge */}
        <div className="flex justify-center mb-10">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-full blur-xl"></div>
            <div className="relative flex items-center space-x-3 px-8 py-4 rounded-full bg-gradient-to-r from-slate-800/80 to-gray-800/80 border border-cyan-400/30 backdrop-blur-xl">
              <Hexagon className="w-6 h-6 text-cyan-400" />
              <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text font-semibold text-lg">
                Web3 Platform Overview
              </span>
              <Sparkles className="w-6 h-6 text-purple-400" />
            </div>
          </div>
        </div>

        {/* Animated Main Heading */}
        <div className="relative mb-10">
          <h2 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-4 font-orbitron relative">
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent blur-sm opacity-50"></span>
            <span className="relative bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent animate-pulse">
              Create. Own. Thrive.
            </span>
          </h2>
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-cyan-400/50 rounded-full animate-spin opacity-60"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-purple-400/50 rotate-45 animate-pulse opacity-40"></div>
        </div>
        
        <div className="max-w-5xl mx-auto mb-16">
          <p className="text-3xl font-semibold text-white/90 mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Comprehensive platform overview
            </span>
          </p>
          <p className="text-white/70 text-2xl leading-relaxed">
            From specialized modules to ecosystem governance—your complete toolkit for Web3 creation, ownership, and growth
          </p>
        </div>

        {/* Enhanced Web3 Feature Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
              <Badge className="relative bg-gradient-to-r from-slate-800/90 to-gray-800/90 text-white border border-cyan-400/40 px-6 py-3 text-lg font-medium backdrop-blur-xl hover:border-cyan-400/60 transition-all duration-300 hover:scale-105">
                {feature.icon}
                <span className="ml-2">{feature.label}</span>
              </Badge>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <WalletConnectButton />
          <Button 
            variant="outline" 
            className="border-2 border-cyan-400/60 text-cyan-400 hover:bg-cyan-400/20 hover:border-cyan-400 hover:text-cyan-300 shadow-xl hover:shadow-2xl hover:shadow-cyan-400/25 transform hover:scale-105 transition-all duration-300 rounded-2xl px-8 py-4 text-lg backdrop-blur-xl"
          >
            Learn Web3 Security
          </Button>
        </div>
      </div>
    </div>
  );
};
