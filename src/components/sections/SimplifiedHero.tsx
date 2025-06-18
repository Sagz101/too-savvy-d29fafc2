
import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ModernButton } from '@/components/ui/modern-button';
import { ModernHeading, ModernText } from '@/components/ui/modern-typography';
import { ModernContainer } from '@/components/ui/modern-container';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';
import { useInView } from 'react-intersection-observer';

export const SimplifiedHero: React.FC = () => {
  const { ref: heroRef, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [animationStarted, setAnimationStarted] = useState(false);
  
  useEffect(() => {
    if (inView && !animationStarted) {
      setAnimationStarted(true);
    }
  }, [inView, animationStarted]);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen pt-32 pb-16 flex items-center justify-center overflow-hidden bg-gradient-to-b from-cosmos-darker via-cosmos-dark to-background"
      aria-label="T00 Savvy - Web3 Creator Platform"
    >
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {/* Particle effect */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-cosmos-cyan/20 animate-pulse"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 4 + 3}s`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cosmos-cyan/5 to-transparent"></div>
      </div>

      <ModernContainer size="lg" className="text-center">
        {/* Main Content - Centralized */}
        <div className={`space-y-8 max-w-4xl mx-auto transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Title - Large and Prominent */}
          <header className="space-y-6">
            <ModernHeading 
              level={1}
              className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-wider uppercase leading-tight ${animationStarted ? 'animate-hero-entrance' : ''}`}
              as="h1"
            >
              <span className="bg-gradient-to-r from-white via-cosmos-cyan to-white bg-clip-text text-transparent">
                T00 SAVVY
              </span>
            </ModernHeading>
            
            {/* Tagline */}
            <ModernHeading 
              level={2}
              className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-white/90 ${animationStarted ? 'animate-subtext-slide' : ''}`}
              as="h2"
            >
              Create. Own. Thrive.
            </ModernHeading>
          </header>

          {/* Description - Clear and Readable */}
          <ModernText 
            variant="lead"
            className={`text-lg sm:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-medium ${animationStarted ? 'animate-fade-in' : ''}`}
            style={{ animationDelay: '0.3s' }}
          >
            Shape your digital future with T00 Savvy. Create freely, own your work on the blockchain, 
            and grow your community—without barriers.
          </ModernText>

          {/* CTAs - Prominent and Well-Spaced */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 ${animationStarted ? 'animate-fade-in' : ''}`}
            style={{ animationDelay: '0.6s' }}
            role="group" 
            aria-label="Get started actions"
          >
            {/* Primary CTA - Connect Wallet (Most Important) */}
            <div className="order-1 sm:order-1">
              <WalletConnectButton />
            </div>
            
            {/* Secondary CTA - Start Creating */}
            <ModernButton
              variant="primary"
              size="lg"
              className="order-2 sm:order-2 bg-cosmos-cyan hover:bg-cosmos-cyan/80 border-2 border-cosmos-cyan hover:border-white/50 shadow-2xl hover:shadow-cosmos-cyan/25 transition-all duration-300 hover:scale-105 min-h-[44px]"
              asChild
            >
              <Link to="/video-studio">
                <Sparkles size={20} aria-hidden="true" />
                <span>Start Creating</span>
                <ArrowRight size={20} aria-hidden="true" />
              </Link>
            </ModernButton>
            
            {/* Tertiary CTA - Explore */}
            <ModernButton
              variant="outline"
              size="lg"
              className="order-3 sm:order-3 border-2 border-white/30 text-white hover:bg-white/10 hover:border-cosmos-cyan transition-all duration-300 min-h-[44px]"
              asChild
            >
              <Link to="/projects-creator">
                <span>Explore Projects</span>
              </Link>
            </ModernButton>
          </div>

          {/* Subtle Trust Indicator */}
          <div 
            className={`pt-12 ${animationStarted ? 'animate-fade-in' : ''}`}
            style={{ animationDelay: '0.9s' }}
          >
            <ModernText variant="caption" className="text-white/60 text-sm flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Trusted by 10,000+ Web3 creators</span>
            </ModernText>
          </div>
        </div>
      </ModernContainer>
    </section>
  );
};
