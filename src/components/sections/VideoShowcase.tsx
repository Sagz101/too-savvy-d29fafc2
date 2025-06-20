
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Play, Video, Upload, Sparkles, Globe, ShoppingCart, Music, Podcast, Users, GitMerge, DollarSign, IdCard, Link as LinkIcon } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export const VideoShowcase: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-neura-dark via-cosmos-darker to-neura-dark" id="video">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-neura-cyan/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-neura-purple/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cosmos-cyan/5 rounded-full filter blur-2xl animate-cosmic-pulse"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(103, 232, 249, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Enhanced header section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-orbitron tracking-wider">
            <span className="bg-gradient-to-r from-neura-cyan via-neura-purple to-cosmos-cyan bg-clip-text text-transparent animate-hero-glow">
              Creator Studio
            </span>
          </h2>
          <p className="text-white/80 md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 font-medium leading-relaxed">
            Create, stream, and monetize content with decentralized tools
          </p>

          {/* Enhanced platform overview image with left-right movement */}
          <div className="flex justify-center mb-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-neura-cyan via-neura-purple to-cosmos-cyan rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/a798f3fa-a391-4578-a354-066055ede35c.png"
                  alt="Creator Studio Platform Overview - Tech-savvy character with Web3 tools"
                  className="w-[300px] h-[400px] object-contain rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500 animate-float-horizontal"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced module grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Global Innovators Card */}
          <Card className={`group relative overflow-hidden border-0 bg-gradient-to-br from-yellow-500/10 via-cosmos-dark to-neura-dark backdrop-blur-sm transition-all duration-500 hover:scale-105 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
                style={{ transitionDelay: '50ms' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-transparent to-neura-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-neura-cyan"></div>
            
            <div className="h-48 bg-gradient-to-br from-yellow-500/20 to-neura-cyan/10 relative flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-yellow-500/30 flex items-center justify-center backdrop-blur-sm border border-yellow-500/50 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-10 h-10 text-white group-hover:animate-spin" style={{ animationDuration: '3s' }} />
              </div>
              
              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-60 animate-float"
                    style={{
                      top: `${20 + Math.random() * 60}%`,
                      left: `${20 + Math.random() * 60}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: `${3 + Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
            </div>
            
            <CardContent className="p-6 relative z-10">
              <h3 className="text-xl font-semibold mb-3 text-white font-orbitron group-hover:text-yellow-400 transition-colors">Global Innovators</h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                Create collaborative projects with NFT-based ownership and decentralized funding
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-yellow-500/20 text-neura-cyan px-3 py-1 rounded-full border border-yellow-500/30">Multi-Chain</span>
                <span className="text-xs bg-yellow-500/20 text-neura-cyan px-3 py-1 rounded-full border border-yellow-500/30">NFT Ownership</span>
                <span className="text-xs bg-yellow-500/20 text-neura-cyan px-3 py-1 rounded-full border border-yellow-500/30">DAO Governance</span>
              </div>
              <Link to="/projects-creator">
                <Button className="w-full bg-gradient-to-r from-yellow-500 to-neura-cyan text-black font-semibold hover:from-yellow-400 hover:to-cyan-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-yellow-500/25">
                  Launch Project <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          {/* Live Streaming Card */}
          <Card className={`group relative overflow-hidden border-0 bg-gradient-to-br from-neura-purple/10 via-cosmos-dark to-neura-dark backdrop-blur-sm transition-all duration-500 hover:scale-105 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
                style={{ transitionDelay: '100ms' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-neura-purple/20 via-transparent to-neura-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neura-purple to-neura-cyan"></div>
            
            <div className="h-48 bg-gradient-to-br from-neura-purple/20 to-neura-cyan/10 relative flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-neura-purple/30 flex items-center justify-center backdrop-blur-sm border border-neura-purple/50 group-hover:scale-110 transition-transform duration-300">
                <Play className="w-10 h-10 text-white ml-1 group-hover:animate-pulse" />
              </div>
              
              {/* Streaming waves animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-16 h-16 border-2 border-neura-purple/30 rounded-full animate-ping"
                    style={{
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: '2s'
                    }}
                  />
                ))}
              </div>
            </div>
            
            <CardContent className="p-6 relative z-10">
              <h3 className="text-xl font-semibold mb-3 text-white font-orbitron group-hover:text-neura-purple transition-colors">Live Streaming</h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                Host live streams with token-gating and NFT access passes via decentralized protocols
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-neura-purple/20 text-neura-cyan px-3 py-1 rounded-full border border-neura-purple/30">Livepeer</span>
                <span className="text-xs bg-neura-purple/20 text-neura-cyan px-3 py-1 rounded-full border border-neura-purple/30">WebRTC</span>
                <span className="text-xs bg-neura-purple/20 text-neura-cyan px-3 py-1 rounded-full border border-neura-purple/30">ERC-1155</span>
              </div>
              <Link to="/video-integration">
                <Button className="w-full bg-gradient-to-r from-neura-purple to-neura-cyan text-white font-semibold hover:from-purple-500 hover:to-cyan-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-neura-purple/25">
                  Schedule Stream <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>
          
          {/* Video NFTs Card */}
          <Card className={`group relative overflow-hidden border-0 bg-gradient-to-br from-neura-cyan/10 via-cosmos-dark to-neura-dark backdrop-blur-sm transition-all duration-500 hover:scale-105 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
                style={{ transitionDelay: '200ms' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-neura-cyan/20 via-transparent to-neura-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neura-cyan to-neura-purple"></div>
            
            <div className="h-48 bg-gradient-to-br from-neura-cyan/20 to-neura-purple/10 relative flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-neura-cyan/30 flex items-center justify-center backdrop-blur-sm border border-neura-cyan/50 group-hover:scale-110 transition-transform duration-300">
                <Upload className="w-10 h-10 text-white group-hover:animate-bounce" />
              </div>
              
              {/* NFT hexagon pattern */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 border border-neura-cyan/20 transform rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
              </div>
            </div>
            
            <CardContent className="p-6 relative z-10">
              <h3 className="text-xl font-semibold mb-3 text-white font-orbitron group-hover:text-neura-cyan transition-colors">Video NFTs</h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                Turn video content into collectible NFTs with royalty structures and ownership rights
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-neura-cyan/20 text-neura-purple px-3 py-1 rounded-full border border-neura-cyan/30">IPFS</span>
                <span className="text-xs bg-neura-cyan/20 text-neura-purple px-3 py-1 rounded-full border border-neura-cyan/30">ERC-721M</span>
                <span className="text-xs bg-neura-cyan/20 text-neura-purple px-3 py-1 rounded-full border border-neura-cyan/30">ERC-2981</span>
              </div>
              <Link to="/video-marketplace">
                <Button className="w-full bg-gradient-to-r from-neura-cyan to-neura-purple text-white font-semibold hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-neura-cyan/25">
                  Create NFT <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Additional cards with similar enhanced styling... */}
          {/* AR Visualization Card */}
          <Card className={`group relative overflow-hidden border-0 bg-gradient-to-br from-pink-500/10 via-cosmos-dark to-neura-dark backdrop-blur-sm transition-all duration-500 hover:scale-105 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
                style={{ transitionDelay: '300ms' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-transparent to-neura-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-neura-cyan"></div>
            
            <div className="h-48 bg-gradient-to-br from-pink-500/20 to-neura-cyan/10 relative flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-pink-500/30 flex items-center justify-center backdrop-blur-sm border border-pink-500/50 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-10 h-10 text-white group-hover:animate-pulse" />
              </div>
            </div>
            
            <CardContent className="p-6 relative z-10">
              <h3 className="text-xl font-semibold mb-3 text-white font-orbitron group-hover:text-pink-400 transition-colors">AR Visualization</h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                Create augmented reality experiences for your products and digital collectibles
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-pink-500/20 text-neura-cyan px-3 py-1 rounded-full border border-pink-500/30">ARKit</span>
                <span className="text-xs bg-pink-500/20 text-neura-cyan px-3 py-1 rounded-full border border-pink-500/30">ARCore</span>
                <span className="text-xs bg-pink-500/20 text-neura-cyan px-3 py-1 rounded-full border border-pink-500/30">3D Models</span>
              </div>
              <Link to="/video-integration">
                <Button className="w-full bg-gradient-to-r from-pink-500 to-neura-cyan text-white font-semibold hover:from-pink-400 hover:to-cyan-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-pink-500/25">
                  Create AR <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Podcast Card */}
          <Card className={`group relative overflow-hidden border-0 bg-gradient-to-br from-green-500/10 via-cosmos-dark to-neura-dark backdrop-blur-sm transition-all duration-500 hover:scale-105 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
                style={{ transitionDelay: '400ms' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-transparent to-neura-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-neura-cyan"></div>
            
            <div className="h-48 bg-gradient-to-br from-green-500/20 to-neura-cyan/10 relative flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-green-500/30 flex items-center justify-center backdrop-blur-sm border border-green-500/50 group-hover:scale-110 transition-transform duration-300">
                <Podcast className="w-10 h-10 text-white group-hover:animate-pulse" />
              </div>
            </div>
            
            <CardContent className="p-6 relative z-10">
              <h3 className="text-xl font-semibold mb-3 text-white font-orbitron group-hover:text-green-400 transition-colors">Podcast Studio</h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                Create, distribute and monetize podcasts with token-gated bonus content for supporters
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-green-500/20 text-neura-cyan px-3 py-1 rounded-full border border-green-500/30">RSS</span>
                <span className="text-xs bg-green-500/20 text-neura-cyan px-3 py-1 rounded-full border border-green-500/30">Subscription</span>
                <span className="text-xs bg-green-500/20 text-neura-cyan px-3 py-1 rounded-full border border-green-500/30">Analytics</span>
              </div>
              <Link to="/video-marketplace">
                <Button className="w-full bg-gradient-to-r from-green-500 to-neura-cyan text-white font-semibold hover:from-green-400 hover:to-cyan-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-green-500/25">
                  Create Podcast <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Music Creation Card */}
          <Card className={`group relative overflow-hidden border-0 bg-gradient-to-br from-orange-500/10 via-cosmos-dark to-neura-dark backdrop-blur-sm transition-all duration-500 hover:scale-105 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
                style={{ transitionDelay: '500ms' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-transparent to-neura-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-neura-cyan"></div>
            
            <div className="h-48 bg-gradient-to-br from-orange-500/20 to-neura-cyan/10 relative flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-orange-500/30 flex items-center justify-center backdrop-blur-sm border border-orange-500/50 group-hover:scale-110 transition-transform duration-300">
                <Music className="w-10 h-10 text-white group-hover:animate-bounce" />
              </div>
            </div>
            
            <CardContent className="p-6 relative z-10">
              <h3 className="text-xl font-semibold mb-3 text-white font-orbitron group-hover:text-orange-400 transition-colors">Music Creation</h3>
              <p className="text-white/70 mb-4 leading-relaxed">
                Compose, mint and sell music as NFTs with built-in royalties and collaboration tools
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-orange-500/20 text-neura-cyan px-3 py-1 rounded-full border border-orange-500/30">Stems</span>
                <span className="text-xs bg-orange-500/20 text-neura-cyan px-3 py-1 rounded-full border border-orange-500/30">Royalties</span>
                <span className="text-xs bg-orange-500/20 text-neura-cyan px-3 py-1 rounded-full border border-orange-500/30">Split Rights</span>
              </div>
              <Link to="/video-marketplace">
                <Button className="w-full bg-gradient-to-r from-orange-500 to-neura-cyan text-white font-semibold hover:from-orange-400 hover:to-cyan-400 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-orange-500/25">
                  Create Music <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
        
        {/* Enhanced marketplace CTA */}
        <div className="text-center mb-24">
          <Link to="/video-marketplace">
            <Button className="bg-gradient-to-r from-neura-purple via-neura-cyan to-cosmos-cyan text-white hover:opacity-90 px-8 py-4 text-lg font-semibold font-orbitron shadow-2xl hover:shadow-neura-cyan/25 transition-all duration-300 hover:scale-105">
              <ShoppingCart className="w-6 h-6 mr-3" /> 
              Explore Creator Marketplace
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
