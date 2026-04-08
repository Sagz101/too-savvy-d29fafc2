import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import PageMeta from "@/components/shared/PageMeta";

const FEATURES = [
  {
    icon: "✦",
    title: "Store Builder",
    desc: "Launch your own storefront. Sell digital goods, merchandise, or NFT-gated content with Stripe + Web3 payments in one place.",
    tag: "Commerce",
    color: "#0066FF",
  },
  {
    icon: "◈",
    title: "Threaditor",
    desc: "Write long-form posts backed by NFTs. Your words, your ownership. Readers mint your articles as collectibles.",
    tag: "Publishing",
    color: "#00C896",
  },
  {
    icon: "▶",
    title: "Video Studio",
    desc: "Upload, manage and monetize video content. Gate premium series behind token ownership.",
    tag: "Video",
    color: "#FF6B35",
  },
  {
    icon: "◎",
    title: "NeuraSocial",
    desc: "A social hub that syncs across platforms. Share once, post everywhere — with analytics that actually make sense.",
    tag: "Social",
    color: "#9B5CF6",
  },
  {
    icon: "◆",
    title: "Podcast Studio",
    desc: "Record, host, distribute. Offer token-gated episodes to your most loyal listeners.",
    tag: "Audio",
    color: "#F59E0B",
  },
  {
    icon: "⬡",
    title: "Innovators Hub",
    desc: "Collaborate on projects with DAO governance. Vote on direction, share revenue, build together.",
    tag: "Community",
    color: "#EC4899",
  },
];

const STATS = [
  { value: "12K+", label: "Creators onboarded" },
  { value: "$2.4M", label: "Creator earnings" },
  { value: "340K+", label: "NFTs minted" },
  { value: "98%", label: "Uptime guaranteed" },
];

const TESTIMONIALS = [
  {
    quote: "Diminga replaced five different tools. I run my whole creative business from one dashboard.",
    name: "Aisha M.",
    role: "Podcast host & NFT artist",
    avatar: "A",
    color: "#0066FF",
  },
  {
    quote: "I minted my first article as an NFT and sold 40 copies in 48 hours. Wild.",
    name: "Kwame O.",
    role: "Long-form writer",
    avatar: "K",
    color: "#00C896",
  },
  {
    quote: "Token-gated video series changed everything. My top fans pay once, get lifetime access.",
    name: "Thandiwe R.",
    role: "Video creator",
    avatar: "T",
    color: "#FF6B35",
  },
];

const NAV_LINKS = [
  { label: "Features", path: "/features" },
  { label: "Pricing", path: "/pricing" },
  { label: "Creators", path: "/community" },
  { label: "Docs", path: "/docs" },
];

