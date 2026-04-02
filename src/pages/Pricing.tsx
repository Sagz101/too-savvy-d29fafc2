import { Link } from "react-router-dom";
import { ROUTES } from "@/lib/constants";

const PLANS = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    color: "#888",
    desc: "Perfect for getting started.",
    features: [
      "All 6 studio modules",
      "Up to 5 products",
      "5% platform fee on sales",
      "Basic analytics",
      "Community support",
    ],
    cta: "Get started free",
    ctaRoute: ROUTES.AUTH,
    highlight: false,
  },
  {
    name: "Creator",
    price: "$19",
    period: "per month",
    color: "#0066FF",
    desc: "For full-time creators ready to scale.",
    features: [
      "Everything in Free",
      "Unlimited products",
      "0% platform fee",
      "NFT minting (100/mo)",
      "Custom domain",
      "Advanced analytics",
      "Priority support",
    ],
    cta: "Start Creator plan",
    ctaRoute: ROUTES.AUTH,
    highlight: true,
  },
  {
    name: "Pro",
    price: "$49",
    period: "per month",
    color: "#9B5CF6",
    desc: "For power users and teams.",
    features: [
      "Everything in Creator",
      "Unlimited NFT minting",
      "DAO governance tools",
      "Team members (up to 5)",
      "White-label option",
      "Dedicated account manager",
      "SLA uptime guarantee",
    ],
    cta: "Start Pro plan",
    ctaRoute: ROUTES.AUTH,
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <div style={s.root}>
      <nav style={s.nav}>
        <Link to={ROUTES.HOME} style={s.logo}>
          <span style={s.logoMark}>◈</span> Diminga
        </Link>
        <div style={s.navRight}>
          <Link to={ROUTES.AUTH} style={s.signIn}>Sign in</Link>
          <Link to={ROUTES.AUTH} style={s.cta}>Get started free</Link>
        </div>
      </nav>

      <div style={s.hero}>
        <div style={s.badge}>Simple, transparent pricing</div>
        <h1 style={s.title}>Pay for what you need.</h1>
        <p style={s.sub}>Start for free, upgrade when you're ready. No hidden fees, no lock-in.</p>
      </div>

      <div style={s.plansRow}>
        {PLANS.map(p => (
          <div
            key={p.name}
            style={{
              ...s.planCard,
              ...(p.highlight ? { border: `2px solid ${p.color}`, boxShadow: `0 8px 40px ${p.color}20` } : {}),
            }}
          >
            {p.highlight && (
              <div style={{ ...s.popularBadge, background: p.color }}>Most popular</div>
            )}
            <div style={{ ...s.planName, color: p.color }}>{p.name}</div>
            <div style={s.planPrice}>
              {p.price}<span style={s.planPeriod}> / {p.period}</span>
            </div>
            <p style={s.planDesc}>{p.desc}</p>
            <Link
              to={p.ctaRoute}
              style={{
                ...s.planCta,
                background: p.highlight ? p.color : "#F2F2EF",
                color: p.highlight ? "#fff" : "#111110",
              }}
            >
              {p.cta}
            </Link>
            <div style={s.featureList}>
              {p.features.map(f => (
                <div key={f} style={s.featureItem}>
                  <span style={{ ...s.featureCheck, color: p.color }}>✓</span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={s.faqSection}>
        <h2 style={s.faqTitle}>Frequently asked questions</h2>
        <div style={s.faqGrid}>
          {[
            ["Do I need a crypto wallet?", "No! You can use Diminga entirely with email and Stripe. A wallet is only needed for NFT features."],
            ["What's the platform fee?", "Free plan has a 5% fee. Creator and Pro plans have 0% platform fee — you keep everything."],
            ["Can I cancel anytime?", "Yes, you can cancel or downgrade at any time. No contracts, no penalties."],
            ["Which blockchains are supported?", "Ethereum mainnet, Polygon, and Base. We recommend Polygon for low fees."],
          ].map(([q, a]) => (
            <div key={q} style={s.faqItem}>
              <div style={s.faqQ}>{q}</div>
              <div style={s.faqA}>{a}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={s.footer}>
        <Link to={ROUTES.HOME} style={s.footerLink}>← Back to home</Link>
        <span style={s.footerCopy}>© 2025 Diminga</span>
      </div>
    </div>
  );
}

const s: Record<string, React.CSSProperties> = {
  root: { fontFamily: "'DM Sans', sans-serif", background: "#FAFAF8", minHeight: "100vh" },
  nav: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "20px 48px", borderBottom: "1px solid #E8E8E4", background: "#fff",
    position: "sticky" as const, top: 0, zIndex: 10,
  },
  logo: { display: "flex", alignItems: "center", gap: 8, textDecoration: "none", color: "#111110", fontSize: 20, fontWeight: 700 },
  logoMark: { color: "#0066FF", fontSize: 22 },
  navRight: { display: "flex", alignItems: "center", gap: 16 },
  signIn: { fontSize: 14, color: "#555", textDecoration: "none", fontWeight: 500 },
  cta: {
    fontSize: 14, fontWeight: 700, background: "#111110", color: "#fff",
    padding: "9px 20px", borderRadius: 9, textDecoration: "none",
  },
  hero: { textAlign: "center" as const, padding: "80px 24px 48px" },
  badge: {
    display: "inline-block", fontSize: 13, fontWeight: 600, color: "#0066FF",
    background: "#0066FF10", border: "1px solid #0066FF30",
    borderRadius: 999, padding: "5px 14px", marginBottom: 20,
  },
  title: { fontSize: 52, fontWeight: 800, letterSpacing: "-0.03em", color: "#111110", margin: "0 0 16px" },
  sub: { fontSize: 18, color: "#666", margin: 0 },
  plansRow: {
    display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24,
    maxWidth: 1000, margin: "0 auto", padding: "0 24px 80px",
  },
  planCard: {
    background: "#fff", border: "1.5px solid #E8E8E4", borderRadius: 16,
    padding: "32px 28px", position: "relative" as const,
  },
  popularBadge: {
    position: "absolute" as const, top: -13, left: "50%", transform: "translateX(-50%)",
    fontSize: 11, fontWeight: 800, color: "#fff", padding: "4px 14px",
    borderRadius: 999, textTransform: "uppercase" as const, letterSpacing: "0.08em",
    whiteSpace: "nowrap" as const,
  },
  planName: { fontSize: 13, fontWeight: 800, textTransform: "uppercase" as const, letterSpacing: "0.1em", marginBottom: 12 },
  planPrice: { fontSize: 44, fontWeight: 900, letterSpacing: "-0.04em", color: "#111110", marginBottom: 6 },
  planPeriod: { fontSize: 16, fontWeight: 400, color: "#888" },
  planDesc: { fontSize: 14, color: "#888", margin: "0 0 24px", lineHeight: 1.5 },
  planCta: {
    display: "block", textAlign: "center" as const, padding: "13px 0",
    borderRadius: 10, fontSize: 14, fontWeight: 700, textDecoration: "none",
    marginBottom: 28, transition: "opacity 0.2s",
  },
  featureList: { display: "flex", flexDirection: "column" as const, gap: 10 },
  featureItem: { display: "flex", gap: 10, fontSize: 14, color: "#444", alignItems: "flex-start" },
  featureCheck: { fontWeight: 800, flexShrink: 0, marginTop: 1 },
  faqSection: { background: "#F2F2EF", padding: "80px 48px" },
  faqTitle: { fontSize: 32, fontWeight: 800, letterSpacing: "-0.02em", color: "#111110", textAlign: "center" as const, margin: "0 0 48px" },
  faqGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, maxWidth: 800, margin: "0 auto" },
  faqItem: { background: "#fff", borderRadius: 12, padding: "22px 24px", border: "1px solid #E8E8E4" },
  faqQ: { fontSize: 15, fontWeight: 700, color: "#111110", marginBottom: 8 },
  faqA: { fontSize: 14, color: "#666", lineHeight: 1.6 },
  footer: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "24px 48px", borderTop: "1px solid #E8E8E4",
  },
  footerLink: { fontSize: 13, color: "#0066FF", textDecoration: "none", fontWeight: 600 },
  footerCopy: { fontSize: 13, color: "#999" },
};
