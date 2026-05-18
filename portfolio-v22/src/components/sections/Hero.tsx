"use client";
import { useState, useEffect, memo } from "react";
import { motion } from "framer-motion";
import { MiniAreaChart, MiniBarChart } from "@/components/charts/MiniAreaChart";
import { ME, TOOLS } from "@/data";

const CV_LINK = "https://drive.google.com/file/d/15jrCFvb5U53CfF1LqWoH3qxIRPTd31jF/view?usp=drive_link";

// ── Dashboard preview card ────────────────────────────────────────────────────
const DashboardCard = memo(function DashboardCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .8, ease: [.22, 1, .36, 1], delay: .5 }}
      className="w-[300px] rounded-xl border border-white/90 shadow-xl gpu"
      style={{ background: "rgba(255,255,255,.82)", backdropFilter: "blur(24px) saturate(200%)" }}
    >
      <div className="flex items-start justify-between p-5 pb-3">
        <div>
          <p className="font-body text-[12px] font-semibold text-ink tracking-tight">Revenue Performance</p>
          <p className="font-mono text-[10px] text-ghost mt-0.5">Q1–Q4 · 2024</p>
        </div>
        <span className="text-[10px] font-bold px-2.5 py-[3px] rounded-full bg-emerald/10 border border-emerald/20 text-emerald">↑ 18.4%</span>
      </div>
      <div className="px-5">
        <MiniAreaChart />
      </div>
      <div className="px-5 pt-4 pb-3">
        <div className="flex justify-between mb-2">
          <span className="text-[11px] font-semibold text-sub">Monthly KPI Trend</span>
          <span className="font-mono text-[10px] text-ghost">7-month view</span>
        </div>
        <MiniBarChart />
      </div>
      <div className="grid grid-cols-3 gap-2 p-4 pt-2">
        {[["Accuracy","98.2%","#2563EB"],["Records","60K+","#059669"],["Dashboards","10+","#7C3AED"]].map(([l,v,c]) => (
          <div key={l} className="p-2.5 rounded-xl bg-section border border-border text-center">
            <p className="font-mono text-[12px] font-medium leading-none" style={{ color: c }}>{v}</p>
            <p className="font-body text-[9px] text-ghost mt-1">{l}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
});

// ── Hero section ──────────────────────────────────────────────────────────────
export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const show = (delay: number) => ({
    initial:    { opacity: 0, y: 22 },
    animate:    mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    transition: { duration: .8, ease: [.22, 1, .36, 1] as const, delay },
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden px-8 pt-24 pb-20"
      aria-label="Introduction"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div
        className="absolute inset-0 bg-dot-grid bg-dot opacity-35"
        style={{ maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%,black 30%,transparent 100%)" }}
      />

      {/* Ambient orbs */}
      <div className="absolute top-[-10%] right-[5%] w-[600px] h-[600px] rounded-full pointer-events-none gpu"
        style={{ background: "radial-gradient(circle,rgba(37,99,235,.07) 0%,transparent 70%)", filter: "blur(40px)" }} />
      <div className="absolute bottom-[-5%] left-[5%] w-[500px] h-[500px] rounded-full pointer-events-none gpu"
        style={{ background: "radial-gradient(circle,rgba(79,70,229,.05) 0%,transparent 70%)", filter: "blur(60px)" }} />

      <div className="relative z-10 max-w-[1240px] mx-auto w-full">
        {/* ── Left content ─────────────────────── */}
        <div className="max-w-[680px]">

          {/* Status badge */}
          <motion.div {...show(.05)} className="mb-8 inline-flex items-center gap-2 px-2 py-1.5 bg-surface border border-border rounded-full shadow-md">
            <span className="flex items-center gap-1.5 bg-emerald/10 border border-emerald/20 px-2.5 py-1 rounded-full">
              <span className="block w-1.5 h-1.5 rounded-full bg-emerald animate-pulse-dot" />
              <span className="text-[11px] font-bold text-emerald tracking-wide">Open to Work</span>
            </span>
            <span className="text-[12px] font-medium text-muted pr-1">Available for full-time roles · Cairo, Egypt</span>
          </motion.div>

          {/* Headline */}
          <h1>
            <motion.span {...show(.1)}
              className="block font-serif text-display-hero text-ink leading-none tracking-[-0.04em] mb-1.5">
              Clarity From Data.
            </motion.span>
            <motion.span {...show(.18)}
              className="block font-serif text-display-hero leading-none tracking-[-0.04em] bg-gradient-brand bg-clip-text text-transparent"
              style={{ backgroundSize: "200% auto", animation: "shimmer 5s linear infinite" }}>
              Decisions That Move.
            </motion.span>
          </h1>

          {/* Divider */}
          <motion.div {...show(.26)} className="flex items-center gap-3 mt-7 mb-8">
            <div className="w-8 h-0.5 rounded-full"
              style={{ background: "linear-gradient(90deg,#2563EB,#7C3AED)" }} />
            <div className="w-1.5 h-1.5 rounded-full bg-blue/40" />
          </motion.div>

          {/* Subheadline */}
          <motion.p {...show(.3)}
            className="text-lg md:text-xl text-sub leading-[1.78] max-w-[520px] mb-10 font-light">
            Accounting-trained analyst specialising in{" "}
            <strong className="font-semibold text-ink-2">Power BI enterprise dashboards</strong>,{" "}
            <strong className="font-semibold text-ink-2">financial data modelling</strong>, and
            ERP-integrated analytics systems built for{" "}
            <em className="text-blue" style={{ fontStyle: "italic" }}>real operational impact</em>.
          </motion.p>

          {/* CTAs */}
          <motion.div {...show(.36)} className="flex flex-wrap gap-3 mb-16">
            <a href="#projects" className="btn-primary">View Case Studies →</a>
            <a href="#contact"  className="btn-secondary">Get In Touch</a>
            <a
              href={CV_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              ↓ Download CV
            </a>
          </motion.div>

          {/* Social */}
          <motion.div {...show(.42)}
            className="flex flex-wrap items-center gap-5 pt-7 border-t border-border">
            <span className="text-[11px] font-medium text-ghost uppercase tracking-widest">Connect</span>
            {[
              ["LinkedIn", ME.linkedin],
              ["Email",    `mailto:${ME.email}`],
              ["Phone",    `tel:${ME.phone.replace(/\s/g,"")}`],
            ].map(([l, h]) => (
              <a key={l} href={h} target="_blank" rel="noopener noreferrer"
                className="text-[12px] font-medium text-ghost hover:text-blue transition-colors duration-fast uppercase tracking-widest">
                {l} →
              </a>
            ))}
          </motion.div>

          {/* Tool chips */}
          <motion.div {...show(.48)} className="flex flex-wrap items-center gap-1.5 mt-6">
            <span className="text-[10px] font-medium text-subtle mr-1 uppercase tracking-widest">Core Stack</span>
            {TOOLS.map(t => (
              <span key={t.name} className="chip !border-border/60"
                style={{ background: t.color, color: t.text }}>
                {t.name}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ── Right: Dashboard card only (no floating stat cards) ─────── */}
        <div className="hidden xl:flex absolute right-8 top-1/2 -translate-y-1/2 items-center justify-center w-[340px] h-[480px]">
          {/* Decorative rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden>
            <div className="w-72 h-72 rounded-full border border-blue/10" />
            <div className="absolute w-[380px] h-[380px] rounded-full border border-dashed border-blue/07"
              style={{ animation: "rotateOrb 40s linear infinite" }} />
          </div>
          {/* Dashboard card */}
          <div className="relative z-10 animate-float gpu">
            {mounted && <DashboardCard />}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 pointer-events-none animate-float" aria-hidden>
        <span className="font-mono text-[9px] tracking-[.18em] text-sub uppercase">Scroll</span>
        <div className="w-6 h-9 rounded-xl border border-border-hi flex justify-center pt-1.5">
          <div className="w-[3px] h-2 rounded-full bg-ghost animate-scroll-dot" />
        </div>
      </div>
    </section>
  );
}
