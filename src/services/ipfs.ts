
import { toast } from 'sonner';

interface IPFSMetadata {
  name: string;
  description: string;
  image: string;
  attributes?: Array<{
    trait_type: string;
    value: string | number;
  }>;
  external_url?: string;
  animation_url?: string;
}

class IPFSService {
  private readonly PINATA_API_KEY = import.meta.env.VITE_PINATA_API_KEY;
  private readonly PINATA_SECRET_KEY = import.meta.env.VITE_PINATA_SECRET_KEY;
  private readonly PINATA_GATEWAY = 'https://gateway.pinata.cloud/ipfs/';

  async uploadFile(file: File): Promise<string> {
    if (!this.PINATA_API_KEY || !this.PINATA_SECRET_KEY) {
      // Fallback to mock IPFS hash for development
      console.warn('IPFS credentials not configured, using mock hash');
      return `Qm${Math.random().toString(36).substring(2, 15)}`;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('https://api.pinata.cloud/pinning/pinFileToIPFS', {
        method: 'POST',
        headers: {
          'pinata_api_key': this.PINATA_API_KEY,
          'pinata_secret_api_key': this.PINATA_SECRET_KEY,
        },
        body: formData,
      });

      const result = await response.json();
      return result.IpfsHash;
    } catch (error) {
      console.error('IPFS upload error:', error);
      toast.error('Failed to upload to IPFS');
      throw error;
    }
  }

  async uploadMetadata(metadata: IPFSMetadata): Promise<string> {
    if (!this.PINATA_API_KEY || !this.PINATA_SECRET_KEY) {
      // Fallback to mock IPFS hash for development
      console.warn('IPFS credentials not configured, using mock hash');
      return `Qm${Math.random().toString(36).substring(2, 15)}`;
    }

    try {
      const response = await fetch('https://api.pinata.cloud/pinning/pinJSONToIPFS', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'pinata_api_key': this.PINATA_API_KEY,
          'pinata_secret_api_key': this.PINATA_SECRET_KEY,
        },
        body: JSON.stringify(metadata),
      });

      const result = await response.json();
      return result.IpfsHash;
    } catch (error) {
      console.error('IPFS metadata upload error:', error);
      toast.error('Failed to upload metadata to IPFS');
      throw error;
    }
  }

  getIPFSUrl(hash: string): string {
    return `${this.PINATA_GATEWAY}${hash}`;
  }
}

export const ipfsService = new IPFSService();

// Legacy function exports for backward compatibility
export const uploadToIPFS = (file: File): Promise<string> => {
  return ipfsService.uploadFile(file);
};

export const getIPFSUrl = (hash: string): string => {
  return ipfsService.getIPFSUrl(hash);
};

export const uploadJSONToIPFS = (metadata: IPFSMetadata): Promise<string> => {
  return ipfsService.uploadMetadata(metadata);
};

export type { IPFSMetadata };
