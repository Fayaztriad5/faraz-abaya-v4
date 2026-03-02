import { useEffect, useRef, useState } from "react";
import { CATS } from "../mockData";
import Logo from "./Logo";
import { useCart } from "../context/CartContext";

const CartIcon = ({ size = 14 }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: size, height: size }}
    aria-hidden="true"
  >
    <circle cx="9" cy="20" r="1.5" />
    <circle cx="18" cy="20" r="1.5" />
    <path d="M3 4h2l2.2 10.4a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.5L22 7H7" />
  </svg>
);

export default function Navbar({ onNav, search, setSearch, cat, setCat }) {
  const { totalQty, toggleCart } = useCart();
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef(null);
  const closeTimerRef = useRef(null);

  const closeMobile = () => setMobileOpen(false);

  const isDesktop = () =>
    typeof window !== "undefined" && window.matchMedia("(min-width: 640px)").matches;

  const clearCloseTimer = () => {
    if (!closeTimerRef.current) return;
    clearTimeout(closeTimerRef.current);
    closeTimerRef.current = null;
  };

  const openDesktopDropdown = () => {
    if (!isDesktop()) return;
    clearCloseTimer();
    setDropOpen(true);
  };

  const scheduleDesktopClose = () => {
    if (!isDesktop()) return;
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setDropOpen(false);
      closeTimerRef.current = null;
    }, 140);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!dropOpen) return;
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      clearCloseTimer();
    };
  }, [dropOpen]);

  return (
    <>
      <nav className="navbar-blur" style={{ position: "sticky", top: 0, zIndex: 50, height: "var(--navbar-h)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <button onClick={() => { onNav("home"); closeMobile(); }} style={{ display: "flex", alignItems: "center", gap: 10, background: "none", border: "none", cursor: "pointer", flexShrink: 0 }}>
            <Logo size={42} />
            <div>
              <div className="font-display" style={{ fontSize: 17, fontWeight: 600, color: "var(--charcoal)" }}>Faraz Abaya</div>
              <div style={{ fontSize: 9, color: "var(--gold)", letterSpacing: "0.18em", fontFamily: "'Jost',sans-serif", fontWeight: 600 }}>فراز عبايه</div>
            </div>
          </button>

          {/* Desktop Nav (>= 640px) */}
          <div className="nav-desktop" style={{ alignItems: "center", gap: 24 }}>
            {/* Category dropdown */}
            <div
              ref={dropdownRef}
              style={{ position: "relative", paddingBottom: 10 }}
              onMouseEnter={openDesktopDropdown}
              onMouseLeave={scheduleDesktopClose}
            >
              <button
                onClick={() => setDropOpen((v) => !v)}
                style={{ display: "flex", alignItems: "center", gap: 5, background: "none", border: "none", cursor: "pointer", fontFamily: "'Jost',sans-serif", fontSize: 14, fontWeight: 500, color: "var(--charcoal)" }}
              >
                Collections <span style={{ fontSize: 10 }}>v</span>
              </button>
              {dropOpen && (
                <div
                  onMouseEnter={openDesktopDropdown}
                  onMouseLeave={scheduleDesktopClose}
                  style={{ position: "absolute", top: "calc(100% - 2px)", left: "50%", transform: "translateX(-50%)", background: "#fff", borderRadius: 14, boxShadow: "0 8px 40px rgba(0,0,0,0.13)", border: "1px solid rgba(201,168,76,.2)", padding: "6px 0", minWidth: 160, zIndex: 100 }}
                >
                  {CATS.map(c => (
                    <button key={c} onClick={() => { setCat(c); setDropOpen(false); onNav("home"); }}
                      style={{ display: "block", width: "100%", textAlign: "left", padding: "10px 18px", background: "none", border: "none", cursor: "pointer", fontFamily: "'Jost',sans-serif", fontSize: 13, color: cat === c ? "var(--gold)" : "var(--charcoal)", fontWeight: cat === c ? 600 : 400 }}
                      onMouseEnter={e => e.currentTarget.style.background = "#FFF8EC"}
                      onMouseLeave={e => e.currentTarget.style.background = "none"}>
                      {c}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Search */}
            <div style={{ position: "relative" }}>
              <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)", fontSize: 14 }}>🔍</span>
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search abayas..."
                style={{ paddingLeft: 34, paddingRight: 14, paddingTop: 8, paddingBottom: 8, borderRadius: 100, border: "1.5px solid rgba(201,168,76,.3)", background: "var(--pearl-dark)", fontFamily: "'Jost',sans-serif", fontSize: 13, width: 180 }} />
            </div>

            <button onClick={toggleCart} className="cart-btn" style={{ background: "none", border: "1px solid rgba(201,168,76,.3)", cursor: "pointer", fontFamily: "'Jost',sans-serif", fontSize: 13, color: "var(--charcoal)", display: "flex", alignItems: "center", gap: 6, padding: "6px 10px", borderRadius: 999 }}>
              <CartIcon />
              Cart
              <span className="cart-count">{totalQty}</span>
            </button>
            <button onClick={() => onNav("admin")} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Jost',sans-serif", fontSize: 13, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 5 }}>
              🛡 Admin
            </button>
          </div>

          {/* Hamburger (< 640px) */}
          <button
            className="nav-hamburger"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 6, flexDirection: "column", gap: 5 }}>
            <span style={{ display: "block", width: 22, height: 2, background: "var(--charcoal)", borderRadius: 2, transition: "all .3s", transform: mobileOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
            <span style={{ display: "block", width: 22, height: 2, background: "var(--charcoal)", borderRadius: 2, transition: "all .3s", opacity: mobileOpen ? 0 : 1 }} />
            <span style={{ display: "block", width: 22, height: 2, background: "var(--charcoal)", borderRadius: 2, transition: "all .3s", transform: mobileOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
          </button>

        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileOpen ? "open" : ""}`}>
        {/* Mobile Search */}
        <div style={{ position: "relative", marginBottom: 16 }}>
          <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)", fontSize: 14 }}>🔍</span>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search abayas..."
            style={{ width: "100%", paddingLeft: 38, paddingRight: 14, paddingTop: 11, paddingBottom: 11, borderRadius: 100, border: "1.5px solid rgba(201,168,76,.3)", background: "var(--pearl-dark)", fontFamily: "'Jost',sans-serif", fontSize: 14 }} />
        </div>

        {/* Category buttons */}
        <div style={{ fontSize: 10, color: "var(--gold)", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", fontFamily: "'Jost',sans-serif", marginBottom: 10 }}>Collections</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
          {CATS.map(c => (
            <button key={c} className="cat-pill" onClick={() => { setCat(c); onNav("home"); closeMobile(); }}
              style={{ background: cat === c ? "var(--charcoal)" : "#fff", color: cat === c ? "var(--gold)" : "var(--charcoal)", borderColor: cat === c ? "var(--charcoal)" : "rgba(201,168,76,.3)" }}>
              {c}
            </button>
          ))}
        </div>

        {/* Admin link */}
        <button onClick={() => { onNav("admin"); closeMobile(); }}
          style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer", fontFamily: "'Jost',sans-serif", fontSize: 14, color: "var(--text-muted)", padding: "6px 0" }}>
          🛡 Admin Panel
        </button>
      </div>

      {/* Overlay to close drawer */}
      {mobileOpen && (
        <div onClick={closeMobile} style={{ position: "fixed", inset: 0, zIndex: 48, background: "rgba(0,0,0,.2)" }} />
      )}
    </>
  );
}
