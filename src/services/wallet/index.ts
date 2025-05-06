
import { useState } from 'react';
import { BrowserProvider, Contract, parseUnits, formatUnits } from 'ethers';
import { toast } from "sonner";
import { DEFAULT_TOKENS, ERC20_ABI, SUPPORTED_CHAINS } from './mockData';
import { WalletState, GroupWallet, SavingsCircle, BarterListing, VaultInfo, ServiceItem, Notification, Transaction } from './types';

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
} from './mockDataFetchers';

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
      const vaults = await fetchMockVaults(DEFAULT_TOKENS);
      setWallet(prev => ({ ...prev, vaults }));
      
      // Fetch mock group wallets and savings circles
      const mockGroupWallets = await fetchMockGroupWallets(DEFAULT_TOKENS);
      setGroupWallets(mockGroupWallets);
      
      const mockSavingsCircles = await fetchMockSavingsCircles(DEFAULT_TOKENS);
      setSavingsCircles(mockSavingsCircles);
      
      // Fetch mock barter listings
      const mockBarterListings = await fetchMockBarterListings();
      setBarterListings(mockBarterListings);
      
      // Fetch the new advanced finance features
      const mockCreditScore = await fetchMockCreditScore();
      const mockServiceItems = await fetchMockServiceItems();
      const mockReputationStats = await fetchMockReputationStats();
      const { mockProjects, mockBonds } = await fetchMockImpactFinance();
      const { mockRoyalties, mockLicenses } = await fetchMockRoyaltyAndLicensing();
      
      // New mock data functions for the requested features
      const mockProvenanceGraph = await fetchMockProvenanceGraph();
      const mockIdentities = await fetchMockCrossPlatformIdentities();
      const mockTokens = await fetchMockFanParticipationTokens();
      const mockCreatorBonds = await fetchMockCreatorFanBonds();
      const mockCollaborations = await fetchMockAICollaborations();
      
      setWallet(prev => ({
        ...prev,
        creditScore: mockCreditScore,
        serviceItems: mockServiceItems,
        reputationStats: mockReputationStats,
        impactProjects: mockProjects,
        impactBonds: mockBonds,
        royaltyStreams: mockRoyalties,
        licenses: mockLicenses,
        provenanceGraph: mockProvenanceGraph,
        crossPlatformIdentities: mockIdentities,
        fanParticipationTokens: mockTokens,
        creatorFanBonds: mockCreatorBonds,
        aiCollaborations: mockCollaborations
      }));
      
      // Create a sample transaction history
      const mockTransactions = generateMockTransactionHistory(accounts[0]);
      setWallet(prev => ({ ...prev, transactionHistory: mockTransactions }));
      
      // Add welcome notification
      addNotification({
        title: "Wallet Connected",
        message: `Connected to wallet ${accounts[0].slice(0, 6)}...${accounts[0].slice(-4)}`,
        type: "success"
      });
      
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
      
      // Add transaction to history
      const newTransaction: Transaction = {
        id: `tx-${Date.now()}`,
        type: 'send',
        amount,
        currency: token.symbol,
        timestamp: new Date(),
        status: 'confirmed',
        from: wallet.address,
        to: recipient,
        hash: `0x${Math.random().toString(16).substring(2,66)}`, // Mock hash
        fee: (Math.random() * 0.01).toFixed(4)
      };
      
      setWallet(prev => ({
        ...prev,
        transactionHistory: [newTransaction, ...prev.transactionHistory]
      }));
      
      // Add notification
      addNotification({
        title: "Transaction Successful",
        message: `Sent ${amount} ${token.symbol} to ${recipient.slice(0, 6)}...`,
        type: "success"
      });
      
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
      
      // Add notification
      addNotification({
        title: "Vault Created",
        message: `Created ${name} vault for ${token.symbol}`,
        type: "success"
      });
      
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
      
      // Add notification
      addNotification({
        title: "Group Wallet Created",
        message: `Created ${name} group wallet`,
        type: "success"
      });
      
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
      
      // Add notification
      addNotification({
        title: "Savings Circle Created",
        message: `Created ${name} savings circle for ${members.length} members`,
        type: "success"
      });
      
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
      
      // Add notification
      addNotification({
        title: "Barter Listing Created",
        message: `Created listing: ${title}`,
        type: "success"
      });
      
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
      
      // Add notification
      addNotification({
        title: "Service Purchased",
        message: `You've purchased "${service.title}" from ${service.creator}`,
        type: "success"
      });
      
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
  
  // Add the investInImpactProject function
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
      
      // Add notification
      addNotification({
        title: "Investment Successful",
        message: `You've invested ${amount} ${currency} in "${project.title}"`,
        type: "success"
      });
      
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
  
  // Toggle gasless transactions
  const toggleGaslessTransactions = async (enabled: boolean): Promise<boolean> => {
    try {
      // Simulate backend call to enable/disable gasless transactions
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setWallet(prev => ({
        ...prev,
        gaslessTransactionsEnabled: enabled
      }));
      
      // Add notification
      addNotification({
        title: enabled ? "Gasless Transactions Enabled" : "Gasless Transactions Disabled",
        message: enabled ? "You can now transact without paying gas fees" : "Standard gas fees will now apply to transactions",
        type: "info"
      });
      
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
  
  // Upgrade wallet sovereignty level
  const upgradeWalletSovereignty = async (level: 'custodial' | 'social' | 'smart-contract' | 'mpc' | 'full'): Promise<boolean> => {
    try {
      // Simulate backend call to upgrade sovereignty
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setWallet(prev => ({
        ...prev,
        walletSovereigntyLevel: level
      }));
      
      // Add notification
      addNotification({
        title: "Wallet Sovereignty Upgraded",
        message: `Your wallet now has ${level} sovereignty level`,
        type: "success"
      });
      
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
      
      const newCollaboration = {
        id: `ai-collab-${Date.now()}`,
        title,
        type,
        aiProvider,
        created: new Date().toISOString().split('T')[0],
        status: 'draft' as const,
        ownership: {
          human: humanOwnership,
          ai: 100 - humanOwnership
        }
      };
      
      setWallet(prev => ({
        ...prev,
        aiCollaborations: [...prev.aiCollaborations, newCollaboration]
      }));
      
      // Add notification
      addNotification({
        title: "AI Collaboration Created",
        message: `Created "${title}" with ${humanOwnership}% human ownership`,
        type: "success"
      });
      
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

  // Export transaction data
  const exportTransactionData = async (format: 'csv' | 'json' | 'pdf') => {
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
      } else {
        // For demo, we'll just use JSON for PDF too
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
