
import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Globe, Shield, Users, Code, Book, Gamepad2, Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ModernButton } from '@/components/ui/modern-button';
import { ModernCard } from '@/components/ui/modern-card';
import { ModernHeading, ModernText } from '@/components/ui/modern-typography';
import { ModernContainer } from '@/components/ui/modern-container';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';
import { SecurityIndicator } from '@/components/ui/security-indicator';
import { InteroperabilityBadges } from '@/components/ui/interoperability-badges';
import { useInView } from 'react-intersection-observer';

export const CosmosInspiredHero: React.FC = () => {
  const { ref: heroRef, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [animationStarted, setAnimationStarted] = useState(false);
  const [currentChain, setCurrentChain] = useState(0);
  
  useEffect(() => {
    if (inView && !animationStarted) {
      setAnimationStarted(true);
    }
  }, [inView, animationStarted]);

  // Animate chains
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentChain(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const ecosystemModules = [
    {
      icon: Sparkles,
      title: "Creator Studio",
      description: "Mint NFTs, build content, earn rewards",
      path: "/video-studio",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Users,
      title: "Global Network",
      description: "Connect with innovators worldwide",
      path: "/global-innovators", 
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Secure Messaging",
      description: "Private, encrypted communications",
      path: "/neurapathy",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Gamepad2,
      title: "Social Hub",
      description: "Decentralized social platform",
      path: "/neura-social",
      color: "from-orange-500 to-red-600"
    }
  ];

  const chains = [
    { name: "ETH", color: "bg-blue-500", active: currentChain === 0 },
    { name: "MATIC", color: "bg-purple-500", active: currentChain === 1 },
    { name: "BSC", color: "bg-yellow-500", active: currentChain === 2 },
    { name: "AVAX", color: "bg-red-500", active: currentChain === 3 }
  ];

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen pt-20 pb-16 flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0F0F1A 0%, #1A1A2E 100%)',
        backgroundImage: `url('/lovable-uploads/7166ee6a-d5f6-4336-a75b-ebb062fdec25.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      {/* Animated Network Nodes - Cosmos Inspired */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0F0F1A]/80"></div>
        
        {/* Interconnected Network Animation */}
        <svg className="absolute inset-0 w-full h-full opacity-30" aria-hidden="true">
          <defs>
            <linearGradient id="cosmos-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00FFCC" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#FF00FF" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFFF00" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          
          {/* Animated connecting lines */}
          <path
            d="M 20,30 Q 50,10 80,30 T 150,30"
            stroke="url(#cosmos-gradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M 30,70 Q 60,50 90,70 T 160,70"
            stroke="url(#cosmos-gradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </svg>

        {/* Chain Nodes */}
        <div className="absolute top-1/4 left-1/4">
          <div className={`w-4 h-4 rounded-full ${chains[0].color} transition-all duration-500 ${chains[0].active ? 'scale-125 opacity-100 shadow-lg shadow-blue-500/50' : 'scale-100 opacity-60'}`}></div>
          <div className={`absolute top-0 left-0 w-4 h-4 rounded-full ${chains[0].color} animate-ping ${chains[0].active ? 'opacity-75' : 'opacity-0'}`}></div>
        </div>
        <div className="absolute top-1/3 right-1/3">
          <div className={`w-3 h-3 rounded-full ${chains[1].color} transition-all duration-500 ${chains[1].active ? 'scale-125 opacity-100 shadow-lg shadow-purple-500/50' : 'scale-100 opacity-60'}`}></div>
          <div className={`absolute top-0 left-0 w-3 h-3 rounded-full ${chains[1].color} animate-ping ${chains[1].active ? 'opacity-75' : 'opacity-0'}`}></div>
        </div>
        <div className="absolute bottom-1/3 left-1/2">
          <div className={`w-3.5 h-3.5 rounded-full ${chains[2].color} transition-all duration-500 ${chains[2].active ? 'scale-125 opacity-100 shadow-lg shadow-yellow-500/50' : 'scale-100 opacity-60'}`}></div>
          <div className={`absolute top-0 left-0 w-3.5 h-3.5 rounded-full ${chains[2].color} animate-ping ${chains[2].active ? 'opacity-75' : 'opacity-0'}`}></div>
        </div>
        <div className="absolute top-2/3 right-1/4">
          <div className={`w-3 h-3 rounded-full ${chains[3].color} transition-all duration-500 ${chains[3].active ? 'scale-125 opacity-100 shadow-lg shadow-red-500/50' : 'scale-100 opacity-60'}`}></div>
          <div className={`absolute top-0 left-0 w-3 h-3 rounded-full ${chains[3].color} animate-ping ${chains[3].active ? 'opacity-75' : 'opacity-0'}`}></div>
        </div>
      </div>

      <ModernContainer size="xl">
        {/* Trust Signals - Cosmos Style */}
        <div className="mb-6 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs">
          <div className="flex items-center gap-2 bg-[#00FFCC]/10 border border-[#00FFCC]/30 rounded-full px-4 py-2 text-[#00FFCC]">
            <Shield size={14} />
            <span>CertiK Verified</span>
            <ExternalLink size={12} />
          </div>
          <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 text-green-400">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Multi-Chain Active</span>
          </div>
          <div className="flex items-center gap-2 bg-[#FF00FF]/10 border border-[#FF00FF]/30 rounded-full px-4 py-2 text-[#FF00FF]">
            <Github size={14} />
            <span>Open Source</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Main Content - Refined per Cosmos principles */}
          <div className={`space-y-8 transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
            {/* Refined Hero Headline */}
            <header className="text-center lg:text-left">
              <ModernHeading 
                level={1} 
                className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-wider uppercase mb-6"
                as="h1"
              >
                <span className="bg-gradient-to-r from-[#00FFCC] via-[#FF00FF] to-[#00FFCC] bg-clip-text text-transparent animate-pulse">
                  CREATE. OWN. THRIVE.
                </span>
              </ModernHeading>
              
              <ModernText 
                variant="lead" 
                className="text-xl sm:text-2xl font-medium mb-8 text-white/90"
              >
                Build your Web3 empire with secure, multi-chain tools.
              </ModernText>
            </header>

            {/* Streamlined CTA Buttons - Cosmos Style */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <ModernButton
                variant="primary"
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-[#00FFCC] to-[#FF00FF] hover:from-[#00FFCC]/80 hover:to-[#FF00FF]/80 border-2 border-[#00FFCC] shadow-2xl shadow-[#00FFCC]/20 hover:shadow-[#FF00FF]/30 transition-all duration-300 hover:scale-105"
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
                className="w-full sm:w-auto border-[#FF00FF] text-[#FF00FF] hover:bg-[#FF00FF]/10 hover:border-[#FF00FF]/80"
                asChild
              >
                <Link to="/video-integration">
                  <Code size={20} />
                  Explore Developer Tools
                </Link>
              </ModernButton>
              
              <ModernButton
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto text-[#FFFF00] hover:text-[#FFFF00]/80 hover:bg-[#FFFF00]/10"
                asChild
              >
                <Link to="/whitepaper">
                  <Book size={20} />
                  Learn More
                </Link>
              </ModernButton>
            </div>

            {/* Single Prominent Wallet Connect */}
            <div className="pt-6">
              <WalletConnectButton />
            </div>
          </div>

          {/* Modular Ecosystem Grid - Cosmos Inspired */}
          <div className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="text-center mb-8">
              <ModernHeading level={3} className="mb-4 text-2xl font-bold text-white">
                Modular Ecosystem
              </ModernHeading>
              <ModernText variant="body" className="text-sm text-white/70">
                Choose the tools that power your creative journey
              </ModernText>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ecosystemModules.map((module, index) => (
                <ModernCard
                  key={index}
                  variant="elevated"
                  size="sm"
                  interactive
                  className="group hover:scale-105 transition-all duration-300 bg-[#1A1A2E]/80 backdrop-blur-xl border border-[#00FFCC]/20 hover:border-[#FF00FF]/50 hover:shadow-lg hover:shadow-[#FF00FF]/20"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <Link to={module.path} className="block">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${module.color} flex items-center justify-center shadow-lg`}>
                        <module.icon size={22} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <ModernHeading level={6} className="text-sm font-semibold mb-1 text-white">
                          {module.title}
                        </ModernHeading>
                        <ModernText variant="small" className="text-xs leading-tight text-white/70">
                          {module.description}
                        </ModernText>
                      </div>
                    </div>
                    <div className="flex items-center text-xs text-[#00FFCC] group-hover:text-[#FF00FF] transition-colors">
                      <span>Discover</span>
                      <ArrowRight size={12} className="ml-1" />
                    </div>
                  </Link>
                </ModernCard>
              ))}
            </div>

            {/* Multi-Chain Network Visual - Cosmos Style */}
            <div className="mt-8 p-6 bg-[#1A1A2E]/60 backdrop-blur-xl rounded-2xl border border-[#00FFCC]/20">
              <div className="text-center mb-4">
                <ModernText variant="caption" className="font-medium flex items-center justify-center gap-2 text-white">
                  <Globe size={16} className="text-[#00FFCC]" />
                  Multi-Chain Network
                </ModernText>
              </div>
              <div className="flex items-center justify-center gap-6">
                {chains.map((chain, index) => (
                  <div
                    key={index}
                    className={`relative transition-all duration-500 ${chain.active ? 'scale-125' : 'scale-100'}`}
                  >
                    <div className={`w-10 h-10 rounded-full ${chain.color} flex items-center justify-center text-white text-xs font-bold transition-all duration-500 ${chain.active ? 'shadow-xl' : 'shadow-md'}`}>
                      {chain.name}
                    </div>
                    {chain.active && (
                      <div className={`absolute inset-0 w-10 h-10 rounded-full ${chain.color} animate-ping opacity-75`}></div>
                    )}
                  </div>
                ))}
              </div>
              <ModernText variant="small" className="text-center mt-3 text-xs text-white/60">
                EVM Compatible • Instant Deployment • Cross-Chain Ready
              </ModernText>
            </div>
          </div>
        </div>

        {/* Community CTA - Cosmos Style */}
        <div className="mt-16 text-center">
          <ModernButton
            variant="ghost"
            size="lg"
            className="text-[#00FFCC] hover:bg-[#00FFCC]/10 border border-[#00FFCC]/30 hover:border-[#00FFCC]/60"
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
