
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
    primary: 'bg-primary/20 text-primary border-primary/40',
    secondary: 'bg-card/60 text-muted-foreground border-border/40',
    success: 'bg-green-500/20 text-green-400 border-green-500/40',
    warning: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/40',
    info: 'bg-blue-500/20 text-blue-400 border-blue-500/40'
  };

  const iconSize = {
    sm: 16,
    md: 20,
    lg: 24,
    xl: 28
  };

  return (
    <div className={cn(
      'border-2 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-105 backdrop-blur-sm',
      sizeClasses[size],
      variantClasses[variant],
      animated && 'animate-pulse',
      className
    )}>
      <Icon size={iconSize[size]} />
    </div>
  );
};
