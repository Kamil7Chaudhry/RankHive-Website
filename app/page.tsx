"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

/* ─── Shared animation variants ─────────────────────── */
const FADE_UP = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};
const STAGGER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ─── Animated counter ───────────────────────────────── */
function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const steps = 60;
    const dur = 1800;
    let i = 0;
    const tick = setInterval(() => {
      i++;
      setVal(Math.round((to * i) / steps));
      if (i >= steps) clearInterval(tick);
    }, dur / steps);
    return () => clearInterval(tick);
  }, [inView, to]);

  return <span ref={ref}>{val}{suffix}</span>;
}

/* ─── Publication ticker ─────────────────────────────── */
const PUBS = [
  "Forbes", "Business Insider", "Nasdaq", "Yahoo Finance",
  "MSN", "Inc. Magazine", "Entrepreneur", "TechCrunch",
  "Fast Company", "Bloomberg", "Fortune", "The Wall Street Journal",
];

function Ticker() {
  const doubled = [...PUBS, ...PUBS];
  const [paused, setPaused] = useState(false);

  return (
    <div
      style={{ background: "#0A0A0A", overflow: "hidden", padding: "14px 0" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        style={{ display: "flex", whiteSpace: "nowrap", width: "max-content" }}
        animate={{ x: paused ? undefined : ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((pub, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: "11px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: i % 3 === 0 ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.25)",
              padding: "0 24px",
              userSelect: "none",
            }}
          >
            {pub}
            {i % 3 === 0 && <span style={{ marginLeft: "24px", opacity: 0.3 }}>✦</span>}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── SERVICE CARDS data ─────────────────────────────── */
const SERVICES = [
  {
    num: "01",
    title: "Media Placement",
    desc: "Guaranteed features in Forbes, Inc., Entrepreneur and 50+ outlets your audience actually reads.",
  },
  {
    num: "02",
    title: "Personal Brand PR",
    desc: "Position yourself as the authority your industry can't ignore — editorially, strategically.",
  },
  {
    num: "03",
    title: "Launch & Brand PR",
    desc: "Make your launch impossible to overlook. From press release to major placement.",
  },
  {
    num: "04",
    title: "Reputation Management",
    desc: "Own what people find when they search your name. We make the narrative yours.",
  },
];

/* ─── PUBLICATION logos ──────────────────────────────── */
const PUB_LOGOS: { name: string; serif?: boolean; italic?: boolean; weight: number; tracking?: string }[] = [
  { name: "Forbes",           serif: true,  italic: true,  weight: 900 },
  { name: "Business Insider", serif: false, italic: false, weight: 700 },
  { name: "Bloomberg",        serif: false, italic: false, weight: 500, tracking: "0.06em" },
  { name: "Nasdaq",           serif: false, italic: false, weight: 600, tracking: "0.04em" },
  { name: "Yahoo Finance",    serif: false, italic: false, weight: 400 },
  { name: "MSN",              serif: false, italic: false, weight: 700, tracking: "0.1em" },
  { name: "Inc.",             serif: true,  italic: true,  weight: 900 },
  { name: "Entrepreneur",     serif: false, italic: false, weight: 500 },
];

/* ─── HERO SECTION ───────────────────────────────────── */
function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      background: "#FFFFFF",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "120px 24px 80px",
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", width: "100%" }}>
        {/* Top label row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "48px", flexWrap: "wrap", gap: "12px" }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              color: "rgba(10,10,10,0.35)",
              textTransform: "uppercase",
            }}
          >
            PR & MEDIA COVERAGE AGENCY
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ display: "flex", alignItems: "center", gap: "7px" }}
          >
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{
                width: 7, height: 7, borderRadius: "50%",
                background: "#2d7a4f", display: "inline-block",
                boxShadow: "0 0 0 3px rgba(45,122,79,0.18)",
              }}
            />
            <span style={{
              fontFamily: "'DM Sans', sans-serif", fontSize: "11px",
              fontWeight: 500, color: "#2d7a4f", letterSpacing: "0.04em",
            }}>
              Accepting new clients
            </span>
          </motion.div>
        </div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(56px, 9vw, 120px)",
            fontWeight: 900, lineHeight: "0.96",
            letterSpacing: "-0.03em", color: "#0A0A0A",
            marginBottom: "28px", maxWidth: "900px",
          }}
        >
          We Put You<br />
          On The{" "}<em style={{ fontStyle: "italic" }}>Pages</em><br />
          That Matter.
        </motion.h1>

        {/* Sub-line */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          style={{
            fontFamily: "'DM Sans', sans-serif", fontWeight: 300,
            fontSize: "16px", color: "rgba(10,10,10,0.42)",
            letterSpacing: "0.01em", marginBottom: "40px", lineHeight: "1.5",
          }}
        >
          Forbes. Business Insider. Nasdaq. Yahoo Finance. MSN. And 50 more.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
        >
          <motion.div whileHover={{ y: -2, boxShadow: "0 12px 32px rgba(10,10,10,0.15)" }} transition={{ duration: 0.2 }}>
            <Link href="/contact" style={{
              background: "#0A0A0A", color: "#fff", padding: "14px 28px",
              fontFamily: "'DM Sans', sans-serif", fontWeight: 500,
              fontSize: "14px", letterSpacing: "0.02em",
              textDecoration: "none", display: "inline-block", borderRadius: "2px",
            }}>
              Start Today
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <Link href="/work" style={{
              border: "1.5px solid rgba(10,10,10,0.15)", color: "#0A0A0A",
              padding: "13px 28px", fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400, fontSize: "14px", textDecoration: "none",
              display: "inline-block", borderRadius: "2px", transition: "border-color 0.2s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(10,10,10,0.5)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(10,10,10,0.15)"; }}
            >
              See Our Work
            </Link>
          </motion.div>
        </motion.div>

        {/* Publication logos strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          style={{
            marginTop: "72px",
            paddingTop: "40px",
            borderTop: "1px solid rgba(10,10,10,0.07)",
          }}
        >
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "9px", fontWeight: 600,
            letterSpacing: "0.22em", color: "rgba(10,10,10,0.22)",
            textTransform: "uppercase", marginBottom: "24px",
          }}>
            As Seen In
          </p>
          <div style={{
            display: "flex", flexWrap: "wrap",
            gap: "32px 48px", alignItems: "center",
          }}>
            {PUB_LOGOS.map((p) => (
              <span
                key={p.name}
                style={{
                  fontFamily: p.serif ? "'Playfair Display', serif" : "'DM Sans', sans-serif",
                  fontStyle: p.italic ? "italic" : "normal",
                  fontWeight: p.weight,
                  fontSize: p.serif ? "20px" : "15px",
                  letterSpacing: p.tracking ?? "0",
                  color: "rgba(10,10,10,0.2)",
                  transition: "color 0.25s",
                  cursor: "default",
                  userSelect: "none",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "rgba(10,10,10,0.55)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(10,10,10,0.2)"; }}
              >
                {p.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── STATS SECTION ──────────────────────────────────── */
function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const stats = [
    { n: 200, suffix: "+", label: "Clients Featured" },
    { n: 50, suffix: "+", label: "Publications" },
    { n: 98, suffix: "%", label: "Success Rate" },
    { n: 24, suffix: "H", label: "Response Time" },
  ];

  return (
    <section style={{ background: "#FFFFFF", padding: "72px 24px", borderTop: "1px solid rgba(10,10,10,0.06)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <motion.div
          ref={ref}
          variants={STAGGER}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "40px",
          }}
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={FADE_UP} style={{ textAlign: "center" }}>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(56px, 7vw, 72px)",
                fontWeight: 900,
                color: "#0A0A0A",
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}>
                {inView ? <Counter to={s.n} suffix={s.suffix} /> : `0${s.suffix}`}
              </p>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(10,10,10,0.35)",
                marginTop: "10px",
              }}>
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── SERVICES SECTION ───────────────────────────────── */
function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ background: "#F7F5F2", padding: "100px 24px" }}>
      <div ref={ref} style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <motion.div variants={STAGGER} initial="hidden" animate={inView ? "visible" : "hidden"}>
          {/* Header */}
          <motion.p variants={FADE_UP} style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.2em",
            color: "rgba(10,10,10,0.35)",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}>
            WHAT WE DO
          </motion.p>
          <motion.h2 variants={FADE_UP} style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 900,
            color: "#0A0A0A",
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
            maxWidth: "600px",
            marginBottom: "60px",
          }}>
            Every tool you need to own your industry&apos;s narrative.
          </motion.h2>

          {/* Cards grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "16px",
          }}>
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.num}
                variants={FADE_UP}
                whileHover={{ y: -6, boxShadow: "0 24px 60px rgba(0,0,0,0.09)" }}
                transition={{ duration: 0.25 }}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(10,10,10,0.08)",
                  padding: "40px 32px",
                  cursor: "default",
                }}
              >
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "rgba(10,10,10,0.22)",
                  letterSpacing: "0.1em",
                  marginBottom: "28px",
                }}>
                  {s.num}
                </p>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "#0A0A0A",
                  marginBottom: "16px",
                  lineHeight: "1.2",
                  letterSpacing: "-0.01em",
                }}>
                  {s.title}
                </h3>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "14.5px",
                  color: "rgba(10,10,10,0.5)",
                  lineHeight: "1.7",
                }}>
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={FADE_UP} style={{ marginTop: "40px", textAlign: "right" }}>
            <Link href="/services" style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "13px",
              fontWeight: 400,
              color: "rgba(10,10,10,0.4)",
              textDecoration: "none",
              borderBottom: "1px solid rgba(10,10,10,0.15)",
              paddingBottom: "2px",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#0A0A0A"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(10,10,10,0.4)"; }}
            >
              View all services →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIAL SECTION ────────────────────────────── */
function Testimonial() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ background: "#0A0A0A", padding: "100px 24px" }}>
      <div ref={ref} style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <motion.div
          variants={STAGGER}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "80px",
            alignItems: "center",
          }}
        >
          {/* Photo */}
          <motion.div
            variants={FADE_UP}
            style={{
              position: "relative",
              height: "480px",
              overflow: "hidden",
            }}
          >
            <img src="/sara-bi.png" alt="Sara Sharp" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
            <div style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(ellipse at center, transparent 40%, rgba(10,10,10,0.35) 100%)",
            }} />
          </motion.div>

          {/* Quote */}
          <div>
            <motion.div variants={FADE_UP}>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(72px, 9vw, 120px)",
                fontWeight: 900,
                color: "rgba(255,255,255,0.07)",
                lineHeight: 0.8,
                marginBottom: "20px",
                userSelect: "none",
              }}>
                &ldquo;
              </p>
            </motion.div>
            <motion.blockquote variants={FADE_UP} style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(17px, 2.2vw, 22px)",
              fontStyle: "italic",
              fontWeight: 700,
              color: "rgba(255,255,255,0.88)",
              lineHeight: "1.75",
              marginBottom: "40px",
              letterSpacing: "-0.01em",
            }}>
              RankHive was responsive, professional, and diligent. I&apos;m very very impressed. The team went above and beyond my expectations to deliver impressive results. If you&apos;re thinking of working with them, I am positive you&apos;ll be pleased. Don&apos;t let this one get away.
            </motion.blockquote>

            <motion.div variants={FADE_UP}>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "20px",
                fontWeight: 700,
                color: "#FFFFFF",
                marginBottom: "4px",
              }}>
                Sara Sharp
              </p>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                fontWeight: 300,
                color: "rgba(255,255,255,0.35)",
                marginBottom: "16px",
              }}>
                Co-Founder & M&A Attorney, SK&S Law Group
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                <div style={{ display: "flex", gap: "2px" }}>
                  {[1,2,3,4,5].map(s => (
                    <span key={s} style={{ color: "#d4ac0d", fontSize: "14px" }}>★</span>
                  ))}
                </div>
                <span style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.55)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "4px 10px",
                  display: "inline-block",
                }}>
                  Featured in Business Insider
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── FINAL CTA SECTION ──────────────────────────────── */
function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ background: "#F7F5F2", padding: "120px 24px", textAlign: "center" }}>
      <div ref={ref} style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <motion.div variants={STAGGER} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.p variants={FADE_UP} style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.2em",
            color: "rgba(10,10,10,0.3)",
            textTransform: "uppercase",
            marginBottom: "32px",
          }}>
            READY TO BE SEEN?
          </motion.p>
          <motion.h2 variants={FADE_UP} style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(52px, 9vw, 108px)",
            fontWeight: 900,
            lineHeight: "0.95",
            letterSpacing: "-0.03em",
            color: "#0A0A0A",
            marginBottom: "32px",
          }}>
            Your name.<br />
            <em style={{ color: "rgba(10,10,10,0.35)" }}>Their front page.</em>
          </motion.h2>
          <motion.p variants={FADE_UP} style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            fontSize: "16px",
            color: "rgba(10,10,10,0.4)",
            marginBottom: "48px",
          }}>
            One conversation. Real results.
          </motion.p>
          <motion.div variants={FADE_UP}>
            <motion.div
              whileHover={{ y: -3, boxShadow: "0 16px 40px rgba(10,10,10,0.15)" }}
              transition={{ duration: 0.2 }}
              style={{ display: "inline-block" }}
            >
              <Link
                href="/contact"
                style={{
                  background: "#0A0A0A",
                  color: "#fff",
                  padding: "16px 40px",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: "15px",
                  letterSpacing: "0.02em",
                  textDecoration: "none",
                  display: "inline-block",
                  borderRadius: "2px",
                }}
              >
                Book a Strategy Call →
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── PAGE EXPORT ────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Stats />
      <ServicesSection />
      <Testimonial />
      <FinalCTA />
    </>
  );
}
