import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export const CtaBanner: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-10 py-16">
      <motion.div
        ref={ref}
        className="relative rounded-[28px] bg-renegade-text overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-10 md:p-14"
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Orange glow */}
        <div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(232,101,10,0.15) 0%, transparent 70%)' }}
        />

        <motion.div variants={container} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          <motion.h2
            className="font-fraunces font-bold text-3xl md:text-4xl tracking-[-0.03em] text-white leading-tight"
            variants={item}
          >
            Start building your<br />
            sovereign creator{' '}
            <span className="italic font-light text-renegade-accent">empire.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          className="flex flex-col gap-3 md:items-end"
          variants={container}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={item}>
            <Button
              className="bg-renegade-accent hover:bg-renegade-accent/90 text-white font-dm-sans font-semibold px-8 py-5 text-sm rounded-lg w-full md:w-auto"
              asChild
            >
              <Link to="/studio">Connect Wallet & Create</Link>
            </Button>
          </motion.div>
          <motion.div variants={item}>
            <Button
              variant="outline"
              className="border-white/15 text-white/70 hover:bg-white/10 font-dm-sans text-sm rounded-lg w-full md:w-auto"
              asChild
            >
              <Link to="/learn">Read Documentation</Link>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
