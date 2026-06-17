import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ background: "#2A1208", padding: "44px 20px 20px" }}>
      <div style={{ maxWidth: 1140, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 28, marginBottom: 32 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", border: "1.5px solid #C9A84C", overflow: "hidden", flexShrink: 0 }}>
                <img src="/nama-logo.png" alt="NAMA Coffee & Co" style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => e.target.style.display = "none"} />
              </div>
              <div>
                <div style={{ fontSize: 17, color: "#F5EDE3", fontWeight: 700 }}>NAMA</div>
                <div style={{ fontSize: 8, color: "#C9A84C", letterSpacing: "0.15em", textTransform: "uppercase" }}>Coffee & Co.</div>
              </div>
            </div>
            <p style={{ fontSize: 12, color: "#7A5C42", lineHeight: 1.8, maxWidth: 210 }}>
              Rooted in Tradition. Crafted for Today. Shipped from Stafford, VA to your door.
            </p>
          </div>

          <div>
            <div style={{ color: "#F5EDE3", fontSize: 14, marginBottom: 14, fontWeight: 700 }}>Shop</div>
            {[["Coffee Origins", "/coffee"], ["Tea", "/tea"], ["Spices", "/spices"], ["Dates", "/dates"], ["Gift Sets", "/gift-sets"]].map(([l, p]) => (
              <Link key={l} to={p} style={{ display: "block", color: "#7A5C42", fontSize: 12, textDecoration: "none", marginBottom: 8 }}
                onMouseEnter={(e) => e.target.style.color = "#C9A84C"}
                onMouseLeave={(e) => e.target.style.color = "#7A5C42"}
              >{l}</Link>
            ))}
          </div>

          <div>
            <div style={{ color: "#F5EDE3", fontSize: 14, marginBottom: 14, fontWeight: 700 }}>Support</div>
            {[["FAQ", "/faq"], ["Shipping Info", "/shipping"], ["Returns", "/returns"], ["Contact Us", "/contact"], ["Track Order", "/track-order"]].map(([l, p]) => (
              <Link key={l} to={p} style={{ display: "block", color: "#7A5C42", fontSize: 12, textDecoration: "none", marginBottom: 8 }}
                onMouseEnter={(e) => e.target.style.color = "#C9A84C"}
                onMouseLeave={(e) => e.target.style.color = "#7A5C42"}
              >{l}</Link>
            ))}
          </div>

          <div>
            <div style={{ color: "#F5EDE3", fontSize: 14, marginBottom: 14, fontWeight: 700 }}>Company</div>
            {[["Our Story", "/our-story"], ["Sustainability", "/our-story"], ["Wholesale", "/contact"], ["Blog", "/"], ["Careers", "/contact"]].map(([l, p]) => (
              <Link key={l} to={p} style={{ display: "block", color: "#7A5C42", fontSize: 12, textDecoration: "none", marginBottom: 8 }}
                onMouseEnter={(e) => e.target.style.color = "#C9A84C"}
                onMouseLeave={(e) => e.target.style.color = "#7A5C42"}
              >{l}</Link>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid #3A2010", paddingTop: 18, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          <span style={{ fontSize: 11, color: "#5A3C22" }}>© 2026 NAMA Coffee & Co. · Stafford, VA · Serving Fairfax County</span>
          <span style={{ fontSize: 11, color: "#5A3C22", fontStyle: "italic" }}>Rooted in Tradition. Crafted for Today.</span>
        </div>
      </div>
    </footer>
  );
}
