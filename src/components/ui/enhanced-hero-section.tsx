
import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Globe, Shield, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ModernButton } from '@/components/ui/modern-button';
import { ModernCard } from '@/components/ui/modern-card';
import { ModernHeading, ModernText } from '@/components/ui/modern-typography';
import { ModernContainer } from '@/components/ui/modern-container';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';
import { SecurityIndicator } from '@/components/ui/security-indicator';
import { InteroperabilityBadges } from '@/components/ui/interoperability-badges';
import { useInView } from 'react-intersection-observer';

export const EnhancedHeroSection: React.FC = () => {
  const { ref: heroRef, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [animationStarted, setAnimationStarted] = useState(false);
  const [currentChain, setCurrentChain] = useState(0);
  
  useEffect(() => {
    if (inView && !animationStarted) {
      setAnimationStarted(true);
    }
  }, [inView, animationStarted]);

  // Animate chains for multi-chain support
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentChain(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const chains = [
    { name: "ETH", color: "bg-blue-500", active: currentChain === 0 },
    { name: "MATIC", color: "bg-purple-500", active: currentChain === 1 },
    { name: "BSC", color: "bg-yellow-500", active: currentChain === 2 },
    { name: "AVAX", color: "bg-red-500", active: currentChain === 3 }
  ];

  const coreFeatures = [
    {
      icon: Sparkles,
      title: "Create",
      description: "Build your creator empire with audited smart contracts and multi-chain tools",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "Own",
      description: "You control your content, data, and digital identity—forever",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Users,
      title: "Thrive",
      description: "Build loyal, token-powered audiences who grow with you",
      color: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen pt-20 pb-16 flex items-center overflow-hidden bg-gradient-to-br from-background via-background/95 to-card/10"
    >
      {/* Enhanced Background with Web3 Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        
        {/* Animated Network Nodes */}
        <div className="absolute top-1/4 left-1/4">
          <div className={`w-3 h-3 rounded-full ${chains[0].color} transition-all duration-500 ${chains[0].active ? 'scale-125 opacity-100' : 'scale-100 opacity-60'}`}></div>
          <div className={`absolute top-0 left-0 w-3 h-3 rounded-full ${chains[0].color} animate-ping ${chains[0].active ? 'opacity-75' : 'opacity-0'}`}></div>
        </div>
        <div className="absolute top-1/3 right-1/3">
          <div className={`w-2 h-2 rounded-full ${chains[1].color} transition-all duration-500 ${chains[1].active ? 'scale-125 opacity-100' : 'scale-100 opacity-60'}`}></div>
          <div className={`absolute top-0 left-0 w-2 h-2 rounded-full ${chains[1].color} animate-ping ${chains[1].active ? 'opacity-75' : 'opacity-0'}`}></div>
        </div>
        <div className="absolute bottom-1/3 left-1/2">
          <div className={`w-2.5 h-2.5 rounded-full ${chains[2].color} transition-all duration-500 ${chains[2].active ? 'scale-125 opacity-100' : 'scale-100 opacity-60'}`}></div>
          <div className={`absolute top-0 left-0 w-2.5 h-2.5 rounded-full ${chains[2].color} animate-ping ${chains[2].active ? 'opacity-75' : 'opacity-0'}`}></div>
        </div>
        <div className="absolute top-2/3 right-1/4">
          <div className={`w-2 h-2 rounded-full ${chains[3].color} transition-all duration-500 ${chains[3].active ? 'scale-125 opacity-100' : 'scale-100 opacity-60'}`}></div>
          <div className={`absolute top-0 left-0 w-2 h-2 rounded-full ${chains[3].color} animate-ping ${chains[3].active ? 'opacity-75' : 'opacity-0'}`}></div>
        </div>

        {/* Connecting Lines for Network Effect */}
        <svg className="absolute inset-0 w-full h-full opacity-20" aria-hidden="true">
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D1FF" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#7B00FF" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <line x1="25%" y1="25%" x2="66%" y2="33%" stroke="url(#line-gradient)" strokeWidth="1" />
          <line x1="66%" y1="33%" x2="50%" y2="66%" stroke="url(#line-gradient)" strokeWidth="1" />
          <line x1="50%" y1="66%" x2="75%" y2="66%" stroke="url(#line-gradient)" strokeWidth="1" />
        </svg>
      </div>

      <ModernContainer size="xl">
        {/* Trust Signals at Top */}
        <div className="mb-8 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs">
          <SecurityIndicator status="audited" />
          <InteroperabilityBadges />
          <div className="flex items-center gap-1 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1 text-green-400">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
            <span>Multi-Chain Active</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Primary Content Column - User-Centric Hierarchy */}
          <div className={`space-y-8 transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
            {/* Clear Value Proposition */}
            <header className="text-center lg:text-left">
              <ModernHeading 
                level={1}
                className={`text-5xl sm:text-6xl lg:text-7xl font-black tracking-wider uppercase mb-6 ${animationStarted ? 'animate-hero-entrance' : ''}`}
                as="h1"
              >
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                  Create. Own. Thrive.
                </span>
              </ModernHeading>
              
              <ModernText 
                variant="lead" 
                className={`text-xl sm:text-2xl font-medium mb-6 max-w-2xl ${animationStarted ? 'animate-subtext-slide' : ''}`}
                muted
              >
                Build your creator empire with audited smart contracts and multi-chain tools. 
                The future of decentralized content creation starts here.
              </ModernText>
            </header>

            {/* Primary CTA - Prioritized as per xAI principles */}
            <div className="flex flex-col items-center lg:items-start gap-4 pt-6">
              <div className="w-full lg:w-auto">
                <WalletConnectButton />
              </div>
              
              {/* Secondary CTAs with Clear Hierarchy */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
                <ModernButton
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 shadow-2xl"
                  asChild
                >
                  <Link to="/video-studio">
                    <Sparkles size={20} />
                    Start Creating
                    <ArrowRight size={20} />
                  </Link>
                </ModernButton>
                
                <ModernButton
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-primary/50 text-primary hover:bg-primary/10"
                  asChild
                >
                  <Link to="/video-integration">
                    View SDK Docs
                  </Link>
                </ModernButton>
              </div>
            </div>

            {/* Core Value Props - Simplified for Clarity */}
            <div className="grid grid-cols-1 gap-4 pt-8">
              {coreFeatures.map((feature, index) => (
                <ModernCard
                  key={index}
                  variant="elevated"
                  size="sm"
                  interactive
                  className="group hover:scale-105 transition-all duration-300 border-l-4 border-l-transparent hover:border-l-primary/50"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center flex-shrink-0`}>
                      <feature.icon size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <ModernHeading level={6} className="text-lg font-semibold mb-1">
                        {feature.title}
                      </ModernHeading>
                      <ModernText variant="small" muted className="text-sm">
                        {feature.description}
                      </ModernText>
                    </div>
                  </div>
                </ModernCard>
              ))}
            </div>
          </div>

          {/* Multi-Chain Support Visual - Interactive Element */}
          <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="text-center mb-8">
              <ModernHeading level={3} className="mb-4 text-2xl font-bold">
                Multi-Chain Ready
              </ModernHeading>
              <ModernText variant="body" muted className="text-sm">
                Seamless integration across leading blockchain networks
              </ModernText>
            </div>

            {/* Interactive Chain Visualization */}
            <ModernCard
              variant="elevated"
              size="lg"
              className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-border/50"
            >
              <div className="text-center mb-6">
                <ModernText variant="caption" className="font-medium flex items-center justify-center gap-2">
                  <Globe size={16} className="text-primary" />
                  Live Network Status
                </ModernText>
              </div>
              
              <div className="flex items-center justify-center gap-6 mb-6">
                {chains.map((chain, index) => (
                  <div
                    key={index}
                    className={`relative transition-all duration-500 ${chain.active ? 'scale-125' : 'scale-100'}`}
                  >
                    <div className={`w-12 h-12 rounded-full ${chain.color} flex items-center justify-center text-white text-sm font-bold transition-all duration-500 ${chain.active ? 'shadow-lg' : ''}`}>
                      {chain.name}
                    </div>
                    {chain.active && (
                      <div className={`absolute inset-0 w-12 h-12 rounded-full ${chain.color} animate-ping opacity-75`}></div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <ModernText variant="caption" muted className="text-xs">Transaction Cost</ModernText>
                  <ModernHeading level={6} className="text-primary">~$0.002</ModernHeading>
                </div>
                <div>
                  <ModernText variant="caption" muted className="text-xs">Validator Nodes</ModernText>
                  <ModernHeading level={6} className="text-primary">3,000+</ModernHeading>
                </div>
              </div>
            </ModernCard>
          </div>
        </div>

        {/* Clear Call to Action - Community Focus */}
        <div className="mt-16 text-center">
          <ModernButton
            variant="ghost"
            size="lg"
            className="text-primary hover:bg-primary/10"
            asChild
          >
            <Link to="/global-innovators">
              <Users size={20} />
              Join Our DAO
            </Link>
          </ModernButton>
        </div>
      </ModernContainer>
    </section>
  );
};
