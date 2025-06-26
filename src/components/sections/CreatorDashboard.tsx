
import React from 'react';
import { Button } from '@/components/ui/button';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, Users, TrendingUp, DollarSign, BarChart3, Video, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CreatorDashboard = () => {
  return (
    <section id="creator-dashboard" className="py-20 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Creator Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Your command center for Web3 content creation. Track performance, manage your community, and monetize your creativity with powerful analytics and tools.
          </p>
          
          {/* CTA Buttons with Connect Wallet */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" asChild className="px-8 py-3">
              <Link to="/video-studio">
                <Video className="w-5 h-5 mr-2" />
                Get Started
              </Link>
            </Button>
            <WalletConnectButton />
            <Button size="lg" variant="outline" asChild className="px-8 py-3">
              <Link to="/video-integration">
                <BarChart3 className="w-5 h-5 mr-2" />
                Developer Resources
              </Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Main Dashboard Preview */}
          <div className="lg:col-span-2">
            <Card className="h-full bg-gradient-to-br from-card via-card/90 to-card/80 border-primary/20">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Play className="w-5 h-5 text-primary" />
                    Content Performance
                  </CardTitle>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/20">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                    Live
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                    <div className="text-2xl font-bold text-primary">2.4M</div>
                    <div className="text-sm text-muted-foreground">Total Views</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20">
                    <div className="text-2xl font-bold text-purple-400">12.8K</div>
                    <div className="text-sm text-muted-foreground">Subscribers</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20">
                    <div className="text-2xl font-bold text-cyan-400">347</div>
                    <div className="text-sm text-muted-foreground">NFTs Sold</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20">
                    <div className="text-2xl font-bold text-green-400">$8.2K</div>
                    <div className="text-sm text-muted-foreground">Revenue</div>
                  </div>
                </div>

                {/* Chart Placeholder */}
                <div className="h-48 bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg border border-border/50 flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="w-12 h-12 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive Analytics Chart</p>
                    <p className="text-sm text-muted-foreground/70">Real-time performance tracking</p>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    Recent Activity
                  </h4>
                  <div className="space-y-2">
                    {[
                      { action: "New subscriber from @crypto_artist", time: "2 min ago", type: "subscriber" },
                      { action: "NFT 'Digital Sunset #42' sold for 0.5 ETH", time: "1 hour ago", type: "sale" },
                      { action: "Video 'Web3 Tutorial' reached 10K views", time: "3 hours ago", type: "milestone" }
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/20 border border-border/30">
                        <span className="text-sm">{activity.action}</span>
                        <span className="text-xs text-muted-foreground">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="bg-gradient-to-br from-card via-card/90 to-card/80 border-primary/20">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline" asChild>
                  <Link to="/video-studio">
                    <Video className="w-4 h-4 mr-2" />
                    Create Content
                  </Link>
                </Button>
                <Button className="w-full justify-start" variant="outline" asChild>
                  <Link to="/video-marketplace">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Mint NFT
                  </Link>
                </Button>
                <Button className="w-full justify-start" variant="outline" asChild>
                  <Link to="/messaging">
                    <Users className="w-4 h-4 mr-2" />
                    Community Chat
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Community Stats */}
            <Card className="bg-gradient-to-br from-card via-card/90 to-card/80 border-primary/20">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Community
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Active Members</span>
                  <span className="font-semibold">2,847</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Token Holders</span>
                  <span className="font-semibold">1,234</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Engagement Rate</span>
                  <span className="font-semibold text-green-400">+24%</span>
                </div>
                <div className="pt-2">
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full w-3/4 transition-all duration-500"></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">Community Growth</p>
                </div>
              </CardContent>
            </Card>

            {/* Earnings */}
            <Card className="bg-gradient-to-br from-card via-card/90 to-card/80 border-primary/20">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-400" />
                  Earnings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">$8,247</div>
                  <div className="text-sm text-muted-foreground">This Month</div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">NFT Sales</span>
                    <span className="text-sm font-medium">$5,840</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Subscriptions</span>
                    <span className="text-sm font-medium">$1,680</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Tips & Donations</span>
                    <span className="text-sm font-medium">$727</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
