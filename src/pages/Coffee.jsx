import { useState } from "react";

const COFFEES = [
  { id: "c1", origin: "Yemen", region: "Haraaz Mountains", flagCode: "ye", notes: "Dark fruit, tamarind, wine-like, earthy", img: "/Yemen.png", prices: { oz12: 24.99, lb1: 34.99, lb5: 149.99 }, tag: "Bestseller" },
  { id: "c2", origin: "Ethiopia", region: "Yirgacheffe", flagCode: "et", notes: "Jasmine, bergamot, blueberry, citrus", img: "/Ethiopia.png", prices: { oz12: 22.99, lb1: 32.99, lb5: 139.99 }, tag: "Premium" },
  { id: "c3", origin: "Saudi Arabia", region: "Khawlani, Jizan", flagCode: "sa", notes: "Cardamom, rose, light body, golden brew", img: "/Saudi Arabia.png", prices: { oz12: 26.99, lb1: 36.99, lb5: 159.99 }, tag: "Rare" },
  { id: "c4", origin: "Brazil", region: "Minas Gerais", flagCode: "br", notes: "Chocolate, caramel, walnut, smooth", img: "/Brazil.png", prices: { oz12: 19.99, lb1: 28.99, lb5: 124.99 }, tag: "New" },
  { id: "c5", origin: "Colombia", region: "Huila", flagCode: "co", notes: "Red apple, brown sugar, citrus, balanced", img: "/Colombia.png", prices: { oz12: 20.99, lb1: 29.99, lb5: 129.99 }, tag: "Organic" },
  { id: "c6", origin: "Indonesia", region: "Sumatra Mandheling", flagCode: "id", notes: "Cedar, dark chocolate, full body, earthy", img: "/Indonesia.png", prices: { oz12: 21.99, lb1: 30.99, lb5: 134.99 }, tag: "Bestseller" },
  { id: "c7", origin: "Honduras", region: "Copán", flagCode: "hn", notes: "Honey, peach, milk chocolate, mild", img: "/Honduras.png", prices: { oz12: 18.99, lb1: 27.99, lb5: 119.99 }, tag: "Fresh" },
  { id: "c8", origin: "Kenya", region: "Kirinyaga AA", flagCode: "ke", notes: "Blackcurrant, tomato, bright acidity, berry", img: "/Kenya.png", prices: { oz12: 23.99, lb1: 33.99, lb5: 144.99 }, tag: "Premium" },
  { id: "c9", origin: "Guatemala", region: "Huehuetenango", flagCode: "gt", notes: "Brown sugar, apple, floral, bright acidity", img: "/Guatemala.png", prices: { oz12: 20.49, lb1: 29.49, lb5: 127.99 }, tag: "New" },
];

const SALE_PCT = 15;
const salePrice = (p) => parseFloat((p * (1 - SALE_PCT / 100)).toFixed(2));

const ROASTS = [
  { id: "light",       name: "Light Roast",   beanColor: "#C4864A", bgColor: "#FDF3E7", borderColor: "#C4864A", desc: "Bright & fruity",    icon: "☀️" },
  { id: "medium",      name: "Medium Roast",  beanColor: "#8B4A1E", bgColor: "#F5E6D8", borderColor: "#8B4A1E", desc: "Balanced & smooth",  icon: "🌤️" },
  { id: "medium_dark", name: "Medium-Dark",   beanColor: "#5C2E10", bgColor: "#EDD9C8", borderColor: "#5C2E10", desc: "Rich & bold",         icon: "⛅" },
  { id: "dark",        name: "Dark Roast",    beanColor: "#1E0E05", bgColor: "#2A1208", borderColor: "#1E0E05", desc: "Intense & smoky",    icon: "🌑" },
];

const SIZES = [
  { id: "oz12", label: "12 oz", desc: "Try it out" },
  { id: "lb1",  label: "1 lb",  desc: "Monthly supply" },
  { id: "lb5",  label: "5 lb",  desc: "Best value" },
];

const SPICES = [
  { id: "cardamom", name: "Cardamom", icon: "🌿", desc: "Classic Arabic blend", price: 2.00 },
  { id: "saffron",  name: "Saffron",  icon: "✨", desc: "Luxurious & rare",     price: 5.00 },
  { id: "cinnamon", name: "Cinnamon", icon: "🪵", desc: "Warm & sweet",         price: 1.50 },
  { id: "cloves",   name: "Cloves",   icon: "🌰", desc: "Spicy & aromatic",     price: 1.50 },
];

