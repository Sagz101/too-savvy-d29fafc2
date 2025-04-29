
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { DollarSign, BarChart3, Clock, TrendingUp, TrendingDown } from 'lucide-react';
import { calculateDynamicPrice, DynamicPriceModel, subscribeToProductPricing } from '@/services/dynamic-pricing';
import { useWallet } from '@/services/wallet';

export const DynamicPricing: React.FC = () => {
  const { toast } = useToast();
  const { wallet } = useWallet();
  const [selectedProduct, setSelectedProduct] = useState('product-1');
  const [quantity, setQuantity] = useState(1);
  const [loyaltyTier, setLoyaltyTier] = useState(0);
  const [priceData, setPriceData] = useState<DynamicPriceModel | null>(null);
  const [priceHistory, setPriceHistory] = useState<number[]>([]);
  const [isLowPrice, setIsLowPrice] = useState(false);
  
  // Subscribe to price updates for the selected product
  useEffect(() => {
    const unsubscribe = subscribeToProductPricing(
      selectedProduct,
      (newPrice) => {
        setPriceData(newPrice);
        setPriceHistory(prev => {
          const newHistory = [...prev, newPrice.finalPrice];
          if (newHistory.length > 10) {
            return newHistory.slice(newHistory.length - 10);
          }
          return newHistory;
        });
        
        // Determine if current price is lower than average
        if (newHistory.length >= 3) {
          const average = newHistory.reduce((a, b) => a + b, 0) / newHistory.length;
          setIsLowPrice(newPrice.finalPrice < average);
        }
      },
      5000 // Update every 5 seconds for demo purposes
    );
    
    return () => unsubscribe();
  }, [selectedProduct]);
  
  // When loyalty tier or quantity changes, recalculate price
  useEffect(() => {
    if (selectedProduct) {
      calculateDynamicPrice({ 
        productId: selectedProduct, 
        userWallet: wallet.address || undefined,
        loyaltyTier, 
        quantity 
      }).then(setPriceData);
    }
  }, [loyaltyTier, quantity, selectedProduct, wallet.address]);
  
  const handleBuy = () => {
    if (!wallet.isConnected) {
      toast({
        title: "Wallet not connected",
        description: "Please connect your wallet to make a purchase",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Processing purchase",
      description: `Purchasing at ${priceData?.finalPrice} ETH. Please confirm in your wallet.`
    });
    
    // This would be replaced with actual purchase logic
    setTimeout(() => {
      toast({
        title: "Purchase successful!",
        description: "Your transaction has been confirmed."
      });
    }, 2000);
  };
  
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-xl font-semibold mb-2">Dynamic Oracle-Based Pricing</h2>
        <p className="text-white/70">
          Products are priced dynamically based on demand, supply, and market conditions
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-neura-dark/50 border-neura-purple/20 md:col-span-2">
          <CardContent className="p-5">
            <h3 className="font-medium mb-3">Real-Time Price Simulation</h3>
            
            <div className="mb-6 bg-neura-dark/30 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <Badge className={`${isLowPrice ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'}`}>
                    {isLowPrice ? 'Price Below Average' : 'Normal Price Range'}
                  </Badge>
                </div>
                <div className="flex items-center gap-1 text-white/70 text-xs">
                  <Clock className="w-3 h-3" />
                  <span>Updates every 5s</span>
                </div>
              </div>
              
              <div className="relative h-40 border-b border-neura-purple/20 mb-4">
                {priceHistory.length > 1 && (
                  <div className="absolute inset-0 flex items-end">
                    {priceHistory.map((price, index) => {
                      const normPrice = price * 200; // Scale for visualization
                      const prevPrice = index > 0 ? priceHistory[index - 1] : price;
                      const isIncreasing = price >= prevPrice;
                      
                      return (
                        <div 
                          key={index} 
                          className={`flex-1 h-[${normPrice}px] min-h-[10px] max-h-[90%] ${isIncreasing ? 'bg-neura-cyan/40' : 'bg-neura-purple/40'} rounded-t-sm mx-0.5`}
                          style={{ height: `${Math.max(10, normPrice)}px` }}
                        />
                      );
                    })}
                  </div>
                )}
              </div>
              
              {priceData && (
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-xs text-white/60">Base Price</p>
                    <p className="font-medium">{priceData.basePrice.toFixed(4)} ETH</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/60">Demand Factor</p>
                    <div className="flex items-center justify-center gap-1">
                      {priceData.demandMultiplier > 1 ? (
                        <TrendingUp className="w-3 h-3 text-amber-400" />
                      ) : (
                        <TrendingDown className="w-3 h-3 text-emerald-400" />
                      )}
                      <p className="font-medium">{priceData.demandMultiplier.toFixed(2)}x</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-white/60">Loyalty Discount</p>
                    <p className="font-medium">{(priceData.loyaltyDiscount * 100).toFixed(0)}%</p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-white/70 text-sm mb-1">Product</label>
                <select 
                  className="w-full bg-neura-dark/80 border-neura-purple/30 rounded-md p-2 text-white"
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                >
                  <option value="product-1">NFT-Backed Hoodie</option>
                  <option value="product-2">AR Headset</option>
                  <option value="product-3">Digital-Physical Book</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white/70 text-sm mb-1">Quantity</label>
                <Input
                  type="number"
                  min={1}
                  max={10}
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="bg-neura-dark/80 border-neura-purple/30 text-white"
                />
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-white/70">Final Price:</p>
                <p className="text-2xl font-bold">{priceData?.finalPrice.toFixed(4)} ETH</p>
                {priceData?.loyaltyDiscount > 0 && (
                  <p className="text-xs text-emerald-400">
                    Includes {(priceData.loyaltyDiscount * 100).toFixed(0)}% loyalty discount
                  </p>
                )}
              </div>
              
              <Button 
                className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
                onClick={handleBuy}
              >
                <DollarSign className="w-4 h-4 mr-2" /> Buy Now
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-neura-dark/50 border-neura-purple/20">
          <CardContent className="p-5">
            <h3 className="font-medium mb-3">Pricing Factors</h3>
            
            <div className="space-y-4">
              <div className="bg-neura-purple/10 p-3 rounded-lg">
                <h4 className="font-medium text-sm flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-neura-cyan" />
                  Market Demand
                </h4>
                <p className="text-xs text-white/70 mt-1">
                  Prices adjust based on real-time demand metrics pulled from Chainlink oracles
                </p>
              </div>
              
              <div className="bg-neura-purple/10 p-3 rounded-lg">
                <h4 className="font-medium text-sm flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-neura-cyan" />
                  ETH Price Pegging
                </h4>
                <p className="text-xs text-white/70 mt-1">
                  Prices are pegged to USD value to maintain stability despite ETH volatility
                </p>
              </div>
              
              <div className="bg-neura-purple/10 p-3 rounded-lg">
                <h4 className="font-medium text-sm flex items-center gap-2">
                  <Award className="w-4 h-4 text-neura-cyan" />
                  Loyalty Tiers
                </h4>
                <p className="text-xs text-white/70 mt-1">
                  Higher loyalty tiers receive automatic discounts on all purchases
                </p>
                
                <div className="mt-3 grid grid-cols-5 gap-1">
                  {[0, 1, 2, 3, 4].map((tier) => (
                    <Button
                      key={tier}
                      variant="outline"
                      size="sm"
                      className={`p-1 h-8 ${tier === loyaltyTier ? 'bg-neura-purple/20 border-neura-cyan' : 'border-neura-purple/30'}`}
                      onClick={() => setLoyaltyTier(tier)}
                    >
                      {tier}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
