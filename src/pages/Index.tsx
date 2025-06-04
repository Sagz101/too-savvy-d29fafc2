
import React from 'react';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { CoreFeatures } from '@/components/sections/CoreFeatures';
import { CreatorDashboard } from '@/components/sections/CreatorDashboard';
import { VideoShowcase } from '@/components/sections/VideoShowcase';
import { OnboardingFlow } from '@/components/sections/OnboardingFlow';
import { AICopilot } from '@/components/sections/AICopilot';
import { SocialHub } from '@/components/sections/SocialHub';
import { EcommerceStore } from '@/components/sections/EcommerceStore';
import { Threaditor } from '@/components/sections/Threaditor';
import { Cta } from '@/components/sections/Cta';
import { Footer } from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dzuwa-light-blue via-dzuwa-white to-dzuwa-bright-blue/20 text-gray-900">
      <Header />
      <main>
        <Hero />
        <CoreFeatures />
        <VideoShowcase />
        <CreatorDashboard />
        <EcommerceStore />
        <SocialHub />
        <Threaditor />
        <OnboardingFlow />
        <AICopilot />
        <Cta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
