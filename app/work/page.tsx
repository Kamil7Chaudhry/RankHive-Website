"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const FADE_UP = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};
const STAGGER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const CASES = [
  {
    num: "01",
    client: "Thomas Codevilla",
    role: "Business Attorney & Co-Founder",
    company: "SK&S Law Group",
    outlet: "Forbes",
    img: "/thomas-forbes.png",
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
    result: "Nasdaq feature positioned Skyler as a leading VC voice, driving LP interest and deal flow while building his authority in the venture capital ecosystem.",
    quote: "Being on Nasdaq opened doors I didn't even know existed.",
  },
];

const NEW_PLACEMENTS: { client: string; pub: string; topic: string; result: string; url: string }[] = [
  {
    client: "Simon Lee", pub: "HubSpot Blog", topic: "Product Development Process",
    result: "Featured as a product strategy authority on HubSpot's widely-read marketing blog.",
    url: "https://blog.hubspot.com/marketing/product-development-process",
  },
  {
    client: "Simon Lee", pub: "GoDaddy", topic: "Social Media Strategy",
    result: "Contributed strategic insights on brand visibility through social platforms.",
    url: "https://www.godaddy.com/resources/skills/social-media-for-business-success",
  },
  {
    client: "Simon Lee", pub: "GoodFirms", topic: "Python Tools for VS Code",
    result: "Cited as a technical authority on developer tooling and the Python ecosystem.",
    url: "https://www.goodfirms.co/blog/python-tools-for-visual-studio-improving-development-process",
  },
  {
    client: "Tony", pub: "New Home Source", topic: "Tariffs & New Home Prices",
    result: "Quoted as an expert on how tariff policy affects new-construction housing costs.",
    url: "https://www.newhomesource.com/news/policy-industry/how-tariffs-may-affect-home-prices-in-2025/",
  },
  {
    client: "Tony", pub: "House Digest", topic: "Patio Furniture Trends",
    result: "Featured for expertise on outdoor living trends and what's going out of style.",
    url: "https://www.housedigest.com/1882257/outdated-patio-furniture-trends/",
  },
  {
    client: "Tony", pub: "Wired", topic: "Bed Frame Fix",
    result: "Placed in Wired as a home improvement expert with practical, actionable guidance.",
    url: "https://www.wired.com/",
  },
  {
    client: "Tony", pub: "House Beautiful", topic: "Paint Fumes Safety",
    result: "Quoted on indoor air quality and safe practices for home renovation projects.",
    url: "https://www.housebeautiful.com/",
  },
  {
    client: "Cassie Fields", pub: "HubSpot Blog", topic: "Best Time for Sales Calls",
    result: "Established as a go-to sales expert in HubSpot's widely-read sales content hub.",
    url: "https://blog.hubspot.com/sales/best-time-to-make-a-sales-call",
  },
  {
    client: "Mark Shayani", pub: "CNET", topic: "Fifth Third Bank Fine",
    result: "Placed as a consumer finance expert in CNET's personal finance coverage.",
    url: "https://www.cnet.com/personal-finance/banking/",
  },
  {
    client: "Ilia Tretiakov", pub: "HubSpot Blog", topic: "What is a Business Plan",
    result: "Featured as an entrepreneurship authority for HubSpot's global business owner audience.",
    url: "https://blog.hubspot.com/marketing/what-is-business-plan",
  },
  {
    client: "Corey Tyner", pub: "Realtor.com", topic: "New Rules of Selling a Home",
    result: "Positioned as a leading real estate expert in Realtor.com's seller-focused content.",
    url: "https://www.realtor.com/advice/sell/",
  },
];

function CaseStudy({ c, i }: { c: typeof CASES[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = i % 2 === 0;

  return (
    <div
      ref={ref}
      style={{
        background: isEven ? "#FFFFFF" : "#F7F5F2",
        padding: "100px 24px",
        borderBottom: "1px solid rgba(10,10,10,0.05)",
      }}
    >
      <motion.div
        style={{ maxWidth: "1280px", margin: "0 auto" }}
        variants={STAGGER}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "72px",
          alignItems: "center",
        }}>
          {/* Image side */}
          <motion.div
            variants={FADE_UP}
            style={{ order: isEven ? 0 : 1 }}
          >
            <div style={{
              position: "relative",
              height: "500px",
              overflow: "hidden",
              boxShadow: "0 24px 80px rgba(0,0,0,0.1)",
            }}>
              <Image
                src={c.img}
                alt={`${c.client} — ${c.outlet}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div style={{
                position: "absolute",
                top: "20px",
                left: "20px",
                background: "#FFFFFF",
                padding: "6px 14px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}>
                <span style={{
                  width: 5, height: 5, borderRadius: "50%",
                  background: "#2d7a4f",
                  display: "inline-block",
                }} />
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "10px",
                  fontWeight: 700,
                  color: "#0A0A0A",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}>
                  {c.outlet}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <div style={{ order: isEven ? 1 : 0 }}>
            <motion.p variants={FADE_UP} style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.2em",
              color: "rgba(10,10,10,0.3)",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}>
              Case Study {c.num}
            </motion.p>

            <motion.h2 variants={FADE_UP} style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(34px, 4.5vw, 56px)",
              fontWeight: 900,
              color: "#0A0A0A",
              letterSpacing: "-0.02em",
              lineHeight: "1.1",
              marginBottom: "10px",
            }}>
              {c.client}
            </motion.h2>

            <motion.p variants={FADE_UP} style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              color: "rgba(10,10,10,0.4)",
              marginBottom: "4px",
            }}>
              {c.role}
            </motion.p>
            <motion.p variants={FADE_UP} style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "13px",
              color: "rgba(10,10,10,0.28)",
              marginBottom: "28px",
            }}>
              {c.company}
            </motion.p>

            <motion.div variants={FADE_UP} style={{
              width: "32px",
              height: "1px",
              background: "#0A0A0A",
              marginBottom: "24px",
            }} />

            <motion.div variants={FADE_UP} style={{ marginBottom: "28px" }}>
              <span style={{
                background: "#0A0A0A",
                color: "#fff",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "9px",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: "5px 12px",
                display: "inline-block",
              }}>
                Featured in {c.outlet}
              </span>
            </motion.div>

            <motion.p variants={FADE_UP} style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              fontSize: "15px",
              color: "rgba(10,10,10,0.5)",
              lineHeight: "1.8",
              marginBottom: "28px",
            }}>
              {c.result}
            </motion.p>

            <motion.p variants={FADE_UP} style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "17px",
              fontStyle: "italic",
              fontWeight: 700,
              color: "rgba(10,10,10,0.7)",
              lineHeight: "1.65",
              borderLeft: "2px solid rgba(10,10,10,0.1)",
              paddingLeft: "16px",
            }}>
              &ldquo;{c.quote}&rdquo;
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

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
            MORE PLACEMENTS
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
                <p style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(22px, 3vw, 32px)",
                  fontWeight: 900,
                  color: "rgba(255,255,255,0.12)",
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
      {CASES.map((c, i) => (
        <CaseStudy key={c.num} c={c} i={i} />
      ))}
      <WorkTestimonial />
      <NewPlacementsGrid />

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
