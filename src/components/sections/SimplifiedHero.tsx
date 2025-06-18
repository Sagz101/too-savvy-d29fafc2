
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
      className="relative min-h-screen pt-32 pb-16 flex items-center justify-center overflow-hidden bg-gradient-to-b from-cosmos-darker via-cosmos-dark to-background"
      aria-label="T00 Savvy - Web3 Creator Platform"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-70"
        style={{
          backgroundImage: `url('/lovable-uploads/8d44053c-6868-4746-9c11-b3fc7aa79589.png')`
        }}
        aria-hidden="true"
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 -z-5 bg-gradient-to-b from-cosmos-darker/60 via-cosmos-dark/50 to-background/70" aria-hidden="true" />

      {/* Subtle Background Effects */}
      <div className="absolute inset-0 -z-1" aria-hidden="true">
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
        {/* Main Content - Centralized */}
        <div className={`space-y-12 max-w-5xl mx-auto transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Title - Large and Prominent with Colorful Gradient */}
          <header className="space-y-6">
            <ModernHeading 
              level={1}
              className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-wider uppercase leading-tight ${animationStarted ? 'animate-hero-entrance' : ''}`}
              as="h1"
            >
              <span className="bg-gradient-to-r from-purple-400 via-cosmos-cyan via-pink-400 to-yellow-400 bg-clip-text text-transparent animate-hero-glow">
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
            className={`text-lg sm:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-medium animate-fade-in-delayed-1`}
          >
            Shape your digital future with T00 Savvy. Create freely, own your work on the blockchain, 
            and grow your community—without barriers.
          </ModernText>

          {/* Get Started Section */}
          <div className={`space-y-8 animate-fade-in-delayed-2`}>
            <ModernHeading 
              level={3}
              className="text-2xl sm:text-3xl font-bold text-cosmos-cyan mb-6"
              as="h3"
            >
              Get Started in 4 Simple Steps
            </ModernHeading>
            
            <ModernText 
              variant="body"
              className="text-white/70 max-w-2xl mx-auto mb-8"
            >
              New to Web3? No problem. We'll guide you through everything step by step.
            </ModernText>

            {/* Onboarding Stepper */}
            <OnboardingStepper currentStep={1} className="mb-8" />

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {/* Step 1 */}
              <div className="bg-card/20 border border-cosmos-border rounded-xl p-6 text-center hover:bg-card/30 transition-all duration-300 backdrop-blur-sm">
                <div className="w-12 h-12 bg-cosmos-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wallet className="w-6 h-6 text-cosmos-cyan" />
                </div>
                <h4 className="text-white font-semibold mb-2">Connect Your Wallet</h4>
                <p className="text-white/60 text-sm">Link your Web3 wallet (like MetaMask) to get started.</p>
              </div>

              {/* Step 2 */}
              <div className="bg-card/20 border border-cosmos-border rounded-xl p-6 text-center hover:bg-card/30 transition-all duration-300 backdrop-blur-sm">
                <div className="w-12 h-12 bg-cosmos-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="w-6 h-6 text-cosmos-cyan" />
                </div>
                <h4 className="text-white font-semibold mb-2">Choose Your Path</h4>
                <p className="text-white/60 text-sm">Video, Podcasting, E-commerce, or Social Content.</p>
              </div>

              {/* Step 3 */}
              <div className="bg-card/20 border border-cosmos-border rounded-xl p-6 text-center hover:bg-card/30 transition-all duration-300 backdrop-blur-sm">
                <div className="w-12 h-12 bg-cosmos-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-cosmos-cyan" />
                </div>
                <h4 className="text-white font-semibold mb-2">Create Your First NFT</h4>
                <p className="text-white/60 text-sm">Turn your content into NFTs with your own prices and royalties.</p>
              </div>

              {/* Step 4 */}
              <div className="bg-card/20 border border-cosmos-border rounded-xl p-6 text-center hover:bg-card/30 transition-all duration-300 backdrop-blur-sm">
                <div className="w-12 h-12 bg-cosmos-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-cosmos-cyan" />
                </div>
                <h4 className="text-white font-semibold mb-2">Build Your Community</h4>
                <p className="text-white/60 text-sm">Use token-gating for exclusive supporter experiences.</p>
              </div>
            </div>

            {/* Pro Tip */}
            <div className="bg-cosmos-cyan/10 border border-cosmos-cyan/30 rounded-xl p-4 max-w-2xl mx-auto backdrop-blur-sm">
              <p className="text-cosmos-cyan text-sm flex items-start gap-2">
                <span className="text-lg">💡</span>
                <span><strong>Pro Tip:</strong> Your wallet is like your digital identity - it keeps your content and earnings secure.</span>
              </p>
            </div>
          </div>

          {/* CTAs - Prominent and Well-Spaced */}
          <div 
            className={`flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 animate-fade-in-delayed-3`}
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

            {/* Tutorial Video Button */}
            <ModernButton
              variant="outline"
              size="lg"
              className="order-3 sm:order-3 border-2 border-cosmos-cyan/50 text-cosmos-cyan hover:bg-cosmos-cyan/10 hover:border-cosmos-cyan transition-all duration-300 min-h-[44px]"
              asChild
            >
              <Link to="/onboarding">
                <Play size={20} aria-hidden="true" />
                <span>Watch Tutorial</span>
              </Link>
            </ModernButton>
            
            {/* Tertiary CTA - Explore */}
            <ModernButton
              variant="outline"
              size="lg"
              className="order-4 sm:order-4 border-2 border-white/30 text-white hover:bg-white/10 hover:border-cosmos-cyan transition-all duration-300 min-h-[44px]"
              asChild
            >
              <Link to="/projects-creator">
                <span>Explore Projects</span>
              </Link>
            </ModernButton>
          </div>

          {/* Subtle Trust Indicator */}
          <div 
            className={`pt-12 animate-fade-in-delayed-4`}
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
