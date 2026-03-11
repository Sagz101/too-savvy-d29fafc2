import React, { useEffect } from 'react';
import {
  HeroSection,
  StatsBar,
  ToolkitSection,
  TrustSection,
  LiveTicker,
  DAOSection,
  ParticleNetwork,
  CustomCursor,
  InnovateFundSell,
} from '@/components/home';
import { Footer } from '@/components/layout/Footer';

const IndexRefactored = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden" style={{ background: '#050508', color: '#f1f5f9' }}>
      {/* Background layers */}
      <ParticleNetwork />
      <CustomCursor />

      {/* Noise overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-[1] opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Fixed nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-4 md:px-8"
        style={{
          background: 'rgba(5,5,8,0.8)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <a
          href="/"
          className="font-syne font-extrabold text-lg tracking-tight"
          style={{
            background: 'linear-gradient(135deg, #fff 0%, #6366f1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          diminga
        </a>

        <ul className="hidden md:flex gap-8 list-none">
          {[
            { label: 'Studio', to: '/studio' },
            { label: 'Marketplace', to: '/commerce-studio' },
            { label: 'Governance', to: '/dao-governance' },
            { label: 'Community', to: '/community' },
            { label: 'Docs', to: '/learn' },
          ].map((l) => (
            <li key={l.label}>
              <a href={l.to} className="text-muted-foreground text-sm tracking-wide hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div
            className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full font-space-mono text-[0.7rem] text-emerald-400"
            style={{ background: '#12121c', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            ETH Mainnet
          </div>
          <a
            href="/finance-hub"
            className="bg-indigo-500 text-white px-4 py-2 rounded-lg font-syne font-semibold text-sm hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(99,102,241,0.4)] transition-all"
          >
            Connect Wallet
          </a>
        </div>
      </nav>

      <main className="relative z-[2]">
        <HeroSection />
        <LiveTicker />
        <StatsBar />
        <ToolkitSection />
        <InnovateFundSell />
        <DAOSection />
        <TrustSection />
      </main>

      <Footer />
    </div>
  );
};

export default IndexRefactored;
