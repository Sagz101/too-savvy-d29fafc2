
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, Mic, Clock, DollarSign, Globe, Tag, ArrowLeft } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PodcastStudio } from '../podcast/PodcastStudio';

export const PodcastUploader: React.FC = () => {
  const [showStudio, setShowStudio] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [podcastTitle, setPodcastTitle] = useState('');
  const [podcastDescription, setPodcastDescription] = useState('');
  const [royaltyPercentage, setRoyaltyPercentage] = useState([10]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [podcastCategory, setPodcastCategory] = useState('');

  if (showStudio) {
    return (
      <div>
        <Button 
          variant="outline" 
          onClick={() => setShowStudio(false)}
          className="mb-4"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Simple Upload
        </Button>
        <PodcastStudio />
      </div>
    );
  }
  
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
  
  const podcastCategories = [
    "Technology", "Business", "Education", "Comedy", 
    "Science", "Health & Wellness", "Arts", "News", 
    "Entertainment", "Society & Culture", "True Crime", "Fiction"
  ];
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white mb-6">Upload Podcast NFT</h2>
        <Button 
          onClick={() => setShowStudio(true)}
          className="bg-gradient-to-r from-primary to-primary/70 text-white"
        >
          Open Full Studio
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-6">
            <Label htmlFor="audioFile" className="mb-2 block">Select Audio File</Label>
            <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer grok-card">
              <input
                type="file"
                id="audioFile"
                className="hidden"
                accept="audio/*"
                onChange={handleFileSelect}
              />
              <label htmlFor="audioFile" className="cursor-pointer">
                <Mic className="w-12 h-12 text-primary/50 mx-auto mb-4" />
                <p className="text-white font-medium mb-1">
                  {selectedFile ? selectedFile.name : 'Drop your audio file here or click to browse'}
                </p>
                <p className="text-white/50 text-sm">
                  {selectedFile 
                    ? `${(selectedFile.size / 1024 / 1024).toFixed(2)} MB` 
                    : 'MP3, WAV, or FLAC, max 500MB'}
                </p>
              </label>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="title" className="mb-2 block">Podcast Title</Label>
              <Input 
                id="title" 
                placeholder="Enter podcast title" 
                value={podcastTitle}
                onChange={(e) => setPodcastTitle(e.target.value)}
                className="grok-input"
              />
            </div>
            
            <div>
              <Label htmlFor="description" className="mb-2 block">Description</Label>
              <Textarea 
                id="description" 
                placeholder="Describe your podcast episode..." 
                value={podcastDescription}
                onChange={(e) => setPodcastDescription(e.target.value)}
                className="grok-input min-h-[100px]"
              />
            </div>
            
            <div>
              <Label htmlFor="category" className="mb-2 block">Category</Label>
              <Select value={podcastCategory} onValueChange={setPodcastCategory}>
                <SelectTrigger className="grok-input">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border/50 text-white">
                  {podcastCategories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">Podcast NFT Settings</h3>
          
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
                You'll receive this percentage of the sale price each time your podcast NFT is resold on compatible marketplaces
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="grok-card">
                <CardContent className="p-4">
                  <div className="flex items-start gap-2">
                    <Tag className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <h4 className="font-medium text-sm text-white">Episode Tagging</h4>
                      <p className="text-xs text-white/60 mt-1">
                        Add searchable metadata
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="grok-card">
                <CardContent className="p-4">
                  <div className="flex items-start gap-2">
                    <DollarSign className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <h4 className="font-medium text-sm text-white">Subscription Model</h4>
                      <p className="text-xs text-white/60 mt-1">
                        Set up recurring access
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="grok-card">
                <CardContent className="p-4">
                  <div className="flex items-start gap-2">
                    <Globe className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <h4 className="font-medium text-sm text-white">RSS Distribution</h4>
                      <p className="text-xs text-white/60 mt-1">
                        Share across platforms
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="grok-card">
                <CardContent className="p-4">
                  <div className="flex items-start gap-2">
                    <Clock className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <h4 className="font-medium text-sm text-white">Timed Segments</h4>
                      <p className="text-xs text-white/60 mt-1">
                        Add chapter markers
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
                  <span className="text-primary">{uploadProgress}%</span>
                </div>
                <div className="h-2 bg-card/50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-300" 
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
        <Button variant="outline" className="grok-button-secondary">
          Save Draft
        </Button>
        <Button
          className="grok-button-primary"
          onClick={handleUpload}
          disabled={!selectedFile || uploadProgress !== null}
        >
          {uploadProgress !== null && uploadProgress < 100 ? 'Uploading...' : uploadProgress === 100 ? 'Minting NFT' : 'Upload & Mint NFT'}
        </Button>
      </div>
    </div>
  );
};
