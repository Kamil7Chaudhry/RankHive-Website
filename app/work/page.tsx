"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

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

const CASES = [
  {
    num: "01",
    client: "Thomas Codevilla",
    role: "Business Attorney & Co-Founder",
    company: "SK&S Law Group",
    outlet: "Forbes",
    img: "/thomas-forbes.png",
    tags: ["Personal Brand", "Business Law"],
    result: "Secured a Forbes feature positioning Thomas as a leading authority in business law and corporate finance — driving inbound client inquiries and establishing him as a go-to expert for the media.",
    quote: "Being featured in Forbes completely changed the caliber of clients who reach out to us.",
  },
  {
    num: "02",
    client: "Sara Sharp",
    role: "Co-Founder & M&A Attorney",
    company: "SK&S Law Group",
    outlet: "Business Insider",
    img: "/sara-bi.png",
    tags: ["Personal Brand", "M&A Law"],
    result: "Landed a Business Insider feature that positioned Sara as a top M&A attorney, elevating her personal brand and generating new firm visibility across the legal industry.",
    quote: "RankHive went above and beyond. The results speak for themselves.",
  },
  {
    num: "03",
    client: "John Browning",
    role: "Financial Advisor & Author",
    company: "Guardian Rock Wealth",
    outlet: "MSN",
    img: "/john-msn.png",
    tags: ["Finance", "Book Launch"],
    result: "MSN feature amplified John's book launch and positioned him as a leading voice in personal finance — expanding his audience and driving significant book sales.",
    quote: "The MSN placement reached exactly the audience I needed.",
  },
  {
    num: "04",
    client: "Beard Alan",
    role: "Managing Director & CEO",
    company: "Interlink Capital Strategies",
    outlet: "Yahoo Finance",
    img: "/beard-yahoo.png",
    tags: ["Finance", "Executive Brand"],
    result: "Secured Yahoo Finance coverage that established Beard as a credible financial expert, building authority in capital markets and attracting new advisory clients.",
    quote: "A single Yahoo Finance article generated more leads than months of other marketing.",
  },
  {
    num: "05",
    client: "Skyler Fernandes",
    role: "Founder & General Partner",
    company: "VU Venture Partners",
    outlet: "Nasdaq",
    img: "/skyler-nasdaq.png",
    tags: ["Venture Capital", "Startup"],
    result: "Nasdaq feature positioned Skyler as a leading VC voice, driving LP interest and deal flow while building his authority in the venture capital ecosystem.",
    quote: "Being on Nasdaq opened doors I didn't even know existed.",
  },
];

