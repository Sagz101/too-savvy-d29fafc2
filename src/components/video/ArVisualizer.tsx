import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, RotateCw, Smartphone, Box, Tag } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export const ArVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState('upload');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };
  
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">AR Visualization Tool</h2>
      
      <Tabs defaultValue="upload" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="bg-neura-dark/50 w-full grid grid-cols-3">
          <TabsTrigger value="upload" className="data-[state=active]:bg-neura-purple/20">
            <Upload className="w-4 h-4 mr-2" />
            Upload 3D Model
          </TabsTrigger>
          <TabsTrigger value="edit" className="data-[state=active]:bg-neura-purple/20">
            <RotateCw className="w-4 h-4 mr-2" />
            Edit & Position
          </TabsTrigger>
          <TabsTrigger value="preview" className="data-[state=active]:bg-neura-purple/20">
            <Smartphone className="w-4 h-4 mr-2" />
            AR Preview
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="upload" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="mb-6">
                <Label htmlFor="modelFile" className="mb-2 block">Select 3D Model</Label>
                <div className="border-2 border-dashed border-neura-purple/30 rounded-lg p-8 text-center hover:border-neura-purple/50 transition-colors cursor-pointer">
                  <input
                    type="file"
                    id="modelFile"
                    className="hidden"
                    accept=".glb,.gltf,.obj,.fbx,.usdz"
                    onChange={handleFileSelect}
                  />
                  <label htmlFor="modelFile" className="cursor-pointer">
                    <Box className="w-12 h-12 text-neura-purple/50 mx-auto mb-4" />
                    <p className="text-white font-medium mb-1">
                      {selectedFile ? selectedFile.name : 'Drop your 3D model here or click to browse'}
                    </p>
                    <p className="text-white/50 text-sm">
                      {selectedFile 
                        ? `${(selectedFile.size / 1024 / 1024).toFixed(2)} MB` 
                        : 'GLB, GLTF, OBJ, FBX, or USDZ formats'}
                    </p>
                  </label>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="modelName" className="mb-2 block">Model Name</Label>
                  <Input 
                    id="modelName" 
                    placeholder="Enter model name" 
                    className="bg-neura-dark/50 border-neura-purple/30 text-white"
                  />
                </div>
                
                <div>
                  <Label htmlFor="modelType" className="mb-2 block">Model Type</Label>
                  <Select>
                    <SelectTrigger className="bg-neura-dark/50 border-neura-purple/30 text-white">
                      <SelectValue placeholder="Select model type" />
                    </SelectTrigger>
                    <SelectContent className="bg-neura-dark border-neura-purple/30 text-white">
                      <SelectItem value="product">Physical Product</SelectItem>
                      <SelectItem value="art">Digital Art</SelectItem>
                      <SelectItem value="avatar">Avatar</SelectItem>
                      <SelectItem value="environment">Environment</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">Format & Compatibility</h3>
              <div className="space-y-4">
                <Card className="bg-neura-dark/50 border-neura-purple/20">
                  <CardContent className="p-4">
                    <h4 className="text-white font-medium mb-3">Compatible Platforms</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-emerald-400"></div>
                        <span className="text-sm text-white">iOS (ARKit)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-emerald-400"></div>
                        <span className="text-sm text-white">Android (ARCore)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-emerald-400"></div>
                        <span className="text-sm text-white">WebXR</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-amber-400"></div>
                        <span className="text-sm text-white">Meta Quest</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-neura-dark/50 border-neura-purple/20">
                  <CardContent className="p-4">
                    <h4 className="text-white font-medium mb-3">Integration Options</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Tag className="w-5 h-5 text-neura-cyan mt-0.5" />
                        <div>
                          <h5 className="text-sm font-medium text-white">NFT Metadata</h5>
                          <p className="text-xs text-white/60">
                            Add 3D model to your existing NFTs
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Smartphone className="w-5 h-5 text-neura-cyan mt-0.5" />
                        <div>
                          <h5 className="text-sm font-medium text-white">Mobile AR View</h5>
                          <p className="text-xs text-white/60">
                            Generate QR code for mobile AR experiences
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Upload className="w-5 h-5 text-neura-cyan mt-0.5" />
                        <div>
                          <h5 className="text-sm font-medium text-white">IPFS Storage</h5>
                          <p className="text-xs text-white/60">
                            Store model on decentralized network
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end gap-4 mt-6">
            <Button 
              className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
              onClick={() => setActiveTab('edit')}
              disabled={!selectedFile}
            >
              Continue to Editing
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="edit" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="bg-neura-dark/50 border border-neura-purple/30 rounded-lg h-80 flex items-center justify-center">
                <div className="text-center">
                  <Box className="w-16 h-16 text-neura-purple/50 mx-auto mb-4" />
                  <p className="text-white/70">3D model preview would appear here</p>
                </div>
              </div>
            </div>
            
            <div>
              <Card className="bg-neura-dark/50 border-neura-purple/20 mb-4">
                <CardContent className="p-4">
                  <h4 className="text-white font-medium mb-3">Model Controls</h4>
                  <div className="space-y-3">
                    <div>
                      <Label className="mb-1 block text-sm">Scale</Label>
                      <input type="range" className="w-full" min="0.1" max="2" step="0.1" defaultValue="1" />
                    </div>
                    <div>
                      <Label className="mb-1 block text-sm">Rotation X</Label>
                      <input type="range" className="w-full" min="0" max="360" step="1" defaultValue="0" />
                    </div>
                    <div>
                      <Label className="mb-1 block text-sm">Rotation Y</Label>
                      <input type="range" className="w-full" min="0" max="360" step="1" defaultValue="0" />
                    </div>
                    <div>
                      <Label className="mb-1 block text-sm">Rotation Z</Label>
                      <input type="range" className="w-full" min="0" max="360" step="1" defaultValue="0" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-neura-dark/50 border-neura-purple/20">
                <CardContent className="p-4">
                  <h4 className="text-white font-medium mb-3">Environment</h4>
                  <Select>
                    <SelectTrigger className="bg-neura-dark/50 border-neura-purple/30 text-white">
                      <SelectValue placeholder="Select environment" />
                    </SelectTrigger>
                    <SelectContent className="bg-neura-dark border-neura-purple/30 text-white">
                      <SelectItem value="neutral">Neutral Studio</SelectItem>
                      <SelectItem value="livingroom">Living Room</SelectItem>
                      <SelectItem value="outdoor">Outdoor</SelectItem>
                      <SelectItem value="studio">Photo Studio</SelectItem>
                      <SelectItem value="custom">Custom Environment</SelectItem>
                    </SelectContent>
                  </Select>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="flex justify-between gap-4 mt-6">
            <Button 
              variant="outline"
              className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
              onClick={() => setActiveTab('upload')}
            >
              Back
            </Button>
            <Button 
              className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
              onClick={() => setActiveTab('preview')}
            >
              Continue to AR Preview
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="preview" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="bg-neura-dark/50 border border-neura-purple/30 rounded-lg h-80 flex items-center justify-center mb-4">
                <div className="text-center">
                  <Smartphone className="w-16 h-16 text-neura-purple/50 mx-auto mb-4" />
                  <p className="text-white/70">AR preview simulation would appear here</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="bg-white p-4 rounded-lg">
                  <div className="w-32 h-32 bg-neura-dark/20"></div>
                  <p className="text-center text-xs text-gray-500 mt-2">Scan QR code to view in AR</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-neura-dark/50 border-neura-purple/20">
                <CardContent className="p-4">
                  <h4 className="text-white font-medium mb-3">AR Features</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white">Surface Detection</span>
                      <div className="w-12 h-6 bg-neura-purple/40 rounded-full relative">
                        <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white">Ambient Lighting</span>
                      <div className="w-12 h-6 bg-neura-purple/40 rounded-full relative">
                        <div className="absolute top-1 left-7 w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white">Object Occlusion</span>
                      <div className="w-12 h-6 bg-neura-purple/40 rounded-full relative">
                        <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white">Animations</span>
                      <div className="w-12 h-6 bg-neura-purple/40 rounded-full relative">
                        <div className="absolute top-1 left-7 w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-neura-dark/50 border-neura-purple/20">
                <CardContent className="p-4">
                  <h4 className="text-white font-medium mb-3">Integration Options</h4>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full border-neura-purple/30 text-white hover:bg-neura-purple/10 justify-start">
                      <Tag className="w-4 h-4 mr-2" /> Add to NFT Metadata
                    </Button>
                    <Button variant="outline" className="w-full border-neura-purple/30 text-white hover:bg-neura-purple/10 justify-start">
                      <Upload className="w-4 h-4 mr-2" /> Upload to IPFS
                    </Button>
                    <Button variant="outline" className="w-full border-neura-purple/30 text-white hover:bg-neura-purple/10 justify-start">
                      <Smartphone className="w-4 h-4 mr-2" /> Generate Mobile App Link
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="flex justify-between gap-4 mt-6">
            <Button 
              variant="outline"
              className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
              onClick={() => setActiveTab('edit')}
            >
              Back to Editing
            </Button>
            <Button className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90">
              Finalize AR Experience
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
