import { useState } from "react";

const FAQS = [
  {
    category: "Coffee & Roasting",
    items: [
      { q: "How do you roast the coffee?", a: "We roast every order fresh to your selected roast level — Light, Medium, Medium-Dark or Dark. We never roast in bulk and store bags on shelves. Your coffee is roasted within 24-48 hours of your order and shipped immediately after." },
      { q: "What does 'single origin' mean?", a: "Single origin means the coffee comes from one specific country and region — not a blend of multiple origins. This allows you to taste the unique characteristics of each growing region, from the wine-like complexity of Yemen to the bright citrus notes of Ethiopia Yirgacheffe." },
      { q: "Can I add spices to my coffee?", a: "Yes! We offer four traditional Middle Eastern spice blends — Cardamom, Saffron, Cinnamon and Cloves. Each spice is added and blended into your coffee before roasting for a fully integrated flavor. Just select your spices during the ordering process." },
      { q: "What is Khawlani coffee?", a: "Khawlani is one of the rarest coffee varieties in the world, grown only in the Aseer region of southwestern Saudi Arabia and parts of Yemen. It is one of the oldest documented coffee varieties in history, grown at high altitude in volcanic soil. The flavor is unique — floral, cardamom-forward with a light golden brew. We source it directly from farmers in our home region." },
      { q: "How long does roasted coffee stay fresh?", a: "For the best flavor, we recommend consuming your coffee within 2-4 weeks of the roast date. Store in an airtight container away from heat and light. Do not refrigerate — this introduces moisture which degrades flavor." },
      { q: "Do you offer whole bean or ground coffee?", a: "We ship whole bean by default to preserve maximum freshness. If you need ground coffee, please note your preferred grind size (espresso, drip, French press, pour over) in the order notes and we will grind it fresh for you at no extra charge." },
    ]
  },
  {
    category: "Ordering & Shipping",
    items: [
      { q: "Where do you ship from?", a: "We ship from Stafford, Virginia. We serve Fairfax County and the entire DC metro area with priority shipping, and we ship nationwide across the United States." },
      { q: "How long does shipping take?", a: "We offer two USPS shipping options: Priority Mail (2-3 business days) and Priority Mail Express (1-2 business days). Orders are processed and roasted within 24-48 hours of placement." },
      { q: "Do you offer free shipping?", a: "Yes! We offer free shipping on all orders over $50. This applies automatically at checkout — no code needed." },
      { q: "Can I track my order?", a: "Yes. Once your order ships you will receive a USPS tracking number via email. You can track your package at usps.com or directly through the tracking link in your shipping confirmation." },
      { q: "Do you ship internationally?", a: "Currently we ship within the United States only. We are working on international shipping and hope to offer it soon. Sign up for our newsletter to be notified when international shipping launches." },
    ]
  },
  {
    category: "Dates, Teas & Spices",
    items: [
      { q: "Where are your dates sourced from?", a: "All of our dates are sourced from Saudi Arabia — specifically from the Al-Qassim and Al-Madinah regions, which are considered the finest date-growing regions in the world. Our Ajwa dates come exclusively from Al-Madinah Al-Munawwarah." },
      { q: "Are your dates fresh?", a: "Yes. We work directly with growers to ensure our dates are harvested at peak ripeness and packed fresh. We do not carry dates that have been sitting in warehouses. Each 2 lb box is packed to order." },
      { q: "Are your teas loose leaf or bagged?", a: "All of our teas are whole leaf — not crushed or bagged. We pack them in 12 oz resealable bags. Whole leaf tea produces a significantly better flavor and aroma than broken leaf tea bags." },
      { q: "Are your spices organic?", a: "We source organic spices wherever possible. Our cardamom is certified organic from Guatemala. Our saffron is Grade 1 Iranian — the highest classification available. All spices are whole, unprocessed and free from additives or fillers." },
    ]
  },
  {
    category: "About NAMA",
    items: [
      { q: "What does NAMA mean?", a: "NAMA is a name rooted in our family heritage from the Aseer region of Saudi Arabia. It represents our commitment to bringing authentic, high-quality Middle Eastern specialty goods to our community in Northern Virginia — with honesty, care and the warmth of our culture." },
      { q: "Are you a family business?", a: "Yes, completely. NAMA Coffee & Co. was founded by a family from the Aseer mountains of Saudi Arabia. Everything from sourcing to packing to customer service is handled personally by us. When you order from NAMA, you are supporting a family that cares deeply about what they put in your hands." },
      { q: "How do I contact you?", a: "The best way to reach us is by email at hello@shopnamacoffee.com. We respond to all inquiries within 24 hours, usually much faster. You can also use our Contact page to send us a message directly." },
    ]
  },
];

