import React from 'react';
import { CosmicPageLayout } from '@/components/layout/CosmicPageLayout';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => (
  <CosmicPageLayout>
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 font-space">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-gray-400">Last updated: March 6, 2025</p>

            <section className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h2 className="text-xl font-bold text-white mb-3">1. Data We Collect</h2>
              <p className="text-gray-400 text-sm leading-relaxed">Renegade collects minimal data. We store wallet addresses for authentication, on-chain transaction data for display purposes, and optional profile information you choose to provide. We do not collect emails unless explicitly provided for notifications.</p>
            </section>

            <section className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h2 className="text-xl font-bold text-white mb-3">2. How We Use Data</h2>
              <p className="text-gray-400 text-sm leading-relaxed">Data is used to provide platform functionality, display user profiles, process transactions, and improve the service. We do not sell user data to third parties. Analytics are aggregated and anonymized.</p>
            </section>

            <section className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h2 className="text-xl font-bold text-white mb-3">3. Web3 & Blockchain Data</h2>
              <p className="text-gray-400 text-sm leading-relaxed">All blockchain transactions are public by nature. Wallet addresses, transaction history, and NFT ownership are visible on-chain. Renegade does not control or have the ability to delete on-chain data.</p>
            </section>

            <section className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h2 className="text-xl font-bold text-white mb-3">4. Cookies & Tracking</h2>
              <p className="text-gray-400 text-sm leading-relaxed">We use essential cookies for session management and wallet connections. No third-party advertising trackers are used. You can disable cookies in your browser settings.</p>
            </section>

            <section className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h2 className="text-xl font-bold text-white mb-3">5. Your Rights</h2>
              <p className="text-gray-400 text-sm leading-relaxed">You may request deletion of off-chain profile data at any time. You can disconnect your wallet to stop authentication. On-chain data remains on the blockchain permanently as per the nature of decentralized systems.</p>
            </section>

            <section className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h2 className="text-xl font-bold text-white mb-3">6. Contact</h2>
              <p className="text-gray-400 text-sm leading-relaxed">For privacy inquiries, reach the Renegade DAO governance team through the community channels or submit a governance proposal for privacy-related changes.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  </CosmicPageLayout>
);

export default PrivacyPolicy;
