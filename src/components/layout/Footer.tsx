
import React from 'react';
import { Twitter, MessageCircle, Github } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-dzuwa-dark-blue via-neura-dark to-dzuwa-dark-blue border-t border-dzuwa-cyan/20 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-dzuwa-cyan via-dzuwa-purple to-dzuwa-magenta bg-clip-text text-transparent mb-2 flex items-baseline">
              <span className="font-lotus">Too Savvy</span>
              <span className="text-4xl md:text-5xl font-black bg-gradient-to-r from-solar-core via-solar-radiative to-solar-photosphere bg-clip-text text-transparent ml-1 font-orbitron">X</span>
            </div>
            <p className="text-white/60 max-w-xs">
              Your sovereign portal to Web3—where your content, commerce, community, and crypto intersect.
            </p>
          </div>
          
          <div className="flex space-x-8">
            <div>
              <h4 className="text-white font-medium mb-4">Platform</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-white/60 hover:text-dzuwa-cyan transition-colors">Features</a></li>
                <li><a href="#modules" className="text-white/60 hover:text-dzuwa-cyan transition-colors">Modules</a></li>
                <li><a href="#ecosystem" className="text-white/60 hover:text-dzuwa-cyan transition-colors">Ecosystem</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/60 hover:text-dzuwa-cyan transition-colors">Documentation</a></li>
                <li><a href="#" className="text-white/60 hover:text-dzuwa-cyan transition-colors">Whitepaper</a></li>
                <li><a href="#" className="text-white/60 hover:text-dzuwa-cyan transition-colors">Token</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-dzuwa-cyan/20 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            © 2025 Too Savvy. All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-white/60 hover:text-dzuwa-cyan transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-white/60 hover:text-dzuwa-cyan transition-colors">
              <MessageCircle size={20} />
            </a>
            <a href="#" className="text-white/60 hover:text-dzuwa-cyan transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
