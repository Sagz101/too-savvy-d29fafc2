
import { create } from 'ipfs-http-client';
import { toast } from "sonner";
import { Buffer } from 'buffer';

// Configure the IPFS client
// Note: For production, you'd want to use a dedicated IPFS node or service like Infura
const projectId = "YOUR_INFURA_PROJECT_ID"; // Replace with actual project ID in production
const projectSecret = "YOUR_INFURA_PROJECT_SECRET"; // Replace with actual secret in production

// For demo purposes, we'll use the public IPFS gateway
const ipfs = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: projectId && projectSecret 
      ? 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64')
      : undefined
  }
});

export const uploadToIPFS = async (file: File): Promise<string | null> => {
  try {
    // Show loading toast
    toast.loading("Uploading to IPFS...");
    
    // Upload file to IPFS
    const fileAdded = await ipfs.add(
      file,
      {
        progress: (prog) => console.log(`Upload progress: ${prog}`)
      }
    );
    
    // Get the IPFS CID
    const cid = fileAdded.cid.toString();
    
    // Success toast
    toast.success("Upload complete!", {
      description: `Your file has been uploaded to IPFS with CID: ${cid.slice(0, 10)}...`,
    });
    
    return cid;
  } catch (error) {
    console.error("Error uploading to IPFS:", error);
    toast.error("Upload failed", {
      description: "Failed to upload file to IPFS. Please try again."
    });
    return null;
  }
};

// Get the IPFS gateway URL for a given CID
export const getIPFSUrl = (cid: string): string => {
  return `https://ipfs.io/ipfs/${cid}`;
};
