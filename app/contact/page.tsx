"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", company: "", email: "", goal: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(255,255,255,0.15)",
    padding: "16px 0",
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: "15px",
    color: "white",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: "11px",
    letterSpacing: "0.15em",
    color: "rgba(255,255,255,0.3)",
    textTransform: "uppercase" as const,
    display: "block",
    marginBottom: "8px",
  };

  return (
    <>
      <section style={{ paddingTop: "140px", paddingBottom: "80px", paddingLeft: "24px", paddingRight: "24px", background: "#000", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-7xl mx-auto">
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", letterSpacing: "0.18em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", marginBottom: "24px" }}>Get In Touch</p>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(64px, 12vw, 140px)", lineHeight: 0.9, letterSpacing: "0.01em" }}>
            LET&apos;S GET<br />YOU FEATURED.
          </h1>
        </div>
      </section>

      <section style={{ padding: "80px 24px 120px", background: "#000" }}>
        <div className="max-w-7xl mx-auto" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "100px" }}>
          {/* Left */}
          <div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.5)", lineHeight: "1.8", marginBottom: "60px" }}>
              Fill out the form and we&apos;ll get back to you within 24 hours with a media strategy tailored to your goals.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              <div>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", letterSpacing: "0.15em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", marginBottom: "8px" }}>Email</p>
                <a href="mailto:hello@rankhive.com" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>hello@rankhive.com</a>
              </div>
              <div>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", letterSpacing: "0.15em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", marginBottom: "8px" }}>LinkedIn</p>
                <a href="https://www.linkedin.com/company/rankhive" target="_blank" rel="noreferrer" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>linkedin.com/company/rankhive</a>
              </div>
              <div style={{ marginTop: "20px", padding: "32px", border: "1px solid rgba(255,255,255,0.08)" }}>
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "32px", marginBottom: "12px" }}>24H Response</p>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.4)", lineHeight: "1.7" }}>We respond to every inquiry within one business day with a clear next step — no gatekeeping.</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "80px 0" }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "72px", marginBottom: "16px" }}>✓</div>
                <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "48px", marginBottom: "16px" }}>MESSAGE SENT.</h2>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.45)", lineHeight: "1.7" }}>We will be in touch within 24 hours with your custom media strategy.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
                  <div>
                    <label htmlFor="name" style={labelStyle}>Full Name *</label>
                    <input id="name" name="name" required value={form.name} onChange={handleChange} placeholder="Jane Smith" style={inputStyle} />
                  </div>
                  <div>
                    <label htmlFor="company" style={labelStyle}>Company</label>
                    <input id="company" name="company" value={form.company} onChange={handleChange} placeholder="Acme Corp" style={inputStyle} />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" style={labelStyle}>Email *</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="jane@company.com" style={inputStyle} />
                </div>
                <div>
                  <label htmlFor="goal" style={labelStyle}>Primary Goal *</label>
                  <select id="goal" name="goal" required value={form.goal} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}>
                    <option value="" style={{ background: "#111" }}>Select your goal</option>
                    <option value="Forbes/Inc. feature" style={{ background: "#111" }}>Get featured in Forbes / Inc.</option>
                    <option value="Personal brand" style={{ background: "#111" }}>Build my personal brand</option>
                    <option value="Company launch PR" style={{ background: "#111" }}>PR for company / product launch</option>
                    <option value="Reputation management" style={{ background: "#111" }}>Reputation management</option>
                    <option value="Ongoing PR" style={{ background: "#111" }}>Ongoing PR retainer</option>
                    <option value="Other" style={{ background: "#111" }}>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" style={labelStyle}>Tell Us About Yourself</label>
                  <textarea id="message" name="message" value={form.message} onChange={handleChange} rows={4} placeholder="What are you working on? What does success look like?" style={{ ...inputStyle, resize: "vertical", lineHeight: "1.6" }} />
                </div>
                <button type="submit" style={{ background: "white", color: "black", padding: "16px 40px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", border: "none", cursor: "pointer", alignSelf: "flex-start", transition: "background 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#ddd")}
                  onMouseLeave={e => (e.currentTarget.style.background = "white")}
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
