
import React from 'react';
import { TrustedByCreators } from '@/components/ui/trusted-by-creators';
import { PlatformOverview } from '@/components/sections/PlatformOverview';
import { ModernHeading, ModernText } from '@/components/ui/modern-typography';
import { ModernContainer } from '@/components/ui/modern-container';
import { ModernButton } from '@/components/ui/modern-button';
import { Book, FileText, Coins } from 'lucide-react';
import { Link } from 'react-router-dom';

export const LearnPage: React.FC = () => {
  return (
    <div className="space-y-0 pt-16">
      <section className="py-16 bg-gradient-to-br from-yellow-950/20 via-gray-950 to-orange-950/20">
        <ModernContainer size="xl">
          <div className="text-center mb-12">
            <ModernHeading level={1} className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400">
              Learn & Explore
            </ModernHeading>
            <ModernText variant="lead" className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Dive deep into Web3 concepts, platform documentation, and tokenomics. 
              Everything you need to understand and leverage T00 Savvy.
            </ModernText>
            
            <div className="flex flex-wrap justify-center gap-4">
              <ModernButton variant="outline" size="lg" asChild>
                <Link to="/whitepaper" className="flex items-center gap-2">
                  <FileText size={20} />
                  Whitepaper
                </Link>
              </ModernButton>
              <ModernButton variant="outline" size="lg" asChild>
                <Link to="/video-integration" className="flex items-center gap-2">
                  <Book size={20} />
                  Documentation
                </Link>
              </ModernButton>
              <ModernButton variant="outline" size="lg" asChild>
                <Link to="/finance-hub" className="flex items-center gap-2">
                  <Coins size={20} />
                  Tokenomics
                </Link>
              </ModernButton>
            </div>
          </div>
        </ModernContainer>
      </section>
      <TrustedByCreators />
      <PlatformOverview />
    </div>
  );
};
