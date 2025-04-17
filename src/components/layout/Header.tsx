
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Wallet, X, Menu } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neura-dark/80 backdrop-blur-md border-b border-neura-purple/20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-neura-purple to-neura-cyan bg-clip-text text-transparent">
            Neura 3.0
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-sm text-white/80 hover:text-white transition-colors">
            Features
          </a>
          <a href="#modules" className="text-sm text-white/80 hover:text-white transition-colors">
            Modules
          </a>
          <a href="#ecosystem" className="text-sm text-white/80 hover:text-white transition-colors">
            Ecosystem
          </a>
          <Button variant="ghost" size="sm" className="ml-4 bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90">
            <Wallet size={16} className="mr-2" /> Connect Wallet
          </Button>
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
            <a 
              href="#features" 
              className="text-sm text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#modules" 
              className="text-sm text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Modules
            </a>
            <a 
              href="#ecosystem" 
              className="text-sm text-white/80 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Ecosystem
            </a>
            <Button variant="ghost" size="sm" className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90 w-full">
              <Wallet size={16} className="mr-2" /> Connect Wallet
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
