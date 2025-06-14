
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { toast } from "sonner";
import { Upload, Film, Shield, DollarSign, Globe, FileImage, Zap } from 'lucide-react';
import { uploadToIPFS, getIPFSUrl } from '@/services/ipfs';
import { mintNFT, NFTMetadata } from '@/services/nft';
import { useWallet } from '@/services/wallet';

interface VideoAttribute {
  trait_type: string;
  value: string;
}

export const EnhancedVideoUploader: React.FC = () => {
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [thumbnailFile, setThumbnailFile] = useState<File | null>(null);
  const [videoTitle, setVideoTitle] = useState('');
  const [videoDescription, setVideoDescription] = useState('');
  const [royaltyPercentage, setRoyaltyPercentage] = useState([10]);
  const [attributes, setAttributes] = useState<VideoAttribute[]>([
    { trait_type: 'Category', value: '' },
    { trait_type: 'Duration', value: '' },
    { trait_type: 'Quality', value: '4K' }
  ]);
  const [isUploading, setIsUploading] = useState(false);
  const [videoCID, setVideoCID] = useState<string | null>(null);
  const [thumbnailCID, setThumbnailCID] = useState<string | null>(null);
  const [metadataCID, setMetadataCID] = useState<string | null>(null);
  
  const { wallet } = useWallet();
  
  const handleVideoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setVideoFile(file);
      
      // Auto-populate duration if possible
      const video = document.createElement('video');
      video.preload = 'metadata';
      video.onloadedmetadata = () => {
        const duration = Math.round(video.duration);
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;
        updateAttribute('Duration', `${minutes}:${seconds.toString().padStart(2, '0')}`);
      };
      video.src = URL.createObjectURL(file);
    }
  };
  
  const handleThumbnailSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setThumbnailFile(e.target.files[0]);
    }
  };
  
  const updateAttribute = (trait_type: string, value: string) => {
    setAttributes(prev => 
      prev.map(attr => 
        attr.trait_type === trait_type ? { ...attr, value } : attr
      )
    );
  };
  
  const addAttribute = () => {
    setAttributes(prev => [...prev, { trait_type: '', value: '' }]);
  };
  
  const removeAttribute = (index: number) => {
    setAttributes(prev => prev.filter((_, i) => i !== index));
  };
  
  const uploadToIPFSWithProgress = async (file: File): Promise<string | null> => {
    setUploadProgress(0);
    
    // Simulate upload progress
    const progressInterval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev === null) return 0;
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 10;
      });
    }, 500);
    
    try {
      const cid = await uploadToIPFS(file);
      setUploadProgress(100);
      return cid;
    } catch (error) {
      clearInterval(progressInterval);
      setUploadProgress(null);
      throw error;
    }
  };
  
  const handleUploadAndMint = async () => {
    if (!videoFile || !thumbnailFile || !wallet.isConnected) {
      toast.error("Please select video and thumbnail files and connect your wallet");
      return;
    }
    
    if (!videoTitle.trim() || !videoDescription.trim()) {
      toast.error("Please fill in title and description");
      return;
    }
    
    setIsUploading(true);
    
    try {
      toast.loading("Uploading video to IPFS...");
      const videoCID = await uploadToIPFSWithProgress(videoFile);
      if (!videoCID) throw new Error("Video upload failed");
      setVideoCID(videoCID);
      
      toast.loading("Uploading thumbnail to IPFS...");
      const thumbnailCID = await uploadToIPFS(thumbnailFile);
      if (!thumbnailCID) throw new Error("Thumbnail upload failed");
      setThumbnailCID(thumbnailCID);
      
      // Create NFT metadata
      const metadata: NFTMetadata = {
        name: videoTitle,
        description: videoDescription,
        image: getIPFSUrl(thumbnailCID),
        animation_url: getIPFSUrl(videoCID),
        attributes: attributes.filter(attr => attr.trait_type && attr.value).concat([
          { trait_type: 'Type', value: 'Video NFT' },
          { trait_type: 'Creator', value: wallet.address || 'Unknown' },
          { trait_type: 'Royalty', value: `${royaltyPercentage[0]}%` },
          { trait_type: 'File Size', value: `${(videoFile.size / 1024 / 1024).toFixed(2)} MB` }
        ])
      };
      
      toast.loading("Uploading metadata to IPFS...");
      const metadataBlob = new Blob([JSON.stringify(metadata, null, 2)], { type: 'application/json' });
      const metadataFile = new File([metadataBlob], 'metadata.json', { type: 'application/json' });
      const metadataCID = await uploadToIPFS(metadataFile);
      if (!metadataCID) throw new Error("Metadata upload failed");
      setMetadataCID(metadataCID);
      
      toast.success("Files uploaded to IPFS successfully!");
      toast.loading("Minting NFT...");
      
      // Mock contract address - in production, this would be your deployed contract
      const contractAddress = "0x1234567890123456789012345678901234567890";
      
      // Mint the NFT (this is a mock implementation)
      const txHash = await mintNFT(wallet.signer, contractAddress, metadata);
      
      if (txHash) {
        toast.success("Video NFT created successfully!", {
          description: `Your video NFT has been minted with ${royaltyPercentage[0]}% royalties`
        });
        
        // Reset form
        setVideoFile(null);
        setThumbnailFile(null);
        setVideoTitle('');
        setVideoDescription('');
        setAttributes([
          { trait_type: 'Category', value: '' },
          { trait_type: 'Duration', value: '' },
          { trait_type: 'Quality', value: '4K' }
        ]);
      }
      
    } catch (error) {
      console.error("Error in upload process:", error);
      toast.error("Failed to create Video NFT", {
        description: "Please try again"
      });
    } finally {
      setIsUploading(false);
      setUploadProgress(null);
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Create Video NFT</h2>
        <Badge variant="outline" className="border-neura-cyan text-neura-cyan">
          ERC-721 + ERC-2981 Royalties
        </Badge>
      </div>
      
      <Tabs defaultValue="upload" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-neura-dark/50">
          <TabsTrigger value="upload">Upload Files</TabsTrigger>
          <TabsTrigger value="metadata">Metadata</TabsTrigger>
          <TabsTrigger value="settings">NFT Settings</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upload" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Video Upload */}
            <Card className="bg-neura-dark/50 border-neura-purple/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Film className="w-5 h-5 text-neura-cyan" />
                  Video File
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-neura-purple/30 rounded-lg p-6 text-center hover:border-neura-purple/50 transition-colors cursor-pointer">
                  <input
                    type="file"
                    id="videoFile"
                    className="hidden"
                    accept="video/*"
                    onChange={handleVideoSelect}
                  />
                  <label htmlFor="videoFile" className="cursor-pointer">
                    <Upload className="w-8 h-8 text-neura-purple/50 mx-auto mb-2" />
                    <p className="text-white font-medium mb-1">
                      {videoFile ? videoFile.name : 'Upload Video'}
                    </p>
                    <p className="text-white/50 text-sm">
                      {videoFile 
                        ? `${(videoFile.size / 1024 / 1024).toFixed(2)} MB` 
                        : 'MP4, MOV, WebM (max 500MB)'}
                    </p>
                  </label>
                </div>
              </CardContent>
            </Card>
            
            {/* Thumbnail Upload */}
            <Card className="bg-neura-dark/50 border-neura-purple/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileImage className="w-5 h-5 text-neura-cyan" />
                  Thumbnail
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-neura-purple/30 rounded-lg p-6 text-center hover:border-neura-purple/50 transition-colors cursor-pointer">
                  <input
                    type="file"
                    id="thumbnailFile"
                    className="hidden"
                    accept="image/*"
                    onChange={handleThumbnailSelect}
                  />
                  <label htmlFor="thumbnailFile" className="cursor-pointer">
                    <FileImage className="w-8 h-8 text-neura-purple/50 mx-auto mb-2" />
                    <p className="text-white font-medium mb-1">
                      {thumbnailFile ? thumbnailFile.name : 'Upload Thumbnail'}
                    </p>
                    <p className="text-white/50 text-sm">
                      {thumbnailFile 
                        ? `${(thumbnailFile.size / 1024 / 1024).toFixed(2)} MB` 
                        : 'PNG, JPG, GIF (max 10MB)'}
                    </p>
                  </label>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {uploadProgress !== null && (
            <Card className="bg-neura-dark/50 border-neura-purple/30">
              <CardContent className="p-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-white/70">Upload Progress</span>
                  <span className="text-neura-cyan">{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} className="h-2" />
                {uploadProgress === 100 && (
                  <p className="text-emerald-400 text-sm mt-2">Files uploaded to IPFS successfully!</p>
                )}
              </CardContent>
            </Card>
          )}
        </TabsContent>
        
        <TabsContent value="metadata" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Title *</Label>
                <Input 
                  id="title" 
                  placeholder="Enter video title" 
                  value={videoTitle}
                  onChange={(e) => setVideoTitle(e.target.value)}
                  className="bg-neura-dark/50 border-neura-purple/30 text-white"
                />
              </div>
              
              <div>
                <Label htmlFor="description">Description *</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe your video..." 
                  value={videoDescription}
                  onChange={(e) => setVideoDescription(e.target.value)}
                  className="bg-neura-dark/50 border-neura-purple/30 text-white min-h-[100px]"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label>Attributes</Label>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={addAttribute}
                  className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
                >
                  Add Attribute
                </Button>
              </div>
              
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {attributes.map((attr, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      placeholder="Trait type"
                      value={attr.trait_type}
                      onChange={(e) => {
                        const newAttrs = [...attributes];
                        newAttrs[index].trait_type = e.target.value;
                        setAttributes(newAttrs);
                      }}
                      className="bg-neura-dark/50 border-neura-purple/30 text-white"
                    />
                    <Input
                      placeholder="Value"
                      value={attr.value}
                      onChange={(e) => {
                        const newAttrs = [...attributes];
                        newAttrs[index].value = e.target.value;
                        setAttributes(newAttrs);
                      }}
                      className="bg-neura-dark/50 border-neura-purple/30 text-white"
                    />
                    {index >= 3 && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => removeAttribute(index)}
                        className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                      >
                        ×
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="settings" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-neura-dark/50 border-neura-purple/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-neura-cyan" />
                  Royalty Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <Label>Royalty Percentage</Label>
                    <span className="text-white font-medium">{royaltyPercentage[0]}%</span>
                  </div>
                  <Slider
                    value={royaltyPercentage}
                    onValueChange={setRoyaltyPercentage}
                    max={30}
                    step={0.5}
                    className="my-4"
                  />
                  <p className="text-xs text-white/60">
                    Earn {royaltyPercentage[0]}% from every secondary sale on compatible marketplaces
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-neura-dark/50 border-neura-purple/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-neura-cyan" />
                  Smart Contract Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-neura-dark/40 rounded-lg">
                  <span className="text-sm font-medium">ERC-721 Standard</span>
                  <Badge variant="outline" className="border-green-500 text-green-400">
                    ✓ Enabled
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-neura-dark/40 rounded-lg">
                  <span className="text-sm font-medium">ERC-2981 Royalties</span>
                  <Badge variant="outline" className="border-green-500 text-green-400">
                    ✓ Enabled
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-neura-dark/40 rounded-lg">
                  <span className="text-sm font-medium">IPFS Storage</span>
                  <Badge variant="outline" className="border-green-500 text-green-400">
                    ✓ Decentralized
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-gradient-to-r from-neura-purple/10 to-neura-cyan/10 border-neura-cyan/30">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neura-cyan/20 rounded-full">
                  <Globe className="w-6 h-6 text-neura-cyan" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-2">IPFS Storage Summary</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-white/60">Video CID:</p>
                      <p className="text-white font-mono text-xs">
                        {videoCID ? `${videoCID.slice(0, 12)}...` : 'Not uploaded'}
                      </p>
                    </div>
                    <div>
                      <p className="text-white/60">Thumbnail CID:</p>
                      <p className="text-white font-mono text-xs">
                        {thumbnailCID ? `${thumbnailCID.slice(0, 12)}...` : 'Not uploaded'}
                      </p>
                    </div>
                    <div>
                      <p className="text-white/60">Metadata CID:</p>
                      <p className="text-white font-mono text-xs">
                        {metadataCID ? `${metadataCID.slice(0, 12)}...` : 'Not uploaded'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="flex justify-end gap-4">
        <Button 
          variant="outline" 
          className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
          disabled={isUploading}
        >
          Save Draft
        </Button>
        <Button
          className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
          onClick={handleUploadAndMint}
          disabled={!videoFile || !thumbnailFile || !wallet.isConnected || isUploading}
        >
          {isUploading ? (
            <>
              <Zap className="w-4 h-4 mr-2 animate-spin" />
              Creating NFT...
            </>
          ) : (
            <>
              <Shield className="w-4 h-4 mr-2" />
              Create Video NFT
            </>
          )}
        </Button>
      </div>
    </div>
  );
};
