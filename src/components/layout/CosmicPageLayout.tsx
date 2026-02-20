import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface CosmicPageLayoutProps {
  children: React.ReactNode;
  /** Optional override for the page-level background style */
  className?: string;
}

/**
 * Shared layout wrapper that applies the deep-cosmic-purple design
 * system consistently across all inner pages, matching the hero design.
 */
export const CosmicPageLayout: React.FC<CosmicPageLayoutProps> = ({
  children,
  className = '',
}) => {
  return (
    <div
      className={`min-h-screen text-white relative overflow-x-hidden ${className}`}
      style={{ background: 'linear-gradient(180deg, #0d0020 0%, #0a0018 50%, #060010 100%)' }}
    >
      {/* Global ambient glow orbs */}
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background:
              'radial-gradient(circle, hsl(262 83% 58% / 0.4) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background:
              'radial-gradient(circle, hsl(330 85% 60% / 0.4) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full opacity-10"
          style={{
            background:
              'radial-gradient(circle, hsl(192 100% 56% / 0.3) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <Header />

      <main className="relative z-10">{children}</main>

      <Footer />
    </div>
  );
};
