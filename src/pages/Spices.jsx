import { useState, useEffect, useRef } from "react";

const SALE_PCT = 15;
const salePrice = (p) => parseFloat((p * (1 - SALE_PCT / 100)).toFixed(2));

const SPICES = [
  { id: "s1", name: "ZAFARAN", displayName: "Zafaran Saffron", origin: "Iran", price: 34.99, img: "/ZAFARAN.png", tag: "Rare", tagBg: "#7B2D2D", tagColor: "#F5EDE3", desc: "Grade 1 Iranian saffron — deep crimson threads with an intense floral aroma and golden hue", notes: "Floral, honey, pungent, luxurious" },
  { id: "s2", name: "CARDAMOM", displayName: "Green Cardamom", origin: "Guatemala", price: 14.99, img: "/CARDAMOM.png", tag: "Organic", tagBg: "#4A6741", tagColor: "#F5EDE3", desc: "Whole green cardamom pods freshly sourced from the Guatemalan highlands — essential for Arabic coffee", notes: "Aromatic, warm, citrusy" },
  { id: "s3", name: "cloves", displayName: "Whole Cloves", origin: "Zanzibar", price: 11.99, img: "/cloves.png", tag: "Fresh", tagBg: "#2A6B5A", tagColor: "#F5EDE3", desc: "Aromatic whole cloves from Zanzibar — perfect for spicing coffee, rice dishes and chai blends", notes: "Spicy, bold, aromatic" },
  { id: "s4", name: "Ceylon Cinnamon Sticks", displayName: "Ceylon Cinnamon", origin: "Sri Lanka", price: 12.99, img: "/Ceylon Cinnamon Sticks.png", tag: "Premium", tagBg: "#C9A84C", tagColor: "#2A1208", desc: "True Ceylon cinnamon sticks — delicate, sweet and far superior to cassia cinnamon", notes: "Sweet, warm, delicate" },
  { id: "s5", name: "Dried Sage", displayName: "Dried Sage", origin: "Jordan", price: 13.99, img: "/Dried Sage.png", tag: "Organic", tagBg: "#4A6741", tagColor: "#F5EDE3", desc: "Wild-harvested dried sage from the mountains of Jordan — used in herbal teas and medicinal blends", notes: "Earthy, herbal, aromatic" },
  { id: "s6", name: "Dried Rose Buds", displayName: "Dried Rose Buds", origin: "Morocco", price: 15.99, img: "/Dried Rose Buds.png", tag: "Aromatic", tagBg: "#8B3A62", tagColor: "#F5EDE3", desc: "Hand-picked Moroccan rose buds — used in teas, coffee blends and Middle Eastern desserts", notes: "Floral, romantic, delicate" },
];

