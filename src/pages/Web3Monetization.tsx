
import React, { useState, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AnimatedGradient } from '@/components/ui/animated-gradient';
import { AnimatedText } from '@/components/ui/animated-text';
import { DynamicPricing } from '@/components/monetization/DynamicPricing';
import { DAOGovernance } from '@/components/monetization/DAOGovernance';
import { LoyaltyProgram } from '@/components/monetization/LoyaltyProgram';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, Award, Vote } from 'lucide-react';
import { useWallet } from '@/services/wallet';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';

const Web3Monetization = () => {
  const [activeTab, setActiveTab] = useState('pricing');
  const { wallet } = useWallet();

  return (
    <div className="min-h-screen bg-neura-dark text-white">
      <Header />
      <main>
        <section className="py-16 relative">
          <AnimatedGradient />
          
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center md:justify-between mb-12">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  <AnimatedText
                    text="Web3 Monetization"
                    type="gradient"
                    gradientFrom="from-neura-purple"
                    gradientTo="to-neura-cyan"
                    tag="span"
                  />
                </h1>
                <p className="text-white/70 text-lg max-w-2xl">
                  Advanced tokenomics, dynamic pricing, and community co-ownership
                </p>
              </div>
              <WalletConnectButton />
            </div>
            
            <div className="max-w-5xl mx-auto">
              <Card className="bg-neura-dark/80 border border-neura-purple/30 shadow-lg shadow-neura-purple/10 overflow-hidden">
                <div className="border-b border-neura-purple/30 p-4">
                  <Tabs 
                    defaultValue="pricing" 
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="w-full"
                  >
                    <TabsList className="bg-neura-dark/50 grid grid-cols-3">
                      <TabsTrigger value="pricing" className="data-[state=active]:bg-neura-purple/20">
                        <DollarSign className="w-4 h-4 mr-2" />
                        Dynamic Pricing
                      </TabsTrigger>
                      <TabsTrigger value="loyalty" className="data-[state=active]:bg-neura-purple/20">
                        <Award className="w-4 h-4 mr-2" />
                        Loyalty Program
                      </TabsTrigger>
                      <TabsTrigger value="governance" className="data-[state=active]:bg-neura-purple/20">
                        <Vote className="w-4 h-4 mr-2" />
                        DAO Governance
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
                
                <CardContent className="p-0">
                  <div className="p-6">
                    {activeTab === 'pricing' && (
                      <DynamicPricing />
                    )}
                    
                    {activeTab === 'loyalty' && (
                      <LoyaltyProgram />
                    )}
                    
                    {activeTab === 'governance' && (
                      <DAOGovernance />
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Web3Monetization;
