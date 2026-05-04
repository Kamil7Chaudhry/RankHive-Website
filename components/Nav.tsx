"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(0,0,0,0.95)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M2 4 L11 11 L2 18" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="square"/>
              <path d="M9 4 L18 11 L9 18" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="square" opacity="0.55"/>
            </svg>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "16px", letterSpacing: "0.18em" }}>
              RANKHIVE
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="nav-link text-xs tracking-widest uppercase"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 500,
                  color: pathname === l.href ? "#fff" : "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = pathname === l.href ? "#fff" : "rgba(255,255,255,0.5)")}
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
                background: "white",
                color: "black",
                padding: "10px 24px",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "inline-block",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#ddd")}
              onMouseLeave={e => (e.currentTarget.style.background = "white")}
            >
              Get Featured
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span style={{ width: 24, height: 1.5, background: menuOpen ? "rgba(255,255,255,0.3)" : "white", display: "block", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(3px, 3px)" : "none" }} />
            <span style={{ width: 24, height: 1.5, background: "white", display: "block", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ width: 24, height: 1.5, background: menuOpen ? "rgba(255,255,255,0.3)" : "white", display: "block", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(3px, -3px)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col justify-center px-8"
          style={{ background: "#000" }}
        >
          <div className="flex flex-col gap-8 mt-16">
            {links.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(40px, 12vw, 64px)",
                  color: pathname === l.href ? "white" : "rgba(255,255,255,0.3)",
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                  animation: `fadeUp 0.4s ease ${i * 0.07}s both`,
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="mt-12">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              style={{
                background: "white", color: "black",
                padding: "14px 32px",
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700, fontSize: "12px",
                letterSpacing: "0.12em", textTransform: "uppercase",
                textDecoration: "none", display: "inline-block",
              }}
            >
              Get Featured
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
