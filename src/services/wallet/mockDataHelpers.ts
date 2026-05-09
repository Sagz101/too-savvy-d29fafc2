import type { WalletState } from './walletState';

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

export const createMockDataHelpers = (
  setWallet: React.Dispatch<React.SetStateAction<WalletState>>,
  setGroupWallets: React.Dispatch<React.SetStateAction<WalletState>>,
  setSavingsCircles: React.Dispatch<React.SetStateAction<WalletState>>,
  setBarterListings: React.Dispatch<React.SetStateAction<WalletState>>
) => {
  const fetchMockVaultsData = () => {
    const mockVaults = fetchMockVaults();
    setWallet((prev: WalletState) => ({ ...prev, vaults: mockVaults }));
  };
  
  const fetchMockGroupWalletsData = () => {
    const mockGroupWallets = fetchMockGroupWallets();
    setGroupWallets(mockGroupWallets);
  };
  
  const fetchMockSavingsCirclesData = () => {
    const mockSavingsCircles = fetchMockSavingsCircles();
    setSavingsCircles(mockSavingsCircles);
  };
  
  const fetchMockBarterListingsData = () => {
    const mockListings = fetchMockBarterListings();
    setBarterListings(mockListings);
  };
  
  const fetchMockCreditScoreData = () => {
    const mockCreditScore = fetchMockCreditScore();
    setWallet((prev: WalletState) => ({ ...prev, creditScore: mockCreditScore }));
  };
  
  const fetchMockServiceItemsData = () => {
    const mockServices = fetchMockServiceItems();
    setWallet((prev: WalletState) => ({ ...prev, serviceItems: mockServices }));
  };
  
  const fetchMockReputationStatsData = () => {
    const mockStats = fetchMockReputationStats();
    setWallet((prev: WalletState) => ({ ...prev, reputationStats: mockStats }));
  };
  
  const fetchMockImpactFinanceData = () => {
    const { impactProjects, impactBonds } = fetchMockImpactFinance();
    setWallet((prev: WalletState) => ({ 
      ...prev, 
      impactProjects,
      impactBonds
    }));
  };
  
  const fetchMockRoyaltyAndLicensingData = () => {
    const { royaltyStreams, licenses } = fetchMockRoyaltyAndLicensing();
    setWallet((prev: WalletState) => ({ 
      ...prev, 
      royaltyStreams,
      licenses
    }));
  };
  
  const fetchMockProvenanceGraphData = async () => {
    const mockProvenanceGraph = await fetchMockProvenanceGraph();
    setWallet((prev: WalletState) => ({ ...prev, provenanceGraph: mockProvenanceGraph }));
  };
  
  const fetchMockCrossPlatformIdentitiesData = async () => {
    const mockIdentities = await fetchMockCrossPlatformIdentities();
    setWallet((prev: WalletState) => ({ ...prev, crossPlatformIdentities: mockIdentities }));
  };
  
  const fetchMockFanParticipationTokensData = () => {
    const mockTokens = fetchMockFanParticipationTokens();
    setWallet((prev: WalletState) => ({ ...prev, fanParticipationTokens: mockTokens }));
  };
  
  const fetchMockCreatorFanBondsData = () => {
    const mockBonds = fetchMockCreatorFanBonds();
    setWallet((prev: WalletState) => ({ ...prev, creatorFanBonds: mockBonds }));
  };
  
  const fetchMockAICollaborationsData = async () => {
    const mockCollaborations = await fetchMockAICollaborations();
    setWallet((prev: WalletState) => ({ ...prev, aiCollaborations: mockCollaborations }));
  };

  return {
    fetchMockVaultsData,
    fetchMockGroupWalletsData,
    fetchMockSavingsCirclesData,
    fetchMockBarterListingsData,
    fetchMockCreditScoreData,
    fetchMockServiceItemsData,
    fetchMockReputationStatsData,
    fetchMockImpactFinanceData,
    fetchMockRoyaltyAndLicensingData,
    fetchMockProvenanceGraphData,
    fetchMockCrossPlatformIdentitiesData,
    fetchMockFanParticipationTokensData,
    fetchMockCreatorFanBondsData,
    fetchMockAICollaborationsData
  };
};
