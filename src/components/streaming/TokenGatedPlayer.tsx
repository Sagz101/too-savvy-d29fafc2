
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useWallet } from '@/services/wallet';
import { StreamAccessControl } from '@/services/streamNft';
import { LivepeerStreamingService, LivepeerStream } from '@/services/livepeerStreaming';
import { Play, Lock, Users, Clock, Shield } from 'lucide-react';
import { toast } from 'sonner';

interface TokenGatedPlayerProps {
  stream: LivepeerStream;
  streamId: string;
  contractAddress: string;
  tier?: 'standard' | 'vip' | 'backstage';
}

export const TokenGatedPlayer: React.FC<TokenGatedPlayerProps> = ({
  stream,
  streamId,
  contractAddress,
  tier = 'standard'
}) => {
  const { wallet } = useWallet();
  const [hasAccess, setHasAccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [streamStatus, setStreamStatus] = useState({ isLive: false, viewerCount: 0 });
  const [accessControl] = useState(new StreamAccessControl(contractAddress));
  const [livepeerService] = useState(new LivepeerStreamingService('mock-api-key'));

  useEffect(() => {
    if (wallet.isConnected && wallet.address) {
      checkAccess();
    }
  }, [wallet.isConnected, wallet.address, streamId]);

  useEffect(() => {
    const interval = setInterval(async () => {
      if (hasAccess) {
        const status = await livepeerService.getStreamStatus(stream.id);
        setStreamStatus(status);
      }
    }, 10000); // Check every 10 seconds

    return () => clearInterval(interval);
  }, [hasAccess, stream.id]);

  const checkAccess = async () => {
    if (!wallet.address) return;

    setIsLoading(true);
    try {
      await accessControl.initContract(wallet.signer);
      const access = await accessControl.checkStreamAccess(wallet.address, streamId);
      setHasAccess(access);
    } catch (error) {
      console.error('Error checking access:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const mintAccessPass = async () => {
    if (!wallet.address) {
      toast.error('Please connect your wallet first');
      return;
    }

    setIsLoading(true);
    try {
      await accessControl.initContract(wallet.signer);
      const result = await accessControl.mintStreamPass(
        wallet.address,
        streamId,
        tier,
        {
          name: `${stream.name} - ${tier.toUpperCase()} Access`,
          description: `Access pass for ${stream.name} live stream`,
          image: 'https://via.placeholder.com/400x400',
          attributes: [
            { trait_type: 'Stream ID', value: streamId },
            { trait_type: 'Tier', value: tier },
            { trait_type: 'Stream Name', value: stream.name }
          ]
        }
      );

      if (result) {
        setHasAccess(true);
      }
    } catch (error) {
      console.error('Error minting access pass:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'vip': return 'bg-gradient-to-r from-yellow-500 to-orange-500';
      case 'backstage': return 'bg-gradient-to-r from-purple-500 to-pink-500';
      default: return 'bg-gradient-to-r from-blue-500 to-cyan-500';
    }
  };

  const getTierPrice = (tier: string) => {
    switch (tier) {
      case 'vip': return '0.1 ETH';
      case 'backstage': return '0.05 ETH';
      default: return '0.02 ETH';
    }
  };

  return (
    <Card className="grok-card">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl text-foreground">{stream.name}</CardTitle>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant={streamStatus.isLive ? 'default' : 'secondary'}>
                {streamStatus.isLive ? 'LIVE' : 'OFFLINE'}
              </Badge>
              <Badge variant="outline" className={`text-white ${getTierColor(tier)}`}>
                {tier.toUpperCase()}
              </Badge>
            </div>
          </div>
          {streamStatus.isLive && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users size={16} />
              {streamStatus.viewerCount} viewers
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {!wallet.isConnected ? (
          <div className="text-center py-8">
            <Lock className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground mb-4">Connect your wallet to access this stream</p>
            <Button variant="outline">Connect Wallet</Button>
          </div>
        ) : !hasAccess ? (
          <div className="text-center py-8">
            <Shield className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Token-Gated Access Required</h3>
            <p className="text-muted-foreground mb-4">
              You need a {tier.toUpperCase()} StreamPass NFT to access this stream
            </p>
            
            <div className="bg-muted/50 p-4 rounded-lg mb-4">
              <div className="flex justify-between items-center mb-2">
                <span>StreamPass - {tier.toUpperCase()}</span>
                <span className="font-semibold">{getTierPrice(tier)}</span>
              </div>
              <div className="text-sm text-muted-foreground">
                Includes: Stream access, chat participation
                {tier === 'vip' && ', exclusive content'}
                {tier === 'backstage' && ', backstage access, meet & greet'}
              </div>
            </div>

            <Button 
              onClick={mintAccessPass}
              disabled={isLoading}
              className="grok-button-primary"
            >
              {isLoading ? 'Minting...' : `Mint StreamPass (${getTierPrice(tier)})`}
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
              {streamStatus.isLive ? (
                <div className="text-center">
                  <Play className="w-16 h-16 text-white mx-auto mb-4" />
                  <p className="text-white">Stream Player</p>
                  <p className="text-white/70 text-sm">
                    {livepeerService.generateSignedPlaybackUrl(stream.playbackId, wallet.address!, Date.now() + 3600000)}
                  </p>
                </div>
              ) : (
                <div className="text-center text-white/70">
                  <Clock className="w-16 h-16 mx-auto mb-4" />
                  <p>Stream is offline</p>
                  <p className="text-sm">Check back when the stream goes live</p>
                </div>
              )}
            </div>

            <Separator />

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-lg font-semibold text-foreground">
                  {streamStatus.viewerCount}
                </div>
                <div className="text-sm text-muted-foreground">Viewers</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-foreground">
                  {hasAccess ? '✓' : '✗'}
                </div>
                <div className="text-sm text-muted-foreground">Access</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-foreground">
                  {tier.toUpperCase()}
                </div>
                <div className="text-sm text-muted-foreground">Tier</div>
              </div>
            </div>

            {tier === 'backstage' && (
              <div className="mt-4">
                <Button variant="outline" className="w-full">
                  Join Backstage WebRTC Room
                </Button>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
