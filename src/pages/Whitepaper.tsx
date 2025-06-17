
import React from 'react';
import { Header } from '@/components/layout/Header';
import { Whitepaper as WhitepaperComponent } from '@/components/whitepaper/Whitepaper';
import { Footer } from '@/components/layout/Footer';

const Whitepaper = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhitepaperComponent />
      <Footer />
    </div>
  );
};

export default Whitepaper;
