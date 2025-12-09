import React from 'react';
import { TrendingUp, Users, Zap, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StatItemProps {
  value: string;
  label: string;
  change?: string;
  trend?: 'up' | 'down';
  icon: React.ElementType;
  index: number;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, change, trend, icon: Icon, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        scale: 1.03, 
        y: -5,
        borderColor: 'rgba(99, 102, 241, 0.5)',
        transition: { duration: 0.2 }
      }}
      className="flex items-center gap-4 p-4 bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl transition-all duration-300"
    >
      <motion.div 
        className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center"
        whileHover={{ rotate: 5 }}
      >
        <Icon className="w-6 h-6 text-indigo-400" />
      </motion.div>
      <div className="flex-1">
        <motion.div 
          className="text-2xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.3 }}
        >
          {value}
        </motion.div>
        <div className="text-sm text-gray-400">{label}</div>
      </div>
      {change && (
        <motion.div 
          className={`flex items-center gap-1 text-sm font-medium ${
            trend === 'up' ? 'text-green-400' : 'text-red-400'
          }`}
          initial={{ opacity: 0, x: 10 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: index * 0.1 + 0.4 }}
        >
          <TrendingUp className={`w-4 h-4 ${trend === 'down' ? 'rotate-180' : ''}`} />
          {change}
        </motion.div>
      )}
    </motion.div>
  );
};

export const StatsBar: React.FC = () => {
  const stats = [
    {
      value: '12,847',
      label: 'Active Creators',
      change: '+15.2%',
      trend: 'up' as const,
      icon: Users,
    },
    {
      value: '421,071',
      label: 'NFTs Minted',
      change: '+8.7%',
      trend: 'up' as const,
      icon: Zap,
    },
    {
      value: '$2.1M',
      label: 'Creator Earnings',
      change: '+24.3%',
      trend: 'up' as const,
      icon: DollarSign,
    },
    {
      value: '15,247',
      label: 'Community Members',
      change: '+12.1%',
      trend: 'up' as const,
      icon: Users,
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-slate-950 via-gray-900 to-slate-950 border-y border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