// Improved lightbox — stays zoomed, scroll to pan
function SpiceLightbox({ spice, onClose, onAdd }) {
  const [zoomed, setZoomed] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);
  const disc = salePrice(spice.price);

  // Handle scroll to pan when zoomed
  const handleWheel = (e) => {
    if (!zoomed) return;
    e.preventDefault();
    setScrollY((prev) => {
      const next = prev + e.deltaY * 0.8;
      const max = 400;
      return Math.max(-max, Math.min(max, next));
    });
  };

  // Attach wheel listener
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [zoomed]);

  // Reset scroll when unzooming
  const toggleZoom = (e) => {
    e.stopPropagation();
    if (zoomed) { setZoomed(false); setScrollY(0); }
    else setZoomed(true);
  };

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 500, background: "rgba(42,18,8,0.92)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 16 }} onClick={onClose}>

      {/* Close */}
      <button onClick={onClose} style={{ position: "fixed", top: 20, right: 20, background: "#3D1F0D", border: "2px solid #C9A84C", borderRadius: "50%", width: 40, height: 40, color: "#F5EDE3", fontSize: 20, cursor: "pointer", zIndex: 600, display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>

      {/* Hint */}
      <div style={{ color: "rgba(245,237,227,0.7)", fontSize: 12, letterSpacing: "0.08em" }}>
        {zoomed ? "🔍 Scroll up/down to pan · Click to zoom out" : "🔍 Click image to zoom in · Then scroll to explore"}
      </div>

      {/* Image container */}
      <div
        ref={containerRef}
        onClick={(e) => e.stopPropagation()}
        style={{
          overflow: "hidden",
          width: zoomed ? "80vw" : "auto",
          height: zoomed ? "78vh" : "auto",
          borderRadius: 16,
          cursor: zoomed ? "zoom-out" : "zoom-in",
          boxShadow: "0 24px 60px rgba(0,0,0,0.6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <img
          src={spice.img}
          alt={spice.displayName}
          onClick={toggleZoom}
          style={{
            height: zoomed ? "160%" : "75vh",
            maxWidth: zoomed ? "none" : "75vw",
            objectFit: "contain",
            borderRadius: zoomed ? 0 : 16,
            transform: zoomed ? `translateY(${-scrollY}px)` : "none",
            transition: "height 0.3s ease, transform 0.1s ease",
            userSelect: "none",
            display: "block",
            flexShrink: 0,
          }}
          draggable={false}
        />
      </div>

      {/* Bottom bar */}
      <div style={{ display: "flex", gap: 12, alignItems: "center" }} onClick={(e) => e.stopPropagation()}>
        <div style={{ background: "rgba(251,245,238,0.95)", borderRadius: 10, padding: "8px 16px" }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: "#3D1F0D" }}>{spice.displayName} · {spice.origin}</span>
        </div>
        <button
          onClick={() => { onAdd({ cartId: spice.id, name: spice.displayName, meta: "Spice · 4 oz", price: disc, img: spice.img }); onClose(); }}
          style={{ background: "#C9A84C", color: "#2A1208", border: "none", borderRadius: 24, padding: "10px 24px", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "Georgia, serif" }}
        >
          Add to Cart — ${disc}
        </button>
      </div>
    </div>
  );
}

function SpiceCard({ spice, onAdd }) {
  const [added, setAdded] = useState(false);
  const [lightbox, setLightbox] = useState(false);
  const orig = spice.price;
  const disc = salePrice(orig);

  const handleAdd = () => {
    onAdd({ cartId: spice.id, name: spice.displayName, meta: "Spice · 4 oz", price: disc, img: spice.img });
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
          <img src={spice.img} alt={spice.displayName} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} onError={(e) => e.target.style.display = "none"} />
          <div
            style={{ position: "absolute", inset: 0, background: "rgba(42,18,8,0)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(42,18,8,0.3)"; e.currentTarget.querySelector("span").style.opacity = "1"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(42,18,8,0)"; e.currentTarget.querySelector("span").style.opacity = "0"; }}
          >
            <span style={{ color: "#F5EDE3", fontSize: 12, fontWeight: 700, opacity: 0, transition: "opacity 0.2s", background: "rgba(42,18,8,0.7)", padding: "6px 14px", borderRadius: 20 }}>🔍 View Full Image</span>
          </div>
          <div style={{ position: "absolute", top: 10, right: 10, display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-end" }}>
            <span style={{ background: spice.tagBg, color: spice.tagColor, fontSize: 9, fontWeight: 700, letterSpacing: "0.08em", padding: "3px 8px", borderRadius: 20, textTransform: "uppercase" }}>{spice.tag}</span>
            <span style={{ background: "#9B3B3B", color: "#fff", fontSize: 9, fontWeight: 700, padding: "3px 8px", borderRadius: 20 }}>SAVE {SALE_PCT}%</span>
          </div>
          <div style={{ position: "absolute", bottom: 10, left: 10, background: "rgba(251,245,238,0.92)", borderRadius: 8, padding: "3px 8px", fontSize: 10, color: "#8C7B6B", fontWeight: 600 }}>
            🌍 {spice.origin}
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "14px 16px 18px", flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ fontSize: 15, color: "#3D1F0D", fontWeight: 700, fontFamily: "Georgia, serif" }}>{spice.displayName}</div>
          <div style={{ fontSize: 11, color: "#8C7B6B", fontStyle: "italic" }}>{spice.notes}</div>
          <div style={{ fontSize: 12, color: "#6B3A1F", lineHeight: 1.6, flex: 1 }}>{spice.desc}</div>
          <div style={{ fontSize: 11, color: "#8C7B6B", marginTop: 4 }}>📦 4 oz · Whole / Dried</div>
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

      {lightbox && <SpiceLightbox spice={spice} onClose={() => setLightbox(false)} onAdd={onAdd} />}
    </>
  );
}

export default function Spices({ addToCart }) {
  return (
    <div style={{ background: "#FBF5EE", padding: "52px 0" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 20px" }}>
        <div style={{ color: "#C9A84C", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, textAlign: "center", marginBottom: 8 }}>Rare & Pure</div>
        <h1 style={{ fontSize: 36, color: "#3D1F0D", textAlign: "center", marginBottom: 8 }}>Premium Spices</h1>

        {/* Sale banner */}
        <div style={{ background: "linear-gradient(90deg, #9B3B3B, #C0504D, #9B3B3B)", borderRadius: 12, padding: "10px 20px", textAlign: "center", maxWidth: 520, margin: "0 auto 32px", boxShadow: "0 4px 16px rgba(155,59,59,0.3)" }}>
          <span style={{ color: "#fff", fontSize: 14, fontWeight: 700, letterSpacing: "0.05em" }}>🔥 LIMITED TIME — {SALE_PCT}% OFF ALL SPICES · Use code <span style={{ background: "rgba(255,255,255,0.2)", borderRadius: 6, padding: "1px 8px" }}>NAMA15</span></span>
        </div>

        <p style={{ color: "#8C7B6B", fontSize: 14, textAlign: "center", maxWidth: 520, margin: "0 auto 40px", lineHeight: 1.7 }}>
          From Grade 1 Iranian saffron to whole Guatemalan cardamom — sourced directly from the finest growing regions. Click any image to zoom in and scroll to explore.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 22 }}>
          {SPICES.map((spice) => <SpiceCard key={spice.id} spice={spice} onAdd={addToCart} />)}
        </div>
      </div>
    </div>
  );
}
