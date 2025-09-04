import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, FunnelChart, Funnel, Cell } from 'recharts';
import { 
  TrendingUp, FileBarChart, Target, Users, DollarSign, 
  Brain, Lightbulb, AlertTriangle, CheckCircle, Clock,
  Download, Share2, Calendar, Mail, Smartphone
} from 'lucide-react';
import { AnimatedCounter } from '@/components/ui/animated-counter';

interface Report {
  id: string;
  title: string;
  type: 'performance' | 'audience' | 'revenue' | 'competitive' | 'predictive';
  frequency: 'daily' | 'weekly' | 'monthly' | 'quarterly';
  lastGenerated: string;
  nextScheduled: string;
  recipients: number;
  status: 'active' | 'paused' | 'draft';
}

interface Insight {
  id: string;
  title: string;
  description: string;
  type: 'opportunity' | 'alert' | 'trend' | 'recommendation';
  priority: 'high' | 'medium' | 'low';
  impact: number;
  confidence: number;
  category: string;
  actionable: boolean;
}

export const InsightsReporting: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('30d');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const reports: Report[] = [
    {
      id: '1',
      title: 'Creator Performance Overview',
      type: 'performance',
      frequency: 'weekly',
      lastGenerated: '2024-01-15',
      nextScheduled: '2024-01-22',
      recipients: 12,
      status: 'active'
    },
    {
      id: '2',
      title: 'Audience Growth Analysis', 
      type: 'audience',
      frequency: 'monthly',
      lastGenerated: '2024-01-01',
      nextScheduled: '2024-02-01',
      recipients: 8,
      status: 'active'
    },
    {
      id: '3',
      title: 'Revenue Optimization Report',
      type: 'revenue',
      frequency: 'monthly',
      lastGenerated: '2024-01-01',
      nextScheduled: '2024-02-01',
      recipients: 15,
      status: 'active'
    },
    {
      id: '4',
      title: 'Market Competitive Analysis',
      type: 'competitive', 
      frequency: 'quarterly',
      lastGenerated: '2024-01-01',
      nextScheduled: '2024-04-01',
      recipients: 5,
      status: 'draft'
    }
  ];

  const insights: Insight[] = [
    {
      id: '1',
      title: 'Video Content Surge Opportunity',
      description: 'Video content is trending 340% higher this week. Creators who post videos now could see 2.5x engagement boost.',
      type: 'opportunity',
      priority: 'high',
      impact: 85,
      confidence: 92,
      category: 'Content Strategy',
      actionable: true
    },
    {
      id: '2',
      title: 'Audience Engagement Drop Alert',
      description: 'Overall platform engagement decreased by 12% in the last 7 days. Primary cause: reduced weekend activity.',
      type: 'alert',
      priority: 'medium',
      impact: 60,
      confidence: 88,
      category: 'Engagement',
      actionable: true
    },
    {
      id: '3',
      title: 'NFT Market Cooling Trend',
      description: 'NFT sales velocity has slowed by 25% compared to last month. Consider focusing on utility-based NFTs.',
      type: 'trend',
      priority: 'medium',
      impact: 70,
      confidence: 79,
      category: 'Market Trends',
      actionable: true
    },
    {
      id: '4',
      title: 'Cross-Chain Integration Recommendation',
      description: 'Creators using multi-chain strategies show 45% higher revenue. Recommend Polygon integration.',
      type: 'recommendation',
      priority: 'low',
      impact: 55,
      confidence: 73,
      category: 'Technology',
      actionable: false
    }
  ];

  const performanceMetrics = [
    { metric: 'Engagement Rate', current: 8.2, benchmark: 6.5, trend: 'up' },
    { metric: 'Audience Growth', current: 12.4, benchmark: 9.8, trend: 'up' },
    { metric: 'Revenue per Creator', current: 2400, benchmark: 1850, trend: 'up' },
    { metric: 'Content Quality Score', current: 87, benchmark: 82, trend: 'up' },
    { metric: 'Platform Adoption', current: 23.5, benchmark: 28.2, trend: 'down' },
    { metric: 'Creator Retention', current: 89.3, benchmark: 85.1, trend: 'up' }
  ];

  const audienceSegments = [
    { segment: 'Digital Artists', size: 34, engagement: 9.2, revenue: 3200, growth: 15.3 },
    { segment: 'Content Creators', size: 28, engagement: 7.8, revenue: 2100, growth: 12.1 },
    { segment: 'Tech Enthusiasts', size: 22, engagement: 6.9, revenue: 1800, growth: 8.7 },
    { segment: 'Crypto Traders', size: 16, engagement: 5.4, revenue: 2800, growth: 22.4 }
  ];

  const funnelData = [
    { name: 'Visitors', value: 10000, fill: 'hsl(var(--web3-cyan))' },
    { name: 'Sign-ups', value: 3200, fill: 'hsl(var(--web3-purple))' },
    { name: 'Active Users', value: 2400, fill: 'hsl(var(--web3-green))' },
    { name: 'Content Creators', value: 850, fill: 'hsl(var(--web3-accent))' },
    { name: 'Premium Creators', value: 320, fill: 'hsl(var(--web3-gold))' }
  ];

  const predictiveData = [
    { month: 'Feb', predicted: 15200, actual: 14800, confidence: 85 },
    { month: 'Mar', predicted: 17800, actual: 17200, confidence: 82 },
    { month: 'Apr', predicted: 20500, actual: null, confidence: 78 },
    { month: 'May', predicted: 23200, actual: null, confidence: 75 },
    { month: 'Jun', predicted: 26800, actual: null, confidence: 72 }
  ];

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'opportunity': return <Target className="w-4 h-4 text-web3-green" />;
      case 'alert': return <AlertTriangle className="w-4 h-4 text-web3-accent" />;
      case 'trend': return <TrendingUp className="w-4 h-4 text-web3-purple" />;
      case 'recommendation': return <Lightbulb className="w-4 h-4 text-web3-cyan" />;
      default: return <Brain className="w-4 h-4" />;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high': return <Badge variant="destructive">High</Badge>;
      case 'medium': return <Badge className="bg-web3-accent text-white">Medium</Badge>;
      case 'low': return <Badge variant="outline">Low</Badge>;
      default: return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active': return <Badge className="bg-web3-green text-white">Active</Badge>;
      case 'paused': return <Badge className="bg-web3-accent text-white">Paused</Badge>;
      case 'draft': return <Badge variant="outline">Draft</Badge>;
      default: return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="performance">Performance</SelectItem>
              <SelectItem value="audience">Audience</SelectItem>
              <SelectItem value="revenue">Revenue</SelectItem>
              <SelectItem value="content">Content</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Report
          </Button>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export All
          </Button>
        </div>
      </div>

      {/* Main Tabs */}
      <Tabs defaultValue="insights" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5 max-w-2xl">
          <TabsTrigger value="insights">AI Insights</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="audience">Audience</TabsTrigger>
          <TabsTrigger value="predictive">Predictive</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        {/* AI Insights */}
        <TabsContent value="insights" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {insights.map((insight) => (
              <Card key={insight.id} className="relative">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      {getInsightIcon(insight.type)}
                      <CardTitle className="text-lg">{insight.title}</CardTitle>
                    </div>
                    {getPriorityBadge(insight.priority)}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{insight.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Impact Score</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-muted rounded-full h-2">
                          <div 
                            className="bg-web3-green h-2 rounded-full"
                            style={{ width: `${insight.impact}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium">{insight.impact}%</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Confidence</p>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-muted rounded-full h-2">
                          <div 
                            className="bg-web3-purple h-2 rounded-full"
                            style={{ width: `${insight.confidence}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium">{insight.confidence}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <Badge variant="secondary" className="text-xs">{insight.category}</Badge>
                    {insight.actionable && (
                      <Button size="sm" variant="outline">
                        Take Action
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Performance Analytics */}
        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Performance vs Benchmarks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={performanceMetrics}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="metric" />
                    <PolarRadiusAxis domain={[0, 100]} />
                    <Radar 
                      name="Current" 
                      dataKey="current" 
                      stroke="hsl(var(--web3-purple))" 
                      fill="hsl(var(--web3-purple))" 
                      fillOpacity={0.3}
                    />
                    <Radar 
                      name="Benchmark" 
                      dataKey="benchmark" 
                      stroke="hsl(var(--web3-cyan))" 
                      fill="hsl(var(--web3-cyan))" 
                      fillOpacity={0.1}
                    />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Creator Conversion Funnel</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <FunnelChart>
                    <Tooltip />
                    <Funnel dataKey="value" data={funnelData} isAnimationActive>
                      {funnelData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Funnel>
                  </FunnelChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Audience Analytics */}
        <TabsContent value="audience" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Audience Segment Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {audienceSegments.map((segment, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">{segment.segment}</h3>
                      <Badge className="bg-web3-green text-white">
                        +{segment.growth}% growth
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Size</p>
                        <p className="font-medium">{segment.size}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Engagement</p>
                        <p className="font-medium">{segment.engagement}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Avg Revenue</p>
                        <p className="font-medium">${segment.revenue}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Growth Rate</p>
                        <p className="font-medium text-web3-green">+{segment.growth}%</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Predictive Analytics */}
        <TabsContent value="predictive" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Forecasting</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={predictiveData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'hsl(var(--background))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="actual" 
                      stroke="hsl(var(--web3-green))" 
                      strokeWidth={3}
                      name="Actual Revenue"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="predicted" 
                      stroke="hsl(var(--web3-purple))" 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      name="Predicted Revenue"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Next Month Prediction</h3>
                  <p className="text-3xl font-bold text-web3-purple">
                    <AnimatedCounter end={20500} prefix="$" />
                  </p>
                  <p className="text-sm text-muted-foreground">78% confidence</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Growth Trajectory</h3>
                  <p className="text-3xl font-bold text-web3-green">+15.2%</p>
                  <p className="text-sm text-muted-foreground">Monthly avg growth</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Risk Assessment</h3>
                  <p className="text-3xl font-bold text-web3-cyan">Low</p>
                  <p className="text-sm text-muted-foreground">Market volatility risk</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Reports Management */}
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Scheduled Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {reports.map((report) => (
                  <div key={report.id} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <FileBarChart className="w-5 h-5 text-web3-purple" />
                        <div>
                          <h3 className="font-semibold">{report.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {report.frequency} • {report.recipients} recipients
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusBadge(report.status)}
                        <Button variant="outline" size="sm">
                          <Share2 className="w-4 h-4 mr-2" />
                          Share
                        </Button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Last Generated</p>
                        <p className="font-medium">{report.lastGenerated}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Next Scheduled</p>
                        <p className="font-medium">{report.nextScheduled}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Delivery Method</p>
                        <div className="flex gap-1">
                          <Mail className="w-4 h-4 text-muted-foreground" />
                          <Smartphone className="w-4 h-4 text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};