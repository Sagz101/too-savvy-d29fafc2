import React, { useEffect, useState } from 'react';
import {
  HeroSection,
  StatsBar,
  ToolkitSection,
  TrustSection,
  LiveTicker,
  DAOSection,
  InnovateFundSell,
} from '@/components/home';
import { SuccessStories } from '@/components/home/SuccessStories';
import { CtaBanner } from '@/components/home/CtaBanner';
import { TrustStrip } from '@/components/home/TrustStrip';
import { Footer } from '@/components/layout/Footer';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Studio', href: '#toolkit' },
  { label: 'Marketplace', href: '#marketplace' },
  { label: 'Governance', href: '#governance' },
  { label: 'Community', href: '#stories' },
  { label: 'Docs', to: '/learn' },
] as const;

const IndexRefactored = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-diminga-bg text-diminga-text" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Fixed nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-4 md:px-8 bg-white/80"
        style={{
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(17,17,16,0.06)',
        }}
      >
        <Link to="/" className="flex items-center gap-2">
          <div className="w-6 h-6 bg-diminga-text rounded-md" />
          <span className="font-fraunces font-bold text-lg tracking-tight text-diminga-text">diminga</span>
        </Link>

        <ul className="hidden md:flex gap-8 list-none">
          {[
            { label: 'Studio', href: '#toolkit' },
            { label: 'Marketplace', href: '#marketplace' },
            { label: 'Governance', href: '#governance' },
            { label: 'Community', href: '#stories' },
            { label: 'Docs', to: '/learn' },
          ].map((l) => (
            <li key={l.label}>
              {'href' in l ? (
                <a
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(l.href!)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="font-dm-sans text-sm text-diminga-muted hover:text-diminga-text transition-colors tracking-[-0.01em]"
                >
                  {l.label}
                </a>
              ) : (
                <Link to={l.to!} className="font-dm-sans text-sm text-diminga-muted hover:text-diminga-text transition-[-0.01em]">
                  {l.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link to="/auth" className="font-dm-sans text-sm text-diminga-muted hover:text-diminga-text transition-colors hidden sm:inline">
            Sign in
          </Link>
          <Link
            to="/finance-hub"
            className="bg-diminga-text text-white px-4 py-2 rounded-lg font-dm-sans font-medium text-sm hover:-translate-y-px transition-all"
          >
            Connect Wallet
          </Link>
        </div>
      </nav>

      <main className="relative z-[2]">
        <HeroSection />
        <LiveTicker />
        <TrustStrip />
        <StatsBar />
        <ToolkitSection />
        <InnovateFundSell />
        <DAOSection />
        <TrustSection />
        <SuccessStories />
        <CtaBanner />
      </main>

      <Footer />
    </div>
  );
};

export default IndexRefactored;
