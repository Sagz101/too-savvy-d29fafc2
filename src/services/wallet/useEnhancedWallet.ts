
import { useAccount, useBalance, useChainId, useSwitchChain } from 'wagmi';
import { useConnectModal, useAccountModal } from '@rainbow-me/rainbowkit';
import { toast } from 'sonner';
import { useNFTMinting } from '@/hooks/useNFTMinting';

export const useEnhancedWallet = () => {
  const { address, isConnected, isConnecting } = useAccount();
  const { data: balance } = useBalance({ address });
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  
  const nftMinting = useNFTMinting();

  const connectWallet = () => {
    if (openConnectModal) {
      openConnectModal();
    } else {
      toast.error('Wallet connection modal not available');
    }
  };

  const switchToNetwork = async (targetChainId: number) => {
    try {
      await switchChain({ chainId: targetChainId });
      toast.success('Network switched successfully');
    } catch (error) {
      console.error('Network switch error:', error);
      toast.error('Failed to switch network');
    }
  };

  const openAccount = () => {
    if (openAccountModal) {
      openAccountModal();
    }
  };

  const formatAddress = (addr?: string) => {
    if (!addr) return '';
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return {
    // Basic wallet state
    address,
    isConnected,
    isConnecting,
    balance,
    chainId,
    
    // Actions
    connectWallet,
    switchToNetwork,
    openAccount,
    
    // Utilities
    formatAddress,
    
    // NFT functionality
    ...nftMinting,
    
    // Wallet object for backward compatibility
    wallet: {
      isConnected,
      address,
    }
  };
};
