
import React from 'react';
import { Web3Glossary } from '@/components/ui/web3-glossary';
import { InteractiveTutorial } from '@/components/ui/interactive-tutorial';
import { ModernContainer } from '@/components/ui/modern-container';

const Learn = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black pt-20">
      <ModernContainer size="xl" className="py-12">
        <Web3Glossary />
      </ModernContainer>
    </div>
  );
};

export default Learn;
