import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const products = [
  {
    name: 'Handcrafted Ceramic Set',
    creator: 'Maya Chen',
    badge: 'Hot Drop',
    raised: '$4,200',
    backers: '67 backers',
    mints: '34 mints',
    rating: '4.9',
    gradient: 'linear-gradient(135deg, #8B4513 0%, #D2691E 50%, #CD853F 100%)',
  },
  {
    name: 'NeuraTech Smart Hoodie',
    creator: 'Alex Rodriguez',
    badge: 'Physical + NFT',
    raised: '$12,800',
    backers: '189 backers',
    mints: '120 mints',
    rating: '4.8',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  },
  {
    name: 'SolarPulse Eco Gadget',
    creator: 'Priya Gupta',
    badge: 'Top Seller',
    raised: '$28,900',
    backers: '1,400 backers',
    mints: '890 mints',
    rating: '4.7',
    gradient: 'linear-gradient(135deg, #134e5e 0%, #71b280 50%, #2d6a4f 100%)',
  },
];

export default function InnovateFundSell() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="marketplace" className="bg-diminga-text py-20 scroll-mt-20">
      <div ref={ref} className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="font-dm-sans font-semibold text-[0.7rem] tracking-[0.06em] uppercase text-diminga-accent mb-3 block">
              Featured Campaigns
            </span>
            <h2 className="font-fraunces font-bold text-3xl md:text-4xl tracking-[-0.03em] text-white">
              Innovate. Fund. <span className="italic font-light text-diminga-accent">Sell.</span>
            </h2>
          </div>
          <Button
            variant="outline"
            className="hidden md:inline-flex border-white/15 text-white/70 hover:bg-white/10 font-dm-sans text-sm rounded-lg"
            asChild
          >
            <Link to="/commerce-studio">View all →</Link>
          </Button>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              className="rounded-2xl overflow-hidden transition-all hover:-translate-y-0.5"
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              {/* Image placeholder */}
              <div className="h-44 relative" style={{ background: p.gradient }}>
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-diminga-accent text-white text-[0.65rem] font-dm-sans font-semibold">
                  {p.badge}
                </span>
              </div>

              <div className="p-5">
                {/* Creator */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-full bg-white/10 grid place-items-center text-[0.55rem] text-white/70 font-semibold">
                    {p.creator.split(' ').map(w => w[0]).join('')}
                  </div>
                  <span className="font-dm-sans text-[0.7rem] text-white/50">{p.creator}</span>
                </div>

                <h3 className="font-fraunces font-bold text-lg text-white tracking-[-0.02em] mb-2">{p.name}</h3>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-2 mb-4 text-[0.7rem] font-dm-sans text-white/50">
                  <div><span className="text-diminga-accent font-semibold">{p.raised}</span> raised</div>
                  <div>{p.backers}</div>
                  <div>{p.mints}</div>
                  <div>★ {p.rating}</div>
                </div>

                <button className="w-full py-2.5 rounded-lg font-dm-sans text-sm font-medium transition-all border border-diminga-accent/40 text-diminga-accent hover:bg-diminga-accent hover:text-white">
                  Mint now →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
