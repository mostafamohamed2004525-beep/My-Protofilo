"use client";
import { memo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/RevealWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { EXPERIENCE } from "@/data";
import { scaleIn } from "@/lib/utils";

export default memo(function Experience() {
  const [active, setActive] = useState(0);
  const exp = EXPERIENCE[active];

  return (
    <section id="experience" className="py-30 px-8 bg-section">
      <div className="max-w-[1240px] mx-auto">
        <Reveal>
          <SectionHeader
            eyebrow="Professional Experience"
            headline={<>Banking exposure &amp;<br /><span className="grad-text">professional track record</span></>}
          />
        </Reveal>

        <div className="grid lg:grid-cols-[.85fr_1.15fr] gap-12 items-start">
          {/* Tab list */}
          <Reveal delay={0.06}>
            <div className="flex flex-col gap-2" role="tablist" aria-label="Experience tabs">
              {EXPERIENCE.map((e, i) => (
                <button
                  key={e.company}
                  role="tab"
                  aria-selected={active === i}
                  aria-controls={`exp-panel-${i}`}
                  onClick={() => setActive(i)}
                  className="flex flex-col items-start px-5 py-4 rounded-xl text-left border transition-all duration-base ease-spring"
                  style={{
                    background:  active === i ? "var(--color-surface, #fff)" : "transparent",
                    boxShadow:   active === i ? "var(--shadow-md)" : "none",
                    borderColor: active === i ? `${e.color}35` : "transparent",
                    borderLeft:  `3px solid ${active === i ? e.color : "transparent"}`,
                  }}
                >
                  <span
                    className="text-[9px] font-bold tracking-[.12em] uppercase mb-1 transition-colors duration-fast"
                    style={{ color: active === i ? e.color : "#8BA0BC" }}
                  >
                    {e.type}
                  </span>
                  <span className="font-display text-[14px] font-bold mb-0.5 transition-colors duration-fast"
                    style={{ color: active === i ? "#07101F" : "#3A4E6C" }}>
                    {e.company}
                  </span>
                  <span className="font-mono text-[10px] text-ghost">{e.period}</span>
                </button>
              ))}
            </div>
          </Reveal>

          {/* Detail panel */}
          <Reveal delay={0.12}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                id={`exp-panel-${active}`}
                role="tabpanel"
                variants={scaleIn}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: .97, transition: { duration: .2 } }}
                className="card p-8"
                style={{ borderLeft: `4px solid ${exp.color}`, boxShadow: `0 4px 16px rgba(7,16,31,.07), 0 0 0 1px ${exp.color}18` }}
              >
                {/* Header */}
                <div className="flex flex-wrap justify-between items-start gap-3 mb-5">
                  <div>
                    <p className="text-[9px] font-bold tracking-[.14em] uppercase mb-1.5" style={{ color: exp.color }}>
                      {exp.type}
                    </p>
                    <h3 className="font-display text-[20px] font-bold text-ink leading-snug tracking-tight mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-[14px] font-semibold" style={{ color: exp.color }}>{exp.company}</p>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-section border border-border font-mono text-[11px] font-semibold text-muted whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <div className="h-px bg-border mb-5" />

                {/* Bullets */}
                <ul className="space-y-4">
                  {exp.points.map((pt, pi) => (
                    <li key={pi} className="flex items-start gap-3.5">
                      <div
                        className="mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 border"
                        style={{ background: `${exp.color}18`, borderColor: `${exp.color}40` }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: exp.color }} />
                      </div>
                      <p className="text-[14px] leading-[1.65] text-sub flex-1">{pt}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
});
