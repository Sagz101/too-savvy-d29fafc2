import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const proposals = [
  { dip: 'RIP-47', status: 'Active', statusColor: 'text-emerald-600 bg-emerald-50', title: 'Reduce marketplace fee from 2.5% to 0%', yes: 94, votes: '12,847' },
  { dip: 'RIP-48', status: 'Active', statusColor: 'text-emerald-600 bg-emerald-50', title: 'Add Solana chain support for NFT minting', yes: 78, votes: '9,234' },
  { dip: 'RIP-49', status: 'Pending', statusColor: 'text-renegade-accent bg-renegade-hover', title: 'Creator grant program — $50K quarterly fund', yes: 0, votes: 'Opens in 2d' },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export const DAOSection: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="governance" className="bg-renegade-alt py-20 scroll-mt-20" style={{ borderTop: '1px solid rgba(17,17,16,0.06)', borderBottom: '1px solid rgba(17,17,16,0.06)' }}>
      <div ref={ref} className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-dm-sans font-semibold text-[0.7rem] tracking-[0.06em] uppercase text-renegade-accent mb-3 block">
            DAO Governance
          </span>
          <h2 className="font-fraunces font-bold text-3xl md:text-4xl tracking-[-0.03em] text-renegade-text mb-4">
            You don't govern Renegade.{' '}
            <span className="italic font-light text-renegade-accent">You ARE Renegade.</span>
          </h2>
          <p className="font-dm-sans text-renegade-muted leading-relaxed mb-6 max-w-md">
            Every $RNGD token holder can propose, vote, and shape the platform's future. No central authority. No gatekeepers.
          </p>
          <Button
            className="bg-renegade-accent hover:bg-renegade-accent/90 text-white font-dm-sans font-semibold px-6 py-5 text-sm rounded-lg mb-8"
            asChild
          >
            <Link to="/dao-governance">Enter Governance →</Link>
          </Button>

          {/* Token stats */}
          <motion.div
            className="grid grid-cols-2 gap-4 pt-6"
            style={{ borderTop: '1px solid rgba(17,17,16,0.08)' }}
            variants={container}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {[
              { value: '1M', label: 'Total $RNGD supply' },
              { value: '67%', label: 'Staked tokens' },
              { value: '847', label: 'Governance participants' },
              { value: '47', label: 'Active proposals' },
            ].map(s => (
              <motion.div key={s.label} variants={item}>
                <div className="font-fraunces font-bold text-lg text-renegade-text">{s.value}</div>
                <div className="font-dm-sans text-[0.7rem] text-renegade-muted">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — Proposals */}
        <motion.div
          className="flex flex-col gap-4"
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {proposals.map((p) => (
            <motion.div
              key={p.dip}
              className="bg-white rounded-xl p-5 transition-all hover:-translate-y-0.5"
              style={{ border: '1px solid rgba(17,17,16,0.06)' }}
              variants={item}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="font-dm-sans text-[0.7rem] font-semibold text-renegade-muted">{p.dip}</span>
                <span className={`px-2 py-0.5 rounded-md text-[0.6rem] font-dm-sans font-semibold ${p.statusColor}`}>
                  {p.status}
                </span>
              </div>
              <h4 className="font-fraunces font-bold text-sm text-renegade-text mb-3">{p.title}</h4>
              {p.yes > 0 ? (
                <>
                  <div className="w-full h-2 bg-renegade-alt rounded-full overflow-hidden mb-2">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${p.yes}%`,
                        background: 'linear-gradient(90deg, #E8650A, #F07820)',
                      }}
                    />
                  </div>
                  <div className="flex justify-between font-dm-sans text-[0.65rem] text-renegade-muted">
                    <span><strong className="text-renegade-text">{p.yes}%</strong> YES</span>
                    <span>{p.votes} votes</span>
                  </div>
                </>
              ) : (
                <div className="font-dm-sans text-[0.7rem] text-renegade-muted">{p.votes}</div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
