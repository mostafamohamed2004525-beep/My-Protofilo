"use client";
import { memo } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { Reveal } from "@/components/ui/RevealWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { SKILLS, type SkillCategory } from "@/data";
import { fadeUp, viewport } from "@/lib/utils";
import { cn } from "@/lib/utils";

// ── Single skill card ─────────────────────────────────────────────────────────
const SkillCard = memo(function SkillCard({ sk, delay }: { sk: SkillCategory; delay: number }) {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      variants={fadeUp}
      className="card p-7 group"
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center text-[22px] border transition-colors duration-base"
          style={{
            background: sk.bg,
            borderColor: `${sk.color}22`,
          }}
        >
          {sk.icon}
        </div>
        <div>
          <p className="font-display text-[15px] font-bold text-ink-2 leading-tight">{sk.category}</p>
          <p className="text-[11px] text-muted mt-0.5">{sk.tools.length} skills</p>
        </div>
      </div>

      {/* Skill bars */}
      <div className="space-y-3.5">
        {sk.tools.map((tool, ti) => (
          <div key={tool.name}>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-[13px] font-medium text-ink-2">{tool.name}</span>
              <span className="font-mono text-[11px] font-semibold" style={{ color: sk.color }}>
                {tool.level}%
              </span>
            </div>
            <div className="progress-track">
              <div
                className="progress-fill"
                style={{
                  width: inView ? `${tool.level}%` : "0%",
                  background: `linear-gradient(90deg, ${sk.color}bb, ${sk.color})`,
                  transitionDelay: `${ti * 100 + delay * 1000}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
});

export default memo(function Skills() {
  return (
    <section id="skills" className="py-30 px-8 bg-section">
      <div className="max-w-[1240px] mx-auto">
        <Reveal>
          <SectionHeader
            eyebrow="Technical Skills"
            headline={<>Tools &amp;<br /><span className="grad-text">capabilities</span></>}
            sub="Six capability domains — from raw data extraction and ERP systems to executive-level BI reporting."
          />
        </Reveal>

        <motion.div
          className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={{ visible: { transition: { staggerChildren: .07 } } }}
        >
          {SKILLS.map((sk, i) => (
            <SkillCard key={sk.category} sk={sk} delay={i * .07} />
          ))}
        </motion.div>
      </div>
    </section>
  );
});
