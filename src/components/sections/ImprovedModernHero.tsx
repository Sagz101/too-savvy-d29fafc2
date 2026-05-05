
import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Globe, Shield, Users, Zap, CheckCircle, Lock, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ModernButton } from '@/components/ui/modern-button';
import { ModernCard } from '@/components/ui/modern-card';
import { ModernHeading, ModernText } from '@/components/ui/modern-typography';
import { ModernContainer } from '@/components/ui/modern-container';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';
import { OnboardingStepper } from '@/components/ui/onboarding-stepper';
import { Web3TrustSignals } from '@/components/ui/web3-trust-signals';
import { SecurityIndicator } from '@/components/ui/security-indicator';
import { InteroperabilityBadges } from '@/components/ui/interoperability-badges';
import { useInView } from 'react-intersection-observer';

export const ImprovedModernHero: React.FC = () => {
  const { ref: heroRef, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [animationStarted, setAnimationStarted] = useState(false);
  const [currentOnboardingStep, setCurrentOnboardingStep] = useState(1);
  const [isWalletSupported, setIsWalletSupported] = useState(true);
  
  useEffect(() => {
    if (inView && !animationStarted) {
      setAnimationStarted(true);
    }
  }, [inView, animationStarted]);

  // Simulate onboarding progress
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentOnboardingStep(prev => prev < 3 ? prev + 1 : 1);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Check wallet support for progressive enhancement
  useEffect(() => {
    const checkWalletSupport = () => {
      const hasEthereum = typeof window !== 'undefined' && window.ethereum;
      setIsWalletSupported(!!hasEthereum);
    };
    checkWalletSupport();
  }, []);

  const web3Benefits = [
    { 
      icon: Shield, 
      title: "True Ownership", 
      desc: "Your content, data, and identity—secured on blockchain forever with smart contract audits.", 
      highlight: "🔐 You Own It",
      color: "primary",
      security: "audited" as const
    },
    { 
      icon: Zap, 
      title: "Cross-Chain Ready", 
      desc: "Multi-chain compatibility with Layer 2 solutions for optimal gas fees and speed.", 
      highlight: "⚡ Multi-Chain",
      color: "warning",
      security: "verified" as const
    },
    { 
      icon: Users, 
      title: "Decentralized Governance", 
      desc: "Community-driven decisions through DAO voting and token-based governance.", 
      highlight: "🌐 Community-Owned",
      color: "secondary",
      security: "community" as const
    }
  ];

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen pt-20 pb-8 sm:pt-24 sm:pb-16 flex items-center overflow-hidden bg-gradient-to-br from-background via-background/95 to-card/10"
      aria-label="Renegade - Web3 Creator Platform"
    >
      {/* Enhanced Gradient Background with Web3 Visual Elements */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iaHNsKHZhcigtLWJvcmRlcikpIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-20"></div>
        
        {/* Floating blockchain nodes animation */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary/40 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-accent/30 rounded-full animate-pulse delay-2000"></div>
      </div>

      <ModernContainer size="xl">
        {/* Security and Network Status Bar */}
        <div className="mb-6 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs">
          <SecurityIndicator status="audited" />
          <InteroperabilityBadges />
          <div className="flex items-center gap-1 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1 text-green-400">
            <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
            <span>Ethereum Mainnet Active</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content Column - Enhanced with Web3 UX principles */}
          <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
            {/* Brand Introduction with Decentralized Identity */}
            <header className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <ModernHeading 
                  level={2} 
                  className={`text-3xl sm:text-4xl lg:text-5xl font-porscha text-foreground tracking-tight uppercase ${animationStarted ? 'animate-logo-glow' : ''}`}
                  as="h1"
                >
                  DIMINGA
                </ModernHeading>
                <div className="flex items-center gap-1 bg-primary/10 border border-primary/30 rounded-full px-2 py-1">
                  <CheckCircle size={12} className="text-primary" />
                  <span className="text-xs text-primary font-medium">Verified</span>
                </div>
              </div>
              <div className="text-sm text-primary font-medium mb-4 flex items-center justify-center lg:justify-start gap-2">
                🚀 <span>The Future of Creator Economy is Here</span>
                <div className="hidden sm:flex items-center gap-1 text-xs text-muted-foreground">
                  <Lock size={10} /> End-to-End Encrypted
                </div>
              </div>
            </header>

            {/* Progressive Onboarding Flow */}
            <div className="py-4 bg-card/30 rounded-2xl border border-border/50 p-4">
              <ModernText variant="caption" className="text-center mb-3 font-medium">
                🎯 Your Web3 Journey
              </ModernText>
              <OnboardingStepper currentStep={currentOnboardingStep} />
              
              {/* Wallet Compatibility Check */}
              {!isWalletSupported && (
                <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                  <div className="flex items-center gap-2 text-yellow-600 text-xs">
                    <AlertTriangle size={14} />
                    <span>No Web3 wallet detected. <Link to="/learn" className="underline">Learn how to get started</Link></span>
                  </div>
                </div>
              )}
            </div>

            {/* Enhanced Value Proposition with Security Focus */}
            <div className="space-y-4 sm:space-y-6">
              <ModernHeading 
                level={1}
                className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-orbitron font-black leading-tight tracking-wider uppercase ${animationStarted ? 'animate-hero-entrance' : ''}`}
                as="h2"
              >
                <span className={`block sm:inline ${animationStarted ? 'animate-type-1' : ''}`}>
                  Build.
                </span>{' '}
                <span className={`block sm:inline ${animationStarted ? 'animate-type-2' : ''}`}>
                  Own.
                </span>{' '}
                <span className={`block sm:inline ${animationStarted ? 'animate-type-3' : ''}`}>
                  Prosper.
                </span>
              </ModernHeading>
              
              <ModernText 
                variant="lead"
                className={`max-w-2xl font-inter font-medium ${animationStarted ? 'animate-subtext-slide' : ''}`}
                muted
              >
                Shape your digital future with Renegade. Create freely, own your work on the blockchain, and grow your community—with enterprise-grade security and multi-chain compatibility.
              </ModernText>

              {/* Decentralized Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 gap-4" role="list" aria-label="Web3 Platform Benefits">
                {web3Benefits.map((benefit, index) => (
                  <ModernCard 
                    key={index}
                    variant="elevated"
                    size="sm"
                    interactive
                    className="text-center transition-all duration-700 hover:scale-105 hover:shadow-2xl border-l-4 border-l-primary/50"
                    style={{ animationDelay: `${3.2 + (index * 0.3)}s` }}
                    role="listitem"
                    tabIndex={0}
                  >
                    <div className="flex justify-center mb-3">
                      <div className={`w-12 h-12 rounded-xl bg-${benefit.color}/20 flex items-center justify-center border border-${benefit.color}/30`}>
                        <benefit.icon size={24} className={`text-${benefit.color}`} />
                      </div>
                    </div>
                    <div className={`text-xs font-bold mb-2 text-${benefit.color} flex items-center justify-center gap-1`}>
                      {benefit.highlight}
                      <SecurityIndicator status={benefit.security} size="sm" />
                    </div>
                    <ModernHeading level={6} className="mb-2 font-inter text-sm">
                      {benefit.title}
                    </ModernHeading>
                    <ModernText variant="caption" muted className="font-inter leading-relaxed text-xs">
                      {benefit.desc}
                    </ModernText>
                  </ModernCard>
                ))}
              </div>
            </div>

            {/* Enhanced Trust Signals with Interoperability */}
            <div className="py-4">
              <ModernText variant="caption" className="text-center lg:text-left mb-4 font-medium flex items-center justify-center lg:justify-start gap-2">
                <CheckCircle size={16} className="text-green-400" />
                <span>Trusted by 10,000+ Web3 creators across 15+ networks</span>
              </ModernText>
              <Web3TrustSignals />
            </div>

            {/* Enhanced Action Section with Progressive Enhancement */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4" role="group" aria-label="Get started actions">
              <ModernButton
                variant="primary"
                size="lg"
                className={`w-full sm:w-auto shadow-xl hover:shadow-2xl transition-all duration-300 ${animationStarted ? 'animate-cta-pulse' : ''}`}
                asChild
              >
                <Link to="/video-studio">
                  <Sparkles size={20} aria-hidden="true" />
                  <span>Start Building Now</span>
                  <ArrowRight size={20} aria-hidden="true" />
                </Link>
              </ModernButton>
              
              <ModernButton
                variant="outline"
                size="lg"
                className="w-full sm:w-auto hover:bg-primary/10 transition-all duration-300"
                asChild
              >
                <Link to="/projects-creator">
                  <Globe size={20} aria-hidden="true" />
                  <span>Explore Projects</span>
                </Link>
              </ModernButton>
              
              <div className="w-full sm:w-auto">
                <WalletConnectButton />
              </div>
            </div>

            {/* Mobile-specific Web3 guidance */}
            <div className="block sm:hidden text-center text-xs text-muted-foreground py-4 space-y-2">
              <p className="flex items-center justify-center gap-2">
                📱 <span>Optimized for mobile Web3 wallets</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                🔗 <span>Scan QR codes to connect instantly</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                ⚡ <span>Low gas fees via Layer 2 networks</span>
              </p>
            </div>
          </div>

          {/* Enhanced Dashboard Preview with Security Context */}
          <div className={`relative transition-all duration-1000 order-first lg:order-last ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <ModernCard 
              variant="elevated"
              size="lg"
              className="relative overflow-hidden min-h-[400px] sm:min-h-[500px] bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border border-primary/20 shadow-2xl"
              role="img"
              aria-label="Renegade Creator Dashboard Preview"
            >
              {/* Dashboard Header with Enhanced Security Indicators */}
              <header className="absolute top-0 left-0 right-0 bg-card/90 backdrop-blur-sm border-b border-border/30 p-4 flex items-center justify-between z-10">
                <div className="flex items-center space-x-3" aria-label="Window controls">
                  <div className="w-3 h-3 rounded-full bg-red-400" aria-hidden="true"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400" aria-hidden="true"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400" aria-hidden="true"></div>
                </div>
                <ModernText variant="caption" className="font-medium font-inter text-xs sm:text-sm flex items-center gap-2">
                  <Lock size={12} className="text-primary" />
                  Renegade Creator Dashboard
                </ModernText>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400">Secure</span>
                </div>
              </header>

              {/* Enhanced Dashboard Content */}
              <div className="relative z-10 p-4 sm:p-6 pt-16 sm:pt-20">
                <div className="flex items-center justify-between mb-6">
                  <ModernHeading level={5} className="font-inter text-sm sm:text-base">Creator Dashboard</ModernHeading>
                  <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-lg text-xs border border-green-500/20 font-medium flex items-center gap-2">
                    <span aria-hidden="true">●</span> 
                    <span>Web3 Connected</span>
                    <Shield size={12} />
                  </div>
                </div>

                {/* Enhanced Stats Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                  <ModernCard variant="filled" size="sm" className="border-l-4 border-l-primary">
                    <ModernText variant="caption" muted className="mb-1 text-xs">Content NFTs</ModernText>
                    <ModernHeading level={3} className="font-orbitron text-lg sm:text-xl">12</ModernHeading>
                    <ModernText variant="small" className="text-green-400 text-xs">+3 this week</ModernText>
                  </ModernCard>
                  <ModernCard variant="filled" size="sm" className="border-l-4 border-l-secondary">
                    <ModernText variant="caption" muted className="mb-1 text-xs">Token Holders</ModernText>
                    <ModernHeading level={3} className="font-orbitron text-lg sm:text-xl">248</ModernHeading>
                    <ModernText variant="small" className="text-green-400 text-xs">+12 today</ModernText>
                  </ModernCard>
                </div>

                {/* Enhanced Revenue Chart with Multi-Chain Data */}
                <ModernCard variant="filled" size="sm" className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <ModernText variant="body" className="font-medium text-sm flex items-center gap-2">
                      Multi-Chain Revenue (30d)
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full" title="Ethereum"></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full" title="Polygon"></div>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full" title="BSC"></div>
                      </div>
                    </ModernText>
                    <ModernText variant="caption" className="text-green-400 font-semibold text-xs">+24%</ModernText>
                  </div>
                  <div className="h-12 sm:h-16 w-full relative">
                    <div className="absolute bottom-0 left-0 right-0">
                      <div className="flex items-end h-10 sm:h-12 space-x-1">
                        {[40, 25, 35, 30, 45, 38, 50, 55, 45, 60, 58, 65].map((height, i) => (
                          <div 
                            key={i} 
                            className="rounded-sm bg-gradient-to-t from-primary to-secondary flex-1"
                            style={{ 
                              height: `${height}%`,
                              opacity: inView ? 1 : 0,
                              transition: `opacity 0.5s ease ${0.3 + (i * 0.05)}s`
                            }}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </ModernCard>

                {/* Enhanced Activity Feed with Web3 Context */}
                <ModernCard variant="filled" size="sm">
                  <ModernText variant="body" className="font-medium p-3 border-b border-border/30 text-sm flex items-center gap-2">
                    <Zap size={16} className="text-primary" />
                    Recent Web3 Activity
                  </ModernText>
                  <div className="p-2">
                    {[
                      { action: "New token holder joined", chain: "ETH", time: "2m" },
                      { action: "Content NFT minted", chain: "MATIC", time: "5m" },
                      { action: "DAO proposal voted", chain: "ETH", time: "12m" }
                    ].map((item, i) => (
                      <div 
                        key={i} 
                        className="flex items-center justify-between p-2 text-xs border-b last:border-0 border-border/20"
                        style={{ 
                          opacity: inView ? 1 : 0,
                          transform: inView ? 'translateY(0)' : 'translateY(10px)',
                          transition: `all 0.5s ease ${0.6 + (i * 0.1)}s`
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${item.chain === 'ETH' ? 'bg-blue-400' : 'bg-purple-400'}`}></div>
                          <ModernText variant="caption" className="text-xs">{item.action}</ModernText>
                        </div>
                        <ModernText variant="small" muted className="text-xs">
                          <time dateTime="2024-01-01T00:00:00Z">{item.time} ago</time>
                        </ModernText>
                      </div>
                    ))}
                  </div>
                </ModernCard>
              </div>
            </ModernCard>
          </div>
        </div>
      </ModernContainer>
    </section>
  );
};
