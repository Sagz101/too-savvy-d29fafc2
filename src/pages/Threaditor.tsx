
import React from 'react';
import { Header } from '@/components/layout/Header';
import { ThreaditorHub } from '@/components/threaditor/ThreaditorHub';

const Threaditor = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ThreaditorHub />
    </div>
  );
};

export default Threaditor;
