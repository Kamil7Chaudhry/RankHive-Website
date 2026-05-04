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

const VALUES = [
  {
    num: "01",
    title: "Results, not promises.",
    desc: "We are not a retainer agency that charges you monthly and delivers reports. We get you placed, or we don't stop working.",
  },
  {
    num: "02",
    title: "Relationships over volume.",
    desc: "Our placements come from years of relationships with editors and journalists — not cold email blasts. Quality beats quantity every time.",
  },
  {
    num: "03",
    title: "Your story, amplified.",
    desc: "We don't fabricate narratives. We find the most compelling truth about you and make sure the world hears it, in the outlets that matter.",
  },
  {
    num: "04",
    title: "Transparency, always.",
    desc: "You know exactly what we're pitching, who we're pitching, and what's happening at every step. No black boxes, no mystery fees.",
  },
];

const STATS = [
  { n: "200+", l: "Clients Featured" },
  { n: "50+", l: "Publications" },
  { n: "98%", l: "Placement Success" },
  { n: "2019", l: "Founded" },
];

export default function About() {
  const heroRef = useFadeUp() as React.RefObject<HTMLElement>;
  const quoteRef = useFadeUp() as React.RefObject<HTMLElement>;
  const valuesRef = useFadeUp() as React.RefObject<HTMLElement>;
  const statsRef = useFadeUp() as React.RefObject<HTMLElement>;

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef as React.RefObject<HTMLDivElement>}
        style={{
          paddingTop: "140px",
          paddingBottom: "100px",
          paddingLeft: "24px",
          paddingRight: "24px",
          background: "var(--cream)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "80px",
            alignItems: "end",
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
                Who We Are
              </p>
              <h1 className="fade-up delay-1" style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(52px, 9vw, 112px)",
                fontWeight: 700,
                color: "var(--ink)",
                letterSpacing: "-0.03em",
                lineHeight: "1.0",
              }}>
                About<br />
                <em style={{ fontStyle: "italic", color: "var(--ink-mid)" }}>RankHive</em>
              </h1>
            </div>
            <div>
              <p className="fade-up delay-1" style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "19px",
                color: "var(--ink-mid)",
                lineHeight: "1.8",
                marginBottom: "24px",
              }}>
                RankHive is a PR and media coverage agency built for people who are serious about their brand.
              </p>
              <p className="fade-up delay-2" style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "16px",
                color: "var(--ink-light)",
                lineHeight: "1.8",
              }}>
                We work with founders, executives, and fast-growing brands to secure features in the world&apos;s top publications. Not vanity metrics — real editorial coverage that builds authority, drives trust, and opens doors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section
        ref={quoteRef as React.RefObject<HTMLDivElement>}
        style={{ padding: "80px 24px", background: "#1a1814" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="fade-up" style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 5vw, 64px)",
            fontStyle: "italic",
            fontWeight: 600,
            color: "#f8f7f4",
            lineHeight: "1.2",
            letterSpacing: "-0.02em",
            maxWidth: "820px",
          }}>
            &ldquo;The best brands aren&apos;t the best. They&apos;re the most visible.&rdquo;
          </h2>
          <p className="fade-up delay-1" style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px",
            color: "rgba(248,247,244,0.3)",
            marginTop: "20px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}>
            — The RankHive Philosophy
          </p>
        </div>
      </section>

      {/* Values */}
      <section
        ref={valuesRef as React.RefObject<HTMLDivElement>}
        style={{ padding: "120px 24px", background: "var(--cream)" }}
      >
        <div className="max-w-7xl mx-auto">
          <p className="fade-up" style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.16em",
            color: "var(--ink-faint)",
            textTransform: "uppercase",
            marginBottom: "56px",
          }}>
            How We Work
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2px",
          }}>
            {VALUES.map((v, i) => (
              <div
                key={v.title}
                className={`fade-up card-hover delay-${i + 1}`}
                style={{
                  background: i % 2 === 0 ? "#fff" : "var(--cream-dark)",
                  border: "1px solid var(--border-light)",
                  padding: "44px 34px",
                }}
              >
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "56px",
                  fontWeight: 700,
                  color: "var(--border)",
                  lineHeight: 1,
                  marginBottom: "24px",
                }}>
                  {v.num}
                </div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "var(--ink)",
                  marginBottom: "14px",
                  lineHeight: "1.3",
                }}>
                  {v.title}
                </h3>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  color: "var(--ink-light)",
                  lineHeight: "1.8",
                }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        ref={statsRef as React.RefObject<HTMLDivElement>}
        style={{
          padding: "80px 24px",
          background: "var(--cream-dark)",
          borderTop: "1px solid var(--border-light)",
          borderBottom: "1px solid var(--border-light)",
        }}
      >
        <div className="max-w-7xl mx-auto" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "40px",
        }}>
          {STATS.map((s, i) => (
            <div key={s.l} className={`fade-up delay-${i + 1}`} style={{ textAlign: "center" }}>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(48px, 6vw, 64px)",
                fontWeight: 700,
                color: "var(--ink)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}>
                {s.n}
              </p>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--ink-faint)",
                marginTop: "10px",
              }}>
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "120px 24px", background: "var(--cream)" }}>
        <div className="max-w-7xl mx-auto" style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "40px",
        }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 700,
            color: "var(--ink)",
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
          }}>
            Let&apos;s build<br />
            <em style={{ fontStyle: "italic" }}>your name.</em>
          </h2>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <Link href="/contact" style={{
              background: "var(--ink)",
              color: "var(--cream)",
              padding: "14px 32px",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              letterSpacing: "0.04em",
              textDecoration: "none",
              borderRadius: "2px",
              display: "inline-block",
            }}>
              Start a Project
            </Link>
            <Link href="/work" style={{
              border: "1.5px solid var(--border)",
              color: "var(--ink-mid)",
              padding: "13px 32px",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              fontSize: "14px",
              textDecoration: "none",
              borderRadius: "2px",
              display: "inline-block",
            }}>
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
