
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';
import { 
  Search, 
  Home, 
  Video, 
  BarChart3, 
  Users, 
  Code, 
  Menu,
  X
} from 'lucide-react';

export const StickyNavigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/', icon: Home, color: 'text-cyan-400', glow: 'hover:shadow-cyan-400/25' },
    { name: 'Creator Studio', href: '/studio', icon: Video, color: 'text-purple-400', glow: 'hover:shadow-purple-400/25' },
    { name: 'Dashboard', href: '/dashboard', icon: BarChart3, color: 'text-green-400', glow: 'hover:shadow-green-400/25' },
    { name: 'Community', href: '/community', icon: Users, color: 'text-blue-400', glow: 'hover:shadow-blue-400/25' },
    { name: 'Developer Resources', href: '/developer', icon: Code, color: 'text-orange-400', glow: 'hover:shadow-orange-400/25' }
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
          ? 'bg-background/80 backdrop-blur-2xl border-b border-primary/20 shadow-2xl shadow-primary/10' 
          : 'bg-gradient-to-r from-background/40 via-background/60 to-background/40 backdrop-blur-md'
      }`}
      style={{
        background: isScrolled 
          ? 'linear-gradient(135deg, hsl(var(--background))/0.9, hsl(var(--card))/0.95)' 
          : 'linear-gradient(135deg, hsl(var(--background))/0.4, hsl(var(--card))/0.6)'
      }}
    >
      {/* Animated border glow */}
      <div className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent transition-opacity duration-500 ${
        isScrolled ? 'opacity-100' : 'opacity-0'
      }`} />
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-3 flex-shrink-0 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center shadow-lg shadow-primary/25 transition-all duration-300 group-hover:shadow-primary/40 group-hover:scale-105">
                <span className="text-primary-foreground font-bold text-sm font-mono">TS</span>
                {/* Animated glow ring */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-20 animate-pulse transition-opacity duration-300" />
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-foreground font-orbitron tracking-wide group-hover:text-primary transition-colors duration-300">
                T00 Savvy
              </span>
              <div className="text-xs text-muted-foreground font-medium tracking-wider opacity-80">
                Web3 Creator Platform
              </div>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group relative flex items-center gap-3 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    isActive
                      ? `${item.color} bg-gradient-to-r from-card/60 to-card/40 backdrop-blur-sm shadow-lg border border-primary/20 ${item.glow} shadow-lg`
                      : 'text-muted-foreground hover:text-foreground hover:bg-card/30 hover:backdrop-blur-sm hover:border hover:border-primary/10'
                  }`}
                >
                  <Icon size={18} className={`transition-all duration-300 ${isActive ? 'drop-shadow-glow' : 'group-hover:scale-110'}`} />
                  <span className="font-medium tracking-wide">{item.name}</span>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 animate-pulse" />
                  )}
                  
                  {/* Hover glow effect */}
                  <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${item.glow.replace('hover:', '')} shadow-xl`} />
                </Link>
              );
            })}
          </div>

          {/* Enhanced Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
            <form onSubmit={handleSearch} className="relative w-full group">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search features, tutorials, creators..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-card/40 backdrop-blur-sm border border-border/50 text-foreground placeholder-muted-foreground rounded-xl focus:border-primary/50 focus:ring-2 focus:ring-primary/20 focus:bg-card/60 transition-all duration-300 hover:bg-card/50"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors duration-300" size={18} />
                
                {/* Search glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
              </div>
            </form>
          </div>

          {/* Enhanced Wallet Connection */}
          <div className="hidden md:block">
            <div className="relative">
              <WalletConnectButton />
              {/* Wallet connection glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 hover:opacity-100 transition-opacity duration-300 -z-10 blur-lg" />
            </div>
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
          <div className="lg:hidden border-t border-primary/20 bg-card/90 backdrop-blur-2xl animate-fade-in">
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

              {/* Enhanced Mobile Wallet Connection */}
              <div className="px-4 pt-6 border-t border-border/30">
                <div className="relative">
                  <WalletConnectButton />
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
