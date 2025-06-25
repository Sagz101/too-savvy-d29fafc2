
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { smoothScrollToSection } from '@/utils/smoothScroll';
import { useActiveSection } from '@/hooks/useActiveSection';

export const DiscordInspiredNavigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Core navigation items following Discord's simple structure
  const navigationSections = [
    { id: 'hero', label: 'Create' },
    { id: 'create', label: 'Own' },
    { id: 'features', label: 'Thrive' },
    { id: 'get-started', label: 'Get Started' },
    { id: 'developer-resources', label: 'Developer Resources' },
    { id: 'platform-overview', label: 'Dashboard' }
  ];

  const sectionIds = navigationSections.map(section => section.id);
  const activeSection = useActiveSection(sectionIds);

  const handleNavClick = (sectionId: string) => {
    smoothScrollToSection(sectionId, 80);
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50" role="banner">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo - Discord-style clean branding */}
          <div className="flex-shrink-0">
            <a 
              href="/" 
              className="text-xl font-semibold text-gray-900 hover:text-gray-700 transition-colors duration-200"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              T00 Savvy
            </a>
          </div>

          {/* Desktop Navigation - Discord-inspired clean layout */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navigationSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleNavClick(section.id)}
                  className={`
                    relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ease-in-out
                    ${activeSection === section.id 
                      ? 'text-gray-900 bg-gray-100' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                  `}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  aria-current={activeSection === section.id ? 'page' : undefined}
                  tabIndex={0}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile hamburger button - Discord-style */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-200"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? (
                <X className="block h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="block h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Discord-inspired slide-down */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md border-t border-gray-100">
            {navigationSections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className={`
                  block w-full text-left px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ease-in-out
                  ${activeSection === section.id 
                    ? 'text-gray-900 bg-gray-100' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                `}
                style={{ fontFamily: "'Inter', sans-serif" }}
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
