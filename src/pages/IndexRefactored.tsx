import React, { useEffect } from 'react';
import { StickyNavigation } from '@/components/ui/sticky-navigation';
import { HeroSection, StatsBar, ToolkitSection, TrustSection, SuccessStories, CreatorCommunity } from '@/components/home';
import { FloatingCTA } from '@/components/ui/floating-cta';
import { Footer } from '@/components/layout/Footer';
import { MobileBottomNavigation } from '@/components/ui/mobile-optimized-navigation';

const IndexRefactored = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black relative overflow-x-hidden">
      <StickyNavigation />
      <FloatingCTA />
      
      <main id="main-content">
        {/* Hero - Main Value Prop & Quick Actions */}
        <section id="hero">
          <HeroSection />
        </section>

        {/* Stats Bar - Key Metrics */}
        <section id="stats">
          <StatsBar />
        </section>

        {/* Creator Toolkit - Modular Tools */}
        <section id="toolkit">
          <ToolkitSection />
        </section>

        {/* Trust & Transparency */}
        <section id="trust">
          <TrustSection />
        </section>

        {/* Success Stories */}
        <section id="stories">
          <SuccessStories />
        </section>

        {/* Creator Community */}
        <section id="community">
          <CreatorCommunity />
        </section>
      </main>

      <Footer />
      <MobileBottomNavigation />
    </div>
  );
};

export default IndexRefactored;
