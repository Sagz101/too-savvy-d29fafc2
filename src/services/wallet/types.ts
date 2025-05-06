
import { BrowserProvider, JsonRpcSigner } from 'ethers';

export type Token = {
  name: string;
  symbol: string;
  address: string;
  logo?: string;
  balance?: string;
  decimals: number;
};

export type VaultInfo = {
  id: string;
  name: string;
  tokenAddress: string;
  balance: string;
  apy: number; 
  lockPeriod?: number; // in days, if applicable
  autoDeposit?: boolean;
};

export type GroupWallet = {
  id: string;
  name: string;
  members: string[];
  balance: string;
  tokenAddress: string;
  isAdmin: boolean;
};

export type SavingsCircle = {
  id: string;
  name: string;
  members: string[];
  contributionAmount: string;
  tokenAddress: string;
  nextWithdrawal: string; // Address of next person to withdraw
  schedule: { address: string, date: string }[];
  isActive: boolean;
};

export type BarterListing = {
  id: string;
  title: string;
  description: string;
  images: string[];
  owner: string;
  location: string;
  lookingFor: string[];
  verificationLevel: number;
  created: Date;
};

export type CreditScore = {
  score: number;
  repaymentHistory: number;
  communityTrust: number;
  walletActivity: number;
  maxCredit: number;
  approvedProtocols: string[];
};

export type ServiceItem = {
  id: string;
  title: string;
  creator: string;
  creatorAddress: string;
  category: string;
  price: string;
  currency: string;
  deadline: string;
  completions: number;
  rating: number;
  image?: string;
};

export type ReputationStats = {
  reputation: number;
  completionRate: number;
  qualityScore: number;
  responsiveness: number;
  endorsements: {
    user: string;
    relationship: string;
    avatar?: string;
  }[];
  collaborations: {
    project: string;
    date: string;
    collaborators: number;
    status: 'completed' | 'ongoing' | 'upcoming';
  }[];
  didIdentifier?: string;
  chainActivity?: {
    network: string;
    score: number;
    transactions: number;
  }[];
  participationScore?: number;
};

export type ImpactProject = {
  id: string;
  title: string;
  description: string;
  sdgGoals: string[];
  fundingTarget: number;
  fundingRaised: number;
  currency: string;
  image?: string;
  creator: string;
  escVerified: boolean;
  deadline: string;
};

export type ImpactBond = {
  id: string;
  title: string;
  impact: string;
  returnRate: number;
  termMonths: number;
  minInvestment: number;
  currency: string;
  totalRaised: number;
  target: number;
  verified: boolean;
};

export type RoyaltyStream = {
  id: string;
  title: string;
  platform: string;
  totalEarned: number;
  currency: string;
  royaltyRate: number;
  dynamicInfo?: string;
  lastPayout: string;
  nextEstimate: number;
  collaborators?: {
    address: string;
    share: number;
    name?: string;
  }[];
  streamingEnabled?: boolean;
  autoAdjust?: boolean;
};

export type License = {
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

export type ProvenanceNode = {
  id: string;
  title: string;
  creator: string;
  creationDate: string;
  derivedFrom?: string;
  descendants: number;
  verified: boolean;
  transactionHash?: string;
};

export type CrossPlatformIdentity = {
  provider: string;
  verified: boolean;
  displayName?: string;
  iconUrl?: string;
  lastVerified?: string;
};

export type FanParticipationToken = {
  id: string;
  name: string;
  symbol: string;
  totalSupply: number;
  price: number;
  currency: string;
  holders: number;
  activePolls: number;
};

export type CreatorFanBond = {
  id: string;
  name: string;
  initialValue: number;
  currentValue: number;
  currency: string;
  issuedDate: string;
  maturityDate?: string;
  supporter: string;
};

export type AICollaboration = {
  id: string;
  title: string;
  type: 'music' | 'visual' | 'text' | 'code';
  aiProvider: string;
  created: string;
  status: 'draft' | 'published' | 'minted';
  ownership: {
    human: number;
    ai: number;
  };
};

export type WalletState = {
  address: string | null;
  chainId: number | null;
  isConnected: boolean;
  provider: BrowserProvider | null;
  signer: JsonRpcSigner | null;
  tokens: Token[];
  nativeBalance: string;
  vaults: VaultInfo[];
  creditScore: CreditScore | null;
  serviceItems: ServiceItem[];
  reputationStats: ReputationStats | null;
  impactProjects: ImpactProject[];
  impactBonds: ImpactBond[];
  royaltyStreams: RoyaltyStream[];
  licenses: License[];
  provenanceGraph: ProvenanceNode[];
  crossPlatformIdentities: CrossPlatformIdentity[];
  fanParticipationTokens: FanParticipationToken[];
  creatorFanBonds: CreatorFanBond[];
  aiCollaborations: AICollaboration[];
  walletSovereigntyLevel: 'custodial' | 'social' | 'smart-contract' | 'mpc' | 'full';
  gaslessTransactionsEnabled: boolean;
  theme: 'light' | 'dark';
  notifications: Notification[];
  transactionHistory: Transaction[];
  supportedChains: ChainConfig[];
  selectedChain: ChainConfig | null;
};

export type Notification = {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp: Date;
  read: boolean;
  link?: string;
};

export type Transaction = {
  id: string;
  type: 'send' | 'receive' | 'swap' | 'stake' | 'invest' | 'other';
  amount: string;
  currency: string;
  timestamp: Date;
  status: 'pending' | 'confirmed' | 'failed';
  from: string;
  to: string;
  hash?: string;
  fee?: string;
};

export type ChainConfig = {
  id: number;
  name: string;
  symbol: string;
  rpcUrl: string;
  explorerUrl: string;
  logoUrl?: string;
};
