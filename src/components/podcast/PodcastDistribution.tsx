
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Copy, ExternalLink, Share2, Radio, Globe, Code, Download } from 'lucide-react';

export const PodcastDistribution: React.FC = () => {
  const [rssGenerated, setRssGenerated] = useState(true);
  const [ipfsEnabled, setIpfsEnabled] = useState(true);

  const platforms = [
    { name: 'Spotify', connected: true, status: 'active' },
    { name: 'Apple Podcasts', connected: true, status: 'active' },
    { name: 'Google Podcasts', connected: false, status: 'pending' },
    { name: 'Amazon Music', connected: true, status: 'active' },
    { name: 'Stitcher', connected: false, status: 'inactive' }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="space-y-6">
      {/* RSS Feed Management */}
      <Card className="grok-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Radio className="w-5 h-5" />
            RSS Feed Generator
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-base">Auto-Generate RSS Feed</Label>
              <p className="text-sm text-muted-foreground">Create feeds for podcast directories</p>
            </div>
            <Switch checked={rssGenerated} onCheckedChange={setRssGenerated} />
          </div>

          {rssGenerated && (
            <div className="space-y-4">
              <div>
                <Label>Public RSS Feed</Label>
                <div className="flex gap-2 mt-1">
                  <Input 
                    value="https://feeds.yourpodcast.com/public/tech-talks"
                    readOnly
                    className="font-mono text-sm"
                  />
                  <Button variant="outline" size="sm" onClick={() => copyToClipboard('https://feeds.yourpodcast.com/public/tech-talks')}>
                    <Copy size={16} />
                  </Button>
                </div>
              </div>

              <div>
                <Label>Private RSS Feed (Token-Gated)</Label>
                <div className="flex gap-2 mt-1">
                  <Input 
                    value="https://feeds.yourpodcast.com/private/tech-talks?token=xxx"
                    readOnly
                    className="font-mono text-sm"
                  />
                  <Button variant="outline" size="sm" onClick={() => copyToClipboard('https://feeds.yourpodcast.com/private/tech-talks?token=xxx')}>
                    <Copy size={16} />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Platform Distribution */}
      <Card className="grok-card">
        <CardHeader>
          <CardTitle>Platform Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {platforms.map((platform) => (
              <div 
                key={platform.name}
                className="border border-border/50 rounded-lg p-4 flex items-center justify-between"
              >
                <div>
                  <h4 className="font-medium text-foreground">{platform.name}</h4>
                  <Badge 
                    variant={platform.status === 'active' ? 'default' : 
                            platform.status === 'pending' ? 'secondary' : 'outline'}
                  >
                    {platform.status}
                  </Badge>
                </div>
                <Button 
                  variant={platform.connected ? "outline" : "default"} 
                  size="sm"
                >
                  {platform.connected ? 'Manage' : 'Connect'}
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Web3 Distribution */}
      <Card className="grok-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Web3 Distribution
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-base">IPFS Hosting</Label>
              <p className="text-sm text-muted-foreground">Decentralized episode storage</p>
            </div>
            <Switch checked={ipfsEnabled} onCheckedChange={setIpfsEnabled} />
          </div>

          {ipfsEnabled && (
            <div className="space-y-4 border border-border/50 rounded-lg p-4">
              <div>
                <Label>IPFS Gateway</Label>
                <div className="flex gap-2 mt-1">
                  <Input 
                    value="https://ipfs.io/ipfs/QmXoYp..."
                    readOnly
                    className="font-mono text-sm"
                  />
                  <Button variant="outline" size="sm">
                    <ExternalLink size={16} />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Token-Gated Links</Label>
                  <p className="text-xs text-muted-foreground mb-2">Shareable links for exclusive content</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-card/20 rounded">
                      <span className="text-sm font-mono">ep-045-bonus.mp3</span>
                      <Button variant="ghost" size="sm">
                        <Share2 size={14} />
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <Label>Access Control</Label>
                  <p className="text-xs text-muted-foreground mb-2">Token requirements for content</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-card/20 rounded">
                      <span className="text-sm">NFT Required</span>
                      <Badge variant="outline">Active</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Embed & Sharing Tools */}
      <Card className="grok-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5" />
            Embed & Sharing Tools
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Player Embed Code</Label>
            <div className="mt-2">
              <textarea 
                className="w-full h-20 p-3 bg-card/20 border border-border/50 rounded-lg font-mono text-sm resize-none"
                value={`<iframe src="https://player.yourpodcast.com/embed/tech-talks/episode-45" width="100%" height="120" frameborder="0"></iframe>`}
                readOnly
              />
              <Button variant="outline" size="sm" className="mt-2">
                <Copy size={16} className="mr-2" />
                Copy Embed Code
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label>Social Media Clips</Label>
              <div className="space-y-2 mt-2">
                <Button variant="outline" className="w-full justify-start">
                  <Download size={16} className="mr-2" />
                  Generate 60s Clip
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download size={16} className="mr-2" />
                  Generate Audiogram
                </Button>
              </div>
            </div>

            <div>
              <Label>Share Links</Label>
              <div className="space-y-2 mt-2">
                <div className="flex gap-2">
                  <Input value="https://yourpodcast.com/ep-45" readOnly className="text-sm" />
                  <Button variant="outline" size="sm">
                    <Share2 size={16} />
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">Twitter</Button>
                  <Button variant="outline" size="sm" className="flex-1">LinkedIn</Button>
                  <Button variant="outline" size="sm" className="flex-1">Facebook</Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Distribution Analytics */}
      <Card className="grok-card">
        <CardHeader>
          <CardTitle>Distribution Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">85.2K</p>
              <p className="text-sm text-muted-foreground">Total Downloads</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">12</p>
              <p className="text-sm text-muted-foreground">Platforms</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">2.4K</p>
              <p className="text-sm text-muted-foreground">Token-Gated Access</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">94%</p>
              <p className="text-sm text-muted-foreground">Uptime</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
