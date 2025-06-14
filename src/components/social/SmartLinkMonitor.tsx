
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Link2, 
  Eye, 
  Share2, 
  TrendingUp, 
  Copy,
  ExternalLink,
  Coins
} from 'lucide-react';

interface SmartLink {
  id: string;
  url: string;
  title: string;
  clicks: number;
  shares: number;
  conversions: number;
  earnings: number;
  created: string;
  status: 'active' | 'pending' | 'expired';
  platforms: string[];
}

export const SmartLinkMonitor: React.FC = () => {
  const [smartLinks] = useState<SmartLink[]>([
    {
      id: '1',
      url: 'https://neurasocial.xyz/link/abc123',
      title: 'Web3 Creator Economy Revolution',
      clicks: 2847,
      shares: 156,
      conversions: 23,
      earnings: 45.6,
      created: '2024-06-10',
      status: 'active',
      platforms: ['twitter', 'linkedin', 'telegram']
    },
    {
      id: '2',
      url: 'https://neurasocial.xyz/link/def456',
      title: 'NFT Marketplace Launch',
      clicks: 1523,
      shares: 89,
      conversions: 12,
      earnings: 28.3,
      created: '2024-06-09',
      status: 'active',
      platforms: ['twitter', 'discord']
    },
    {
      id: '3',
      url: 'https://neurasocial.xyz/link/ghi789',
      title: 'DeFi Protocol Updates',
      clicks: 945,
      shares: 34,
      conversions: 8,
      earnings: 15.7,
      created: '2024-06-08',
      status: 'pending',
      platforms: ['linkedin']
    }
  ]);

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    console.log('Link copied to clipboard');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'pending': return 'bg-yellow-500';
      case 'expired': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const totalEarnings = smartLinks.reduce((sum, link) => sum + link.earnings, 0);
  const totalClicks = smartLinks.reduce((sum, link) => sum + link.clicks, 0);
  const totalShares = smartLinks.reduce((sum, link) => sum + link.shares, 0);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-sm text-muted-foreground">Total Clicks</p>
                <p className="text-2xl font-bold">{totalClicks.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Share2 className="w-5 h-5 text-green-500" />
              <div>
                <p className="text-sm text-muted-foreground">Total Shares</p>
                <p className="text-2xl font-bold">{totalShares.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Coins className="w-5 h-5 text-yellow-500" />
              <div>
                <p className="text-sm text-muted-foreground">Total Earnings</p>
                <p className="text-2xl font-bold">{totalEarnings.toFixed(1)} $NEURAX</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-purple-500" />
              <div>
                <p className="text-sm text-muted-foreground">Conversion Rate</p>
                <p className="text-2xl font-bold">2.8%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Link2 className="w-5 h-5" />
            Smart Links Performance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {smartLinks.map((link) => (
              <div key={link.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium mb-1">{link.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{link.url}</span>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => copyToClipboard(link.url)}
                      >
                        <Copy className="w-3 h-3" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className={`${getStatusColor(link.status)} text-white`}>
                      {link.status}
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <p className="text-sm text-muted-foreground">Clicks</p>
                    <p className="text-xl font-semibold">{link.clicks.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Shares</p>
                    <p className="text-xl font-semibold">{link.shares}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Conversions</p>
                    <p className="text-xl font-semibold">{link.conversions}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Earnings</p>
                    <p className="text-xl font-semibold text-green-600">{link.earnings} $NEURAX</p>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Click-through Rate</span>
                    <span>{((link.conversions / link.clicks) * 100).toFixed(1)}%</span>
                  </div>
                  <Progress value={(link.conversions / link.clicks) * 100} className="h-2" />
                </div>

                <div className="flex flex-wrap gap-1">
                  {link.platforms.map((platform) => (
                    <Badge key={platform} variant="outline" className="text-xs">
                      {platform}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
