import React from 'react';
import { CosmicPageLayout } from '@/components/layout/CosmicPageLayout';
import { NeuraSocialHub } from '@/components/social/NeuraSocialHub';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Share2, Users, TrendingUp, Coins, MessageCircle,
  Heart, BarChart3, Globe, Zap, Shield, Network, Sparkles
} from 'lucide-react';

const platformStats = [
  { label: "Posts Shared", value: "1M+", icon: Share2 },
  { label: "Active Users", value: "250K+", icon: Users },
  { label: "Engagement Rate", value: "85%", icon: TrendingUp },
  { label: "Tokens Earned", value: "$5M+", icon: Coins },
];

const features = [
  { icon: Globe, title: "Cross-Platform Publishing", description: "Share content simultaneously across Twitter, Instagram, TikTok, LinkedIn, and Web3 platforms" },
  { icon: Coins, title: "Social Tokens", description: "Earn tokens for engagement and convert your social capital into real value" },
  { icon: Network, title: "Web2-Web3 Bridge", description: "Seamlessly connect traditional social media with decentralized platforms" },
  { icon: Shield, title: "Privacy Control", description: "Granular privacy settings and data ownership for all your social interactions" },
  { icon: BarChart3, title: "Analytics Dashboard", description: "Comprehensive insights across all platforms with unified metrics" },
  { icon: Sparkles, title: "AI-Powered Optimization", description: "Smart content scheduling and audience targeting for maximum reach" },
];

const integrations = [
  { name: "Twitter", users: "330M", status: "Connected" },
  { name: "Instagram", users: "2B", status: "Connected" },
  { name: "TikTok", users: "1B", status: "Connected" },
  { name: "LinkedIn", users: "900M", status: "Connected" },
  { name: "Lens Protocol", users: "100K", status: "Connected" },
  { name: "Farcaster", users: "50K", status: "Connected" },
];

const NeuraSocial = () => {
  return (
    <CosmicPageLayout>
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-pink-500/20 text-pink-300 border-pink-500/30">Social Hub</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              NeuraSocial
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
              The ultimate social media management platform that bridges Web2 and Web3.
              Share content everywhere, earn tokens, and build your community across all platforms.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700">
                <Share2 className="w-5 h-5 mr-2" /> Start Sharing
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Users className="w-5 h-5 mr-2" /> Join Community
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {platformStats.map((stat, i) => (
              <Card key={i} className="glass-card border-white/10 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-pink-400" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Hub */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <NeuraSocialHub />
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Social Features</h2>
            <p className="text-xl text-white/60">Everything you need to manage and monetize your social presence</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="glass-card gradient-border-animated rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="p-3 rounded-xl bg-pink-500/20 w-fit mb-4">
                  <feature.icon className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Platform Integrations</h2>
            <p className="text-xl text-white/60">Connect with all major social platforms in one dashboard</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrations.map((platform, i) => (
              <div key={i} className="glass-card gradient-border-animated rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{platform.name}</h3>
                    <p className="text-sm text-white/50">{platform.users} users</p>
                  </div>
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">{platform.status}</Badge>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2"><MessageCircle className="w-4 h-4 text-blue-400" /><span className="text-sm text-white/60">Auto-post</span></div>
                  <div className="flex items-center gap-2"><Heart className="w-4 h-4 text-red-400" /><span className="text-sm text-white/60">Engagement</span></div>
                  <div className="flex items-center gap-2"><BarChart3 className="w-4 h-4 text-purple-400" /><span className="text-sm text-white/60">Analytics</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Token Economy */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="glass-card gradient-border-animated rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">Social Token Economy</h3>
                <p className="text-white/60 mb-6">
                  Earn SOCIAL tokens for every like, share, comment, and engagement.
                  Convert your social influence into real value.
                </p>
                <div className="space-y-3 mb-6">
                  {[["1 Like = 1 SOCIAL", "$0.01"], ["1 Share = 10 SOCIAL", "$0.10"], ["1 Comment = 5 SOCIAL", "$0.05"]].map(([label, val]) => (
                    <div key={label} className="flex justify-between">
                      <span className="text-white/70">{label}</span>
                      <span className="text-green-400">{val}</span>
                    </div>
                  ))}
                </div>
                <Button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700">
                  <Coins className="w-5 h-5 mr-2" /> View Token Wallet
                </Button>
              </div>
              <div className="glass-card rounded-xl p-6 border border-white/10">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-pink-400 mb-2">12,547</div>
                  <div className="text-white/60">SOCIAL Tokens Earned</div>
                </div>
                <div className="space-y-4">
                  {[["This Week", "+2,340 SOCIAL", "text-green-400"], ["Engagement Rate", "+15%", "text-blue-400"], ["Value (USD)", "$125.47", "text-green-400"]].map(([label, val, cls]) => (
                    <div key={label} className="flex justify-between items-center">
                      <span className="text-white/60">{label}</span>
                      <span className={cls}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CosmicPageLayout>
  );
};

export default NeuraSocial;
