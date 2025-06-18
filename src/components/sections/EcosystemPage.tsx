
import React from 'react';
import { SocialHub } from '@/components/sections/SocialHub';
import { Threaditor } from '@/components/sections/Threaditor';
import { EcommerceStore } from '@/components/sections/EcommerceStore';
import { AICopilot } from '@/components/sections/AICopilot';
import { Cta } from '@/components/sections/Cta';
import { ModernHeading, ModernText } from '@/components/ui/modern-typography';
import { ModernContainer } from '@/components/ui/modern-container';

export const EcosystemPage: React.FC = () => {
  return (
    <div className="space-y-0 pt-16">
      <section className="py-16 bg-gradient-to-br from-pink-950/20 via-gray-950 to-purple-950/20">
        <ModernContainer size="xl">
          <div className="text-center mb-12">
            <ModernHeading level={1} className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-pink-400">
              Ecosystem & Modules
            </ModernHeading>
            <ModernText variant="lead" className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our interconnected ecosystem of Web3 tools and modules designed to power 
              the future of decentralized content creation.
            </ModernText>
          </div>
        </ModernContainer>
      </section>
      <SocialHub />
      <Threaditor />
      <EcommerceStore />
      <AICopilot />
      <Cta />
    </div>
  );
};
