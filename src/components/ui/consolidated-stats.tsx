
import React, { useState, useEffect } from 'react';
import { ModernCard } from '@/components/ui/modern-card';
import { ModernHeading, ModernText } from '@/components/ui/modern-typography';
import { ModernContainer } from '@/components/ui/modern-container';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { TrendingUp, Users, Coins, Globe, Zap } from 'lucide-react';

export const ConsolidatedStats: React.FC = () => {
  const [refreshKey, setRefreshKey] = useState(0);
  
  const liveStats = [
    {
      icon: Users,
      value: 12847,
      label: "Active Monthly Creators",
      trend: "+18% this month",
      isLive: true
    },
    {
      icon: Coins,
      value: 421071,
      label: "NFTs Minted",
      trend: "+2.4K today",
      isLive: true
    },
    {
      icon: TrendingUp,
      value: 0.002,
      prefix: "~$",
      decimals: 3,
      label: "Average Transaction Cost",
      trend: "98% cheaper than ETH",
      isLive: false
    },
    {
      icon: Globe,
      value: 3000,
      suffix: "+",
      label: "Validator Nodes",
      trend: "Across 15+ networks",
      isLive: false
    }
  ];

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRefreshKey(prev => prev + 1);
    }, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, []);

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
              key={`${index}-${refreshKey}`}
              variant="elevated"
              size="md"
              className="text-center hover:scale-105 transition-all duration-500 group hover:bg-web3-cyan/5 hover:border-web3-cyan/30 relative overflow-hidden"
            >
              {/* Live indicator for real-time stats */}
              {stat.isLive && (
                <div className="absolute top-2 right-2">
                  <div className="w-2 h-2 bg-web3-green rounded-full animate-ping" />
                  <div className="absolute top-0 right-0 w-2 h-2 bg-web3-green rounded-full" />
                </div>
              )}
              
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-web3-cyan/20 transition-colors duration-300">
                  <stat.icon size={24} className="text-primary group-hover:text-web3-cyan transition-colors" />
                </div>
              </div>
              
              <ModernHeading level={3} className="text-2xl font-bold mb-2 group-hover:text-web3-cyan transition-colors">
                <AnimatedCounter 
                  end={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals || 0}
                />
              </ModernHeading>
              
              <ModernText variant="body" className="font-medium mb-2 group-hover:text-gray-200 transition-colors">
                {stat.label}
              </ModernText>
              
              <div className="flex items-center justify-center gap-1">
                {stat.isLive && <Zap size={12} className="text-web3-green animate-pulse" />}
                <ModernText variant="small" className="text-green-400 text-xs">
                  {stat.trend}
                </ModernText>
              </div>
            </ModernCard>
          ))}
        </div>
      </ModernContainer>
    </section>
  );
};
