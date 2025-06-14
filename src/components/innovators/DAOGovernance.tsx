
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Users, Vote, Clock, CheckCircle, XCircle, Plus } from "lucide-react";

interface DAOGovernanceProps {
  activeProject: string | null;
}

export const DAOGovernance: React.FC<DAOGovernanceProps> = ({ activeProject }) => {
  const [showCreateProposal, setShowCreateProposal] = useState(false);
  const [proposalData, setProposalData] = useState({
    title: '',
    description: '',
    amount: '',
    recipient: ''
  });

  const mockProposals = [
    {
      id: 'prop-1',
      title: 'Increase Research Budget for Q3',
      description: 'Allocate additional 50 ETH for quantum algorithm research and development',
      type: 'Budget',
      amount: '50 ETH',
      proposer: '0x123...789',
      status: 'Active',
      votesFor: 127,
      votesAgainst: 23,
      totalVotes: 150,
      quorum: 200,
      timeLeft: '2 days',
      myVote: null
    },
    {
      id: 'prop-2',
      title: 'Add New Team Member - ML Engineer',
      description: 'Hire specialist for machine learning optimization and model training',
      type: 'Team',
      amount: '0 ETH',
      proposer: '0x456...012',
      status: 'Passed',
      votesFor: 189,
      votesAgainst: 34,
      totalVotes: 223,
      quorum: 200,
      timeLeft: 'Ended',
      myVote: 'for'
    },
    {
      id: 'prop-3',
      title: 'Partnership with Climate Research Lab',
      description: 'Strategic partnership for accessing climate data and validation resources',
      type: 'Partnership',
      amount: '25 ETH',
      proposer: '0x789...345',
      status: 'Failed',
      votesFor: 67,
      votesAgainst: 156,
      totalVotes: 223,
      quorum: 200,
      timeLeft: 'Ended',
      myVote: 'against'
    }
  ];

  const handleVote = (proposalId: string, vote: 'for' | 'against') => {
    toast.loading("Submitting your vote...");
    
    setTimeout(() => {
      toast.success("Vote Submitted!", {
        description: `Your vote "${vote}" has been recorded on-chain`
      });
    }, 2000);
  };

  const handleCreateProposal = () => {
    if (!proposalData.title || !proposalData.description) {
      toast.error("Please fill in all required fields");
      return;
    }

    toast.loading("Creating proposal and submitting to DAO...");
    
    setTimeout(() => {
      toast.success("Proposal Created!", {
        description: "Your proposal has been submitted and voting is now open"
      });
      setShowCreateProposal(false);
      setProposalData({ title: '', description: '', amount: '', recipient: '' });
    }, 2000);
  };

  if (!activeProject) {
    return (
      <div className="text-center p-12">
        <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Select a Project</h3>
        <p className="text-muted-foreground">Choose a project to view its DAO governance</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">DAO Governance</h2>
          <p className="text-muted-foreground">Participate in decentralized decision making</p>
        </div>
        <Button 
          onClick={() => setShowCreateProposal(!showCreateProposal)}
          className="bg-gradient-to-r from-neura-cyan to-yellow-400 text-black"
        >
          <Plus className="w-4 h-4 mr-2" />
          New Proposal
        </Button>
      </div>

      {showCreateProposal && (
        <Card className="bg-neura-dark/60 border-yellow-500/20">
          <CardHeader>
            <CardTitle>Create New Proposal</CardTitle>
            <CardDescription>Submit a proposal for DAO consideration</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Proposal Title"
              value={proposalData.title}
              onChange={(e) => setProposalData(prev => ({ ...prev, title: e.target.value }))}
              className="bg-neura-dark/40 border-yellow-500/20"
            />
            
            <Textarea
              placeholder="Detailed description of the proposal..."
              value={proposalData.description}
              onChange={(e) => setProposalData(prev => ({ ...prev, description: e.target.value }))}
              className="bg-neura-dark/40 border-yellow-500/20 min-h-[120px]"
            />
            
            <div className="grid grid-cols-2 gap-4">
              <Input
                placeholder="Amount (if applicable)"
                value={proposalData.amount}
                onChange={(e) => setProposalData(prev => ({ ...prev, amount: e.target.value }))}
                className="bg-neura-dark/40 border-yellow-500/20"
              />
              
              <Input
                placeholder="Recipient Address (if applicable)"
                value={proposalData.recipient}
                onChange={(e) => setProposalData(prev => ({ ...prev, recipient: e.target.value }))}
                className="bg-neura-dark/40 border-yellow-500/20"
              />
            </div>
            
            <div className="flex gap-2">
              <Button onClick={handleCreateProposal} className="bg-gradient-to-r from-neura-cyan to-yellow-400 text-black">
                Submit Proposal
              </Button>
              <Button variant="outline" onClick={() => setShowCreateProposal(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="active" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="active">Active Proposals</TabsTrigger>
          <TabsTrigger value="history">Voting History</TabsTrigger>
          <TabsTrigger value="stats">DAO Stats</TabsTrigger>
        </TabsList>
        
        <TabsContent value="active" className="space-y-4">
          {mockProposals.filter(p => p.status === 'Active').map((proposal) => (
            <Card key={proposal.id} className="bg-neura-dark/60 border-yellow-500/20">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{proposal.title}</CardTitle>
                    <CardDescription className="mt-1">{proposal.description}</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{proposal.type}</Badge>
                    <Badge variant={proposal.status === 'Active' ? 'default' : 'secondary'}>
                      {proposal.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>For: {proposal.votesFor}</span>
                      <span>Against: {proposal.votesAgainst}</span>
                    </div>
                    <Progress 
                      value={(proposal.votesFor / (proposal.votesFor + proposal.votesAgainst)) * 100} 
                      className="h-2"
                    />
                  </div>
                  
                  <div className="text-center">
                    <div className="text-lg font-bold">{proposal.totalVotes}/{proposal.quorum}</div>
                    <div className="text-sm text-muted-foreground">Quorum Progress</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-lg font-bold flex items-center justify-center gap-1">
                      <Clock className="w-4 h-4" />
                      {proposal.timeLeft}
                    </div>
                    <div className="text-sm text-muted-foreground">Time Remaining</div>
                  </div>
                </div>
                
                {proposal.amount && (
                  <div className="p-3 bg-neura-dark/40 rounded-lg">
                    <div className="text-sm text-muted-foreground">Requested Amount</div>
                    <div className="text-lg font-semibold text-green-400">{proposal.amount}</div>
                  </div>
                )}
                
                <div className="flex gap-2">
                  <Button 
                    onClick={() => handleVote(proposal.id, 'for')}
                    disabled={proposal.myVote !== null}
                    className="flex-1 bg-green-600 hover:bg-green-700"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Vote For
                  </Button>
                  <Button 
                    onClick={() => handleVote(proposal.id, 'against')}
                    disabled={proposal.myVote !== null}
                    variant="destructive"
                    className="flex-1"
                  >
                    <XCircle className="w-4 h-4 mr-2" />
                    Vote Against
                  </Button>
                </div>
                
                {proposal.myVote && (
                  <div className="text-center text-sm text-muted-foreground">
                    You voted: <span className="font-medium">{proposal.myVote}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="history" className="space-y-4">
          {mockProposals.filter(p => p.status !== 'Active').map((proposal) => (
            <Card key={proposal.id} className="bg-neura-dark/60 border-yellow-500/20">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{proposal.title}</CardTitle>
                    <CardDescription className="mt-1">{proposal.description}</CardDescription>
                  </div>
                  <Badge variant={proposal.status === 'Passed' ? 'default' : 'destructive'}>
                    {proposal.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>For: {proposal.votesFor}</span>
                      <span>Against: {proposal.votesAgainst}</span>
                    </div>
                    <Progress 
                      value={(proposal.votesFor / (proposal.votesFor + proposal.votesAgainst)) * 100} 
                      className="h-2"
                    />
                  </div>
                  
                  <div className="text-center">
                    <div className="text-lg font-bold">{proposal.totalVotes}/{proposal.quorum}</div>
                    <div className="text-sm text-muted-foreground">Final Turnout</div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-sm text-muted-foreground">Your Vote</div>
                    <div className="text-lg font-bold capitalize">{proposal.myVote || 'Abstained'}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="stats" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-neura-dark/60 border-yellow-500/20">
              <CardContent className="p-6 text-center">
                <Vote className="w-8 h-8 text-neura-cyan mx-auto mb-2" />
                <div className="text-2xl font-bold">23</div>
                <div className="text-sm text-muted-foreground">Total Proposals</div>
              </CardContent>
            </Card>
            
            <Card className="bg-neura-dark/60 border-yellow-500/20">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold">156</div>
                <div className="text-sm text-muted-foreground">DAO Members</div>
              </CardContent>
            </Card>
            
            <Card className="bg-neura-dark/60 border-yellow-500/20">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold">87%</div>
                <div className="text-sm text-muted-foreground">Avg Participation</div>
              </CardContent>
            </Card>
            
            <Card className="bg-neura-dark/60 border-yellow-500/20">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold">3.2</div>
                <div className="text-sm text-muted-foreground">Avg Vote Time (days)</div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
