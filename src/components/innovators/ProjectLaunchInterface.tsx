
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { Rocket, Users, Shield, Wallet, Plus, Search } from "lucide-react";

interface ProjectLaunchInterfaceProps {
  onSelectProject: (projectId: string) => void;
  mode: 'browse' | 'create';
}

export const ProjectLaunchInterface: React.FC<ProjectLaunchInterfaceProps> = ({ 
  onSelectProject, 
  mode 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    governanceModel: '',
    fundingGoal: '',
    nftStructure: '',
  });

  const [searchTerm, setSearchTerm] = useState('');

  const mockProjects = [
    {
      id: 'proj-1',
      name: 'AI Climate Solutions',
      description: 'Developing AI models to predict and mitigate climate change effects',
      category: 'AI & Environment',
      fundingRaised: 45000,
      fundingGoal: 100000,
      contributors: 23,
      nftHolders: 156,
      status: 'Active'
    },
    {
      id: 'proj-2',
      name: 'Quantum Computing Research',
      description: 'Open-source quantum computing algorithms for healthcare applications',
      category: 'Quantum Tech',
      fundingRaised: 78000,
      fundingGoal: 150000,
      contributors: 12,
      nftHolders: 89,
      status: 'Funding'
    },
    {
      id: 'proj-3',
      name: 'Decentralized Energy Grid',
      description: 'Building peer-to-peer renewable energy trading infrastructure',
      category: 'Energy & Sustainability',
      fundingRaised: 32000,
      fundingGoal: 75000,
      contributors: 18,
      nftHolders: 134,
      status: 'Development'
    }
  ];

  const categories = [
    'AI & Machine Learning',
    'Blockchain & Web3',
    'Climate & Environment',
    'Healthcare & Biotech',
    'Space Technology',
    'Quantum Computing',
    'Energy & Sustainability',
    'Education & Learning'
  ];

  const handleCreateProject = async () => {
    if (!formData.name || !formData.description || !formData.category) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      toast.loading("Creating project and minting founder NFT...");
      
      // Simulate project creation
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const projectId = `proj-${Date.now()}`;
      
      toast.success("Project Created Successfully!", {
        description: "Your founder NFT has been minted and DAO initialized"
      });
      
      onSelectProject(projectId);
    } catch (error) {
      toast.error("Failed to create project");
    }
  };

  if (mode === 'browse') {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search projects by name, category, or technology..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-neura-dark/40 border-yellow-500/20"
            />
          </div>
          <Select>
            <SelectTrigger className="w-48 bg-neura-dark/40 border-yellow-500/20">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProjects.map((project) => (
            <Card key={project.id} className="bg-neura-dark/60 border-yellow-500/20 hover:border-neura-cyan/50 transition-colors cursor-pointer"
                  onClick={() => onSelectProject(project.id)}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <Badge variant={project.status === 'Active' ? 'default' : 'secondary'}>
                    {project.status}
                  </Badge>
                </div>
                <CardDescription className="text-sm">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Funding Progress</span>
                      <span>${project.fundingRaised.toLocaleString()} / ${project.fundingGoal.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-neura-cyan to-yellow-400 h-2 rounded-full"
                        style={{ width: `${(project.fundingRaised / project.fundingGoal) * 100}%` }}
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {project.contributors} contributors
                    </span>
                    <span className="flex items-center gap-1">
                      <Shield className="w-3 h-3" />
                      {project.nftHolders} NFT holders
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <Card className="bg-neura-dark/60 border-yellow-500/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Rocket className="w-5 h-5 text-neura-cyan" />
              Project Details
            </CardTitle>
            <CardDescription>
              Define your innovation project and collaboration structure
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Project Name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="bg-neura-dark/40 border-yellow-500/20"
            />
            
            <Textarea
              placeholder="Project Description & Goals"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className="bg-neura-dark/40 border-yellow-500/20 min-h-[120px]"
            />
            
            <Select onValueChange={(value) => setFormData(prev => ({ ...prev, category: value }))}>
              <SelectTrigger className="bg-neura-dark/40 border-yellow-500/20">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card className="bg-neura-dark/60 border-yellow-500/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-neura-cyan" />
              Governance & Structure
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Select onValueChange={(value) => setFormData(prev => ({ ...prev, governanceModel: value }))}>
              <SelectTrigger className="bg-neura-dark/40 border-yellow-500/20">
                <SelectValue placeholder="DAO Governance Model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="token-weighted">Token-Weighted Voting</SelectItem>
                <SelectItem value="quadratic">Quadratic Voting</SelectItem>
                <SelectItem value="reputation">Reputation-Based</SelectItem>
                <SelectItem value="hybrid">Hybrid Model</SelectItem>
              </SelectContent>
            </Select>
            
            <Select onValueChange={(value) => setFormData(prev => ({ ...prev, nftStructure: value }))}>
              <SelectTrigger className="bg-neura-dark/40 border-yellow-500/20">
                <SelectValue placeholder="NFT Ownership Structure" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="founder">Founder NFTs (Leadership)</SelectItem>
                <SelectItem value="contributor">Contributor NFTs (Active)</SelectItem>
                <SelectItem value="sponsor">Sponsor NFTs (Funding)</SelectItem>
                <SelectItem value="validator">Validator NFTs (Review)</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card className="bg-neura-dark/60 border-yellow-500/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wallet className="w-5 h-5 text-neura-cyan" />
              Funding Setup
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Funding Goal (USD)"
              type="number"
              value={formData.fundingGoal}
              onChange={(e) => setFormData(prev => ({ ...prev, fundingGoal: e.target.value }))}
              className="bg-neura-dark/40 border-yellow-500/20"
            />
            
            <div className="grid grid-cols-3 gap-2">
              <Badge variant="outline" className="justify-center p-2">NFT Sales</Badge>
              <Badge variant="outline" className="justify-center p-2">Token Bonding</Badge>
              <Badge variant="outline" className="justify-center p-2">Grants</Badge>
            </div>
          </CardContent>
        </Card>

        <Button 
          onClick={handleCreateProject}
          className="w-full bg-gradient-to-r from-neura-cyan to-yellow-400 text-black font-semibold"
        >
          Launch Project & Mint Founder NFT
        </Button>
      </div>

      <div>
        <Card className="bg-neura-dark/60 border-yellow-500/20 sticky top-4">
          <CardHeader>
            <CardTitle>Launch Benefits</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-neura-cyan mt-0.5" />
                <div>
                  <h4 className="font-medium">NFT Ownership</h4>
                  <p className="text-sm text-muted-foreground">Provable stake and contribution tracking</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-neura-cyan mt-0.5" />
                <div>
                  <h4 className="font-medium">DAO Governance</h4>
                  <p className="text-sm text-muted-foreground">Decentralized decision making</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Wallet className="w-5 h-5 text-neura-cyan mt-0.5" />
                <div>
                  <h4 className="font-medium">Multi-Chain Funding</h4>
                  <p className="text-sm text-muted-foreground">Access to global capital</p>
                </div>
              </div>
            </div>
            
            <Separator className="bg-yellow-500/20" />
            
            <div>
              <h4 className="font-medium mb-2">Supported Networks</h4>
              <div className="flex flex-wrap gap-1">
                <Badge variant="outline" className="text-xs">Ethereum</Badge>
                <Badge variant="outline" className="text-xs">Polygon</Badge>
                <Badge variant="outline" className="text-xs">BNB</Badge>
                <Badge variant="outline" className="text-xs">Avalanche</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
