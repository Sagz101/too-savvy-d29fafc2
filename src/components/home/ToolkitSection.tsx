import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const tools = [
  { icon: '🛒', name: 'E-commerce Store', desc: 'Launch a fully branded storefront with crypto + fiat checkout and zero platform fees.', stat: '2,847 active stores' },
  { icon: '🎬', name: 'Video Studio', desc: 'Record, edit, and distribute video with token-gated access and on-chain royalties.', stat: '450K+ minutes streamed' },
  { icon: '📱', name: 'Social Hub', desc: 'Grow your audience with cross-platform posting, analytics, and decentralized identity.', stat: '13K+ monthly users' },
  { icon: '🎵', name: 'Music Creator', desc: 'Produce, tokenize, and sell music directly — keep 100% of streaming revenue.', stat: '1.2K tracks minted' },
  { icon: '🤖', name: 'AI Copilot', desc: 'AI-assisted content creation, SEO optimization, and audience insights.', stat: 'Beta · 94% satisfaction' },
  { icon: '🗳️', name: 'More Coming', desc: 'Vote on the next tool via DAO governance. Your $DMG tokens shape the roadmap.', stat: '47 active proposals', isDAO: true },
];

export const ToolkitSection: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
  }, []);

  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-10 py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <span className="font-dm-sans font-semibold text-[0.7rem] tracking-[0.06em] uppercase text-diminga-accent mb-3 block">
          Creator Toolkit
        </span>
        <h2 className="font-fraunces font-bold text-3xl md:text-4xl tracking-[-0.03em] text-diminga-text">
          Everything you need to build,{' '}
          <span className="text-diminga-text/20">monetize,</span>{' '}
          and <span className="italic font-light text-diminga-accent">own.</span>
        </h2>
      </motion.div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rounded-2xl overflow-hidden"
        style={{ border: '1px solid rgba(17,17,16,0.08)' }}
      >
        {tools.map((t, i) => (
          <motion.div
            key={t.name}
            className={`relative bg-white p-6 md:p-7 group transition-colors cursor-default overflow-hidden ${t.isDAO ? 'bg-diminga-alt' : ''}`}
            style={{
              borderRight: (i % 3 !== 2) ? '1px solid rgba(17,17,16,0.08)' : 'none',
              borderBottom: i < 3 ? '1px solid rgba(17,17,16,0.08)' : 'none',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            onMouseMove={handleMouseMove}
          >
            {/* Spotlight effect */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              style={{
                background: 'radial-gradient(300px circle at var(--mx, 50%) var(--my, 50%), rgba(232,101,10,0.04), transparent 60%)',
              }}
            />

            {/* Arrow */}
            <div className="absolute top-5 right-5 text-diminga-accent opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-sm">
              ↗
            </div>

            <div className="w-10 h-10 rounded-lg bg-diminga-alt group-hover:bg-diminga-hover flex items-center justify-center text-lg mb-4 transition-colors">
              {t.icon}
            </div>
            <h3 className="font-fraunces font-bold text-lg tracking-[-0.02em] text-diminga-text mb-2">{t.name}</h3>
            <p className="font-dm-sans text-sm text-diminga-muted leading-relaxed tracking-[-0.01em] mb-4">{t.desc}</p>
            <div className="font-dm-sans text-[0.7rem] text-diminga-accent font-semibold tracking-[-0.01em]">{t.stat}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