export default function FAQ() {
  const [open, setOpen] = useState({});
  const toggle = (key) => setOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div style={{ background: "#FBF5EE", minHeight: "100vh", padding: "52px 0" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 20px" }}>
        <div style={{ color: "#C9A84C", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, textAlign: "center", marginBottom: 8 }}>Got Questions?</div>
        <h1 style={{ fontSize: 36, color: "#3D1F0D", textAlign: "center", marginBottom: 12, fontFamily: "Georgia, serif" }}>Frequently Asked Questions</h1>
        <p style={{ color: "#8C7B6B", fontSize: 14, textAlign: "center", marginBottom: 48, lineHeight: 1.7 }}>
          Everything you need to know about NAMA Coffee & Co. Can't find your answer? <a href="/contact" style={{ color: "#C9A84C", fontWeight: 700 }}>Contact us</a> — we respond within 24 hours.
        </p>

        {FAQS.map((section) => (
          <div key={section.category} style={{ marginBottom: 40 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ height: 1, flex: 1, background: "#E0D0BC" }} />
              <h2 style={{ fontSize: 14, color: "#C9A84C", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", whiteSpace: "nowrap" }}>{section.category}</h2>
              <div style={{ height: 1, flex: 1, background: "#E0D0BC" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {section.items.map((item, i) => {
                const key = `${section.category}-${i}`;
                const isOpen = open[key];
                return (
                  <div key={key} style={{ background: "#F5EDE3", border: `1.5px solid ${isOpen ? "#C9A84C" : "#E0D0BC"}`, borderRadius: 12, overflow: "hidden", transition: "border-color 0.2s" }}>
                    <button
                      onClick={() => toggle(key)}
                      style={{ width: "100%", padding: "16px 20px", background: "none", border: "none", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, fontFamily: "Georgia, serif", textAlign: "left" }}
                    >
                      <span style={{ fontSize: 15, fontWeight: 700, color: "#3D1F0D", lineHeight: 1.4 }}>{item.q}</span>
                      <span style={{ fontSize: 18, color: "#C9A84C", flexShrink: 0, transform: isOpen ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
                    </button>
                    {isOpen && (
                      <div style={{ padding: "0 20px 18px", fontSize: 14, color: "#6B3A1F", lineHeight: 1.9, borderTop: "1px solid #E0D0BC" }}>
                        <div style={{ paddingTop: 14 }}>{item.a}</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <div style={{ background: "#3D1F0D", borderRadius: 16, padding: "32px 28px", textAlign: "center", marginTop: 48 }}>
          <div style={{ fontSize: 24, marginBottom: 10 }}>☕</div>
          <h3 style={{ fontSize: 20, color: "#F5EDE3", fontFamily: "Georgia, serif", marginBottom: 10 }}>Still have questions?</h3>
          <p style={{ color: "#9B7B5B", fontSize: 14, marginBottom: 20 }}>We're a family business and we love hearing from our customers.</p>
          <a href="/contact" style={{ background: "#C9A84C", color: "#2A1208", borderRadius: 24, padding: "12px 28px", fontSize: 14, fontWeight: 700, textDecoration: "none", fontFamily: "Georgia, serif" }}>Contact Us →</a>
        </div>
      </div>
    </div>
  );
}
