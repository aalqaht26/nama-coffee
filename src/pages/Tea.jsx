import { useState } from "react";

const SALE_PCT = 15;
const salePrice = (p) => parseFloat((p * (1 - SALE_PCT / 100)).toFixed(2));

const TEAS = [
  { id: "t1", name: "Yemeni Adani Chai", origin: "Yemen", price: 22.99, img: "/Yemeni Adani Chai.png", tag: "Bestseller", tagBg: "#3D1F0D", tagColor: "#F5EDE3", desc: "A bold, spiced black tea blended in the tradition of Aden — rich with cardamom, ginger and cloves", notes: "Spiced, bold, warming" },
  { id: "t2", name: "Saudi Mint Tea", origin: "Saudi Arabia", price: 19.99, img: "/Saudi Mint Tea.png", tag: "Fresh", tagBg: "#2A6B5A", tagColor: "#F5EDE3", desc: "Refreshing green tea infused with fresh Saudi mint leaves — a staple of Arabian hospitality", notes: "Cool, minty, refreshing" },
  { id: "t3", name: "Iraqi Black Tea", origin: "Iraq", price: 18.99, img: "/Iraqi Black Tea.png", tag: "Classic", tagBg: "#3D1F0D", tagColor: "#F5EDE3", desc: "Strong, full-bodied black tea brewed the Iraqi way — deep amber color with a smooth finish", notes: "Bold, full-bodied, smooth" },
  { id: "t4", name: "Saffron Karak", origin: "Gulf Region", price: 26.99, img: "/Saffron Karak.png", tag: "Premium", tagBg: "#C9A84C", tagColor: "#2A1208", desc: "Creamy karak tea elevated with threads of Persian saffron — a luxurious Gulf tradition", notes: "Creamy, floral, golden" },
  { id: "t5", name: "Rose Cardamom", origin: "Middle East", price: 21.99, img: "/Rose Cardamom.png", tag: "Aromatic", tagBg: "#8B3A62", tagColor: "#F5EDE3", desc: "Delicate black tea blended with dried rose petals and green cardamom pods — beautifully fragrant", notes: "Floral, spiced, elegant" },
  { id: "t6", name: "Hibiscus", origin: "Egypt & Sudan", price: 17.99, img: "/Hibiscus.png", tag: "Caffeine Free", tagBg: "#4A6741", tagColor: "#F5EDE3", desc: "Tart, ruby-red hibiscus flowers brewed into a vibrant herbal tea — rich in antioxidants", notes: "Tart, fruity, vibrant" },
  { id: "t7", name: "Moroccan Mint", origin: "Morocco", price: 19.49, img: "/Moroccan Mint.png", tag: "Organic", tagBg: "#4A6741", tagColor: "#F5EDE3", desc: "Classic Moroccan green tea with spearmint — traditionally poured from a height for a perfect froth", notes: "Sweet, minty, traditional" },
];

