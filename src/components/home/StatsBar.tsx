import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: '$2.1', accent: 'M+', label: 'Total creator earnings across all chains' },
  { value: '15,', accent: '247', label: 'Active creators building on Diminga' },
  { value: '0', accent: '%', label: 'Platform fees — you keep everything' },
  { value: '98/', accent: '100', label: 'CertiK security audit score' },
];

export const StatsBar: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="max-w-[1280px] mx-auto px-6 md:px-10 py-16">
      <div
        className="grid grid-cols-2 md:grid-cols-4 rounded-2xl overflow-hidden"
        style={{ border: '1px solid rgba(17,17,16,0.08)' }}
      >
        {stats.map((s, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 md:p-8 transition-colors hover:bg-diminga-alt cursor-default"
            style={{
              borderRight: i < 3 ? '1px solid rgba(17,17,16,0.08)' : 'none',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="font-fraunces font-bold text-2xl md:text-3xl tracking-tight text-diminga-text">
              {s.value}<span className="italic font-light text-diminga-accent">{s.accent}</span>
            </div>
            <div className="font-dm-sans text-[0.78rem] text-diminga-muted mt-1.5 leading-snug">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
