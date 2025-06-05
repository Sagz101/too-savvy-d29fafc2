
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
    primary: 'bg-gradient-to-br from-dzuwa-cyan/20 to-dzuwa-purple/20 text-dzuwa-cyan border-dzuwa-cyan/30',
    secondary: 'bg-gradient-to-br from-dzuwa-gentle-blue/30 to-dzuwa-pastel-cyan/20 text-dzuwa-bright-blue border-dzuwa-bright-blue/30',
    success: 'bg-gradient-to-br from-green-100 to-emerald-100 text-green-600 border-green-300',
    warning: 'bg-gradient-to-br from-dzuwa-gold/20 to-solar-photosphere/20 text-amber-600 border-amber-300',
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
      'icon-container border rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105',
      sizeClasses[size],
      variantClasses[variant],
      animated && 'animate-gentle-pulse',
      className
    )}>
      <Icon size={iconSize[size]} />
    </div>
  );
};
