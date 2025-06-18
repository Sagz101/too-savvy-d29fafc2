
import React from 'react';
import { Code, Book, Github, Terminal, FileText, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ModernButton } from '@/components/ui/modern-button';
import { ModernCard } from '@/components/ui/modern-card';
import { ModernHeading, ModernText } from '@/components/ui/modern-typography';
import { ModernContainer } from '@/components/ui/modern-container';

export const ConsolidatedDeveloperResources: React.FC = () => {
  const developerResources = [
    {
      icon: Code,
      title: "SDK & APIs",
      description: "Complete integration toolkit for Web3 features",
      action: "Integration Guide",
      path: "/video-integration"
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Comprehensive guides and references",
      action: "Browse Docs",
      path: "/whitepaper"
    },
    {
      icon: Rocket,
      title: "Quick Start",
      description: "Deploy your first NFT in 5 minutes",
      action: "Start Tutorial",
      path: "/video-studio"
    },
    {
      icon: Github,
      title: "Open Source",
      description: "Explore smart contracts and contribute",
      action: "View GitHub",
      path: "/video-integration"
    }
  ];

  return (
    <section className="py-16 bg-card/20">
      <ModernContainer size="xl">
        <div className="text-center mb-12">
          <ModernHeading level={2} className="mb-4 text-3xl font-bold">
            Developer Resources
          </ModernHeading>
          <ModernText variant="lead" muted className="max-w-2xl mx-auto">
            Everything you need to build on T00 Savvy - from quick start guides to complete API documentation
          </ModernText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {developerResources.map((resource, index) => (
            <ModernCard
              key={index}
              variant="elevated"
              size="sm"
              interactive
              className="text-center hover:scale-105 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <resource.icon size={24} className="text-primary" />
                </div>
              </div>
              <ModernHeading level={6} className="mb-2 text-sm font-semibold">
                {resource.title}
              </ModernHeading>
              <ModernText variant="small" muted className="mb-4 text-xs leading-relaxed">
                {resource.description}
              </ModernText>
              <ModernButton
                variant="outline"
                size="sm"
                asChild
                className="w-full text-xs"
              >
                <Link to={resource.path}>
                  {resource.action}
                </Link>
              </ModernButton>
            </ModernCard>
          ))}
        </div>

        {/* Resources Dropdown Menu Concept */}
        <div className="text-center">
          <ModernText variant="caption" className="text-muted-foreground mb-4">
            Looking for specific resources?
          </ModernText>
          <div className="flex flex-wrap justify-center gap-2">
            <ModernButton variant="ghost" size="sm" asChild>
              <Link to="/video-integration">Analytics Dashboard</Link>
            </ModernButton>
            <ModernButton variant="ghost" size="sm" asChild>
              <Link to="/whitepaper">Token Dashboard</Link>
            </ModernButton>
            <ModernButton variant="ghost" size="sm" asChild>
              <Link to="/video-studio">Creator Tools</Link>
            </ModernButton>
          </div>
        </div>
      </ModernContainer>
    </section>
  );
};
