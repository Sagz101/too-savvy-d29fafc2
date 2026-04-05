import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "@/lib/constants";
import { supabase } from "@/integrations/supabase/client";

type Mode = "login" | "signup" | "forgot";

export default function DimingaAuth() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<Mode>("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        navigate(ROUTES.DASHBOARD);
      }
    });
    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { display_name: name, username: name.toLowerCase().replace(/\s+/g, '_') },
            emailRedirectTo: window.location.origin,
          },
        });
        if (error) throw error;
        setSuccess("Check your email for a confirmation link!");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
    } catch (err: any) {
      setError(err.message || "Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: window.location.origin + ROUTES.DASHBOARD },
    });
    if (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div style={s.root}>
      <div style={s.left}>
        <Link to={ROUTES.HOME} style={s.logo}>
          <span style={s.logoMark}>◈</span> Diminga
        </Link>
        <div style={s.leftContent}>
          <div style={s.quote}>
            "Diminga replaced five different tools. I run my whole creative business from one dashboard."
          </div>
          <div style={s.quoteAuthor}>
            <div style={s.quoteAvatar}>A</div>
            <div>
              <div style={s.quoteName}>Aisha M.</div>
              <div style={s.quoteRole}>Podcast host & NFT artist</div>
            </div>
          </div>
          <div style={s.features}>
            {["NFT minting & royalties", "Token-gated content", "Stripe + crypto payments", "6 creator studios"].map(f => (
              <div key={f} style={s.feature}>
                <span style={s.featureCheck}>✓</span> {f}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={s.right}>
        <div style={s.card}>
          <h1 style={s.title}>
            {mode === "signup" ? "Create your account" : "Welcome back"}
          </h1>
          <p style={s.sub}>
            {mode === "signup"
              ? "Free forever on the base plan. No credit card needed."
              : "Sign in to your Diminga creator account."}
          </p>

          <div style={s.socialBtns}>
            <button style={s.socialBtn} onClick={handleGoogleSignIn} disabled={loading}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>
            <button style={{ ...s.socialBtn, background: "#111110", color: "#fff", borderColor: "#111110" }}>
              <span style={{ fontSize: 16 }}>◈</span>
              Connect Wallet
            </button>
          </div>

          <div style={s.divider}><span style={s.dividerText}>or continue with email</span></div>

          {success && <div style={s.successBox}>{success}</div>}
          {error && <div style={s.errorBox}>{error}</div>}

          <form onSubmit={handleSubmit} style={s.form}>
            {mode === "signup" && (
              <div style={s.field}>
                <label style={s.label}>Full name</label>
                <input
                  style={s.input}
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
              </div>
            )}
            <div style={s.field}>
              <label style={s.label}>Email</label>
              <input
                style={s.input}
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>
            <div style={s.field}>
              <label style={s.label}>Password</label>
              <input
                style={s.input}
                type="password"
                placeholder="Min. 8 characters"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                minLength={8}
              />
            </div>
            <button type="submit" style={s.submitBtn} disabled={loading}>
              {loading ? "Please wait…" : mode === "signup" ? "Create account →" : "Sign in →"}
            </button>
          </form>

          <p style={s.switchText}>
            {mode === "signup" ? "Already have an account? " : "Don't have an account? "}
            <button
              style={s.switchBtn}
              onClick={() => setMode(mode === "signup" ? "login" : "signup")}
            >
              {mode === "signup" ? "Sign in" : "Sign up free"}
            </button>
          </p>

          {mode === "signup" && (
            <p style={s.terms}>
              By signing up you agree to our{" "}
              <Link to="/docs" style={s.link}>Terms of Service</Link> and{" "}
              <Link to="/docs" style={s.link}>Privacy Policy</Link>.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

const s: Record<string, React.CSSProperties> = {
  root: { display: "flex", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" },
  left: {
    width: "42%", background: "#111110", padding: "36px 48px",
    display: "flex", flexDirection: "column" as const,
    position: "sticky" as const, top: 0, height: "100vh",
  },
  logo: {
    display: "flex", alignItems: "center", gap: 8,
    textDecoration: "none", color: "#fff", fontSize: 20, fontWeight: 700,
    letterSpacing: "-0.02em", marginBottom: "auto",
  },
  logoMark: { color: "#0066FF", fontSize: 22 },
  leftContent: { marginTop: "auto", marginBottom: "auto" },
  quote: {
    fontSize: 18, fontWeight: 500, color: "#fff", lineHeight: 1.6,
    fontStyle: "italic", marginBottom: 24, maxWidth: 360,
  },
  quoteAuthor: { display: "flex", alignItems: "center", gap: 12, marginBottom: 36 },
  quoteAvatar: {
    width: 40, height: 40, borderRadius: "50%", background: "#0066FF",
    color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
    fontWeight: 700, fontSize: 16,
  },
  quoteName: { fontSize: 14, fontWeight: 700, color: "#fff" },
  quoteRole: { fontSize: 12, color: "#888", marginTop: 2 },
  features: { display: "flex", flexDirection: "column" as const, gap: 12 },
  feature: { fontSize: 14, color: "#aaa", display: "flex", alignItems: "center", gap: 8 },
  featureCheck: { color: "#0066FF", fontWeight: 700 },
  right: {
    flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
    background: "#FAFAF8", padding: "48px 24px",
  },
  card: { width: "100%", maxWidth: 420 },
  title: { fontSize: 28, fontWeight: 800, letterSpacing: "-0.03em", color: "#111110", margin: "0 0 8px" },
  sub: { fontSize: 14, color: "#888", margin: "0 0 28px" },
  socialBtns: { display: "flex", gap: 10, marginBottom: 20 },
  socialBtn: {
    flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
    gap: 8, padding: "11px 16px", background: "#fff", border: "1.5px solid #E8E8E4",
    borderRadius: 10, fontSize: 13, fontWeight: 600, color: "#111110", cursor: "pointer",
    transition: "border-color 0.2s", fontFamily: "inherit",
  },
  divider: {
    display: "flex", alignItems: "center", gap: 12, margin: "20px 0",
    borderTop: "1px solid #E8E8E4",
  },
  dividerText: {
    fontSize: 12, color: "#aaa", background: "#FAFAF8",
    padding: "0 12px", marginTop: -1, whiteSpace: "nowrap" as const,
  },
  successBox: {
    background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 8,
    padding: "10px 14px", fontSize: 13, color: "#166534", marginBottom: 16,
  },
  errorBox: {
    background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 8,
    padding: "10px 14px", fontSize: 13, color: "#B91C1C", marginBottom: 16,
  },
  form: { display: "flex", flexDirection: "column" as const, gap: 16 },
  field: { display: "flex", flexDirection: "column" as const, gap: 6 },
  label: { fontSize: 13, fontWeight: 600, color: "#333" },
  input: {
    padding: "11px 14px", borderRadius: 10, border: "1.5px solid #E8E8E4",
    fontSize: 14, color: "#111110", background: "#fff", outline: "none",
    fontFamily: "inherit", transition: "border-color 0.2s",
  },
  submitBtn: {
    padding: "13px 20px", background: "#0066FF", color: "#fff", border: "none",
    borderRadius: 10, fontSize: 15, fontWeight: 700, cursor: "pointer",
    marginTop: 4, fontFamily: "inherit", transition: "opacity 0.2s",
    letterSpacing: "-0.01em",
  },
  switchText: { fontSize: 13, color: "#888", textAlign: "center" as const, marginTop: 20 },
  switchBtn: {
    background: "none", border: "none", color: "#0066FF",
    fontWeight: 700, cursor: "pointer", fontSize: 13, fontFamily: "inherit",
  },
  terms: { fontSize: 12, color: "#aaa", textAlign: "center" as const, marginTop: 12, lineHeight: 1.6 },
  link: { color: "#0066FF", fontWeight: 600 },
};
