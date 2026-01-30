import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnimatedGradient } from "@/components/ui/animated-gradient";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { usePageLoading } from "@/hooks/useLoading";
import { CreatorStudioSkeleton } from "@/components/sections/CreatorStudioSkeleton";
import { 
  Video, 
  Users, 
  Radio, 
  Music, 
  Store, 
  MessageSquare,
  Rocket,
  TrendingUp,
  Shield,
  Zap,
  ArrowRight,
  Play,
  PlusCircle,
  BarChart3
} from "lucide-react";

const creatorModules = [
  {
    id: "video-studio",
    title: "Video Studio",
    description: "Create, upload, and monetize video content with NFT minting and AR visualization",
    icon: Video,
    color: "from-purple-500 to-pink-500",
    features: ["NFT Video Minting", "AR Overlays", "Live Streaming", "Token Gating"],
    link: "/video-studio",
    stats: "2.1M+ videos created"
  },
  {
    id: "global-innovators",
    title: "Global Innovators",
    description: "Collaborate on projects with DAO governance and decentralized funding",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
    features: ["Project Collaboration", "DAO Governance", "NFT Ownership", "Funding Tools"],
    link: "/global-innovators",
    stats: "15K+ projects launched"
  },
  {
    id: "podcast-studio",
    title: "Podcast Studio",
    description: "Record, edit, and distribute podcasts across platforms with Web3 monetization",
    icon: Radio,
    color: "from-green-500 to-emerald-500",
    features: ["Multi-track Recording", "AI Enhancement", "Cross-platform Distribution", "NFT Episodes"],
    link: "/podcast-studio",
    stats: "500K+ episodes"
  },
  {
    id: "music-creation",
    title: "Music Creation",
    description: "Compose, produce, and release music with blockchain-based royalties",
    icon: Music,
    color: "from-orange-500 to-red-500",
    features: ["DAW Integration", "AI Composition", "Smart Royalties", "Music NFTs"],
    link: "/music-creation",
    stats: "100K+ tracks minted"
  },
  {
    id: "commerce-studio",
    title: "Commerce Studio",
    description: "Build and manage your Web3 e-commerce store with crypto payments",
    icon: Store,
    color: "from-indigo-500 to-purple-500",
    features: ["Store Builder", "Crypto Payments", "Inventory Management", "Analytics"],
    link: "/commerce-studio",
    stats: "$50M+ in sales"
  },
  {
    id: "neura-social",
    title: "NeuraSocial",
    description: "Cross-platform content sharing with Web2-Web3 bridge functionality",
    icon: MessageSquare,
    color: "from-pink-500 to-rose-500",
    features: ["Cross-platform Sharing", "Social Tokens", "Community Building", "Engagement Rewards"],
    link: "/neura-social",
    stats: "1M+ posts shared"
  }
];

const platformFeatures = [
  {
    icon: Shield,
    title: "CertiK Audited",
    description: "Security-first platform with comprehensive smart contract audits"
  },
  {
    icon: Zap,
    title: "Multi-Chain Ready",
    description: "Deploy across Ethereum, Polygon, Optimism, and Arbitrum"
  },
  {
    icon: TrendingUp,
    title: "Zero Platform Fees",
    description: "Keep 100% of your earnings with no platform commission"
  },
  {
    icon: Rocket,
    title: "AI Copilot",
    description: "Get intelligent assistance for content creation and optimization"
  }
];

export default function CreatorStudio() {
  const isLoading = usePageLoading(1200);

  if (isLoading) {
    return <CreatorStudioSkeleton />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black text-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <AnimatedGradient />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Creator Studio
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                The complete Web3 creator platform. Build, monetize, and scale your creative projects 
                with decentralized tools and zero platform fees.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  <PlusCircle className="w-5 h-5 mr-2" />
                  Start Creating
                </Button>
                <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
            </div>
            
            {/* Platform Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {platformFeatures.map((feature, index) => (
                <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover-scale">
                  <CardContent className="p-4 text-center">
                    <feature.icon className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                    <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Creator Modules */}
        <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Creator Modules</h2>
              <p className="text-xl text-gray-300">
                Choose your creative path and start building with industry-leading tools
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {creatorModules.map((module) => (
                <Card key={module.id} className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700 hover:border-gray-600 transition-all duration-300 hover-scale group">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${module.color} bg-opacity-20`}>
                        <module.icon className="w-8 h-8 text-white" />
                      </div>
                      <Badge variant="secondary" className="bg-white/10 text-white">
                        {module.stats}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                      {module.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">{module.description}</p>
                    
                    <div className="space-y-2">
                      {module.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-400">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <Button asChild className="w-full mt-6 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 group">
                      <Link to={module.link}>
                        Launch {module.title}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Analytics Dashboard Preview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border-gray-700">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-bold mb-4 text-white">
                      Comprehensive Analytics
                    </h3>
                    <p className="text-gray-300 mb-6">
                      Track your performance across all modules with detailed insights, 
                      earnings reports, and audience analytics.
                    </p>
                    <Button asChild className="bg-blue-600 hover:bg-blue-700">
                      <Link to="/studio">
                        <BarChart3 className="w-5 h-5 mr-2" />
                        View Dashboard
                      </Link>
                    </Button>
                  </div>
                  <div className="bg-black/30 rounded-lg p-6 border border-gray-700">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Total Earnings</span>
                        <span className="text-2xl font-bold text-green-400">$24,567</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Active Projects</span>
                        <span className="text-xl font-semibold text-blue-400">12</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Total Views</span>
                        <span className="text-xl font-semibold text-purple-400">1.2M</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
