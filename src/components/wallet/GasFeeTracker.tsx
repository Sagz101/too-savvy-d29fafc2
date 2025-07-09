import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Fuel, TrendingUp, TrendingDown, Zap } from 'lucide-react';
import { useChainId } from 'wagmi';

interface GasFees {
  standard: number;
  fast: number;
  instant: number;
  chainName: string;
  symbol: string;
}

const CHAIN_CONFIGS = {
  1: { name: 'Ethereum', symbol: 'ETH', color: 'text-blue-400' },
  137: { name: 'Polygon', symbol: 'MATIC', color: 'text-purple-400' },
  10: { name: 'Optimism', symbol: 'ETH', color: 'text-red-400' },
  42161: { name: 'Arbitrum', symbol: 'ETH', color: 'text-cyan-400' },
  8453: { name: 'Base', symbol: 'ETH', color: 'text-blue-500' },
};

export const GasFeeTracker: React.FC = () => {
  const [gasFees, setGasFees] = useState<GasFees | null>(null);
  const [loading, setLoading] = useState(true);
  const [trend, setTrend] = useState<'up' | 'down' | 'stable'>('stable');
  const chainId = useChainId();

  useEffect(() => {
    const fetchGasFees = async () => {
      try {
        setLoading(true);
        const chainConfig = CHAIN_CONFIGS[chainId as keyof typeof CHAIN_CONFIGS];
        
        if (!chainConfig) {
          setGasFees(null);
          return;
        }

        // Mock gas fee data - in production, use real APIs like Etherscan, Polygonscan, etc.
        const mockGasFees: GasFees = {
          standard: Math.floor(Math.random() * 30) + 10,
          fast: Math.floor(Math.random() * 50) + 30,
          instant: Math.floor(Math.random() * 80) + 50,
          chainName: chainConfig.name,
          symbol: chainConfig.symbol,
        };

        // Simulate trend based on current fees
        const avgFee = (mockGasFees.standard + mockGasFees.fast + mockGasFees.instant) / 3;
        setTrend(avgFee > 40 ? 'up' : avgFee < 25 ? 'down' : 'stable');

        setGasFees(mockGasFees);
      } catch (error) {
        console.error('Failed to fetch gas fees:', error);
        setGasFees(null);
      } finally {
        setLoading(false);
      }
    };

    fetchGasFees();
    const interval = setInterval(fetchGasFees, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, [chainId]);

  if (loading) {
    return (
      <Card className="bg-gradient-to-br from-slate-800/50 to-gray-800/50 border-cyan-400/20">
        <CardContent className="p-4">
          <div className="flex items-center gap-2">
            <Fuel className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-white/70">Loading gas fees...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!gasFees) {
    return (
      <Card className="bg-gradient-to-br from-slate-800/50 to-gray-800/50 border-cyan-400/20">
        <CardContent className="p-4">
          <div className="flex items-center gap-2">
            <Fuel className="w-4 h-4 text-gray-400" />
            <span className="text-white/70">Gas fees unavailable</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  const chainConfig = CHAIN_CONFIGS[chainId as keyof typeof CHAIN_CONFIGS];
  const TrendIcon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Zap;

  return (
    <Card className="bg-gradient-to-br from-slate-800/50 to-gray-800/50 border-cyan-400/20">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm flex items-center gap-2">
          <Fuel className={`w-4 h-4 ${chainConfig?.color || 'text-cyan-400'}`} />
          <span className="text-white">{gasFees.chainName} Gas</span>
          <Badge variant="outline" className={`text-xs ${
            trend === 'up' ? 'border-red-400/50 text-red-400' :
            trend === 'down' ? 'border-green-400/50 text-green-400' :
            'border-yellow-400/50 text-yellow-400'
          }`}>
            <TrendIcon className="w-3 h-3 mr-1" />
            {trend}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="grid grid-cols-3 gap-2 text-xs">
          <div className="text-center">
            <div className="text-green-400 font-medium">{gasFees.standard}</div>
            <div className="text-white/60">Standard</div>
          </div>
          <div className="text-center">
            <div className="text-yellow-400 font-medium">{gasFees.fast}</div>
            <div className="text-white/60">Fast</div>
          </div>
          <div className="text-center">
            <div className="text-red-400 font-medium">{gasFees.instant}</div>
            <div className="text-white/60">Instant</div>
          </div>
        </div>
        <div className="text-center text-xs text-white/50 mt-2">
          gwei • Updates every 30s
        </div>
      </CardContent>
    </Card>
  );
};