
import React from 'react';
import { Web3Glossary } from '@/components/ui/web3-glossary';
import { ModernContainer } from '@/components/ui/modern-container';
import { CosmicPageLayout } from '@/components/layout/CosmicPageLayout';

const Learn = () => {
  return (
    <CosmicPageLayout>
      <div className="pt-8">
        <ModernContainer size="xl" className="py-12">
          <Web3Glossary />
        </ModernContainer>
      </div>
    </CosmicPageLayout>
  );
};

export default Learn;
