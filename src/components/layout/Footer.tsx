
import React from 'react';
import { Twitter, MessageCircle, Github } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-8 md:mb-0">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span className="font-lotus">T00 Savvy</span>
            </div>
            <p className="text-muted-foreground max-w-xs leading-relaxed">
              Your sovereign portal to Web3—where your content, commerce, community, and crypto intersect.
            </p>
          </div>
          
          <div className="flex space-x-12">
            <div>
              <h4 className="text-foreground font-medium mb-6">Platform</h4>
              <ul className="space-y-3">
                <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#modules" className="text-muted-foreground hover:text-foreground transition-colors">Modules</a></li>
                <li><a href="#ecosystem" className="text-muted-foreground hover:text-foreground transition-colors">Ecosystem</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-foreground font-medium mb-6">Resources</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Whitepaper</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Token</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2025 T00 Savvy. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <MessageCircle size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
