
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Users, Coins, ChartBar } from "lucide-react";
import { FanParticipationToken, CreatorFanBond } from "@/services/wallet";

type MonetizationEnhancementsProps = {
  fanParticipationTokens: FanParticipationToken[];
  creatorFanBonds: CreatorFanBond[];
};

export const MonetizationEnhancements: React.FC<MonetizationEnhancementsProps> = ({
  fanParticipationTokens,
  creatorFanBonds
}) => {
  return (
    <div className="space-y-6">
      {/* Creator DAOs with Micro-Royalties Section */}
      <Card className="bg-neura-dark/80 border-neura-purple/20">
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Users className="w-5 h-5 mr-2 text-neura-cyan" />
            Creator DAOs & Fan Tokens
          </CardTitle>
          <CardDescription>
            Enable fractionalized revenue sharing and community governance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {fanParticipationTokens.map((token) => (
              <Card key={token.id} className="bg-neura-dark border-neura-purple/10 p-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-neura-purple/20 flex items-center justify-center mr-3">
                      {token.symbol.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium">{token.name}</div>
                      <div className="text-xs text-white/70">{token.symbol}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{token.price} {token.currency}</div>
                    <div className="text-xs text-white/50">Current price</div>
                  </div>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1 text-white/70" />
                    <span>{token.holders} holders</span>
                  </div>
                  <div className="flex items-center">
                    <ChartBar className="w-4 h-4 mr-1 text-white/70" />
                    <span>{token.activePolls} active polls</span>
                  </div>
                  <div className="text-neura-cyan">
                    {token.totalSupply.toLocaleString()} total supply
                  </div>
                </div>
                <div className="mt-3">
                  <Button 
                    size="sm" 
                    className="mr-2 bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
                  >
                    Buy
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
                  >
                    Vote
                  </Button>
                </div>
              </Card>
            ))}
            <Card className="bg-neura-dark border-neura-purple/10 p-4 flex items-center justify-center hover:bg-neura-dark/70 cursor-pointer">
              <div className="text-center">
                <div className="font-medium">Create New Token</div>
                <div className="text-xs text-white/50">Launch your creator DAO</div>
              </div>
            </Card>
          </div>
        </CardContent>
      </Card>
      
      {/* Creator-Fan Bonds Section */}
      <Card className="bg-neura-dark/80 border-neura-purple/20">
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Coins className="w-5 h-5 mr-2 text-neura-cyan" />
            Creator-Fan Bonds
          </CardTitle>
          <CardDescription>
            Non-tradable social bonds that grow with your success
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {creatorFanBonds.map((bond) => (
            <Card key={bond.id} className="bg-neura-dark border-neura-purple/10 p-4">
              <div className="flex justify-between items-center mb-3">
                <div>
                  <div className="font-medium">{bond.name}</div>
                  <div className="text-xs text-white/70">Issued: {bond.issuedDate}</div>
                </div>
                <Badge className="bg-neura-purple/20 text-neura-purple border-neura-purple/30">
                  {bond.maturityDate ? 'Term' : 'Perpetual'}
                </Badge>
              </div>
              <div className="mb-3">
                <div className="flex justify-between text-xs text-white/70 mb-1">
                  <span>Initial Value</span>
                  <span>Current Value</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="font-medium">{bond.initialValue} {bond.currency}</div>
                  <div className="w-16 h-0.5 bg-neura-dark mx-2 relative">
                    <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-neura-purple to-neura-cyan" style={{ width: '100%' }}></div>
                  </div>
                  <div className="font-medium text-neura-cyan">{bond.currentValue} {bond.currency}</div>
                </div>
              </div>
              <div className="flex justify-between text-sm">
                <div className="text-white/50">Supporter: {bond.supporter}</div>
                <div className={`${bond.currentValue > bond.initialValue ? 'text-green-500' : 'text-red-500'}`}>
                  {((bond.currentValue - bond.initialValue) / bond.initialValue * 100).toFixed(1)}%
                </div>
              </div>
            </Card>
          ))}
          <Card className="bg-neura-dark border-neura-purple/10 p-4">
            <div className="font-medium mb-3">Issue New Bonds</div>
            <div className="space-y-4">
              <div>
                <div className="text-sm mb-2">Bond Term</div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="border-neura-purple/30 text-white hover:bg-neura-purple/10">3 Months</Button>
                  <Button size="sm" variant="outline" className="border-neura-purple/30 text-white hover:bg-neura-purple/10">6 Months</Button>
                  <Button size="sm" variant="outline" className="border-neura-purple/30 text-white hover:bg-neura-purple/10">1 Year</Button>
                  <Button size="sm" variant="outline" className="border-neura-purple/30 text-white hover:bg-neura-purple/10">Perpetual</Button>
                </div>
              </div>
              <Button 
                className="w-full bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
              >
                Create Bond Offering
              </Button>
            </div>
          </Card>
        </CardContent>
      </Card>
      
      {/* Predictive Pricing Engine Section */}
      <Card className="bg-neura-dark/80 border-neura-purple/20">
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <ChartBar className="w-5 h-5 mr-2 text-neura-cyan" />
            Predictive Pricing Engine
          </CardTitle>
          <CardDescription>
            Optimize your NFT pricing based on market data and engagement
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="p-4 border border-neura-purple/20 rounded-lg bg-neura-dark/50 mb-4">
            <div className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-sm">Price Optimization</span>
                <Badge className="bg-green-500/20 text-green-500 border-green-500/30">Active</Badge>
              </div>
              <div className="text-xs text-white/70 mb-2">
                Auto-adjusts prices based on market trends and engagement metrics
              </div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs">Conservative</span>
                <span className="text-xs">Aggressive</span>
              </div>
              <Slider defaultValue={[65]} max={100} step={1} className="mb-2" />
            </div>
            <div className="flex justify-between text-sm">
              <div className="flex flex-col">
                <span className="text-white/70">Last adjusted</span>
                <span>2 days ago</span>
              </div>
              <div className="flex flex-col text-right">
                <span className="text-white/70">Price change</span>
                <span className="text-green-500">+12.5%</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="border border-neura-purple/20 rounded-lg p-3">
              <div className="text-sm mb-2">Market Signals</div>
              <div className="flex justify-between mb-1 text-xs">
                <span className="text-white/70">Floor Price Trend</span>
                <span className="text-green-500">Upward</span>
              </div>
              <div className="flex justify-between mb-1 text-xs">
                <span className="text-white/70">Volume (7d)</span>
                <span className="text-green-500">+23.4%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-white/70">Unique Buyers</span>
                <span className="text-green-500">+15.7%</span>
              </div>
            </div>
            <div className="border border-neura-purple/20 rounded-lg p-3">
              <div className="text-sm mb-2">Engagement Metrics</div>
              <div className="flex justify-between mb-1 text-xs">
                <span className="text-white/70">Page Views</span>
                <span className="text-green-500">+45.2%</span>
              </div>
              <div className="flex justify-between mb-1 text-xs">
                <span className="text-white/70">Collection Favorites</span>
                <span className="text-green-500">+32.1%</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-white/70">Social Mentions</span>
                <span className="text-yellow-500">+8.3%</span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t border-neura-purple/20 pt-4">
          <Button 
            variant="outline" 
            className="w-full border-neura-purple/30 text-white hover:bg-neura-purple/10"
          >
            Customize Pricing Strategy
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
