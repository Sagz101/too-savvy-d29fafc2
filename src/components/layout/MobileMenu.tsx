
import React from 'react';
import { X, Home, Users, Video, Code, Store, Shield, Share2, Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ModernButton } from '@/components/ui/modern-button';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationItems = [
  { to: "/", icon: Home, label: "Dashboard", description: "Your Web3 portal" },
  { to: "/global-innovators", icon: Users, label: "Collaborate", description: "Connect with innovators" },
  { to: "/video-studio", icon: Video, label: "Creator Studio", description: "Build content NFTs" },
  { to: "/commerce-studio", icon: Store, label: "Web3 Store", description: "Decentralized commerce" },
  { to: "/video-integration", icon: Code, label: "Developer Hub", description: "Build on T00" },
  { to: "/video-marketplace", icon: Store, label: "Creator Market", description: "Trade digital assets" },
  { to: "/neurapathy", icon: Shield, label: "Secure Chat", description: "Private messaging" },
  { to: "/neura-social", icon: Share2, label: "Social Hub", description: "Decentralized social" },
];

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-sm" 
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Menu Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-card/95 backdrop-blur-xl border-l border-border/50 shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border/30">
            <h2 className="text-lg font-semibold text-foreground">Navigation</h2>
            <ModernButton
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="p-2 h-10 w-10"
              aria-label="Close menu"
            >
              <X size={20} />
            </ModernButton>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 overflow-y-auto px-4 py-6">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={onClose}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-card/60 transition-all duration-200 group touch-target"
                  role="menuitem"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-foreground">{item.label}</div>
                    <div className="text-sm text-muted-foreground truncate">{item.description}</div>
                  </div>
                </Link>
              ))}
            </div>
          </nav>

          {/* Footer with Wallet Connect */}
          <div className="border-t border-border/30 p-6">
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground text-center">
                Connect your wallet to access Web3 features
              </div>
              <WalletConnectButton />
              <div className="text-xs text-muted-foreground text-center">
                🔒 Your keys, your data, your control
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
