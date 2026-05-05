"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.nav
        animate={{
          background: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0)",
          backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
          borderBottom: scrolled ? "1px solid rgba(10,10,10,0.07)" : "1px solid rgba(10,10,10,0)",
        }}
        transition={{ duration: 0.3 }}
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100 }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            height: "68px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "17px",
              fontWeight: 700,
              color: "#0A0A0A",
              letterSpacing: "-0.01em",
            }}>
              <span style={{ color: "#0A0A0A", marginRight: "2px" }}>❯❯</span>
              {" "}
              <span style={{ letterSpacing: "0.18em", fontSize: "13px", fontWeight: 600 }}>RANKHIVE</span>
            </span>
          </Link>

          {/* Desktop center links */}
          <div className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link${pathname === l.href ? " active" : ""}`}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "13.5px",
                  color: pathname === l.href ? "#0A0A0A" : "rgba(10,10,10,0.5)",
                  letterSpacing: "0.01em",
                  transition: "color 0.2s",
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div className="hidden md:block">
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Link
                  href="/contact"
                  style={{
                    background: "#0A0A0A",
                    color: "#fff",
                    padding: "9px 20px",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "13px",
                    letterSpacing: "0.02em",
                    textDecoration: "none",
                    borderRadius: "100px",
                    display: "inline-block",
                    whiteSpace: "nowrap",
                  }}
                >
                  Get Featured →
                </Link>
              </motion.div>
            </div>

            {/* Hamburger */}
            <button
              className="md:hidden"
              onClick={() => setOpen(!open)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: "4px", zIndex: 110 }}
              aria-label="Toggle menu"
            >
              <div style={{ width: 22, display: "flex", flexDirection: "column", gap: 5 }}>
                <motion.span
                  animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
                  style={{ width: "100%", height: 1.5, background: "#0A0A0A", display: "block", transformOrigin: "center" }}
                />
                <motion.span
                  animate={{ opacity: open ? 0 : 1 }}
                  style={{ width: "100%", height: 1.5, background: "#0A0A0A", display: "block" }}
                />
                <motion.span
                  animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
                  style={{ width: "100%", height: 1.5, background: "#0A0A0A", display: "block", transformOrigin: "center" }}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 99,
              background: "#FFFFFF",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 40px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {LINKS.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "clamp(40px, 10vw, 64px)",
                      fontWeight: 900,
                      fontStyle: "italic",
                      color: pathname === l.href ? "#0A0A0A" : "rgba(10,10,10,0.22)",
                      textDecoration: "none",
                      display: "block",
                      lineHeight: 1.15,
                      letterSpacing: "-0.02em",
                      transition: "color 0.2s",
                    }}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              style={{ marginTop: "48px" }}
            >
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                style={{
                  background: "#0A0A0A",
                  color: "#fff",
                  padding: "14px 32px",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  textDecoration: "none",
                  borderRadius: "100px",
                  display: "inline-block",
                }}
              >
                Get Featured →
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
