import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, Eye, Heart, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';

interface AnalyticsData {
  date: string;
  views: number;
  subscribers: number;
  engagement: number;
  revenue: number;
}

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
  trend: 'up' | 'down';
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, icon: Icon, trend }) => (
  <Card>
    <CardContent className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
          <p className={`text-xs ${trend === 'up' ? 'text-green-500' : 'text-red-500'} flex items-center gap-1`}>
            <TrendingUp className={`h-3 w-3 ${trend === 'down' ? 'rotate-180' : ''}`} />
            {change}
          </p>
        </div>
        <div className="p-3 bg-primary/10 rounded-full">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>
    </CardContent>
  </Card>
);

export const InteractiveAnalytics: React.FC = () => {
  const [timeRange, setTimeRange] = useState('7d');
  const [data, setData] = useState<AnalyticsData[]>([]);

  // Generate sample data
  useEffect(() => {
    const generateData = () => {
      const days = timeRange === '7d' ? 7 : timeRange === '30d' ? 30 : 90;
      const baseData = [];
      
      for (let i = 0; i < days; i++) {
        const date = new Date();
        date.setDate(date.getDate() - (days - i));
        
        baseData.push({
          date: date.toISOString().split('T')[0],
          views: Math.floor(1000 + Math.random() * 5000),
          subscribers: Math.floor(50 + Math.random() * 200),
          engagement: Math.floor(60 + Math.random() * 40),
          revenue: Math.floor(100 + Math.random() * 900)
        });
      }
      
      setData(baseData);
    };

    generateData();
  }, [timeRange]);

  const totalViews = data.reduce((sum, item) => sum + item.views, 0);
  const totalSubscribers = data.reduce((sum, item) => sum + item.subscribers, 0);
  const avgEngagement = data.reduce((sum, item) => sum + item.engagement, 0) / data.length;
  const totalRevenue = data.reduce((sum, item) => sum + item.revenue, 0);

  const pieData = [
    { name: 'Video Content', value: 35, color: 'hsl(var(--web3-purple))' },
    { name: 'NFT Sales', value: 25, color: 'hsl(var(--web3-cyan))' },
    { name: 'Music Streaming', value: 20, color: 'hsl(var(--web3-green))' },
    { name: 'Social Posts', value: 20, color: 'hsl(var(--web3-accent))' }
  ];

  const metrics = [
    {
      title: 'Total Views',
      value: `${(totalViews / 1000).toFixed(1)}K`,
      change: '+12.3%',
      icon: Eye,
      trend: 'up' as const
    },
    {
      title: 'Subscribers',
      value: `${totalSubscribers.toLocaleString()}`,
      change: '+8.7%',
      icon: Users,
      trend: 'up' as const
    },
    {
      title: 'Engagement Rate',
      value: `${avgEngagement.toFixed(1)}%`,
      change: '+2.1%',
      icon: Heart,
      trend: 'up' as const
    },
    {
      title: 'Revenue',
      value: `$${totalRevenue.toLocaleString()}`,
      change: '+24.5%',
      icon: DollarSign,
      trend: 'up' as const
    }
  ];

  return (
    <div className="space-y-6">
      {/* Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>

      {/* Charts */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Creator Performance Analytics</CardTitle>
            <Tabs value={timeRange} onValueChange={setTimeRange}>
              <TabsList>
                <TabsTrigger value="7d">7 Days</TabsTrigger>
                <TabsTrigger value="30d">30 Days</TabsTrigger>
                <TabsTrigger value="90d">90 Days</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="views" className="space-y-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="views">Views</TabsTrigger>
              <TabsTrigger value="engagement">Engagement</TabsTrigger>
              <TabsTrigger value="revenue">Revenue</TabsTrigger>
              <TabsTrigger value="distribution">Content Mix</TabsTrigger>
            </TabsList>

            <TabsContent value="views" className="space-y-4">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="date" 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
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
                      dataKey="views" 
                      stroke="hsl(var(--web3-cyan))" 
                      strokeWidth={2}
                      dot={{ fill: 'hsl(var(--web3-cyan))', strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>

            <TabsContent value="engagement" className="space-y-4">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="date" 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: 'hsl(var(--background))',
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '8px'
                      }}
                    />
                    <Bar 
                      dataKey="engagement" 
                      fill="hsl(var(--web3-purple))"
                      radius={[2, 2, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>

            <TabsContent value="revenue" className="space-y-4">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="date" 
                      stroke="hsl(var(--muted-foreground))"
                      fontSize={12}
                    />
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
                      dataKey="revenue" 
                      stroke="hsl(var(--web3-green))" 
                      strokeWidth={2}
                      dot={{ fill: 'hsl(var(--web3-green))', strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>

            <TabsContent value="distribution" className="space-y-4">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Performance Insights */}
      <Card>
        <CardHeader>
          <CardTitle>AI-Powered Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-web3-green/10 border border-web3-green/20 rounded-lg">
              <h4 className="font-medium text-web3-green mb-2">Top Performing Content</h4>
              <p className="text-sm text-muted-foreground">
                Your NFT collections are generating 35% more engagement than video content. Consider expanding your digital art offerings.
              </p>
            </div>
            <div className="p-4 bg-web3-purple/10 border border-web3-purple/20 rounded-lg">
              <h4 className="font-medium text-web3-purple mb-2">Growth Opportunity</h4>
              <p className="text-sm text-muted-foreground">
                Your audience is most active between 7-9 PM EST. Scheduling posts during this window could increase engagement by 20%.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};