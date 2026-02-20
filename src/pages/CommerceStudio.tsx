import React from 'react';
import { CosmicPageLayout } from '@/components/layout/CosmicPageLayout';
import { StoreBuilder } from '@/components/commerce/StoreBuilder';

const CommerceStudio = () => {
  return (
    <CosmicPageLayout>
      <StoreBuilder />
    </CosmicPageLayout>
  );
};

export default CommerceStudio;
