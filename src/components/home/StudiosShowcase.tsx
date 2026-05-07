import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag, PenLine, Play, Share2, Mic, Users,
  ArrowRight, TrendingUp, Eye, Sparkles,
} from "lucide-react";

type Category = "All" | "Monetization" | "Content" | "Community";

type Studio = {
  key: string;
  title: string;
  tag: string;
  category: Exclude<Category, "All">;
  color: string;
  Icon: typeof ShoppingBag;
  desc: string;
  route: string;
  stats: { label: string; value: string }[];
  preview: React.ReactNode;
};

const STUDIOS: Studio[] = [
  {
    key: "store", title: "Store Builder", tag: "Commerce",
    category: "Monetization", color: "#00C896", Icon: ShoppingBag,
    desc: "Sell digital goods, merch & NFT-gated content with Stripe + crypto checkout.",
    route: "/studio/store",
    stats: [{ label: "Earnings 30d", value: "$12,480" }, { label: "Conversion", value: "4.8%" }],
    preview: <SalePreview />,
  },
  {
    key: "threaditor", title: "Threaditor", tag: "Publishing",
    category: "Content", color: "#9B5CF6", Icon: PenLine,
    desc: "Long-form posts minted as ERC-721 collectibles with lifetime royalties.",
    route: "/studio/threaditor",
    stats: [{ label: "Articles minted", value: "1,284" }, { label: "Avg. royalty", value: "8.5%" }],
    preview: <MintedPreview />,
  },
  {
    key: "video", title: "Video Studio", tag: "Video",
    category: "Content", color: "#FF6B35", Icon: Play,
    desc: "Upload, host, and gate premium series behind token ownership.",
    route: "/studio/video",
    stats: [{ label: "Watch time", value: "92.4k hr" }, { label: "Engagement", value: "+18%" }],
    preview: <LivePreview />,
  },
  {
    key: "social", title: "NeuraSocial", tag: "Social",
    category: "Community", color: "#14B8A6", Icon: Share2,
    desc: "Cross-post to 8+ networks with smart-link analytics and wallet handles.",
    route: "/studio/social",
    stats: [{ label: "Reach 30d", value: "1.2M" }, { label: "Click-through", value: "6.1%" }],
    preview: <SyncPreview />,
  },
  {
    key: "podcast", title: "Podcast Studio", tag: "Audio",
    category: "Content", color: "#F59E0B", Icon: Mic,
    desc: "Record, host, and offer token-gated episodes to loyal listeners.",
    route: "/studio/podcast",
    stats: [{ label: "Listeners", value: "48,209" }, { label: "Subs growth", value: "+24%" }],
    preview: <WaveformPreview />,
  },
  {
    key: "hub", title: "Innovators Hub", tag: "Community",
    category: "Community", color: "#0066FF", Icon: Users,
    desc: "Coordinate creative DAOs, vote on proposals, fund collaborations.",
    route: "/studio/hub",
    stats: [{ label: "Active members", value: "3,412" }, { label: "Treasury", value: "$184k" }],
    preview: <DaoVotePreview />,
  },
];

const TABS: Category[] = ["All", "Monetization", "Content", "Community"];

