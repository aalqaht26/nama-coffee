export default function Shipping() {
  return (
    <div style={{ background: "#FBF5EE", minHeight: "100vh", padding: "52px 0" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 20px" }}>
        <div style={{ color: "#C9A84C", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, textAlign: "center", marginBottom: 8 }}>Delivery Information</div>
        <h1 style={{ fontSize: 36, color: "#3D1F0D", textAlign: "center", marginBottom: 48, fontFamily: "Georgia, serif" }}>Shipping Policy</h1>

        {[
          {
            icon: "📦", title: "Where We Ship From",
            content: "All orders are shipped from our facility in Stafford, Virginia. We serve Fairfax County and the entire DC metro area, as well as customers nationwide across the United States."
          },
          {
            icon: "🔥", title: "Roasted to Order First",
            content: "Unlike other coffee sellers, we roast your coffee fresh after you order. This means every order has a processing time of 24-48 hours before it ships. We believe fresh-roasted coffee is worth the brief wait — and our customers agree."
          },
          {
            icon: "🚚", title: "Shipping Methods & Times",
            content: null,
            table: [
              { method: "USPS Priority Mail", time: "2-3 business days", price: "$8.95" },
              { method: "USPS Priority Mail Express", time: "1-2 business days", price: "$26.35" },
              { method: "Free Shipping", time: "2-3 business days", price: "Orders over $50" },
            ]
          },
          {
            icon: "🎁", title: "Free Shipping",
            content: "We offer free USPS Priority Mail shipping on all orders over $50. This is applied automatically at checkout — no code or coupon needed. Free shipping orders are processed and shipped within 24-48 hours."
          },
          {
            icon: "📍", title: "Order Tracking",
            content: "Every order comes with a USPS tracking number sent to your email as soon as your package ships. You can track your order at usps.com. If you have not received a tracking number within 3 business days of ordering please contact us."
          },
          {
            icon: "❄️", title: "Shipping Perishables",
            content: "Our dates are perishable and are packed to maintain freshness during transit. We recommend refrigerating dates upon arrival if you do not plan to consume them within 2 weeks. Coffee and spices are shelf-stable and do not require refrigeration."
          },
          {
            icon: "⚠️", title: "Delays & Issues",
            content: "While we do our best to ensure timely delivery, USPS transit times are estimates and not guaranteed. If your package is delayed or lost, please contact us at hello@shopnamacoffee.com and we will work with USPS to resolve the issue as quickly as possible."
          },
        ].map((section) => (
          <div key={section.title} style={{ background: "#F5EDE3", border: "1.5px solid #E0D0BC", borderRadius: 16, padding: "24px 28px", marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <span style={{ fontSize: 24 }}>{section.icon}</span>
              <h2 style={{ fontSize: 18, color: "#3D1F0D", fontWeight: 700, fontFamily: "Georgia, serif" }}>{section.title}</h2>
            </div>
            {section.content && <p style={{ fontSize: 14, color: "#6B3A1F", lineHeight: 1.9, margin: 0 }}>{section.content}</p>}
            {section.table && (
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                  <thead>
                    <tr style={{ background: "#EDE5DA" }}>
                      {["Method", "Estimated Time", "Cost"].map((h) => (
                        <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: "#3D1F0D", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.table.map((row, i) => (
                      <tr key={i} style={{ borderTop: "1px solid #E0D0BC" }}>
                        <td style={{ padding: "12px 14px", color: "#3D1F0D", fontWeight: 600 }}>{row.method}</td>
                        <td style={{ padding: "12px 14px", color: "#6B3A1F" }}>{row.time}</td>
                        <td style={{ padding: "12px 14px", color: "#C9A84C", fontWeight: 700 }}>{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}

        <div style={{ background: "#3D1F0D", borderRadius: 16, padding: "28px", textAlign: "center", marginTop: 32 }}>
          <p style={{ color: "#9B7B5B", fontSize: 14, marginBottom: 16 }}>Questions about your order or shipment?</p>
          <a href="/contact" style={{ background: "#C9A84C", color: "#2A1208", borderRadius: 24, padding: "12px 28px", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>Contact Us →</a>
        </div>
      </div>
    </div>
  );
}
