
import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { GlobalInnovatorsHub } from '@/components/innovators/GlobalInnovatorsHub';

const GlobalInnovators = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Global Innovators
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Collaborate on breakthrough projects with NFT-based ownership, decentralized funding, and DAO governance.
          </p>
        </div>
        <GlobalInnovatorsHub />
      </main>
      <Footer />
    </div>
  );
};

export default GlobalInnovators;
