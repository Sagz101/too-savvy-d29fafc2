import { ipfsService } from './ipfs';

export const uploadARNFT = async (file: File, name: string, description: string) => {
  try {
    // Upload the file to IPFS
    const imageHash = await ipfsService.uploadFile(file);
    const imageUrl = ipfsService.getIPFSUrl(imageHash);

    // Create metadata
    const metadata = {
      name: name,
      description: description,
      image: imageUrl,
    };

    // Upload metadata to IPFS
    const metadataHash = await ipfsService.uploadMetadata(metadata);
    const tokenURI = ipfsService.getIPFSUrl(metadataHash);

    return tokenURI;
  } catch (error) {
    console.error("Failed to upload AR NFT:", error);
    throw error;
  }
};
