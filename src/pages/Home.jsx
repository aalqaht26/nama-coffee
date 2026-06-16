import { useNavigate } from "react-router-dom";

export default function Home({ addToCart }) {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero with Video Background */}
      <section style={{ position: "relative", height: "100vh", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(42,18,8,0.55) 0%, rgba(42,18,8,0.7) 60%, rgba(42,18,8,0.92) 100%)", zIndex: 1 }} />

        {/* Hero Content */}
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 20px", maxWidth: 800, margin: "0 auto" }}>
          <div style={{ color: "#C9A84C", fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 700, marginBottom: 20 }}>
            Fairfax County's Premier Specialty Shop
          </div>
          <h1 style={{ fontSize: 62, color: "#F5EDE3", lineHeight: 1.1, fontWeight: 700, marginBottom: 20, textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>
            Rooted in Tradition.<br />
            <span style={{ color: "#C9A84C" }}>Crafted for Today.</span>
          </h1>
          <p style={{ fontSize: 17, color: "rgba(245,237,227,0.85)", lineHeight: 1.8, marginBottom: 36, maxWidth: 560, margin: "0 auto 36px" }}>
            Choose your origin, pick your roast, add your spices. Your perfect cup, built by you — shipped fresh from Stafford, VA.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => navigate("/coffee")}
              style={{ background: "#C9A84C", color: "#2A1208", border: "none", borderRadius: 32, padding: "16px 40px", fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "Georgia, serif", boxShadow: "0 4px 20px rgba(201,168,76,0.4)" }}
            >
              Shop Coffee Origins →
            </button>
            <button
              onClick={() => navigate("/our-story")}
              style={{ background: "none", color: "#F5EDE3", border: "1.5px solid rgba(245,237,227,0.5)", borderRadius: 32, padding: "16px 36px", fontSize: 15, fontWeight: 600, cursor: "pointer", backdropFilter: "blur(4px)" }}
            >
              Our Story
            </button>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: 48, justifyContent: "center", marginTop: 56 }}>
            {[["9", "Origins"], ["4", "Roast Levels"], ["⭐ 4.9", "Rating"], ["50+", "Products"]].map(([v, l]) => (
              <div key={l} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 24, fontWeight: 700, color: "#C9A84C", textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}>{v}</div>
                <div style={{ fontSize: 11, color: "rgba(245,237,227,0.7)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <span style={{ color: "rgba(245,237,227,0.6)", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, rgba(201,168,76,0.8), transparent)", animation: "scrollPulse 1.5s ease-in-out infinite" }} />
        </div>
      </section>

      {/* Category Strip */}
      <div style={{ background: "#3D1F0D", display: "flex", overflowX: "auto" }}>
        {[["☕", "Coffee", "9 origins", "/coffee"], ["🍵", "Tea", "6 blends", "/tea"], ["🌿", "Spices", "4 varieties", "/spices"], ["🌴", "Dates", "4 types", "/dates"], ["🎁", "Gift Sets", "8 sets", "/gift-sets"]].map(([ic, nm, ct, path]) => (
          <button key={nm} onClick={() => navigate(path)} style={{ flex: 1, minWidth: 110, padding: "16px 12px", background: "none", border: "none", borderRight: "1px solid rgba(245,237,227,0.1)", textAlign: "center", cursor: "pointer" }}
            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(201,168,76,0.15)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "none"}
          >
            <div style={{ fontSize: 20, marginBottom: 4 }}>{ic}</div>
            <div style={{ color: "#F5EDE3", fontSize: 11, fontWeight: 700 }}>{nm}</div>
            <div style={{ color: "#9B7B5B", fontSize: 10, marginTop: 1 }}>{ct}</div>
          </button>
        ))}
      </div>

      {/* Promo Bar */}
      <div style={{ background: "linear-gradient(90deg,#C9A84C,#E8C97A,#C9A84C)", padding: "12px 20px", textAlign: "center", fontSize: 13, fontWeight: 700, color: "#2A1208" }}>
        🌙 New: Ramadan Gift Sets now available · Free shipping over $50
      </div>

      {/* Why Us */}
      <div style={{ background: "#3D1F0D", padding: "72px 20px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <div style={{ color: "#C9A84C", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, textAlign: "center", marginBottom: 8 }}>Why NAMA Coffee & Co?</div>
          <h2 style={{ fontSize: 34, color: "#F5EDE3", textAlign: "center", marginBottom: 48 }}>We Obsess Over Quality</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 40 }}>
            {[
              ["🌍", "Origin-First Coffee", "We source each bean directly from the country that grew it — no blends unless you choose them"],
              ["🔥", "Roasted to Order", "Tell us your roast level and we roast fresh before shipping — never sitting on a shelf"],
              ["🌿", "Spiced Your Way", "Add cardamom, saffron, cinnamon or cloves — blended in fresh at no extra wait"],
              ["📦", "Ships from VA", "Based in Stafford, VA — quick delivery throughout Fairfax County & the DC metro area"],
            ].map(([ic, t, d]) => (
              <div key={t} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 38, marginBottom: 14 }}>{ic}</div>
                <div style={{ color: "#C9A84C", fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{t}</div>
                <div style={{ color: "#9B7B5B", fontSize: 13, lineHeight: 1.8 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Origins */}
      <div style={{ background: "#FBF5EE", padding: "72px 20px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <div style={{ color: "#C9A84C", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, textAlign: "center", marginBottom: 8 }}>Featured This Week</div>
          <h2 style={{ fontSize: 34, color: "#3D1F0D", textAlign: "center", marginBottom: 12 }}>Customer Favorites</h2>
          <p style={{ color: "#8C7B6B", fontSize: 14, textAlign: "center", marginBottom: 40, lineHeight: 1.7 }}>Our most loved origins — handpicked by our customers week after week.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 24 }}>
            {[
              { flag: "ye", origin: "Yemen", region: "Haraaz Mountains", notes: "Dark fruit, tamarind, wine-like", img: "/Yemen.png", price: "$8.99", tag: "Bestseller", tagBg: "#3D1F0D" },
              { flag: "et", origin: "Ethiopia", region: "Yirgacheffe", notes: "Jasmine, bergamot, blueberry", img: "/Ethiopia.png", price: "$8.49", tag: "Premium", tagBg: "#C9A84C" },
              { flag: "sa", origin: "Saudi Arabia", region: "Khawlani, Jizan", notes: "Cardamom, rose, golden brew", img: "/Saudi Arabia.png", price: "$9.99", tag: "Rare", tagBg: "#7B2D2D" },
            ].map((c) => (
              <div key={c.origin} style={{ background: "#F5EDE3", border: "1.5px solid #E0D0BC", borderRadius: 16, overflow: "hidden", cursor: "pointer", transition: "all 0.3s" }}
                onClick={() => navigate("/coffee")}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#C9A84C"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(61,31,13,0.12)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#E0D0BC"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <div style={{ height: 200, position: "relative", overflow: "hidden", background: "#D4C4AE" }}>
                  <img src={c.img} alt={c.origin} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} onError={(e) => e.target.style.display = "none"} />
                  <div style={{ position: "absolute", top: 10, left: 10, background: "rgba(251,245,238,0.95)", borderRadius: 10, padding: "4px 10px", display: "flex", alignItems: "center", gap: 6 }}>
                    <img src={`https://flagcdn.com/w40/${c.flag}.png`} alt={c.flag} width={20} height={13} style={{ borderRadius: 2 }} />
                    <span style={{ fontSize: 12, fontWeight: 700, color: "#3D1F0D" }}>{c.origin}</span>
                  </div>
                  <div style={{ position: "absolute", top: 10, right: 10, background: c.tagBg, color: c.tagBg === "#C9A84C" ? "#2A1208" : "#F5EDE3", fontSize: 9, fontWeight: 700, padding: "3px 8px", borderRadius: 20, textTransform: "uppercase", letterSpacing: "0.08em" }}>{c.tag}</div>
                </div>
                <div style={{ padding: "14px 16px 18px" }}>
                  <div style={{ fontSize: 10, color: "#8C7B6B", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, marginBottom: 4 }}>{c.region}</div>
                  <div style={{ fontSize: 15, color: "#3D1F0D", fontWeight: 700, fontFamily: "Georgia, serif", marginBottom: 4 }}>{c.origin} Coffee</div>
                  <div style={{ fontSize: 12, color: "#6B3A1F", fontStyle: "italic", marginBottom: 12 }}>"{c.notes}"</div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 16, fontWeight: 700, color: "#3D1F0D" }}>From {c.price} <span style={{ fontSize: 10, color: "#8C7B6B", fontWeight: 400 }}>/ 2oz</span></span>
                    <button onClick={(e) => { e.stopPropagation(); navigate("/coffee"); }} style={{ background: "#C9A84C", color: "#2A1208", border: "none", borderRadius: 20, padding: "8px 16px", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>Customize →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <button onClick={() => navigate("/coffee")} style={{ background: "#3D1F0D", color: "#F5EDE3", border: "none", borderRadius: 32, padding: "14px 36px", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "Georgia, serif" }}>
              View All 9 Origins →
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div style={{ background: "#F5EDE3", padding: "72px 20px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <div style={{ color: "#C9A84C", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, textAlign: "center", marginBottom: 8 }}>Customer Love</div>
          <h2 style={{ fontSize: 34, color: "#3D1F0D", textAlign: "center", marginBottom: 40 }}>What Our Neighbors Are Saying</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 20 }}>
            {[
              ["Layla H.", "Fairfax, VA", "The Yemen Mocha with cardamom brought me right back to my grandmother's kitchen in Beirut. Absolutely authentic."],
              ["Marcus T.", "Reston, VA", "I ordered the Kenya AA and the Medjool dates as a gift. Gorgeous packaging and exceptional quality."],
              ["Sara K.", "McLean, VA", "The Ethiopia Yirgacheffe light roast is my new morning ritual. I love being able to pick the roast level myself!"],
            ].map(([n, l, t]) => (
              <div key={n} style={{ background: "#FBF5EE", border: "1.5px solid #E0D0BC", borderRadius: 16, padding: 28 }}>
                <div style={{ color: "#C9A84C", fontSize: 16, marginBottom: 12 }}>★★★★★</div>
                <p style={{ fontSize: 14, color: "#6B3A1F", lineHeight: 1.8, fontStyle: "italic", marginBottom: 18 }}>"{t}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#3D1F0D", color: "#C9A84C", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 15 }}>{n[0]}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#3D1F0D" }}>{n}</div>
                    <div style={{ fontSize: 12, color: "#8C7B6B" }}>{l}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div style={{ background: "linear-gradient(135deg,#3D1F0D,#5C2E10)", padding: "72px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <div style={{ color: "#C9A84C", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, marginBottom: 8 }}>Stay Connected</div>
          <h2 style={{ fontSize: 30, color: "#F5EDE3", margin: "8px 0 12px" }}>Join the NAMA Community</h2>
          <p style={{ color: "#9B7B5B", fontSize: 14, lineHeight: 1.7, marginBottom: 28 }}>Get early access to new origins, seasonal specials, and brewing tips from our team.</p>
          <div style={{ display: "flex", gap: 10, maxWidth: 420, margin: "0 auto" }}>
            <input type="email" placeholder="your@email.com" style={{ flex: 1, padding: "14px 18px", borderRadius: 28, border: "1.5px solid rgba(201,168,76,0.35)", background: "rgba(245,237,227,0.07)", color: "#F5EDE3", fontSize: 13, outline: "none" }} />
            <button style={{ background: "#C9A84C", color: "#2A1208", border: "none", borderRadius: 28, padding: "14px 24px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Subscribe</button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 1; transform: scaleY(1); }
          50% { opacity: 0.4; transform: scaleY(0.6); }
        }
      `}</style>
    </div>
  );
}
