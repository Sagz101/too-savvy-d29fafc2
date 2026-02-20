import React from 'react';
import { ArrowRight, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Floating emoji icons matching reference image
const floatingIcons = [
  { emoji: '🖼️', label: 'NFT', className: 'top-24 left-[8%] text-5xl', delay: 0, duration: 6 },
  { emoji: '▶️', label: 'Video', className: 'top-1/2 left-[5%] text-5xl', delay: 1.5, duration: 7 },
  { emoji: '🎵', label: 'Music', className: 'bottom-32 left-[12%] text-4xl', delay: 0.8, duration: 8 },
  { emoji: '🎵', label: 'Music2', className: 'top-36 right-[8%] text-4xl', delay: 2, duration: 6.5 },
  { emoji: '👜', label: 'Wallet', className: 'bottom-28 right-[6%] text-5xl', delay: 0.5, duration: 7.5 },
  { emoji: '🎶', label: 'Notes', className: 'top-1/2 right-[10%] text-3xl', delay: 1.2, duration: 9 },
];

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" 
      style={{ background: 'radial-gradient(ellipse at 50% 60%, #1a0a3e 0%, #0d0020 40%, #060010 100%)' }}>
      
      {/* Deep cosmic background stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              opacity: Math.random() * 0.6 + 0.1,
              animation: `cosmic-pulse ${Math.random() * 4 + 3}s ease-in-out infinite`,
              animationDelay: Math.random() * 3 + 's',
            }}
          />
        ))}
      </div>

      {/* Nebula glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15"
        style={{ background: 'radial-gradient(circle, #a855f7, transparent)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-3xl opacity-10"
        style={{ background: 'radial-gradient(ellipse, #6d28d9, transparent)' }} />

      {/* Floating decorative icons */}
      {floatingIcons.map((icon) => (
        <motion.div
          key={icon.label}
          className={`absolute ${icon.className} select-none pointer-events-none hidden lg:block`}
          animate={{ 
            y: [0, -18, 0],
            rotate: [0, 3, -3, 0],
          }}
          transition={{ 
            duration: icon.duration,
            delay: icon.delay,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          style={{ filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.5))' }}
        >
          {icon.emoji}
        </motion.div>
      ))}

      {/* Main Content - Centered */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Main Headline */}
        <motion.h1 
          className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight tracking-tight font-space"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Create. Own. Thrive.
        </motion.h1>

        {/* Sub-headline in cyan/teal gradient */}
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            background: 'linear-gradient(135deg, #38bdf8, #22d3ee, #67e8f9)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          The Sovereign Web3 Platform
        </motion.h2>

        {/* Body text */}
        <motion.p 
          className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Your decentralized home for creation, commerce, community &amp; crypto.<br />
          Zero platform fees. Full ownership. DAO-governed.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button 
            size="lg"
            className="relative px-8 py-6 text-base font-semibold text-white rounded-xl overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #f472b6, #c084fc, #818cf8)',
              boxShadow: '0 4px 30px rgba(196, 132, 252, 0.4)',
            }}
            asChild
          >
            <Link to="/studio">
              Start Creating for Free
              <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300 rounded-xl" />
            </Link>
          </Button>

          <Button 
            size="lg"
            variant="outline"
            className="px-8 py-6 text-base font-semibold text-white rounded-xl border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}
            asChild
          >
            <Link to="/finance-hub">
              <Wallet className="mr-2 w-5 h-5" />
              Connect Your Wallet
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};
