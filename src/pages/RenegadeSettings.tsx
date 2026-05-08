import { useEffect, useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import PageMeta from "@/components/shared/PageMeta";
import { supabase } from "@/integrations/supabase/client";

type Tab = "profile" | "wallet" | "billing" | "notifications" | "connection";

export default function RenegadeSettings() {
  const [tab, setTab] = useState<Tab>("profile");
  const [walletConnected, setWalletConnected] = useState(false);

  return (
    <DashboardLayout title="Settings" subtitle="Manage your account, wallet & billing">
      <PageMeta title="Settings" description="Manage your Renegade account, wallet connections, and billing." />
      <div style={s.layout}>
        <div style={s.sideNav}>
          {(["profile","wallet","billing","notifications","connection"] as Tab[]).map(t => (
            <button
              key={t}
              style={{ ...s.sideNavItem, ...(tab === t ? s.sideNavActive : {}) }}
              onClick={() => setTab(t)}
            >
              {t === "profile" && "◉ "}
              {t === "wallet" && "◈ "}
              {t === "billing" && "◆ "}
              {t === "notifications" && "◎ "}
              {t === "connection" && "⚡ "}
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        <div style={s.content}>
          {tab === "profile" && (
            <Section title="Profile" sub="How you appear to other creators and your audience.">
              <div style={s.avatarRow}>
                <div style={s.avatarLarge}>S</div>
                <button style={s.changeAvatarBtn}>Change photo</button>
              </div>
              <Field label="Display name" defaultValue="Sagz" />
              <Field label="Username" defaultValue="sagz101" />
              <Field label="Bio" textarea placeholder="Tell the world about your creative work…" />
              <Field label="Website" placeholder="https://yoursite.com" />
              <Field label="Twitter / X handle" placeholder="@yourhandle" />
              <SaveBtn />
            </Section>
          )}

          {tab === "wallet" && (
            <Section title="Web3 Wallet" sub="Connect your wallet to mint NFTs, receive royalties, and enable token-gating.">
              {walletConnected ? (
                <div style={s.walletCard}>
                  <div style={s.walletCardIcon}>◈</div>
                  <div>
                    <div style={s.walletCardAddr}>0x1a2b…3c4d</div>
                    <div style={s.walletCardChain}>Polygon · MetaMask</div>
                  </div>
                  <button style={{ ...s.dangerBtn }} onClick={() => setWalletConnected(false)}>
                    Disconnect
                  </button>
                </div>
              ) : (
                <div style={s.walletEmpty}>
                  <div style={s.walletEmptyIcon}>◈</div>
                  <h3 style={s.walletEmptyTitle}>No wallet connected</h3>
                  <p style={s.walletEmptyBody}>Connect a wallet to unlock NFT minting, royalties, and token-gated content.</p>
                  <div style={s.walletOptions}>
                    {["MetaMask","Coinbase Wallet","WalletConnect","Phantom"].map(w => (
                      <button
                        key={w}
                        style={s.walletOption}
                        onClick={() => setWalletConnected(true)}
                      >
                        <span style={s.walletOptionIcon}>◈</span>
                        {w}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div style={s.chainSection}>
                <div style={s.chainLabel}>Preferred network</div>
                <div style={s.chainOptions}>
                  {[
                    { name: "Polygon", id: "137", rec: true },
                    { name: "Ethereum", id: "1", rec: false },
                    { name: "Base", id: "8453", rec: false },
                  ].map(c => (
                    <label key={c.name} style={s.chainOption}>
                      <input type="radio" name="chain" defaultChecked={c.rec} style={{ marginRight: 8 }} />
                      {c.name} {c.rec && <span style={s.recBadge}>Recommended</span>}
                    </label>
                  ))}
                </div>
              </div>
            </Section>
          )}

          {tab === "billing" && (
            <Section title="Billing" sub="Manage your plan and payment methods.">
              <div style={s.planCard}>
                <div style={s.planCardLeft}>
                  <div style={s.planCardName}>Free plan</div>
                  <div style={s.planCardSub}>$0 / month · 5% platform fee</div>
                </div>
                <a href="/pricing" style={s.upgradeBtn}>Upgrade →</a>
              </div>
              <div style={s.infoBox}>
                <p style={s.infoText}>You're on the Free plan. Upgrade to Creator or Pro to remove the platform fee and unlock advanced features.</p>
              </div>
              <h3 style={s.subTitle}>Payment methods</h3>
              <div style={s.emptyBilling}>
                No payment methods saved. Add one when you upgrade your plan.
              </div>
            </Section>
          )}

          {tab === "notifications" && (
            <Section title="Notifications" sub="Choose what emails and alerts you receive.">
              {[
                ["New follower", "When someone follows your profile"],
                ["NFT sold", "When one of your NFTs is purchased"],
                ["New order", "When a customer places an order in your store"],
                ["New comment", "When someone comments on your content"],
                ["Platform updates", "Product updates and feature announcements"],
              ].map(([label, desc]) => (
                <div key={label} style={s.notifRow}>
                  <div>
                    <div style={s.notifLabel}>{label}</div>
                    <div style={s.notifDesc}>{desc}</div>
                  </div>
                  <label style={s.toggle}>
                    <input type="checkbox" defaultChecked style={{ display: "none" }} />
                    <div style={s.toggleTrack}>
                      <div style={s.toggleThumb} />
                    </div>
                  </label>
                </div>
              ))}
              <SaveBtn label="Save preferences" />
            </Section>
          )}

          {tab === "connection" && (
            <Section title="Supabase Connection" sub="Verify your project URL, anon key, and database access are wired up correctly.">
              <SupabaseConnectionCheck />
            </Section>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}

type CheckStatus = "idle" | "running" | "ok" | "fail";
interface CheckResult {
  status: CheckStatus;
  detail?: string;
}

function SupabaseConnectionCheck() {
  const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
  const anonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined;
  const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID as string | undefined;

  const [envCheck, setEnvCheck] = useState<CheckResult>({ status: "idle" });
  const [restCheck, setRestCheck] = useState<CheckResult>({ status: "idle" });
  const [authCheck, setAuthCheck] = useState<CheckResult>({ status: "idle" });
  const [dbCheck, setDbCheck] = useState<CheckResult>({ status: "idle" });
  const [running, setRunning] = useState(false);

  const runChecks = async () => {
    setRunning(true);
    setEnvCheck({ status: "running" });
    setRestCheck({ status: "running" });
    setAuthCheck({ status: "running" });
    setDbCheck({ status: "running" });

    // 1. Env vars present
    if (url && anonKey && projectId) {
      setEnvCheck({ status: "ok", detail: `Project ${projectId}` });
    } else {
      setEnvCheck({ status: "fail", detail: "Missing VITE_SUPABASE_* env vars" });
      setRestCheck({ status: "fail", detail: "Skipped — env vars missing" });
      setAuthCheck({ status: "fail", detail: "Skipped — env vars missing" });
      setDbCheck({ status: "fail", detail: "Skipped — env vars missing" });
      setRunning(false);
      return;
    }

    // 2. REST endpoint reachable with anon key
    try {
      const res = await fetch(`${url}/rest/v1/`, {
        headers: { apikey: anonKey!, Authorization: `Bearer ${anonKey}` },
      });
      if (res.ok || res.status === 200 || res.status === 404) {
        setRestCheck({ status: "ok", detail: `HTTP ${res.status} from /rest/v1/` });
      } else if (res.status === 401) {
        setRestCheck({ status: "fail", detail: "401 Unauthorized — anon key rejected" });
      } else {
        setRestCheck({ status: "fail", detail: `Unexpected HTTP ${res.status}` });
      }
    } catch (e: any) {
      setRestCheck({ status: "fail", detail: e?.message ?? "Network error" });
    }

    // 3. Auth client reachable
    try {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        setAuthCheck({ status: "fail", detail: error.message });
      } else {
        setAuthCheck({
          status: "ok",
          detail: data.session ? `Signed in as ${data.session.user.email ?? data.session.user.id}` : "Reachable · no active session",
        });
      }
    } catch (e: any) {
      setAuthCheck({ status: "fail", detail: e?.message ?? "Auth error" });
    }

    // 4. Database query (profiles table — public RLS-safe count)
    try {
      const { error, count } = await supabase
        .from("profiles")
        .select("*", { count: "exact", head: true });
      if (error) {
        setDbCheck({ status: "fail", detail: error.message });
      } else {
        setDbCheck({ status: "ok", detail: `profiles table reachable (${count ?? 0} visible rows)` });
      }
    } catch (e: any) {
      setDbCheck({ status: "fail", detail: e?.message ?? "DB error" });
    }

    setRunning(false);
  };

  useEffect(() => { runChecks(); /* eslint-disable-next-line */ }, []);

  const maskedKey = anonKey ? `${anonKey.slice(0, 12)}…${anonKey.slice(-6)}` : "—";

  return (
    <div>
      <div style={s.connMetaGrid}>
        <MetaRow label="Project URL" value={url ?? "missing"} />
        <MetaRow label="Project ID" value={projectId ?? "missing"} />
        <MetaRow label="Anon key" value={maskedKey} mono />
      </div>

      <div style={s.checkList}>
        <CheckRow title="Environment variables" result={envCheck} />
        <CheckRow title="REST endpoint reachable" result={restCheck} />
        <CheckRow title="Auth service" result={authCheck} />
        <CheckRow title="Database query (profiles)" result={dbCheck} />
      </div>

      <button style={s.runBtn} onClick={runChecks} disabled={running}>
        {running ? "Running checks…" : "Re-run checks"}
      </button>
    </div>
  );
}

function MetaRow({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div style={s.metaRow}>
      <span style={s.metaLabel}>{label}</span>
      <span style={{ ...s.metaValue, fontFamily: mono ? "'Space Mono', monospace" : undefined }}>{value}</span>
    </div>
  );
}

function CheckRow({ title, result }: { title: string; result: CheckResult }) {
  const color =
    result.status === "ok" ? "#00C896" :
    result.status === "fail" ? "#E8650A" :
    result.status === "running" ? "#888" : "#ccc";
  const icon =
    result.status === "ok" ? "✓" :
    result.status === "fail" ? "✕" :
    result.status === "running" ? "…" : "○";
  return (
    <div style={s.checkRow}>
      <div style={{ ...s.checkDot, background: color }}>{icon}</div>
      <div style={{ flex: 1 }}>
        <div style={s.checkTitle}>{title}</div>
        {result.detail && <div style={s.checkDetail}>{result.detail}</div>}
      </div>
      <div style={{ ...s.checkBadge, color, borderColor: color + "55" }}>
        {result.status.toUpperCase()}
      </div>
    </div>
  );
}

function Section({ title, sub, children }: { title: string; sub: string; children: React.ReactNode }) {
  return (
    <div style={s.section}>
      <h2 style={s.sectionTitle}>{title}</h2>
      <p style={s.sectionSub}>{sub}</p>
      <div style={s.sectionBody}>{children}</div>
    </div>
  );
}

function Field({ label, defaultValue, placeholder, textarea }: { label: string; defaultValue?: string; placeholder?: string; textarea?: boolean }) {
  return (
    <div style={s.field}>
      <label style={s.fieldLabel}>{label}</label>
      {textarea
        ? <textarea style={{ ...s.input, minHeight: 90, resize: "vertical" as const }} defaultValue={defaultValue} placeholder={placeholder} />
        : <input style={s.input} defaultValue={defaultValue} placeholder={placeholder} />
      }
    </div>
  );
}

function SaveBtn({ label = "Save changes" }: { label?: string }) {
  return <button style={s.saveBtn}>{label}</button>;
}

const s: Record<string, React.CSSProperties> = {
  layout: { display: "grid", gridTemplateColumns: "200px 1fr", gap: 32 },
  sideNav: { display: "flex", flexDirection: "column" as const, gap: 4 },
  sideNavItem: {
    display: "flex", alignItems: "center", gap: 8, padding: "10px 14px",
    background: "none", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 500,
    color: "#666", cursor: "pointer", textAlign: "left" as const, fontFamily: "inherit",
    transition: "all 0.15s",
  },
  sideNavActive: { background: "#F2F2EF", color: "#111110", fontWeight: 700 },
  content: { minWidth: 0 },
  section: {},
  sectionTitle: { fontSize: 20, fontWeight: 800, color: "#111110", margin: "0 0 6px", letterSpacing: "-0.02em" },
  sectionSub: { fontSize: 14, color: "#888", margin: "0 0 28px" },
  sectionBody: { display: "flex", flexDirection: "column" as const, gap: 18, maxWidth: 520 },
  connMetaGrid: {
    display: "flex", flexDirection: "column" as const, gap: 8,
    background: "#F8F8F4", border: "1px solid #E8E8E4", borderRadius: 12,
    padding: "14px 16px", marginBottom: 20,
  },
  metaRow: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, fontSize: 13 },
  metaLabel: { color: "#888", fontWeight: 500 },
  metaValue: { color: "#111110", fontWeight: 600, wordBreak: "break-all" as const, textAlign: "right" as const },
  checkList: { display: "flex", flexDirection: "column" as const, gap: 10, marginBottom: 18 },
  checkRow: {
    display: "flex", alignItems: "center", gap: 12, padding: "12px 14px",
    background: "#fff", border: "1px solid #E8E8E4", borderRadius: 10,
  },
  checkDot: {
    width: 26, height: 26, borderRadius: "50%", display: "flex",
    alignItems: "center", justifyContent: "center", color: "#fff",
    fontSize: 13, fontWeight: 700, flexShrink: 0,
  },
  checkTitle: { fontSize: 14, fontWeight: 600, color: "#111110" },
  checkDetail: { fontSize: 12, color: "#888", marginTop: 2, fontFamily: "'Space Mono', monospace" },
  checkBadge: {
    fontSize: 10, fontWeight: 700, letterSpacing: "0.08em",
    border: "1px solid", borderRadius: 6, padding: "3px 8px",
  },
  runBtn: {
    padding: "10px 18px", background: "#111110", color: "#fff", border: "none",
    borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: "pointer",
    fontFamily: "inherit",
  },
  avatarRow: { display: "flex", alignItems: "center", gap: 16, marginBottom: 8 },
  avatarLarge: {
    width: 64, height: 64, borderRadius: "50%", background: "#0066FF",
    color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
    fontSize: 24, fontWeight: 800,
  },
  changeAvatarBtn: {
    fontSize: 13, fontWeight: 600, color: "#0066FF", background: "#0066FF10",
    border: "1px solid #0066FF30", borderRadius: 8, padding: "8px 14px", cursor: "pointer",
    fontFamily: "inherit",
  },
  field: { display: "flex", flexDirection: "column" as const, gap: 6 },
  fieldLabel: { fontSize: 13, fontWeight: 600, color: "#333" },
  input: {
    padding: "11px 14px", borderRadius: 10, border: "1.5px solid #E8E8E4",
    fontSize: 14, color: "#111110", background: "#fff", outline: "none",
    fontFamily: "inherit", width: "100%", boxSizing: "border-box" as const,
  },
  saveBtn: {
    padding: "12px 24px", background: "#0066FF", color: "#fff", border: "none",
    borderRadius: 10, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
    alignSelf: "flex-start" as const,
  },
  walletCard: {
    display: "flex", alignItems: "center", gap: 14, padding: "16px 18px",
    background: "#F2F2EF", borderRadius: 12, border: "1px solid #E8E8E4",
  },
  walletCardIcon: { fontSize: 22, color: "#0066FF" },
  walletCardAddr: { fontSize: 14, fontWeight: 700, color: "#111110" },
  walletCardChain: { fontSize: 12, color: "#888", marginTop: 2 },
  dangerBtn: {
    marginLeft: "auto", background: "none", border: "1px solid #FECACA",
    color: "#B91C1C", borderRadius: 8, padding: "7px 14px", fontSize: 13,
    fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
  },
  walletEmpty: {
    background: "#fff", border: "1.5px dashed #E8E8E4", borderRadius: 14,
    padding: "32px 24px", textAlign: "center" as const,
  },
  walletEmptyIcon: { fontSize: 36, color: "#ddd", marginBottom: 12 },
  walletEmptyTitle: { fontSize: 16, fontWeight: 700, color: "#111110", margin: "0 0 8px" },
  walletEmptyBody: { fontSize: 13, color: "#888", margin: "0 0 24px", lineHeight: 1.6 },
  walletOptions: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 },
  walletOption: {
    display: "flex", alignItems: "center", gap: 8, padding: "11px 16px",
    background: "#fff", border: "1.5px solid #E8E8E4", borderRadius: 10,
    fontSize: 13, fontWeight: 600, color: "#111110", cursor: "pointer", fontFamily: "inherit",
  },
  walletOptionIcon: { color: "#0066FF", fontSize: 16 },
  chainSection: { marginTop: 24 },
  chainLabel: { fontSize: 13, fontWeight: 700, color: "#333", marginBottom: 12 },
  chainOptions: { display: "flex", flexDirection: "column" as const, gap: 10 },
  chainOption: { display: "flex", alignItems: "center", fontSize: 14, color: "#444", cursor: "pointer" },
  recBadge: {
    marginLeft: 8, fontSize: 11, fontWeight: 700, color: "#00C896",
    background: "#00C89615", padding: "2px 8px", borderRadius: 999,
  },
  planCard: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "18px 20px", background: "#fff", border: "1px solid #E8E8E4",
    borderRadius: 12,
  },
  planCardLeft: {},
  planCardName: { fontSize: 15, fontWeight: 700, color: "#111110" },
  planCardSub: { fontSize: 13, color: "#888", marginTop: 3 },
  upgradeBtn: {
    fontSize: 13, fontWeight: 700, color: "#0066FF", background: "#0066FF10",
    border: "1px solid #0066FF30", borderRadius: 8, padding: "8px 16px",
    textDecoration: "none",
  },
  infoBox: {
    background: "#FFF9E6", border: "1px solid #F59E0B40", borderRadius: 10, padding: "14px 16px",
  },
  infoText: { fontSize: 13, color: "#92400E", margin: 0, lineHeight: 1.6 },
  subTitle: { fontSize: 16, fontWeight: 700, color: "#111110", margin: "24px 0 12px" },
  emptyBilling: {
    fontSize: 13, color: "#aaa", padding: "20px 0", borderTop: "1px solid #E8E8E4",
  },
  notifRow: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "14px 0", borderBottom: "1px solid #F2F2EF",
  },
  notifLabel: { fontSize: 14, fontWeight: 600, color: "#111110" },
  notifDesc: { fontSize: 12, color: "#888", marginTop: 2 },
  toggle: { cursor: "pointer" },
  toggleTrack: {
    width: 36, height: 20, background: "#0066FF", borderRadius: 999,
    position: "relative" as const,
  },
  toggleThumb: {
    width: 14, height: 14, background: "#fff", borderRadius: "50%",
    position: "absolute" as const, top: 3, left: 19, transition: "left 0.2s",
  },
};
