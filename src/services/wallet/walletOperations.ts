
import { BrowserProvider, Contract, parseUnits, formatUnits } from 'ethers';
import { toast } from "sonner";
import { ERC20_ABI, SUPPORTED_CHAINS } from './mockData';
import type { 
  VaultInfo, 
  GroupWallet, 
  SavingsCircle, 
  BarterListing, 
  AICollaboration,
  Transaction
} from './types';

export const createWalletOperations = (
  wallet: any,
  setWallet: React.Dispatch<React.SetStateAction<any>>,
  setGroupWallets: React.Dispatch<React.SetStateAction<any>>,
  setSavingsCircles: React.Dispatch<React.SetStateAction<any>>,
  setBarterListings: React.Dispatch<React.SetStateAction<any>>,
  addNotification: (notification: any) => void
) => {
  // Theme toggling functionality
  const toggleTheme = () => {
    const newTheme = wallet.theme === 'dark' ? 'light' : 'dark';
    setWallet((prev: any) => ({ ...prev, theme: newTheme }));
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    return newTheme;
  };

  // Switch blockchain network
  const switchNetwork = async (chainId: number) => {
    try {
      const chain = SUPPORTED_CHAINS.find(c => c.id === chainId);
      if (!chain) throw new Error("Unsupported chain");
      
      if (wallet.provider) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setWallet((prev: any) => ({
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

  // Send tokens to another address
  const sendTokens = async (tokenAddress: string, recipient: string, amount: string) => {
    if (!wallet.signer || !wallet.address) {
      throw new Error("Wallet not connected");
    }
    
    try {
      toast.loading("Preparing transaction...");
      
      const token = wallet.tokens.find((t: any) => t.address === tokenAddress);
      if (!token) throw new Error("Token not found");
      
      const tokenContract = new Contract(tokenAddress, ERC20_ABI, wallet.signer);
      const decimals = token.decimals;
      const parsedAmount = parseUnits(amount, decimals);
      
      toast.loading("Sending tokens...");
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const selectedToken = wallet.tokens.find((t: any) => t.address === tokenAddress);
      if (selectedToken && selectedToken.balance) {
        const currentBalance = parseFloat(selectedToken.balance);
        const sentAmount = parseFloat(amount);
        
        const updatedTokens = wallet.tokens.map((t: any) => {
          if (t.address === tokenAddress) {
            return {
              ...t,
              balance: (currentBalance - sentAmount).toFixed(2)
            };
          }
          return t;
        });
        
        setWallet((prev: any) => ({ ...prev, tokens: updatedTokens }));
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
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const token = wallet.tokens.find((t: any) => t.address === tokenAddress);
      if (!token) throw new Error("Token not found");
      
      const newVault: VaultInfo = {
        id: `vault-${Date.now()}`,
        name,
        tokenAddress,
        balance: "0.00",
        apy: 3.5 + Math.random() * 2,
        autoDeposit
      };
      
      setWallet((prev: any) => ({
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
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const token = wallet.tokens.find((t: any) => t.address === tokenAddress);
      if (!token) throw new Error("Token not found");
      
      const newGroupWallet: GroupWallet = {
        id: `group-${Date.now()}`,
        name,
        members,
        balance: "0.00",
        tokenAddress,
        isAdmin: true
      };
      
      setGroupWallets((prev: any) => [...prev, newGroupWallet]);
      
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
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const token = wallet.tokens.find((t: any) => t.address === tokenAddress);
      if (!token) throw new Error("Token not found");
      
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
      
      setSavingsCircles((prev: any) => [...prev, newSavingsCircle]);
      
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
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const newListing: BarterListing = {
        id: `barter-${Date.now()}`,
        title,
        description,
        images,
        owner: wallet.address || "unknown",
        location,
        lookingFor,
        verificationLevel: 1,
        created: new Date()
      };
      
      setBarterListings((prev: any) => [...prev, newListing]);
      
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
      
      const service = wallet.serviceItems.find((s: any) => s.id === serviceId);
      if (!service) throw new Error("Service not found");
      
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
  
  // Invest in impact project
  const investInImpactProject = async (projectId: string, amount: string, currency: string) => {
    if (!wallet.isConnected) {
      throw new Error("Wallet not connected");
    }
    
    try {
      toast.loading("Processing investment...");
      
      const project = wallet.impactProjects.find((p: any) => p.id === projectId);
      if (!project) throw new Error("Project not found");
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const updatedProjects = wallet.impactProjects.map((p: any) => {
        if (p.id === projectId) {
          return {
            ...p,
            fundingRaised: p.fundingRaised + parseFloat(amount)
          };
        }
        return p;
      });
      
      setWallet((prev: any) => ({
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
  
  // Toggle gasless transactions
  const toggleGaslessTransactions = async (enabled: boolean): Promise<boolean> => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setWallet((prev: any) => ({
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
  
  // Upgrade wallet sovereignty level
  const upgradeWalletSovereignty = async (level: 'custodial' | 'social' | 'smart-contract' | 'mpc' | 'full'): Promise<boolean> => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setWallet((prev: any) => ({
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
      
      setWallet((prev: any) => ({
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
    
    for (let i = 0; i < 20; i++) {
      const isOutgoing = Math.random() > 0.5;
      const randomDate = new Date(now.getTime() - Math.random() * 30 * 24 * 60 * 60 * 1000);
      
      transactions.push({
        id: `tx-${i}`,
        type: isOutgoing ? 'send' : 'receive',
        amount: (Math.random() * 100).toFixed(2),
        currency: Math.random() > 0.5 ? 'USDC' : 'ETH',
        timestamp: randomDate,
        status: Math.random() > 0.1 ? 'confirmed' : 'pending',
        from: isOutgoing ? address : `0x${Math.random().toString(16).substring(2,42)}`,
        to: isOutgoing ? `0x${Math.random().toString(16).substring(2,42)}` : address,
        hash: `0x${Math.random().toString(16).substring(2,66)}`,
        fee: (Math.random() * 0.01).toFixed(4)
      });
    }
    
    return transactions.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
  };
  
  // Export transaction data
  const exportTransactionData = async (format: 'csv' | 'json' | 'pdf' | 'txt') => {
    try {
      toast.loading(`Preparing ${format.toUpperCase()} export...`);
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      let exportData;
      let filename;
      let mimeType;
      
      if (format === 'csv') {
        const headers = "Date,Type,Amount,Currency,From,To,Status\n";
        const rows = wallet.transactionHistory.map((tx: any) => 
          `${tx.timestamp.toISOString()},${tx.type},${tx.amount},${tx.currency},${tx.from},${tx.to},${tx.status}`
        ).join('\n');
        exportData = headers + rows;
        filename = `neura-transactions-${new Date().toISOString().split('T')[0]}.csv`;
        mimeType = 'text/csv';
      } else if (format === 'json') {
        exportData = JSON.stringify(wallet.transactionHistory, null, 2);
        filename = `neura-transactions-${new Date().toISOString().split('T')[0]}.json`;
        mimeType = 'application/json';
      } else if (format === 'pdf') {
        exportData = JSON.stringify(wallet.transactionHistory, null, 2);
        filename = `neura-transactions-${new Date().toISOString().split('T')[0]}.txt`;
        mimeType = 'text/plain';
      } else {
        exportData = JSON.stringify(wallet.transactionHistory, null, 2);
        filename = `neura-transactions-${new Date().toISOString().split('T')[0]}.txt`;
        mimeType = 'text/plain';
      }
      
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
    toggleTheme,
    switchNetwork,
    sendTokens,
    createVault,
    createGroupWallet,
    createSavingsCircle,
    createBarterListing,
    purchaseService,
    investInImpactProject,
    toggleGaslessTransactions,
    upgradeWalletSovereignty,
    createAICollaboration,
    generateMockTransactionHistory,
    exportTransactionData
  };
};
