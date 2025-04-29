
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, Smartphone, Box, Tag, Image, Share2 } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

export const ArProductSection: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [activeTab, setActiveTab] = useState('upload');
  
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };
  
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white">AR Product Visualization</h2>
          <p className="text-white/70">
            Use augmented reality to let customers visualize your physical products in their own environment before purchasing.
            Create interactive 3D experiences that showcase your items in engaging ways.
          </p>
          
          <div className="bg-neura-dark/50 border border-neura-purple/30 p-4 rounded-lg">
            <h3 className="font-medium text-white mb-2 flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-neura-cyan" />
              Supported Platforms
            </h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-neura-purple/10 border-neura-purple/30">iOS (ARKit)</Badge>
              <Badge variant="outline" className="bg-neura-purple/10 border-neura-purple/30">Android (ARCore)</Badge>
              <Badge variant="outline" className="bg-neura-purple/10 border-neura-purple/30">WebAR</Badge>
              <Badge variant="outline" className="bg-neura-purple/10 border-neura-purple/30">Meta Quest</Badge>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-neura-dark/50 border-neura-purple/30">
              <CardContent className="p-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-neura-purple/20 flex items-center justify-center mb-3">
                    <Image className="w-6 h-6 text-neura-cyan" />
                  </div>
                  <h3 className="font-medium text-white text-center">75%</h3>
                  <p className="text-xs text-white/70 text-center">Higher engagement with AR products</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-neura-dark/50 border-neura-purple/30">
              <CardContent className="p-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-neura-purple/20 flex items-center justify-center mb-3">
                    <Share2 className="w-6 h-6 text-neura-cyan" />
                  </div>
                  <h3 className="font-medium text-white text-center">40%</h3>
                  <p className="text-xs text-white/70 text-center">More likely to be shared on social</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div>
          <Card className="bg-neura-dark/50 border border-neura-purple/30 overflow-hidden h-full">
            <div className="h-60 bg-gradient-to-br from-neura-purple/20 to-neura-cyan/10 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-neura-purple/30 flex items-center justify-center backdrop-blur-sm">
                  <Smartphone className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="absolute bottom-4 right-4">
                <Button size="sm" className="bg-neura-dark/70 backdrop-blur-sm text-white hover:bg-neura-dark/90">
                  View Demo
                </Button>
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium text-white mb-2">Try AR Experience</h3>
              <p className="text-sm text-white/70">
                Scan the QR code below with your mobile device to experience an AR demo
              </p>
              
              <div className="mt-4 p-4 bg-white rounded-lg flex items-center justify-center">
                <div className="w-32 h-32 bg-gray-200 rounded-md flex items-center justify-center">
                  <p className="text-xs text-gray-500 text-center">QR Code Placeholder</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
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
                Upload 3D Model
              </TabsTrigger>
              <TabsTrigger value="settings" className="data-[state=active]:bg-neura-purple/20 rounded-md">
                <Smartphone className="w-4 h-4 mr-2" />
                AR Settings
              </TabsTrigger>
              <TabsTrigger value="share" className="data-[state=active]:bg-neura-purple/20 rounded-md">
                <Share2 className="w-4 h-4 mr-2" />
                Share & Embed
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <CardContent className="p-6">
          <TabsContent value="upload" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <Label className="mb-2 block">3D Model File</Label>
                <div className="border-2 border-dashed border-neura-purple/30 rounded-lg p-8 text-center hover:border-neura-purple/50 transition-colors cursor-pointer">
                  <input
                    type="file"
                    id="modelFile"
                    className="hidden"
                    accept=".glb,.gltf,.obj,.usdz"
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
                        : 'GLB, GLTF, OBJ or USDZ formats'
                      }
                    </p>
                  </label>
                </div>
                
                <div className="mt-6">
                  <h3 className="font-medium text-white mb-3">Supported 3D Formats</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-neura-dark/80 border-neura-purple/20 relative overflow-hidden">
                      <CardContent className="p-4">
                        <h4 className="font-medium text-white mb-1">GLB/GLTF</h4>
                        <p className="text-xs text-white/70">Best for web and cross-platform</p>
                        <Badge className="mt-2 bg-neura-purple/20 text-xs hover:bg-neura-purple/30">Recommended</Badge>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-neura-dark/80 border-neura-purple/20">
                      <CardContent className="p-4">
                        <h4 className="font-medium text-white mb-1">USDZ</h4>
                        <p className="text-xs text-white/70">Best for iOS devices</p>
                        <Badge className="mt-2 bg-neura-dark/30 border-neura-purple/30 text-xs">iOS Only</Badge>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-white mb-4">Model Details</h3>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="modelName" className="mb-2 block">Model Name</Label>
                    <Input 
                      id="modelName" 
                      placeholder="Enter name for your 3D model" 
                      className="bg-neura-dark/50 border-neura-purple/30 text-white"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="modelCategory" className="mb-2 block">Category</Label>
                    <div className="grid grid-cols-3 gap-2">
                      <Button variant="outline" className="border-neura-purple/30 text-white bg-neura-purple/20 hover:bg-neura-purple/30">Furniture</Button>
                      <Button variant="outline" className="border-neura-purple/30 text-white hover:bg-neura-purple/10">Electronics</Button>
                      <Button variant="outline" className="border-neura-purple/30 text-white hover:bg-neura-purple/10">Fashion</Button>
                    </div>
                  </div>
                  
                  <div>
                    <Label className="mb-2 block">Product Tags</Label>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-neura-purple/20 text-white px-3 py-1 rounded-full text-sm flex items-center">
                        Furniture <button className="ml-2 text-white/70 hover:text-white">×</button>
                      </span>
                      <span className="bg-neura-purple/20 text-white px-3 py-1 rounded-full text-sm flex items-center">
                        Chair <button className="ml-2 text-white/70 hover:text-white">×</button>
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
                  
                  <div>
                    <Label htmlFor="productPageUrl" className="mb-2 block">Product Page URL</Label>
                    <Input 
                      id="productPageUrl" 
                      placeholder="https://" 
                      className="bg-neura-dark/50 border-neura-purple/30 text-white"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end mt-6">
              <Button 
                onClick={() => setActiveTab('settings')}
                className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
              >
                Next: AR Settings
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="settings" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-white mb-4">AR Visualization Settings</h3>
                
                <div className="space-y-6">
                  <div>
                    <Label className="mb-2 block">Scale Settings</Label>
                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <Label htmlFor="scaleX" className="text-xs mb-1 block">Width (m)</Label>
                        <Input 
                          id="scaleX" 
                          type="number" 
                          defaultValue="1.0" 
                          step="0.1"
                          className="bg-neura-dark/50 border-neura-purple/30 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="scaleY" className="text-xs mb-1 block">Height (m)</Label>
                        <Input 
                          id="scaleY" 
                          type="number" 
                          defaultValue="1.0" 
                          step="0.1"
                          className="bg-neura-dark/50 border-neura-purple/30 text-white"
                        />
                      </div>
                      <div>
                        <Label htmlFor="scaleZ" className="text-xs mb-1 block">Depth (m)</Label>
                        <Input 
                          id="scaleZ" 
                          type="number" 
                          defaultValue="1.0" 
                          step="0.1"
                          className="bg-neura-dark/50 border-neura-purple/30 text-white"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Label className="mb-2 block">Environment</Label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                      <div className="bg-neura-dark/80 p-2 rounded-lg border-2 border-neura-purple/50">
                        <div className="h-14 bg-gradient-to-b from-blue-300 to-blue-100 rounded-md mb-2"></div>
                        <p className="text-xs text-white text-center">Daylight</p>
                      </div>
                      <div className="bg-neura-dark/30 p-2 rounded-lg border border-neura-purple/20">
                        <div className="h-14 bg-gradient-to-b from-orange-300 to-orange-100 rounded-md mb-2"></div>
                        <p className="text-xs text-white text-center">Sunset</p>
                      </div>
                      <div className="bg-neura-dark/30 p-2 rounded-lg border border-neura-purple/20">
                        <div className="h-14 bg-gradient-to-b from-gray-800 to-gray-700 rounded-md mb-2"></div>
                        <p className="text-xs text-white text-center">Studio</p>
                      </div>
                      <div className="bg-neura-dark/30 p-2 rounded-lg border border-neura-purple/20">
                        <div className="h-14 bg-gradient-to-b from-indigo-900 to-indigo-800 rounded-md mb-2"></div>
                        <p className="text-xs text-white text-center">Night</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Label className="mb-2 block">Animation Settings</Label>
                    <Card className="bg-neura-dark/50 border-neura-purple/30">
                      <CardContent className="p-4">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-white">Auto-rotate</p>
                            <input type="checkbox" className="toggle toggle-primary" />
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-white">Allow user scaling</p>
                            <input type="checkbox" className="toggle toggle-primary" checked readOnly />
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-sm text-white">Show shadows</p>
                            <input type="checkbox" className="toggle toggle-primary" checked readOnly />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <Card className="bg-neura-dark/50 border border-neura-purple/30 overflow-hidden">
                  <div className="h-52 bg-neura-dark/80 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Box className="w-16 h-16 text-neura-purple/50" />
                    </div>
                    <div className="absolute bottom-2 right-2">
                      <Button size="sm" variant="outline" className="h-7 border-neura-purple/30 text-white hover:bg-neura-purple/10">
                        Preview
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-medium text-white mb-1">Preview Mode</h4>
                    <p className="text-xs text-white/70">
                      3D model preview with current settings
                    </p>
                  </CardContent>
                </Card>
                
                <div>
                  <h3 className="font-medium text-white mb-3">IPFS Storage</h3>
                  <Card className="bg-neura-dark/50 border-neura-purple/30">
                    <CardContent className="p-4">
                      <p className="text-sm text-white mb-4">
                        Your 3D models and AR experiences will be stored on IPFS for decentralized accessibility.
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-white">Permanence</p>
                          <p className="text-xs text-white/70">Opt for permanent storage</p>
                        </div>
                        <Button size="sm" variant="outline" className="border-neura-purple/30 text-white hover:bg-neura-purple/10">
                          Configure
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-6">
              <Button 
                variant="outline"
                onClick={() => setActiveTab('upload')}
                className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
              >
                Back: Upload Model
              </Button>
              <Button 
                onClick={() => setActiveTab('share')}
                className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
              >
                Next: Share & Embed
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="share" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-white mb-4">Share AR Experience</h3>
                
                <div className="space-y-6">
                  <Card className="bg-neura-dark/50 border-neura-purple/30">
                    <CardContent className="p-4">
                      <h4 className="font-medium text-white mb-3">Direct Link</h4>
                      <div className="flex gap-2">
                        <Input 
                          value="https://ar.neura.io/view/product123" 
                          readOnly
                          className="bg-neura-dark/50 border-neura-purple/30 text-white"
                        />
                        <Button variant="outline" className="border-neura-purple/30 text-white hover:bg-neura-purple/10">
                          Copy
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div>
                    <h4 className="font-medium text-white mb-3">QR Code</h4>
                    <div className="bg-white p-4 rounded-lg flex items-center justify-center">
                      <div className="w-32 h-32 bg-gray-200 rounded-md flex items-center justify-center">
                        <p className="text-xs text-gray-500 text-center">QR Code Placeholder</p>
                      </div>
                    </div>
                    <div className="flex justify-end mt-2">
                      <Button size="sm" variant="outline" className="border-neura-purple/30 text-white hover:bg-neura-purple/10">
                        Download
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-white mb-3">Share on Social</h4>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" className="border-neura-purple/30 text-white hover:bg-neura-purple/10 flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                        Twitter
                      </Button>
                      <Button variant="outline" className="border-neura-purple/30 text-white hover:bg-neura-purple/10 flex items-center gap-2">
                        <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.74 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.74 0 12c0 3.26.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.74 24 12 24c3.26 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                        Instagram
                      </Button>
                      <Button variant="outline" className="border-neura-purple/30 text-white hover:bg-neura-purple/10 flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                        Facebook
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-white mb-4">Embed Code</h3>
                
                <div className="space-y-6">
                  <Card className="bg-neura-dark/50 border-neura-purple/30">
                    <CardContent className="p-4">
                      <div className="mb-3 flex justify-between items-center">
                        <h4 className="font-medium text-white">Website Embed</h4>
                        <Button size="sm" variant="outline" className="h-7 border-neura-purple/30 text-white hover:bg-neura-purple/10">
                          Copy Code
                        </Button>
                      </div>
                      <div className="bg-neura-dark/80 rounded-lg p-3 font-mono text-xs text-white/80 overflow-x-auto">
                        {`<iframe src="https://ar.neura.io/embed/product123" width="100%" height="500" frameborder="0" allow="camera; gyroscope; accelerometer"></iframe>`}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-neura-dark/50 border-neura-purple/30">
                    <CardContent className="p-4">
                      <h4 className="font-medium text-white mb-3">Integration Options</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-white">Auto-start AR on page load</p>
                          <input type="checkbox" className="toggle toggle-primary" />
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-white">Show AR button</p>
                          <input type="checkbox" className="toggle toggle-primary" checked readOnly />
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm text-white">Allow fullscreen</p>
                          <input type="checkbox" className="toggle toggle-primary" checked readOnly />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="bg-neura-purple/10 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <Smartphone className="w-5 h-5 text-neura-cyan shrink-0 mt-1" />
                      <div>
                        <h4 className="font-medium text-white mb-1">Link with NFT</h4>
                        <p className="text-sm text-white/70">
                          Connect this AR experience with a physical product NFT to authenticate ownership and unlock exclusive features.
                        </p>
                        <Button size="sm" className="mt-3 bg-neura-purple/20 hover:bg-neura-purple/30 text-white">
                          Link to NFT
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-6">
              <Button 
                variant="outline"
                onClick={() => setActiveTab('settings')}
                className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
              >
                Back: AR Settings
              </Button>
              <Button 
                className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
              >
                Publish AR Experience
              </Button>
            </div>
          </TabsContent>
        </CardContent>
      </Card>
    </div>
  );
};