const TAG_COLORS = {
  Bestseller: { bg: "#3D1F0D", color: "#F5EDE3" },
  Premium:    { bg: "#C9A84C", color: "#2A1208" },
  Organic:    { bg: "#4A6741", color: "#F5EDE3" },
  Fresh:      { bg: "#2A6B5A", color: "#F5EDE3" },
  New:        { bg: "#C9A84C", color: "#2A1208" },
  Rare:       { bg: "#7B2D2D", color: "#F5EDE3" },
};

// Coffee bean SVG icon colored by roast
function BeanIcon({ color, size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="20" cy="20" rx="14" ry="10" fill={color} />
      <path d="M20 10 Q24 20 20 30" stroke="rgba(255,255,255,0.25)" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function FlagImg({ code, size = 28 }) {
  return (
    <img
      src={`https://flagcdn.com/w40/${code}.png`}
      alt={code}
      width={size}
      height={size * 0.67}
      style={{ borderRadius: 3, objectFit: "cover", display: "inline-block", verticalAlign: "middle" }}
      onError={(e) => (e.target.style.display = "none")}
    />
  );
}

// Sale price display
function PriceTag({ original, style = {} }) {
  const discounted = salePrice(original);
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", ...style }}>
      <span style={{ fontSize: 11, color: "#9B3B3B", textDecoration: "line-through", fontWeight: 600 }}>${original.toFixed(2)}</span>
      <span style={{ fontSize: 18, fontWeight: 700, color: "#3D1F0D", lineHeight: 1.1 }}>${discounted}</span>
      <span style={{ fontSize: 10, background: "#9B3B3B", color: "#fff", borderRadius: 10, padding: "1px 6px", fontWeight: 700, marginTop: 2 }}>SAVE {SALE_PCT}%</span>
    </div>
  );
}

// Lightbox
function ImageLightbox({ coffee, onClose, onCustomize }) {
  const [zoomed, setZoomed] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => { if (!zoomed) return; setDragging(true); setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y }); };
  const handleMouseMove = (e) => { if (!dragging) return; setOffset({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y }); };
  const handleMouseUp = () => setDragging(false);
  const toggleZoom = (e) => { e.stopPropagation(); if (zoomed) { setZoomed(false); setOffset({ x: 0, y: 0 }); } else setZoomed(true); };

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 500, background: "rgba(42,18,8,0.92)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 16 }} onClick={onClose}>
      <button onClick={onClose} style={{ position: "fixed", top: 20, right: 20, background: "#3D1F0D", border: "2px solid #C9A84C", borderRadius: "50%", width: 40, height: 40, color: "#F5EDE3", fontSize: 20, cursor: "pointer", zIndex: 600, display: "flex", alignItems: "center", justifyContent: "center" }}>✕</button>
      <div style={{ color: "rgba(245,237,227,0.7)", fontSize: 12, letterSpacing: "0.08em" }}>
        {zoomed ? "🔍 Click image to zoom out · Drag to pan" : "🔍 Click image to zoom in and read details"}
      </div>
      <div onClick={(e) => e.stopPropagation()} style={{ overflow: zoomed ? "hidden" : "visible", width: zoomed ? "85vw" : "auto", height: zoomed ? "82vh" : "auto", borderRadius: 16, position: "relative", cursor: zoomed ? (dragging ? "grabbing" : "grab") : "zoom-in", boxShadow: "0 24px 60px rgba(0,0,0,0.6)" }}
        onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
        <img src={coffee.img} alt={coffee.origin} onClick={toggleZoom}
          style={{ width: zoomed ? "auto" : "auto", height: zoomed ? "160%" : "78vh", maxWidth: zoomed ? "none" : "75vw", objectFit: "contain", borderRadius: 16, transform: zoomed ? `translate(${offset.x}px, ${offset.y}px)` : "none", transition: dragging ? "none" : "transform 0.2s", userSelect: "none", display: "block" }}
          draggable={false} />
      </div>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }} onClick={(e) => e.stopPropagation()}>
        <div style={{ background: "rgba(251,245,238,0.95)", borderRadius: 10, padding: "8px 16px", display: "flex", alignItems: "center", gap: 8 }}>
          <FlagImg code={coffee.flagCode} size={22} />
          <span style={{ fontSize: 14, fontWeight: 700, color: "#3D1F0D" }}>{coffee.origin} · {coffee.region}</span>
        </div>
        <button onClick={() => { setZoomed(false); setOffset({ x: 0, y: 0 }); onCustomize(); }}
          style={{ background: "#C9A84C", color: "#2A1208", border: "none", borderRadius: 24, padding: "10px 24px", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "Georgia, serif" }}>
          Customize & Add to Cart →
        </button>
      </div>
    </div>
  );
}

