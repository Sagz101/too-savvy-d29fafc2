
import React from 'react';
import { Twitter, MessageCircle, Github } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-neura-dark border-t border-neura-purple/20 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-neura-purple to-neura-cyan bg-clip-text text-transparent mb-2">
              Neura 3.0
            </div>
            <p className="text-white/60 max-w-xs">
              Your sovereign portal to Web3—where your content, commerce, community, and crypto intersect.
            </p>
          </div>
          
          <div className="flex space-x-8">
            <div>
              <h4 className="text-white font-medium mb-4">Platform</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-white/60 hover:text-neura-cyan transition-colors">Features</a></li>
                <li><a href="#modules" className="text-white/60 hover:text-neura-cyan transition-colors">Modules</a></li>
                <li><a href="#ecosystem" className="text-white/60 hover:text-neura-cyan transition-colors">Ecosystem</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/60 hover:text-neura-cyan transition-colors">Documentation</a></li>
                <li><a href="#" className="text-white/60 hover:text-neura-cyan transition-colors">Whitepaper</a></li>
                <li><a href="#" className="text-white/60 hover:text-neura-cyan transition-colors">Token</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neura-purple/20 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            © 2025 Neura 3.0. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white/60 hover:text-neura-cyan transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-white/60 hover:text-neura-cyan transition-colors">
              <MessageCircle size={20} />
            </a>
            <a href="#" className="text-white/60 hover:text-neura-cyan transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
