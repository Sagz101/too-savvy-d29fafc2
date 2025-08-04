import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, Zap, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './card';

interface GasFee {
  network: string;
  symbol: string;
  fee: string;
  feeInUsd: string;
  trend: 'up' | 'down' | 'stable';
  speed: 'slow' | 'standard' | 'fast';
  color: string;
}

interface GasFeeTrackerProps {
  variant?: 'compact' | 'detailed';
  showTrends?: boolean;
}

export const GasFeeTracker: React.FC<GasFeeTrackerProps> = ({ 
  variant = 'compact',
  showTrends = true 
}) => {
  const [gasFees, setGasFees] = useState<GasFee[]>([
    {
      network: 'Ethereum',
      symbol: 'ETH',
      fee: '0.0047',
      feeInUsd: '$12.30',
      trend: 'down',
      speed: 'standard',
      color: 'text-web3-cyan'
    },
    {
      network: 'Polygon',
      symbol: 'MATIC',
      fee: '0.0011',
      feeInUsd: '$0.89',
      trend: 'stable',
      speed: 'fast',
      color: 'text-web3-purple'
    },
    {
      network: 'Optimism',
      symbol: 'ETH',
      fee: '0.0008',
      feeInUsd: '$2.10',
      trend: 'up',
      speed: 'fast',
      color: 'text-web3-accent'
    },
    {
      network: 'Arbitrum',
      symbol: 'ETH',
      fee: '0.0012',
      feeInUsd: '$3.15',
      trend: 'down',
      speed: 'standard',
      color: 'text-web3-green'
    }
  ]);

  const [lastUpdate, setLastUpdate] = useState(new Date());

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setGasFees(prev => prev.map(fee => ({
        ...fee,
        // Simulate small price changes
        fee: (parseFloat(fee.fee) * (0.98 + Math.random() * 0.04)).toFixed(4),
        trend: Math.random() > 0.5 ? 'up' : 'down'
      })));
      setLastUpdate(new Date());
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-3 w-3 text-destructive" />;
      case 'down':
        return <TrendingDown className="h-3 w-3 text-web3-green" />;
      default:
        return <div className="h-3 w-3 rounded-full bg-muted-foreground" />;
    }
  };

  const getSpeedIcon = (speed: string) => {
    return speed === 'fast' ? 
      <Zap className="h-3 w-3 text-web3-accent" /> : 
      <Clock className="h-3 w-3 text-muted-foreground" />;
  };

  if (variant === 'compact') {
    return (
      <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-3">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-foreground">Gas Fees</h3>
          <span className="text-xs text-muted-foreground">
            {lastUpdate.toLocaleTimeString()}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {gasFees.slice(0, 4).map((fee) => (
            <div 
              key={fee.network}
              className="flex items-center justify-between p-2 bg-background/50 rounded-md animate-gas-fee-update"
            >
              <div className="flex items-center gap-1">
                <span className={`text-xs font-medium ${fee.color}`}>
                  {fee.network.slice(0, 3)}
                </span>
                {showTrends && getTrendIcon(fee.trend)}
              </div>
              <div className="text-right">
                <div className="text-xs font-mono">{fee.fee}</div>
                <div className="text-xs text-muted-foreground">{fee.feeInUsd}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Real-time Gas Fees</span>
          <span className="text-sm font-normal text-muted-foreground">
            Updated {lastUpdate.toLocaleTimeString()}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {gasFees.map((fee) => (
            <div 
              key={fee.network}
              className="flex items-center justify-between p-4 bg-muted/50 rounded-lg animate-gas-fee-update"
            >
              <div className="flex items-center gap-3">
                <div className={`font-medium ${fee.color}`}>
                  {fee.network}
                </div>
                <div className="flex items-center gap-1">
                  {getSpeedIcon(fee.speed)}
                  <span className="text-sm text-muted-foreground capitalize">
                    {fee.speed}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="font-mono font-medium">
                    {fee.fee} {fee.symbol}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {fee.feeInUsd}
                  </div>
                </div>
                {showTrends && (
                  <div className="flex items-center">
                    {getTrendIcon(fee.trend)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-web3-cyan/10 border border-web3-cyan/20 rounded-lg">
          <div className="flex items-center gap-2 text-sm">
            <Zap className="h-4 w-4 text-web3-cyan" />
            <span className="text-web3-cyan font-medium">
              Optimized for Creator Studio: Save up to 90% on gas fees
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};