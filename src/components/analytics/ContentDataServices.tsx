import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, ScatterChart, Scatter } from 'recharts';
import { 
  FileText, Video, Music, Image, Heart, Eye, Share2, 
  TrendingUp, Clock, Users, Target, Zap, BarChart3,
  Download, Filter, Search
} from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/animated-counter';

interface ContentItem {
  id: string;
  title: string;
  type: 'video' | 'image' | 'music' | 'text' | 'nft';
  publishDate: string;
  views: number;
  likes: number;
  shares: number;
  comments: number;
  engagement: number;
  revenue: number;
  platform: string[];
  tags: string[];
  performance: 'excellent' | 'good' | 'average' | 'poor';
}

interface ContentTrend {
  date: string;
  videos: number;
  images: number;
  music: number;
  text: number;
  nfts: number;
}

export const ContentDataServices: React.FC = () => {
  const [contentItems] = useState<ContentItem[]>([
    {
      id: '1',
      title: 'Web3 Creator Economy Explained',
      type: 'video',
      publishDate: '2024-01-15',
      views: 25400,
      likes: 1200,
      shares: 340,
      comments: 180,
      engagement: 6.8,
      revenue: 850,
      platform: ['YouTube', 'Twitter'],
      tags: ['web3', 'education', 'crypto'],
      performance: 'excellent'
    },
    {
      id: '2',
      title: 'Digital Art Collection #001',
      type: 'nft',
      publishDate: '2024-01-12',
      views: 15600,
      likes: 890,
      shares: 220,
      comments: 95,
      engagement: 7.7,
      revenue: 2400,
      platform: ['OpenSea', 'Twitter'],
      tags: ['art', 'nft', 'digital'],
      performance: 'excellent'
    },
    {
      id: '3',
      title: 'Ambient Crypto Beats',
      type: 'music',
      publishDate: '2024-01-10',
      views: 8900,
      likes: 450,
      shares: 120,
      comments: 55,
      engagement: 7.0,
      revenue: 320,
      platform: ['Spotify', 'SoundCloud'],
      tags: ['music', 'ambient', 'crypto'],
      performance: 'good'
    },
    {
      id: '4',
      title: 'Building Your Creator Brand',
      type: 'text',
      publishDate: '2024-01-08',
      views: 12200,
      likes: 580,
      shares: 160,
      comments: 85,
      engagement: 6.8,
      revenue: 180,
      platform: ['Medium', 'LinkedIn'],
      tags: ['branding', 'tips', 'creator'],
      performance: 'good'
    }
  ]);

  const contentTrends: ContentTrend[] = [
    { date: '2024-01-01', videos: 12, images: 25, music: 8, text: 15, nfts: 5 },
    { date: '2024-01-02', videos: 15, images: 30, music: 10, text: 18, nfts: 7 },
    { date: '2024-01-03', videos: 18, images: 28, music: 12, text: 20, nfts: 6 },
    { date: '2024-01-04', videos: 20, images: 32, music: 14, text: 22, nfts: 8 },
    { date: '2024-01-05', videos: 22, images: 35, music: 16, text: 25, nfts: 10 },
    { date: '2024-01-06', videos: 25, images: 38, music: 18, text: 28, nfts: 12 },
    { date: '2024-01-07', videos: 28, images: 40, music: 20, text: 30, nfts: 15 }
  ];

  const platformPerformance = [
    { platform: 'YouTube', views: 156000, engagement: 7.2, revenue: 3200 },
    { platform: 'Twitter', views: 89000, engagement: 5.8, revenue: 1800 },
    { platform: 'Instagram', views: 76000, engagement: 8.1, revenue: 2100 },
    { platform: 'TikTok', views: 234000, engagement: 9.3, revenue: 4500 },
    { platform: 'LinkedIn', views: 45000, engagement: 6.5, revenue: 900 }
  ];

  const contentTypeDistribution = [
    { name: 'Video', value: 35, color: 'hsl(var(--web3-purple))' },
    { name: 'Images', value: 28, color: 'hsl(var(--web3-cyan))' },
    { name: 'Text Posts', value: 20, color: 'hsl(var(--web3-green))' },
    { name: 'Music', value: 10, color: 'hsl(var(--web3-accent))' },
    { name: 'NFTs', value: 7, color: 'hsl(var(--web3-gold))' }
  ];

  const engagementData = contentItems.map(item => ({
    views: item.views,
    engagement: item.engagement,
    revenue: item.revenue,
    title: item.title.substring(0, 20) + '...'
  }));

  const totalViews = contentItems.reduce((sum, item) => sum + item.views, 0);
  const totalRevenue = contentItems.reduce((sum, item) => sum + item.revenue, 0);
  const avgEngagement = contentItems.reduce((sum, item) => sum + item.engagement, 0) / contentItems.length;
  const topPerformer = contentItems.reduce((prev, current) => (prev.engagement > current.engagement) ? prev : current);

  const getContentIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="w-4 h-4" />;
      case 'image': return <Image className="w-4 h-4" />;
      case 'music': return <Music className="w-4 h-4" />;
      case 'text': return <FileText className="w-4 h-4" />;
      case 'nft': return <Target className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const getPerformanceBadge = (performance: string) => {
    switch (performance) {
      case 'excellent': return <Badge className="bg-web3-green text-white">Excellent</Badge>;
      case 'good': return <Badge variant="secondary">Good</Badge>;
      case 'average': return <Badge variant="outline">Average</Badge>;
      case 'poor': return <Badge variant="destructive">Poor</Badge>;
      default: return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Views</p>
                <p className="text-2xl font-bold">
                  <AnimatedCounter end={totalViews / 1000} suffix="K" decimals={0} />
                </p>
                <p className="text-xs text-web3-green flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +15.3% vs last week
                </p>
              </div>
              <Eye className="h-8 w-8 text-web3-cyan" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Content Revenue</p>
                <p className="text-2xl font-bold">
                  <AnimatedCounter end={totalRevenue} prefix="$" />
                </p>
                <p className="text-xs text-web3-green flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +22.1% vs last week
                </p>
              </div>
              <BarChart3 className="h-8 w-8 text-web3-green" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg Engagement</p>
                <p className="text-2xl font-bold">
                  <AnimatedCounter end={avgEngagement} suffix="%" decimals={1} />
                </p>
                <p className="text-xs text-web3-green flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +8.7% vs last week
                </p>
              </div>
              <Heart className="h-8 w-8 text-web3-purple" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Top Performer</p>
                <p className="text-lg font-bold truncate">{topPerformer.title.substring(0, 15)}...</p>
                <p className="text-xs text-web3-accent">
                  {topPerformer.engagement}% engagement
                </p>
              </div>
              <Zap className="h-8 w-8 text-web3-accent" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Dashboard */}
      <Tabs defaultValue="overview" className="space-y-4">
        <div className="flex items-center justify-between">
          <TabsList className="grid w-full grid-cols-5 max-w-2xl">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="content">Content Library</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
            <TabsTrigger value="platforms">Platforms</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
          </TabsList>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Overview */}
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Content Performance Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={contentTrends}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'hsl(var(--background))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px'
                        }}
                      />
                      <Line type="monotone" dataKey="videos" stroke="hsl(var(--web3-purple))" strokeWidth={2} />
                      <Line type="monotone" dataKey="images" stroke="hsl(var(--web3-cyan))" strokeWidth={2} />
                      <Line type="monotone" dataKey="nfts" stroke="hsl(var(--web3-gold))" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Content Type Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={contentTypeDistribution}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {contentTypeDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Engagement vs Revenue Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart data={engagementData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      type="number" 
                      dataKey="views" 
                      name="Views"
                      stroke="hsl(var(--muted-foreground))" 
                      fontSize={12} 
                    />
                    <YAxis 
                      type="number" 
                      dataKey="engagement" 
                      name="Engagement %"
                      stroke="hsl(var(--muted-foreground))" 
                      fontSize={12} 
                    />
                    <Tooltip 
                      cursor={{ strokeDasharray: '3 3' }}
                      contentStyle={{
                        backgroundColor: 'hsl(var(--background))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                    <Scatter dataKey="engagement" fill="hsl(var(--web3-purple))" />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Content Library */}
        <TabsContent value="content" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Content Library</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contentItems.map((item) => (
                  <div key={item.id} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        {getContentIcon(item.type)}
                        <div>
                          <h3 className="font-semibold">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            Published on {item.publishDate}
                          </p>
                        </div>
                      </div>
                      {getPerformanceBadge(item.performance)}
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-3">
                      <div>
                        <p className="text-sm text-muted-foreground">Views</p>
                        <p className="font-medium">{item.views.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Likes</p>
                        <p className="font-medium">{item.likes.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Shares</p>
                        <p className="font-medium">{item.shares}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Comments</p>
                        <p className="font-medium">{item.comments}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Engagement</p>
                        <p className="font-medium text-web3-green">{item.engagement}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Revenue</p>
                        <p className="font-medium">${item.revenue}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm text-muted-foreground">Platforms:</span>
                      {item.platform.map((platform) => (
                        <Badge key={platform} variant="outline" className="text-xs">
                          {platform}
                        </Badge>
                      ))}
                      <span className="text-sm text-muted-foreground ml-4">Tags:</span>
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Platform Performance */}
        <TabsContent value="platforms" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Platform Performance Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={platformPerformance}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="platform" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'hsl(var(--background))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                    <Bar dataKey="views" fill="hsl(var(--web3-cyan))" radius={[2, 2, 0, 0]} />
                    <Bar dataKey="revenue" fill="hsl(var(--web3-green))" radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* AI Insights */}
        <TabsContent value="insights" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-web3-accent" />
                  Content Optimization Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-web3-green/10 border border-web3-green/20 rounded-lg">
                  <h4 className="font-medium text-web3-green mb-1">Video Content</h4>
                  <p className="text-sm text-muted-foreground">
                    Your videos perform 2.3x better on weekends. Schedule more video content Friday-Sunday.
                  </p>
                </div>
                <div className="p-3 bg-web3-purple/10 border border-web3-purple/20 rounded-lg">
                  <h4 className="font-medium text-web3-purple mb-1">NFT Collections</h4>
                  <p className="text-sm text-muted-foreground">
                    Art-focused NFTs generate 45% higher engagement than utility NFTs.
                  </p>
                </div>
                <div className="p-3 bg-web3-cyan/10 border border-web3-cyan/20 rounded-lg">
                  <h4 className="font-medium text-web3-cyan mb-1">Cross-Platform</h4>
                  <p className="text-sm text-muted-foreground">
                    Content shared across 3+ platforms sees 67% more total reach.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Trending Topics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                    <span className="font-medium">#Web3Education</span>
                    <Badge className="bg-web3-green text-white">Hot</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                    <span className="font-medium">#CreatorEconomy</span>
                    <Badge variant="secondary">Rising</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                    <span className="font-medium">#NFTArt</span>
                    <Badge variant="outline">Stable</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
                    <span className="font-medium">#DeFi</span>
                    <Badge variant="secondary">Growing</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};