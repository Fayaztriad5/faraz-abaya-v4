import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Logo from "./Logo";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const from = location.state?.from?.pathname || "/admin";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await login(pw);
    setLoading(false);
    if (res.ok) {
      navigate(from, { replace: true });
    } else {
      setError(res.error || "Login failed.");
    }
  };

  return (
    <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, background: "var(--pearl)" }}>
      <div className="fade-up" style={{ width: "100%", maxWidth: 420 }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <Logo size={64} />
          <div className="font-display" style={{ fontSize: 32, fontWeight: 600, color: "var(--charcoal)", marginTop: 14 }}>Admin Login</div>
          <div style={{ fontSize: 13, color: "var(--text-muted)", fontFamily: "'Jost',sans-serif", marginTop: 6 }}>
            Enter your admin password to continue
          </div>
        </div>
        <form onSubmit={handleSubmit} style={{ background: "#fff", padding: 32, borderRadius: 22, boxShadow: "0 8px 40px rgba(0,0,0,.1)" }}>
          <label style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--charcoal)", fontFamily: "'Jost',sans-serif", display: "block", marginBottom: 8 }}>
            Password
          </label>
          <input
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            placeholder="Enter admin password"
            autoComplete="current-password"
            style={{ width: "100%", padding: "12px 16px", borderRadius: 12, border: "1.5px solid rgba(201,168,76,.3)", fontFamily: "'Jost',sans-serif", fontSize: 14, marginBottom: 8 }}
          />
          {error && <div style={{ color: "#e53e3e", fontSize: 12, fontFamily: "'Jost',sans-serif", marginBottom: 10 }}>{error}</div>}
          <button className="btn-gold" type="submit" disabled={loading} style={{ width: "100%", padding: 13, borderRadius: 14, fontFamily: "'Jost',sans-serif", fontSize: 14, opacity: loading ? 0.7 : 1 }}>
            {loading ? "Signing in..." : "Login to Admin"}
          </button>
          <button onClick={() => navigate("/")} type="button" style={{ display: "block", width: "100%", marginTop: 12, padding: 10, background: "none", border: "none", cursor: "pointer", fontFamily: "'Jost',sans-serif", fontSize: 13, color: "var(--text-muted)" }}>
            Back to Store
          </button>
        </form>
      </div>
    </div>
  );
}
