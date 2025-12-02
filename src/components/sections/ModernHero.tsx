import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Globe, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ModernButton } from '@/components/ui/modern-button';
import { ModernCard } from '@/components/ui/modern-card';
import { ModernHeading, ModernText } from '@/components/ui/modern-typography';
import { ModernContainer } from '@/components/ui/modern-container';
import { EnhancedIcon } from '@/components/ui/enhanced-icon';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';
import { useInView } from 'react-intersection-observer';

export const ModernHero: React.FC = () => {
  const { ref: heroRef, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [animationStarted, setAnimationStarted] = useState(false);
  
  useEffect(() => {
    if (inView && !animationStarted) {
      setAnimationStarted(true);
    }
  }, [inView, animationStarted]);

  return (
    <section 
      id="main-content"
      ref={heroRef}
      className="relative min-h-screen pt-24 pb-16 flex items-center overflow-hidden"
      style={{ background: 'hsl(var(--background))' }}
      aria-label="Diminga Platform Introduction"
    >
      {/* Enhanced Background with improved accessibility */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iaHNsKHZhcigtLWJvcmRlcikpIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-30"></div>
      </div>

      <ModernContainer size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Column - Improved structure and hierarchy */}
          <div className={`space-y-8 transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            {/* Brand Logo with better semantic structure */}
            <header className="flex justify-center lg:justify-start">
              <div className="p-6">
                <ModernHeading 
                  level={2} 
                  className={`text-4xl lg:text-5xl font-porscha text-foreground tracking-tight uppercase ${animationStarted ? 'animate-logo-glow' : ''}`}
                  as="h1"
                >
                  DIMINGA
                </ModernHeading>
              </div>
            </header>

            {/* Main Value Proposition with improved hierarchy */}
            <div className="space-y-6">
              <ModernHeading 
                level={1}
                className={`text-4xl md:text-5xl lg:text-6xl font-orbitron font-black leading-tight tracking-wider uppercase hero-tagline ${animationStarted ? 'animate-hero-entrance' : ''}`}
                as="h2"
              >
                <span className={`typewriter-word block sm:inline ${animationStarted ? 'animate-type-1' : ''}`}>
                  Build.
                </span>
                <span className={`typewriter-word block sm:inline ${animationStarted ? 'animate-type-2' : ''}`}>
                  Own.
                </span>
                <span className={`typewriter-word block sm:inline ${animationStarted ? 'animate-type-3' : ''}`}>
                  Prosper.
                </span>
              </ModernHeading>
              
              <ModernText 
                variant="lead"
                className={`max-w-2xl hero-subtext font-inter font-medium ${animationStarted ? 'animate-subtext-slide' : ''}`}
                muted
              >
                Shape your digital future with Diminga. Create freely, own your work on the blockchain, and grow your community—without barriers.
              </ModernText>
            </div>

            {/* Value Proposition Cards with improved accessibility */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4" role="list" aria-label="Platform benefits">
              {[
                { icon: Sparkles, title: "True Ownership", desc: "You control your content, data, and digital identity—forever.", delay: "3.2s" },
                { icon: Globe, title: "Smart Monetization", desc: "Flexible, token-native tools to turn creativity into income.", delay: "3.5s" },
                { icon: ArrowRight, title: "Vibrant Community", desc: "Build loyal, token-powered audiences who grow with you.", delay: "3.8s" }
              ].map((item, index) => (
                <ModernCard 
                  key={index}
                  variant="elevated"
                  size="sm"
                  interactive
                  className="feature-card text-center transition-all duration-700"
                  style={{ animationDelay: item.delay }}
                  role="listitem"
                  tabIndex={0}
                  aria-label={`${item.title}: ${item.desc}`}
                >
                  <div className="flex justify-center mb-3">
                    <EnhancedIcon 
                      icon={item.icon} 
                      variant={index === 0 ? "primary" : index === 1 ? "warning" : "secondary"} 
                      size="md" 
                      animated 
                      aria-hidden="true"
                    />
                  </div>
                  <ModernHeading level={6} className="mb-2 font-inter">
                    {item.title}
                  </ModernHeading>
                  <ModernText variant="caption" muted className="font-inter leading-relaxed">
                    {item.desc}
                  </ModernText>
                </ModernCard>
              ))}
            </div>

            {/* Enhanced CTA Section with improved accessibility and mobile optimization */}
            <div className="space-y-6 pt-4" role="group" aria-label="Get started actions">
              {/* Primary Action */}
              <div className="flex justify-center">
                <ModernButton
                  variant="primary"
                  size="lg"
                  className={`shadow-xl px-8 py-4 text-lg font-semibold ${animationStarted ? 'animate-cta-pulse' : ''}`}
                  asChild
                >
                  <Link to="/onboarding" aria-describedby="primary-cta-description" className="flex items-center justify-center gap-3">
                    <Sparkles size={24} aria-hidden="true" />
                    Start Creating Now
                    <ArrowRight size={24} aria-hidden="true" />
                  </Link>
                </ModernButton>
              </div>
              
              {/* Secondary Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="w-full sm:w-auto">
                  <WalletConnectButton />
                </div>
                
                <ModernButton
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto min-w-[160px]"
                  asChild
                >
                  <Link to="/onboarding" className="flex items-center justify-center gap-2">
                    <UserPlus size={20} aria-hidden="true" />
                    New User Guide
                  </Link>
                </ModernButton>
              </div>

              {/* Interactive Tutorial Trigger */}
              <div className="text-center">
                <ModernButton
                  variant="ghost" 
                  className="text-cyan-400 hover:text-cyan-300 underline-offset-4 hover:underline"
                  onClick={() => {
                    // This would trigger the tutorial - implementation would be added to parent component
                    console.log('Open interactive tutorial');
                  }}
                >
                  Take the 2-minute platform tour →
                </ModernButton>
              </div>
              
              <span id="primary-cta-description" className="sr-only">
                Navigate to the onboarding page to get started with Diminga platform
              </span>
            </div>
          </div>

          {/* Dashboard Preview with improved structure */}
          <div className={`relative transition-all duration-1000 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <ModernCard 
              variant="elevated"
              size="lg"
              className="relative overflow-hidden min-h-[500px] bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl"
              role="img"
              aria-label="Diminga Creator Dashboard Preview"
            >
              {/* Dashboard Header with better semantic structure */}
              <header className="absolute top-0 left-0 right-0 bg-card/90 backdrop-blur-sm border-b border-border/30 p-4 flex items-center justify-between z-10">
                <div className="flex items-center space-x-3" aria-label="Window controls">
                  <div className="w-3 h-3 rounded-full bg-red-400" aria-hidden="true"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400" aria-hidden="true"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400" aria-hidden="true"></div>
                </div>
                <ModernText variant="caption" className="font-medium font-inter">
                  Diminga Creator Dashboard
                </ModernText>
                <div className="w-5" aria-hidden="true"></div>
              </header>

              {/* Dashboard Content - keeping existing implementation */}
              <div className="relative z-10 p-6 pt-20">
                <div className="flex items-center justify-between mb-6">
                  <ModernHeading level={5} className="font-inter">Creator Dashboard</ModernHeading>
                  <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-lg text-sm border border-green-500/20 font-medium">
                    <span aria-hidden="true">●</span> Connected
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6" role="group" aria-label="Creator statistics">
                  <ModernCard variant="filled" size="sm">
                    <ModernText variant="caption" muted className="mb-1">Content NFTs</ModernText>
                    <ModernHeading level={3} className="font-orbitron" aria-label="12 Content NFTs">12</ModernHeading>
                  </ModernCard>
                  <ModernCard variant="filled" size="sm">
                    <ModernText variant="caption" muted className="mb-1">Subscribers</ModernText>
                    <ModernHeading level={3} className="font-orbitron" aria-label="248 Subscribers">248</ModernHeading>
                  </ModernCard>
                </div>

                <ModernCard variant="filled" size="sm" className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <ModernText variant="body" className="font-medium">Revenue (30d)</ModernText>
                    <ModernText variant="caption" className="text-green-400 font-semibold" aria-label="24% increase">+24%</ModernText>
                  </div>
                  <div className="h-16 w-full relative" role="img" aria-label="Revenue chart showing upward trend">
                    <div className="absolute bottom-0 left-0 right-0">
                      <div className="flex items-end h-12 space-x-1">
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
                  <ModernText variant="body" className="font-medium p-3 border-b border-border/30">
                    Recent Activity
                  </ModernText>
                  <div className="p-2" role="list" aria-label="Recent activity feed">
                    {["New subscriber joined", "Content NFT sold for $ETH 0.15", "Community message"].map((item, i) => (
                      <div 
                        key={i} 
                        className="flex items-center justify-between p-2 text-sm border-b last:border-0 border-border/20"
                        style={{ 
                          opacity: inView ? 1 : 0,
                          transform: inView ? 'translateY(0)' : 'translateY(10px)',
                          transition: `all 0.5s ease ${0.6 + (i * 0.1)}s`
                        }}
                        role="listitem"
                      >
                        <ModernText variant="caption">{item}</ModernText>
                        <ModernText variant="small" muted>
                          <time dateTime="2024-01-01T00:00:00Z">Just now</time>
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
