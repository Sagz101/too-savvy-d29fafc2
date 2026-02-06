import React from 'react';
import { Award, TrendingUp, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface CreatorStoryProps {
  name: string;
  handle: string;
  role: string;
  earnings: string;
  quote: string;
  image: string;
  tools: string[];
  growth: string;
  headline: string;
  online?: boolean;
  index: number;
}

const CreatorCard: React.FC<CreatorStoryProps> = ({
  name,
  handle,
  role,
  earnings,
  quote,
  image,
  tools,
  growth,
  headline,
  online,
  index
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        scale: 1.02, 
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="glass-card gradient-border-animated backdrop-blur-xl bg-white/5 border-2 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-elevated-lg"
    >
      {/* Headline Banner */}
      <motion.div 
        className="bg-gradient-to-r from-indigo-500/15 to-purple-500/15 border border-indigo-500/30 rounded-xl p-3 mb-4 backdrop-blur-md"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: index * 0.2 + 0.2 }}
      >
        <p className="text-sm font-medium text-indigo-200 text-center">{headline}</p>
      </motion.div>

      {/* Creator Info */}
      <div className="flex items-center gap-4 mb-4">
        <motion.div 
          className="relative"
          whileHover={{ scale: 1.1 }}
        >
          <img 
            src={image} 
            alt={name}
            className="w-14 h-14 rounded-full ring-2 ring-indigo-500/30 object-cover"
          />
          {online && (
            <motion.div 
              className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          )}
        </motion.div>
        <div>
          <h4 className="text-lg font-bold text-white">{name}</h4>
          <p className="text-sm text-indigo-400">{handle}</p>
          <p className="text-xs text-gray-500">{role}</p>
        </div>
      </div>

      {/* Quote */}
      <motion.blockquote 
        className="text-gray-300 text-sm italic border-l-2 border-indigo-500 pl-4 mb-4"
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: index * 0.2 + 0.3 }}
      >
        "{quote}"
      </motion.blockquote>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <motion.div 
          className="glass-card backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-3 text-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-xl font-bold text-white">{earnings}</div>
          <div className="text-xs text-gray-300">Total Earnings</div>
        </motion.div>
        <motion.div 
          className="glass-card backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-3 text-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-xl font-bold text-green-300 flex items-center justify-center gap-1">
            <TrendingUp className="w-4 h-4" />
            {growth}
          </div>
          <div className="text-xs text-gray-300">Growth</div>
        </motion.div>
      </div>

      {/* Tools Used */}
      <div className="border-t border-white/10 pt-4 mb-4">
        <p className="text-sm font-medium text-gray-200 flex items-center gap-2 mb-2">
          <Award className="w-4 h-4 text-yellow-400" />
          Tools Used
        </p>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool, i) => (
            <motion.span 
              key={i}
              className="text-xs bg-white/10 backdrop-blur-md text-gray-200 px-3 py-1 rounded-full border border-white/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.2 + 0.4 + i * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <Button 
        variant="outline" 
        className="w-full border-gray-700 text-gray-300 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-colors"
      >
        <MessageCircle className="w-4 h-4 mr-2" />
        Message Creator
      </Button>
    </motion.div>
  );
};

export const SuccessStories: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const stories = [
    {
      name: 'Maya Chen',
      handle: '@mayacreates',
      role: 'Digital Artist',
      earnings: '$12,847',
      quote: "Diminga helped me turn my traditional art into a thriving NFT business, earning 300% more than my gallery sales.",
      image: 'https://placehold.co/100x100/312e81/ffffff?text=MC',
      tools: ['Video Studio', 'E-commerce', 'AI Copilot'],
      growth: '+325%',
      headline: "Maya Chen: 300% More Earnings vs. Gallery Sales",
      online: true
    },
    {
      name: 'Alex Rodriguez',
      handle: '@alexmusic',
      role: 'Music Producer',
      earnings: '$8,934',
      quote: "I built a global fanbase through tokenized music releases and interactive live streaming on Diminga.",
      image: 'https://placehold.co/100x100/5b21b6/ffffff?text=AR',
      tools: ['Music Creator', 'Social Hub', 'Threaditor'],
      growth: '+189%',
      headline: "Alex Rodriguez: Built Global Fanbase with Tokenized Music",
      online: false
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 relative overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient-animated opacity-20" />
      
      <motion.div 
        style={{ y }}
        className="absolute top-1/2 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl shadow-glow-primary" 
      />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div 
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center gap-3">
            <motion.span 
              className="text-yellow-300"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              ✨
            </motion.span>
            Creator Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl">
            Meet the creators who are redefining their careers and earnings on Diminga's decentralized network.
          </p>
        </motion.div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {stories.map((story, index) => (
            <CreatorCard key={index} {...story} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          ref={ctaRef}
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-4">Ready to write your own success story?</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-90 text-white font-semibold"
              asChild
            >
              <Link to="/studio">
                Begin Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
