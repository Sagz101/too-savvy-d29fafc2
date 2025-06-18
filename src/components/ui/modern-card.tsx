
import React from 'react';
import { cn } from '@/lib/utils';

interface ModernCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined' | 'filled';
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
}

export const ModernCard: React.FC<ModernCardProps> = ({
  children,
  className,
  variant = 'default',
  size = 'md',
  interactive = false,
  ...props
}) => {
  const baseClasses = "rounded-2xl transition-all duration-300";
  
  const variantClasses = {
    default: "bg-card/60 backdrop-blur-sm border border-border/50",
    elevated: "bg-card shadow-xl border-0",
    outlined: "bg-transparent border-2 border-border",
    filled: "bg-card/80 border-0"
  };
  
  const sizeClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
  };
  
  const interactiveClasses = interactive 
    ? "hover:shadow-2xl hover:scale-[1.02] cursor-pointer focus-within:ring-2 focus-within:ring-primary/50" 
    : "";

  return (
    <div
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        interactiveClasses,
        className
      )}
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      {...props}
    >
      {children}
    </div>
  );
};
