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

const scrollTo = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const IndexRefactored = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

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

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8 list-none">
          {navLinks.map((l) => (
            <li key={l.label}>
              {'href' in l ? (
                <a
                  href={l.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(l.href!); }}
                  className="font-dm-sans text-sm text-diminga-muted hover:text-diminga-text transition-colors tracking-[-0.01em]"
                >
                  {l.label}
                </a>
              ) : (
                <Link to={l.to!} className="font-dm-sans text-sm text-diminga-muted hover:text-diminga-text transition-colors tracking-[-0.01em]">
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
            className="bg-diminga-text text-white px-4 py-2 rounded-lg font-dm-sans font-medium text-sm hover:-translate-y-px transition-all hidden sm:inline-block"
          >
            Connect Wallet
          </Link>
          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 -mr-2 text-diminga-text"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[49] pt-16 bg-white/95 md:hidden" style={{ backdropFilter: 'blur(20px)' }}>
          <div className="flex flex-col px-6 py-8 gap-2">
            {navLinks.map((l) => (
              'href' in l ? (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={(e) => { e.preventDefault(); setMobileOpen(false); scrollTo(l.href!); }}
                  className="font-dm-sans text-lg font-medium text-diminga-text py-3 border-b border-diminga-text/6 transition-colors hover:text-diminga-accent"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.label}
                  to={l.to!}
                  onClick={() => setMobileOpen(false)}
                  className="font-dm-sans text-lg font-medium text-diminga-text py-3 border-b border-diminga-text/6 transition-colors hover:text-diminga-accent"
                >
                  {l.label}
                </Link>
              )
            ))}
            <div className="flex flex-col gap-3 mt-6">
              <Link
                to="/auth"
                onClick={() => setMobileOpen(false)}
                className="font-dm-sans text-sm text-diminga-muted hover:text-diminga-text transition-colors text-center py-2"
              >
                Sign in
              </Link>
              <Link
                to="/finance-hub"
                onClick={() => setMobileOpen(false)}
                className="bg-diminga-text text-white px-4 py-3 rounded-lg font-dm-sans font-medium text-sm text-center hover:-translate-y-px transition-all"
              >
                Connect Wallet
              </Link>
            </div>
          </div>
        </div>
      )}

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
