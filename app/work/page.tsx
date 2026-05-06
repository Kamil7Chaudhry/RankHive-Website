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
  visible: { transition: { staggerChildren: 0.1 } },
};

const NEW_PLACEMENTS: { client: string; pub: string; topic: string; result: string; url: string; favicon: string }[] = [
  {
    client: "Simon Lee", pub: "HubSpot Blog", topic: "Product Development Process",
    result: "Featured as a product strategy authority on HubSpot's widely-read marketing blog.",
    url: "https://blog.hubspot.com/marketing/product-development-process",
    favicon: "https://www.hubspot.com/favicon.ico",
  },
  {
    client: "Tony", pub: "Wired", topic: "Bed Frame Fix",
    result: "Placed in Wired as a home improvement expert with practical, actionable guidance.",
    url: "https://www.wired.com/",
    favicon: "https://www.wired.com/favicon.ico",
  },
  {
    client: "Cassie Fields", pub: "HubSpot Blog", topic: "Best Time for Sales Calls",
    result: "Established as a go-to sales expert in HubSpot's widely-read sales content hub.",
    url: "https://blog.hubspot.com/sales/best-time-to-make-a-sales-call",
    favicon: "https://www.hubspot.com/favicon.ico",
  },
  {
    client: "Mark Shayani", pub: "CNET", topic: "Fifth Third Bank Fine",
    result: "Placed as a consumer finance expert in CNET's personal finance coverage.",
    url: "https://www.cnet.com/personal-finance/banking/",
    favicon: "https://www.cnet.com/favicon.ico",
  },
  {
    client: "Ilia Tretiakov", pub: "HubSpot Blog", topic: "What is a Business Plan",
    result: "Featured as an entrepreneurship authority for HubSpot's global business owner audience.",
    url: "https://blog.hubspot.com/marketing/what-is-business-plan",
    favicon: "https://www.hubspot.com/favicon.ico",
  },
  {
    client: "Corey Tyner", pub: "Realtor.com", topic: "New Rules of Selling a Home",
    result: "Positioned as a leading real estate expert in Realtor.com's seller-focused content.",
    url: "https://www.realtor.com/advice/sell/",
    favicon: "https://www.realtor.com/favicon.ico",
  },
];

function NewPlacementsGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section style={{ background: "#FFFFFF", padding: "100px 24px" }}>
      <div ref={ref} style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <motion.div variants={STAGGER} initial="hidden" animate={inView ? "visible" : "hidden"}>
          <motion.p variants={FADE_UP} style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.2em",
            color: "rgba(10,10,10,0.3)",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}>
            RECENT FEATURES
          </motion.p>
          <motion.h2 variants={FADE_UP} style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 900,
            color: "#0A0A0A",
            letterSpacing: "-0.02em",
            lineHeight: "1.1",
            marginBottom: "56px",
          }}>
            Recent features.
          </motion.h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "16px",
          }}>
            {NEW_PLACEMENTS.map((p, i) => (
              <motion.a
                key={i}
                href={p.url}
                target="_blank"
                rel="noreferrer noopener"
                variants={FADE_UP}
                whileHover={{ y: -4, boxShadow: "0 20px 50px rgba(0,0,0,0.2)" }}
                transition={{ duration: 0.22 }}
                style={{
                  background: "#0A0A0A",
                  padding: "32px 28px",
                  cursor: "pointer",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                  <img
                    src={p.favicon}
                    alt=""
                    width={20}
                    height={20}
                    style={{ width: 20, height: 20, borderRadius: "3px", flexShrink: 0, objectFit: "contain" }}
                  />
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.45)",
                  }}>
                    {p.pub}
                  </span>
                </div>
                <p style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(22px, 3vw, 32px)",
                  fontWeight: 900,
                  color: "rgba(255,255,255,0.07)",
                  letterSpacing: "-0.02em",
                  lineHeight: "1.1",
                  marginBottom: "20px",
                  wordBreak: "break-word",
                }}>
                  {p.pub}
                </p>
                <span style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.5)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "9px",
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  padding: "4px 10px",
                  display: "inline-block",
                  marginBottom: "20px",
                }}>
                  {p.topic}
                </span>
                <p style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginBottom: "10px",
                  lineHeight: "1.2",
                }}>
                  {p.client}
                </p>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.4)",
                  lineHeight: "1.7",
                }}>
                  {p.result}
                </p>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "10px",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.2)",
                  marginTop: "16px",
                  letterSpacing: "0.08em",
                }}>
                  Read article ↗
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WorkHero() {
  return (
    <section style={{
      paddingTop: "148px",
      paddingBottom: "72px",
      paddingLeft: "24px",
      paddingRight: "24px",
      background: "#FFFFFF",
      borderBottom: "1px solid rgba(10,10,10,0.06)",
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          flexWrap: "wrap",
          gap: "32px",
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
              REAL CLIENTS. REAL PLACEMENTS.
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
              }}
            >
              Our Work
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "16px",
              color: "rgba(10,10,10,0.38)",
              maxWidth: "320px",
              lineHeight: "1.7",
            }}
          >
            From attorneys to venture capitalists — real people placed in real publications.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

function WorkTestimonial() {
  return (
    <section style={{ background: "#0A0A0A", padding: "100px 24px" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center" }}>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.2em",
          color: "rgba(255,255,255,0.25)",
          textTransform: "uppercase",
          marginBottom: "40px",
        }}>
          WHAT CLIENTS SAY
        </p>
        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(17px, 2.2vw, 22px)",
          fontStyle: "italic",
          fontWeight: 700,
          color: "rgba(255,255,255,0.82)",
          lineHeight: "1.8",
          marginBottom: "40px",
        }}>
          &ldquo;RankHive was responsive, professional, and diligent. I&apos;m very very impressed. The team went above and beyond my expectations to deliver impressive results. If you&apos;re thinking of working with them, I am positive you&apos;ll be pleased. Don&apos;t let this one get away.&rdquo;
        </p>
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
          color: "rgba(255,255,255,0.3)",
          marginBottom: "14px",
        }}>
          Co-Founder & M&A Attorney, SK&S Law Group
        </p>
        <div style={{ display: "flex", gap: "2px", justifyContent: "center" }}>
          {[1,2,3,4,5].map(s => (
            <span key={s} style={{ color: "#d4ac0d", fontSize: "14px" }}>★</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Work() {
  return (
    <>
      <WorkHero />
      <NewPlacementsGrid />
      <WorkTestimonial />

      {/* CTA */}
      <section style={{ background: "#F7F5F2", padding: "100px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(40px, 7vw, 80px)",
            fontWeight: 900,
            color: "#0A0A0A",
            lineHeight: "1.0",
            letterSpacing: "-0.03em",
            marginBottom: "24px",
          }}>
            Your story goes<br />
            <em style={{ color: "rgba(10,10,10,0.35)" }}>here next.</em>
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            fontSize: "15px",
            color: "rgba(10,10,10,0.4)",
            marginBottom: "40px",
          }}>
            Ready to get featured?
          </p>
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }} style={{ display: "inline-block" }}>
            <Link href="/contact" style={{
              background: "#0A0A0A",
              color: "#FFFFFF",
              padding: "14px 36px",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              fontSize: "14px",
              letterSpacing: "0.02em",
              textDecoration: "none",
              display: "inline-block",
              borderRadius: "2px",
            }}>
              Let&apos;s Talk →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
