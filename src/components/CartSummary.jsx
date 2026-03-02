import { WHATSAPP } from "../mockData";
import { useCart } from "../context/CartContext";
import { buildWhatsAppMessage, formatPrice } from "../utils/whatsapp";

const SIZES = ["52", "54", "56", "58"];

export default function CartSummary() {
  const {
    items,
    open,
    closeCart,
    updateQty,
    removeItem,
    setItemSize,
    clearCart,
    subtotal,
    totalQty,
  } = useCart();

  const orderNow = () => {
    if (!items.length) return;
    const msg = buildWhatsAppMessage(items);
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <>
      <div className={`cart-drawer ${open ? "open" : ""}`} role="dialog" aria-label="Cart summary">
        <div className="cart-header">
          <div>
            <div className="font-display" style={{ fontSize: 20, color: "var(--charcoal)" }}>Your Cart</div>
            <div style={{ fontSize: 12, color: "var(--text-muted)", fontFamily: "'Jost',sans-serif" }}>
              {totalQty} item{totalQty !== 1 ? "s" : ""}
            </div>
          </div>
          <button onClick={closeCart} className="cart-close" aria-label="Close cart">×</button>
        </div>

        {items.length === 0 ? (
          <div style={{ padding: 24, textAlign: "center", fontFamily: "'Jost',sans-serif", color: "var(--text-muted)" }}>
            Your cart is empty.
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.imgUrl} alt={item.name} />
                  <div className="cart-item-info">
                    <div className="cart-item-title">{item.name}</div>
                    <div className="cart-item-meta">
                      <span>{formatPrice(item.price)}</span>
                      <span>· ID {item.id}</span>
                    </div>
                    <div className="cart-item-controls">
                      <div className="cart-qty">
                        <button onClick={() => updateQty(item.id, item.qty - 1)} aria-label="Decrease quantity">−</button>
                        <span>{item.qty}</span>
                        <button onClick={() => updateQty(item.id, item.qty + 1)} aria-label="Increase quantity">+</button>
                      </div>
                      <select
                        value={item.size || ""}
                        onChange={(e) => setItemSize(item.id, e.target.value)}
                        className="cart-size"
                      >
                        <option value="">Select size</option>
                        {SIZES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <button className="cart-remove" onClick={() => removeItem(item.id)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Subtotal</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>
              <button className="btn-wa" onClick={orderNow} style={{ width: "100%", padding: "12px 16px", borderRadius: 14, fontFamily: "'Jost',sans-serif", fontSize: 14, fontWeight: 600 }}>
                Order via WhatsApp
              </button>
              <button className="btn-outline" onClick={clearCart} style={{ width: "100%", padding: "12px 16px", borderRadius: 14, fontFamily: "'Jost',sans-serif", fontSize: 14, marginTop: 10 }}>
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>

      {open && <div className="cart-backdrop" onClick={closeCart} />}
    </>
  );
}
