import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import {
  ArrowLeft, Link2, Shield, Zap, ExternalLink, Heart,
  Package, Tag, DollarSign, Layers
} from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: product, isLoading, error } = useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id!)
        .single();
      if (error) throw error;
      return data;
    },
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <main className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Skeleton className="h-8 w-32 mb-8" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <Skeleton className="aspect-square rounded-2xl" />
            <div className="space-y-4">
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-6 w-1/3" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-12 w-full" />
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (error || !product) {
    return (
      <main className="min-h-screen pt-24 pb-16 px-4 flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold text-foreground">Product not found</h1>
        <p className="text-muted-foreground">This product may have been removed or doesn't exist.</p>
        <Button variant="outline" onClick={() => navigate('/')}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </main>
    );
  }

  const heroImage = product.images?.[0] || '/placeholder.svg';
  const price = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: product.currency || 'usd',
  }).format(product.price);

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Image gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="relative aspect-square rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, hsl(var(--cosmic-surface) / 0.8), hsl(var(--cosmic-dark) / 0.6))',
                border: '1px solid hsl(var(--glass-border))',
              }}
            >
              <img
                src={heroImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {/* Web3 badges */}
              <div className="absolute top-4 right-4 flex gap-2">
                {product.nft_token_id && (
                  <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center border border-white/10" title="NFT Linked">
                    <Link2 className="w-4 h-4 text-accent" />
                  </div>
                )}
                <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center border border-white/10" title="Zero fees">
                  <Zap className="w-4 h-4 text-secondary" />
                </div>
                <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center border border-white/10" title="Secured">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
              </div>
            </div>

            {/* Thumbnail strip */}
            {product.images && product.images.length > 1 && (
              <div className="flex gap-2 mt-3 overflow-x-auto">
                {product.images.map((img: string, i: number) => (
                  <div
                    key={i}
                    className="w-16 h-16 rounded-lg overflow-hidden border border-border/50 shrink-0"
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground leading-tight">
                {product.name}
              </h1>
              <p className="text-3xl font-bold mt-3 bg-gradient-to-r from-accent to-cyan-400 bg-clip-text text-transparent">
                {price}
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {product.category && (
                <Badge variant="outline" className="border-primary/40 text-primary">
                  <Tag className="w-3 h-3 mr-1" />
                  {product.category}
                </Badge>
              )}
              {product.is_digital && (
                <Badge variant="outline" className="border-accent/40 text-accent">
                  <Layers className="w-3 h-3 mr-1" />
                  Digital
                </Badge>
              )}
              {product.is_physical && (
                <Badge variant="outline" className="border-secondary/40 text-secondary">
                  <Package className="w-3 h-3 mr-1" />
                  Physical
                </Badge>
              )}
              {product.nft_token_id && (
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                  <Link2 className="w-3 h-3 mr-1" />
                  NFT Linked
                </Badge>
              )}
            </div>

            {/* Description */}
            {product.description && (
              <p className="text-muted-foreground leading-relaxed text-base">
                {product.description}
              </p>
            )}

            {/* Tags */}
            {product.tags && product.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {product.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full text-xs bg-muted text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Inventory */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              {product.is_unlimited ? (
                <span className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-accent" />
                  Unlimited supply
                </span>
              ) : (
                <span className="flex items-center gap-1.5">
                  <Package className="w-4 h-4 text-secondary" />
                  {product.inventory_count} remaining
                </span>
              )}
              <span className="text-border">|</span>
              <span className="flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-accent" />
                Zero platform fees
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 pt-2">
              <Button
                size="lg"
                className="flex-1 bg-gradient-to-r from-accent to-cyan-400 text-black font-bold hover:shadow-lg hover:shadow-accent/30 transition-all"
                onClick={() => navigate('/commerce-studio')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Buy Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="flex-1 border-primary/40 text-primary hover:bg-primary/10 hover:border-primary/60 transition-all"
              >
                <Heart className="w-4 h-4 mr-2" />
                Support Creator
              </Button>
            </div>

            {/* On-chain transparency */}
            <div
              className="rounded-xl p-4 text-sm text-muted-foreground space-y-2"
              style={{
                background: 'hsl(var(--cosmic-surface) / 0.5)',
                border: '1px solid hsl(var(--glass-border))',
              }}
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-secondary" />
                <span>All sales verifiable on-chain</span>
              </div>
              <div className="flex items-center gap-2">
                <Link2 className="w-4 h-4 text-primary" />
                <span>Create. Own. Thrive.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
