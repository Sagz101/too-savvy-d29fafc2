import { useEffect, useState } from 'react';
import { useAccount, useEnsName, useEnsAvatar } from 'wagmi';
import { mainnet } from 'wagmi/chains';

export const useENSDisplay = () => {
  const { address, isConnected } = useAccount();
  
  const { data: ensName, isLoading: ensLoading } = useEnsName({
    address,
    chainId: mainnet.id,
  });
  
  const { data: ensAvatar, isLoading: avatarLoading } = useEnsAvatar({
    name: ensName ?? undefined,
    chainId: mainnet.id,
  });

  const formatAddress = (addr?: string) => {
    if (!addr) return '';
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  const displayName = ensName || (address ? formatAddress(address) : '');
  
  return {
    address,
    ensName,
    ensAvatar,
    displayName,
    isConnected,
    isLoading: ensLoading || avatarLoading,
  };
};
