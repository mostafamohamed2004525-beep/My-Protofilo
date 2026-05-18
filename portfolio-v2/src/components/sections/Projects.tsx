"use client";
import { memo, useState } from "react";
import { motion } from "framer-motion";
import ProjectMedia from "@/components/ui/ProjectMedia";
import { Reveal } from "@/components/ui/RevealWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { PROJECTS, type Project } from "@/data";
import { fadeUp, viewport, cn } from "@/lib/utils";

// ── Metric strip ─────────────────────────────────────────────────────────────
function MetricStrip({ project }: { project: Project }) {
  return (
    <div className="grid grid-cols-4 gap-0 rounded-lg overflow-hidden border border-border mb-4">
      {project.results.map(r => (
        <div key={r.label} className="py-2.5 px-3 bg-section border-r border-border last:border-r-0">
          <p className="font-mono text-[17px] font-medium leading-none mb-1" style={{ color: project.color }}>
            {r.metric}
          </p>
          <p className="font-body text-[9px] text-ghost leading-tight">{r.label}</p>
        </div>
      ))}
    </div>
  );
}

// ── Featured card ─────────────────────────────────────────────────────────────
const FeaturedCard = memo(function FeaturedCard({ project }: { project: Project }) {
  const [tab, setTab] = useState<"problem" | "solution">("problem");

  return (
    <motion.div variants={fadeUp} className="card group flex flex-col">
      <ProjectMedia
        image={project.image}
        video={project.video}
        title={project.title}
        accent={project.color}
        lightBg={project.lightBg}
        index={project.index}
        featured={project.featured}
        height="h-56"
      />

      <div className="p-7 flex flex-col flex-1">
        {/* Category */}
        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
          <span
            className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[.1em] uppercase px-3 py-1 rounded-full border"
            style={{ color: project.color, background: project.lightBg, borderColor: `${project.color}25` }}
          >
            <span className="block w-[5px] h-[5px] rounded-full animate-pulse-dot" style={{ background: project.color }} />
            {project.category}
          </span>
          <span className="font-mono text-[10px] text-ghost">{project.subtitle.split("·")[0].trim()}</span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-[22px] font-normal text-ink leading-[1.25] tracking-tight mb-2.5">
          {project.title}
        </h3>
        <p className="text-[14px] leading-[1.72] text-sub mb-5">{project.description}</p>

        {/* Tabs */}
        <div className="mb-5">
          <div className="flex gap-0 mb-3.5 bg-section rounded-xl p-1">
            {(["problem", "solution"] as const).map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={cn(
                  "flex-1 py-2 text-[12px] font-semibold rounded-lg capitalize transition-all duration-fast",
                  tab === t ? "bg-surface shadow-sm text-ink" : "text-muted hover:text-sub",
                )}
              >
                {t === "problem" ? "The Problem" : "The Solution"}
              </button>
            ))}
          </div>
          <div
            className="text-[13px] leading-[1.7] text-sub px-4 py-3.5 rounded-xl border transition-colors duration-base min-h-[80px]"
            style={{
              background:  tab === "problem" ? "#FFFBEB" : project.lightBg,
              borderColor: tab === "problem" ? "#FDE68A" : `${project.color}25`,
            }}
          >
            {tab === "problem" ? project.problem : project.solution}
          </div>
        </div>

        <MetricStrip project={project} />

        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map(t => <span key={t} className="chip">{t}</span>)}
        </div>

        <div className="flex gap-2.5 mt-auto">
          <a href={project.demo}
            className="btn-primary flex-1 justify-center !text-[13px] !py-2.5"
            style={{ background: `linear-gradient(135deg,${project.color},${project.color}cc)` }}
          >
            <span>▶</span> {project.video ? "Watch Demo" : "Live Demo"}
          </a>
          <a href={project.github} className="btn-secondary !text-[13px] !py-2.5 justify-center">
            <GitHubIcon /> GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
});

