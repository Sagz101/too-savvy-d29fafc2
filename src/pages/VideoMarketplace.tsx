
import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AnimatedGradient } from '@/components/ui/animated-gradient';
import { AnimatedText } from '@/components/ui/animated-text';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { EnhancedVideoUploader } from '@/components/video/EnhancedVideoUploader';
import { Button } from '@/components/ui/button';
import { Film, Upload, Video, ShoppingCart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useWallet } from '@/services/wallet';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';

const VideoMarketplace = () => {
  const [activeTab, setActiveTab] = useState('upload');
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
                    text="Video Marketplace"
                    type="gradient"
                    gradientFrom="from-neura-purple"
                    gradientTo="to-neura-cyan"
                    tag="span"
                  />
                </h1>
                <p className="text-white/70 text-lg max-w-2xl">
                  Create, share, and monetize videos as NFTs on the decentralized web
                </p>
              </div>
              <WalletConnectButton />
            </div>
            
            <div className="max-w-5xl mx-auto">
              <Card className="bg-neura-dark/80 border border-neura-purple/30 shadow-lg shadow-neura-purple/10 overflow-hidden">
                <div className="border-b border-neura-purple/30 p-4">
                  <Tabs 
                    defaultValue="upload" 
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="w-full"
                  >
                    <TabsList className="bg-neura-dark/50 grid grid-cols-3">
                      <TabsTrigger value="upload" className="data-[state=active]:bg-neura-purple/20">
                        <Upload className="w-4 h-4 mr-2" />
                        Create NFT
                      </TabsTrigger>
                      <TabsTrigger value="browse" className="data-[state=active]:bg-neura-purple/20">
                        <Film className="w-4 h-4 mr-2" />
                        Browse Videos
                      </TabsTrigger>
                      <TabsTrigger value="collection" className="data-[state=active]:bg-neura-purple/20">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        My Collection
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
                
                <CardContent className="p-0">
                  <div className="p-6">
                    {activeTab === 'upload' && (
                      <EnhancedVideoUploader />
                    )}
                    
                    {activeTab === 'browse' && (
                      <div className="text-center py-12">
                        <h2 className="text-xl font-semibold mb-4">Video Marketplace</h2>
                        <p className="text-white/70 mb-8">
                          Browse and collect video NFTs from creators around the world.
                          This feature is coming soon!
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {Array.from({length: 6}).map((_, i) => (
                            <Card key={i} className="bg-neura-dark/50 border-neura-purple/20">
                              <div className="aspect-video bg-gradient-to-br from-neura-purple/20 to-neura-cyan/10 flex items-center justify-center">
                                <Video className="w-12 h-12 text-white/20" />
                              </div>
                              <CardContent className="p-4">
                                <h3 className="font-medium">Coming Soon</h3>
                                <p className="text-xs text-white/60 mt-1">Video NFT #{i+1}</p>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 'collection' && (
                      <div className="text-center py-12">
                        {wallet.isConnected ? (
                          <div>
                            <h2 className="text-xl font-semibold mb-4">My NFT Collection</h2>
                            <p className="text-white/70 mb-8">
                              You don't own any video NFTs yet. Create one or browse the marketplace!
                            </p>
                            <Button 
                              className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
                              onClick={() => setActiveTab('upload')}
                            >
                              Create Your First NFT
                            </Button>
                          </div>
                        ) : (
                          <div>
                            <h2 className="text-xl font-semibold mb-4">Connect Your Wallet</h2>
                            <p className="text-white/70 mb-8">
                              Connect your wallet to view your NFT collection
                            </p>
                            <WalletConnectButton />
                          </div>
                        )}
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

export default VideoMarketplace;
