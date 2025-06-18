
import React from 'react';
import { CosmosInspiredNavigation } from '@/components/ui/cosmos-inspired-navigation';
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
    <div className="min-h-screen bg-background text-foreground">
      <CosmosInspiredNavigation />
      <main>
        {/* Simplified Hero Section - Cosmos Inspired */}
        <section id="hero">
          <SimplifiedHero />
        </section>
        
        {/* Core Sections with Proper Spacing */}
        <section id="create" className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Create</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Build your creator empire with audited smart contracts and multi-chain tools. 
                Shape your digital future with powerful creation tools designed for Web3.
              </p>
            </div>
            <CoreFeatures />
          </div>
        </section>
        
        <section id="own" className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Own</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                You control your content, data, and digital identity—forever. 
                True ownership backed by blockchain technology and decentralized infrastructure.
              </p>
            </div>
            <UserTypes />
          </div>
        </section>
        
        <section id="thrive" className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Thrive</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Build loyal, token-powered audiences who grow with you. 
                Smart Contract Audited | Multi-Chain: ETH, MATIC, BSC, AVAX
              </p>
            </div>
            <ConsolidatedStats />
          </div>
        </section>
        
        <section id="get-started" className="pt-20">
          <OnboardingGuide />
        </section>
        
        <section id="developer-resources" className="pt-20">
          <ConsolidatedDeveloperResources />
        </section>
        
        <section id="dashboard" className="pt-20">
          <CreatorDashboard />
        </section>
        
        {/* Additional Sections */}
        <section id="video-showcase" className="pt-20">
          <VideoShowcase />
        </section>
        
        <section id="commerce-studio" className="pt-20">
          <EcommerceStore />
        </section>
        
        <section id="social-hub" className="pt-20">
          <SocialHub />
        </section>
        
        <section id="threaditor" className="pt-20">
          <Threaditor />
        </section>
        
        <section id="ai-copilot" className="pt-20">
          <AICopilot />
        </section>
        
        <section id="trusted-creators" className="pt-20">
          <TrustedByCreators />
        </section>
        
        <section id="governance" className="pt-20">
          <CommunityGovernance />
        </section>
        
        <section id="platform-overview" className="pt-20">
          <PlatformOverview />
        </section>
        
        <section id="cta" className="pt-20">
          <Cta />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