export default function StudiosShowcase() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<Category>("All");
  const visible = useMemo(
    () => (tab === "All" ? STUDIOS : STUDIOS.filter((s) => s.category === tab)),
    [tab]
  );

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-[#0A0A0F]">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-32 left-1/4 w-[480px] h-[480px] rounded-full blur-3xl bg-[#9B5CF6]/20" />
        <div className="absolute -bottom-32 right-1/4 w-[520px] h-[520px] rounded-full blur-3xl bg-[#0066FF]/20" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-xs font-mono tracking-[0.2em] uppercase text-white/50 mb-3">
            Everything you need
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60">Six studios. </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9B5CF6] via-[#FF6B35] to-[#14B8A6]">One platform.</span>
          </h2>
          <p className="text-white/60 mt-4 max-w-xl mx-auto leading-relaxed">
            Every tool a creator needs — store, blog, video, podcast, social and DAO — unified under one roof with Web3 built in from day one.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            {TABS.map((t) => {
              const active = tab === t;
              return (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`relative px-4 md:px-5 py-2 text-sm font-medium rounded-full transition-colors ${
                    active ? "text-white" : "text-white/60 hover:text-white/90"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="studio-tab-pill"
                      className="absolute inset-0 rounded-full bg-white/10 border border-white/15"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative">{t}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((s, i) => (
              <motion.div
                key={s.key}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                <StudioCard studio={s} onCta={() => navigate(s.route)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function StudioCard({ studio, onCta }: { studio: Studio; onCta: () => void }) {
  const { color, Icon } = studio;
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative h-full rounded-2xl p-5 border bg-white/[0.04] backdrop-blur-xl overflow-hidden"
      style={{ borderColor: "rgba(255,255,255,0.08)" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 20px 60px -20px ${color}55, 0 0 0 1px ${color}40`;
        e.currentTarget.style.borderColor = `${color}55`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
      }}
    >
      <div
        className="rounded-xl p-4 mb-4 border overflow-hidden"
        style={{
          borderColor: `${color}30`,
          background: `linear-gradient(135deg, ${color}15, transparent 70%)`,
        }}
      >
        {studio.preview}
      </div>

      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: `${color}20`, color }}
        >
          <Icon size={20} strokeWidth={2.25} />
        </div>
        <div>
          <div className="text-[10px] font-mono uppercase tracking-[0.18em]" style={{ color }}>
            {studio.tag}
          </div>
          <h3 className="text-lg font-semibold text-white leading-tight">{studio.title}</h3>
        </div>
      </div>

      <p className="text-sm text-white/60 leading-relaxed">{studio.desc}</p>

      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
        <div className="overflow-hidden">
          <div className="pt-4 mt-4 border-t border-white/10 grid grid-cols-2 gap-3">
            {studio.stats.map((st) => (
              <div key={st.label}>
                <div className="text-[10px] uppercase tracking-wider text-white/40 mb-1">{st.label}</div>
                <div className="text-sm font-semibold text-white">{st.value}</div>
              </div>
            ))}
          </div>
          <button
            onClick={onCta}
            className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition-transform active:scale-[0.98]"
            style={{ background: `linear-gradient(135deg, ${color}, ${color}cc)` }}
          >
            Start creating <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function SalePreview() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-lg bg-[#00C896]/20 flex items-center justify-center">
        <TrendingUp size={16} className="text-[#00C896]" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs text-white/60">New sale · 2s ago</div>
        <div className="text-sm font-semibold text-white truncate">
          Genesis Hoodie · <span className="text-[#00C896]">$84.00</span>
        </div>
      </div>
      <span className="w-2 h-2 rounded-full bg-[#00C896] animate-pulse" />
    </div>
  );
}

function MintedPreview() {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-white/60">Articles minted today</span>
        <span className="text-xs font-mono text-[#9B5CF6]">+12</span>
      </div>
      <div className="text-2xl font-bold text-white tracking-tight">1,284</div>
      <div className="mt-2 h-1.5 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "72%" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-[#9B5CF6] to-[#c084fc]"
        />
      </div>
    </div>
  );
}

function LivePreview() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#FF6B35] text-white">● Live</span>
        <span className="text-xs text-white/60">Drop #04</span>
      </div>
      <div className="flex items-center gap-1.5 text-white">
        <Eye size={14} className="text-[#FF6B35]" />
        <span className="text-sm font-semibold tabular-nums">2,418</span>
      </div>
    </div>
  );
}

function SyncPreview() {
  const platforms = ["X", "IG", "TT", "FC", "LN"];
  return (
    <div>
      <div className="text-xs text-white/60 mb-2">Synced to 5 platforms</div>
      <div className="flex gap-1.5">
        {platforms.map((p, i) => (
          <motion.div
            key={p}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 + i * 0.08 }}
            className="w-7 h-7 rounded-md border border-[#14B8A6]/40 bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center text-[10px] font-bold"
          >
            {p}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function WaveformPreview() {
  const bars = [40, 70, 30, 90, 55, 80, 35, 65, 45, 75, 50, 85, 30, 60];
  return (
    <div>
      <div className="text-xs text-white/60 mb-2">Episode 42 · Recording</div>
      <div className="flex items-end gap-[3px] h-8">
        {bars.map((h, i) => (
          <motion.span
            key={i}
            animate={{ height: [`${h}%`, `${100 - h}%`, `${h}%`] }}
            transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.05 }}
            className="w-[4px] rounded-full bg-[#F59E0B]"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function DaoVotePreview() {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-white/60">Proposal RIP-47</span>
        <span className="text-xs font-mono text-[#0066FF] flex items-center gap-1">
          <Sparkles size={11} /> 68% yes
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-white/10 overflow-hidden flex">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "68%" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full bg-[#0066FF]"
        />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "32%" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full bg-white/20"
        />
      </div>
    </div>
  );
}
