
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { TokenGatedPlayer } from './TokenGatedPlayer';
import { StreamScheduler } from './StreamScheduler';
import { WebRTCBackstage } from './WebRTCBackstage';
import { LivepeerStream } from '@/services/livepeerStreaming';
import { Play, Calendar, Users, Settings } from 'lucide-react';

export const StreamingDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('player');

  // Mock stream data
  const mockStream: LivepeerStream = {
    id: 'stream_123',
    name: 'Web3 Innovation Summit',
    streamKey: 'stream_123_key',
    playbackId: 'playback_123',
    playbackUrl: 'https://livepeer.studio/hls/playback_123/index.m3u8',
    rtmpIngestUrl: 'rtmp://rtmp.livepeer.studio/live/stream_123_key',
    isActive: true,
    createdAt: new Date().toISOString()
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Token-Gated Streaming
          </h1>
          <p className="text-muted-foreground text-lg">
            Decentralized live streaming with NFT access control powered by Livepeer and ERC-1155
          </p>
        </div>

        <Card className="grok-card">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-card/20 p-1">
              <TabsTrigger 
                value="player" 
                className="flex items-center gap-2 data-[state=active]:bg-primary/20"
              >
                <Play size={16} />
                Stream Player
              </TabsTrigger>
              <TabsTrigger 
                value="schedule" 
                className="flex items-center gap-2 data-[state=active]:bg-primary/20"
              >
                <Calendar size={16} />
                Schedule
              </TabsTrigger>
              <TabsTrigger 
                value="backstage" 
                className="flex items-center gap-2 data-[state=active]:bg-primary/20"
              >
                <Users size={16} />
                Backstage
              </TabsTrigger>
              <TabsTrigger 
                value="settings" 
                className="flex items-center gap-2 data-[state=active]:bg-primary/20"
              >
                <Settings size={16} />
                Settings
              </TabsTrigger>
            </TabsList>

            <div className="mt-6">
              <TabsContent value="player">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  <TokenGatedPlayer
                    stream={mockStream}
                    streamId="1"
                    contractAddress="0x742d35Cc6634C0532925a3b8D428fC6A4fC4EA37"
                    tier="standard"
                  />
                  <TokenGatedPlayer
                    stream={{
                      ...mockStream,
                      name: 'VIP Tech Talk',
                      id: 'stream_vip'
                    }}
                    streamId="2"
                    contractAddress="0x742d35Cc6634C0532925a3b8D428fC6A4fC4EA37"
                    tier="vip"
                  />
                  <TokenGatedPlayer
                    stream={{
                      ...mockStream,
                      name: 'Backstage Interview',
                      id: 'stream_backstage'
                    }}
                    streamId="3"
                    contractAddress="0x742d35Cc6634C0532925a3b8D428fC6A4fC4EA37"
                    tier="backstage"
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="schedule">
                <StreamScheduler />
              </TabsContent>
              
              <TabsContent value="backstage">
                <WebRTCBackstage />
              </TabsContent>
              
              <TabsContent value="settings">
                <Card className="grok-card p-6">
                  <h3 className="text-lg font-semibold mb-4 text-foreground">
                    Streaming Configuration
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <div>
                      <strong>ERC-1155 Contract:</strong> 0x742d35Cc6634C0532925a3b8D428fC6A4fC4EA37
                    </div>
                    <div>
                      <strong>Livepeer API:</strong> Connected
                    </div>
                    <div>
                      <strong>WebRTC:</strong> Enabled for backstage access
                    </div>
                    <div>
                      <strong>Security:</strong> JWT token-gated playback URLs
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};