// Exact same lightbox as Coffee page
function TeaLightbox({ tea, onClose, onAdd }) {
  const [zoomed, setZoomed] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const disc = salePrice(tea.price);

  const handleMouseDown = (e) => { if (!zoomed) return; setDragging(true); setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y }); };
  const handleMouseMove = (e) => { if (!dragging) return; setOffset({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y }); };
  const handleMouseUp = () => setDragging(false);
  const toggleZoom = (e) => { e.stopPropagation(); if (zoomed) { setZoomed(false); setOffset({ x: 0, y: 0 }); } else setZoomed(true); };

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 500, background: "rgba(42,18,8,0.92)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 16 }} onClick={onClose}>
      
      {/* Close button */}
      <button onClick={onClose} style={{ position: "fixed", top: 20, right: 20, background: "#3D1F0D", border: "2px solid #C9A84C", borderRadius: "50%", width: 40, height: 40, color: "#F5EDE3", fontSize: 20, cursor: "pointer", zIndex: 600, display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>

      {/* Zoom hint — identical to Coffee */}
      <div style={{ color: "rgba(245,237,227,0.7)", fontSize: 12, letterSpacing: "0.08em" }}>
        {zoomed ? "🔍 Click image to zoom out · Drag to pan" : "🔍 Click image to zoom in and read details"}
      </div>

      {/* Image container — identical to Coffee */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ overflow: zoomed ? "hidden" : "visible", width: zoomed ? "85vw" : "auto", height: zoomed ? "82vh" : "auto", borderRadius: 16, position: "relative", cursor: zoomed ? (dragging ? "grabbing" : "grab") : "zoom-in", boxShadow: "0 24px 60px rgba(0,0,0,0.6)" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <img
          src={tea.img}
          alt={tea.name}
          onClick={toggleZoom}
          style={{ width: zoomed ? "auto" : "auto", height: zoomed ? "160%" : "78vh", maxWidth: zoomed ? "none" : "75vw", objectFit: "contain", borderRadius: 16, transform: zoomed ? `translate(${offset.x}px, ${offset.y}px)` : "none", transition: dragging ? "none" : "transform 0.2s", userSelect: "none", display: "block" }}
          draggable={false}
        />
      </div>

      {/* Bottom bar — identical to Coffee */}
      <div style={{ display: "flex", gap: 12, alignItems: "center" }} onClick={(e) => e.stopPropagation()}>
        <div style={{ background: "rgba(251,245,238,0.95)", borderRadius: 10, padding: "8px 16px", display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: "#3D1F0D" }}>{tea.name} · {tea.origin}</span>
        </div>
        <button
          onClick={() => { onAdd({ cartId: tea.id, name: tea.name, meta: "12 oz · Tea", price: disc, img: tea.img }); onClose(); }}
          style={{ background: "#C9A84C", color: "#2A1208", border: "none", borderRadius: 24, padding: "10px 24px", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "Georgia, serif" }}
        >
          Add to Cart — ${disc}
        </button>
      </div>
    </div>
  );
}

function TeaCard({ tea, onAdd }) {
  const [added, setAdded] = useState(false);
  const [lightbox, setLightbox] = useState(false);
  const orig = tea.price;
  const disc = salePrice(orig);

  const handleAdd = () => {
    onAdd({ cartId: tea.id, name: tea.name, meta: "12 oz · Tea", price: disc, img: tea.img });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <>
      <div
        style={{ background: "#F5EDE3", border: "1.5px solid #E0D0BC", borderRadius: 16, overflow: "hidden", display: "flex", flexDirection: "column", transition: "all 0.3s" }}
        onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#C9A84C"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(61,31,13,0.12)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#E0D0BC"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
      >
        {/* Image — same hover overlay as Coffee */}
        <div onClick={() => setLightbox(true)} style={{ height: 260, position: "relative", overflow: "hidden", background: "#D4C4AE", cursor: "zoom-in" }}>
          <img src={tea.img} alt={tea.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} onError={(e) => e.target.style.display = "none"} />
          <div
            style={{ position: "absolute", inset: 0, background: "rgba(42,18,8,0)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(42,18,8,0.3)"; e.currentTarget.querySelector("span").style.opacity = "1"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(42,18,8,0)"; e.currentTarget.querySelector("span").style.opacity = "0"; }}
          >
            <span style={{ color: "#F5EDE3", fontSize: 12, fontWeight: 700, opacity: 0, transition: "opacity 0.2s", background: "rgba(42,18,8,0.7)", padding: "6px 14px", borderRadius: 20 }}>🔍 View Full Image</span>
          </div>
          <div style={{ position: "absolute", top: 10, right: 10, display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-end" }}>
            <span style={{ background: tea.tagBg, color: tea.tagColor, fontSize: 9, fontWeight: 700, letterSpacing: "0.08em", padding: "3px 8px", borderRadius: 20, textTransform: "uppercase" }}>{tea.tag}</span>
            <span style={{ background: "#9B3B3B", color: "#fff", fontSize: 9, fontWeight: 700, padding: "3px 8px", borderRadius: 20 }}>SAVE {SALE_PCT}%</span>
          </div>
          <div style={{ position: "absolute", bottom: 10, left: 10, background: "rgba(251,245,238,0.92)", borderRadius: 8, padding: "3px 8px", fontSize: 10, color: "#8C7B6B", fontWeight: 600 }}>
            🌍 {tea.origin}
          </div>
        </div>

        {/* Card body */}
        <div style={{ padding: "14px 16px 18px", flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ fontSize: 15, color: "#3D1F0D", fontWeight: 700, fontFamily: "Georgia, serif" }}>{tea.name}</div>
          <div style={{ fontSize: 11, color: "#8C7B6B", fontStyle: "italic" }}>{tea.notes}</div>
          <div style={{ fontSize: 12, color: "#6B3A1F", lineHeight: 1.6, flex: 1 }}>{tea.desc}</div>
          <div style={{ fontSize: 11, color: "#8C7B6B", marginTop: 4 }}>📦 12 oz · Whole Leaf</div>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginTop: 10 }}>
            <div>
              <div style={{ fontSize: 11, color: "#9B3B3B", textDecoration: "line-through", fontWeight: 600 }}>${orig.toFixed(2)}</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#3D1F0D" }}>${disc}</div>
            </div>
            <button onClick={handleAdd} style={{ background: added ? "#4A6741" : "#3D1F0D", color: "#F5EDE3", border: "none", borderRadius: 20, padding: "9px 18px", fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: "Georgia, serif", transition: "background 0.2s" }}>
              {added ? "✓ Added!" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>

      {lightbox && <TeaLightbox tea={tea} onClose={() => setLightbox(false)} onAdd={onAdd} />}
    </>
  );
}

export default function Tea({ addToCart }) {
  return (
    <div style={{ background: "#FBF5EE", padding: "52px 0" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 20px" }}>
        <div style={{ color: "#C9A84C", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, textAlign: "center", marginBottom: 8 }}>Curated Selection</div>
        <h1 style={{ fontSize: 36, color: "#3D1F0D", textAlign: "center", marginBottom: 8 }}>Premium Middle Eastern Teas</h1>

        {/* Sale banner */}
        <div style={{ background: "linear-gradient(90deg, #9B3B3B, #C0504D, #9B3B3B)", borderRadius: 12, padding: "10px 20px", textAlign: "center", maxWidth: 520, margin: "0 auto 32px", boxShadow: "0 4px 16px rgba(155,59,59,0.3)" }}>
          <span style={{ color: "#fff", fontSize: 14, fontWeight: 700, letterSpacing: "0.05em" }}>🔥 LIMITED TIME — {SALE_PCT}% OFF ALL TEAS · Use code <span style={{ background: "rgba(255,255,255,0.2)", borderRadius: 6, padding: "1px 8px" }}>NAMA15</span></span>
        </div>

        <p style={{ color: "#8C7B6B", fontSize: 14, textAlign: "center", maxWidth: 520, margin: "0 auto 40px", lineHeight: 1.7 }}>
          From the spiced chai of Aden to the golden saffron karak of the Gulf — every tea is sourced with care and packed fresh in 12 oz bags. Click any image to zoom in.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 22 }}>
          {TEAS.map((tea) => <TeaCard key={tea.id} tea={tea} onAdd={addToCart} />)}
        </div>
      </div>
    </div>
  );
}
