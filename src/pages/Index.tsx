
import React from 'react';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { CoreFeatures } from '@/components/sections/CoreFeatures';
import { SecurityIdentity } from '@/components/sections/SecurityIdentity';
import { AnalyticsDiscovery } from '@/components/sections/AnalyticsDiscovery';
import { CreatorTools } from '@/components/sections/CreatorTools';
import { EcosystemInterop } from '@/components/sections/EcosystemInterop';
import { ModuleGrid } from '@/components/sections/ModuleGrid';
import { Cta } from '@/components/sections/Cta';
import { Footer } from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-neura-dark text-white">
      <Header />
      <main>
        <Hero />
        <CoreFeatures />
        <ModuleGrid />
        <SecurityIdentity />
        <AnalyticsDiscovery />
        <CreatorTools />
        <EcosystemInterop />
        <Cta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
