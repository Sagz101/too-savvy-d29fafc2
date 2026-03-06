// Navigation test utility to verify all routes are properly configured

export const websiteRoutes = [
  // Core
  { path: '/', name: 'Home' },
  { path: '/auth', name: 'Authentication' },
  { path: '/onboarding', name: 'Onboarding' },
  { path: '/profile', name: 'Profile' },
  { path: '/settings', name: 'Settings' },

  // Platform & Features
  { path: '/platform', name: 'Platform' },
  { path: '/features', name: 'Features' },
  { path: '/user-types', name: 'User Types' },

  // Studio pages
  { path: '/studio', name: 'Studio Dashboard' },
  { path: '/creator-studio', name: 'Creator Studio' },
  { path: '/video-studio', name: 'Video Studio' },
  { path: '/podcast-studio', name: 'Podcast Studio' },
  { path: '/music-creation', name: 'Music Creation' },
  { path: '/live-streaming', name: 'Live Streaming' },
  { path: '/streaming-dashboard', name: 'Streaming Dashboard' },

  // Studio sub-routes (redirects)
  { path: '/studio/store', name: 'Store (→ Commerce Studio)' },
  { path: '/studio/video', name: 'Video (→ Video Studio)' },
  { path: '/studio/social', name: 'Social (→ NeuraSocial)' },
  { path: '/studio/music', name: 'Music (→ Music Creation)' },

  // Video
  { path: '/video-integration', name: 'Video Integration' },
  { path: '/video-marketplace', name: 'Video Marketplace' },
  { path: '/video-nfts', name: 'Video NFTs' },
  { path: '/ar-visualization', name: 'AR Visualization' },

  // Commerce
  { path: '/commerce-studio', name: 'Commerce Studio' },
  { path: '/store-success', name: 'Store Success' },

  // Social & Content
  { path: '/threaditor', name: 'Threaditor' },
  { path: '/neura-social', name: 'NeuraSocial' },
  { path: '/messaging', name: 'Messaging' },

  // Innovation & Finance
  { path: '/projects-creator', name: 'Projects Creator' },
  { path: '/global-innovators', name: 'Global Innovators' },
  { path: '/finance-hub', name: 'Finance Hub' },

  // DAO Governance
  { path: '/dao-governance', name: 'DAO Governance' },
  { path: '/dao-governance-rules', name: 'DAO Governance Rules' },

  // Resources & Community
  { path: '/resources', name: 'Resources' },
  { path: '/community', name: 'Community' },
  { path: '/analytics', name: 'Analytics' },

  // Learning & Documentation
  { path: '/learn', name: 'Learn' },
  { path: '/whitepaper', name: 'Whitepaper' },
  { path: '/neurapathy', name: 'Neurapathy' },

  // Legal
  { path: '/privacy', name: 'Privacy Policy' },
  { path: '/terms', name: 'Terms of Service' },
];

export const buttonTargets = [
  // Hero section buttons
  { text: 'Start Creating for Free', expectedRoute: '/studio' },
  { text: 'Connect Your Wallet', expectedRoute: '/finance-hub' },

  // Toolkit buttons
  { text: 'Launch App (E-commerce)', expectedRoute: '/commerce-studio' },
  { text: 'Launch App (Video)', expectedRoute: '/video-studio' },
  { text: 'Launch App (Social)', expectedRoute: '/neura-social' },
  { text: 'Launch App (Music)', expectedRoute: '/music-creation' },
  { text: 'Launch App (Threaditor)', expectedRoute: '/threaditor' },

  // Navigation buttons
  { text: 'Explore Marketplace', expectedRoute: '/commerce-studio' },
  { text: 'Join DAO Governance', expectedRoute: '/dao-governance' },
  { text: 'Begin Your Journey', expectedRoute: '/onboarding' },
  { text: 'Message Creator', expectedRoute: '/messaging' },
  { text: 'View Profile', expectedRoute: '/profile' },
  { text: 'Sign In', expectedRoute: '/auth' },
];

export const validateNavigation = () => {
  console.log('🔍 Navigation Test Results:');
  console.log('📍 Total Routes:', websiteRoutes.length);
  console.log('🎯 Button Targets:', buttonTargets.length);

  const routePaths = websiteRoutes.map(route => route.path);
  const duplicates = routePaths.filter((path, index) => routePaths.indexOf(path) !== index);

  if (duplicates.length > 0) {
    console.warn('⚠️ Duplicate routes found:', duplicates);
  } else {
    console.log('✅ No duplicate routes found');
  }

  const commonRoutes = ['/creator-studio', '/video-studio', '/messaging', '/learn', '/auth', '/platform', '/features', '/dao-governance', '/community', '/analytics', '/resources', '/terms', '/privacy'];
  const missingRoutes = commonRoutes.filter(route => !routePaths.includes(route));

  if (missingRoutes.length > 0) {
    console.warn('⚠️ Missing common routes:', missingRoutes);
  } else {
    console.log('✅ All common routes configured');
  }

  return {
    totalRoutes: websiteRoutes.length,
    duplicates,
    missingRoutes,
    isValid: duplicates.length === 0 && missingRoutes.length === 0
  };
};
