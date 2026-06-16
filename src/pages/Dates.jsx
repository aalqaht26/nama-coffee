import { useState, useEffect, useRef } from "react";

const SALE_PCT = 15;
const salePrice = (p) => parseFloat((p * (1 - SALE_PCT / 100)).toFixed(2));

const DATES = [
  { id: "d1", name: "Ajwa", displayName: "Ajwa Dates", origin: "Al-Madinah, Saudi Arabia", price: 17.99, img: "/Ajwa.png", tag: "Rare", tagBg: "#7B2D2D", tagColor: "#F5EDE3", desc: "The most prized date in Islam — soft, dark and deeply rich. Grown exclusively in the holy city of Al-Madinah.", notes: "Rich, soft, deeply sweet, earthy" },
  { id: "d2", name: "Medjool", displayName: "Medjool Dates", origin: "Al-Qassim, Saudi Arabia", price: 16.99, img: "/Medjool.png", tag: "Bestseller", tagBg: "#3D1F0D", tagColor: "#F5EDE3", desc: "Known as the 'King of Dates' — large, plump and irresistibly sweet with a caramel-like texture.", notes: "Caramel, honeyed, tender, large" },
  { id: "d3", name: "Sokari", displayName: "Sokari Dates", origin: "Al-Qassim, Saudi Arabia", price: 16.49, img: "/Sokari.png", tag: "Premium", tagBg: "#C9A84C", tagColor: "#2A1208", desc: "A Saudi favorite — golden in color with a crumbly, sugary texture and an intensely sweet flavor.", notes: "Sugary, crumbly, golden, delicate" },
  { id: "d4", name: "Kholas", displayName: "Kholas Dates", origin: "Al-Ahsa, Saudi Arabia", price: 15.99, img: "/Kholas.png", tag: "Premium", tagBg: "#C9A84C", tagColor: "#2A1208", desc: "One of the finest Saudi varieties — amber-colored with a rich toffee flavor and smooth, moist texture.", notes: "Toffee, amber, moist, rich" },
  { id: "d5", name: "Segai", displayName: "Segai Dates", origin: "Al-Qassim, Saudi Arabia", price: 14.99, img: "/Segai.png", tag: "Fresh", tagBg: "#2A6B5A", tagColor: "#F5EDE3", desc: "A unique two-tone date — crispy at the tip and soft at the base, with a light sweet flavor.", notes: "Crispy, light, two-tone, mild" },
  { id: "d6", name: "Wanan", displayName: "Wanan Dates", origin: "Al-Madinah, Saudi Arabia", price: 13.99, img: "/Wanan.png", tag: "Organic", tagBg: "#4A6741", tagColor: "#F5EDE3", desc: "A lesser-known gem from Al-Madinah — soft, sweet and aromatic with a beautiful dark amber hue.", notes: "Aromatic, soft, dark amber, sweet" },
  { id: "d7", name: "Khidri", displayName: "Khidri Dates", origin: "Al-Qassim, Saudi Arabia", price: 12.99, img: "/Khidri.png", tag: "New", tagBg: "#C9A84C", tagColor: "#2A1208", desc: "A dark, semi-dry date with a rich flavor and chewy texture — perfect for snacking and pairing with Arabic coffee.", notes: "Chewy, dark, rich, semi-dry" },
];

// Improved lightbox with scroll-to-pan zoom
function DateLightbox({ date, onClose, onAdd }) {
  const [zoomed, setZoomed] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);
  const disc = salePrice(date.price);

  const handleWheel = (e) => {
    if (!zoomed) return;
    e.preventDefault();
    setScrollY((prev) => Math.max(-400, Math.min(400, prev + e.deltaY * 0.8)));
  };

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [zoomed]);

  const toggleZoom = (e) => {
    e.stopPropagation();
    if (zoomed) { setZoomed(false); setScrollY(0); }
    else setZoomed(true);
  };

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 500, background: "rgba(42,18,8,0.92)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 16 }} onClick={onClose}>
      <button onClick={onClose} style={{ position: "fixed", top: 20, right: 20, background: "#3D1F0D", border: "2px solid #C9A84C", borderRadius: "50%", width: 40, height: 40, color: "#F5EDE3", fontSize: 20, cursor: "pointer", zIndex: 600, display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
      <div style={{ color: "rgba(245,237,227,0.7)", fontSize: 12, letterSpacing: "0.08em" }}>
        {zoomed ? "🔍 Scroll up/down to pan · Click to zoom out" : "🔍 Click image to zoom in · Then scroll to explore"}
      </div>
      <div
        ref={containerRef}
        onClick={(e) => e.stopPropagation()}
        style={{ overflow: "hidden", width: zoomed ? "80vw" : "auto", height: zoomed ? "78vh" : "auto", borderRadius: 16, cursor: zoomed ? "zoom-out" : "zoom-in", boxShadow: "0 24px 60px rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <img
          src={date.img}
          alt={date.displayName}
          onClick={toggleZoom}
          style={{ height: zoomed ? "160%" : "75vh", maxWidth: zoomed ? "none" : "75vw", objectFit: "contain", borderRadius: zoomed ? 0 : 16, transform: zoomed ? `translateY(${-scrollY}px)` : "none", transition: "height 0.3s ease, transform 0.1s ease", userSelect: "none", display: "block", flexShrink: 0 }}
          draggable={false}
        />
      </div>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }} onClick={(e) => e.stopPropagation()}>
        <div style={{ background: "rgba(251,245,238,0.95)", borderRadius: 10, padding: "8px 16px" }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: "#3D1F0D" }}>{date.displayName} · {date.origin}</span>
        </div>
        <button
          onClick={() => { onAdd({ cartId: date.id, name: date.displayName, meta: "2 lb · Saudi Arabia", price: disc, img: date.img }); onClose(); }}
          style={{ background: "#C9A84C", color: "#2A1208", border: "none", borderRadius: 24, padding: "10px 24px", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "Georgia, serif" }}
        >
          Add to Cart — ${disc}
        </button>
      </div>
    </div>
  );
}

