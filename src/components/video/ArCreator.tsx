
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from "sonner";
import { Upload, Box, Smartphone, Globe, Eye, Share2, Zap } from 'lucide-react';
import { uploadToIPFS, getIPFSUrl } from '@/services/ipfs';
import { useWallet } from '@/services/wallet';

interface ArSettings {
  scale: number[];
  rotation: { x: number; y: number; z: number };
  animation: boolean;
  environment: string;
  lighting: string;
}

export const ArCreator: React.FC = () => {
  const [modelFile, setModelFile] = useState<File | null>(null);
  const [modelName, setModelName] = useState('');
  const [modelCategory, setModelCategory] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [modelCID, setModelCID] = useState<string | null>(null);
  const [arSettings, setArSettings] = useState<ArSettings>({
    scale: [1.0],
    rotation: { x: 0, y: 0, z: 0 },
    animation: true,
    environment: 'daylight',
    lighting: 'auto'
  });
  const [activeTab, setActiveTab] = useState('upload');
  
  const { wallet } = useWallet();
  
  const handleModelSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setModelFile(file);
      
      // Auto-populate name from filename
      const nameWithoutExt = file.name.replace(/\.[^/.]+$/, "");
      setModelName(nameWithoutExt);
    }
  };
  
  const handleUploadModel = async () => {
    if (!modelFile || !wallet.isConnected) {
      toast.error("Please select a 3D model file and connect your wallet");
      return;
    }
    
    if (!modelName.trim()) {
      toast.error("Please enter a model name");
      return;
    }
    
    setIsUploading(true);
    
    try {
      toast.loading("Uploading 3D model to IPFS...");
      const cid = await uploadToIPFS(modelFile);
      
      if (!cid) throw new Error("Model upload failed");
      
      setModelCID(cid);
      toast.success("3D model uploaded successfully!", {
        description: `Model CID: ${cid.slice(0, 12)}...`
      });
      
      setActiveTab('settings');
    } catch (error) {
      console.error("Error uploading model:", error);
      toast.error("Upload failed", {
        description: "Please try again"
      });
    } finally {
      setIsUploading(false);
    }
  };
  
  const generateArLink = () => {
    if (!modelCID) return null;
    return `https://ar.neura.io/view/${modelCID}?scale=${arSettings.scale[0]}&env=${arSettings.environment}`;
  };
  
  const generateQRCode = () => {
    // In production, this would generate an actual QR code
    toast.success("QR Code generated!", {
      description: "Users can scan this to view your AR experience"
    });
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">AR Experience Creator</h2>
        <div className="flex gap-2">
          <Badge variant="outline" className="border-neura-cyan text-neura-cyan">
            WebXR Compatible
          </Badge>
          <Badge variant="outline" className="border-neura-purple text-neura-purple">
            ARKit/ARCore Ready
          </Badge>
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-neura-dark/50">
          <TabsTrigger value="upload">Upload Model</TabsTrigger>
          <TabsTrigger value="settings" disabled={!modelCID}>AR Settings</TabsTrigger>
          <TabsTrigger value="preview" disabled={!modelCID}>Preview</TabsTrigger>
          <TabsTrigger value="share" disabled={!modelCID}>Share & Deploy</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upload" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-neura-dark/50 border-neura-purple/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Box className="w-5 h-5 text-neura-cyan" />
                  3D Model Upload
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-neura-purple/30 rounded-lg p-6 text-center hover:border-neura-purple/50 transition-colors cursor-pointer">
                  <input
                    type="file"
                    id="modelFile"
                    className="hidden"
                    accept=".glb,.gltf,.obj,.fbx,.usdz"
                    onChange={handleModelSelect}
                  />
                  <label htmlFor="modelFile" className="cursor-pointer">
                    <Upload className="w-8 h-8 text-neura-purple/50 mx-auto mb-2" />
                    <p className="text-white font-medium mb-1">
                      {modelFile ? modelFile.name : 'Upload 3D Model'}
                    </p>
                    <p className="text-white/50 text-sm">
                      {modelFile 
                        ? `${(modelFile.size / 1024 / 1024).toFixed(2)} MB` 
                        : 'GLB, GLTF, OBJ, FBX, USDZ (max 50MB)'}
                    </p>
                  </label>
                </div>
                
                <div className="mt-4 space-y-3">
                  <div>
                    <Label htmlFor="modelName">Model Name</Label>
                    <Input 
                      id="modelName" 
                      placeholder="Enter model name" 
                      value={modelName}
                      onChange={(e) => setModelName(e.target.value)}
                      className="bg-neura-dark/50 border-neura-purple/30 text-white"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="modelCategory">Category</Label>
                    <Select value={modelCategory} onValueChange={setModelCategory}>
                      <SelectTrigger className="bg-neura-dark/50 border-neura-purple/30 text-white">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent className="bg-neura-dark border-neura-purple/30 text-white">
                        <SelectItem value="art">Digital Art</SelectItem>
                        <SelectItem value="collectible">Collectible</SelectItem>
                        <SelectItem value="character">Character</SelectItem>
                        <SelectItem value="object">Object</SelectItem>
                        <SelectItem value="environment">Environment</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-neura-dark/50 border-neura-purple/30">
              <CardHeader>
                <CardTitle>Supported Formats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-3">
                  <div className="p-3 bg-neura-dark/40 rounded-lg border border-neura-purple/20">
                    <h4 className="font-medium text-white mb-1">GLB/GLTF</h4>
                    <p className="text-xs text-white/70">Best for web AR, optimized, includes animations</p>
                    <Badge className="mt-2 bg-neura-purple/20 text-xs">Recommended</Badge>
                  </div>
                  
                  <div className="p-3 bg-neura-dark/40 rounded-lg border border-neura-purple/20">
                    <h4 className="font-medium text-white mb-1">USDZ</h4>
                    <p className="text-xs text-white/70">Apple's format, native iOS AR Quick Look</p>
                    <Badge variant="outline" className="mt-2 text-xs border-neura-cyan/30 text-neura-cyan">iOS Native</Badge>
                  </div>
                  
                  <div className="p-3 bg-neura-dark/40 rounded-lg border border-neura-purple/20">
                    <h4 className="font-medium text-white mb-1">OBJ</h4>
                    <p className="text-xs text-white/70">Universal format, good compatibility</p>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-neura-purple/10 rounded-lg">
                  <h4 className="font-medium text-white mb-2">Optimization Tips</h4>
                  <ul className="text-xs text-white/70 space-y-1">
                    <li>• Keep models under 10MB for optimal performance</li>
                    <li>• Use compressed textures (JPG over PNG)</li>
                    <li>• Limit polygon count to 50k triangles</li>
                    <li>• Include normal maps for detail</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex justify-end">
            <Button
              className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
              onClick={handleUploadModel}
              disabled={!modelFile || !wallet.isConnected || isUploading}
            >
              {isUploading ? (
                <>
                  <Zap className="w-4 h-4 mr-2 animate-spin" />
                  Uploading to IPFS...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4 mr-2" />
                  Upload & Continue
                </>
              )}
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="settings" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <Card className="bg-neura-dark/50 border-neura-purple/30">
                <CardHeader>
                  <CardTitle>Scale & Positioning</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <Label>Model Scale</Label>
                      <span className="text-white font-medium">{arSettings.scale[0]}x</span>
                    </div>
                    <Slider
                      value={arSettings.scale}
                      onValueChange={(value) => setArSettings(prev => ({ ...prev, scale: value }))}
                      max={5}
                      min={0.1}
                      step={0.1}
                      className="my-4"
                    />
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <Label className="text-xs">Rotation X</Label>
                      <Input
                        type="number"
                        value={arSettings.rotation.x}
                        onChange={(e) => setArSettings(prev => ({
                          ...prev,
                          rotation: { ...prev.rotation, x: Number(e.target.value) }
                        }))}
                        className="bg-neura-dark/50 border-neura-purple/30 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-xs">Rotation Y</Label>
                      <Input
                        type="number"
                        value={arSettings.rotation.y}
                        onChange={(e) => setArSettings(prev => ({
                          ...prev,
                          rotation: { ...prev.rotation, y: Number(e.target.value) }
                        }))}
                        className="bg-neura-dark/50 border-neura-purple/30 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-xs">Rotation Z</Label>
                      <Input
                        type="number"
                        value={arSettings.rotation.z}
                        onChange={(e) => setArSettings(prev => ({
                          ...prev,
                          rotation: { ...prev.rotation, z: Number(e.target.value) }
                        }))}
                        className="bg-neura-dark/50 border-neura-purple/30 text-white"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-neura-dark/50 border-neura-purple/30">
                <CardHeader>
                  <CardTitle>Environment Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Lighting Environment</Label>
                    <Select 
                      value={arSettings.environment} 
                      onValueChange={(value) => setArSettings(prev => ({ ...prev, environment: value }))}
                    >
                      <SelectTrigger className="bg-neura-dark/50 border-neura-purple/30 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-neura-dark border-neura-purple/30 text-white">
                        <SelectItem value="daylight">Daylight</SelectItem>
                        <SelectItem value="sunset">Sunset</SelectItem>
                        <SelectItem value="studio">Studio</SelectItem>
                        <SelectItem value="night">Night</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Label>Enable Animations</Label>
                    <input 
                      type="checkbox" 
                      checked={arSettings.animation}
                      onChange={(e) => setArSettings(prev => ({ ...prev, animation: e.target.checked }))}
                      className="toggle toggle-primary" 
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="bg-neura-dark/50 border-neura-purple/30 h-full">
                <CardHeader>
                  <CardTitle>3D Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-neura-dark/80 rounded-lg h-64 flex items-center justify-center border border-neura-purple/20">
                    <div className="text-center">
                      <Box className="w-16 h-16 text-neura-purple/50 mx-auto mb-4" />
                      <p className="text-white/70">3D model preview</p>
                      <p className="text-white/50 text-sm">Scale: {arSettings.scale[0]}x</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Model CID:</span>
                      <span className="text-white font-mono text-xs">
                        {modelCID ? `${modelCID.slice(0, 12)}...` : 'Not uploaded'}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Format:</span>
                      <span className="text-white text-xs">
                        {modelFile?.name.split('.').pop()?.toUpperCase() || 'N/A'}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">Size:</span>
                      <span className="text-white text-xs">
                        {modelFile ? `${(modelFile.size / 1024 / 1024).toFixed(2)} MB` : 'N/A'}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="flex justify-between">
            <Button 
              variant="outline"
              onClick={() => setActiveTab('upload')}
              className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
            >
              Back to Upload
            </Button>
            <Button 
              onClick={() => setActiveTab('preview')}
              className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
            >
              Preview AR Experience
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="preview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Card className="bg-neura-dark/50 border-neura-purple/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-neura-cyan" />
                    Mobile AR Preview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-neura-dark/80 rounded-lg h-80 flex items-center justify-center border border-neura-purple/20">
                    <div className="text-center">
                      <Smartphone className="w-20 h-20 text-neura-purple/50 mx-auto mb-4" />
                      <p className="text-white/70 mb-2">AR Preview Simulation</p>
                      <p className="text-white/50 text-sm">Model appears in camera view</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-center">
                    <Button 
                      onClick={generateQRCode}
                      variant="outline" 
                      className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
                    >
                      Generate QR Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-4">
              <Card className="bg-neura-dark/50 border-neura-purple/30">
                <CardHeader>
                  <CardTitle>AR Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white">Surface Detection</span>
                      <Badge variant="outline" className="border-green-500 text-green-400">Enabled</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white">Lighting Estimation</span>
                      <Badge variant="outline" className="border-green-500 text-green-400">Enabled</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white">Object Scaling</span>
                      <Badge variant="outline" className="border-green-500 text-green-400">Enabled</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white">Rotation Controls</span>
                      <Badge variant="outline" className="border-green-500 text-green-400">Enabled</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-neura-dark/50 border-neura-purple/30">
                <CardHeader>
                  <CardTitle>Platform Compatibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-emerald-400"></div>
                      <span className="text-sm text-white">iOS Safari</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-emerald-400"></div>
                      <span className="text-sm text-white">Chrome Android</span>
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
              
              <Card className="bg-neura-purple/10 border-neura-cyan/30">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-neura-cyan shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-white mb-1">IPFS Integration</h4>
                      <p className="text-sm text-white/70">
                        Your 3D model is stored on IPFS for decentralized access and permanent availability.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="flex justify-between">
            <Button 
              variant="outline"
              onClick={() => setActiveTab('settings')}
              className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
            >
              Back to Settings
            </Button>
            <Button 
              onClick={() => setActiveTab('share')}
              className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
            >
              Share & Deploy
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="share" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Card className="bg-neura-dark/50 border-neura-purple/30">
                <CardHeader>
                  <CardTitle>Direct AR Link</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2">
                    <Input 
                      value={generateArLink() || "AR link will appear here"}
                      readOnly
                      className="bg-neura-dark/50 border-neura-purple/30 text-white"
                    />
                    <Button 
                      variant="outline" 
                      className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
                      onClick={() => {
                        const link = generateArLink();
                        if (link) {
                          navigator.clipboard.writeText(link);
                          toast.success("AR link copied to clipboard!");
                        }
                      }}
                    >
                      Copy
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-neura-dark/50 border-neura-purple/30">
                <CardHeader>
                  <CardTitle>QR Code for Mobile</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-white p-4 rounded-lg flex items-center justify-center">
                    <div className="w-32 h-32 bg-gray-200 rounded-md flex items-center justify-center">
                      <p className="text-xs text-gray-500 text-center">QR Code<br/>Placeholder</p>
                    </div>
                  </div>
                  <div className="flex justify-end mt-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
                    >
                      Download PNG
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-4">
              <Card className="bg-neura-dark/50 border-neura-purple/30">
                <CardHeader>
                  <CardTitle>Embed Code</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-3 flex justify-between items-center">
                    <span className="text-sm text-white/70">Website Integration</span>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="h-7 border-neura-purple/30 text-white hover:bg-neura-purple/10"
                    >
                      Copy
                    </Button>
                  </div>
                  <div className="bg-neura-dark/80 rounded-lg p-3 font-mono text-xs text-white/80 overflow-x-auto">
                    {`<model-viewer src="${getIPFSUrl(modelCID || '')}" ar auto-rotate camera-controls></model-viewer>`}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-neura-dark/50 border-neura-purple/30">
                <CardHeader>
                  <CardTitle>NFT Integration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    variant="outline" 
                    className="w-full border-neura-purple/30 text-white hover:bg-neura-purple/10 justify-start"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    Add AR View to Existing NFT
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-neura-purple/30 text-white hover:bg-neura-purple/10 justify-start"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Create New AR-Enabled NFT
                  </Button>
                  
                  <div className="p-3 bg-neura-purple/10 rounded-lg">
                    <p className="text-sm text-white/70">
                      Link this AR experience to an NFT to enable token-gated access and ownership verification.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="flex justify-between">
            <Button 
              variant="outline"
              onClick={() => setActiveTab('preview')}
              className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
            >
              Back to Preview
            </Button>
            <Button 
              className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
              onClick={() => {
                toast.success("AR Experience Published!", {
                  description: "Your AR experience is now live and accessible via the generated links."
                });
              }}
            >
              <Share2 className="w-4 h-4 mr-2" />
              Publish AR Experience
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
