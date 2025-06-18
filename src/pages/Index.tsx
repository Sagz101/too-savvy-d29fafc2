
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ModernHeader } from '@/components/layout/ModernHeader';
import { ResponsiveNavigation } from '@/components/ui/responsive-navigation';
import { HomePage } from '@/components/sections/HomePage';
import { CreatePage } from '@/components/sections/CreatePage';
import { BuildPage } from '@/components/sections/BuildPage';
import { GovernPage } from '@/components/sections/GovernPage';
import { LearnPage } from '@/components/sections/LearnPage';
import { EcosystemPage } from '@/components/sections/EcosystemPage';
import { Footer } from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F0F1A] via-[#1A1A2E] to-[#0F0F1A]">
      <ModernHeader />
      <ResponsiveNavigation />
      
      <main className="relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/build" element={<BuildPage />} />
          <Route path="/govern" element={<GovernPage />} />
          <Route path="/learn" element={<LearnPage />} />
          <Route path="/ecosystem" element={<EcosystemPage />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
