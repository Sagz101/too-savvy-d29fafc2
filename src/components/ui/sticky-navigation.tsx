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
  User
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
    { name: 'Home', href: '/', icon: Home, color: 'text-cyan-400', glow: 'hover:shadow-cyan-400/25', modules: [] },
    { 
      name: 'Creator Studio', 
      href: '/studio', 
      icon: Video, 
      color: 'text-purple-400', 
      glow: 'hover:shadow-purple-400/25',
      modules: [
        { name: 'Video Studio', href: '/video-studio' },
        { name: 'Podcast Studio', href: '/podcast-studio' },
        { name: 'Music Creation', href: '/music-creation' },
        { name: 'Live Streaming', href: '/live-streaming' }
      ]
    },
    { 
      name: 'Platform', 
      href: '/neura-social', 
      icon: Users, 
      color: 'text-blue-400', 
      glow: 'hover:shadow-blue-400/25',
      modules: [
        { name: 'NeuraSocial', href: '/neura-social' },
        { name: 'Threaditor', href: '/threaditor' },
        { name: 'Messaging', href: '/messaging' },
        { name: 'Commerce Studio', href: '/commerce-studio' }
      ]
    },
    { 
      name: 'Ecosystem', 
      href: '/global-innovators', 
      icon: BarChart3, 
      color: 'text-green-400', 
      glow: 'hover:shadow-green-400/25',
      modules: [
        { name: 'Global Innovators', href: '/global-innovators' },
        { name: 'Finance Hub', href: '/finance-hub' },
        { name: 'Projects Creator', href: '/projects-creator' }
      ]
    },
    { name: 'Learn', href: '/learn', icon: Code, color: 'text-orange-400', glow: 'hover:shadow-orange-400/25', modules: [] }
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'glass-card border-b border-primary/20 shadow-2xl shadow-primary/10' 
          : 'backdrop-blur-md bg-background/30'
      }`}
    >
      {/* Animated border glow */}
      <div className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent transition-opacity duration-500 ${
        isScrolled ? 'opacity-100' : 'opacity-0'
      }`} />
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Diminga Logo */}
          <Link to="/" className="flex items-center space-x-3 flex-shrink-0 group">
            <div className="relative">
              <img 
                src={dimingaLogo} 
                alt="Diminga" 
                className="h-10 w-auto object-contain transition-all duration-300 group-hover:scale-105"
              />
              {/* Animated glow ring */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-20 animate-pulse transition-opacity duration-300" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold bg-gradient-to-r from-primary via-purple-400 to-pink-500 bg-clip-text text-transparent font-orbitron tracking-wide group-hover:from-primary/80 transition-colors duration-300">
                Diminga
              </span>
              <div className="text-xs text-muted-foreground font-medium tracking-wider opacity-80">
                Web3 Creator Platform
              </div>
            </div>
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
                        ? `${item.color} bg-gradient-to-r from-card/60 to-card/40 backdrop-blur-sm shadow-lg border border-primary/20 ${item.glow} shadow-lg`
                        : 'text-muted-foreground hover:text-foreground hover:bg-card/30 hover:backdrop-blur-sm hover:border hover:border-primary/10'
                    }`}
                  >
                    <Icon size={16} className={`transition-all duration-300 ${isActive ? 'drop-shadow-glow' : 'group-hover:scale-110'}`} />
                    <span className="font-medium tracking-wide">{item.name}</span>
                    {hasModules && (
                      <ChevronDown size={14} className="transition-transform duration-300 group-hover:rotate-180" />
                    )}
                    
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 animate-pulse" />
                    )}
                    
                    {/* Hover glow effect */}
                    <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${item.glow.replace('hover:', '')} shadow-xl`} />
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {hasModules && hoveredItem === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-64 glass-card gradient-border-animated rounded-xl shadow-elevated-lg p-4 z-50 animate-fade-in">
                      <div className="space-y-2">
                        {item.modules!.map((module) => (
                          <Link
                            key={module.name}
                            to={module.href}
                            className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-background/60 rounded-lg transition-all duration-200"
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

          {/* Enhanced Search Icon - Collapsible */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="group relative flex items-center justify-center w-10 h-10 rounded-xl bg-card/20 backdrop-blur-sm border border-border/30 hover:bg-card/40 hover:border-primary/30 transition-all duration-300 hover:scale-105"
            >
              <Search size={18} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Chain Switcher & Wallet Connection */}
          <div className="hidden md:flex items-center gap-3">
            {isConnected && <ChainSwitcher />}
            {isConnected && (
              <Link
                to="/profile"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-card/20 backdrop-blur-sm border border-border/30 hover:bg-card/40 hover:border-primary/30 transition-all duration-300 hover:scale-105"
              >
                <User size={18} className="text-muted-foreground hover:text-primary transition-colors" />
              </Link>
            )}
            <div className="relative">
              <SIWEButton variant="compact" />
              {/* Wallet connection glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10 blur-lg" />
            </div>
          </div>

          {/* Accessibility Settings Icon */}
          <div className="hidden md:block">
            <button className="group relative flex items-center justify-center w-10 h-10 rounded-xl bg-card/20 backdrop-blur-sm border border-border/30 hover:bg-card/40 hover:border-primary/30 transition-all duration-300 hover:scale-105">
              <svg className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
              </svg>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
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
