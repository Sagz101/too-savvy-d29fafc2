
import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Web3MessagingHub } from '@/components/messaging/Web3MessagingHub';
import { AnimatedGradient } from '@/components/ui/animated-gradient';

const Messaging = () => {
  return (
    <div className="min-h-screen bg-neura-dark text-white">
      <Header />
      <main>
        <section className="py-16 relative">
          <AnimatedGradient />
          
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-neura-purple to-neura-cyan bg-clip-text text-transparent">
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
      </main>
      <Footer />
    </div>
  );
};

export default Messaging;
