import { createContext, useContext, useMemo, useState } from "react";
import { hashText } from "../utils/auth";

const AUTH_STORAGE_KEY = "fa_admin_auth_v1";
const AUTH_TTL_MS = 1000 * 60 * 60 * 8; // 8 hours

const AuthContext = createContext(null);

const readStoredAuth = () => {
  try {
    const raw = sessionStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) return { authed: false };
    const parsed = JSON.parse(raw);
    if (!parsed || !parsed.exp) return { authed: false };
    if (Date.now() > parsed.exp) {
      sessionStorage.removeItem(AUTH_STORAGE_KEY);
      return { authed: false };
    }
    return { authed: true };
  } catch {
    return { authed: false };
  }
};

export function AuthProvider({ children }) {
  const [authed, setAuthed] = useState(() => readStoredAuth().authed);

  const login = async (password) => {
    const configuredHash = (process.env.REACT_APP_ADMIN_PW_HASH || "").trim().toLowerCase();
    if (!configuredHash) {
      return { ok: false, error: "Admin login not configured. Set REACT_APP_ADMIN_PW_HASH." };
    }

    const inputHash = await hashText(password);
    if (inputHash !== configuredHash) {
      return { ok: false, error: "Incorrect password." };
    }

    const payload = { exp: Date.now() + AUTH_TTL_MS };
    sessionStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(payload));
    setAuthed(true);
    return { ok: true };
  };

  const logout = () => {
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
    setAuthed(false);
  };

  const value = useMemo(() => ({ authed, login, logout }), [authed]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
