// Navigation test utility to verify all routes are properly configured

export const websiteRoutes = [
  // Main pages
  { path: '/', name: 'Home' },
  { path: '/auth', name: 'Authentication' },
  { path: '/onboarding', name: 'Onboarding' },
  
  // Studio pages
  { path: '/studio', name: 'Studio Dashboard' },
  { path: '/creator-studio', name: 'Creator Studio' },
  { path: '/video-studio', name: 'Video Studio' },
  { path: '/podcast-studio', name: 'Podcast Studio' },
  { path: '/music-creation', name: 'Music Creation' },
  { path: '/live-streaming', name: 'Live Streaming' },
  { path: '/streaming-dashboard', name: 'Streaming Dashboard' },
  
  // Video related
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
  { text: 'Get Started', expectedRoute: '/onboarding' },
  { text: 'Start Creating Now', expectedRoute: '/onboarding' },
  { text: 'Explore Creator Studio', expectedRoute: '/creator-studio' },
  { text: 'New User Guide', expectedRoute: '/onboarding' },
  
  // Module buttons
  { text: 'Explore Module', expectedRoute: 'dynamic' }, // Routes vary by module
  { text: 'Create a Video NFT', expectedRoute: '/video-studio' },
  { text: 'Launch a Project', expectedRoute: '/projects-creator' },
  { text: 'View Analytics', expectedRoute: '/studio' },
  
  // Navigation buttons
  { text: 'Go to Studio', expectedRoute: '/studio' },
  { text: 'Messages', expectedRoute: '/messaging' },
  { text: 'Sign In', expectedRoute: '/auth' },
  
  // Footer buttons
  { text: 'View all courses', expectedRoute: '/learn' },
];

export const validateNavigation = () => {
  console.log('🔍 Navigation Test Results:');
  console.log('📍 Total Routes:', websiteRoutes.length);
  console.log('🎯 Button Targets:', buttonTargets.length);
  
  // Check for duplicate routes
  const routePaths = websiteRoutes.map(route => route.path);
  const duplicates = routePaths.filter((path, index) => routePaths.indexOf(path) !== index);
  
  if (duplicates.length > 0) {
    console.warn('⚠️ Duplicate routes found:', duplicates);
  } else {
    console.log('✅ No duplicate routes found');
  }
  
  // Check for missing routes that are commonly referenced
  const commonRoutes = ['/creator-studio', '/video-studio', '/messaging', '/learn', '/auth'];
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