import React from 'react';
import { ArrowRight, Shield, Zap, Globe, ChevronDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import dimingaLogo from '@/assets/renegade-logo.png';

export const EnhancedHeroSection: React.FC = () => {
  const valueProps = [
    { icon: Shield, label: "CertiK Audited", highlight: false },
    { icon: Globe, label: "Multi-Chain Ready", highlight: false },
    { icon: Zap, label: "Zero Platform Fees", highlight: true }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--web3-cyan))_0%,_transparent_50%)] opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_hsl(var(--web3-purple))_0%,_transparent_50%)] opacity-10" />

      <div className="relative container mx-auto px-4 pt-28 pb-20">
        {/* Main Hero Content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <img 
              src={dimingaLogo} 
              alt="Renegade" 
              className="h-20 w-auto object-contain"
            />
          </div>
          
          {/* Main Headline - Clear Value Prop */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in animation-delay-100">
            <span className="bg-gradient-to-r from-web3-cyan via-web3-purple to-web3-accent bg-clip-text text-transparent">
              Create. Own. Thrive.
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-8 animate-fade-in animation-delay-200">
            The Sovereign Web3 Platform for Creators
          </h2>

          {/* Value Props - Elevated directly under headline */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in animation-delay-300">
            {valueProps.map((prop, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                  prop.highlight 
                    ? 'bg-web3-accent/20 border-web3-accent/50 text-web3-accent' 
                    : 'bg-background/30 border-border/50 text-foreground'
                }`}
              >
                <prop.icon size={18} className={prop.highlight ? 'text-web3-accent' : 'text-web3-cyan'} />
                <span className="text-sm font-semibold">{prop.label}</span>
              </div>
            ))}
          </div>

          {/* Streamlined CTAs - Primary action first */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in animation-delay-400">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-web3-cyan to-web3-purple hover:opacity-90 text-white font-semibold px-10 py-6 text-lg shadow-2xl shadow-web3-cyan/20"
              asChild
            >
              <Link to="/studio">
                <Sparkles className="mr-2" size={20} />
                Start Creating for Free
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border/50 text-foreground hover:bg-background/30 px-8 py-6 text-lg"
              asChild
            >
              <Link to="/commerce-studio">Explore Marketplace</Link>
            </Button>
          </div>

          {/* Trust Bar - Key Stats */}
          <div className="bg-background/30 backdrop-blur-md rounded-2xl border border-border/30 p-6 mb-12 animate-fade-in animation-delay-500">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">12,847</div>
                <div className="text-sm text-muted-foreground">Active Creators</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-web3-green">$2.1M+</div>
                <div className="text-sm text-muted-foreground">Creator Earnings</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-web3-cyan">421K+</div>
                <div className="text-sm text-muted-foreground">NFTs Minted</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-web3-purple">98%</div>
                <div className="text-sm text-muted-foreground">Cheaper Than ETH</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center animate-fade-in animation-delay-600">
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm">Discover the Platform</span>
            <ChevronDown size={24} className="animate-gentle-bounce text-web3-cyan" />
          </div>
        </div>
      </div>
    </div>
  );
};