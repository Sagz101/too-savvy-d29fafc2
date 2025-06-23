import React from 'react';
import { CosmosInspiredNavigation } from '@/components/ui/cosmos-inspired-navigation';
import { XAIInspiredHero } from '@/components/sections/XAIInspiredHero';
import { SimplifiedHero } from '@/components/sections/SimplifiedHero';
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
    <div className="min-h-screen bg-black text-white">
      <CosmosInspiredNavigation />
      <main>
        {/* xAI-Inspired Hero Section with Black Theme */}
        <section id="hero">
          <XAIInspiredHero />
        </section>
        
        {/* Core Sections with Enhanced Black Theme Styling */}
        <section id="create" className="pt-20 bg-black">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-6 text-white font-helvetica">Create</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter leading-relaxed">
                Build your creator empire with audited smart contracts and multi-chain tools. 
                Shape your digital future with powerful creation tools designed for Web3.
              </p>
            </div>
            <CoreFeatures />
          </div>
        </section>
        
        <section id="own" className="pt-20 bg-black">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-6 text-white font-helvetica">Own</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter leading-relaxed">
                You control your content, data, and digital identity—forever. 
                True ownership backed by blockchain technology and decentralized infrastructure.
              </p>
            </div>
            <UserTypes />
          </div>
        </section>
        
        <section id="thrive" className="pt-20 bg-black">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-6 text-white font-helvetica">Thrive</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter leading-relaxed">
                Build loyal, token-powered audiences who grow with you. 
                Smart Contract Audited | Multi-Chain: ETH, MATIC, BSC, AVAX
              </p>
            </div>
            <ConsolidatedStats />
          </div>
        </section>
        
        <section id="get-started" className="pt-20 bg-black">
          <OnboardingGuide />
        </section>
        
        <section id="developer-resources" className="pt-20 bg-black">
          <ConsolidatedDeveloperResources />
        </section>
        
        <section id="dashboard" className="pt-20 bg-black">
          <CreatorDashboard />
        </section>
        
        <section id="video-showcase" className="pt-20 bg-black">
          <VideoShowcase />
        </section>
        
        <section id="commerce-studio" className="pt-20 bg-black">
          <EcommerceStore />
        </section>
        
        <section id="social-hub" className="pt-20 bg-black">
          <SocialHub />
        </section>
        
        <section id="threaditor" className="pt-20 bg-black">
          <Threaditor />
        </section>
        
        <section id="ai-copilot" className="pt-20 bg-black">
          <AICopilot />
        </section>
        
        <section id="trusted-creators" className="pt-20 bg-black">
          <TrustedByCreators />
        </section>
        
        <section id="governance" className="pt-20 bg-black">
          <CommunityGovernance />
        </section>
        
        <section id="platform-overview" className="pt-20 bg-black">
          <PlatformOverview />
        </section>
        
        <section id="cta" className="pt-20 bg-black">
          <Cta />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
