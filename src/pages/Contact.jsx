import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ background: "#FBF5EE", minHeight: "100vh", padding: "52px 0" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 20px" }}>
        <div style={{ color: "#C9A84C", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, textAlign: "center", marginBottom: 8 }}>We'd Love to Hear From You</div>
        <h1 style={{ fontSize: 36, color: "#3D1F0D", textAlign: "center", marginBottom: 12, fontFamily: "Georgia, serif" }}>Contact Us</h1>
        <p style={{ color: "#8C7B6B", fontSize: 14, textAlign: "center", marginBottom: 52, lineHeight: 1.7 }}>
          We are a family business and we personally respond to every message. You will hear back from us within 24 hours — usually much sooner.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
          {/* Contact Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { icon: "📧", title: "Email", value: "hello@shopnamacoffee.com", sub: "We respond within 24 hours" },
              { icon: "📍", title: "Ship From", value: "Stafford, Virginia", sub: "Serving Fairfax County & DC Metro" },
              { icon: "🕐", title: "Business Hours", value: "Mon – Sat: 9am – 6pm EST", sub: "Sunday: Closed" },
              { icon: "🌐", title: "Website", value: "shopnamacoffee.com", sub: "Shop online anytime" },
            ].map((item) => (
              <div key={item.title} style={{ background: "#F5EDE3", border: "1.5px solid #E0D0BC", borderRadius: 14, padding: "18px 20px", display: "flex", gap: 14, alignItems: "flex-start" }}>
                <span style={{ fontSize: 24, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: 11, color: "#C9A84C", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>{item.title}</div>
                  <div style={{ fontSize: 14, color: "#3D1F0D", fontWeight: 700 }}>{item.value}</div>
                  <div style={{ fontSize: 12, color: "#8C7B6B", marginTop: 2 }}>{item.sub}</div>
                </div>
              </div>
            ))}

            <div style={{ background: "#3D1F0D", borderRadius: 14, padding: "20px", marginTop: 8 }}>
              <div style={{ fontSize: 14, color: "#C9A84C", fontWeight: 700, marginBottom: 8 }}>Follow Us</div>
              <p style={{ fontSize: 13, color: "#9B7B5B", lineHeight: 1.7, margin: 0 }}>
                Stay connected for new product drops, seasonal specials and behind-the-scenes from our family in Aseer, Saudi Arabia.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ background: "#F5EDE3", border: "1.5px solid #E0D0BC", borderRadius: 16, padding: "28px" }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>☕</div>
                <h3 style={{ fontSize: 22, color: "#3D1F0D", fontFamily: "Georgia, serif", marginBottom: 12 }}>Message Received!</h3>
                <p style={{ fontSize: 14, color: "#6B3A1F", lineHeight: 1.8 }}>Thank you for reaching out. We will get back to you within 24 hours. In the meantime, feel free to browse our collection.</p>
                <button onClick={() => setSubmitted(false)} style={{ marginTop: 20, background: "#3D1F0D", color: "#F5EDE3", border: "none", borderRadius: 24, padding: "10px 24px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Send Another Message</button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <h3 style={{ fontSize: 18, color: "#3D1F0D", fontFamily: "Georgia, serif", marginBottom: 20, fontWeight: 700 }}>Send Us a Message</h3>
                {[
                  { name: "name", label: "Your Name", type: "text", placeholder: "Abdulrahman Al-Qahtani" },
                  { name: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
                  { name: "subject", label: "Subject", type: "text", placeholder: "Question about my order..." },
                ].map((field) => (
                  <div key={field.name} style={{ marginBottom: 16 }}>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#3D1F0D", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>{field.label}</label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handle}
                      placeholder={field.placeholder}
                      required
                      style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #D4C4AE", borderRadius: 10, fontSize: 14, background: "#FBF5EE", color: "#3D1F0D", outline: "none", boxSizing: "border-box", fontFamily: "Georgia, serif" }}
                    />
                  </div>
                ))}
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#3D1F0D", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handle}
                    placeholder="Tell us how we can help..."
                    required
                    rows={5}
                    style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #D4C4AE", borderRadius: 10, fontSize: 14, background: "#FBF5EE", color: "#3D1F0D", outline: "none", boxSizing: "border-box", fontFamily: "Georgia, serif", resize: "vertical" }}
                  />
                </div>
                <button type="submit" style={{ width: "100%", background: "#3D1F0D", color: "#F5EDE3", border: "none", borderRadius: 28, padding: "14px", fontSize: 15, fontWeight: 700, cursor: "pointer", fontFamily: "Georgia, serif" }}>
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