export default function Index() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [demoOpen, setDemoOpen] = useState(false);
  const [demoStep, setDemoStep] = useState(0);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((p) => (p + 1) % FEATURES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <div style={styles.root}>
      <style>{`
        @media (max-width: 900px) {
          .idx-hero-preview { display: none !important; }
          .idx-nav-links { display: none !important; }
          .idx-nav-signin { display: none !important; }
          .idx-nav-cta { display: none !important; }
          .idx-hamburger { display: flex !important; }
          .idx-web3-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .idx-hero { padding-top: 96px !important; padding-bottom: 48px !important; }
          .idx-auth-left { display: none !important; }
          .idx-auth-right { padding: 24px 16px !important; }
        }
        @media (min-width: 901px) {
          .idx-hamburger { display: none !important; }
          .idx-mobile-menu { display: none !important; }
        }
      `}</style>
      <PageMeta title="Diminga" description="The Web3 creator platform for content creation, NFT monetization, and community building. Own your work and earn from it." />
      {/* ── NAV ── */}
      <nav style={{ ...styles.nav, ...(scrolled ? styles.navScrolled : {}) }}>
        <div style={styles.navInner}>
          <span style={styles.logo}>
            <span style={styles.logoMark}>◈</span> Diminga
          </span>
          <div className="idx-nav-links" style={styles.navLinks}>
            {NAV_LINKS.map((l) => (
              <a key={l.label} href={l.path} style={styles.navLink} onClick={(e) => { e.preventDefault(); navigate(l.path); }}>{l.label}</a>
            ))}
          </div>
          <div style={styles.navCtas}>
            <a href="/auth" className="idx-nav-signin" style={styles.navSignIn} onClick={(e) => { e.preventDefault(); navigate("/auth"); }}>Sign in</a>
            <a href="/auth" className="idx-nav-cta" style={styles.navCta} onClick={(e) => { e.preventDefault(); navigate("/auth"); }}>Get started free</a>
            <button
              className="idx-hamburger"
              style={{ background: "none", border: "none", fontSize: 24, cursor: "pointer", color: "#111110", padding: 4 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="idx-mobile-menu" style={{ position: "fixed", inset: 0, top: 64, zIndex: 99, background: "rgba(250,250,248,0.98)", backdropFilter: "blur(12px)", padding: "24px", display: "flex", flexDirection: "column" as const, gap: 8 }}>
          {NAV_LINKS.map((l) => (
            <a key={l.label} href={l.path} style={{ fontSize: 18, fontWeight: 600, color: "#111110", textDecoration: "none", padding: "14px 0", borderBottom: "1px solid #E8E8E4" }} onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); navigate(l.path); }}>{l.label}</a>
          ))}
          <a href="/auth" style={{ fontSize: 16, fontWeight: 600, color: "#fff", background: "#111110", borderRadius: 10, padding: "14px 0", textAlign: "center" as const, textDecoration: "none", marginTop: 16 }} onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); navigate("/auth"); }}>Get started free</a>
        </div>
      )}

      {/* ── HERO ── */}
      <section ref={heroRef} className="idx-hero" style={styles.hero}>
        <div style={styles.heroGrid} />
        <div style={styles.heroContent}>
          <div style={styles.heroBadge}>
            <span style={styles.heroBadgeDot} />
            Now in public beta · Web3 creator tools
          </div>
          <h1 style={styles.heroHeadline}>
            The creator platform<br />
            <span style={styles.heroAccent}>built for what's next.</span>
          </h1>
          <p style={styles.heroSub}>
            One platform for content creation, NFT monetization, and community
            building. Diminga gives creators the tools to own their work — and
            earn from it.
          </p>
          <div style={styles.heroCtas}>
            <button
              style={styles.ctaPrimary}
              onClick={() => setDemoOpen(true)}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#0052CC";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#0066FF";
              }}
            >
              ▶ Watch the demo
            </button>
            <a href="/auth" style={styles.ctaSecondary} onClick={(e) => { e.preventDefault(); navigate("/auth"); }}>
              Start for free →
            </a>
          </div>
          <p style={styles.heroCaveat}>No wallet required to start. Free forever on base plan.</p>
        </div>

        {/* Feature ticker */}
        <div style={styles.heroFeatureTicker}>
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              style={{
                ...styles.tickerItem,
                ...(i === activeFeature ? styles.tickerItemActive : {}),
                borderColor: i === activeFeature ? f.color : "transparent",
              }}
              onClick={() => setActiveFeature(i)}
            >
              <span style={{ ...styles.tickerIcon, color: f.color }}>{f.icon}</span>
              <span style={styles.tickerLabel}>{f.title}</span>
            </div>
          ))}
        </div>

        {/* Animated feature preview */}
        <div className="idx-hero-preview" style={styles.heroPreview}>
          <div style={styles.previewBrowser}>
            <div style={styles.browserChrome}>
              <div style={styles.browserDots}>
                <span style={{ ...styles.dot, background: "#FF5F57" }} />
                <span style={{ ...styles.dot, background: "#FEBC2E" }} />
                <span style={{ ...styles.dot, background: "#28C840" }} />
              </div>
              <div style={styles.browserBar}>
                <span style={{ color: "#999", fontSize: 12 }}>
                  diminga.xyz/{FEATURES[activeFeature].tag.toLowerCase()}
                </span>
              </div>
            </div>
            <div style={styles.browserContent}>
              <div
                style={{
                  ...styles.previewPanel,
                  borderTop: `3px solid ${FEATURES[activeFeature].color}`,
                }}
              >
                <div style={styles.previewHeader}>
                  <span
                    style={{
                      ...styles.previewIcon,
                      background: FEATURES[activeFeature].color + "18",
                      color: FEATURES[activeFeature].color,
                    }}
                  >
                    {FEATURES[activeFeature].icon}
                  </span>
                  <div>
                    <div style={styles.previewTitle}>{FEATURES[activeFeature].title}</div>
                    <div style={styles.previewTag}>{FEATURES[activeFeature].tag}</div>
                  </div>
                </div>
                <p style={styles.previewDesc}>{FEATURES[activeFeature].desc}</p>
                <div style={styles.previewStats}>
                  <div style={styles.previewStat}>
                    <div style={{ ...styles.previewStatVal, color: FEATURES[activeFeature].color }}>∞</div>
                    <div style={styles.previewStatLabel}>No limits</div>
                  </div>
                  <div style={styles.previewStat}>
                    <div style={{ ...styles.previewStatVal, color: FEATURES[activeFeature].color }}>0%</div>
                    <div style={styles.previewStatLabel}>Platform cut</div>
                  </div>
                  <div style={styles.previewStat}>
                    <div style={{ ...styles.previewStatVal, color: FEATURES[activeFeature].color }}>Web3</div>
                    <div style={styles.previewStatLabel}>Native</div>
                  </div>
                </div>
                <button
                  style={{
                    ...styles.previewCta,
                    background: FEATURES[activeFeature].color,
                  }}
                  onClick={() => {
                    const routes: Record<string, string> = {
                      "Store Builder": "/studio/store",
                      "Threaditor": "/studio/threaditor",
                      "Video Studio": "/studio/video",
                      "NeuraSocial": "/studio/social",
                      "Podcast Studio": "/studio/podcast",
                      "Innovators Hub": "/studio/hub",
                    };
                    navigate(routes[FEATURES[activeFeature].title] || "/dashboard");
                  }}
                >
                  Open {FEATURES[activeFeature].title} →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={styles.stats}>
        {STATS.map((s) => (
          <div key={s.label} style={styles.statItem}>
            <div style={styles.statValue}>{s.value}</div>
            <div style={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </section>

      {/* ── FEATURES GRID ── */}
      <section ref={featuresRef} style={styles.featuresSection}>
        <div style={styles.sectionLabel}>Everything you need</div>
        <h2 style={styles.sectionTitle}>Six studios. One platform.</h2>
        <p style={styles.sectionSub}>
          Every tool a creator needs — store, blog, video, podcast, social, and DAO
          — unified under one roof with Web3 built in from day one.
        </p>
        <div style={styles.featuresGrid}>
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              style={styles.featureCard}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = f.color;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = `0 12px 40px ${f.color}18`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.borderColor = "#E8E8E4";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              <div style={{ ...styles.featureIconWrap, background: f.color + "12", color: f.color }}>
                {f.icon}
              </div>
              <div style={{ ...styles.featureTag, color: f.color, background: f.color + "10" }}>
                {f.tag}
              </div>
              <h3 style={styles.featureTitle}>{f.title}</h3>
              <p style={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WEB3 CALLOUT ── */}
      <section style={styles.web3Section}>
        <div style={styles.web3Inner}>
          <div style={styles.web3Left}>
            <div style={styles.sectionLabel}>True ownership</div>
            <h2 style={styles.web3Title}>Your content lives on-chain.</h2>
            <p style={styles.web3Body}>
              Every post, video, and album can be minted as an NFT the moment you publish.
              Collectors support your work directly. You keep 100% of primary sales.
              Secondary royalties flow back to you automatically via smart contracts.
            </p>
            <div style={styles.web3Points}>
              {[
                ["ERC-721 NFT minting", "Industry-standard tokens, compatible with every marketplace"],
                ["Wallet-gated content", "Gate chapters, episodes, or albums behind token ownership"],
                ["On-chain royalties", "EIP-2981 royalty standard enforced at the contract level"],
                ["Multi-chain support", "Ethereum mainnet, Polygon, and Base — pick what suits your fans"],
              ].map(([title, desc]) => (
                <div key={title} style={styles.web3Point}>
                  <div style={styles.web3PointCheck}>✓</div>
                  <div>
                    <div style={styles.web3PointTitle}>{title}</div>
                    <div style={styles.web3PointDesc}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={styles.web3Right}>
            <div style={styles.web3Card}>
              <div style={styles.web3CardHeader}>
                <span style={styles.web3CardLabel}>NFT Preview</span>
                <span style={styles.web3CardStatus}>● Live</span>
              </div>
              <div style={styles.web3CardArt}>
                <div style={styles.web3ArtInner}>
                  <div style={styles.web3ArtOrb} />
                  <span style={styles.web3ArtText}>◈</span>
                </div>
              </div>
              <div style={styles.web3CardMeta}>
                <div style={styles.web3MetaRow}>
                  <span style={styles.web3MetaKey}>Token ID</span>
                  <span style={styles.web3MetaVal}>#00421</span>
                </div>
                <div style={styles.web3MetaRow}>
                  <span style={styles.web3MetaKey}>Chain</span>
                  <span style={styles.web3MetaVal}>Polygon</span>
                </div>
                <div style={styles.web3MetaRow}>
                  <span style={styles.web3MetaKey}>Royalty</span>
                  <span style={styles.web3MetaVal}>10%</span>
                </div>
                <div style={styles.web3MetaRow}>
                  <span style={styles.web3MetaKey}>Standard</span>
                  <span style={styles.web3MetaVal}>ERC-721</span>
                </div>
              </div>
              <button style={styles.web3MintBtn} onClick={() => navigate("/auth")}>Connect wallet to mint</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={styles.testimonialsSection}>
        <div style={styles.sectionLabel}>From real creators</div>
        <h2 style={styles.sectionTitle}>They made the switch.</h2>
        <div style={styles.testimonialsGrid}>
          {TESTIMONIALS.map((t) => (
            <div key={t.name} style={styles.testimonialCard}>
              <p style={styles.testimonialQuote}>"{t.quote}"</p>
              <div style={styles.testimonialAuthor}>
                <div style={{ ...styles.testimonialAvatar, background: t.color }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={styles.testimonialName}>{t.name}</div>
                  <div style={styles.testimonialRole}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={styles.ctaSection}>
        <div style={styles.ctaInner}>
          <h2 style={styles.ctaTitle}>Ready to own your creative future?</h2>
          <p style={styles.ctaSub}>
            Join 12,000+ creators already building on Diminga. Free to start, no credit card needed.
          </p>
          {!submitted ? (
            <form style={styles.ctaForm} onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.ctaInput}
                required
              />
              <button type="submit" style={styles.ctaSubmit}>
                Create free account →
              </button>
            </form>
          ) : (
            <div style={styles.ctaSuccess}>
              ✓ You're on the list! Check your inbox for next steps.
            </div>
          )}
          <p style={styles.ctaNote}>
            Or <a href="/auth" style={styles.ctaLink} onClick={(e) => { e.preventDefault(); navigate("/auth"); }}>sign in with Google / wallet</a> to get started instantly.
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <span style={styles.logo}>
            <span style={styles.logoMark}>◈</span> Diminga
          </span>
           <div style={styles.footerLinks}>
             {[
               { label: "Privacy", path: "/privacy" },
               { label: "Terms", path: "/terms" },
               { label: "Docs", path: "/docs" },
               { label: "Pricing", path: "/pricing" },
               { label: "Dashboard", path: "/dashboard" },
             ].map((l) => (
               <a key={l.label} href={l.path} style={styles.footerLink} onClick={(e) => { e.preventDefault(); navigate(l.path); }}>{l.label}</a>
             ))}
           </div>
          <span style={styles.footerCopy}>© 2025 Diminga. Built for creators.</span>
        </div>
      </footer>

      {/* ── DEMO MODAL ── */}
      {demoOpen && (() => {
        const WALKTHROUGH = [
          { title: "Your Dashboard", desc: "See all your stats, earnings, and content in one place. Quick-launch any studio from here.", icon: "⊞", color: "#0066FF" },
          { title: "Store Builder", desc: "Add products — digital downloads, merch, or NFT-gated access. Accept crypto and fiat payments.", icon: "◈", color: "#0066FF" },
          { title: "Threaditor", desc: "Write long-form posts with Markdown. Mint articles as NFTs so readers can collect your words.", icon: "✦", color: "#00C896" },
          { title: "Video Studio", desc: "Upload videos, set token-gating, and track analytics. Your content, your rules.", icon: "▶", color: "#FF6B35" },
          { title: "Mint as NFT", desc: "One click mints any content as an ERC-721 NFT on Polygon. Set royalties and let fans collect.", icon: "◈", color: "#9B5CF6" },
        ];
        const step = WALKTHROUGH[demoStep];
        return (
          <div style={styles.modalOverlay} onClick={() => { setDemoOpen(false); setDemoStep(0); }}>
            <div style={{ ...styles.modal, maxWidth: 520 }} onClick={(e) => e.stopPropagation()}>
              <button style={styles.modalClose} onClick={() => { setDemoOpen(false); setDemoStep(0); }}>✕</button>
              <div style={{ textAlign: "center" as const, marginBottom: 24 }}>
                <div style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.1em", color: "#888", marginBottom: 6 }}>
                  Platform walkthrough · {demoStep + 1}/{WALKTHROUGH.length}
                </div>
                <div style={{ display: "flex", gap: 4, justifyContent: "center", marginBottom: 24 }}>
                  {WALKTHROUGH.map((_, i) => (
                    <div key={i} style={{ width: i === demoStep ? 24 : 8, height: 4, borderRadius: 2, background: i === demoStep ? step.color : "#E8E8E4", transition: "all 0.3s", cursor: "pointer" }} onClick={() => setDemoStep(i)} />
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" as const, alignItems: "center", textAlign: "center" as const }}>
                <div style={{ width: 72, height: 72, borderRadius: 18, background: step.color + "14", color: step.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, marginBottom: 20 }}>
                  {step.icon}
                </div>
                <h3 style={{ fontSize: 22, fontWeight: 700, fontFamily: "'Fraunces', serif", color: "#111110", margin: "0 0 10px" }}>{step.title}</h3>
                <p style={{ fontSize: 15, color: "#666", lineHeight: 1.65, maxWidth: 400, margin: "0 0 28px" }}>{step.desc}</p>
              </div>
              <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
                {demoStep > 0 && (
                  <button onClick={() => setDemoStep(demoStep - 1)} style={{ ...styles.ctaSecondary, border: "1.5px solid #E8E8E4", borderRadius: 10, padding: "10px 22px", fontSize: 14, fontWeight: 600, cursor: "pointer", background: "#fff" }}>← Back</button>
                )}
                {demoStep < WALKTHROUGH.length - 1 ? (
                  <button onClick={() => setDemoStep(demoStep + 1)} style={{ background: step.color, color: "#fff", border: "none", borderRadius: 10, padding: "10px 28px", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>Next →</button>
                ) : (
                  <button onClick={() => { setDemoOpen(false); setDemoStep(0); navigate("/auth"); }} style={{ background: "#0066FF", color: "#fff", border: "none", borderRadius: 10, padding: "10px 28px", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>Start building for free →</button>
                )}
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}

/* ─── STYLES ─── */
const styles: Record<string, React.CSSProperties> = {
  root: {
    fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
    background: "#FAFAF8",
    color: "#111110",
    minHeight: "100vh",
    overflowX: "hidden",
  },

  /* NAV */
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    transition: "background 0.3s, box-shadow 0.3s",
    padding: "0 24px",
  },
  navScrolled: {
    background: "rgba(250,250,248,0.92)",
    backdropFilter: "blur(12px)",
    boxShadow: "0 1px 0 #E8E8E4",
  },
  navInner: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    gap: 32,
    height: 64,
  },
  logo: {
    fontSize: 20,
    fontWeight: 700,
    letterSpacing: "-0.02em",
    color: "#111110",
    textDecoration: "none",
    display: "flex",
    alignItems: "center",
    gap: 6,
  },
  logoMark: {
    color: "#0066FF",
    fontSize: 22,
  },
  navLinks: {
    display: "flex",
    gap: 28,
    flex: 1,
  },
  navLink: {
    fontSize: 14,
    color: "#555",
    textDecoration: "none",
    fontWeight: 450,
    transition: "color 0.2s",
  },
  navCtas: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  navSignIn: {
    fontSize: 14,
    color: "#555",
    textDecoration: "none",
    fontWeight: 450,
  },
  navCta: {
    fontSize: 14,
    fontWeight: 600,
    background: "#111110",
    color: "#fff",
    padding: "8px 18px",
    borderRadius: 8,
    textDecoration: "none",
    transition: "background 0.2s",
  },

  /* HERO */
  hero: {
    paddingTop: 120,
    paddingBottom: 80,
    position: "relative",
    overflow: "hidden",
    maxWidth: 1200,
    margin: "0 auto",
    padding: "120px 24px 80px",
  },
  heroGrid: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "linear-gradient(#E8E8E415 1px, transparent 1px), linear-gradient(90deg, #E8E8E415 1px, transparent 1px)",
    backgroundSize: "48px 48px",
    pointerEvents: "none",
  },
  heroContent: {
    maxWidth: 640,
    position: "relative",
    zIndex: 1,
  },
  heroBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontSize: 13,
    fontWeight: 500,
    color: "#0066FF",
    background: "#0066FF10",
    border: "1px solid #0066FF30",
    borderRadius: 999,
    padding: "5px 14px",
    marginBottom: 28,
  },
  heroBadgeDot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "#0066FF",
    display: "inline-block",
    animation: "pulse 2s infinite",
  },
  heroHeadline: {
    fontSize: "clamp(40px, 5.5vw, 68px)",
    fontFamily: "'Fraunces', serif",
    fontWeight: 700,
    lineHeight: 1.08,
    letterSpacing: "-0.03em",
    margin: "0 0 20px",
    color: "#111110",
  },
  heroAccent: {
    color: "#0066FF",
  },
  heroSub: {
    fontSize: 18,
    lineHeight: 1.65,
    color: "#555",
    margin: "0 0 36px",
    maxWidth: 520,
    fontWeight: 400,
  },
  heroCtas: {
    display: "flex",
    gap: 14,
    flexWrap: "wrap",
    alignItems: "center",
    marginBottom: 16,
  },
  ctaPrimary: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: "#0066FF",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    padding: "14px 28px",
    fontSize: 16,
    fontWeight: 600,
    cursor: "pointer",
    transition: "background 0.2s, transform 0.15s",
    letterSpacing: "-0.01em",
  },
  ctaSecondary: {
    fontSize: 16,
    fontWeight: 600,
    color: "#111110",
    textDecoration: "none",
    padding: "14px 4px",
    borderBottom: "2px solid #111110",
    transition: "opacity 0.2s",
    letterSpacing: "-0.01em",
  },
  heroCaveat: {
    fontSize: 13,
    color: "#888",
    margin: 0,
  },

  /* Feature Ticker */
  heroFeatureTicker: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    marginTop: 60,
    position: "relative",
    zIndex: 1,
  },
  tickerItem: {
    display: "inline-flex",
    alignItems: "center",
    gap: 7,
    padding: "8px 16px",
    borderRadius: 999,
    border: "1.5px solid transparent",
    background: "#fff",
    boxShadow: "0 1px 4px rgba(0,0,0,0.07)",
    cursor: "pointer",
    transition: "all 0.25s",
    fontSize: 13,
    fontWeight: 500,
    color: "#333",
  },
  tickerItemActive: {
    background: "#fff",
    boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
  },
  tickerIcon: {
    fontSize: 15,
  },
  tickerLabel: {},

  /* Hero Preview — hidden on mobile via CSS class */
  heroPreview: {
    position: "absolute",
    right: 24,
    top: "50%",
    transform: "translateY(-44%)",
    width: "min(480px, 44vw)",
    zIndex: 1,
  },
  previewBrowser: {
    background: "#fff",
    borderRadius: 14,
    boxShadow: "0 24px 80px rgba(0,0,0,0.12)",
    overflow: "hidden",
    border: "1px solid #E8E8E4",
  },
  browserChrome: {
    background: "#F5F5F2",
    padding: "10px 16px",
    display: "flex",
    alignItems: "center",
    gap: 12,
    borderBottom: "1px solid #E8E8E4",
  },
  browserDots: {
    display: "flex",
    gap: 6,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    display: "block",
  },
  browserBar: {
    flex: 1,
    background: "#EBEBEB",
    borderRadius: 6,
    padding: "4px 12px",
    fontSize: 12,
    color: "#999",
  },
  browserContent: {
    padding: 24,
  },
  previewPanel: {
    padding: 20,
    borderRadius: 10,
    background: "#FAFAF8",
    border: "1px solid #E8E8E4",
    transition: "border-color 0.3s",
  },
  previewHeader: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    marginBottom: 14,
  },
  previewIcon: {
    width: 44,
    height: 44,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    flexShrink: 0,
  },
  previewTitle: {
    fontSize: 16,
    fontWeight: 700,
    color: "#111110",
    letterSpacing: "-0.02em",
  },
  previewTag: {
    fontSize: 11,
    fontWeight: 600,
    color: "#888",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
  },
  previewDesc: {
    fontSize: 13,
    color: "#666",
    lineHeight: 1.6,
    margin: "0 0 18px",
  },
  previewStats: {
    display: "flex",
    gap: 20,
    marginBottom: 18,
  },
  previewStat: {
    textAlign: "center" as const,
  },
  previewStatVal: {
    fontSize: 20,
    fontWeight: 800,
    letterSpacing: "-0.02em",
  },
  previewStatLabel: {
    fontSize: 11,
    color: "#999",
    marginTop: 2,
  },
  previewCta: {
    width: "100%",
    border: "none",
    borderRadius: 8,
    padding: "10px 0",
    fontSize: 13,
    fontWeight: 600,
    color: "#fff",
    cursor: "pointer",
    transition: "opacity 0.2s",
  },

  /* STATS */
  stats: {
    background: "#111110",
    padding: "48px 24px",
    display: "flex",
    justifyContent: "center",
    gap: "clamp(32px, 6vw, 96px)",
    flexWrap: "wrap",
  },
  statItem: {
    textAlign: "center" as const,
  },
  statValue: {
    fontSize: "clamp(28px, 4vw, 44px)",
    fontWeight: 800,
    color: "#fff",
    letterSpacing: "-0.03em",
  },
  statLabel: {
    fontSize: 14,
    color: "#888",
    marginTop: 4,
    fontWeight: 400,
  },

  /* FEATURES */
  featuresSection: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "100px 24px",
    textAlign: "center" as const,
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: 600,
    textTransform: "uppercase" as const,
    letterSpacing: "0.1em",
    color: "#0066FF",
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: "clamp(28px, 4vw, 48px)",
    fontFamily: "'Fraunces', serif",
    fontWeight: 700,
    letterSpacing: "-0.03em",
    color: "#111110",
    margin: "0 0 16px",
  },
  sectionSub: {
    fontSize: 17,
    color: "#666",
    maxWidth: 520,
    margin: "0 auto 60px",
    lineHeight: 1.65,
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: 20,
    textAlign: "left" as const,
  },
  featureCard: {
    background: "#fff",
    border: "1.5px solid #E8E8E4",
    borderRadius: 14,
    padding: 28,
    transition: "all 0.25s",
    cursor: "default",
  },
  featureIconWrap: {
    width: 48,
    height: 48,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 22,
    marginBottom: 14,
  },
  featureTag: {
    display: "inline-block",
    fontSize: 11,
    fontWeight: 700,
    textTransform: "uppercase" as const,
    letterSpacing: "0.1em",
    padding: "3px 10px",
    borderRadius: 999,
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 700,
    color: "#111110",
    margin: "0 0 10px",
    letterSpacing: "-0.02em",
  },
  featureDesc: {
    fontSize: 14,
    color: "#666",
    lineHeight: 1.65,
    margin: 0,
  },

  /* WEB3 */
  web3Section: {
    background: "#F2F2EF",
    padding: "100px 24px",
  },
  web3Inner: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 80,
    alignItems: "center",
  },
  web3Left: {},
  web3Title: {
    fontSize: "clamp(28px, 3.5vw, 44px)",
    fontFamily: "'Fraunces', serif",
    fontWeight: 700,
    letterSpacing: "-0.03em",
    color: "#111110",
    margin: "0 0 20px",
  },
  web3Body: {
    fontSize: 16,
    color: "#555",
    lineHeight: 1.7,
    margin: "0 0 36px",
  },
  web3Points: {
    display: "flex",
    flexDirection: "column" as const,
    gap: 20,
  },
  web3Point: {
    display: "flex",
    gap: 14,
    alignItems: "flex-start",
  },
  web3PointCheck: {
    width: 22,
    height: 22,
    borderRadius: "50%",
    background: "#0066FF",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    fontWeight: 700,
    flexShrink: 0,
    marginTop: 2,
  },
  web3PointTitle: {
    fontSize: 15,
    fontWeight: 600,
    color: "#111110",
    marginBottom: 3,
  },
  web3PointDesc: {
    fontSize: 13,
    color: "#777",
    lineHeight: 1.5,
  },
  web3Right: {
    display: "flex",
    justifyContent: "center",
  },
  web3Card: {
    background: "#fff",
    borderRadius: 18,
    padding: 28,
    width: 300,
    boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
    border: "1px solid #E8E8E4",
  },
  web3CardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  web3CardLabel: {
    fontSize: 12,
    fontWeight: 700,
    textTransform: "uppercase" as const,
    letterSpacing: "0.1em",
    color: "#888",
  },
  web3CardStatus: {
    fontSize: 12,
    color: "#00C896",
    fontWeight: 600,
  },
  web3CardArt: {
    background: "linear-gradient(135deg, #0066FF15, #9B5CF615)",
    borderRadius: 14,
    height: 160,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    border: "1px solid #E8E8E4",
  },
  web3ArtInner: {
    position: "relative" as const,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  web3ArtOrb: {
    width: 80,
    height: 80,
    borderRadius: "50%",
    background: "radial-gradient(circle, #0066FF40, #9B5CF620)",
    position: "absolute" as const,
    animation: "pulse 3s infinite",
  },
  web3ArtText: {
    fontSize: 48,
    color: "#0066FF",
    position: "relative" as const,
    zIndex: 1,
  },
  web3CardMeta: {
    display: "flex",
    flexDirection: "column" as const,
    gap: 10,
    marginBottom: 20,
  },
  web3MetaRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 13,
  },
  web3MetaKey: {
    color: "#888",
  },
  web3MetaVal: {
    color: "#111110",
    fontWeight: 600,
  },
  web3MintBtn: {
    width: "100%",
    background: "#111110",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    padding: "12px 0",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    transition: "background 0.2s",
  },

  /* TESTIMONIALS */
  testimonialsSection: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "100px 24px",
    textAlign: "center" as const,
  },
  testimonialsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 20,
    marginTop: 48,
    textAlign: "left" as const,
  },
  testimonialCard: {
    background: "#fff",
    border: "1.5px solid #E8E8E4",
    borderRadius: 14,
    padding: 28,
  },
  testimonialQuote: {
    fontSize: 16,
    lineHeight: 1.65,
    color: "#222",
    fontWeight: 450,
    margin: "0 0 24px",
    fontStyle: "italic",
  },
  testimonialAuthor: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },
  testimonialAvatar: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: 16,
    flexShrink: 0,
  },
  testimonialName: {
    fontSize: 14,
    fontWeight: 700,
    color: "#111110",
  },
  testimonialRole: {
    fontSize: 12,
    color: "#888",
    marginTop: 2,
  },

  /* CTA SECTION */
  ctaSection: {
    background: "#0066FF",
    padding: "100px 24px",
    textAlign: "center" as const,
  },
  ctaInner: {
    maxWidth: 560,
    margin: "0 auto",
  },
  ctaTitle: {
    fontSize: "clamp(28px, 4vw, 44px)",
    fontFamily: "'Fraunces', serif",
    fontWeight: 700,
    color: "#fff",
    letterSpacing: "-0.03em",
    margin: "0 0 16px",
  },
  ctaSub: {
    fontSize: 17,
    color: "rgba(255,255,255,0.8)",
    lineHeight: 1.65,
    margin: "0 0 36px",
  },
  ctaForm: {
    display: "flex",
    gap: 10,
    marginBottom: 16,
    flexWrap: "wrap" as const,
  },
  ctaInput: {
    flex: 1,
    minWidth: 200,
    padding: "14px 18px",
    borderRadius: 10,
    border: "none",
    fontSize: 15,
    outline: "none",
    fontFamily: "inherit",
  },
  ctaSubmit: {
    background: "#111110",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    padding: "14px 22px",
    fontSize: 15,
    fontWeight: 600,
    cursor: "pointer",
    whiteSpace: "nowrap" as const,
    fontFamily: "inherit",
    transition: "opacity 0.2s",
  },
  ctaSuccess: {
    background: "rgba(255,255,255,0.2)",
    color: "#fff",
    borderRadius: 10,
    padding: "16px 24px",
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 16,
  },
  ctaNote: {
    fontSize: 13,
    color: "rgba(255,255,255,0.7)",
    margin: 0,
  },
  ctaLink: {
    color: "#fff",
    fontWeight: 600,
  },

  /* FOOTER */
  footer: {
    background: "#111110",
    padding: "32px 24px",
  },
  footerInner: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap" as const,
    gap: 16,
  },
  footerLinks: {
    display: "flex",
    gap: 24,
  },
  footerLink: {
    fontSize: 13,
    color: "#888",
    textDecoration: "none",
    transition: "color 0.2s",
  },
  footerCopy: {
    fontSize: 13,
    color: "#555",
  },

  /* MODAL */
  modalOverlay: {
    position: "fixed" as const,
    inset: 0,
    background: "rgba(0,0,0,0.6)",
    zIndex: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backdropFilter: "blur(4px)",
  },
  modal: {
    background: "#fff",
    borderRadius: 18,
    padding: 36,
    maxWidth: 560,
    width: "100%",
    position: "relative" as const,
  },
  modalClose: {
    position: "absolute" as const,
    top: 16,
    right: 16,
    background: "none",
    border: "none",
    fontSize: 18,
    cursor: "pointer",
    color: "#888",
    width: 32,
    height: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 700,
    color: "#111110",
    margin: "0 0 24px",
    letterSpacing: "-0.02em",
  },
  videoPlaceholder: {
    background: "#F2F2EF",
    borderRadius: 12,
    height: 260,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
    border: "1px solid #E8E8E4",
  },
  playBtnLarge: {
    width: 64,
    height: 64,
    borderRadius: "50%",
    background: "#0066FF",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 24,
    cursor: "pointer",
  },
};
