"use client";
import Link from "next/link";

const SERVICES = [
  {
    num: "01",
    title: "Media Placement",
    tagline: "Your story in the publications that matter.",
    desc: "We have established relationships with editors and journalists at Forbes, Inc., Entrepreneur, Business Insider, TechCrunch, and 50+ other top-tier outlets. We don't just pitch — we place.",
    includes: ["Forbes Council features", "Inc. Magazine articles", "Entrepreneur contributor spots", "Industry trade publications", "Podcast appearances", "TV and radio segments"],
  },
  {
    num: "02",
    title: "Personal Brand PR",
    tagline: "From unknown to industry authority.",
    desc: "We build the kind of personal brand that makes people say 'I've seen you everywhere.' Strategic editorial coverage that positions you as the go-to expert in your space.",
    includes: ["Thought leadership articles", "Executive positioning strategy", "LinkedIn authority building", "Speaking opportunity placements", "Award nominations", "Wikipedia / knowledge panel setup"],
  },
  {
    num: "03",
    title: "Brand PR & Launch",
    tagline: "Launch loud. Land everywhere.",
    desc: "Whether you're launching a product, company, or campaign — we build the media strategy that makes it impossible to ignore. From press release to placement.",
    includes: ["Launch press campaigns", "Product announcement coverage", "Funding announcement PR", "Brand narrative development", "Crisis communication planning", "Ongoing media relations"],
  },
  {
    num: "04",
    title: "Reputation Management",
    tagline: "Own your narrative. Always.",
    desc: "Control what people find when they search your name or brand. We push positive coverage, suppress harmful results, and ensure your digital presence reflects the real you.",
    includes: ["Search result optimization", "Positive coverage amplification", "Negative content suppression", "Crisis response strategy", "Online review management", "Brand monitoring"],
  },
];

export default function Services() {
  return (
    <>
      <section style={{ paddingTop: "140px", paddingBottom: "80px", paddingLeft: "24px", paddingRight: "24px", background: "#000", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-7xl mx-auto">
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", letterSpacing: "0.18em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", marginBottom: "24px" }}>What We Do</p>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(72px, 14vw, 160px)", lineHeight: 0.9, letterSpacing: "0.01em" }}>
            OUR<br />SERVICES
          </h1>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "17px", color: "rgba(255,255,255,0.45)", maxWidth: "500px", lineHeight: "1.7", marginTop: "32px" }}>
            Every service we offer has one goal: get you in front of the right people, in the right publications, at the right time.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 24px 120px", background: "#000" }}>
        <div className="max-w-7xl mx-auto">
          {SERVICES.map((s) => (
            <div key={s.num} style={{ padding: "80px 0", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "60px", alignItems: "start" }}>
              <div>
                <div style={{ display: "flex", gap: "20px", alignItems: "baseline", marginBottom: "24px" }}>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em" }}>{s.num}</span>
                  <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(40px, 5vw, 64px)", letterSpacing: "0.01em", lineHeight: 1 }}>{s.title}</h2>
                </div>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "20px" }}>{s.tagline}</p>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.5)", lineHeight: "1.8" }}>{s.desc}</p>
              </div>
              <div>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", letterSpacing: "0.15em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", marginBottom: "20px" }}>Includes</p>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {s.includes.map(item => (
                    <div key={item} style={{ padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", gap: "16px", alignItems: "center" }}>
                      <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "12px" }}>—</span>
                      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.55)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "100px 24px", background: "#fff" }}>
        <div className="max-w-7xl mx-auto" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "40px" }}>
          <div>
            <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(48px, 7vw, 88px)", color: "#000", lineHeight: 0.92, letterSpacing: "0.01em" }}>NOT SURE<br />WHERE TO START?</h2>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "16px", color: "rgba(0,0,0,0.5)", marginTop: "20px", maxWidth: "400px", lineHeight: "1.7" }}>We will tell you exactly which service fits your goals. No commitment required.</p>
          </div>
          <Link href="/contact" style={{ background: "black", color: "white", padding: "16px 48px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", display: "inline-block" }}>
            Talk to Us
          </Link>
        </div>
      </section>
    </>
  );
}
