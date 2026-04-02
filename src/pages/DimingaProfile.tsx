import { useParams, Link } from "react-router-dom";
import { ROUTES } from "@/lib/constants";

const MOCK_CONTENT = [
  { type: "article", title: "The future of creator ownership", tag: "Publishing", color: "#00C896", icon: "✦" },
  { type: "video",   title: "Behind the scenes: my studio setup", tag: "Video",     color: "#FF6B35", icon: "▶" },
  { type: "nft",     title: "Genesis collection #001",            tag: "NFT",       color: "#9B5CF6", icon: "◈" },
];

export default function DimingaProfile() {
  const { username } = useParams();
  const displayName = username === "me" ? "Your Profile" : username ?? "Creator";

  return (
    <div style={s.root}>
      <nav style={s.nav}>
        <Link to={ROUTES.HOME} style={s.logo}>
          <span style={s.logoMark}>◈</span> Diminga
        </Link>
        <div style={s.navRight}>
          <Link to={ROUTES.DASHBOARD} style={s.dashLink}>Go to studio →</Link>
        </div>
      </nav>

      <div style={s.cover} />

      <div style={s.profileHeader}>
        <div style={s.avatarWrap}>
          <div style={s.avatar}>{displayName.charAt(0).toUpperCase()}</div>
        </div>
        <div style={s.profileMeta}>
          <h1 style={s.name}>{displayName}</h1>
          <p style={s.bio}>Creator · Web3 enthusiast · Building on Diminga</p>
          <div style={s.profileStats}>
            <span style={s.stat}><strong>0</strong> followers</span>
            <span style={s.stat}><strong>0</strong> following</span>
            <span style={s.stat}><strong>0</strong> NFTs</span>
          </div>
        </div>
        <div style={s.profileActions}>
          <button style={s.followBtn}>Follow</button>
          <button style={s.msgBtn}>Message</button>
          {username === "me" && (
            <Link to={ROUTES.SETTINGS} style={s.editBtn}>Edit profile</Link>
          )}
        </div>
      </div>

      <div style={s.main}>
        <div style={s.contentSection}>
          <h2 style={s.sectionTitle}>Content</h2>
          {MOCK_CONTENT.length === 0 ? (
            <div style={s.empty}>This creator hasn't published anything yet.</div>
          ) : (
            <div style={s.contentGrid}>
              {MOCK_CONTENT.map((c) => (
                <div key={c.title} style={s.contentCard}>
                  <div style={{ ...s.contentIcon, background: c.color + "15", color: c.color }}>{c.icon}</div>
                  <div style={{ ...s.contentTag, color: c.color, background: c.color + "10" }}>{c.tag}</div>
                  <h3 style={s.contentTitle}>{c.title}</h3>
                  <button style={{ ...s.contentBtn, borderColor: c.color, color: c.color }}>
                    View →
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={s.nftSection}>
          <h2 style={s.sectionTitle}>NFT Collection</h2>
          <div style={s.nftEmpty}>
            <div style={s.nftEmptyIcon}>◈</div>
            <p>No NFTs minted yet.</p>
            {username === "me" && (
              <Link to={ROUTES.THREADITOR} style={s.mintLink}>Mint your first NFT →</Link>
            )}
          </div>
        </div>
      </div>

      <footer style={s.footer}>
        <Link to={ROUTES.HOME} style={s.footerLink}>← Back to Diminga</Link>
        <span style={s.footerCopy}>© 2025 Diminga</span>
      </footer>
    </div>
  );
}

const s: Record<string, React.CSSProperties> = {
  root: { fontFamily: "'DM Sans', sans-serif", background: "#FAFAF8", minHeight: "100vh" },
  nav: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "16px 48px", background: "#fff", borderBottom: "1px solid #E8E8E4",
    position: "sticky" as const, top: 0, zIndex: 10,
  },
  logo: { display: "flex", alignItems: "center", gap: 8, textDecoration: "none", color: "#111110", fontSize: 20, fontWeight: 700 },
  logoMark: { color: "#0066FF" },
  navRight: {},
  dashLink: { fontSize: 14, fontWeight: 600, color: "#0066FF", textDecoration: "none" },
  cover: { height: 200, background: "linear-gradient(135deg, #0066FF15, #9B5CF620)" },
  profileHeader: {
    maxWidth: 900, margin: "-48px auto 0", padding: "0 48px",
    display: "flex", alignItems: "flex-end", gap: 24, flexWrap: "wrap" as const,
    paddingBottom: 24, borderBottom: "1px solid #E8E8E4",
  },
  avatarWrap: { flexShrink: 0 },
  avatar: {
    width: 88, height: 88, borderRadius: "50%", background: "#0066FF",
    color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: 36, fontWeight: 800, border: "4px solid #fff",
    boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
  },
  profileMeta: { flex: 1 },
  name: { fontSize: 28, fontWeight: 800, color: "#111110", margin: "0 0 6px", letterSpacing: "-0.02em" },
  bio: { fontSize: 14, color: "#666", margin: "0 0 14px" },
  profileStats: { display: "flex", gap: 20 },
  stat: { fontSize: 14, color: "#888" },
  profileActions: { display: "flex", gap: 10 },
  followBtn: {
    padding: "10px 22px", background: "#0066FF", color: "#fff", border: "none",
    borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
  },
  msgBtn: {
    padding: "10px 18px", background: "#fff", color: "#111110",
    border: "1.5px solid #E8E8E4", borderRadius: 10, fontSize: 14, fontWeight: 600,
    cursor: "pointer", fontFamily: "inherit",
  },
  editBtn: {
    padding: "10px 18px", background: "#fff", color: "#111110",
    border: "1.5px solid #E8E8E4", borderRadius: 10, fontSize: 14, fontWeight: 600,
    textDecoration: "none",
  },
  main: { maxWidth: 900, margin: "0 auto", padding: "40px 48px" },
  contentSection: { marginBottom: 48 },
  sectionTitle: { fontSize: 18, fontWeight: 800, color: "#111110", margin: "0 0 20px", letterSpacing: "-0.02em" },
  contentGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 },
  contentCard: {
    background: "#fff", border: "1px solid #E8E8E4", borderRadius: 12, padding: 20,
    transition: "all 0.2s",
  },
  contentIcon: {
    width: 36, height: 36, borderRadius: 8, display: "flex", alignItems: "center",
    justifyContent: "center", fontSize: 16, marginBottom: 10,
  },
  contentTag: {
    display: "inline-block", fontSize: 11, fontWeight: 700, textTransform: "uppercase" as const,
    letterSpacing: "0.08em", padding: "2px 8px", borderRadius: 999, marginBottom: 10,
  },
  contentTitle: { fontSize: 14, fontWeight: 700, color: "#111110", margin: "0 0 14px", lineHeight: 1.4 },
  contentBtn: {
    fontSize: 12, fontWeight: 700, background: "none", border: "1px solid",
    borderRadius: 8, padding: "6px 14px", cursor: "pointer", fontFamily: "inherit",
  },
  empty: { fontSize: 14, color: "#aaa", padding: "40px 0" },
  nftSection: { },
  nftEmpty: {
    background: "#fff", border: "1.5px dashed #E8E8E4", borderRadius: 14,
    padding: "48px 24px", textAlign: "center" as const, color: "#aaa", fontSize: 14,
  },
  nftEmptyIcon: { fontSize: 36, marginBottom: 12, color: "#ddd" },
  mintLink: { display: "inline-block", marginTop: 12, color: "#0066FF", fontWeight: 700, textDecoration: "none", fontSize: 14 },
  footer: {
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "24px 48px", borderTop: "1px solid #E8E8E4",
  },
  footerLink: { fontSize: 13, color: "#0066FF", textDecoration: "none", fontWeight: 600 },
  footerCopy: { fontSize: 13, color: "#999" },
};
