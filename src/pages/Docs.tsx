import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "@/lib/constants";

const SECTIONS = [
  {
    title: "Getting started",
    items: ["Introduction", "Creating your account", "Connecting your wallet", "Your first studio"],
  },
  {
    title: "Studio guides",
    items: ["Store Builder", "Threaditor", "Video Studio", "Podcast Studio", "NeuraSocial", "Innovators Hub"],
  },
  {
    title: "Web3 & NFTs",
    items: ["How NFT minting works", "Setting royalties", "Token-gating content", "Smart contract reference"],
  },
  {
    title: "Payments",
    items: ["Stripe integration", "Crypto payments", "Withdrawing earnings", "Tax & compliance"],
  },
];

export default function Docs() {
  const [active, setActive] = useState("Introduction");

  return (
    <div style={s.root}>
      <nav style={s.nav}>
        <Link to={ROUTES.HOME} style={s.logo}><span style={s.logoMark}>◈</span> Diminga</Link>
        <div style={s.navRight}>
          <Link to={ROUTES.DASHBOARD} style={s.navLink}>Dashboard</Link>
          <Link to={ROUTES.AUTH} style={s.cta}>Sign up free</Link>
        </div>
      </nav>

      <div style={s.layout}>
        <aside style={s.sidebar}>
          <div style={s.sidebarTitle}>Documentation</div>
          {SECTIONS.map(sec => (
            <div key={sec.title} style={s.sideSection}>
              <div style={s.sideSectionTitle}>{sec.title}</div>
              {sec.items.map(item => (
                <button
                  key={item}
                  style={{ ...s.sideItem, ...(active === item ? s.sideItemActive : {}) }}
                  onClick={() => setActive(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          ))}
        </aside>

        <main style={s.main}>
          <div style={s.breadcrumb}>
            Docs / <span style={{ color: "#111110" }}>{active}</span>
          </div>
          <h1 style={s.title}>{active}</h1>
          <p style={s.body}>
            This documentation page covers <strong>{active}</strong>.
            Full content is being written — check back soon or{" "}
            <Link to={ROUTES.AUTH} style={{ color: "#0066FF", fontWeight: 600 }}>
              sign up
            </Link>{" "}
            to get early access to our creator guides and tutorials.
          </p>
          <div style={s.placeholder}>
            <span style={s.placeholderIcon}>📝</span>
            <p>Content coming soon.</p>
            <Link to={ROUTES.AUTH} style={s.placeholderBtn}>Get started instead →</Link>
          </div>
        </main>
      </div>
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
  navRight: { display: "flex", alignItems: "center", gap: 16 },
  navLink: { fontSize: 14, color: "#555", textDecoration: "none", fontWeight: 500 },
  cta: {
    fontSize: 14, fontWeight: 700, background: "#111110", color: "#fff",
    padding: "9px 20px", borderRadius: 9, textDecoration: "none",
  },
  layout: { display: "grid", gridTemplateColumns: "240px 1fr", minHeight: "calc(100vh - 57px)" },
  sidebar: {
    background: "#fff", borderRight: "1px solid #E8E8E4",
    padding: "28px 16px", position: "sticky" as const, top: 57,
    height: "calc(100vh - 57px)", overflowY: "auto" as const,
  },
  sidebarTitle: { fontSize: 11, fontWeight: 800, color: "#bbb", textTransform: "uppercase" as const, letterSpacing: "0.12em", padding: "0 10px", marginBottom: 16 },
  sideSection: { marginBottom: 24 },
  sideSectionTitle: { fontSize: 11, fontWeight: 700, color: "#999", textTransform: "uppercase" as const, letterSpacing: "0.1em", padding: "0 10px", marginBottom: 6 },
  sideItem: {
    display: "block", width: "100%", textAlign: "left" as const,
    padding: "8px 10px", background: "none", border: "none", borderRadius: 7,
    fontSize: 13, color: "#555", cursor: "pointer", fontFamily: "inherit",
    transition: "all 0.15s",
  },
  sideItemActive: { background: "#F2F2EF", color: "#111110", fontWeight: 700 },
  main: { padding: "48px 64px", maxWidth: 720 },
  breadcrumb: { fontSize: 12, color: "#aaa", marginBottom: 12 },
  title: { fontSize: 36, fontWeight: 800, color: "#111110", margin: "0 0 16px", letterSpacing: "-0.03em" },
  body: { fontSize: 16, color: "#555", lineHeight: 1.7, margin: "0 0 36px" },
  placeholder: {
    background: "#fff", border: "1.5px dashed #E8E8E4", borderRadius: 14,
    padding: "48px 24px", textAlign: "center" as const, color: "#aaa",
  },
  placeholderIcon: { fontSize: 36, display: "block", marginBottom: 12 },
  placeholderBtn: {
    display: "inline-block", marginTop: 16, color: "#0066FF",
    fontWeight: 700, textDecoration: "none", fontSize: 14,
    background: "#0066FF10", border: "1px solid #0066FF30",
    borderRadius: 8, padding: "8px 16px",
  },
};
