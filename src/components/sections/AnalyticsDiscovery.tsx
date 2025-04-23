
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart, LineChart, PieChart, Activity, TrendingUp, Users, Search } from 'lucide-react';

export const AnalyticsDiscovery = () => {
  return (
    <section id="analytics-discovery" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neura-purple to-neura-cyan bg-clip-text text-transparent">
              📊 Analytics & Discovery
            </span>
          </h2>
          <p className="text-white/70 md:text-lg max-w-2xl mx-auto">
            Powerful insights and personalized recommendations to grow your audience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* AI-Powered Discovery */}
          <div className="bg-neura-dark/60 backdrop-blur-sm border border-neura-purple/20 rounded-xl p-6 hover:border-neura-purple/40 transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-neura-purple/20 rounded-lg">
                <Search className="w-6 h-6 text-neura-cyan" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">AI-Powered Discovery</h3>
                <p className="text-white/70">Personalized recommendations via on-chain behavior</p>
              </div>
            </div>
            
            <div className="mt-4 bg-neura-dark/40 border border-neura-purple/10 rounded-lg p-5">
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-neura-purple/20 text-neura-cyan border-neura-purple/30">
                  Preference Learning
                </Badge>
                <Badge className="bg-neura-purple/20 text-neura-cyan border-neura-purple/30">
                  Content Matching
                </Badge>
                <Badge className="bg-neura-purple/20 text-neura-cyan border-neura-purple/30">
                  Behavioral Analysis
                </Badge>
                <Badge className="bg-neura-purple/20 text-neura-cyan border-neura-purple/30">
                  Cross-chain Data
                </Badge>
              </div>
            </div>
          </div>

          {/* Creator Analytics Dashboard */}
          <Card className="bg-neura-dark/80 border border-neura-purple/30 shadow-lg shadow-neura-purple/10 overflow-hidden">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <BarChart className="w-5 h-5 text-neura-cyan" />
                  <h3 className="font-bold text-white">Creator Analytics Dashboard</h3>
                </div>
                <Badge className="bg-neura-purple text-white">Real-time</Badge>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-neura-purple/10 border border-neura-purple/20 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <TrendingUp className="w-4 h-4 text-neura-cyan" />
                      <h4 className="font-medium text-white">Revenue</h4>
                    </div>
                    <p className="text-2xl font-bold text-white">1,245 Ξ</p>
                    <p className="text-xs text-white/70">+12.5% from last month</p>
                  </div>
                  <div className="p-4 bg-neura-purple/10 border border-neura-purple/20 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Activity className="w-4 h-4 text-neura-cyan" />
                      <h4 className="font-medium text-white">Engagement</h4>
                    </div>
                    <p className="text-2xl font-bold text-white">87.3%</p>
                    <p className="text-xs text-white/70">+5.2% from last month</p>
                  </div>
                  <div className="p-4 bg-neura-purple/10 border border-neura-purple/20 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Users className="w-4 h-4 text-neura-cyan" />
                      <h4 className="font-medium text-white">Collectors</h4>
                    </div>
                    <p className="text-2xl font-bold text-white">1,892</p>
                    <p className="text-xs text-white/70">+23 new this week</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 rounded-lg bg-neura-purple/10 border border-neura-purple/20">
                  <PieChart className="w-5 h-5 text-neura-cyan mt-1" />
                  <div>
                    <h4 className="font-medium text-white">Audience Demographics</h4>
                    <p className="text-white/70 text-sm mt-1">Understand your collectors with detailed demographic data</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 rounded-lg bg-neura-purple/10 border border-neura-purple/20">
                  <LineChart className="w-5 h-5 text-neura-cyan mt-1" />
                  <div>
                    <h4 className="font-medium text-white">Token Flow Analysis</h4>
                    <p className="text-white/70 text-sm mt-1">Track how your tokens move across chains and wallets</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
