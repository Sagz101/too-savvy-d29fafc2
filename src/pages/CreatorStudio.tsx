import React from "react";
import { CosmicPageLayout } from "@/components/layout/CosmicPageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { usePageLoading } from "@/hooks/useLoading";
import { CreatorStudioSkeleton } from "@/components/sections/CreatorStudioSkeleton";
import {
  Video, Users, Radio, Music, Store, MessageSquare,
  Rocket, TrendingUp, Shield, Zap, ArrowRight, Play,
  PlusCircle, BarChart3
} from "lucide-react";

const creatorModules = [
  { id: "video-studio", title: "Video Studio", description: "Create, upload, and monetize video content with NFT minting and AR visualization", icon: Video, color: "from-purple-500 to-pink-500", features: ["NFT Video Minting", "AR Overlays", "Live Streaming", "Token Gating"], link: "/video-studio", stats: "2.1M+ videos created" },
  { id: "global-innovators", title: "Global Innovators", description: "Collaborate on projects with DAO governance and decentralized funding", icon: Users, color: "from-blue-500 to-cyan-500", features: ["Project Collaboration", "DAO Governance", "NFT Ownership", "Funding Tools"], link: "/global-innovators", stats: "15K+ projects launched" },
  { id: "podcast-studio", title: "Podcast Studio", description: "Record, edit, and distribute podcasts across platforms with Web3 monetization", icon: Radio, color: "from-green-500 to-emerald-500", features: ["Multi-track Recording", "AI Enhancement", "Cross-platform Distribution", "NFT Episodes"], link: "/podcast-studio", stats: "500K+ episodes" },
  { id: "music-creation", title: "Music Creation", description: "Compose, produce, and release music with blockchain-based royalties", icon: Music, color: "from-orange-500 to-red-500", features: ["DAW Integration", "AI Composition", "Smart Royalties", "Music NFTs"], link: "/music-creation", stats: "100K+ tracks minted" },
  { id: "commerce-studio", title: "Commerce Studio", description: "Build and manage your Web3 e-commerce store with crypto payments", icon: Store, color: "from-indigo-500 to-purple-500", features: ["Store Builder", "Crypto Payments", "Inventory Management", "Analytics"], link: "/commerce-studio", stats: "$50M+ in sales" },
  { id: "neura-social", title: "NeuraSocial", description: "Cross-platform content sharing with Web2-Web3 bridge functionality", icon: MessageSquare, color: "from-pink-500 to-rose-500", features: ["Cross-platform Sharing", "Social Tokens", "Community Building", "Engagement Rewards"], link: "/neura-social", stats: "1M+ posts shared" },
];

const platformFeatures = [
  { icon: Shield, title: "CertiK Audited", description: "Security-first platform with comprehensive smart contract audits" },
  { icon: Zap, title: "Multi-Chain Ready", description: "Deploy across Ethereum, Polygon, Optimism, and Arbitrum" },
  { icon: TrendingUp, title: "Zero Platform Fees", description: "Keep 100% of your earnings with no platform commission" },
  { icon: Rocket, title: "AI Copilot", description: "Get intelligent assistance for content creation and optimization" },
];

export default function CreatorStudio() {
  const isLoading = usePageLoading(1200);

  if (isLoading) return <CreatorStudioSkeleton />;

  return (
    <CosmicPageLayout>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Creator Studio
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
              The complete Web3 creator platform. Build, monetize, and scale your creative projects
              with decentralized tools and zero platform fees.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <PlusCircle className="w-5 h-5 mr-2" /> Start Creating
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Play className="w-5 h-5 mr-2" /> Watch Demo
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {platformFeatures.map((feature, i) => (
              <div key={i} className="glass-card gradient-border-animated rounded-2xl p-5 text-center">
                <feature.icon className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-white/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Creator Modules</h2>
            <p className="text-xl text-white/60">Choose your creative path and start building with industry-leading tools</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {creatorModules.map((module) => (
              <div key={module.id} className="glass-card gradient-border-animated rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${module.color}`}>
                    <module.icon className="w-8 h-8 text-white" />
                  </div>
                  <Badge className="bg-white/10 text-white border-white/20">{module.stats}</Badge>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{module.title}</h3>
                <p className="text-white/60 mb-4">{module.description}</p>
                <div className="space-y-2 mb-6">
                  {module.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-sm text-white/50">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>
                <Button asChild className="w-full bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 border border-white/20">
                  <Link to={module.link}>
                    Launch {module.title}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="glass-card gradient-border-animated rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">Comprehensive Analytics</h3>
                <p className="text-white/60 mb-6">
                  Track your performance across all modules with detailed insights,
                  earnings reports, and audience analytics.
                </p>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/studio">
                    <BarChart3 className="w-5 h-5 mr-2" /> View Dashboard
                  </Link>
                </Button>
              </div>
              <div className="glass-card rounded-xl p-6 border border-white/10">
                <div className="space-y-4">
                  {[["Total Earnings", "$24,567", "text-green-400"], ["Active Projects", "12", "text-blue-400"], ["Total Views", "1.2M", "text-purple-400"]].map(([label, val, cls]) => (
                    <div key={label} className="flex justify-between items-center">
                      <span className="text-white/60">{label}</span>
                      <span className={`text-xl font-bold ${cls}`}>{val}</span>
                    </div>
                  ))}
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full w-3/4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CosmicPageLayout>
  );
}
