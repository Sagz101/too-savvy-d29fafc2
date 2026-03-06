import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';
import { ChainSwitcher } from '@/components/wallet/ChainSwitcher';
import { SIWEButton } from '@/components/wallet/SIWEButton';
import { useAccount } from 'wagmi';
import { 
  Search, 
  Home, 
  Video, 
  BarChart3, 
  Users, 
  Code, 
  Menu,
  X,
  ChevronDown,
  User,
  ShoppingBag
} from 'lucide-react';
import dimingaLogo from '@/assets/diminga-logo.png';

export const StickyNavigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();
  const { isConnected } = useAccount();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Platform', href: '/platform', icon: Home, color: 'text-purple-400', glow: 'hover:shadow-purple-400/25',
      modules: [
        { name: 'Creator Studio', href: '/creator-studio' },
        { name: 'Video Studio', href: '/video-studio' },
        { name: 'E-commerce Store', href: '/commerce-studio' },
        { name: 'Social Hub', href: '/neura-social' },
        { name: 'Music Creator', href: '/music-creation' },
      ]
    },
    { name: 'Features', href: '/features', icon: BarChart3, color: 'text-cyan-400', glow: 'hover:shadow-cyan-400/25',
      modules: [
        { name: 'Media NFTs', href: '/video-nfts' },
        { name: 'Creator Monetization', href: '/finance-hub' },
        { name: 'Web3 Commerce', href: '/commerce-studio' },
        { name: 'DAO Governance', href: '/dao-governance' },
      ]
    },
    { name: 'Community', href: '/community', icon: Users, color: 'text-green-400', glow: 'hover:shadow-green-400/25',
      modules: [
        { name: 'Creator Community', href: '/community' },
        { name: 'Global Innovators', href: '/global-innovators' },
        { name: 'Success Stories', href: '/community' },
        { name: 'Analytics', href: '/analytics' },
      ]
    },
    { name: 'Resources', href: '/resources', icon: Code, color: 'text-orange-400', glow: 'hover:shadow-orange-400/25',
      modules: [
        { name: 'Documentation', href: '/learn' },
        { name: 'Whitepaper', href: '/whitepaper' },
        { name: 'Creator Guides', href: '/resources' },
      ]
    },
    { name: 'DAO', href: '/dao-governance', icon: ShoppingBag, color: 'text-pink-400', glow: 'hover:shadow-pink-400/25',
      modules: [
        { name: 'Proposals & Voting', href: '/dao-governance' },
        { name: 'Governance Rules', href: '/dao-governance-rules' },
        { name: 'Treasury', href: '/dao-governance' },
      ]
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // Implement search functionality
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out`}
      style={{
        background: isScrolled
          ? 'rgba(10, 0, 24, 0.92)'
          : 'rgba(10, 0, 24, 0.75)',
        backdropFilter: 'blur(20px)',
        borderBottom: isScrolled ? '1px solid rgba(147, 51, 234, 0.2)' : 'none',
      }}
    >
      {/* Animated border glow */}
      <div className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent transition-opacity duration-500 ${
        isScrolled ? 'opacity-100' : 'opacity-0'
      }`} />
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Diminga Logo + Sovereign Hub badge */}
          <Link to="/" className="flex items-center space-x-3 flex-shrink-0 group">
            <div className="relative">
              <img 
                src={dimingaLogo} 
                alt="Diminga" 
                className="h-8 w-auto object-contain transition-all duration-300 group-hover:scale-105"
              />
            </div>
            <span className="text-lg font-bold text-white font-orbitron tracking-wide">
              Diminga
            </span>
            {/* Sovereign Hub pill */}
            <span className="hidden sm:inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white border border-white/20"
              style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)' }}>
              Sovereign Hub
            </span>
          </Link>

          {/* Enhanced Desktop Navigation with Dropdown Menus */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href || item.modules?.some(module => location.pathname === module.href);
              const hasModules = item.modules && item.modules.length > 0;
              
              return (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(hasModules ? item.name : null)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link
                    to={item.href}
                    className={`group relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 ${
                      isActive
                        ? `text-white bg-white/10 border border-white/20`
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon size={16} className="transition-all duration-300 group-hover:scale-110" />
                    <span className="font-medium tracking-wide">{item.name}</span>
                    {hasModules && (
                      <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
                    )}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {hasModules && hoveredItem === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-56 rounded-xl p-3 z-50 animate-fade-in"
                      style={{ background: 'rgba(15, 0, 40, 0.95)', backdropFilter: 'blur(20px)', border: '1px solid rgba(147,51,234,0.2)', boxShadow: '0 8px 40px rgba(0,0,0,0.5)' }}>
                      <div className="space-y-1">
                        {item.modules!.map((module) => (
                          <Link
                            key={module.name}
                            to={module.href}
                            className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                          >
                            {module.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop Right: Connect Wallet + Explore Marketplace */}
          <div className="hidden md:flex items-center gap-3">
            {isConnected && <ChainSwitcher />}
            {isConnected && (
              <Link
                to="/profile"
                className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <User size={16} className="text-white" />
              </Link>
            )}
            {/* Connect Wallet button - outlined */}
            <div className="relative">
              <SIWEButton variant="compact" />
            </div>
            {/* Explore Marketplace - gradient pill */}
            <Button
              size="sm"
              className="rounded-xl px-4 py-2 text-sm font-semibold text-white hidden lg:flex"
              style={{ background: 'linear-gradient(135deg, #f472b6, #c084fc)', boxShadow: '0 2px 20px rgba(196,132,252,0.3)' }}
              asChild
            >
              <Link to="/commerce-studio">Explore Marketplace</Link>
            </Button>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative group bg-card/20 backdrop-blur-sm border border-border/30 hover:bg-card/40 hover:border-primary/30 transition-all duration-300 hover:scale-105 p-3"
          >
            <div className="relative z-10">
              {isMobileMenuOpen ? 
                <X size={20} className="text-foreground group-hover:text-primary transition-colors duration-300" /> : 
                <Menu size={20} className="text-foreground group-hover:text-primary transition-colors duration-300" />
              }
            </div>
            {/* Mobile button glow */}
            <div className="absolute inset-0 rounded-md bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-primary/20 glass-card animate-fade-in">
            <div className="py-6 space-y-3">
              {/* Enhanced Mobile Search */}
              <div className="px-4 mb-6">
                <form onSubmit={handleSearch} className="relative group">
                  <Input
                    type="text"
                    placeholder="Search features, tutorials, creators..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-background/60 border border-border/50 text-foreground placeholder-muted-foreground rounded-xl focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  />
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors duration-300" size={18} />
                </form>
              </div>

              {/* Enhanced Mobile Navigation Items */}
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`group flex items-center gap-4 mx-4 px-4 py-4 text-sm font-medium transition-all duration-300 rounded-xl hover:scale-[1.02] ${
                      isActive
                        ? `${item.color} bg-gradient-to-r from-card/60 to-card/40 border border-primary/20 shadow-lg ${item.glow} shadow-lg`
                        : 'text-muted-foreground hover:text-foreground hover:bg-card/40 hover:border hover:border-primary/10'
                    }`}
                  >
                    <Icon size={20} className={`transition-all duration-300 ${isActive ? 'drop-shadow-glow' : 'group-hover:scale-110'}`} />
                    <span className="font-medium tracking-wide">{item.name}</span>
                    
                    {/* Active indicator for mobile */}
                    {isActive && (
                      <div className="ml-auto w-2 h-2 rounded-full bg-current animate-pulse" />
                    )}
                  </Link>
                );
              })}

              {/* Mobile Chain Switcher & Wallet Connection */}
              <div className="px-4 pt-6 border-t border-border/30 space-y-3">
                {isConnected && (
                  <>
                    <Link
                      to="/profile"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-4 px-4 py-4 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-card/40 rounded-xl transition-all duration-300"
                    >
                      <User size={20} />
                      <span className="font-medium tracking-wide">Profile</span>
                    </Link>
                    <div className="flex justify-center">
                      <ChainSwitcher />
                    </div>
                  </>
                )}
                <div className="relative">
                  <SIWEButton />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/10 to-primary/10 opacity-50 blur-lg -z-10" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
