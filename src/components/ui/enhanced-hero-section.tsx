import React from 'react';
import { ArrowRight, Shield, Zap, Globe, Award, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModernCard } from '@/components/ui/modern-card';
import { AnimatedStats } from '@/components/wallet/AnimatedStats';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';
import { Link } from 'react-router-dom';
import dimingaLogo from '@/assets/diminga-logo.png';

export const EnhancedHeroSection: React.FC = () => {
  const certifications = [
    {
      icon: Shield,
      label: "CertiK Audited",
      description: "Smart contract security verified",
      id: "TSV-2024-001"
    },
    {
      icon: Globe,
      label: "Multi-Chain Ready",
      description: "Works across major networks",
      status: "Active"
    },
    {
      icon: Zap,
      label: "Zero Platform Fees",
      description: "Keep 100% of your revenue",
      highlight: true
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--web3-cyan))_0%,_transparent_50%)] opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_hsl(var(--web3-purple))_0%,_transparent_50%)] opacity-10" />

      <div className="relative container mx-auto px-4 pt-32 pb-20">
        {/* Certifications Bar */}
        <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                cert.highlight 
                  ? 'bg-web3-accent/20 border-web3-accent/40 text-web3-accent' 
                  : 'bg-background/30 border-border/50 text-foreground'
              }`}
            >
              <cert.icon size={16} />
              <span className="text-sm font-medium">{cert.label}</span>
            </div>
          ))}
        </div>

        {/* Main Hero Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
            <img 
              src={dimingaLogo} 
              alt="Diminga" 
              className="h-24 w-auto object-contain animate-fade-in"
            />
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-web3-cyan via-web3-purple to-web3-accent bg-clip-text text-transparent">
              Diminga
            </span>
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 animate-fade-in animation-delay-200">
            Create. Own. Thrive.
          </h2>
          
          <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-300">
            The All-in-One Web3 E-commerce & Creator Platform.
          </p>
          
          <p className="text-lg text-web3-purple font-semibold mb-12 animate-fade-in animation-delay-300">
            CertiK Audited • Multi-Chain • Zero Platform Fees
          </p>

          {/* Primary Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in animation-delay-400">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-web3-cyan to-web3-purple hover:opacity-90 text-white font-semibold px-8 py-4 text-lg"
              asChild
            >
              <Link to="/studio">
                Launch Creator Studio
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-web3-cyan/30 text-web3-cyan hover:bg-web3-cyan/10 px-8 py-4 text-lg"
              asChild
            >
              <Link to="/commerce-studio">Explore Marketplace</Link>
            </Button>
            
            <WalletConnectButton />
          </div>
        </div>

        {/* Animated Platform Statistics */}
        <div className="max-w-6xl mx-auto animate-fade-in animation-delay-500">
          <AnimatedStats />
        </div>

        {/* Tech Meerkat Visual with Enhanced Animation */}
        <div className="flex justify-center mt-16 animate-fade-in animation-delay-600">
          <div className="relative group">
            <div className="w-64 h-64 bg-gradient-to-br from-web3-cyan/20 to-web3-purple/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-web3-cyan/30 group-hover:border-web3-cyan/50 transition-all duration-500 animate-cosmic-pulse">
              <Award size={120} className="text-web3-cyan opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-background/80 backdrop-blur-sm border border-border rounded-lg px-4 py-2 group-hover:bg-web3-cyan/10 group-hover:border-web3-cyan/30 transition-all duration-300">
              <span className="text-sm text-foreground font-medium group-hover:text-web3-cyan transition-colors">Web3 Creator Platform</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12 animate-fade-in animation-delay-700">
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-sm">Explore Platform</span>
            <ChevronDown size={24} className="animate-gentle-bounce text-web3-cyan" />
          </div>
        </div>
      </div>
    </div>
  );
};