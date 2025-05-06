import { useState, useEffect } from 'react';
import { BrowserProvider, JsonRpcSigner, Contract, parseUnits, formatUnits } from 'ethers';
import { toast } from "sonner";

// Basic ERC20 ABI for token interactions
const ERC20_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function transfer(address to, uint256 amount) returns (bool)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function allowance(address owner, address spender) view returns (uint256)",
  "function transferFrom(address from, address to, uint256 amount) returns (bool)",
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)",
  "function name() view returns (string)"
];

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
};

// Sample tokens - in a real app, these would come from a token list or API
const DEFAULT_TOKENS: Token[] = [
  {
    name: 'USD Coin',
    symbol: 'USDC',
    address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', // Ethereum Mainnet
    logo: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png',
    decimals: 6
  },
  {
    name: 'Euro Coin',
    symbol: 'EUROC',
    address: '0x1aBaEA1f7C830bD89Acc67eC4af516284b1bC33c', // Ethereum Mainnet
    logo: 'https://cryptologos.cc/logos/euro-coin-euroc-logo.png',
    decimals: 6
  },
  {
    name: 'Neura Token',
    symbol: 'NEURA',
    address: '0xNeuraTokenAddress', // Placeholder
    logo: '/neura-token-logo.png',
    decimals: 18
  }
];

