
import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { DecentralizedFinanceHub } from '@/components/finance/DecentralizedFinanceHub';

const FinanceHub = () => {
  return (
    <div className="min-h-screen bg-neura-dark text-white">
      <Header />
      <div className="pt-20">
        <DecentralizedFinanceHub />
      </div>
      <Footer />
    </div>
  );
};

export default FinanceHub;
