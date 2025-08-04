import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Home, 
  Video, 
  Music, 
  Store, 
  MessageCircle, 
  FileText,
  Users,
  TrendingUp,
  Code,
  Lightbulb,
  Radio,
  ChevronRight
} from 'lucide-react';
import { ModuleLayout, CrossModuleNav } from '@/components/ui/modular-design-system';

interface InterconnectedLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  currentModule: string;
  actions?: React.ReactNode;
}

// Define module relationships and navigation paths
const moduleMap = {
  'creator-studio': {
    name: 'Creator Studio',
    icon: Video,
    variant: 'video' as const,
    related: ['video-studio', 'podcast-studio', 'music-creation', 'live-streaming']
  },
  'video-studio': {
    name: 'Video Studio',
    icon: Video,
    variant: 'video' as const,
    related: ['creator-studio', 'video-nfts', 'live-streaming', 'ar-visualization']
  },
  'podcast-studio': {
    name: 'Podcast Studio',
    icon: Radio,
    variant: 'audio' as const,
    related: ['music-creation', 'creator-studio', 'neura-social']
  },
  'music-creation': {
    name: 'Music Creation',
    icon: Music,
    variant: 'audio' as const,
    related: ['podcast-studio', 'creator-studio', 'video-studio']
  },
  'commerce-studio': {
    name: 'Commerce Studio',
    icon: Store,
    variant: 'commerce' as const,
    related: ['creator-studio', 'finance-hub', 'neura-social']
  },
  'neura-social': {
    name: 'NeuraSocial',
    icon: MessageCircle,
    variant: 'social' as const,
    related: ['messaging', 'threaditor', 'creator-studio']
  },
  'threaditor': {
    name: 'Threaditor',
    icon: FileText,
    variant: 'social' as const,
    related: ['neura-social', 'messaging', 'creator-studio']
  },
  'global-innovators': {
    name: 'Global Innovators',
    icon: Users,
    variant: 'governance' as const,
    related: ['projects-creator', 'finance-hub', 'learn']
  },
  'finance-hub': {
    name: 'Finance Hub',
    icon: TrendingUp,
    variant: 'governance' as const,
    related: ['commerce-studio', 'global-innovators', 'creator-studio']
  },
  'learn': {
    name: 'Learn & Resources',
    icon: Code,
    variant: 'default' as const,
    related: ['global-innovators', 'whitepaper', 'creator-studio']
  }
};

const getModuleRelationships = (currentModule: string) => {
  const current = moduleMap[currentModule as keyof typeof moduleMap];
  if (!current) return [];

  return current.related.map(moduleKey => {
    const module = moduleMap[moduleKey as keyof typeof moduleMap];
    return {
      name: module.name,
      href: `/${moduleKey}`,
      description: getModuleDescription(moduleKey),
      icon: module.icon,
      variant: module.variant
    };
  });
};

const getModuleDescription = (moduleKey: string) => {
  const descriptions: Record<string, string> = {
    'creator-studio': 'Comprehensive content creation tools',
    'video-studio': 'Professional video editing and NFT creation',
    'podcast-studio': 'Audio content creation and distribution',
    'music-creation': 'Music composition and NFT marketplace',
    'commerce-studio': 'E-commerce and digital storefront builder',
    'neura-social': 'Decentralized social networking platform',
    'threaditor': 'Decentralized blogging and journalism',
    'global-innovators': 'DAO governance and innovation hub',
    'finance-hub': 'DeFi tools and financial management',
    'learn': 'Educational resources and documentation',
    'video-nfts': 'Video NFT marketplace and trading',
    'live-streaming': 'Token-gated live streaming platform',
    'ar-visualization': 'Augmented reality content creation',
    'messaging': 'Secure Web3 messaging and communication',
    'projects-creator': 'Collaborative project management',
    'whitepaper': 'Platform documentation and whitepaper'
  };
  return descriptions[moduleKey] || 'Explore this feature';
};

const getBreadcrumbs = (pathname: string) => {
  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs = [{ label: 'Home', href: '/' }];
  
  let currentPath = '';
  segments.forEach(segment => {
    currentPath += `/${segment}`;
    const module = moduleMap[segment as keyof typeof moduleMap];
    breadcrumbs.push({
      label: module?.name || segment.charAt(0).toUpperCase() + segment.slice(1),
      href: segments.length === 1 ? undefined : currentPath
    });
  });
  
  return breadcrumbs;
};

export const InterconnectedLayout: React.FC<InterconnectedLayoutProps> = ({
  children,
  title,
  description,
  currentModule,
  actions
}) => {
  const location = useLocation();
  const breadcrumbs = getBreadcrumbs(location.pathname);
  const relatedModules = getModuleRelationships(currentModule);

  return (
    <ModuleLayout
      title={title}
      description={description}
      breadcrumbs={breadcrumbs}
      actions={actions}
    >
      {/* Main Content */}
      <div className="space-y-8">
        {children}
        
        {/* Cross-Module Navigation */}
        {relatedModules.length > 0 && (
          <CrossModuleNav
            currentModule={currentModule}
            relatedModules={relatedModules}
          />
        )}
        
        {/* Quick Actions Bar */}
        <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/studio"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary/20 transition-colors duration-300"
            >
              <Home className="w-4 h-4" />
              Dashboard
            </Link>
            <Link
              to="/messaging"
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-lg hover:bg-blue-500/20 transition-colors duration-300"
            >
              <MessageCircle className="w-4 h-4" />
              Messages
            </Link>
            <Link
              to="/learn"
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 text-orange-400 border border-orange-500/20 rounded-lg hover:bg-orange-500/20 transition-colors duration-300"
            >
              <Lightbulb className="w-4 h-4" />
              Learn
            </Link>
          </div>
        </div>
        
        {/* Module Integration Status */}
        <div className="bg-card/20 backdrop-blur-sm border border-border/20 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Integration Status</h3>
            <div className="flex items-center gap-2 text-green-400 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              All systems operational
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
              <div className="w-3 h-3 bg-green-400 rounded-full" />
              <span className="text-sm text-muted-foreground">Wallet Connected</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
              <div className="w-3 h-3 bg-green-400 rounded-full" />
              <span className="text-sm text-muted-foreground">Multi-chain Ready</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
              <div className="w-3 h-3 bg-green-400 rounded-full" />
              <span className="text-sm text-muted-foreground">Data Synced</span>
            </div>
          </div>
        </div>
      </div>
    </ModuleLayout>
  );
};