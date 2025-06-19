
import React from 'react';
import { AnimatedMeerkat } from './animated-meerkat';
import { ModernContainer } from './modern-container';
import { ModernHeading, ModernText } from './modern-typography';
import { ModernCard } from './modern-card';

export const MeerkatMascotSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-card/10">
      <ModernContainer size="lg">
        <div className="text-center mb-12">
          <ModernHeading level={2} className="mb-4">
            Meet Your Web3 Guides
          </ModernHeading>
          <ModernText variant="lead" muted className="max-w-2xl mx-auto">
            Our tech-savvy meerkat mascots are here to help you navigate the Web3 world with confidence and fun!
          </ModernText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Default Meerkat */}
          <ModernCard className="text-center p-6 hover:shadow-xl transition-all duration-300">
            <AnimatedMeerkat variant="default" size="md" />
            <ModernHeading level={4} className="mt-4 mb-2">
              Welcome Guide
            </ModernHeading>
            <ModernText variant="body" muted className="text-sm">
              I'm here to welcome new users and show them around the platform!
            </ModernText>
          </ModernCard>

          {/* Typing Meerkat */}
          <ModernCard className="text-center p-6 hover:shadow-xl transition-all duration-300">
            <AnimatedMeerkat variant="typing" size="md" />
            <ModernHeading level={4} className="mt-4 mb-2">
              Content Creator
            </ModernHeading>
            <ModernText variant="body" muted className="text-sm">
              Let me help you create amazing content and build your community!
            </ModernText>
          </ModernCard>

          {/* Exploring Meerkat */}
          <ModernCard className="text-center p-6 hover:shadow-xl transition-all duration-300">
            <AnimatedMeerkat variant="exploring" size="md" />
            <ModernHeading level={4} className="mt-4 mb-2">
              Tech Explorer
            </ModernHeading>
            <ModernText variant="body" muted className="text-sm">
              Ready to discover new Web3 technologies and innovations together?
            </ModernText>
          </ModernCard>

          {/* Working Meerkat */}
          <ModernCard className="text-center p-6 hover:shadow-xl transition-all duration-300">
            <AnimatedMeerkat variant="working" size="md" />
            <ModernHeading level={4} className="mt-4 mb-2">
              Crypto Expert
            </ModernHeading>
            <ModernText variant="body" muted className="text-sm">
              I'll guide you through blockchain basics and advanced Web3 concepts!
            </ModernText>
          </ModernCard>
        </div>

        {/* Interactive Demo Section */}
        <div className="mt-16 text-center">
          <ModernHeading level={3} className="mb-6">
            Try Interacting With Our Mascots!
          </ModernHeading>
          
          <div className="flex justify-center items-center space-x-8 flex-wrap gap-4">
            <div className="text-center">
              <AnimatedMeerkat variant="typing" size="lg" />
              <ModernText variant="caption" muted className="mt-2">
                Hover and click me!
              </ModernText>
            </div>
          </div>
          
          <ModernText variant="body" muted className="mt-6 max-w-xl mx-auto">
            These animated mascots will appear throughout your T00 Savvy journey, 
            providing helpful tips, celebrating your achievements, and making Web3 fun and accessible.
          </ModernText>
        </div>
      </ModernContainer>
    </section>
  );
};
