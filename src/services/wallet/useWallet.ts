
import { BrowserProvider, formatUnits } from 'ethers';
import { toast } from "sonner";
import { DEFAULT_TOKENS, SUPPORTED_CHAINS } from './mockData';
import { useWalletState } from './walletState';
import { createNotificationHelpers } from './notificationHelpers';
import { createMockDataHelpers } from './mockDataHelpers';
import { createWalletOperations } from './walletOperations';

export const useWallet = () => {
  const {
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
  } = useWalletState();

  const { addNotification, markNotificationRead } = createNotificationHelpers(setWallet);
  
  const mockDataHelpers = createMockDataHelpers(
    setWallet,
    setGroupWallets,
    setSavingsCircles,
    setBarterListings
  );
  
  const operations = createWalletOperations(
    wallet,
    setWallet,
    setGroupWallets,
    setSavingsCircles,
    setBarterListings,
    addNotification
  );

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
      
      const balance = await provider.getBalance(accounts[0]);
      const nativeBalance = formatUnits(balance, 18);
      
      setWallet(prev => ({
        ...prev,
        address: accounts[0],
        chainId: Number(network.chainId),
        isConnected: true,
        provider,
        signer,
        nativeBalance,
        transactionHistory: operations.generateMockTransactionHistory(accounts[0])
      }));
      
      fetchTokenBalances(provider, accounts[0]);
      
      // Fetch all mock data
      mockDataHelpers.fetchMockVaultsData();
      mockDataHelpers.fetchMockGroupWalletsData();
      mockDataHelpers.fetchMockSavingsCirclesData();
      mockDataHelpers.fetchMockBarterListingsData();
      mockDataHelpers.fetchMockCreditScoreData();
      mockDataHelpers.fetchMockServiceItemsData();
      mockDataHelpers.fetchMockReputationStatsData();
      mockDataHelpers.fetchMockImpactFinanceData();
      mockDataHelpers.fetchMockRoyaltyAndLicensingData();
      mockDataHelpers.fetchMockProvenanceGraphData();
      mockDataHelpers.fetchMockCrossPlatformIdentitiesData();
      mockDataHelpers.fetchMockFanParticipationTokensData();
      mockDataHelpers.fetchMockCreatorFanBondsData();
      mockDataHelpers.fetchMockAICollaborationsData();
      
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
      theme: wallet.theme,
      notifications: wallet.notifications,
      transactionHistory: [],
      supportedChains: SUPPORTED_CHAINS,
      selectedChain: SUPPORTED_CHAINS[0]
    });
    setGroupWallets([]);
    setSavingsCircles([]);
    setBarterListings([]);
    
    addNotification({
      title: "Wallet Disconnected",
      message: "Your wallet has been disconnected.",
      type: "info"
    });
  };
  
  const fetchTokenBalances = async (provider: BrowserProvider, address: string) => {
    try {
      const updatedTokens = await Promise.all(
        wallet.tokens.map(async (token) => {
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
  
  return {
    wallet,
    isConnecting,
    error,
    connectWallet,
    disconnectWallet,
    groupWallets,
    savingsCircles,
    barterListings,
    addNotification,
    markNotificationRead,
    ...operations
  };
};
