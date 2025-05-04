
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Play, Video, Upload, Sparkles, Globe, ShoppingCart, Music, Podcast, Users, GitMerge, DollarSign, IdCard, Link as LinkIcon } from 'lucide-react';
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
              Creator Studio
            </span>
          </h2>
          <p className="text-white/70 md:text-lg max-w-2xl mx-auto">
            Create, stream, and monetize content with decentralized tools
          </p>
        </div>
        
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Global Innovators Card */}
          <Card className={`bg-neura-dark/50 border border-yellow-500/30 overflow-hidden transition-all duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
                style={{ transitionDelay: '50ms' }}>
            <div className="h-48 bg-gradient-to-br from-yellow-500/20 to-neura-cyan/10 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-yellow-500/30 flex items-center justify-center backdrop-blur-sm">
                  <Globe className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-white">Global Innovators</h3>
              <p className="text-white/70 mb-4">
                Create collaborative projects with NFT-based ownership and decentralized funding
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-yellow-500/20 text-neura-cyan px-2 py-1 rounded-full">Multi-Chain</span>
                <span className="text-xs bg-yellow-500/20 text-neura-cyan px-2 py-1 rounded-full">NFT Ownership</span>
                <span className="text-xs bg-yellow-500/20 text-neura-cyan px-2 py-1 rounded-full">DAO Governance</span>
              </div>
              <Link to="/projects-creator">
                <Button variant="outline" className="w-full border-yellow-500/30 text-white hover:bg-yellow-500/10">
                  Launch Project <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
          
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
              <Link to="/video-integration">
                <Button variant="outline" className="w-full border-neura-purple/30 text-white hover:bg-neura-purple/10">
                  Schedule Stream <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
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
              <Link to="/video-marketplace">
                <Button variant="outline" className="w-full border-neura-purple/30 text-white hover:bg-neura-purple/10">
                  Create NFT <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
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
              <Link to="/video-integration">
                <Button variant="outline" className="w-full border-neura-purple/30 text-white hover:bg-neura-purple/10">
                  Create AR <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          {/* Podcast Card */}
          <Card className={`bg-neura-dark/50 border border-neura-purple/30 overflow-hidden transition-all duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
                style={{ transitionDelay: '400ms' }}>
            <div className="h-48 bg-gradient-to-br from-neura-purple/20 to-neura-cyan/10 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-neura-purple/30 flex items-center justify-center backdrop-blur-sm">
                  <Podcast className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-white">Podcast Studio</h3>
              <p className="text-white/70 mb-4">
                Create, distribute and monetize podcasts with token-gated bonus content for supporters
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-neura-purple/20 text-neura-cyan px-2 py-1 rounded-full">RSS</span>
                <span className="text-xs bg-neura-purple/20 text-neura-cyan px-2 py-1 rounded-full">Subscription</span>
                <span className="text-xs bg-neura-purple/20 text-neura-cyan px-2 py-1 rounded-full">Analytics</span>
              </div>
              <Link to="/video-marketplace">
                <Button variant="outline" className="w-full border-neura-purple/30 text-white hover:bg-neura-purple/10">
                  Create Podcast <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          {/* Music Creation Card */}
          <Card className={`bg-neura-dark/50 border border-neura-purple/30 overflow-hidden transition-all duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
                style={{ transitionDelay: '500ms' }}>
            <div className="h-48 bg-gradient-to-br from-neura-purple/20 to-neura-cyan/10 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-neura-purple/30 flex items-center justify-center backdrop-blur-sm">
                  <Music className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-white">Music Creation</h3>
              <p className="text-white/70 mb-4">
                Compose, mint and sell music as NFTs with built-in royalties and collaboration tools
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-neura-purple/20 text-neura-cyan px-2 py-1 rounded-full">Stems</span>
                <span className="text-xs bg-neura-purple/20 text-neura-cyan px-2 py-1 rounded-full">Royalties</span>
                <span className="text-xs bg-neura-purple/20 text-neura-cyan px-2 py-1 rounded-full">Split Rights</span>
              </div>
              <Link to="/video-marketplace">
                <Button variant="outline" className="w-full border-neura-purple/30 text-white hover:bg-neura-purple/10">
                  Create Music <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/video-marketplace">
            <Button className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90">
              <ShoppingCart className="w-5 h-5 mr-2" /> Explore Creator Marketplace
            </Button>
          </Link>
        </div>

        {/* Global Innovators Features Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-neura-cyan bg-clip-text text-transparent">
                Global Innovators Platform
              </span>
            </h2>
            <p className="text-white/70 md:text-lg max-w-3xl mx-auto">
              Build decentralized projects with smart contract ownership, collaborative tooling, and transparent funding
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Project Creation Module */}
            <Card className={`bg-neura-dark/50 border border-yellow-500/30 p-6 transition-all duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
                  style={{ transitionDelay: '100ms' }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-yellow-500/20 p-3 rounded-full">
                  <Users className="h-6 w-6 text-neura-cyan" />
                </div>
                <h3 className="text-xl font-semibold">Project Creation</h3>
              </div>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start">
                  <div className="min-w-2 h-2 w-2 bg-yellow-400 rounded-full mt-2 mr-2"></div>
                  <span>Single/Multi-user creation with collaborative invites</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-2 h-2 w-2 bg-yellow-400 rounded-full mt-2 mr-2"></div>
                  <span>NFT-based ownership tokens for projects</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-2 h-2 w-2 bg-yellow-400 rounded-full mt-2 mr-2"></div>
                  <span>Role management with granular access control</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-yellow-500/20">
                <Link to="/projects-creator">
                  <Button variant="link" className="p-0 text-yellow-400 hover:text-yellow-300">
                    Create Project <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </Card>
            
            {/* Collaborative Workspace */}
            <Card className={`bg-neura-dark/50 border border-yellow-500/30 p-6 transition-all duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
                  style={{ transitionDelay: '200ms' }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-yellow-500/20 p-3 rounded-full">
                  <GitMerge className="h-6 w-6 text-neura-cyan" />
                </div>
                <h3 className="text-xl font-semibold">Collaborative Workspace</h3>
              </div>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start">
                  <div className="min-w-2 h-2 w-2 bg-yellow-400 rounded-full mt-2 mr-2"></div>
                  <span>Decentralized document editing with IPFS storage</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-2 h-2 w-2 bg-yellow-400 rounded-full mt-2 mr-2"></div>
                  <span>On-chain task management and progress tracking</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-2 h-2 w-2 bg-yellow-400 rounded-full mt-2 mr-2"></div>
                  <span>End-to-end encrypted communication channels</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-yellow-500/20">
                <Link to="/projects-creator">
                  <Button variant="link" className="p-0 text-yellow-400 hover:text-yellow-300">
                    Explore Workspace <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </Card>
            
            {/* Funding Mechanism */}
            <Card className={`bg-neura-dark/50 border border-yellow-500/30 p-6 transition-all duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
                  style={{ transitionDelay: '300ms' }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-yellow-500/20 p-3 rounded-full">
                  <DollarSign className="h-6 w-6 text-neura-cyan" />
                </div>
                <h3 className="text-xl font-semibold">Funding Mechanism</h3>
              </div>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start">
                  <div className="min-w-2 h-2 w-2 bg-yellow-400 rounded-full mt-2 mr-2"></div>
                  <span>Multiple funding options: donations, equity, tokens</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-2 h-2 w-2 bg-yellow-400 rounded-full mt-2 mr-2"></div>
                  <span>Milestone-based disbursement with smart contracts</span>
                </li>
                <li className="flex items-start">
                  <div className="min-w-2 h-2 w-2 bg-yellow-400 rounded-full mt-2 mr-2"></div>
                  <span>Transparent on-chain funding history</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-yellow-500/20">
                <Link to="/projects-creator">
                  <Button variant="link" className="p-0 text-yellow-400 hover:text-yellow-300">
                    Fund Projects <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
          
          {/* Additional Components */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
            <Card className={`bg-neura-dark/50 border border-yellow-500/30 p-4 transition-all duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
                  style={{ transitionDelay: '400ms' }}>
              <div className="flex items-center gap-2 mb-2">
                <IdCard className="h-4 w-4 text-neura-cyan" />
                <h4 className="font-medium">Identity Verification</h4>
              </div>
              <p className="text-xs text-white/70">Decentralized identity solutions for secure participation</p>
            </Card>
            
            <Card className={`bg-neura-dark/50 border border-yellow-500/30 p-4 transition-all duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
                  style={{ transitionDelay: '450ms' }}>
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-4 w-4 text-neura-cyan" />
                <h4 className="font-medium">Reputation System</h4>
              </div>
              <p className="text-xs text-white/70">Track contributor reputation through verified on-chain activity</p>
            </Card>
            
            <Card className={`bg-neura-dark/50 border border-yellow-500/30 p-4 transition-all duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
                  style={{ transitionDelay: '500ms' }}>
              <div className="flex items-center gap-2 mb-2">
                <GitMerge className="h-4 w-4 text-neura-cyan" />
                <h4 className="font-medium">Dispute Resolution</h4>
              </div>
              <p className="text-xs text-white/70">DAO-based arbitration mechanisms for transparent conflict resolution</p>
            </Card>
            
            <Card className={`bg-neura-dark/50 border border-yellow-500/30 p-4 transition-all duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
                  style={{ transitionDelay: '550ms' }}>
              <div className="flex items-center gap-2 mb-2">
                <LinkIcon className="h-4 w-4 text-neura-cyan" />
                <h4 className="font-medium">Multi-Chain Support</h4>
              </div>
              <p className="text-xs text-white/70">Deploy on Ethereum, Polygon, Optimism, or other EVM chains</p>
            </Card>
            
            <Card className={`bg-neura-dark/50 border border-yellow-500/30 p-4 transition-all duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
                  style={{ transitionDelay: '600ms' }}>
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="h-4 w-4 text-neura-cyan" />
                <h4 className="font-medium">Token Incentives</h4>
              </div>
              <p className="text-xs text-white/70">Reward contributors with project tokens and governance rights</p>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/projects-creator">
              <Button className="bg-gradient-to-r from-yellow-400 to-neura-cyan text-black font-medium hover:opacity-90">
                <Globe className="w-5 h-5 mr-2" /> Launch Global Innovators Platform
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
