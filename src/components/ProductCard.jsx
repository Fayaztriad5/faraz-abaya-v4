import { useState } from "react";
import { BADGE_COLORS } from "../mockData";
import { useCart } from "../context/CartContext";

const Stars = ({ r }) => (
  <span style={{ display: "flex", gap: 2, alignItems: "center" }}>
    {[1, 2, 3, 4, 5].map(i => (
      <svg key={i} viewBox="0 0 20 20" fill={i <= Math.floor(r) ? "#C9A84C" : "#E5E5E5"} style={{ width: 12, height: 12 }}>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </span>
);

export default function ProductCard({ p, onView }) {
  const [liked, setLiked] = useState(false);
  const [bc, tc] = BADGE_COLORS[p.badge] || ["#C9A84C", "#1C1C1E"];
  const { addItem, openCart } = useCart();

  const addToCart = () => {
    addItem(p);
    openCart();
  };

  return (
    <div className="card-hover" style={{ background: "#fff", borderRadius: 18, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}>
      {/* Image */}
      <div className="img-zoom" style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
        <img src={p.imgs[0]} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <span className="badge-pill" style={{ position: "absolute", top: 8, left: 8, background: bc, color: tc }}>{p.badge}</span>
        <button className="like-btn" onClick={() => setLiked(!liked)} aria-label="Wishlist">
          <span style={{ fontSize: 14 }}>{liked ? "❤️" : "🤍"}</span>
        </button>
      </div>

      {/* Info */}
      <div style={{ padding: "10px 12px 12px" }}>
        <div style={{ fontSize: 9, color: "var(--gold)", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", fontFamily: "'Jost',sans-serif" }}>{p.category}</div>

        <div className="font-display card-name" style={{ fontWeight: 600, color: "var(--charcoal)", marginTop: 2, lineHeight: 1.2 }}>{p.name}</div>

        <div style={{ display: "flex", alignItems: "center", gap: 4, margin: "5px 0 8px" }}>
          <Stars r={p.rating} />
          <span style={{ fontSize: 10, color: "var(--text-muted)", fontFamily: "'Jost',sans-serif" }}>({p.reviews})</span>
        </div>

        {/* Price + CTA */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 6 }}>
          <div>
            <span className="font-display card-price" style={{ fontWeight: 600, color: "var(--charcoal)" }}>₹{p.price.toLocaleString()}</span>
            <div style={{ fontSize: 10, color: "var(--text-muted)", fontFamily: "'Jost',sans-serif" }}>{p.fabric}</div>
          </div>
        </div>

        {/* Full-width button on all sizes — cleaner on mobile */}
        <div style={{ display: "grid", gap: 8 }}>
          <button className="btn-gold btn-card-view" onClick={() => onView(p)}>
            View Details
          </button>
          <button className="btn-outline btn-card-view" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
