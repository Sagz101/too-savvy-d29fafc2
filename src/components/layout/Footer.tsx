
import React from 'react';
import { Twitter, MessageCircle, Github } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50 py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left mb-8 md:mb-12 gap-8">
          <div className="flex-1 max-w-sm">
            <div className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              <span className="font-lotus">T00 Savvy</span>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              Your sovereign portal to Web3—where your content, commerce, community, and crypto intersect.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 md:gap-12">
            <div className="text-center sm:text-left">
              <h4 className="text-foreground font-medium mb-4 md:mb-6">Platform</h4>
              <ul className="space-y-2 md:space-y-3">
                <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Features</a></li>
                <li><a href="#user-types" className="text-muted-foreground hover:text-foreground transition-colors text-sm">User Types</a></li>
                <li><a href="/video-studio" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Creator Studio</a></li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-foreground font-medium mb-4 md:mb-6">Resources</h4>
              <ul className="space-y-2 md:space-y-3">
                <li><a href="/video-integration" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Documentation</a></li>
                <li><a href="/finance-hub" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Analytics</a></li>
                <li><a href="/global-innovators" className="text-muted-foreground hover:text-foreground transition-colors text-sm">Community</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="text-muted-foreground text-sm order-2 md:order-1">
            © 2025 T00 Savvy. All rights reserved.
          </div>
          <div className="flex space-x-6 order-1 md:order-2">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Discord">
              <MessageCircle size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
