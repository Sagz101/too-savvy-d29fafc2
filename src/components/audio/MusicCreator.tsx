
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, Music, Users, DollarSign, Star, Filter, Plus, Trash2, MessageCircle, History, Share2, Download, Settings, Palette, Headphones } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';

interface Collaborator {
  id: string;
  name: string;
  role: string;
  ownership: number;
  walletAddress: string;
}

interface StemFile {
  id: string;
  name: string;
  type: string;
  file: File;
  instrument: string;
}

export const MusicCreator: React.FC = () => {
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [trackTitle, setTrackTitle] = useState('');
  const [trackDescription, setTrackDescription] = useState('');
  const [royaltyPercentage, setRoyaltyPercentage] = useState([15]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [genre, setGenre] = useState('');
  const [allowRemixes, setAllowRemixes] = useState(false);
  const [bpm, setBpm] = useState([120]);
  const [musicalKey, setMusicalKey] = useState('');
  const [mood, setMood] = useState('');
  const [collaborators, setCollaborators] = useState<Collaborator[]>([]);
  const [stemFiles, setStemFiles] = useState<StemFile[]>([]);
  const [licenseType, setLicenseType] = useState('non-commercial');
  const [exclusivity, setExclusivity] = useState('non-exclusive');
  const [tokenStandard, setTokenStandard] = useState('ERC-721');
  const [priceType, setPriceType] = useState('fixed');
  const [fixedPrice, setFixedPrice] = useState('');
  const [enableTokenGating, setEnableTokenGating] = useState(false);
  
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleStemUpload = (e: React.ChangeEvent<HTMLInputElement>, instrument: string) => {
    if (e.target.files && e.target.files[0]) {
      const newStem: StemFile = {
        id: Date.now().toString(),
        name: e.target.files[0].name,
        type: e.target.files[0].type,
        file: e.target.files[0],
        instrument
      };
      setStemFiles([...stemFiles, newStem]);
    }
  };

  const removeStem = (id: string) => {
    setStemFiles(stemFiles.filter(stem => stem.id !== id));
  };

  const addCollaborator = () => {
    const newCollaborator: Collaborator = {
      id: Date.now().toString(),
      name: '',
      role: 'producer',
      ownership: 0,
      walletAddress: ''
    };
    setCollaborators([...collaborators, newCollaborator]);
  };

  const updateCollaborator = (id: string, field: keyof Collaborator, value: string | number) => {
    setCollaborators(collaborators.map(collab => 
      collab.id === id ? { ...collab, [field]: value } : collab
    ));
  };

  const removeCollaborator = (id: string) => {
    setCollaborators(collaborators.filter(collab => collab.id !== id));
  };
  
  const handleUpload = () => {
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

  const musicalKeys = [
    "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"
  ];

  const moods = [
    "Energetic", "Calm", "Happy", "Melancholic", "Aggressive", 
    "Romantic", "Dark", "Uplifting", "Mysterious", "Nostalgic"
  ];

  const instruments = [
    "Drums", "Bass", "Lead Vocals", "Backing Vocals", "Guitar", 
    "Piano", "Synth", "Strings", "Brass", "Percussion"
  ];

  const totalOwnership = collaborators.reduce((sum, collab) => sum + collab.ownership, 0);
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white mb-0">Create Music NFT</h2>
        <div className="flex gap-2">
          <Button variant="outline" className="border-neura-purple/30 text-white hover:bg-neura-purple/10">
            <History className="w-4 h-4 mr-2" />
            Version History
          </Button>
          <Button variant="outline" className="border-neura-purple/30 text-white hover:bg-neura-purple/10">
            <MessageCircle className="w-4 h-4 mr-2" />
            Feedback
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="compose" className="space-y-6">
        <TabsList className="bg-neura-dark/50 grid grid-cols-5 w-full">
          <TabsTrigger value="compose">Compose</TabsTrigger>
          <TabsTrigger value="collaborate">Collaborate</TabsTrigger>
          <TabsTrigger value="rights">Rights & Splits</TabsTrigger>
          <TabsTrigger value="royalties">Royalties</TabsTrigger>
          <TabsTrigger value="mint">Mint & Sell</TabsTrigger>
        </TabsList>

        <TabsContent value="compose" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="bg-neura-dark/50 border-neura-purple/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Headphones className="w-5 h-5" />
                    DAW Integration
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
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
                        {selectedFile ? selectedFile.name : 'Upload track or import from DAW'}
                      </p>
                      <p className="text-white/50 text-sm">
                        {selectedFile 
                          ? `${(selectedFile.size / 1024 / 1024).toFixed(2)} MB` 
                          : 'MP3, WAV, FLAC, or project files'}
                      </p>
                    </label>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90">
                      <Palette className="w-4 h-4 mr-2" />
                      Open Composer
                    </Button>
                    <Button variant="outline" className="border-neura-purple/30 text-white hover:bg-neura-purple/10">
                      <Download className="w-4 h-4 mr-2" />
                      Import Project
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-neura-dark/50 border-neura-purple/20">
                <CardHeader>
                  <CardTitle className="text-white">Track Metadata</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
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
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="genre" className="mb-2 block">Genre</Label>
                      <Select value={genre} onValueChange={setGenre}>
                        <SelectTrigger className="bg-neura-dark/50 border-neura-purple/30 text-white">
                          <SelectValue placeholder="Select genre" />
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
                      <Label htmlFor="key" className="mb-2 block">Key</Label>
                      <Select value={musicalKey} onValueChange={setMusicalKey}>
                        <SelectTrigger className="bg-neura-dark/50 border-neura-purple/30 text-white">
                          <SelectValue placeholder="Select key" />
                        </SelectTrigger>
                        <SelectContent className="bg-neura-dark border-neura-purple/30 text-white">
                          {musicalKeys.map((key) => (
                            <SelectItem key={key} value={key}>
                              {key}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
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
                    
                    <div>
                      <Label htmlFor="mood" className="mb-2 block">Mood</Label>
                      <Select value={mood} onValueChange={setMood}>
                        <SelectTrigger className="bg-neura-dark/50 border-neura-purple/30 text-white">
                          <SelectValue placeholder="Select mood" />
                        </SelectTrigger>
                        <SelectContent className="bg-neura-dark border-neura-purple/30 text-white">
                          {moods.map((moodOption) => (
                            <SelectItem key={moodOption} value={moodOption}>
                              {moodOption}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-neura-dark/50 border-neura-purple/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  Upload Stems
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {instruments.map((instrument) => (
                  <div key={instrument} className="space-y-2">
                    <Label className="text-sm text-white/80">{instrument}</Label>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 border border-neura-purple/30 rounded-lg p-3 bg-neura-dark/30">
                        <input
                          type="file"
                          accept="audio/*"
                          onChange={(e) => handleStemUpload(e, instrument)}
                          className="hidden"
                          id={`stem-${instrument}`}
                        />
                        <label 
                          htmlFor={`stem-${instrument}`} 
                          className="cursor-pointer text-white/60 text-sm"
                        >
                          {stemFiles.find(s => s.instrument === instrument)?.name || `Upload ${instrument.toLowerCase()} stem`}
                        </label>
                      </div>
                      {stemFiles.find(s => s.instrument === instrument) && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                          onClick={() => {
                            const stem = stemFiles.find(s => s.instrument === instrument);
                            if (stem) removeStem(stem.id);
                          }}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
                
                <div className="mt-4 text-sm text-white/60">
                  {stemFiles.length} of {instruments.length} stems uploaded
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="collaborate" className="space-y-6">
          <Card className="bg-neura-dark/50 border-neura-purple/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Collaborators
                </span>
                <Button 
                  onClick={addCollaborator}
                  className="bg-gradient-to-r from-neura-purple to-neura-cyan"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Invite Collaborator
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {collaborators.map((collaborator) => (
                <div key={collaborator.id} className="grid grid-cols-5 gap-4 p-4 bg-neura-dark/30 rounded-lg">
                  <Input
                    placeholder="Name"
                    value={collaborator.name}
                    onChange={(e) => updateCollaborator(collaborator.id, 'name', e.target.value)}
                    className="bg-neura-dark/50 border-neura-purple/30 text-white"
                  />
                  <Select 
                    value={collaborator.role} 
                    onValueChange={(value) => updateCollaborator(collaborator.id, 'role', value)}
                  >
                    <SelectTrigger className="bg-neura-dark/50 border-neura-purple/30 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-neura-dark border-neura-purple/30 text-white">
                      <SelectItem value="producer">Producer</SelectItem>
                      <SelectItem value="composer">Composer</SelectItem>
                      <SelectItem value="lyricist">Lyricist</SelectItem>
                      <SelectItem value="vocalist">Vocalist</SelectItem>
                      <SelectItem value="instrumentalist">Instrumentalist</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    placeholder="Ownership %"
                    type="number"
                    value={collaborator.ownership}
                    onChange={(e) => updateCollaborator(collaborator.id, 'ownership', parseInt(e.target.value) || 0)}
                    className="bg-neura-dark/50 border-neura-purple/30 text-white"
                  />
                  <Input
                    placeholder="Wallet Address"
                    value={collaborator.walletAddress}
                    onChange={(e) => updateCollaborator(collaborator.id, 'walletAddress', e.target.value)}
                    className="bg-neura-dark/50 border-neura-purple/30 text-white"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeCollaborator(collaborator.id)}
                    className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
              
              {collaborators.length === 0 && (
                <div className="text-center py-8 text-white/60">
                  No collaborators added yet. Click "Invite Collaborator" to get started.
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rights" className="space-y-6">
          <Card className="bg-neura-dark/50 border-neura-purple/20">
            <CardHeader>
              <CardTitle className="text-white">Rights Assignment Dashboard</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Publishing Rights</h3>
                  <div className="space-y-4">
                    {collaborators.map((collaborator) => (
                      <div key={`pub-${collaborator.id}`} className="flex justify-between items-center p-3 bg-neura-dark/30 rounded-lg">
                        <span className="text-white">{collaborator.name || 'Unnamed'}</span>
                        <span className="text-neura-cyan font-medium">{collaborator.ownership}%</span>
                      </div>
                    ))}
                    <div className="border-t border-neura-purple/30 pt-3">
                      <div className="flex justify-between items-center font-semibold">
                        <span className="text-white">Total Assigned:</span>
                        <span className={`${totalOwnership === 100 ? 'text-green-400' : 'text-yellow-400'}`}>
                          {totalOwnership}%
                        </span>
                      </div>
                      {totalOwnership !== 100 && (
                        <p className="text-yellow-400 text-sm mt-1">
                          Warning: Total ownership must equal 100%
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Master Rights</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-neura-dark/30 rounded-lg border border-neura-purple/20">
                      <h4 className="font-medium text-white mb-2">Smart Contract Generation</h4>
                      <p className="text-white/70 text-sm mb-3">
                        Automatically bind ownership splits into NFT metadata with immutable smart contracts.
                      </p>
                      <Button 
                        className="bg-gradient-to-r from-green-600 to-emerald-600 hover:opacity-90"
                        disabled={totalOwnership !== 100}
                      >
                        Generate Contract
                      </Button>
                    </div>
                    
                    <div className="p-4 bg-neura-dark/30 rounded-lg border border-neura-purple/20">
                      <h4 className="font-medium text-white mb-2">License Terms</h4>
                      <div className="space-y-3">
                        <div>
                          <Label className="text-white/80">Commercial Use</Label>
                          <Select value={licenseType} onValueChange={setLicenseType}>
                            <SelectTrigger className="bg-neura-dark/50 border-neura-purple/30 text-white mt-1">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-neura-dark border-neura-purple/30 text-white">
                              <SelectItem value="commercial">Commercial</SelectItem>
                              <SelectItem value="non-commercial">Non-Commercial</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label className="text-white/80">Exclusivity</Label>
                          <Select value={exclusivity} onValueChange={setExclusivity}>
                            <SelectTrigger className="bg-neura-dark/50 border-neura-purple/30 text-white mt-1">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-neura-dark border-neura-purple/30 text-white">
                              <SelectItem value="exclusive">Exclusive</SelectItem>
                              <SelectItem value="non-exclusive">Non-Exclusive</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="royalties" className="space-y-6">
          <Card className="bg-neura-dark/50 border-neura-purple/20">
            <CardHeader>
              <CardTitle className="text-white">Royalty Engine Setup</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Primary Sales</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <Label className="text-white/80">Creator Royalty</Label>
                        <span className="text-white font-medium">{royaltyPercentage[0]}%</span>
                      </div>
                      <Slider
                        value={royaltyPercentage}
                        onValueChange={setRoyaltyPercentage}
                        max={30}
                        step={1}
                        className="my-4"
                      />
                    </div>
                    
                    <div className="p-4 bg-neura-dark/30 rounded-lg">
                      <h4 className="font-medium text-white mb-2">Revenue Split Preview</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-white/70">Platform Fee (2.5%)</span>
                          <span className="text-white">2.5%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-white/70">Creator Royalty</span>
                          <span className="text-white">{royaltyPercentage[0]}%</span>
                        </div>
                        <div className="flex justify-between font-medium border-t border-neura-purple/30 pt-2">
                          <span className="text-white">Creator Receives</span>
                          <span className="text-green-400">{97.5 - royaltyPercentage[0]}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Secondary Sales</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-neura-dark/30 rounded-lg">
                      <div>
                        <h4 className="font-medium text-white">Perpetual Royalties</h4>
                        <p className="text-white/60 text-sm">Earn on every resale automatically</p>
                      </div>
                      <Switch checked={true} disabled />
                    </div>
                    
                    <div className="p-4 bg-neura-dark/30 rounded-lg">
                      <h4 className="font-medium text-white mb-3">Payout Mechanism</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-neura-dark/40 rounded border border-neura-purple/20">
                          <span className="text-white/80">Real-time Distribution</span>
                          <Switch checked={true} />
                        </div>
                        <div className="flex items-center justify-between p-3 bg-neura-dark/40 rounded border border-neura-purple/20">
                          <span className="text-white/80">Monthly Disbursement</span>
                          <Switch checked={false} />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-neura-dark/30 rounded-lg">
                      <h4 className="font-medium text-white mb-2">Collaborator Payouts</h4>
                      <p className="text-white/60 text-sm mb-3">
                        Automatic split payments to all collaborators based on ownership percentage
                      </p>
                      <div className="text-xs text-green-400">
                        ✓ Smart contract enabled
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mint" className="space-y-6">
          <div className="grid grid-cols-2 gap-8">
            <Card className="bg-neura-dark/50 border-neura-purple/20">
              <CardHeader>
                <CardTitle className="text-white">NFT Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-white/80 mb-2 block">Token Standard</Label>
                  <Select value={tokenStandard} onValueChange={setTokenStandard}>
                    <SelectTrigger className="bg-neura-dark/50 border-neura-purple/30 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-neura-dark border-neura-purple/30 text-white">
                      <SelectItem value="ERC-721">ERC-721 (Unique NFT)</SelectItem>
                      <SelectItem value="ERC-1155">ERC-1155 (Multi-edition)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label className="text-white/80 mb-2 block">Format Options</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="border-neura-purple/30 text-white hover:bg-neura-purple/10">
                      Full Track
                    </Button>
                    <Button variant="outline" className="border-neura-purple/30 text-white hover:bg-neura-purple/10">
                      Instrumental
                    </Button>
                    <Button variant="outline" className="border-neura-purple/30 text-white hover:bg-neura-purple/10">
                      Loop Pack
                    </Button>
                    <Button variant="outline" className="border-neura-purple/30 text-white hover:bg-neura-purple/10">
                      Stem Pack
                    </Button>
                  </div>
                </div>
                
                <div>
                  <Label className="text-white/80 mb-2 block">Cover Art</Label>
                  <div className="border-2 border-dashed border-neura-purple/30 rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 text-neura-purple/50 mx-auto mb-2" />
                    <p className="text-white/60 text-sm">Upload cover art (JPG, PNG)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-neura-dark/50 border-neura-purple/20">
              <CardHeader>
                <CardTitle className="text-white">Marketplace & Pricing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-white/80 mb-2 block">Price Type</Label>
                  <Select value={priceType} onValueChange={setPriceType}>
                    <SelectTrigger className="bg-neura-dark/50 border-neura-purple/30 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-neura-dark border-neura-purple/30 text-white">
                      <SelectItem value="fixed">Fixed Price</SelectItem>
                      <SelectItem value="auction">Auction</SelectItem>
                      <SelectItem value="offer">Accept Offers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {priceType === 'fixed' && (
                  <div>
                    <Label className="text-white/80 mb-2 block">Price (ETH)</Label>
                    <Input
                      placeholder="0.1"
                      value={fixedPrice}
                      onChange={(e) => setFixedPrice(e.target.value)}
                      className="bg-neura-dark/50 border-neura-purple/30 text-white"
                    />
                  </div>
                )}
                
                <div className="flex items-center justify-between p-4 bg-neura-dark/30 rounded-lg">
                  <div>
                    <h4 className="font-medium text-white">Token Gating</h4>
                    <p className="text-white/60 text-sm">Restrict access to token holders</p>
                  </div>
                  <Switch 
                    checked={enableTokenGating} 
                    onCheckedChange={setEnableTokenGating}
                  />
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-medium text-white">Download Options</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-neura-dark/40 rounded border border-neura-purple/20">
                      <span className="text-white/80">Individual Stems</span>
                      <Switch checked={true} />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-neura-dark/40 rounded border border-neura-purple/20">
                      <span className="text-white/80">Full Track</span>
                      <Switch checked={true} />
                    </div>
                    <div className="flex items-center justify-between p-3 bg-neura-dark/40 rounded border border-neura-purple/20">
                      <span className="text-white/80">Project File</span>
                      <Switch checked={false} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {uploadProgress !== null && (
            <Card className="bg-neura-dark/50 border-neura-purple/20">
              <CardContent className="p-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-white/70">Minting Progress</span>
                  <span className="text-neura-cyan">{uploadProgress}%</span>
                </div>
                <Progress value={uploadProgress} className="mb-2" />
                {uploadProgress === 100 && (
                  <p className="text-emerald-400 text-sm">NFT minted successfully! Listing on marketplace...</p>
                )}
              </CardContent>
            </Card>
          )}
          
          <div className="flex justify-end gap-4">
            <Button variant="outline" className="border-neura-purple/30 text-white hover:bg-neura-purple/10">
              Save Draft
            </Button>
            <Button variant="outline" className="border-neura-purple/30 text-white hover:bg-neura-purple/10">
              <Share2 className="w-4 h-4 mr-2" />
              Share Preview
            </Button>
            <Button
              className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
              onClick={handleUpload}
              disabled={!selectedFile || uploadProgress !== null || totalOwnership !== 100}
            >
              {uploadProgress !== null && uploadProgress < 100 ? 'Minting...' : 
               uploadProgress === 100 ? 'Listing...' : 'Mint & List NFT'}
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
