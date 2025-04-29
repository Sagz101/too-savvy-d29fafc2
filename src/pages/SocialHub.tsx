
import React, { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { AnimatedGradient } from '@/components/ui/animated-gradient';
import { AnimatedText } from '@/components/ui/animated-text';
import { DecentralizedIdentity } from '@/components/social/DecentralizedIdentity';
import { TokenGatedContent } from '@/components/social/TokenGatedContent';
import { SocialFeedIntegration } from '@/components/social/SocialFeedIntegration';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Lock, Rss, MessageSquare } from 'lucide-react';

const SocialHub = () => {
  const [activeTab, setActiveTab] = useState('feed');

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
                  text="Social Hub"
                  type="gradient"
                  gradientFrom="from-neura-purple"
                  gradientTo="to-neura-cyan"
                  tag="span"
                />
              </h1>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Connect and interact across Web3 social platforms with your decentralized identity
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <Card className="bg-neura-dark/80 border border-neura-purple/30 shadow-lg shadow-neura-purple/10 overflow-hidden">
                <div className="border-b border-neura-purple/30 p-4">
                  <Tabs 
                    defaultValue="feed" 
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="w-full"
                  >
                    <TabsList className="bg-neura-dark/50 grid grid-cols-3">
                      <TabsTrigger value="feed" className="data-[state=active]:bg-neura-purple/20">
                        <Rss className="w-4 h-4 mr-2" />
                        Social Feed
                      </TabsTrigger>
                      <TabsTrigger value="gated" className="data-[state=active]:bg-neura-purple/20">
                        <Lock className="w-4 h-4 mr-2" />
                        Token Gated
                      </TabsTrigger>
                      <TabsTrigger value="identity" className="data-[state=active]:bg-neura-purple/20">
                        <Users className="w-4 h-4 mr-2" />
                        DID Identity
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
                
                <CardContent className="p-0">
                  <div className="p-6">
                    {activeTab === 'feed' && (
                      <SocialFeedIntegration />
                    )}
                    
                    {activeTab === 'gated' && (
                      <TokenGatedContent />
                    )}
                    
                    {activeTab === 'identity' && (
                      <DecentralizedIdentity />
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

export default SocialHub;
