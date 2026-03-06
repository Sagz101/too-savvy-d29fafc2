import React from 'react';
import { Twitter, MessageCircle, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerSections = [
  {
    title: 'Platform',
    links: [
      { name: 'Creator Studio', to: '/creator-studio' },
      { name: 'E-commerce Store', to: '/commerce-studio' },
      { name: 'Video Studio', to: '/video-studio' },
      { name: 'Social Hub', to: '/neura-social' },
      { name: 'Music Creator', to: '/music-creation' },
    ],
  },
  {
    title: 'Features',
    links: [
      { name: 'Media NFTs', to: '/video-nfts' },
      { name: 'Creator Monetization', to: '/finance-hub' },
      { name: 'Web3 Commerce', to: '/commerce-studio' },
      { name: 'DAO Governance', to: '/dao-governance' },
      { name: 'Wallet Integration', to: '/finance-hub' },
    ],
  },
  {
    title: 'Creator Studio',
    links: [
      { name: 'Dashboard', to: '/studio' },
      { name: 'Mint Content', to: '/video-nfts' },
      { name: 'Analytics', to: '/analytics' },
      { name: 'Creator Tools', to: '/creator-studio' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Documentation', to: '/learn' },
      { name: 'Tutorials', to: '/learn' },
      { name: 'Creator Guides', to: '/resources' },
      { name: 'API Docs', to: '/whitepaper' },
    ],
  },
  {
    title: 'Community',
    links: [
      { name: 'Creator Community', to: '/community' },
      { name: 'Success Stories', to: '/community' },
      { name: 'Global Innovators', to: '/global-innovators' },
      { name: 'Events', to: '/community' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Terms of Service', to: '/terms' },
      { name: 'Privacy Policy', to: '/privacy' },
      { name: 'DAO Governance Rules', to: '/dao-governance-rules' },
      { name: 'Whitepaper', to: '/whitepaper' },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="border-t border-white/10" style={{ background: 'linear-gradient(180deg, #060010 0%, #030008 100%)' }}>
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-7xl">
        {/* Brand */}
        <div className="text-center mb-12">
          <Link to="/" className="inline-block mb-4">
            <img src="/favicon.png" alt="Diminga Logo" className="h-12 w-auto object-contain mx-auto" />
          </Link>
          <p className="text-muted-foreground leading-relaxed text-sm md:text-base max-w-md mx-auto">
            Your sovereign portal to Web3—where your content, commerce, community, and crypto intersect.
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-foreground font-medium mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://twitter.com/diminga" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter size={20} />
          </a>
          <a href="https://discord.gg/diminga" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Discord">
            <MessageCircle size={20} />
          </a>
          <a href="https://github.com/diminga" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={20} />
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © 2025 Diminga. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
              <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
              <Link to="/whitepaper" className="text-muted-foreground hover:text-foreground transition-colors">Whitepaper</Link>
              <Link to="/dao-governance-rules" className="text-muted-foreground hover:text-foreground transition-colors">Governance</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
