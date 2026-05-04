"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const PUBLICATIONS = ["Forbes", "Inc. Magazine", "Entrepreneur", "Business Insider", "Fast Company", "TechCrunch", "The Wall Street Journal", "Bloomberg", "Wired", "Rolling Stone", "Fortune", "Time"];

const STATS = [
  { num: "200+", label: "Clients Featured" },
  { num: "50+", label: "Top Publications" },
  { num: "98%", label: "Success Rate" },
  { num: "3×", label: "Avg. Revenue Growth" },
];

const SERVICES = [
  { num: "01", title: "Media Placement", desc: "Guaranteed features in Forbes, Inc., Entrepreneur and 50+ top-tier outlets that your audience actually reads." },
  { num: "02", title: "Personal Brand PR", desc: "Position founders and executives as undeniable industry authorities with strategic editorial coverage." },
  { num: "03", title: "Crisis Communications", desc: "Protect your reputation and control your narrative before and during high-stakes moments." },
  { num: "04", title: "Brand Storytelling", desc: "Craft compelling narratives that make journalists, investors, and customers take notice." },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const onMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      hero.style.backgroundPosition = `${50 + x * 0.3}% ${50 + y * 0.3}%`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      {/* HERO */}
      <section
        ref={heroRef}
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "0 24px 80px",
          position: "relative",
          overflow: "hidden",
          background: "#000",
        }}
      >
        {/* Grid lines */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          pointerEvents: "none",
        }} />

        {/* Large background text */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(100px, 22vw, 280px)",
          color: "rgba(255,255,255,0.025)",
          letterSpacing: "-0.02em",
          userSelect: "none",
          whiteSpace: "nowrap",
          pointerEvents: "none",
        }}>
          RANKHIVE
        </div>

        {/* Top label */}
        <div style={{
          position: "absolute", top: "120px", left: "24px", right: "24px",
          maxWidth: "1200px", margin: "0 auto",
        }}>
          <div className="max-w-7xl mx-auto" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", letterSpacing: "0.18em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>
              PR & Media Coverage Agency
            </p>
            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em" }}>Accepting new clients</span>
            </div>
          </div>
        </div>

        {/* Hero content */}
        <div className="max-w-7xl mx-auto w-full" style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(64px, 12vw, 160px)",
            lineHeight: "0.92",
            letterSpacing: "0.01em",
            marginBottom: "40px",
            maxWidth: "900px",
          }}>
            GET SEEN.<br />
            <span style={{ color: "rgba(255,255,255,0.35)" }}>GET</span> FEATURED.<br />
            GET RANKED.
          </h1>

          <div style={{ display: "flex", gap: "32px", alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ maxWidth: "380px" }}>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "16px", lineHeight: "1.7", color: "rgba(255,255,255,0.55)", marginBottom: "32px" }}>
                We place founders, executives, and brands in Forbes, Inc., Entrepreneur, and 50+ of the world&apos;s most-read publications. No fluff. Just coverage.
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <Link href="/contact" style={{
                  background: "white", color: "black",
                  padding: "14px 32px",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700, fontSize: "12px",
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  textDecoration: "none", display: "inline-block",
                  transition: "background 0.2s",
                }}>
                  Start Today
                </Link>
                <Link href="/work" style={{
                  border: "1px solid rgba(255,255,255,0.25)", color: "white",
                  padding: "13px 32px",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600, fontSize: "12px",
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  textDecoration: "none", display: "inline-block",
                  transition: "all 0.2s",
                }}>
                  See Our Work
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", marginLeft: "auto" }}>
              {STATS.map(s => (
                <div key={s.label}>
                  <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "48px", letterSpacing: "0.02em", lineHeight: 1 }}>{s.num}</p>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "6px" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: "32px", right: "32px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <div style={{ width: 1, height: 60, background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.3))" }} />
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "10px", color: "rgba(255,255,255,0.25)", letterSpacing: "0.15em", textTransform: "uppercase", writingMode: "vertical-rl" }}>Scroll</p>
        </div>
      </section>

      {/* MARQUEE */}
      <div style={{ background: "#fff", overflow: "hidden", padding: "14px 0", borderTop: "none" }}>
        <div className="marquee-track" style={{ display: "flex", gap: "0", whiteSpace: "nowrap" }}>
          {[...PUBLICATIONS, ...PUBLICATIONS].map((pub, i) => (
            <span key={i} style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "18px",
              color: "#000",
              letterSpacing: "0.08em",
              padding: "0 32px",
            }}>
              {pub}
              <span style={{ opacity: 0.3, marginLeft: "32px" }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES PREVIEW */}
      <section style={{ padding: "120px 24px", background: "#000" }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "80px", flexWrap: "wrap", gap: "24px" }}>
            <div>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", letterSpacing: "0.18em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", marginBottom: "16px" }}>What We Do</p>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(48px, 8vw, 96px)", lineHeight: 0.92, letterSpacing: "0.01em" }}>
                OUR<br />SERVICES
              </h2>
            </div>
            <Link href="/services" style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "12px", letterSpacing: "0.12em",
              color: "rgba(255,255,255,0.5)", textDecoration: "none",
              textTransform: "uppercase", transition: "color 0.2s",
              borderBottom: "1px solid rgba(255,255,255,0.2)",
              paddingBottom: "4px",
            }}>
              View All Services →
            </Link>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            {SERVICES.map((s, i) => (
              <div
                key={s.num}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr auto",
                  alignItems: "center",
                  padding: "40px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  gap: "32px",
                  cursor: "default",
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.02)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em" }}>{s.num}</span>
                <div>
                  <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "0.02em", marginBottom: "8px" }}>{s.title}</h3>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: "1.6", maxWidth: "480px" }}>{s.desc}</p>
                </div>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "20px", color: "rgba(255,255,255,0.15)" }}>→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY HIGHLIGHT */}
      <section style={{ padding: "0 24px 120px", background: "#000" }}>
        <div className="max-w-7xl mx-auto">
          <div style={{
            border: "1px solid rgba(255,255,255,0.1)",
            padding: "clamp(40px, 6vw, 80px)",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* BG accent */}
            <div style={{
              position: "absolute", top: "-60px", right: "-60px",
              width: "300px", height: "300px",
              background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />

            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", letterSpacing: "0.18em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", marginBottom: "24px" }}>
              Featured Work
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }} className="flex-col-mobile">
              <div>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(36px, 5vw, 72px)", lineHeight: 0.95, marginBottom: "24px", letterSpacing: "0.01em" }}>
                  THOMAS<br />CODEVILLA<br /><span style={{ color: "rgba(255,255,255,0.3)" }}>× FORBES</span>
                </h3>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.5)", lineHeight: "1.7", marginBottom: "32px" }}>
                  Co-Founder of SK&amp;S Law Group. We crafted his personal brand narrative and secured a Forbes feature that positioned him as a leading voice in business law.
                </p>
                <Link href="/work" style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "12px", fontWeight: 700,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  color: "white", textDecoration: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.4)",
                  paddingBottom: "4px",
                }}>
                  See Case Study →
                </Link>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {["Forbes Feature", "Inc. Magazine", "Personal Brand Strategy", "Media Coverage"].map(tag => (
                  <div key={tag} style={{ border: "1px solid rgba(255,255,255,0.1)", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.6)" }}>{tag}</span>
                    <span style={{ color: "rgba(255,255,255,0.2)" }}>✓</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* REAL PLACEMENTS TICKER */}
      <section style={{ padding: "80px 24px", background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="max-w-7xl mx-auto">
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", letterSpacing: "0.18em", color: "rgba(255,255,255,0.2)", textTransform: "uppercase", textAlign: "center", marginBottom: "40px" }}>Real clients placed in</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
            {["Forbes", "Business Insider", "MSN", "Yahoo Finance", "Nasdaq", "Inc. Magazine", "Entrepreneur", "TechCrunch", "Fast Company", "Bloomberg"].map(pub => (
              <span key={pub} style={{ padding: "10px 22px", border: "1px solid rgba(255,255,255,0.08)", fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.3)", letterSpacing: "0.05em" }}>{pub}</span>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={{ padding: "100px 24px", background: "#000", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "80px", alignItems: "center" }}>
            <div>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", letterSpacing: "0.18em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", marginBottom: "32px" }}>Client Testimonial</p>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(17px, 2vw, 22px)", color: "rgba(255,255,255,0.75)", lineHeight: "1.8", fontStyle: "italic", marginBottom: "40px" }}>
                &ldquo;RankHive was responsive, professional, and diligent. I&apos;m very very impressed. The team went above and beyond my expectations to deliver impressive results. If you&apos;re thinking of working with them, I am positive you&apos;ll be pleased. Don&apos;t let this one get away.&rdquo;
              </p>
              <div>
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "26px", letterSpacing: "0.05em", marginBottom: "4px" }}>Sara Sharp</p>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.35)" }}>Co-Founder &amp; M&amp;A Attorney, SK&amp;S Law Group</p>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.3)", marginTop: "4px" }}>Featured in Business Insider</p>
                <div style={{ display: "flex", gap: "3px", marginTop: "12px" }}>
                  {[1,2,3,4,5].map(s => <span key={s} style={{ color: "white", fontSize: "15px" }}>★</span>)}
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {[
                { name: "Thomas Codevilla", outlet: "Forbes", role: "Business Attorney" },
                { name: "Sara Sharp", outlet: "Business Insider", role: "M&A Attorney" },
                { name: "John Browning", outlet: "MSN", role: "Financial Advisor" },
                { name: "Beard Alan", outlet: "Yahoo Finance", role: "Capital Strategist" },
                { name: "Skyler Fernandes", outlet: "Nasdaq", role: "Venture Capitalist" },
              ].map((item, i) => (
                <div key={item.name} style={{ padding: "20px 24px", background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent", border: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", fontWeight: 600, color: "rgba(255,255,255,0.7)" }}>{item.name}</p>
                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.3)", marginTop: "2px" }}>{item.role}</p>
                  </div>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "12px", fontWeight: 700, color: "white", background: "rgba(255,255,255,0.1)", padding: "4px 12px" }}>{item.outlet}</span>
                </div>
              ))}
              <div style={{ marginTop: "8px" }}>
                <Link href="/work" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.4)", textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase", borderBottom: "1px solid rgba(255,255,255,0.15)", paddingBottom: "3px" }}>See All Case Studies →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ padding: "100px 24px", background: "#fff" }}>
        <div className="max-w-7xl mx-auto" style={{ textAlign: "center" }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", letterSpacing: "0.18em", color: "rgba(0,0,0,0.35)", textTransform: "uppercase", marginBottom: "24px" }}>Ready to be seen?</p>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(56px, 10vw, 120px)", color: "#000", lineHeight: 0.9, letterSpacing: "0.01em", marginBottom: "40px" }}>
            YOUR NAME.<br />THEIR FRONT PAGE.
          </h2>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "16px", color: "rgba(0,0,0,0.5)", maxWidth: "480px", margin: "0 auto 40px", lineHeight: "1.7" }}>
            One conversation is all it takes. Let&apos;s figure out exactly where you should be featured — and make it happen.
          </p>
          <Link href="/contact" style={{
            background: "black", color: "white",
            padding: "16px 48px",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700, fontSize: "13px",
            letterSpacing: "0.12em", textTransform: "uppercase",
            textDecoration: "none", display: "inline-block",
          }}>
            Book a Strategy Call
          </Link>
        </div>
      </section>
    </>
  );
}
