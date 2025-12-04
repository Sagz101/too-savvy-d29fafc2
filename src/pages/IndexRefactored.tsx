
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
import { useActiveSection } from '@/hooks/useActiveSection';

const IndexRefactored = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  
  // Improved section flow based on design strategy
  const sectionIds = ['hero', 'stats', 'features', 'onboarding', 'trust', 'creators', 'premium'];
  const currentSection = useActiveSection(sectionIds);

  const handleInterestSelection = (interests: string[]) => {
    setSelectedInterests(interests);
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black relative overflow-x-hidden">
      {/* Subtle Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-40 left-10 w-64 h-64 bg-web3-cyan/3 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-10 w-48 h-48 bg-web3-purple/3 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-56 h-56 bg-web3-accent/3 rounded-full blur-3xl" />
      </div>

      <StickyNavigation />
      <FloatingCTA />
      
      <main id="main-content">
        {/* Hero - Clear Value Prop & Trust Bar */}
        <section id="hero">
          <EnhancedHeroSection />
        </section>

        {/* Why Diminga - Key Web3 Benefits */}
        <section id="stats" className="py-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-950 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--web3-cyan))_0%,_transparent_70%)] opacity-5" />
          <ConsolidatedStats />
        </section>

        {/* Feature Discovery - Modular Toolkit */}
        <section id="features" className="py-20 bg-gradient-to-br from-slate-950 via-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_hsl(var(--web3-purple))_0%,_transparent_70%)] opacity-5" />
          <ModularFeatureCards onInterestSelect={handleInterestSelection} />
        </section>

        {/* Gamified Onboarding - Creator Journey */}
        <section id="onboarding" className="py-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-950 relative">
          <InteractiveOnboarding selectedInterests={selectedInterests} />
        </section>

        {/* Trust & Authority - Visual Badges */}
        <section id="trust" className="py-20 bg-gradient-to-br from-slate-950 via-gray-900 to-black relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,_hsl(var(--web3-green))_0%,_transparent_70%)] opacity-5" />
          <TrustCertifications />
        </section>

        {/* Creator Success Stories - Transformation Focus */}
        <section id="creators" className="py-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-950 relative">
          <CreatorSpotlight />
        </section>

        {/* Premium Features - Wallet Gated (Lower in funnel) */}
        <section id="premium" className="py-20 bg-gradient-to-br from-slate-950 via-gray-900 to-black relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,_hsl(var(--primary)/0.1)_0%,_transparent_70%)]" />
          <PremiumFeatures />
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
