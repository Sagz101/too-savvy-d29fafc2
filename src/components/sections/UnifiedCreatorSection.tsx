
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
  ChevronRight
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
      borderColor: "border-cyan-400/30"
    },
    {
      icon: <Mic className="w-8 h-8 text-purple-400" />,
      title: "Podcast & Music Studios",
      description: "Launch audio projects with NFT integration and Web3 monetization",
      gradient: "from-purple-400/20 to-pink-500/20",
      hoverGradient: "from-purple-400/30 to-pink-500/30",
      borderColor: "border-purple-400/30"
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-emerald-400" />,
      title: "Storefront Builder",
      description: "Sell physical and digital goods with verifiable authenticity and smart contracts",
      gradient: "from-emerald-400/20 to-teal-500/20",
      hoverGradient: "from-emerald-400/30 to-teal-500/30",
      borderColor: "border-emerald-400/30"
    },
    {
      icon: <FileText className="w-8 h-8 text-orange-400" />,
      title: "Threaditor",
      description: "Decentralized blogging and professional reporting hub with fact-checking",
      gradient: "from-orange-400/20 to-red-500/20",
      hoverGradient: "from-orange-400/30 to-red-500/30",
      borderColor: "border-orange-400/30"
    },
    {
      icon: <Share2 className="w-8 h-8 text-blue-400" />,
      title: "NeuraSocial",
      description: "Web3-native content sharing with cross-platform reach and token incentives",
      gradient: "from-blue-400/20 to-indigo-500/20",
      hoverGradient: "from-blue-400/30 to-indigo-500/30",
      borderColor: "border-blue-400/30"
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-400" />,
      title: "Global Innovators",
      description: "Collaborative, tokenized project creation at scale with DAO governance",
      gradient: "from-yellow-400/20 to-orange-500/20",
      hoverGradient: "from-yellow-400/30 to-orange-500/30",
      borderColor: "border-yellow-400/30"
    }
  ];

  const ecosystemStats = [
    { 
      number: "12,847", 
      label: "active monthly creators", 
      icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
      change: "+15.2%"
    },
    { 
      number: "421,071", 
      label: "NFTs minted", 
      icon: <Layers className="w-6 h-6 text-cyan-400" />,
      change: "+8.7%"
    },
    { 
      number: "~0.002", 
      label: "average cost per transaction", 
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      change: "-5.1%"
    },
    { 
      number: "3,000+", 
      label: "validator nodes", 
      icon: <Globe className="w-6 h-6 text-purple-400" />,
      change: "+12.3%"
    }
  ];

  const ecosystemFeatures = [
    { 
      label: "Carbon-neutral", 
      icon: <Leaf className="w-5 h-5 text-emerald-400" />,
      description: "Eco-friendly blockchain infrastructure"
    },
    { 
      label: "Multi-chain compatible", 
      icon: <Globe className="w-5 h-5 text-blue-400" />,
      description: "Works across major networks"
    },
    { 
      label: "Creator-first infrastructure", 
      icon: <Users className="w-5 h-5 text-purple-400" />,
      description: "Built specifically for creators"
    }
  ];

  const resources = [
    {
      icon: <BookOpen className="w-6 h-6 text-cyan-400" />,
      title: "Learning Center",
      description: "Step-by-step guides and video tutorials to master Web3 creation",
      cta: "Start Learning",
      gradient: "from-cyan-400/10 to-blue-500/10"
    },
    {
      icon: <Palette className="w-6 h-6 text-purple-400" />,
      title: "Creator Toolkit",
      description: "Templates, token strategies, and proven pricing models",
      cta: "Get Toolkit",
      gradient: "from-purple-400/10 to-pink-500/10"
    },
    {
      icon: <HelpCircle className="w-6 h-6 text-emerald-400" />,
      title: "FAQs & Community Help",
      description: "Peer answers and verified walkthroughs from experts",
      cta: "Get Help",
      gradient: "from-emerald-400/10 to-teal-500/10"
    },
    {
      icon: <Calendar className="w-6 h-6 text-orange-400" />,
      title: "Workshops & AMAs",
      description: "Live sessions hosted by creators and Web3 experts",
      cta: "Join Events",
      gradient: "from-orange-400/10 to-red-500/10"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Enhanced Background with Multiple Layers */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-400/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-cyan-400/8 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500/8 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-400/5 rounded-full filter blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        {/* Hero Section with Enhanced Typography */}
        <div className="text-center mb-24 relative" ref={ref}>
          <div className={`transition-all duration-1000 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Decorative Elements */}
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400/10 to-purple-500/10 border border-cyan-400/20 backdrop-blur-sm">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-medium">Platform Overview</span>
                <Sparkles className="w-5 h-5 text-purple-400" />
              </div>
            </div>

            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 font-orbitron">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent animate-hero-glow block">
                Create. Own. Thrive.
              </span>
            </h2>
            
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-2xl font-semibold text-white/90 mb-4">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Comprehensive platform overview
                </span>
              </p>
              <p className="text-white/70 text-xl leading-relaxed">
                From specialized modules to ecosystem governance—your complete toolkit for Web3 creation, ownership, and growth
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['Decentralized', 'Creator-Owned', 'Multi-Chain', 'Zero Fees'].map((feature, index) => (
                <Badge 
                  key={index}
                  className="bg-gradient-to-r from-slate-800/60 to-gray-800/60 text-white border border-cyan-400/30 px-4 py-2 text-base backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300"
                >
                  <Star className="w-4 h-4 mr-2 text-cyan-400" />
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Modules Section with Enhanced Cards */}
        <div className={`mb-28 transition-all duration-1000 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
          <div className="text-center mb-20">
            <div className="flex justify-center mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-r from-cyan-400/20 to-purple-500/20 backdrop-blur-sm shadow-lg">
                <Layers className="w-8 h-8 text-cyan-400" />
              </div>
            </div>
            <h3 className="text-5xl md:text-6xl font-bold mb-6 text-white bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent font-orbitron">
              Modules
            </h3>
            <p className="text-white/80 text-xl max-w-4xl mx-auto leading-relaxed mb-8">
              Unlock specialized tools for every step of your creative journey. Modular, composable, and fully Web3-native.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <Card 
                key={index}
                className={`group bg-gradient-to-br from-slate-800/90 via-gray-800/90 to-slate-900/90 border ${module.borderColor} backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-cyan-400/10 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden relative`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 relative z-10">
                  {/* Background Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${module.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl`}></div>
                  
                  <div className="relative z-10">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${module.gradient} backdrop-blur-sm shadow-lg mb-6 w-fit group-hover:scale-110 transition-transform duration-300 border border-white/10`}>
                      {module.icon}
                    </div>
                    <h4 className="font-bold text-2xl mb-4 text-white group-hover:text-cyan-100 transition-colors duration-300">
                      {module.title}
                    </h4>
                    <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed text-lg mb-6">
                      {module.description}
                    </p>
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <Button 
                        variant="outline" 
                        className="border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 w-full"
                      >
                        Explore Module <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Ecosystem Section */}
        <div className={`mb-28 transition-all duration-1000 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
          <Card className="bg-gradient-to-br from-slate-800/95 via-gray-800/95 to-slate-900/95 border border-purple-500/30 backdrop-blur-xl shadow-2xl overflow-hidden relative">
            {/* Enhanced Glowing Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-emerald-400/20 rounded-2xl blur-sm -z-10"></div>
            <div className="absolute inset-[1px] bg-gradient-to-br from-slate-800/95 via-gray-800/95 to-slate-900/95 rounded-2xl"></div>
            
            <CardContent className="p-12 relative z-10">
              <div className="text-center mb-16">
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-400/20 to-emerald-400/20 backdrop-blur-sm shadow-lg border border-white/10">
                    <Globe className="w-10 h-10 text-purple-400" />
                  </div>
                </div>
                <h3 className="text-5xl md:text-6xl font-bold mb-6 text-white bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent font-orbitron">
                  Ecosystem
                </h3>
                <p className="text-white/80 text-xl max-w-4xl mx-auto leading-relaxed mb-8">
                  A self-sustaining creator economy, decentralized across 3,000+ validator nodes, supporting scalable, eco-efficient participation.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-emerald-400 mx-auto rounded-full"></div>
              </div>

              {/* Enhanced Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {ecosystemStats.map((stat, index) => (
                  <div key={index} className="group">
                    <div className="bg-gradient-to-br from-slate-800/60 to-gray-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:scale-105 text-center">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 rounded-full bg-gradient-to-r from-slate-700/80 to-gray-700/80 backdrop-blur-sm shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {stat.icon}
                        </div>
                      </div>
                      <div className="text-4xl font-bold text-white font-orbitron mb-2 group-hover:text-cyan-100 transition-colors duration-300">
                        {stat.number}
                      </div>
                      <div className="text-white/70 text-base group-hover:text-white/90 transition-colors duration-300 mb-2">
                        {stat.label}
                      </div>
                      <div className="text-emerald-400 text-sm font-semibold">
                        {stat.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {ecosystemFeatures.map((feature, index) => (
                  <div key={index} className="bg-gradient-to-r from-slate-800/40 to-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center mb-3">
                      {feature.icon}
                      <span className="ml-3 text-white font-semibold text-lg">{feature.label}</span>
                    </div>
                    <p className="text-white/60 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <Button className="bg-gradient-to-r from-purple-500 via-blue-500 to-emerald-500 hover:from-purple-600 hover:via-blue-600 hover:to-emerald-600 text-white font-semibold shadow-xl hover:shadow-2xl hover:shadow-purple-400/25 transform hover:scale-105 transition-all duration-300 rounded-xl px-10 py-4 text-lg">
                  <Globe className="w-5 h-5 mr-2" />
                  Join the Ecosystem
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Resources Section */}
        <div className={`mb-28 transition-all duration-1000 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '600ms' }}>
          <div className="text-center mb-20">
            <div className="flex justify-center mb-6">
              <div className="p-3 rounded-2xl bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 backdrop-blur-sm shadow-lg">
                <BookOpen className="w-8 h-8 text-emerald-400" />
              </div>
            </div>
            <h3 className="text-5xl md:text-6xl font-bold mb-6 text-white bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-orbitron">
              Resources
            </h3>
            <p className="text-white/80 text-xl max-w-4xl mx-auto leading-relaxed mb-8">
              Get the most out of Too Savvy with curated support for every level of user—from beginner to protocol contributor.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {resources.map((resource, index) => (
              <Card 
                key={index}
                className="group bg-gradient-to-br from-slate-800/70 via-gray-800/70 to-slate-900/70 border border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-300 cursor-pointer hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-400/10 overflow-hidden"
              >
                <CardContent className="p-8 text-center relative overflow-hidden">
                  {/* Background Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${resource.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 mb-6 w-fit mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg border border-white/10">
                      {resource.icon}
                    </div>
                    <h4 className="font-bold text-xl mb-4 text-white group-hover:text-emerald-100 transition-colors duration-300">
                      {resource.title}
                    </h4>
                    <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300 mb-6 leading-relaxed">
                      {resource.description}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-emerald-400/40 text-emerald-400 hover:bg-emerald-400/10 hover:border-emerald-400 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
                    >
                      {resource.cta} <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Documentation & Important Resources */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {/* Documentation */}
            <Card className="group bg-gradient-to-br from-slate-800/90 via-gray-800/90 to-slate-900/90 border border-cyan-400/20 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-cyan-400/10 transition-all duration-500 hover:scale-105 overflow-hidden">
              <CardContent className="p-8 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-2xl bg-gradient-to-r from-cyan-400/20 to-blue-500/20 mr-4 shadow-lg border border-white/10">
                      <BookOpen className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h4 className="font-bold text-2xl text-white">Documentation</h4>
                  </div>
                  <p className="text-white/70 mb-6 leading-relaxed">
                    Comprehensive, developer-grade docs for integrating, building, or scaling on Too Savvy.
                  </p>
                  <ul className="space-y-3 mb-8 text-white/60">
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" />
                      <span>Smart contract reference (ERC-721M, ERC-1155, ERC-2981)</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" />
                      <span>SDKs and API guides for content, wallets, storefronts</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" />
                      <span>IPFS, Chainlink, Livepeer integrations</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" />
                      <span>Governance structures and DAO voting schemas</span>
                    </li>
                  </ul>
                  <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full">
                    Access Documentation <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Whitepaper */}
            <Card className="group bg-gradient-to-br from-slate-800/90 via-gray-800/90 to-slate-900/90 border border-purple-500/20 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:scale-105 overflow-hidden">
              <CardContent className="p-8 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-400/20 to-pink-500/20 mr-4 shadow-lg border border-white/10">
                      <FileText className="w-6 h-6 text-purple-400" />
                    </div>
                    <h4 className="font-bold text-2xl text-white">Whitepaper</h4>
                  </div>
                  <p className="text-white/70 mb-8 leading-relaxed">
                    The Too Savvy Whitepaper outlines our foundational thesis: reclaiming creator autonomy through programmable ownership, decentralized infrastructure, and sustainable monetization.
                  </p>
                  <Button className="bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download Whitepaper (PDF)
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Token Dashboard */}
            <Card className="group bg-gradient-to-br from-slate-800/90 via-gray-800/90 to-slate-900/90 border border-emerald-500/20 backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 hover:scale-105 overflow-hidden">
              <CardContent className="p-8 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-2xl bg-gradient-to-r from-emerald-400/20 to-teal-500/20 mr-4 shadow-lg border border-white/10">
                      <Zap className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h4 className="font-bold text-2xl text-white">Token</h4>
                  </div>
                  <p className="text-white/70 mb-6 leading-relaxed">
                    Ethereum is the native utility and governance token of the Too Savvy network.
                  </p>
                  <ul className="space-y-3 mb-8 text-white/60">
                    <li className="flex items-center">
                      <Zap className="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" />
                      <span><strong className="text-white/80">Utility:</strong> Pay for minting, access premium tools</span>
                    </li>
                    <li className="flex items-center">
                      <Users className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                      <span><strong className="text-white/80">Governance:</strong> Vote on protocol upgrades</span>
                    </li>
                    <li className="flex items-center">
                      <TrendingUp className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" />
                      <span><strong className="text-white/80">Incentives:</strong> Earn through engagement</span>
                    </li>
                  </ul>
                  <Button className="bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full">
                    View Token Dashboard <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className={`text-center transition-all duration-1000 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '800ms' }}>
          <Card className="relative bg-gradient-to-br from-slate-800/95 via-gray-800/95 to-slate-900/95 border border-cyan-400/30 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Enhanced Glowing Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-emerald-400/20 rounded-2xl blur-sm -z-10"></div>
            <div className="absolute inset-[1px] bg-gradient-to-br from-slate-800/95 via-gray-800/95 to-slate-900/95 rounded-2xl"></div>
            
            <CardContent className="p-16 relative z-10">
              <div className="flex justify-center mb-8">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-400/20 to-purple-500/20 backdrop-blur-sm shadow-lg border border-white/10">
                  <Sparkles className="w-10 h-10 text-cyan-400" />
                </div>
              </div>
              
              <h3 className="text-5xl md:text-6xl font-bold mb-8 text-white bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 bg-clip-text text-transparent font-orbitron">
                Enter Too Savvy
              </h3>
              <p className="text-white/80 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
                Your sovereign portal to Web3 awaits. Connect your wallet to join the next generation of the internet where you own your digital identity, content, and financial future.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Button className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:from-cyan-500 hover:via-blue-600 hover:to-purple-700 text-white font-semibold shadow-xl hover:shadow-2xl hover:shadow-cyan-400/25 transform hover:scale-105 transition-all duration-300 rounded-xl px-10 py-4 text-lg">
                  <Shield className="w-5 h-5 mr-2" />
                  Connect Wallet
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 hover:text-cyan-300 shadow-lg hover:shadow-xl hover:shadow-cyan-400/20 transform hover:scale-105 transition-all duration-300 rounded-xl px-10 py-4 text-lg backdrop-blur-sm"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Learn About Web3 Security
                </Button>
              </div>

              {/* Enhanced Feature Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group text-center">
                  <div className="bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 backdrop-blur-sm rounded-2xl p-6 border border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-300 hover:scale-105">
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 mb-4 w-fit mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg border border-white/10">
                      <Zap className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h4 className="font-semibold text-lg text-white mb-2 group-hover:text-emerald-100 transition-colors duration-300">
                      Zero Platform Fees
                    </h4>
                    <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">
                      Direct creator-to-audience economy
                    </p>
                  </div>
                </div>
                
                <div className="group text-center">
                  <div className="bg-gradient-to-r from-purple-400/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-400/20 to-pink-500/20 mb-4 w-fit mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg border border-white/10">
                      <Shield className="w-6 h-6 text-purple-400" />
                    </div>
                    <h4 className="font-semibold text-lg text-white mb-2 group-hover:text-purple-100 transition-colors duration-300">
                      Self-Sovereign Identity
                    </h4>
                    <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">
                      You own your data and content
                    </p>
                  </div>
                </div>
                
                <div className="group text-center">
                  <div className="bg-gradient-to-r from-cyan-400/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-400/20 to-blue-500/20 mb-4 w-fit mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg border border-white/10">
                      <Globe className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h4 className="font-semibold text-lg text-white mb-2 group-hover:text-cyan-100 transition-colors duration-300">
                      Transparent Economics
                    </h4>
                    <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">
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
