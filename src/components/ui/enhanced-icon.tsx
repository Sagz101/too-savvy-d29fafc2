
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EnhancedIconProps {
  icon: LucideIcon;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'info';
  animated?: boolean;
  className?: string;
}

export const EnhancedIcon: React.FC<EnhancedIconProps> = ({
  icon: Icon,
  size = 'md',
  variant = 'primary',
  animated = false,
  className = ''
}) => {
  const sizeClasses = {
    sm: 'w-8 h-8 p-2',
    md: 'w-12 h-12 p-3',
    lg: 'w-16 h-16 p-4',
    xl: 'w-20 h-20 p-5'
  };

  const variantClasses = {
    primary: 'bg-gradient-to-br from-solar-radiative/20 to-solar-photosphere/30 text-solar-core border-solar-radiative/40',
    secondary: 'bg-gradient-to-br from-dzuwa-gentle-blue/30 to-dzuwa-pastel-cyan/20 text-dzuwa-bright-blue border-dzuwa-bright-blue/30',
    success: 'bg-gradient-to-br from-green-100 to-emerald-100 text-green-600 border-green-300',
    warning: 'bg-gradient-to-br from-solar-corona/30 to-solar-flare/20 text-solar-core border-solar-radiative/40',
    info: 'bg-gradient-to-br from-blue-100 to-sky-100 text-blue-600 border-blue-300'
  };

  const iconSize = {
    sm: 16,
    md: 20,
    lg: 24,
    xl: 28
  };

  return (
    <div className={cn(
      'icon-container border rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 cosmic-glow',
      sizeClasses[size],
      variantClasses[variant],
      animated && 'animate-solar-pulse',
      className
    )}>
      <Icon size={iconSize[size]} />
    </div>
  );
};
