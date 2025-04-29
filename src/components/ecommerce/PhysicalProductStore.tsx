
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { ShoppingCart, Tag, Award, Share2 } from 'lucide-react';
import { useWallet } from '@/services/wallet';
import { SocialShare } from '@/components/ui/social-share';
import { WalletConnectButton } from '@/components/ui/wallet-connect-button';
import { LoyaltyRewards } from '@/components/ecommerce/LoyaltyRewards';
import { mintNFT } from '@/services/nft';

type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  tokenizedSupply: number;
  totalSupply: number;
  category: string;
  attributes: Array<{ name: string; value: string }>;
};

const products: Product[] = [
  {
    id: '1',
    name: 'Neurapathy Smart Hoodie',
    description: 'Embedded with NFC chip linked to an authenticity NFT. Limited edition.',
    price: '0.15 ETH',
    image: 'https://via.placeholder.com/300x300',
    tokenizedSupply: 18,
    totalSupply: 100,
    category: 'Fashion',
    attributes: [
      { name: 'Size', value: 'M' },
      { name: 'Color', value: 'Nebula Black' },
      { name: 'Material', value: 'Organic Cotton' }
    ]
  },
  {
    id: '2',
    name: 'Neural Interface Headset',
    description: 'Augmented reality headset with built-in neural interface. Comes with digital twin NFT.',
    price: '1.2 ETH',
    image: 'https://via.placeholder.com/300x300',
    tokenizedSupply: 5,
    totalSupply: 50,
    category: 'Hardware',
    attributes: [
      { name: 'Weight', value: '250g' },
      { name: 'Battery', value: '12h' },
      { name: 'Connectivity', value: 'Bluetooth 5.0' }
    ]
  },
  {
    id: '3',
    name: 'Quantum Computing Book',
    description: 'Physical book with AR features and exclusive digital content unlocked by NFT.',
    price: '0.05 ETH',
    image: 'https://via.placeholder.com/300x300',
    tokenizedSupply: 150,
    totalSupply: 500,
    category: 'Books',
    attributes: [
      { name: 'Pages', value: '350' },
      { name: 'Author', value: 'Dr. Quantum' },
      { name: 'Edition', value: 'First Edition' }
    ]
  }
];

export const PhysicalProductStore: React.FC = () => {
  const { toast } = useToast();
  const { wallet } = useWallet();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showLoyalty, setShowLoyalty] = useState(false);
  const [showSharing, setShowSharing] = useState(false);
  
  const handlePurchase = async (product: Product) => {
    if (!wallet.isConnected) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to make a purchase",
        variant: "destructive",
      });
      return;
    }
    
    try {
      toast({
        title: "Processing purchase",
        description: "Please confirm the transaction in your wallet",
      });
      
      // This would be replaced with actual purchase logic
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mint the NFT receipt
      if (wallet.signer) {
        await mintNFT(
          wallet.signer,
          "0x123456789abcdef", // Mock contract address
          {
            name: `Receipt for ${product.name}`,
            description: `Digital ownership receipt for ${product.name}`,
            image: product.image,
            attributes: [
              { trait_type: "Product ID", value: product.id },
              { trait_type: "Purchase Date", value: new Date().toISOString() },
              ...product.attributes.map(attr => ({
                trait_type: attr.name,
                value: attr.value
              }))
            ]
          }
        );
      }
      
      setShowLoyalty(true);
    } catch (error) {
      console.error("Purchase error:", error);
      toast({
        title: "Purchase failed",
        description: "There was an error processing your purchase",
        variant: "destructive",
      });
    }
  };
  
  const handleShare = (product: Product) => {
    setSelectedProduct(product);
    setShowSharing(true);
  };
  
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Physical Products with NFT Authentication</h2>
        {!wallet.isConnected && <WalletConnectButton />}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="bg-neura-dark/50 border-neura-purple/20 overflow-hidden flex flex-col">
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full aspect-square object-cover"
              />
              <Badge className="absolute top-2 right-2 bg-neura-purple/90">
                {product.tokenizedSupply}/{product.totalSupply}
              </Badge>
            </div>
            
            <CardContent className="p-4 flex-1 flex flex-col">
              <div className="mb-2 flex items-center justify-between">
                <Badge variant="outline" className="border-neura-cyan/30 text-neura-cyan">
                  {product.category}
                </Badge>
                <span className="font-bold text-white">{product.price}</span>
              </div>
              
              <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
              <p className="text-white/70 text-sm mb-4 flex-1">{product.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {product.attributes.map((attr, idx) => (
                  <div key={idx} className="text-xs bg-neura-purple/10 px-2 py-1 rounded-full flex items-center">
                    <span className="font-medium text-neura-cyan mr-1">{attr.name}:</span>
                    <span className="text-white/80">{attr.value}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center gap-2 mt-auto">
                <Button 
                  className="flex-1 bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
                  onClick={() => handlePurchase(product)}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" /> Buy Now
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
                  onClick={() => handleShare(product)}
                >
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {showLoyalty && (
        <div className="mt-8 pt-8 border-t border-neura-purple/20">
          <LoyaltyRewards onClose={() => setShowLoyalty(false)} />
        </div>
      )}
      
      {showSharing && selectedProduct && (
        <div className="mt-8 pt-8 border-t border-neura-purple/20">
          <h3 className="text-lg font-semibold mb-4">Share {selectedProduct.name}</h3>
          <div className="bg-neura-dark/40 border border-neura-purple/20 p-4 rounded-lg">
            <SocialShare 
              url={`https://neurapathy.io/product/${selectedProduct.id}`} 
              title={`Check out ${selectedProduct.name} on Neurapathy`}
              text={`I just found this amazing product: ${selectedProduct.name}. It comes with NFT authentication!`}
            />
            
            <div className="mt-4 bg-neura-purple/10 p-3 rounded-lg flex items-center gap-3">
              <Award className="w-5 h-5 text-neura-cyan" />
              <p className="text-sm text-white/80">
                Earn 5 $NEURA tokens when someone purchases through your shared link
              </p>
            </div>
            
            <div className="flex justify-end mt-4">
              <Button 
                variant="outline" 
                size="sm"
                className="border-neura-purple/30 text-white hover:bg-neura-purple/10"
                onClick={() => setShowSharing(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
