"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

/* ─── Scroll-animation hook ─────────────────────────── */
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

/* ─── Animated counter ───────────────────────────────── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + increment, target);
            setCount(Math.floor(current));
            if (current >= target) clearInterval(timer);
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

const PUBLICATIONS = [
  "Forbes", "Business Insider", "Nasdaq", "Yahoo Finance", "MSN",
  "Inc. Magazine", "Entrepreneur", "TechCrunch", "Fast Company", "Bloomberg",
  "Fortune", "The Wall Street Journal",
];

const SERVICES = [
  {
    num: "01",
    title: "Media Placement",
    desc: "Guaranteed features in Forbes, Business Insider, Nasdaq and 50+ top-tier outlets your audience actually reads.",
    icon: "◈",
  },
  {
    num: "02",
    title: "Personal Brand PR",
    desc: "Position founders and executives as undeniable industry authorities through strategic editorial coverage.",
    icon: "◉",
  },
  {
    num: "03",
    title: "Brand PR & Launch",
    desc: "Build the media strategy that makes your launch impossible to ignore — from press release to placement.",
    icon: "◐",
  },
  {
    num: "04",
    title: "Reputation Management",
    desc: "Own your narrative. We push positive coverage and ensure your digital presence reflects the real you.",
    icon: "◎",
  },
];

const CLIENTS = [
  { name: "Thomas Codevilla", role: "Business Attorney", outlet: "Forbes", img: "/thomas-forbes.png" },
  { name: "Sara Sharp", role: "M&A Attorney", outlet: "Business Insider", img: "/sara-bi.png" },
  { name: "John Browning", role: "Financial Advisor", outlet: "MSN", img: "/john-msn.png" },
  { name: "Beard Alan", role: "CEO", outlet: "Yahoo Finance", img: "/beard-yahoo.png" },
  { name: "Skyler Fernandes", role: "Founder, VU Venture Partners", outlet: "Nasdaq", img: "/skyler-nasdaq.png" },
];

/* ─── Sections ───────────────────────────────────────── */

