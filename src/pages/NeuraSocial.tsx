
import React from 'react';
import { Header } from '@/components/layout/Header';
import { NeuraSocialHub } from '@/components/social/NeuraSocialHub';

const NeuraSocial = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <NeuraSocialHub />
    </div>
  );
};

export default NeuraSocial;
