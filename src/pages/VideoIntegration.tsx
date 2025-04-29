
import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AnimatedGradient } from '@/components/ui/animated-gradient';
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
    <div className="min-h-screen bg-neura-dark text-white">
      <Header />
      <main>
        <section className="py-16 relative">
          <AnimatedGradient />
          
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <AnimatedText
                  text="Video Integration"
                  type="gradient"
                  gradientFrom="from-neura-purple"
                  gradientTo="to-neura-cyan"
                  tag="span"
                />
              </h1>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Leverage decentralized video technologies for streaming, NFT minting, AR visualization, and community engagement
              </p>
              
              <div className="mt-8 flex justify-center gap-4">
                <Link to="/video-studio">
                  <Button variant="outline" className="border-neura-purple/30 text-white hover:bg-neura-purple/10">
                    <Film className="w-4 h-4 mr-2" /> Video Studio
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="max-w-5xl mx-auto mb-12">
              <Tabs 
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="bg-neura-dark/50 grid grid-cols-4 mb-8">
                  <TabsTrigger value="livepeer" className="data-[state=active]:bg-neura-purple/20">
                    Livepeer Streaming
                  </TabsTrigger>
                  <TabsTrigger value="nft" className="data-[state=active]:bg-neura-purple/20">
                    Video NFTs
                  </TabsTrigger>
                  <TabsTrigger value="ar" className="data-[state=active]:bg-neura-purple/20">
                    AR Products
                  </TabsTrigger>
                  <TabsTrigger value="reviews" className="data-[state=active]:bg-neura-purple/20">
                    Video Reviews
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="livepeer">
                  <LivepeerSection />
                </TabsContent>
                
                <TabsContent value="nft">
                  <VideoNftSection />
                </TabsContent>
                
                <TabsContent value="ar">
                  <ArProductSection />
                </TabsContent>
                
                <TabsContent value="reviews">
                  <VideoReviewsSection />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VideoIntegration;
