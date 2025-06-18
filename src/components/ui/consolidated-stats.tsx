
import React from 'react';
import { ModernCard } from '@/components/ui/modern-card';
import { ModernHeading, ModernText } from '@/components/ui/modern-typography';
import { ModernContainer } from '@/components/ui/modern-container';
import { TrendingUp, Users, Coins, Globe } from 'lucide-react';

export const ConsolidatedStats: React.FC = () => {
  const liveStats = [
    {
      icon: Users,
      value: "12,847",
      label: "Active Monthly Creators",
      trend: "+18% this month"
    },
    {
      icon: Coins,
      value: "421,071",
      label: "NFTs Minted",
      trend: "+2.4K today"
    },
    {
      icon: TrendingUp,
      value: "~$0.002",
      label: "Average Transaction Cost",
      trend: "98% cheaper than ETH"
    },
    {
      icon: Globe,
      value: "3,000+",
      label: "Validator Nodes",
      trend: "Across 15+ networks"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <ModernContainer size="xl">
        <div className="text-center mb-12">
          <ModernHeading level={2} className="mb-4 text-3xl font-bold">
            Live Ecosystem Stats
          </ModernHeading>
          <ModernText variant="lead" muted className="max-w-2xl mx-auto">
            Real-time metrics from our thriving creator economy
          </ModernText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {liveStats.map((stat, index) => (
            <ModernCard
              key={index}
              variant="elevated"
              size="md"
              className="text-center hover:scale-105 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <stat.icon size={24} className="text-primary" />
                </div>
              </div>
              <ModernHeading level={3} className="text-2xl font-bold mb-2">
                {stat.value}
              </ModernHeading>
              <ModernText variant="body" className="font-medium mb-2">
                {stat.label}
              </ModernText>
              <ModernText variant="small" className="text-green-400 text-xs">
                {stat.trend}
              </ModernText>
            </ModernCard>
          ))}
        </div>
      </ModernContainer>
    </section>
  );
};
