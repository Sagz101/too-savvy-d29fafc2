
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { 
  Video, 
  Music, 
  ShoppingBag, 
  MessageSquare, 
  FileText, 
  Bot,
  TrendingUp,
  Shield,
  Zap,
  ArrowRight
} from 'lucide-react';

interface ModularFeatureCardsProps {
  onInterestSelect: (interests: string[]) => void;
  onContinue?: () => void;
}

export const ModularFeatureCards: React.FC<ModularFeatureCardsProps> = ({ 
  onInterestSelect,
  onContinue 
}) => {
  const navigate = useNavigate();
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const modules = [
    {
      id: 'video',
      icon: Video,
      title: 'Video Studio',
      description: 'Create, mint, and monetize video content',
      features: ['NFT Minting', 'Live Streaming', 'AR Integration'],
      gasEstimate: '~$0.02',
      gradient: 'from-cyan-500 to-blue-600',
      trendScore: 98
    },
    {
      id: 'music',
      icon: Music,
      title: 'Music Creator',
      description: 'Compose, distribute, and earn from music',
      features: ['Podcast Studio', 'Music NFTs', 'Royalty Tracking'],
      gasEstimate: '~$0.015',
      gradient: 'from-purple-500 to-pink-600',
      trendScore: 94
    },
    {
      id: 'commerce',
      icon: ShoppingBag,
      title: 'E-commerce Store',
      description: 'Build your decentralized marketplace',
      features: ['No Platform Fees', 'Crypto Payments', 'Global Reach'],
      gasEstimate: '~$0.03',
      gradient: 'from-green-500 to-emerald-600',
      trendScore: 96
    },
    {
      id: 'social',
      icon: MessageSquare,
      title: 'Social Hub',
      description: 'Connect with your community',
      features: ['Token Gating', 'DAO Governance', 'Cross-Platform'],
      gasEstimate: '~$0.01',
      gradient: 'from-orange-500 to-red-600',
      trendScore: 92
    },
    {
      id: 'writing',
      icon: FileText,
      title: 'Threaditor',
      description: 'Decentralized blogging platform',
      features: ['Fact Checking', 'Revenue Sharing', 'Community Voting'],
      gasEstimate: '~$0.008',
      gradient: 'from-indigo-500 to-purple-600',
      trendScore: 89
    },
    {
      id: 'ai',
      icon: Bot,
      title: 'AI Copilot',
      description: 'Intelligent content assistance',
      features: ['Content Generation', 'Analytics Insights', 'Optimization'],
      gasEstimate: '~$0.005',
      gradient: 'from-yellow-500 to-orange-600',
      trendScore: 99
    }
  ];

  const handleModuleToggle = (moduleId: string) => {
    const updated = selectedModules.includes(moduleId)
      ? selectedModules.filter(id => id !== moduleId)
      : [...selectedModules, moduleId];
    
    setSelectedModules(updated);
    onInterestSelect(updated);
  };

  const handleCardExpand = (moduleId: string) => {
    setExpandedCard(expandedCard === moduleId ? null : moduleId);
  };

  const handleContinue = () => {
    if (onContinue) {
      onContinue();
    } else {
      // Navigate to studio dashboard with selected modules
      const moduleParams = selectedModules.length > 0 ? `?modules=${selectedModules.join(',')}` : '';
      navigate(`/studio${moduleParams}`);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-6">
          Choose Your Creator Toolkit
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Modular tools that grow with your creative journey. Select what you need, when you need it.
        </p>
        
        {selectedModules.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {selectedModules.map(moduleId => {
              const module = modules.find(m => m.id === moduleId);
              return module ? (
                <Badge 
                  key={moduleId}
                  className="bg-web3-cyan/20 text-web3-cyan border-web3-cyan/30"
                >
                  {module.title}
                </Badge>
              ) : null;
            })}
          </div>
        )}
      </div>

      {/* Desktop: Horizontal Scrollable Carousel */}
      <div className="hidden lg:block mb-12">
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-web3-cyan">
          {modules.map((module) => {
            const IconComponent = module.icon;
            const isSelected = selectedModules.includes(module.id);
            const isExpanded = expandedCard === module.id;
          
            return (
              <Card
                key={module.id}
                className={`flex-shrink-0 w-80 relative overflow-hidden transition-all duration-300 cursor-pointer hover:scale-105 ${
                  isSelected 
                    ? 'ring-2 ring-web3-cyan bg-web3-cyan/5' 
                    : 'bg-background/40 backdrop-blur-sm hover:bg-background/60'
                } ${isExpanded ? 'w-96' : ''}`}
                onClick={() => handleCardExpand(module.id)}
              >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${module.gradient} flex items-center justify-center`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      <TrendingUp size={12} className="mr-1" />
                      {module.trendScore}%
                    </Badge>
                    <Badge variant="outline" className="text-xs text-green-400 border-green-400/30">
                      <Zap size={12} className="mr-1" />
                      {module.gasEstimate}
                    </Badge>
                  </div>
                </div>
                
                <CardTitle className="text-lg font-semibold text-white">
                  {module.title}
                </CardTitle>
                <p className="text-sm text-gray-300">{module.description}</p>
              </CardHeader>
              
              {isExpanded && (
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <h4 className="font-medium text-white flex items-center gap-2">
                      <Shield size={16} className="text-web3-cyan" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {module.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-300 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-web3-cyan rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button
                      className={`w-full mt-4 ${
                        isSelected 
                          ? 'bg-web3-cyan text-cosmic-deep hover:bg-web3-cyan/90'
                          : 'bg-gradient-to-r from-web3-cyan to-web3-purple hover:opacity-90'
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleModuleToggle(module.id);
                      }}
                    >
                      {isSelected ? 'Selected' : 'Add to Toolkit'}
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              )}
              </Card>
            );
          })}
        </div>
      </div>

      {/* Mobile & Tablet: Grid Layout */}
      <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {modules.map((module) => {
          const IconComponent = module.icon;
          const isSelected = selectedModules.includes(module.id);
          const isExpanded = expandedCard === module.id;
          
          return (
            <Card
              key={module.id}
              className={`relative overflow-hidden transition-all duration-300 cursor-pointer hover:scale-105 ${
                isSelected 
                  ? 'ring-2 ring-web3-cyan bg-web3-cyan/5' 
                  : 'bg-background/40 backdrop-blur-sm hover:bg-background/60'
              }`}
              onClick={() => handleCardExpand(module.id)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${module.gradient} flex items-center justify-center`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      <TrendingUp size={12} className="mr-1" />
                      {module.trendScore}%
                    </Badge>
                    <Badge variant="outline" className="text-xs text-green-400 border-green-400/30">
                      <Zap size={12} className="mr-1" />
                      {module.gasEstimate}
                    </Badge>
                  </div>
                </div>
                
                <CardTitle className="text-lg font-semibold text-white">
                  {module.title}
                </CardTitle>
                <p className="text-sm text-gray-300">{module.description}</p>
              </CardHeader>
              
              {isExpanded && (
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <h4 className="font-medium text-white flex items-center gap-2">
                      <Shield size={16} className="text-web3-cyan" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {module.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-300 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-web3-cyan rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Button
                      className={`w-full mt-4 ${
                        isSelected 
                          ? 'bg-web3-cyan text-cosmic-deep hover:bg-web3-cyan/90'
                          : 'bg-gradient-to-r from-web3-cyan to-web3-purple hover:opacity-90'
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleModuleToggle(module.id);
                      }}
                    >
                      {isSelected ? 'Selected' : 'Add to Toolkit'}
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              )}
            </Card>
          );
        })}
      </div>

      {selectedModules.length > 0 && (
        <div className="text-center">
          <Button
            size="lg"
            onClick={handleContinue}
            className="bg-gradient-to-r from-web3-cyan to-web3-purple hover:opacity-90 text-white font-semibold px-8 py-4"
          >
            Continue with {selectedModules.length} Module{selectedModules.length > 1 ? 's' : ''}
            <ArrowRight size={20} className="ml-2" />
          </Button>
        </div>
      )}
    </div>
  );
};
