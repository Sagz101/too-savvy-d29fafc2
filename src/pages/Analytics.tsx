import React from 'react';
import { CosmicPageLayout } from '@/components/layout/CosmicPageLayout';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, DollarSign, Coins, Users, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const metrics = [
  { label: 'Total Creators', value: '24,892', change: '+12%', icon: Users },
  { label: 'Content Minted', value: '$4.2M', change: '+28%', icon: DollarSign },
  { label: 'Platform Views', value: '1.8M', change: '+34%', icon: Eye },
  { label: 'Token Volume', value: '$890K', change: '+18%', icon: Coins },
];

const sections = [
  { title: 'Platform Metrics', desc: 'Real-time platform performance data including user growth, content volume, and network activity.', icon: BarChart3, stats: [
    { label: 'DAU', value: '8,234' }, { label: 'MAU', value: '24,892' }, { label: 'Avg Session', value: '12m' },
  ]},
  { title: 'Creator Earnings', desc: 'Aggregate creator revenue across all modules — NFT sales, store revenue, tips & subscriptions.', icon: TrendingUp, stats: [
    { label: 'Total Earned', value: '$4.2M' }, { label: 'Avg / Creator', value: '$168' }, { label: 'Top Earner', value: '$48K' },
  ]},
  { title: 'Token Activity', desc: 'On-chain token activity including transfers, staking, governance participation and DEX volume.', icon: Coins, stats: [
    { label: 'Transactions', value: '142K' }, { label: 'Staked', value: '18.7M' }, { label: 'Holders', value: '12,400' },
  ]},
];

const Analytics = () => (
  <CosmicPageLayout>
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-space">Analytics</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Real-time platform metrics, creator earnings, and token activity.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-2xl p-5 text-center" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <m.icon className="mx-auto text-purple-400 mb-2" size={20} />
              <div className="text-2xl font-bold text-white">{m.value}</div>
              <div className="text-gray-400 text-xs">{m.label}</div>
              <div className="text-green-400 text-xs mt-1">{m.change}</div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          {sections.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="flex items-center gap-3 mb-2">
                <s.icon className="text-purple-400" size={20} />
                <h2 className="text-xl font-bold text-white">{s.title}</h2>
              </div>
              <p className="text-gray-400 text-sm mb-4">{s.desc}</p>
              <div className="grid grid-cols-3 gap-4">
                {s.stats.map((stat) => (
                  <div key={stat.label} className="rounded-xl p-4 text-center" style={{ background: 'rgba(255,255,255,0.03)' }}>
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-gray-400 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="rounded-xl text-white" style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)' }} asChild>
            <Link to="/studio">Go to Creator Dashboard</Link>
          </Button>
        </div>
      </div>
    </div>
  </CosmicPageLayout>
);

export default Analytics;
