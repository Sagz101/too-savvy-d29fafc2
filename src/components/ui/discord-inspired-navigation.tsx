
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Home, Palette, MessageCircle, BookOpen, User, LogIn, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { LoginButton } from '@/components/auth/LoginButton';

export const DiscordInspiredNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { 
      name: 'Home', 
      href: '/', 
      icon: Home,
      colors: {
        default: 'border-cyan-400 text-white',
        hover: 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white border-cyan-400 shadow-cyan-400/50'
      }
    },
    { 
      name: 'Creator Studio', 
      href: '/studio', 
      icon: Palette,
      colors: {
        default: 'border-purple-500 text-white',
        hover: 'bg-gradient-to-r from-purple-500 to-cyan-400 text-white border-purple-500 shadow-purple-500/50'
      }
    },
    { 
      name: 'Community', 
      href: '/messaging', 
      icon: MessageCircle,
      colors: {
        default: 'border-green-400 text-white',
        hover: 'bg-green-400 text-black border-green-400 shadow-green-400/50'
      }
    },
    { 
      name: 'Developer Resources', 
      href: '/learn', 
      icon: BookOpen,
      colors: {
        default: 'border-cyan-400 text-white',
        hover: 'bg-cyan-400 text-black border-cyan-400 shadow-cyan-400/50'
      }
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/50 bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-slate-950/90">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="h-10 w-10 bg-gradient-to-br from-solar-core via-solar-radiative to-solar-photosphere rounded-lg flex items-center justify-center shadow-lg wobbly-hover group-hover:animate-wobbly-scale">
            <span className="text-white font-bold text-lg">T</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold bg-gradient-to-r from-solar-core to-solar-photosphere bg-clip-text text-transparent">
              T00 Savvy
            </span>
            <span className="text-xs text-gray-400 -mt-1">Creator Platform</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`
                  relative flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl
                  border-2 bg-slate-900/80 backdrop-blur-xl
                  transition-all duration-300 ease-in-out
                  hover:scale-105 hover:shadow-xl
                  group overflow-hidden
                  ${isActive 
                    ? `${item.colors.hover} shadow-lg animate-gentle-pulse` 
                    : `${item.colors.default} hover:${item.colors.hover}`
                  }
                `}
              >
                {/* Wobbly spotlight effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </div>
                
                {/* Border chase effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 animate-spin-slow opacity-30"></div>
                </div>
                
                <Icon className="w-4 h-4 relative z-10" />
                <span className="relative z-10">{item.name}</span>
              </Link>
            );
          })}
          
          {/* Enhanced Search Input */}
          <div className="relative group">
            <input
              type="text"
              placeholder="Search platform..."
              className="
                w-64 px-4 py-2 rounded-xl border-2 border-cyan-400
                bg-slate-900/80 text-white placeholder-gray-400
                backdrop-blur-xl transition-all duration-300
                focus:outline-none focus:border-purple-500
                focus:bg-gradient-to-r focus:from-cyan-400/10 focus:to-purple-500/10
                focus:shadow-lg focus:shadow-cyan-400/30
              "
            />
            <div className="absolute inset-0 rounded-xl opacity-0 focus-within:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-cyan-400/20 animate-pulse"></div>
            </div>
          </div>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <LoginButton />
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-solar-core">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-slate-950 border-slate-800">
            <div className="flex flex-col space-y-4 mt-8">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      flex items-center gap-3 text-sm font-medium px-4 py-3 rounded-xl
                      border-2 bg-slate-900/50 backdrop-blur-xl
                      transition-all duration-300
                      ${isActive 
                        ? `${item.colors.hover} shadow-lg` 
                        : `${item.colors.default} hover:${item.colors.hover}`
                      }
                    `}
                  >
                    <Icon className="w-5 h-5" />
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-slate-800">
                <LoginButton />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
