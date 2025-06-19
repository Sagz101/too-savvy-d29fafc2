
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ModernButton } from '@/components/ui/modern-button';
import { ModernContainer } from '@/components/ui/modern-container';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';
import { StreamlinedNavigation } from '@/components/ui/streamlined-navigation';
import { MobileMenu } from './MobileMenu';
import { LoginButton } from '@/components/auth/LoginButton';

export const ImprovedModernHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-xl border-b border-border/30">
        <ModernContainer size="full" padded>
          <div className="h-16 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img 
                src="/lovable-uploads/2e6dc416-59b6-4048-a87d-858554756c11.png" 
                alt="T00 Savvy - Decentralized Creator Platform" 
                className="h-8 sm:h-10 w-auto object-contain hover:opacity-80 transition-opacity"
              />
            </Link>

            {/* Streamlined Desktop Navigation */}
            <div className="hidden lg:block">
              <StreamlinedNavigation />
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Desktop Auth & Wallet */}
              <div className="hidden sm:flex items-center gap-2">
                <LoginButton />
                <WalletConnectButton />
              </div>

              {/* Mobile Menu Button - Always visible on mobile */}
              <ModernButton
                variant="ghost"
                size="sm"
                className="lg:hidden p-2 h-10 w-10 flex items-center justify-center border border-border/50 hover:border-border/70"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open navigation menu"
              >
                <Menu size={20} className="text-foreground" />
              </ModernButton>
            </div>
          </div>
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
