
import React from 'react';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';
import { Sparkles, Code, Users, Book, Globe, Home } from 'lucide-react';

interface StickyNavigationProps {
  currentPage: number;
}

export const StickyNavigation: React.FC<StickyNavigationProps> = ({ currentPage }) => {
  const navItems = [
    { id: 1, label: 'Home', icon: Home },
    { id: 2, label: 'Create', icon: Sparkles },
    { id: 3, label: 'Build', icon: Code },
    { id: 4, label: 'Govern', icon: Users },
    { id: 5, label: 'Learn', icon: Book },
    { id: 6, label: 'Ecosystem', icon: Globe }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/2e6dc416-59b6-4048-a87d-858554756c11.png" 
              alt="T00 Savvy" 
              className="h-8 w-auto object-contain"
            />
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium ${
                  currentPage === item.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <item.icon size={16} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item.id}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentPage === item.id ? 'bg-purple-600 scale-125' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Wallet Connect */}
          <div className="flex items-center">
            <WalletConnectButton />
          </div>
        </div>
      </div>
    </nav>
  );
};
