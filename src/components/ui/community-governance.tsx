
import React from 'react';
import { Users, Vote, MessageSquare, Shield, Coins, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ModernButton } from '@/components/ui/modern-button';
import { ModernCard } from '@/components/ui/modern-card';
import { ModernHeading, ModernText } from '@/components/ui/modern-typography';
import { ModernContainer } from '@/components/ui/modern-container';

export const CommunityGovernance: React.FC = () => {
  const governanceFeatures = [
    {
      icon: Vote,
      title: "DAO Participation",
      description: "Vote on platform decisions and proposals",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: MessageSquare,
      title: "Token-Gated Messaging",
      description: "Exclusive community channels for token holders",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Coins,
      title: "Gamified Engagement",
      description: "Earn rewards for community participation",
      color: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <ModernContainer size="xl">
        <div className="text-center mb-12">
          <ModernHeading level={2} className="mb-4 text-3xl font-bold">
            Community & Governance
          </ModernHeading>
          <ModernText variant="lead" muted className="max-w-2xl mx-auto">
            Shape the future of Renegade through decentralized governance and community participation
          </ModernText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {governanceFeatures.map((feature, index) => (
            <ModernCard
              key={index}
              variant="elevated"
              size="md"
              interactive
              className="text-center hover:scale-105 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center`}>
                  <feature.icon size={24} className="text-white" />
                </div>
              </div>
              <ModernHeading level={5} className="mb-3 text-lg font-semibold">
                {feature.title}
              </ModernHeading>
              <ModernText variant="body" muted className="text-sm leading-relaxed">
                {feature.description}
              </ModernText>
            </ModernCard>
          ))}
        </div>

        <div className="text-center">
          <ModernButton
            variant="primary"
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
            asChild
          >
            <Link to="/global-innovators">
              <Users size={20} />
              Join Our DAO
            </Link>
          </ModernButton>
        </div>
      </ModernContainer>
    </section>
  );
};
