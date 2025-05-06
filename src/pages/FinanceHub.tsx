import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { DecentralizedFinanceHub } from '@/components/finance/DecentralizedFinanceHub';
import { CreditScoring } from '@/components/finance/CreditScoring';
import { ServiceMarketplace } from '@/components/finance/ServiceMarketplace';
import { ReputationGraph } from '@/components/finance/ReputationGraph';
import { OwnershipEnhancements } from '@/components/finance/OwnershipEnhancements';
import { MonetizationEnhancements } from '@/components/finance/MonetizationEnhancements';
import { AICollaborationStudio } from '@/components/finance/AICollaborationStudio';
import { UXAdoptionFeatures } from '@/components/finance/UXAdoptionFeatures';
import { useWallet } from '@/services/wallet';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const FinanceHub = () => {
  const { 
    wallet, 
    purchaseService, 
    toggleGaslessTransactions, 
    upgradeWalletSovereignty,
    createAICollaboration 
  } = useWallet();
  
  const [activeTab, setActiveTab] = useState("finance-hub");
  
  return (
    <div className="min-h-screen bg-neura-dark text-white">
      <Header />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">
              <span className="bg-gradient-to-r from-neura-purple to-neura-cyan bg-clip-text text-transparent">
                Neura Financial Ecosystem
              </span>
            </h1>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Empowering creators with advanced financial tools, from personal banking to reputation-based credit
            </p>
          </div>
          
          <Tabs defaultValue="finance-hub" className="mb-8" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 bg-neura-dark/50 p-1 border border-neura-purple/20 rounded-lg overflow-x-auto">
              <TabsTrigger value="finance-hub" className="data-[state=active]:bg-neura-purple/20">
                Finance Hub
              </TabsTrigger>
              <TabsTrigger value="credit-scoring" className="data-[state=active]:bg-neura-purple/20">
                Credit Scoring
              </TabsTrigger>
              <TabsTrigger value="service-marketplace" className="data-[state=active]:bg-neura-purple/20">
                Service NFTs
              </TabsTrigger>
              <TabsTrigger value="reputation-graph" className="data-[state=active]:bg-neura-purple/20">
                Reputation
              </TabsTrigger>
              <TabsTrigger value="ownership" className="data-[state=active]:bg-neura-purple/20">
                Ownership
              </TabsTrigger>
              <TabsTrigger value="monetization" className="data-[state=active]:bg-neura-purple/20">
                Monetization
              </TabsTrigger>
              <TabsTrigger value="ai-collaboration" className="data-[state=active]:bg-neura-purple/20">
                AI Studio
              </TabsTrigger>
              <TabsTrigger value="ux-adoption" className="data-[state=active]:bg-neura-purple/20">
                UX Features
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="finance-hub">
              <DecentralizedFinanceHub />
            </TabsContent>
            
            <TabsContent value="credit-scoring">
              {wallet.creditScore && (
                <CreditScoring 
                  score={wallet.creditScore.score}
                  repaymentHistory={wallet.creditScore.repaymentHistory}
                  communityTrust={wallet.creditScore.communityTrust}
                  walletActivity={wallet.creditScore.walletActivity}
                  maxCredit={wallet.creditScore.maxCredit}
                  approvedProtocols={wallet.creditScore.approvedProtocols}
                />
              )}
            </TabsContent>
            
            <TabsContent value="service-marketplace">
              <ServiceMarketplace 
                services={wallet.serviceItems}
                onPurchase={purchaseService}
              />
            </TabsContent>
            
            <TabsContent value="reputation-graph">
              {wallet.reputationStats && (
                <ReputationGraph stats={wallet.reputationStats} />
              )}
            </TabsContent>
            
            <TabsContent value="ownership">
              <OwnershipEnhancements 
                provenanceGraph={wallet.provenanceGraph}
                crossPlatformIdentities={wallet.crossPlatformIdentities}
              />
            </TabsContent>
            
            <TabsContent value="monetization">
              <MonetizationEnhancements
                fanParticipationTokens={wallet.fanParticipationTokens}
                creatorFanBonds={wallet.creatorFanBonds}
              />
            </TabsContent>
            
            <TabsContent value="ai-collaboration">
              <AICollaborationStudio
                aiCollaborations={wallet.aiCollaborations}
                onCreateCollaboration={createAICollaboration}
              />
            </TabsContent>
            
            <TabsContent value="ux-adoption">
              <UXAdoptionFeatures
                gaslessTransactionsEnabled={wallet.gaslessTransactionsEnabled}
                sovereigntyLevel={wallet.walletSovereigntyLevel}
                onToggleGasless={(enabled) => toggleGaslessTransactions(enabled)}
                onUpgradeSovereignty={(level) => upgradeWalletSovereignty(level)}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FinanceHub;
