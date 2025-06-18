import React from 'react';
import { CosmosInspiredNavigation } from '@/components/ui/cosmos-inspired-navigation';
import { StreamlinedHeader } from '@/components/ui/streamlined-header';
import { EnhancedHeroSection } from '@/components/ui/enhanced-hero-section';
import { ConsolidatedDeveloperResources } from '@/components/ui/consolidated-developer-resources';
import { ConsolidatedStats } from '@/components/ui/consolidated-stats';
import { CommunityGovernance } from '@/components/ui/community-governance';
import { TrustedByCreators } from '@/components/ui/trusted-by-creators';
import { CoreFeatures } from '@/components/sections/CoreFeatures';
import { CreatorDashboard } from '@/components/sections/CreatorDashboard';
import { VideoShowcase } from '@/components/sections/VideoShowcase';
import { OnboardingGuide } from '@/components/sections/OnboardingGuide';
import { AICopilot } from '@/components/sections/AICopilot';
import { SocialHub } from '@/components/sections/SocialHub';
import { EcommerceStore } from '@/components/sections/EcommerceStore';
import { Threaditor } from '@/components/sections/Threaditor';
import { PlatformOverview } from '@/components/sections/PlatformOverview';
import { UserTypes } from '@/components/sections/UserTypes';
import { Cta } from '@/components/sections/Cta';
import { Footer } from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <CosmosInspiredNavigation />
      <main className="pt-16">
        {/* Enhanced Hero with xAI Design Principles */}
        <section id="hero" className="pt-16">
          <EnhancedHeroSection />
        </section>
        
        {/* Clear Information Hierarchy */}
        <section id="developer-resources" className="pt-16">
          <ConsolidatedDeveloperResources />
        </section>
        
        <section id="user-types" className="pt-16">
          <UserTypes />
        </section>
        
        <section id="get-started" className="pt-16">
          <OnboardingGuide />
        </section>
        
        {/* Interactive Stats with Performance Focus */}
        <section id="stats" className="pt-16">
          <ConsolidatedStats />
        </section>
        
        {/* Core Features with Visual Hierarchy */}
        <section id="features" className="pt-16">
          <CoreFeatures />
        </section>
        
        <section id="video-showcase" className="pt-16">
          <VideoShowcase />
        </section>
        
        <section id="creator-dashboard" className="pt-16">
          <CreatorDashboard />
        </section>
        
        <section id="commerce-studio" className="pt-16">
          <EcommerceStore />
        </section>
        
        <section id="social-hub" className="pt-16">
          <SocialHub />
        </section>
        
        <section id="threaditor" className="pt-16">
          <Threaditor />
        </section>
        
        <section id="ai-copilot" className="pt-16">
          <AICopilot />
        </section>
        
        {/* Trust and Transparency Elements */}
        <section id="trusted-creators" className="pt-16">
          <TrustedByCreators />
        </section>
        
        <section id="governance" className="pt-16">
          <CommunityGovernance />
        </section>
        
        <section id="platform-overview" className="pt-16">
          <PlatformOverview />
        </section>
        
        {/* Clear Call to Action */}
        <section id="cta" className="pt-16">
          <Cta />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
