
import React from 'react';
import { CosmosInspiredHero } from '@/components/ui/cosmos-inspired-hero';
import { ConsolidatedStats } from '@/components/ui/consolidated-stats';
import { OnboardingGuide } from '@/components/sections/OnboardingGuide';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0">
      <CosmosInspiredHero />
      <OnboardingGuide />
      <ConsolidatedStats />
    </div>
  );
};
