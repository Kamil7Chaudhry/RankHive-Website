"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const FADE_UP = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};
const STAGGER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const VALUES = [
  {
    num: "01",
    title: "Results, not promises.",
    desc: "We are not a retainer agency that charges monthly and delivers reports. We get you placed, or we don't stop working.",
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
  { n: 200, suffix: "+", label: "Clients Featured" },
  { n: 50, suffix: "+", label: "Publications" },
  { n: 98, suffix: "%", label: "Placement Success" },
  { n: 2019, suffix: "", label: "Founded" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const started = useRef(false);
  const [val, setVal] = useState(to > 1000 ? to : 0);

  useEffect(() => {
    if (!inView || started.current || to > 1000) return;
    started.current = true;
    const steps = 55;
    const dur = 1700;
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

function AboutHero() {
  return (
    <section style={{
      paddingTop: "148px",
      paddingBottom: "100px",
      paddingLeft: "24px",
      paddingRight: "24px",
      background: "#FFFFFF",
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "80px",
          alignItems: "end",
        }}>
          <div>
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
              WHO WE ARE
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(52px, 9vw, 112px)",
                fontWeight: 900,
                color: "#0A0A0A",
                letterSpacing: "-0.03em",
                lineHeight: "0.97",
              }}
            >
              About<br />
              <em style={{ color: "rgba(10,10,10,0.3)" }}>RankHive</em>
            </motion.h1>
          </div>
          <div>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "18px",
                fontWeight: 400,
                color: "rgba(10,10,10,0.65)",
                lineHeight: "1.75",
                marginBottom: "20px",
              }}
            >
              RankHive is a PR and media coverage agency built for people who are serious about their brand.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: "15px",
                color: "rgba(10,10,10,0.4)",
                lineHeight: "1.8",
              }}
            >
              We work with founders, executives, and fast-growing brands to secure features in the world&apos;s top publications. Not vanity metrics — real editorial coverage that builds authority, drives trust, and opens doors.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} style={{ background: "#0A0A0A", padding: "80px 24px" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 5vw, 64px)",
            fontStyle: "italic",
            fontWeight: 900,
            color: "rgba(255,255,255,0.9)",
            lineHeight: "1.2",
            letterSpacing: "-0.02em",
            maxWidth: "800px",
          }}
        >
          &ldquo;The best brands aren&apos;t the best. They&apos;re the most visible.&rdquo;
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "11px",
            color: "rgba(255,255,255,0.2)",
            marginTop: "20px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          — THE RANKHIVE PHILOSOPHY
        </motion.p>
      </div>
    </section>
  );
}

function ValuesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ background: "#FFFFFF", padding: "120px 24px" }}>
      <div ref={ref} style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <motion.div variants={STAGGER} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.p variants={FADE_UP} style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.2em",
            color: "rgba(10,10,10,0.3)",
            textTransform: "uppercase",
            marginBottom: "56px",
          }}>
            HOW WE WORK
          </motion.p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1px",
            background: "rgba(10,10,10,0.06)",
          }}>
            {VALUES.map((v, i) => (
              <motion.div
                key={v.num}
                variants={FADE_UP}
                whileHover={{ y: -4, boxShadow: "0 16px 48px rgba(0,0,0,0.07)" }}
                transition={{ duration: 0.22 }}
                style={{
                  background: i % 2 === 0 ? "#FFFFFF" : "#F7F5F2",
                  padding: "48px 36px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <p style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "56px",
                  fontWeight: 900,
                  color: "rgba(10,10,10,0.06)",
                  lineHeight: 1,
                  marginBottom: "24px",
                  letterSpacing: "-0.02em",
                }}>
                  {v.num}
                </p>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#0A0A0A",
                  marginBottom: "14px",
                  lineHeight: "1.3",
                }}>
                  {v.title}
                </h3>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "14px",
                  color: "rgba(10,10,10,0.45)",
                  lineHeight: "1.8",
                }}>
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section style={{
      background: "#F7F5F2",
      padding: "80px 24px",
      borderTop: "1px solid rgba(10,10,10,0.06)",
      borderBottom: "1px solid rgba(10,10,10,0.06)",
    }}>
      <div ref={ref} style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <motion.div
          variants={STAGGER}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: "40px",
          }}
        >
          {STATS.map((s) => (
            <motion.div key={s.label} variants={FADE_UP} style={{ textAlign: "center" }}>
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(48px, 6vw, 64px)",
                fontWeight: 900,
                color: "#0A0A0A",
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}>
                <Counter to={s.n} suffix={s.suffix} />
              </p>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(10,10,10,0.3)",
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

export default function About() {
  return (
    <>
      <AboutHero />
      <QuoteBlock />
      <ValuesGrid />
      <StatsBar />

      {/* CTA */}
      <section style={{ background: "#FFFFFF", padding: "120px 24px" }}>
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "40px",
        }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 900,
            color: "#0A0A0A",
            lineHeight: "1.05",
            letterSpacing: "-0.03em",
          }}>
            Let&apos;s build<br />
            <em style={{ color: "rgba(10,10,10,0.28)" }}>your name.</em>
          </h2>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link href="/contact" style={{
                background: "#0A0A0A",
                color: "#FFFFFF",
                padding: "14px 28px",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                textDecoration: "none",
                display: "inline-block",
                borderRadius: "2px",
              }}>
                Start a Project
              </Link>
            </motion.div>
            <Link href="/work" style={{
              border: "1.5px solid rgba(10,10,10,0.12)",
              color: "rgba(10,10,10,0.6)",
              padding: "13px 28px",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              textDecoration: "none",
              display: "inline-block",
              borderRadius: "2px",
            }}>
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
