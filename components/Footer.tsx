"use client";
import Link from "next/link";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0A0A0A" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {/* Top row */}
        <div
          style={{
            paddingTop: "48px",
            paddingBottom: "32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.9)",
              letterSpacing: "0.18em",
            }}>
              <span style={{ marginRight: "6px" }}>❯❯</span>RANKHIVE
            </span>
          </Link>

          {/* Nav */}
          <div style={{ display: "flex", gap: "28px", flexWrap: "wrap" }}>
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.35)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.8)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.35)"; }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Email */}
          <a
            href="mailto:hello@rankhive.com"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "13px",
              color: "rgba(255,255,255,0.45)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.9)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)"; }}
          >
            hello@rankhive.com
          </a>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.08)" }} />

        {/* Bottom row */}
        <div
          style={{
            paddingTop: "20px",
            paddingBottom: "28px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "12px",
            color: "rgba(255,255,255,0.2)",
          }}>
            © {new Date().getFullYear()} RankHive. All rights reserved.
          </p>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "12px",
            color: "rgba(255,255,255,0.2)",
            letterSpacing: "0.06em",
          }}>
            PR & MEDIA COVERAGE AGENCY
          </p>
        </div>
      </div>
    </footer>
  );
}
