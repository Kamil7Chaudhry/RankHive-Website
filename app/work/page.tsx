"use client";
import Link from "next/link";

const CASES = [
  {
    num: "01",
    client: "Thomas Codevilla",
    role: "CFA, Business Attorney & Co-Founder, SK&S Law Group",
    outlet: "Forbes",
    outletColor: "#000",
    tags: ["Personal Brand", "Forbes", "Law"],
    year: "2023",
    result: "Secured a Forbes feature positioning Thomas as a leading authority in business law and corporate finance — driving inbound client inquiries and establishing him as a go-to expert.",
  },
  {
    num: "02",
    client: "Sara Sharp",
    role: "Co-Founder & M&A Attorney, SK&S Law Group",
    outlet: "Business Insider",
    outletColor: "#000",
    tags: ["Personal Brand", "Business Insider", "Law"],
    year: "2023",
    result: "Landed a Business Insider feature that positioned Sara as a top M&A attorney, elevating her personal brand and generating new firm visibility across the legal industry.",
  },
  {
    num: "03",
    client: "John Browning",
    role: "Founder, Guardian Rock Wealth | Author, 'Build a Life, not a Portfolio'",
    outlet: "MSN",
    outletColor: "#0072C6",
    tags: ["Finance", "MSN", "Author"],
    year: "2023",
    result: "MSN feature amplified John's book launch and positioned him as a leading voice in personal finance — expanding his audience and driving book sales.",
  },
  {
    num: "04",
    client: "Beard Alan",
    role: "Managing Director & CEO, Interlink Capital Strategies",
    outlet: "Yahoo Finance",
    outletColor: "#6001D2",
    tags: ["Finance", "Yahoo Finance", "Executive"],
    year: "2023",
    result: "Secured Yahoo Finance coverage that established Beard as a credible financial expert, building authority in capital markets and attracting new advisory clients.",
  },
  {
    num: "05",
    client: "Skyler Fernandes",
    role: "Founder & General Partner, VU Venture Partners",
    outlet: "Nasdaq",
    outletColor: "#F0B800",
    tags: ["VC", "Nasdaq", "Venture Capital"],
    year: "2023",
    result: "Nasdaq feature positioned Skyler as a leading VC voice, driving LP interest and deal flow while building his authority in the venture capital ecosystem.",
  },
];

const OUTLETS = ["Forbes", "Business Insider", "MSN", "Yahoo Finance", "Nasdaq", "Inc.", "Entrepreneur", "TechCrunch", "Fortune", "Bloomberg"];

export default function Work() {
  return (
    <>
      {/* Header */}
      <section style={{ paddingTop: "140px", paddingBottom: "80px", paddingLeft: "24px", paddingRight: "24px", background: "#000", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-7xl mx-auto" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "32px" }}>
          <div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", letterSpacing: "0.18em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", marginBottom: "24px" }}>Real Clients. Real Placements.</p>
            <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(72px, 14vw, 160px)", lineHeight: 0.9, letterSpacing: "0.01em" }}>
              OUR<br />WORK
            </h1>
          </div>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "16px", color: "rgba(255,255,255,0.4)", maxWidth: "320px", lineHeight: "1.7" }}>
            From attorneys to venture capitalists — here&apos;s what we&apos;ve built for real people in real publications.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section style={{ padding: "0 24px 120px", background: "#000" }}>
        <div className="max-w-7xl mx-auto">
          {CASES.map((c, i) => (
            <div
              key={c.num}
              style={{
                padding: "64px 0",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                display: "grid",
                gridTemplateColumns: "64px 1fr",
                gap: "40px",
                alignItems: "start",
              }}
            >
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "72px", color: "rgba(255,255,255,0.05)", lineHeight: 1 }}>
                {c.num}
              </span>
              <div>
                {/* Tags row */}
                <div style={{ display: "flex", gap: "10px", marginBottom: "16px", flexWrap: "wrap", alignItems: "center" }}>
                  <span style={{
                    background: "white", color: "black",
                    padding: "4px 14px",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700, fontSize: "11px",
                    letterSpacing: "0.06em",
                  }}>
                    {c.outlet}
                  </span>
                  {c.tags.slice(1).map(tag => (
                    <span key={tag} style={{ border: "1px solid rgba(255,255,255,0.1)", padding: "4px 12px", fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.06em" }}>{tag}</span>
                  ))}
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.2)", marginLeft: "4px" }}>{c.year}</span>
                </div>

                <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(36px, 5vw, 64px)", letterSpacing: "0.01em", marginBottom: "8px", lineHeight: 1 }}>
                  {c.client}
                </h2>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.3)", marginBottom: "20px", letterSpacing: "0.04em" }}>
                  {c.role}
                </p>

                {/* Result bar */}
                <div style={{ borderLeft: "2px solid rgba(255,255,255,0.15)", paddingLeft: "20px" }}>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.55)", lineHeight: "1.7" }}>
                    {c.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ padding: "100px 24px", background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto">
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", letterSpacing: "0.18em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", marginBottom: "48px", textAlign: "center" }}>What Clients Say</p>
          <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(18px, 2.5vw, 24px)", color: "rgba(255,255,255,0.75)", lineHeight: "1.8", fontStyle: "italic", marginBottom: "40px" }}>
              &ldquo;RankHive was responsive, professional, and diligent. I&apos;m very very impressed with this contractor. The team went above and beyond my expectations to deliver an impressive result (several impressive results in fact). If you&apos;re thinking of working with them, I am positive you&apos;ll be pleased. Don&apos;t let this one get away.&rdquo;
            </p>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
              <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "28px", letterSpacing: "0.06em" }}>Sara Sharp</p>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em" }}>Co-Founder & M&A Attorney, SK&S Law Group</p>
              <div style={{ marginTop: "12px", display: "flex", gap: "4px" }}>
                {[1,2,3,4,5].map(s => <span key={s} style={{ color: "white", fontSize: "16px" }}>★</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications strip */}
      <section style={{ padding: "60px 24px", background: "#000", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto">
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "11px", letterSpacing: "0.18em", color: "rgba(255,255,255,0.2)", textTransform: "uppercase", textAlign: "center", marginBottom: "40px" }}>Our clients have been featured in</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
            {OUTLETS.map(pub => (
              <span key={pub} style={{ padding: "12px 24px", border: "1px solid rgba(255,255,255,0.08)", fontFamily: "'Space Grotesk', sans-serif", fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.35)", letterSpacing: "0.06em" }}>
                {pub}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 24px", background: "#fff" }}>
        <div className="max-w-7xl mx-auto" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(48px, 8vw, 96px)", color: "#000", lineHeight: 0.92, letterSpacing: "0.01em", marginBottom: "24px" }}>
            YOUR STORY<br />GOES HERE NEXT.
          </h2>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "16px", color: "rgba(0,0,0,0.5)", marginBottom: "40px", lineHeight: "1.7" }}>
            Ready to get featured?
          </p>
          <Link href="/contact" style={{ background: "black", color: "white", padding: "16px 48px", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", display: "inline-block" }}>
            Let&apos;s Talk
          </Link>
        </div>
      </section>
    </>
  );
}
