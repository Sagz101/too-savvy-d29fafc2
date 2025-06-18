
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
    smoothScrollToSection(sectionId, 70); // 70px offset for fixed navbar
    setIsMobileMenuOpen(false);
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a] border-b border-gray-800" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/2e6dc416-59b6-4048-a87d-858554756c11.png" 
              alt="T00 Savvy - Decentralized Creator Platform" 
              className="h-8 w-auto object-contain"
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
                      ? 'text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-white after:rounded-full' 
                      : 'text-white hover:text-[#00b7eb] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:right-0 hover:after:h-0.5 hover:after:bg-[#00b7eb] hover:after:rounded-full'
                    }
                    focus:outline-none focus:ring-2 focus:ring-[#00b7eb] focus:ring-offset-2 focus:ring-offset-[#1a1a1a]
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
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#00b7eb] hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#00b7eb] transition-colors duration-200"
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
        <div className="px-2 pt-2 pb-3 space-y-1 bg-[#1a1a1a] border-t border-gray-800">
          {navigationSections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleNavClick(section.id)}
              className={`
                block w-full text-left px-3 py-2 text-base font-normal transition-all duration-300 ease-in-out rounded-md
                ${activeSection === section.id 
                  ? 'text-white font-semibold bg-gray-800 border-l-4 border-white' 
                  : 'text-white hover:text-[#00b7eb] hover:bg-gray-800 hover:border-l-4 hover:border-[#00b7eb]'
                }
                focus:outline-none focus:ring-2 focus:ring-[#00b7eb] focus:ring-offset-2 focus:ring-offset-[#1a1a1a]
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
