
import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface ModernButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  children: React.ReactNode;
  asChild?: boolean;
}

export const ModernButton: React.FC<ModernButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  children,
  className,
  disabled,
  asChild = false,
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 wobbly-hover organic-button";
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground hover:from-primary/90 hover:via-secondary/90 hover:to-accent/90 shadow-lg hover:shadow-2xl glow-effect focus-visible:ring-primary",
    secondary: "bg-gradient-to-r from-secondary to-accent text-secondary-foreground hover:from-secondary/90 hover:to-accent/90 shadow-md hover:shadow-xl glow-border focus-visible:ring-secondary",
    outline: "border-2 border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary glow-border focus-visible:ring-primary",
    ghost: "text-primary hover:bg-primary/10 hover:text-primary glow-text focus-visible:ring-primary/50",
    destructive: "bg-gradient-to-r from-destructive to-red-500 text-destructive-foreground hover:from-destructive/90 hover:to-red-500/90 shadow-lg hover:shadow-xl focus-visible:ring-destructive"
  };
  
  const sizeClasses = {
    sm: "px-3 py-2 text-sm h-9",
    md: "px-4 py-2.5 text-sm h-10",
    lg: "px-6 py-3 text-base h-12",
    xl: "px-8 py-4 text-lg h-14"
  };

  const buttonClasses = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (asChild) {
    return (
      <Slot className={buttonClasses} {...props}>
        {children}
      </Slot>
    );
  }

  return (
    <button
      className={buttonClasses}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin" />}
      {children}
    </button>
  );
};
