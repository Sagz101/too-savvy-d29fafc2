// ── Shared studio page wrapper ───────────────────────────────
import { useState } from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { ROUTES } from "@/lib/constants";
import PageMeta from "@/components/shared/PageMeta";

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// STORE BUILDER
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export function Store() {
  const [tab, setTab] = useState<"products" | "orders" | "settings">("products");
  return (
    <DashboardLayout title="Store Builder" subtitle="Sell digital goods, merch & NFT-gated content">
      <PageMeta title="Store Builder" description="Sell digital goods, merch & NFT-gated content on Diminga." />
      <Tabs tabs={["products","orders","settings"]} active={tab} onChange={t => setTab(t as any)} color="#0066FF" />
      {tab === "products" && (
        <EmptyStudio
          icon="◈" color="#0066FF"
          heading="No products yet"
          body="Add your first product — digital download, physical item, or NFT-gated access."
          cta="Add product" ctaColor="#0066FF"
        />
      )}
      {tab === "orders" && <EmptyStudio icon="◈" color="#0066FF" heading="No orders yet" body="Orders will appear here once customers purchase from your store." />}
      {tab === "settings" && (
        <div style={s.formBlock}>
          <FieldRow label="Store name" placeholder="My Creative Store" />
          <FieldRow label="Stripe account" placeholder="Connect in Settings →" disabled />
          <FieldRow label="Default currency" placeholder="USD" />
          <SaveBtn color="#0066FF" />
        </div>
      )}
    </DashboardLayout>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// THREADITOR
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export function StudioThreaditor() {
  const [tab, setTab] = useState<"drafts" | "published" | "write">("drafts");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  return (
    <DashboardLayout title="Threaditor" subtitle="Long-form writing with NFT-backed posts">
      <PageMeta title="Threaditor" description="Long-form writing with NFT-backed posts on Diminga." />
      <Tabs tabs={["drafts","published","write"]} active={tab} onChange={t => setTab(t as any)} color="#00C896" />
      {tab === "drafts" && <EmptyStudio icon="✦" color="#00C896" heading="No drafts" body="Start writing your first article. Hit 'Write' tab above to begin." cta="New article" ctaColor="#00C896" onCta={() => setTab("write")} />}
      {tab === "published" && <EmptyStudio icon="✦" color="#00C896" heading="Nothing published yet" body="Publish an article to see it here. You can mint it as an NFT after publishing." />}
      {tab === "write" && (
        <div style={s.editor}>
          <input
            style={s.editorTitle}
            placeholder="Article title…"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            style={s.editorBody}
            placeholder="Start writing… (Markdown supported)"
            value={body}
            onChange={e => setBody(e.target.value)}
            rows={18}
          />
          <div style={s.editorActions}>
            <label style={s.gateToggle}>
              <input type="checkbox" style={{ marginRight: 8 }} /> Token-gate this article (NFT holders only)
            </label>
            <div style={s.editorBtns}>
              <button style={{ ...s.btn, background: "#F2F2EF", color: "#555" }}>Save draft</button>
              <button style={{ ...s.btn, background: "#00C896", color: "#fff" }}>Publish →</button>
              <button style={{ ...s.btn, background: "#111110", color: "#fff" }}>Mint as NFT ◈</button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// VIDEO STUDIO
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export function StudioVideoStudio() {
  const [tab, setTab] = useState<"videos" | "upload" | "analytics">("videos");
  return (
    <DashboardLayout title="Video Studio" subtitle="Upload, manage & monetize your video content">
      <PageMeta title="Video Studio" description="Upload, manage & monetize your video content on Diminga." />
      <Tabs tabs={["videos","upload","analytics"]} active={tab} onChange={t => setTab(t as any)} color="#FF6B35" />
      {tab === "videos" && <EmptyStudio icon="▶" color="#FF6B35" heading="No videos yet" body="Upload your first video. You can set it as free, paid, or token-gated." cta="Upload video" ctaColor="#FF6B35" onCta={() => setTab("upload")} />}
      {tab === "upload" && (
        <div style={s.uploadZone}>
          <div style={{ ...s.uploadBox, borderColor: "#FF6B35" }}>
            <div style={{ fontSize: 40, color: "#FF6B35" }}>▶</div>
            <p style={s.uploadText}>Drag & drop your video file here</p>
            <p style={s.uploadSub}>MP4, MOV, AVI — up to 4GB</p>
            <button style={{ ...s.btn, background: "#FF6B35", color: "#fff", marginTop: 12 }}>
              Browse files
            </button>
          </div>
          <div style={s.uploadMeta}>
            <FieldRow label="Video title" placeholder="My amazing video" />
            <FieldRow label="Description" placeholder="What's this video about?" textarea />
            <div style={s.checkRow}>
              <input type="checkbox" id="vgate" />
              <label htmlFor="vgate" style={s.checkLabel}>Token-gate this video</label>
            </div>
            <div style={s.checkRow}>
              <input type="checkbox" id="vmint" />
              <label htmlFor="vmint" style={s.checkLabel}>Mint as NFT after upload</label>
            </div>
            <button style={{ ...s.btn, background: "#FF6B35", color: "#fff" }}>Upload & Publish →</button>
          </div>
        </div>
      )}
      {tab === "analytics" && <EmptyStudio icon="▶" color="#FF6B35" heading="No analytics yet" body="Upload videos to start tracking views, watch time, and earnings." />}
    </DashboardLayout>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// PODCAST STUDIO
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export function Podcast() {
  const [tab, setTab] = useState<"episodes" | "record" | "feed">("episodes");
  return (
    <DashboardLayout title="Podcast Studio" subtitle="Record, host & distribute your podcast">
      <PageMeta title="Podcast Studio" description="Record, host & distribute your podcast on Diminga." />
      <Tabs tabs={["episodes","record","feed"]} active={tab} onChange={t => setTab(t as any)} color="#F59E0B" />
      {tab === "episodes" && <EmptyStudio icon="◆" color="#F59E0B" heading="No episodes yet" body="Create your first podcast episode. You can release it free or token-gate it for superfans." cta="New episode" ctaColor="#F59E0B" onCta={() => setTab("record")} />}
      {tab === "record" && (
        <div style={s.formBlock}>
          <FieldRow label="Episode title" placeholder="Episode 1: Introduction" />
          <FieldRow label="Description" placeholder="What's this episode about?" textarea />
          <div style={s.uploadBox}>
            <div style={{ fontSize: 28, color: "#F59E0B" }}>◆</div>
            <p style={s.uploadText}>Upload audio file (MP3, WAV)</p>
            <button style={{ ...s.btn, background: "#F59E0B", color: "#fff", marginTop: 8 }}>Browse audio</button>
          </div>
          <div style={s.checkRow}>
            <input type="checkbox" id="pgate" />
            <label htmlFor="pgate" style={s.checkLabel}>Token-gate this episode (NFT holders only)</label>
          </div>
          <SaveBtn color="#F59E0B" label="Publish episode →" />
        </div>
      )}
      {tab === "feed" && (
        <div style={s.formBlock}>
          <p style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>Your RSS feed URL will appear here once you publish your first episode.</p>
          <FieldRow label="Show name" placeholder="My Podcast" />
          <FieldRow label="Author name" placeholder="Your name" />
          <FieldRow label="Category" placeholder="Technology, Arts, Business…" />
          <SaveBtn color="#F59E0B" label="Save feed settings" />
        </div>
      )}
    </DashboardLayout>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// NEURASOCIAL
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export function StudioNeuraSocial() {
  const [tab, setTab] = useState<"compose" | "scheduled" | "analytics">("compose");
  return (
    <DashboardLayout title="NeuraSocial" subtitle="Cross-platform social hub with analytics">
      <PageMeta title="NeuraSocial" description="Cross-platform social hub with analytics on Diminga." />
      <Tabs tabs={["compose","scheduled","analytics"]} active={tab} onChange={t => setTab(t as any)} color="#9B5CF6" />
      {tab === "compose" && (
        <div style={s.formBlock}>
          <textarea
            style={{ ...s.input, minHeight: 120, resize: "vertical" as const }}
            placeholder="What's on your mind? Share once, post everywhere."
          />
          <div style={s.platformRow}>
            {["Twitter/X","Instagram","LinkedIn","Farcaster"].map(p => (
              <label key={p} style={s.platformItem}>
                <input type="checkbox" defaultChecked style={{ marginRight: 6 }} /> {p}
              </label>
            ))}
          </div>
          <div style={s.editorBtns}>
            <button style={{ ...s.btn, background: "#F2F2EF", color: "#555" }}>Schedule</button>
            <button style={{ ...s.btn, background: "#9B5CF6", color: "#fff" }}>Post now →</button>
          </div>
        </div>
      )}
      {tab === "scheduled" && <EmptyStudio icon="◎" color="#9B5CF6" heading="No scheduled posts" body="Schedule posts from the Compose tab to see them here." />}
      {tab === "analytics" && <EmptyStudio icon="◎" color="#9B5CF6" heading="Connect accounts to see analytics" body="Link your social accounts in Settings to track reach, engagement, and growth." cta="Go to Settings" ctaColor="#9B5CF6" ctaLink={ROUTES.SETTINGS} />}
    </DashboardLayout>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// INNOVATORS HUB
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export function Hub() {
  const [tab, setTab] = useState<"projects" | "dao" | "collaborate">("projects");
  return (
    <DashboardLayout title="Innovators Hub" subtitle="DAO governance & creative collaboration">
      <PageMeta title="Innovators Hub" description="DAO governance & creative collaboration on Diminga." />
      <Tabs tabs={["projects","dao","collaborate"]} active={tab} onChange={t => setTab(t as any)} color="#EC4899" />
      {tab === "projects" && <EmptyStudio icon="⬡" color="#EC4899" heading="No projects yet" body="Start a collaborative project, invite co-creators, and set revenue splits via smart contracts." cta="New project" ctaColor="#EC4899" />}
      {tab === "dao" && (
        <div>
          <div style={s.daoCard}>
            <div style={s.daoTitle}>DAO Governance</div>
            <p style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
              Create proposals, vote on platform decisions, and earn governance tokens by contributing to the ecosystem.
            </p>
            <div style={s.daoStats}>
              {["Total proposals: 0","Your votes: 0","Token balance: 0 DMG"].map(st => (
                <div key={st} style={s.daoStat}>{st}</div>
              ))}
            </div>
            <button style={{ ...s.btn, background: "#EC4899", color: "#fff" }}>Connect wallet to participate →</button>
          </div>
        </div>
      )}
      {tab === "collaborate" && (
        <div style={s.formBlock}>
          <p style={{ fontSize: 14, color: "#666", marginBottom: 20 }}>
            Find other creators to collaborate with. Split revenue automatically via on-chain contracts.
          </p>
          <FieldRow label="Search creators" placeholder="Username or wallet address" />
          <button style={{ ...s.btn, background: "#EC4899", color: "#fff" }}>Search</button>
        </div>
      )}
    </DashboardLayout>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// SHARED MICRO-COMPONENTS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function Tabs({ tabs, active, onChange, color }: { tabs: string[]; active: string; onChange: (t: string) => void; color: string }) {
  return (
    <div style={s.tabs}>
      {tabs.map(t => (
        <button
          key={t}
          style={{
            ...s.tab,
            ...(active === t ? { ...s.tabActive, borderBottomColor: color, color } : {}),
          }}
          onClick={() => onChange(t)}
        >
          {t.charAt(0).toUpperCase() + t.slice(1)}
        </button>
      ))}
    </div>
  );
}

function EmptyStudio({ icon, color, heading, body, cta, ctaColor, onCta, ctaLink }: {
  icon: string; color: string; heading: string; body: string;
  cta?: string; ctaColor?: string; onCta?: () => void; ctaLink?: string;
}) {
  return (
    <div style={s.emptyState}>
      {/* Decorative illustration */}
      <div style={{ position: "relative" as const, marginBottom: 20 }}>
        <div style={{
          width: 96, height: 96, borderRadius: "50%",
          background: `linear-gradient(135deg, ${color}12, ${color}08)`,
          display: "flex", alignItems: "center", justifyContent: "center",
          border: `2px dashed ${color}30`,
        }}>
          <div style={{ fontSize: 36, color }}>{icon}</div>
        </div>
        <div style={{
          position: "absolute" as const, top: -6, right: -6,
          width: 28, height: 28, borderRadius: "50%",
          background: color, color: "#fff", fontSize: 16, fontWeight: 700,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>+</div>
      </div>
      <h3 style={s.emptyHeading}>{heading}</h3>
      <p style={s.emptyBody}>{body}</p>
      {cta && (ctaLink ? (
        <Link to={ctaLink} style={{ ...s.emptyBtn, background: ctaColor, color: "#fff" }}>{cta} →</Link>
      ) : (
        <button onClick={onCta} style={{ ...s.emptyBtn, background: ctaColor, color: "#fff", border: "none", cursor: "pointer", fontFamily: "inherit" }}>{cta} →</button>
      ))}
    </div>
  );
}

function FieldRow({ label, placeholder, disabled, textarea }: { label: string; placeholder: string; disabled?: boolean; textarea?: boolean }) {
  return (
    <div style={s.fieldRow}>
      <label style={s.fieldLabel}>{label}</label>
      {textarea
        ? <textarea style={{ ...s.input, minHeight: 80, resize: "vertical" as const }} placeholder={placeholder} disabled={disabled} />
        : <input style={s.input} placeholder={placeholder} disabled={disabled} />
      }
    </div>
  );
}

function SaveBtn({ color, label = "Save changes" }: { color: string; label?: string }) {
  return (
    <button style={{ ...s.btn, background: color, color: "#fff", marginTop: 8, fontFamily: "inherit" }}>
      {label}
    </button>
  );
}

const s: Record<string, React.CSSProperties> = {
  tabs: { display: "flex", gap: 0, borderBottom: "1px solid #E8E8E4", marginBottom: 28 },
  tab: {
    padding: "10px 20px", background: "none", border: "none", borderBottom: "2px solid transparent",
    fontSize: 14, fontWeight: 500, color: "#888", cursor: "pointer", fontFamily: "inherit",
    transition: "all 0.15s",
  },
  tabActive: { fontWeight: 700 },
  emptyState: {
    display: "flex", flexDirection: "column" as const, alignItems: "center",
    justifyContent: "center", padding: "80px 40px", textAlign: "center" as const,
    background: "#fff", border: "1.5px dashed #E8E8E4", borderRadius: 14,
  },
  emptyIcon: { fontSize: 40, marginBottom: 16 },
  emptyHeading: { fontSize: 18, fontWeight: 700, color: "#111110", margin: "0 0 10px" },
  emptyBody: { fontSize: 14, color: "#888", lineHeight: 1.6, maxWidth: 380, margin: "0 0 24px" },
  emptyBtn: {
    display: "inline-block", padding: "10px 22px", borderRadius: 10,
    fontSize: 14, fontWeight: 700, textDecoration: "none",
  },
  formBlock: { display: "flex", flexDirection: "column" as const, gap: 18, maxWidth: 560 },
  fieldRow: { display: "flex", flexDirection: "column" as const, gap: 6 },
  fieldLabel: { fontSize: 13, fontWeight: 600, color: "#333" },
  input: {
    padding: "11px 14px", borderRadius: 10, border: "1.5px solid #E8E8E4",
    fontSize: 14, color: "#111110", background: "#fff", outline: "none",
    fontFamily: "inherit", transition: "border-color 0.2s", width: "100%",
    boxSizing: "border-box" as const,
  },
  btn: {
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    padding: "11px 22px", borderRadius: 10, border: "none",
    fontSize: 14, fontWeight: 700, cursor: "pointer", transition: "opacity 0.2s",
  },
  editor: { display: "flex", flexDirection: "column" as const, gap: 0 },
  editorTitle: {
    fontSize: 28, fontWeight: 800, border: "none", outline: "none", background: "transparent",
    color: "#111110", padding: "0 0 16px", fontFamily: "inherit",
    borderBottom: "1px solid #E8E8E4", marginBottom: 16, letterSpacing: "-0.02em",
  },
  editorBody: {
    fontSize: 16, lineHeight: 1.7, border: "none", outline: "none", background: "transparent",
    color: "#333", fontFamily: "inherit", resize: "none" as const, padding: 0,
  },
  editorActions: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    marginTop: 24, paddingTop: 16, borderTop: "1px solid #E8E8E4", flexWrap: "wrap" as const, gap: 12,
  },
  editorBtns: { display: "flex", gap: 10, flexWrap: "wrap" as const },
  gateToggle: { fontSize: 13, color: "#666", display: "flex", alignItems: "center", cursor: "pointer" },
  checkRow: { display: "flex", alignItems: "center", gap: 8 },
  checkLabel: { fontSize: 13, color: "#555", cursor: "pointer" },
  uploadZone: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 },
  uploadBox: {
    border: "2px dashed #E8E8E4", borderRadius: 14, padding: 40,
    display: "flex", flexDirection: "column" as const, alignItems: "center",
    justifyContent: "center", textAlign: "center" as const, cursor: "pointer",
    transition: "border-color 0.2s",
  },
  uploadText: { fontSize: 15, fontWeight: 600, color: "#333", margin: "12px 0 4px" },
  uploadSub: { fontSize: 12, color: "#aaa", margin: 0 },
  uploadMeta: { display: "flex", flexDirection: "column" as const, gap: 16 },
  platformRow: { display: "flex", gap: 20, flexWrap: "wrap" as const },
  platformItem: { display: "flex", alignItems: "center", fontSize: 13, color: "#555", cursor: "pointer" },
  daoCard: {
    background: "#fff", border: "1px solid #E8E8E4", borderRadius: 14,
    padding: 28, maxWidth: 560,
  },
  daoTitle: { fontSize: 18, fontWeight: 800, color: "#111110", marginBottom: 12, letterSpacing: "-0.02em" },
  daoStats: { display: "flex", gap: 20, marginBottom: 20, flexWrap: "wrap" as const },
  daoStat: { fontSize: 13, color: "#666", background: "#F2F2EF", padding: "6px 14px", borderRadius: 8 },
};