function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      background: "var(--cream)",
      display: "flex",
      alignItems: "center",
      padding: "0 24px",
      paddingTop: "88px",
      overflow: "hidden",
      position: "relative",
    }}>
      <div className="max-w-7xl mx-auto w-full" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "48px", alignItems: "center" }} className="lg:grid lg:grid-cols-2">
          {/* Left: text */}
          <div style={{ paddingTop: "40px", paddingBottom: "60px" }}>
            {/* Badge */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "var(--green-bg)",
              borderRadius: "100px",
              padding: "6px 14px",
              marginBottom: "32px",
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: "50%",
                background: "var(--green)",
                display: "inline-block",
                boxShadow: "0 0 0 3px rgba(45,106,79,0.2)",
              }} />
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                color: "var(--green)",
                letterSpacing: "0.04em",
              }}>
                Accepting New Clients
              </span>
            </div>

            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(42px, 6vw, 76px)",
              fontWeight: 700,
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
              color: "var(--ink)",
              marginBottom: "28px",
              maxWidth: "580px",
            }}>
              Get Featured in the<br />
              <em style={{ fontStyle: "italic", color: "var(--ink-mid)" }}>Publications That Matter.</em>
            </h1>

            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "17px",
              color: "var(--ink-light)",
              lineHeight: "1.75",
              maxWidth: "420px",
              marginBottom: "40px",
            }}>
              We place founders, executives, and brands in Forbes, Business Insider, Nasdaq, and 50+ of the world&apos;s most-read publications.
            </p>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "48px" }}>
              <Link href="/contact" style={{
                background: "var(--ink)",
                color: "var(--cream)",
                padding: "14px 30px",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                letterSpacing: "0.04em",
                textDecoration: "none",
                borderRadius: "2px",
                display: "inline-block",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#2d2a26"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--ink)"; }}
              >
                Start Today
              </Link>
              <Link href="/work" style={{
                border: "1.5px solid var(--border)",
                color: "var(--ink-mid)",
                padding: "13px 30px",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                textDecoration: "none",
                borderRadius: "2px",
                display: "inline-block",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--ink)"; (e.currentTarget as HTMLElement).style.color = "var(--ink)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--ink-mid)"; }}
              >
                See Our Work
              </Link>
            </div>

            {/* Publication pills */}
            <div>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.1em",
                color: "var(--ink-faint)",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}>
                Featured in
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["Forbes", "Business Insider", "Nasdaq", "Yahoo Finance", "MSN"].map(pub => (
                  <span key={pub} style={{
                    padding: "5px 14px",
                    border: "1px solid var(--border)",
                    borderRadius: "100px",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "var(--ink-mid)",
                    background: "rgba(255,255,255,0.5)",
                  }}>
                    {pub}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: photo collage */}
          <div
            className="hidden lg:block"
            style={{
              position: "relative",
              height: "560px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Main photo — Thomas */}
            <div style={{
              position: "absolute",
              left: "60px",
              top: "40px",
              width: "260px",
              height: "340px",
              borderRadius: "4px",
              overflow: "hidden",
              boxShadow: "0 24px 80px rgba(26,24,20,0.14)",
              border: "3px solid #fff",
              zIndex: 2,
            }}>
              <Image
                src="/thomas-forbes.png"
                alt="Thomas Codevilla — Forbes"
                fill
                style={{ objectFit: "cover" }}
              />
              <div style={{
                position: "absolute",
                bottom: 0, left: 0, right: 0,
                background: "linear-gradient(transparent, rgba(26,24,20,0.7))",
                padding: "20px 16px 14px",
              }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 700, color: "#fff", letterSpacing: "0.08em" }}>FORBES</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.8)" }}>Thomas Codevilla</p>
              </div>
            </div>

            {/* Overlapping photo — Sara */}
            <div style={{
              position: "absolute",
              right: "40px",
              top: "120px",
              width: "220px",
              height: "290px",
              borderRadius: "4px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(26,24,20,0.16)",
              border: "3px solid #fff",
              zIndex: 3,
            }}>
              <Image
                src="/sara-bi.png"
                alt="Sara Sharp — Business Insider"
                fill
                style={{ objectFit: "cover" }}
              />
              <div style={{
                position: "absolute",
                bottom: 0, left: 0, right: 0,
                background: "linear-gradient(transparent, rgba(26,24,20,0.7))",
                padding: "20px 16px 14px",
              }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 700, color: "#fff", letterSpacing: "0.08em" }}>BUSINESS INSIDER</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.8)" }}>Sara Sharp</p>
              </div>
            </div>

            {/* Floating label */}
            <div style={{
              position: "absolute",
              bottom: "80px",
              left: "30px",
              background: "#fff",
              borderRadius: "6px",
              padding: "12px 18px",
              boxShadow: "0 8px 32px rgba(26,24,20,0.1)",
              zIndex: 4,
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                background: "var(--green-bg)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontSize: "16px" }}>✓</span>
              </div>
              <div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 700, color: "var(--ink)" }}>200+ Placements</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "var(--ink-light)" }}>Top-tier publications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const doubled = [...PUBLICATIONS, ...PUBLICATIONS];
  return (
    <div style={{ background: "var(--ink)", overflow: "hidden", padding: "16px 0" }}>
      <div className="marquee-track" style={{ display: "flex", whiteSpace: "nowrap" }}>
        {doubled.map((pub, i) => (
          <span key={i} style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            fontSize: "13px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: i % 2 === 0 ? "rgba(248,247,244,0.9)" : "rgba(248,247,244,0.3)",
            padding: "0 28px",
          }}>
            {pub}
            {i % 2 === 0 && <span style={{ marginLeft: "28px", opacity: 0.3 }}>✦</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

function Stats() {
  const ref = useFadeUp() as React.RefObject<HTMLElement>;
  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        background: "#fff",
        borderBottom: "1px solid var(--border-light)",
        padding: "64px 24px",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "40px",
        }}>
          {[
            { target: 200, suffix: "+", label: "Clients Featured" },
            { target: 50, suffix: "+", label: "Publications" },
            { target: 98, suffix: "%", label: "Success Rate" },
            { target: 24, suffix: "H", label: "Response Time" },
          ].map((s, i) => (
            <div key={s.label} className={`fade-up delay-${i + 1}`} style={{ textAlign: "center" }}>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(48px, 6vw, 64px)",
                fontWeight: 700,
                color: "var(--ink)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}>
                <Counter target={s.target} suffix={s.suffix} />
              </p>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--ink-faint)",
                marginTop: "10px",
              }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const ref = useFadeUp() as React.RefObject<HTMLElement>;
  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ padding: "100px 24px", background: "var(--cream)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div style={{ marginBottom: "64px" }}>
          <p className="fade-up" style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.16em",
            color: "var(--ink-faint)",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}>
            What We Do
          </p>
          <h2 className="fade-up delay-1" style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 700,
            color: "var(--ink)",
            letterSpacing: "-0.02em",
            lineHeight: "1.15",
            maxWidth: "480px",
          }}>
            Our Services
          </h2>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "24px",
        }}>
          {SERVICES.map((s, i) => (
            <div
              key={s.num}
              className={`fade-up card-hover delay-${i + 1}`}
              style={{
                background: "#fff",
                border: "1px solid var(--border-light)",
                borderRadius: "6px",
                padding: "36px 30px",
              }}
            >
              <div style={{
                fontSize: "24px",
                marginBottom: "20px",
                color: "var(--ink-faint)",
              }}>
                {s.icon}
              </div>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.1em",
                color: "var(--ink-faint)",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}>
                {s.num}
              </p>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "22px",
                fontWeight: 600,
                color: "var(--ink)",
                marginBottom: "14px",
                lineHeight: "1.3",
              }}>
                {s.title}
              </h3>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                color: "var(--ink-light)",
                lineHeight: "1.75",
              }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="fade-up" style={{ marginTop: "40px", textAlign: "right" }}>
          <Link href="/services" style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            color: "var(--ink-mid)",
            textDecoration: "none",
            borderBottom: "1px solid var(--border)",
            paddingBottom: "3px",
            transition: "color 0.2s",
          }}>
            View all services →
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeaturedWork() {
  const ref = useFadeUp() as React.RefObject<HTMLElement>;
  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ padding: "100px 24px", background: "var(--cream-dark)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div style={{ marginBottom: "56px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <p className="fade-up" style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.16em",
              color: "var(--ink-faint)",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}>
              Real Clients. Real Placements.
            </p>
            <h2 className="fade-up delay-1" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 700,
              color: "var(--ink)",
              letterSpacing: "-0.02em",
              lineHeight: "1.15",
            }}>
              Featured Work
            </h2>
          </div>
          <Link className="fade-up delay-2" href="/work" style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px",
            fontWeight: 500,
            color: "var(--ink-light)",
            textDecoration: "none",
            borderBottom: "1px solid var(--border)",
            paddingBottom: "3px",
          }}>
            See all case studies →
          </Link>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px",
        }}>
          {CLIENTS.map((c, i) => (
            <div
              key={c.name}
              className={`fade-up card-hover delay-${i + 1}`}
              style={{
                background: "#fff",
                borderRadius: "6px",
                overflow: "hidden",
                border: "1px solid var(--border-light)",
              }}
            >
              <div style={{ position: "relative", height: "260px" }}>
                <Image
                  src={c.img}
                  alt={`${c.name} — ${c.outlet}`}
                  fill
                  style={{ objectFit: "cover" }}
                />
                {/* Outlet badge */}
                <div style={{
                  position: "absolute",
                  top: "14px",
                  right: "14px",
                  background: "#fff",
                  borderRadius: "100px",
                  padding: "4px 10px",
                  boxShadow: "0 2px 12px rgba(26,24,20,0.12)",
                }}>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "10px",
                    fontWeight: 700,
                    color: "var(--ink)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}>
                    {c.outlet}
                  </span>
                </div>
              </div>
              <div style={{ padding: "18px 20px" }}>
                <p style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "17px",
                  fontWeight: 600,
                  color: "var(--ink)",
                  marginBottom: "4px",
                }}>
                  {c.name}
                </p>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "12px",
                  color: "var(--ink-faint)",
                }}>
                  {c.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  const ref = useFadeUp() as React.RefObject<HTMLElement>;
  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ background: "#1a1814", padding: "100px 24px" }}
    >
      <div className="max-w-7xl mx-auto">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "80px",
          alignItems: "center",
        }}>
          {/* Quote */}
          <div>
            <p className="fade-up" style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.16em",
              color: "rgba(248,247,244,0.3)",
              textTransform: "uppercase",
              marginBottom: "32px",
            }}>
              Client Testimonial
            </p>
            <p className="fade-up delay-1" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(18px, 2.2vw, 24px)",
              fontStyle: "italic",
              color: "rgba(248,247,244,0.9)",
              lineHeight: "1.8",
              marginBottom: "40px",
            }}>
              &ldquo;RankHive was responsive, professional, and diligent. I&apos;m very very impressed. The team went above and beyond my expectations to deliver impressive results. If you&apos;re thinking of working with them, I am positive you&apos;ll be pleased. Don&apos;t let this one get away.&rdquo;
            </p>
            <div className="fade-up delay-2" style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{
                width: 52, height: 52, borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid rgba(248,247,244,0.2)",
                flexShrink: 0,
                position: "relative",
              }}>
                <Image
                  src="/sara-testimonial.png"
                  alt="Sara Sharp"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <p style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#f8f7f4",
                  marginBottom: "3px",
                }}>
                  Sara Sharp
                </p>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  color: "rgba(248,247,244,0.45)",
                }}>
                  Co-Founder & M&A Attorney, SK&S Law Group
                </p>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "12px",
                  color: "rgba(248,247,244,0.3)",
                  marginTop: "2px",
                }}>
                  Featured in Business Insider
                </p>
              </div>
            </div>
            <div className="fade-up delay-3" style={{ display: "flex", gap: "3px", marginTop: "20px" }}>
              {[1,2,3,4,5].map(s => (
                <span key={s} style={{ color: "#d4ac0d", fontSize: "16px" }}>★</span>
              ))}
            </div>
          </div>

          {/* Featured photo */}
          <div className="fade-up delay-2" style={{
            position: "relative",
            height: "420px",
            borderRadius: "6px",
            overflow: "hidden",
            border: "1px solid rgba(248,247,244,0.06)",
          }}>
            <Image
              src="/sara-bi.png"
              alt="Sara Sharp"
              fill
              style={{ objectFit: "cover", opacity: 0.85 }}
            />
            <div style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(26,24,20,0.6) 0%, transparent 60%)",
            }} />
            <div style={{
              position: "absolute",
              bottom: "24px",
              left: "24px",
              right: "24px",
            }}>
              <span style={{
                display: "inline-block",
                background: "rgba(248,247,244,0.15)",
                border: "1px solid rgba(248,247,244,0.2)",
                backdropFilter: "blur(8px)",
                borderRadius: "100px",
                padding: "6px 14px",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                color: "#f8f7f4",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}>
                Business Insider
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const ref = useFadeUp() as React.RefObject<HTMLElement>;
  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{
        padding: "120px 24px",
        background: "var(--cream)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative line */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "600px",
        height: "600px",
        borderRadius: "50%",
        border: "1px solid var(--border-light)",
        pointerEvents: "none",
      }} />
      <div className="max-w-7xl mx-auto" style={{ position: "relative" }}>
        <p className="fade-up" style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.16em",
          color: "var(--ink-faint)",
          textTransform: "uppercase",
          marginBottom: "24px",
        }}>
          Ready to be seen?
        </p>
        <h2 className="fade-up delay-1" style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(40px, 7vw, 80px)",
          fontWeight: 700,
          color: "var(--ink)",
          lineHeight: "1.1",
          letterSpacing: "-0.02em",
          marginBottom: "28px",
        }}>
          Your Name.<br />
          <em style={{ fontStyle: "italic", color: "var(--ink-mid)" }}>Their Front Page.</em>
        </h2>
        <p className="fade-up delay-2" style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "17px",
          color: "var(--ink-light)",
          maxWidth: "440px",
          margin: "0 auto 44px",
          lineHeight: "1.75",
        }}>
          One conversation is all it takes. Let&apos;s figure out exactly where you should be featured — and make it happen.
        </p>
        <Link
          className="fade-up delay-3"
          href="/contact"
          style={{
            display: "inline-block",
            background: "var(--ink)",
            color: "var(--cream)",
            padding: "15px 40px",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            fontSize: "14px",
            letterSpacing: "0.06em",
            textDecoration: "none",
            borderRadius: "2px",
            transition: "background 0.2s, transform 0.2s",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#2d2a26"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--ink)"; }}
        >
          Book a Strategy Call
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <Services />
      <FeaturedWork />
      <Testimonial />
      <CTA />
    </>
  );
}
