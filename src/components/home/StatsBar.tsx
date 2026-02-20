import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StatItemProps {
  value: string;
  label: string;
  index: number;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center justify-center text-center px-4 py-6 relative"
    >
      <div
        className="text-4xl md:text-5xl font-bold text-white mb-2 font-space"
        style={{ textShadow: '0 0 30px rgba(192, 132, 252, 0.3)' }}
      >
        {value}
      </div>
      <div className="text-sm text-gray-400 font-medium">{label}</div>
      
      {/* Separator line between items (hidden for last) */}
      {index < 4 && (
        <div className="absolute right-0 top-1/4 h-1/2 w-px bg-white/10 hidden md:block" />
      )}
    </motion.div>
  );
};

export const StatsBar: React.FC = () => {
  const stats = [
    { value: '$21,000+', label: 'Total Volume' },
    { value: '$847', label: 'Avg Creator Earnings' },
    { value: '$2.1M+', label: 'Total Creator Earnings' },
    { value: '15,247', label: 'Active Creators' },
    { value: '15 plost', label: 'Active Creators' },
  ];

  return (
    <section
      className="relative border-y border-white/5 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0f0025, #0d001e, #0a0018)' }}
    >
      <div className="absolute inset-0 opacity-20"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, #7c3aed20, transparent 70%)' }} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-white/5">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
