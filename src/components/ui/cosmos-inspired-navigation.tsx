
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { smoothScrollToSection } from '@/utils/smoothScroll';
import { useActiveSection } from '@/hooks/useActiveSection';

export const CosmosInspiredNavigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Simplified navigation sections - core menu only
  const navigationSections = [
    { id: 'hero', label: 'Create' },
    { id: 'user-types', label: 'Own' },
    { id: 'features', label: 'Thrive' },
    { id: 'get-started', label: 'Get Started' },
    { id: 'developer-resources', label: 'Developer Resources' },
    { id: 'platform-overview', label: 'Dashboard' }
  ];

  const sectionIds = navigationSections.map(section => section.id);
  const activeSection = useActiveSection(sectionIds);

  // Enhanced event tracking function for analytics integration
  const trackNavClick = (action: string, section?: string) => {
    const eventData = {
      action,
      section: section || action,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };

    // Multiple tracking methods for comprehensive analytics
    if (typeof window !== 'undefined') {
      const w = window as Window & {
        analytics?: { track: (event: string, data: unknown) => void };
        gtag?: (event: string, action: string, params: Record<string, unknown>) => void;
      };
      // Web3 Analytics preparation (Chainlink oracles, etc.)
      if (w.analytics) {
        w.analytics.track('NavClick', eventData);
      }

      // Google Analytics 4 preparation
      if (w.gtag) {
        w.gtag('event', 'navigation_click', {
          section_id: section || action,
          timestamp: eventData.timestamp
        });
      }
      
      // Console logging for development and debugging
      console.log('Navigation Event:', eventData);
      
      // Custom event for other integrations
      window.dispatchEvent(new CustomEvent('navClick', { detail: eventData }));
    }
  };

  const handleNavClick = (sectionId: string) => {
    smoothScrollToSection(sectionId, 80); // Updated to 80px offset
    setIsMobileMenuOpen(false);
    trackNavClick('section_click', sectionId);
  };

  const handleHamburgerClick = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    trackNavClick('hamburger_menu', newState ? 'opened' : 'closed');
  };

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        trackNavClick('hamburger_menu', 'closed_escape');
      }
    };
    
    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cosmos-dark/95 backdrop-blur-xl border-b border-cosmos-border" role="banner">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div className="flex-shrink-0">
            <a 
              href="/" 
              className="brand text-2xl font-bold text-white hover:text-cosmos-cyan transition-colors duration-300"
              style={{ fontFamily: "'Inter', 'Open Sans', sans-serif" }}
              onClick={() => trackNavClick('brand_click', 'home')}
            >
              T00 Savvy
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navigationSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleNavClick(section.id)}
                  className={`
                    relative px-4 py-2 text-base font-normal transition-all duration-300 ease-in-out
                    ${activeSection === section.id 
                      ? 'text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-white after:rounded-full' 
                      : 'text-white/90 hover:text-cosmos-cyan hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-0.5 hover:after:bg-cosmos-cyan hover:after:rounded-full'
                    }
                    focus:outline-none focus:ring-2 focus:ring-cosmos-cyan focus:ring-offset-2 focus:ring-offset-cosmos-dark
                  `}
                  style={{ fontFamily: "'Inter', 'Open Sans', sans-serif" }}
                  aria-current={activeSection === section.id ? 'page' : undefined}
                  tabIndex={0}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile hamburger button */}
          <div className="md:hidden">
            <button
              onClick={handleHamburgerClick}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-cosmos-cyan hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cosmos-cyan transition-all duration-200"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-cosmos-dark/98 backdrop-blur-xl border-t border-cosmos-border">
            {navigationSections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className={`
                  block w-full text-left px-4 py-3 text-base font-normal transition-all duration-300 ease-in-out rounded-lg
                  ${activeSection === section.id 
                    ? 'text-white font-semibold bg-white/10 border-l-4 border-white' 
                    : 'text-white/90 hover:text-cosmos-cyan hover:bg-white/5 hover:border-l-4 hover:border-cosmos-cyan'
                  }
                  focus:outline-none focus:ring-2 focus:ring-cosmos-cyan focus:ring-offset-2 focus:ring-offset-cosmos-dark
                `}
                style={{ fontFamily: "'Inter', 'Open Sans', sans-serif" }}
                aria-current={activeSection === section.id ? 'page' : undefined}
                tabIndex={0}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};
