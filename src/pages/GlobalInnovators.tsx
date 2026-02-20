import React from "react";
import { CosmicPageLayout } from "@/components/layout/CosmicPageLayout";
import { GlobalInnovatorsHub } from "@/components/innovators/GlobalInnovatorsHub";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Rocket, Users, Globe, Coins, Shield, Network,
  TrendingUp, Lightbulb, Handshake, Target
} from "lucide-react";

const platformStats = [
  { label: "Active Projects", value: "15,000+", icon: Rocket },
  { label: "Global Innovators", value: "50,000+", icon: Users },
  { label: "Countries", value: "120+", icon: Globe },
  { label: "Funding Raised", value: "$250M+", icon: Coins },
];

const features = [
  { icon: Network, title: "Collaborative Workspace", description: "Real-time collaboration tools for distributed teams working on Web3 projects" },
  { icon: Shield, title: "NFT-Based Ownership", description: "Transparent ownership tracking and IP rights management through blockchain" },
  { icon: TrendingUp, title: "DAO Governance", description: "Democratic decision-making with token-weighted voting mechanisms" },
  { icon: Coins, title: "Decentralized Funding", description: "Access to DeFi lending, crowdfunding, and VC connections" },
  { icon: Lightbulb, title: "Innovation Labs", description: "Incubation programs and mentorship for breakthrough technologies" },
  { icon: Handshake, title: "Partnership Network", description: "Connect with like-minded innovators and potential collaborators worldwide" },
];

const successStories = [
  { name: "EcoChain Protocol", category: "Sustainability", funding: "$5.2M", description: "Carbon credit marketplace revolutionizing environmental impact tracking" },
  { name: "NeuraLink DAO", category: "AI/ML", funding: "$12.8M", description: "Decentralized AI training network with community governance" },
  { name: "MetaCities", category: "Virtual Reality", funding: "$8.5M", description: "Virtual urban planning platform for sustainable city development" },
];

export default function GlobalInnovators() {
  return (
    <CosmicPageLayout>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">
              Global Innovation Network
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
              Global Innovators
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
              Join the world's largest decentralized innovation network. Collaborate on breakthrough
              projects, access funding, and build the future together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <Rocket className="w-5 h-5 mr-2" /> Launch Project
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Users className="w-5 h-5 mr-2" /> Join Network
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {platformStats.map((stat, i) => (
              <div key={i} className="glass-card gradient-border-animated rounded-2xl p-6 text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-purple-400" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hub */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <GlobalInnovatorsHub />
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Innovators Choose Our Platform</h2>
            <p className="text-xl text-white/60">Comprehensive tools and resources for next-generation project development</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="glass-card gradient-border-animated rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="p-3 rounded-xl bg-purple-500/20 w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-xl text-white/60">Projects that started here and changed the world</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, i) => (
              <div key={i} className="glass-card gradient-border-animated rounded-2xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">{story.category}</Badge>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-400">{story.funding}</div>
                    <div className="text-xs text-white/50">Raised</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{story.name}</h3>
                <p className="text-white/60 text-sm">{story.description}</p>
                <Button variant="ghost" className="mt-4 text-purple-400 hover:text-purple-300 p-0">
                  <Target className="w-4 h-4 mr-2" /> View Case Study
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </CosmicPageLayout>
  );
}
