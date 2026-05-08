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
      <footer className="relative z-[2] bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 px-6 md:px-10 py-12 md:py-16 max-w-[1280px] mx-auto">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-5 bg-renegade-text rounded-sm" />
            <span className="font-fraunces font-bold text-base text-renegade-text">renegade</span>
          </div>
          <p className="font-dm-sans text-sm text-renegade-muted leading-relaxed max-w-[220px] mb-4">
            Your sovereign portal to Web3 — where content, commerce, community, and crypto intersect.
          </p>
          <div className="inline-flex items-center gap-2 font-dm-sans text-[0.7rem] text-emerald-600">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" style={{ animation: 'blink 2s infinite' }} />
            All systems operational
          </div>
        </div>

        {footerCols.map((col) => (
          <div key={col.title}>
            <h4 className="font-dm-sans font-semibold text-sm text-renegade-text mb-4">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="font-dm-sans text-sm text-renegade-muted hover:text-renegade-text transition-colors"
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
        className="relative z-[2] flex flex-col md:flex-row items-center justify-between gap-2 px-6 md:px-10 py-5 max-w-[1280px] mx-auto"
        style={{ borderTop: '1px solid rgba(17,17,16,0.06)' }}
      >
        <p className="font-dm-sans text-[0.7rem] text-renegade-muted/50">
          © 2025 Renegade Protocol. Decentralized. Open. Yours.
        </p>
        <div className="flex gap-4 text-[0.7rem]">
          <Link to="/privacy" className="font-dm-sans text-renegade-muted/50 hover:text-renegade-text transition-colors">Privacy</Link>
          <Link to="/terms" className="font-dm-sans text-renegade-muted/50 hover:text-renegade-text transition-colors">Terms</Link>
          <Link to="/dao-governance-rules" className="font-dm-sans text-renegade-muted/50 hover:text-renegade-text transition-colors">DAO Rules</Link>
        </div>
      </div>
    </>
  );
};
