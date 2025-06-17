
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Wallet, X, Menu, ShoppingCart, MessageSquare, Home, Users, Video, Code, Store, Shield, Share2 } from "lucide-react";
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToWhitepaper = () => {
    const whitepaperElement = document.getElementById('whitepaper-section');
    if (whitepaperElement) {
      whitepaperElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDocumentation = () => {
    const documentationElement = document.getElementById('documentation-section');
    if (documentationElement) {
      documentationElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToModules = () => {
    const modulesElement = document.getElementById('modules-section');
    if (modulesElement) {
      modulesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center mr-8">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/2e6dc416-59b6-4048-a87d-858554756c11.png" 
              alt="Too Savvy Logo" 
              className="w-[400px] h-[100px] object-contain"
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className="web3-nav-button web3-nav-dashboard flex items-center gap-2"
          >
            <Home size={16} />
            Dashboard
          </Link>
          <Link 
            to="/global-innovators"
            className="web3-nav-button web3-nav-create flex items-center gap-2"
          >
            <Users size={16} />
            Collaborate
          </Link>
          <Link 
            to="/video-studio" 
            className="web3-nav-button web3-nav-create flex items-center gap-2"
          >
            <Video size={16} />
            Creator Studio
          </Link>
          <Link 
            to="/commerce-studio" 
            className="web3-nav-button web3-nav-create flex items-center gap-2"
          >
            <Store size={16} />
            Web3 Store
          </Link>
          <Link 
            to="/video-integration" 
            className="web3-nav-button web3-nav-dev flex items-center gap-2"
          >
            <Code size={16} />
            Developer Hub
          </Link>
          <Link 
            to="/video-marketplace" 
            className="web3-nav-button web3-nav-community flex items-center gap-2"
          >
            <ShoppingCart size={16} />
            Creator Market
          </Link>
          <Link 
            to="/neurapathy" 
            className="web3-nav-button web3-nav-community flex items-center gap-2"
          >
            <Shield size={16} />
            Secure Chat
          </Link>
          <Link
            to="/neura-social"
            className="web3-nav-button web3-nav-community flex items-center gap-2"
          >
            <Share2 size={16} />
            Social Hub
          </Link>
          <div className="web3-wallet-container">
            <WalletConnectButton />
          </div>
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
              className="web3-nav-button web3-nav-dashboard flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home size={16} />
              Dashboard
            </Link>
            <Link 
              to="/global-innovators"
              className="web3-nav-button web3-nav-create flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Users size={16} />
              Collaborate
            </Link>
            <Link 
              to="/video-studio" 
              className="web3-nav-button web3-nav-create flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Video size={16} />
              Creator Studio
            </Link>
            <Link 
              to="/commerce-studio" 
              className="web3-nav-button web3-nav-create flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Store size={16} />
              Web3 Store
            </Link>
            <Link 
              to="/video-integration" 
              className="web3-nav-button web3-nav-dev flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Code size={16} />
              Developer Hub
            </Link>
            <Link 
              to="/video-marketplace" 
              className="web3-nav-button web3-nav-community flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <ShoppingCart size={16} />
              Creator Market
            </Link>
            <Link 
              to="/neurapathy" 
              className="web3-nav-button web3-nav-community flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Shield size={16} />
              Secure Chat
            </Link>
            <Link
              to="/neura-social"
              className="web3-nav-button web3-nav-community flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <Share2 size={16} />
              Social Hub
            </Link>
            <div className="pt-2 web3-wallet-container">
              <WalletConnectButton />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
