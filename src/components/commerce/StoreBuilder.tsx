
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/services/auth';
import { 
  ShoppingCart, 
  Plus, 
  Settings, 
  Palette, 
  Package, 
  Zap,
  Globe,
  Shield,
  Star,
  Heart,
  Store
} from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  images: string[];
  category: string;
  tags: string[];
  is_physical: boolean;
  is_digital: boolean;
  status: string;
}

interface StoreConfig {
  name: string;
  description: string;
  theme: string;
  walletAddress: string;
  acceptedTokens: string[];
}

export const StoreBuilder: React.FC = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [storeConfig, setStoreConfig] = useState<StoreConfig>({
    name: '',
    description: '',
    theme: 'default',
    walletAddress: '',
    acceptedTokens: ['ETH', 'USDT', 'DAI']
  });
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('storefront');
  const [isCreatingProduct, setIsCreatingProduct] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: 0,
    category: '',
    is_physical: false,
    is_digital: true,
  });

  useEffect(() => {
    if (user) {
      fetchProducts();
    }
  }, [user]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('creator_id', user?.id)
        .eq('status', 'active')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast({
        title: "Error",
        description: "Failed to load products",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleBuyProduct = async (productId: string) => {
    try {
      if (!user) {
        toast({
          title: "Authentication required",
          description: "Please connect your wallet to make a purchase",
          variant: "destructive",
        });
        return;
      }

      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { productId, quantity: 1 }
      });

      if (error) throw error;

      if (data?.url) {
        // Open Stripe checkout in a new tab
        window.open(data.url, '_blank');
      }
    } catch (error) {
      console.error('Error creating checkout:', error);
      toast({
        title: "Error",
        description: "Failed to create checkout session",
        variant: "destructive",
      });
    }
  };

  const createProduct = async () => {
    try {
      if (!user) {
        toast({
          title: "Authentication required",
          description: "Please connect your wallet to create products",
          variant: "destructive",
        });
        return;
      }

      const { data, error } = await supabase
        .from('products')
        .insert([{
          ...newProduct,
          creator_id: user.id,
          currency: 'usd',
          images: [],
          tags: [],
          status: 'active'
        }])
        .select()
        .single();

      if (error) throw error;

      setProducts([data, ...products]);
      setNewProduct({
        name: '',
        description: '',
        price: 0,
        category: '',
        is_physical: false,
        is_digital: true,
      });
      setIsCreatingProduct(false);
      
      toast({
        title: "Success",
        description: "Product created successfully!",
      });
    } catch (error) {
      console.error('Error creating product:', error);
      toast({
        title: "Error",
        description: "Failed to create product",
        variant: "destructive",
      });
    }
  };

  const renderStorefront = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black p-6">
      <div className="max-w-7xl mx-auto">
        {/* Animated Store Title */}
        <div className="store-title">
          <span className="word">Web3</span>
          <span className="word">Store</span>
        </div>

        {loading ? (
          <div className="store-loading">
            <div className="spinner"></div>
          </div>
        ) : products.length === 0 ? (
          <div className="empty-store">
            <Store className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <h3>No products yet</h3>
            <p>Create your first product to start selling!</p>
            <Button 
              onClick={() => setActiveTab('products')}
              className="mt-4 bg-gradient-to-r from-cyan-400 to-purple-600 text-white hover:from-cyan-300 hover:to-purple-500"
            >
              Create Product
            </Button>
          </div>
        ) : (
          <div className="product-grid">
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className="product-card"
                style={{ '--index': index } as React.CSSProperties}
              >
                <div className="product-image">
                  <Package className="w-12 h-12 text-cyan-400" />
                </div>
                
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="product-price">
                    ${product.price.toFixed(2)} {product.currency.toUpperCase()}
                  </div>
                  
                  <div className="flex gap-2 mb-4">
                    {product.is_digital && (
                      <Badge variant="outline" className="text-cyan-400 border-cyan-400">
                        Digital
                      </Badge>
                    )}
                    {product.is_physical && (
                      <Badge variant="outline" className="text-purple-400 border-purple-400">
                        Physical
                      </Badge>
                    )}
                  </div>
                </div>

                <button 
                  className="buy-button"
                  onClick={() => handleBuyProduct(product.id)}
                >
                  Buy Now
                  <svg className="wobbly-spotlight" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="30" fill="rgba(0, 209, 255, 0.3)" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  const renderProductManagement = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Manage Products</h2>
        <Button 
          onClick={() => setIsCreatingProduct(true)}
          className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white hover:from-cyan-300 hover:to-purple-500"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </Button>
      </div>

      {isCreatingProduct && (
        <Card className="bg-slate-800/50 border-cyan-400/20">
          <CardHeader>
            <CardTitle className="text-cyan-400">Create New Product</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-white mb-2 block">Product Name</label>
                <Input
                  placeholder="Enter product name"
                  value={newProduct.name}
                  onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                  className="bg-slate-700 border-slate-600 text-white"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-white mb-2 block">Price (USD)</label>
                <Input
                  type="number"
                  placeholder="0.00"
                  value={newProduct.price}
                  onChange={(e) => setNewProduct({...newProduct, price: parseFloat(e.target.value) || 0})}
                  className="bg-slate-700 border-slate-600 text-white"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-white mb-2 block">Description</label>
              <Input
                placeholder="Describe your product"
                value={newProduct.description}
                onChange={(e) => setNewProduct({...newProduct, description: e.target.value})}
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div className="flex gap-4">
              <Button onClick={createProduct} className="bg-green-600 hover:bg-green-700">
                Create Product
              </Button>
              <Button onClick={() => setIsCreatingProduct(false)} variant="outline">
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4">
        {products.map((product) => (
          <Card key={product.id} className="bg-slate-800/50 border-slate-600">
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-white">{product.name}</h3>
                  <p className="text-gray-300">{product.description}</p>
                  <p className="text-cyan-400 font-bold">${product.price.toFixed(2)}</p>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline">Active</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const handleStoreConfigUpdate = (updates: Partial<StoreConfig>) => {
    setStoreConfig(prev => ({ ...prev, ...updates }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black">
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-white font-orbitron">Decentralized Store Builder</h1>
          <p className="text-gray-300">
            Create your Web3 storefront with NFT authentication and blockchain integration
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800/50">
            <TabsTrigger value="storefront" className="flex items-center gap-2 data-[state=active]:bg-cyan-600">
              <Globe className="w-4 h-4" />
              Storefront
            </TabsTrigger>
            <TabsTrigger value="products" className="flex items-center gap-2 data-[state=active]:bg-cyan-600">
              <Package className="w-4 h-4" />
              Products
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center gap-2 data-[state=active]:bg-cyan-600">
              <Zap className="w-4 h-4" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2 data-[state=active]:bg-cyan-600">
              <Settings className="w-4 h-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="storefront">
            {renderStorefront()}
          </TabsContent>

          <TabsContent value="products">
            {renderProductManagement()}
          </TabsContent>

          <TabsContent value="analytics">
            <Card className="bg-slate-800/50 border-cyan-400/20">
              <CardHeader>
                <CardTitle className="text-cyan-400">Store Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400">0</div>
                    <div className="text-gray-300">Total Sales</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">{products.length}</div>
                    <div className="text-gray-300">Products</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">$0.00</div>
                    <div className="text-gray-300">Revenue</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card className="bg-slate-800/50 border-cyan-400/20">
              <CardHeader>
                <CardTitle className="text-cyan-400">Store Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">Store Name</label>
                    <Input
                      placeholder="My Web3 Store"
                      value={storeConfig.name}
                      onChange={(e) => handleStoreConfigUpdate({ name: e.target.value })}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-white mb-2 block">Wallet Address</label>
                    <Input
                      placeholder="0x..."
                      value={storeConfig.walletAddress}
                      onChange={(e) => handleStoreConfigUpdate({ walletAddress: e.target.value })}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-white mb-2 block">Description</label>
                  <Input
                    placeholder="Describe your store..."
                    value={storeConfig.description}
                    onChange={(e) => handleStoreConfigUpdate({ description: e.target.value })}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="outline" className="text-cyan-400 border-cyan-400">ERC-721M Ready</Badge>
                  <Badge variant="outline" className="text-purple-400 border-purple-400">IPFS Integrated</Badge>
                  <Badge variant="outline" className="text-green-400 border-green-400">NFC Authentication</Badge>
                  <Badge variant="outline" className="text-yellow-400 border-yellow-400">Stripe Payments</Badge>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
