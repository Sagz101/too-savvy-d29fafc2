import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stories = [
  {
    name: 'Maya Chen',
    role: 'Digital Artist & Store Owner',
    quote: 'Renegade helped me turn my traditional art into a thriving NFT business, earning 300% more than my gallery sales.',
    earnings: '$12,847',
    growth: '+325%',
  },
  {
    name: 'Alex Rodriguez',
    role: 'Music Producer',
    quote: 'I built a global fanbase through tokenized music releases and interactive live streaming on Renegade.',
    earnings: '$8,934',
    growth: '+189%',
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export const SuccessStories: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="stories" className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 scroll-mt-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-12"
      >
        <span className="font-dm-sans font-semibold text-[0.7rem] tracking-[0.06em] uppercase text-renegade-accent mb-3 block">
          Creator Stories
        </span>
        <h2 className="font-fraunces font-bold text-3xl md:text-4xl tracking-[-0.03em] text-renegade-text">
          Real creators. <span className="italic font-light text-renegade-accent">Real earnings.</span>
        </h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={container}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {stories.map((s) => (
          <motion.div
            key={s.name}
            className="bg-white rounded-xl p-6 transition-all hover:-translate-y-0.5"
            style={{ border: '1px solid rgba(17,17,16,0.06)' }}
            variants={item}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-full bg-renegade-alt flex items-center justify-center font-fraunces font-bold text-sm text-renegade-accent">
                {s.name.split(' ').map(w => w[0]).join('')}
              </div>
              <div>
                <div className="font-fraunces font-bold text-base text-renegade-text">{s.name}</div>
                <div className="font-dm-sans text-[0.7rem] text-renegade-muted">{s.role}</div>
              </div>
            </div>

            <blockquote className="font-dm-sans text-sm text-renegade-muted leading-relaxed mb-5 italic">
              "{s.quote}"
            </blockquote>

            <div className="flex gap-6">
              <div>
                <div className="font-fraunces font-bold text-xl text-renegade-text">
                  {s.earnings}
                </div>
                <div className="font-dm-sans text-[0.65rem] text-renegade-muted">Total earnings</div>
              </div>
              <div>
                <div className="font-fraunces font-bold text-xl text-renegade-accent italic">{s.growth}</div>
                <div className="font-dm-sans text-[0.65rem] text-renegade-muted">Growth</div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
