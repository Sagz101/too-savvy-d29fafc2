
import React from 'react';
import { Sparkles, Code, Users, Book } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ModernButton } from '@/components/ui/modern-button';

interface StreamlinedNavigationProps {
  className?: string;
}

export const StreamlinedNavigation: React.FC<StreamlinedNavigationProps> = ({ className }) => {
  const primaryNavItems = [
    { 
      to: "/video-studio", 
      icon: Sparkles, 
      label: "Create",
      description: "Build content & mint NFTs"
    },
    { 
      to: "/video-integration", 
      icon: Code, 
      label: "Build",
      description: "Developer tools & APIs"
    },
    { 
      to: "/global-innovators", 
      icon: Users, 
      label: "Govern",
      description: "DAO & community voting"
    },
    { 
      to: "/learn", 
      icon: Book, 
      label: "Learn",
      description: "Docs & tokenomics"
    }
  ];

  return (
    <nav className={`hidden lg:flex items-center space-x-1 ${className}`}>
      {primaryNavItems.map((item) => (
        <div key={item.to} className="group relative">
          <ModernButton
            variant="ghost"
            size="sm"
            asChild
            className="h-12 px-4 hover:bg-primary/10 transition-all duration-200"
          >
            <Link to={item.to} className="flex items-center gap-2">
              <item.icon size={16} className="text-primary" />
              <span className="font-medium">{item.label}</span>
            </Link>
          </ModernButton>
          
          {/* Tooltip */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
            <div className="bg-card border border-border/50 rounded-lg px-3 py-2 shadow-xl">
              <p className="text-xs text-muted-foreground whitespace-nowrap">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </nav>
  );
};
