import React from 'react';
import { CosmicPageLayout } from '@/components/layout/CosmicPageLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Image, DollarSign, ShoppingBag, Users, Vote, Wallet } from 'lucide-react';

const features = [
  { name: 'Media NFTs', desc: 'Mint video, music, art & written content as on-chain assets with full provenance tracking.', icon: Image, route: '/video-nfts' },
  { name: 'Creator Monetization', desc: 'Dynamic royalties, tipping, subscriptions & token-gated content. Zero platform fees.', icon: DollarSign, route: '/finance-hub' },
  { name: 'Web3 Commerce', desc: 'Decentralized storefronts with crypto payments, NFT-backed products & physical goods.', icon: ShoppingBag, route: '/commerce-studio' },
  { name: 'Social Networking', desc: 'Sovereign social profiles, cross-platform distribution & tokenized engagement rewards.', icon: Users, route: '/neura-social' },
  { name: 'DAO Governance', desc: 'Community-driven platform governance with proposals, voting & treasury transparency.', icon: Vote, route: '/dao-governance' },
  { name: 'Wallet Integration', desc: 'Multi-chain wallet support with ENS resolution, SIWE auth & gas fee tracking.', icon: Wallet, route: '/finance-hub' },
];

const Features = () => (
  <CosmicPageLayout>
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-space">Platform Features</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Everything you need to create, monetize and govern in Web3.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
              className="rounded-2xl p-6 flex flex-col gap-4 group hover:scale-[1.02] transition-transform"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)' }}>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <f.icon className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">{f.name}</h3>
              <p className="text-gray-400 text-sm flex-1">{f.desc}</p>
              <Button size="sm" variant="outline" className="w-fit rounded-xl border-white/20 text-white hover:bg-white/10" asChild>
                <Link to={f.route}>Explore →</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </CosmicPageLayout>
);

export default Features;
