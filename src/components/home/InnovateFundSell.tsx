import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Link2, Shield, Users, Star, TrendingUp, Zap, ChevronLeft, ChevronRight,
  Flame, Award, Vote, ExternalLink, Heart, Wallet
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

import productTokenizedArt from '@/assets/product-tokenized-art.jpg';
import productSmartMerch from '@/assets/product-smart-merch.jpg';
import productEcoGadget from '@/assets/product-eco-gadget.jpg';
import productVinylToken from '@/assets/product-vinyl-token.jpg';
import productDigitalSculpture from '@/assets/product-digital-sculpture.jpg';
import productArtisanCeramic from '@/assets/product-artisan-ceramic.jpg';

interface ProductCard {
  id: string;
  name: string;
  image: string;
  badge: { label: string; icon: React.ReactNode; color: string };
  creator: { name: string; handle: string; avatar: string };
  description: string;
  stats: { raised: string; backers: string; mints: string; rating: string };
}

const products: ProductCard[] = [
  {
    id: '1',
    name: 'Holographic Genesis Print',
    image: productTokenizedArt,
    badge: { label: 'New 🔥', icon: <Flame className="w-3 h-3" />, color: 'from-orange-500 to-red-500' },
    creator: { name: 'Maya Chen', handle: '@mayacreates', avatar: 'MC' },
    description: 'Limited-edition tokenized prints with on-chain provenance and redeemable physical art.',
    stats: { raised: '$4,800', backers: '220', mints: '450', rating: '4.9' },
  },
  {
    id: '2',
    name: 'NeuraTech Smart Hoodie',
    image: productSmartMerch,
    badge: { label: 'Physical + NFT', icon: <Link2 className="w-3 h-3" />, color: 'from-cyan-500 to-blue-500' },
    creator: { name: 'Alex Rivera', handle: '@alexbuilds', avatar: 'AR' },
    description: 'Smart merch with embedded NFC chip — scan to unlock exclusive NFT content and community perks.',
    stats: { raised: '$12,400', backers: '580', mints: '1.2K', rating: '4.8' },
  },
  {
    id: '3',
    name: 'SolarPulse Eco Charger',
    image: productEcoGadget,
    badge: { label: 'Top Seller', icon: <Award className="w-3 h-3" />, color: 'from-green-500 to-emerald-500' },
    creator: { name: 'Priya Sharma', handle: '@priyagreen', avatar: 'PS' },
    description: 'Solar-powered portable charger funded by the community. Carbon-neutral, DAO-governed supply chain.',
    stats: { raised: '$28,900', backers: '1.4K', mints: '890', rating: '4.9' },
  },
  {
    id: '4',
    name: 'Resonance Vinyl + Fan Token',
    image: productVinylToken,
    badge: { label: 'DAO-Voted', icon: <Vote className="w-3 h-3" />, color: 'from-purple-500 to-pink-500' },
    creator: { name: 'DJ Lumina', handle: '@djlumina', avatar: 'DL' },
    description: 'Collector vinyl bundle with fan governance token — vote on setlists, get backstage passes.',
    stats: { raised: '$8,200', backers: '340', mints: '670', rating: '4.7' },
  },
  {
    id: '5',
    name: 'Prismatic Crystal NFT',
    image: productDigitalSculpture,
    badge: { label: 'New 🔥', icon: <Flame className="w-3 h-3" />, color: 'from-orange-500 to-red-500' },
    creator: { name: 'Kai Nomura', handle: '@kaidigital', avatar: 'KN' },
    description: 'Generative 3D sculpture with real-time blockchain data visualization. Each piece is unique.',
    stats: { raised: '$6,100', backers: '190', mints: '320', rating: '4.8' },
  },
  {
    id: '6',
    name: 'AR Artisan Ceramic Mug',
    image: productArtisanCeramic,
    badge: { label: 'Physical + NFT', icon: <Link2 className="w-3 h-3" />, color: 'from-cyan-500 to-blue-500' },
    creator: { name: 'Sofia Moreno', handle: '@sofiacrafts', avatar: 'SM' },
    description: 'Handcrafted ceramic with AR-enabled QR — scan to view the creation process and artist story.',
    stats: { raised: '$3,600', backers: '150', mints: '280', rating: '4.9' },
  },
];

