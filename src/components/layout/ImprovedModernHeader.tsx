
import React, { useState } from 'react';
import { Menu, Home, Users, Video, Code, Store } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ModernButton } from '@/components/ui/modern-button';
import { ModernContainer } from '@/components/ui/modern-container';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';
import { MobileMenu } from './MobileMenu';

export const ImprovedModernHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const primaryNavItems = [
    { to: "/", icon: Home, label: "Dashboard" },
    { to: "/global-innovators", icon: Users, label: "Collaborate" },
    { to: "/video-studio", icon: Video, label: "Create" },
    { to: "/commerce-studio", icon: Store, label: "Commerce" },
  ];

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
                className="h-10 w-auto object-contain hover:opacity-80 transition-opacity"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2 flex-1 justify-center">
              {primaryNavItems.map((item) => (
                <ModernButton
                  key={item.to}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="touch-target"
                >
                  <Link to={item.to} className="flex items-center gap-2">
                    <item.icon size={16} />
                    {item.label}
                  </Link>
                </ModernButton>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Desktop Wallet Connect */}
              <div className="hidden sm:block">
                <WalletConnectButton />
              </div>

              {/* Mobile Menu Button */}
              <ModernButton
                variant="ghost"
                size="sm"
                className="lg:hidden p-2 h-10 w-10 touch-target"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open navigation menu"
              >
                <Menu size={20} />
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
