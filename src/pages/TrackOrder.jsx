import { useState } from "react";

export default function TrackOrder() {
  const [tracking, setTracking] = useState("");

  return (
    <div style={{ background: "#FBF5EE", minHeight: "100vh", padding: "52px 0" }}>
      <div style={{ maxWidth: 700, margin: "0 auto", padding: "0 20px" }}>
        <div style={{ color: "#C9A84C", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, textAlign: "center", marginBottom: 8 }}>Where's My Order?</div>
        <h1 style={{ fontSize: 36, color: "#3D1F0D", textAlign: "center", marginBottom: 12, fontFamily: "Georgia, serif" }}>Track Your Order</h1>
        <p style={{ color: "#8C7B6B", fontSize: 14, textAlign: "center", marginBottom: 48, lineHeight: 1.7 }}>
          Enter your USPS tracking number below to see the latest status of your shipment. Your tracking number was sent to your email when your order shipped.
        </p>

        {/* Tracking form */}
        <div style={{ background: "#F5EDE3", border: "1.5px solid #E0D0BC", borderRadius: 16, padding: "32px 28px", marginBottom: 24, textAlign: "center" }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>📦</div>
          <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#3D1F0D", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>USPS Tracking Number</label>
          <input
            type="text"
            value={tracking}
            onChange={(e) => setTracking(e.target.value)}
            placeholder="e.g. 9400111899223789012345"
            style={{ width: "100%", padding: "14px 18px", border: "1.5px solid #D4C4AE", borderRadius: 10, fontSize: 15, background: "#FBF5EE", color: "#3D1F0D", outline: "none", boxSizing: "border-box", textAlign: "center", fontFamily: "Georgia, serif", marginBottom: 14 }}
          />
          <a
            href={`https://tools.usps.com/go/TrackConfirmAction?tLabels=${tracking}`}
            target="_blank"
            rel="noreferrer"
            style={{ display: "block", background: "#3D1F0D", color: "#F5EDE3", borderRadius: 28, padding: "14px", fontSize: 15, fontWeight: 700, textDecoration: "none", fontFamily: "Georgia, serif" }}
          >
            Track on USPS.com →
          </a>
          <p style={{ fontSize: 12, color: "#8C7B6B", marginTop: 12 }}>You will be redirected to the official USPS tracking page</p>
        </div>

        {/* Info boxes */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {[
            { icon: "📧", title: "Can't find your tracking number?", content: "Your tracking number was sent to your email when your order shipped. Check your spam folder if you don't see it. You can also email us at hello@shopnamacoffee.com with your order details and we'll send it again." },
            { icon: "🔥", title: "Why hasn't my order shipped yet?", content: "We roast all coffee fresh to order — this takes 24-48 hours before we ship. If it has been more than 3 business days since you ordered and you haven't received a tracking number, please contact us." },
            { icon: "⏰", title: "Estimated delivery times", content: "USPS Priority Mail: 2-3 business days from ship date. USPS Priority Mail Express: 1-2 business days from ship date. These are estimates — actual delivery may vary based on your location and USPS conditions." },
          ].map((item) => (
            <div key={item.title} style={{ background: "#F5EDE3", border: "1.5px solid #E0D0BC", borderRadius: 14, padding: "18px 20px", display: "flex", gap: 14 }}>
              <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#3D1F0D", marginBottom: 6, fontFamily: "Georgia, serif" }}>{item.title}</div>
                <div style={{ fontSize: 13, color: "#6B3A1F", lineHeight: 1.8 }}>{item.content}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 36 }}>
          <p style={{ color: "#8C7B6B", fontSize: 14, marginBottom: 14 }}>Need more help with your order?</p>
          <a href="/contact" style={{ background: "#C9A84C", color: "#2A1208", borderRadius: 24, padding: "12px 28px", fontSize: 14, fontWeight: 700, textDecoration: "none", fontFamily: "Georgia, serif" }}>Contact Us →</a>
        </div>
      </div>
    </div>
  );
}
