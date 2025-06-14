
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Wallet, X, Menu, ShoppingCart, MessageSquare } from "lucide-react";
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/634f305e-cf77-4d27-98b3-a69661d66e96.png" 
              alt="T00 Savvy Logo" 
              className="h-10 w-auto"
            />
            <img 
              src="/lovable-uploads/7ac7f3fc-82bf-4080-8568-3607ab1d56bc.png" 
              alt="T00 Savvy" 
              className="h-12 w-auto"
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-sm font-medium px-3 py-2 rounded-lg bg-gradient-to-r from-neura-purple/20 to-neura-cyan/20 border border-neura-purple/30 text-white hover:from-neura-purple/30 hover:to-neura-cyan/30 hover:border-neura-cyan/50 transition-all duration-300 shadow-lg hover:shadow-neura-purple/20"
          >
            Home
          </Link>
          <Link 
            to="/video-studio" 
            className="text-sm font-medium px-3 py-2 rounded-lg bg-gradient-to-r from-neura-cyan/20 to-neura-purple/20 border border-neura-cyan/30 text-white hover:from-neura-cyan/30 hover:to-neura-purple/30 hover:border-neura-purple/50 transition-all duration-300 shadow-lg hover:shadow-neura-cyan/20"
          >
            Studio
          </Link>
          <Link 
            to="/video-integration" 
            className="text-sm font-medium px-3 py-2 rounded-lg bg-gradient-to-r from-neura-magenta/20 to-neura-teal/20 border border-neura-magenta/30 text-white hover:from-neura-magenta/30 hover:to-neura-teal/30 hover:border-neura-teal/50 transition-all duration-300 shadow-lg hover:shadow-neura-magenta/20"
          >
            Integration
          </Link>
          <Link 
            to="/video-marketplace" 
            className="text-sm font-medium px-3 py-2 rounded-lg bg-gradient-to-r from-neura-teal/20 to-neura-purple/20 border border-neura-teal/30 text-white hover:from-neura-teal/30 hover:to-neura-purple/30 hover:border-neura-purple/50 transition-all duration-300 shadow-lg hover:shadow-neura-teal/20 flex items-center"
          >
            <ShoppingCart size={16} className="inline mr-1" /> Marketplace
          </Link>
          <Link 
            to="/neurapathy" 
            className="grok-button-secondary px-4 py-2 text-sm flex items-center"
          >
            <MessageSquare size={16} className="mr-2" />
            Messaging
          </Link>
          <WalletConnectButton />
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-muted-foreground hover:text-foreground"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/50 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-sm font-medium px-3 py-2 rounded-lg bg-gradient-to-r from-neura-purple/20 to-neura-cyan/20 border border-neura-purple/30 text-white hover:from-neura-purple/30 hover:to-neura-cyan/30 hover:border-neura-cyan/50 transition-all duration-300 shadow-lg hover:shadow-neura-purple/20"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/video-studio" 
              className="text-sm font-medium px-3 py-2 rounded-lg bg-gradient-to-r from-neura-cyan/20 to-neura-purple/20 border border-neura-cyan/30 text-white hover:from-neura-cyan/30 hover:to-neura-purple/30 hover:border-neura-purple/50 transition-all duration-300 shadow-lg hover:shadow-neura-cyan/20"
              onClick={() => setIsMenuOpen(false)}
            >
              Studio
            </Link>
            <Link 
              to="/video-integration" 
              className="text-sm font-medium px-3 py-2 rounded-lg bg-gradient-to-r from-neura-magenta/20 to-neura-teal/20 border border-neura-magenta/30 text-white hover:from-neura-magenta/30 hover:to-neura-teal/30 hover:border-neura-teal/50 transition-all duration-300 shadow-lg hover:shadow-neura-magenta/20"
              onClick={() => setIsMenuOpen(false)}
            >
              Integration
            </Link>
            <Link 
              to="/video-marketplace" 
              className="text-sm font-medium px-3 py-2 rounded-lg bg-gradient-to-r from-neura-teal/20 to-neura-purple/20 border border-neura-teal/30 text-white hover:from-neura-teal/30 hover:to-neura-purple/30 hover:border-neura-purple/50 transition-all duration-300 shadow-lg hover:shadow-neura-teal/20 flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <ShoppingCart size={16} className="inline mr-1" /> Marketplace
            </Link>
            <Link 
              to="/neurapathy" 
              className="grok-button-secondary px-4 py-2 text-sm flex items-center my-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <MessageSquare size={16} className="mr-2" />
              Messaging
            </Link>
            <div className="pt-2">
              <WalletConnectButton />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
