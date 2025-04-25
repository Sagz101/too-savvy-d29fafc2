
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart, Tags, Truck, Shield, Sparkles, TrendingUp } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

export const EcommerceStore: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-20 relative overflow-hidden" id="ecommerce">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-neura-cyan/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-neura-purple/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neura-purple to-neura-cyan bg-clip-text text-transparent">
              Web3-Native E-Commerce
            </span>
          </h2>
          <p className="text-white/70 md:text-lg max-w-2xl mx-auto">
            Build your decentralized storefront for digital and physical products with NFT-backed authenticity
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          <div className="lg:col-span-2">
            <Card className={`bg-neura-dark/50 border border-neura-purple/30 overflow-hidden h-full transition-all duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
                  style={{ transitionDelay: '100ms' }}>
              <div className="h-64 bg-gradient-to-br from-neura-purple/20 to-neura-cyan/10 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-neura-purple/30 flex items-center justify-center backdrop-blur-sm">
                    <ShoppingCart className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-white">Decentralized Storefront</h3>
                <p className="text-white/70 mb-6">
                  Build your own Web3 store with drag-and-drop simplicity. Sell physical products with NFT authentication or digital goods with instant delivery.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-neura-purple/10 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Tags className="w-5 h-5 text-neura-cyan" />
                      <h4 className="font-medium text-white">NFT-Backed Products</h4>
                    </div>
                    <p className="text-sm text-white/70">Physical items ship with NFC chips linked to authenticity NFTs</p>
                  </div>
                  
                  <div className="bg-neura-purple/10 p-4 rounded-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <Truck className="w-5 h-5 text-neura-cyan" />
                      <h4 className="font-medium text-white">Supply Chain Tracking</h4>
                    </div>
                    <p className="text-sm text-white/70">Follow your order from creation to delivery with Chainlink oracles</p>
                  </div>
                </div>
                
                <div ref={ref} className="flex flex-wrap gap-3 mb-6">
                  <span className="text-xs bg-neura-purple/20 text-neura-cyan px-2 py-1 rounded-full">ERC-721M</span>
                  <span className="text-xs bg-neura-purple/20 text-neura-cyan px-2 py-1 rounded-full">NFC Integration</span>
                  <span className="text-xs bg-neura-purple/20 text-neura-cyan px-2 py-1 rounded-full">Chainlink</span>
                  <span className="text-xs bg-neura-purple/20 text-neura-cyan px-2 py-1 rounded-full">UniswapX Payments</span>
                  <span className="text-xs bg-neura-purple/20 text-neura-cyan px-2 py-1 rounded-full">ShipBob API</span>
                </div>
                
                <Button className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90">
                  Launch Your Store <ShoppingCart className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-8">
            <Card className={`bg-neura-dark/50 border border-neura-purple/30 overflow-hidden transition-all duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
                  style={{ transitionDelay: '200ms' }}>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-br from-neura-purple/20 to-neura-cyan/10 p-3 rounded-full">
                    <Shield className="w-5 h-5 text-neura-cyan" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2 text-white">Authenticity Verification</h3>
                    <p className="text-sm text-white/70">
                      Each product includes a digital twin NFT that proves authenticity and ownership history
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className={`bg-neura-dark/50 border border-neura-purple/30 overflow-hidden transition-all duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
                  style={{ transitionDelay: '300ms' }}>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-br from-neura-purple/20 to-neura-cyan/10 p-3 rounded-full">
                    <Sparkles className="w-5 h-5 text-neura-cyan" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2 text-white">AR Product Visualization</h3>
                    <p className="text-sm text-white/70">
                      Let customers visualize physical products in their space before purchasing
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className={`bg-neura-dark/50 border border-neura-purple/30 overflow-hidden transition-all duration-500 transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
                  style={{ transitionDelay: '400ms' }}>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-br from-neura-purple/20 to-neura-cyan/10 p-3 rounded-full">
                    <TrendingUp className="w-5 h-5 text-neura-cyan" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-2 text-white">Dynamic Pricing</h3>
                    <p className="text-sm text-white/70">
                      AI-powered pricing adjusts based on demand, supply, and community engagement
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="bg-neura-dark/30 border border-neura-purple/20 rounded-xl p-6 backdrop-blur-sm">
          <h3 className="font-semibold text-xl mb-4 text-center text-white">Store Templates</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-neura-purple/10 p-4 rounded-lg text-center">
              <h4 className="font-medium text-white mb-2">Fashion Store</h4>
              <p className="text-sm text-white/70 mb-3">Phygital fashion items with AR try-on</p>
              <Button variant="outline" size="sm" className="w-full border-neura-purple/30 text-white hover:bg-neura-purple/20">
                Preview
              </Button>
            </div>
            
            <div className="bg-neura-purple/10 p-4 rounded-lg text-center">
              <h4 className="font-medium text-white mb-2">Art Gallery</h4>
              <p className="text-sm text-white/70 mb-3">Digital + physical art with provenance</p>
              <Button variant="outline" size="sm" className="w-full border-neura-purple/30 text-white hover:bg-neura-purple/20">
                Preview
              </Button>
            </div>
            
            <div className="bg-neura-purple/10 p-4 rounded-lg text-center">
              <h4 className="font-medium text-white mb-2">Tech Shop</h4>
              <p className="text-sm text-white/70 mb-3">Hardware with digital twin NFTs</p>
              <Button variant="outline" size="sm" className="w-full border-neura-purple/30 text-white hover:bg-neura-purple/20">
                Preview
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
