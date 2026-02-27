
import React, { useState } from 'react';
import { CosmicPageLayout } from '@/components/layout/CosmicPageLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { EnhancedVideoUploader } from '@/components/video/EnhancedVideoUploader';
import { PodcastUploader } from '@/components/audio/PodcastUploader';
import { MusicCreator } from '@/components/audio/MusicCreator';
import { Button } from '@/components/ui/button';
import { Film, Upload, Video, ShoppingCart, Music, Podcast } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useWallet } from '@/services/wallet';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';

const VideoMarketplace = () => {
  const [activeTab, setActiveTab] = useState('upload');
  const [contentType, setContentType] = useState<'video' | 'podcast' | 'music'>('video');
  const { wallet } = useWallet();

  return (
    <CosmicPageLayout>
      <section className="py-16 pt-24 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:justify-between mb-12">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Creator Marketplace
              </h1>
              <p className="text-white/60 text-lg max-w-2xl">
                Create, share, and monetize videos, podcasts, and music as NFTs on the decentralized web
              </p>
            </div>
            <WalletConnectButton />
          </div>
          
          <div className="max-w-5xl mx-auto">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden">
              <div className="border-b border-white/10 p-4">
                <Tabs defaultValue="upload" value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="bg-white/5 grid grid-cols-3">
                    <TabsTrigger value="upload" className="data-[state=active]:bg-purple-600/20"><Upload className="w-4 h-4 mr-2" />Create NFT</TabsTrigger>
                    <TabsTrigger value="browse" className="data-[state=active]:bg-purple-600/20"><Film className="w-4 h-4 mr-2" />Browse Content</TabsTrigger>
                    <TabsTrigger value="collection" className="data-[state=active]:bg-purple-600/20"><ShoppingCart className="w-4 h-4 mr-2" />My Collection</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              
              <CardContent className="p-6">
                {activeTab === 'upload' && (
                  <>
                    <div className="mb-6">
                      <div className="bg-white/5 rounded-lg p-2 flex justify-center">
                        <div className="flex space-x-2">
                          {([{ type: 'video' as const, icon: Video }, { type: 'podcast' as const, icon: Podcast }, { type: 'music' as const, icon: Music }]).map(({ type, icon: Icon }) => (
                            <Button key={type} variant={contentType === type ? 'default' : 'ghost'} className={contentType === type ? 'bg-purple-600/30' : 'text-white/70'} onClick={() => setContentType(type)}>
                              <Icon className="w-4 h-4 mr-2" />{type.charAt(0).toUpperCase() + type.slice(1)}
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                    {contentType === 'video' && <EnhancedVideoUploader />}
                    {contentType === 'podcast' && <PodcastUploader />}
                    {contentType === 'music' && <MusicCreator />}
                  </>
                )}
                
                {activeTab === 'browse' && (
                  <div className="text-center py-12">
                    <h2 className="text-xl font-semibold mb-4 text-white">Content Marketplace</h2>
                    <p className="text-white/60 mb-8">Browse and collect NFTs from creators around the world.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {Array.from({length: 6}).map((_, i) => (
                        <Card key={i} className="bg-white/5 border-white/10">
                          <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-cyan-400/10 flex items-center justify-center">
                            <Video className="w-12 h-12 text-white/20" />
                          </div>
                          <CardContent className="p-4">
                            <h3 className="font-medium text-white">Content NFT #{i+1}</h3>
                            <p className="text-xs text-white/50 mt-1">Creator Collection</p>
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
                        <h2 className="text-xl font-semibold mb-4 text-white">My NFT Collection</h2>
                        <p className="text-white/60 mb-8">You don't own any content NFTs yet. Create one or browse the marketplace!</p>
                        <Button className="bg-gradient-to-r from-purple-600 to-cyan-600" onClick={() => setActiveTab('upload')}>Create Your First NFT</Button>
                      </div>
                    ) : (
                      <div>
                        <h2 className="text-xl font-semibold mb-4 text-white">Connect Your Wallet</h2>
                        <p className="text-white/60 mb-8">Connect your wallet to view your NFT collection</p>
                        <WalletConnectButton />
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </CosmicPageLayout>
  );
};

export default VideoMarketplace;
