import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV = [
  { label: "Coffee", path: "/coffee", icon: "☕" },
  { label: "Tea", path: "/tea", icon: "🍵" },
  { label: "Spices", path: "/spices", icon: "🌿" },
  { label: "Dates", path: "/dates", icon: "🌴" },
  { label: "Gift Sets", path: "/gift-sets", icon: "🎁" },
  { label: "Our Story", path: "/our-story", icon: "📖" },
];

export default function Header({ cartCount, onCartOpen }) {
  const [announce, setAnnounce] = useState(true);
  const [hovered, setHovered] = useState(null);
  const location = useLocation();

  return (
    <>
      {announce && (
        <div style={{ background: "#3D1F0D", color: "#F5EDE3", textAlign: "center", padding: "10px 40px", fontSize: 12, letterSpacing: "0.05em", position: "relative" }}>
          🌟 Free shipping on orders over $50 · Serving Fairfax County · Shipped from Stafford, VA
          <button onClick={() => setAnnounce(false)} style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "#F5EDE3", fontSize: 18, cursor: "pointer" }}>✕</button>
        </div>
      )}

      <header style={{ background: "#FBF5EE", borderBottom: "2px solid #E0D0BC", position: "sticky", top: 0, zIndex: 200, boxShadow: "0 2px 14px rgba(61,31,13,.09)" }}>
        {/* Top bar */}
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #EDE0CF" }}>
          <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 54, height: 54, borderRadius: "50%", border: "2px solid #C9A84C", overflow: "hidden", flexShrink: 0 }}>
              <img src="/nama-logo.png" alt="NAMA Coffee & Co" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div>
              <div style={{ fontSize: 22, fontWeight: 700, color: "#3D1F0D", letterSpacing: "0.05em", lineHeight: 1.1 }}>NAMA</div>
              <div style={{ fontSize: 9, color: "#C9A84C", letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700 }}>Coffee & Co.</div>
            </div>
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <button style={{ background: "none", border: "none", fontSize: 19, color: "#3D1F0D", cursor: "pointer" }}>🔍</button>
            <button style={{ background: "none", border: "none", fontSize: 19, color: "#3D1F0D", cursor: "pointer" }}>♡</button>
            <button style={{ background: "none", border: "none", fontSize: 19, color: "#3D1F0D", cursor: "pointer" }}>👤</button>
            <button onClick={onCartOpen} style={{ background: "#3D1F0D", color: "#F5EDE3", border: "none", borderRadius: 24, padding: "10px 20px", fontSize: 13, fontWeight: 700, display: "flex", alignItems: "center", gap: 6, cursor: "pointer", fontFamily: "Georgia, serif" }}>
              🛒 Cart {cartCount > 0 && <span style={{ background: "#C9A84C", color: "#2A1208", borderRadius: "50%", width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700 }}>{cartCount}</span>}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", gap: 4 }}>
          {NAV.map((item) => {
            const isActive = location.pathname === item.path;
            const isHovered = hovered === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onMouseEnter={() => setHovered(item.path)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  padding: "14px 20px",
                  fontSize: 14,
                  fontWeight: 700,
                  color: isActive ? "#F5EDE3" : isHovered ? "#C9A84C" : "#3D1F0D",
                  letterSpacing: "0.05em",
                  textDecoration: "none",
                  fontFamily: "Georgia, serif",
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  borderRadius: isActive ? "8px 8px 0 0" : "8px 8px 0 0",
                  background: isActive ? "#3D1F0D" : isHovered ? "rgba(61,31,13,0.06)" : "transparent",
                  borderBottom: isActive ? "3px solid #C9A84C" : "3px solid transparent",
                  transition: "all 0.2s",
                  position: "relative",
                  whiteSpace: "nowrap",
                }}
              >
                <span style={{ fontSize: 16 }}>{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </header>
    </>
  );
}
