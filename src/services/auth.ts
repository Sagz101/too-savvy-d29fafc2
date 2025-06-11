
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface User {
  id: string;
  email?: string;
  walletAddress?: string;
  isWeb3Native: boolean;
  hasLinkedWallet: boolean;
  authMethod: 'email' | 'google' | 'yahoo' | 'wallet';
  userType: 'Web2_User' | 'Hybrid_User' | 'Web3_User';
  profile: {
    name?: string;
    avatar?: string;
  };
  capabilities: {
    canMintNFTs: boolean;
    canParticipateDAO: boolean;
    canAccessTokenGating: boolean;
    canUseSmartLicensing: boolean;
    canAccessWeb3Storefront: boolean;
  };
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  canUpgradeToWeb3: boolean;
}

export interface AuthContextType extends AuthState {
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (email: string, password: string, name: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signInWithYahoo: () => Promise<void>;
  connectWallet: (walletType: string) => Promise<void>;
  linkWalletToAccount: () => Promise<void>;
  upgradeToWeb3: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const determineUserType = (user: User): 'Web2_User' | 'Hybrid_User' | 'Web3_User' => {
  if (user.isWeb3Native && user.walletAddress) {
    return 'Web3_User';
  }
  if (user.hasLinkedWallet && user.walletAddress) {
    return 'Hybrid_User';
  }
  return 'Web2_User';
};

const getUserCapabilities = (userType: 'Web2_User' | 'Hybrid_User' | 'Web3_User') => {
  switch (userType) {
    case 'Web3_User':
      return {
        canMintNFTs: true,
        canParticipateDAO: true,
        canAccessTokenGating: true,
        canUseSmartLicensing: true,
        canAccessWeb3Storefront: true,
      };
    case 'Hybrid_User':
      return {
        canMintNFTs: true,
        canParticipateDAO: true,
        canAccessTokenGating: true,
        canUseSmartLicensing: true,
        canAccessWeb3Storefront: true,
      };
    case 'Web2_User':
    default:
      return {
        canMintNFTs: false,
        canParticipateDAO: false,
        canAccessTokenGating: false,
        canUseSmartLicensing: false,
        canAccessWeb3Storefront: false,
      };
  }
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isLoading: true,
    isAuthenticated: false,
    canUpgradeToWeb3: false,
  });

  useEffect(() => {
    checkExistingSession();
  }, []);

  const checkExistingSession = async () => {
    try {
      const savedUser = localStorage.getItem('perpetuax_user');
      if (savedUser) {
        const user = JSON.parse(savedUser);
        const userType = determineUserType(user);
        const capabilities = getUserCapabilities(userType);
        
        const updatedUser = {
          ...user,
          userType,
          capabilities,
        };

        setAuthState({
          user: updatedUser,
          isLoading: false,
          isAuthenticated: true,
          canUpgradeToWeb3: userType === 'Web2_User',
        });
      } else {
        setAuthState(prev => ({ ...prev, isLoading: false }));
      }
    } catch (error) {
      console.error('Session check failed:', error);
      setAuthState(prev => ({ ...prev, isLoading: false }));
    }
  };

