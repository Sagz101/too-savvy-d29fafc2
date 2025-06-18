
import React from 'react';
import { cn } from '@/lib/utils';

interface InteroperabilityBadgesProps {
  className?: string;
}

export const InteroperabilityBadges: React.FC<InteroperabilityBadgesProps> = ({
  className
}) => {
  const networks = [
    { name: 'ETH', color: 'bg-blue-500', textColor: 'text-white' },
    { name: 'MATIC', color: 'bg-purple-500', textColor: 'text-white' },
    { name: 'BSC', color: 'bg-yellow-500', textColor: 'text-black' },
    { name: 'AVAX', color: 'bg-red-500', textColor: 'text-white' }
  ];

  return (
    <div className={cn('flex items-center gap-1', className)}>
      <span className="text-xs text-muted-foreground mr-2">Multi-Chain:</span>
      {networks.map((network) => (
        <div
          key={network.name}
          className={cn(
            'w-8 h-6 rounded-md flex items-center justify-center text-xs font-bold',
            network.color,
            network.textColor
          )}
          title={`${network.name} Network Supported`}
        >
          {network.name}
        </div>
      ))}
    </div>
  );
};
