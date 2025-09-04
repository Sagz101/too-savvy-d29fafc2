import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Switch } from '@/components/ui/switch';
import { 
  Calendar as CalendarIcon, Target, DollarSign, Users, TrendingUp,
  Plus, Edit, Trash2, Copy, Share2, Download, Filter,
  Video, Image, FileText, Music, Zap, BarChart3, Clock
} from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface MediaPlan {
  id: string;
  title: string;
  description: string;
  platform: string;
  contentType: 'video' | 'image' | 'text' | 'music' | 'mixed';
  budget: number;
  spent: number;
  startDate: string;
  endDate: string;
  targetAudience: string;
  expectedReach: number;
  actualReach: number;
  status: 'draft' | 'scheduled' | 'active' | 'completed' | 'paused';
  kpis: {
    impressions: number;
    engagement: number;
    conversions: number;
    roas: number;
  };
  tags: string[];
}

interface ContentCalendar {
  id: string;
  date: string;
  time: string;
  title: string;
  platform: string[];
  contentType: string;
  status: 'scheduled' | 'published' | 'failed';
  engagement?: number;
}

export const MediaPlanningHub: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [isCreatingPlan, setIsCreatingPlan] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const [mediaPlans] = useState<MediaPlan[]>([
    {
      id: '1',
      title: 'Q1 Creator Acquisition Campaign',
      description: 'Multi-platform campaign to onboard new creators to the platform',
      platform: 'Multi-Platform',
      contentType: 'mixed',
      budget: 25000,
      spent: 18500,
      startDate: '2024-01-01',
      endDate: '2024-03-31',
      targetAudience: 'Digital Artists & Content Creators',
      expectedReach: 500000,
      actualReach: 425000,
      status: 'active',
      kpis: {
        impressions: 1250000,
        engagement: 7.8,
        conversions: 2350,
        roas: 3.2
      },
      tags: ['creator-acquisition', 'Q1', 'multi-platform']
    },
    {
      id: '2',
      title: 'NFT Marketplace Promotion',
      description: 'Targeted campaign to promote NFT trading features',
      platform: 'Twitter',
      contentType: 'video',
      budget: 15000,
      spent: 12800,
      startDate: '2024-01-15',
      endDate: '2024-02-15',
      targetAudience: 'NFT Collectors & Crypto Enthusiasts',
      expectedReach: 200000,
      actualReach: 245000,
      status: 'completed',
      kpis: {
        impressions: 680000,
        engagement: 9.2,
        conversions: 1280,
        roas: 4.1
      },
      tags: ['nft', 'trading', 'twitter']
    },
    {
      id: '3',
      title: 'Web3 Education Series',
      description: 'Educational content campaign about Web3 and creator economy',
      platform: 'YouTube',
      contentType: 'video',
      budget: 8000,
      spent: 0,
      startDate: '2024-02-01',
      endDate: '2024-04-01',
      targetAudience: 'Web3 Newcomers',
      expectedReach: 150000,
      actualReach: 0,
      status: 'scheduled',
      kpis: {
        impressions: 0,
        engagement: 0,
        conversions: 0,
        roas: 0
      },
      tags: ['education', 'web3', 'youtube']
    }
  ]);

  const [contentCalendar] = useState<ContentCalendar[]>([
    {
      id: '1',
      date: '2024-01-20',
      time: '10:00',
      title: 'Creator Spotlight: Digital Artists',
      platform: ['Twitter', 'LinkedIn'],
      contentType: 'Video',
      status: 'scheduled'
    },
    {
      id: '2',
      date: '2024-01-20',
      time: '14:00',
      title: 'Web3 Creator Economy Update',
      platform: ['YouTube'],
      contentType: 'Video',
      status: 'scheduled'
    },
    {
      id: '3',
      date: '2024-01-19',
      time: '09:00',
      title: 'NFT Market Weekly Recap',
      platform: ['Twitter', 'Medium'],
      contentType: 'Article',
      status: 'published',
      engagement: 8.5
    }
  ]);

  const platformOptions = [
    { value: 'twitter', label: 'Twitter/X', color: 'bg-black' },
    { value: 'youtube', label: 'YouTube', color: 'bg-red-600' },
    { value: 'linkedin', label: 'LinkedIn', color: 'bg-blue-700' },
    { value: 'instagram', label: 'Instagram', color: 'bg-pink-500' },
    { value: 'tiktok', label: 'TikTok', color: 'bg-black' },
    { value: 'medium', label: 'Medium', color: 'bg-green-600' }
  ];

  const getContentIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="w-4 h-4" />;
      case 'image': return <Image className="w-4 h-4" />;
      case 'text': return <FileText className="w-4 h-4" />;
      case 'music': return <Music className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active': return <Badge className="bg-web3-green text-white">Active</Badge>;
      case 'completed': return <Badge variant="secondary">Completed</Badge>;
      case 'scheduled': return <Badge className="bg-web3-purple text-white">Scheduled</Badge>;
      case 'draft': return <Badge variant="outline">Draft</Badge>;
      case 'paused': return <Badge className="bg-web3-accent text-white">Paused</Badge>;
      default: return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const totalBudget = mediaPlans.reduce((sum, plan) => sum + plan.budget, 0);
  const totalSpent = mediaPlans.reduce((sum, plan) => sum + plan.spent, 0);
  const totalReach = mediaPlans.reduce((sum, plan) => sum + plan.actualReach, 0);
  const avgROAS = mediaPlans.reduce((sum, plan) => sum + plan.kpis.roas, 0) / mediaPlans.length;

  return (
    <div className="space-y-6">
      {/* Header with Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Budget</p>
                <p className="text-2xl font-bold">${totalBudget.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">
                  ${totalSpent.toLocaleString()} spent
                </p>
              </div>
              <DollarSign className="h-8 w-8 text-web3-green" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Reach</p>
                <p className="text-2xl font-bold">{(totalReach / 1000).toFixed(0)}K</p>
                <p className="text-xs text-web3-green flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +18.5% vs target
                </p>
              </div>
              <Users className="h-8 w-8 text-web3-cyan" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Campaigns</p>
                <p className="text-2xl font-bold">
                  {mediaPlans.filter(plan => plan.status === 'active').length}
                </p>
                <p className="text-xs text-muted-foreground">
                  {mediaPlans.length} total campaigns
                </p>
              </div>
              <Target className="h-8 w-8 text-web3-purple" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg ROAS</p>
                <p className="text-2xl font-bold">{avgROAS.toFixed(1)}x</p>
                <p className="text-xs text-web3-green flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  Above industry avg
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
          <TabsList className="grid w-full grid-cols-4 max-w-xl">
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="calendar">Content Calendar</TabsTrigger>
            <TabsTrigger value="planning">Budget Planning</TabsTrigger>
            <TabsTrigger value="optimization">Optimization</TabsTrigger>
          </TabsList>
          
          <div className="flex gap-2">
            <Button onClick={() => setIsCreatingPlan(true)} size="sm">
              <Plus className="w-4 h-4 mr-2" />
              New Campaign
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* Campaigns Tab */}
        <TabsContent value="campaigns" className="space-y-4">
          <div className="space-y-4">
            {mediaPlans.map((plan) => (
              <Card key={plan.id} className={selectedPlan === plan.id ? 'ring-2 ring-web3-purple' : ''}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {getContentIcon(plan.contentType)}
                      <div>
                        <CardTitle className="text-lg">{plan.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{plan.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusBadge(plan.status)}
                      <Button variant="outline" size="sm" onClick={() => setSelectedPlan(plan.id)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Budget</p>
                      <p className="font-medium">${plan.budget.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">
                        ${plan.spent.toLocaleString()} spent
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Reach</p>
                      <p className="font-medium">{plan.actualReach.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">
                        Target: {plan.expectedReach.toLocaleString()}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Engagement</p>
                      <p className="font-medium">{plan.kpis.engagement}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Conversions</p>
                      <p className="font-medium">{plan.kpis.conversions.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">ROAS</p>
                      <p className="font-medium text-web3-green">{plan.kpis.roas}x</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Budget Utilization</span>
                      <span>{((plan.spent / plan.budget) * 100).toFixed(0)}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-web3-purple h-2 rounded-full"
                        style={{ width: `${(plan.spent / plan.budget) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {plan.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Copy className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Content Calendar Tab */}
        <TabsContent value="calendar" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Calendar</CardTitle>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Content Schedule
                    <Button size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Content
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {contentCalendar.map((content) => (
                      <div key={content.id} className="p-3 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm font-medium">
                              {content.date} at {content.time}
                            </span>
                            <Badge 
                              variant={content.status === 'published' ? 'default' : 'secondary'}
                              className="text-xs"
                            >
                              {content.status}
                            </Badge>
                          </div>
                          {content.engagement && (
                            <span className="text-sm text-web3-green">
                              {content.engagement}% engagement
                            </span>
                          )}
                        </div>
                        
                        <h4 className="font-medium mb-1">{content.title}</h4>
                        
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">Platforms:</span>
                          {content.platform.map((platform) => (
                            <Badge key={platform} variant="outline" className="text-xs">
                              {platform}
                            </Badge>
                          ))}
                          <Badge variant="secondary" className="text-xs ml-2">
                            {content.contentType}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Budget Planning Tab */}
        <TabsContent value="planning" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Budget Allocation by Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {platformOptions.map((platform) => {
                    const allocated = Math.floor(Math.random() * 15000) + 5000;
                    const spent = Math.floor(allocated * (0.3 + Math.random() * 0.6));
                    
                    return (
                      <div key={platform.value} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full ${platform.color}`} />
                            <span className="font-medium">{platform.label}</span>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">${allocated.toLocaleString()}</p>
                            <p className="text-xs text-muted-foreground">
                              ${spent.toLocaleString()} spent
                            </p>
                          </div>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${platform.color}`}
                            style={{ width: `${(spent / allocated) * 100}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Budget Forecasting</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-web3-green/10 border border-web3-green/20 rounded-lg">
                    <h4 className="font-medium text-web3-green mb-1">Recommended Allocation</h4>
                    <p className="text-sm text-muted-foreground">
                      Increase video content budget by 25% for Q2 based on performance trends.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-web3-purple/10 border border-web3-purple/20 rounded-lg">
                    <h4 className="font-medium text-web3-purple mb-1">Cost Optimization</h4>
                    <p className="text-sm text-muted-foreground">
                      LinkedIn CPM is 40% below average. Consider increasing investment.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-web3-cyan/10 border border-web3-cyan/20 rounded-lg">
                    <h4 className="font-medium text-web3-cyan mb-1">Seasonal Trends</h4>
                    <p className="text-sm text-muted-foreground">
                      Q2 typically sees 30% higher engagement. Plan budget increase accordingly.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Optimization Tab */}
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
                    Move 20% budget from Twitter to TikTok for 35% better reach efficiency.
                  </p>
                  <Button size="sm" className="mt-2" variant="outline">
                    Apply Recommendation
                  </Button>
                </div>
                
                <div className="p-3 bg-web3-purple/10 border border-web3-purple/20 rounded-lg">
                  <h4 className="font-medium text-web3-purple mb-1">Content Timing</h4>
                  <p className="text-sm text-muted-foreground">
                    Post video content at 7-9 PM for 43% higher engagement rates.
                  </p>
                  <Button size="sm" className="mt-2" variant="outline">
                    Update Schedule
                  </Button>
                </div>
                
                <div className="p-3 bg-web3-cyan/10 border border-web3-cyan/20 rounded-lg">
                  <h4 className="font-medium text-web3-cyan mb-1">Audience Targeting</h4>
                  <p className="text-sm text-muted-foreground">
                    Expand targeting to "Crypto Gaming" audience for 28% lower CPA.
                  </p>
                  <Button size="sm" className="mt-2" variant="outline">
                    Expand Targeting
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Performance Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                    <div>
                      <h4 className="font-medium text-red-700">Budget Alert</h4>
                      <p className="text-sm text-red-600">
                        Q1 Campaign is 85% through budget with 2 weeks remaining.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2" />
                    <div>
                      <h4 className="font-medium text-yellow-700">Performance Warning</h4>
                      <p className="text-sm text-yellow-600">
                        YouTube campaign CTR dropped 15% this week.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                    <div>
                      <h4 className="font-medium text-green-700">Success Alert</h4>
                      <p className="text-sm text-green-600">
                        NFT campaign exceeded conversion target by 23%.
                      </p>
                    </div>
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