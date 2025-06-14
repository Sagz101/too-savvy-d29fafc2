
import React from 'react';
import { Header } from '@/components/layout/Header';
import { StoreBuilder } from '@/components/commerce/StoreBuilder';

const CommerceStudio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <StoreBuilder />
    </div>
  );
};

export default CommerceStudio;
