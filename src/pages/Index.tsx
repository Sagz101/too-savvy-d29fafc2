
import React from 'react';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { CoreFeatures } from '@/components/sections/CoreFeatures';
import { CreatorDashboard } from '@/components/sections/CreatorDashboard';
import { OnboardingFlow } from '@/components/sections/OnboardingFlow';
import { AICopilot } from '@/components/sections/AICopilot';
import { Cta } from '@/components/sections/Cta';
import { Footer } from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-neura-dark text-white">
      <Header />
      <main>
        <Hero />
        <CoreFeatures />
        <CreatorDashboard />
        <OnboardingFlow />
        <AICopilot />
        <Cta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
