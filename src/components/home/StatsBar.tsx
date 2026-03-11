import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: '$2.1M+', label: 'Total creator earnings, on-chain verifiable', sub: '↑ 18% this month' },
  { value: '15,247', label: 'Active creators across 5 continents', sub: '↑ 847 joined this week' },
  { value: '0%', label: 'Platform fees — ever', sub: 'You keep 100% of revenue' },
  { value: '98/100', label: 'CertiK security score', sub: 'Audit ID: TSV-2024-001 ✓' },
];

export const StatsBar: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div ref={ref} className="relative z-[2] grid grid-cols-2 md:grid-cols-4">
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="group relative px-6 md:px-8 py-8 md:py-10 overflow-hidden transition-colors hover:bg-[#0d0d14]"
          style={{ borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}
        >
          {/* Bottom glow on hover */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ background: 'linear-gradient(90deg, transparent, #6366f1, transparent)' }} />

          <div className="font-syne font-extrabold text-3xl md:text-4xl tracking-tight text-foreground mb-1">
            {stat.value}
          </div>
          <div className="text-xs md:text-sm text-muted-foreground leading-snug">{stat.label}</div>
          <div className="font-space-mono text-[0.65rem] text-emerald-400 mt-1.5">{stat.sub}</div>
        </motion.div>
      ))}
    </div>
  );
};
