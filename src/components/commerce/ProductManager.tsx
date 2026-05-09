
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Plus, 
  Package, 
  Upload, 
  Tag,
  Smartphone,
  Shield,
  Trash2
} from 'lucide-react';
import type { StoreConfig } from '@/types/commerce';

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'physical' | 'digital';
  nfcUuid?: string;
  ipfsUri?: string;
  image?: string;
  stock: number;
}

interface ProductManagerProps {
  storeConfig: StoreConfig;
}

export const ProductManager: React.FC<ProductManagerProps> = ({ storeConfig }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    category: 'physical',
    stock: 0
  });
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price) {
      const product: Product = {
        id: Date.now().toString(),
        name: newProduct.name,
        description: newProduct.description || '',
        price: newProduct.price,
        category: newProduct.category as 'physical' | 'digital',
        nfcUuid: newProduct.nfcUuid,
        ipfsUri: '',
        stock: newProduct.stock || 0
      };
      setProducts([...products, product]);
      setNewProduct({ category: 'physical', stock: 0 });
      setShowAddForm(false);
    }
  };

  const handleRemoveProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const generateNFCUuid = () => {
    const uuid = 'nfc_' + Math.random().toString(36).substr(2, 16);
    setNewProduct({ ...newProduct, nfcUuid: uuid });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Package className="w-5 h-5" />
            Product Catalog
          </CardTitle>
          <Button onClick={() => setShowAddForm(true)} className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Product
          </Button>
        </CardHeader>
        <CardContent>
          {products.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No products added yet. Create your first product to get started.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product) => (
                <Card key={product.id} className="relative">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">{product.name}</h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveProduct(product.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-bold">{product.price} ETH</span>
                      <Badge variant={product.category === 'physical' ? 'default' : 'secondary'}>
                        {product.category}
                      </Badge>
                    </div>
                    {product.nfcUuid && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Smartphone className="w-3 h-3" />
                        NFC: {product.nfcUuid.slice(0, 12)}...
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-sm mt-2">
                      <Shield className="w-3 h-3 text-green-500" />
                      <span>NFT Authentication Ready</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {showAddForm && (
        <Card>
          <CardHeader>
            <CardTitle>Add New Product</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Product Name</label>
                <Input
                  placeholder="Blue Jacket"
                  value={newProduct.name || ''}
                  onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Price (ETH)</label>
                <Input
                  placeholder="0.1"
                  type="number"
                  step="0.001"
                  value={newProduct.price || ''}
                  onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                />
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Description</label>
              <Textarea
                placeholder="Product description..."
                value={newProduct.description || ''}
                onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Category</label>
                <Select 
                  value={newProduct.category}
                  onValueChange={(value) => setNewProduct({ ...newProduct, category: value as 'physical' | 'digital' })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="physical">Physical Product</SelectItem>
                    <SelectItem value="digital">Digital Product</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Stock</label>
                <Input
                  type="number"
                  placeholder="100"
                  value={newProduct.stock || ''}
                  onChange={(e) => setNewProduct({ ...newProduct, stock: parseInt(e.target.value) || 0 })}
                />
              </div>

              {newProduct.category === 'physical' && (
                <div>
                  <label className="text-sm font-medium mb-2 block">NFC UUID</label>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Generated UUID"
                      value={newProduct.nfcUuid || ''}
                      onChange={(e) => setNewProduct({ ...newProduct, nfcUuid: e.target.value })}
                    />
                    <Button variant="outline" onClick={generateNFCUuid}>
                      <Tag className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-2">
              <Button onClick={handleAddProduct} className="flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add Product
              </Button>
              <Button variant="outline" onClick={() => setShowAddForm(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
