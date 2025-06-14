
import { Contract, ethers } from 'ethers';
import { toast } from 'sonner';

// ERC-1155 ABI for StreamPass NFTs
const STREAM_PASS_ABI = [
  "function balanceOf(address account, uint256 id) view returns (uint256)",
  "function mint(address to, uint256 id, uint256 amount, bytes data) public",
  "function setURI(uint256 tokenId, string memory newURI) public",
  "function totalSupply(uint256 id) view returns (uint256)",
  "function exists(uint256 id) view returns (bool)",
  "event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 value)"
];

export interface StreamPass {
  tokenId: string;
  streamId: string;
  tier: 'standard' | 'vip' | 'backstage';
  expiry: number;
  metadata: {
    name: string;
    description: string;
    image: string;
    attributes: Array<{ trait_type: string; value: string }>;
  };
}

export class StreamAccessControl {
  private contract: Contract | null = null;
  private contractAddress: string;

  constructor(contractAddress: string) {
    this.contractAddress = contractAddress;
  }

  async initContract(signer: any) {
    this.contract = new Contract(this.contractAddress, STREAM_PASS_ABI, signer);
    return this.contract;
  }

  async checkStreamAccess(userAddress: string, streamId: string): Promise<boolean> {
    if (!this.contract) {
      throw new Error('Contract not initialized');
    }

    try {
      // Check if user has any StreamPass for this stream
      const balance = await this.contract.balanceOf(userAddress, streamId);
      return balance.gt(0);
    } catch (error) {
      console.error('Error checking stream access:', error);
      return false;
    }
  }

  async mintStreamPass(
    userAddress: string, 
    streamId: string, 
    tier: string,
    metadata: StreamPass['metadata']
  ): Promise<string | null> {
    if (!this.contract) {
      throw new Error('Contract not initialized');
    }

    try {
      toast.loading('Minting StreamPass NFT...');
      
      // In a real implementation, you would upload metadata to IPFS first
      const metadataURI = `ipfs://mock-stream-pass-${streamId}-${tier}`;
      
      const tx = await this.contract.mint(userAddress, streamId, 1, '0x');
      await tx.wait();

      toast.success('StreamPass NFT Minted!', {
        description: `Access granted for stream ${streamId}`
      });

      return tx.hash;
    } catch (error) {
      console.error('Error minting StreamPass:', error);
      toast.error('Minting Failed', {
        description: 'Failed to mint StreamPass NFT'
      });
      return null;
    }
  }

  async getStreamPassBalance(userAddress: string, streamId: string): Promise<number> {
    if (!this.contract) return 0;

    try {
      const balance = await this.contract.balanceOf(userAddress, streamId);
      return balance.toNumber();
    } catch (error) {
      console.error('Error getting balance:', error);
      return 0;
    }
  }
}
