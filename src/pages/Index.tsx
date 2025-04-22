
import React from 'react';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { Modules } from '@/components/sections/Modules';
import { Personalization } from '@/components/sections/Personalization';
import { Ecosystem } from '@/components/sections/Ecosystem';
import { TechStack } from '@/components/sections/TechStack';
import { SecurityFeatures } from '@/components/sections/SecurityFeatures';
import { Cta } from '@/components/sections/Cta';
import { Footer } from '@/components/layout/Footer';
import { NeuraAcademy } from '@/components/sections/NeuraAcademy';

const Index = () => {
  return (
    <div className="min-h-screen bg-neura-dark text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Modules />
        <Personalization />
        <SecurityFeatures />
        <NeuraAcademy />
        <Ecosystem />
        <TechStack />
        <Cta />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
