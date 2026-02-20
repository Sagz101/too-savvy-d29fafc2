import React from 'react';
import { Twitter, MessageCircle, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="border-t border-white/10" style={{ background: 'linear-gradient(180deg, #060010 0%, #030008 100%)' }}>
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-6xl">
        {/* Main Footer Content */}
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
          
          {/* Brand Section */}
          <div className="max-w-md mx-auto">
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/favicon.png" 
                alt="Diminga Logo" 
                className="h-12 w-auto object-contain mx-auto"
              />
            </Link>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              Your sovereign portal to Web3—where your content, commerce, community, and crypto intersect.
            </p>
          </div>
          
          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 text-center">
            <div>
              <h4 className="text-foreground font-medium mb-4 md:mb-6">Platform</h4>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <a 
                    href="/#features" 
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    aria-label="View platform features"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a 
                    href="/#create" 
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    aria-label="Explore user types"
                  >
                    User Types
                  </a>
                </li>
                <li>
                  <Link 
                    to="/video-studio" 
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    aria-label="Access creator studio"
                  >
                    Creator Studio
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-foreground font-medium mb-4 md:mb-6">Resources</h4>
              <ul className="space-y-2 md:space-y-3">
                <li>
                  <Link 
                    to="/learn" 
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    aria-label="View documentation"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/studio" 
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    aria-label="Access analytics dashboard"
                  >
                    Analytics
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/global-innovators" 
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    aria-label="Join community"
                  >
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-foreground font-medium mb-4 md:mb-6">Connect</h4>
              <div className="flex justify-center space-x-6 mb-4">
                <a 
                  href="https://twitter.com/diminga" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Follow Diminga on Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="https://discord.gg/diminga" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Join Diminga Discord community"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={20} />
                </a>
                <a 
                  href="https://github.com/diminga" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="View Diminga on GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-6 md:pt-8 mt-8 md:mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div className="text-muted-foreground text-sm order-2 md:order-1">
              © 2025 Diminga. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm order-1 md:order-2">
              <Link 
                to="/privacy" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="View privacy policy"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="View terms of service"
              >
                Terms of Service
              </Link>
              <Link 
                to="/whitepaper" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Read whitepaper"
              >
                Whitepaper
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
