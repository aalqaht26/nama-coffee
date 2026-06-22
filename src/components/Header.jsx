import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV = [
  { label: "Coffee", path: "/coffee", icon: "☕" },
  { label: "Tea", path: "/tea", icon: "🍵" },
  { label: "Spices", path: "/spices", icon: "🌿" },
  { label: "Dates", path: "/dates", icon: "🌴" },
  { label: "Gift Sets", path: "/gift-sets", icon: "🎁" },
  { label: "Our Story", path: "/our-story", icon: "🏔️" },
  { label: "Contact", path: "/contact", icon: "📧" },
  { label: "FAQ", path: "/faq", icon: "❓" },
];

export default function Header({ cartCount, onCartOpen }) {
  const [announce, setAnnounce] = useState(true);
  const [hovered, setHovered] = useState(null);
  const location = useLocation();

  return (
    <>
      {announce && (
        <div style={{ background: "#3D1F0D", color: "#F5EDE3", textAlign: "center", padding: "10px 40px", fontSize: 12, letterSpacing: "0.05em", position: "relative", width: "100%", boxSizing: "border-box" }}>
          🌟 Free shipping on orders over $50 · Serving Fairfax County · Shipped from Stafford, VA
          <button onClick={() => setAnnounce(false)} style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "#F5EDE3", fontSize: 18, cursor: "pointer" }}>✕</button>
        </div>
      )}

      <header style={{ background: "#FBF5EE", borderBottom: "2px solid #E0D0BC", position: "sticky", top: 0, zIndex: 200, boxShadow: "0 2px 14px rgba(61,31,13,.09)", width: "100%", boxSizing: "border-box", overflowX: "hidden" }}>
        {/* Top bar */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #EDE0CF", boxSizing: "border-box" }}>
          <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            <div style={{ width: 46, height: 46, borderRadius: "50%", border: "2px solid #C9A84C", overflow: "hidden", flexShrink: 0 }}>
              <img src="/nama-logo.png" alt="NAMA Coffee & Co" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 700, color: "#3D1F0D", letterSpacing: "0.05em", lineHeight: 1.1 }}>NAMA</div>
              <div style={{ fontSize: 8, color: "#C9A84C", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700 }}>Coffee & Co.</div>
            </div>
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
            <button style={{ background: "none", border: "none", fontSize: 17, color: "#3D1F0D", cursor: "pointer", padding: "4px" }}>🔍</button>
            <button style={{ background: "none", border: "none", fontSize: 17, color: "#3D1F0D", cursor: "pointer", padding: "4px" }}>♡</button>
            <button style={{ background: "none", border: "none", fontSize: 17, color: "#3D1F0D", cursor: "pointer", padding: "4px" }}>👤</button>
            <button onClick={onCartOpen} style={{ background: "#3D1F0D", color: "#F5EDE3", border: "none", borderRadius: 24, padding: "8px 14px", fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", gap: 5, cursor: "pointer", fontFamily: "Georgia, serif", flexShrink: 0 }}>
              🛒 Cart {cartCount > 0 && <span style={{ background: "#C9A84C", color: "#2A1208", borderRadius: "50%", width: 18, height: 18, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700 }}>{cartCount}</span>}
            </button>
          </div>
        </div>

        {/* Navigation - simple links, scrollable */}
        <nav style={{ width: "100%", boxSizing: "border-box", display: "flex", overflowX: "auto", WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none", padding: "0 8px" }}>
          {NAV.map((item) => {
            const isActive = location.pathname === item.path;
            const isHov = hovered === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onMouseEnter={() => setHovered(item.path)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  padding: "12px 14px",
                  fontSize: 13,
                  fontWeight: 700,
                  color: isActive ? "#F5EDE3" : isHov ? "#C9A84C" : "#3D1F0D",
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  fontFamily: "Georgia, serif",
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  flexShrink: 0,
                  borderRadius: "8px 8px 0 0",
                  background: isActive ? "#3D1F0D" : isHov ? "rgba(61,31,13,0.06)" : "transparent",
                  borderBottom: isActive ? "3px solid #C9A84C" : "3px solid transparent",
                  transition: "all 0.2s",
                  whiteSpace: "nowrap",
                }}
              >
                <span style={{ fontSize: 14 }}>{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </header>
    </>
  );
}
