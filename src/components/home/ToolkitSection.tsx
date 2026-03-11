import React, { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

interface Tool {
  emoji: string;
  name: string;
  desc: string;
  stat: string;
  statColor?: string;
  route: string;
  isDashed?: boolean;
}

const tools: Tool[] = [
  { emoji: '🏪', name: 'E-commerce Store', desc: 'Launch a decentralized storefront in minutes. Accept crypto, sell physical or digital goods, zero platform cut.', stat: '$2,847 avg total sales per creator', route: '/commerce-studio' },
  { emoji: '▶️', name: 'Video Studio', desc: 'Create, mint, and monetize video content on-chain. Your videos become assets — not someone else\'s inventory.', stat: '$2.1M content minted total', route: '/video-studio' },
  { emoji: '💫', name: 'Social Hub', desc: 'Build a sovereign brand. Own your audience data, not just your follower count.', stat: '421K+ verified interactions', route: '/neura-social' },
  { emoji: '🎵', name: 'Music Creator', desc: 'Tokenize releases, sell fractional royalties, stream royalties directly to your wallet in real-time.', stat: '$8,934 avg monthly for active artists', route: '/music-creation' },
  { emoji: '🤖', name: 'AI Copilot', desc: 'Generate, edit, and optimize your content with AI tools built for Web3 creators.', stat: 'New · Beta access available', route: '/studio' },
  { emoji: '+', name: 'More Coming', desc: 'Vote in DAO governance to decide which tools we build next. Your stake, your roadmap.', stat: 'Vote on next feature →', statColor: 'text-indigo-400', route: '/dao-governance', isDashed: true },
];

const ToolCard: React.FC<{ tool: Tool; index: number }> = ({ tool, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouse = useCallback((e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect || !cardRef.current) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    cardRef.current.style.setProperty('--mx', x + '%');
    cardRef.current.style.setProperty('--my', y + '%');
  }, []);

  return (
    <Link to={tool.route} className="block">
      <div
        ref={cardRef}
        onMouseMove={handleMouse}
        className="group relative p-6 md:p-8 overflow-hidden transition-colors hover:bg-[#12121c]"
        style={{
          background: tool.isDashed
            ? 'linear-gradient(135deg, rgba(99,102,241,0.08), #0d0d14)'
            : '#0d0d14',
          borderRight: tool.isDashed ? undefined : undefined,
        }}
      >
        {/* Spotlight gradient on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(99,102,241,0.08) 0%, transparent 60%)',
          }}
        />

        <div
          className="w-11 h-11 rounded-xl grid place-items-center text-xl mb-5 transition-transform group-hover:scale-110 group-hover:-rotate-3"
          style={{
            background: '#12121c',
            border: tool.isDashed ? '1px dashed rgba(99,102,241,0.3)' : '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {tool.emoji}
        </div>

        <div className="font-syne font-bold text-base text-foreground mb-2">{tool.name}</div>
        <div className="text-sm text-muted-foreground leading-relaxed mb-4">{tool.desc}</div>
        <div className={`font-space-mono text-[0.7rem] ${tool.statColor || 'text-cyan-400'}`}>
          {tool.stat}
        </div>
      </div>
    </Link>
  );
};

export const ToolkitSection: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="relative z-[2] py-16 md:py-24 px-4 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="font-space-mono text-[0.65rem] tracking-[0.15em] uppercase text-indigo-400 mb-4">
          // Creator Studio Toolkit
        </div>
        <h2 className="font-syne font-extrabold text-3xl md:text-5xl tracking-tight text-foreground leading-[1.05]">
          Five tools.<br /><em className="text-foreground/30 italic">Infinite</em> possibilities.
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 mt-12 rounded-2xl overflow-hidden"
        style={{
          gap: '1px',
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {tools.map((tool, i) => (
          <ToolCard key={tool.name} tool={tool} index={i} />
        ))}
      </motion.div>
    </section>
  );
};
