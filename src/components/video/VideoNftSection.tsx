
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Upload, File, Clock, DollarSign, Tag, Play } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const VideoNftSection: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [royaltyPercentage, setRoyaltyPercentage] = useState([10]);
  const [activeTab, setActiveTab] = useState('upload');
  
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };
  
  return (
    <div className="space-y-8">
      <Card className="bg-neura-dark/50 border border-neura-purple/30 overflow-hidden">
        <div className="border-b border-neura-purple/30">
          <Tabs 
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="bg-neura-dark/50 w-full justify-start border-b-0 h-14 p-1 gap-2">
              <TabsTrigger value="upload" className="data-[state=active]:bg-neura-purple/20 rounded-md">
                <Upload className="w-4 h-4 mr-2" />
                Upload Video
              </TabsTrigger>
              <TabsTrigger value="details" className="data-[state=active]:bg-neura-purple/20 rounded-md">
                <File className="w-4 h-4 mr-2" />
                NFT Details
              </TabsTrigger>
              <TabsTrigger value="royalties" className="data-[state=active]:bg-neura-purple/20 rounded-md">
                <DollarSign className="w-4 h-4 mr-2" />
                Royalties
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <CardContent className="p-6">
          <TabsContent value="upload" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <Label className="mb-2 block">Video File</Label>
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
                        : 'MP4, MOV or WebM formats'
                    </p>
                  </label>
                </div>
                
                <div className="mt-6">
                  <h3 className="font-medium text-white mb-3">Storage Options</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-neura-dark/80 border-neura-purple/20 relative overflow-hidden">
                      <div className="absolute top-2 right-2 bg-neura-purple/20 text-white text-xs px-2 py-0.5 rounded-full">
                        Recommended
                      </div>
                      <CardContent className="p-4">
                        <h4 className="font-medium text-white mb-1">IPFS Storage</h4>
                        <p className="text-xs text-white/70 mb-3">Decentralized, permanent storage</p>
                        <Button size="sm" className="w-full bg-neura-purple/20 hover:bg-neura-purple/30 text-white">
                          Select
                        </Button>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-neura-dark/50 border-neura-purple/20">
                      <CardContent className="p-4">
                        <h4 className="font-medium text-white mb-1">Filecoin</h4>
                        <p className="text-xs text-white/70 mb-3">Long-term decentralized storage</p>
                        <Button size="sm" variant="outline" className="w-full border-neura-purple/30 text-white hover:bg-neura-purple/10">
                          Select
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-neura-dark/80 border border-neura-purple/30 rounded-lg mb-6 overflow-hidden">
                  <div className="p-4 border-b border-neura-purple/30">
                    <h3 className="font-medium text-white">Preview</h3>
                  </div>
                  
                  <div className="h-[250px] bg-gradient-to-br from-neura-purple/20 to-neura-cyan/10 relative flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-neura-purple/30 flex items-center justify-center backdrop-blur-sm">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="videoTitle" className="mb-2 block">Video Title</Label>
                  <Input 
                    id="videoTitle" 
                    placeholder="Enter title for your video NFT" 
                    className="bg-neura-dark/50 border-neura-purple/30 text-white mb-4"
                  />
                  
                  <Label htmlFor="videoDescription" className="mb-2 block">Description</Label>
                  <Textarea 
                    id="videoDescription" 
                    placeholder="Describe your video NFT..." 
                    className="bg-neura-dark/50 border-neura-purple/30 text-white min-h-[100px]"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex justify-end mt-6">
              <Button 
                onClick={() => setActiveTab('details')}
                className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
              >
                Next: NFT Details
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="details" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-white mb-4">NFT Configuration</h3>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="tokenStandard" className="mb-2 block">Token Standard</Label>
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="bg-neura-dark/80 border-neura-purple/20 relative overflow-hidden">
                        <div className="absolute top-2 right-2 bg-neura-purple/20 text-white text-xs px-2 py-0.5 rounded-full">
                          Single NFT
                        </div>
                        <CardContent className="p-4">
                          <h4 className="font-medium text-white mb-1">ERC-721</h4>
                          <p className="text-xs text-white/70 mb-3">Standard NFT, unique token</p>
                          <Button size="sm" className="w-full bg-neura-purple/20 hover:bg-neura-purple/30 text-white">
                            Select
                          </Button>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-neura-dark/50 border-neura-purple/20">
                        <CardContent className="p-4">
                          <h4 className="font-medium text-white mb-1">ERC-1155</h4>
                          <p className="text-xs text-white/70 mb-3">Multi-token, multiple editions</p>
                          <Button size="sm" variant="outline" className="w-full border-neura-purple/30 text-white hover:bg-neura-purple/10">
                            Select
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="tokenProperties" className="mb-2 block">Token Properties</Label>
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <Input 
                          placeholder="Property name" 
                          className="bg-neura-dark/50 border-neura-purple/30 text-white flex-1"
                        />
                        <Input 
                          placeholder="Value" 
                          className="bg-neura-dark/50 border-neura-purple/30 text-white flex-1"
                        />
                      </div>
                      <div className="flex gap-2">
                        <Input 
                          placeholder="Property name" 
                          className="bg-neura-dark/50 border-neura-purple/30 text-white flex-1"
                        />
                        <Input 
                          placeholder="Value" 
                          className="bg-neura-dark/50 border-neura-purple/30 text-white flex-1"
                        />
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
                      >
                        + Add Property
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <Label className="mb-2 block">Tags</Label>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-neura-purple/20 text-white px-3 py-1 rounded-full text-sm flex items-center">
                        NFT <button className="ml-2 text-white/70 hover:text-white">×</button>
                      </span>
                      <span className="bg-neura-purple/20 text-white px-3 py-1 rounded-full text-sm flex items-center">
                        Video <button className="ml-2 text-white/70 hover:text-white">×</button>
                      </span>
                      <span className="bg-neura-purple/20 text-white px-3 py-1 rounded-full text-sm flex items-center">
                        Digital Art <button className="ml-2 text-white/70 hover:text-white">×</button>
                      </span>
                    </div>
                    <div className="relative">
                      <Input 
                        placeholder="Add tag..." 
                        className="bg-neura-dark/50 border-neura-purple/30 text-white pl-9"
                      />
                      <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neura-purple/70" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-white mb-4">Advanced Settings</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Label>Time-Locked Access</Label>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="h-7 border-neura-purple/30 text-white hover:bg-neura-purple/10"
                      >
                        Configure
                      </Button>
                    </div>
                    <p className="text-xs text-white/70">
                      Schedule when NFT holders can access the video content
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-neura-dark/50 border-neura-purple/20">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-2">
                          <Clock className="w-5 h-5 text-neura-cyan shrink-0" />
                          <div>
                            <h4 className="font-medium text-sm text-white">Release Schedule</h4>
                            <p className="text-xs text-white/60 mt-1">
                              Set timed content reveals
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
                  </div>
                  
                  <div>
                    <Label htmlFor="networkSelect" className="mb-2 block">Blockchain Network</Label>
                    <div className="grid grid-cols-3 gap-2">
                      <Button variant="outline" className="border-neura-purple/30 text-white bg-neura-purple/20 hover:bg-neura-purple/30">Ethereum</Button>
                      <Button variant="outline" className="border-neura-purple/30 text-white hover:bg-neura-purple/10">Polygon</Button>
                      <Button variant="outline" className="border-neura-purple/30 text-white hover:bg-neura-purple/10">Solana</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-6">
              <Button 
                variant="outline"
                onClick={() => setActiveTab('upload')}
                className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
              >
                Back: Upload
              </Button>
              <Button 
                onClick={() => setActiveTab('royalties')}
                className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
              >
                Next: Royalties
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="royalties" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-white mb-4">Royalty Settings</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <Label>Creator Royalty Percentage</Label>
                      <span className="text-white font-medium">{royaltyPercentage[0]}%</span>
                    </div>
                    <Slider
                      value={royaltyPercentage}
                      onValueChange={setRoyaltyPercentage}
                      max={20}
                      step={1}
                      className="my-6"
                    />
                    <p className="text-xs text-white/60 mb-4">
                      You'll receive this percentage of the sale price each time your NFT is resold on compatible marketplaces
                    </p>
                    
                    <div className="bg-neura-purple/10 p-4 rounded-lg">
                      <p className="text-sm text-white/90">
                        <span className="font-medium text-neura-cyan">Pro Tip:</span> The industry standard for creator royalties is typically between 5-10% of the secondary sale value.
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <Label className="mb-2 block">Royalty Payout Address</Label>
                    <Input 
                      placeholder="0x..." 
                      className="bg-neura-dark/50 border-neura-purple/30 text-white mb-1"
                    />
                    <p className="text-xs text-white/60">
                      This wallet address will receive all royalty payments
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-white mb-4">Advanced Royalty Options</h3>
                
                <div className="space-y-6">
                  <Card className="bg-neura-dark/50 border-neura-purple/30">
                    <CardContent className="p-4">
                      <h4 className="font-medium text-white mb-2">Split Royalties</h4>
                      <p className="text-sm text-white/70 mb-4">
                        Divide royalties between multiple collaborators automatically
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Input 
                            placeholder="0x..." 
                            className="bg-neura-dark/50 border-neura-purple/30 text-white flex-1"
                          />
                          <Input 
                            type="number"
                            placeholder="%" 
                            className="bg-neura-dark/50 border-neura-purple/30 text-white w-16"
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <Input 
                            placeholder="0x..." 
                            className="bg-neura-dark/50 border-neura-purple/30 text-white flex-1"
                          />
                          <Input 
                            type="number"
                            placeholder="%" 
                            className="bg-neura-dark/50 border-neura-purple/30 text-white w-16"
                          />
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
                        >
                          + Add Collaborator
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="bg-neura-dark/80 border border-neura-purple/30 p-4 rounded-lg">
                    <h4 className="font-medium text-white mb-2">ERC-2981 Standard</h4>
                    <p className="text-sm text-white/70 mb-2">
                      Your NFT will implement the ERC-2981 royalty standard, which is supported by major marketplaces including:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-neura-purple/20 text-neura-cyan px-2 py-1 rounded-full">OpenSea</span>
                      <span className="text-xs bg-neura-purple/20 text-neura-cyan px-2 py-1 rounded-full">Rarible</span>
                      <span className="text-xs bg-neura-purple/20 text-neura-cyan px-2 py-1 rounded-full">Foundation</span>
                      <span className="text-xs bg-neura-purple/20 text-neura-cyan px-2 py-1 rounded-full">SuperRare</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-6">
              <Button 
                variant="outline"
                onClick={() => setActiveTab('details')}
                className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
              >
                Back: NFT Details
              </Button>
              <Button 
                className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
              >
                Mint Video NFT
              </Button>
            </div>
          </TabsContent>
        </CardContent>
      </Card>
    </div>
  );
};
