import React from 'react';
import { CosmicPageLayout } from '@/components/layout/CosmicPageLayout';
import { motion } from 'framer-motion';

const TermsOfService = () => (
  <CosmicPageLayout>
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 font-space">Terms of Service</h1>
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-gray-400">Last updated: March 6, 2025</p>

            <section className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
              <p className="text-gray-400 text-sm leading-relaxed">By accessing or using the Diminga platform ("Service"), you agree to be bound by these Terms of Service. If you do not agree, you may not use the Service. The Service is operated by Diminga DAO and its contributors.</p>
            </section>

            <section className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h2 className="text-xl font-bold text-white mb-3">2. Platform Usage</h2>
              <p className="text-gray-400 text-sm leading-relaxed">Diminga provides Web3 creator tools including content minting, e-commerce, social networking, and DAO governance. Users are responsible for their wallet security, private keys, and all transactions conducted through the platform. All blockchain transactions are irreversible.</p>
            </section>

            <section className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h2 className="text-xl font-bold text-white mb-3">3. Creator Rights & Ownership</h2>
              <p className="text-gray-400 text-sm leading-relaxed">Creators retain full ownership of their content. By minting on Diminga, you grant the platform a non-exclusive license to display your content. NFT ownership transfers follow smart contract rules. Diminga charges zero platform fees on creator transactions.</p>
            </section>

            <section className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h2 className="text-xl font-bold text-white mb-3">4. DAO Governance</h2>
              <p className="text-gray-400 text-sm leading-relaxed">Platform governance is conducted through the Diminga DAO. Token holders may submit proposals, vote on changes, and participate in treasury management. All governance actions are recorded on-chain for transparency.</p>
            </section>

            <section className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h2 className="text-xl font-bold text-white mb-3">5. Prohibited Conduct</h2>
              <p className="text-gray-400 text-sm leading-relaxed">Users may not use the platform for illegal activity, intellectual property infringement, market manipulation, harassment, or any activity that violates applicable laws. Diminga reserves the right to restrict access for violations.</p>
            </section>

            <section className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h2 className="text-xl font-bold text-white mb-3">6. Limitation of Liability</h2>
              <p className="text-gray-400 text-sm leading-relaxed">The Service is provided "as is" without warranties. Diminga is not liable for losses resulting from blockchain transactions, smart contract failures, wallet compromises, or market volatility. Users interact with the blockchain at their own risk.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  </CosmicPageLayout>
);

export default TermsOfService;
