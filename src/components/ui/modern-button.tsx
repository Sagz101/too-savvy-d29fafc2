
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
    primary: "bg-gradient-to-r from-primary via-accent to-secondary text-primary-foreground hover:from-primary/90 hover:via-accent/90 hover:to-secondary/90 shadow-lg hover:shadow-2xl glow-effect focus-visible:ring-primary",
    secondary: "bg-gradient-to-r from-secondary/80 to-purple-600/80 text-secondary-foreground border border-secondary/30 hover:from-secondary hover:to-purple-600 shadow-md hover:shadow-xl glow-border focus-visible:ring-secondary",
    outline: "border-2 border-primary text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:border-accent hover:text-accent glow-border focus-visible:ring-primary",
    ghost: "text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 glow-text focus-visible:ring-primary/50",
    destructive: "bg-gradient-to-r from-destructive to-red-600 text-destructive-foreground hover:from-destructive/90 hover:to-red-600/90 shadow-lg hover:shadow-xl focus-visible:ring-destructive"
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
