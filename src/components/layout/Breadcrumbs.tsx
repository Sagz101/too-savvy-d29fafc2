import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

/** Human-readable labels for every known route segment */
const ROUTE_LABELS: Record<string, string> = {
  platform: 'Platform',
  features: 'Features',
  'user-types': 'User Types',
  auth: 'Sign In',
  onboarding: 'Onboarding',
  profile: 'Profile',
  settings: 'Settings',
  studio: 'Studio Dashboard',
  'creator-studio': 'Creator Studio',
  'video-studio': 'Video Studio',
  'podcast-studio': 'Podcast Studio',
  'music-creation': 'Music Creator',
  'live-streaming': 'Live Streaming',
  'streaming-dashboard': 'Streaming Dashboard',
  'video-integration': 'Video Integration',
  'video-marketplace': 'Video Marketplace',
  'video-nfts': 'Media NFTs',
  'ar-visualization': 'AR Visualization',
  'commerce-studio': 'E-commerce Store',
  'store-success': 'Store Success',
  threaditor: 'Threaditor',
  'neura-social': 'Social Hub',
  messaging: 'Messaging',
  'projects-creator': 'Projects',
  'global-innovators': 'Global Innovators',
  'finance-hub': 'Finance Hub',
  'dao-governance': 'DAO Governance',
  'dao-governance-rules': 'DAO Rules',
  resources: 'Resources',
  community: 'Community',
  analytics: 'Analytics',
  learn: 'Learn',
  whitepaper: 'Whitepaper',
  neurapathy: 'Neurapathy',
  terms: 'Terms of Service',
  privacy: 'Privacy Policy',
  'skeleton-demo': 'Skeleton Demo',
};

export const Breadcrumbs: React.FC = () => {
  const { pathname } = useLocation();

  // Don't render on the homepage
  if (pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);

  const crumbs = segments.map((segment, index) => {
    const path = '/' + segments.slice(0, index + 1).join('/');
    const label = ROUTE_LABELS[segment] ?? segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    const isLast = index === segments.length - 1;
    return { path, label, isLast };
  });

  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center gap-1.5 text-sm text-muted-foreground py-4"
    >
      <Link
        to="/"
        className="flex items-center gap-1 hover:text-foreground transition-colors"
        aria-label="Home"
      >
        <Home size={14} />
        <span className="sr-only sm:not-sr-only">Home</span>
      </Link>

      {crumbs.map(({ path, label, isLast }) => (
        <React.Fragment key={path}>
          <ChevronRight size={12} className="text-muted-foreground/50 flex-shrink-0" />
          {isLast ? (
            <span className="text-foreground font-medium truncate max-w-[200px]" aria-current="page">
              {label}
            </span>
          ) : (
            <Link
              to={path}
              className="hover:text-foreground transition-colors truncate max-w-[160px]"
            >
              {label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
