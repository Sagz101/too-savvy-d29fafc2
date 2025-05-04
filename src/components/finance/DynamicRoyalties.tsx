
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { WalletCards, LinkIcon, ShoppingCart } from "lucide-react";

type RoyaltyStream = {
  id: string;
  title: string;
  platform: string;
  totalEarned: number;
  currency: string;
  royaltyRate: number;
  dynamicInfo?: string;
  lastPayout: string;
  nextEstimate: number;
};

type License = {
  id: string;
  title: string;
  licensee: string;
  startDate: string;
  endDate: string;
  fee: number;
  currency: string;
  usage: string;
  type: 'exclusive' | 'non-exclusive';
};

export const DynamicRoyalties: React.FC<{
  royalties: RoyaltyStream[];
  licenses: License[];
}> = ({ royalties, licenses }) => {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="royalties" className="w-full">
        <TabsList className="grid grid-cols-2 gap-2 bg-neura-dark/50 border border-neura-purple/30 p-1 rounded-lg">
          <TabsTrigger 
            value="royalties" 
            className="data-[state=active]:bg-neura-purple/20 data-[state=active]:text-white"
          >
            <WalletCards className="w-4 h-4 mr-2" /> Royalty Streams
          </TabsTrigger>
          <TabsTrigger 
            value="licensing" 
            className="data-[state=active]:bg-neura-purple/20 data-[state=active]:text-white"
          >
            <LinkIcon className="w-4 h-4 mr-2" /> Licensing
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="royalties" className="mt-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium flex items-center">
                <WalletCards className="w-5 h-5 mr-2 text-neura-cyan" />
                Dynamic Royalty Streams
              </h3>
              <Button
                variant="outline"
                size="sm"
                className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
              >
                <ShoppingCart className="w-4 h-4 mr-1" /> Set Up New Stream
              </Button>
            </div>
            
            {royalties.map(stream => (
              <Card key={stream.id} className="bg-neura-dark/80 border-neura-purple/20">
                <CardHeader className="pb-3">
                  <div className="flex justify-between">
                    <div>
                      <CardTitle className="text-base">{stream.title}</CardTitle>
                      <CardDescription>on {stream.platform}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold">{stream.totalEarned} {stream.currency}</div>
                      <div className="text-xs text-white/50">Total Earned</div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pb-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="text-xs text-white/50">Royalty Rate</div>
                      <div className="text-lg font-bold">
                        {stream.royaltyRate}%
                        {stream.dynamicInfo && (
                          <Badge className="ml-2 bg-neura-purple/80 text-xs">
                            Dynamic
                          </Badge>
                        )}
                      </div>
                      {stream.dynamicInfo && (
                        <div className="text-xs text-neura-cyan">{stream.dynamicInfo}</div>
                      )}
                    </div>
                    <div>
                      <div className="text-xs text-white/50">Last Payout</div>
                      <div className="text-lg">{stream.lastPayout}</div>
                    </div>
                    <div>
                      <div className="text-xs text-white/50">Next Estimate</div>
                      <div className="text-lg font-bold">{stream.nextEstimate} {stream.currency}</div>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="border-t border-neura-purple/20 pt-3">
                  <div className="grid grid-cols-2 gap-2 w-full">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
                    >
                      View Analytics
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
                    >
                      Manage Stream
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="licensing" className="mt-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium flex items-center">
                <LinkIcon className="w-5 h-5 mr-2 text-neura-cyan" />
                Cross-Platform Licenses
              </h3>
              <Button
                variant="outline"
                size="sm"
                className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
              >
                Create New License
              </Button>
            </div>
            
            {licenses.map(license => (
              <Card key={license.id} className="bg-neura-dark/80 border-neura-purple/20">
                <CardHeader className="pb-3">
                  <div className="flex justify-between">
                    <div>
                      <CardTitle className="text-base">{license.title}</CardTitle>
                      <CardDescription>Licensed to {license.licensee}</CardDescription>
                    </div>
                    <Badge className={`${
                      license.type === 'exclusive' ? 'bg-neura-purple' : 'bg-neura-cyan/60'
                    }`}>
                      {license.type === 'exclusive' ? 'Exclusive' : 'Non-Exclusive'}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="pb-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <div className="text-xs text-white/50">License Fee</div>
                      <div className="text-lg font-bold">{license.fee} {license.currency}</div>
                    </div>
                    <div>
                      <div className="text-xs text-white/50">Duration</div>
                      <div className="text-sm">{license.startDate} to {license.endDate}</div>
                    </div>
                    <div>
                      <div className="text-xs text-white/50">Usage</div>
                      <div className="text-sm">{license.usage}</div>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="border-t border-neura-purple/20 pt-3">
                  <div className="grid grid-cols-2 gap-2 w-full">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
                    >
                      View Contract
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
                    >
                      Contact Licensee
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
            
            <Card className="bg-neura-dark/80 border-neura-purple/20 p-6">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-neura-purple/20 flex items-center justify-center mr-4">
                  <LinkIcon className="w-5 h-5 text-neura-cyan" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">API Integration</h4>
                  <p className="text-sm text-white/70 mb-3">
                    Connect third-party platforms to your content licensing API.
                    Enable seamless Web2/Web3 integration for your creative assets.
                  </p>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="border-neura-purple/30 text-white hover:bg-neura-purple/10">
                      View API Docs
                    </Button>
                    <Button variant="outline" size="sm" className="border-neura-purple/30 text-white hover:bg-neura-purple/10">
                      Generate API Key
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
