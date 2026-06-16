import { useNavigate } from "react-router-dom";

export default function OurStory() {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#3D1F0D" }}>

      {/* Hero with video background */}
      <section style={{ position: "relative", height: "100vh", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <video autoPlay muted loop playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}>
          <source src="/date farm.mp4" type="video/mp4" />
        </video>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(42,18,8,0.5) 0%, rgba(42,18,8,0.7) 60%, rgba(42,18,8,0.96) 100%)", zIndex: 1 }} />
        <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 24px", maxWidth: 780, margin: "0 auto" }}>
          <div style={{ color: "#C9A84C", fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 700, marginBottom: 20 }}>Aseer Region · Saudi Arabia</div>
          <h1 style={{ fontSize: 54, color: "#F5EDE3", lineHeight: 1.1, fontWeight: 700, marginBottom: 24, textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}>
            We Didn't Come From Much.<br />
            <span style={{ color: "#C9A84C" }}>But We Came From Enough.</span>
          </h1>
          <p style={{ fontSize: 18, color: "rgba(245,237,227,0.85)", lineHeight: 1.9, maxWidth: 620, margin: "0 auto 36px" }}>
            Enough faith. Enough conviction. Enough love for the land that raised us — and enough honesty to never compromise on what we put in your cup.
          </p>
          <div style={{ width: 1, height: 60, background: "linear-gradient(to bottom, #C9A84C, transparent)", margin: "0 auto" }} />
        </div>
      </section>

      {/* Section 1 — The Mountains */}
      <section style={{ background: "#2A1208", padding: "80px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 60, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ color: "#C9A84C", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, marginBottom: 16 }}>Where We Come From</div>
              <h2 style={{ fontSize: 36, color: "#F5EDE3", lineHeight: 1.2, marginBottom: 24, fontWeight: 700 }}>The Mountains of Aseer</h2>
              <p style={{ fontSize: 15, color: "#C4A882", lineHeight: 2, marginBottom: 20 }}>
                We grew up in the mountains of Aseer — a region in southwestern Saudi Arabia that most of the world has never heard of, but those who know it never forget. It sits at an elevation where the air is cool and crisp, where terraced farms cling to steep hillsides, and where the morning mist rolls in before the call to Fajr prayer.
              </p>
              <p style={{ fontSize: 15, color: "#C4A882", lineHeight: 2, marginBottom: 20 }}>
                This is the land of the Khawlani coffee tree — one of the oldest and rarest coffee varieties in the world, grown at altitude in volcanic soil, harvested by hand, and prepared the way it has been for centuries. It is not a commodity here. It is a ritual. It is hospitality. It is love.
              </p>
              <p style={{ fontSize: 15, color: "#C4A882", lineHeight: 2 }}>
                Growing up, we didn't have much in the material sense. But our home was always open. There was always a pot of coffee on the fire, always dates on the table, always room for one more guest — whether they were a neighbor, a stranger, or someone who simply looked like they needed to sit down and be welcomed.
              </p>
            </div>
            <div style={{ width: 280, flexShrink: 0 }}>
              <div style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: 16, padding: 28 }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>🏔️</div>
                <div style={{ color: "#C9A84C", fontSize: 13, fontWeight: 700, marginBottom: 8 }}>Aseer Region</div>
                <div style={{ color: "#9B7B5B", fontSize: 13, lineHeight: 1.8 }}>Located in southwestern Saudi Arabia, Aseer sits between 1,500–3,000 meters above sea level. Known for its cool climate, ancient terraced farms and the world-renowned Khawlani coffee.</div>
                <div style={{ borderTop: "1px solid rgba(201,168,76,0.2)", marginTop: 20, paddingTop: 20 }}>
                  <div style={{ color: "#C9A84C", fontSize: 13, fontWeight: 700, marginBottom: 8 }}>Known For</div>
                  {["Khawlani Coffee — world's rarest", "Premium mountain-grown dates", "Raw wildflower honey", "Ancient terraced farming", "Rich tribal hospitality"].map((item, i) => (
                    <div key={i} style={{ fontSize: 12, color: "#9B7B5B", marginBottom: 6, display: "flex", gap: 8 }}>
                      <span style={{ color: "#C9A84C" }}>✦</span> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Honest quote */}
      <section style={{ background: "linear-gradient(135deg, #3D1F0D, #5C2E10)", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ fontSize: 48, marginBottom: 20, opacity: 0.4 }}>"</div>
          <blockquote style={{ fontSize: 22, color: "#F5EDE3", lineHeight: 1.8, fontStyle: "italic", margin: "0 0 24px" }}>
            We didn't grow up wealthy. But we grew up knowing that when someone comes to your door, you give them the best you have — not what's left over. That principle is in every bag we ship.
          </blockquote>
          <div style={{ color: "#C9A84C", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em" }}>— The NAMA Family · Aseer, Saudi Arabia</div>
        </div>
      </section>

      {/* Section 3 — The Products */}
      <section style={{ background: "#FBF5EE", padding: "80px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ color: "#C9A84C", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, marginBottom: 12 }}>What the Land Gave Us</div>
            <h2 style={{ fontSize: 36, color: "#3D1F0D", marginBottom: 16 }}>Three Gifts from Aseer</h2>
            <p style={{ color: "#8C7B6B", fontSize: 15, lineHeight: 1.8, maxWidth: 560, margin: "0 auto" }}>
              These are not products we discovered in a catalog. They are things we grew up eating, drinking and sharing — now carefully brought to your table.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 32 }}>
            {[
              { icon: "☕", title: "Khawlani Coffee", color: "#5C2E10", desc: "The Khawlani coffee tree grows only in the terraced mountains of Aseer and parts of Yemen. It is one of the oldest documented coffee varieties in history — predating the spread of coffee to the rest of the world. The beans are small, the yield is low, and the flavor is unlike anything else: wine-like, complex, with notes of dried fruit and a long, warm finish. We source directly from the farmers our family has known for generations." },
              { icon: "🌴", title: "Mountain Dates", color: "#3D1F0D", desc: "The date palms of Aseer grow at higher altitude than most, which means slower ripening, more concentrated sugars and a depth of flavor that lowland dates simply cannot match. We grew up climbing these trees as children. We know which farms produce the best fruit, which families tend their palms with the most care, and what truly fresh dates taste like — nothing like the dry, sugar-coated varieties you find in most stores." },
              { icon: "🍯", title: "Wild Honey", color: "#8B4A1E", desc: "Aseer is home to some of the most biodiverse wildflower landscapes in the Arabian Peninsula. The honey produced here — called Sidr honey — is among the most prized in the world, used for generations as food and medicine. We are proud to carry this tradition forward, sourcing raw, unfiltered honey from beekeepers who work the same mountain slopes our grandparents walked." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#F5EDE3", border: "1.5px solid #E0D0BC", borderRadius: 16, padding: 28 }}>
                <div style={{ fontSize: 36, marginBottom: 14 }}>{item.icon}</div>
                <h3 style={{ fontSize: 18, color: item.color, fontWeight: 700, marginBottom: 12 }}>{item.title}</h3>
                <p style={{ fontSize: 13, color: "#6B3A1F", lineHeight: 1.9 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Our Values */}
      <section style={{ background: "#3D1F0D", padding: "80px 24px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ color: "#C9A84C", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, marginBottom: 12 }}>What We Were Taught</div>
            <h2 style={{ fontSize: 36, color: "#F5EDE3", marginBottom: 16 }}>The Three Things We Never Compromise</h2>
            <p style={{ color: "#9B7B5B", fontSize: 15, lineHeight: 1.8, maxWidth: 540, margin: "0 auto" }}>
              Quality is not a department — it is a decision made at every single step, from the farm to your door.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 32 }}>
            {[
              { icon: "🤍", title: "Honesty", desc: "We will never tell you a product is something it is not. We will never exaggerate an origin, inflate a quality claim, or hide what is in what we sell. If we don't know, we say so. If something doesn't meet our standard, it doesn't ship. This is not a marketing promise — it is how we were raised." },
              { icon: "🙏", title: "Conviction", desc: "We believe deeply in what we do. Not because it is trendy to sell Middle Eastern goods in America, but because these products carry real stories, real people and real places behind them. We started NAMA not because we saw a market opportunity — we started it because we couldn't find anyone doing this with the integrity it deserved." },
              { icon: "🌿", title: "Farmer First", desc: "The farmers who grow our coffee, harvest our dates and tend our spice gardens are not suppliers — they are partners. Many of them are families we have known for generations. We pay fair prices, we visit when we can, and we make sure that every purchase you make reaches the hands that deserve it most. No middlemen. No exploitation. Just honest trade." },
            ].map((item) => (
              <div key={item.title} style={{ textAlign: "center", padding: "0 8px" }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>{item.icon}</div>
                <h3 style={{ fontSize: 20, color: "#C9A84C", fontWeight: 700, marginBottom: 14 }}>{item.title}</h3>
                <p style={{ fontSize: 13, color: "#9B7B5B", lineHeight: 1.9 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 — Why America */}
      <section style={{ background: "#F5EDE3", padding: "80px 24px" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ color: "#C9A84C", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, marginBottom: 16 }}>Why Fairfax County</div>
          <h2 style={{ fontSize: 34, color: "#3D1F0D", lineHeight: 1.2, marginBottom: 28, fontWeight: 700 }}>From the Mountains of Aseer to Northern Virginia</h2>
          <p style={{ fontSize: 15, color: "#6B3A1F", lineHeight: 2, marginBottom: 20 }}>
            When we came to America, we brought nothing but what we knew — faith, hard work, and the knowledge of what real quality tastes like. We settled in Northern Virginia, in the diverse and vibrant community of Fairfax County, and we quickly realized something: the flavors we grew up with were almost impossible to find here with any real authenticity.
          </p>
          <p style={{ fontSize: 15, color: "#6B3A1F", lineHeight: 2, marginBottom: 20 }}>
            The dates in supermarkets were dry and tasteless. The coffee labeled "Arabic" was a blend with no origin story. The saffron was diluted. The cardamom was old. And nobody seemed to care — because most people simply didn't know what they were missing.
          </p>
          <p style={{ fontSize: 15, color: "#6B3A1F", lineHeight: 2, marginBottom: 20 }}>
            So we decided to fix that. Not by opening a store, not by importing containers — but by building something personal. Something that felt like handing a neighbor a cup of coffee from our own kitchen. NAMA Coffee & Co. started as that idea — and it still is that idea, just shared with more neighbors now.
          </p>
          <p style={{ fontSize: 15, color: "#6B3A1F", lineHeight: 2 }}>
            We ship from Stafford, Virginia. We serve Fairfax County and the entire DC metro area. We know many of our customers by name. And every order still goes out with the same care we would give if you were sitting at our table.
          </p>
        </div>
      </section>

      {/* Section 6 — A personal note */}
      <section style={{ background: "linear-gradient(135deg, #2A1208, #3D1F0D)", padding: "80px 24px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <div style={{ color: "#C9A84C", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, marginBottom: 20 }}>A Personal Note</div>
          <p style={{ fontSize: 16, color: "#C4A882", lineHeight: 2, marginBottom: 28, fontStyle: "italic" }}>
            "My grandfather used to say that a man's worth is measured not by what he owns, but by how he treats the guest at his door. I think about that every time we pack an order. You are our guest. And we want you to feel that."
          </p>
          <div style={{ color: "#C9A84C", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", marginBottom: 48 }}>— NAMA Coffee & Co. · Rooted in Tradition. Crafted for Today.</div>

          {/* Values row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginBottom: 52 }}>
            {[["🌱", "Sustainable"], ["✨", "Authentic"], ["🤝", "Community"], ["💛", "Generous"]].map(([ic, val]) => (
              <div key={val}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{ic}</div>
                <div style={{ color: "#C9A84C", fontSize: 13, fontWeight: 700 }}>{val}</div>
              </div>
            ))}
          </div>

          <button
            onClick={() => navigate("/coffee")}
            style={{ background: "#C9A84C", color: "#2A1208", border: "none", borderRadius: 32, padding: "16px 44px", fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "Georgia, serif", boxShadow: "0 4px 20px rgba(201,168,76,0.3)" }}
          >
            Experience NAMA Coffee →
          </button>
        </div>
      </section>

    </div>
  );
}
