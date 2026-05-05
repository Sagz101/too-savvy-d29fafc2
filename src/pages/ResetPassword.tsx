import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "@/lib/constants";
import { supabase } from "@/integrations/supabase/client";

export default function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isRecovery, setIsRecovery] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash.includes("type=recovery")) {
      setIsRecovery(true);
    }

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "PASSWORD_RECOVERY") {
        setIsRecovery(true);
      }
    });
    return () => subscription.unsubscribe();
  }, []);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setLoading(true);
    setError("");

    const { error } = await supabase.auth.updateUser({ password });
    if (error) {
      setError(error.message);
    } else {
      setSuccess("Password updated! Redirecting…");
      setTimeout(() => navigate(ROUTES.DASHBOARD), 1500);
    }
    setLoading(false);
  };

  if (!isRecovery) {
    return (
      <div style={s.root}>
        <div style={s.card}>
          <Link to={ROUTES.HOME} style={s.logo}>
            <span style={s.logoMark}>◈</span> Renegade
          </Link>
          <h1 style={s.title}>Invalid reset link</h1>
          <p style={s.sub}>
            This link is invalid or has expired.{" "}
            <Link to="/diminga-auth" style={s.link}>Request a new one →</Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={s.root}>
      <div style={s.card}>
        <Link to={ROUTES.HOME} style={s.logo}>
          <span style={s.logoMark}>◈</span> Renegade
        </Link>
        <h1 style={s.title}>Set new password</h1>
        <p style={s.sub}>Enter your new password below.</p>

        {success && <div style={s.successBox}>{success}</div>}
        {error && <div style={s.errorBox}>{error}</div>}

        <form onSubmit={handleReset} style={s.form}>
          <div style={s.field}>
            <label style={s.label}>New password</label>
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
          <div style={s.field}>
            <label style={s.label}>Confirm password</label>
            <input
              style={s.input}
              type="password"
              placeholder="Re-enter password"
              value={confirm}
              onChange={e => setConfirm(e.target.value)}
              required
              minLength={8}
            />
          </div>
          <button type="submit" style={s.submitBtn} disabled={loading}>
            {loading ? "Updating…" : "Update password →"}
          </button>
        </form>

        <p style={s.switchText}>
          <Link to="/diminga-auth" style={s.link}>← Back to sign in</Link>
        </p>
      </div>
    </div>
  );
}

const s: Record<string, React.CSSProperties> = {
  root: {
    display: "flex", alignItems: "center", justifyContent: "center",
    minHeight: "100vh", background: "#FAFAF8", padding: 24,
    fontFamily: "'DM Sans', sans-serif",
  },
  card: { width: "100%", maxWidth: 420 },
  logo: {
    display: "flex", alignItems: "center", gap: 8,
    textDecoration: "none", color: "#111110", fontSize: 20, fontWeight: 700,
    letterSpacing: "-0.02em", marginBottom: 32,
  },
  logoMark: { color: "#0066FF", fontSize: 22 },
  title: { fontSize: 28, fontWeight: 800, letterSpacing: "-0.03em", color: "#111110", margin: "0 0 8px" },
  sub: { fontSize: 14, color: "#888", margin: "0 0 28px", lineHeight: 1.6 },
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
  link: { color: "#0066FF", fontWeight: 600, textDecoration: "none" },
};
