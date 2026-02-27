
import React from 'react';
import { CosmicPageLayout } from '@/components/layout/CosmicPageLayout';
import { StreamingDashboard as StreamingDashboardComponent } from '@/components/streaming/StreamingDashboard';

const StreamingDashboard = () => {
  return (
    <CosmicPageLayout>
      <StreamingDashboardComponent />
    </CosmicPageLayout>
  );
};

export default StreamingDashboard;
