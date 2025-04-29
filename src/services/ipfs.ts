
import { create } from 'ipfs-http-client';
import { toast } from "sonner";

// Configure the IPFS client
// Note: For production, you'd want to use a dedicated IPFS node or service like Infura
const projectId = "YOUR_INFURA_PROJECT_ID"; // Replace with actual project ID in production
const projectSecret = "YOUR_INFURA_PROJECT_SECRET"; // Replace with actual secret in production

// Create IPFS client with error handling
let ipfs: any = null;

try {
  // For browser environments that don't have Buffer
  const auth = projectId && projectSecret 
    ? 'Basic ' + btoa(`${projectId}:${projectSecret}`)
    : undefined;
    
  // For demo purposes, we'll use the public IPFS gateway
  ipfs = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
      authorization: auth
    }
  });
} catch (error) {
  console.error("Error initializing IPFS client:", error);
}

export const uploadToIPFS = async (file: File): Promise<string | null> => {
  try {
    if (!ipfs) {
      toast.error("IPFS client not initialized", {
        description: "Could not connect to IPFS service. Please try again later."
      });
      return null;
    }
    
    // Show loading toast
    toast.loading("Uploading to IPFS...");
    
    // Upload file to IPFS
    const fileAdded = await ipfs.add(
      file,
      {
        progress: (prog: number) => console.log(`Upload progress: ${prog}`)
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
