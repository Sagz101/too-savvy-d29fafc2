import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from '@/components/auth/AuthProvider';

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
    nftsCreated: number;
  };
  recentActivity?: Array<{
    type: string;
    description: string;
    timestamp: Date;
    moduleId: string;
  }>;
}

interface SharedUserContextType {
  userData: SharedUserData;
  updateUserData: (updates: Partial<SharedUserData>) => void;
  addActivity: (activity: Omit<SharedUserData['recentActivity'][0], 'timestamp'>) => void;
  isDataLoaded: boolean;
}

const SharedUserContext = createContext<SharedUserContextType | undefined>(undefined);

export const SharedUserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, session } = useAuth();
  const [userData, setUserData] = useState<SharedUserData>({});
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  // Initialize user data from authentication
  useEffect(() => {
    if (session && user) {
      const initialData: SharedUserData = {
        walletAddress: undefined, // Will be set when wallet is connected
        profile: {
          name: user.email?.split('@')[0] || 'Creator',
          avatar: undefined,
          bio: undefined
        },
        preferences: {
          theme: localStorage.getItem('theme') || 'dark',
          notifications: localStorage.getItem('notifications') !== 'false',
          defaultChain: localStorage.getItem('defaultChain') || 'ethereum'
        },
        stats: {
          totalEarnings: 0,
          contentCount: 0,
          followers: 0,
          nftsCreated: 0
        },
        recentActivity: []
      };
      
      setUserData(initialData);
      setIsDataLoaded(true);
    }
  }, [session, user]);

  const updateUserData = (updates: Partial<SharedUserData>) => {
    setUserData(prev => ({
      ...prev,
      ...updates
    }));
    
    // Persist preferences to localStorage
    if (updates.preferences) {
      Object.entries(updates.preferences).forEach(([key, value]) => {
        localStorage.setItem(key, String(value));
      });
    }
  };

  const addActivity = (activity: Omit<SharedUserData['recentActivity'][0], 'timestamp'>) => {
    const newActivity = {
      ...activity,
      timestamp: new Date()
    };
    
    setUserData(prev => ({
      ...prev,
      recentActivity: [newActivity, ...(prev.recentActivity || [])].slice(0, 20) // Keep last 20 activities
    }));
  };

  const value: SharedUserContextType = {
    userData,
    updateUserData,
    addActivity,
    isDataLoaded
  };

  return (
    <SharedUserContext.Provider value={value}>
      {children}
    </SharedUserContext.Provider>
  );
};

export const useSharedUser = () => {
  const context = useContext(SharedUserContext);
  if (context === undefined) {
    throw new Error('useSharedUser must be used within a SharedUserProvider');
  }
  return context;
};

// Helper hook for module-specific data
export const useModuleContext = (moduleId: string, moduleName: string) => {
  const { userData, addActivity, updateUserData } = useSharedUser();
  
  useEffect(() => {
    // Track module access
    addActivity({
      type: 'module_access',
      description: `Accessed ${moduleName}`,
      moduleId
    });
  }, [moduleId, moduleName, addActivity]);
  
  const updateModuleStats = (statUpdates: Partial<SharedUserData['stats']>) => {
    updateUserData({
      stats: {
        ...userData.stats,
        ...statUpdates
      }
    });
  };
  
  return {
    userData,
    updateModuleStats,
    addActivity: (activity: Omit<SharedUserData['recentActivity'][0], 'timestamp' | 'moduleId'>) =>
      addActivity({ ...activity, moduleId })
  };
};