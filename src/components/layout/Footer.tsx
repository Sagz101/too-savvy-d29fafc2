import React from 'react';
import { Link } from 'react-router-dom';

const footerCols = [
  {
    title: 'Platform',
    links: [
      { name: 'Creator Studio', to: '/creator-studio' },
      { name: 'E-commerce Store', to: '/commerce-studio' },
      { name: 'Video Studio', to: '/video-studio' },
      { name: 'Music Creator', to: '/music-creation' },
      { name: 'Social Hub', to: '/neura-social' },
    ],
  },
  {
    title: 'Governance',
    links: [
      { name: 'DAO Dashboard', to: '/dao-governance' },
      { name: 'Active Proposals', to: '/dao-governance' },
      { name: 'Treasury', to: '/finance-hub' },
      { name: 'Token Distribution', to: '/whitepaper' },
      { name: 'Whitepaper', to: '/whitepaper' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { name: 'Documentation', to: '/learn' },
      { name: 'API Reference', to: '/resources' },
      { name: 'Smart Contracts', to: '/whitepaper' },
      { name: 'GitHub', to: '/resources' },
      { name: 'Bug Bounty', to: '/resources' },
    ],
  },
];

export const Footer = () => {
  return (
    <>
      <footer
        className="relative z-[2] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 px-4 md:px-16 py-12 md:py-16"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        {/* Brand */}
        <div>
          <span
            className="font-syne font-extrabold text-xl mb-3 block"
            style={{
              background: 'linear-gradient(135deg, #fff 0%, #6366f1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            diminga
          </span>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-[220px] mb-4">
            Your sovereign portal to Web3 — where content, commerce, community, and crypto intersect.
          </p>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full font-space-mono text-[0.7rem] text-emerald-400"
            style={{ background: '#12121c', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            All systems operational
          </div>
        </div>

        {footerCols.map((col) => (
          <div key={col.title}>
            <h4 className="font-syne font-bold text-sm mb-4 tracking-wide">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </footer>

      {/* Bottom bar */}
      <div
        className="relative z-[2] flex flex-col md:flex-row items-center justify-between gap-2 px-4 md:px-16 py-5"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <p className="font-space-mono text-[0.7rem] text-muted-foreground/40">
          © 2025 Diminga Protocol. Decentralized. Open. Yours.
        </p>
        <div className="flex gap-4 text-[0.7rem]">
          <Link to="/privacy" className="text-muted-foreground/40 hover:text-foreground transition-colors">Privacy</Link>
          <Link to="/terms" className="text-muted-foreground/40 hover:text-foreground transition-colors">Terms</Link>
          <Link to="/dao-governance-rules" className="text-muted-foreground/40 hover:text-foreground transition-colors">DAO Governance Rules</Link>
        </div>
      </div>
    </>
  );
};
