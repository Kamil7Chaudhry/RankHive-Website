"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

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

const SERVICES = [
  {
    num: "01",
    title: "Media Placement",
    tagline: "Your story in the publications that matter.",
    desc: "We have established relationships with editors and journalists at Forbes, Inc., Business Insider, Nasdaq, Yahoo Finance, MSN, and 50+ other top-tier outlets. We don't just pitch — we place.",
    includes: [
      "Forbes Council features",
      "Inc. Magazine articles",
      "Business Insider profiles",
      "Yahoo Finance & Nasdaq features",
      "Industry trade publications",
      "Podcast & media appearances",
    ],
  },
  {
    num: "02",
    title: "Personal Brand PR",
    tagline: "From unknown to industry authority.",
    desc: "We build the kind of personal brand that makes people say 'I've seen you everywhere.' Strategic editorial coverage that positions you as the go-to expert in your space.",
    includes: [
      "Thought leadership articles",
      "Executive positioning strategy",
      "LinkedIn authority building",
      "Speaking opportunity placements",
      "Award nominations",
      "Wikipedia & knowledge panel setup",
    ],
  },
  {
    num: "03",
    title: "Brand PR & Launch",
    tagline: "Launch loud. Land everywhere.",
    desc: "Whether you're launching a product, company, or campaign — we build the media strategy that makes it impossible to ignore. From press release to placement.",
    includes: [
      "Launch press campaigns",
      "Product announcement coverage",
      "Funding announcement PR",
      "Brand narrative development",
      "Crisis communication planning",
      "Ongoing media relations",
    ],
  },
  {
    num: "04",
    title: "Reputation Management",
    tagline: "Own your narrative. Always.",
    desc: "Control what people find when they search your name or brand. We push positive coverage, suppress harmful results, and ensure your digital presence reflects the real you.",
    includes: [
      "Search result optimization",
      "Positive coverage amplification",
      "Negative content suppression",
      "Crisis response strategy",
      "Online review management",
      "Brand monitoring & alerts",
    ],
  },
];

function ServiceCard({ s, i }: { s: typeof SERVICES[0]; i: number }) {
  const ref = useFadeUp() as React.RefObject<HTMLElement>;
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        padding: "80px 0",
        borderBottom: "1px solid var(--border-light)",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "60px",
        alignItems: "start",
      }}
    >
      <div>
        <div className="fade-up" style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "20px" }}>
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "12px",
            fontWeight: 500,
            color: "var(--ink-faint)",
            letterSpacing: "0.1em",
          }}>
            {s.num}
          </span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 700,
            color: "var(--ink)",
            letterSpacing: "-0.02em",
            lineHeight: "1.15",
          }}>
            {s.title}
          </h2>
        </div>
        <p className="fade-up delay-1" style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "12px",
          fontWeight: 500,
          letterSpacing: "0.1em",
          color: "var(--ink-faint)",
          textTransform: "uppercase",
          marginBottom: "18px",
        }}>
          {s.tagline}
        </p>
        <p className="fade-up delay-2" style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "16px",
          color: "var(--ink-light)",
          lineHeight: "1.8",
        }}>
          {s.desc}
        </p>
      </div>
      <div className="fade-up delay-2">
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.14em",
          color: "var(--ink-faint)",
          textTransform: "uppercase",
          marginBottom: "16px",
        }}>
          Includes
        </p>
        <div>
          {s.includes.map(item => (
            <div key={item} style={{
              padding: "13px 0",
              borderBottom: "1px solid var(--border-light)",
              display: "flex",
              gap: "14px",
              alignItems: "center",
            }}>
              <span style={{ color: "var(--green)", fontSize: "13px" }}>✓</span>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                color: "var(--ink-mid)",
              }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Services() {
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
            What We Do
          </p>
          <h1 className="fade-up delay-1" style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(48px, 8vw, 96px)",
            fontWeight: 700,
            color: "var(--ink)",
            letterSpacing: "-0.02em",
            lineHeight: "1.05",
            marginBottom: "32px",
          }}>
            Our Services
          </h1>
          <p className="fade-up delay-2" style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "18px",
            color: "var(--ink-light)",
            maxWidth: "500px",
            lineHeight: "1.75",
          }}>
            Every service we offer has one goal: get you in front of the right people, in the right publications, at the right time.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section style={{ padding: "0 24px 80px", background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.num} s={s} i={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 24px", background: "#1a1814" }}>
        <div className="max-w-7xl mx-auto" style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "40px",
        }}>
          <div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 700,
              color: "#f8f7f4",
              lineHeight: "1.15",
              letterSpacing: "-0.02em",
              marginBottom: "16px",
            }}>
              Not sure where to start?
            </h2>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "16px",
              color: "rgba(248,247,244,0.5)",
              maxWidth: "380px",
              lineHeight: "1.75",
            }}>
              We&apos;ll tell you exactly which service fits your goals. No commitment required.
            </p>
          </div>
          <Link href="/contact" style={{
            background: "#f8f7f4",
            color: "#1a1814",
            padding: "15px 36px",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            fontSize: "14px",
            letterSpacing: "0.04em",
            textDecoration: "none",
            borderRadius: "2px",
            display: "inline-block",
            whiteSpace: "nowrap",
          }}>
            Talk to Us →
          </Link>
        </div>
      </section>
    </>
  );
}