  const signInWithEmail = async (email: string, password: string) => {
    setAuthState(prev => ({ ...prev, isLoading: true }));
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const userType: 'Web2_User' = 'Web2_User';
      const capabilities = getUserCapabilities(userType);
      
      const user: User = {
        id: `email_${Date.now()}`,
        email,
        authMethod: 'email',
        isWeb3Native: false,
        hasLinkedWallet: false,
        userType,
        capabilities,
        profile: { name: email.split('@')[0] },
      };

      localStorage.setItem('perpetuax_user', JSON.stringify(user));
      
      setAuthState({
        user,
        isLoading: false,
        isAuthenticated: true,
        canUpgradeToWeb3: true,
      });
    } catch (error) {
      setAuthState(prev => ({ ...prev, isLoading: false }));
      throw error;
    }
  };

  const signUpWithEmail = async (email: string, password: string, name: string) => {
    setAuthState(prev => ({ ...prev, isLoading: true }));
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const userType: 'Web2_User' = 'Web2_User';
      const capabilities = getUserCapabilities(userType);
      
      const user: User = {
        id: `email_${Date.now()}`,
        email,
        authMethod: 'email',
        isWeb3Native: false,
        hasLinkedWallet: false,
        userType,
        capabilities,
        profile: { name },
      };

      localStorage.setItem('perpetuax_user', JSON.stringify(user));
      
      setAuthState({
        user,
        isLoading: false,
        isAuthenticated: true,
        canUpgradeToWeb3: true,
      });
    } catch (error) {
      setAuthState(prev => ({ ...prev, isLoading: false }));
      throw error;
    }
  };

  const signInWithGoogle = async () => {
    setAuthState(prev => ({ ...prev, isLoading: true }));
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const userType: 'Web2_User' = 'Web2_User';
      const capabilities = getUserCapabilities(userType);
      
      const user: User = {
        id: `google_${Date.now()}`,
        email: 'user@gmail.com',
        authMethod: 'google',
        isWeb3Native: false,
        hasLinkedWallet: false,
        userType,
        capabilities,
        profile: { 
          name: 'Google User',
          avatar: 'https://via.placeholder.com/40'
        },
      };

      localStorage.setItem('perpetuax_user', JSON.stringify(user));
      
      setAuthState({
        user,
        isLoading: false,
        isAuthenticated: true,
        canUpgradeToWeb3: true,
      });
    } catch (error) {
      setAuthState(prev => ({ ...prev, isLoading: false }));
      throw error;
    }
  };

  const signInWithYahoo = async () => {
    setAuthState(prev => ({ ...prev, isLoading: true }));
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const userType: 'Web2_User' = 'Web2_User';
      const capabilities = getUserCapabilities(userType);
      
      const user: User = {
        id: `yahoo_${Date.now()}`,
        email: 'user@yahoo.com',
        authMethod: 'yahoo',
        isWeb3Native: false,
        hasLinkedWallet: false,
        userType,
        capabilities,
        profile: { 
          name: 'Yahoo User',
          avatar: 'https://via.placeholder.com/40'
        },
      };

      localStorage.setItem('perpetuax_user', JSON.stringify(user));
      
      setAuthState({
        user,
        isLoading: false,
        isAuthenticated: true,
        canUpgradeToWeb3: true,
      });
    } catch (error) {
      setAuthState(prev => ({ ...prev, isLoading: false }));
      throw error;
    }
  };

  const connectWallet = async (walletType: string) => {
    setAuthState(prev => ({ ...prev, isLoading: true }));
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockAddress = '0x742d35Cc643C0532925a3b8F1d8c4d9f8b8B3666';
      const userType: 'Web3_User' = 'Web3_User';
      const capabilities = getUserCapabilities(userType);
      
      const user: User = {
        id: `wallet_${Date.now()}`,
        walletAddress: mockAddress,
        authMethod: 'wallet',
        isWeb3Native: true,
        hasLinkedWallet: true,
        userType,
        capabilities,
        profile: { 
          name: `${walletType} User`,
          avatar: 'https://via.placeholder.com/40'
        },
      };

      localStorage.setItem('perpetuax_user', JSON.stringify(user));
      
      setAuthState({
        user,
        isLoading: false,
        isAuthenticated: true,
        canUpgradeToWeb3: false,
      });
    } catch (error) {
      setAuthState(prev => ({ ...prev, isLoading: false }));
      throw error;
    }
  };

  const linkWalletToAccount = async () => {
    if (!authState.user) return;
    
    setAuthState(prev => ({ ...prev, isLoading: true }));
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockAddress = '0x742d35Cc643C0532925a3b8F1d8c4d9f8b8B3666';
      const userType: 'Hybrid_User' = 'Hybrid_User';
      const capabilities = getUserCapabilities(userType);
      
      const updatedUser: User = {
        ...authState.user,
        walletAddress: mockAddress,
        hasLinkedWallet: true,
        userType,
        capabilities,
      };

      localStorage.setItem('perpetuax_user', JSON.stringify(updatedUser));
      
      setAuthState({
        user: updatedUser,
        isLoading: false,
        isAuthenticated: true,
        canUpgradeToWeb3: false,
      });
    } catch (error) {
      setAuthState(prev => ({ ...prev, isLoading: false }));
      throw error;
    }
  };

  const upgradeToWeb3 = async () => {
    await linkWalletToAccount();
  };

  const signOut = async () => {
    localStorage.removeItem('perpetuax_user');
    setAuthState({
      user: null,
      isLoading: false,
      isAuthenticated: false,
      canUpgradeToWeb3: false,
    });
  };

  const value: AuthContextType = {
    ...authState,
    signInWithEmail,
    signUpWithEmail,
    signInWithGoogle,
    signInWithYahoo,
    connectWallet,
    linkWalletToAccount,
    upgradeToWeb3,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
