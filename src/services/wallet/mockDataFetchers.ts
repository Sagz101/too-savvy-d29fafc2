import { DEFAULT_TOKENS } from './mockData';
import { VaultInfo, GroupWallet, SavingsCircle, BarterListing, CreditScore, ServiceItem, ReputationStats, ImpactProject, ImpactBond, RoyaltyStream, License, ProvenanceNode, CrossPlatformIdentity, FanParticipationToken, CreatorFanBond, AICollaboration, Token } from './types';

export const fetchMockVaults = () => {
  // Mock vaults for demo purposes
  const mockVaults: VaultInfo[] = [
    {
      id: "vault-1",
      name: "ETH Savings",
      tokenAddress: DEFAULT_TOKENS[2].address, // ETH token
      balance: "2.5",
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
  
  return mockVaults;
};

export const fetchMockGroupWallets = () => {
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
      balance: "3.75",
      tokenAddress: DEFAULT_TOKENS[2].address, // ETH
      isAdmin: false
    }
  ];
  
  return mockGroupWallets;
};

export const fetchMockSavingsCircles = () => {
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
  
  return mockSavingsCircles;
};

export const fetchMockBarterListings = () => {
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
  
  return mockListings;
};

export const fetchMockCreditScore = (): CreditScore => {
  // Mock credit score data for demo purposes
  const mockCreditScore: CreditScore = {
    score: 720,
    repaymentHistory: 95,
    communityTrust: 87,
    walletActivity: 78,
    maxCredit: 5000,
    approvedProtocols: ["Aave", "Compound", "Maple Finance"]
  };
  
  return mockCreditScore;
};

export const fetchMockServiceItems = (): ServiceItem[] => {
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
      price: "0.1",
      currency: "ETH",
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
  
  return mockServices;
};

export const fetchMockReputationStats = (): ReputationStats => {
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
  
  return mockStats;
};

export const fetchMockImpactFinance = (): { impactProjects: ImpactProject[], impactBonds: ImpactBond[] } => {
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
      minInvestment: 0.5,
      currency: "ETH",
      totalRaised: 75000,
      target: 150000,
      verified: true
    }
  ];
  
  return { impactProjects: mockProjects, impactBonds: mockBonds };
};

export const fetchMockRoyaltyAndLicensing = (): { royaltyStreams: RoyaltyStream[], licenses: License[] } => {
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
      totalEarned: 2.8,
      currency: "ETH",
      royaltyRate: 8,
      dynamicInfo: "Based on engagement metrics",
      lastPayout: "2025-04-15",
      nextEstimate: 0.32
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
      fee: 3.5,
      currency: "ETH",
      usage: "Platform Integration",
      type: 'exclusive'
    }
  ];
  
  return { royaltyStreams: mockRoyalties, licenses: mockLicenses };
};

export const fetchMockProvenanceGraph = async (): Promise<ProvenanceNode[]> => {
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
  
  return mockProvenanceGraph;
};

export const fetchMockCrossPlatformIdentities = async (): Promise<CrossPlatformIdentity[]> => {
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
  
  return mockIdentities;
};

export const fetchMockFanParticipationTokens = (): FanParticipationToken[] => {
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
      price: 0.012,
      currency: "ETH",
      holders: 75,
      activePolls: 1
    }
  ];
  
  return mockTokens;
};

export const fetchMockCreatorFanBonds = (): CreatorFanBond[] => {
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
      initialValue: 0.25,
      currentValue: 0.325,
      currency: "ETH",
      issuedDate: "2025-02-05",
      supporter: "0xghi..."
    }
  ];
  
  return mockBonds;
};

export const fetchMockAICollaborations = async (): Promise<AICollaboration[]> => {
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
  
  return mockCollaborations;
};
