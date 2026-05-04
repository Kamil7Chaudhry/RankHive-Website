"use client";
import Link from "next/link";

const VALUES = [
  { title: "Results, not promises.", desc: "We are not a retainer agency that charges you monthly and delivers reports. We get you placed, or we don't stop working." },
  { title: "Relationships over volume.", desc: "Our placements come from years of relationships with editors and journalists — not cold email blasts. Quality beats quantity every time." },
  { title: "Your story, amplified.", desc: "We don't fabricate narratives. We find the most compelling truth about you and make sure the world hears it, in the outlets that matter." },
  { title: "Transparency, always.", desc: "You know exactly what we're pitching, who we're pitching, and what's happening at every step. No black boxes, no mystery fees." },
];

export default function About() {
  return (
    <>
      {/* Header */}
      <section style={{ paddingTop: "140px", paddingBottom: "100px", paddingLeft: "24px", paddingRight: "24px", background: "#000" }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "80px", alignItems: "end" }}>
            <div>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", letterSpacing: "0.18em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", marginBottom: "24px" }}>Who We Are</p>
              <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(72px, 14vw, 160px)", lineHeight: 0.9, letterSpacing: "0.01em" }}>
                ABOUT<br />RANK<br />HIVE
              </h1>
            </div>
            <div>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "18px", color: "rgba(255,255,255,0.6)", lineHeight: "1.8", marginBottom: "24px" }}>
                RankHive is a PR and media coverage agency built for people who are serious about their brand.
              </p>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.4)", lineHeight: "1.8" }}>
                We work with founders, executives, and fast-growing brands to secure features in the world&apos;s top publications. Not vanity metrics — real editorial coverage that builds authority, drives trust, and opens doors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Big statement */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div className="max-w-7xl mx-auto">
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(40px, 7vw, 96px)", color: "#000", lineHeight: 0.92, letterSpacing: "0.01em", maxWidth: "900px" }}>
            &ldquo;THE BEST BRANDS AREN&apos;T THE BEST.<br />THEY&apos;RE THE MOST VISIBLE.&rdquo;
          </h2>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", color: "rgba(0,0,0,0.35)", marginTop: "24px", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            — The RankHive Philosophy
          </p>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "120px 24px", background: "#000" }}>
        <div className="max-w-7xl mx-auto">
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", letterSpacing: "0.18em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", marginBottom: "60px" }}>How We Work</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2px" }}>
            {VALUES.map((v, i) => (
              <div key={v.title} style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent", border: "1px solid rgba(255,255,255,0.06)", padding: "48px 36px" }}>
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "64px", color: "rgba(255,255,255,0.06)", lineHeight: 1, marginBottom: "24px" }}>{String(i + 1).padStart(2, "0")}</div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "17px", fontWeight: 700, marginBottom: "16px" }}>{v.title}</h3>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.45)", lineHeight: "1.8" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats row */}
      <section style={{ padding: "80px 24px", background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "40px" }}>
          {[
            { n: "200+", l: "Clients Featured" },
            { n: "50+", l: "Publications" },
            { n: "98%", l: "Placement Success" },
            { n: "2019", l: "Founded" },
          ].map(s => (
            <div key={s.l} style={{ textAlign: "center" }}>
              <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "64px", lineHeight: 1 }}>{s.n}</p>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: "8px" }}>{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "120px 24px", background: "#000" }}>
        <div className="max-w-7xl mx-auto" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "40px" }}>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(48px, 8vw, 96px)", lineHeight: 0.92, letterSpacing: "0.01em" }}>
            LET&apos;S BUILD<br />YOUR NAME.
          </h2>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/contact" style={{ background: "white", color: "black", padding: "14px 36px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", display: "inline-block" }}>
              Start a Project
            </Link>
            <Link href="/work" style={{ border: "1px solid rgba(255,255,255,0.25)", color: "white", padding: "13px 36px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", display: "inline-block" }}>
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
