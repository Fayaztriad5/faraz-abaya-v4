import { useState } from "react";
import { WHATSAPP } from "../mockData";
import { useCart } from "../context/CartContext";
import { buildWhatsAppMessage } from "../utils/whatsapp";

const Stars = ({ r }) => (
  <span style={{ display: "flex", gap: 2, alignItems: "center" }}>
    {[1, 2, 3, 4, 5].map(i => (
      <svg key={i} viewBox="0 0 20 20" fill={i <= Math.floor(r) ? "#C9A84C" : "#E5E5E5"} style={{ width: 13, height: 13 }}>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </span>
);

const WaIcon = ({ size = 20, color = "white" }) => (
  <svg viewBox="0 0 24 24" fill={color} style={{ width: size, height: size, flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.098.544 4.12 1.585 5.896L.057 23.25l5.488-1.438A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.898 0-3.712-.522-5.274-1.498l-.377-.224-3.916 1.026.989-3.819-.246-.394A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
);

export default function ProductDetail({ p, onBack }) {
  const [size, setSize] = useState("");
  const [img, setImg] = useState(0);
  const [err, setErr] = useState(false);
  const { addItem, openCart } = useCart();

  if (!p) {
    return (
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 16px 80px" }}>
        <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer", fontFamily: "'Jost',sans-serif", fontSize: 14, color: "var(--text-muted)", marginBottom: 20 }}>
          â† Back
        </button>
        <div className="font-display" style={{ fontSize: 28, color: "var(--charcoal)" }}>
          Product not found
        </div>
      </div>
    );
  }

  const order = () => {
    if (!size) { setErr(true); setTimeout(() => setErr(false), 2500); return; }
    const msg = `Assalamu Alaikum! I want to order the ${p.name} (Size: ${size}) for ₹${p.price.toLocaleString()}. Please confirm availability.`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  // add to cart callback (was missing causing runtime error on render)
  const addToCart = () => {
    if (!size) {
      setErr(true);
      setTimeout(() => setErr(false), 2500);
      return;
    }
    // pass selected size and currently visible image URL
    addItem(p, size, p.imgs[img]);
    openCart();
  };

  return (
    <div className="fade-up" style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 16px 80px" }}>
      {/* Back */}
      <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "none", cursor: "pointer", fontFamily: "'Jost',sans-serif", fontSize: 14, color: "var(--text-muted)", marginBottom: 20 }}>
        ← Back
      </button>

      <div className="detail-grid">

        {/* ── Gallery ── */}
        <div>
          <div style={{ borderRadius: 18, overflow: "hidden", aspectRatio: "3/4", marginBottom: 10 }}>
            <img src={p.imgs[img]} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "all .5s" }} />
          </div>
          {/* Thumbnails */}
          <div style={{ display: "flex", gap: 8 }}>
            {p.imgs.map((src, i) => (
              <div key={i} className={`thumb ${img === i ? "active" : ""}`} onClick={() => setImg(i)} style={{ flex: 1, height: 70 }}>
                <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Info ── */}
        <div>
          <div style={{ fontSize: 11, color: "var(--gold)", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "'Jost',sans-serif" }}>{p.category}</div>
          <div className="font-display detail-title" style={{ fontWeight: 600, color: "var(--charcoal)", lineHeight: 1.15, margin: "6px 0 10px" }}>{p.name}</div>

          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <Stars r={p.rating} />
            <span style={{ fontSize: 13, color: "var(--text-muted)", fontFamily: "'Jost',sans-serif" }}>{p.rating} · {p.reviews} reviews</span>
          </div>

          <div className="divider" />

          <div className="font-display detail-price" style={{ fontWeight: 600, color: "var(--charcoal)", marginBottom: 4 }}>₹{p.price.toLocaleString()}</div>
          <div style={{ fontSize: 12, color: "var(--text-muted)", fontFamily: "'Jost',sans-serif", marginBottom: 16 }}>Inclusive of all taxes</div>

          <div style={{ background: "var(--pearl-dark)", borderRadius: 12, padding: "12px 16px", marginBottom: 16, display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 16 }}>✨</span>
            <span style={{ fontFamily: "'Jost',sans-serif", fontSize: 13 }}><strong>Fabric:</strong> {p.fabric}</span>
          </div>

          <p style={{ fontFamily: "'Jost',sans-serif", fontSize: 14, color: "#555", lineHeight: 1.75, marginBottom: 20 }}>{p.desc}</p>

          {/* Size selector */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
              <span style={{ fontFamily: "'Jost',sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--charcoal)" }}>Select Size</span>
              {err && <span style={{ fontSize: 12, color: "#e53e3e", fontFamily: "'Jost',sans-serif" }}>⚠ Please select a size</span>}
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {["52", "54", "56", "58"].map(s => (
                <button key={s} className={`size-btn ${size === s ? "active" : ""}`} onClick={() => setSize(s)}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="divider" />

          {/* Trust badges — above CTA */}
          <div className="trust-grid" style={{ marginBottom: 16 }}>
            {[["🚚", "Free Delivery", "Orders ₹1999+"], ["🔄", "Easy Returns", "7-day policy"], ["✅", "100% Authentic", "Original fabric"]].map(([icon, t, s]) => (
              <div className="trust-card" key={t}>
                <div style={{ fontSize: 20 }}>{icon}</div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "var(--charcoal)", fontFamily: "'Jost',sans-serif", marginTop: 4 }}>{t}</div>
                <div style={{ fontSize: 10, color: "var(--text-muted)", fontFamily: "'Jost',sans-serif" }}>{s}</div>
              </div>
            ))}
          </div>

          {/* ── Sticky CTA on mobile, static on desktop ── */}
          <div className="detail-cta-wrap">
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <button className="btn-wa" onClick={order} style={{ width: "100%", padding: "14px 16px", borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "center", gap: 10, fontSize: 15, fontFamily: "'Jost',sans-serif", fontWeight: 600 }}>
                <WaIcon size={20} /> Order via WhatsApp
              </button>
              <button className="btn-outline" onClick={addToCart} style={{ width: "100%", padding: 13, borderRadius: 18, fontSize: 14, fontFamily: "'Jost',sans-serif" }}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
