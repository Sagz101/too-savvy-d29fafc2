import React from 'react';
import { 
  ShoppingBag, 
  Video, 
  Users, 
  Music, 
  Brain, 
  FileText,
  ArrowRight,
  Sparkles,
  BarChart3
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ToolkitItemProps {
  id: string;
  name: string;
  icon: React.ElementType;
  value: string;
  label: string;
  description: string;
  highlight?: boolean;
  tags?: string[];
  route: string;
}

const ToolkitCard: React.FC<ToolkitItemProps> = ({ 
  name, 
  icon: Icon, 
  value, 
  label, 
  description, 
  highlight,
  tags,
  route
}) => {
  return (
    <div className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:scale-[1.02] ${
      highlight 
        ? 'bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-indigo-500/30 shadow-xl shadow-indigo-500/10' 
        : 'bg-gray-900/40 backdrop-blur-sm border-gray-800 hover:border-indigo-500/30'
    }`}>
      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="absolute top-4 right-4 flex gap-2">
          {tags.map(tag => (
            <span 
              key={tag}
              className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                tag === 'Featured' 
                  ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' 
                  : tag === 'Popular'
                  ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                  : 'bg-indigo-500/20 text-indigo-300'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-gray-800/60 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
        <Icon className="w-7 h-7 text-indigo-400" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
      
      <div className="mb-3">
        <div className="text-3xl font-bold text-white">{value}</div>
        <div className="text-sm text-gray-400 flex items-center gap-2">
          {highlight ? (
            <Sparkles className="w-4 h-4 text-yellow-400" />
          ) : (
            <BarChart3 className="w-4 h-4 text-gray-500" />
          )}
          {label}
        </div>
      </div>

      <p className="text-sm text-gray-400 mb-6">{description}</p>

      <Button 
        className={`w-full ${
          highlight 
            ? 'bg-indigo-500 hover:bg-indigo-400 text-white' 
            : 'bg-gray-800 hover:bg-indigo-500 text-white'
        } transition-colors`}
        asChild
      >
        <Link to={route}>
          Launch App
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </Button>
    </div>
  );
};

export const ToolkitSection: React.FC = () => {
  const toolkitItems: ToolkitItemProps[] = [
    {
      id: 'ecommerce',
      name: 'E-commerce Store',
      icon: ShoppingBag,
      value: '$2,847',
      label: 'Total Sales Processed',
      description: 'Launch your decentralized storefront in minutes with zero fees.',
      highlight: true,
      tags: ['Popular', 'Featured'],
      route: '/commerce-studio'
    },
    {
      id: 'video',
      name: 'Video Studio',
      icon: Video,
      value: '$2.1M',
      label: 'Content Minted Value',
      description: 'Create, mint, and monetize video content directly on-chain.',
      tags: ['New'],
      route: '/video-studio'
    },
    {
      id: 'social',
      name: 'Social Hub',
      icon: Users,
      value: '421K+',
      label: 'Community Interactions',
      description: 'Connect with your community and build your sovereign brand.',
      route: '/neura-social'
    },
    {
      id: 'music',
      name: 'Music Creator',
      icon: Music,
      value: '$8,934',
      label: 'Monthly Earnings Avg.',
      description: 'Compose, distribute, and earn from tokenized music releases.',
      route: '/music-creation'
    },
    {
      id: 'ai',
      name: 'AI Copilot',
      icon: Brain,
      value: '89%',
      label: 'Content Assist Efficiency',
      description: 'Intelligent content assistance to speed up your creative flow.',
      tags: ['AI'],
      route: '/studio'
    },
    {
      id: 'threaditor',
      name: 'Threaditor',
      icon: FileText,
      value: '15.7K',
      label: 'Active Newsletters',
      description: 'Decentralized blogging platform for passive income generation.',
      route: '/threaditor'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 relative">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-indigo-400" />
            Creator Studio Toolkit
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            A suite of decentralized tools to manage your entire creative and monetization workflow in one place.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolkitItems.map((item) => (
            <ToolkitCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
