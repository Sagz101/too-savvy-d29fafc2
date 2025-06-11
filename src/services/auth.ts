
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface User {
  id: string;
  email?: string;
  walletAddress?: string;
  isWeb3Native: boolean;
  hasLinkedWallet: boolean;
  authMethod: 'email' | 'google' | 'yahoo' | 'wallet';
  profile: {
    name?: string;
    avatar?: string;
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

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isLoading: true,
    isAuthenticated: false,
    canUpgradeToWeb3: false,
  });

  useEffect(() => {
    // Check for existing session
    checkExistingSession();
  }, []);

  const checkExistingSession = async () => {
    try {
      const savedUser = localStorage.getItem('perpetuax_user');
      if (savedUser) {
        const user = JSON.parse(savedUser);
        setAuthState({
          user,
          isLoading: false,
          isAuthenticated: true,
          canUpgradeToWeb3: !user.isWeb3Native && !user.hasLinkedWallet,
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
      // Simulate API call - replace with actual authentication
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const user: User = {
        id: `email_${Date.now()}`,
        email,
        authMethod: 'email',
        isWeb3Native: false,
        hasLinkedWallet: false,
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
      // Simulate API call - replace with actual registration
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const user: User = {
        id: `email_${Date.now()}`,
        email,
        authMethod: 'email',
        isWeb3Native: false,
        hasLinkedWallet: false,
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
      // Simulate OAuth flow - replace with actual Google OAuth
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const user: User = {
        id: `google_${Date.now()}`,
        email: 'user@gmail.com',
        authMethod: 'google',
        isWeb3Native: false,
        hasLinkedWallet: false,
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
      // Simulate OAuth flow - replace with actual Yahoo OAuth
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const user: User = {
        id: `yahoo_${Date.now()}`,
        email: 'user@yahoo.com',
        authMethod: 'yahoo',
        isWeb3Native: false,
        hasLinkedWallet: false,
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
      // Simulate wallet connection - replace with actual wallet integration
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockAddress = '0x742d35Cc643C0532925a3b8F1d8c4d9f8b8B3666';
      
      const user: User = {
        id: `wallet_${Date.now()}`,
        walletAddress: mockAddress,
        authMethod: 'wallet',
        isWeb3Native: true,
        hasLinkedWallet: true,
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
      // Simulate wallet linking
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockAddress = '0x742d35Cc643C0532925a3b8F1d8c4d9f8b8B3666';
      
      const updatedUser: User = {
        ...authState.user,
        walletAddress: mockAddress,
        hasLinkedWallet: true,
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

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
