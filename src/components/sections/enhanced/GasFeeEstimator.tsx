
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, TrendingUp, TrendingDown, Activity } from 'lucide-react';

interface GasFee {
  chain: string;
  symbol: string;
  current: number;
  trend: 'up' | 'down' | 'stable';
  color: string;
}

export const GasFeeEstimator = () => {
  const [gasFees, setGasFees] = useState<GasFee[]>([
    { chain: 'Ethereum', symbol: 'ETH', current: 0.0042, trend: 'up', color: 'blue' },
    { chain: 'Polygon', symbol: 'MATIC', current: 0.0008, trend: 'stable', color: 'purple' },
    { chain: 'Optimism', symbol: 'OP', current: 0.0015, trend: 'down', color: 'red' },
    { chain: 'Arbitrum', symbol: 'ARB', current: 0.0012, trend: 'stable', color: 'cyan' }
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setGasFees(prev => prev.map(fee => ({
        ...fee,
        current: fee.current + (Math.random() - 0.5) * 0.0005,
        trend: Math.random() > 0.7 ? (Math.random() > 0.5 ? 'up' : 'down') : fee.trend
      })));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-red-400" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-emerald-400" />;
      default: return <Activity className="w-4 h-4 text-yellow-400" />;
    }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'border-blue-400/30 bg-blue-400/10 text-blue-400',
      purple: 'border-purple-400/30 bg-purple-400/10 text-purple-400',
      red: 'border-red-400/30 bg-red-400/10 text-red-400',
      cyan: 'border-cyan-400/30 bg-cyan-400/10 text-cyan-400'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <Card className="bg-gradient-to-br from-slate-800/90 to-gray-800/90 border border-cyan-400/30 backdrop-blur-xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-white">
          <Zap className="w-5 h-5 text-yellow-400" />
          Real-Time Gas Fees
          <Badge className="bg-emerald-400/20 text-emerald-400 border border-emerald-400/30 ml-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse mr-1"></div>
            Live
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gasFees.map((fee, index) => (
            <div 
              key={index}
              className={`p-4 rounded-xl border transition-all duration-300 hover:scale-105 ${getColorClasses(fee.color)}`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-sm">{fee.chain}</span>
                {getTrendIcon(fee.trend)}
              </div>
              <div className="text-2xl font-bold mb-1">
                {fee.current.toFixed(4)}
              </div>
              <div className="text-xs opacity-70">
                {fee.symbol}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-gradient-to-r from-slate-700/40 to-gray-700/40 rounded-lg border border-white/10">
          <p className="text-white/60 text-sm text-center">
            💡 Tip: Choose Polygon or Arbitrum for lower transaction costs
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
