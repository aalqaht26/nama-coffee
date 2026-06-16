const TAG_COLORS = {
  Bestseller: { bg: "#3D1F0D", color: "#F5EDE3" },
  Premium: { bg: "#C9A84C", color: "#2A1208" },
  Organic: { bg: "#4A6741", color: "#F5EDE3" },
  Fresh: { bg: "#2A6B5A", color: "#F5EDE3" },
  Gift: { bg: "#8B3A62", color: "#F5EDE3" },
  New: { bg: "#C9A84C", color: "#2A1208" },
  "Caffeine Free": { bg: "#4A6741", color: "#F5EDE3" },
  Rare: { bg: "#7B2D2D", color: "#F5EDE3" },
};

export default function ProductCard({ product, onAdd }) {
  const tc = TAG_COLORS[product.tag] || { bg: "#3D1F0D", color: "#F5EDE3" };

  return (
    <div style={{ background: "#FBF5EE", border: "1.5px solid #E8DDD0", borderRadius: 16, overflow: "hidden", display: "flex", flexDirection: "column", transition: "all 0.3s" }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#C9A84C"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(61,31,13,0.12)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#E8DDD0"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
    >
      <div style={{ height: 170, position: "relative", overflow: "hidden", background: "#EDE0CF" }}>
        <img src={product.img} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => (e.target.style.display = "none")} />
        <div style={{ position: "absolute", top: 10, right: 10 }}>
          <span style={{ background: tc.bg, color: tc.color, fontSize: 9, fontWeight: 700, letterSpacing: "0.08em", padding: "3px 8px", borderRadius: 20, textTransform: "uppercase" }}>{product.tag}</span>
        </div>
      </div>
      <div style={{ padding: "14px 16px 18px", flex: 1, display: "flex", flexDirection: "column", gap: 7 }}>
        <div style={{ fontSize: 10, color: "#8C7B6B", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700 }}>{product.category} · {product.weight}</div>
        <div style={{ fontSize: 15, color: "#3D1F0D", fontWeight: 700, lineHeight: 1.3, fontFamily: "Georgia, serif" }}>{product.name}</div>
        {product.notes && <div style={{ fontSize: 12, color: "#8C7B6B", fontStyle: "italic" }}>{product.notes}</div>}
        <div style={{ fontSize: 12, color: "#6B3A1F", lineHeight: 1.6, flex: 1 }}>{product.desc}</div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
          <div style={{ fontSize: 17, fontWeight: 700, color: "#3D1F0D", fontFamily: "Georgia, serif" }}>
            ${product.price.toFixed(2)} <span style={{ fontSize: 11, color: "#8C7B6B", fontWeight: 400 }}>/ {product.weight}</span>
          </div>
          <button
            onClick={() => onAdd({ cartId: product.id, name: product.name, meta: `${product.weight} · ${product.category}`, price: product.price, img: product.img })}
            style={{ background: "#3D1F0D", color: "#F5EDE3", border: "none", borderRadius: 20, padding: "8px 16px", fontSize: 11, fontWeight: 700, cursor: "pointer", fontFamily: "Georgia, serif" }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
