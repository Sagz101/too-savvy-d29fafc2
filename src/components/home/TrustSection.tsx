import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const trustItems = [
  { value: '98/', accent: '100', label: 'CertiK security audit score', verify: '✓ Verified · Audit #CTK-2024-DMG' },
  { value: '3/', accent: '5', label: 'Multi-signature treasury control', verify: '✓ Verified · Gnosis Safe' },
  { value: '127', accent: '%', label: 'Carbon offset via on-chain credits', verify: '✓ Verified · Toucan Protocol' },
  { value: '99.9', accent: '%', label: 'Platform uptime · enterprise SLA', verify: '✓ Verified · Status page' },
];

export const TrustSection: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
          Security & Trust
        </span>
        <h2 className="font-fraunces font-bold text-3xl md:text-4xl tracking-[-0.03em] text-diminga-text">
          Built for trust. <span className="italic font-light text-diminga-accent">Verified on-chain.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {trustItems.map((t, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl p-6 group transition-all hover:-translate-y-0.5"
            style={{ border: '1px solid rgba(17,17,16,0.06)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="w-10 h-10 rounded-lg bg-diminga-alt group-hover:bg-diminga-hover flex items-center justify-center text-lg mb-4 transition-colors">
              🛡️
            </div>
            <div className="font-fraunces font-bold text-2xl tracking-tight text-diminga-text mb-1">
              {t.value}<span className="italic font-light text-diminga-accent">{t.accent}</span>
            </div>
            <p className="font-dm-sans text-sm text-diminga-muted leading-relaxed mb-3">{t.label}</p>
            <div className="font-dm-sans text-[0.65rem] text-emerald-600 font-medium">{t.verify}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
