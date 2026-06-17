export default function Returns() {
  return (
    <div style={{ background: "#FBF5EE", minHeight: "100vh", padding: "52px 0" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 20px" }}>
        <div style={{ color: "#C9A84C", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, textAlign: "center", marginBottom: 8 }}>Our Promise</div>
        <h1 style={{ fontSize: 36, color: "#3D1F0D", textAlign: "center", marginBottom: 12, fontFamily: "Georgia, serif" }}>Returns & Refund Policy</h1>
        <p style={{ color: "#8C7B6B", fontSize: 14, textAlign: "center", marginBottom: 48, lineHeight: 1.7 }}>
          We stand behind every product we sell. Your satisfaction is our priority — and we mean that.
        </p>

        {[
          {
            icon: "✅", title: "Our Satisfaction Guarantee",
            content: "If you are not completely satisfied with your order for any reason, we want to make it right. We are a family business and our reputation means everything to us. Please contact us within 14 days of receiving your order and we will work with you to find a solution — whether that is a replacement, store credit or a full refund."
          },
          {
            icon: "☕", title: "Coffee & Roasted Products",
            content: "Because coffee is roasted fresh to your specifications, we cannot accept returns on opened bags. However if your coffee arrives damaged, was incorrectly roasted, or you are unsatisfied with the quality for any reason, please contact us with a photo and description and we will send a replacement at no charge."
          },
          {
            icon: "🌴", title: "Dates & Perishable Items",
            content: "Due to the perishable nature of our dates, we cannot accept returns on opened packages. If your dates arrive damaged, spoiled or not as described, please contact us within 48 hours of delivery with a photo and we will issue a full refund or replacement immediately."
          },
          {
            icon: "🌿", title: "Spices & Teas",
            content: "Unopened spice and tea packages may be returned within 14 days of delivery for a full refund. Opened packages cannot be returned unless the product is defective or not as described. If you receive the wrong product or a damaged item, we will replace it at no cost."
          },
          {
            icon: "🎁", title: "Gift Sets",
            content: "If a gift set arrives damaged or with missing items, please contact us within 7 days of delivery and we will send a replacement immediately. We take great care in packaging our gift sets and we apologize in advance for any issues."
          },
          {
            icon: "💳", title: "Refund Process",
            content: "Approved refunds are processed within 3-5 business days and returned to your original payment method. You will receive an email confirmation when your refund has been processed. Shipping costs are non-refundable unless the return is due to our error."
          },
          {
            icon: "📧", title: "How to Request a Return or Refund",
            content: "Email us at hello@shopnamacoffee.com with your order number, a description of the issue and a photo if applicable. We respond to all inquiries within 24 hours. We promise to treat every situation with fairness and care — the same way we would want to be treated."
          },
        ].map((section) => (
          <div key={section.title} style={{ background: "#F5EDE3", border: "1.5px solid #E0D0BC", borderRadius: 16, padding: "24px 28px", marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <span style={{ fontSize: 24 }}>{section.icon}</span>
              <h2 style={{ fontSize: 18, color: "#3D1F0D", fontWeight: 700, fontFamily: "Georgia, serif" }}>{section.title}</h2>
            </div>
            <p style={{ fontSize: 14, color: "#6B3A1F", lineHeight: 1.9, margin: 0 }}>{section.content}</p>
          </div>
        ))}

        <div style={{ background: "linear-gradient(135deg, #3D1F0D, #5C2E10)", borderRadius: 16, padding: "32px 28px", textAlign: "center", marginTop: 32 }}>
          <h3 style={{ fontSize: 20, color: "#F5EDE3", fontFamily: "Georgia, serif", marginBottom: 10 }}>We stand behind what we sell</h3>
          <p style={{ color: "#9B7B5B", fontSize: 14, marginBottom: 20, lineHeight: 1.7 }}>
            "In our culture, when you give someone something, you make sure it is the best you have. That standard applies to every order we ship."
          </p>
          <a href="/contact" style={{ background: "#C9A84C", color: "#2A1208", borderRadius: 24, padding: "12px 28px", fontSize: 14, fontWeight: 700, textDecoration: "none", fontFamily: "Georgia, serif" }}>Contact Us →</a>
        </div>
      </div>
    </div>
  );
}
