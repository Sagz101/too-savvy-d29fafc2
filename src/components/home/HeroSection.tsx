import React from 'react';
import { ArrowRight, Zap, ShoppingBag, Video, Users, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

export const HeroSection: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  const quickStats = [
    { value: '$2,847', label: 'E-commerce Store', icon: ShoppingBag },
    { value: '$2.1M', label: 'Video Studio', icon: Video },
    { value: '847', label: 'Social Earnings', icon: Users },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 overflow-hidden aurora-bg">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient-animated opacity-40" />
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Parallax Gradient orbs with glow */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-20 left-10 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl shadow-glow-primary" 
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl shadow-elevated-lg" 
      />

      <motion.div 
        style={{ opacity }}
        className="relative container mx-auto px-4 pt-24 pb-16"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Hero Content */}
          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20"
            >
              <Zap className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-medium text-indigo-300">Web3 Creator Sovereign Hub</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  Create. Own. Thrive.
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
                The Sovereign Web3 Platform
              </h2>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="bg-indigo-500 hover:bg-indigo-400 text-white font-semibold px-8 py-6 text-base shadow-xl shadow-indigo-500/25 transition-all duration-300 hover:shadow-indigo-500/40 hover:scale-105"
                asChild
              >
                <Link to="/studio">
                  Start Creating for Free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-gray-700 text-gray-300 hover:bg-gray-800/50 hover:text-white px-8 py-6 text-base"
                asChild
              >
                <Link to="/commerce-studio">
                  Explore Marketplace
                </Link>
              </Button>
            </motion.div>

            {/* E-commerce Store Card */}
            <motion.div 
              variants={cardVariants}
              className="glass-card border-2 gradient-border-animated p-6 space-y-4 mt-8 backdrop-blur-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-glow-primary">
                  <ShoppingBag className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">E-commerce Store:</h3>
                  <p className="text-sm text-gray-300">Launch & Grow Your Marketplace</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-400">
                Your decentralized storefront with CertiK-audited security. 
                Zero platform fees, multi-chain support, built for creators.
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">$21,000+</div>
                  <div className="text-sm text-gray-500">Total Transaction Volume</div>
                </div>
                <Button size="sm" className="bg-indigo-500 hover:bg-indigo-400 shadow-glow-primary" asChild>
                  <Link to="/commerce-studio">Start</Link>
                </Button>
              </div>

              {/* Wallet Connect */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <Wallet className="w-4 h-4" />
                  <span>Connect Your Wallet</span>
                </div>
              </div>
            </motion.div>

            {/* Bottom Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-4">
                <div className="text-2xl font-bold text-white">$847</div>
                <div className="text-sm text-gray-500">Avg. Creator Earnings</div>
              </div>
              <div className="bg-gray-900/40 border border-gray-800 rounded-xl p-4">
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-sm text-gray-500">Platform Uptime</div>
              </div>
            </motion.div>

            <motion.p variants={itemVariants} className="text-sm text-gray-500">
              Create challenges, build your audience, and grow your Web3 
              brand with collaborative tools designed for creators.
            </motion.p>
          </motion.div>

          {/* Right Column - Feature Cards */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Choose Your Creator Section */}
            <motion.div 
              className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6"
              whileHover={{ scale: 1.02, borderColor: 'rgba(99, 102, 241, 0.3)' }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold text-white mb-2">Choose Your Creator Path</h3>
              <p className="text-sm text-gray-400 mb-6">Complete challenges that grow with your journey. Select what you need, when you need it.</p>
              
              <div className="grid grid-cols-3 gap-4">
                {quickStats.map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center p-4 bg-gray-800/40 rounded-xl border border-gray-700/50 hover:border-indigo-500/30 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <stat.icon className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
                    <div className="text-lg font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Community Stats */}
            <motion.div 
              className="glass-card backdrop-blur-xl bg-white/5 border-2 gradient-border-animated p-6 hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.02, borderColor: 'rgba(99, 102, 241, 0.3)' }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">Join Our Creator Community</h3>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <motion.div 
                  className="bg-indigo-500/15 border border-indigo-500/30 rounded-xl p-4 backdrop-blur-md shadow-glow-primary"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-indigo-300">$2.1M+</div>
                  <div className="text-xs text-gray-300">Total Creator Earnings</div>
                </motion.div>
                <motion.div 
                  className="glass-card backdrop-blur-md rounded-xl p-4 border border-white/10"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-white">847</div>
                  <div className="text-xs text-gray-300">Active NFTs Minted</div>
                </motion.div>
                <motion.div 
                  className="glass-card backdrop-blur-md rounded-xl p-4 border border-white/10"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-bold text-white">12.8M</div>
                  <div className="text-xs text-gray-300">Cross-Platform Reach</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Trust & Transparency */}
            <motion.div 
              className="glass-card backdrop-blur-xl bg-white/5 border-2 gradient-border-animated p-6 hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.02, borderColor: 'rgba(99, 102, 241, 0.3)' }}
            >
              <h3 className="text-lg font-semibold text-white mb-2">Trust & Transparency</h3>
              <p className="text-sm text-gray-300 mb-4">Your sovereign community where creators thrive together.</p>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1.5 bg-indigo-500/20 border border-indigo-500/40 rounded-full text-sm text-indigo-200 backdrop-blur-sm">Exclusive Perks</span>
                <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm text-gray-300 border border-white/20">• CertiK Audited</span>
                <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm text-gray-300 border border-white/20">• 24/7 Support</span>
                <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm text-gray-300 border border-white/20">• DAO Governance</span>
              </div>

              {/* Growth Cards */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <motion.div 
                  className="glass-card backdrop-blur-md rounded-xl p-4 border border-white/20 hover:border-indigo-500/50 transition-all"
                  whileHover={{ scale: 1.03, y: -3 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-green-500/30 flex items-center justify-center backdrop-blur-sm border border-green-500/50">
                      <span className="text-green-300 text-xs">✓</span>
                    </div>
                    <span className="text-sm font-medium text-white">+300% More Earnings</span>
                  </div>
                  <p className="text-xs text-gray-400">vs. Gallery Sales</p>
                  <p className="text-sm font-semibold text-indigo-300 mt-1">$12,847 earned</p>
                </motion.div>
                <motion.div 
                  className="glass-card backdrop-blur-md rounded-xl p-4 border border-white/20 hover:border-purple-500/50 transition-all"
                  whileHover={{ scale: 1.03, y: -3 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-purple-500/30 flex items-center justify-center backdrop-blur-sm border border-purple-500/50">
                      <span className="text-purple-300 text-xs">♪</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">Global Fanbase</div>
                      <div className="text-xs text-gray-400">Tokenized Music</div>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-white mt-2">$11,934</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
