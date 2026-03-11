import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const trustCards = [
  { value: '98/100', label: 'CertiK Security Score', sub: 'Audit ID: TSV-2024-001 ✓', subColor: 'text-emerald-400' },
  { value: '3/5', label: 'Multisig treasury', sub: 'Gnosis Safe · verified', subColor: 'text-muted-foreground/50' },
  { value: '127%', label: 'Carbon offset', sub: 'Net-positive operations', subColor: 'text-emerald-400' },
  { value: '99.9%', label: 'Platform uptime', sub: '30-day rolling average', subColor: 'text-muted-foreground/50' },
];

export const TrustSection: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section ref={ref} className="relative z-[2] py-16 md:py-24 px-4 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="font-space-mono text-[0.65rem] tracking-[0.15em] uppercase text-indigo-400 mb-4">
          // Security & Trust
        </div>
        <h2 className="font-syne font-extrabold text-3xl md:text-5xl tracking-tight text-foreground leading-[1.05] mb-12">
          Built on proof,<br /><em className="text-foreground/30 italic">not promises.</em>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {trustCards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group text-center p-6 rounded-2xl overflow-hidden transition-all hover:-translate-y-1"
            style={{
              background: '#0d0d14',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)')}
          >
            <div
              className="font-syne font-extrabold text-3xl md:text-4xl tracking-tight mb-2"
              style={{
                background: 'linear-gradient(135deg, #f1f5f9 0%, #6366f1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {card.value}
            </div>
            <div className="text-sm text-muted-foreground mb-1">{card.label}</div>
            <div className={`text-[0.7rem] ${card.subColor}`}>{card.sub}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
