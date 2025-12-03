
import React, { useState } from 'react';
import { Menu, X, ChevronDown, Search, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ModernButton } from '@/components/ui/modern-button';
import { ModernContainer } from '@/components/ui/modern-container';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';
import { StreamlinedNavigation } from '@/components/ui/streamlined-navigation';
import { MobileMenu } from './MobileMenu';
import { LoginButton } from '@/components/auth/LoginButton';
import { SearchBar } from '@/components/ui/search-bar';

export const ImprovedModernHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border/40 shadow-lg">
        {/* Trust Signal Banner */}
        <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 border-b border-green-500/30 py-1">
          <div className="container mx-auto px-4 flex items-center justify-center gap-4 text-xs">
            <div className="flex items-center gap-2 text-green-400">
              <Shield size={14} />
              <span className="font-medium">Smart Contract Audited</span>
            </div>
            <div className="flex items-center gap-2 text-blue-400">
              <Zap size={14} />
              <span className="font-medium">Multi-Chain Support: ETH, MATIC, BSC, AVAX</span>
            </div>
          </div>
        </div>

        <ModernContainer size="full" padded>
          <div className="h-16 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0" aria-label="Diminga Home">
              <img 
                src="/favicon.png" 
                alt="Diminga - Decentralized Creator Platform" 
                className="h-8 sm:h-10 w-auto object-contain hover:opacity-80 transition-opacity"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <StreamlinedNavigation />
            </div>

            {/* Search and Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Toggle */}
              <ModernButton
                variant="ghost"
                size="sm"
                onClick={() => setShowSearch(!showSearch)}
                className="hidden sm:flex p-2 h-10 w-10"
                aria-label="Search platform features"
              >
                <Search size={16} />
              </ModernButton>

              {/* Desktop Auth & Wallet */}
              <div className="hidden sm:flex items-center gap-2">
                <LoginButton />
                <WalletConnectButton />
              </div>

              {/* Mobile Menu Button - Enhanced */}
              <ModernButton
                variant="ghost"
                size="sm"
                className="lg:hidden p-3 h-12 w-12 flex items-center justify-center border-2 border-primary/30 hover:border-primary/50 bg-card/20 hover:bg-card/40 backdrop-blur-sm transition-all duration-300 min-h-[48px] min-w-[48px]"
                onClick={toggleMobileMenu}
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? (
                  <X size={24} className="text-primary" />
                ) : (
                  <Menu size={24} className="text-primary" />
                )}
              </ModernButton>
            </div>
          </div>

          {/* Search Bar */}
          {showSearch && (
            <div className="pb-4 border-t border-border/30 pt-4 mt-4">
              <SearchBar onClose={() => setShowSearch(false)} />
            </div>
          )}
        </ModernContainer>
      </header>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};
