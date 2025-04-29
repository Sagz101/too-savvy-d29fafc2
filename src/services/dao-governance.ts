
import { toast } from "sonner";
import { ethers } from "ethers";

export interface ProposalData {
  id: string;
  title: string;
  description: string;
  creator: string;
  votesCast: number;
  votesFor: number;
  votesAgainst: number;
  votesAbstain: number;
  status: 'active' | 'passed' | 'failed' | 'pending';
  expiresAt: Date;
}

export interface VoteReceipt {
  proposalId: string;
  voter: string;
  support: boolean | null; // true = for, false = against, null = abstain
  votingPower: number;
  timestamp: Date;
}

// Mock proposal data for demo purposes
const MOCK_PROPOSALS: ProposalData[] = [
  {
    id: '1',
    title: 'Implement share-to-earn rewards program',
    description: 'Allocate 5% of protocol revenue to users who share content that drives engagement',
    creator: '0x1234...5678',
    votesCast: 145,
    votesFor: 120,
    votesAgainst: 15,
    votesAbstain: 10,
    status: 'passed',
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days from now
  },
  {
    id: '2',
    title: 'Add Arbitrum as supported chain',
    description: 'Expand platform functionality to support Arbitrum for lower gas fees and faster transactions',
    creator: '0xabcd...ef01',
    votesCast: 87,
    votesFor: 65,
    votesAgainst: 12,
    votesAbstain: 10,
    status: 'active',
    expiresAt: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000) // 4 days from now
  },
  {
    id: '3',
    title: 'Increase royalty percentage for creators',
    description: 'Increase default royalty from 2.5% to 5% for all new collections',
    creator: '0x2468...1357',
    votesCast: 0,
    votesFor: 0,
    votesAgainst: 0,
    votesAbstain: 0,
    status: 'pending',
    expiresAt: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000) // 10 days from now
  }
];

// Get user's voting power
export const getUserVotingPower = async (
  userAddress: string,
  provider: ethers.BrowserProvider
): Promise<number> => {
  try {
    if (!userAddress) return 0;
    
    // In a real implementation, this would query a contract to get token balances, NFT holdings, etc.
    // For demo purposes, we'll return a random number
    return Math.floor(Math.random() * 100) + 1;
  } catch (error) {
    console.error("Error fetching voting power:", error);
    toast.error("Governance Error", {
      description: "Failed to fetch your voting power."
    });
    return 0;
  }
};

// Fetch all proposals
export const getProposals = async (): Promise<ProposalData[]> => {
  try {
    // In a real implementation, this would query a contract for proposals
    // For demo purposes, we'll return mock data
    return MOCK_PROPOSALS;
  } catch (error) {
    console.error("Error fetching proposals:", error);
    toast.error("Governance Error", {
      description: "Failed to fetch governance proposals."
    });
    return [];
  }
};

// Fetch a single proposal by ID
export const getProposalById = async (proposalId: string): Promise<ProposalData | null> => {
  try {
    // In a real implementation, this would query a contract for a specific proposal
    // For demo purposes, we'll filter our mock data
    const proposal = MOCK_PROPOSALS.find(p => p.id === proposalId);
    return proposal || null;
  } catch (error) {
    console.error("Error fetching proposal:", error);
    toast.error("Governance Error", {
      description: "Failed to fetch proposal details."
    });
    return null;
  }
};

// Cast a vote on a proposal
export const castVote = async (
  proposalId: string,
  userAddress: string,
  support: boolean | null, // true = for, false = against, null = abstain
  signer: ethers.JsonRpcSigner
): Promise<VoteReceipt | null> => {
  try {
    toast.loading("Submitting vote...");
    
    // In a real implementation, this would call a contract to cast a vote
    // For demo purposes, we'll just wait and return a mock receipt
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const votingPower = await getUserVotingPower(userAddress, signer.provider);
    
    const receipt: VoteReceipt = {
      proposalId,
      voter: userAddress,
      support,
      votingPower,
      timestamp: new Date()
    };
    
    toast.success("Vote cast successfully!", {
      description: `Your vote with ${votingPower} voting power has been recorded.`
    });
    
    return receipt;
  } catch (error) {
    console.error("Error casting vote:", error);
    toast.error("Voting Error", {
      description: "Failed to cast your vote. Please try again."
    });
    return null;
  }
};

// Create a new proposal
export const createProposal = async (
  title: string,
  description: string,
  creatorAddress: string,
  signer: ethers.JsonRpcSigner
): Promise<ProposalData | null> => {
  try {
    if (!title || !description) {
      toast.error("Invalid proposal", {
        description: "Please provide a title and description for your proposal."
      });
      return null;
    }
    
    toast.loading("Creating proposal...");
    
    // In a real implementation, this would call a contract to create a proposal
    // For demo purposes, we'll just wait and return a mock proposal
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const newProposal: ProposalData = {
      id: Date.now().toString(),
      title,
      description,
      creator: creatorAddress,
      votesCast: 0,
      votesFor: 0,
      votesAgainst: 0,
      votesAbstain: 0,
      status: 'pending',
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days from now
    };
    
    toast.success("Proposal created!", {
      description: "Your proposal has been submitted to the DAO."
    });
    
    return newProposal;
  } catch (error) {
    console.error("Error creating proposal:", error);
    toast.error("Proposal Error", {
      description: "Failed to create your proposal. Please try again."
    });
    return null;
  }
};
