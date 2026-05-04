"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#000", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
                <path d="M2 4 L11 11 L2 18" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="square"/>
                <path d="M9 4 L18 11 L9 18" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="square" opacity="0.55"/>
              </svg>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "0.18em" }}>
                RANKHIVE
              </span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", lineHeight: "1.8", maxWidth: "240px" }}>
              We get founders, executives, and brands featured in the world&apos;s top publications.
            </p>
          </div>

          {/* Links */}
          <div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "11px", letterSpacing: "0.15em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", marginBottom: "20px" }}>Navigation</p>
            <div className="flex flex-col gap-3">
              {["/services", "/about", "/work", "/contact"].map((href) => (
                <Link
                  key={href}
                  href={href}
                  style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", textDecoration: "none", textTransform: "capitalize", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                >
                  {href.replace("/", "")}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: "11px", letterSpacing: "0.15em", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", marginBottom: "20px" }}>Connect</p>
            <div className="flex flex-col gap-3">
              <a href="https://www.linkedin.com/company/rankhive" target="_blank" rel="noreferrer"
                style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}>
                LinkedIn
              </a>
              <a href="mailto:hello@rankhive.com"
                style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}>
                hello@rankhive.com
              </a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "12px" }}>
            © {new Date().getFullYear()} RankHive. All rights reserved.
          </p>
          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "12px" }}>
            PR & Media Coverage Agency
          </p>
        </div>
      </div>
    </footer>
  );
}
