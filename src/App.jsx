import { useState } from "react";
import { Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import ProductDetail from "./components/ProductDetail";
import AdminPanel from "./components/AdminPanel";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import CartSummary from "./components/CartSummary";
import Hero from "./components/Hero";
import Logo from "./components/Logo";
import globalStyles from "./styles";
import { INITIAL_PRODUCTS, CATS, WHATSAPP } from "./mockData";

const WaIcon = ({ size = 20, color = "white" }) => (
  <svg viewBox="0 0 24 24" fill={color} style={{ width: size, height: size }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.098.544 4.12 1.585 5.896L.057 23.25l5.488-1.438A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.898 0-3.712-.522-5.274-1.498l-.377-.224-3.916 1.026.989-3.819-.246-.394A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
);

const FeatureIcon = ({ kind }) => {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  if (kind === "fabric") {
    return (
      <svg {...common}>
        <path d="M6 4h12v4H6z" />
        <path d="M8 8v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V8" />
        <path d="M10 12h4M10 16h4" />
      </svg>
    );
  }

  if (kind === "size") {
    return (
      <svg {...common}>
        <path d="M4 7h16v10H4z" />
        <path d="M8 7v3M12 7v2M16 7v3M8 17v-3M12 17v-2M16 17v-3" />
      </svg>
    );
  }

  if (kind === "delivery") {
    return (
      <svg {...common}>
        <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z" />
        <circle cx="8" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M5 5h14v10H8l-3 3z" />
      <path d="M8 9h8M8 12h6" />
    </svg>
  );
};

function Home({ products, onView, cat, setCat, search }) {
  const filtered = products.filter(
    (p) =>
      (cat === "All" || p.category === cat) &&
      (p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 14px 40px" }}>
      <Hero onShopLuxury={() => setCat("Luxury")} />

      <div className="pills-row">
        {CATS.map((c) => (
          <button
            key={c}
            className="cat-pill"
            onClick={() => setCat(c)}
            style={{
              background: cat === c ? "var(--charcoal)" : "#fff",
              color: cat === c ? "var(--gold)" : "var(--charcoal)",
              borderColor: cat === c ? "var(--charcoal)" : "rgba(201,168,76,.3)",
              boxShadow: cat === c ? "0 4px 15px rgba(0,0,0,.15)" : "none",
            }}
          >
            {c}
          </button>
        ))}
      </div>

      {search && (
        <div style={{ fontFamily: "'Jost',sans-serif", fontSize: 13, color: "var(--text-muted)", marginBottom: 16 }}>
          {filtered.length} result{filtered.length !== 1 ? "s" : ""} for "
          <strong style={{ color: "var(--charcoal)" }}>{search}</strong>"
        </div>
      )}

      {filtered.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px 0" }}>
          <div style={{ fontSize: 44 }}>-</div>
          <div className="font-display" style={{ fontSize: 22, marginTop: 12, color: "var(--charcoal)" }}>
            No products found
          </div>
          <div style={{ color: "var(--text-muted)", fontFamily: "'Jost',sans-serif", marginTop: 6, fontSize: 14 }}>
            Try a different search or category
          </div>
        </div>
      ) : (
        <div className="product-grid">
          {filtered.map((p) => (
            <ProductCard key={p.id} p={p} onView={onView} />
          ))}
        </div>
      )}

      <div className="features-grid">
        {[
          ["fabric", "Premium Fabrics", "Nida, Crepe, Chiffon"],
          ["size", "Sizes 52-58", "Perfect fit guarantee"],
          ["delivery", "Fast Delivery", "Pan-India 3-5 days"],
          ["whatsapp", "WhatsApp Order", "No app needed"],
        ].map(([kind, title, sub]) => (
          <div key={title} className="feature-card">
            <div className="feature-icon-wrap">
              <FeatureIcon kind={kind} />
            </div>
            <div className="font-display" style={{ fontSize: 15, fontWeight: 600, color: "var(--charcoal)", margin: "2px 0" }}>
              {title}
            </div>
            <div style={{ fontSize: 11, color: "var(--text-muted)", fontFamily: "'Jost',sans-serif" }}>{sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Footer({ onNav }) {
  return (
    <footer style={{ background: "var(--charcoal)", color: "rgba(250,248,245,.65)", marginTop: 48 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "36px 16px 20px" }}>
        <div className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <Logo size={44} />
              <div>
                <div className="font-display" style={{ fontSize: 19, color: "#FAF8F5" }}>Faraz Abaya</div>
                <div style={{ fontSize: 10, color: "var(--gold)", fontFamily: "'Jost',sans-serif", letterSpacing: "0.15em" }}>Faraz Abaya</div>
              </div>
            </div>
            <p style={{ fontFamily: "'Jost',sans-serif", fontSize: 13, lineHeight: 1.8 }}>
              Premium abayas crafted with love and modesty. Serving women across India since 2018.
            </p>
          </div>

          <div>
            <div style={{ fontSize: 10, color: "var(--gold)", fontFamily: "'Jost',sans-serif", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14 }}>Collections</div>
            {CATS.slice(1).map((c) => (
              <button
                key={c}
                onClick={() => onNav("home")}
                style={{ display: "block", background: "none", border: "none", cursor: "pointer", fontFamily: "'Jost',sans-serif", fontSize: 13, color: "rgba(250,248,245,.65)", marginBottom: 8, padding: 0, textAlign: "left" }}
              >
                {c}
              </button>
            ))}
          </div>

          <div>
            <div style={{ fontSize: 10, color: "var(--gold)", fontFamily: "'Jost',sans-serif", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14 }}>Contact</div>
            <div style={{ fontFamily: "'Jost',sans-serif", fontSize: 13, marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
              <WaIcon size={14} color="#25D366" /> WhatsApp: +91 95431 84629
            </div>
            <div style={{ fontFamily: "'Jost',sans-serif", fontSize: 13, color: "var(--text-muted)" }}>Mon-Sat | 9am-8pm IST</div>
          </div>
        </div>

        <div style={{ height: 1, background: "linear-gradient(90deg,transparent,var(--gold),transparent)", margin: "0 0 18px" }} />

        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
          <div style={{ fontFamily: "'Jost',sans-serif", fontSize: 12 }}>© 2025 Faraz Abaya. All rights reserved.</div>
          <div style={{ fontFamily: "'Jost',sans-serif", fontSize: 12, color: "var(--gold)" }}>Made with care for modest fashion</div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [cat, setCat] = useState("All");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const nav = (to) => {
    if (to === "home") navigate("/");
    if (to === "admin") navigate("/admin");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const viewProduct = (p) => {
    navigate(`/product/${p.id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const ProductDetailRoute = () => {
    const { id } = useParams();
    const product = products.find((item) => String(item.id) === id);
    if (!product) {
      return (
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 16px" }}>
          <div className="font-display" style={{ fontSize: 28, color: "var(--charcoal)", marginBottom: 8 }}>
            Product not found
          </div>
          <button className="btn-outline" onClick={() => navigate("/")} style={{ padding: "10px 18px", borderRadius: 12 }}>
            Back to Store
          </button>
        </div>
      );
    }
    return <ProductDetail p={product} onBack={() => navigate(-1)} />;
  };

  const hideChrome = location.pathname.startsWith("/admin") || location.pathname.startsWith("/login");

  return (
    <div style={{ minHeight: "100vh", background: "var(--pearl)" }}>
      <style>{globalStyles}</style>
      {!hideChrome && (
        <Navbar onNav={nav} search={search} setSearch={setSearch} cat={cat} setCat={setCat} />
      )}

      <main style={{ minHeight: "70vh" }}>
        <Routes>
          <Route path="/" element={<Home products={products} onView={viewProduct} cat={cat} setCat={setCat} search={search} />} />
          <Route path="/product/:id" element={<ProductDetailRoute />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={(
              <ProtectedRoute>
                <AdminPanel products={products} setProducts={setProducts} onBack={() => nav("home")} />
              </ProtectedRoute>
            )}
          />
          <Route path="*" element={<Home products={products} onView={viewProduct} cat={cat} setCat={setCat} search={search} />} />
        </Routes>
      </main>

      {!hideChrome && <Footer onNav={nav} />}
      {!hideChrome && <CartSummary />}
      {!hideChrome && (
        <button
          className="float-wa"
          onClick={() => window.open(`https://wa.me/${WHATSAPP}`, "_blank")}
          aria-label="Order on WhatsApp"
        >
          <WaIcon size={24} />
        </button>
      )}
    </div>
  );
}
