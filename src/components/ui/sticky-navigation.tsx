
import React from 'react';
import { Link } from 'react-router-dom';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';
import { Sparkles, Code, Users, Book, Globe, Home } from 'lucide-react';

interface StickyNavigationProps {
  currentPage: number;
}

export const StickyNavigation: React.FC<StickyNavigationProps> = ({ currentPage }) => {
  const navItems = [
    { id: 1, label: 'Home', icon: Home, color: 'cyan' },
    { id: 2, label: 'Create', icon: Sparkles, color: 'purple' },
    { id: 3, label: 'Build', icon: Code, color: 'blue' },
    { id: 4, label: 'Govern', icon: Users, color: 'green' },
    { id: 5, label: 'Learn', icon: Book, color: 'yellow' },
    { id: 6, label: 'Ecosystem', icon: Globe, color: 'pink' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-gray-900/95 backdrop-blur-xl border-b border-cyan-400/20">
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
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  currentPage === item.id
                    ? `bg-${item.color}-500/20 text-${item.color}-400 border border-${item.color}-400/30`
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <item.icon size={16} />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
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
