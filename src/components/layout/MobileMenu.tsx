
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
  {
    category: "Create",
    items: [
      { to: "/video-studio", icon: Video, label: "Creator Studio", description: "Build content NFTs", badge: "Popular" },
      { to: "/threaditor", icon: Edit, label: "Threaditor", description: "Writing platform", badge: "Beta" },
      { to: "/commerce-studio", icon: Store, label: "Web3 Store", description: "Decentralized commerce" },
    ]
  },
  {
    category: "Social",
    items: [
      { to: "/neura-social", icon: Share2, label: "NeuraSocial", description: "Decentralized social", badge: "New" },
      { to: "/neurapathy", icon: Shield, label: "Secure Chat", description: "Private messaging" },
      { to: "/global-innovators", icon: Users, label: "DAO Governance", description: "Community voting" },
    ]
  },
  {
    category: "Build & Trade",
    items: [
      { to: "/video-integration", icon: Code, label: "Developer Hub", description: "Build on T00" },
      { to: "/video-marketplace", icon: Store, label: "Creator Market", description: "Trade digital assets" },
      { to: "/finance-hub", icon: Wallet, label: "Finance Hub", description: "DeFi tools" },
    ]
  },
  {
    category: "Resources",
    items: [
      { to: "/", icon: Home, label: "Dashboard", description: "Your Web3 portal" },
      { to: "/whitepaper", icon: BookOpen, label: "Documentation", description: "Learn & build" },
    ]
  }
];

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Enhanced backdrop */}
      <div 
        className="fixed inset-0 bg-background/90 backdrop-blur-lg" 
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Menu Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-card/98 backdrop-blur-xl border-l border-border/50 shadow-2xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border/30 bg-gradient-to-r from-primary/5 to-secondary/5">
            <div>
              <h2 className="text-lg font-semibold text-foreground">T00 Savvy</h2>
              <p className="text-sm text-muted-foreground">Web3 Creator Platform</p>
            </div>
            <ModernButton
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="p-2 h-10 w-10 hover:bg-destructive/10 hover:text-destructive"
              aria-label="Close menu"
            >
              <X size={20} />
            </ModernButton>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 overflow-y-auto px-4 py-4" role="navigation">
            <div className="space-y-6">
              {navigationItems.map((category) => (
                <div key={category.category}>
                  <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3 px-2">
                    {category.category}
                  </h3>
                  <div className="space-y-1">
                    {category.items.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={onClose}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/10 transition-all duration-200 group min-h-[48px] min-w-[48px] relative"
                        role="menuitem"
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <item.icon size={20} className="text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                              {item.label}
                            </span>
                            {item.badge && (
                              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                                item.badge === 'New' ? 'bg-green-500/20 text-green-400' :
                                item.badge === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                                'bg-blue-500/20 text-blue-400'
                              }`}>
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <div className="text-sm text-muted-foreground truncate">{item.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </nav>

          {/* Enhanced Footer */}
          <div className="border-t border-border/30 p-4 bg-gradient-to-r from-primary/5 to-secondary/5">
            <div className="space-y-4">
              {/* Trust Signals */}
              <div className="flex items-center justify-center gap-4 text-xs">
                <div className="flex items-center gap-1 text-green-400">
                  <Shield size={12} />
                  <span>Audited</span>
                </div>
                <div className="flex items-center gap-1 text-blue-400">
                  <Zap size={12} />
                  <span>Multi-Chain</span>
                </div>
              </div>
              
              <div className="text-sm text-muted-foreground text-center mb-3">
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
