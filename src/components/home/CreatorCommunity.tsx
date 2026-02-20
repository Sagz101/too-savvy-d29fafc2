import React from 'react';
import { Users, Award, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const CreatorCommunity: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const scale = useTransform(scrollYProgress, [0.7, 1], [0.95, 1]);

  const [leftRef, leftInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [rightRef, rightInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0a0018 0%, #060010 100%)' }}>
      {/* Background effects */}
      <div className="absolute inset-0 mesh-gradient-animated opacity-25" />
      <div className="absolute inset-0 aurora-bg opacity-10" />
      {/* Parallax gradient orb */}
      <motion.div 
        style={{ y, scale }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl shadow-glow-primary" 
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            ref={leftRef}
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={leftInView ? "visible" : "hidden"}
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-white leading-tight"
            >
              Join Our Creator Community
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg text-gray-400 max-w-lg"
            >
              Connect with 13,000+ monthly active creators sharing tips, 
              collaboration opportunities, and growing together on Diminga.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <div className="flex items-center gap-2 text-gray-300">
                <Users className="w-5 h-5 text-indigo-400" />
                <span>Join TooSavvey Pro Community</span>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold mt-4 shadow-glow-primary"
                asChild
              >
                <Link to="/neura-social">
                  Enter Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Success Stories */}
          <motion.div 
            ref={rightRef}
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={rightInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.h3 
              className="text-2xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={rightInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
            >
              Creator Success Stories
            </motion.h3>
            <motion.p 
              className="text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={rightInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              Real creators building sustainable income through our DAO-governed platform.
            </motion.p>

            {/* Community Stats */}
            <motion.div 
              className="glass-card gradient-border-animated rounded-2xl p-6 shadow-elevated-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={rightInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02, borderColor: 'rgba(99, 102, 241, 0.3)' }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <motion.div 
                    className="text-3xl font-bold text-white"
                    initial={{ opacity: 0 }}
                    animate={rightInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 }}
                  >
                    15,247 Members
                  </motion.div>
                  <div className="text-sm text-gray-500">Monthly Active Community</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-400">• Members</span>
                  <span className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-400">• 24/7 Support</span>
                </div>
              </div>
            </motion.div>

            {/* Creator Cards */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                className="glass-card gradient-border-animated rounded-2xl p-5 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                animate={rightInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.img 
                    src="https://placehold.co/48x48/6366f1/ffffff?text=MC" 
                    alt="Maya Chen"
                    className="w-12 h-12 rounded-full ring-2 ring-indigo-500/20"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div>
                    <div className="font-semibold text-white">Maya Chen</div>
                    <div className="text-xs text-gray-500">E-commerce Creator</div>
                  </div>
                </div>
                
                <p className="text-sm text-gray-400 mb-3">Digital Artist & Store Owner</p>
                
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-yellow-500" />
                  <span className="text-xs text-gray-500">Top Creator</span>
                  <span className="text-xs text-indigo-400">• Creator Award</span>
                </div>
                
                <Button size="sm" variant="outline" className="w-full border-gray-700 text-gray-300 hover:bg-gray-800">
                  View Profile
                </Button>
              </motion.div>

              <motion.div 
                className="glass-card gradient-border-animated rounded-2xl p-5 transition-colors"
                initial={{ opacity: 0, y: 30 }}
                animate={rightInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.img 
                    src="https://placehold.co/48x48/8b5cf6/ffffff?text=JK" 
                    alt="Jordan Kim"
                    className="w-12 h-12 rounded-full ring-2 ring-purple-500/20"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div>
                    <div className="font-semibold text-white">Jordan Kim</div>
                    <div className="text-xs text-gray-500">Music Producer</div>
                  </div>
                </div>
                
                <motion.div 
                  className="text-2xl font-bold text-white mb-2"
                  initial={{ opacity: 0 }}
                  animate={rightInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.7 }}
                >
                  $15,934
                </motion.div>
                <p className="text-sm text-gray-400 mb-3">• Best Seller</p>
                
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span className="text-xs text-gray-500">Tech Used:</span>
                  <span className="text-xs text-gray-500">Music Studio, Social</span>
                </div>
                
                <Button size="sm" variant="outline" className="w-full border-gray-700 text-gray-300 hover:bg-gray-800">
                  View Profile
                </Button>
              </motion.div>
            </div>

            {/* Passive Income CTA */}
            <motion.div 
              className="glass-card bg-primary/5 border border-primary/20 rounded-xl p-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={rightInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-sm text-gray-300">
                Earn passive income by sharing your <span className="text-primary font-medium">success story!</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
