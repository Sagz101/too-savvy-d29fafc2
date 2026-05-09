
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Globe, 
  ShoppingCart, 
  Shield,
  Smartphone,
  Eye,
  ExternalLink
} from 'lucide-react';
import type { StoreConfig } from '@/types/commerce';

interface StorePreviewProps {
  storeConfig: StoreConfig;
}

export const StorePreview: React.FC<StorePreviewProps> = ({ storeConfig }) => {
  const mockProducts = [
    {
      id: 1,
      name: "Premium Leather Jacket",
      price: "0.25 ETH",
      image: "/placeholder.svg",
      category: "physical",
      nfcEnabled: true,
      inStock: true
    },
    {
      id: 2,
      name: "Digital Art Collection",
      price: "0.1 ETH", 
      image: "/placeholder.svg",
      category: "digital",
      nfcEnabled: false,
      inStock: true
    },
    {
      id: 3,
      name: "Smart Watch",
      price: "0.5 ETH",
      image: "/placeholder.svg", 
      category: "physical",
      nfcEnabled: true,
      inStock: false
    }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Store Preview
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Preview how your store will look to customers
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Eye className="w-4 h-4 mr-2" />
              Live Preview
            </Button>
            <Button size="sm">
              <ExternalLink className="w-4 h-4 mr-2" />
              Deploy Store
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Mock Store Interface */}
      <div className="border-2 border-dashed border-muted rounded-lg p-6">
        <div className="bg-background border rounded-lg overflow-hidden">
          {/* Store Header */}
          <div className="bg-primary text-primary-foreground p-6">
            <h1 className="text-2xl font-bold">{storeConfig.name || "My Web3 Store"}</h1>
            <p className="text-primary-foreground/80">{storeConfig.description || "Decentralized commerce with NFT authentication"}</p>
            <div className="flex gap-2 mt-3">
              <Badge variant="secondary">Web3 Native</Badge>
              <Badge variant="secondary">NFT Authenticated</Badge>
              <Badge variant="secondary">Global Shipping</Badge>
            </div>
          </div>

          {/* Product Grid */}
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {mockProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden">
                  <div className="aspect-square bg-muted relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    {product.nfcEnabled && (
                      <div className="absolute top-2 right-2">
                        <Badge variant="default" className="text-xs">
                          <Smartphone className="w-3 h-3 mr-1" />
                          NFC
                        </Badge>
                      </div>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Badge variant="destructive">Out of Stock</Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-bold">{product.price}</span>
                      <Badge variant={product.category === 'physical' ? 'default' : 'secondary'}>
                        {product.category}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Shield className="w-3 h-3 text-green-500" />
                      <span>NFT Certificate Included</span>
                    </div>
                    <Button 
                      className="w-full" 
                      disabled={!product.inStock}
                      size="sm"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {product.inStock ? 'Add to Cart' : 'Sold Out'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Store Footer */}
          <div className="bg-muted p-6 border-t">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <Shield className="w-6 h-6 mx-auto mb-2 text-green-500" />
                <h4 className="font-medium">NFT Authentication</h4>
                <p className="text-sm text-muted-foreground">Every purchase comes with proof of authenticity</p>
              </div>
              <div>
                <Smartphone className="w-6 h-6 mx-auto mb-2 text-blue-500" />
                <h4 className="font-medium">NFC Verification</h4>
                <p className="text-sm text-muted-foreground">Tap to verify physical products instantly</p>
              </div>
              <div>
                <Globe className="w-6 h-6 mx-auto mb-2 text-purple-500" />
                <h4 className="font-medium">Global Shipping</h4>
                <p className="text-sm text-muted-foreground">Tracked delivery with oracle updates</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Deployment Options</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">IPFS Deployment</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Fully decentralized hosting via Fleek or Skynet
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Deploy to IPFS
              </Button>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-medium mb-2">Hybrid Deployment</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Traditional hosting with Web3 functionality
              </p>
              <Button variant="outline" size="sm" className="w-full">
                Deploy to Vercel
              </Button>
            </div>
          </div>
          <div className="p-4 bg-muted/50 rounded-lg">
            <h4 className="font-medium mb-2">Custom Domain Options</h4>
            <div className="space-y-2 text-sm">
              <div>ENS Domain: {storeConfig.name?.toLowerCase().replace(/\s+/g, '') || 'mystore'}.eth</div>
              <div>Traditional Domain: www.{storeConfig.name?.toLowerCase().replace(/\s+/g, '') || 'mystore'}.store</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
