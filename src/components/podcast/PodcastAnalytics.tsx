
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { BarChart3, Users, TrendingUp, Globe, Wallet, Play, Download, Clock } from 'lucide-react';

export const PodcastAnalytics: React.FC = () => {
  const topEpisodes = [
    { title: "The Future of DeFi", listens: 15420, engagement: 87, duration: "45:32" },
    { title: "NFT Market Analysis", listens: 12350, engagement: 82, duration: "38:15" },
    { title: "Web3 Gaming Deep Dive", listens: 11890, engagement: 79, duration: "52:18" },
    { title: "Crypto Regulation Update", listens: 10240, engagement: 75, duration: "41:22" }
  ];

  const demographics = [
    { country: "United States", percentage: 35, listens: 43250 },
    { country: "United Kingdom", percentage: 18, listens: 22400 },
    { country: "Canada", percentage: 12, listens: 14880 },
    { country: "Germany", percentage: 8, listens: 9920 },
    { country: "Australia", percentage: 7, listens: 8680 }
  ];

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="grok-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Listens</p>
                <p className="text-2xl font-bold text-foreground">284.7K</p>
                <p className="text-xs text-emerald-400">+18.5% this month</p>
              </div>
              <Play className="w-8 h-8 text-primary/60" />
            </div>
          </CardContent>
        </Card>

        <Card className="grok-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Downloads</p>
                <p className="text-2xl font-bold text-foreground">156.2K</p>
                <p className="text-xs text-emerald-400">+22.1% this month</p>
              </div>
              <Download className="w-8 h-8 text-primary/60" />
            </div>
          </CardContent>
        </Card>

        <Card className="grok-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg. Listen Time</p>
                <p className="text-2xl font-bold text-foreground">28:45</p>
                <p className="text-xs text-emerald-400">+3.2% this month</p>
              </div>
              <Clock className="w-8 h-8 text-primary/60" />
            </div>
          </CardContent>
        </Card>

        <Card className="grok-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Completion Rate</p>
                <p className="text-2xl font-bold text-foreground">74.3%</p>
                <p className="text-xs text-emerald-400">+5.7% this month</p>
              </div>
              <BarChart3 className="w-8 h-8 text-primary/60" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Subscriber Analytics */}
        <Card className="grok-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Subscriber Analytics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-card/20 rounded-lg">
                <p className="text-lg font-bold text-foreground">24,892</p>
                <p className="text-xs text-muted-foreground">Total Subscribers</p>
              </div>
              <div className="text-center p-3 bg-card/20 rounded-lg">
                <p className="text-lg font-bold text-foreground">+1,247</p>
                <p className="text-xs text-muted-foreground">New This Month</p>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-foreground mb-3">Token Ownership Patterns</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">NFT Holders</span>
                  <div className="flex items-center gap-2">
                    <Progress value={68} className="w-20 h-2" />
                    <span className="text-sm font-medium">3,247</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Token Holders (100+)</span>
                  <div className="flex items-center gap-2">
                    <Progress value={45} className="w-20 h-2" />
                    <span className="text-sm font-medium">2,156</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Premium Subscribers</span>
                  <div className="flex items-center gap-2">
                    <Progress value={32} className="w-20 h-2" />
                    <span className="text-sm font-medium">1,534</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-foreground mb-3">Retention & Engagement</h4>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <p className="text-lg font-bold text-foreground">89.2%</p>
                  <p className="text-xs text-muted-foreground">1-Week Retention</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground">67.8%</p>
                  <p className="text-xs text-muted-foreground">1-Month Retention</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-foreground">12.4%</p>
                  <p className="text-xs text-muted-foreground">Conversion Rate</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Geographic Analytics */}
        <Card className="grok-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Geographic Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {demographics.map((demo) => (
                <div key={demo.country} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-foreground">{demo.country}</span>
                      <span className="text-muted-foreground">{demo.percentage}%</span>
                    </div>
                    <Progress value={demo.percentage} className="h-2" />
                  </div>
                  <div className="ml-4 text-right">
                    <p className="text-sm font-medium text-foreground">{demo.listens.toLocaleString()}</p>
                    <p className="text-xs text-muted-foreground">listens</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-border/50">
              <h4 className="font-medium text-foreground mb-3">Platform Distribution</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex justify-between items-center p-2 bg-card/20 rounded">
                  <span className="text-sm text-muted-foreground">Spotify</span>
                  <span className="text-sm font-medium text-foreground">42%</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-card/20 rounded">
                  <span className="text-sm text-muted-foreground">Apple Podcasts</span>
                  <span className="text-sm font-medium text-foreground">28%</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-card/20 rounded">
                  <span className="text-sm text-muted-foreground">Web Player</span>
                  <span className="text-sm font-medium text-foreground">18%</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-card/20 rounded">
                  <span className="text-sm text-muted-foreground">Other</span>
                  <span className="text-sm font-medium text-foreground">12%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Episodes Performance */}
      <Card className="grok-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Top Episodes Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topEpisodes.map((episode, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-border/50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline">#{index + 1}</Badge>
                    <h4 className="font-medium text-foreground">{episode.title}</h4>
                  </div>
                  <div className="flex items-center gap-6 mt-2 text-sm text-muted-foreground">
                    <span>{episode.listens.toLocaleString()} listens</span>
                    <span>{episode.duration}</span>
                    <div className="flex items-center gap-2">
                      <span>Engagement:</span>
                      <Progress value={episode.engagement} className="w-16 h-2" />
                      <span>{episode.engagement}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Revenue Analytics */}
      <Card className="grok-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wallet className="w-5 h-5" />
            Revenue Analytics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-foreground mb-3">Token Earnings Breakdown</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Subscriptions</span>
                  <span className="text-sm font-medium text-foreground">Ξ 18.4 (65%)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Token Gates</span>
                  <span className="text-sm font-medium text-foreground">Ξ 6.2 (22%)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Tips</span>
                  <span className="text-sm font-medium text-foreground">Ξ 2.8 (10%)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Ads</span>
                  <span className="text-sm font-medium text-foreground">Ξ 0.9 (3%)</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-foreground mb-3">Monthly Trends</h4>
              <div className="space-y-3">
                <div className="text-center p-3 bg-card/20 rounded-lg">
                  <p className="text-lg font-bold text-foreground">Ξ 28.3</p>
                  <p className="text-xs text-muted-foreground">This Month</p>
                  <p className="text-xs text-emerald-400">+15.2%</p>
                </div>
                <div className="text-center p-3 bg-card/20 rounded-lg">
                  <p className="text-lg font-bold text-foreground">$47,892</p>
                  <p className="text-xs text-muted-foreground">USD Equivalent</p>
                  <p className="text-xs text-emerald-400">+12.8%</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-foreground mb-3">Conversion Metrics</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Free to Premium</span>
                  <span className="text-sm font-medium text-foreground">8.4%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Listener to Subscriber</span>
                  <span className="text-sm font-medium text-foreground">12.1%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Token Gate Access</span>
                  <span className="text-sm font-medium text-foreground">15.7%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Tipping Rate</span>
                  <span className="text-sm font-medium text-foreground">3.2%</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
