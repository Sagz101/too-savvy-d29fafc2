import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, User, MessageSquare, Settings, Wallet, TrendingUp } from 'lucide-react';
import { Button } from './button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './sheet';
import { TrustSignals } from './trust-signals';

interface NavItem {
  label: string;
  href: string;
  icon: React.ElementType;
  description?: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/', icon: Home, description: 'Back to homepage' },
  { label: 'Creator Studio', href: '/creator-studio', icon: User, description: 'Create and manage content' },
  { label: 'Finance Hub', href: '/finance-hub', icon: TrendingUp, description: 'Track earnings and analytics' },
  { label: 'Messaging', href: '/messaging', icon: MessageSquare, description: 'Connect with community' },
  { label: 'Connect Wallet', href: '/auth', icon: Wallet, description: 'Web3 wallet integration' },
];

interface MobileOptimizedNavigationProps {
  className?: string;
}

export const MobileOptimizedNavigation: React.FC<MobileOptimizedNavigationProps> = ({ 
  className = '' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className={`lg:hidden ${className}`}>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="touch-target hover:bg-white/10"
            aria-label="Open navigation menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        
        <SheetContent 
          side="left" 
          className="w-80 bg-cosmic-deep/95 backdrop-blur-xl border-white/10"
        >
          <SheetHeader className="text-left">
            <SheetTitle className="text-white flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-web3-cyan to-web3-purple rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-cosmic-deep">T</span>
              </div>
              T00 Savvy
            </SheetTitle>
          </SheetHeader>

          <nav className="mt-8 space-y-2">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const active = isActive(item.href);
              
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    flex items-center gap-3 p-4 rounded-xl transition-all duration-200 touch-target
                    ${active 
                      ? 'bg-web3-cyan/20 text-web3-cyan border border-web3-cyan/30' 
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }
                  `}
                  aria-label={`Navigate to ${item.label} - ${item.description}`}
                >
                  <IconComponent className="h-5 w-5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="font-medium">{item.label}</div>
                    {item.description && (
                      <div className="text-xs text-muted-foreground mt-1">
                        {item.description}
                      </div>
                    )}
                  </div>
                  {active && (
                    <div className="w-2 h-2 bg-web3-cyan rounded-full animate-pulse" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Trust Signals */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <h3 className="text-sm font-medium text-gray-400 mb-4">Trust & Security</h3>
            <TrustSignals variant="footer" showLabels={true} />
          </div>

          {/* Platform Stats */}
          <div className="mt-6 p-4 bg-web3-purple/10 border border-web3-purple/20 rounded-lg">
            <h4 className="text-sm font-medium text-web3-purple mb-2">Platform Stats</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <div className="text-white font-medium">12.8K+</div>
                <div className="text-gray-400">Active Creators</div>
              </div>
              <div>
                <div className="text-white font-medium">421K+</div>
                <div className="text-gray-400">NFTs Minted</div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-4 space-y-2">
            <Button 
              className="w-full touch-target bg-web3-cyan text-cosmic-deep hover:bg-web3-cyan/90"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              className="w-full touch-target border-white/20 text-white hover:bg-white/5"
              onClick={() => setIsOpen(false)}
            >
              View Whitepaper
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

// Mobile Bottom Navigation for frequent actions
export const MobileBottomNavigation: React.FC = () => {
  const location = useLocation();
  const isActive = (href: string) => location.pathname === href;

  const quickNavItems = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Studio', href: '/creator-studio', icon: User },
    { label: 'Finance', href: '/finance-hub', icon: TrendingUp },
    { label: 'Messages', href: '/messaging', icon: MessageSquare }
  ];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-cosmic-deep/95 backdrop-blur-xl border-t border-white/10">
      <nav className="flex items-center justify-around py-2 px-4">
        {quickNavItems.map((item) => {
          const IconComponent = item.icon;
          const active = isActive(item.href);
          
          return (
            <Link
              key={item.href}
              to={item.href}
              className={`
                flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-200 touch-target
                ${active 
                  ? 'text-web3-cyan' 
                  : 'text-gray-400 hover:text-white'
                }
              `}
              aria-label={`Navigate to ${item.label}`}
            >
              <IconComponent className="h-5 w-5" />
              <span className="text-xs font-medium">{item.label}</span>
              {active && (
                <div className="w-1 h-1 bg-web3-cyan rounded-full" />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};