// Customize modal
function CoffeeModal({ coffee, onClose, onAdd }) {
  const [size, setSize] = useState("oz12");
  const [roast, setRoast] = useState("medium");
  const [spices, setSpices] = useState([]);

  const toggleSpice = (id) => setSpices((prev) => prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]);
  const basePrice = salePrice(coffee.prices[size] || 0);
  const spiceTotal = spices.reduce((s, id) => s + (SPICES.find((x) => x.id === id)?.price || 0), 0);
  const total = parseFloat((basePrice + spiceTotal).toFixed(2));
  const selectedRoast = ROASTS.find((r) => r.id === roast);

  const handleAdd = () => {
    const sz = SIZES.find((s) => s.id === size);
    const ro = ROASTS.find((r) => r.id === roast);
    const spiceNames = spices.map((id) => SPICES.find((s) => s.id === id)?.name).filter(Boolean);
    onAdd({
      cartId: `${coffee.id}_${size}_${roast}_${[...spices].sort().join("_")}`,
      name: `${coffee.origin} Coffee`,
      meta: `${sz.label} · ${ro.name}${spiceNames.length ? " + " + spiceNames.join(", ") : ""}`,
      price: total,
      img: coffee.img,
    });
    onClose();
  };

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 600, background: "rgba(42,18,8,0.6)", display: "flex", alignItems: "center", justifyContent: "center" }} onClick={onClose}>
      <div style={{ background: "#FBF5EE", borderRadius: 20, width: "92%", maxWidth: 540, maxHeight: "90vh", overflowY: "auto" }} onClick={(e) => e.stopPropagation()}>
        <div style={{ padding: "22px 24px 16px", borderBottom: "1px solid #E0D0BC", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: 20, fontWeight: 700, color: "#3D1F0D", fontFamily: "Georgia, serif", display: "flex", alignItems: "center", gap: 10 }}>
              <FlagImg code={coffee.flagCode} size={32} />
              {coffee.origin} Coffee
            </div>
            <div style={{ fontSize: 12, color: "#8C7B6B", marginTop: 3 }}>{coffee.region} · {coffee.notes}</div>
          </div>
          <button onClick={onClose} style={{ background: "none", border: "none", fontSize: 22, cursor: "pointer", color: "#3D1F0D" }}>✕</button>
        </div>
        <div style={{ padding: "20px 24px" }}>

          {/* Size */}
          <div style={{ marginBottom: 22 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#3D1F0D", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Bag Size</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
              {SIZES.map((sz) => (
                <button key={sz.id} onClick={() => setSize(sz.id)} style={{ border: `1.5px solid ${size === sz.id ? "#3D1F0D" : "#D4C4AE"}`, borderRadius: 10, padding: "10px 8px", background: size === sz.id ? "#3D1F0D" : "none", cursor: "pointer", textAlign: "center", fontFamily: "Georgia, serif", position: "relative" }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: size === sz.id ? "#F5EDE3" : "#3D1F0D", display: "block" }}>{sz.label}</span>
                  <span style={{ fontSize: 10, color: size === sz.id ? "rgba(245,237,227,0.6)" : "#9B3B3B", textDecoration: "line-through", display: "block" }}>${coffee.prices[sz.id].toFixed(2)}</span>
                  <span style={{ fontSize: 13, color: size === sz.id ? "#C9A84C" : "#3D1F0D", fontWeight: 700, display: "block" }}>${salePrice(coffee.prices[sz.id])}</span>
                  {size === sz.id && <span style={{ fontSize: 9, background: "#C9A84C", color: "#2A1208", borderRadius: 8, padding: "1px 5px", fontWeight: 700, marginTop: 2, display: "inline-block" }}>SAVE {SALE_PCT}%</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Roast */}
          <div style={{ marginBottom: 22 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#3D1F0D", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>Roast Level</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 8 }}>
              {ROASTS.map((r) => {
                const isSelected = roast === r.id;
                const isDark = r.id === "dark";
                return (
                  <button key={r.id} onClick={() => setRoast(r.id)}
                    style={{ border: `2px solid ${isSelected ? r.beanColor : "#D4C4AE"}`, borderRadius: 10, padding: "12px", background: isSelected ? (isDark ? "#2A1208" : r.bgColor) : "none", cursor: "pointer", textAlign: "left", fontFamily: "Georgia, serif", transition: "all 0.2s" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <BeanIcon color={r.beanColor} size={26} />
                      <span style={{ fontSize: 13, fontWeight: 700, color: isSelected ? (isDark ? "#F5EDE3" : r.beanColor) : "#3D1F0D" }}>{r.name}</span>
                    </div>
                    <span style={{ fontSize: 11, color: isSelected ? (isDark ? "rgba(245,237,227,0.6)" : r.beanColor) : "#8C7B6B", display: "block", marginLeft: 34, opacity: 0.8 }}>{r.desc}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Spices */}
          <div style={{ marginBottom: 22 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#3D1F0D", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>
              Add Spices <span style={{ fontWeight: 400, textTransform: "none", color: "#8C7B6B", fontSize: 11 }}>— optional, freshly blended</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {SPICES.map((sp) => {
                const on = spices.includes(sp.id);
                return (
                  <div key={sp.id} onClick={() => toggleSpice(sp.id)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", background: on ? "#FDF6E8" : "#F5EDE3", border: `1.5px solid ${on ? "#C9A84C" : "#E0D0BC"}`, borderRadius: 10, cursor: "pointer" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ fontSize: 20 }}>{sp.icon}</span>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: "#3D1F0D" }}>{sp.name}</div>
                        <div style={{ fontSize: 11, color: "#8C7B6B" }}>{sp.desc}</div>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: "#C9A84C" }}>+${sp.price.toFixed(2)}</span>
                      <div style={{ width: 20, height: 20, borderRadius: "50%", background: on ? "#C9A84C" : "none", border: `2px solid ${on ? "#C9A84C" : "#D4C4AE"}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: on ? "#2A1208" : "transparent" }}>{on ? "✓" : ""}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Summary */}
          <div style={{ background: "#EDE5DA", borderRadius: 12, padding: "14px 16px", marginBottom: 18 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#3D1F0D", marginBottom: 4 }}>
              <span>Base ({SIZES.find((sz) => sz.id === size)?.label}) <span style={{ color: "#9B3B3B", textDecoration: "line-through", fontSize: 11 }}>${coffee.prices[size].toFixed(2)}</span></span>
              <span>${salePrice(coffee.prices[size])}</span>
            </div>
            {spices.map((id) => { const sp = SPICES.find((x) => x.id === id); return sp ? <div key={id} style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#3D1F0D", marginBottom: 4 }}><span>{sp.name}</span><span>+${sp.price.toFixed(2)}</span></div> : null; })}
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 16, fontWeight: 700, color: "#3D1F0D", borderTop: "1px solid #D4C4AE", paddingTop: 8, marginTop: 4 }}>
              <span>Total</span><span>${total.toFixed(2)}</span>
            </div>
            <div style={{ fontSize: 11, color: "#4A6741", marginTop: 6, fontWeight: 600 }}>🎉 You save ${(coffee.prices[size] - salePrice(coffee.prices[size])).toFixed(2)} with our current promotion!</div>
          </div>

          <button onClick={handleAdd} style={{ width: "100%", background: "#3D1F0D", color: "#F5EDE3", border: "none", borderRadius: 28, padding: 14, fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "Georgia, serif" }}>
            Add to Cart — ${total.toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Coffee({ addToCart }) {
  const [lightboxCoffee, setLightboxCoffee] = useState(null);
  const [modalCoffee, setModalCoffee] = useState(null);
  const openCustomize = (coffee) => { setLightboxCoffee(null); setModalCoffee(coffee); };

  return (
    <div style={{ background: "#FBF5EE", padding: "52px 0" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 20px" }}>
        <div style={{ color: "#C9A84C", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, textAlign: "center", marginBottom: 8 }}>Single Origin</div>
        <h1 style={{ fontSize: 36, color: "#3D1F0D", textAlign: "center", marginBottom: 8 }}>Select Your Coffee Origin</h1>

        {/* Sale banner */}
        <div style={{ background: "linear-gradient(90deg, #9B3B3B, #C0504D, #9B3B3B)", borderRadius: 12, padding: "10px 20px", textAlign: "center", maxWidth: 520, margin: "0 auto 32px", boxShadow: "0 4px 16px rgba(155,59,59,0.3)" }}>
          <span style={{ color: "#fff", fontSize: 14, fontWeight: 700, letterSpacing: "0.05em" }}>🔥 LIMITED TIME — {SALE_PCT}% OFF ALL ORIGINS · Use code <span style={{ background: "rgba(255,255,255,0.2)", borderRadius: 6, padding: "1px 8px" }}>NAMA15</span></span>
        </div>

        <p style={{ color: "#8C7B6B", fontSize: 14, textAlign: "center", maxWidth: 520, margin: "0 auto 40px", lineHeight: 1.7 }}>
          Click any origin to view the full bag, then customize your roast and spice blend. Roasted fresh before every shipment.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 18 }}>
          {COFFEES.map((c) => {
            const tc = TAG_COLORS[c.tag] || { bg: "#3D1F0D", color: "#F5EDE3" };
            const origPrice = c.prices.oz12;
            const discPrice = salePrice(origPrice);
            return (
              <div key={c.id}
                style={{ background: "#F5EDE3", border: "1.5px solid #E0D0BC", borderRadius: 16, overflow: "hidden", display: "flex", flexDirection: "column", transition: "all 0.3s", cursor: "pointer" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#C9A84C"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(61,31,13,0.12)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#E0D0BC"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div onClick={() => setLightboxCoffee(c)} style={{ height: 260, position: "relative", overflow: "hidden", background: "#D4C4AE" }}>
                  <img src={c.img} alt={c.origin} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} onError={(e) => (e.target.style.display = "none")} />
                  <div style={{ position: "absolute", inset: 0, background: "rgba(42,18,8,0)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(42,18,8,0.3)"; e.currentTarget.querySelector("span").style.opacity = "1"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(42,18,8,0)"; e.currentTarget.querySelector("span").style.opacity = "0"; }}>
                    <span style={{ color: "#F5EDE3", fontSize: 12, fontWeight: 700, opacity: 0, transition: "opacity 0.2s", background: "rgba(42,18,8,0.7)", padding: "6px 14px", borderRadius: 20 }}>🔍 View Full Image</span>
                  </div>
                  <div style={{ position: "absolute", top: 10, left: 10, background: "rgba(251,245,238,0.95)", borderRadius: 10, padding: "4px 8px", display: "flex", alignItems: "center", gap: 6 }}>
                    <FlagImg code={c.flagCode} size={20} />
                    <span style={{ fontSize: 12, fontWeight: 700, color: "#3D1F0D" }}>{c.origin}</span>
                  </div>
                  <div style={{ position: "absolute", top: 10, right: 10, display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-end" }}>
                    <span style={{ background: tc.bg, color: tc.color, fontSize: 9, fontWeight: 700, letterSpacing: "0.08em", padding: "3px 8px", borderRadius: 20, textTransform: "uppercase" }}>{c.tag}</span>
                    <span style={{ background: "#9B3B3B", color: "#fff", fontSize: 9, fontWeight: 700, padding: "3px 8px", borderRadius: 20 }}>SAVE {SALE_PCT}%</span>
                  </div>
                </div>
                <div style={{ padding: "12px 14px 16px", flex: 1, display: "flex", flexDirection: "column", gap: 5 }}>
                  <div style={{ fontSize: 10, color: "#8C7B6B", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700 }}>{c.region}</div>
                  <div style={{ fontSize: 14, color: "#3D1F0D", fontWeight: 700, fontFamily: "Georgia, serif" }}>{c.origin} Coffee</div>
                  <div style={{ fontSize: 11, color: "#6B3A1F", fontStyle: "italic", lineHeight: 1.5 }}>"{c.notes}"</div>
                  <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginTop: 8 }}>
                    <div>
                      <div style={{ fontSize: 11, color: "#9B3B3B", textDecoration: "line-through", fontWeight: 600 }}>${origPrice.toFixed(2)}</div>
                      <div style={{ fontSize: 16, fontWeight: 700, color: "#3D1F0D" }}>${discPrice} <span style={{ fontSize: 10, color: "#8C7B6B", fontWeight: 400 }}>/ 12oz</span></div>
                    </div>
                    <button onClick={() => setModalCoffee(c)} style={{ background: "#C9A84C", color: "#2A1208", border: "none", borderRadius: 20, padding: "7px 12px", fontSize: 10, fontWeight: 700, cursor: "pointer", fontFamily: "Georgia, serif", whiteSpace: "nowrap" }}>
                      Customize →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {lightboxCoffee && <ImageLightbox coffee={lightboxCoffee} onClose={() => setLightboxCoffee(null)} onCustomize={() => openCustomize(lightboxCoffee)} />}
      {modalCoffee && <CoffeeModal coffee={modalCoffee} onClose={() => setModalCoffee(null)} onAdd={addToCart} />}
    </div>
  );
}
