
import React from 'react';
import { Code, Book, Github, Terminal, FileText, Rocket, ExternalLink, Shield } from 'lucide-react';
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
      path: "/video-integration",
      external: false
    },
    {
      icon: FileText,
      title: "Technical Documentation",
      description: "Comprehensive guides, API references, and architecture docs",
      action: "Browse Docs",
      path: "/whitepaper",
      external: false
    },
    {
      icon: Rocket,
      title: "Quick Start Tutorial",
      description: "Deploy your first NFT in 5 minutes with step-by-step guide",
      action: "Start Tutorial",
      path: "/video-studio",
      external: false
    },
    {
      icon: Github,
      title: "Open Source Code",
      description: "Explore smart contracts, contribute, and build integrations",
      action: "View GitHub",
      path: "https://github.com/renegade",
      external: true
    }
  ];

  const additionalResources = [
    {
      title: "Security Dashboard",
      description: "Real-time monitoring via CertiK Skynet",
      link: "https://skynet.certik.com/projects/renegade",
      external: true
    },
    {
      title: "Gas Fee Tracker",
      description: "Monitor costs across all supported chains",
      link: "https://l2fees.info",
      external: true
    },
    {
      title: "Smart Contract Addresses",
      description: "Verified contract addresses on all networks",
      link: "/whitepaper#contracts",
      external: false
    },
    {
      title: "Bug Bounty Program",
      description: "Help secure the platform and earn rewards",
      link: "https://immunefi.com/bounty/renegade",
      external: true
    }
  ];

  return (
    <section className="py-16 bg-card/20">
      <ModernContainer size="xl">
        <div className="text-center mb-12">
          <ModernHeading level={2} className="mb-4 text-3xl font-bold">
            Developer Resources
          </ModernHeading>
          <ModernText variant="lead" muted className="max-w-2xl mx-auto mb-4">
            Everything you need to build on T00 Savvy - from quick start guides to complete API documentation
          </ModernText>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm">
            <Shield size={16} />
            All resources are audited and publicly verifiable
          </div>
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
                {resource.external ? (
                  <a 
                    href={resource.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    {resource.action}
                    <ExternalLink size={12} />
                  </a>
                ) : (
                  <Link to={resource.path}>
                    {resource.action}
                  </Link>
                )}
              </ModernButton>
            </ModernCard>
          ))}
        </div>

        {/* Additional Resources Grid */}
        <div className="mb-12">
          <ModernHeading level={3} className="text-center mb-6 text-xl">
            Additional Resources
          </ModernHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {additionalResources.map((resource, index) => (
              <div 
                key={index}
                className="flex items-center justify-between p-4 bg-card/50 border border-border/50 rounded-lg hover:bg-card/70 transition-colors"
              >
                <div>
                  <ModernText className="font-medium text-sm">
                    {resource.title}
                  </ModernText>
                  <ModernText variant="small" muted className="text-xs">
                    {resource.description}
                  </ModernText>
                </div>
                {resource.external ? (
                  <a 
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80"
                  >
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <Link 
                    to={resource.link}
                    className="text-primary hover:text-primary/80"
                  >
                    <ExternalLink size={16} />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Transparency Notice */}
        <div className="text-center bg-slate-800/20 border border-primary/20 rounded-lg p-6">
          <ModernHeading level={4} className="mb-3 text-lg text-primary">
            Transparency & Security First
          </ModernHeading>
          <ModernText variant="body" muted className="mb-4 max-w-3xl mx-auto">
            All our code is open source, smart contracts are audited by CertiK, and our platform 
            maintains a real-time security score. We encourage developers to verify our claims 
            and contribute to the ecosystem.
          </ModernText>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a 
              href="https://github.com/renegade"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline flex items-center gap-2"
            >
              <Github size={16} />
              View Source Code
            </a>
            <a 
              href="https://skynet.certik.com/projects/renegade"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline flex items-center gap-2"
            >
              <Shield size={16} />
              Security Dashboard
            </a>
            <Link 
              to="/whitepaper"
              className="text-primary hover:underline flex items-center gap-2"
            >
              <FileText size={16} />
              Technical Whitepaper
            </Link>
          </div>
        </div>
      </ModernContainer>
    </section>
  );
};
