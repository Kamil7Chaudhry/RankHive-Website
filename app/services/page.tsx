"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const FADE_UP = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};
const STAGGER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const SERVICES = [
  {
    num: "01",
    title: "Media Placement",
    tagline: "Your story in the publications that matter.",
    bg: "#FFFFFF",
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
    bg: "#F7F5F2",
    desc: "Strategic editorial coverage that positions you as the go-to expert in your space. We build the kind of personal brand that makes people say, 'I've seen you everywhere.'",
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
    title: "Launch & Brand PR",
    tagline: "Launch loud. Land everywhere.",
    bg: "#FFFFFF",
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
    bg: "#F7F5F2",
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

function ServiceBlock({ s, i }: { s: typeof SERVICES[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} style={{ background: s.bg, padding: "80px 24px", borderBottom: "1px solid rgba(10,10,10,0.06)" }}>
      <motion.div
        style={{ maxWidth: "1280px", margin: "0 auto" }}
        variants={STAGGER}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "60px",
          alignItems: "start",
        }}>
          {/* Left */}
          <div>
            <motion.div variants={FADE_UP} style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "16px" }}>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                fontWeight: 400,
                color: "rgba(10,10,10,0.25)",
                letterSpacing: "0.1em",
              }}>
                {s.num}
              </span>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(32px, 4.5vw, 52px)",
                fontWeight: 900,
                color: "#0A0A0A",
                letterSpacing: "-0.02em",
                lineHeight: "1.1",
              }}>
                {s.title}
              </h2>
            </motion.div>
            <motion.p variants={FADE_UP} style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.14em",
              color: "rgba(10,10,10,0.3)",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}>
              {s.tagline}
            </motion.p>
            <motion.p variants={FADE_UP} style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "15.5px",
              color: "rgba(10,10,10,0.5)",
              lineHeight: "1.8",
              maxWidth: "420px",
            }}>
              {s.desc}
            </motion.p>
          </div>

          {/* Right */}
          <motion.div variants={FADE_UP}>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.18em",
              color: "rgba(10,10,10,0.3)",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}>
              INCLUDES
            </p>
            <div>
              {s.includes.map((item) => (
                <div
                  key={item}
                  style={{
                    padding: "14px 0",
                    borderBottom: "1px solid rgba(10,10,10,0.06)",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                  }}
                >
                  <span style={{
                    width: 5, height: 5, borderRadius: "50%",
                    background: "#0A0A0A",
                    flexShrink: 0,
                    display: "inline-block",
                  }} />
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    color: "rgba(10,10,10,0.6)",
                  }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

function ServicesHero() {
  return (
    <section style={{
      paddingTop: "148px",
      paddingBottom: "80px",
      paddingLeft: "24px",
      paddingRight: "24px",
      background: "#FFFFFF",
      borderBottom: "1px solid rgba(10,10,10,0.06)",
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
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
            marginBottom: "24px",
          }}
        >
          WHAT WE DO
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(48px, 8vw, 96px)",
            fontWeight: 900,
            color: "#0A0A0A",
            letterSpacing: "-0.03em",
            lineHeight: "1.0",
            marginBottom: "28px",
          }}
        >
          What We Do
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            fontSize: "17px",
            color: "rgba(10,10,10,0.4)",
            maxWidth: "480px",
            lineHeight: "1.7",
          }}
        >
          Every service we offer has one goal: get you in front of the right people, in the right publications, at the right time.
        </motion.p>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <>
      <ServicesHero />
      {SERVICES.map((s, i) => (
        <ServiceBlock key={s.num} s={s} i={i} />
      ))}

      {/* CTA */}
      <section style={{ background: "#0A0A0A", padding: "100px 24px" }}>
        <div style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "40px",
        }}>
          <div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 900,
              color: "#FFFFFF",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
              marginBottom: "14px",
            }}>
              Not sure where to start?
            </h2>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "15px",
              color: "rgba(255,255,255,0.4)",
              maxWidth: "360px",
              lineHeight: "1.7",
            }}>
              We&apos;ll tell you exactly which service fits your goals. No commitment required.
            </p>
          </div>
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <Link href="/contact" style={{
              background: "#FFFFFF",
              color: "#0A0A0A",
              padding: "14px 32px",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              fontSize: "14px",
              letterSpacing: "0.02em",
              textDecoration: "none",
              display: "inline-block",
              borderRadius: "2px",
              whiteSpace: "nowrap",
            }}>
              Talk to Us →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
