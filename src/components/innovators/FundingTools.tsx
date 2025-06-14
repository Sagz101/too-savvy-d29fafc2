
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Wallet, TrendingUp, Shield, Gift, DollarSign, Users } from "lucide-react";

interface FundingToolsProps {
  activeProject: string | null;
}

export const FundingTools: React.FC<FundingToolsProps> = ({ activeProject }) => {
  const [mintAmount, setMintAmount] = useState('');
  const [nftPrice, setNftPrice] = useState('');
  const [selectedTier, setSelectedTier] = useState('');

  const treasuryData = {
    totalBalance: 127.5,
    currency: 'ETH',
    usdValue: 234567,
    allocated: 89.2,
    available: 38.3,
    monthlyBurn: 12.5
  };

  const fundingSources = [
    {
      type: 'NFT Sales',
      raised: 45.2,
      target: 100,
      currency: 'ETH',
      status: 'Active',
      buyers: 156
    },
    {
      type: 'Token Bonding',
      raised: 23.8,
      target: 50,
      currency: 'ETH',
      status: 'Active',
      participants: 89
    },
    {
      type: 'Grants',
      raised: 58.5,
      target: 75,
      currency: 'ETH',
      status: 'Pending',
      applications: 3
    }
  ];

  const nftTiers = [
    {
      name: 'Supporter',
      price: '0.1 ETH',
      supply: 1000,
      sold: 234,
      benefits: ['Project Updates', 'Community Access', 'Voting Rights']
    },
    {
      name: 'Contributor',
      price: '0.5 ETH',
      supply: 500,
      sold: 89,
      benefits: ['All Supporter Benefits', 'Monthly Calls', 'Early Access', '2% Royalty Share']
    },
    {
      name: 'Founder',
      price: '2.0 ETH',
      supply: 100,
      sold: 23,
      benefits: ['All Contributor Benefits', 'Governance Power', 'Revenue Share', '5% Royalty Share']
    }
  ];

  const handleMintNFTs = () => {
    if (!mintAmount || !selectedTier) {
      toast.error("Please select tier and amount");
      return;
    }

    toast.loading("Minting NFTs to treasury...");
    
    setTimeout(() => {
      toast.success("NFTs Minted!", {
        description: `${mintAmount} ${selectedTier} NFTs added to treasury`
      });
      setMintAmount('');
      setSelectedTier('');
    }, 2000);
  };

  const handlePriceUpdate = () => {
    toast.loading("Updating NFT pricing...");
    
    setTimeout(() => {
      toast.success("Pricing Updated!", {
        description: "New prices will be effective immediately"
      });
    }, 1500);
  };

  if (!activeProject) {
    return (
      <div className="text-center p-12">
        <Wallet className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Select a Project</h3>
        <p className="text-muted-foreground">Choose a project to manage its funding and treasury</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-neura-dark/60 border-yellow-500/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Shield className="w-5 h-5 text-neura-cyan" />
              Treasury Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-3xl font-bold">{treasuryData.totalBalance} {treasuryData.currency}</div>
              <div className="text-lg text-muted-foreground">${treasuryData.usdValue.toLocaleString()}</div>
              <div className="flex justify-between text-sm">
                <span>Available: {treasuryData.available} ETH</span>
                <span>Allocated: {treasuryData.allocated} ETH</span>
              </div>
              <Progress value={(treasuryData.allocated / treasuryData.totalBalance) * 100} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neura-dark/60 border-yellow-500/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-400" />
              Monthly Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Revenue</span>
                <span className="font-semibold text-green-400">+15.2 ETH</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Expenses</span>
                <span className="font-semibold text-red-400">-{treasuryData.monthlyBurn} ETH</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Net Flow</span>
                <span className="font-semibold text-blue-400">+2.7 ETH</span>
              </div>
              <div className="text-xs text-muted-foreground">
                Runway: ~{Math.floor(treasuryData.available / treasuryData.monthlyBurn)} months
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-neura-dark/60 border-yellow-500/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Users className="w-5 h-5 text-purple-400" />
              Community Stats
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Total Holders</span>
                <span className="font-semibold">479</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Active Contributors</span>
                <span className="font-semibold">156</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Monthly Growth</span>
                <span className="font-semibold text-green-400">+23%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="nft-sales" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="nft-sales">NFT Sales</TabsTrigger>
          <TabsTrigger value="bonding">Token Bonding</TabsTrigger>
          <TabsTrigger value="grants">Grants</TabsTrigger>
          <TabsTrigger value="treasury">Treasury</TabsTrigger>
        </TabsList>
        
        <TabsContent value="nft-sales" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {nftTiers.map((tier, index) => (
              <Card key={index} className="bg-neura-dark/60 border-yellow-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {tier.name}
                    <Badge variant="outline">{tier.price}</Badge>
                  </CardTitle>
                  <CardDescription>
                    {tier.sold} / {tier.supply} sold
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Progress value={(tier.sold / tier.supply) * 100} className="h-2" />
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Benefits:</h4>
                    <ul className="text-xs space-y-1">
                      {tier.benefits.map((benefit, i) => (
                        <li key={i} className="text-muted-foreground">• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-2">
                    <Input
                      placeholder="New price"
                      value={nftPrice}
                      onChange={(e) => setNftPrice(e.target.value)}
                      className="bg-neura-dark/40 border-yellow-500/20 text-xs"
                    />
                    <Button size="sm" variant="outline" onClick={handlePriceUpdate}>
                      Update
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="bg-neura-dark/60 border-yellow-500/20">
            <CardHeader>
              <CardTitle>Mint Additional NFTs</CardTitle>
              <CardDescription>Add more NFTs to treasury for sale</CardDescription>
            </CardHeader>
            <CardContent className="flex gap-4">
              <Select onValueChange={setSelectedTier}>
                <SelectTrigger className="bg-neura-dark/40 border-yellow-500/20">
                  <SelectValue placeholder="Select tier" />
                </SelectTrigger>
                <SelectContent>
                  {nftTiers.map((tier) => (
                    <SelectItem key={tier.name} value={tier.name.toLowerCase()}>
                      {tier.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Input
                placeholder="Amount to mint"
                value={mintAmount}
                onChange={(e) => setMintAmount(e.target.value)}
                className="bg-neura-dark/40 border-yellow-500/20"
              />
              
              <Button onClick={handleMintNFTs} className="bg-gradient-to-r from-neura-cyan to-yellow-400 text-black">
                Mint NFTs
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="bonding" className="space-y-4">
          <Card className="bg-neura-dark/60 border-yellow-500/20">
            <CardHeader>
              <CardTitle>Token Bonding Curve</CardTitle>
              <CardDescription>Continuous funding through token sales</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-neura-dark/40 rounded-lg">
                  <div className="text-2xl font-bold">0.023 ETH</div>
                  <div className="text-sm text-muted-foreground">Current Token Price</div>
                </div>
                
                <div className="text-center p-4 bg-neura-dark/40 rounded-lg">
                  <div className="text-2xl font-bold">1,234</div>
                  <div className="text-sm text-muted-foreground">Tokens Sold</div>
                </div>
                
                <div className="text-center p-4 bg-neura-dark/40 rounded-lg">
                  <div className="text-2xl font-bold">23.8 ETH</div>
                  <div className="text-sm text-muted-foreground">Total Raised</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress to next milestone</span>
                  <span>75%</span>
                </div>
                <Progress value={75} className="h-2" />
                <div className="text-xs text-muted-foreground">
                  Next price increase at 1,500 tokens sold
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="grants" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-neura-dark/60 border-yellow-500/20">
              <CardHeader>
                <CardTitle>Active Grant Applications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-neura-dark/40 rounded-lg">
                    <div>
                      <h4 className="font-medium">Ethereum Foundation</h4>
                      <p className="text-sm text-muted-foreground">Infrastructure Grant</p>
                    </div>
                    <Badge variant="outline">Pending</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-neura-dark/40 rounded-lg">
                    <div>
                      <h4 className="font-medium">Climate Collective</h4>
                      <p className="text-sm text-muted-foreground">Climate Tech Grant</p>
                    </div>
                    <Badge variant="default">Approved</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-neura-dark/40 rounded-lg">
                    <div>
                      <h4 className="font-medium">Innovation Fund</h4>
                      <p className="text-sm text-muted-foreground">Research Grant</p>
                    </div>
                    <Badge variant="outline">Under Review</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-neura-dark/60 border-yellow-500/20">
              <CardHeader>
                <CardTitle>Grant Opportunities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-500/30 rounded-lg">
                    <h4 className="font-medium text-green-400">Web3 Foundation</h4>
                    <p className="text-sm text-muted-foreground">Up to 100 ETH for infrastructure projects</p>
                    <div className="text-xs text-muted-foreground mt-1">Deadline: 30 days</div>
                  </div>
                  
                  <div className="p-3 bg-gradient-to-r from-blue-900/20 to-blue-800/20 border border-blue-500/30 rounded-lg">
                    <h4 className="font-medium text-blue-400">AI Research Collective</h4>
                    <p className="text-sm text-muted-foreground">Up to 50 ETH for AI innovation</p>
                    <div className="text-xs text-muted-foreground mt-1">Deadline: 45 days</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="treasury" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-neura-dark/60 border-yellow-500/20">
              <CardHeader>
                <CardTitle>Treasury Management</CardTitle>
                <CardDescription>Gnosis Safe integration for secure fund management</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-neura-dark/40 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Multi-sig Wallet</span>
                    <Badge variant="outline" className="border-green-500 text-green-400">Active</Badge>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Address: 0x742d35Cc6634C0532925a3b8D0C9FfF1234567890
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Signers: 3/5 required
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Recent Transactions</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm p-2 bg-neura-dark/20 rounded">
                      <span>Team Payment</span>
                      <span className="text-red-400">-5.2 ETH</span>
                    </div>
                    <div className="flex justify-between text-sm p-2 bg-neura-dark/20 rounded">
                      <span>NFT Sale Revenue</span>
                      <span className="text-green-400">+12.1 ETH</span>
                    </div>
                    <div className="flex justify-between text-sm p-2 bg-neura-dark/20 rounded">
                      <span>Grant Received</span>
                      <span className="text-green-400">+25.0 ETH</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-neura-dark/60 border-yellow-500/20">
              <CardHeader>
                <CardTitle>Budget Allocation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Development</span>
                    <div className="flex items-center gap-2">
                      <Progress value={60} className="w-16 h-2" />
                      <span className="text-sm">45.2 ETH</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Marketing</span>
                    <div className="flex items-center gap-2">
                      <Progress value={30} className="w-16 h-2" />
                      <span className="text-sm">23.8 ETH</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Operations</span>
                    <div className="flex items-center gap-2">
                      <Progress value={40} className="w-16 h-2" />
                      <span className="text-sm">20.2 ETH</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Reserve</span>
                    <div className="flex items-center gap-2">
                      <Progress value={100} className="w-16 h-2" />
                      <span className="text-sm">38.3 ETH</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
