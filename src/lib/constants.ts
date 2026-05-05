export const BRAND = {
  name: "Renegade",
  tagline: "The creator platform for the ownership era",
};

export const ROUTES = {
  HOME: "/",
  AUTH: "/auth",
  DASHBOARD: "/dashboard",
  STORE: "/studio/store",
  THREADITOR: "/studio/threaditor",
  VIDEO: "/studio/video",
  PODCAST: "/studio/podcast",
  SOCIAL: "/studio/social",
  HUB: "/studio/hub",
  SETTINGS: "/settings",
  PRICING: "/pricing",
  DOCS: "/docs",
  PROFILE: "/profile",
} as const;

export const STUDIO_MODULES = [
  { key: "store",      label: "Store Builder",    icon: "◈", color: "#0066FF", route: ROUTES.STORE,      desc: "Sell digital goods, merch & NFT-gated content" },
  { key: "threaditor", label: "Threaditor",        icon: "✦", color: "#00C896", route: ROUTES.THREADITOR, desc: "Long-form writing with NFT-backed posts" },
  { key: "video",      label: "Video Studio",      icon: "▶", color: "#FF6B35", route: ROUTES.VIDEO,      desc: "Upload, manage & monetize video content" },
  { key: "podcast",    label: "Podcast Studio",     icon: "◆", color: "#F59E0B", route: ROUTES.PODCAST,    desc: "Record, host & distribute your podcast" },
  { key: "social",     label: "NeuraSocial",        icon: "◎", color: "#9B5CF6", route: ROUTES.SOCIAL,     desc: "Cross-platform social hub with analytics" },
  { key: "hub",        label: "Innovators Hub",     icon: "⬡", color: "#EC4899", route: ROUTES.HUB,        desc: "DAO governance & creative collaboration" },
] as const;
