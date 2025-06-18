
import React from 'react';
import { cn } from '@/lib/utils';

interface ModernContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padded?: boolean;
}

export const ModernContainer: React.FC<ModernContainerProps> = ({
  children,
  className,
  size = 'lg',
  padded = true
}) => {
  const sizeClasses = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full"
  };
  
  return (
    <div
      className={cn(
        "mx-auto",
        sizeClasses[size],
        padded && "px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
};
