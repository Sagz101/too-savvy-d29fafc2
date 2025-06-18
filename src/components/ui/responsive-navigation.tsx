
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Sparkles, Code, Users, Book, Globe, Search } from 'lucide-react';
import { ModernButton } from '@/components/ui/modern-button';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';

export const ResponsiveNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const navigationItems = [
    { path: '/', label: 'Home', icon: Home, description: 'Platform Overview' },
    { path: '/create', label: 'Create', icon: Sparkles, description: 'Creator Studio & Tools' },
    { path: '/build', label: 'Build', icon: Code, description: 'Developer Resources' },
    { path: '/govern', label: 'Govern', icon: Users, description: 'Community Governance' },
    { path: '/learn', label: 'Learn', icon: Book, description: 'Education & Tutorials' },
    { path: '/ecosystem', label: 'Ecosystem', icon: Globe, description: 'Network & Partners' }
  ];

  const isActivePath = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <React.Fragment>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block fixed top-20 left-0 right-0 z-40 bg-[#0F0F1A]/95 backdrop-blur-xl border-b border-[#00FFCC]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Main Navigation */}
            <div className="flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`group relative flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 text-sm font-medium ${
                    isActivePath(item.path)
                      ? 'bg-gradient-to-r from-[#00FFCC]/20 to-[#FF00FF]/20 text-[#00FFCC] border border-[#00FFCC]/30'
                      : 'text-white/70 hover:text-[#00FFCC] hover:bg-[#00FFCC]/10'
                  }`}
                >
                  <item.icon size={16} />
                  <span>{item.label}</span>
                  
                  {/* Tooltip */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-[#1A1A2E] border border-[#00FFCC]/30 rounded-lg text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                    {item.description}
                  </div>
                </Link>
              ))}
            </div>

            {/* Search and Wallet */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
                <input
                  type="text"
                  placeholder="Search docs, features..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-[#1A1A2E]/60 border border-[#00FFCC]/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#00FFCC] focus:ring-2 focus:ring-[#00FFCC]/20 transition-all duration-200"
                />
              </div>
              <WalletConnectButton />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed top-20 left-0 right-0 z-40 bg-[#0F0F1A]/95 backdrop-blur-xl border-b border-[#00FFCC]/20">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Current Page Indicator */}
            <div className="flex items-center gap-2">
              {navigationItems.find(item => isActivePath(item.path))?.icon && (
                <navigationItems.find(item => isActivePath(item.path))!.icon size={20} className="text-[#00FFCC]" />
              )}
              <span className="text-white font-medium">
                {navigationItems.find(item => isActivePath(item.path))?.label || 'Home'}
              </span>
            </div>

            {/* Menu Toggle */}
            <ModernButton
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#00FFCC] hover:bg-[#00FFCC]/10 min-h-[48px] min-w-[48px]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </ModernButton>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="mt-4 pb-4 space-y-2 border-t border-[#00FFCC]/20 pt-4">
              {/* Search */}
              <div className="relative mb-4">
                <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-[#1A1A2E]/60 border border-[#00FFCC]/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#00FFCC] min-h-[48px]"
                />
              </div>

              {/* Navigation Items */}
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-base font-medium min-h-[48px] ${
                    isActivePath(item.path)
                      ? 'bg-gradient-to-r from-[#00FFCC]/20 to-[#FF00FF]/20 text-[#00FFCC] border border-[#00FFCC]/30'
                      : 'text-white/70 hover:text-[#00FFCC] hover:bg-[#00FFCC]/10'
                  }`}
                >
                  <item.icon size={20} />
                  <div>
                    <div>{item.label}</div>
                    <div className="text-xs text-white/50">{item.description}</div>
                  </div>
                </Link>
              ))}

              {/* Wallet Connect */}
              <div className="pt-4 border-t border-[#00FFCC]/20">
                <WalletConnectButton />
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-16 lg:h-32"></div>
    </React.Fragment>
  );
};
