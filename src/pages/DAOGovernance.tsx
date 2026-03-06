import React from 'react';
import { CosmicPageLayout } from '@/components/layout/CosmicPageLayout';
import { motion } from 'framer-motion';
import { Vote, FileText, PiggyBank, Shield, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const sections = [
  { title: 'Active Proposals', icon: FileText, desc: 'View and submit governance proposals that shape the future of Diminga.', items: [
    { name: 'DIP-42: Reduce Creator Fee to 0%', status: 'Voting', votes: '12.4K' },
    { name: 'DIP-41: Cross-chain Bridge Integration', status: 'Passed', votes: '8.7K' },
    { name: 'DIP-40: Community Grant Program', status: 'Discussion', votes: '3.2K' },
  ]},
  { title: 'Voting Power', icon: Vote, desc: 'Your governance tokens determine your voting weight. Stake to earn more.', items: [
    { name: 'Total Supply', status: '100M DIMG', votes: '' },
    { name: 'Circulating', status: '34.2M DIMG', votes: '' },
    { name: 'Staked', status: '18.7M DIMG', votes: '' },
  ]},
  { title: 'Treasury', icon: PiggyBank, desc: 'Full transparency into DAO-managed funds and allocations.', items: [
    { name: 'Treasury Balance', status: '$4.2M', votes: '' },
    { name: 'Monthly Grants', status: '$120K', votes: '' },
    { name: 'Development Fund', status: '$890K', votes: '' },
  ]},
];

const DAOGovernance = () => (
  <CosmicPageLayout>
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-space">DAO Governance</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Diminga is community-governed. Propose, vote, and shape the platform's future.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            { label: 'Total Proposals', value: '42', icon: FileText },
            { label: 'Active Voters', value: '8,234', icon: Users },
            { label: 'Participation Rate', value: '67%', icon: TrendingUp },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl p-6 text-center" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <s.icon className="mx-auto text-purple-400 mb-2" size={24} />
              <div className="text-3xl font-bold text-white">{s.value}</div>
              <div className="text-gray-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          {sections.map((section, i) => (
            <motion.div key={section.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="flex items-center gap-3 mb-2">
                <section.icon className="text-purple-400" size={20} />
                <h2 className="text-xl font-bold text-white">{section.title}</h2>
              </div>
              <p className="text-gray-400 text-sm mb-4">{section.desc}</p>
              <div className="space-y-3">
                {section.items.map((item) => (
                  <div key={item.name} className="flex items-center justify-between py-3 px-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)' }}>
                    <span className="text-white text-sm">{item.name}</span>
                    <div className="flex items-center gap-3">
                      {item.votes && <span className="text-gray-400 text-xs">{item.votes} votes</span>}
                      <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-300">{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="rounded-xl text-white" style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)' }} asChild>
            <Link to="/finance-hub">Connect Wallet to Vote</Link>
          </Button>
        </div>
      </div>
    </div>
  </CosmicPageLayout>
);

export default DAOGovernance;
