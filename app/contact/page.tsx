"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const FADE_UP = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: "1.5px solid rgba(10,10,10,0.12)",
  padding: "14px 0",
  fontFamily: "'DM Sans', sans-serif",
  fontWeight: 300,
  fontSize: "15px",
  color: "#0A0A0A",
  outline: "none",
  borderRadius: 0,
  transition: "border-color 0.2s",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "10px",
  fontWeight: 600,
  letterSpacing: "0.18em",
  color: "rgba(10,10,10,0.3)",
  textTransform: "uppercase",
  display: "block",
  marginBottom: "8px",
};

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

  const focusIn = (e: React.FocusEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.borderColor = "#0A0A0A";
  };
  const focusOut = (e: React.FocusEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.borderColor = "rgba(10,10,10,0.12)";
  };

  return (
    <>
      {/* Hero */}
      <section style={{
        paddingTop: "148px",
        paddingBottom: "80px",
        paddingLeft: "24px",
        paddingRight: "24px",
        background: "#FFFFFF",
        borderBottom: "1px solid rgba(10,10,10,0.06)",
      }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.2em",
              color: "rgba(10,10,10,0.3)",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            GET IN TOUCH
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(44px, 8vw, 96px)",
              fontWeight: 900,
              color: "#0A0A0A",
              letterSpacing: "-0.03em",
              lineHeight: "1.0",
            }}
          >
            Let&apos;s get you<br />
            <em style={{ color: "rgba(10,10,10,0.3)" }}>featured.</em>
          </motion.h1>
        </div>
      </section>

      {/* Body */}
      <section style={{ padding: "80px 24px 120px", background: "#FFFFFF" }}>
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "100px",
        }}>
          {/* Left info */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.p variants={FADE_UP} style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "16px",
              color: "rgba(10,10,10,0.45)",
              lineHeight: "1.8",
              marginBottom: "56px",
              maxWidth: "320px",
            }}>
              Fill out the form and we&apos;ll get back to you within 24 hours with a media strategy tailored to your goals.
            </motion.p>

            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              <motion.div variants={FADE_UP}>
                <p style={labelStyle}>Email</p>
                <a href="mailto:hello@rankhive.com" style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "15px",
                  fontWeight: 400,
                  color: "rgba(10,10,10,0.55)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#0A0A0A"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(10,10,10,0.55)"; }}
                >
                  hello@rankhive.com
                </a>
              </motion.div>

              <motion.div variants={FADE_UP}>
                <p style={labelStyle}>LinkedIn</p>
                <a
                  href="https://www.linkedin.com/company/rankhive"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "15px",
                    fontWeight: 400,
                    color: "rgba(10,10,10,0.55)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#0A0A0A"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(10,10,10,0.55)"; }}
                >
                  linkedin.com/company/rankhive ↗
                </a>
              </motion.div>
            </div>

            <motion.div variants={FADE_UP} style={{
              marginTop: "48px",
              padding: "32px",
              border: "1px solid rgba(10,10,10,0.08)",
              background: "#F7F5F2",
            }}>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "28px",
                fontWeight: 700,
                color: "#0A0A0A",
                marginBottom: "10px",
                letterSpacing: "-0.01em",
              }}>
                24H Response
              </p>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: "14px",
                color: "rgba(10,10,10,0.45)",
                lineHeight: "1.75",
              }}>
                We respond to every inquiry within one business day with a clear next step — no gatekeeping.
              </p>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            {submitted ? (
              <div style={{ textAlign: "center", padding: "80px 0" }}>
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 16 }}
                  style={{
                    width: 72, height: 72,
                    border: "1.5px solid rgba(10,10,10,0.12)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 24px",
                  }}
                >
                  <span style={{ fontSize: "24px", color: "#0A0A0A" }}>✓</span>
                </motion.div>
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "36px",
                  fontWeight: 900,
                  color: "#0A0A0A",
                  marginBottom: "14px",
                  letterSpacing: "-0.02em",
                }}>
                  Message sent.
                </h2>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "15px",
                  color: "rgba(10,10,10,0.45)",
                  lineHeight: "1.7",
                }}>
                  We&apos;ll be in touch within 24 hours with your custom media strategy.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
                  <div>
                    <label htmlFor="name" style={labelStyle}>Full Name *</label>
                    <input
                      id="name" name="name" required
                      value={form.name} onChange={handleChange}
                      placeholder="Jane Smith"
                      style={inputStyle}
                      onFocus={focusIn as React.FocusEventHandler<HTMLInputElement>}
                      onBlur={focusOut as React.FocusEventHandler<HTMLInputElement>}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" style={labelStyle}>Company</label>
                    <input
                      id="company" name="company"
                      value={form.company} onChange={handleChange}
                      placeholder="Acme Corp"
                      style={inputStyle}
                      onFocus={focusIn as React.FocusEventHandler<HTMLInputElement>}
                      onBlur={focusOut as React.FocusEventHandler<HTMLInputElement>}
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
                    onFocus={focusIn as React.FocusEventHandler<HTMLInputElement>}
                    onBlur={focusOut as React.FocusEventHandler<HTMLInputElement>}
                  />
                </div>

                <div>
                  <label htmlFor="goal" style={labelStyle}>Primary Goal *</label>
                  <select
                    id="goal" name="goal" required
                    value={form.goal} onChange={handleChange}
                    style={{ ...inputStyle, cursor: "pointer", appearance: "none" }}
                    onFocus={focusIn as React.FocusEventHandler<HTMLSelectElement>}
                    onBlur={focusOut as React.FocusEventHandler<HTMLSelectElement>}
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
                    onFocus={focusIn as React.FocusEventHandler<HTMLTextAreaElement>}
                    onBlur={focusOut as React.FocusEventHandler<HTMLTextAreaElement>}
                  />
                </div>

                <div>
                  <motion.button
                    type="submit"
                    whileHover={{ y: -2, boxShadow: "0 12px 32px rgba(10,10,10,0.15)" }}
                    transition={{ duration: 0.2 }}
                    style={{
                      background: "#0A0A0A",
                      color: "#FFFFFF",
                      padding: "14px 36px",
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 500,
                      fontSize: "14px",
                      letterSpacing: "0.02em",
                      border: "none",
                      cursor: "pointer",
                      borderRadius: "2px",
                      display: "inline-block",
                    }}
                  >
                    Send Message →
                  </motion.button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}
