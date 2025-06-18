
import React from 'react';
import { Code, Book, Github, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ModernButton } from '@/components/ui/modern-button';
import { ModernCard } from '@/components/ui/modern-card';
import { ModernHeading, ModernText } from '@/components/ui/modern-typography';

export const DeveloperFocusedCTA: React.FC = () => {
  const developerTools = [
    {
      icon: Code,
      title: "SDK & APIs",
      description: "Integrate Web3 features in minutes",
      action: "View Docs",
      path: "/video-integration"
    },
    {
      icon: Terminal,
      title: "Quick Start",
      description: "Deploy your first NFT in 5 minutes",
      action: "Start Tutorial",
      path: "/video-studio"
    },
    {
      icon: Github,
      title: "Open Source",
      description: "Contribute to the ecosystem",
      action: "View GitHub",
      path: "/video-integration"
    },
    {
      icon: Book,
      title: "Documentation",
      description: "Complete guides & references",
      action: "Read Docs",
      path: "/whitepaper"
    }
  ];

  return (
    <section className="py-16 bg-card/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <ModernHeading level={2} className="mb-4 text-3xl font-bold">
            Built for Developers
          </ModernHeading>
          <ModernText variant="lead" muted className="max-w-2xl mx-auto">
            Powerful tools and comprehensive documentation to integrate Web3 functionality into your applications
          </ModernText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {developerTools.map((tool, index) => (
            <ModernCard
              key={index}
              variant="elevated"
              size="sm"
              interactive
              className="text-center hover:scale-105 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <tool.icon size={24} className="text-primary" />
                </div>
              </div>
              <ModernHeading level={6} className="mb-2 text-sm font-semibold">
                {tool.title}
              </ModernHeading>
              <ModernText variant="small" muted className="mb-4 text-xs leading-relaxed">
                {tool.description}
              </ModernText>
              <ModernButton
                variant="outline"
                size="sm"
                asChild
                className="w-full text-xs"
              >
                <Link to={tool.path}>
                  {tool.action}
                </Link>
              </ModernButton>
            </ModernCard>
          ))}
        </div>

        {/* Code Example */}
        <ModernCard variant="filled" size="md" className="bg-gray-900 text-green-400 font-mono">
          <ModernText variant="caption" className="text-gray-400 mb-3">
            // Quick integration example
          </ModernText>
          <pre className="text-sm overflow-x-auto">
{`import { T00SavvySDK } from '@t00savvy/sdk';

const sdk = new T00SavvySDK({
  apiKey: 'your-api-key',
  network: 'polygon'
});

// Mint an NFT
const nft = await sdk.nft.mint({
  to: userAddress,
  metadata: {
    name: 'My First NFT',
    description: 'Created with T00 Savvy'
  }
});`}
          </pre>
        </ModernCard>
      </div>
    </section>
  );
};
