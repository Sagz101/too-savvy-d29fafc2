import React from 'react';
import { CosmicPageLayout } from '@/components/layout/CosmicPageLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Users, Trophy, Calendar, MessageCircle, Star, Globe } from 'lucide-react';

const stats = [
  { label: 'Active Creators', value: '24K+', icon: Users },
  { label: 'Success Stories', value: '1,200+', icon: Trophy },
  { label: 'Monthly Events', value: '30+', icon: Calendar },
];

const stories = [
  { name: 'Maya Chen', role: 'Digital Artist', quote: 'Renegade helped me earn $48K from my first NFT collection with zero platform fees.', avatar: '🎨' },
  { name: 'DJ Cosmos', role: 'Music Producer', quote: 'Dynamic royalties changed everything. I earn passive income from every resale.', avatar: '🎵' },
  { name: 'NovaBrand Co.', role: 'Web3 Brand', quote: 'Our tokenized commerce store generated 3x more engagement than traditional e-commerce.', avatar: '🏪' },
];

const Community = () => (
  <CosmicPageLayout>
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-space">Creator Community</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Join thousands of creators, collectors, and builders shaping the future of Web3.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl p-6 text-center" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <s.icon className="mx-auto text-purple-400 mb-2" size={24} />
              <div className="text-3xl font-bold text-white">{s.value}</div>
              <div className="text-gray-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mb-8 text-center">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stories.map((s, i) => (
            <motion.div key={s.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-4xl mb-4">{s.avatar}</div>
              <p className="text-gray-300 text-sm italic mb-4">"{s.quote}"</p>
              <div className="text-white font-semibold">{s.name}</div>
              <div className="text-gray-400 text-xs">{s.role}</div>
            </motion.div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mb-8 text-center">Upcoming Events</h2>
        <div className="space-y-4 mb-12">
          {[
            { name: 'Creator Summit 2025', date: 'Mar 15, 2025', type: 'Virtual' },
            { name: 'NFT Art Workshop', date: 'Mar 22, 2025', type: 'Live Stream' },
            { name: 'DAO Town Hall', date: 'Apr 1, 2025', type: 'Governance' },
          ].map((e) => (
            <div key={e.name} className="flex items-center justify-between rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div>
                <div className="text-white font-semibold">{e.name}</div>
                <div className="text-gray-400 text-sm">{e.date}</div>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-300">{e.type}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="rounded-xl text-white" style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)' }} asChild>
            <Link to="/global-innovators">Join the Community</Link>
          </Button>
        </div>
      </div>
    </div>
  </CosmicPageLayout>
);

export default Community;
