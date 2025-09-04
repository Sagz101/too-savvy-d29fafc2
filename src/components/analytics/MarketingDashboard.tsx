import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { 
  TrendingUp, Target, Users, DollarSign, Eye, Heart, Share2, 
  Calendar, Filter, Download, RefreshCw, Zap, BarChart3
} from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/animated-counter';

interface CampaignData {
  id: string;
  name: string;
  platform: string;
  budget: number;
  spent: number;
  impressions: number;
  clicks: number;
  conversions: number;
  ctr: number;
  roas: number;
  status: 'active' | 'paused' | 'completed';
}

interface MediaPlanData {
  platform: string;
  plannedBudget: number;
  allocatedBudget: number;
  expectedReach: number;
  timeline: string;
  contentType: string;
}

export const MarketingDashboard: React.FC = () => {
  const [campaigns, setCampaigns] = useState<CampaignData[]>([
    {
      id: '1',
      name: 'NFT Collection Launch',
      platform: 'Twitter',
      budget: 5000,
      spent: 3200,
      impressions: 125000,
      clicks: 2500,
      conversions: 145,
      ctr: 2.0,
      roas: 3.2,
      status: 'active'
    },
    {
      id: '2', 
      name: 'Creator Onboarding',
      platform: 'LinkedIn',
      budget: 3000,
      spent: 2100,
      impressions: 85000,
      clicks: 1700,
      conversions: 89,
      ctr: 2.0,
      roas: 2.8,
      status: 'active'
    }
  ]);

  const [mediaPlanning, setMediaPlanning] = useState<MediaPlanData[]>([
    {
      platform: 'Twitter/X',
      plannedBudget: 8000,
      allocatedBudget: 6500,
      expectedReach: 250000,
      timeline: 'Q1 2024',
      contentType: 'Video + Carousel'
    },
    {
      platform: 'LinkedIn',
      plannedBudget: 5000,
      allocatedBudget: 4200,
      expectedReach: 120000,
      timeline: 'Q1 2024',
      contentType: 'Sponsored Articles'
    },
    {
      platform: 'TikTok',
      plannedBudget: 12000,
      allocatedBudget: 0,
      expectedReach: 500000,
      timeline: 'Q2 2024',
      contentType: 'Short Videos'
    }
  ]);

  const performanceData = [
    { date: '2024-01-01', impressions: 15000, clicks: 300, conversions: 18, spend: 450 },
    { date: '2024-01-02', impressions: 18000, clicks: 380, conversions: 24, spend: 520 },
    { date: '2024-01-03', impressions: 22000, clicks: 440, conversions: 31, spend: 580 },
    { date: '2024-01-04', impressions: 19000, clicks: 420, conversions: 28, spend: 610 },
    { date: '2024-01-05', impressions: 25000, clicks: 510, conversions: 35, spend: 680 },
    { date: '2024-01-06', impressions: 28000, clicks: 580, conversions: 42, spend: 740 },
    { date: '2024-01-07', impressions: 32000, clicks: 650, conversions: 48, spend: 800 }
  ];

  const channelPerformance = [
    { channel: 'Social Media', spend: 15000, conversions: 345, roas: 3.2 },
    { channel: 'Content Marketing', spend: 8500, conversions: 189, roas: 2.8 },
    { channel: 'Influencer Partnerships', spend: 12000, conversions: 267, roas: 4.1 },
    { channel: 'Paid Search', spend: 6200, conversions: 124, roas: 2.3 }
  ];

  const audienceInsights = [
    { segment: 'Crypto Enthusiasts', size: 45000, engagement: 8.2, value: 'High' },
    { segment: 'Digital Artists', size: 32000, engagement: 9.1, value: 'Very High' },
    { segment: 'Tech Innovators', size: 28000, engagement: 7.5, value: 'High' },
    { segment: 'Content Creators', size: 67000, engagement: 6.8, value: 'Medium' }
  ];

  const totalSpend = campaigns.reduce((sum, campaign) => sum + campaign.spent, 0);
  const totalConversions = campaigns.reduce((sum, campaign) => sum + campaign.conversions, 0);
  const avgROAS = campaigns.reduce((sum, campaign) => sum + campaign.roas, 0) / campaigns.length;
  const totalImpressions = campaigns.reduce((sum, campaign) => sum + campaign.impressions, 0);

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Ad Spend</p>
                <p className="text-2xl font-bold">
                  <AnimatedCounter end={totalSpend} prefix="$" />
                </p>
                <p className="text-xs text-web3-green flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +12.5% vs last month
                </p>
              </div>
              <DollarSign className="h-8 w-8 text-web3-purple" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Reach</p>
                <p className="text-2xl font-bold">
                  <AnimatedCounter end={totalImpressions / 1000000} suffix="M" decimals={1} />
                </p>
                <p className="text-xs text-web3-green flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +18.3% vs last month
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
                <p className="text-sm font-medium text-muted-foreground">Conversions</p>
                <p className="text-2xl font-bold">
                  <AnimatedCounter end={totalConversions} />
                </p>
                <p className="text-xs text-web3-green flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +24.7% vs last month
                </p>
              </div>
              <Target className="h-8 w-8 text-web3-green" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg ROAS</p>
                <p className="text-2xl font-bold">
                  <AnimatedCounter end={avgROAS} suffix="x" decimals={1} />
                </p>
                <p className="text-xs text-web3-green flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +8.2% vs last month
                </p>
              </div>
              <BarChart3 className="h-8 w-8 text-web3-accent" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Dashboard */}
      <Tabs defaultValue="campaigns" className="space-y-4">
        <div className="flex items-center justify-between">
          <TabsList className="grid w-full grid-cols-5 max-w-2xl">
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="planning">Media Planning</TabsTrigger>
            <TabsTrigger value="optimization">Optimization</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
            <TabsTrigger value="reporting">Reporting</TabsTrigger>
          </TabsList>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
            <Button size="sm">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
          </div>
        </div>

        {/* Campaign Management */}
        <TabsContent value="campaigns" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Active Campaigns</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {campaigns.map((campaign) => (
                  <div key={campaign.id} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold">{campaign.name}</h3>
                        <Badge variant={campaign.status === 'active' ? 'default' : 'secondary'}>
                          {campaign.status}
                        </Badge>
                        <Badge variant="outline">{campaign.platform}</Badge>
                      </div>
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Spend</p>
                        <p className="font-medium">${campaign.spent.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">
                          of ${campaign.budget.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Impressions</p>
                        <p className="font-medium">{campaign.impressions.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Clicks</p>
                        <p className="font-medium">{campaign.clicks.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">CTR</p>
                        <p className="font-medium">{campaign.ctr}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Conversions</p>
                        <p className="font-medium">{campaign.conversions}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">ROAS</p>
                        <p className="font-medium text-web3-green">{campaign.roas}x</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Performance Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Campaign Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
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
                    <Line type="monotone" dataKey="impressions" stroke="hsl(var(--web3-cyan))" strokeWidth={2} />
                    <Line type="monotone" dataKey="clicks" stroke="hsl(var(--web3-purple))" strokeWidth={2} />
                    <Line type="monotone" dataKey="conversions" stroke="hsl(var(--web3-green))" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Media Planning */}
        <TabsContent value="planning" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Media Planning Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mediaPlanning.map((plan, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">{plan.platform}</h3>
                      <Badge variant="outline">{plan.timeline}</Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Planned Budget</p>
                        <p className="font-medium">${plan.plannedBudget.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Allocated</p>
                        <p className="font-medium">${plan.allocatedBudget.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Expected Reach</p>
                        <p className="font-medium">{plan.expectedReach.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Content Type</p>
                        <p className="font-medium">{plan.contentType}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Utilization</p>
                        <p className="font-medium">
                          {((plan.allocatedBudget / plan.plannedBudget) * 100).toFixed(0)}%
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-3 bg-muted rounded-full h-2">
                      <div 
                        className="bg-web3-purple h-2 rounded-full"
                        style={{ width: `${(plan.allocatedBudget / plan.plannedBudget) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Optimization */}
        <TabsContent value="optimization" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-web3-accent" />
                  AI Optimization Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 bg-web3-green/10 border border-web3-green/20 rounded-lg">
                  <h4 className="font-medium text-web3-green mb-1">Budget Reallocation</h4>
                  <p className="text-sm text-muted-foreground">
                    Move 15% budget from LinkedIn to Twitter for 23% better ROAS
                  </p>
                </div>
                <div className="p-3 bg-web3-purple/10 border border-web3-purple/20 rounded-lg">
                  <h4 className="font-medium text-web3-purple mb-1">Audience Targeting</h4>
                  <p className="text-sm text-muted-foreground">
                    Target "Digital Artists" segment for 34% higher engagement rates
                  </p>
                </div>
                <div className="p-3 bg-web3-cyan/10 border border-web3-cyan/20 rounded-lg">
                  <h4 className="font-medium text-web3-cyan mb-1">Creative Optimization</h4>
                  <p className="text-sm text-muted-foreground">
                    Video content performs 2.3x better than static images
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Channel Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={channelPerformance}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="channel" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: 'hsl(var(--background))',
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '8px'
                        }}
                      />
                      <Bar dataKey="roas" fill="hsl(var(--web3-purple))" radius={[2, 2, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Insights */}
        <TabsContent value="insights" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Audience Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {audienceInsights.map((audience, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">{audience.segment}</h3>
                      <Badge 
                        variant={audience.value === 'Very High' ? 'default' : audience.value === 'High' ? 'secondary' : 'outline'}
                      >
                        {audience.value} Value
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Audience Size</p>
                        <p className="font-medium">{audience.size.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Engagement Rate</p>
                        <p className="font-medium">{audience.engagement}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Value Score</p>
                        <p className="font-medium">{audience.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Reporting */}
        <TabsContent value="reporting" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Automated Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Weekly Performance Report</h3>
                    <p className="text-sm text-muted-foreground">Automated every Monday at 9 AM</p>
                  </div>
                  <Badge variant="default">Active</Badge>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Monthly ROI Summary</h3>
                    <p className="text-sm text-muted-foreground">Sent on the 1st of each month</p>
                  </div>
                  <Badge variant="default">Active</Badge>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Campaign Alerts</h3>
                    <p className="text-sm text-muted-foreground">Real-time notifications for performance changes</p>
                  </div>
                  <Badge variant="default">Active</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};