
import React, { useState, useEffect } from 'react';
import { ModernCard } from '@/components/ui/modern-card';
import { ModernHeading, ModernText } from '@/components/ui/modern-typography';
import { TrendingUp, Users, Coins, Globe } from 'lucide-react';

export const LiveEcosystemStats: React.FC = () => {
  const [stats, setStats] = useState({
    creators: 12847,
    nfts: 421071,
    cost: 0.002,
    nodes: 3000
  });

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        creators: prev.creators + Math.floor(Math.random() * 3),
        nfts: prev.nfts + Math.floor(Math.random() * 15),
        cost: Math.max(0.001, prev.cost + (Math.random() - 0.5) * 0.0005),
        nodes: prev.nodes + Math.floor(Math.random() * 2)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const statItems = [
    {
      icon: Users,
      value: stats.creators.toLocaleString(),
      label: 'Active Monthly Creators',
      trend: '+18% this month',
      color: '#00FFCC'
    },
    {
      icon: Coins,
      value: stats.nfts.toLocaleString(),
      label: 'NFTs Minted',
      trend: '+2.4K today',
      color: '#FF00FF'
    },
    {
      icon: TrendingUp,
      value: `~$${stats.cost.toFixed(3)}`,
      label: 'Average Transaction Cost',
      trend: '98% cheaper than ETH',
      color: '#FFFF00'
    },
    {
      icon: Globe,
      value: `${stats.nodes.toLocaleString()}+`,
      label: 'Validator Nodes',
      trend: 'Across 15+ networks',
      color: '#00FFCC'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-[#0F0F1A] via-[#1A1A2E] to-[#0F0F1A] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%2300FFCC\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <ModernHeading level={2} className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00FFCC] via-[#FF00FF] to-[#FFFF00]">
            Live Ecosystem Stats
          </ModernHeading>
          <ModernText variant="lead" className="text-lg text-white/80 max-w-2xl mx-auto">
            Real-time metrics from our thriving Web3 creator economy
          </ModernText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statItems.map((stat, index) => (
            <ModernCard
              key={index}
              variant="elevated"
              className="bg-[#1A1A2E]/60 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 text-center relative overflow-hidden"
            >
              {/* Glow Effect */}
              <div 
                className="absolute inset-0 opacity-20 blur-xl"
                style={{ 
                  background: `radial-gradient(circle at center, ${stat.color}20, transparent 70%)` 
                }}
              />
              
              <div className="relative z-10 p-6">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg"
                  style={{ 
                    background: `linear-gradient(135deg, ${stat.color}20, ${stat.color}40)`,
                    border: `1px solid ${stat.color}30`
                  }}
                >
                  <stat.icon size={24} style={{ color: stat.color }} />
                </div>
                
                <ModernHeading level={4} className="text-2xl font-bold mb-2 text-white">
                  {stat.value}
                </ModernHeading>
                
                <ModernText variant="body" className="text-white/70 mb-2 text-sm">
                  {stat.label}
                </ModernText>
                
                <div 
                  className="text-xs font-medium px-3 py-1 rounded-full inline-block"
                  style={{ 
                    background: `${stat.color}20`,
                    color: stat.color,
                    border: `1px solid ${stat.color}30`
                  }}
                >
                  {stat.trend}
                </div>
              </div>
            </ModernCard>
          ))}
        </div>
      </div>
    </section>
  );
};
