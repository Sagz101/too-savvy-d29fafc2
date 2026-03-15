import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const partners = ['Ethereum', 'Polygon', 'Solana', 'CertiK', 'IPFS', 'Chainlink', 'Base', 'Arbitrum'];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

export const TrustStrip: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div className="bg-white py-5" style={{ borderTop: '1px solid rgba(17,17,16,0.06)', borderBottom: '1px solid rgba(17,17,16,0.06)' }}>
      <motion.div
        ref={ref}
        className="max-w-[1280px] mx-auto px-6 md:px-10 flex items-center gap-8 flex-wrap"
        variants={container}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.span variants={item} className="font-dm-sans font-semibold text-[0.65rem] tracking-[0.06em] uppercase text-diminga-muted shrink-0">
          Trusted by
        </motion.span>
        {partners.map(p => (
          <motion.span key={p} variants={item} className="font-dm-sans text-sm text-diminga-muted/60">
            {p}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};
