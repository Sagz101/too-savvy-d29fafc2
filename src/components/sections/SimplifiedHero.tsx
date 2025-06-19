
import React, { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Wallet, Play, Video, Headphones, ShoppingBag, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ModernButton } from '@/components/ui/modern-button';
import { ModernHeading, ModernText } from '@/components/ui/modern-typography';
import { ModernContainer } from '@/components/ui/modern-container';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';
import { OnboardingStepper } from '@/components/ui/onboarding-stepper';
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
      className="hero relative min-h-screen pt-32 pb-8 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('/lovable-uploads/3f0974d3-47df-4618-ab1a-75c7edc562f9.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      aria-label="T00 Savvy - Web3 Creator Platform"
    >
      {/* Dark overlay for better text readability */}
      <div 
        className="absolute inset-0 z-1"
        style={{
          background: 'rgba(0, 0, 0, 0.6)'
        }}
        aria-hidden="true" 
      />

      {/* Subtle Background Effects */}
      <div className="absolute inset-0 z-2" aria-hidden="true">
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

      <ModernContainer size="lg" className="text-center relative z-10">
        {/* Main Content - Direct integration without constraining containers */}
        <div className={`space-y-3 transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Title - Directly integrated without constraining containers */}
          <ModernHeading 
            level={1}
            className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-wider uppercase leading-tight p-0 max-w-none ${animationStarted ? 'animate-hero-entrance' : ''}`}
            as="h1"
            style={{
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
            }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-cosmos-cyan via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              T00 SAVVY
            </span>
          </ModernHeading>
          
          {/* Tagline - Directly under title */}
          <ModernHeading 
            level={2}
            className={`text-lg sm:text-xl lg:text-2xl font-bold text-white/90 ${animationStarted ? 'animate-subtext-slide' : ''}`}
            as="h2"
            style={{
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}
          >
            Create. Own. Thrive.
          </ModernHeading>

          {/* Description - Clear and Readable */}
          <ModernText 
            variant="lead"
            className={`text-sm sm:text-base lg:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed font-medium animate-fade-in-delayed-1`}
            style={{
              textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
            }}
          >
            Shape your digital future with T00 Savvy. Create freely, own your work on the blockchain, 
            and grow your community—without barriers.
          </ModernText>

          {/* Get Started Section - More Compact */}
          <div className={`space-y-2 animate-fade-in-delayed-2`}>
            <ModernHeading 
              level={3}
              className="text-lg sm:text-xl font-bold text-cosmos-cyan mb-1"
              as="h3"
            >
              Get Started in 4 Simple Steps
            </ModernHeading>
            
            <ModernText 
              variant="body"
              className="text-white/70 max-w-2xl mx-auto mb-2 text-xs"
            >
              New to Web3? No problem. We'll guide you through everything step by step.
            </ModernText>

            {/* Onboarding Stepper - Compact */}
            <OnboardingStepper currentStep={1} className="mb-2" />

            {/* Steps Grid - More Compact */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-2">
              {/* Step 1 */}
              <div className="bg-card/20 border border-cosmos-border rounded-lg p-2 text-center hover:bg-card/30 transition-all duration-300 backdrop-blur-sm">
                <div className="w-6 h-6 bg-cosmos-cyan/20 rounded-full flex items-center justify-center mx-auto mb-1">
                  <Wallet className="w-3 h-3 text-cosmos-cyan" />
                </div>
                <h4 className="text-white font-semibold mb-1 text-xs">Connect Your Wallet</h4>
                <p className="text-white/60 text-xs">Link your Web3 wallet (like MetaMask) to get started.</p>
              </div>

              {/* Step 2 */}
              <div className="bg-card/20 border border-cosmos-border rounded-lg p-2 text-center hover:bg-card/30 transition-all duration-300 backdrop-blur-sm">
                <div className="w-6 h-6 bg-cosmos-cyan/20 rounded-full flex items-center justify-center mx-auto mb-1">
                  <Video className="w-3 h-3 text-cosmos-cyan" />
                </div>
                <h4 className="text-white font-semibold mb-1 text-xs">Choose Your Path</h4>
                <p className="text-white/60 text-xs">Video, Podcasting, E-commerce, or Social Content.</p>
              </div>

              {/* Step 3 */}
              <div className="bg-card/20 border border-cosmos-border rounded-lg p-2 text-center hover:bg-card/30 transition-all duration-300 backdrop-blur-sm">
                <div className="w-6 h-6 bg-cosmos-cyan/20 rounded-full flex items-center justify-center mx-auto mb-1">
                  <Sparkles className="w-3 h-3 text-cosmos-cyan" />
                </div>
                <h4 className="text-white font-semibold mb-1 text-xs">Create Your First NFT</h4>
                <p className="text-white/60 text-xs">Turn your content into NFTs with your own prices and royalties.</p>
              </div>

              {/* Step 4 */}
              <div className="bg-card/20 border border-cosmos-border rounded-lg p-2 text-center hover:bg-card/30 transition-all duration-300 backdrop-blur-sm">
                <div className="w-6 h-6 bg-cosmos-cyan/20 rounded-full flex items-center justify-center mx-auto mb-1">
                  <Users className="w-3 h-3 text-cosmos-cyan" />
                </div>
                <h4 className="text-white font-semibold mb-1 text-xs">Build Your Community</h4>
                <p className="text-white/60 text-xs">Use token-gating for exclusive supporter experiences.</p>
              </div>
            </div>

            {/* Pro Tip - More Compact */}
            <div className="bg-cosmos-cyan/10 border border-cosmos-cyan/30 rounded-lg p-2 max-w-2xl mx-auto backdrop-blur-sm">
              <p className="text-cosmos-cyan text-xs flex items-start gap-2">
                <span className="text-sm">💡</span>
                <span><strong>Pro Tip:</strong> Your wallet is like your digital identity - it keeps your content and earnings secure.</span>
              </p>
            </div>
          </div>

          {/* CTAs - Compact and Well-Spaced */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-2 pt-2 animate-fade-in-delayed-3`}
            role="group" 
            aria-label="Get started actions"
          >
            {/* Primary CTA - Connect Wallet */}
            <div className="order-1 sm:order-1">
              <WalletConnectButton />
            </div>
            
            {/* Secondary CTA - Start Creating */}
            <ModernButton
              variant="primary"
              size="sm"
              className="order-2 sm:order-2 bg-cosmos-cyan hover:bg-cosmos-cyan/80 border-2 border-cosmos-cyan hover:border-white/50 shadow-2xl hover:shadow-cosmos-cyan/25 transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link to="/video-studio">
                <Sparkles size={14} aria-hidden="true" />
                <span>Start Creating</span>
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </ModernButton>

            {/* Tutorial Video Button */}
            <ModernButton
              variant="outline"
              size="sm"
              className="order-3 sm:order-3 border-2 border-cosmos-cyan/50 text-cosmos-cyan hover:bg-cosmos-cyan/10 hover:border-cosmos-cyan transition-all duration-300"
              asChild
            >
              <Link to="/onboarding">
                <Play size={14} aria-hidden="true" />
                <span>Watch Tutorial</span>
              </Link>
            </ModernButton>
            
            {/* Tertiary CTA - Explore */}
            <ModernButton
              variant="outline"
              size="sm"
              className="order-4 sm:order-4 border-2 border-white/30 text-white hover:bg-white/10 hover:border-cosmos-cyan transition-all duration-300"
              asChild
            >
              <Link to="/projects-creator">
                <span>Explore Projects</span>
              </Link>
            </ModernButton>
          </div>

          {/* Subtle Trust Indicator - Compact */}
          <div 
            className={`pt-2 animate-fade-in-delayed-4`}
          >
            <ModernText variant="caption" className="text-white/60 text-xs flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Trusted by 10,000+ Web3 creators</span>
            </ModernText>
          </div>
        </div>
      </ModernContainer>
    </section>
  );
};
