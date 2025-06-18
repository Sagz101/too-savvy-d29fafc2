
import React from 'react';
import { cn } from '@/lib/utils';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

export const ModernHeading: React.FC<TypographyProps & { level: 1 | 2 | 3 | 4 | 5 | 6 }> = ({
  children,
  className,
  level,
  as
}) => {
  const Component = as || `h${level}` as keyof JSX.IntrinsicElements;
  
  const headingClasses = {
    1: "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight",
    2: "text-3xl md:text-4xl font-bold leading-tight tracking-tight",
    3: "text-2xl md:text-3xl font-semibold leading-tight",
    4: "text-xl md:text-2xl font-semibold leading-snug",
    5: "text-lg md:text-xl font-medium leading-snug",
    6: "text-base md:text-lg font-medium leading-snug"
  };
  
  return React.createElement(
    Component,
    {
      className: cn(
        "text-foreground",
        headingClasses[level],
        className
      )
    },
    children
  );
};

export const ModernText: React.FC<TypographyProps & { 
  variant?: 'body' | 'lead' | 'caption' | 'small';
  muted?: boolean;
}> = ({
  children,
  className,
  variant = 'body',
  muted = false,
  as = 'p'
}) => {
  const Component = as;
  
  const variantClasses = {
    body: "text-base leading-relaxed",
    lead: "text-lg md:text-xl leading-relaxed font-medium",
    caption: "text-sm leading-normal",
    small: "text-xs leading-normal"
  };
  
  return React.createElement(
    Component,
    {
      className: cn(
        muted ? "text-muted-foreground" : "text-foreground",
        variantClasses[variant],
        className
      )
    },
    children
  );
};
