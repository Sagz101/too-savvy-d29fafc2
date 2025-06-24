
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Palette, 
  Mic, 
  ShoppingCart, 
  FileText, 
  Share2, 
  Users,
  Zap,
  Shield,
  Globe,
  TrendingUp,
  BookOpen,
  HelpCircle,
  Calendar,
  Download,
  ExternalLink,
  ArrowRight,
  Check,
  Leaf,
  Layers,
  Sparkles,
  Star,
  ChevronRight,
  Hexagon,
  Network,
  Lock,
  Eye,
  Coins,
  Target,
  Rocket,
  Cpu,
  Database,
  Code,
  Bot
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export const UnifiedCreatorSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const modules = [
    {
      icon: <Palette className="w-8 h-8 text-cyan-400" />,
      title: "Creator Studio",
      description: "Produce, stream, and monetize digital content with professional-grade tools",
      gradient: "from-cyan-400/20 to-blue-500/20",
      hoverGradient: "from-cyan-400/30 to-blue-500/30",
      borderColor: "border-cyan-400/30",
      features: ["NFT Minting", "Live Streaming", "Token Gates"]
    },
    {
      icon: <Mic className="w-8 h-8 text-purple-400" />,
      title: "Podcast & Music Studios",
      description: "Launch audio projects with NFT integration and Web3 monetization",
      gradient: "from-purple-400/20 to-pink-500/20",
      hoverGradient: "from-purple-400/30 to-pink-500/30",
      borderColor: "border-purple-400/30",
      features: ["Audio NFTs", "Royalty Splits", "Fan Tokens"]
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-emerald-400" />,
      title: "Storefront Builder",
      description: "Sell physical and digital goods with verifiable authenticity and smart contracts",
      gradient: "from-emerald-400/20 to-teal-500/20",
      hoverGradient: "from-emerald-400/30 to-teal-500/30",
      borderColor: "border-emerald-400/30",
      features: ["Smart Contracts", "Crypto Payments", "Authenticity"]
    },
    {
      icon: <FileText className="w-8 h-8 text-orange-400" />,
      title: "Threaditor",
      description: "Decentralized blogging and professional reporting hub with fact-checking",
      gradient: "from-orange-400/20 to-red-500/20",
      hoverGradient: "from-orange-400/30 to-red-500/30",
      borderColor: "border-orange-400/30",
      features: ["Fact-Check AI", "Token Rewards", "Cross-Platform"]
    },
    {
      icon: <Share2 className="w-8 h-8 text-blue-400" />,
      title: "NeuraSocial",
      description: "Web3-native content sharing with cross-platform reach and token incentives",
      gradient: "from-blue-400/20 to-indigo-500/20",
      hoverGradient: "from-blue-400/30 to-indigo-500/30",
      borderColor: "border-blue-400/30",
      features: ["Social Tokens", "DAO Governance", "Reputation"]
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-400" />,
      title: "Global Innovators",
      description: "Collaborative, tokenized project creation at scale with DAO governance",
      gradient: "from-yellow-400/20 to-orange-500/20",
      hoverGradient: "from-yellow-400/30 to-orange-500/30",
      borderColor: "border-yellow-400/30",
      features: ["DAO Tools", "Collective Ownership", "Global Scale"]
    }
  ];

  const ecosystemStats = [
    { 
      number: "12,847", 
      label: "active monthly creators", 
      icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
      change: "+15.2%",
      description: "Growing creator community"
    },
    { 
      number: "421,071", 
      label: "NFTs minted", 
      icon: <Layers className="w-8 h-8 text-cyan-400" />,
      change: "+8.7%",
      description: "Digital assets created"
    },
    { 
      number: "~0.002", 
      label: "average cost per transaction", 
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      change: "-5.1%",
      description: "Ultra-low gas fees"
    },
    { 
      number: "3,000+", 
      label: "validator nodes", 
      icon: <Network className="w-8 h-8 text-purple-400" />,
      change: "+12.3%",
      description: "Decentralized network"
    }
  ];

  const ecosystemFeatures = [
    { 
      label: "Carbon-neutral", 
      icon: <Leaf className="w-6 h-6 text-emerald-400" />,
      description: "Eco-friendly blockchain infrastructure"
    },
    { 
      label: "Multi-chain compatible", 
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      description: "Works across major networks"
    },
    { 
      label: "Creator-first infrastructure", 
      icon: <Users className="w-6 h-6 text-purple-400" />,
      description: "Built specifically for creators"
    }
  ];

  const resources = [
    {
      icon: <BookOpen className="w-8 h-8 text-cyan-400" />,
      title: "Learning Center",
      description: "Step-by-step guides and video tutorials to master Web3 creation",
      cta: "Start Learning",
      gradient: "from-cyan-400/10 to-blue-500/10",
      features: ["Video Tutorials", "Interactive Guides", "Certification"]
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: "Creator Toolkit",
      description: "Templates, token strategies, and proven pricing models",
      cta: "Get Toolkit",
      gradient: "from-purple-400/10 to-pink-500/10",
      features: ["Templates", "Strategies", "Analytics"]
    },
    {
      icon: <HelpCircle className="w-8 h-8 text-emerald-400" />,
      title: "Community Support",
      description: "Peer answers and verified walkthroughs from experts",
      cta: "Get Help",
      gradient: "from-emerald-400/10 to-teal-500/10",
      features: ["24/7 Support", "Expert Network", "Community"]
    },
    {
      icon: <Calendar className="w-8 h-8 text-orange-400" />,
      title: "Workshops & Events",
      description: "Live sessions hosted by creators and Web3 experts",
      cta: "Join Events",
      gradient: "from-orange-400/10 to-red-500/10",
      features: ["Live Events", "AMAs", "Workshops"]
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Enhanced Background with Mesh Gradients and Particles */}
      <div className="absolute inset-0 -z-10">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900 to-black"></div>
        
        {/* Mesh Gradients */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-cyan-400/20 via-cyan-400/10 to-transparent rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-purple-500/20 via-purple-500/10 to-transparent rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-radial from-emerald-400/15 via-emerald-400/5 to-transparent rounded-full filter blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-float opacity-60"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-float opacity-80" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-float opacity-70" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 right-20 w-1 h-1 bg-yellow-400 rounded-full animate-float opacity-60" style={{ animationDelay: '3s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        {/* Hero Section with Enhanced Web3 Typography */}
        <div className="text-center mb-32 relative" ref={ref}>
          <div className={`transition-all duration-1000 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {/* Web3 Badge */}
            <div className="flex justify-center mb-10">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-full blur-xl"></div>
                <div className="relative flex items-center space-x-3 px-8 py-4 rounded-full bg-gradient-to-r from-slate-800/80 to-gray-800/80 border border-cyan-400/30 backdrop-blur-xl">
                  <Hexagon className="w-6 h-6 text-cyan-400" />
                  <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text font-semibold text-lg">
                    Web3 Platform Overview
                  </span>
                  <Sparkles className="w-6 h-6 text-purple-400" />
                </div>
              </div>
            </div>

            {/* Main Heading with Holographic Effect */}
            <div className="relative mb-10">
              <h2 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-4 font-orbitron relative">
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent blur-sm opacity-50"></span>
                <span className="relative bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent animate-hero-glow">
                  Create. Own. Thrive.
                </span>
              </h2>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-cyan-400/50 rounded-full animate-spin opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-purple-400/50 rotate-45 animate-pulse opacity-40"></div>
            </div>
            
            <div className="max-w-5xl mx-auto mb-16">
              <p className="text-3xl font-semibold text-white/90 mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Comprehensive platform overview
                </span>
              </p>
              <p className="text-white/70 text-2xl leading-relaxed">
                From specialized modules to ecosystem governance—your complete toolkit for Web3 creation, ownership, and growth
              </p>
            </div>

            {/* Web3 Feature Badges */}
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              {[
                { label: 'Decentralized', icon: <Network className="w-5 h-5" /> },
                { label: 'Creator-Owned', icon: <Users className="w-5 h-5" /> },
                { label: 'Multi-Chain', icon: <Globe className="w-5 h-5" /> },
                { label: 'Zero Fees', icon: <Zap className="w-5 h-5" /> }
              ].map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <Badge className="relative bg-gradient-to-r from-slate-800/90 to-gray-800/90 text-white border border-cyan-400/40 px-6 py-3 text-lg font-medium backdrop-blur-xl hover:border-cyan-400/60 transition-all duration-300 hover:scale-105">
                    {feature.icon}
                    <span className="ml-2">{feature.label}</span>
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Modules Section */}
        <div className={`mb-36 transition-all duration-1000 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '200ms' }}>
          <div className="text-center mb-24">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-purple-500/30 rounded-3xl blur-2xl"></div>
                <div className="relative p-4 rounded-3xl bg-gradient-to-r from-slate-800/60 to-gray-800/60 backdrop-blur-xl shadow-2xl border border-cyan-400/20">
                  <Layers className="w-10 h-10 text-cyan-400" />
                </div>
              </div>
            </div>
            
            <h3 className="text-6xl md:text-7xl font-bold mb-8 text-white bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-orbitron">
              Modules
            </h3>
            <p className="text-white/80 text-2xl max-w-5xl mx-auto leading-relaxed mb-10">
              Unlock specialized tools for every step of your creative journey. Modular, composable, and fully Web3-native.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {modules.map((module, index) => (
              <Card 
                key={index}
                className={`group relative bg-gradient-to-br from-slate-800/95 via-gray-800/95 to-slate-900/95 border ${module.borderColor} backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-[1.02] hover:-translate-y-3 cursor-pointer overflow-hidden`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${module.gradient} opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl`}></div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl"></div>
                
                <CardContent className="p-10 relative z-10">
                  <div className="relative z-10">
                    {/* Icon Container */}
                    <div className={`relative p-5 rounded-3xl bg-gradient-to-r ${module.gradient} backdrop-blur-sm shadow-2xl mb-8 w-fit group-hover:scale-110 transition-transform duration-500 border border-white/10`}>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-3xl"></div>
                      {module.icon}
                    </div>
                    
                    <h4 className="font-bold text-3xl mb-6 text-white group-hover:text-cyan-100 transition-colors duration-300">
                      {module.title}
                    </h4>
                    
                    <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed text-lg mb-8">
                      {module.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {module.features.map((feature, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gradient-to-r from-slate-700/60 to-gray-700/60 rounded-full text-sm text-cyan-300 border border-cyan-400/20">
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <Button 
                        variant="outline" 
                        className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/20 hover:border-cyan-400 transition-all duration-300 w-full text-lg py-3"
                      >
                        Explore Module <ChevronRight className="w-5 h-5 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Ecosystem Section */}
        <div className={`mb-36 transition-all duration-1000 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '400ms' }}>
          <Card className="relative bg-gradient-to-br from-slate-800/98 via-gray-800/98 to-slate-900/98 border border-purple-500/40 backdrop-blur-2xl shadow-3xl overflow-hidden">
            {/* Enhanced Glowing Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-purple-500/30 to-emerald-400/30 rounded-2xl blur-xl -z-10"></div>
            <div className="absolute inset-[1px] bg-gradient-to-br from-slate-800/98 via-gray-800/98 to-slate-900/98 rounded-2xl"></div>
            
            <CardContent className="p-16 relative z-10">
              <div className="text-center mb-20">
                <div className="flex justify-center mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/40 to-emerald-400/40 rounded-3xl blur-2xl"></div>
                    <div className="relative p-5 rounded-3xl bg-gradient-to-r from-slate-800/60 to-gray-800/60 backdrop-blur-xl shadow-2xl border border-white/10">
                      <Globe className="w-12 h-12 text-purple-400" />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-6xl md:text-7xl font-bold mb-8 text-white bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent font-orbitron">
                  Ecosystem
                </h3>
                <p className="text-white/80 text-2xl max-w-5xl mx-auto leading-relaxed mb-10">
                  A self-sustaining creator economy, decentralized across 3,000+ validator nodes, supporting scalable, eco-efficient participation.
                </p>
                <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-emerald-400 mx-auto rounded-full"></div>
              </div>

              {/* Enhanced Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
                {ecosystemStats.map((stat, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-700/40 to-gray-700/40 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                    <div className="relative bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 text-center">
                      <div className="flex justify-center mb-6">
                        <div className="relative p-4 rounded-2xl bg-gradient-to-r from-slate-700/80 to-gray-700/80 backdrop-blur-sm shadow-xl group-hover:scale-110 transition-transform duration-300">
                          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-2xl"></div>
                          {stat.icon}
                        </div>
                      </div>
                      
                      <div className="text-5xl font-bold text-white font-orbitron mb-3 group-hover:text-cyan-100 transition-colors duration-300">
                        {stat.number}
                      </div>
                      
                      <div className="text-white/70 text-lg group-hover:text-white/90 transition-colors duration-300 mb-3">
                        {stat.label}
                      </div>
                      
                      <div className="text-emerald-400 text-base font-semibold mb-2">
                        {stat.change}
                      </div>
                      
                      <div className="text-white/50 text-sm">
                        {stat.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {ecosystemFeatures.map((feature, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-700/20 to-gray-700/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                    <div className="relative bg-gradient-to-r from-slate-800/60 to-gray-800/60 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
                      <div className="flex items-center mb-4">
                        {feature.icon}
                        <span className="ml-4 text-white font-semibold text-xl">{feature.label}</span>
                      </div>
                      <p className="text-white/60 text-base">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button className="bg-gradient-to-r from-purple-500 via-blue-500 to-emerald-500 hover:from-purple-600 hover:via-blue-600 hover:to-emerald-600 text-white font-semibold shadow-2xl hover:shadow-3xl hover:shadow-purple-400/30 transform hover:scale-105 transition-all duration-300 rounded-2xl px-12 py-6 text-xl">
                  <Globe className="w-6 h-6 mr-3" />
                  Join the Ecosystem
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Resources Section */}
        <div className={`mb-36 transition-all duration-1000 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '600ms' }}>
          <div className="text-center mb-24">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/40 to-cyan-400/40 rounded-3xl blur-2xl"></div>
                <div className="relative p-4 rounded-3xl bg-gradient-to-r from-slate-800/60 to-gray-800/60 backdrop-blur-xl shadow-2xl border border-white/10">
                  <BookOpen className="w-10 h-10 text-emerald-400" />
                </div>
              </div>
            </div>
            
            <h3 className="text-6xl md:text-7xl font-bold mb-8 text-white bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-orbitron">
              Resources
            </h3>
            <p className="text-white/80 text-2xl max-w-5xl mx-auto leading-relaxed mb-10">
              Get the most out of Too Savvy with curated support for every level of user—from beginner to protocol contributor.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-24">
            {resources.map((resource, index) => (
              <Card 
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/90 via-gray-800/90 to-slate-900/90 border border-emerald-400/30 hover:border-emerald-400/50 transition-all duration-500 cursor-pointer hover:scale-105 hover:-translate-y-3 hover:shadow-2xl hover:shadow-emerald-400/20 overflow-hidden"
              >
                <CardContent className="p-10 text-center relative overflow-hidden">
                  {/* Background Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${resource.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                  
                  <div className="relative z-10">
                    <div className="relative p-5 rounded-3xl bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 mb-8 w-fit mx-auto group-hover:scale-110 transition-transform duration-500 shadow-xl border border-white/10">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-3xl"></div>
                      {resource.icon}
                    </div>
                    
                    <h4 className="font-bold text-2xl mb-6 text-white group-hover:text-emerald-100 transition-colors duration-300">
                      {resource.title}
                    </h4>
                    
                    <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 mb-6 leading-relaxed text-lg">
                      {resource.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                      {resource.features.map((feature, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gradient-to-r from-slate-700/60 to-gray-700/60 rounded-full text-sm text-emerald-300 border border-emerald-400/20">
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/20 hover:border-emerald-400 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 text-lg py-3 px-6"
                    >
                      {resource.cta} <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Documentation & Important Resources */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-24">
            {/* Documentation */}
            <Card className="group relative bg-gradient-to-br from-slate-800/95 via-gray-800/95 to-slate-900/95 border border-cyan-400/30 backdrop-blur-xl shadow-2xl hover:shadow-3xl hover:shadow-cyan-400/20 transition-all duration-700 hover:scale-[1.02] overflow-hidden">
              <CardContent className="p-10 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/8 to-blue-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="relative p-4 rounded-3xl bg-gradient-to-r from-cyan-400/20 to-blue-500/20 mr-6 shadow-xl border border-white/10">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-3xl"></div>
                      <Code className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h4 className="font-bold text-3xl text-white">Documentation</h4>
                  </div>
                  
                  <p className="text-white/70 mb-8 leading-relaxed text-lg">
                    Comprehensive, developer-grade docs for integrating, building, or scaling on Too Savvy.
                  </p>
                  
                  <ul className="space-y-4 mb-10 text-white/60">
                    <li className="flex items-center text-lg">
                      <Check className="w-5 h-5 text-emerald-400 mr-4 flex-shrink-0" />
                      <span>Smart contract reference (ERC-721M, ERC-1155, ERC-2981)</span>
                    </li>
                    <li className="flex items-center text-lg">
                      <Check className="w-5 h-5 text-emerald-400 mr-4 flex-shrink-0" />
                      <span>SDKs and API guides for content, wallets, storefronts</span>
                    </li>
                    <li className="flex items-center text-lg">
                      <Check className="w-5 h-5 text-emerald-400 mr-4 flex-shrink-0" />
                      <span>IPFS, Chainlink, Livepeer integrations</span>
                    </li>
                    <li className="flex items-center text-lg">
                      <Check className="w-5 h-5 text-emerald-400 mr-4 flex-shrink-0" />
                      <span>Governance structures and DAO voting schemas</span>
                    </li>
                  </ul>
                  
                  <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full text-lg py-4">
                    Access Documentation <ExternalLink className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Whitepaper */}
            <Card className="group relative bg-gradient-to-br from-slate-800/95 via-gray-800/95 to-slate-900/95 border border-purple-500/30 backdrop-blur-xl shadow-2xl hover:shadow-3xl hover:shadow-purple-500/20 transition-all duration-700 hover:scale-[1.02] overflow-hidden">
              <CardContent className="p-10 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/8 to-pink-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="relative p-4 rounded-3xl bg-gradient-to-r from-purple-400/20 to-pink-500/20 mr-6 shadow-xl border border-white/10">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-3xl"></div>
                      <FileText className="w-8 h-8 text-purple-400" />
                    </div>
                    <h4 className="font-bold text-3xl text-white">Whitepaper</h4>
                  </div>
                  
                  <p className="text-white/70 mb-10 leading-relaxed text-lg">
                    The Too Savvy Whitepaper outlines our foundational thesis: reclaiming creator autonomy through programmable ownership, decentralized infrastructure, and sustainable monetization.
                  </p>
                  
                  <Button className="bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full text-lg py-4">
                    <Download className="w-5 h-5 mr-2" />
                    Download Whitepaper (PDF)
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Token Dashboard */}
            <Card className="group relative bg-gradient-to-br from-slate-800/95 via-gray-800/95 to-slate-900/95 border border-emerald-500/30 backdrop-blur-xl shadow-2xl hover:shadow-3xl hover:shadow-emerald-500/20 transition-all duration-700 hover:scale-[1.02] overflow-hidden">
              <CardContent className="p-10 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/8 to-teal-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="relative p-4 rounded-3xl bg-gradient-to-r from-emerald-400/20 to-teal-500/20 mr-6 shadow-xl border border-white/10">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-3xl"></div>
                      <Coins className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h4 className="font-bold text-3xl text-white">Token</h4>
                  </div>
                  
                  <p className="text-white/70 mb-8 leading-relaxed text-lg">
                    Ethereum is the native utility and governance token of the Too Savvy network.
                  </p>
                  
                  <ul className="space-y-4 mb-10 text-white/60">
                    <li className="flex items-center text-lg">
                      <Zap className="w-5 h-5 text-yellow-400 mr-4 flex-shrink-0" />
                      <span><strong className="text-white/80">Utility:</strong> Pay for minting, access premium tools</span>
                    </li>
                    <li className="flex items-center text-lg">
                      <Users className="w-5 h-5 text-blue-400 mr-4 flex-shrink-0" />
                      <span><strong className="text-white/80">Governance:</strong> Vote on protocol upgrades</span>
                    </li>
                    <li className="flex items-center text-lg">
                      <TrendingUp className="w-5 h-5 text-emerald-400 mr-4 flex-shrink-0" />
                      <span><strong className="text-white/80">Incentives:</strong> Earn through engagement</span>
                    </li>
                  </ul>
                  
                  <Button className="bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 text-white font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full text-lg py-4">
                    View Token Dashboard <ExternalLink className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className={`text-center transition-all duration-1000 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '800ms' }}>
          <Card className="relative bg-gradient-to-br from-slate-800/98 via-gray-800/98 to-slate-900/98 border border-cyan-400/40 backdrop-blur-2xl shadow-3xl overflow-hidden">
            {/* Enhanced Glowing Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-purple-500/30 to-emerald-400/30 rounded-2xl blur-2xl -z-10"></div>
            <div className="absolute inset-[1px] bg-gradient-to-br from-slate-800/98 via-gray-800/98 to-slate-900/98 rounded-2xl"></div>
            
            <CardContent className="p-20 relative z-10">
              <div className="flex justify-center mb-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/40 to-purple-500/40 rounded-3xl blur-3xl"></div>
                  <div className="relative p-6 rounded-3xl bg-gradient-to-r from-slate-800/60 to-gray-800/60 backdrop-blur-xl shadow-2xl border border-white/10">
                    <Rocket className="w-12 h-12 text-cyan-400" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-6xl md:text-7xl font-bold mb-10 text-white bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent font-orbitron">
                Enter Too Savvy
              </h3>
              <p className="text-white/80 text-2xl mb-16 max-w-4xl mx-auto leading-relaxed">
                Your sovereign portal to Web3 awaits. Connect your wallet to join the next generation of the internet where you own your digital identity, content, and financial future.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20">
                <Button className="relative bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:from-cyan-500 hover:via-blue-600 hover:to-purple-700 text-white font-semibold shadow-2xl hover:shadow-3xl hover:shadow-cyan-400/30 transform hover:scale-105 transition-all duration-300 rounded-2xl px-12 py-6 text-xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  <Shield className="w-6 h-6 mr-3" />
                  Connect Wallet
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-cyan-400/60 text-cyan-400 hover:bg-cyan-400/20 hover:border-cyan-400 hover:text-cyan-300 shadow-xl hover:shadow-2xl hover:shadow-cyan-400/25 transform hover:scale-105 transition-all duration-300 rounded-2xl px-12 py-6 text-xl backdrop-blur-xl"
                >
                  <BookOpen className="w-6 h-6 mr-3" />
                  Learn About Web3 Security
                </Button>
              </div>

              {/* Enhanced Feature Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="group text-center">
                  <div className="relative bg-gradient-to-r from-emerald-400/15 to-cyan-400/15 backdrop-blur-xl rounded-3xl p-8 border border-emerald-400/30 hover:border-emerald-400/50 transition-all duration-500 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 to-cyan-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative p-5 rounded-3xl bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 mb-6 w-fit mx-auto group-hover:scale-110 transition-transform duration-500 shadow-xl border border-white/10">
                      <Zap className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h4 className="font-semibold text-2xl text-white mb-3 group-hover:text-emerald-100 transition-colors duration-300">
                      Zero Platform Fees
                    </h4>
                    <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300 text-lg">
                      Direct creator-to-audience economy
                    </p>
                  </div>
                </div>
                
                <div className="group text-center">
                  <div className="relative bg-gradient-to-r from-purple-400/15 to-pink-500/15 backdrop-blur-xl rounded-3xl p-8 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 to-pink-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative p-5 rounded-3xl bg-gradient-to-r from-purple-400/20 to-pink-500/20 mb-6 w-fit mx-auto group-hover:scale-110 transition-transform duration-500 shadow-xl border border-white/10">
                      <Shield className="w-8 h-8 text-purple-400" />
                    </div>
                    <h4 className="font-semibold text-2xl text-white mb-3 group-hover:text-purple-100 transition-colors duration-300">
                      Self-Sovereign Identity
                    </h4>
                    <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300 text-lg">
                      You own your data and content
                    </p>
                  </div>
                </div>
                
                <div className="group text-center">
                  <div className="relative bg-gradient-to-r from-cyan-400/15 to-blue-500/15 backdrop-blur-xl rounded-3xl p-8 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative p-5 rounded-3xl bg-gradient-to-r from-cyan-400/20 to-blue-500/20 mb-6 w-fit mx-auto group-hover:scale-110 transition-transform duration-500 shadow-xl border border-white/10">
                      <Eye className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h4 className="font-semibold text-2xl text-white mb-3 group-hover:text-cyan-100 transition-colors duration-300">
                      Transparent Economics
                    </h4>
                    <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300 text-lg">
                      All transactions on-chain
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
