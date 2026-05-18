"use client";
import { useState, useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ME, NAV_LINKS } from "@/data";
import { useActiveSection } from "@/hooks/useActiveSection";

export const Navbar = memo(function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mOpen, setMOpen]       = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close mobile menu on route change / resize
  useEffect(() => {
    const close = () => setMOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        className={cn(
          "max-w-[1240px] mx-auto flex items-center px-8 transition-all duration-base ease-spring",
          scrolled
            ? "py-2.5 bg-bg/95 backdrop-blur-2xl border-b border-border shadow-sm rounded-b-xl"
            : "py-[18px] bg-transparent border-b border-transparent",
        )}
        aria-label="Site navigation"
      >
        {/* ── Logo ──────────────────────────────────────────── */}
        <a href="#hero" className="flex items-center gap-2.5 mr-auto group" aria-label="Go to top">
          <div className="w-8 h-8 rounded-sm flex items-center justify-center text-white font-display font-bold text-sm shadow-blue group-hover:shadow-xl transition-shadow duration-base"
            style={{ background: "linear-gradient(135deg,#2563EB,#4F46E5)" }}>
            M
          </div>
          <div className="leading-none">
            <p className="font-display font-bold text-[15px] text-ink tracking-tight leading-none">{ME.name}</p>
            <p className="text-[10px] text-muted leading-none mt-0.5">{ME.title}</p>
          </div>
        </a>

        {/* ── Desktop links ──────────────────────────────────── */}
        <div className="hidden lg:flex items-center gap-1 mr-5">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={cn("nav-link", active === href.slice(1) && "active")}
            >
              {label}
            </a>
          ))}
        </div>

        <a href={`mailto:${ME.email}`} className="btn-primary hidden lg:inline-flex !px-5 !py-2 !text-xs">
          Hire Me →
        </a>

        {/* ── Hamburger ──────────────────────────────────────── */}
        <button
          onClick={() => setMOpen(v => !v)}
          aria-label={mOpen ? "Close menu" : "Open menu"}
          aria-expanded={mOpen}
          aria-controls="mobile-menu"
          className="lg:hidden flex flex-col gap-[5px] p-2 rounded-sm border border-border bg-surface/80 hover:border-border-hi transition-colors duration-fast ml-3"
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              className="block w-[18px] h-[1.5px] bg-ink rounded-full transition-transform duration-base"
              style={{
                transform: mOpen
                  ? i === 0 ? "rotate(45deg) translate(4.5px,4.5px)"
                  : i === 2 ? "rotate(-45deg) translate(4.5px,-4.5px)"
                  : "scaleX(0)"
                  : "none",
                opacity: mOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* ── Mobile drawer ──────────────────────────────────────── */}
      <AnimatePresence>
        {mOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: .2, ease: [.22, 1, .36, 1] }}
            className="lg:hidden fixed top-[60px] left-4 right-4 bg-bg/97 backdrop-blur-2xl border border-border rounded-2xl p-4 flex flex-col gap-1 shadow-xl z-50"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMOpen(false)}
                className="px-4 py-3 rounded-lg font-medium text-[15px] text-ink hover:bg-section transition-colors duration-fast"
              >
                {label}
              </a>
            ))}
            <div className="h-px bg-border my-2" />
            <a href={`mailto:${ME.email}`} className="btn-primary justify-center">
              Hire Me →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
});
