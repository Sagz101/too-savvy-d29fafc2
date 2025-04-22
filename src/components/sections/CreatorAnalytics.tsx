
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart, LineChart, PieChart, Activity, TrendingUp, Users } from 'lucide-react';

export const CreatorAnalytics: React.FC = () => {
  return (
    <Card className="bg-neura-dark/80 border border-neura-purple/30 shadow-lg shadow-neura-purple/10 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-neura-purple/20 to-neura-cyan/20 border-b border-neura-purple/30 pb-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BarChart className="w-5 h-5 text-neura-cyan" />
            <h3 className="font-bold text-white">Creator Analytics Dashboard</h3>
          </div>
          <Badge className="bg-neura-purple text-white">Beta</Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
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
          
          <div className="h-40 bg-neura-purple/10 border border-neura-purple/20 rounded-lg flex items-center justify-center">
            <LineChart className="w-8 h-8 text-neura-cyan/40" />
            <p className="text-white/70 ml-2">Interactive revenue charts</p>
          </div>
          
          <div className="flex items-start gap-3 p-3 rounded-lg bg-neura-purple/10 border border-neura-purple/20">
            <PieChart className="w-5 h-5 text-neura-cyan mt-1" />
            <div>
              <h4 className="font-medium text-white">On-chain Analytics</h4>
              <p className="text-white/70 text-sm mt-1">Track token flow and royalty payments across marketplaces and chains.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 p-3 rounded-lg bg-neura-purple/10 border border-neura-purple/20">
            <BarChart className="w-5 h-5 text-neura-cyan mt-1" />
            <div>
              <h4 className="font-medium text-white">Audience Insights</h4>
              <p className="text-white/70 text-sm mt-1">Understand your collectors with detailed demographic and behavioral data.</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
