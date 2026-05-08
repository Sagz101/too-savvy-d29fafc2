import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const activities = [
  { av: 'MC', handle: '@mayacreates', action: 'minted Genesis Print #221', amount: '+$80' },
  { av: 'AR', handle: '@alexbuilds', action: 'sold NFC Hoodie', amount: '+$240' },
  { av: 'PS', handle: '@priyagreen', action: 'received DAO grant', amount: '+$500' },
  { av: 'JK', handle: '@jordankim', action: 'released tokenized track', amount: '+$320' },
  { av: 'NE', handle: '@newcreator', action: 'first mint verified', amount: '+$45' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

export const HeroSection: React.FC = () => {
  const [feed, setFeed] = useState(activities.slice(0, 3));
  const idxRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      idxRef.current = (idxRef.current + 1) % activities.length;
      setFeed(prev => [activities[idxRef.current], ...prev].slice(0, 3));
    }, 3800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-16 max-w-[1280px] mx-auto px-6 md:px-10 pt-32 pb-20">
      {/* Left — Copy */}
      <div className="relative z-10">
        <motion.div
          className="flex items-center gap-3 mb-6"
          custom={0} variants={fadeUp} initial="hidden" animate="visible"
        >
          <div className="w-6 h-px bg-renegade-accent" />
          <span className="font-dm-sans font-semibold text-[0.7rem] tracking-[0.06em] uppercase text-renegade-accent">
            Sovereign Web3 Platform
          </span>
        </motion.div>

        <motion.h1
          className="font-fraunces font-bold leading-[1.05] tracking-[-0.03em] mb-6"
          style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4rem)' }}
          custom={1} variants={fadeUp} initial="hidden" animate="visible"
        >
          <span className="text-renegade-text">The sovereign platform</span><br />
          <span className="text-renegade-text">for </span>
          <span className="font-fraunces italic font-light text-renegade-accent">creators.</span>
        </motion.h1>

        <motion.p
          className="font-dm-sans text-renegade-muted text-base md:text-lg leading-relaxed max-w-md mb-8 tracking-[-0.01em]"
          custom={2} variants={fadeUp} initial="hidden" animate="visible"
        >
          Launch stores, mint content, tokenize music — with zero platform fees and full on-chain ownership.
        </motion.p>

        <motion.div
          className="flex gap-3 flex-wrap mb-8"
          custom={3} variants={fadeUp} initial="hidden" animate="visible"
        >
          <Button
            className="bg-renegade-accent hover:bg-renegade-accent/90 text-white font-dm-sans font-semibold px-6 py-5 text-sm rounded-lg"
            asChild
          >
            <Link to="/studio">Connect Wallet & Create</Link>
          </Button>
          <Button
            variant="outline"
            className="border-renegade-text/15 text-renegade-text hover:bg-renegade-hover font-dm-sans font-medium px-6 py-5 text-sm rounded-lg"
            asChild
          >
            <Link to="/commerce-studio">Explore Marketplace</Link>
          </Button>
        </motion.div>

        {/* Proof stats */}
        <motion.div
          className="grid grid-cols-4 gap-6 pt-6"
          style={{ borderTop: '1px solid rgba(17,17,16,0.08)' }}
          custom={4} variants={fadeUp} initial="hidden" animate="visible"
        >
          {[
            { value: '$2.1M+', label: 'Creator earnings' },
            { value: '15,247', label: 'Active creators' },
            { value: '0%', label: 'Platform fees' },
            { value: '98/100', label: 'Security score' },
          ].map(s => (
            <div key={s.label}>
              <div className="font-fraunces font-bold text-lg tracking-tight text-renegade-accent">{s.value}</div>
              <div className="font-dm-sans text-[0.7rem] text-renegade-muted mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right — Dashboard Preview */}
      <motion.div
        className="relative z-10 hidden lg:block"
        custom={2} variants={fadeUp} initial="hidden" animate="visible"
      >
        {/* Dashboard card */}
        <div className="relative rounded-2xl bg-white p-6 overflow-hidden shadow-[0_1px_3px_rgba(17,17,16,0.06)]"
          style={{ borderTop: '3px solid #E8650A' }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <span className="font-dm-sans font-semibold text-[0.7rem] uppercase tracking-[0.06em] text-renegade-muted">
              Creator Dashboard
            </span>
            <span className="flex items-center gap-1.5 font-dm-sans text-[0.65rem] text-emerald-600">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" style={{ animation: 'blink 2s infinite' }} />
              Live
            </span>
          </div>

          {/* Stats 2x2 */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            {[
              { value: '$8,934', label: 'Monthly earnings', change: '+189%' },
              { value: '1.2K', label: 'Token holders', change: '+43' },
              { value: '450', label: 'NFTs minted', change: '+67' },
              { value: '4.9★', label: 'Creator rating', change: 'Top 1%' },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-xl p-4 transition-colors bg-renegade-alt hover:bg-renegade-hover cursor-default"
              >
                <div className="font-fraunces font-bold text-xl tracking-tight text-renegade-text">{s.value}</div>
                <div className="font-dm-sans text-[0.7rem] text-renegade-muted mt-0.5">{s.label}</div>
                <div className="font-dm-sans text-[0.65rem] text-renegade-accent mt-1 font-medium">{s.change}</div>
              </div>
            ))}
          </div>

          {/* Activity Feed */}
          <div className="font-dm-sans font-semibold text-[0.7rem] uppercase tracking-[0.06em] text-renegade-muted mb-3">
            Live Activity
          </div>
          <div className="flex flex-col gap-2">
            {feed.map((a, i) => (
              <motion.div
                key={`${a.handle}-${i}`}
                className="flex items-center gap-3 p-2.5 rounded-lg text-[0.78rem] bg-renegade-alt"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
              >
                <div className="w-7 h-7 rounded-full grid place-items-center text-[0.65rem] font-bold shrink-0 bg-renegade-hover text-renegade-accent">
                  {a.av}
                </div>
                <div className="text-renegade-muted flex-1 truncate font-dm-sans">
                  <strong className="text-renegade-text">{a.handle}</strong> {a.action}
                </div>
                <span className="font-dm-sans text-[0.7rem] text-renegade-accent font-semibold whitespace-nowrap">{a.amount}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating chips */}
        <div className="flex gap-3 mt-4 justify-center">
          <div
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white shadow-[0_1px_3px_rgba(17,17,16,0.06)] text-[0.75rem] font-dm-sans text-renegade-muted"
            style={{ animation: 'chipFloat 3.5s ease-in-out infinite' }}
          >
            <span className="text-renegade-accent font-semibold">⚡ $2.1M+</span> Creator earnings
          </div>
          <div
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white shadow-[0_1px_3px_rgba(17,17,16,0.06)] text-[0.75rem] font-dm-sans text-renegade-muted"
            style={{ animation: 'chipFloat 3.5s ease-in-out infinite 0.5s' }}
          >
            <span className="text-emerald-600 font-semibold">✓ Audited</span> CertiK 98/100
          </div>
        </div>
      </motion.div>
    </section>
  );
};
