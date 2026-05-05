import React from 'react';
import { CosmicPageLayout } from '@/components/layout/CosmicPageLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Video, Users, Music, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const tools = [
  { name: 'Creator Studio Toolkit', desc: 'Your all-in-one creator dashboard with analytics, minting, and content management.', icon: FileText, route: '/creator-studio', color: 'from-purple-500 to-indigo-600' },
  { name: 'E-commerce Store', desc: 'Launch a decentralized storefront with zero platform fees. Sell physical & digital goods.', icon: ShoppingBag, route: '/commerce-studio', color: 'from-pink-500 to-rose-600' },
  { name: 'Video Studio', desc: 'Create, edit, mint & monetize video content on-chain with Livepeer integration.', icon: Video, route: '/video-studio', color: 'from-cyan-500 to-blue-600' },
  { name: 'Social Hub', desc: 'Build your sovereign brand with cross-platform distribution and tokenized engagement.', icon: Users, route: '/neura-social', color: 'from-green-500 to-emerald-600' },
  { name: 'Music Creator', desc: 'Tokenized music releases with dynamic royalties and decentralized distribution.', icon: Music, route: '/music-creation', color: 'from-orange-500 to-amber-600' },
];

const Platform = () => (
  <CosmicPageLayout>
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-space">The Renegade Platform</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">A modular Web3 ecosystem where creators own their content, commerce, community & crypto.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, i) => (
            <motion.div key={tool.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)' }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center`}>
                <tool.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">{tool.name}</h3>
              <p className="text-gray-400 text-sm flex-1">{tool.desc}</p>
              <Button size="sm" className="w-fit rounded-xl text-white" style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)' }} asChild>
                <Link to={tool.route}>Launch App</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </CosmicPageLayout>
);

export default Platform;
