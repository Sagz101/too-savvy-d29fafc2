
import React, { useState, useEffect } from 'react';
import { StickyNavigation } from '@/components/ui/sticky-navigation';
import { EnhancedHeroSection } from '@/components/ui/enhanced-hero-section';
import { ConsolidatedStats } from '@/components/ui/consolidated-stats';
import { ModularFeatureCards } from '@/components/sections/ModularFeatureCards';
import { InteractiveOnboarding } from '@/components/sections/InteractiveOnboarding';
import { TrustCertifications } from '@/components/sections/TrustCertifications';
import { CreatorSpotlight } from '@/components/sections/CreatorSpotlight';
import { PremiumFeatures } from '@/components/sections/PremiumFeatures';
import { FloatingCTA } from '@/components/ui/floating-cta';
import { Footer } from '@/components/layout/Footer';
import { MobileBottomNavigation } from '@/components/ui/mobile-optimized-navigation';
import { useAuth } from '@/components/auth/AuthProvider';
import { useActiveSection } from '@/hooks/useActiveSection';

const IndexRefactored = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const { session, user } = useAuth();
  
  const sectionIds = ['hero', 'stats', 'features', 'premium', 'onboarding', 'trust', 'creators'];
  const currentSection = useActiveSection(sectionIds);

  const handleInterestSelection = (interests: string[]) => {
    setSelectedInterests(interests);
    console.log('Selected interests:', interests);
  };

  // Add smooth scrolling behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black relative overflow-x-hidden">
      {/* Parallax Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-web3-cyan/5 rounded-full animate-float" />
        <div className="absolute top-60 right-20 w-24 h-24 bg-web3-purple/5 rounded-full animate-gentle-bounce" />
        <div className="absolute bottom-40 left-20 w-28 h-28 bg-web3-accent/5 rounded-full animate-cosmic-pulse" />
      </div>

      <StickyNavigation />
      
      {/* Floating CTA - persistent conversion point */}
      <FloatingCTA />
      
      <main id="main-content">
        {/* Integrated Hero Section with Live Stats */}
        <section id="hero" className="relative">
          <EnhancedHeroSection />
          {/* Seamless transition to stats */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <div className="w-16 h-16 bg-background/80 backdrop-blur-sm rounded-full border border-web3-cyan/30 flex items-center justify-center animate-gentle-bounce">
              <div className="w-2 h-8 bg-gradient-to-b from-web3-cyan to-transparent rounded-full" />
            </div>
          </div>
        </section>

        {/* Live Ecosystem Stats with Enhanced Animations */}
        <section id="stats" className="py-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-950 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--web3-cyan))_0%,_transparent_70%)] opacity-5" />
          <ConsolidatedStats />
        </section>

        {/* Interactive Feature Discovery with Carousel */}
        <section id="features" className="py-20 bg-gradient-to-br from-slate-950 via-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_hsl(var(--web3-purple))_0%,_transparent_70%)] opacity-5" />
          <ModularFeatureCards onInterestSelect={handleInterestSelection} />
        </section>

        {/* Premium Features - Wallet Gated Content */}
        <section id="premium" className="py-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-950 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,_hsl(var(--primary)/0.1)_0%,_transparent_70%)]" />
          <PremiumFeatures />
        </section>

        {/* Gamified Onboarding with Timeline */}
        <section id="onboarding" className="py-20 bg-gradient-to-br from-slate-950 via-gray-900 to-black relative">
          <InteractiveOnboarding selectedInterests={selectedInterests} />
        </section>

        {/* Trust & Transparency with Tabbed Interface */}
        <section id="trust" className="py-20 bg-gradient-to-br from-slate-950 via-gray-900 to-black relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,_hsl(var(--web3-green))_0%,_transparent_70%)] opacity-5" />
          <TrustCertifications />
        </section>

        {/* Creator Success Stories with Enhanced Interactivity */}
        <section id="creators" className="py-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-950 relative">
          <CreatorSpotlight />
        </section>
      </main>

      <Footer />
      <MobileBottomNavigation />

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-background/20 z-50">
        <div 
          className="h-full bg-gradient-to-r from-web3-cyan to-web3-purple transition-all duration-300"
          style={{ 
            width: `${Math.min(100, (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100)}%` 
          }}
        />
      </div>
    </div>
  );
};

export default IndexRefactored;
