import React, { useState, useEffect, useCallback, createContext, useContext } from 'react';
import { useAuth } from '@/services/auth';

interface ModuleData {
  id: string;
  name: string;
  isActive: boolean;
  lastAccessed?: Date;
  userData?: any;
}

interface SharedUserData {
  walletAddress?: string;
  profile?: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  preferences?: {
    theme: string;
    notifications: boolean;
    defaultChain: string;
  };
  stats?: {
    totalEarnings: number;
    contentCount: number;
    followers: number;
  };
}

// Hook for managing cross-module data sharing and integration
export const useModuleIntegration = () => {
  const { user, isAuthenticated } = useAuth();
  const [sharedData, setSharedData] = useState<SharedUserData>({});
  const [activeModules, setActiveModules] = useState<ModuleData[]>([]);
  const [isDataSynced, setIsDataSynced] = useState(false);

  // Initialize shared data from user session
  useEffect(() => {
    if (isAuthenticated && user) {
      setSharedData({
        walletAddress: user.wallet_address,
        profile: {
          name: user.profile?.name || 'Creator',
          avatar: user.profile?.avatar_url,
          bio: user.profile?.bio
        },
        preferences: {
          theme: localStorage.getItem('theme') || 'dark',
          notifications: true,
          defaultChain: 'ethereum'
        },
        stats: {
          totalEarnings: 0,
          contentCount: 0,
          followers: 0
        }
      });
      setIsDataSynced(true);
    }
  }, [isAuthenticated, user]);

  // Track module access and update last accessed time
  const trackModuleAccess = useCallback((moduleId: string, moduleName: string) => {
    setActiveModules(prev => {
      const existing = prev.find(m => m.id === moduleId);
      if (existing) {
        return prev.map(m => 
          m.id === moduleId 
            ? { ...m, lastAccessed: new Date(), isActive: true }
            : m
        );
      } else {
        return [...prev, {
          id: moduleId,
          name: moduleName,
          isActive: true,
          lastAccessed: new Date()
        }];
      }
    });
  }, []);

  // Update shared data across modules
  const updateSharedData = useCallback((updates: Partial<SharedUserData>) => {
    setSharedData(prev => ({
      ...prev,
      ...updates
    }));
    
    // Persist certain data to localStorage
    if (updates.preferences) {
      Object.entries(updates.preferences).forEach(([key, value]) => {
        localStorage.setItem(key, String(value));
      });
    }
  }, []);

  // Get module-specific data with fallbacks
  const getModuleData = useCallback((moduleId: string) => {
    const moduleData = activeModules.find(m => m.id === moduleId);
    return {
      isActive: moduleData?.isActive || false,
      lastAccessed: moduleData?.lastAccessed,
      userData: moduleData?.userData || {},
      sharedData
    };
  }, [activeModules, sharedData]);

  // Cross-module navigation helper
  const navigateToModule = useCallback((moduleId: string, moduleName: string, additionalData?: any) => {
    trackModuleAccess(moduleId, moduleName);
    
    // Store navigation context for seamless transitions
    sessionStorage.setItem('lastModule', moduleId);
    if (additionalData) {
      sessionStorage.setItem(`${moduleId}_context`, JSON.stringify(additionalData));
    }
  }, [trackModuleAccess]);

  // Get recently accessed modules for quick navigation
  const getRecentModules = useCallback(() => {
    return activeModules
      .filter(m => m.lastAccessed)
      .sort((a, b) => new Date(b.lastAccessed!).getTime() - new Date(a.lastAccessed!).getTime())
      .slice(0, 5);
  }, [activeModules]);

  // Module integration status
  const getIntegrationStatus = useCallback(() => {
    return {
      isWalletConnected: !!sharedData.walletAddress,
      isDataSynced,
      activeModulesCount: activeModules.filter(m => m.isActive).length,
      hasProfile: !!(sharedData.profile?.name && sharedData.profile?.name !== 'Creator')
    };
  }, [sharedData, isDataSynced, activeModules]);

  // Sync data across modules (simulated - in real app would use WebSocket or polling)
  const syncModuleData = useCallback(async () => {
    try {
      setIsDataSynced(false);
      
      // Simulate API call to sync user data across modules
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real implementation, this would fetch latest data from backend
      // and update stats, content counts, etc.
      
      setIsDataSynced(true);
      return true;
    } catch (error) {
      console.error('Failed to sync module data:', error);
      setIsDataSynced(false);
      return false;
    }
  }, []);

  return {
    sharedData,
    activeModules,
    isDataSynced,
    trackModuleAccess,
    updateSharedData,
    getModuleData,
    navigateToModule,
    getRecentModules,
    getIntegrationStatus,
    syncModuleData
  };
};

// Context for sharing module integration state across components

interface ModuleIntegrationContextType {
  sharedData: SharedUserData;
  activeModules: ModuleData[];
  isDataSynced: boolean;
  trackModuleAccess: (moduleId: string, moduleName: string) => void;
  updateSharedData: (updates: Partial<SharedUserData>) => void;
  getModuleData: (moduleId: string) => any;
  navigateToModule: (moduleId: string, moduleName: string, additionalData?: any) => void;
  getRecentModules: () => ModuleData[];
  getIntegrationStatus: () => any;
  syncModuleData: () => Promise<boolean>;
}

const ModuleIntegrationContext = createContext<ModuleIntegrationContextType | undefined>(undefined);

export const ModuleIntegrationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const integration = useModuleIntegration();
  
  return (
    <ModuleIntegrationContext.Provider value={integration}>
      {children}
    </ModuleIntegrationContext.Provider>
  );
};

export const useModuleIntegrationContext = () => {
  const context = useContext(ModuleIntegrationContext);
  if (context === undefined) {
    throw new Error('useModuleIntegrationContext must be used within a ModuleIntegrationProvider');
  }
  return context;
};