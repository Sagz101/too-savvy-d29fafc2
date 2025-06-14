
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  ShoppingCart, 
  Plus, 
  Settings, 
  Palette, 
  Package, 
  Zap,
  Globe,
  Shield
} from 'lucide-react';
import { ProductManager } from './ProductManager';
import { PaymentSetup } from './PaymentSetup';
import { ShippingConfig } from './ShippingConfig';
import { StorePreview } from './StorePreview';

interface StoreConfig {
  name: string;
  description: string;
  theme: string;
  walletAddress: string;
  acceptedTokens: string[];
}

export const StoreBuilder: React.FC = () => {
  const [storeConfig, setStoreConfig] = useState<StoreConfig>({
    name: '',
    description: '',
    theme: 'default',
    walletAddress: '',
    acceptedTokens: ['ETH', 'USDT', 'DAI']
  });

  const [activeTab, setActiveTab] = useState('setup');

  const handleStoreConfigUpdate = (updates: Partial<StoreConfig>) => {
    setStoreConfig(prev => ({ ...prev, ...updates }));
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Decentralized Store Builder</h1>
          <p className="text-muted-foreground">
            Create your Web3 storefront with NFT authentication and logistics integration
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="setup" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Setup
            </TabsTrigger>
            <TabsTrigger value="products" className="flex items-center gap-2">
              <Package className="w-4 h-4" />
              Products
            </TabsTrigger>
            <TabsTrigger value="payments" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Payments
            </TabsTrigger>
            <TabsTrigger value="shipping" className="flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              Shipping
            </TabsTrigger>
            <TabsTrigger value="preview" className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              Preview
            </TabsTrigger>
          </TabsList>

          <TabsContent value="setup" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Store Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Store Name</label>
                    <Input
                      placeholder="My Web3 Store"
                      value={storeConfig.name}
                      onChange={(e) => handleStoreConfigUpdate({ name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Wallet Address</label>
                    <Input
                      placeholder="0x..."
                      value={storeConfig.walletAddress}
                      onChange={(e) => handleStoreConfigUpdate({ walletAddress: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Description</label>
                  <Input
                    placeholder="Describe your store..."
                    value={storeConfig.description}
                    onChange={(e) => handleStoreConfigUpdate({ description: e.target.value })}
                  />
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline">ERC-721M Ready</Badge>
                  <Badge variant="outline">IPFS Integrated</Badge>
                  <Badge variant="outline">NFC Authentication</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products">
            <ProductManager storeConfig={storeConfig} />
          </TabsContent>

          <TabsContent value="payments">
            <PaymentSetup storeConfig={storeConfig} onUpdate={handleStoreConfigUpdate} />
          </TabsContent>

          <TabsContent value="shipping">
            <ShippingConfig />
          </TabsContent>

          <TabsContent value="preview">
            <StorePreview storeConfig={storeConfig} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
