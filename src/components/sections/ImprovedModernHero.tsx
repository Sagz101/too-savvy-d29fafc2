import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Globe, Shield, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ModernButton } from '@/components/ui/modern-button';
import { ModernCard } from '@/components/ui/modern-card';
import { ModernHeading, ModernText } from '@/components/ui/modern-typography';
import { ModernContainer } from '@/components/ui/modern-container';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';
import { OnboardingStepper } from '@/components/ui/onboarding-stepper';
import { Web3TrustSignals } from '@/components/ui/web3-trust-signals';
import { useInView } from 'react-intersection-observer';

export const ImprovedModernHero: React.FC = () => {
  const { ref: heroRef, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [animationStarted, setAnimationStarted] = useState(false);
  const [currentOnboardingStep, setCurrentOnboardingStep] = useState(1);
  
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

  const web3Benefits = [
    { 
      icon: Shield, 
      title: "True Ownership", 
      desc: "Your content, data, and identity—secured on blockchain forever.", 
      highlight: "🔐 You Own It",
      color: "primary"
    },
    { 
      icon: Zap, 
      title: "Smart Monetization", 
      desc: "Token-native tools that turn creativity into sustainable income.", 
      highlight: "💰 Earn More",
      color: "warning"
    },
    { 
      icon: Users, 
      title: "Decentralized Community", 
      desc: "Build loyal audiences who grow with you through governance tokens.", 
      highlight: "🌐 Community-Driven",
      color: "secondary"
    }
  ];

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen pt-20 pb-8 sm:pt-24 sm:pb-16 flex items-center overflow-hidden"
      style={{ background: 'hsl(var(--background))' }}
      aria-label="T00 Savvy - Web3 Creator Platform"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iaHNsKHZhcigtLWJvcmRlcikpIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-30"></div>
      </div>

      <ModernContainer size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content Column */}
          <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
            {/* Linear Exposure: Step 1 - Brand Introduction */}
            <header className="text-center lg:text-left">
              <ModernHeading 
                level={2} 
                className={`text-3xl sm:text-4xl lg:text-5xl font-porscha text-foreground tracking-tight uppercase mb-4 ${animationStarted ? 'animate-logo-glow' : ''}`}
                as="h1"
              >
                T00 SAVVY
              </ModernHeading>
              <div className="text-sm text-primary font-medium mb-4">
                🚀 The Future of Creator Economy is Here
              </div>
            </header>

            {/* Linear Exposure: Step 2 - Onboarding Progress */}
            <div className="py-4">
              <OnboardingStepper currentStep={currentOnboardingStep} />
            </div>

            {/* Linear Exposure: Step 3 - Main Value Proposition */}
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
                Shape your digital future with T00 Savvy. Create freely, own your work on the blockchain, and grow your community—without barriers or intermediaries.
              </ModernText>
            </div>

            {/* Linear Exposure: Step 4 - Key Web3 Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-3 gap-4" role="list" aria-label="Web3 Platform Benefits">
              {web3Benefits.map((benefit, index) => (
                <ModernCard 
                  key={index}
                  variant="elevated"
                  size="sm"
                  interactive
                  className="text-center transition-all duration-700 hover:scale-105"
                  style={{ animationDelay: `${3.2 + (index * 0.3)}s` }}
                  role="listitem"
                  tabIndex={0}
                >
                  <div className="flex justify-center mb-3">
                    <div className={`w-12 h-12 rounded-xl bg-${benefit.color}/20 flex items-center justify-center`}>
                      <benefit.icon size={24} className={`text-${benefit.color}`} />
                    </div>
                  </div>
                  <div className={`text-xs font-bold mb-2 text-${benefit.color}`}>
                    {benefit.highlight}
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

            {/* Linear Exposure: Step 5 - Trust Signals */}
            <div className="py-4">
              <ModernText variant="caption" className="text-center lg:text-left mb-4 font-medium">
                ✅ Trusted by 10,000+ Web3 creators worldwide
              </ModernText>
              <Web3TrustSignals />
            </div>

            {/* Linear Exposure: Step 6 - Primary Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4" role="group" aria-label="Get started actions">
              <ModernButton
                variant="primary"
                size="lg"
                className={`w-full sm:w-auto shadow-xl touch-target ${animationStarted ? 'animate-cta-pulse' : ''}`}
                asChild
              >
                <Link to="/video-studio" className="flex items-center justify-center gap-2">
                  <Sparkles size={20} aria-hidden="true" />
                  Start Building Now
                  <ArrowRight size={20} aria-hidden="true" />
                </Link>
              </ModernButton>
              
              <ModernButton
                variant="outline"
                size="lg"
                className="w-full sm:w-auto touch-target"
                asChild
              >
                <Link to="/projects-creator" className="flex items-center justify-center gap-2">
                  <Globe size={20} aria-hidden="true" />
                  Explore Projects
                </Link>
              </ModernButton>
              
              <div className="w-full sm:w-auto">
                <WalletConnectButton />
              </div>
            </div>

            {/* Mobile-specific call-to-action */}
            <div className="block sm:hidden text-center text-xs text-muted-foreground py-4">
              <p>📱 Optimized for mobile Web3 wallets</p>
              <p>🔗 Scan QR codes to connect instantly</p>
            </div>
          </div>

          {/* Dashboard Preview */}
          <div className={`relative transition-all duration-1000 order-first lg:order-last ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <ModernCard 
              variant="elevated"
              size="lg"
              className="relative overflow-hidden min-h-[400px] sm:min-h-[500px] bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl"
              role="img"
              aria-label="T00 Savvy Creator Dashboard Preview"
            >
              {/* Dashboard Header with better semantic structure */}
              <header className="absolute top-0 left-0 right-0 bg-card/90 backdrop-blur-sm border-b border-border/30 p-4 flex items-center justify-between z-10">
                <div className="flex items-center space-x-3" aria-label="Window controls">
                  <div className="w-3 h-3 rounded-full bg-red-400" aria-hidden="true"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400" aria-hidden="true"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400" aria-hidden="true"></div>
                </div>
                <ModernText variant="caption" className="font-medium font-inter text-xs sm:text-sm">
                  T00 Savvy Creator Dashboard
                </ModernText>
                <div className="w-5" aria-hidden="true"></div>
              </header>

              {/* Dashboard Content with improved data presentation */}
              <div className="relative z-10 p-4 sm:p-6 pt-16 sm:pt-20">
                <div className="flex items-center justify-between mb-6">
                  <ModernHeading level={5} className="font-inter text-sm sm:text-base">Creator Dashboard</ModernHeading>
                  <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-lg text-xs border border-green-500/20 font-medium">
                    <span aria-hidden="true">●</span> Web3 Connected
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                  <ModernCard variant="filled" size="sm">
                    <ModernText variant="caption" muted className="mb-1 text-xs">Content NFTs</ModernText>
                    <ModernHeading level={3} className="font-orbitron text-lg sm:text-xl">12</ModernHeading>
                  </ModernCard>
                  <ModernCard variant="filled" size="sm">
                    <ModernText variant="caption" muted className="mb-1 text-xs">Token Holders</ModernText>
                    <ModernHeading level={3} className="font-orbitron text-lg sm:text-xl">248</ModernHeading>
                  </ModernCard>
                </div>

                <ModernCard variant="filled" size="sm" className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <ModernText variant="body" className="font-medium text-sm">Revenue (30d)</ModernText>
                    <ModernText variant="caption" className="text-green-400 font-semibold text-xs">+24%</ModernText>
                  </div>
                  <div className="h-12 sm:h-16 w-full relative">
                    <div className="absolute bottom-0 left-0 right-0">
                      <div className="flex items-end h-10 sm:h-12 space-x-1">
                        {[40, 25, 35, 30, 45, 38, 50, 55, 45, 60, 58, 65].map((height, i) => (
                          <div 
                            key={i} 
                            className="rounded-sm bg-primary/60 flex-1"
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

                <ModernCard variant="filled" size="sm">
                  <ModernText variant="body" className="font-medium p-3 border-b border-border/30 text-sm">
                    Recent Web3 Activity
                  </ModernText>
                  <div className="p-2">
                    {["New token holder joined", "Content NFT minted for 0.15 ETH", "DAO proposal voted"].map((item, i) => (
                      <div 
                        key={i} 
                        className="flex items-center justify-between p-2 text-xs border-b last:border-0 border-border/20"
                        style={{ 
                          opacity: inView ? 1 : 0,
                          transform: inView ? 'translateY(0)' : 'translateY(10px)',
                          transition: `all 0.5s ease ${0.6 + (i * 0.1)}s`
                        }}
                      >
                        <ModernText variant="caption" className="text-xs">{item}</ModernText>
                        <ModernText variant="small" muted className="text-xs">
                          <time dateTime="2024-01-01T00:00:00Z">2m ago</time>
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
