
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Wallet, X, Menu, ShoppingCart, MessageSquare } from "lucide-react";
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neura-dark/80 backdrop-blur-md border-b border-neura-purple/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-neura-purple to-neura-cyan bg-clip-text text-transparent">
            DzuwaSpace 3.0
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm text-white/80 hover:text-white transition-colors">
            Home
          </Link>
          <Link to="/video-studio" className="text-sm text-white/80 hover:text-white transition-colors">
            Studio
          </Link>
          <Link to="/video-integration" className="text-sm text-white/80 hover:text-white transition-colors">
            Integration
          </Link>
          <Link to="/video-marketplace" className="text-sm text-white/80 hover:text-white transition-colors">
            <ShoppingCart size={16} className="inline mr-1" /> Marketplace
          </Link>
          <Link 
            to="/neurapathy" 
            className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white text-sm px-4 py-2 rounded hover:opacity-90 transition-colors flex items-center"
          >
            <MessageSquare size={16} className="mr-2" />
            Neurapathy
          </Link>
          <WalletConnectButton />
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white/80 hover:text-white"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-neura-dark/95 backdrop-blur-md border-b border-neura-purple/20 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-sm text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/video-studio" 
              className="text-sm text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Studio
            </Link>
            <Link 
              to="/video-integration" 
              className="text-sm text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Integration
            </Link>
            <Link 
              to="/video-marketplace" 
              className="text-sm text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <ShoppingCart size={16} className="inline mr-1" /> Marketplace
            </Link>
            <Link 
              to="/neurapathy" 
              className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white text-sm px-4 py-2 rounded hover:opacity-90 transition-colors flex items-center my-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <MessageSquare size={16} className="mr-2" />
              Neurapathy
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
