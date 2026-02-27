
import React from 'react';
import { CosmicPageLayout } from '@/components/layout/CosmicPageLayout';
import { Whitepaper as WhitepaperComponent } from '@/components/whitepaper/Whitepaper';

const Whitepaper = () => {
  return (
    <CosmicPageLayout>
      <div className="pt-20">
        <WhitepaperComponent />
      </div>
    </CosmicPageLayout>
  );
};

export default Whitepaper;
