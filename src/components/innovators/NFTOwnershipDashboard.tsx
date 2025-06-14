
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Shield, Users, GitBranch, Award, TrendingUp, Calendar } from "lucide-react";

interface NFTOwnershipDashboardProps {
  activeProject: string | null;
}

export const NFTOwnershipDashboard: React.FC<NFTOwnershipDashboardProps> = ({ activeProject }) => {
  const [selectedNFT, setSelectedNFT] = useState<string | null>(null);

  const mockNFTs = [
    {
      id: 'nft-1',
      type: 'Founder',
      project: 'AI Climate Solutions',
      ownership: 15,
      role: 'Technical Lead',
      contributions: 45,
      value: 2.5,
      lastUpdate: '2 hours ago',
      metadata: {
        commits: 89,
        designs: 12,
        votes: 23
      }
    },
    {
      id: 'nft-2',
      type: 'Contributor',
      project: 'Quantum Computing Research',
      ownership: 8,
      role: 'Research Scientist',
      contributions: 28,
      value: 1.8,
      lastUpdate: '1 day ago',
      metadata: {
        commits: 34,
        papers: 3,
        reviews: 15
      }
    },
    {
      id: 'nft-3',
      type: 'Sponsor',
      project: 'Decentralized Energy Grid',
      ownership: 12,
      role: 'Strategic Investor',
      contributions: 0,
      value: 3.2,
      lastUpdate: '3 days ago',
      metadata: {
        funding: 25000,
        connections: 8,
        mentoring: 12
      }
    }
  ];

  const handleUpdateContributions = () => {
    toast.loading("Updating NFT metadata with latest contributions...");
    
    setTimeout(() => {
      toast.success("NFT Metadata Updated!", {
        description: "Your contribution data has been synced from connected platforms"
      });
    }, 2000);
  };

  if (!activeProject) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockNFTs.map((nft) => (
          <Card key={nft.id} className="bg-neura-dark/60 border-yellow-500/20 hover:border-neura-cyan/50 transition-colors">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Shield className="w-5 h-5 text-neura-cyan" />
                  {nft.type} NFT
                </CardTitle>
                <Badge variant={nft.type === 'Founder' ? 'default' : 'secondary'}>
                  {nft.ownership}% ownership
                </Badge>
              </div>
              <CardDescription>{nft.project}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Role</span>
                <span className="font-medium">{nft.role}</span>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Contribution Score</span>
                  <span>{nft.contributions}/100</span>
                </div>
                <Progress value={nft.contributions} className="h-2" />
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Current Value</span>
                <span className="font-semibold text-green-400">{nft.value} ETH</span>
              </div>
              
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-lg font-bold">{nft.metadata.commits || nft.metadata.funding}</div>
                  <div className="text-xs text-muted-foreground">
                    {nft.metadata.commits ? 'Commits' : 'USD Funded'}
                  </div>
                </div>
                <div>
                  <div className="text-lg font-bold">{nft.metadata.designs || nft.metadata.papers || nft.metadata.connections}</div>
                  <div className="text-xs text-muted-foreground">
                    {nft.metadata.designs ? 'Designs' : nft.metadata.papers ? 'Papers' : 'Connections'}
                  </div>
                </div>
                <div>
                  <div className="text-lg font-bold">{nft.metadata.votes || nft.metadata.reviews || nft.metadata.mentoring}</div>
                  <div className="text-xs text-muted-foreground">
                    {nft.metadata.votes ? 'Votes' : nft.metadata.reviews ? 'Reviews' : 'Mentoring'}
                  </div>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={handleUpdateContributions}
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                Update Contributions
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="bg-neura-dark/60 border-yellow-500/20">
        <CardHeader>
          <CardTitle>Project NFT Overview</CardTitle>
          <CardDescription>Your ownership and contribution tracking for the active project</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="ownership" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="ownership">Ownership</TabsTrigger>
              <TabsTrigger value="contributions">Contributions</TabsTrigger>
              <TabsTrigger value="rewards">Rewards</TabsTrigger>
            </TabsList>
            
            <TabsContent value="ownership" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-neura-dark/40 rounded-lg">
                  <Shield className="w-8 h-8 text-neura-cyan mx-auto mb-2" />
                  <div className="text-2xl font-bold">15%</div>
                  <div className="text-sm text-muted-foreground">Project Ownership</div>
                </div>
                
                <div className="text-center p-4 bg-neura-dark/40 rounded-lg">
                  <Users className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold">Founder</div>
                  <div className="text-sm text-muted-foreground">NFT Type</div>
                </div>
                
                <div className="text-center p-4 bg-neura-dark/40 rounded-lg">
                  <Award className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold">3</div>
                  <div className="text-sm text-muted-foreground">Voting Power</div>
                </div>
                
                <div className="text-center p-4 bg-neura-dark/40 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold">2.5 ETH</div>
                  <div className="text-sm text-muted-foreground">Current Value</div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="contributions" className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-neura-dark/40 rounded-lg">
                  <div className="flex items-center gap-3">
                    <GitBranch className="w-5 h-5 text-neura-cyan" />
                    <div>
                      <h4 className="font-medium">Code Contributions</h4>
                      <p className="text-sm text-muted-foreground">GitHub commits and PRs</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold">89</div>
                    <div className="text-sm text-muted-foreground">This month</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-neura-dark/40 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-yellow-400" />
                    <div>
                      <h4 className="font-medium">Design Assets</h4>
                      <p className="text-sm text-muted-foreground">UI/UX and visual content</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold">12</div>
                    <div className="text-sm text-muted-foreground">This month</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-neura-dark/40 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-green-400" />
                    <div>
                      <h4 className="font-medium">Governance Participation</h4>
                      <p className="text-sm text-muted-foreground">Proposals and votes</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold">23</div>
                    <div className="text-sm text-muted-foreground">This month</div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="rewards" className="space-y-4">
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-green-900/20 to-green-800/20 border border-green-500/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-green-400">Contribution Rewards</h4>
                    <Badge variant="outline" className="border-green-500 text-green-400">
                      +0.2 ETH
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Earned from monthly contribution scoring and peer validation
                  </p>
                </div>
                
                <div className="p-4 bg-gradient-to-r from-blue-900/20 to-blue-800/20 border border-blue-500/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-blue-400">Governance Rewards</h4>
                    <Badge variant="outline" className="border-blue-500 text-blue-400">
                      +0.1 ETH
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Earned from active participation in DAO governance
                  </p>
                </div>
                
                <div className="p-4 bg-gradient-to-r from-purple-900/20 to-purple-800/20 border border-purple-500/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-purple-400">Milestone Bonuses</h4>
                    <Badge variant="outline" className="border-purple-500 text-purple-400">
                      +0.5 ETH
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Earned from achieving project milestones and deliverables
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};
