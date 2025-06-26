
import React from 'react';
import { StickyNavigation } from '@/components/ui/sticky-navigation';
import { AccessibilityEnhancements } from '@/components/ui/accessibility-enhancements';
import { MobileOptimization } from '@/components/ui/mobile-optimization';

export const EnhancedHeader: React.FC = () => {
  return (
    <>
      {/* Skip to content link for screen readers */}
      <a 
        href="#main-content" 
        className="skip-to-content sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>
      
      <StickyNavigation />
      <AccessibilityEnhancements />
      <MobileOptimization />
    </>
  );
};
