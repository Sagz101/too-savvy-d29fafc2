import React, { useState } from 'react';
import { 
  Video, 
  Mic, 
  Store, 
  Users, 
  PenTool, 
  Music, 
  Zap, 
  ChevronDown,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { ModernCard } from '@/components/ui/modern-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface Module {
  id: string;
  name: string;
  icon: React.ElementType;
  category: 'Content Creation' | 'Commerce' | 'Community';
  gasFee: string;
  keyFeatures: string[];
  description: string;
  route: string;
  color: string;
}

export const ModuleOverviewTable: React.FC = () => {
  const [expandedModule, setExpandedModule] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const modules: Module[] = [
    {
      id: 'creator-studio',
      name: 'Creator Studio',
      icon: Video,
      category: 'Content Creation',
      gasFee: '~0.001 ETH',
      keyFeatures: ['NFT Minting', 'Live Streaming', 'Token Gates'],
      description: 'Complete content creation suite with Web3 monetization',
      route: '/creator-studio',
      color: 'text-web3-cyan'
    },
    {
      id: 'podcast-music',
      name: 'Podcast & Music',
      icon: Mic,
      category: 'Content Creation',
      gasFee: '~0.0008 ETH',
      keyFeatures: ['Audio NFTs', 'Royalty Splits', 'Fan Tokens'],
      description: 'Professional audio creation and distribution platform',
      route: '/podcast-studio',
      color: 'text-web3-purple'
    },
    {
      id: 'storefront',
      name: 'Storefront Builder',
      icon: Store,
      category: 'Commerce',
      gasFee: '~0.002 ETH',
      keyFeatures: ['Smart Contracts', 'Crypto Payments', 'Authenticity'],
      description: 'Build and manage your Web3 commerce experience',
      route: '/commerce-studio',
      color: 'text-web3-green'
    },
    {
      id: 'neurasocial',
      name: 'NeuraSocial',
      icon: Users,
      category: 'Community',
      gasFee: '~0.0005 ETH',
      keyFeatures: ['Social Tokens', 'Community Governance', 'Cross-Platform'],
      description: 'Decentralized social network for creators and fans',
      route: '/neurasocial',
      color: 'text-web3-accent'
    },
    {
      id: 'threaditor',
      name: 'Threaditor',
      icon: PenTool,
      category: 'Content Creation',
      gasFee: '~0.0003 ETH',
      keyFeatures: ['Publishing NFTs', 'Reader Rewards', 'Fact Checking'],
      description: 'Web3-native writing and publishing platform',
      route: '/threaditor',
      color: 'text-web3-cyan'
    },
    {
      id: 'music-creation',
      name: 'Music Creation',
      icon: Music,
      category: 'Content Creation',
      gasFee: '~0.0012 ETH',
      keyFeatures: ['AI Composition', 'Stem NFTs', 'Collaborative Tools'],
      description: 'Advanced music creation with AI assistance',
      route: '/music-creation',
      color: 'text-web3-purple'
    }
  ];

  const categories = ['All', 'Content Creation', 'Commerce', 'Community'];

  const filteredModules = selectedCategory === 'All' 
    ? modules 
    : modules.filter(module => module.category === selectedCategory);

  const toggleExpanded = (moduleId: string) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category 
              ? "bg-web3-cyan text-white" 
              : "border-border/50 hover:border-web3-cyan/50"
            }
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Module Grid */}
      <div className="grid gap-6">
        {filteredModules.map((module) => (
          <ModernCard 
            key={module.id}
            variant="filled"
            className="transition-all duration-300 hover:scale-[1.02] bg-background/20 backdrop-blur-sm"
          >
            <div className="p-6">
              {/* Module Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-background/50 ${module.color}`}>
                    <module.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{module.name}</h3>
                    <p className="text-sm text-gray-400">{module.category}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Badge variant="outline" className="border-web3-green/30 text-web3-green">
                    <Zap size={12} className="mr-1" />
                    {module.gasFee}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleExpanded(module.id)}
                    className="text-gray-400 hover:text-white"
                  >
                    {expandedModule === module.id ? (
                      <ChevronDown size={20} />
                    ) : (
                      <ChevronRight size={20} />
                    )}
                  </Button>
                </div>
              </div>

              {/* Module Description */}
              <p className="text-gray-300 mb-4">{module.description}</p>

              {/* Key Features */}
              <div className="flex flex-wrap gap-2 mb-4">
                {module.keyFeatures.map((feature, index) => (
                  <Badge 
                    key={index}
                    variant="secondary"
                    className="bg-background/30 text-gray-300"
                  >
                    {feature}
                  </Badge>
                ))}
              </div>

              {/* Expanded Content */}
              {expandedModule === module.id && (
                <div className="border-t border-border/50 pt-4 mt-4 animate-fade-in">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Features Include:</h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        <li>• Advanced creation tools</li>
                        <li>• Web3 monetization options</li>
                        <li>• Community engagement features</li>
                        <li>• Cross-platform distribution</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Network Support:</h4>
                      <div className="flex flex-wrap gap-1">
                        <Badge variant="outline" className="text-xs">Ethereum</Badge>
                        <Badge variant="outline" className="text-xs">Polygon</Badge>
                        <Badge variant="outline" className="text-xs">Optimism</Badge>
                        <Badge variant="outline" className="text-xs">Arbitrum</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 mt-4">
                    <Button asChild className="bg-web3-cyan hover:opacity-90">
                      <Link to={module.route}>
                        Explore Module
                        <ExternalLink className="ml-2" size={16} />
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm">
                      View Demo
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </ModernCard>
        ))}
      </div>

      {/* Quick Stats Summary */}
      <ModernCard variant="filled" className="p-6 bg-gradient-to-r from-web3-cyan/10 to-web3-purple/10 border-web3-cyan/20">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-white mb-2">
            All Modules Optimized for Creator Success
          </h3>
          <p className="text-gray-300 text-sm">
            Average gas optimization: <span className="text-web3-green font-medium">90% savings</span> • 
            Cross-chain compatible • Zero platform fees
          </p>
        </div>
      </ModernCard>
    </div>
  );
};