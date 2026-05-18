"use client";
import { memo } from "react";
import { motion } from "framer-motion";
import { Reveal, StaggerGroup } from "@/components/ui/RevealWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { ME } from "@/data";
import { fadeUp, viewport } from "@/lib/utils";

const STATS = [
  { v: "3.73", l: "GPA",         s: "Excellent Standing", c: "#2563EB" },
  { v: "4",    l: "Internships", s: "Live Banking Ops",   c: "#059669" },
  { v: "10+",  l: "Projects",    s: "Built & Delivered",  c: "#0891B2" },
];

const STRENGTHS = [
  "Power BI · Advanced DAX · Enterprise Dashboards",
  "Oracle ERP · 5 Modules · End-to-End Implementation",
  "Financial Analysis · Credit Risk · Variance Reporting",
  "AI Automation · Prompt Engineering · Reporting Workflows",
];

export default memo(function About() {
  return (
    <section id="about" className="py-30 px-8 bg-surface">
      <div className="max-w-[1240px] mx-auto">
        <Reveal>
          <SectionHeader
            eyebrow="About Me"
            headline={<>Finance expertise.<br /><span className="grad-text-2">Data-driven execution.</span></>}
          />
        </Reveal>

        <div className="grid lg:grid-cols-[1.15fr_.85fr] gap-20 items-start">
          {/* Left — copy */}
          <StaggerGroup className="space-y-5">
            {[
              <>Accounting graduate (English Section) at <strong className="font-semibold text-ink-2">{ME.university}</strong> with a {ME.gpa} GPA and live banking experience at two of Egypt's largest financial institutions — handling real transactions under operational pressure.</>,
              <>I operate across the full data stack: <strong className="font-semibold text-ink-2">Oracle ERP</strong> (GL, AP, AR, Fixed Assets), <strong className="font-semibold text-ink-2">Power BI with advanced DAX</strong>, SQL-based financial modelling, and AI-assisted reporting workflows that reduce manual effort at scale.</>,
              <>Building toward a senior analytics role in <strong className="text-blue font-semibold">Big 4 advisory, investment banking, or multinational BI teams</strong> — where analytical rigour translates directly into commercial outcomes.</>,
            ].map((text, i) => (
              <motion.p key={i} variants={fadeUp} className="text-[15px] leading-[1.82] text-sub">
                {text}
              </motion.p>
            ))}

            <motion.div variants={fadeUp} className="pt-2 space-y-3">
              {STRENGTHS.map(s => (
                <div key={s} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue flex-shrink-0" />
                  <span className="text-[13.5px] font-medium text-ink-2">{s}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-4">
              <a href={ME.linkedin} target="_blank" rel="noopener noreferrer" className="btn-primary !text-[13px] !px-5 !py-2.5">
                LinkedIn Profile →
              </a>
              <a href={`mailto:${ME.email}`} className="btn-secondary !text-[13px] !px-5 !py-2.5">
                Download CV
              </a>
            </motion.div>
          </StaggerGroup>

          {/* Right — stats + education */}
          <Reveal delay={0.14}>
            {/* 2×2 stat grid */}
            <div className="grid grid-cols-3 gap-px bg-border rounded-xl overflow-hidden shadow-lg mb-3">
              {STATS.map(st => (
                <div key={st.l}
                  className="bg-surface p-7 transition-colors duration-fast hover:bg-hover cursor-default"
                >
                  <p className="font-display text-[38px] font-bold leading-none mb-1" style={{ color: st.c, letterSpacing: "-.03em" }}>
                    {st.v}
                  </p>
                  <p className="text-[13px] font-semibold text-ink-2 mb-0.5">{st.l}</p>
                  <p className="font-mono text-[9px] text-ghost tracking-wide">{st.s}</p>
                </div>
              ))}
            </div>

            {/* Education card */}
            <div className="card-flat p-6" style={{ background: "linear-gradient(135deg,#F4F8FF,#EBF2FF)" }}>
              <p className="eyebrow text-[9px] mb-2.5">Education</p>
              <p className="font-display text-[16px] font-bold text-ink mb-1">Bachelor of Accounting</p>
              <p className="text-[13px] text-sub mb-2">{ME.university}</p>
              <div className="flex items-center gap-2.5">
                <span className="text-[11px] font-bold px-2.5 py-[3px] rounded-full bg-blue text-white">GPA {ME.gpa}</span>
                <span className="text-[11px] text-muted">Class of {ME.graduation}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
});
