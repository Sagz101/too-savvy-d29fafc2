
import React from 'react';
import { CreatorDashboard } from '@/components/sections/CreatorDashboard';
import { VideoShowcase } from '@/components/sections/VideoShowcase';
import { ModernHeading, ModernText } from '@/components/ui/modern-typography';
import { ModernContainer } from '@/components/ui/modern-container';

export const CreatePage: React.FC = () => {
  return (
    <div className="space-y-0 pt-16">
      <section className="py-16 bg-gradient-to-br from-purple-950/20 via-gray-950 to-cyan-950/20">
        <ModernContainer size="xl">
          <div className="text-center mb-12">
            <ModernHeading level={1} className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400">
              Create & Monetize
            </ModernHeading>
            <ModernText variant="lead" className="text-xl text-gray-300 max-w-3xl mx-auto">
              Build your digital empire with Web3-native creation tools. From NFTs to live streaming, 
              turn your creativity into sustainable revenue streams.
            </ModernText>
          </div>
        </ModernContainer>
      </section>
      <CreatorDashboard />
      <VideoShowcase />
    </div>
  );
};
