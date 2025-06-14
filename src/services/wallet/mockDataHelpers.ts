
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
  setWallet: React.Dispatch<React.SetStateAction<any>>,
  setGroupWallets: React.Dispatch<React.SetStateAction<any>>,
  setSavingsCircles: React.Dispatch<React.SetStateAction<any>>,
  setBarterListings: React.Dispatch<React.SetStateAction<any>>
) => {
  const fetchMockVaultsData = () => {
    const mockVaults = fetchMockVaults();
    setWallet((prev: any) => ({ ...prev, vaults: mockVaults }));
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
    setWallet((prev: any) => ({ ...prev, creditScore: mockCreditScore }));
  };
  
  const fetchMockServiceItemsData = () => {
    const mockServices = fetchMockServiceItems();
    setWallet((prev: any) => ({ ...prev, serviceItems: mockServices }));
  };
  
  const fetchMockReputationStatsData = () => {
    const mockStats = fetchMockReputationStats();
    setWallet((prev: any) => ({ ...prev, reputationStats: mockStats }));
  };
  
  const fetchMockImpactFinanceData = () => {
    const { impactProjects, impactBonds } = fetchMockImpactFinance();
    setWallet((prev: any) => ({ 
      ...prev, 
      impactProjects,
      impactBonds
    }));
  };
  
  const fetchMockRoyaltyAndLicensingData = () => {
    const { royaltyStreams, licenses } = fetchMockRoyaltyAndLicensing();
    setWallet((prev: any) => ({ 
      ...prev, 
      royaltyStreams,
      licenses
    }));
  };
  
  const fetchMockProvenanceGraphData = async () => {
    const mockProvenanceGraph = await fetchMockProvenanceGraph();
    setWallet((prev: any) => ({ ...prev, provenanceGraph: mockProvenanceGraph }));
  };
  
  const fetchMockCrossPlatformIdentitiesData = async () => {
    const mockIdentities = await fetchMockCrossPlatformIdentities();
    setWallet((prev: any) => ({ ...prev, crossPlatformIdentities: mockIdentities }));
  };
  
  const fetchMockFanParticipationTokensData = () => {
    const mockTokens = fetchMockFanParticipationTokens();
    setWallet((prev: any) => ({ ...prev, fanParticipationTokens: mockTokens }));
  };
  
  const fetchMockCreatorFanBondsData = () => {
    const mockBonds = fetchMockCreatorFanBonds();
    setWallet((prev: any) => ({ ...prev, creatorFanBonds: mockBonds }));
  };
  
  const fetchMockAICollaborationsData = async () => {
    const mockCollaborations = await fetchMockAICollaborations();
    setWallet((prev: any) => ({ ...prev, aiCollaborations: mockCollaborations }));
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
