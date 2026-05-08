import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: '$2.1', accent: 'M+', label: 'Total creator earnings across all chains' },
  { value: '15,', accent: '247', label: 'Active creators building on Renegade' },
  { value: '0', accent: '%', label: 'Platform fees — you keep everything' },
  { value: '98/', accent: '100', label: 'CertiK security audit score' },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export const StatsBar: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-10 py-16">
      <motion.div
        ref={ref}
        className="grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden"
        style={{ border: '1px solid rgba(17,17,16,0.08)' }}
        variants={container}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {stats.map((s, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 md:p-8 transition-colors hover:bg-renegade-alt cursor-default"
            style={{
              borderRight: i < 3 ? '1px solid rgba(17,17,16,0.08)' : 'none',
            }}
            variants={item}
          >
            <div className="font-fraunces font-bold text-2xl md:text-3xl tracking-tight text-renegade-text">
              {s.value}<span className="italic font-light text-renegade-accent">{s.accent}</span>
            </div>
            <div className="font-dm-sans text-[0.78rem] text-renegade-muted mt-1.5 leading-snug">{s.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
