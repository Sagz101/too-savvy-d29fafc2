import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const activities = [
  { av: 'MC', cls: 'bg-indigo-500/20 text-indigo-400', handle: '@mayacreates', action: 'minted Genesis Print #221', amount: '+$80' },
  { av: 'AR', cls: 'bg-cyan-500/20 text-cyan-400', handle: '@alexbuilds', action: 'sold NFC Hoodie', amount: '+$240' },
  { av: 'PS', cls: 'bg-pink-500/20 text-pink-400', handle: '@priyagreen', action: 'received DAO grant', amount: '+$500' },
  { av: 'JK', cls: 'bg-cyan-500/20 text-cyan-400', handle: '@jordankim', action: 'released new tokenized track', amount: '+$320' },
  { av: 'NE', cls: 'bg-indigo-500/20 text-indigo-400', handle: '@newcreator', action: 'first mint verified', amount: '+$45' },
];

export const HeroSection: React.FC = () => {
  const [feed, setFeed] = useState(activities.slice(0, 3));
  const idxRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      idxRef.current = (idxRef.current + 1) % activities.length;
      setFeed(prev => {
        const next = [activities[idxRef.current], ...prev];
        return next.slice(0, 3);
      });
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center gap-16 px-4 md:px-16 pt-28 pb-16">
      {/* Glow blobs */}
      <div className="absolute -top-48 -left-24 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: '#6366f1', filter: 'blur(100px)', opacity: 0.12 }} />
      <div className="absolute -bottom-24 left-48 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: '#06b6d4', filter: 'blur(100px)', opacity: 0.12 }} />

      {/* Left — Copy */}
      <div className="relative z-10">
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full font-space-mono text-[0.7rem] tracking-[0.1em] uppercase text-indigo-400 mb-6"
          style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span>⬡</span> Sovereign Web3 Platform · DAO Governed
        </motion.div>

        <motion.h1
          className="font-syne font-extrabold leading-[0.95] tracking-tight mb-6"
          style={{ fontSize: 'clamp(3rem, 5vw, 5.5rem)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-foreground">Your Keys.</span><br />
          <span
            className="inline-block"
            style={{
              background: 'linear-gradient(90deg, #6366f1 0%, #06b6d4 50%, #ec4899 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              backgroundSize: '200%',
              animation: 'shimmer-text 4s linear infinite',
            }}
          >
            Your Chain.
          </span><br />
          <span className="text-foreground/25 italic">Your Revenue.</span>
        </motion.h1>

        <motion.p
          className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-md mb-8 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          The decentralized home for creators who refuse to rent their audience. Launch stores, mint content, tokenize music — with zero platform fees and full on-chain ownership.
        </motion.p>

        <motion.div
          className="flex gap-3 flex-wrap mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            className="bg-indigo-500 hover:bg-indigo-400 text-white font-syne font-bold px-6 py-5 text-sm rounded-xl shadow-[0_0_0_0_rgba(99,102,241,0.4)] hover:shadow-[0_12px_40px_rgba(99,102,241,0.5)]"
            asChild
          >
            <Link to="/studio">Connect Wallet & Create</Link>
          </Button>
          <Button
            variant="outline"
            className="border-white/10 text-foreground hover:border-indigo-400/40 hover:bg-indigo-500/10 font-syne font-semibold px-6 py-5 text-sm rounded-xl"
            asChild
          >
            <Link to="/commerce-studio">
              <span className="mr-1.5">⬡</span> Explore Marketplace
            </Link>
          </Button>
        </motion.div>

        {/* Chain icons */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span className="font-space-mono text-[0.65rem] uppercase tracking-[0.1em] text-muted-foreground/50">
            Supported chains
          </span>
          <div className="flex gap-1.5">
            {[
              { icon: '⬡', label: 'Ethereum' },
              { icon: '⬟', label: 'Polygon' },
              { icon: '◎', label: 'Solana' },
              { icon: '🔵', label: 'Base' },
              { icon: '🔷', label: 'Arbitrum' },
            ].map(c => (
              <div
                key={c.label}
                title={c.label}
                className="w-7 h-7 rounded-full grid place-items-center text-xs transition-transform hover:scale-110"
                style={{ background: '#12121c', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                {c.icon}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right — Dashboard Preview */}
      <motion.div
        className="relative z-10 hidden lg:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Floating accent card */}
        <div
          className="absolute -top-6 -right-6 flex items-center gap-2.5 px-4 py-3 rounded-xl z-20"
          style={{
            background: '#0d0d14',
            border: '1px solid rgba(99,102,241,0.3)',
            boxShadow: '0 0 30px rgba(99,102,241,0.15)',
            animation: 'float-card 3s ease-in-out infinite',
          }}
        >
          <span className="text-xl">⚡</span>
          <div>
            <div className="font-syne font-bold text-sm text-foreground">$2.1M+</div>
            <div className="text-[0.65rem] text-muted-foreground">Creator earnings · all-time</div>
          </div>
        </div>

        {/* Dashboard card */}
        <div
          className="relative rounded-2xl p-6 overflow-hidden"
          style={{ background: '#0d0d14', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          {/* Top glow line */}
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, #6366f1, transparent)', opacity: 0.6 }} />

          {/* Header */}
          <div className="flex items-center justify-between mb-5">
            <span className="font-space-mono text-[0.7rem] uppercase tracking-[0.1em] text-muted-foreground">
              Creator Dashboard
            </span>
            <span className="flex items-center gap-1.5 font-space-mono text-[0.65rem] text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live
            </span>
          </div>

          {/* Stats 2x2 */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            {[
              { value: '$8,934', label: 'Monthly earnings', change: '+189% vs last mo.' },
              { value: '1.2K', label: 'Token holders', change: '+43 this week' },
              { value: '450', label: 'NFTs minted', change: '+67 today' },
              { value: '4.9★', label: 'Creator rating', change: 'Top 1% platform' },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-xl p-4 transition-colors"
                style={{ background: '#12121c', border: '1px solid rgba(255,255,255,0.06)' }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}
              >
                <div className="font-syne font-bold text-xl tracking-tight text-foreground">{s.value}</div>
                <div className="text-[0.7rem] text-muted-foreground mt-0.5">{s.label}</div>
                <div className="font-space-mono text-[0.65rem] text-emerald-400 mt-1">{s.change}</div>
              </div>
            ))}
          </div>

          {/* Activity Feed */}
          <div className="font-space-mono text-[0.7rem] uppercase tracking-[0.1em] text-muted-foreground mb-3">
            Live Activity
          </div>
          <div className="flex flex-col gap-2">
            {feed.map((a, i) => (
              <motion.div
                key={`${a.handle}-${i}`}
                className="flex items-center gap-3 p-2.5 rounded-lg text-[0.78rem]"
                style={{ background: '#12121c', border: '1px solid rgba(255,255,255,0.06)' }}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <div className={`w-7 h-7 rounded-full grid place-items-center text-[0.65rem] font-bold shrink-0 ${a.cls}`}>
                  {a.av}
                </div>
                <div className="text-muted-foreground flex-1 truncate">
                  <strong className="text-foreground">{a.handle}</strong> {a.action}
                </div>
                <span className="font-space-mono text-[0.7rem] text-emerald-400 whitespace-nowrap">{a.amount}</span>
                <span className="font-space-mono text-[0.6rem] text-muted-foreground/40">now</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
