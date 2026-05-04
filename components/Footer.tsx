"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#1a1814", color: "#f8f7f4" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <svg width="18" height="18" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path d="M2 4L11 11L2 18" stroke="#f8f7f4" strokeWidth="2.5" fill="none" strokeLinecap="square"/>
                <path d="M9 4L18 11L9 18" stroke="#f8f7f4" strokeWidth="2.5" fill="none" strokeLinecap="square" opacity="0.4"/>
              </svg>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}>
                RANKHIVE
              </span>
            </div>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              lineHeight: "1.8",
              color: "rgba(248,247,244,0.45)",
              maxWidth: "230px",
            }}>
              We get founders, executives, and brands featured in the world&apos;s top publications.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: "11px",
              letterSpacing: "0.16em",
              color: "rgba(248,247,244,0.3)",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}>
              Navigation
            </p>
            <div className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/work", label: "Work" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "14px",
                    color: "rgba(248,247,244,0.5)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#f8f7f4"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(248,247,244,0.5)"; }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 600,
              fontSize: "11px",
              letterSpacing: "0.16em",
              color: "rgba(248,247,244,0.3)",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}>
              Connect
            </p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:hello@rankhive.com"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  color: "rgba(248,247,244,0.6)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#f8f7f4"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(248,247,244,0.6)"; }}
              >
                hello@rankhive.com
              </a>
              <a
                href="https://www.linkedin.com/company/rankhive"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  color: "rgba(248,247,244,0.6)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#f8f7f4"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(248,247,244,0.6)"; }}
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: "1px solid rgba(248,247,244,0.08)",
          paddingTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "rgba(248,247,244,0.2)" }}>
            © {new Date().getFullYear()} RankHive. All rights reserved.
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "rgba(248,247,244,0.2)" }}>
            PR & Media Coverage Agency
          </p>
        </div>
      </div>
    </footer>
  );
}
