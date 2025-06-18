
import React from 'react';
import { ImprovedModernHeader } from '@/components/layout/ImprovedModernHeader';
import { CosmosInspiredHero } from '@/components/ui/cosmos-inspired-hero';
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
      <ImprovedModernHeader />
      <main>
        <CosmosInspiredHero />
        <ConsolidatedDeveloperResources />
        <UserTypes />
        <OnboardingGuide />
        <ConsolidatedStats />
        <CoreFeatures />
        <VideoShowcase />
        <CreatorDashboard />
        <EcommerceStore />
        <SocialHub />
        <Threaditor />
        <AICopilot />
        <TrustedByCreators />
        <CommunityGovernance />
        <PlatformOverview />
        <Cta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
