import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const proposals = [
  {
    id: 'DIP-047',
    status: 'active' as const,
    statusLabel: 'Active · 2d left',
    title: 'Add Solana chain support to Video Studio',
    votePercent: 73,
    votesLabel: '73% For',
    votesCount: '3,420 votes cast',
  },
  {
    id: 'DIP-046',
    status: 'active' as const,
    statusLabel: 'Active · 4d left',
    title: 'Allocate 50K treasury to creator grants Q2',
    votePercent: 89,
    votesLabel: '89% For',
    votesCount: '5,102 votes cast',
  },
  {
    id: 'DIP-045',
    status: 'pending' as const,
    statusLabel: 'Pending',
    title: 'Introduce referral rewards for creator onboarding',
    votePercent: 0,
    votesLabel: 'Voting opens in 12h',
    votesCount: '0 votes',
  },
];

export const DAOSection: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section
      ref={ref}
      className="relative z-[2] py-24 px-4 md:px-16 overflow-hidden"
      style={{
        background: '#0d0d14',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Glow blob */}
      <div
        className="absolute -top-48 -right-24 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: '#06b6d4', filter: 'blur(100px)', opacity: 0.12 }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="font-space-mono text-[0.65rem] tracking-[0.15em] uppercase text-indigo-400 mb-4">
            // DAO Governance
          </div>
          <h2 className="font-syne font-extrabold text-4xl md:text-5xl leading-[1.05] tracking-tight text-foreground mb-6">
            You don't use<br />Diminga.<br />
            <em className="text-foreground/30 italic">You govern it.</em>
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-md mb-8">
            Every platform decision — fees, features, grants, treasury — is voted on by token holders. 
            This isn't a governance facade. It's the actual mechanism of control.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Button className="bg-indigo-500 hover:bg-indigo-400 text-white font-syne font-bold" asChild>
              <Link to="/dao-governance">Join DAO</Link>
            </Button>
            <Button
              variant="outline"
              className="border-white/10 text-foreground hover:border-indigo-400/40 hover:bg-indigo-500/10 font-syne font-semibold"
              asChild
            >
              <Link to="/dao-governance">View All Proposals</Link>
            </Button>
          </div>
        </motion.div>

        {/* Right proposals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="font-space-mono text-[0.7rem] uppercase tracking-[0.1em] text-muted-foreground mb-4">
            Active Proposals
          </div>
          <div className="flex flex-col gap-3">
            {proposals.map((p) => (
              <div
                key={p.id}
                className="rounded-xl p-4 transition-colors"
                style={{
                  background: '#050508',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-space-mono text-[0.65rem] text-muted-foreground/50">{p.id}</span>
                  <span
                    className={`font-space-mono text-[0.62rem] px-2 py-0.5 rounded-full uppercase tracking-wider ${
                      p.status === 'active'
                        ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20'
                        : 'bg-amber-500/15 text-amber-400 border border-amber-500/20'
                    }`}
                  >
                    {p.statusLabel}
                  </span>
                </div>
                <div className="font-syne font-semibold text-sm text-foreground mb-3">{p.title}</div>
                <div className="h-1 rounded-full overflow-hidden" style={{ background: '#12121c' }}>
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${p.votePercent}%`,
                      background: 'linear-gradient(90deg, #6366f1, #06b6d4)',
                    }}
                  />
                </div>
                <div className="flex justify-between mt-2 font-space-mono text-[0.62rem] text-muted-foreground">
                  <span>{p.votesLabel}</span>
                  <span>{p.votesCount}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
