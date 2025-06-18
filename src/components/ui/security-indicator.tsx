
import React from 'react';
import { Shield, CheckCircle, Lock, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SecurityIndicatorProps {
  status: 'audited' | 'verified' | 'community' | 'pending';
  size?: 'sm' | 'md';
  className?: string;
}

export const SecurityIndicator: React.FC<SecurityIndicatorProps> = ({
  status,
  size = 'md',
  className
}) => {
  const indicators = {
    audited: {
      icon: Shield,
      text: 'Smart Contract Audited',
      color: 'text-green-400',
      bg: 'bg-green-500/10',
      border: 'border-green-500/20'
    },
    verified: {
      icon: CheckCircle,
      text: 'Verified Protocol',
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20'
    },
    community: {
      icon: Users,
      text: 'Community Governed',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/20'
    },
    pending: {
      icon: Lock,
      text: 'Security Review',
      color: 'text-yellow-400',
      bg: 'bg-yellow-500/10',
      border: 'border-yellow-500/20'
    }
  };

  const config = indicators[status];
  const Icon = config.icon;
  const iconSize = size === 'sm' ? 12 : 16;
  const textSize = size === 'sm' ? 'text-xs' : 'text-sm';

  return (
    <div className={cn(
      'flex items-center gap-2 rounded-full px-3 py-1 border',
      config.bg,
      config.border,
      textSize,
      className
    )}>
      <Icon size={iconSize} className={config.color} />
      <span className={config.color}>{config.text}</span>
    </div>
  );
};
