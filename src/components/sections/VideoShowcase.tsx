
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Play, Video, Upload, Sparkles, Globe } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export const VideoShowcase: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-20 relative overflow-hidden" id="video">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-neura-cyan/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-neura-purple/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neura-purple to-neura-cyan bg-clip-text text-transparent">
              Video Creation Studio
            </span>
          </h2>
          <p className="text-white/70 md:text-lg max-w-2xl mx-auto">
            Create, stream, and monetize video content with decentralized tools
          </p>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Live Streaming Card */}
          <Card className={`bg-neura-dark/50 border border-neura-purple/30 overflow-hidden transition-all duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
                style={{ transitionDelay: '100ms' }}>
            <div className="h-48 bg-gradient-to-br from-neura-purple/20 to-neura-cyan/10 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-neura-purple/30 flex items-center justify-center backdrop-blur-sm">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-white">Live Streaming</h3>
              <p className="text-white/70 mb-4">
                Host live streams with token-gating and NFT access passes via decentralized protocols
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-neura-purple/20 text-neura-cyan px-2 py-1 rounded-full">Livepeer</span>
                <span className="text-xs bg-neura-purple/20 text-neura-cyan px-2 py-1 rounded-full">WebRTC</span>
                <span className="text-xs bg-neura-purple/20 text-neura-cyan px-2 py-1 rounded-full">ERC-1155</span>
              </div>
              <Button variant="outline" className="w-full border-neura-purple/30 text-white hover:bg-neura-purple/10">
                Schedule Stream <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
          
          {/* Video NFTs Card */}
          <Card className={`bg-neura-dark/50 border border-neura-purple/30 overflow-hidden transition-all duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
                style={{ transitionDelay: '200ms' }}>
            <div className="h-48 bg-gradient-to-br from-neura-purple/20 to-neura-cyan/10 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-neura-purple/30 flex items-center justify-center backdrop-blur-sm">
                  <Upload className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-white">Video NFTs</h3>
              <p className="text-white/70 mb-4">
                Turn video content into collectible NFTs with royalty structures and ownership rights
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-neura-purple/20 text-neura-cyan px-2 py-1 rounded-full">IPFS</span>
                <span className="text-xs bg-neura-purple/20 text-neura-cyan px-2 py-1 rounded-full">ERC-721M</span>
                <span className="text-xs bg-neura-purple/20 text-neura-cyan px-2 py-1 rounded-full">ERC-2981</span>
              </div>
              <Button variant="outline" className="w-full border-neura-purple/30 text-white hover:bg-neura-purple/10">
                Upload Video <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
          
          {/* AR Visualization Card */}
          <Card className={`bg-neura-dark/50 border border-neura-purple/30 overflow-hidden transition-all duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
                style={{ transitionDelay: '300ms' }}>
            <div className="h-48 bg-gradient-to-br from-neura-purple/20 to-neura-cyan/10 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-neura-purple/30 flex items-center justify-center backdrop-blur-sm">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-white">AR Visualization</h3>
              <p className="text-white/70 mb-4">
                Create augmented reality experiences for your products and digital collectibles
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-neura-purple/20 text-neura-cyan px-2 py-1 rounded-full">ARKit</span>
                <span className="text-xs bg-neura-purple/20 text-neura-cyan px-2 py-1 rounded-full">ARCore</span>
                <span className="text-xs bg-neura-purple/20 text-neura-cyan px-2 py-1 rounded-full">3D Models</span>
              </div>
              <Button variant="outline" className="w-full border-neura-purple/30 text-white hover:bg-neura-purple/10">
                Create AR <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/video-studio">
            <Button className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90">
              <Video className="w-5 h-5 mr-2" /> Explore Video Studio
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
