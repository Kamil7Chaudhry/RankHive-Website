"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          background: scrolled ? "rgba(248, 247, 244, 0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(26,24,20,0.08)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" style={{ textDecoration: "none" }}>
            <svg width="20" height="20" viewBox="0 0 22 22" fill="none" aria-hidden="true">
              <path d="M2 4L11 11L2 18" stroke="#1a1814" strokeWidth="2.5" fill="none" strokeLinecap="square"/>
              <path d="M9 4L18 11L9 18" stroke="#1a1814" strokeWidth="2.5" fill="none" strokeLinecap="square" opacity="0.4"/>
            </svg>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: "15px",
              letterSpacing: "0.2em",
              color: "var(--ink)",
              textTransform: "uppercase",
            }}>
              RANKHIVE
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link${pathname === l.href ? " active" : ""}`}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: "13px",
                  letterSpacing: "0.04em",
                  color: pathname === l.href ? "var(--ink)" : "var(--ink-light)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              style={{
                background: "var(--ink)",
                color: "#f8f7f4",
                padding: "10px 22px",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "12px",
                letterSpacing: "0.08em",
                textDecoration: "none",
                display: "inline-block",
                borderRadius: "2px",
                transition: "background 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#2d2a26"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--ink)"; }}
            >
              Get Featured →
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 flex flex-col gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span style={{ width: 22, height: 1.5, background: "var(--ink)", display: "block", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(2px, 2px)" : "none" }} />
            <span style={{ width: 22, height: 1.5, background: "var(--ink)", display: "block", opacity: menuOpen ? 0 : 1, transition: "opacity 0.2s" }} />
            <span style={{ width: 22, height: 1.5, background: "var(--ink)", display: "block", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(2px, -2px)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col justify-center px-8"
          style={{ background: "var(--cream)" }}
        >
          <div className="flex flex-col gap-6 mt-16">
            {LINKS.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(36px, 10vw, 56px)",
                  color: pathname === l.href ? "var(--ink)" : "var(--ink-faint)",
                  textDecoration: "none",
                  fontStyle: "italic",
                  animation: `fadeUp 0.4s ease ${i * 0.07}s both`,
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              style={{
                background: "var(--ink)",
                color: "var(--cream)",
                padding: "14px 32px",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "13px",
                letterSpacing: "0.08em",
                textDecoration: "none",
                display: "inline-block",
                borderRadius: "2px",
              }}
            >
              Get Featured →
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
