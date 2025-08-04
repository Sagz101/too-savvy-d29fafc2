import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

// Modular Design System Foundation
interface ModuleCardProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  variant?: 'video' | 'audio' | 'commerce' | 'social' | 'governance' | 'default';
  children?: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

const moduleVariants = {
  video: {
    gradient: 'from-blue-500/20 to-purple-500/20',
    border: 'border-blue-500/20',
    iconColor: 'text-blue-400',
    glow: 'hover:shadow-blue-500/25'
  },
  audio: {
    gradient: 'from-green-500/20 to-teal-500/20',
    border: 'border-green-500/20',
    iconColor: 'text-green-400',
    glow: 'hover:shadow-green-500/25'
  },
  commerce: {
    gradient: 'from-orange-500/20 to-yellow-500/20',
    border: 'border-orange-500/20',
    iconColor: 'text-orange-400',
    glow: 'hover:shadow-orange-500/25'
  },
  social: {
    gradient: 'from-pink-500/20 to-rose-500/20',
    border: 'border-pink-500/20',
    iconColor: 'text-pink-400',
    glow: 'hover:shadow-pink-500/25'
  },
  governance: {
    gradient: 'from-violet-500/20 to-indigo-500/20',
    border: 'border-violet-500/20',
    iconColor: 'text-violet-400',
    glow: 'hover:shadow-violet-500/25'
  },
  default: {
    gradient: 'from-primary/20 to-secondary/20',
    border: 'border-primary/20',
    iconColor: 'text-primary',
    glow: 'hover:shadow-primary/25'
  }
};

export const ModuleCard: React.FC<ModuleCardProps> = ({
  title,
  description,
  icon: Icon,
  variant = 'default',
  children,
  className,
  href,
  onClick
}) => {
  const styles = moduleVariants[variant];
  
  const CardContent = (
    <div 
      className={cn(
        'group relative overflow-hidden rounded-xl border bg-gradient-to-br backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] cursor-pointer',
        styles.gradient,
        styles.border,
        styles.glow,
        'p-6 shadow-lg hover:shadow-xl',
        className
      )}
      onClick={onClick}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/50 to-card/50 opacity-90" />
      
      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start gap-4 mb-4">
          {Icon && (
            <div className={cn(
              'p-3 rounded-lg bg-background/60 border',
              styles.border,
              styles.glow,
              'transition-all duration-300 group-hover:scale-110'
            )}>
              <Icon className={cn('w-6 h-6', styles.iconColor)} />
            </div>
          )}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            {description && (
              <p className="text-muted-foreground text-sm leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </div>
        {children}
      </div>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {CardContent}
      </a>
    );
  }

  return CardContent;
};

// Consistent Layout Container
interface ModuleLayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  actions?: React.ReactNode;
}

export const ModuleLayout: React.FC<ModuleLayoutProps> = ({
  title,
  description,
  children,
  breadcrumbs,
  actions
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-card/50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                {crumb.href ? (
                  <a href={crumb.href} className="hover:text-primary transition-colors">
                    {crumb.label}
                  </a>
                ) : (
                  <span className="text-foreground">{crumb.label}</span>
                )}
                {index < breadcrumbs.length - 1 && (
                  <span className="text-muted-foreground/50">/</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-4">{title}</h1>
            {description && (
              <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                {description}
              </p>
            )}
          </div>
          {actions && (
            <div className="flex items-center gap-4">
              {actions}
            </div>
          )}
        </div>

        {/* Content */}
        {children}
      </div>
    </div>
  );
};

// Shared Stats Component
interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  variant?: 'positive' | 'negative' | 'neutral';
  icon?: LucideIcon;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  change,
  variant = 'neutral',
  icon: Icon
}) => {
  const changeColors = {
    positive: 'text-green-400',
    negative: 'text-red-400',
    neutral: 'text-muted-foreground'
  };

  return (
    <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:bg-card/70 transition-colors duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        {Icon && <Icon className="w-5 h-5 text-primary" />}
      </div>
      <div className="space-y-2">
        <div className="text-3xl font-bold text-foreground">{value}</div>
        {change && (
          <div className={cn('text-sm font-medium', changeColors[variant])}>
            {change}
          </div>
        )}
      </div>
    </div>
  );
};

// Cross-Module Navigation Component
interface CrossModuleNavProps {
  currentModule: string;
  relatedModules: Array<{
    name: string;
    href: string;
    description: string;
    icon?: LucideIcon;
    variant?: 'video' | 'audio' | 'commerce' | 'social' | 'governance' | 'default';
  }>;
}

export const CrossModuleNav: React.FC<CrossModuleNavProps> = ({
  currentModule,
  relatedModules
}) => {
  return (
    <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl p-6 mt-8">
      <h3 className="text-lg font-semibold text-foreground mb-4">
        Related Modules
      </h3>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {relatedModules.map((module) => (
          <a
            key={module.name}
            href={module.href}
            className="group block p-4 rounded-lg border border-border/30 hover:border-primary/30 bg-background/50 hover:bg-card/70 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-2">
              {module.icon && (
                <module.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
              )}
              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                {module.name}
              </h4>
            </div>
            <p className="text-sm text-muted-foreground">{module.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};