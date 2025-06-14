
import { useState } from 'react';
import { BrowserProvider } from 'ethers';
import { DEFAULT_TOKENS, SUPPORTED_CHAINS } from './mockData';
import type { 
  Token, 
  VaultInfo, 
  GroupWallet, 
  SavingsCircle, 
  BarterListing, 
  ServiceItem, 
  Notification, 
  Transaction,
  ChainConfig,
  CreditScore,
  ReputationStats,
  ImpactProject,
  ImpactBond,
  RoyaltyStream,
  License,
  ProvenanceNode,
  CrossPlatformIdentity,
  FanParticipationToken,
  CreatorFanBond,
  AICollaboration
} from './types';

// Local WalletState interface to avoid import conflicts
interface WalletState {
  address: string | null;
  chainId: number | null;
  isConnected: boolean;
  provider: BrowserProvider | null;
  signer: any | null;
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
}

export const useWalletState = () => {
  const [wallet, setWallet] = useState<WalletState>({
    address: null,
    chainId: null,
    isConnected: false,
    provider: null,
    signer: null,
    tokens: DEFAULT_TOKENS,
    nativeBalance: '0',
    vaults: [],
    creditScore: null,
    serviceItems: [],
    reputationStats: null,
    impactProjects: [],
    impactBonds: [],
    royaltyStreams: [],
    licenses: [],
    provenanceGraph: [],
    crossPlatformIdentities: [],
    fanParticipationTokens: [],
    creatorFanBonds: [],
    aiCollaborations: [],
    walletSovereigntyLevel: 'custodial',
    gaslessTransactionsEnabled: false,
    theme: 'dark',
    notifications: [],
    transactionHistory: [],
    supportedChains: SUPPORTED_CHAINS,
    selectedChain: SUPPORTED_CHAINS[0]
  });
  
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Group banking state
  const [groupWallets, setGroupWallets] = useState<GroupWallet[]>([]);
  const [savingsCircles, setSavingsCircles] = useState<SavingsCircle[]>([]);
  
  // Barter trade state
  const [barterListings, setBarterListings] = useState<BarterListing[]>([]);

  return {
    wallet,
    setWallet,
    isConnecting,
    setIsConnecting,
    error,
    setError,
    groupWallets,
    setGroupWallets,
    savingsCircles,
    setSavingsCircles,
    barterListings,
    setBarterListings
  };
};

export type { WalletState };
