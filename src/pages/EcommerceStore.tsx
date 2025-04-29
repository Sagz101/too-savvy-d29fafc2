
import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AnimatedGradient } from '@/components/ui/animated-gradient';
import { AnimatedText } from '@/components/ui/animated-text';
import { PhysicalProductStore } from '@/components/ecommerce/PhysicalProductStore';
import { NFTVerification } from '@/components/ecommerce/NFTVerification';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, Shield, Truck, Tags } from 'lucide-react';

const EcommerceStore = () => {
  const [activeTab, setActiveTab] = useState('store');

  return (
    <div className="min-h-screen bg-neura-dark text-white">
      <Header />
      <main>
        <section className="py-16 relative">
          <AnimatedGradient />
          
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <AnimatedText
                  text="Web3 Commerce"
                  type="gradient"
                  gradientFrom="from-neura-purple"
                  gradientTo="to-neura-cyan"
                  tag="span"
                />
              </h1>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Discover tokenized products with built-in digital ownership, authenticity verification, and blockchain-based tracking
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <Card className="bg-neura-dark/80 border border-neura-purple/30 shadow-lg shadow-neura-purple/10 overflow-hidden">
                <div className="border-b border-neura-purple/30 p-4">
                  <Tabs 
                    defaultValue="store" 
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="w-full"
                  >
                    <TabsList className="bg-neura-dark/50 grid grid-cols-3">
                      <TabsTrigger value="store" className="data-[state=active]:bg-neura-purple/20">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Store
                      </TabsTrigger>
                      <TabsTrigger value="verification" className="data-[state=active]:bg-neura-purple/20">
                        <Shield className="w-4 h-4 mr-2" />
                        NFT Verification
                      </TabsTrigger>
                      <TabsTrigger value="tracking" className="data-[state=active]:bg-neura-purple/20">
                        <Truck className="w-4 h-4 mr-2" />
                        Supply Chain
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
                
                <CardContent className="p-0">
                  <div className="p-6">
                    {activeTab === 'store' && (
                      <PhysicalProductStore />
                    )}
                    
                    {activeTab === 'verification' && (
                      <NFTVerification />
                    )}
                    
                    {activeTab === 'tracking' && (
                      <div className="text-center py-12">
                        <h2 className="text-xl font-semibold mb-4">Supply Chain Tracking</h2>
                        <p className="text-white/70 mb-8">
                          Track your product's journey from manufacturer to delivery using blockchain verification.
                          This feature is coming soon!
                        </p>
                        <div className="max-w-3xl mx-auto bg-neura-purple/10 rounded-lg p-6">
                          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex-1 text-center">
                              <div className="w-12 h-12 rounded-full bg-neura-purple/20 flex items-center justify-center mx-auto mb-2">
                                <Tags className="w-6 h-6 text-neura-cyan" />
                              </div>
                              <p className="font-medium">Manufacturing</p>
                              <p className="text-xs text-white/60">Verified on chain</p>
                            </div>
                            
                            <div className="hidden md:block w-12 h-0.5 bg-neura-purple/30"></div>
                            
                            <div className="flex-1 text-center">
                              <div className="w-12 h-12 rounded-full bg-neura-purple/20 flex items-center justify-center mx-auto mb-2">
                                <Shield className="w-6 h-6 text-neura-cyan" />
                              </div>
                              <p className="font-medium">Authenticity</p>
                              <p className="text-xs text-white/60">Verified on chain</p>
                            </div>
                            
                            <div className="hidden md:block w-12 h-0.5 bg-neura-purple/30"></div>
                            
                            <div className="flex-1 text-center">
                              <div className="w-12 h-12 rounded-full bg-neura-purple/20 flex items-center justify-center mx-auto mb-2">
                                <Truck className="w-6 h-6 text-neura-cyan" />
                              </div>
                              <p className="font-medium">Logistics</p>
                              <p className="text-xs text-white/60">In transit</p>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default EcommerceStore;
