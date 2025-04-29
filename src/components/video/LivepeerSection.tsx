
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Play, Upload, Users, DollarSign } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export const LivepeerSection: React.FC = () => {
  const [streamKey, setStreamKey] = useState('');
  const [tokenGated, setTokenGated] = useState(false);
  const [streamStatus, setStreamStatus] = useState<'offline' | 'connecting' | 'live'>('offline');
  
  const handleStartStream = () => {
    setStreamStatus('connecting');
    // Simulate connection delay
    setTimeout(() => {
      setStreamStatus('live');
    }, 2000);
  };
  
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="bg-neura-dark/50 border border-neura-purple/30 overflow-hidden h-full">
            <CardContent className="p-0">
              {streamStatus === 'offline' ? (
                <div className="h-[400px] bg-gradient-to-br from-neura-purple/20 to-neura-cyan/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-full bg-neura-purple/30 flex items-center justify-center backdrop-blur-sm mx-auto mb-4">
                      <Play className="w-10 h-10 text-white ml-1" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">Start Your Livepeer Stream</h3>
                    <p className="text-white/70 mb-6">Connect your streaming software using the settings on the right</p>
                    <Button 
                      className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
                      onClick={handleStartStream}
                    >
                      Start Stream
                    </Button>
                  </div>
                </div>
              ) : streamStatus === 'connecting' ? (
                <div className="h-[400px] bg-gradient-to-br from-neura-purple/20 to-neura-cyan/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-neura-cyan border-t-transparent rounded-full animate-spin mb-4 mx-auto"></div>
                    <p className="text-white">Connecting to Livepeer network...</p>
                  </div>
                </div>
              ) : (
                <div className="h-[400px] bg-neura-dark/90 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center backdrop-blur-sm mx-auto mb-4 animate-pulse">
                        <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                      </div>
                      <p className="text-white font-medium">LIVE</p>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-neura-dark/80 backdrop-blur-sm px-3 py-1 rounded-md">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-neura-cyan" />
                      <span className="text-white">0 viewers</span>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="p-4 border-t border-neura-purple/30">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-white">Decentralized Streaming</h3>
                    <p className="text-sm text-white/70">Powered by Livepeer Protocol</p>
                  </div>
                  {streamStatus === 'live' && (
                    <Button 
                      variant="destructive" 
                      size="sm" 
                      onClick={() => setStreamStatus('offline')}
                    >
                      End Stream
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="bg-neura-dark/50 border border-neura-purple/30 overflow-hidden mb-6">
            <CardContent className="p-4">
              <h3 className="font-medium text-white mb-4">Stream Settings</h3>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="streamKey" className="mb-2 block">Stream Key</Label>
                  <div className="flex gap-2">
                    <Input 
                      id="streamKey" 
                      value={streamKey ? '•••••••••••••••••' : ''}
                      placeholder="Generate a stream key"
                      readOnly
                      className="bg-neura-dark/50 border-neura-purple/30 text-white"
                    />
                    <Button 
                      variant="outline" 
                      className="border-neura-purple/30 text-white hover:bg-neura-purple/10 whitespace-nowrap"
                      onClick={() => setStreamKey('lpstr_' + Math.random().toString(36).substring(2, 15))}
                    >
                      Generate
                    </Button>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="rtmpUrl" className="mb-2 block">RTMP URL</Label>
                  <Input 
                    id="rtmpUrl" 
                    value="rtmp://ingest.livepeer.studio/live"
                    readOnly
                    className="bg-neura-dark/50 border-neura-purple/30 text-white"
                  />
                </div>
                
                <Separator className="bg-neura-purple/20 my-4" />
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="mb-1 block">Token-Gated Access</Label>
                    <p className="text-sm text-white/70">Require NFT ownership</p>
                  </div>
                  <Switch 
                    checked={tokenGated}
                    onCheckedChange={setTokenGated}
                  />
                </div>
                
                {tokenGated && (
                  <div className="pt-2">
                    <Label htmlFor="tokenContract" className="mb-2 block">NFT Contract</Label>
                    <Input 
                      id="tokenContract"
                      placeholder="0x..."
                      className="bg-neura-dark/50 border-neura-purple/30 text-white mb-2"
                    />
                    
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <Label htmlFor="tokenType" className="mb-1 block text-sm">Token Type</Label>
                        <Select>
                          <SelectTrigger className="bg-neura-dark/50 border-neura-purple/30 text-white h-8">
                            <SelectValue placeholder="ERC-721" />
                          </SelectTrigger>
                          <SelectContent className="bg-neura-dark border-neura-purple/30 text-white">
                            <SelectItem value="erc721">ERC-721</SelectItem>
                            <SelectItem value="erc1155">ERC-1155</SelectItem>
                            <SelectItem value="custom">Custom</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="minTokens" className="mb-1 block text-sm">Min. Tokens</Label>
                        <Input 
                          id="minTokens"
                          type="number"
                          defaultValue="1"
                          className="bg-neura-dark/50 border-neura-purple/30 text-white h-8"
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="mb-1 block">Monetization</Label>
                    <p className="text-sm text-white/70">Charge for viewing</p>
                  </div>
                  <Select>
                    <SelectTrigger className="bg-neura-dark/50 border-neura-purple/30 text-white w-28">
                      <SelectValue placeholder="Free" />
                    </SelectTrigger>
                    <SelectContent className="bg-neura-dark border-neura-purple/30 text-white">
                      <SelectItem value="free">Free</SelectItem>
                      <SelectItem value="paid">Pay-per-view</SelectItem>
                      <SelectItem value="subscription">Subscription</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-neura-dark/50 border border-neura-purple/30 overflow-hidden">
            <CardContent className="p-4">
              <h3 className="font-medium text-white mb-4">Why Livepeer?</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-neura-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-neura-cyan">✓</span>
                  </div>
                  <span className="text-white/90">Decentralized transcoding network</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-neura-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-neura-cyan">✓</span>
                  </div>
                  <span className="text-white/90">Cost-effective video streaming</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-neura-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-neura-cyan">✓</span>
                  </div>
                  <span className="text-white/90">Web3-native integrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-neura-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs text-neura-cyan">✓</span>
                  </div>
                  <span className="text-white/90">Censorship-resistant content</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Card className="bg-neura-dark/50 border border-neura-purple/30 overflow-hidden">
        <CardContent className="p-6">
          <h3 className="font-medium text-white text-lg mb-4">Mint Your Stream as NFT</h3>
          <p className="text-white/70 mb-6">
            Transform your live stream into collectable NFTs that viewers can purchase for exclusive access.
            Set up royalties to earn from secondary sales.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-neura-purple/10 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <Upload className="w-5 h-5 text-neura-cyan" />
                <h4 className="font-medium text-white">ERC-1155 Standard</h4>
              </div>
              <p className="text-sm text-white/70">Multi-token standard for batch minting access passes</p>
            </div>
            
            <div className="bg-neura-purple/10 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-neura-cyan" />
                <h4 className="font-medium text-white">Token-Gated Access</h4>
              </div>
              <p className="text-sm text-white/70">Limit viewing to NFT holders only</p>
            </div>
            
            <div className="bg-neura-purple/10 p-4 rounded-lg">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="w-5 h-5 text-neura-cyan" />
                <h4 className="font-medium text-white">Royalty Structure</h4>
              </div>
              <p className="text-sm text-white/70">Earn from initial sales and secondary market trades</p>
            </div>
          </div>
          
          <Button className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90">
            Configure NFT Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
