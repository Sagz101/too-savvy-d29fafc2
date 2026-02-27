
import React, { useState } from 'react';
import { CosmicPageLayout } from '@/components/layout/CosmicPageLayout';
import { AnimatedText } from '@/components/ui/animated-text';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LivepeerSection } from '@/components/video/LivepeerSection';
import { VideoNftSection } from '@/components/video/VideoNftSection';
import { ArProductSection } from '@/components/video/ArProductSection';
import { VideoReviewsSection } from '@/components/video/VideoReviewsSection';
import { Button } from '@/components/ui/button';
import { Film } from 'lucide-react';
import { Link } from 'react-router-dom';

const VideoIntegration = () => {
  const [activeTab, setActiveTab] = useState('livepeer');

  return (
    <CosmicPageLayout>
      <section className="py-16 pt-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Video Integration
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Leverage decentralized video technologies for streaming, NFT minting, AR visualization, and community engagement
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link to="/video-studio">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Film className="w-4 h-4 mr-2" /> Video Studio
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="max-w-5xl mx-auto mb-12">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="bg-white/5 grid grid-cols-4 mb-8">
                <TabsTrigger value="livepeer" className="data-[state=active]:bg-purple-600/20">Livepeer Streaming</TabsTrigger>
                <TabsTrigger value="nft" className="data-[state=active]:bg-purple-600/20">Video NFTs</TabsTrigger>
                <TabsTrigger value="ar" className="data-[state=active]:bg-purple-600/20">AR Products</TabsTrigger>
                <TabsTrigger value="reviews" className="data-[state=active]:bg-purple-600/20">Video Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="livepeer"><LivepeerSection /></TabsContent>
              <TabsContent value="nft"><VideoNftSection /></TabsContent>
              <TabsContent value="ar"><ArProductSection /></TabsContent>
              <TabsContent value="reviews"><VideoReviewsSection /></TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </CosmicPageLayout>
  );
};

export default VideoIntegration;
