
import React from 'react';
import { CosmicPageLayout } from '@/components/layout/CosmicPageLayout';
import { Web3MessagingHub } from '@/components/messaging/Web3MessagingHub';

const Messaging = () => {
  return (
    <CosmicPageLayout>
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Web3 Messaging
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Experience the future of communication with decentralized, encrypted messaging, voice calls, and video conferences powered by blockchain technology.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <Web3MessagingHub />
          </div>
        </div>
      </section>
    </CosmicPageLayout>
  );
};

export default Messaging;
