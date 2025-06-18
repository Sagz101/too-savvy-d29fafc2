
import React from 'react';
import { Link } from 'react-router-dom';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';
import { Sparkles, Code, Users, Book, Globe, Home } from 'lucide-react';

interface StickyNavigationProps {
  currentPage: number;
}

export const StickyNavigation: React.FC<StickyNavigationProps> = ({ currentPage }) => {
  const navItems = [
    { id: 1, label: 'Home', icon: Home, color: '#00FFCC' },
    { id: 2, label: 'Create', icon: Sparkles, color: '#FF00FF' },
    { id: 3, label: 'Build', icon: Code, color: '#00FFCC' },
    { id: 4, label: 'Govern', icon: Users, color: '#FFFF00' },
    { id: 5, label: 'Learn', icon: Book, color: '#FF00FF' },
    { id: 6, label: 'Ecosystem', icon: Globe, color: '#00FFCC' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0F0F1A]/95 backdrop-blur-xl border-b border-[#00FFCC]/20 shadow-lg shadow-[#00FFCC]/10">
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

          {/* Navigation Items - Cosmos Style */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium border ${
                  currentPage === item.id
                    ? `bg-gradient-to-r from-[${item.color}]/20 to-[${item.color}]/10 text-[${item.color}] border-[${item.color}]/30 shadow-lg shadow-[${item.color}]/20`
                    : 'text-white/70 hover:text-white hover:bg-white/5 border-transparent hover:border-white/10'
                }`}
                style={{
                  ...(currentPage === item.id && {
                    color: item.color,
                    borderColor: `${item.color}40`,
                    backgroundColor: `${item.color}20`,
                    boxShadow: `0 4px 12px ${item.color}30`
                  })
                }}
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
                    currentPage === item.id ? 'opacity-100 scale-125' : 'opacity-40 scale-100'
                  }`}
                  style={{
                    backgroundColor: currentPage === item.id ? item.color : '#ffffff60'
                  }}
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
