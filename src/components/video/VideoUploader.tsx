
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, File, Clock, DollarSign, Globe } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

export const VideoUploader: React.FC = () => {
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [videoTitle, setVideoTitle] = useState('');
  const [videoDescription, setVideoDescription] = useState('');
  const [royaltyPercentage, setRoyaltyPercentage] = useState([10]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };
  
  const handleUpload = () => {
    // Simulate upload progress
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev === null) return 0;
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 300);
  };
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Upload Video NFT</h2>
      
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
                {uploadProgress === 100 && (
                  <p className="text-emerald-400 text-sm mt-2">Upload complete! Minting NFT...</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="flex justify-end gap-4 mt-6">
        <Button variant="outline" className="border-neura-purple/30 text-white hover:bg-neura-purple/10">
          Save Draft
        </Button>
        <Button
          className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
          onClick={handleUpload}
          disabled={!selectedFile || uploadProgress !== null}
        >
          {uploadProgress !== null && uploadProgress < 100 ? 'Uploading...' : uploadProgress === 100 ? 'Minting NFT' : 'Upload & Mint NFT'}
        </Button>
      </div>
    </div>
  );
};
