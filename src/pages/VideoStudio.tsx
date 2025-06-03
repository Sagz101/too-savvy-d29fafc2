
import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AnimatedGradient } from '@/components/ui/animated-gradient';
import { AnimatedText } from '@/components/ui/animated-text';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { VideoUploader } from '@/components/video/VideoUploader';
import { LiveStreamSetup } from '@/components/video/LiveStreamSetup';
import { ArVisualizer } from '@/components/video/ArVisualizer';
import { 
  Video, 
  Upload, 
  PlaySquare, 
  Sparkles, 
  Settings,
  BookOpen,
  Music,
  Podcast
} from 'lucide-react';

const VideoStudio = () => {
  const [activeTab, setActiveTab] = useState('upload');

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
                  text="Video Studio"
                  type="gradient"
                  gradientFrom="from-neura-purple"
                  gradientTo="to-neura-cyan"
                  tag="span"
                />
              </h1>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Create, stream, and visualize interactive video content with decentralized tools and Web3 monetization
              </p>
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
                        Video Upload
                      </TabsTrigger>
                      <TabsTrigger value="stream" className="data-[state=active]:bg-neura-purple/20">
                        <PlaySquare className="w-4 h-4 mr-2" />
                        Live Stream
                      </TabsTrigger>
                      <TabsTrigger value="ar" className="data-[state=active]:bg-neura-purple/20">
                        <Sparkles className="w-4 h-4 mr-2" />
                        AR Visualization
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
                
                <CardContent className="p-0">
                  <div className="p-6">
                    {activeTab === 'upload' && (
                      <div className="space-y-6">
                        <VideoUploader />
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-6 shadow-lg shadow-green-600/25">
                            <Upload className="w-4 h-4 mr-2" />
                            Create NFT
                          </Button>
                          <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 shadow-lg shadow-blue-600/25">
                            <Sparkles className="w-4 h-4 mr-2" />
                            Create AR
                          </Button>
                          <Button className="bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-semibold py-3 px-6 shadow-lg shadow-pink-600/25">
                            <Podcast className="w-4 h-4 mr-2" />
                            Create Podcast
                          </Button>
                          <Button className="bg-gradient-to-r from-orange-600 to-yellow-600 hover:from-orange-700 hover:to-yellow-700 text-white font-semibold py-3 px-6 shadow-lg shadow-orange-600/25">
                            <Music className="w-4 h-4 mr-2" />
                            Create Music
                          </Button>
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 'stream' && (
                      <div className="space-y-6">
                        <LiveStreamSetup />
                        <div className="flex justify-center">
                          <Button className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold py-3 px-8 shadow-lg shadow-red-600/25">
                            <PlaySquare className="w-4 h-4 mr-2" />
                            Schedule Stream
                          </Button>
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 'ar' && (
                      <ArVisualizer />
                    )}
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="bg-neura-dark/60 border border-neura-purple/30 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-neura-purple/10 rounded-full">
                        <BookOpen className="w-5 h-5 text-neura-cyan" />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold mb-2">Resource Hub</h2>
                        <p className="text-white/70 text-sm">Learn best practices for creating Web3 video content</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="p-3 bg-neura-dark/40 rounded-lg border border-neura-purple/20 hover:border-neura-purple/40 cursor-pointer transition-colors">
                        <h3 className="text-sm font-medium text-white">Getting Started with Video NFTs</h3>
                        <p className="text-xs text-white/60 mt-1">5 min read</p>
                      </div>
                      <div className="p-3 bg-neura-dark/40 rounded-lg border border-neura-purple/20 hover:border-neura-purple/40 cursor-pointer transition-colors">
                        <h3 className="text-sm font-medium text-white">Live Streaming Best Practices</h3>
                        <p className="text-xs text-white/60 mt-1">8 min read</p>
                      </div>
                      <div className="p-3 bg-neura-dark/40 rounded-lg border border-neura-purple/20 hover:border-neura-purple/40 cursor-pointer transition-colors">
                        <h3 className="text-sm font-medium text-white">Creating AR Experiences</h3>
                        <p className="text-xs text-white/60 mt-1">10 min read</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-neura-dark/60 border border-neura-purple/30 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-neura-purple/10 rounded-full">
                        <Settings className="w-5 h-5 text-neura-cyan" />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold mb-2">Tools & Integration</h2>
                        <p className="text-white/70 text-sm">Connect with external services and enhance your video workflow</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-neura-dark/40 rounded-lg border border-neura-purple/20">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">LP</div>
                          <span className="text-sm font-medium">Livepeer</span>
                        </div>
                        <Button variant="outline" size="sm" className="border-neura-purple/30 text-white hover:bg-neura-purple/10">
                          Connect
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-neura-dark/40 rounded-lg border border-neura-purple/20">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">AR</div>
                          <span className="text-sm font-medium">ARKit/ARCore</span>
                        </div>
                        <Button variant="outline" size="sm" className="border-neura-purple/30 text-white hover:bg-neura-purple/10">
                          Connect
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-neura-dark/40 rounded-lg border border-neura-purple/20">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">IP</div>
                          <span className="text-sm font-medium">IPFS Storage</span>
                        </div>
                        <Button variant="outline" size="sm" className="border-neura-purple/30 text-white hover:bg-neura-purple/10">
                          Connect
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VideoStudio;
