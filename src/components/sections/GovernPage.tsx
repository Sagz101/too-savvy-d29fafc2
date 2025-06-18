
import React from 'react';
import { CommunityGovernance } from '@/components/ui/community-governance';
import { UserTypes } from '@/components/sections/UserTypes';
import { ModernHeading, ModernText } from '@/components/ui/modern-typography';
import { ModernContainer } from '@/components/ui/modern-container';

export const GovernPage: React.FC = () => {
  return (
    <div className="space-y-0 pt-16">
      <section className="py-16 bg-gradient-to-br from-green-950/20 via-gray-950 to-emerald-950/20">
        <ModernContainer size="xl">
          <div className="text-center mb-12">
            <ModernHeading level={1} className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-500 to-green-400">
              Govern & Collaborate
            </ModernHeading>
            <ModernText variant="lead" className="text-xl text-gray-300 max-w-3xl mx-auto">
              Shape the future of T00 Savvy through decentralized governance, community voting, 
              and collaborative decision-making.
            </ModernText>
          </div>
        </ModernContainer>
      </section>
      <CommunityGovernance />
      <UserTypes />
    </div>
  );
};
