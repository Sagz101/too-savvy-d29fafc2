
import React from 'react';
import { useEstimateGas, useGasPrice } from 'wagmi';
import { formatEther, formatGwei } from 'viem';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, TrendingUp, Clock } from 'lucide-react';

interface GasFeeEstimatorProps {
  to?: string;
  data?: string;
  value?: bigint;
  enabled?: boolean;
}

export const GasFeeEstimator: React.FC<GasFeeEstimatorProps> = ({
  to,
  data = '0x',
  value = 0n,
  enabled = true,
}) => {
  const { data: gasEstimate, isLoading: isEstimating } = useEstimateGas({
    to: to as `0x${string}`,
    data: data as `0x${string}`,
    value,
    query: { enabled: enabled && !!to },
  });

  const { data: gasPrice, isLoading: isGasPriceLoading } = useGasPrice();

  const calculateFee = (multiplier: number = 1) => {
    if (!gasEstimate || !gasPrice) return '0';
    const totalGas = gasEstimate * BigInt(Math.floor(Number(gasPrice) * multiplier));
    return formatEther(totalGas);
  };

  const getSpeedLabel = (multiplier: number) => {
    if (multiplier <= 1) return 'Slow';
    if (multiplier <= 1.2) return 'Standard';
    return 'Fast';
  };

  const getSpeedColor = (multiplier: number) => {
    if (multiplier <= 1) return 'text-yellow-400';
    if (multiplier <= 1.2) return 'text-blue-400';
    return 'text-green-400';
  };

  if (!enabled || !to) {
    return null;
  }

  return (
    <Card className="bg-gradient-to-br from-slate-800/60 to-gray-800/60 border-cyan-400/20">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-white text-lg">
          <Zap className="w-5 h-5 text-cyan-400" />
          Gas Fee Estimate
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {isEstimating || isGasPriceLoading ? (
          <div className="flex items-center justify-center py-4">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-cyan-400"></div>
            <span className="ml-2 text-white/70">Calculating...</span>
          </div>
        ) : gasEstimate && gasPrice ? (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/70">Gas Limit:</span>
              <span className="text-white font-mono">{gasEstimate.toString()}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/70">Gas Price:</span>
              <span className="text-white font-mono">{formatGwei(gasPrice)} gwei</span>
            </div>
            
            <div className="space-y-2">
              {[
                { multiplier: 0.9, icon: <Clock className="w-4 h-4" /> },
                { multiplier: 1.1, icon: <TrendingUp className="w-4 h-4" /> },
                { multiplier: 1.3, icon: <Zap className="w-4 h-4" /> },
              ].map(({ multiplier, icon }) => (
                <div key={multiplier} className="flex items-center justify-between p-2 rounded-lg bg-white/5">
                  <div className="flex items-center gap-2">
                    <div className={getSpeedColor(multiplier)}>{icon}</div>
                    <span className="text-white text-sm">{getSpeedLabel(multiplier)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-mono text-sm">
                      {parseFloat(calculateFee(multiplier)).toFixed(6)} ETH
                    </span>
                    <Badge 
                      variant="outline" 
                      className={`border-current ${getSpeedColor(multiplier)}`}
                    >
                      {getSpeedLabel(multiplier)}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-4 text-white/50">
            Unable to estimate gas fees
          </div>
        )}
      </CardContent>
    </Card>
  );
};
