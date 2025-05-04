
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

export type WalletState = {
  address: string | null;
  chainId: number | null;
  isConnected: boolean;
  provider: BrowserProvider | null;
  signer: JsonRpcSigner | null;
  tokens: Token[];
  nativeBalance: string;
  vaults: VaultInfo[];
}

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
    vaults: []
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
      vaults: []
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
      
      // Simulate blockchain interaction
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const newGroupWallet: GroupWallet = {
        id: `group-${Date.now()}`,
        name,
        members: [wallet.address!, ...members],
        balance: "0.00",
        tokenAddress,
        isAdmin: true
      };
      
      setGroupWallets(prev => [...prev, newGroupWallet]);
      
      toast.success("Group Wallet Created!", {
        description: `${name} has been created successfully`
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
  const createSavingsCircle = async (
    name: string, 
    members: string[], 
    contributionAmount: string,
    tokenAddress: string
  ) => {
    if (!wallet.isConnected) {
      throw new Error("Wallet not connected");
    }
    
    try {
      toast.loading("Creating savings circle...");
      
      // Simulate blockchain interaction
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate schedule dates starting from next month
      const today = new Date();
      const schedule = [wallet.address!, ...members].map((address, index) => {
        const date = new Date(today);
        date.setMonth(date.getMonth() + index + 1);
        return {
          address,
          date: date.toISOString().split('T')[0]
        };
      });
      
      const newSavingsCircle: SavingsCircle = {
        id: `circle-${Date.now()}`,
        name,
        members: [wallet.address!, ...members],
        contributionAmount,
        tokenAddress,
        nextWithdrawal: schedule[0].address,
        schedule,
        isActive: true
      };
      
      setSavingsCircles(prev => [...prev, newSavingsCircle]);
      
      toast.success("Savings Circle Created!", {
        description: `${name} has been created successfully`
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
  const createBarterListing = async (
    title: string,
    description: string,
    images: string[],
    location: string,
    lookingFor: string[]
  ) => {
    if (!wallet.isConnected) {
      throw new Error("Wallet not connected");
    }
    
    try {
      toast.loading("Creating barter listing...");
      
      // Simulate blockchain interaction
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const newListing: BarterListing = {
        id: `barter-${Date.now()}`,
        title,
        description,
        images,
        owner: wallet.address!,
        location,
        lookingFor,
        verificationLevel: 1, // Default for new users
        created: new Date()
      };
      
      setBarterListings(prev => [...prev, newListing]);
      
      toast.success("Listing Created!", {
        description: `Your barter listing has been published`
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

  // Listen for account changes
  useEffect(() => {
    if (!window.ethereum) return;

    const handleAccountsChanged = (accounts: string[]) => {
      if (accounts.length === 0) {
        // User disconnected their wallet
        disconnectWallet();
      } else if (wallet.address !== accounts[0]) {
        // User switched accounts
        connectWallet();
      }
    };

    const handleChainChanged = () => {
      // Reload when chain changes
      window.location.reload();
    };

    window.ethereum.on('accountsChanged', handleAccountsChanged);
    window.ethereum.on('chainChanged', handleChainChanged);

    return () => {
      if (window.ethereum?.removeListener) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        window.ethereum.removeListener('chainChanged', handleChainChanged);
      }
    };
  }, [wallet.address]);

  // Return the wallet state and functions
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
    createGroupWallet,
    createSavingsCircle,
    barterListings,
    createBarterListing
  };
};
