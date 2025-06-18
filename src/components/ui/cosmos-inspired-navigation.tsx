
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { smoothScrollToSection } from '@/utils/smoothScroll';
import { useActiveSection } from '@/hooks/useActiveSection';

export const CosmosInspiredNavigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Define all sections with their IDs and labels
  const navigationSections = [
    { id: 'hero', label: 'Create' },
    { id: 'user-types', label: 'Own' },
    { id: 'features', label: 'Thrive' },
    { id: 'stats', label: 'Multi-Chain' },
    { id: 'developer-resources', label: 'Developer Resources' },
    { id: 'get-started', label: 'Get Started' },
    { id: 'creator-dashboard', label: 'Creator Studio' },
    { id: 'video-showcase', label: 'Marketplace' },
    { id: 'platform-overview', label: 'Dashboard' },
    { id: 'social-hub', label: 'NeuraSocial' },
    { id: 'threaditor', label: 'Threaditor' }
  ];

  const sectionIds = navigationSections.map(section => section.id);
  const activeSection = useActiveSection(sectionIds);

  const handleNavClick = (sectionId: string) => {
    smoothScrollToSection(sectionId, 70);
    setIsMobileMenuOpen(false);
    
    // Event tracking for analytics
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track('NavClick', { 
        section: sectionId, 
        timestamp: new Date().toISOString() 
      });
    } else {
      console.log('Navigation Click:', { section: sectionId, timestamp: new Date().toISOString() });
    }
  };

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    
    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isMobileMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-primary/20" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/2e6dc416-59b6-4048-a87d-858554756c11.png" 
              alt="T00 Savvy - Decentralized Creator Platform" 
              className="h-8 w-auto object-contain hover:opacity-80 transition-opacity"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleNavClick(section.id)}
                  className={`
                    relative px-3 py-2 text-base font-normal transition-all duration-300 ease-in-out
                    ${activeSection === section.id 
                      ? 'text-foreground font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full' 
                      : 'text-foreground/80 hover:text-primary hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-0.5 hover:after:bg-primary hover:after:rounded-full'
                    }
                    focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background
                  `}
                  style={{ fontFamily: "'Open Sans', sans-serif" }}
                  aria-current={activeSection === section.id ? 'page' : undefined}
                  tabIndex={0}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                // Track hamburger menu clicks
                if (typeof window !== 'undefined' && (window as any).analytics) {
                  (window as any).analytics.track('HamburgerToggle', { 
                    isOpen: !isMobileMenuOpen,
                    timestamp: new Date().toISOString() 
                  });
                } else {
                  console.log('Hamburger Toggle:', { isOpen: !isMobileMenuOpen, timestamp: new Date().toISOString() });
                }
              }}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-colors duration-200"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-xl border-t border-primary/20">
          {navigationSections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleNavClick(section.id)}
              className={`
                block w-full text-left px-3 py-2 text-base font-normal transition-all duration-300 ease-in-out rounded-md
                ${activeSection === section.id 
                  ? 'text-foreground font-semibold bg-secondary border-l-4 border-primary' 
                  : 'text-foreground/80 hover:text-primary hover:bg-secondary hover:border-l-4 hover:border-primary'
                }
                focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background
              `}
              style={{ fontFamily: "'Open Sans', sans-serif" }}
              aria-current={activeSection === section.id ? 'page' : undefined}
              tabIndex={0}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
