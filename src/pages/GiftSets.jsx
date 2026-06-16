import { useState, useEffect, useRef } from "react";

const SALE_PCT = 15;
const salePrice = (p) => parseFloat((p * (1 - SALE_PCT / 100)).toFixed(2));

const GIFTS = [
  {
    id: "g1",
    name: "Morning Ritual Bundle",
    img: "/Morning Ritual bundle.png",
    price: 54.99,
    tag: "Bestseller", tagBg: "#3D1F0D", tagColor: "#F5EDE3",
    desc: "Start every morning the NAMA way — a perfectly curated trio to fuel your day with warmth and tradition.",
    includes: ["Yemen Coffee (12 oz)", "Green Cardamom (4 oz)", "Organic Honey Stirrers"],
    occasion: "Daily Ritual · Birthday · Housewarming",
  },
  {
    id: "g2",
    name: "Ramadan Gift Box",
    img: "/Ramadan Gift Box.png",
    price: 69.99,
    tag: "Seasonal", tagBg: "#8B3A62", tagColor: "#F5EDE3",
    desc: "A thoughtfully curated Ramadan collection — everything you need from Suhoor to Iftar, wrapped with love.",
    includes: ["Ajwa Dates (1 lb)", "Yemeni Adani Chai (12 oz)", "Zafaran Saffron (1g)", "Rose Cardamom Tea (12 oz)"],
    occasion: "Ramadan · Eid · Islamic Occasions",
  },
  {
    id: "g3",
    name: "Spice Lover's Collection",
    img: "/Spice Lover's Collection.png",
    price: 49.99,
    tag: "Gift", tagBg: "#C9A84C", tagColor: "#2A1208",
    desc: "Four of our finest spices in one beautiful box — the perfect gift for anyone who loves to cook or brew.",
    includes: ["Zafaran Saffron (1g)", "Green Cardamom (4 oz)", "Ceylon Cinnamon Sticks (4 oz)", "Whole Cloves (4 oz)"],
    occasion: "Foodie Gift · Birthday · Thank You",
  },
  {
    id: "g4",
    name: "Coffee Explorer Box",
    img: "/Coffee Explorer Box.png",
    price: 64.99,
    tag: "New", tagBg: "#C9A84C", tagColor: "#2A1208",
    desc: "Three single-origin coffees to explore the world one cup at a time — roasted fresh before shipping.",
    includes: ["Yemen Coffee 12oz (Medium Roast)", "Ethiopia Coffee 12oz (Light Roast)", "Kenya Coffee 12oz (Dark Roast)"],
    occasion: "Coffee Lover · Birthday · Corporate",
  },
  {
    id: "g5",
    name: "Eid Celebration Box",
    img: "/Eid Celebration Box.png",
    price: 79.99,
    tag: "Premium", tagBg: "#7B2D2D", tagColor: "#F5EDE3",
    desc: "A luxurious Eid gift box filled with the finest dates, teas and spices — beautifully packaged for the occasion.",
    includes: ["Medjool Dates (1 lb)", "Ajwa Dates (1 lb)", "Saffron Karak Tea (12 oz)", "Zafaran Saffron (1g)", "Green Cardamom (4 oz)"],
    occasion: "Eid Al-Fitr · Eid Al-Adha · Special Occasions",
  },
  {
    id: "g6",
    name: "Date's Lover Box",
    img: "/Date's Lover Box.png",
    price: 44.99,
    tag: "Fresh", tagBg: "#2A6B5A", tagColor: "#F5EDE3",
    desc: "A curated selection of our finest dates — three premium varieties for the true date connoisseur.",
    includes: ["Medjool Dates (1 lb)", "Ajwa Dates (1 lb)", "Sukkari Dates (1 lb)"],
    occasion: "Date Lover · Ramadan · Everyday Gifting",
  },
];

// Improved lightbox with scroll-to-pan zoom
function GiftLightbox({ gift, onClose, onAdd }) {
  const [zoomed, setZoomed] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);
  const disc = salePrice(gift.price);

  const handleWheel = (e) => {
    if (!zoomed) return;
    e.preventDefault();
    setScrollY((prev) => {
      const next = prev + e.deltaY * 0.8;
      return Math.max(-400, Math.min(400, next));
    });
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
          src={gift.img}
          alt={gift.name}
          onClick={toggleZoom}
          style={{ height: zoomed ? "160%" : "75vh", maxWidth: zoomed ? "none" : "75vw", objectFit: "contain", borderRadius: zoomed ? 0 : 16, transform: zoomed ? `translateY(${-scrollY}px)` : "none", transition: "height 0.3s ease, transform 0.1s ease", userSelect: "none", display: "block", flexShrink: 0 }}
          draggable={false}
        />
      </div>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }} onClick={(e) => e.stopPropagation()}>
        <div style={{ background: "rgba(251,245,238,0.95)", borderRadius: 10, padding: "8px 16px" }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: "#3D1F0D" }}>{gift.name}</span>
        </div>
        <button
          onClick={() => { onAdd({ cartId: gift.id, name: gift.name, meta: "Gift Set", price: disc, img: gift.img }); onClose(); }}
          style={{ background: "#C9A84C", color: "#2A1208", border: "none", borderRadius: 24, padding: "10px 24px", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "Georgia, serif" }}
        >
          Add to Cart — ${disc}
        </button>
      </div>
    </div>
  );
}

