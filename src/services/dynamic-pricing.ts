
import { toast } from "sonner";

export interface DynamicPriceModel {
  basePrice: number; // in ETH
  demandMultiplier: number;
  loyaltyDiscount: number;
  finalPrice: number; // in ETH
}

export interface PricingParams {
  productId: string;
  userWallet?: string;
  loyaltyTier?: number;
  quantity?: number;
}

// Simulates a call to a price oracle like Chainlink
const fetchPriceData = async (productId: string): Promise<any> => {
  // In a real implementation, this would fetch data from a blockchain oracle
  // For demo purposes, we'll simulate the response
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        basePrice: Math.random() * 0.5 + 0.01, // Random price between 0.01 and 0.51 ETH
        demandFactor: Math.random() * 0.4 + 0.8, // Random factor between 0.8 and 1.2
        marketVolatility: Math.random() * 0.1, // Random volatility between 0 and 0.1
      });
    }, 500);
  });
};

// Get loyalty discount based on user's tier
const getLoyaltyDiscount = (loyaltyTier: number = 0): number => {
  // Discounts increase with higher loyalty tiers
  const discounts = [0, 0.05, 0.1, 0.15, 0.2];
  return discounts[Math.min(loyaltyTier, discounts.length - 1)];
};

// Calculate dynamic price based on various factors
export const calculateDynamicPrice = async (params: PricingParams): Promise<DynamicPriceModel> => {
  try {
    const { productId, userWallet, loyaltyTier = 0, quantity = 1 } = params;
    
    // Fetch price data from oracle
    const priceData = await fetchPriceData(productId);
    
    // Calculate demand multiplier
    const demandMultiplier = priceData.demandFactor + priceData.marketVolatility;
    
    // Calculate loyalty discount
    const loyaltyDiscount = getLoyaltyDiscount(loyaltyTier);
    
    // Calculate final price
    const basePrice = priceData.basePrice;
    const priceWithDemand = basePrice * demandMultiplier;
    const finalPrice = priceWithDemand * (1 - loyaltyDiscount) * quantity;
    
    return {
      basePrice,
      demandMultiplier,
      loyaltyDiscount,
      finalPrice: parseFloat(finalPrice.toFixed(4))
    };
  } catch (error) {
    console.error("Error calculating dynamic price:", error);
    toast.error("Pricing Error", {
      description: "Failed to fetch dynamic pricing. Using default price."
    });
    
    // Return fallback pricing if oracle call fails
    return {
      basePrice: 0.1,
      demandMultiplier: 1,
      loyaltyDiscount: 0,
      finalPrice: 0.1
    };
  }
};

// Simulate a pricing update with a subscription model
export const subscribeToProductPricing = (
  productId: string, 
  onPriceUpdate: (price: DynamicPriceModel) => void,
  intervalMs: number = 30000 // Default: update every 30 seconds
): () => void => {
  // Immediately get initial price
  calculateDynamicPrice({ productId }).then(onPriceUpdate);
  
  // Set up interval for regular price updates
  const intervalId = setInterval(() => {
    calculateDynamicPrice({ productId }).then(onPriceUpdate);
  }, intervalMs);
  
  // Return unsubscribe function
  return () => clearInterval(intervalId);
};
