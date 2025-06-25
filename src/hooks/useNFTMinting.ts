
import { useState } from 'react';
import { useAccount, useWriteContract, useEstimateGas, useReadContract } from 'wagmi';
import { parseEther, formatEther } from 'viem';
import { toast } from 'sonner';
import { TOO_SAVVY_NFT_ABI, getContractAddress } from '@/contracts/tooSavvyNFT';
import { ipfsService, IPFSMetadata } from '@/services/ipfs';

interface MintingState {
  isUploading: boolean;
  isMinting: boolean;
  uploadProgress: number;
  mintingStep: 'idle' | 'uploading' | 'metadata' | 'minting' | 'success' | 'error';
}

export const useNFTMinting = () => {
  const { address, chainId } = useAccount();
  const [state, setState] = useState<MintingState>({
    isUploading: false,
    isMinting: false,
    uploadProgress: 0,
    mintingStep: 'idle',
  });

  const contractAddress = chainId ? getContractAddress(chainId) : '';

  // Read mint price from contract
  const { data: mintPrice } = useReadContract({
    address: contractAddress as `0x${string}`,
    abi: TOO_SAVVY_NFT_ABI,
    functionName: 'mintPrice',
  });

  // Estimate gas for minting
  const { data: gasEstimate } = useEstimateGas({
    to: contractAddress as `0x${string}`,
    data: '0x', // This would be the actual mint function call data
    value: mintPrice as bigint,
  });

  const { writeContract } = useWriteContract();

  const mintNFT = async (
    file: File,
    metadata: Omit<IPFSMetadata, 'image'>
  ): Promise<void> => {
    if (!address) {
      toast.error('Please connect your wallet first');
      return;
    }

    if (!contractAddress) {
      toast.error('Contract not deployed on this network');
      return;
    }

    try {
      setState(prev => ({ ...prev, mintingStep: 'uploading', isUploading: true }));

      // Upload file to IPFS
      const imageHash = await ipfsService.uploadFile(file);
      const imageUrl = ipfsService.getIPFSUrl(imageHash);

      setState(prev => ({ ...prev, mintingStep: 'metadata', uploadProgress: 50 }));

      // Upload metadata to IPFS
      const fullMetadata: IPFSMetadata = {
        ...metadata,
        image: imageUrl,
      };

      const metadataHash = await ipfsService.uploadMetadata(fullMetadata);
      const tokenURI = ipfsService.getIPFSUrl(metadataHash);

      setState(prev => ({ 
        ...prev, 
        mintingStep: 'minting', 
        isUploading: false, 
        isMinting: true,
        uploadProgress: 100 
      }));

      // Mint NFT
      writeContract({
        address: contractAddress as `0x${string}`,
        abi: TOO_SAVVY_NFT_ABI,
        functionName: 'safeMint',
        args: [address, 1n, tokenURI as `0x${string}`],
        value: mintPrice as bigint,
      });

      setState(prev => ({ ...prev, mintingStep: 'success', isMinting: false }));
      toast.success('NFT minted successfully!');

    } catch (error) {
      console.error('Minting error:', error);
      setState(prev => ({ 
        ...prev, 
        mintingStep: 'error', 
        isUploading: false, 
        isMinting: false 
      }));
      toast.error('Failed to mint NFT');
    }
  };

  const resetState = () => {
    setState({
      isUploading: false,
      isMinting: false,
      uploadProgress: 0,
      mintingStep: 'idle',
    });
  };

  const getGasEstimate = (): string => {
    if (!gasEstimate) return 'Calculating...';
    return `~${formatEther(gasEstimate)} ETH`;
  };

  const getMintPrice = (): string => {
    if (!mintPrice) return 'Loading...';
    return formatEther(mintPrice);
  };

  return {
    ...state,
    mintNFT,
    resetState,
    getGasEstimate,
    getMintPrice,
    isConnected: !!address,
    contractAddress,
  };
};
