import React from 'react';
import { CosmicPageLayout } from '@/components/layout/CosmicPageLayout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const DAOGovernanceRules = () => (
  <CosmicPageLayout>
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 font-space">DAO Governance Rules</h1>
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-gray-400">The rules and framework governing the Diminga DAO.</p>

            {[
              { title: '1. Proposal Submission', content: 'Any token holder with a minimum of 1,000 DIMG tokens may submit a Diminga Improvement Proposal (DIP). Proposals must include a clear title, description, implementation plan, and budget if applicable. A 7-day discussion period precedes voting.' },
              { title: '2. Voting Mechanism', content: 'Voting is conducted on-chain using token-weighted governance. One DIMG token equals one vote. Voting periods last 5 days. A quorum of 10% of circulating supply is required for a vote to be valid. Simple majority (>50%) passes standard proposals.' },
              { title: '3. Treasury Management', content: 'The DAO treasury is managed through multi-signature wallets requiring 4-of-7 signers. All disbursements above $10,000 require a governance vote. Monthly treasury reports are published on-chain.' },
              { title: '4. Delegation', content: 'Token holders may delegate their voting power to trusted community members. Delegation is revocable at any time. Delegates must maintain transparency about their voting rationale.' },
              { title: '5. Emergency Actions', content: 'The core team retains emergency action rights for security vulnerabilities and critical bugs. Emergency actions must be ratified by governance within 14 days or they are automatically reversed.' },
              { title: '6. Constitutional Amendments', content: 'Changes to these governance rules require a supermajority of 67% and a quorum of 15% of circulating supply. Amendment proposals have a 14-day discussion period.' },
            ].map((s) => (
              <section key={s.title} className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <h2 className="text-xl font-bold text-white mb-3">{s.title}</h2>
                <p className="text-gray-400 text-sm leading-relaxed">{s.content}</p>
              </section>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="rounded-xl text-white" style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)' }} asChild>
              <Link to="/dao-governance">View Active Proposals</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  </CosmicPageLayout>
);

export default DAOGovernanceRules;
