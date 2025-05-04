
import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { DecentralizedFinanceHub } from '@/components/finance/DecentralizedFinanceHub';

const FinanceHub = () => {
  return (
    <div className="min-h-screen bg-neura-dark text-white">
      <Header />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">
              <span className="bg-gradient-to-r from-neura-purple to-neura-cyan bg-clip-text text-transparent">
                Neura Financial Ecosystem
              </span>
            </h1>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Empowering creators with advanced financial tools, from personal banking to reputation-based credit
            </p>
          </div>
        </div>
        <DecentralizedFinanceHub />
      </div>
      <Footer />
    </div>
  );
};

export default FinanceHub;
