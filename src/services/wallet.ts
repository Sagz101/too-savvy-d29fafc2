import { useState } from 'react';
import { BrowserProvider, Contract, parseUnits, formatUnits } from 'ethers';
import { toast } from "sonner";
import { DEFAULT_TOKENS, ERC20_ABI, SUPPORTED_CHAINS } from './wallet/mockData';

// Import types from the types file
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
} from './wallet/types';

// Export types for other components to use
export type {
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
};

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

// Mock data fetching functions
import { 
  fetchMockVaults,
  fetchMockGroupWallets,
  fetchMockSavingsCircles,
  fetchMockBarterListings,
  fetchMockCreditScore,
  fetchMockServiceItems,
  fetchMockReputationStats,
  fetchMockImpactFinance,
  fetchMockRoyaltyAndLicensing,
  fetchMockProvenanceGraph,
  fetchMockCrossPlatformIdentities,
  fetchMockFanParticipationTokens,
  fetchMockCreatorFanBonds,
  fetchMockAICollaborations
} from './wallet/mockDataFetchers';

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

  // Theme toggling functionality
  const toggleTheme = () => {
    const newTheme = wallet.theme === 'dark' ? 'light' : 'dark';
    setWallet(prev => ({ ...prev, theme: newTheme }));
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    return newTheme;
  };

  // Add a new notification
  const addNotification = (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => {
    const newNotification: Notification = {
      ...notification,
      id: `notif-${Date.now()}`,
      timestamp: new Date(),
      read: false
    };
    
    setWallet(prev => ({
      ...prev,
      notifications: [newNotification, ...prev.notifications].slice(0, 50) // Keep last 50 notifications
    }));
    
    return newNotification;
  };

  // Mark notification as read
  const markNotificationRead = (id: string) => {
    setWallet(prev => ({
      ...prev,
      notifications: prev.notifications.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    }));
  };

  // Switch blockchain network
  const switchNetwork = async (chainId: number) => {
    try {
      const chain = SUPPORTED_CHAINS.find(c => c.id === chainId);
      if (!chain) throw new Error("Unsupported chain");
      
      if (wallet.provider) {
        // In a real implementation, we'd use wallet.provider.send("wallet_switchEthereumChain", ...)
        // For demo purposes, we'll just update the state
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
        
        setWallet(prev => ({
          ...prev,
          chainId: chainId,
          selectedChain: chain
        }));
        
        addNotification({
          title: "Network Changed",
          message: `Connected to ${chain.name}`,
          type: "info"
        });
        
        return true;
      }
      return false;
    } catch (error) {
      console.error("Failed to switch network:", error);
      return false;
    }
  };

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
      gaslessTransactionsEnabled: false,
      theme: wallet.theme, // Preserve theme setting
      notifications: wallet.notifications, // Preserve notifications
      transactionHistory: [],
      supportedChains: SUPPORTED_CHAINS,
      selectedChain: SUPPORTED_CHAINS[0]
    });
    setGroupWallets([]);
    setSavingsCircles([]);
    setBarterListings([]);
    
    // Add notification for disconnect
    addNotification({
      title: "Wallet Disconnected",
      message: "Your wallet has been disconnected.",
      type: "info"
    });
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
    
    try {
      toast.loading("Creating group wallet...");
      
      // For demo purposes, simulate wallet creation
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const token = wallet.tokens.find(t => t.address === tokenAddress);
      if (!token) throw new Error("Token not found");
      
      const newGroupWallet: GroupWallet = {
        id: `group-${Date.now()}`,
        name,
        members,
        balance: "0.00",
        tokenAddress,
        isAdmin: true // User is admin by default when creating
      };
      
      setGroupWallets(prev => [...prev, newGroupWallet]);
      
      toast.success("Group Wallet Created!", {
        description: `Created ${name} group wallet for ${token.symbol}`
      });
      
      return true;
    } catch (error) {
      console.error("Error creating group wallet:", error);
      toast.error("Failed to Create Group Wallet", {
        description: "An error occurred. Please try again."
      });
      throw error;
    }
  };
  
  // Create a savings circle
  const createSavingsCircle = async (name: string, members: string[], contributionAmount: string, tokenAddress: string, schedule?: { address: string, date: string }[]) => {
    if (!wallet.isConnected) {
      throw new Error("Wallet not connected");
    }
    
    try {
      toast.loading("Creating savings circle...");
      
      // For demo purposes, simulate circle creation
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const token = wallet.tokens.find(t => t.address === tokenAddress);
      if (!token) throw new Error("Token not found");
      
      // Generate default schedule if not provided
      const defaultSchedule = schedule || members.map((address, index) => {
        const date = new Date();
        date.setMonth(date.getMonth() + index + 1);
        return {
          address,
          date: date.toISOString().split('T')[0]
        };
      });
      
      const newSavingsCircle: SavingsCircle = {
        id: `circle-${Date.now()}`,
        name,
        members,
        contributionAmount,
        tokenAddress,
        nextWithdrawal: members[0],
        schedule: defaultSchedule,
        isActive: true
      };
      
      setSavingsCircles(prev => [...prev, newSavingsCircle]);
      
      toast.success("Savings Circle Created!", {
        description: `Created ${name} savings circle for ${members.length} members`
      });
      
      return true;
    } catch (error) {
      console.error("Error creating savings circle:", error);
      toast.error("Failed to Create Savings Circle", {
        description: "An error occurred. Please try again."
      });
      throw error;
    }
  };
  
  // Create a barter listing
  const createBarterListing = async (title: string, description: string, images: string[], location: string, lookingFor: string[]) => {
    if (!wallet.isConnected) {
      throw new Error("Wallet not connected");
    }
    
    try {
      toast.loading("Creating barter listing...");
      
      // For demo purposes, simulate listing creation
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const newListing: BarterListing = {
        id: `barter-${Date.now()}`,
        title,
        description,
        images,
        owner: wallet.address || "unknown",
        location,
        lookingFor,
        verificationLevel: 1, // Start at level 1
        created: new Date()
      };
      
      setBarterListings(prev => [...prev, newListing]);
      
      toast.success("Barter Listing Created!", {
        description: `Created listing: ${title}`
      });
      
      return true;
    } catch (error) {
      console.error("Error creating barter listing:", error);
      toast.error("Failed to Create Listing", {
        description: "An error occurred. Please try again."
      });
      throw error;
    }
  };
  
  // Purchase a service item
  const purchaseService = async (serviceId: string) => {
    if (!wallet.isConnected) {
      throw new Error("Wallet not connected");
    }
    
    try {
      toast.loading("Processing service purchase...");
      
      const service = wallet.serviceItems.find(s => s.id === serviceId);
      if (!service) throw new Error("Service not found");
      
      // Simulate purchase process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success("Service Purchased!", {
        description: `You've purchased "${service.title}" from ${service.creator}`
      });
      
      return true;
    } catch (error) {
      console.error("Error purchasing service:", error);
      toast.error("Purchase Failed", {
        description: "Failed to purchase service. Please try again."
      });
      throw error;
    }
  };
  
  // Add the missing investInImpactProject function
  const investInImpactProject = async (projectId: string, amount: string, currency: string) => {
    if (!wallet.isConnected) {
      throw new Error("Wallet not connected");
    }
    
    try {
      toast.loading("Processing investment...");
      
      const project = wallet.impactProjects.find(p => p.id === projectId);
      if (!project) throw new Error("Project not found");
      
      // Simulate investment process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Update the project's funding raised amount
      const updatedProjects = wallet.impactProjects.map(p => {
        if (p.id === projectId) {
          return {
            ...p,
            fundingRaised: p.fundingRaised + parseFloat(amount)
          };
        }
        return p;
      });
      
      setWallet(prev => ({
        ...prev,
        impactProjects: updatedProjects
      }));
      
      toast.success("Investment Successful!", {
        description: `You've invested ${amount} ${currency} in "${project.title}"`
      });
      
      return true;
    } catch (error) {
      console.error("Error investing in project:", error);
      toast.error("Investment Failed", {
        description: "Failed to process investment. Please try again."
      });
      throw error;
    }
  };
  
  // Toggle gasless transactions - updating to return Promise<boolean>
  const toggleGaslessTransactions = async (enabled: boolean): Promise<boolean> => {
    try {
      // Simulate backend call to enable/disable gasless transactions
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setWallet(prev => ({
        ...prev,
        gaslessTransactionsEnabled: enabled
      }));
      
      toast.success(
        enabled 
          ? "Gasless Transactions Enabled" 
          : "Gasless Transactions Disabled"
      );
      
      return true;
    } catch (error) {
      console.error("Error toggling gasless transactions:", error);
      toast.error("Failed to update settings", {
        description: "An error occurred. Please try again."
      });
      return false;
    }
  };
  
  // Upgrade wallet sovereignty level - updating to return Promise<boolean>
  const upgradeWalletSovereignty = async (level: 'custodial' | 'social' | 'smart-contract' | 'mpc' | 'full'): Promise<boolean> => {
    try {
      // Simulate backend call to upgrade sovereignty
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setWallet(prev => ({
        ...prev,
        walletSovereigntyLevel: level
      }));
      
      toast.success(`Wallet Sovereignty Level Upgraded`, {
        description: `Your wallet now has ${level} sovereignty`
      });
      
      return true;
    } catch (error) {
      console.error("Error upgrading wallet sovereignty:", error);
      toast.error("Failed to upgrade wallet", {
        description: "An error occurred. Please try again."
      });
      return false;
    }
  };
  
  // Create AI collaboration
  const createAICollaboration = async (title: string, type: 'music' | 'visual' | 'text' | 'code', aiProvider: string, humanOwnership: number) => {
    if (!wallet.isConnected) {
      throw new Error("Wallet not connected");
    }
    
    try {
      toast.loading("Setting up AI collaboration...");
      
      // Simulate setup process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const newCollaboration: AICollaboration = {
        id: `ai-collab-${Date.now()}`,
        title,
        type,
        aiProvider,
        created: new Date().toISOString().split('T')[0],
        status: 'draft',
        ownership: {
          human: humanOwnership,
          ai: 100 - humanOwnership
        }
      };
      
      setWallet(prev => ({
        ...prev,
        aiCollaborations: [...prev.aiCollaborations, newCollaboration]
      }));
      
      toast.success("AI Collaboration Created!", {
        description: `Created "${title}" with ${humanOwnership}% human ownership`
      });
      
      return true;
    } catch (error) {
      console.error("Error creating AI collaboration:", error);
      toast.error("Failed to Create Collaboration", {
        description: "An error occurred. Please try again."
      });
      throw error;
    }
  };
  
  // Generate mock transaction history
  const generateMockTransactionHistory = (address: string): Transaction[] => {
    const transactions: Transaction[] = [];
    const now = new Date();
    
    // Generate 20 random transactions for demo
    for (let i = 0; i < 20; i++) {
      const isOutgoing = Math.random() > 0.5;
      const randomDate = new Date(now.getTime() - Math.random() * 30 * 24 * 60 * 60 * 1000); // Random date in last 30 days
      
      transactions.push({
        id: `tx-${i}`,
        type: isOutgoing ? 'send' : 'receive',
        amount: (Math.random() * 100).toFixed(2),
        currency: Math.random() > 0.5 ? 'USDC' : 'NEURA',
        timestamp: randomDate,
        status: Math.random() > 0.1 ? 'confirmed' : 'pending',
        from: isOutgoing ? address : `0x${Math.random().toString(16).substring(2,42)}`,
        to: isOutgoing ? `0x${Math.random().toString(16).substring(2,42)}` : address,
        hash: `0x${Math.random().toString(16).substring(2,66)}`,
        fee: (Math.random() * 0.01).toFixed(4)
      });
    }
    
    // Sort by timestamp, newest first
    return transactions.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  };
  
  // Export transaction data
  const exportTransactionData = async (format: 'csv' | 'json' | 'pdf' | 'txt') => {
    try {
      toast.loading(`Preparing ${format.toUpperCase()} export...`);
      
      // Simulate export process
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      let exportData;
      let filename;
      let mimeType;
      
      if (format === 'csv') {
        // Create CSV content
        const headers = "Date,Type,Amount,Currency,From,To,Status\n";
        const rows = wallet.transactionHistory.map(tx => 
          `${tx.timestamp.toISOString()},${tx.type},${tx.amount},${tx.currency},${tx.from},${tx.to},${tx.status}`
        ).join('\n');
        exportData = headers + rows;
        filename = `neura-transactions-${new Date().toISOString().split('T')[0]}.csv`;
        mimeType = 'text/csv';
      } else if (format === 'json') {
        // Create JSON content
        exportData = JSON.stringify(wallet.transactionHistory, null, 2);
        filename = `neura-transactions-${new Date().toISOString().split('T')[0]}.json`;
        mimeType = 'application/json';
      } else if (format === 'pdf') {
        // For demo, we'll just use JSON for PDF too
        exportData = JSON.stringify(wallet.transactionHistory, null, 2);
        filename = `neura-transactions-${new Date().toISOString().split('T')[0]}.txt`;
        mimeType = 'text/plain';
      } else {
        // For demo, we'll just use JSON for TXT too
        exportData = JSON.stringify(wallet.transactionHistory, null, 2);
        filename = `neura-transactions-${new Date().toISOString().split('T')[0]}.txt`;
        mimeType = 'text/plain';
      }
      
      // Create download link
      const blob = new Blob([exportData], { type: mimeType });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      toast.success("Export Successful", {
        description: `Your transactions have been exported as ${format.toUpperCase()}`
      });
      
      // Add notification
      addNotification({
        title: "Transactions Exported",
        message: `Your transaction data has been exported as ${format.toUpperCase()}`,
        type: "success"
      });
      
      return true;
    } catch (error) {
      console.error("Error exporting transactions:", error);
      toast.error("Export Failed", {
        description: "Failed to export transaction data. Please try again."
      });
      return false;
    }
  };
  
  return {
    wallet,
    isConnecting,
    error,
    connectWallet,
    disconnectWallet,
    sendTokens,
    createVault,
    groupWallets,
    savingsCircles,
    barterListings,
    createGroupWallet,
    createSavingsCircle,
    createBarterListing,
    purchaseService,
    investInImpactProject,
    toggleGaslessTransactions,
    upgradeWalletSovereignty,
    createAICollaboration,
    toggleTheme,
    addNotification,
    markNotificationRead,
    switchNetwork,
    exportTransactionData
  };
};
