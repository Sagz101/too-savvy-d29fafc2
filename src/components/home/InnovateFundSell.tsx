import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

import productTokenizedArt from '@/assets/product-tokenized-art.jpg';
import productSmartMerch from '@/assets/product-smart-merch.jpg';
import productEcoGadget from '@/assets/product-eco-gadget.jpg';

interface ProductCard {
  id: string;
  name: string;
  emoji: string;
  gradient: string;
  badge: string;
  badgeColor: string;
  creator: { initials: string; handle: string; cls: string };
  description: string;
  raised: string;
  backers: string;
  mints: string;
  rating: string;
  isFromDb?: boolean;
}

const fallbackProducts: ProductCard[] = [
  {
    id: 'f1',
    name: 'Holographic Genesis Print',
    emoji: '🖼️',
    gradient: 'linear-gradient(135deg, #1a0533, #2d1050)',
    badge: '🔥 HOT DROP',
    badgeColor: 'text-amber-400',
    creator: { initials: 'MC', handle: '@mayacreates', cls: 'bg-indigo-500/20 text-indigo-400' },
    description: 'Limited-edition tokenized prints with on-chain provenance and redeemable physical art.',
    raised: '$4,800',
    backers: '220 backers',
    mints: '450 mints · 4.9★',
    rating: '4.9',
  },
  {
    id: 'f2',
    name: 'NeuraTech Smart Hoodie',
    emoji: '👕',
    gradient: 'linear-gradient(135deg, #001a2c, #003052)',
    badge: 'Physical + NFT',
    badgeColor: 'text-amber-400',
    creator: { initials: 'AR', handle: '@alexbuilds', cls: 'bg-cyan-500/20 text-cyan-400' },
    description: 'Smart merch with embedded NFC chip — scan to unlock exclusive NFT content and community perks.',
    raised: '$12,400',
    backers: '580 backers',
    mints: '1.2K mints · 4.8★',
    rating: '4.8',
  },
  {
    id: 'f3',
    name: 'SolarPulse Eco Charger',
    emoji: '⚡',
    gradient: 'linear-gradient(135deg, #0a1a0a, #1a3a1a)',
    badge: 'Top Seller',
    badgeColor: 'text-amber-400',
    creator: { initials: 'PS', handle: '@priyagreen', cls: 'bg-pink-500/20 text-pink-400' },
    description: 'Solar-powered portable charger funded by the community. Carbon-neutral, DAO-governed supply chain.',
    raised: '$28,900',
    backers: '1.4K backers',
    mints: '890 mints · 4.9★',
    rating: '4.9',
  },
];

const InnovateFundSell: React.FC = () => {
  const navigate = useNavigate();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const { data: dbProducts } = useQuery({
    queryKey: ['featured-products'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('status', 'active')
        .order('created_at', { ascending: false })
        .limit(3);
      if (error) throw error;
      return data;
    },
  });

  const products: ProductCard[] =
    dbProducts && dbProducts.length > 0
      ? dbProducts.map((p, i) => ({
          id: p.id,
          name: p.name,
          emoji: ['🖼️', '👕', '⚡'][i % 3],
          gradient: ['linear-gradient(135deg, #1a0533, #2d1050)', 'linear-gradient(135deg, #001a2c, #003052)', 'linear-gradient(135deg, #0a1a0a, #1a3a1a)'][i % 3],
          badge: p.is_physical ? 'Physical + NFT' : '🔥 HOT DROP',
          badgeColor: 'text-amber-400',
          creator: { initials: 'CR', handle: '@creator', cls: 'bg-indigo-500/20 text-indigo-400' },
          description: p.description || 'A unique product on Diminga.',
          raised: new Intl.NumberFormat('en-US', { style: 'currency', currency: p.currency || 'usd' }).format(p.price),
          backers: `${p.inventory_count || 0} backers`,
          mints: p.nft_token_id ? '1 mint' : '—',
          rating: '—',
          isFromDb: true,
        }))
      : fallbackProducts;

  return (
    <section ref={ref} className="relative z-[2] py-16 md:py-24 px-4 md:px-16">
      <div className="h-px mb-16 md:mb-24" style={{ background: 'rgba(255,255,255,0.06)' }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="font-space-mono text-[0.65rem] tracking-[0.15em] uppercase text-indigo-400 mb-4">
          // Live Campaigns
        </div>
        <h2 className="font-syne font-extrabold text-3xl md:text-5xl tracking-tight text-foreground leading-[1.05] mb-12">
          Backed by the<br /><em className="text-foreground/30 italic">community.</em>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {products.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="group rounded-2xl overflow-hidden cursor-pointer transition-all hover:-translate-y-1"
            style={{
              background: '#0d0d14',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
            onClick={() => navigate(p.isFromDb ? `/product/${p.id}` : '/commerce-studio')}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(99,102,241,0.3)';
              e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(99,102,241,0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Image area */}
            <div
              className="h-40 grid place-items-center text-4xl relative overflow-hidden"
              style={{ background: p.gradient }}
            >
              {p.emoji}
              <div
                className="absolute top-3 right-3 px-2.5 py-1 rounded-full font-space-mono text-[0.62rem]"
                style={{
                  background: 'rgba(0,0,0,0.6)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  color: '#f59e0b',
                }}
              >
                {p.badge}
              </div>
            </div>

            {/* Body */}
            <div className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-5 h-5 rounded-full grid place-items-center text-[0.6rem] font-bold ${p.creator.cls}`}>
                  {p.creator.initials}
                </div>
                <span className="font-space-mono text-xs text-muted-foreground">{p.creator.handle}</span>
              </div>

              <div className="font-syne font-bold text-base text-foreground mb-1.5 leading-snug">{p.name}</div>
              <div className="text-xs text-muted-foreground leading-relaxed mb-4">{p.description}</div>

              <div className="flex items-center justify-between pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <div>
                  <div className="font-syne font-bold text-lg text-foreground">{p.raised}</div>
                  <div className="text-[0.65rem] text-muted-foreground">raised</div>
                </div>
                <div className="text-right font-space-mono text-[0.7rem] text-muted-foreground leading-relaxed">
                  {p.backers}<br />{p.mints}
                </div>
              </div>

              <button
                className="w-full mt-3 py-2.5 rounded-lg font-syne font-semibold text-sm text-foreground flex items-center justify-center gap-1.5 transition-all hover:bg-indigo-500 hover:border-indigo-500"
                style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.06)' }}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(p.isFromDb ? `/product/${p.id}` : '/commerce-studio');
                }}
              >
                ⬡ View & Mint
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InnovateFundSell;
