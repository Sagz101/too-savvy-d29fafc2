
import React, { useState } from 'react';
import { Menu, X, Home, Users, Video, Code, Store, Shield, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ModernButton } from '@/components/ui/modern-button';
import { ModernContainer } from '@/components/ui/modern-container';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';

export const ModernHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { to: "/", icon: Home, label: "Dashboard", variant: "ghost" as const },
    { to: "/global-innovators", icon: Users, label: "Collaborate", variant: "secondary" as const },
    { to: "/video-studio", icon: Video, label: "Creator Studio", variant: "secondary" as const },
    { to: "/commerce-studio", icon: Store, label: "Web3 Store", variant: "secondary" as const },
    { to: "/video-integration", icon: Code, label: "Developer Hub", variant: "outline" as const },
    { to: "/video-marketplace", icon: Store, label: "Creator Market", variant: "outline" as const },
    { to: "/neurapathy", icon: Shield, label: "Secure Chat", variant: "outline" as const },
    { to: "/neura-social", icon: Share2, label: "Social Hub", variant: "outline" as const },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/30">
      <ModernContainer size="full" padded>
        <div className="py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/2e6dc416-59b6-4048-a87d-858554756c11.png" 
              alt="T00 Savvy Logo" 
              className="w-[300px] h-[75px] object-contain hover:opacity-80 transition-opacity"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigationItems.slice(0, 4).map((item) => (
              <ModernButton
                key={item.to}
                variant={item.variant}
                size="sm"
                asChild
              >
                <Link to={item.to} className="flex items-center gap-2">
                  <item.icon size={16} />
                  {item.label}
                </Link>
              </ModernButton>
            ))}
            
            {/* More Menu for Additional Items */}
            <div className="relative group">
              <ModernButton variant="ghost" size="sm">
                More
              </ModernButton>
              <div className="absolute top-full left-0 mt-2 w-48 bg-card/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-2 space-y-1">
                  {navigationItems.slice(4).map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="flex items-center gap-3 px-3 py-2 text-sm rounded-lg hover:bg-card/60 transition-colors"
                    >
                      <item.icon size={16} />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <WalletConnectButton />
          </nav>

          {/* Mobile Menu Button */}
          <ModernButton
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </ModernButton>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/30 space-y-2">
            {navigationItems.map((item) => (
              <ModernButton
                key={item.to}
                variant="ghost"
                size="sm"
                className="w-full justify-start"
                asChild
                onClick={() => setIsMenuOpen(false)}
              >
                <Link to={item.to} className="flex items-center gap-3">
                  <item.icon size={16} />
                  {item.label}
                </Link>
              </ModernButton>
            ))}
            <div className="pt-2">
              <WalletConnectButton />
            </div>
          </div>
        )}
      </ModernContainer>
    </header>
  );
};
