
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, File, Clock, DollarSign, Globe } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';
import { SocialShare } from '@/components/ui/social-share';
import { useWallet } from '@/services/wallet';
import { uploadToIPFS, getIPFSUrl } from '@/services/ipfs';
import { mintNFT } from '@/services/nft';
import { toast } from "sonner";

export const EnhancedVideoUploader: React.FC = () => {
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [videoTitle, setVideoTitle] = useState('');
  const [videoDescription, setVideoDescription] = useState('');
  const [royaltyPercentage, setRoyaltyPercentage] = useState([10]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [ipfsCid, setIpfsCid] = useState<string | null>(null);
  const [nftMinted, setNftMinted] = useState(false);
  const { wallet } = useWallet();
  
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
      setIpfsCid(null);
      setNftMinted(false);
    }
  };
  
  const handleUploadToIPFS = async () => {
    if (!selectedFile) {
      toast.error("No file selected", { description: "Please select a video file first" });
      return;
    }

    // Simulate initial upload progress
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev === null) return 0;
        if (prev >= 40) {
          clearInterval(interval);
          return 40; // Stop at 40% for IPFS upload
        }
        return prev + 5;
      });
    }, 300);
    
    try {
      const cid = await uploadToIPFS(selectedFile);
      if (cid) {
        setIpfsCid(cid);
        
        // Continue progress after IPFS upload
        setUploadProgress(50);
        setTimeout(() => {
          setUploadProgress(100);
        }, 1000);
      } else {
        setUploadProgress(null);
      }
    } catch (error) {
      console.error("Error uploading to IPFS:", error);
      setUploadProgress(null);
    } finally {
      clearInterval(interval);
    }
  };
  
  const handleMintNFT = async () => {
    if (!wallet.isConnected) {
      toast.error("Wallet not connected", { description: "Please connect your wallet to mint an NFT" });
      return;
    }
    
    if (!ipfsCid) {
      toast.error("No content uploaded", { description: "Please upload your video to IPFS first" });
      return;
    }
    
    try {
      const metadata = {
        name: videoTitle || "Untitled Video",
        description: videoDescription || "No description provided",
        image: getIPFSUrl(ipfsCid),
        attributes: [
          { trait_type: "Content Type", value: "Video" },
          { trait_type: "Royalty", value: `${royaltyPercentage[0]}%` }
        ]
      };
      
      // Mock contract address
      const contractAddress = "0x1234567890123456789012345678901234567890";
      
      const txHash = await mintNFT(wallet.signer, contractAddress, metadata);
      if (txHash) {
        setNftMinted(true);
      }
    } catch (error) {
      console.error("Error minting NFT:", error);
    }
  };
  
  const shareUrl = ipfsCid 
    ? `https://neura.app/video/${ipfsCid}` 
    : window.location.href;
    
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">Upload Video NFT</h2>
        <WalletConnectButton />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-6">
            <Label htmlFor="videoFile" className="mb-2 block">Select Video File</Label>
            <div className="border-2 border-dashed border-neura-purple/30 rounded-lg p-8 text-center hover:border-neura-purple/50 transition-colors cursor-pointer">
              <input
                type="file"
                id="videoFile"
                className="hidden"
                accept="video/*"
                onChange={handleFileSelect}
              />
              <label htmlFor="videoFile" className="cursor-pointer">
                <Upload className="w-12 h-12 text-neura-purple/50 mx-auto mb-4" />
                <p className="text-white font-medium mb-1">
                  {selectedFile ? selectedFile.name : 'Drop your video here or click to browse'}
                </p>
                <p className="text-white/50 text-sm">
                  {selectedFile 
                    ? `${(selectedFile.size / 1024 / 1024).toFixed(2)} MB` 
                    : 'MP4, MOV or WebM, max 2GB'}
                </p>
              </label>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="title" className="mb-2 block">Title</Label>
              <Input 
                id="title" 
                placeholder="Enter video title" 
                value={videoTitle}
                onChange={(e) => setVideoTitle(e.target.value)}
                className="bg-neura-dark/50 border-neura-purple/30 text-white"
              />
            </div>
            
            <div>
              <Label htmlFor="description" className="mb-2 block">Description</Label>
              <Textarea 
                id="description" 
                placeholder="Describe your video..." 
                value={videoDescription}
                onChange={(e) => setVideoDescription(e.target.value)}
                className="bg-neura-dark/50 border-neura-purple/30 text-white min-h-[100px]"
              />
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">NFT Settings</h3>
          
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <Label>Royalty Percentage</Label>
                <span className="text-white font-medium">{royaltyPercentage[0]}%</span>
              </div>
              <Slider
                value={royaltyPercentage}
                onValueChange={setRoyaltyPercentage}
                max={30}
                step={1}
                className="my-6"
              />
              <p className="text-xs text-white/60">
                You'll receive this percentage of the sale price each time your NFT is resold on compatible marketplaces
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-neura-dark/50 border-neura-purple/20">
                <CardContent className="p-4">
                  <div className="flex items-start gap-2">
                    <Clock className="w-5 h-5 text-neura-cyan shrink-0" />
                    <div>
                      <h4 className="font-medium text-sm text-white">Time-Locked Access</h4>
                      <p className="text-xs text-white/60 mt-1">
                        Set scheduled release for your content
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-neura-dark/50 border-neura-purple/20">
                <CardContent className="p-4">
                  <div className="flex items-start gap-2">
                    <DollarSign className="w-5 h-5 text-neura-cyan shrink-0" />
                    <div>
                      <h4 className="font-medium text-sm text-white">Dynamic Pricing</h4>
                      <p className="text-xs text-white/60 mt-1">
                        Adjust price based on demand
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-neura-dark/50 border-neura-purple/20">
                <CardContent className="p-4">
                  <div className="flex items-start gap-2">
                    <Globe className="w-5 h-5 text-neura-cyan shrink-0" />
                    <div>
                      <h4 className="font-medium text-sm text-white">Cross-Platform</h4>
                      <p className="text-xs text-white/60 mt-1">
                        Share across social networks
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-neura-dark/50 border-neura-purple/20">
                <CardContent className="p-4">
                  <div className="flex items-start gap-2">
                    <File className="w-5 h-5 text-neura-cyan shrink-0" />
                    <div>
                      <h4 className="font-medium text-sm text-white">Token Metadata</h4>
                      <p className="text-xs text-white/60 mt-1">
                        Add custom properties
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {uploadProgress !== null && (
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-white/70">Upload Progress</span>
                  <span className="text-neura-cyan">{uploadProgress}%</span>
                </div>
                <div className="h-2 bg-neura-dark/50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-neura-purple to-neura-cyan transition-all duration-300" 
                    style={{width: `${uploadProgress}%`}}
                  ></div>
                </div>
                {uploadProgress === 100 && !nftMinted && (
                  <p className="text-emerald-400 text-sm mt-2">Upload complete! Ready to mint NFT.</p>
                )}
                {nftMinted && (
                  <p className="text-emerald-400 text-sm mt-2">NFT minted successfully!</p>
                )}
              </div>
            )}
            
            {ipfsCid && (
              <div className="mt-4 p-4 bg-neura-dark/50 border border-neura-purple/30 rounded-lg">
                <h4 className="font-medium text-white mb-2">Content on IPFS</h4>
                <p className="text-sm text-neura-cyan break-all mb-2">{ipfsCid}</p>
                <a 
                  href={getIPFSUrl(ipfsCid)} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-white/60 hover:text-white underline"
                >
                  View on IPFS Gateway
                </a>
              </div>
            )}
            
            {ipfsCid && (
              <div className="mt-4">
                <SocialShare
                  url={shareUrl}
                  title={videoTitle || "Check out my video on Neura"}
                  text={videoDescription || "I just uploaded a new video to Neura. Check it out!"}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="flex justify-end gap-4 mt-6">
        <Button variant="outline" className="border-neura-purple/30 text-white hover:bg-neura-purple/10">
          Save Draft
        </Button>
        
        {!ipfsCid ? (
          <Button
            className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
            onClick={handleUploadToIPFS}
            disabled={!selectedFile || uploadProgress !== null}
          >
            {uploadProgress !== null ? 'Uploading...' : 'Upload to IPFS'}
          </Button>
        ) : !nftMinted ? (
          <Button
            className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
            onClick={handleMintNFT}
            disabled={!wallet.isConnected}
          >
            Mint as NFT
          </Button>
        ) : (
          <Button
            className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
          >
            View in Gallery
          </Button>
        )}
      </div>
    </div>
  );
};