function DateCard({ date, onAdd }) {
  const [added, setAdded] = useState(false);
  const [lightbox, setLightbox] = useState(false);
  const orig = date.price;
  const disc = salePrice(orig);

  const handleAdd = () => {
    onAdd({ cartId: date.id, name: date.displayName, meta: "2 lb · Saudi Arabia", price: disc, img: date.img });
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
        {/* Image */}
        <div onClick={() => setLightbox(true)} style={{ height: 260, position: "relative", overflow: "hidden", background: "#D4C4AE", cursor: "zoom-in" }}>
          <img src={date.img} alt={date.displayName} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} onError={(e) => e.target.style.display = "none"} />
          <div
            style={{ position: "absolute", inset: 0, background: "rgba(42,18,8,0)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(42,18,8,0.3)"; e.currentTarget.querySelector("span").style.opacity = "1"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(42,18,8,0)"; e.currentTarget.querySelector("span").style.opacity = "0"; }}
          >
            <span style={{ color: "#F5EDE3", fontSize: 12, fontWeight: 700, opacity: 0, transition: "opacity 0.2s", background: "rgba(42,18,8,0.7)", padding: "6px 14px", borderRadius: 20 }}>🔍 View Full Image</span>
          </div>
          <div style={{ position: "absolute", top: 10, right: 10, display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-end" }}>
            <span style={{ background: date.tagBg, color: date.tagColor, fontSize: 9, fontWeight: 700, letterSpacing: "0.08em", padding: "3px 8px", borderRadius: 20, textTransform: "uppercase" }}>{date.tag}</span>
            <span style={{ background: "#9B3B3B", color: "#fff", fontSize: 9, fontWeight: 700, padding: "3px 8px", borderRadius: 20 }}>SAVE {SALE_PCT}%</span>
          </div>
          <div style={{ position: "absolute", bottom: 10, left: 10, background: "rgba(251,245,238,0.92)", borderRadius: 8, padding: "3px 8px", fontSize: 10, color: "#8C7B6B", fontWeight: 600 }}>
            🇸🇦 {date.origin}
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "14px 16px 18px", flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ fontSize: 15, color: "#3D1F0D", fontWeight: 700, fontFamily: "Georgia, serif" }}>{date.displayName}</div>
          <div style={{ fontSize: 11, color: "#8C7B6B", fontStyle: "italic" }}>{date.notes}</div>
          <div style={{ fontSize: 12, color: "#6B3A1F", lineHeight: 1.6, flex: 1 }}>{date.desc}</div>
          <div style={{ fontSize: 11, color: "#8C7B6B", marginTop: 4 }}>📦 2 lb · Sun-ripened · Saudi Arabia</div>
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

      {lightbox && <DateLightbox date={date} onClose={() => setLightbox(false)} onAdd={onAdd} />}
    </>
  );
}

export default function Dates({ addToCart }) {
  return (
    <div style={{ background: "#FBF5EE", padding: "52px 0" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 20px" }}>
        <div style={{ color: "#C9A84C", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, textAlign: "center", marginBottom: 8 }}>Sun-Ripened · Saudi Arabia</div>
        <h1 style={{ fontSize: 36, color: "#3D1F0D", textAlign: "center", marginBottom: 8 }}>Premium Saudi Dates</h1>

        {/* Sale banner */}
        <div style={{ background: "linear-gradient(90deg, #9B3B3B, #C0504D, #9B3B3B)", borderRadius: 12, padding: "10px 20px", textAlign: "center", maxWidth: 520, margin: "0 auto 32px", boxShadow: "0 4px 16px rgba(155,59,59,0.3)" }}>
          <span style={{ color: "#fff", fontSize: 14, fontWeight: 700, letterSpacing: "0.05em" }}>🔥 LIMITED TIME — {SALE_PCT}% OFF ALL DATES · Use code <span style={{ background: "rgba(255,255,255,0.2)", borderRadius: 6, padding: "1px 8px" }}>NAMA15</span></span>
        </div>

        <p style={{ color: "#8C7B6B", fontSize: 14, textAlign: "center", maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.7 }}>
          Hand-selected from the finest date farms across Saudi Arabia — each variety is sun-ripened, packed fresh and delivered in 2 lb boxes. Click any image to zoom in and explore.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 22 }}>
          {DATES.map((date) => <DateCard key={date.id} date={date} onAdd={addToCart} />)}
        </div>
      </div>
    </div>
  );
}