export const useWallet = () => {
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
    gaslessTransactionsEnabled: false
  });
  
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Group banking state
  const [groupWallets, setGroupWallets] = useState<GroupWallet[]>([]);
  const [savingsCircles, setSavingsCircles] = useState<SavingsCircle[]>([]);
  
  // Barter trade state
  const [barterListings, setBarterListings] = useState<BarterListing[]>([]);

  const connectWallet = async () => {
    if (!window.ethereum) {
      setError("No Ethereum wallet found. Please install MetaMask or another compatible wallet.");
      return;
    }
    
    setIsConnecting(true);
    setError(null);
    
    try {
      const provider = new BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      const signer = await provider.getSigner();
      const network = await provider.getNetwork();
      
      // Get native balance
      const balance = await provider.getBalance(accounts[0]);
      const nativeBalance = formatUnits(balance, 18);
      
      setWallet(prev => ({
        ...prev,
        address: accounts[0],
        chainId: Number(network.chainId),
        isConnected: true,
        provider,
        signer,
        nativeBalance
      }));
      
      // Once connected, fetch token balances
      fetchTokenBalances(provider, accounts[0]);
      
      // And mock vaults for demo purposes
      fetchMockVaults();
      
      // Fetch mock group wallets and savings circles
      fetchMockGroupWallets();
      fetchMockSavingsCircles();
      
      // Fetch mock barter listings
      fetchMockBarterListings();
      
      // Fetch the new advanced finance features
      fetchMockCreditScore();
      fetchMockServiceItems();
      fetchMockReputationStats();
      fetchMockImpactFinance();
      fetchMockRoyaltyAndLicensing();
      
      // New mock data functions for the requested features
      fetchMockProvenanceGraph();
      fetchMockCrossPlatformIdentities();
      fetchMockFanParticipationTokens();
      fetchMockCreatorFanBonds();
      fetchMockAICollaborations();
      
    } catch (err) {
      console.error("Failed to connect wallet:", err);
      setError("Failed to connect wallet. Please try again.");
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setWallet({
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
      gaslessTransactionsEnabled: false
    });
    setGroupWallets([]);
    setSavingsCircles([]);
    setBarterListings([]);
  };
  
  // Function to fetch token balances for connected wallet
  const fetchTokenBalances = async (provider: BrowserProvider, address: string) => {
    try {
      const updatedTokens = await Promise.all(
        wallet.tokens.map(async (token) => {
          // For demo purposes, generate random balances
          // In a real app, we would query the actual token contract
          const randomBalance = Math.random() * 1000;
          const formattedBalance = randomBalance.toFixed(2);
          
          return { ...token, balance: formattedBalance };
        })
      );
      
      setWallet(prev => ({ ...prev, tokens: updatedTokens }));
    } catch (error) {
      console.error("Error fetching token balances:", error);
    }
  };
  
  const fetchMockVaults = () => {
    // Mock vaults for demo purposes
    const mockVaults: VaultInfo[] = [
      {
        id: "vault-1",
        name: "Neura Savings",
        tokenAddress: DEFAULT_TOKENS[2].address, // NEURA token
        balance: "250.00",
        apy: 4.5,
        autoDeposit: true
      },
      {
        id: "vault-2",
        name: "Stablecoin Vault",
        tokenAddress: DEFAULT_TOKENS[0].address, // USDC
        balance: "500.00",
        apy: 2.8,
        lockPeriod: 30
      }
    ];
    
    setWallet(prev => ({ ...prev, vaults: mockVaults }));
  };
  
  const fetchMockGroupWallets = () => {
    // Mock group wallets for demo
    const mockGroupWallets: GroupWallet[] = [
      {
        id: "group-1",
        name: "Creator Collective",
        members: ["0x123...", "0x456...", "0x789..."],
        balance: "1250.00",
        tokenAddress: DEFAULT_TOKENS[0].address, // USDC
        isAdmin: true
      },
      {
        id: "group-2",
        name: "Project Fund",
        members: ["0x123...", "0xabc...", "0xdef..."],
        balance: "750.00",
        tokenAddress: DEFAULT_TOKENS[2].address, // NEURA
        isAdmin: false
      }
    ];
    
    setGroupWallets(mockGroupWallets);
  };
  
  const fetchMockSavingsCircles = () => {
    // Mock savings circles for demo
    const mockSavingsCircles: SavingsCircle[] = [
      {
        id: "circle-1",
        name: "Creator Circle",
        members: ["0x123...", "0x456...", "0x789..."],
        contributionAmount: "100.00",
        tokenAddress: DEFAULT_TOKENS[0].address, // USDC
        nextWithdrawal: "0x456...",
        schedule: [
          { address: "0x123...", date: "2025-06-01" },
          { address: "0x456...", date: "2025-07-01" },
          { address: "0x789...", date: "2025-08-01" }
        ],
        isActive: true
      }
    ];
    
    setSavingsCircles(mockSavingsCircles);
  };
  
  const fetchMockBarterListings = () => {
    // Mock barter listings for demo
    const mockListings: BarterListing[] = [
      {
        id: "barter-1",
        title: "Professional Video Editing",
        description: "I'll edit your videos professionally with effects and transitions.",
        images: ["https://via.placeholder.com/150"],
        owner: "0x123...",
        location: "New York Area",
        lookingFor: ["Graphic Design", "Music Production"],
        verificationLevel: 3,
        created: new Date()
      },
      {
        id: "barter-2",
        title: "3D Model Creation",
        description: "I can create high-quality 3D models for your AR/VR projects.",
        images: ["https://via.placeholder.com/150"],
        owner: "0x456...",
        location: "Los Angeles Area",
        lookingFor: ["Video Production", "Voice Acting"],
        verificationLevel: 2,
        created: new Date()
      }
    ];
    
    setBarterListings(mockListings);
  };
  
  const fetchMockCreditScore = () => {
    // Mock credit score data for demo purposes
    const mockCreditScore: CreditScore = {
      score: 720,
      repaymentHistory: 95,
      communityTrust: 87,
      walletActivity: 78,
      maxCredit: 5000,
      approvedProtocols: ["Aave", "Goldfinch", "Maple Finance"]
    };
    
    setWallet(prev => ({ ...prev, creditScore: mockCreditScore }));
  };
  
  const fetchMockServiceItems = () => {
    // Mock service items for the marketplace
    const mockServices: ServiceItem[] = [
      {
        id: "service-1",
        title: "Professional Video Editing",
        creator: "CreativeVision",
        creatorAddress: "0x123...",
        category: "Video",
        price: "250",
        currency: "USDC",
        deadline: "3 days",
        completions: 47,
        rating: 4,
        image: "https://via.placeholder.com/150"
      },
      {
        id: "service-2",
        title: "Voice-Over for Your Content",
        creator: "AudioPro",
        creatorAddress: "0x456...",
        category: "Audio",
        price: "100",
        currency: "NEURA",
        deadline: "1 day",
        completions: 124,
        rating: 5,
        image: "https://via.placeholder.com/150"
      },
      {
        id: "service-3",
        title: "Graphic Design & Artwork",
        creator: "DesignMaster",
        creatorAddress: "0x789...",
        category: "Design",
        price: "300",
        currency: "USDC",
        deadline: "5 days",
        completions: 85,
        rating: 4,
        image: "https://via.placeholder.com/150"
      }
    ];
    
    setWallet(prev => ({ ...prev, serviceItems: mockServices }));
  };
  
  const fetchMockReputationStats = () => {
    // Mock reputation statistics
    const mockStats: ReputationStats = {
      reputation: 92,
      completionRate: 98,
      qualityScore: 93,
      responsiveness: 86,
      endorsements: [
        {
          user: "CreativePro",
          relationship: "Collaborator",
          avatar: "https://via.placeholder.com/50"
        },
        {
          user: "DesignStudio",
          relationship: "Client",
          avatar: "https://via.placeholder.com/50"
        },
        {
          user: "TechInnovator",
          relationship: "Mentor",
          avatar: "https://via.placeholder.com/50"
        }
      ],
      collaborations: [
        {
          project: "NFT Collection Launch",
          date: "2025-04-01",
          collaborators: 3,
          status: 'completed'
        },
        {
          project: "Interactive Media Installation",
          date: "2025-05-15",
          collaborators: 5,
          status: 'ongoing'
        },
        {
          project: "Community Education Series",
          date: "2025-06-10",
          collaborators: 2,
          status: 'upcoming'
        }
      ]
    };
    
    setWallet(prev => ({ ...prev, reputationStats: mockStats }));
  };
  
  const fetchMockImpactFinance = () => {
    // Mock impact projects
    const mockProjects: ImpactProject[] = [
      {
        id: "impact-1",
        title: "Community Digital Literacy",
        description: "Providing technology access and education to underserved communities through creator workshops and equipment donations.",
        sdgGoals: ["Quality Education", "Reduced Inequalities"],
        fundingTarget: 10000,
        fundingRaised: 6500,
        currency: "USDC",
        image: "https://via.placeholder.com/150",
        creator: "Digital Inclusion DAO",
        escVerified: true,
        deadline: "2025-07-30"
      },
      {
        id: "impact-2",
        title: "Sustainable Content Creation",
        description: "Building solar-powered recording studios in developing regions to enable local creators while minimizing environmental impact.",
        sdgGoals: ["Affordable Clean Energy", "Climate Action"],
        fundingTarget: 25000,
        fundingRaised: 12000,
        currency: "USDC",
        image: "https://via.placeholder.com/150",
        creator: "EcoCreators Collective",
        escVerified: true,
        deadline: "2025-08-15"
      }
    ];
    
    // Mock impact bonds
    const mockBonds: ImpactBond[] = [
      {
        id: "bond-1",
        title: "Creative Education Bond",
        impact: "Funding creative education in 10 underserved schools",
        returnRate: 3.5,
        termMonths: 24,
        minInvestment: 100,
        currency: "USDC",
        totalRaised: 50000,
        target: 100000,
        verified: true
      },
      {
        id: "bond-2",
        title: "Green Media Infrastructure",
        impact: "Building sustainable creative studios with 80% lower emissions",
        returnRate: 4.2,
        termMonths: 36,
        minInvestment: 500,
        currency: "NEURA",
        totalRaised: 75000,
        target: 150000,
        verified: true
      }
    ];
    
    setWallet(prev => ({ 
      ...prev, 
      impactProjects: mockProjects,
      impactBonds: mockBonds
    }));
  };
  
  const fetchMockRoyaltyAndLicensing = () => {
    // Mock royalty streams
    const mockRoyalties: RoyaltyStream[] = [
      {
        id: "royalty-1",
        title: "Artwork Collection",
        platform: "NFT Marketplace",
        totalEarned: 3250,
        currency: "USDC",
        royaltyRate: 10,
        dynamicInfo: "Scales to 15% after 100 sales",
        lastPayout: "2025-04-01",
        nextEstimate: 450
      },
      {
        id: "royalty-2",
        title: "Video Series",
        platform: "Content Platform",
        totalEarned: 2800,
        currency: "NEURA",
        royaltyRate: 8,
        dynamicInfo: "Based on engagement metrics",
        lastPayout: "2025-04-15",
        nextEstimate: 320
      }
    ];
    
    // Mock licenses
    const mockLicenses: License[] = [
      {
        id: "license-1",
        title: "Motion Graphics Pack",
        licensee: "Media Studio Inc",
        startDate: "2025-01-01",
        endDate: "2025-12-31",
        fee: 1200,
        currency: "USDC",
        usage: "Commercial Productions",
        type: 'non-exclusive'
      },
      {
        id: "license-2",
        title: "Audio Collection",
        licensee: "Streaming Platform",
        startDate: "2025-03-01",
        endDate: "2026-02-28",
        fee: 3500,
        currency: "USDC",
        usage: "Platform Integration",
        type: 'exclusive'
      }
    ];
    
    setWallet(prev => ({ 
      ...prev, 
      royaltyStreams: mockRoyalties,
      licenses: mockLicenses
    }));
  };
  
  const fetchMockProvenanceGraph = () => {
    // Mock provenance graph data
    const mockProvenanceGraph: ProvenanceNode[] = [
      {
        id: "prov-1",
        title: "Original Artwork",
        creator: "0x123...",
        creationDate: "2025-01-15",
        descendants: 3,
        verified: true,
        transactionHash: "0xabc..."
      },
      {
        id: "prov-2",
        title: "Derivative Work",
        creator: "0x456...",
        creationDate: "2025-02-20",
        derivedFrom: "prov-1",
        descendants: 1,
        verified: true
      },
      {
        id: "prov-3",
        title: "Enhanced Remix",
        creator: "0x789...",
        creationDate: "2025-03-05",
        derivedFrom: "prov-2",
        descendants: 0,
        verified: false
      }
    ];
    
    setWallet(prev => ({ ...prev, provenanceGraph: mockProvenanceGraph }));
  };
  
  const fetchMockCrossPlatformIdentities = () => {
    // Mock cross-platform identities
    const mockIdentities: CrossPlatformIdentity[] = [
      {
        provider: "W3C DID",
        verified: true,
        displayName: "did:neura:123456789",
        lastVerified: "2025-04-01"
      },
      {
        provider: "Ethereum Name Service",
        verified: true,
        displayName: "creator.eth",
        iconUrl: "https://via.placeholder.com/30",
        lastVerified: "2025-03-15"
      },
      {
        provider: "Lens Protocol",
        verified: true,
        displayName: "@creator.lens",
        iconUrl: "https://via.placeholder.com/30",
        lastVerified: "2025-04-10"
      }
    ];
    
    setWallet(prev => ({ ...prev, crossPlatformIdentities: mockIdentities }));
  };
  
  const fetchMockFanParticipationTokens = () => {
    // Mock fan participation tokens
    const mockTokens: FanParticipationToken[] = [
      {
        id: "fpt-1",
        name: "Creator Community Token",
        symbol: "CCT",
        totalSupply: 10000,
        price: 0.5,
        currency: "USDC",
        holders: 250,
        activePolls: 2
      },
      {
        id: "fpt-2",
        name: "Music Project Token",
        symbol: "MPT",
        totalSupply: 5000,
        price: 1.2,
        currency: "NEURA",
        holders: 75,
        activePolls: 1
      }
    ];
    
    setWallet(prev => ({ ...prev, fanParticipationTokens: mockTokens }));
  };
  
  const fetchMockCreatorFanBonds = () => {
    // Mock creator-fan bonds
    const mockBonds: CreatorFanBond[] = [
      {
        id: "bond-1",
        name: "Early Supporter Bond",
        initialValue: 100,
        currentValue: 150,
        currency: "USDC",
        issuedDate: "2025-01-10",
        maturityDate: "2026-01-10",
        supporter: "0xdef..."
      },
      {
        id: "bond-2",
        name: "Community Champion Bond",
        initialValue: 250,
        currentValue: 325,
        currency: "NEURA",
        issuedDate: "2025-02-05",
        supporter: "0xghi..."
      }
    ];
    
    setWallet(prev => ({ ...prev, creatorFanBonds: mockBonds }));
  };
  
  const fetchMockAICollaborations = () => {
    // Mock AI collaborations
    const mockCollaborations: AICollaboration[] = [
      {
        id: "ai-collab-1",
        title: "Neural Music Composition",
        type: 'music',
        aiProvider: "Bittensor Network",
        created: "2025-04-05",
        status: 'published',
        ownership: {
          human: 70,
          ai: 30
        }
      },
      {
        id: "ai-collab-2",
        title: "Generative Visual Art",
        type: 'visual',
        aiProvider: "Giza Protocol",
        created: "2025-03-20",
        status: 'minted',
        ownership: {
          human: 60,
          ai: 40
        }
      },
      {
        id: "ai-collab-3",
        title: "Smart Contract Generator",
        type: 'code',
        aiProvider: "Decentralized AI Network",
        created: "2025-04-15",
        status: 'draft',
        ownership: {
          human: 50,
          ai: 50
        }
      }
    ];
    
    setWallet(prev => ({ ...prev, aiCollaborations: mockCollaborations }));
  };
  
  // Send tokens to another address
  const sendTokens = async (tokenAddress: string, recipient: string, amount: string) => {
    if (!wallet.signer || !wallet.address) {
      throw new Error("Wallet not connected");
    }
    
    try {
      toast.loading("Preparing transaction...");
      
      const token = wallet.tokens.find(t => t.address === tokenAddress);
      if (!token) throw new Error("Token not found");
      
      const tokenContract = new Contract(tokenAddress, ERC20_ABI, wallet.signer);
      const decimals = token.decimals;
      const parsedAmount = parseUnits(amount, decimals);
      
      toast.loading("Sending tokens...");
      
      // For demo purposes, we'll simulate a transaction
      // In a real app, we would call the token contract's transfer method
      // const tx = await tokenContract.transfer(recipient, parsedAmount);
      // await tx.wait();
      
      // Simulate blockchain confirmation time
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Update balances after transfer
      const selectedToken = wallet.tokens.find(t => t.address === tokenAddress);
      if (selectedToken && selectedToken.balance) {
        const currentBalance = parseFloat(selectedToken.balance);
        const sentAmount = parseFloat(amount);
        
        const updatedTokens = wallet.tokens.map(t => {
          if (t.address === tokenAddress) {
            return {
              ...t,
              balance: (currentBalance - sentAmount).toFixed(2)
            };
          }
          return t;
        });
        
        setWallet(prev => ({ ...prev, tokens: updatedTokens }));
      }
      
      toast.success("Tokens Sent Successfully!", {
        description: `Sent ${amount} ${token.symbol} to ${recipient.slice(0, 6)}...`
      });
      
      return true;
    } catch (error) {
      console.error("Error sending tokens:", error);
      toast.error("Transaction Failed", {
        description: "Failed to send tokens. Please try again."
      });
      throw error;
    }
  };
  
  // Create a new savings vault
  const createVault = async (name: string, tokenAddress: string, autoDeposit: boolean) => {
    if (!wallet.isConnected) {
      throw new Error("Wallet not connected");
    }
    
    try {
      toast.loading("Creating savings vault...");
      
      // For demo purposes, simulate vault creation
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const token = wallet.tokens.find(t => t.address === tokenAddress);
      if (!token) throw new Error("Token not found");
      
      const newVault: VaultInfo = {
        id: `vault-${Date.now()}`,
        name,
        tokenAddress,
        balance: "0.00",
        apy: 3.5 + Math.random() * 2,
        autoDeposit
      };
      
      setWallet(prev => ({
        ...prev,
        vaults: [...prev.vaults, newVault]
      }));
      
      toast.success("Vault Created!", {
        description: `Created ${name} vault for ${token.symbol}`
      });
      
      return true;
    } catch (error) {
      console.error("Error creating vault:", error);
      toast.error("Failed to Create Vault", {
        description: "An error occurred. Please try again."
      });
      throw error;
    }
  };
  
  // Create a group wallet
  const createGroupWallet = async (name: string, members: string[], tokenAddress: string) => {
    if (!wallet.isConnected) {
      throw new Error("Wallet not connected");
    }
