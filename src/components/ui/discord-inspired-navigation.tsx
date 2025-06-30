
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
    { name: 'Home', href: '/', icon: Home },
    { name: 'Studio', href: '/studio', icon: Palette },
    { name: 'Messaging', href: '/messaging', icon: MessageCircle },
    { name: 'Learn', href: '/learn', icon: BookOpen },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/50 bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-slate-950/90">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="h-10 w-10 bg-gradient-to-br from-solar-core via-solar-radiative to-solar-photosphere rounded-lg flex items-center justify-center shadow-lg">
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
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-solar-core ${
                  location.pathname === item.href
                    ? 'text-solar-core'
                    : 'text-gray-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.name}
              </Link>
            );
          })}
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
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-solar-core ${
                      location.pathname === item.href
                        ? 'text-solar-core'
                        : 'text-gray-300'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
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
