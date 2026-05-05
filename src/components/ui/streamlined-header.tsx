import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ModernButton } from '@/components/ui/modern-button';
import { ModernContainer } from '@/components/ui/modern-container';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';
import { smoothScrollToSection } from '@/utils/smoothScroll';
import { useActiveSection } from '@/hooks/useActiveSection';

export const StreamlinedHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // Track active section on homepage
  const sectionIds = ['hero', 'developer-resources', 'features', 'creator-dashboard', 'governance'];
  const activeSection = useActiveSection(isHomePage ? sectionIds : []);

  const navigationItems = [
    {
      label: "Create",
      items: [
        { to: "/video-studio", label: "Creator Studio", description: "Video & Content Creation", sectionId: "creator-dashboard" },
        { to: "/podcast-studio", label: "Podcast Studio", description: "Audio Content & Distribution" },
        { to: "/threaditor", label: "Threaditor", description: "Writing & Publishing", sectionId: "threaditor" },
        { to: "/commerce-studio", label: "Commerce Studio", description: "Web3 E-commerce Tools", sectionId: "commerce-studio" }
      ]
    },
    {
      label: "Build",
      items: [
        { to: "/video-integration", label: "Developer Hub", description: "APIs & SDK Documentation", sectionId: "developer-resources" },
        { to: "/whitepaper", label: "Tokenomics", description: "Technical Whitepaper" },
        { to: "/ar-visualization", label: "AR Tools", description: "AR/VR Development" }
      ]
    },
    {
      label: "Govern",
      items: [
        { to: "/global-innovators", label: "DAO Governance", description: "Community Decision Making", sectionId: "governance" },
        { to: "/projects-creator", label: "Project Funding", description: "Decentralized Funding" },
        { to: "/finance-hub", label: "Finance Hub", description: "DeFi & Asset Management" }
      ]
    },
    {
      label: "Learn",
      items: [
        { to: "/whitepaper", label: "Documentation", description: "Platform Guides" },
        { to: "/video-marketplace", label: "Creator Market", description: "Marketplace Overview" },
        { to: "/neurapathy", label: "Security", description: "Privacy & Security Features" }
      ]
    }
  ];

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleNavigation = (item: any) => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
    
    // If we're on homepage and item has sectionId, smooth scroll
    if (isHomePage && item.sectionId) {
      smoothScrollToSection(item.sectionId);
    }
    // Otherwise, navigate normally via Link component
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/30">
      <ModernContainer size="full" padded>
        <div className="h-16 flex items-center justify-between">
          {/* Logo - Consistent Branding */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img 
              src="/favicon.png" 
              alt="Renegade - Decentralized Creator Platform" 
              className="h-10 w-auto object-contain hover:opacity-80 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation - Enhanced with Smooth Scrolling */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  className="flex items-center gap-1 px-4 py-2 rounded-xl text-sm font-medium text-foreground hover:text-primary hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-600/10 hover:border-primary/20 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-out border border-transparent"
                  onClick={() => handleDropdownToggle(item.label)}
                >
                  {item.label}
                  <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
                </button>

                {/* Dropdown Menu */}
                <div className={`absolute top-full left-0 mt-2 w-64 bg-card/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-xl transition-all duration-200 ${activeDropdown === item.label ? 'opacity-100 visible' : 'opacity-0 invisible'} z-50`}>
                  <div className="p-2 space-y-1">
                    {item.items.map((subItem) => (
                      <div key={subItem.to}>
                        {isHomePage && subItem.sectionId ? (
                          <button
                            onClick={() => {
                              handleNavigation(subItem);
                              smoothScrollToSection(subItem.sectionId);
                            }}
                            className={`w-full text-left block px-3 py-3 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-600/10 hover:border-primary/20 hover:shadow-md hover:scale-102 transition-all duration-200 border border-transparent ${activeSection === subItem.sectionId ? 'bg-primary/10 border-primary/30' : ''}`}
                          >
                            <div className="font-medium text-foreground text-sm hover:text-primary transition-colors">{subItem.label}</div>
                            <div className="text-xs text-muted-foreground">{subItem.description}</div>
                          </button>
                        ) : (
                          <Link
                            to={subItem.to}
                            className="block px-3 py-3 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-600/10 hover:border-primary/20 hover:shadow-md hover:scale-102 transition-all duration-200 border border-transparent"
                            onClick={() => handleNavigation(subItem)}
                          >
                            <div className="font-medium text-foreground text-sm hover:text-primary transition-colors">{subItem.label}</div>
                            <div className="text-xs text-muted-foreground">{subItem.description}</div>
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Right Side Actions - Prioritized Wallet Connection */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <WalletConnectButton />
            </div>

            {/* Mobile Menu Button */}
            <ModernButton
              variant="ghost"
              size="sm"
              className="lg:hidden p-2 h-10 w-10"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
            >
              <Menu size={20} />
            </ModernButton>
          </div>
        </div>

        {/* Mobile Menu - Enhanced with Smooth Scrolling */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-xl border-b border-border/50 shadow-xl">
            <div className="p-4 space-y-4">
              {/* Close Button */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-medium">Navigation</span>
                <ModernButton
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 h-8 w-8"
                >
                  <X size={16} />
                </ModernButton>
              </div>

              {/* Mobile Navigation Items */}
              {navigationItems.map((item) => (
                <div key={item.label} className="space-y-2">
                  <div className="font-medium text-primary text-sm uppercase tracking-wide hover:text-cyan-400 transition-colors cursor-pointer">{item.label}</div>
                  <div className="space-y-1 pl-4">
                    {item.items.map((subItem) => (
                      <div key={subItem.to}>
                        {isHomePage && subItem.sectionId ? (
                          <button
                            onClick={() => {
                              handleNavigation(subItem);
                              smoothScrollToSection(subItem.sectionId);
                            }}
                            className={`w-full text-left block px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-600/10 hover:border-primary/20 hover:shadow-md transition-all duration-200 border border-transparent ${activeSection === subItem.sectionId ? 'bg-primary/10 border-primary/30' : ''}`}
                          >
                            <div className="font-medium text-foreground hover:text-primary transition-colors">{subItem.label}</div>
                            <div className="text-sm text-muted-foreground">{subItem.description}</div>
                          </button>
                        ) : (
                          <Link
                            to={subItem.to}
                            onClick={() => handleNavigation(subItem)}
                            className="block px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-purple-600/10 hover:border-primary/20 hover:shadow-md transition-all duration-200 border border-transparent"
                          >
                            <div className="font-medium text-foreground hover:text-primary transition-colors">{subItem.label}</div>
                            <div className="text-sm text-muted-foreground">{subItem.description}</div>
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Mobile Wallet Connect */}
              <div className="pt-4 border-t border-border/30">
                <WalletConnectButton />
              </div>
            </div>
          </div>
        )}
      </ModernContainer>
    </header>
  );
};
