
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import { Share2, MessageSquare, Twitter, Instagram, Link, Award } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export const SocialHub: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-20 relative overflow-hidden" id="social">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-neura-purple/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-neura-cyan/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neura-purple to-neura-cyan bg-clip-text text-transparent">
              Social Media Integration
            </span>
          </h2>
          <p className="text-white/70 md:text-lg max-w-2xl mx-auto">
            Connect your Web3 content with traditional social platforms and build vibrant communities
          </p>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Cross-Platform Sharing */}
          <Card className={`bg-neura-dark/50 border border-neura-purple/30 overflow-hidden transition-all duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
                style={{ transitionDelay: '100ms' }}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-neura-purple/20 to-neura-cyan/10 p-3 rounded-full">
                  <Share2 className="w-6 h-6 text-neura-cyan" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-white">Cross-Platform Sharing</h3>
                  <p className="text-white/70 mb-4">
                    Share your content across social media platforms with one click. Automatically generate affiliate codes for tracking and monetization.
                  </p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                    <Button variant="outline" className="border-neura-purple/30 text-white hover:bg-neura-purple/10 flex items-center justify-center gap-2">
                      <Twitter className="w-4 h-4" /> Twitter
                    </Button>
                    <Button variant="outline" className="border-neura-purple/30 text-white hover:bg-neura-purple/10 flex items-center justify-center gap-2">
                      <Instagram className="w-4 h-4" /> Instagram
                    </Button>
                    <Button variant="outline" className="border-neura-purple/30 text-white hover:bg-neura-purple/10 flex items-center justify-center gap-2">
                      <Link className="w-4 h-4" /> Custom
                    </Button>
                  </div>
                  
                  <div className="bg-neura-purple/10 p-3 rounded-lg">
                    <p className="text-sm text-white/80">
                      <span className="font-semibold text-neura-cyan">Pro Tip:</span> Creators earn $Neurax tokens when their shared content drives engagement
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Community Hub */}
          <Card className={`bg-neura-dark/50 border border-neura-purple/30 overflow-hidden transition-all duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
                style={{ transitionDelay: '200ms' }}>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-neura-purple/20 to-neura-cyan/10 p-3 rounded-full">
                  <MessageSquare className="w-6 h-6 text-neura-cyan" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-white">Community Hub</h3>
                  <p className="text-white/70 mb-4">
                    Create token-gated community spaces using XMTP protocol. Engage with your audience through secure encrypted messaging.
                  </p>
                  
                  <div className="bg-neura-dark/80 border border-neura-purple/20 rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-full bg-neura-purple/30"></div>
                      <div className="text-sm font-medium text-white">Artist DAO</div>
                      <Badge className="ml-auto text-xs bg-neura-purple/30 text-white px-2">6 Online</Badge>
                    </div>
                    <div className="h-24 overflow-y-auto bg-neura-dark/50 rounded border border-neura-purple/10 p-2 mb-2">
                      <p className="text-xs text-white/60">Community chat messages appear here...</p>
                    </div>
                    <Button size="sm" variant="outline" className="border-neura-purple/30 text-white hover:bg-neura-purple/10 w-full">
                      Join Conversation
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-neura-cyan" />
                    <p className="text-sm text-white/80">
                      Earn badges and rewards for active community participation
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

// Missing types, importing from ui library
import { Badge } from "@/components/ui/badge";
