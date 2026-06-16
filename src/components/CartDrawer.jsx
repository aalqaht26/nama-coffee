const SHIP = {
  priority: { name: "USPS Priority Mail", eta: "2–3 business days", price: 8.95 },
  express: { name: "USPS Priority Mail Express", eta: "1–2 business days", price: 26.35 },
};

export default function CartDrawer({ cart, onClose, onRemove, shipping, onShipping }) {
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const shipCost = cart.length === 0 ? 0 : SHIP[shipping].price;
  const total = subtotal + shipCost;

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 400 }}>
      <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(42,18,8,0.55)" }} />
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 380, background: "#FBF5EE", display: "flex", flexDirection: "column", boxShadow: "-8px 0 40px rgba(42,18,8,0.2)" }}>
        <div style={{ padding: "20px 22px 14px", borderBottom: "1px solid #E0D0BC", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#3D1F0D", fontFamily: "Georgia, serif" }}>Your Cart ({cart.reduce((s, i) => s + i.qty, 0)})</div>
          <button onClick={onClose} style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#3D1F0D" }}>✕</button>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: 18, display: "flex", flexDirection: "column", gap: 12 }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: "center", color: "#8C7B6B", marginTop: 50 }}>
              <div style={{ fontSize: 44, marginBottom: 10 }}>☕</div>
              <p style={{ fontSize: 15, color: "#3D1F0D", marginBottom: 6, fontFamily: "Georgia, serif" }}>Your cart is empty</p>
              <p style={{ fontSize: 13 }}>Add some beautiful products!</p>
            </div>
          ) : cart.map((item) => (
            <div key={item.cartId} style={{ display: "flex", gap: 10, alignItems: "flex-start", background: "#EDE5DA", borderRadius: 12, padding: 12 }}>
              <div style={{ width: 52, height: 52, borderRadius: 8, overflow: "hidden", background: "#D4C4AE", flexShrink: 0 }}>
                <img src={item.img} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => (e.target.style.display = "none")} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#3D1F0D", marginBottom: 2, fontFamily: "Georgia, serif" }}>{item.name}</div>
                <div style={{ fontSize: 11, color: "#8C7B6B", lineHeight: 1.5 }}>{item.meta}</div>
                <div style={{ fontSize: 11, color: "#8C7B6B" }}>Qty: {item.qty}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#3D1F0D", marginTop: 4 }}>${(item.price * item.qty).toFixed(2)}</div>
                <button onClick={() => onRemove(item.cartId)} style={{ background: "none", border: "none", color: "#9B3B3B", fontSize: 10, fontWeight: 700, cursor: "pointer", padding: 0, marginTop: 3 }}>Remove</button>
              </div>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div style={{ padding: 18, borderTop: "1px solid #E0D0BC" }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#3D1F0D", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 8 }}>Shipping Method</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 12 }}>
              {Object.entries(SHIP).map(([k, sh]) => (
                <button key={k} onClick={() => onShipping(k)} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", border: `1.5px solid ${shipping === k ? "#3D1F0D" : "#D4C4AE"}`, borderRadius: 10, background: shipping === k ? "#3D1F0D" : "none", cursor: "pointer", textAlign: "left", width: "100%", fontFamily: "Georgia, serif" }}>
                  <div style={{ width: 14, height: 14, borderRadius: "50%", background: shipping === k ? "#C9A84C" : "none", border: `2px solid ${shipping === k ? "#C9A84C" : "#D4C4AE"}`, flexShrink: 0 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: shipping === k ? "#F5EDE3" : "#3D1F0D" }}>{sh.name}</div>
                    <div style={{ fontSize: 10, color: shipping === k ? "rgba(245,237,227,0.7)" : "#8C7B6B" }}>{sh.eta}</div>
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: shipping === k ? "#F5EDE3" : "#3D1F0D" }}>${sh.price.toFixed(2)}</div>
                </button>
              ))}
            </div>

            <a href="https://postcalc.usps.com/?origin=22554" target="_blank" rel="noreferrer" style={{ display: "block", textAlign: "center", color: "#C9A84C", fontSize: 11, fontWeight: 700, textDecoration: "none", marginBottom: 14 }}>
              🔗 Calculate exact rate on USPS.com ↗
            </a>

            <div style={{ marginBottom: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#6B3A1F", marginBottom: 4 }}><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#6B3A1F", marginBottom: 4 }}><span>{SHIP[shipping].name}</span><span>${shipCost.toFixed(2)}</span></div>
              {subtotal >= 50 && <div style={{ fontSize: 12, color: "#4A6741", marginBottom: 4 }}>🎉 Free shipping eligible!</div>}
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 16, fontWeight: 700, color: "#3D1F0D", borderTop: "1px solid #D4C4AE", paddingTop: 10, marginTop: 6 }}>
                <span>Total</span><span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button style={{ width: "100%", background: "#3D1F0D", color: "#F5EDE3", border: "none", borderRadius: 28, padding: 13, fontSize: 14, fontWeight: 700, cursor: "pointer", marginBottom: 8, fontFamily: "Georgia, serif" }}>
              Proceed to Checkout →
            </button>
            <button onClick={onClose} style={{ width: "100%", background: "none", color: "#3D1F0D", border: "1.5px solid #3D1F0D", borderRadius: 28, padding: 11, fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
