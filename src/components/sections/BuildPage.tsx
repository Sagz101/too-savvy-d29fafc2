
import React from 'react';
import { ConsolidatedDeveloperResources } from '@/components/ui/consolidated-developer-resources';
import { CoreFeatures } from '@/components/sections/CoreFeatures';
import { ModernHeading, ModernText } from '@/components/ui/modern-typography';
import { ModernContainer } from '@/components/ui/modern-container';

export const BuildPage: React.FC = () => {
  return (
    <div className="space-y-0 pt-16">
      <section className="py-16 bg-gradient-to-br from-blue-950/20 via-gray-950 to-purple-950/20">
        <ModernContainer size="xl">
          <div className="text-center mb-12">
            <ModernHeading level={1} className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-400">
              Build & Integrate
            </ModernHeading>
            <ModernText variant="lead" className="text-xl text-gray-300 max-w-3xl mx-auto">
              Access comprehensive developer tools, APIs, and smart contracts to build the next generation 
              of Web3 applications on our platform.
            </ModernText>
          </div>
        </ModernContainer>
      </section>
      <ConsolidatedDeveloperResources />
      <CoreFeatures />
    </div>
  );
};
