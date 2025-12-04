import React from 'react';
import { ModernCard } from '@/components/ui/modern-card';
import { ModernHeading, ModernText } from '@/components/ui/modern-typography';
import { ModernContainer } from '@/components/ui/modern-container';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { TrendingUp, DollarSign, Layers, Zap } from 'lucide-react';

export const ConsolidatedStats: React.FC = () => {
  return (
    <section className="py-16 bg-background">
      <ModernContainer size="xl">
        <div className="text-center mb-12">
          <ModernHeading level={2} className="mb-4 text-3xl font-bold">
            Why Diminga is the Future of Commerce
          </ModernHeading>
          <ModernText variant="lead" muted className="max-w-2xl mx-auto">
            Industry-leading cost efficiency and creator-first economics
          </ModernText>
        </div>

        {/* Key Web3 Benefits - Focus on WHY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ModernCard
            variant="elevated"
            size="lg"
            className="text-center hover:scale-105 transition-all duration-500 group bg-gradient-to-br from-web3-green/5 to-transparent border-web3-green/20 hover:border-web3-green/40"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-web3-green/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <DollarSign size={32} className="text-web3-green" />
              </div>
            </div>
            
            <ModernHeading level={3} className="text-4xl md:text-5xl font-bold mb-2 text-web3-green">
              <AnimatedCounter end={0.002} prefix="$" decimals={4} />
            </ModernHeading>
            
            <ModernText variant="body" className="font-semibold mb-2 text-foreground">
              Average Transaction Cost
            </ModernText>
            
            <div className="inline-flex items-center gap-2 bg-web3-green/10 rounded-full px-4 py-2">
              <TrendingUp size={16} className="text-web3-green" />
              <ModernText variant="small" className="text-web3-green font-medium">
                98% Cheaper than Ethereum
              </ModernText>
            </div>
          </ModernCard>

          <ModernCard
            variant="elevated"
            size="lg"
            className="text-center hover:scale-105 transition-all duration-500 group bg-gradient-to-br from-web3-cyan/5 to-transparent border-web3-cyan/20 hover:border-web3-cyan/40"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-web3-cyan/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Layers size={32} className="text-web3-cyan" />
              </div>
            </div>
            
            <ModernHeading level={3} className="text-4xl md:text-5xl font-bold mb-2 text-web3-cyan">
              <AnimatedCounter end={421071} suffix="+" />
            </ModernHeading>
            
            <ModernText variant="body" className="font-semibold mb-2 text-foreground">
              Total Assets Minted
            </ModernText>
            
            <div className="inline-flex items-center gap-2 bg-web3-cyan/10 rounded-full px-4 py-2">
              <Zap size={16} className="text-web3-cyan" />
              <ModernText variant="small" className="text-web3-cyan font-medium">
                Growing 2.4K+ Daily
              </ModernText>
            </div>
          </ModernCard>
        </div>

        {/* Secondary Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: 12847, label: "Active Creators", suffix: "", color: "text-foreground" },
            { value: 2.1, label: "Creator Earnings", prefix: "$", suffix: "M+", color: "text-web3-green" },
            { value: 3000, label: "Validator Nodes", suffix: "+", color: "text-web3-purple" },
            { value: 15, label: "Networks Supported", suffix: "+", color: "text-web3-accent" }
          ].map((stat, index) => (
            <ModernCard
              key={index}
              variant="default"
              size="sm"
              className="text-center hover:bg-background/60 transition-colors"
            >
              <ModernHeading level={4} className={`text-2xl font-bold mb-1 ${stat.color}`}>
                <AnimatedCounter 
                  end={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.value < 10 ? 1 : 0}
                />
              </ModernHeading>
              <ModernText variant="small" muted>
                {stat.label}
              </ModernText>
            </ModernCard>
          ))}
        </div>
      </ModernContainer>
    </section>
  );
};