import { Link } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { STUDIO_MODULES, ROUTES } from "@/lib/constants";
import PageMeta from "@/components/shared/PageMeta";

const STATS = [
  { label: "Total earnings",    value: "$0.00",  sub: "Connect wallet to track",  icon: "◈" },
  { label: "NFTs minted",       value: "0",      sub: "Start minting content",     icon: "✦" },
  { label: "Followers",         value: "0",      sub: "Share your profile",        icon: "◎" },
  { label: "Content published", value: "0",      sub: "Create your first piece",   icon: "▶" },
];

const QUICK_ACTIONS = [
  { label: "Write an article",   route: ROUTES.THREADITOR,  icon: "✦", color: "#00C896" },
  { label: "Upload a video",     route: ROUTES.VIDEO,       icon: "▶", color: "#FF6B35" },
  { label: "Add a product",      route: ROUTES.STORE,       icon: "◈", color: "#0066FF" },
  { label: "Record a podcast",   route: ROUTES.PODCAST,     icon: "◆", color: "#F59E0B" },
];

export default function DimingaDashboard() {
  return (
    <DashboardLayout
      title="Dashboard"
      subtitle="Welcome back — here's an overview of your creator studio."
    >
      <PageMeta title="Dashboard" description="Your Diminga creator dashboard — stats, studios, and quick actions." />
      <div style={s.statsRow}>
        {STATS.map((st) => (
          <div key={st.label} style={s.statCard}>
            <div style={s.statIcon}>{st.icon}</div>
            <div style={s.statValue}>{st.value}</div>
            <div style={s.statLabel}>{st.label}</div>
            <div style={s.statSub}>{st.sub}</div>
          </div>
        ))}
      </div>

      <div style={s.twoCol}>
        <div>
          <h2 style={s.sectionTitle}>Your studios</h2>
          <div style={s.studioGrid}>
            {STUDIO_MODULES.map((m) => (
              <Link key={m.key} to={m.route} style={s.studioCard}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = m.color;
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "#E8E8E4";
                  el.style.transform = "translateY(0)";
                }}
              >
                <div style={{ ...s.studioIcon, background: m.color + "15", color: m.color }}>
                  {m.icon}
                </div>
                <div>
                  <div style={s.studioName}>{m.label}</div>
                  <div style={s.studioDes}>{m.desc}</div>
                </div>
                <span style={{ ...s.studioArrow, color: m.color }}>→</span>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 style={s.sectionTitle}>Quick actions</h2>
          <div style={s.actionsList}>
            {QUICK_ACTIONS.map((a) => (
              <Link key={a.label} to={a.route} style={s.actionItem}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = "#F2F2EF"}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = "#fff"}
              >
                <span style={{ ...s.actionIcon, color: a.color }}>{a.icon}</span>
                <span style={s.actionLabel}>{a.label}</span>
                <span style={s.actionArrow}>→</span>
              </Link>
            ))}
          </div>

          <h2 style={{ ...s.sectionTitle, marginTop: 32 }}>Recent activity</h2>
          <div style={s.emptyState}>
            <div style={s.emptyIcon}>◎</div>
            <p style={s.emptyText}>No activity yet. Create your first piece of content to get started.</p>
            <Link to={ROUTES.THREADITOR} style={s.emptyBtn}>Start writing →</Link>
          </div>
        </div>
      </div>

      <div style={s.web3Banner}>
        <div>
          <div style={s.bannerTitle}>🔗 Connect your wallet to unlock Web3 features</div>
          <div style={s.bannerSub}>Mint NFTs, receive royalties, and enable token-gated content for your fans.</div>
        </div>
        <Link to={ROUTES.SETTINGS} style={s.bannerBtn}>Connect wallet →</Link>
      </div>
    </DashboardLayout>
  );
}

const s: Record<string, React.CSSProperties> = {
  statsRow: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 32 },
  statCard: {
    background: "#fff", border: "1px solid #E8E8E4", borderRadius: 12,
    padding: "20px 20px 16px", position: "relative" as const,
  },
  statIcon: { fontSize: 18, marginBottom: 10, color: "#0066FF" },
  statValue: { fontSize: 28, fontWeight: 800, letterSpacing: "-0.03em", color: "#111110" },
  statLabel: { fontSize: 13, color: "#555", fontWeight: 500, marginTop: 4 },
  statSub: { fontSize: 11, color: "#aaa", marginTop: 3 },
  twoCol: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 32 },
  sectionTitle: { fontSize: 16, fontWeight: 700, color: "#111110", margin: "0 0 16px", letterSpacing: "-0.01em" },
  studioGrid: { display: "flex", flexDirection: "column" as const, gap: 10 },
  studioCard: {
    display: "flex", alignItems: "center", gap: 14, padding: "14px 16px",
    background: "#fff", border: "1.5px solid #E8E8E4", borderRadius: 10,
    textDecoration: "none", color: "#111110", transition: "all 0.2s",
  },
  studioIcon: { width: 36, height: 36, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 },
  studioName: { fontSize: 14, fontWeight: 600, color: "#111110" },
  studioDes: { fontSize: 12, color: "#888", marginTop: 2 },
  studioArrow: { marginLeft: "auto", fontSize: 16, flexShrink: 0 },
  actionsList: { display: "flex", flexDirection: "column" as const, gap: 8 },
  actionItem: {
    display: "flex", alignItems: "center", gap: 12, padding: "12px 14px",
    background: "#fff", border: "1px solid #E8E8E4", borderRadius: 10,
    textDecoration: "none", color: "#111110", fontSize: 14, fontWeight: 500,
    transition: "background 0.15s",
  },
  actionIcon: { fontSize: 16, flexShrink: 0 },
  actionLabel: { flex: 1 },
  actionArrow: { color: "#ccc", fontSize: 14 },
  emptyState: {
    background: "#fff", border: "1.5px dashed #E8E8E4", borderRadius: 12,
    padding: "28px 20px", textAlign: "center" as const,
  },
  emptyIcon: { fontSize: 28, color: "#ddd", marginBottom: 10 },
  emptyText: { fontSize: 13, color: "#888", margin: "0 0 16px", lineHeight: 1.5 },
  emptyBtn: {
    display: "inline-block", fontSize: 13, fontWeight: 600,
    color: "#0066FF", textDecoration: "none",
    background: "#0066FF10", border: "1px solid #0066FF30",
    borderRadius: 8, padding: "8px 16px",
  },
  web3Banner: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    background: "#111110", borderRadius: 14, padding: "22px 28px",
    flexWrap: "wrap" as const, gap: 16,
  },
  bannerTitle: { fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 4 },
  bannerSub: { fontSize: 13, color: "#888" },
  bannerBtn: {
    fontSize: 14, fontWeight: 600, color: "#fff",
    background: "#0066FF", borderRadius: 10, padding: "10px 20px",
    textDecoration: "none", whiteSpace: "nowrap" as const,
  },
};
