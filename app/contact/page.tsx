"use client";
import { useState, useEffect, useRef } from "react";

function useFadeUp() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll<HTMLElement>(".fade-up").forEach((c) => c.classList.add("visible"));
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", company: "", email: "", goal: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const heroRef = useFadeUp() as React.RefObject<HTMLElement>;
  const formRef = useFadeUp() as React.RefObject<HTMLElement>;

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
    borderBottom: "1.5px solid var(--border)",
    padding: "14px 0",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "15px",
    color: "var(--ink)",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "11px",
    fontWeight: 600,
    letterSpacing: "0.13em",
    color: "var(--ink-faint)",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "8px",
  };

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef as React.RefObject<HTMLDivElement>}
        style={{
          paddingTop: "140px",
          paddingBottom: "80px",
          paddingLeft: "24px",
          paddingRight: "24px",
          background: "var(--cream)",
          borderBottom: "1px solid var(--border-light)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <p className="fade-up" style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.16em",
            color: "var(--ink-faint)",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}>
            Get In Touch
          </p>
          <h1 className="fade-up delay-1" style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(44px, 8vw, 96px)",
            fontWeight: 700,
            color: "var(--ink)",
            letterSpacing: "-0.02em",
            lineHeight: "1.05",
          }}>
            Let&apos;s get you<br />
            <em style={{ fontStyle: "italic", color: "var(--ink-mid)" }}>featured.</em>
          </h1>
        </div>
      </section>

      {/* Body */}
      <section
        ref={formRef as React.RefObject<HTMLDivElement>}
        style={{ padding: "80px 24px 120px", background: "var(--cream)" }}
      >
        <div className="max-w-7xl mx-auto" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "100px",
        }}>
          {/* Left info */}
          <div>
            <p className="fade-up" style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "17px",
              color: "var(--ink-light)",
              lineHeight: "1.8",
              marginBottom: "60px",
              maxWidth: "340px",
            }}>
              Fill out the form and we&apos;ll get back to you within 24 hours with a media strategy tailored to your goals.
            </p>

            <div className="fade-up delay-1" style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              <div>
                <p style={labelStyle}>Email</p>
                <a
                  href="mailto:hello@rankhive.com"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "16px",
                    color: "var(--ink-mid)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--ink)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "var(--ink-mid)"; }}
                >
                  hello@rankhive.com
                </a>
              </div>
              <div>
                <p style={labelStyle}>LinkedIn</p>
                <a
                  href="https://www.linkedin.com/company/rankhive"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "16px",
                    color: "var(--ink-mid)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--ink)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "var(--ink-mid)"; }}
                >
                  linkedin.com/company/rankhive ↗
                </a>
              </div>
            </div>

            <div className="fade-up delay-2" style={{
              marginTop: "48px",
              padding: "30px",
              border: "1px solid var(--border-light)",
              borderRadius: "6px",
              background: "#fff",
            }}>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "28px",
                fontWeight: 600,
                color: "var(--ink)",
                marginBottom: "10px",
              }}>
                24H Response
              </p>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                color: "var(--ink-light)",
                lineHeight: "1.75",
              }}>
                We respond to every inquiry within one business day with a clear next step — no gatekeeping.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="fade-up delay-1">
            {submitted ? (
              <div style={{ textAlign: "center", padding: "80px 0" }}>
                <div style={{
                  width: 72, height: 72,
                  borderRadius: "50%",
                  background: "var(--green-bg)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 24px",
                }}>
                  <span style={{ fontSize: "28px", color: "var(--green)" }}>✓</span>
                </div>
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "36px",
                  fontWeight: 700,
                  color: "var(--ink)",
                  marginBottom: "14px",
                }}>
                  Message sent.
                </h2>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "16px",
                  color: "var(--ink-light)",
                  lineHeight: "1.75",
                }}>
                  We&apos;ll be in touch within 24 hours with your custom media strategy.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px" }}>
                  <div>
                    <label htmlFor="name" style={labelStyle}>Full Name *</label>
                    <input
                      id="name" name="name" required
                      value={form.name} onChange={handleChange}
                      placeholder="Jane Smith"
                      style={inputStyle}
                      onFocus={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--ink)"; }}
                      onBlur={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" style={labelStyle}>Company</label>
                    <input
                      id="company" name="company"
                      value={form.company} onChange={handleChange}
                      placeholder="Acme Corp"
                      style={inputStyle}
                      onFocus={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--ink)"; }}
                      onBlur={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" style={labelStyle}>Email *</label>
                  <input
                    id="email" name="email" type="email" required
                    value={form.email} onChange={handleChange}
                    placeholder="jane@company.com"
                    style={inputStyle}
                    onFocus={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--ink)"; }}
                    onBlur={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
                  />
                </div>
                <div>
                  <label htmlFor="goal" style={labelStyle}>Primary Goal *</label>
                  <select
                    id="goal" name="goal" required
                    value={form.goal} onChange={handleChange}
                    style={{ ...inputStyle, cursor: "pointer" }}
                    onFocus={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--ink)"; }}
                    onBlur={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
                  >
                    <option value="">Select your goal</option>
                    <option value="Forbes/Inc. feature">Get featured in Forbes / Inc.</option>
                    <option value="Personal brand">Build my personal brand</option>
                    <option value="Company launch PR">PR for company / product launch</option>
                    <option value="Reputation management">Reputation management</option>
                    <option value="Ongoing PR">Ongoing PR retainer</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" style={labelStyle}>Tell us about yourself</label>
                  <textarea
                    id="message" name="message"
                    value={form.message} onChange={handleChange}
                    rows={4}
                    placeholder="What are you working on? What does success look like?"
                    style={{ ...inputStyle, resize: "vertical", lineHeight: "1.6" }}
                    onFocus={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--ink)"; }}
                    onBlur={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    style={{
                      background: "var(--ink)",
                      color: "var(--cream)",
                      padding: "15px 36px",
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: "14px",
                      letterSpacing: "0.04em",
                      border: "none",
                      cursor: "pointer",
                      borderRadius: "2px",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#2d2a26"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--ink)"; }}
                  >
                    Send Message →
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
