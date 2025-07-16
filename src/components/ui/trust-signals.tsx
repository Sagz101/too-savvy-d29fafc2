import React from 'react';
import { Shield, CheckCircle, Award, Leaf } from 'lucide-react';
import { Button } from './button';

interface TrustSignalsProps {
  variant?: 'header' | 'footer' | 'inline';
  showLabels?: boolean;
}

export const TrustSignals: React.FC<TrustSignalsProps> = ({ 
  variant = 'inline', 
  showLabels = true 
}) => {
  const signals = [
    {
      icon: Shield,
      label: 'CertiK Audited',
      id: 'TSV-2024-001',
      color: 'text-trust-security',
      href: '#', // Would link to actual audit report
      tooltip: 'Smart contracts audited by CertiK for security vulnerabilities'
    },
    {
      icon: Leaf,
      label: 'Carbon Neutral',
      id: 'CT-CN-2024-TSV',
      color: 'text-trust-carbon',
      href: '#', // Would link to carbon certificate
      tooltip: 'Verified carbon-neutral operations'
    },
    {
      icon: CheckCircle,
      label: 'SOC 2 Compliant',
      id: 'SOC2-2024',
      color: 'text-trust-verified',
      href: '#', // Would link to compliance report
      tooltip: 'SOC 2 Type II compliance for data security'
    },
    {
      icon: Award,
      label: 'Web3 Security Score: A+',
      id: '96/100',
      color: 'text-performance-excellent',
      href: '#', // Would link to security dashboard
      tooltip: 'Comprehensive Web3 security assessment'
    }
  ];

  const containerClass = {
    header: 'flex items-center gap-3',
    footer: 'grid grid-cols-2 md:grid-cols-4 gap-4',
    inline: 'flex flex-wrap items-center gap-4'
  }[variant];

  const itemClass = {
    header: 'flex items-center gap-1 text-xs',
    footer: 'flex flex-col items-center text-center',
    inline: 'flex items-center gap-2 text-sm'
  }[variant];

  return (
    <div className={containerClass}>
      {signals.map((signal) => {
        const IconComponent = signal.icon;
        
        return (
          <Button
            key={signal.id}
            variant="ghost"
            size={variant === 'header' ? 'sm' : 'default'}
            className={`${itemClass} ${signal.color} hover:bg-white/5 transition-all duration-200 animate-trust-pulse`}
            asChild
          >
            <a
              href={signal.href}
              target="_blank"
              rel="noopener noreferrer"
              title={signal.tooltip}
              aria-label={`${signal.label} - ${signal.tooltip}`}
            >
              <IconComponent className="h-4 w-4" />
              {showLabels && (
                <div className="flex flex-col">
                  <span className="font-medium">{signal.label}</span>
                  {variant !== 'header' && (
                    <span className="text-xs text-muted-foreground">
                      {signal.id}
                    </span>
                  )}
                </div>
              )}
            </a>
          </Button>
        );
      })}
    </div>
  );
};