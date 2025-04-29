
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { 
  Vote, 
  Check, 
  X, 
  AlertCircle, 
  Clock, 
  ThumbsUp, 
  ThumbsDown, 
  Plus, 
  ChevronRight,
  FileText
} from 'lucide-react';
import { useWallet } from '@/services/wallet';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';
import { getUserVotingPower, getProposals, castVote, createProposal, ProposalData } from '@/services/dao-governance';

export const DAOGovernance: React.FC = () => {
  const { toast } = useToast();
  const { wallet } = useWallet();
  const [votingPower, setVotingPower] = useState(0);
  const [proposals, setProposals] = useState<ProposalData[]>([]);
  const [selectedProposal, setSelectedProposal] = useState<ProposalData | null>(null);
  const [showNewProposal, setShowNewProposal] = useState(false);
  const [newProposalTitle, setNewProposalTitle] = useState('');
  const [newProposalDesc, setNewProposalDesc] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Fetch voting power and proposals when wallet is connected
  useEffect(() => {
    if (wallet.isConnected && wallet.address && wallet.provider) {
      // Fetch voting power
      getUserVotingPower(wallet.address, wallet.provider)
        .then(setVotingPower)
        .catch(console.error);
      
      // Fetch proposals
      getProposals()
        .then(setProposals)
        .catch(console.error);
    }
  }, [wallet.isConnected, wallet.address, wallet.provider]);
  
  const handleProposalSelect = (proposal: ProposalData) => {
    setSelectedProposal(proposal);
    setShowNewProposal(false);
  };
  
  const handleCreateProposal = () => {
    if (!wallet.isConnected || !wallet.address || !wallet.signer) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to create proposals",
        variant: "destructive",
      });
      return;
    }
    
    if (!newProposalTitle.trim() || !newProposalDesc.trim()) {
      toast({
        title: "Incomplete proposal",
        description: "Please provide both a title and description",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    createProposal(newProposalTitle, newProposalDesc, wallet.address, wallet.signer)
      .then(newProposal => {
        if (newProposal) {
          setProposals(prev => [newProposal, ...prev]);
          setNewProposalTitle('');
          setNewProposalDesc('');
          setShowNewProposal(false);
        }
      })
      .catch(console.error)
      .finally(() => setIsSubmitting(false));
  };
  
  const handleVote = async (support: boolean | null) => {
    if (!selectedProposal || !wallet.isConnected || !wallet.address || !wallet.signer) {
      toast({
        title: "Cannot vote",
        description: "Please ensure you're connected and have selected a proposal",
        variant: "destructive",
      });
      return;
    }
    
    try {
      const receipt = await castVote(
        selectedProposal.id,
        wallet.address,
        support,
        wallet.signer
      );
      
      if (receipt) {
        // Update the proposal with the new vote
        setProposals(prev => prev.map(p => {
          if (p.id === selectedProposal.id) {
            const votesCast = p.votesCast + receipt.votingPower;
            const votesFor = support === true ? p.votesFor + receipt.votingPower : p.votesFor;
            const votesAgainst = support === false ? p.votesAgainst + receipt.votingPower : p.votesAgainst;
            const votesAbstain = support === null ? p.votesAbstain + receipt.votingPower : p.votesAbstain;
            
            return {
              ...p,
              votesCast,
              votesFor,
              votesAgainst,
              votesAbstain
            };
          }
          return p;
        }));
        
        // Update the selected proposal as well
        if (selectedProposal) {
          setSelectedProposal(prev => {
            if (!prev) return null;
            
            const votesCast = prev.votesCast + receipt.votingPower;
            const votesFor = support === true ? prev.votesFor + receipt.votingPower : prev.votesFor;
            const votesAgainst = support === false ? prev.votesAgainst + receipt.votingPower : prev.votesAgainst;
            const votesAbstain = support === null ? prev.votesAbstain + receipt.votingPower : prev.votesAbstain;
            
            return {
              ...prev,
              votesCast,
              votesFor,
              votesAgainst,
              votesAbstain
            };
          });
        }
      }
    } catch (error) {
      console.error("Error voting:", error);
    }
  };
  
  const getStatusBadge = (status: 'active' | 'passed' | 'failed' | 'pending') => {
    switch (status) {
      case 'active':
        return <Badge className="bg-amber-500/20 text-amber-300">Active</Badge>;
      case 'passed':
        return <Badge className="bg-emerald-500/20 text-emerald-300">Passed</Badge>;
      case 'failed':
        return <Badge className="bg-rose-500/20 text-rose-300">Failed</Badge>;
      case 'pending':
        return <Badge className="bg-blue-500/20 text-blue-300">Pending</Badge>;
    }
  };
  
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-xl font-semibold mb-2">DAO Governance</h2>
        <p className="text-white/70">
          Participate in community governance and shape the future of Neurapathy
        </p>
      </div>
      
      {!wallet.isConnected ? (
        <div className="text-center py-8">
          <Vote className="w-16 h-16 mx-auto text-white/30 mb-4" />
          <h3 className="text-lg font-medium mb-3">Connect Your Wallet</h3>
          <p className="text-white/70 mb-6 max-w-md mx-auto">
            Connect your wallet to view proposals and participate in governance
          </p>
          <WalletConnectButton />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <Card className="bg-neura-dark/50 border-neura-purple/20 mb-4">
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-medium">Your Governance</h3>
                    <p className="text-xs text-white/60">Voting power based on token holdings</p>
                  </div>
                  <div className="p-2 bg-neura-purple/10 rounded-lg">
                    <Vote className="w-5 h-5 text-neura-cyan" />
                  </div>
                </div>
                
                <div className="bg-neura-purple/10 p-3 rounded-lg mb-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-white/70">Voting Power</span>
                    <span className="font-medium">{votingPower}</span>
                  </div>
                  <Progress value={votingPower} max={100} className="h-1" />
                </div>
                
                <Button 
                  className="w-full bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
                  onClick={() => {
                    setSelectedProposal(null);
                    setShowNewProposal(true);
                  }}
                >
                  <Plus className="w-4 h-4 mr-2" /> Create Proposal
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-neura-dark/50 border-neura-purple/20">
              <CardContent className="p-4">
                <h3 className="font-medium mb-3">Proposals</h3>
                
                <div className="space-y-2">
                  {proposals.map((proposal) => (
                    <button
                      key={proposal.id}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        selectedProposal?.id === proposal.id 
                          ? 'bg-neura-purple/20 border border-neura-purple/40' 
                          : 'bg-neura-dark/40 border border-neura-purple/10 hover:border-neura-purple/30'
                      }`}
                      onClick={() => handleProposalSelect(proposal)}
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-sm truncate max-w-[180px]">{proposal.title}</h4>
                        {getStatusBadge(proposal.status)}
                      </div>
                      <div className="flex items-center justify-between text-xs text-white/60 mt-1">
                        <span>{proposal.votesCast} votes</span>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>
                            {new Date(proposal.expiresAt).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </button>
                  ))}
                  
                  {proposals.length === 0 && (
                    <div className="text-center py-6 text-white/50">
                      <AlertCircle className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm">No proposals available</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            {showNewProposal ? (
              <Card className="bg-neura-dark/50 border-neura-purple/20">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-medium text-lg">Create New Proposal</h3>
                    <Button 
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowNewProposal(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-white/70 mb-1">Proposal Title</label>
                      <Input
                        placeholder="Enter a clear, concise title"
                        value={newProposalTitle}
                        onChange={(e) => setNewProposalTitle(e.target.value)}
                        className="bg-neura-dark/80 border-neura-purple/30 text-white"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm text-white/70 mb-1">Description</label>
                      <Textarea
                        placeholder="Describe your proposal in detail..."
                        value={newProposalDesc}
                        onChange={(e) => setNewProposalDesc(e.target.value)}
                        className="bg-neura-dark/80 border-neura-purple/30 text-white min-h-[150px]"
                      />
                    </div>
                    
                    <div className="bg-neura-purple/10 p-3 rounded-lg text-sm">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-neura-cyan mt-0.5" />
                        <div>
                          <p className="text-white/80">
                            Creating a proposal requires a minimum of 50 voting power. Your voting power: {votingPower}
                          </p>
                          <p className="text-white/60 text-xs mt-1">
                            Proposals are active for 7 days and need a majority to pass
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <Button 
                        className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
                        onClick={handleCreateProposal}
                        disabled={isSubmitting || votingPower < 50}
                      >
                        Submit Proposal
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : selectedProposal ? (
              <Card className="bg-neura-dark/50 border-neura-purple/20">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-lg">{selectedProposal.title}</h3>
                      {getStatusBadge(selectedProposal.status)}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-white/60">
                      <Clock className="w-3 h-3" />
                      <span>Expires: {new Date(selectedProposal.expiresAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-xs text-white/60 mb-4">
                    <span>Created by: {selectedProposal.creator}</span>
                    <span>•</span>
                    <span>{selectedProposal.votesCast} votes</span>
                  </div>
                  
                  <div className="bg-neura-dark/40 p-4 rounded-lg border border-neura-purple/10 mb-6">
                    <p className="text-white/80 whitespace-pre-wrap">{selectedProposal.description}</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Results</span>
                      <span>{selectedProposal.votesCast > 0 ? Math.round((selectedProposal.votesFor / selectedProposal.votesCast) * 100) : 0}% in favor</span>
                    </div>
                    
                    <div className="h-4 bg-neura-dark/40 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-neura-purple to-neura-cyan"
                        style={{ width: `${selectedProposal.votesCast > 0 ? (selectedProposal.votesFor / selectedProposal.votesCast) * 100 : 0}%` }}
                      ></div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 mt-2 text-xs">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-white/60">For</span>
                          <span>{selectedProposal.votesFor}</span>
                        </div>
                        <Progress value={selectedProposal.votesFor} max={selectedProposal.votesCast || 1} className="h-1" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-white/60">Against</span>
                          <span>{selectedProposal.votesAgainst}</span>
                        </div>
                        <Progress value={selectedProposal.votesAgainst} max={selectedProposal.votesCast || 1} className="h-1" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-white/60">Abstain</span>
                          <span>{selectedProposal.votesAbstain}</span>
                        </div>
                        <Progress value={selectedProposal.votesAbstain} max={selectedProposal.votesCast || 1} className="h-1" />
                      </div>
                    </div>
                  </div>
                  
                  {selectedProposal.status === 'active' && (
                    <div>
                      <h4 className="font-medium mb-3">Cast Your Vote</h4>
                      <div className="flex items-center gap-3">
                        <Button 
                          onClick={() => handleVote(true)}
                          className="flex-1 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30"
                        >
                          <ThumbsUp className="w-4 h-4 mr-2" /> For
                        </Button>
                        <Button 
                          onClick={() => handleVote(false)}
                          className="flex-1 bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/30"
                        >
                          <ThumbsDown className="w-4 h-4 mr-2" /> Against
                        </Button>
                        <Button 
                          onClick={() => handleVote(null)}
                          className="flex-1 bg-neura-dark/40 hover:bg-neura-dark/50 text-white border border-neura-purple/30"
                        >
                          Abstain
                        </Button>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ) : (
              <div className="h-full flex flex-col items-center justify-center py-16 border border-dashed border-neura-purple/30 rounded-lg">
                <FileText className="w-16 h-16 text-white/20 mb-4" />
                <h3 className="text-lg font-medium mb-2">No Proposal Selected</h3>
                <p className="text-white/60 text-center max-w-md mb-6">
                  Select a proposal from the list to view details or create a new one to suggest changes to the platform
                </p>
                <Button 
                  className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
                  onClick={() => setShowNewProposal(true)}
                >
                  <Plus className="w-4 h-4 mr-2" /> Create Proposal
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
