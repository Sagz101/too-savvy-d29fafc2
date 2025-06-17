
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Share2, 
  Link2, 
  Twitter, 
  MessageSquare, 
  Send,
  Copy,
  Coins,
  TrendingUp,
  Eye,
  Heart
} from 'lucide-react';
import { toast } from 'sonner';

interface ShareStats {
  platform: string;
  clicks: number;
  engagement: number;
  rewards: number;
}

export const CrossPlatformShare: React.FC = () => {
  const [shareContent, setShareContent] = useState('');
  const [shareTitle, setShareTitle] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  const platforms = [
    { id: 'twitter', name: 'Twitter/X', icon: Twitter, color: 'text-cyan-400' },
    { id: 'telegram', name: 'Telegram', icon: Send, color: 'text-blue-400' },
    { id: 'discord', name: 'Discord', icon: MessageSquare, color: 'text-purple-400' },
  ];

  const [shareStats] = useState<ShareStats[]>([
    { platform: 'Twitter/X', clicks: 247, engagement: 15.8, rewards: 12.4 },
    { platform: 'Telegram', clicks: 89, engagement: 23.2, rewards: 8.9 },
    { platform: 'Discord', clicks: 156, engagement: 18.5, rewards: 15.6 },
  ]);

  const [smartLinks] = useState([
    {
      id: '1',
      url: 'neura.app/content/x8f92?ref=0xAb3...',
      clicks: 247,
      platform: 'Twitter/X',
      created: '2 hours ago',
      status: 'active'
    },
    {
      id: '2',
      url: 'neura.app/gallery/nft?ref=0xAb3...',
      clicks: 156,
      platform: 'Discord',
      created: '1 day ago',
      status: 'active'
    }
  ]);

  const togglePlatform = (platformId: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(platformId) 
        ? prev.filter(id => id !== platformId)
        : [...prev, platformId]
    );
  };

  const handleShare = () => {
    if (!shareContent.trim()) {
      toast.error('Please add content to share');
      return;
    }

    if (selectedPlatforms.length === 0) {
      toast.error('Please select at least one platform');
      return;
    }

    // Simulate sharing to selected platforms
    const platformNames = selectedPlatforms.map(id => 
      platforms.find(p => p.id === id)?.name
    ).join(', ');

    toast.success(`Content shared to ${platformNames} with smart links`);
    
    // Reset form
    setShareContent('');
    setShareTitle('');
    setSelectedPlatforms([]);
  };

  const copySmartLink = (url: string) => {
    navigator.clipboard.writeText(url);
    toast.success('Smart link copied to clipboard');
  };

  return (
    <div className="space-y-6">
      {/* Share Content Form */}
      <Card className="bg-neura-dark/60 border-cyan-500/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Share2 className="w-5 h-5 text-cyan-400" />
            Cross-Platform Content Sharing
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Content Title</label>
            <Input
              placeholder="Enter your content title..."
              value={shareTitle}
              onChange={(e) => setShareTitle(e.target.value)}
              className="bg-neura-dark/40 border-cyan-500/20"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Content</label>
            <Textarea
              placeholder="What do you want to share across platforms?"
              value={shareContent}
              onChange={(e) => setShareContent(e.target.value)}
              className="bg-neura-dark/40 border-cyan-500/20 min-h-24"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Select Platforms</label>
            <div className="flex flex-wrap gap-2">
              {platforms.map((platform) => {
                const IconComponent = platform.icon;
                const isSelected = selectedPlatforms.includes(platform.id);
                
                return (
                  <Button
                    key={platform.id}
                    variant={isSelected ? "default" : "outline"}
                    size="sm"
                    onClick={() => togglePlatform(platform.id)}
                    className={`flex items-center gap-2 ${
                      isSelected 
                        ? 'bg-cyan-600 hover:bg-cyan-700' 
                        : 'border-cyan-500/30 hover:border-cyan-500/60'
                    }`}
                  >
                    <IconComponent className={`w-4 h-4 ${platform.color}`} />
                    {platform.name}
                  </Button>
                );
              })}
            </div>
          </div>

          <Button 
            onClick={handleShare}
            className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share with Smart Links
          </Button>
        </CardContent>
      </Card>

      {/* Smart Links Monitor */}
      <Card className="bg-neura-dark/60 border-green-500/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Link2 className="w-5 h-5 text-green-400" />
            Smart Links Monitor
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {smartLinks.map((link) => (
            <div key={link.id} className="flex items-center justify-between p-3 bg-neura-dark/40 rounded-lg">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-mono text-cyan-300">{link.url}</span>
                  <Badge variant="outline" className="border-green-500/50 text-green-400">
                    {link.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>Platform: {link.platform}</span>
                  <span>Created: {link.created}</span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {link.clicks} clicks
                  </span>
                </div>
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={() => copySmartLink(link.url)}
                className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-900/20"
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Share Analytics */}
      <Card className="bg-neura-dark/60 border-purple-500/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-purple-400" />
            Cross-Platform Analytics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {shareStats.map((stat, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-neura-dark/40 rounded-lg">
                <div>
                  <h4 className="font-medium text-foreground">{stat.platform}</h4>
                  <p className="text-sm text-muted-foreground">
                    {stat.clicks} clicks • {stat.engagement}% engagement
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-green-400">
                    <Coins className="w-4 h-4" />
                    <span className="font-semibold">{stat.rewards} $Neurax</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Rewards earned</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Pro Tips */}
      <Card className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 border border-purple-500/30">
        <CardContent className="p-4">
          <h3 className="font-semibold mb-2 text-purple-400">💡 Pro Tips for Web3 Sharing</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• High-performing posts unlock reputation scores and tiered reward pools</li>
            <li>• Smart links automatically track engagement and distribute $Neurax rewards</li>
            <li>• Cross-platform sharing helps build your Web3 creator reputation</li>
            <li>• Token-gated content can be shared to expand your community</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};
