import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ROUTES, STUDIO_MODULES, BRAND } from "@/lib/constants";

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export default function DashboardLayout({ children, title, subtitle }: DashboardLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const isActive = (route: string) => location.pathname === route;

  return (
    <div style={s.root}>
      {/* ── Sidebar ── */}
      <aside style={{ ...s.sidebar, width: sidebarOpen ? 240 : 64 }}>
        {/* Logo */}
        <div style={s.sidebarTop}>
          <Link to={ROUTES.HOME} style={s.logo}>
            <span style={s.logoMark}>◈</span>
            {sidebarOpen && <span style={s.logoText}>Diminga</span>}
          </Link>
          <button style={s.toggleBtn} onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? "‹" : "›"}
          </button>
        </div>

        {/* Main nav */}
        <nav style={s.nav}>
          {sidebarOpen && <div style={s.navLabel}>Overview</div>}
          <Link
            to={ROUTES.DASHBOARD}
            style={{
              ...s.navItem,
              ...(isActive(ROUTES.DASHBOARD) ? s.navItemActive : {}),
            }}
          >
            <span style={s.navIcon}>⊞</span>
            {sidebarOpen && <span>Dashboard</span>}
          </Link>

          {sidebarOpen && <div style={{ ...s.navLabel, marginTop: 20 }}>Studios</div>}
          {STUDIO_MODULES.map((m) => (
            <Link
              key={m.key}
              to={m.route}
              title={!sidebarOpen ? m.label : undefined}
              style={{
                ...s.navItem,
                ...(isActive(m.route) ? { ...s.navItemActive, borderLeftColor: m.color } : {}),
              }}
            >
              <span style={{
                ...s.navIcon,
                color: isActive(m.route) ? m.color : "inherit",
              }}>
                {m.icon}
              </span>
              {sidebarOpen && <span>{m.label}</span>}
            </Link>
          ))}

          {sidebarOpen && <div style={{ ...s.navLabel, marginTop: 20 }}>Account</div>}
          <Link
            to={ROUTES.SETTINGS}
            style={{
              ...s.navItem,
              ...(isActive(ROUTES.SETTINGS) ? s.navItemActive : {}),
            }}
          >
            <span style={s.navIcon}>⚙</span>
            {sidebarOpen && <span>Settings</span>}
          </Link>
          <Link
            to="/profile/me"
            style={s.navItem}
          >
            <span style={s.navIcon}>◉</span>
            {sidebarOpen && <span>My Profile</span>}
          </Link>
        </nav>

        {/* Wallet badge */}
        {sidebarOpen && (
          <div style={s.walletBadge}>
            <div style={s.walletIcon}>◈</div>
            <div>
              <div style={s.walletLabel}>Wallet</div>
              <div style={s.walletAddr}>Not connected</div>
            </div>
            <button
              style={s.walletBtn}
              onClick={() => navigate(ROUTES.SETTINGS)}
            >
              Connect
            </button>
          </div>
        )}
      </aside>

      {/* ── Main content ── */}
      <main style={s.main}>
        {/* Top bar */}
        <header style={s.topbar}>
          <div>
            {title && <h1 style={s.pageTitle}>{title}</h1>}
            {subtitle && <p style={s.pageSub}>{subtitle}</p>}
          </div>
          <div style={s.topbarRight}>
            <Link to={ROUTES.PRICING} style={s.upgradeBtn}>⬆ Upgrade</Link>
            <div style={s.avatar}>S</div>
          </div>
        </header>

        {/* Page content */}
        <div style={s.content}>{children}</div>
      </main>
    </div>
  );
}

const s: Record<string, React.CSSProperties> = {
  root: {
    display: "flex",
    minHeight: "100vh",
    background: "#FAFAF8",
    fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
  },
  sidebar: {
    background: "#fff",
    borderRight: "1px solid #E8E8E4",
    display: "flex",
    flexDirection: "column",
    position: "sticky" as const,
    top: 0,
    height: "100vh",
    overflow: "hidden",
    transition: "width 0.22s ease",
    flexShrink: 0,
    zIndex: 10,
  },
  sidebarTop: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 16px 16px",
    borderBottom: "1px solid #E8E8E4",
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    textDecoration: "none",
    color: "#111110",
    overflow: "hidden",
  },
  logoMark: { fontSize: 20, color: "#0066FF", flexShrink: 0 },
  logoText: { fontSize: 16, fontWeight: 700, letterSpacing: "-0.02em", whiteSpace: "nowrap" as const },
  toggleBtn: {
    background: "none",
    border: "1px solid #E8E8E4",
    borderRadius: 6,
    width: 24,
    height: 24,
    cursor: "pointer",
    color: "#888",
    fontSize: 14,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  nav: {
    flex: 1,
    overflowY: "auto" as const,
    padding: "12px 8px",
  },
  navLabel: {
    fontSize: 10,
    fontWeight: 700,
    textTransform: "uppercase" as const,
    letterSpacing: "0.1em",
    color: "#bbb",
    padding: "0 10px",
    marginBottom: 4,
    whiteSpace: "nowrap" as const,
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "9px 10px",
    borderRadius: 8,
    textDecoration: "none",
    color: "#555",
    fontSize: 14,
    fontWeight: 450,
    borderLeft: "2px solid transparent",
    transition: "all 0.15s",
    marginBottom: 2,
    whiteSpace: "nowrap" as const,
    overflow: "hidden",
  },
  navItemActive: {
    background: "#F2F2EF",
    color: "#111110",
    fontWeight: 600,
    borderLeftColor: "#0066FF",
  },
  navIcon: { fontSize: 15, flexShrink: 0, width: 18, textAlign: "center" as const },
  walletBadge: {
    margin: 12,
    padding: "12px",
    background: "#F2F2EF",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    gap: 10,
    border: "1px solid #E8E8E4",
  },
  walletIcon: { fontSize: 18, color: "#0066FF", flexShrink: 0 },
  walletLabel: { fontSize: 10, color: "#999", textTransform: "uppercase" as const, letterSpacing: "0.08em" },
  walletAddr: { fontSize: 12, color: "#555", fontWeight: 500 },
  walletBtn: {
    marginLeft: "auto",
    background: "#0066FF",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    padding: "5px 10px",
    fontSize: 12,
    fontWeight: 600,
    cursor: "pointer",
    flexShrink: 0,
  },
  main: { flex: 1, display: "flex", flexDirection: "column" as const, minWidth: 0 },
  topbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 32px",
    borderBottom: "1px solid #E8E8E4",
    background: "#fff",
    position: "sticky" as const,
    top: 0,
    zIndex: 5,
  },
  pageTitle: { fontSize: 22, fontFamily: "'Fraunces', serif", fontWeight: 700, letterSpacing: "-0.02em", margin: 0, color: "#111110" },
  pageSub: { fontSize: 13, color: "#888", margin: "4px 0 0", fontWeight: 400 },
  topbarRight: { display: "flex", alignItems: "center", gap: 14 },
  upgradeBtn: {
    fontSize: 13,
    fontWeight: 600,
    color: "#0066FF",
    background: "#0066FF10",
    border: "1px solid #0066FF30",
    borderRadius: 8,
    padding: "7px 14px",
    textDecoration: "none",
    transition: "background 0.2s",
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: "50%",
    background: "#0066FF",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: 14,
    cursor: "pointer",
  },
  content: { flex: 1, padding: "32px" },
};