function CaseStudy({ c, i }: { c: typeof CASES[0]; i: number }) {
  const ref = useFadeUp() as React.RefObject<HTMLElement>;
  const isEven = i % 2 === 0;

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        padding: "100px 24px",
        background: i % 2 === 0 ? "var(--cream)" : "#fff",
        borderBottom: "1px solid var(--border-light)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "72px",
          alignItems: "center",
          direction: isEven ? "ltr" : "rtl",
        }}>
          {/* Image */}
          <div
            className={`fade-up delay-${isEven ? 1 : 2}`}
            style={{ direction: "ltr" }}
          >
            <div style={{
              position: "relative",
              height: "480px",
              borderRadius: "6px",
              overflow: "hidden",
              boxShadow: "0 20px 80px rgba(26,24,20,0.1)",
            }}>
              <Image
                src={c.img}
                alt={`${c.client} — ${c.outlet}`}
                fill
                style={{ objectFit: "cover" }}
              />
              {/* Overlay badge */}
              <div style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                background: "#fff",
                borderRadius: "100px",
                padding: "6px 14px",
                boxShadow: "0 4px 16px rgba(26,24,20,0.1)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green)", display: "inline-block" }} />
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "var(--ink)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}>
                  {c.outlet}
                </span>
              </div>
            </div>
          </div>

          {/* Text */}
          <div
            className={`fade-up delay-${isEven ? 2 : 1}`}
            style={{ direction: "ltr" }}
          >
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "var(--ink-faint)",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}>
              Case Study {c.num}
            </p>

            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 700,
              color: "var(--ink)",
              letterSpacing: "-0.02em",
              lineHeight: "1.15",
              marginBottom: "8px",
            }}>
              {c.client}
            </h2>

            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              color: "var(--ink-light)",
              marginBottom: "4px",
            }}>
              {c.role}
            </p>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              fontWeight: 500,
              color: "var(--ink-faint)",
              marginBottom: "28px",
            }}>
              {c.company}
            </p>

            {/* Tags */}
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "28px" }}>
              <span style={{
                padding: "5px 14px",
                background: "var(--ink)",
                color: "var(--cream)",
                borderRadius: "100px",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}>
                {c.outlet}
              </span>
              {c.tags.map(tag => (
                <span key={tag} style={{
                  padding: "5px 14px",
                  border: "1px solid var(--border)",
                  color: "var(--ink-light)",
                  borderRadius: "100px",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Result */}
            <div style={{
              borderLeft: "3px solid var(--border)",
              paddingLeft: "20px",
              marginBottom: "28px",
            }}>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "15px",
                color: "var(--ink-light)",
                lineHeight: "1.8",
              }}>
                {c.result}
              </p>
            </div>

            {/* Mini quote */}
            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "17px",
              fontStyle: "italic",
              color: "var(--ink-mid)",
              lineHeight: "1.6",
            }}>
              &ldquo;{c.quote}&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  const heroRef = useFadeUp() as React.RefObject<HTMLElement>;

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
        <div className="max-w-7xl mx-auto" style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "32px",
        }}>
          <div>
            <p className="fade-up" style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.16em",
              color: "var(--ink-faint)",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}>
              Real Clients. Real Placements.
            </p>
            <h1 className="fade-up delay-1" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(48px, 8vw, 96px)",
              fontWeight: 700,
              color: "var(--ink)",
              letterSpacing: "-0.02em",
              lineHeight: "1.05",
            }}>
              Our Work
            </h1>
          </div>
          <p className="fade-up delay-2" style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "17px",
            color: "var(--ink-light)",
            maxWidth: "340px",
            lineHeight: "1.75",
          }}>
            From attorneys to venture capitalists — real people placed in real publications.
          </p>
        </div>
      </section>

      {/* Case studies */}
      {CASES.map((c, i) => (
        <CaseStudy key={c.num} c={c} i={i} />
      ))}

      {/* Testimonial */}
      <section style={{ padding: "100px 24px", background: "#1a1814" }}>
        <div className="max-w-7xl mx-auto">
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.16em",
            color: "rgba(248,247,244,0.3)",
            textTransform: "uppercase",
            marginBottom: "44px",
            textAlign: "center",
          }}>
            What Clients Say
          </p>
          <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
            <p style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(18px, 2.5vw, 24px)",
              fontStyle: "italic",
              color: "rgba(248,247,244,0.85)",
              lineHeight: "1.8",
              marginBottom: "40px",
            }}>
              &ldquo;RankHive was responsive, professional, and diligent. I&apos;m very very impressed. The team went above and beyond my expectations to deliver impressive results. If you&apos;re thinking of working with them, I am positive you&apos;ll be pleased. Don&apos;t let this one get away.&rdquo;
            </p>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "20px",
                fontWeight: 600,
                color: "#f8f7f4",
              }}>
                Sara Sharp
              </p>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                color: "rgba(248,247,244,0.4)",
              }}>
                Co-Founder & M&A Attorney, SK&S Law Group
              </p>
              <div style={{ marginTop: "12px", display: "flex", gap: "3px" }}>
                {[1,2,3,4,5].map(s => (
                  <span key={s} style={{ color: "#d4ac0d", fontSize: "16px" }}>★</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section style={{ padding: "64px 24px", background: "var(--cream-dark)", borderTop: "1px solid var(--border-light)" }}>
        <div className="max-w-7xl mx-auto">
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.14em",
            color: "var(--ink-faint)",
            textTransform: "uppercase",
            textAlign: "center",
            marginBottom: "32px",
          }}>
            Our clients have been featured in
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
            {["Forbes", "Business Insider", "MSN", "Yahoo Finance", "Nasdaq", "Inc.", "Entrepreneur", "TechCrunch", "Fortune", "Bloomberg"].map(pub => (
              <span key={pub} style={{
                padding: "10px 20px",
                border: "1px solid var(--border)",
                borderRadius: "100px",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                color: "var(--ink-mid)",
                background: "#fff",
              }}>
                {pub}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 24px", background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto" style={{ textAlign: "center" }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 700,
            color: "var(--ink)",
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
            marginBottom: "24px",
          }}>
            Your story goes<br />
            <em style={{ fontStyle: "italic", color: "var(--ink-mid)" }}>here next.</em>
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "17px",
            color: "var(--ink-light)",
            marginBottom: "40px",
            lineHeight: "1.75",
          }}>
            Ready to get featured?
          </p>
          <Link href="/contact" style={{
            background: "var(--ink)",
            color: "var(--cream)",
            padding: "15px 40px",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            fontSize: "14px",
            letterSpacing: "0.04em",
            textDecoration: "none",
            borderRadius: "2px",
            display: "inline-block",
          }}>
            Let&apos;s Talk →
          </Link>
        </div>
      </section>
    </>
  );
}
