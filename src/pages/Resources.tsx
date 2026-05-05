import React from 'react';
import { CosmicPageLayout } from '@/components/layout/CosmicPageLayout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, FileText, Code } from 'lucide-react';

const resources = [
  { name: 'Documentation', desc: 'Complete platform documentation covering all modules, APIs, and integrations.', icon: BookOpen, route: '/learn', cta: 'Read Docs' },
  { name: 'Tutorials', desc: 'Step-by-step guides for creating your first NFT, launching a store, and more.', icon: GraduationCap, route: '/learn', cta: 'Start Learning' },
  { name: 'Creator Guides', desc: 'Best practices for monetization, audience growth, and Web3 creator strategies.', icon: FileText, route: '/learn', cta: 'View Guides' },
  { name: 'API Docs', desc: 'Developer documentation for building on top of the Renegade platform.', icon: Code, route: '/whitepaper', cta: 'API Reference' },
];

const Resources = () => (
  <CosmicPageLayout>
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-space">Resources</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Everything you need to master the Renegade platform.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((r, i) => (
            <motion.div key={r.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="rounded-2xl p-8 flex flex-col gap-4 hover:scale-[1.02] transition-transform"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)' }}>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
                <r.icon className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white">{r.name}</h3>
              <p className="text-gray-400 flex-1">{r.desc}</p>
              <Button className="w-fit rounded-xl text-white" style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)' }} asChild>
                <Link to={r.route}>{r.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </CosmicPageLayout>
);

export default Resources;
