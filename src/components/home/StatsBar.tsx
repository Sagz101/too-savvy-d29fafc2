import React from 'react';
import { TrendingUp, Users, Zap, DollarSign } from 'lucide-react';

interface StatItemProps {
  value: string;
  label: string;
  change?: string;
  trend?: 'up' | 'down';
  icon: React.ElementType;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, change, trend, icon: Icon }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-indigo-500/30 transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-indigo-400" />
      </div>
      <div className="flex-1">
        <div className="text-2xl font-bold text-white">{value}</div>
        <div className="text-sm text-gray-400">{label}</div>
      </div>
      {change && (
        <div className={`flex items-center gap-1 text-sm font-medium ${
          trend === 'up' ? 'text-green-400' : 'text-red-400'
        }`}>
          <TrendingUp className={`w-4 h-4 ${trend === 'down' ? 'rotate-180' : ''}`} />
          {change}
        </div>
      )}
    </div>
  );
};

export const StatsBar: React.FC = () => {
  const stats: StatItemProps[] = [
    {
      value: '12,847',
      label: 'Active Creators',
      change: '+15.2%',
      trend: 'up',
      icon: Users,
    },
    {
      value: '421,071',
      label: 'NFTs Minted',
      change: '+8.7%',
      trend: 'up',
      icon: Zap,
    },
    {
      value: '$2.1M',
      label: 'Creator Earnings',
      change: '+24.3%',
      trend: 'up',
      icon: DollarSign,
    },
    {
      value: '15,247',
      label: 'Community Members',
      change: '+12.1%',
      trend: 'up',
      icon: Users,
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-slate-950 via-gray-900 to-slate-950 border-y border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};
