
import React from 'react';
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
      <StreamlinedHeader />
      <main>
        {/* Enhanced Hero with xAI Design Principles */}
        <section id="hero">
          <EnhancedHeroSection />
        </section>
        
        {/* Clear Information Hierarchy */}
        <section id="developer-resources">
          <ConsolidatedDeveloperResources />
        </section>
        
        <section id="user-types">
          <UserTypes />
        </section>
        
        <section id="get-started">
          <OnboardingGuide />
        </section>
        
        {/* Interactive Stats with Performance Focus */}
        <section id="stats">
          <ConsolidatedStats />
        </section>
        
        {/* Core Features with Visual Hierarchy */}
        <section id="features">
          <CoreFeatures />
        </section>
        
        <section id="video-showcase">
          <VideoShowcase />
        </section>
        
        <section id="creator-dashboard">
          <CreatorDashboard />
        </section>
        
        <section id="commerce-studio">
          <EcommerceStore />
        </section>
        
        <section id="social-hub">
          <SocialHub />
        </section>
        
        <section id="threaditor">
          <Threaditor />
        </section>
        
        <section id="ai-copilot">
          <AICopilot />
        </section>
        
        {/* Trust and Transparency Elements */}
        <section id="trusted-creators">
          <TrustedByCreators />
        </section>
        
        <section id="governance">
          <CommunityGovernance />
        </section>
        
        <section id="platform-overview">
          <PlatformOverview />
        </section>
        
        {/* Clear Call to Action */}
        <section id="cta">
          <Cta />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
