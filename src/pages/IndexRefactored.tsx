
import React, { useState, useEffect } from 'react';
import { StickyNavigation } from '@/components/ui/sticky-navigation';
import { EnhancedHeroSection } from '@/components/ui/enhanced-hero-section';
import { ConsolidatedStats } from '@/components/ui/consolidated-stats';
import { ModularFeatureCards } from '@/components/sections/ModularFeatureCards';
import { InteractiveOnboarding } from '@/components/sections/InteractiveOnboarding';
import { TrustCertifications } from '@/components/sections/TrustCertifications';
import { CreatorSpotlight } from '@/components/sections/CreatorSpotlight';
import { FloatingCTA } from '@/components/ui/floating-cta';
import { Footer } from '@/components/layout/Footer';
import { MobileBottomNavigation } from '@/components/ui/mobile-optimized-navigation';
import { useAuth } from '@/components/auth/AuthProvider';

const IndexRefactored = () => {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [currentSection, setCurrentSection] = useState('hero');
  const { session, user } = useAuth();

  const handleInterestSelection = (interests: string[]) => {
    setSelectedInterests(interests);
    console.log('Selected interests:', interests);
  };

  // Enhanced scroll tracking for performance and section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'stats', 'features', 'onboarding', 'trust'];
      const scrolled = window.scrollY;
      
      // Determine current section for enhanced navigation
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setCurrentSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black">
      <StickyNavigation />
      
      {/* Floating CTA - persistent conversion point */}
      <FloatingCTA />
      
      <main>
        {/* Streamlined Hero Section */}
        <section id="hero">
          <EnhancedHeroSection />
        </section>

        {/* Consolidated Live Stats - replaces multiple stat sections */}
        <section id="stats" className="py-16">
          <ConsolidatedStats />
        </section>

        {/* Interactive Feature Discovery - replaces long module lists */}
        <section id="features" className="py-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-950">
          <ModularFeatureCards onInterestSelect={handleInterestSelection} />
        </section>

        {/* Gamified Onboarding Flow */}
        <section id="onboarding" className="py-20 bg-gradient-to-br from-slate-950 via-gray-900 to-black">
          <InteractiveOnboarding selectedInterests={selectedInterests} />
        </section>

        {/* Trust & Security - consolidated and elevated */}
        <section id="trust" className="py-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-950">
          <TrustCertifications />
        </section>

        {/* Creator Success Stories - social proof */}
        <section id="creators" className="py-20 bg-gradient-to-br from-slate-950 via-gray-900 to-black">
          <CreatorSpotlight />
        </section>
      </main>

      <Footer />
      <MobileBottomNavigation />
    </div>
  );
};

export default IndexRefactored;
