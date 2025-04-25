
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, Users, DollarSign, Tag, Radio } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export const LiveStreamSetup: React.FC = () => {
  const [tokenGated, setTokenGated] = useState(false);
  const [streamName, setStreamName] = useState('');
  const [streamDescription, setStreamDescription] = useState('');
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Schedule Live Stream</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <Label htmlFor="streamName" className="mb-2 block">Stream Name</Label>
            <Input 
              id="streamName" 
              placeholder="Enter stream title" 
              value={streamName}
              onChange={(e) => setStreamName(e.target.value)}
              className="bg-neura-dark/50 border-neura-purple/30 text-white"
            />
          </div>
          
          <div>
            <Label htmlFor="streamDescription" className="mb-2 block">Description</Label>
            <Textarea 
              id="streamDescription" 
              placeholder="Describe your stream..." 
              value={streamDescription}
              onChange={(e) => setStreamDescription(e.target.value)}
              className="bg-neura-dark/50 border-neura-purple/30 text-white min-h-[100px]"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="streamDate" className="mb-2 block">Date</Label>
              <div className="relative">
                <Input 
                  id="streamDate" 
                  type="date" 
                  className="bg-neura-dark/50 border-neura-purple/30 text-white"
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neura-purple/70 pointer-events-none w-4 h-4" />
              </div>
            </div>
            
            <div>
              <Label htmlFor="streamTime" className="mb-2 block">Time</Label>
              <div className="relative">
                <Input 
                  id="streamTime" 
                  type="time" 
                  className="bg-neura-dark/50 border-neura-purple/30 text-white"
                />
                <Clock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neura-purple/70 pointer-events-none w-4 h-4" />
              </div>
            </div>
          </div>
          
          <div>
            <Label htmlFor="duration" className="mb-2 block">Estimated Duration</Label>
            <Select>
              <SelectTrigger className="bg-neura-dark/50 border-neura-purple/30 text-white">
                <SelectValue placeholder="Select duration" />
              </SelectTrigger>
              <SelectContent className="bg-neura-dark border-neura-purple/30 text-white">
                <SelectItem value="30min">30 minutes</SelectItem>
                <SelectItem value="1hr">1 hour</SelectItem>
                <SelectItem value="2hr">2 hours</SelectItem>
                <SelectItem value="3hr">3 hours</SelectItem>
                <SelectItem value="custom">Custom duration</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-semibold text-lg text-white">Token-Gated Access</h3>
              <p className="text-sm text-white/60">Limit viewer access with NFT ownership</p>
            </div>
            <Switch 
              checked={tokenGated}
              onCheckedChange={setTokenGated}
            />
          </div>
          
          {tokenGated && (
            <Card className="bg-neura-dark/50 border-neura-purple/20 mb-6">
              <CardContent className="p-4 space-y-4">
                <div>
                  <Label htmlFor="contractAddress" className="mb-2 block">NFT Contract Address</Label>
                  <Input 
                    id="contractAddress"
                    placeholder="0x..."
                    className="bg-neura-dark/50 border-neura-purple/30 text-white"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="tokenType" className="mb-2 block">Token Type</Label>
                    <Select>
                      <SelectTrigger className="bg-neura-dark/50 border-neura-purple/30 text-white">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent className="bg-neura-dark border-neura-purple/30 text-white">
                        <SelectItem value="erc721">ERC-721 (NFT)</SelectItem>
                        <SelectItem value="erc1155">ERC-1155 (Multi-Token)</SelectItem>
                        <SelectItem value="erc20">ERC-20 (Fungible Token)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="minBalance" className="mb-2 block">Min. Token Amount</Label>
                    <Input 
                      id="minBalance" 
                      type="number"
                      min="1"
                      defaultValue="1"
                      className="bg-neura-dark/50 border-neura-purple/30 text-white"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          
          <h3 className="font-semibold text-lg mb-4 text-white">Stream Settings</h3>
          <div className="space-y-4">
            <Card className="bg-neura-dark/50 border-neura-purple/20">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <Radio className="w-5 h-5 text-neura-cyan shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-sm text-white">Livepeer Protocol</h4>
                    <p className="text-xs text-white/60 mt-1">
                      Decentralized streaming with high quality and low latency
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-neura-dark/50 border-neura-purple/20">
                <CardContent className="p-4">
                  <div className="flex items-start gap-2">
                    <Users className="w-5 h-5 text-neura-cyan shrink-0" />
                    <div>
                      <h4 className="font-medium text-sm text-white">Viewer Limit</h4>
                      <Select>
                        <SelectTrigger className="bg-neura-dark/70 border-neura-purple/20 text-white h-7 text-xs mt-1">
                          <SelectValue placeholder="No limit" />
                        </SelectTrigger>
                        <SelectContent className="bg-neura-dark border-neura-purple/30 text-white">
                          <SelectItem value="none">No limit</SelectItem>
                          <SelectItem value="100">100 viewers</SelectItem>
                          <SelectItem value="500">500 viewers</SelectItem>
                          <SelectItem value="1000">1,000 viewers</SelectItem>
                          <SelectItem value="custom">Custom limit</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-neura-dark/50 border-neura-purple/20">
                <CardContent className="p-4">
                  <div className="flex items-start gap-2">
                    <DollarSign className="w-5 h-5 text-neura-cyan shrink-0" />
                    <div>
                      <h4 className="font-medium text-sm text-white">Monetization</h4>
                      <Select>
                        <SelectTrigger className="bg-neura-dark/70 border-neura-purple/20 text-white h-7 text-xs mt-1">
                          <SelectValue placeholder="Free" />
                        </SelectTrigger>
                        <SelectContent className="bg-neura-dark border-neura-purple/30 text-white">
                          <SelectItem value="free">Free</SelectItem>
                          <SelectItem value="paid">Paid Access</SelectItem>
                          <SelectItem value="donation">Donations</SelectItem>
                          <SelectItem value="subscription">Subscription</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pt-4 border-t border-neura-purple/20">
        <h3 className="font-semibold text-lg mb-4 text-white">Tags & Discovery</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-neura-purple/20 text-white px-3 py-1 rounded-full text-sm flex items-center">
            Crypto <button className="ml-2 text-white/70 hover:text-white">×</button>
          </span>
          <span className="bg-neura-purple/20 text-white px-3 py-1 rounded-full text-sm flex items-center">
            Web3 <button className="ml-2 text-white/70 hover:text-white">×</button>
          </span>
          <span className="bg-neura-purple/20 text-white px-3 py-1 rounded-full text-sm flex items-center">
            Tutorial <button className="ml-2 text-white/70 hover:text-white">×</button>
          </span>
          <div className="relative">
            <Input 
              placeholder="Add tag..." 
              className="bg-neura-dark/50 border-neura-purple/30 text-white h-8 pl-9 w-32"
            />
            <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neura-purple/70" />
          </div>
        </div>
      </div>
      
      <div className="flex justify-end gap-4 mt-6">
        <Button variant="outline" className="border-neura-purple/30 text-white hover:bg-neura-purple/10">
          Save Draft
        </Button>
        <Button className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90">
          Schedule Stream
        </Button>
      </div>
    </div>
  );
};
