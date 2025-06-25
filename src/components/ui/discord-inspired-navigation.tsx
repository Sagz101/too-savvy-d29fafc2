
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900/95 via-gray-900/95 to-slate-800/95 backdrop-blur-md border-b border-cyan-400/20 shadow-lg shadow-purple-500/10" role="banner">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo - Enhanced with gradient */}
          <div className="flex-shrink-0">
            <a 
              href="/" 
              className="text-xl font-semibold bg-gradient-to-r from-cyan-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent hover:from-cyan-300 hover:via-purple-300 hover:to-emerald-300 transition-all duration-300"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              T00 Savvy
            </a>
          </div>

          {/* Desktop Navigation - Enhanced with colors and gradients */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navigationSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleNavClick(section.id)}
                  className={`
                    relative px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105
                    ${activeSection === section.id 
                      ? 'bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-emerald-500/20 text-white border border-cyan-400/30 shadow-lg shadow-cyan-400/20' 
                      : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/10 hover:via-purple-500/10 hover:to-emerald-500/10 hover:border hover:border-cyan-400/20 hover:shadow-md hover:shadow-purple-400/10'
                    }
                    focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-slate-900
                    group overflow-hidden
                  `}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  aria-current={activeSection === section.id ? 'page' : undefined}
                  tabIndex={0}
                >
                  <span className="relative z-10">{section.label}</span>
                  {/* Animated background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-emerald-500/0 group-hover:from-cyan-500/5 group-hover:via-purple-500/5 group-hover:to-emerald-500/5 transition-all duration-300 rounded-xl"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile hamburger button - Enhanced with gradient */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-xl text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/20 hover:via-purple-500/20 hover:to-emerald-500/20 hover:border hover:border-cyan-400/30 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 transform hover:scale-105"
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

        {/* Mobile Navigation Menu - Enhanced with gradients and colors */}
        <div className={`md:hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-2 bg-gradient-to-b from-slate-800/95 via-gray-800/95 to-slate-700/95 backdrop-blur-md border-t border-cyan-400/20 rounded-b-2xl shadow-lg shadow-purple-500/10">
            {navigationSections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className={`
                  block w-full text-left px-4 py-3 text-sm font-medium rounded-xl transition-all duration-300 ease-in-out transform hover:scale-[1.02]
                  ${activeSection === section.id 
                    ? 'bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-emerald-500/20 text-white border border-cyan-400/30 shadow-lg shadow-cyan-400/20' 
                    : 'text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/10 hover:via-purple-500/10 hover:to-emerald-500/10 hover:border hover:border-cyan-400/20 hover:shadow-md hover:shadow-purple-400/10'
                  }
                  focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:ring-offset-2 focus:ring-offset-slate-800
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
