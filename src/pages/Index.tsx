
import React, { useState } from 'react';
import { DiscordInspiredNavigation } from '@/components/ui/discord-inspired-navigation';
import { SequenceInspiredHero } from '@/components/sections/SequenceInspiredHero';
import { CreatorStudioInterests } from '@/components/sections/CreatorStudioInterests';
import { UnifiedCreatorSection } from '@/components/sections/UnifiedCreatorSection';
import { CommunityGovernance } from '@/components/ui/community-governance';
import { TrustedByCreators } from '@/components/ui/trusted-by-creators';
import { CreatorDashboard } from '@/components/sections/CreatorDashboard';
import { VideoShowcase } from '@/components/sections/VideoShowcase';
import { OnboardingGuide } from '@/components/sections/OnboardingGuide';
import { AICopilot } from '@/components/sections/AICopilot';
import { SocialHub } from '@/components/sections/SocialHub';
import { EcommerceStore } from '@/components/sections/EcommerceStore';
import { Threaditor } from '@/components/sections/Threaditor';
import { Cta } from '@/components/sections/Cta';
import { Footer } from '@/components/layout/Footer';

const Index = () => {
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);

  const handleInterestSelection = (interest: string) => {
    setSelectedInterest(interest);
    console.log('Selected interest:', interest);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black">
      <DiscordInspiredNavigation />
      <main>
        {/* Hero Section */}
        <section id="hero">
          <SequenceInspiredHero />
        </section>
        
        {/* Creator Studio Interests Selection */}
        <section id="creator-interests" className="bg-gradient-to-br from-slate-900 via-gray-800 to-slate-950">
          <CreatorStudioInterests onContinue={handleInterestSelection} />
        </section>
        
        {/* Unified Creator Section - Create, Own, Thrive */}
        <section id="create" className="bg-gradient-to-br from-slate-950 via-gray-900 to-black">
          <UnifiedCreatorSection />
        </section>
        
        <section id="get-started" className="pt-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-950">
          <OnboardingGuide />
        </section>
        
        <section id="dashboard" className="pt-20 bg-gradient-to-br from-slate-950 via-gray-900 to-black">
          <CreatorDashboard />
        </section>
        
        <section id="video-showcase" className="pt-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-950">
          <VideoShowcase />
        </section>
        
        <section id="commerce-studio" className="pt-20 bg-gradient-to-br from-slate-950 via-gray-900 to-black">
          <EcommerceStore />
        </section>
        
        <section id="social-hub" className="pt-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-950">
          <SocialHub />
        </section>
        
        <section id="threaditor" className="pt-20 bg-gradient-to-br from-slate-950 via-gray-900 to-black">
          <Threaditor />
        </section>
        
        <section id="ai-copilot" className="pt-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-950">
          <AICopilot />
        </section>
        
        <section id="trusted-creators" className="pt-20 bg-gradient-to-br from-slate-950 via-gray-900 to-black">
          <TrustedByCreators />
        </section>
        
        <section id="governance" className="pt-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-950">
          <CommunityGovernance />
        </section>
        
        <section id="developer-resources" className="pt-20 bg-gradient-to-br from-slate-950 via-gray-900 to-black">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Developer Resources</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Build on Too Savvy with our comprehensive developer tools and documentation.
              </p>
            </div>
          </div>
        </section>
        
        <section id="cta" className="pt-20 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-950">
          <Cta />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
