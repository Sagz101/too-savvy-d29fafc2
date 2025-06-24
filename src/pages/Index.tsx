
import React, { useState } from 'react';
import { CosmosInspiredNavigation } from '@/components/ui/cosmos-inspired-navigation';
import { SequenceInspiredHero } from '@/components/sections/SequenceInspiredHero';
import { CreatorStudioInterests } from '@/components/sections/CreatorStudioInterests';
import { UnifiedCreatorSection } from '@/components/sections/UnifiedCreatorSection';
import { ConsolidatedDeveloperResources } from '@/components/ui/consolidated-developer-resources';
import { CommunityGovernance } from '@/components/ui/community-governance';
import { TrustedByCreators } from '@/components/ui/trusted-by-creators';
import { CreatorDashboard } from '@/components/sections/CreatorDashboard';
import { VideoShowcase } from '@/components/sections/VideoShowcase';
import { OnboardingGuide } from '@/components/sections/OnboardingGuide';
import { AICopilot } from '@/components/sections/AICopilot';
import { SocialHub } from '@/components/sections/SocialHub';
import { EcommerceStore } from '@/components/sections/EcommerceStore';
import { Threaditor } from '@/components/sections/Threaditor';
import { PlatformOverview } from '@/components/sections/PlatformOverview';
import { Cta } from '@/components/sections/Cta';
import { Footer } from '@/components/layout/Footer';

const Index = () => {
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);

  const handleInterestSelection = (interest: string) => {
    setSelectedInterest(interest);
    // You can add navigation logic here based on the selected interest
    console.log('Selected interest:', interest);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <CosmosInspiredNavigation />
      <main>
        {/* Sequence.xyz-Inspired Hero Section */}
        <section id="hero">
          <SequenceInspiredHero />
        </section>
        
        {/* Creator Studio Interests Selection */}
        <section id="creator-interests" className="bg-[#121212]">
          <CreatorStudioInterests onContinue={handleInterestSelection} />
        </section>
        
        {/* Unified Creator Section - Combines Create, Own, and Thrive */}
        <section id="create" className="bg-[#121212]">
          <UnifiedCreatorSection />
        </section>
        
        <section id="get-started" className="pt-20 bg-[#121212]">
          <OnboardingGuide />
        </section>
        
        <section id="developer-resources" className="pt-20 bg-[#121212]">
          <ConsolidatedDeveloperResources />
        </section>
        
        <section id="dashboard" className="pt-20 bg-[#121212]">
          <CreatorDashboard />
        </section>
        
        <section id="video-showcase" className="pt-20 bg-[#121212]">
          <VideoShowcase />
        </section>
        
        <section id="commerce-studio" className="pt-20 bg-[#121212]">
          <EcommerceStore />
        </section>
        
        <section id="social-hub" className="pt-20 bg-[#121212]">
          <SocialHub />
        </section>
        
        <section id="threaditor" className="pt-20 bg-[#121212]">
          <Threaditor />
        </section>
        
        <section id="ai-copilot" className="pt-20 bg-[#121212]">
          <AICopilot />
        </section>
        
        <section id="trusted-creators" className="pt-20 bg-[#121212]">
          <TrustedByCreators />
        </section>
        
        <section id="governance" className="pt-20 bg-[#121212]">
          <CommunityGovernance />
        </section>
        
        <section id="platform-overview" className="pt-20 bg-[#121212]">
          <PlatformOverview />
        </section>
        
        <section id="cta" className="pt-20 bg-[#121212]">
          <Cta />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
