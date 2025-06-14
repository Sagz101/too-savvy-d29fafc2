
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Share2, 
  CheckCircle, 
  XCircle, 
  Clock, 
  ExternalLink,
  BarChart3,
  TrendingUp,
  Users
} from 'lucide-react';

interface PlatformStatus {
  platform: string;
  status: 'connected' | 'disconnected' | 'pending';
  lastSync: string;
  posts: number;
  reach: number;
  engagement: number;
}

interface DistributionCampaign {
  id: string;
  title: string;
  platforms: string[];
  status: 'scheduled' | 'publishing' | 'completed' | 'failed';
  scheduledTime: string;
  published: number;
  total: number;
  engagement: {
    likes: number;
    shares: number;
    comments: number;
  };
}

export const CrossPlatformDistribution: React.FC = () => {
  const [platforms] = useState<PlatformStatus[]>([
    {
      platform: 'Twitter/X',
      status: 'connected',
      lastSync: '2 minutes ago',
      posts: 45,
      reach: 12500,
      engagement: 8.4
    },
    {
      platform: 'LinkedIn',
      status: 'connected',
      lastSync: '5 minutes ago',
      posts: 23,
      reach: 5800,
      engagement: 12.1
    },
    {
      platform: 'Telegram',
      status: 'pending',
      lastSync: 'Never',
      posts: 0,
      reach: 0,
      engagement: 0
    },
    {
      platform: 'Discord',
      status: 'disconnected',
      lastSync: '2 days ago',
      posts: 8,
      reach: 850,
      engagement: 15.3
    },
    {
      platform: 'Reddit',
      status: 'disconnected',
      lastSync: 'Never',
      posts: 0,
      reach: 0,
      engagement: 0
    }
  ]);

  const [campaigns] = useState<DistributionCampaign[]>([
    {
      id: '1',
      title: 'Web3 Creator Economy Update',
      platforms: ['Twitter/X', 'LinkedIn', 'Telegram'],
      status: 'completed',
      scheduledTime: '2024-06-10 14:00',
      published: 3,
      total: 3,
      engagement: {
        likes: 234,
        shares: 45,
        comments: 67
      }
    },
    {
      id: '2',
      title: 'NFT Marketplace Launch',
      platforms: ['Twitter/X', 'Discord'],
      status: 'publishing',
      scheduledTime: '2024-06-10 16:30',
      published: 1,
      total: 2,
      engagement: {
        likes: 89,
        shares: 12,
        comments: 23
      }
    },
    {
      id: '3',
      title: 'Community AMA Announcement',
      platforms: ['Twitter/X', 'LinkedIn', 'Discord', 'Telegram'],
      status: 'scheduled',
      scheduledTime: '2024-06-11 10:00',
      published: 0,
      total: 4,
      engagement: {
        likes: 0,
        shares: 0,
        comments: 0
      }
    }
  ]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'connected': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'pending': return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'disconnected': return <XCircle className="w-4 h-4 text-red-500" />;
      default: return <XCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected': return 'bg-green-500';
      case 'pending': return 'bg-yellow-500';
      case 'disconnected': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getCampaignStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'publishing': return 'bg-blue-500';
      case 'scheduled': return 'bg-yellow-500';
      case 'failed': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const totalReach = platforms.reduce((sum, platform) => sum + platform.reach, 0);
  const connectedPlatforms = platforms.filter(p => p.status === 'connected').length;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Share2 className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-sm text-muted-foreground">Connected</p>
                <p className="text-2xl font-bold">{connectedPlatforms}/5</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-green-500" />
              <div>
                <p className="text-sm text-muted-foreground">Total Reach</p>
                <p className="text-2xl font-bold">{totalReach.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-purple-500" />
              <div>
                <p className="text-sm text-muted-foreground">Avg Engagement</p>
                <p className="text-2xl font-bold">10.2%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-orange-500" />
              <div>
                <p className="text-sm text-muted-foreground">This Month</p>
                <p className="text-2xl font-bold">76 Posts</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Share2 className="w-5 h-5" />
            Platform Connections
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {platforms.map((platform) => (
              <div key={platform.platform} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(platform.status)}
                    <h3 className="font-medium">{platform.platform}</h3>
                  </div>
                  <Badge variant="outline" className={`${getStatusColor(platform.status)} text-white`}>
                    {platform.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-4 gap-4 text-center text-sm">
                  <div>
                    <p className="text-muted-foreground">Posts</p>
                    <p className="font-medium">{platform.posts}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Reach</p>
                    <p className="font-medium">{platform.reach.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Engagement</p>
                    <p className="font-medium">{platform.engagement}%</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Last Sync</p>
                    <p className="font-medium">{platform.lastSync}</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Configure
                  </Button>
                  {platform.status === 'connected' ? (
                    <Button size="sm" variant="outline">
                      Disconnect
                    </Button>
                  ) : (
                    <Button size="sm">
                      Connect
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Distribution Campaigns</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {campaigns.map((campaign) => (
              <div key={campaign.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{campaign.title}</h3>
                  <Badge variant="outline" className={`${getCampaignStatusColor(campaign.status)} text-white`}>
                    {campaign.status}
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-1 mb-2">
                  {campaign.platforms.map((platform) => (
                    <Badge key={platform} variant="outline" className="text-xs">
                      {platform}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Publishing Progress</span>
                    <span>{campaign.published}/{campaign.total} platforms</span>
                  </div>
                  <Progress value={(campaign.published / campaign.total) * 100} className="h-2" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                  <div>
                    <p className="text-muted-foreground">Scheduled</p>
                    <p className="font-medium">{campaign.scheduledTime}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Likes</p>
                    <p className="font-medium">{campaign.engagement.likes}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Shares</p>
                    <p className="font-medium">{campaign.engagement.shares}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Comments</p>
                    <p className="font-medium">{campaign.engagement.comments}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