function GiftCard({ gift, onAdd }) {
  const [added, setAdded] = useState(false);
  const [lightbox, setLightbox] = useState(false);
  const orig = gift.price;
  const disc = salePrice(orig);

  const handleAdd = () => {
    onAdd({ cartId: gift.id, name: gift.name, meta: "Gift Set", price: disc, img: gift.img });
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
          <img src={gift.img} alt={gift.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} onError={(e) => e.target.style.display = "none"} />
          <div
            style={{ position: "absolute", inset: 0, background: "rgba(42,18,8,0)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(42,18,8,0.3)"; e.currentTarget.querySelector("span").style.opacity = "1"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(42,18,8,0)"; e.currentTarget.querySelector("span").style.opacity = "0"; }}
          >
            <span style={{ color: "#F5EDE3", fontSize: 12, fontWeight: 700, opacity: 0, transition: "opacity 0.2s", background: "rgba(42,18,8,0.7)", padding: "6px 14px", borderRadius: 20 }}>🔍 View Full Image</span>
          </div>
          <div style={{ position: "absolute", top: 10, right: 10, display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-end" }}>
            <span style={{ background: gift.tagBg, color: gift.tagColor, fontSize: 9, fontWeight: 700, letterSpacing: "0.08em", padding: "3px 8px", borderRadius: 20, textTransform: "uppercase" }}>{gift.tag}</span>
            <span style={{ background: "#9B3B3B", color: "#fff", fontSize: 9, fontWeight: 700, padding: "3px 8px", borderRadius: 20 }}>SAVE {SALE_PCT}%</span>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "14px 16px 18px", flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ fontSize: 16, color: "#3D1F0D", fontWeight: 700, fontFamily: "Georgia, serif" }}>{gift.name}</div>
          <div style={{ fontSize: 12, color: "#6B3A1F", lineHeight: 1.6 }}>{gift.desc}</div>

          {/* Includes */}
          <div style={{ background: "#EDE5DA", borderRadius: 10, padding: "10px 12px" }}>
            <div style={{ fontSize: 10, color: "#8C7B6B", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>📦 What's Inside</div>
            {gift.includes.map((item, i) => (
              <div key={i} style={{ fontSize: 11, color: "#3D1F0D", marginBottom: 3, display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ color: "#C9A84C", fontSize: 10 }}>✦</span> {item}
              </div>
            ))}
          </div>

          {/* Occasion */}
          <div style={{ fontSize: 11, color: "#8C7B6B", fontStyle: "italic" }}>🎁 {gift.occasion}</div>

          {/* Price & CTA */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginTop: 6 }}>
            <div>
              <div style={{ fontSize: 11, color: "#9B3B3B", textDecoration: "line-through", fontWeight: 600 }}>${orig.toFixed(2)}</div>
              <div style={{ fontSize: 20, fontWeight: 700, color: "#3D1F0D" }}>${disc}</div>
            </div>
            <button onClick={handleAdd} style={{ background: added ? "#4A6741" : "#3D1F0D", color: "#F5EDE3", border: "none", borderRadius: 20, padding: "10px 20px", fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: "Georgia, serif", transition: "background 0.2s" }}>
              {added ? "✓ Added!" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>

      {lightbox && <GiftLightbox gift={gift} onClose={() => setLightbox(false)} onAdd={onAdd} />}
    </>
  );
}

export default function GiftSets({ addToCart }) {
  return (
    <div style={{ background: "#FBF5EE", padding: "52px 0" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 20px" }}>
        <div style={{ color: "#C9A84C", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, textAlign: "center", marginBottom: 8 }}>Curated Collections</div>
        <h1 style={{ fontSize: 36, color: "#3D1F0D", textAlign: "center", marginBottom: 8 }}>Gift Sets</h1>

        {/* Sale banner */}
        <div style={{ background: "linear-gradient(90deg, #9B3B3B, #C0504D, #9B3B3B)", borderRadius: 12, padding: "10px 20px", textAlign: "center", maxWidth: 520, margin: "0 auto 32px", boxShadow: "0 4px 16px rgba(155,59,59,0.3)" }}>
          <span style={{ color: "#fff", fontSize: 14, fontWeight: 700, letterSpacing: "0.05em" }}>🔥 LIMITED TIME — {SALE_PCT}% OFF ALL GIFT SETS · Use code <span style={{ background: "rgba(255,255,255,0.2)", borderRadius: 6, padding: "1px 8px" }}>NAMA15</span></span>
        </div>

        <p style={{ color: "#8C7B6B", fontSize: 14, textAlign: "center", maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.7 }}>
          Every gift set is thoughtfully curated and beautifully packaged — perfect for Ramadan, Eid, corporate gifting or simply showing someone you care. Click any image to zoom in.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
          {GIFTS.map((gift) => <GiftCard key={gift.id} gift={gift} onAdd={addToCart} />)}
        </div>
      </div>
    </div>
  );
}
