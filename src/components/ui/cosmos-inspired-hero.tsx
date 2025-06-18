
import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Globe, Shield, Users, Code, Book, Gamepad2, Github, ExternalLink, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ModernButton } from '@/components/ui/modern-button';
import { ModernCard } from '@/components/ui/modern-card';
import { ModernHeading, ModernText } from '@/components/ui/modern-typography';
import { ModernContainer } from '@/components/ui/modern-container';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';
import { useInView } from 'react-intersection-observer';

export const CosmosInspiredHero: React.FC = () => {
  const { ref: heroRef, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [animationStarted, setAnimationStarted] = useState(false);
  
  useEffect(() => {
    if (inView && !animationStarted) {
      setAnimationStarted(true);
    }
  }, [inView, animationStarted]);

  const ecosystemModules = [
    {
      icon: Sparkles,
      title: "Creator Studio",
      description: "Mint NFTs, build content, earn rewards",
      path: "/video-studio",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Global Network",
      description: "Connect with innovators worldwide",
      path: "/global-innovators", 
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Secure Messaging",
      description: "Private, encrypted communications",
      path: "/neurapathy",
      gradient: "from-green-500 to-teal-600"
    },
    {
      icon: Gamepad2,
      title: "Social Hub",
      description: "Decentralized social platform",
      path: "/neura-social",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <ModernContainer size="xl" className="relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen py-20 text-center">
          
          {/* Trust badges */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-white/80">
              <Shield size={16} className="text-green-400" />
              <span>CertiK Verified</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-white/80">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Multi-Chain Active</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 text-white/80">
              <Github size={16} className="text-purple-400" />
              <span>Open Source</span>
            </div>
          </div>

          {/* Main headline */}
          <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <ModernHeading 
              level={1} 
              className="text-6xl sm:text-7xl lg:text-8xl font-black mb-8 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent leading-tight"
              as="h1"
            >
              CREATE. OWN. THRIVE.
            </ModernHeading>
            
            <ModernText 
              variant="lead" 
              className="text-xl sm:text-2xl lg:text-3xl font-light mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed"
            >
              Build your Web3 empire with secure, multi-chain tools that put creators first
            </ModernText>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center gap-6 mb-16 transition-all duration-1000 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <ModernButton
              variant="primary"
              size="xl"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0 shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 text-lg px-8 py-4"
              asChild
            >
              <Link to="/video-studio">
                <Sparkles size={24} />
                Start Creating
                <ArrowRight size={24} />
              </Link>
            </ModernButton>
            
            <ModernButton
              variant="outline"
              size="xl"
              className="border-2 border-white/20 text-white hover:bg-white/5 hover:border-white/40 backdrop-blur-sm text-lg px-8 py-4"
              asChild
            >
              <Link to="/video-integration">
                <Code size={24} />
                Explore Developer Tools
              </Link>
            </ModernButton>
          </div>

          {/* Ecosystem modules grid */}
          <div className={`w-full max-w-6xl transition-all duration-1000 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <ModernHeading level={3} className="mb-8 text-2xl font-bold text-white">
              Modular Ecosystem
            </ModernHeading>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ecosystemModules.map((module, index) => (
                <ModernCard
                  key={index}
                  variant="elevated"
                  className="group hover:scale-105 transition-all duration-300 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Link to={module.path} className="block p-6 text-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${module.gradient} flex items-center justify-center mb-4 mx-auto shadow-lg group-hover:shadow-xl transition-shadow`}>
                      <module.icon size={24} className="text-white" />
                    </div>
                    <ModernHeading level={6} className="text-lg font-semibold mb-2 text-white">
                      {module.title}
                    </ModernHeading>
                    <ModernText variant="small" className="text-white/70 leading-tight">
                      {module.description}
                    </ModernText>
                    <div className="flex items-center justify-center text-xs text-purple-300 mt-3 group-hover:text-purple-200 transition-colors">
                      <span>Discover</span>
                      <ArrowRight size={12} className="ml-1" />
                    </div>
                  </Link>
                </ModernCard>
              ))}
            </div>
          </div>

          {/* Wallet connect */}
          <div className={`mt-16 transition-all duration-1000 delay-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <WalletConnectButton />
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-white/50" />
          </div>
        </div>
      </ModernContainer>
    </section>
  );
};
