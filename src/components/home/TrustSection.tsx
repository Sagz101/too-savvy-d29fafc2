import React from 'react';
import { Shield, Leaf, Heart, Clock, Award, Users, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TrustMetricProps {
  icon: React.ElementType;
  value: string;
  label: string;
  color: string;
  index: number;
}

const TrustMetric: React.FC<TrustMetricProps> = ({ icon: Icon, value, label, color, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="flex items-center gap-4 p-4 glass-card backdrop-blur-xl bg-white/5 border-2 border-white/10 rounded-xl hover:border-indigo-500/40 hover:bg-white/10 transition-all duration-300"
    >
      <motion.div 
        className={`w-12 h-12 rounded-xl ${color} backdrop-blur-md border border-white/20 flex items-center justify-center shadow-glow-primary`}
        whileHover={{ rotate: 10 }}
      >
        <Icon className="w-6 h-6 text-white" />
      </motion.div>
      <div>
        <motion.div 
          className="text-2xl font-bold text-white"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.2 }}
        >
          {value}
        </motion.div>
        <div className="text-sm text-gray-300">{label}</div>
      </div>
    </motion.div>
  );
};

export const TrustSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [cardsRef, cardsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [daoRef, daoInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const trustMetrics = [
    {
      icon: Shield,
      value: '98/100',
      label: 'Security Score (CertiK)',
      color: 'bg-blue-500/20',
    },
    {
      icon: Leaf,
      value: '127%',
      label: 'Carbon Offset',
      color: 'bg-green-500/20',
    },
    {
      icon: Heart,
      value: '94%',
      label: 'Community Trust',
      color: 'bg-pink-500/20',
    },
    {
      icon: Clock,
      value: '99.9%',
      label: 'Platform Uptime',
      color: 'bg-purple-500/20',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 relative overflow-hidden aurora-bg">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient-animated opacity-25" />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div 
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Trust & Transparency</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Built on security, sustainability, and community-first principles.
          </p>
        </motion.div>

        {/* Trust Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {trustMetrics.map((metric, index) => (
            <TrustMetric key={index} {...metric} index={index} />
          ))}
        </div>

        {/* Verification Cards */}
        <motion.div 
          ref={cardsRef}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {/* CertiK Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={cardsInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02, borderColor: 'rgba(99, 102, 241, 0.5)' }}
            className="glass-card gradient-border-animated backdrop-blur-xl bg-white/5 border-2 rounded-2xl p-6 transition-all hover:bg-white/10"
          >
            <div className="flex items-start gap-4">
              <motion.div 
                className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-glow-primary"
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <Shield className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">CertiK Security Audit</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Our smart contracts have been audited by CertiK, the leading blockchain security firm. 
                  All critical vulnerabilities addressed.
                </p>
                <div className="flex items-center gap-4">
                  <motion.span 
                    className="px-3 py-1 bg-blue-500/25 text-blue-200 text-sm rounded-full border border-blue-500/40 backdrop-blur-md"
                    whileHover={{ scale: 1.05 }}
                  >
                    Verified ✓
                  </motion.span>
                  <span className="text-xs text-gray-400">Audit ID: TSV-2024-001</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Multi-Sig Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={cardsInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02, borderColor: 'rgba(99, 102, 241, 0.5)' }}
            className="glass-card gradient-border-animated backdrop-blur-xl bg-white/5 border-2 rounded-2xl p-6 transition-all hover:bg-white/10"
          >
            <div className="flex items-start gap-4">
              <motion.div 
                className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-glow-primary"
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <Award className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Multi-Sig Treasury</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Platform funds are secured in a multi-signature wallet requiring 3/5 key holders 
                  to approve any transaction.
                </p>
                <div className="flex items-center gap-4">
                  <motion.span 
                    className="px-3 py-1 bg-purple-500/25 text-purple-200 text-sm rounded-full border border-purple-500/40 backdrop-blur-md"
                    whileHover={{ scale: 1.05 }}
                  >
                    3/5 Multisig
                  </motion.span>
                  <span className="text-xs text-gray-400">Gnosis Safe</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* DAO Governance Callout */}
        <motion.div 
          ref={daoRef}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={daoInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ y }}
          className="glass-card gradient-border-animated bg-gradient-to-r from-indigo-500/15 via-purple-500/15 to-pink-500/15 border-2 rounded-2xl p-8 text-center backdrop-blur-xl"
        >
          <motion.div 
            className="w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center mx-auto mb-4"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          >
            <Users className="w-8 h-8 text-indigo-400" />
          </motion.div>
          <h3 className="text-2xl font-bold text-white mb-3">True Decentralization</h3>
          <p className="text-gray-400 max-w-xl mx-auto mb-6">
            All platform decisions are voted on by the creator community. 
            Join our DAO and shape the future of Diminga.
          </p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={daoInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            {['Community Proposals', 'Token-Weighted Voting', 'Transparent Treasury'].map((item, i) => (
              <motion.div 
                key={item}
                className="flex items-center gap-2 text-sm text-gray-300"
                initial={{ opacity: 0, x: -20 }}
                animate={daoInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <Check className="w-4 h-4 text-green-400" />
                <span>{item}</span>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={daoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <Button 
              size="lg"
              className="mt-6 bg-indigo-500 hover:bg-indigo-400 text-white"
              asChild
            >
              <Link to="/global-innovators">
                Join DAO Governance
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
