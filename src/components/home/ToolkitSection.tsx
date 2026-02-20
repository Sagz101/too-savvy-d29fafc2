import React, { useState } from 'react';
import { ShoppingBag, Video, Users, Music, Brain, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ToolkitItem {
  id: string;
  emoji: string;
  name: string;
  icon: React.ElementType;
  statValue: string;
  statLabel: string;
  description: string;
  route: string;
  category: 'popular' | 'new';
}

const toolkitItems: ToolkitItem[] = [
  {
    id: 'ecommerce',
    emoji: '🏪',
    name: 'E-commerce Store',
    icon: ShoppingBag,
    statValue: '$2,847',
    statLabel: 'Total Sales',
    description: 'Launch decentralized storefront in minutes • Zero fees',
    route: '/commerce-studio',
    category: 'popular',
  },
  {
    id: 'video',
    emoji: '▶️',
    name: 'Video Studio',
    icon: Video,
    statValue: '$2.1M',
    statLabel: 'Content Minted',
    description: 'Create, mint & monetize video on-chain',
    route: '/video-studio',
    category: 'popular',
  },
  {
    id: 'social',
    emoji: '💫',
    name: 'Social Hub',
    icon: Users,
    statValue: '421K+',
    statLabel: 'Interactions',
    description: 'Build your sovereign brand',
    route: '/neura-social',
    category: 'popular',
  },
  {
    id: 'music',
    emoji: '🎵',
    name: 'Music Creator',
    icon: Music,
    statValue: '$8,934',
    statLabel: 'Avg Monthly',
    description: 'Tokenized music releases',
    route: '/music-creation',
    category: 'popular',
  },
  {
    id: 'ai',
    emoji: '✨',
    name: 'AI Copilot',
    icon: Brain,
    statValue: 'Threaditor ✨',
    statLabel: '',
    description: '157K Newsletters',
    route: '/studio',
    category: 'new',
  },
  {
    id: 'threaditor',
    emoji: '📝',
    name: 'Threaditor',
    icon: FileText,
    statValue: '15.7K',
    statLabel: 'Active Newsletters',
    description: 'Decentralized blogging for passive income',
    route: '/threaditor',
    category: 'new',
  },
];

interface ToolkitCardProps {
  item: ToolkitItem;
  index: number;
}

const ToolkitCard: React.FC<ToolkitCardProps> = ({ item, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }}
      className="group relative rounded-2xl p-5 flex flex-col gap-3 cursor-pointer transition-all duration-300"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)',
        border: '1px solid rgba(255,255,255,0.08)',
        backdropFilter: 'blur(12px)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(192,132,252,0.3)';
        e.currentTarget.style.boxShadow = '0 8px 40px rgba(147, 51, 234, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Icon + Name row */}
      <div className="flex items-center gap-2">
        <span className="text-2xl">{item.emoji}</span>
        <h3 className="text-white font-semibold text-sm leading-tight">{item.name}</h3>
      </div>

      {/* Stat Value */}
      <div>
        <div className="text-xl font-bold text-white">
          {item.statValue}{' '}
          {item.statLabel && (
            <span className="text-sm font-normal text-gray-300">{item.statLabel}</span>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-xs text-gray-400 leading-relaxed flex-1">{item.description}</p>

      {/* Launch Button */}
      <Button
        size="sm"
        className="w-fit text-xs font-semibold text-white rounded-lg px-4 py-1.5 mt-1"
        style={{
          background: 'linear-gradient(135deg, #7c3aed, #6d28d9)',
          boxShadow: '0 2px 12px rgba(124, 58, 237, 0.4)',
        }}
        asChild
      >
        <Link to={item.route}>Launch App</Link>
      </Button>
    </motion.div>
  );
};

export const ToolkitSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'popular' | 'new'>('popular');
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const visibleItems = toolkitItems.filter(
    (item) => activeTab === 'popular' ? item.category === 'popular' : true
  );

  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0d001e 0%, #0a0018 50%, #0d001e 100%)' }}
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'linear-gradient(rgba(147,51,234,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(147,51,234,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header row */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white font-space">
            Creator Studio Toolkit
          </h2>

          {/* Tab pills */}
          <div
            className="flex items-center gap-1 p-1 rounded-full"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            {(['popular', 'new'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-4 py-1.5 rounded-full text-sm font-medium capitalize transition-all duration-300"
                style={
                  activeTab === tab
                    ? { background: 'rgba(255,255,255,0.15)', color: '#fff' }
                    : { color: 'rgba(255,255,255,0.5)' }
                }
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards grid - matches reference: 5 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {visibleItems.map((item, index) => (
            <ToolkitCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
