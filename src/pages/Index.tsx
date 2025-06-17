
import React from 'react';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { CoreFeatures } from '@/components/sections/CoreFeatures';
import { ModularStats } from '@/components/sections/ModularStats';
import { CreatorDashboard } from '@/components/sections/CreatorDashboard';
import { VideoShowcase } from '@/components/sections/VideoShowcase';
import { OnboardingFlow } from '@/components/sections/OnboardingFlow';
import { OnboardingGuide } from '@/components/sections/OnboardingGuide';
import { AICopilot } from '@/components/sections/AICopilot';
import { SocialHub } from '@/components/sections/SocialHub';
import { EcommerceStore } from '@/components/sections/EcommerceStore';
import { Threaditor } from '@/components/sections/Threaditor';
import { PlatformOverview } from '@/components/sections/PlatformOverview';
import { UserTypes } from '@/components/sections/UserTypes';
import { TrustSignals } from '@/components/sections/TrustSignals';
import { Cta } from '@/components/sections/Cta';
import { Footer } from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <UserTypes />
        <OnboardingGuide />
        <ModularStats />
        <CoreFeatures />
        <VideoShowcase />
        <CreatorDashboard />
        <EcommerceStore />
        <SocialHub />
        <Threaditor />
        <OnboardingFlow />
        <AICopilot />
        <TrustSignals />
        <PlatformOverview />
        <Cta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
