
import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { NeuraSocialHub } from '@/components/social/NeuraSocialHub';
import { AnimatedGradient } from '@/components/ui/animated-gradient';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Share2, 
  Users, 
  TrendingUp, 
  Coins, 
  MessageCircle,
  Heart,
  BarChart3,
  Globe,
  Zap,
  Shield,
  Network,
  Sparkles
} from 'lucide-react';

const platformStats = [
  { label: "Posts Shared", value: "1M+", icon: Share2 },
  { label: "Active Users", value: "250K+", icon: Users },
  { label: "Engagement Rate", value: "85%", icon: TrendingUp },
  { label: "Tokens Earned", value: "$5M+", icon: Coins }
];

const features = [
  {
    icon: Globe,
    title: "Cross-Platform Publishing",
    description: "Share content simultaneously across Twitter, Instagram, TikTok, LinkedIn, and Web3 platforms"
  },
  {
    icon: Coins,
    title: "Social Tokens",
    description: "Earn tokens for engagement and convert your social capital into real value"
  },
  {
    icon: Network,
    title: "Web2-Web3 Bridge",
    description: "Seamlessly connect traditional social media with decentralized platforms"
  },
  {
    icon: Shield,
    title: "Privacy Control",
    description: "Granular privacy settings and data ownership for all your social interactions"
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Comprehensive insights across all platforms with unified metrics"
  },
  {
    icon: Sparkles,
    title: "AI-Powered Optimization",
    description: "Smart content scheduling and audience targeting for maximum reach"
  }
];

const integrations = [
  { name: "Twitter", users: "330M", status: "Connected" },
  { name: "Instagram", users: "2B", status: "Connected" },
  { name: "TikTok", users: "1B", status: "Connected" },
  { name: "LinkedIn", users: "900M", status: "Connected" },
  { name: "Lens Protocol", users: "100K", status: "Connected" },
  { name: "Farcaster", users: "50K", status: "Connected" }
];

const NeuraSocial = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black text-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <AnimatedGradient />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-pink-500/20 text-pink-300 border-pink-500/30">
                Social Hub
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                NeuraSocial
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                The ultimate social media management platform that bridges Web2 and Web3. 
                Share content everywhere, earn tokens, and build your community across all platforms.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700">
                  <Share2 className="w-5 h-5 mr-2" />
                  Start Sharing
                </Button>
                <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                  <Users className="w-5 h-5 mr-2" />
                  Join Community
                </Button>
              </div>
            </div>
            
            {/* Platform Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {platformStats.map((stat, index) => (
                <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="w-8 h-8 mx-auto mb-3 text-pink-400" />
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
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
        
        {/* Platform Features */}
        <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Powerful Social Features</h2>
              <p className="text-xl text-gray-300">
                Everything you need to manage and monetize your social presence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border-gray-700 hover:border-pink-500/50 transition-all duration-300 hover-scale">
                  <CardContent className="p-6">
                    <div className="p-3 rounded-xl bg-pink-500/20 w-fit mb-4">
                      <feature.icon className="w-6 h-6 text-pink-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Platform Integrations */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Platform Integrations</h2>
              <p className="text-xl text-gray-300">
                Connect with all major social platforms in one dashboard
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {integrations.map((platform, index) => (
                <Card key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{platform.name}</h3>
                        <p className="text-sm text-gray-400">{platform.users} users</p>
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={platform.status === 'Connected' 
                          ? "bg-green-500/20 text-green-300" 
                          : "bg-gray-500/20 text-gray-300"
                        }
                      >
                        {platform.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <MessageCircle className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-gray-300">Auto-post</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-red-400" />
                        <span className="text-sm text-gray-300">Engagement</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-gray-300">Analytics</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Token Economy */}
        <section className="py-20 bg-gradient-to-b from-gray-900/50 to-black/50">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 border-gray-700">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-bold mb-4 text-white">
                      Social Token Economy
                    </h3>
                    <p className="text-gray-300 mb-6">
                      Earn SOCIAL tokens for every like, share, comment, and engagement. 
                      Convert your social influence into real value and unlock premium features.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-300">1 Like = 1 SOCIAL</span>
                        <span className="text-green-400">$0.01</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">1 Share = 10 SOCIAL</span>
                        <span className="text-green-400">$0.10</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">1 Comment = 5 SOCIAL</span>
                        <span className="text-green-400">$0.05</span>
                      </div>
                    </div>
                    <Button className="bg-pink-600 hover:bg-pink-700">
                      <Coins className="w-5 h-5 mr-2" />
                      View Token Wallet
                    </Button>
                  </div>
                  <div className="bg-black/30 rounded-lg p-6 border border-gray-700">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-pink-400 mb-2">12,547</div>
                      <div className="text-gray-300">SOCIAL Tokens Earned</div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">This Week</span>
                        <span className="text-green-400">+2,340 SOCIAL</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Engagement Rate</span>
                        <span className="text-blue-400">+15%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Value (USD)</span>
                        <span className="text-green-400">$125.47</span>
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
};

export default NeuraSocial;
