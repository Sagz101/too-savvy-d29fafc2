
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
        <EnhancedHeroSection />
        
        {/* Clear Information Hierarchy */}
        <ConsolidatedDeveloperResources />
        <UserTypes />
        <OnboardingGuide />
        
        {/* Interactive Stats with Performance Focus */}
        <ConsolidatedStats />
        
        {/* Core Features with Visual Hierarchy */}
        <CoreFeatures />
        <VideoShowcase />
        <CreatorDashboard />
        <EcommerceStore />
        <SocialHub />
        <Threaditor />
        <AICopilot />
        
        {/* Trust and Transparency Elements */}
        <TrustedByCreators />
        <CommunityGovernance />
        <PlatformOverview />
        
        {/* Clear Call to Action */}
        <Cta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
