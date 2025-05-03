
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, Music, Users, DollarSign, Star, Filter } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';

export const MusicCreator: React.FC = () => {
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [trackTitle, setTrackTitle] = useState('');
  const [trackDescription, setTrackDescription] = useState('');
  const [royaltyPercentage, setRoyaltyPercentage] = useState([15]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [genre, setGenre] = useState('');
  const [allowRemixes, setAllowRemixes] = useState(false);
  const [bpm, setBpm] = useState([120]);
  
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
  
  const musicGenres = [
    "Electronic", "Hip-Hop", "R&B", "Pop", "Rock", 
    "Jazz", "Classical", "Ambient", "Lo-Fi", "House", 
    "Techno", "Drum & Bass", "Indie", "Metal", "Folk"
  ];
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Create Music NFT</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-6">
            <Label htmlFor="musicFile" className="mb-2 block">Upload Music Track</Label>
            <div className="border-2 border-dashed border-neura-purple/30 rounded-lg p-8 text-center hover:border-neura-purple/50 transition-colors cursor-pointer">
              <input
                type="file"
                id="musicFile"
                className="hidden"
                accept="audio/*"
                onChange={handleFileSelect}
              />
              <label htmlFor="musicFile" className="cursor-pointer">
                <Music className="w-12 h-12 text-neura-purple/50 mx-auto mb-4" />
                <p className="text-white font-medium mb-1">
                  {selectedFile ? selectedFile.name : 'Drop your music file here or click to browse'}
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
              <Label htmlFor="title" className="mb-2 block">Track Title</Label>
              <Input 
                id="title" 
                placeholder="Enter track title" 
                value={trackTitle}
                onChange={(e) => setTrackTitle(e.target.value)}
                className="bg-neura-dark/50 border-neura-purple/30 text-white"
              />
            </div>
            
            <div>
              <Label htmlFor="description" className="mb-2 block">Description</Label>
              <Textarea 
                id="description" 
                placeholder="Describe your music track..." 
                value={trackDescription}
                onChange={(e) => setTrackDescription(e.target.value)}
                className="bg-neura-dark/50 border-neura-purple/30 text-white min-h-[100px]"
              />
            </div>
            
            <div>
              <Label htmlFor="genre" className="mb-2 block">Genre</Label>
              <Select value={genre} onValueChange={setGenre}>
                <SelectTrigger className="bg-neura-dark/50 border-neura-purple/30 text-white">
                  <SelectValue placeholder="Select a genre" />
                </SelectTrigger>
                <SelectContent className="bg-neura-dark border-neura-purple/30 text-white">
                  {musicGenres.map((musicGenre) => (
                    <SelectItem key={musicGenre} value={musicGenre}>
                      {musicGenre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <Label>BPM</Label>
                <span className="text-white font-medium">{bpm[0]}</span>
              </div>
              <Slider
                value={bpm}
                onValueChange={setBpm}
                min={60}
                max={200}
                step={1}
                className="my-4"
              />
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg mb-4 text-white">Music NFT Settings</h3>
          
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
                You'll receive this percentage of the sale price each time your music NFT is resold on compatible marketplaces
              </p>
            </div>
            
            <div className="flex items-center justify-between bg-neura-dark/50 border border-neura-purple/20 rounded-lg p-4 mb-4">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-neura-cyan" />
                <div>
                  <h4 className="font-medium text-sm text-white">Allow Remixes</h4>
                  <p className="text-xs text-white/60">Enable others to create derivative works</p>
                </div>
              </div>
              <Switch
                checked={allowRemixes}
                onCheckedChange={setAllowRemixes}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-neura-dark/50 border-neura-purple/20">
                <CardContent className="p-4">
                  <div className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-neura-cyan shrink-0" />
                    <div>
                      <h4 className="font-medium text-sm text-white">Exclusive Rights</h4>
                      <p className="text-xs text-white/60 mt-1">
                        Set commercial usage terms
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
                      <h4 className="font-medium text-sm text-white">Split Payments</h4>
                      <p className="text-xs text-white/60 mt-1">
                        Divide royalties automatically
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-neura-dark/50 border-neura-purple/20">
                <CardContent className="p-4">
                  <div className="flex items-start gap-2">
                    <Users className="w-5 h-5 text-neura-cyan shrink-0" />
                    <div>
                      <h4 className="font-medium text-sm text-white">Fan Exclusives</h4>
                      <p className="text-xs text-white/60 mt-1">
                        Token-gated content for fans
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-neura-dark/50 border-neura-purple/20">
                <CardContent className="p-4">
                  <div className="flex items-start gap-2">
                    <Music className="w-5 h-5 text-neura-cyan shrink-0" />
                    <div>
                      <h4 className="font-medium text-sm text-white">Stem Access</h4>
                      <p className="text-xs text-white/60 mt-1">
                        Separate audio tracks for collaborators
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