const StatIcon = ({ icon: Icon, value, label }: { icon: React.ElementType; value: string; label: string }) => (
  <div className="flex items-center gap-1.5 text-xs">
    <Icon className="w-3.5 h-3.5 text-accent" />
    <span className="font-semibold text-foreground/90">{value}</span>
    <span className="text-muted-foreground hidden sm:inline">{label}</span>
  </div>
);

const ProductShowcaseCard = ({ product, index }: { product: ProductCard; index: number }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative rounded-2xl overflow-hidden"
      style={{
        background: 'linear-gradient(145deg, hsl(var(--cosmic-surface) / 0.8), hsl(var(--cosmic-dark) / 0.6))',
        border: '1px solid hsl(var(--glass-border))',
        backdropFilter: 'blur(20px)',
      }}
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Badge */}
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold text-white bg-gradient-to-r ${product.badge.color} shadow-lg`}>
            {product.badge.icon}
            {product.badge.label}
          </span>
        </div>

        {/* Web3 trust icons */}
        <div className="absolute top-3 right-3 flex gap-1.5">
          <div className="w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/10" title="On-chain verified">
            <Link2 className="w-3.5 h-3.5 text-accent" />
          </div>
          <div className="w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/10" title="Zero fees">
            <Zap className="w-3.5 h-3.5 text-secondary" />
          </div>
          <div className="w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center border border-white/10" title="Multi-sig secured">
            <Shield className="w-3.5 h-3.5 text-primary" />
          </div>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ boxShadow: 'inset 0 0 60px hsl(var(--web3-cyan) / 0.15)' }}
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3.5">
        {/* Creator */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-[11px] font-bold text-white shrink-0">
            {product.creator.avatar}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-foreground truncate">{product.creator.name}</p>
            <p className="text-xs text-muted-foreground">{product.creator.handle}</p>
          </div>
        </div>

        {/* Product name */}
        <h3 className="text-lg font-bold text-foreground leading-tight">{product.name}</h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{product.description}</p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <StatIcon icon={TrendingUp} value={product.stats.raised} label="Raised" />
          <StatIcon icon={Users} value={product.stats.backers} label="Backers" />
          <StatIcon icon={Zap} value={product.stats.mints} label="Mints" />
          <StatIcon icon={Star} value={product.stats.rating} label="Rating" />
        </div>

        {/* Buttons */}
        <div className="flex gap-2.5 pt-2">
          <Button
            size="sm"
            className="flex-1 bg-gradient-to-r from-accent to-cyan-400 text-black font-bold hover:shadow-lg hover:shadow-accent/30 transition-all text-xs"
            onClick={() => navigate('/store')}
          >
            <ExternalLink className="w-3.5 h-3.5 mr-1" />
            View & Mint
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="flex-1 border-primary/40 text-primary hover:bg-primary/10 hover:border-primary/60 transition-all text-xs"
            onClick={() => navigate('/store')}
          >
            <Heart className="w-3.5 h-3.5 mr-1" />
            Support Creator
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const InnovateFundSell: React.FC = () => {
  const navigate = useNavigate();
  const [carouselStart, setCarouselStart] = useState(0);
  const visibleCount = 3;
  const maxStart = Math.max(0, products.length - visibleCount);

  const handlePrev = () => setCarouselStart((s) => Math.max(0, s - 1));
  const handleNext = () => setCarouselStart((s) => Math.min(maxStart, s + 1));

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, hsl(var(--web3-cyan)), transparent 70%)' }}
        />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, hsl(var(--web3-purple)), transparent 70%)' }}
        />
        {/* Chain pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 80px, hsl(var(--web3-cyan)) 80px, hsl(var(--web3-cyan)) 81px),
                              repeating-linear-gradient(0deg, transparent, transparent 80px, hsl(var(--web3-purple)) 80px, hsl(var(--web3-purple)) 81px)`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            <span className="bg-gradient-to-r from-accent via-primary to-pink-500 bg-clip-text text-transparent">
              Innovate.
            </span>{' '}
            <span className="bg-gradient-to-r from-primary via-purple-400 to-accent bg-clip-text text-transparent">
              Fund.
            </span>{' '}
            <span className="bg-gradient-to-r from-secondary via-emerald-400 to-accent bg-clip-text text-transparent">
              Sell.
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
            Discover groundbreaking products from sovereign creators — crowdfunded, tokenized, and sold directly on Diminga.{' '}
            <span className="text-foreground font-medium">Zero fees, full ownership, community-backed.</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent to-cyan-400 text-black font-bold px-8 py-3 text-base hover:shadow-xl hover:shadow-accent/25 transition-all"
              onClick={() => navigate('/store')}
            >
              Explore All Products
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary px-8 py-3 text-base transition-all"
              onClick={() => navigate('/creator-studio')}
            >
              Launch Your Campaign
            </Button>
          </div>
        </motion.div>

        {/* On-chain transparency bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-6 mb-12 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-secondary" />
            <span>All sales verifiable on-chain</span>
          </div>
          <span className="hidden sm:inline text-border">|</span>
          <div className="hidden sm:flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-accent" />
            <span>Zero platform fees</span>
          </div>
          <span className="hidden md:inline text-border">|</span>
          <div className="hidden md:flex items-center gap-1.5">
            <Link2 className="w-4 h-4 text-primary" />
            <span>Create. Own. Thrive.</span>
          </div>
        </motion.div>

        {/* Desktop carousel controls */}
        <div className="hidden lg:flex items-center justify-end gap-2 mb-6">
          <button
            onClick={handlePrev}
            disabled={carouselStart === 0}
            className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/50 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            disabled={carouselStart >= maxStart}
            className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-accent/50 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Product Grid — desktop: carousel of 3, tablet: 2, mobile: 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Mobile/Tablet: show all */}
          <div className="contents lg:hidden">
            {products.map((product, i) => (
              <ProductShowcaseCard key={product.id} product={product} index={i} />
            ))}
          </div>

          {/* Desktop: show carousel window */}
          <div className="hidden lg:contents">
            {products.slice(carouselStart, carouselStart + visibleCount).map((product, i) => (
              <ProductShowcaseCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>

        {/* Carousel dots (desktop) */}
        <div className="hidden lg:flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxStart + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCarouselStart(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === carouselStart
                  ? 'w-6 bg-accent'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 md:mt-20 relative rounded-2xl overflow-hidden p-8 md:p-12 text-center"
          style={{
            background: 'linear-gradient(135deg, hsl(var(--cosmic-surface) / 0.9), hsl(var(--cosmic-dark) / 0.7))',
            border: '1px solid hsl(var(--glass-border))',
            backdropFilter: 'blur(20px)',
          }}
        >
          {/* CTA glow */}
          <div className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              background: 'radial-gradient(ellipse at center, hsl(var(--web3-cyan) / 0.3), transparent 70%)',
            }}
          />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Ready to showcase your innovation?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Start creating for free. Launch campaigns, tokenize your products, and connect with a global community of backers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent to-cyan-400 text-black font-bold px-10 py-3 text-base hover:shadow-xl hover:shadow-accent/25 transition-all"
                onClick={() => navigate('/creator-studio')}
              >
                <Zap className="w-5 h-5 mr-2" />
                Launch App
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary px-10 py-3 text-base transition-all"
                onClick={() => navigate('/onboarding')}
              >
                <Wallet className="w-5 h-5 mr-2" />
                Connect Wallet
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InnovateFundSell;
