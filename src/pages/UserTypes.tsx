import React from 'react';
import { CosmicPageLayout } from '@/components/layout/CosmicPageLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Palette, Gem, Building2, UsersRound } from 'lucide-react';

const userTypes = [
  { name: 'Creators', desc: 'Artists, musicians, filmmakers & writers. Mint your work, build audiences, and earn directly from fans with zero platform fees.', icon: Palette, cta: 'Start Creating', route: '/onboarding', gradient: 'from-purple-500 to-violet-600' },
  { name: 'Collectors', desc: 'Discover and collect unique digital assets. Build your on-chain collection with provenance tracking and dynamic royalties.', icon: Gem, cta: 'Start Collecting', route: '/video-marketplace', gradient: 'from-pink-500 to-rose-600' },
  { name: 'Brands', desc: 'Launch Web3 storefronts, create branded NFTs, and engage communities through token-gated experiences.', icon: Building2, cta: 'Brand Solutions', route: '/commerce-studio', gradient: 'from-cyan-500 to-blue-600' },
  { name: 'Communities', desc: 'Form DAOs, govern collectively, fund projects, and build transparent treasuries with on-chain voting.', icon: UsersRound, cta: 'Build Community', route: '/dao-governance', gradient: 'from-green-500 to-emerald-600' },
];

const UserTypes = () => (
  <CosmicPageLayout>
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-space">Built for Everyone</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Whether you create, collect, build or govern — Renegade has a home for you.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {userTypes.map((u, i) => (
            <motion.div key={u.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="rounded-2xl p-8 flex flex-col gap-4"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)' }}>
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${u.gradient} flex items-center justify-center`}>
                <u.icon className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white">{u.name}</h3>
              <p className="text-gray-400 flex-1">{u.desc}</p>
              <Button className="w-fit rounded-xl text-white" style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)' }} asChild>
                <Link to={u.route}>{u.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </CosmicPageLayout>
);

export default UserTypes;
