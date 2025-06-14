
import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StreamingDashboard as StreamingDashboardComponent } from '@/components/streaming/StreamingDashboard';

const StreamingDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <StreamingDashboardComponent />
      <Footer />
    </div>
  );
};

export default StreamingDashboard;
