
import { toast } from "sonner";
import { uploadToIPFS, getIPFSUrl } from './ipfs';
import { NFTMetadata } from './nft';

export interface ARMetadata {
  model_url: string;
  ar_settings: {
    scale: number;
    rotation: { x: number; y: number; z: number };
    environment: string;
    animation: boolean;
  };
  platform_compatibility: string[];
  webxr_url: string;
  qr_code_url?: string;
}

export interface ARNFTMetadata extends NFTMetadata {
  ar_data?: ARMetadata;
  model_viewer_url?: string;
  is_ar_enabled: boolean;
}

export const createArNftMetadata = async (
  baseMetadata: NFTMetadata,
  modelCID: string,
  arSettings: any
): Promise<ARNFTMetadata | null> => {
  try {
    const arMetadata: ARMetadata = {
      model_url: getIPFSUrl(modelCID),
      ar_settings: {
        scale: arSettings.scale[0],
        rotation: arSettings.rotation,
        environment: arSettings.environment,
        animation: arSettings.animation
      },
      platform_compatibility: ['WebXR', 'ARKit', 'ARCore'],
      webxr_url: `https://ar.neura.io/view/${modelCID}`,
      qr_code_url: `https://ar.neura.io/qr/${modelCID}`
    };

    const enhancedMetadata: ARNFTMetadata = {
      ...baseMetadata,
      ar_data: arMetadata,
      model_viewer_url: `https://ar.neura.io/viewer/${modelCID}`,
      is_ar_enabled: true,
      attributes: [
        ...(baseMetadata.attributes || []),
        { trait_type: 'AR Enabled', value: 'true' },
        { trait_type: 'Model Format', value: 'GLB/GLTF' },
        { trait_type: 'Platform Support', value: 'Cross-Platform' },
        { trait_type: 'AR Scale', value: arSettings.scale[0].toString() },
        { trait_type: 'Environment', value: arSettings.environment }
      ]
    };

    return enhancedMetadata;
  } catch (error) {
    console.error("Error creating AR NFT metadata:", error);
    toast.error("Failed to create AR NFT metadata");
    return null;
  }
};

export const generateWebXRUrl = (modelCID: string, settings: any): string => {
  const params = new URLSearchParams({
    model: modelCID,
    scale: settings.scale[0].toString(),
    env: settings.environment,
    animation: settings.animation.toString()
  });
  
  return `https://ar.neura.io/webxr?${params.toString()}`;
};

export const generateQRCode = (arUrl: string): string => {
  // In production, this would generate an actual QR code
  return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(arUrl)}`;
};

export const validateArModel = (file: File): boolean => {
  const validExtensions = ['.glb', '.gltf', '.obj', '.usdz'];
  const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
  
  if (!validExtensions.includes(fileExtension)) {
    toast.error("Invalid file format", {
      description: "Please upload GLB, GLTF, OBJ, or USDZ files only"
    });
    return false;
  }
  
  // Check file size (50MB limit)
  const maxSize = 50 * 1024 * 1024; // 50MB
  if (file.size > maxSize) {
    toast.error("File too large", {
      description: "Please upload files smaller than 50MB"
    });
    return false;
  }
  
  return true;
};

// Token-gated AR access verification
export const verifyArAccess = async (
  userAddress: string,
  nftContractAddress: string,
  tokenId: string
): Promise<boolean> => {
  try {
    // In production, this would verify NFT ownership on-chain
    // For demo purposes, we'll simulate ownership verification
    console.log(`Verifying AR access for user ${userAddress}, NFT ${nftContractAddress}:${tokenId}`);
    
    // Simulate async verification
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock verification result
    const hasAccess = Math.random() > 0.3; // 70% chance of having access
    
    if (hasAccess) {
      toast.success("AR Access Verified", {
        description: "You own this NFT and can view the AR experience"
      });
    } else {
      toast.error("Access Denied", {
        description: "You don't own this NFT. Purchase it to unlock AR features."
      });
    }
    
    return hasAccess;
  } catch (error) {
    console.error("Error verifying AR access:", error);
    toast.error("Verification failed");
    return false;
  }
};