// ── Compact card ──────────────────────────────────────────────────────────────
const CompactCard = memo(function CompactCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div variants={fadeUp} className="card group flex flex-col">
      <ProjectMedia
        image={project.image}
        video={project.video}
        title={project.title}
        accent={project.color}
        lightBg={project.lightBg}
        index={project.index}
        height="h-44"
      />

      <div className="p-5 flex flex-col flex-1">
        <span
          className="inline-flex items-center gap-1 text-[9px] font-bold tracking-[.1em] uppercase px-2.5 py-[3px] rounded-full border mb-2.5 self-start"
          style={{ color: project.color, background: project.lightBg, borderColor: `${project.color}22` }}
        >
          <span className="block w-1 h-1 rounded-full" style={{ background: project.color }} />
          {project.category}
        </span>

        <h3 className="font-serif text-[17px] font-normal text-ink leading-[1.3] tracking-tight mb-2">
          {project.title}
        </h3>
        <p className="text-[12.5px] leading-[1.68] text-muted mb-3 flex-1">
          {project.description.slice(0, 110)}…
        </p>

        {/* Expandable */}
        <div
          className="overflow-hidden transition-[max-height] duration-slow ease-spring"
          style={{ maxHeight: expanded ? "400px" : "0" }}
        >
          <div className="rounded-xl border p-3.5 mb-3 text-[12px] text-sub leading-[1.65]"
            style={{ background: project.lightBg, borderColor: `${project.color}20` }}>
            <p className="text-[10px] font-bold tracking-[.08em] uppercase mb-1.5" style={{ color: project.color }}>
              Problem
            </p>
            {project.problem}
          </div>
          <div className="grid grid-cols-2 gap-1.5 mb-3">
            {project.results.map(r => (
              <div key={r.label} className="p-2.5 rounded-xl bg-section border border-border">
                <p className="font-mono text-[17px] font-medium leading-none mb-1" style={{ color: project.color }}>{r.metric}</p>
                <p className="text-[10px] text-muted">{r.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tech.slice(0, 3).map(t => <span key={t} className="chip !text-[9.5px] !py-[3px] !px-[9px]">{t}</span>)}
          {project.tech.length > 3 && (
            <span className="chip !text-[9.5px] !py-[3px] !px-[9px]" style={{ color: project.color }}>
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        <div className="flex gap-2 mt-auto">
          <button
            onClick={() => setExpanded(v => !v)}
            className={cn(
              "flex-1 py-2.5 rounded-lg text-[11px] font-semibold border transition-all duration-fast",
              expanded ? "text-white border-transparent" : "text-sub border-border bg-section hover:border-border-hi",
            )}
            style={expanded ? { background: project.color } : {}}
          >
            {expanded ? "↑ Less" : "↓ Case Study"}
          </button>
          <a href={project.demo}
            className="flex items-center justify-center w-10 h-10 rounded-lg text-white text-sm font-bold transition-all duration-fast hover:-translate-y-0.5"
            style={{ background: project.color, boxShadow: `0 2px 8px ${project.color}40` }}
            aria-label={`View ${project.title} demo`}
          >
            ↗
          </a>
          <a href={project.github}
            className="flex items-center justify-center w-10 h-10 rounded-lg bg-surface border border-border hover:border-border-hi transition-colors duration-fast text-sub"
            aria-label={`${project.title} GitHub repository`}
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
    </motion.div>
  );
});

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export default memo(function Projects() {
  const featured = PROJECTS.filter(p => p.featured);
  const compact  = PROJECTS.filter(p => !p.featured);

  return (
    <section id="projects" className="py-30 px-8 bg-gradient-section">
      <div className="max-w-[1240px] mx-auto">
        <Reveal>
          <SectionHeader
            eyebrow="Selected Work"
            headline={<>Case studies in<br /><span className="grad-text">analytics &amp; BI</span></>}
            counter={`0${PROJECTS.length}`}
            sub="Five end-to-end projects spanning financial modelling, enterprise BI, healthcare analytics, and banking policy research."
          />
        </Reveal>

        <motion.div
          className="grid lg:grid-cols-2 gap-5 mb-5"
          initial="hidden" whileInView="visible" viewport={viewport}
          variants={{ visible: { transition: { staggerChildren: .08 } } }}
        >
          {featured.map(p => <FeaturedCard key={p.id} project={p} />)}
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          initial="hidden" whileInView="visible" viewport={viewport}
          variants={{ visible: { transition: { staggerChildren: .07 } } }}
        >
          {compact.map(p => <CompactCard key={p.id} project={p} />)}
        </motion.div>

        <Reveal delay={0.3}>
          <div className="flex justify-center mt-14">
            <div className="inline-flex items-center gap-5 px-9 py-5 bg-surface/85 backdrop-blur-md border border-border rounded-2xl shadow-md">
              <div>
                <p className="font-body text-[14px] font-semibold text-ink mb-0.5">Interested in working together?</p>
                <p className="text-[12px] text-muted">Discuss a role, project, or analytics challenge</p>
              </div>
              <div className="w-px h-9 bg-border" />
              <a href="#contact" className="btn-primary whitespace-nowrap">Start a Conversation →</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
});
