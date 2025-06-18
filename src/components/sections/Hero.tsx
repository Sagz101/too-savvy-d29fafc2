
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { WalletButton } from "@/components/ui/wallet-button";
import { ArrowRight, Key, DollarSign, Users, Sparkles, Shield, Globe } from 'lucide-react';
import { AnimatedGradient } from "@/components/ui/animated-gradient";
import { AnimatedText } from "@/components/ui/animated-text";
import { EnhancedIcon } from "@/components/ui/enhanced-icon";
import { ProgressIndicator } from "@/components/ui/progress-indicator";
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const { ref: contentRef, inView: contentInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: ctaRef, inView: ctaInView } = useInView({ threshold: 0.1, triggerOnce: true });
  
  const [animationStarted, setAnimationStarted] = useState(false);
  const journeySteps = ["Connect", "Create", "Monetize", "Thrive"];
  
  useEffect(() => {
    if (contentInView && !animationStarted) {
      setAnimationStarted(true);
    }
  }, [contentInView, animationStarted]);
  
  return (
    <section className="relative min-h-screen pt-24 pb-16 flex items-center hero-section" style={{ background: 'hsl(var(--background))' }}>
      {/* Enhanced Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/20"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iaHNsKHZhcigtLWJvcmRlcikpIiBzdHJva2Utd2lkdGg9IjAuNSIgb3BhY2l0eT0iMC4yIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-20"></div>
      </div>
      
      {/* Background Elements */}
      <AnimatedGradient className="opacity-10" />
      
      {/* Enhanced particle effect with Web3 styling */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <div className="particles-container">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full animate-float web3-particle ${animationStarted ? 'animate-web3-float' : ''}`}
              style={{
                background: `linear-gradient(45deg, hsl(var(--primary))/0.4, rgba(0, 209, 255, 0.3))`,
                width: `${Math.random() * 6 + 3}px`,
                height: `${Math.random() * 6 + 3}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.6 + 0.2,
                animationDuration: `${Math.random() * 30 + 25}s`,
                animationDelay: `${Math.random() * 8}s`,
                boxShadow: `0 0 15px rgba(0, 209, 255, 0.4)`,
              }}
            />
          ))}
        </div>
        
        {/* Blockchain nodes effect */}
        <div className="blockchain-nodes">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute blockchain-node ${animationStarted ? 'animate-node-pulse' : ''}`}
              style={{
                top: `${20 + (i * 10)}%`,
                left: `${10 + (i * 12)}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text Content */}
          <div 
            ref={contentRef}
            className={`transition-all duration-1000 ${contentInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            {/* Logo Section */}
            <div className="mb-12 flex justify-center lg:justify-start">
              <div className="p-8">
                <h2 className={`text-5xl font-bold font-porscha text-foreground tracking-tight uppercase ${animationStarted ? 'animate-logo-glow' : ''}`}>
                  T00 SAVVY
                </h2>
              </div>
            </div>

            <div className="mb-8">
              <ProgressIndicator 
                steps={journeySteps} 
                currentStep={0} 
                variant="mini" 
                className="justify-center lg:justify-start"
              />
            </div>

            {/* Enhanced Hero Tagline with animated typewriter effect */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black font-orbitron leading-tight mb-8 tracking-wider uppercase hero-tagline">
              <span className={`typewriter-word ${animationStarted ? 'animate-type-1' : ''}`}>
                Build.
              </span>
              <span className={`typewriter-word ${animationStarted ? 'animate-type-2' : ''}`}>
                Own.
              </span>
              <span className={`typewriter-word ${animationStarted ? 'animate-type-3' : ''}`}>
                Prosper.
              </span>
            </h1>
            
            {/* Enhanced Subtext with fade-in animation */}
            <p className={`text-xl md:text-2xl font-inter text-muted-foreground mb-12 max-w-2xl leading-relaxed font-medium hero-subtext ${animationStarted ? 'animate-subtext-slide' : ''}`}>
              Shape your digital future with T00 Savvy. Create freely, own your work on the blockchain, and grow your community—without barriers.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="grok-card grok-card-hover p-8 feature-card">
                <div className="flex justify-center mb-6">
                  <EnhancedIcon icon={Key} variant="primary" size="md" animated />
                </div>
                <h3 className="font-semibold text-xl mb-3 text-center font-inter">Ownership</h3>
                <p className="text-muted-foreground text-center leading-relaxed font-inter">You control your content, data, and digital identity—forever.</p>
              </div>
              
              <div className="grok-card grok-card-hover p-8 feature-card">
                <div className="flex justify-center mb-6">
                  <EnhancedIcon icon={DollarSign} variant="warning" size="md" animated />
                </div>
                <h3 className="font-semibold text-xl mb-3 text-center font-inter">Monetization</h3>
                <p className="text-muted-foreground text-center leading-relaxed font-inter">Flexible, token-native tools to turn creativity into income.</p>
              </div>
              
              <div className="grok-card grok-card-hover p-8 feature-card">
                <div className="flex justify-center mb-6">
                  <EnhancedIcon icon={Users} variant="secondary" size="md" animated />
                </div>
                <h3 className="font-semibold text-xl mb-3 text-center font-inter">Community</h3>
                <p className="text-muted-foreground text-center leading-relaxed font-inter">Build loyal, token-powered audiences who grow with you.</p>
              </div>
            </div>
            
            {/* Enhanced CTA Section with pulse animation */}
            <div 
              ref={ctaRef} 
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <Button 
                size="lg" 
                className={`hero-cta-primary text-lg px-10 py-4 font-inter font-semibold transition-all duration-500 transform ${ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${animationStarted ? 'animate-cta-pulse' : ''}`}
                style={{ 
                  transitionDelay: '0.6s',
                  background: 'linear-gradient(90deg, #00D1FF, #7B00FF)',
                  boxShadow: '0 4px 15px rgba(0, 209, 255, 0.3)'
                }}
                asChild
              >
                <Link to="/video-studio">
                  <span className="flex items-center">
                    <Sparkles size={20} className="mr-3" />
                    Start Building Now <ArrowRight size={20} className="ml-3" />
                  </span>
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                className={`grok-button-secondary text-lg px-10 py-4 font-inter font-semibold transition-all duration-500 transform ${ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: '0.7s' }}
                asChild
              >
                <Link to="/projects-creator">
                  <span className="flex items-center">
                    <Globe size={20} className="mr-3" />
                    Launch Projects
                  </span>
                </Link>
              </Button>
              
              <div 
                className={`transition-all duration-300 transform ${ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: '0.8s' }}
              >
                <WalletButton />
              </div>
            </div>
          </div>
          
          {/* Right Column: Interactive Dashboard Preview with Background Image */}
          <div 
            className={`relative grok-card grok-soft-glow overflow-hidden transition-all duration-1000 ${contentInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            style={{ minHeight: '500px' }}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url('/lovable-uploads/7166ee6a-d5f6-4336-a75b-ebb062fdec25.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100%',
                aspectRatio: '16/9'
              }}
            />
            
            {/* Dashboard UI Mockup */}
            <div className="absolute top-0 left-0 right-0 bg-card/80 backdrop-blur-sm border-b border-border/50 p-4 flex items-center justify-between z-10">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-sm text-foreground font-medium font-inter">T00 Savvy Creator Dashboard</div>
              <div className="w-5"></div>
            </div>
            
            <div className="relative z-10 p-8 pt-20">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-semibold font-inter">Creator Dashboard</h3>
                <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-xl text-sm border border-green-500/20 font-inter">Connected</div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="grok-card p-6 bg-card/80 backdrop-blur-sm">
                  <div className="text-sm text-muted-foreground mb-2 font-inter">Content NFTs</div>
                  <div className="text-3xl font-bold font-orbitron">12</div>
                </div>
                <div className="grok-card p-6 bg-card/80 backdrop-blur-sm">
                  <div className="text-sm text-muted-foreground mb-2 font-inter">Subscribers</div>
                  <div className="text-3xl font-bold font-orbitron">248</div>
                </div>
              </div>
              
              <div className="grok-card p-6 mb-8 bg-card/80 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-base font-medium font-inter">Revenue (30d)</div>
                  <div className="text-sm text-green-400 font-semibold font-inter">+24%</div>
                </div>
                <div className="h-20 w-full relative">
                  <div className="absolute bottom-0 left-0 right-0">
                    <div className="flex items-end h-16 space-x-1">
                      {[40, 25, 35, 30, 45, 38, 50, 55, 45, 60, 58, 65].map((height, i) => (
                        <div 
                          key={i} 
                          className="rounded-sm bg-primary/60"
                          style={{ 
                            height: `${height}%`, 
                            width: '100%',
                            opacity: contentInView ? 1 : 0,
                            transition: `opacity 0.5s ease ${0.3 + (i * 0.05)}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grok-card bg-card/80 backdrop-blur-sm">
                <div className="text-base font-medium p-4 border-b border-border/50 font-inter">Recent Activity</div>
                <div className="p-2">
                  {["New subscriber joined", "Content NFT sold for $ETH 0.15", "Community message"].map((item, i) => (
                    <div 
                      key={i} 
                      className="flex items-center justify-between p-3 text-sm border-b last:border-0 border-border/30"
                      style={{ 
                        opacity: contentInView ? 1 : 0,
                        transform: contentInView ? 'translateY(0)' : 'translateY(10px)',
                        transition: `all 0.5s ease ${0.6 + (i * 0.1)}s`
                      }}
                    >
                      <div className="text-foreground font-inter">{item}</div>
                      <div className="text-muted-foreground text-xs font-inter">Just now</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
