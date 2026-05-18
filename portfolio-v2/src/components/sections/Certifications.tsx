"use client";
import { memo } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/RevealWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { CERTS } from "@/data";
import { fadeUp, viewport } from "@/lib/utils";

export default memo(function Certifications() {
  return (
    <section id="certifications" className="py-30 px-8 bg-surface">
      <div className="max-w-[1240px] mx-auto">
        <Reveal>
          <SectionHeader
            eyebrow="Certifications & Training"
            headline={<>Credentials &amp;<br /><span className="grad-text">professional development</span></>}
            counter="06"
          />
        </Reveal>

        {/* Table */}
        <motion.div
          className="card overflow-hidden"
          initial="hidden" whileInView="visible" viewport={viewport}
          variants={{ visible: { transition: { staggerChildren: .06 } } }}
        >
          {/* Header row */}
          <div className="hidden sm:grid grid-cols-[2fr_1fr_1fr] gap-0 px-6 py-3.5 bg-section border-b border-border">
            {["Certification", "Issuing Organisation", "Period"].map(h => (
              <p key={h} className="text-[10px] font-bold text-muted uppercase tracking-[.06em]">{h}</p>
            ))}
          </div>

          {CERTS.map((c, i) => (
            <motion.div
              key={c.name}
              variants={fadeUp}
              className="px-6 py-4.5 border-b border-border last:border-b-0 transition-colors duration-fast hover:bg-hover group"
            >
              {/* Mobile layout */}
              <div className="sm:hidden">
                <div className="flex items-start justify-between gap-3 mb-1.5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full flex-shrink-0 mt-0.5" style={{ background: c.color }} />
                    <p className="font-body text-[13px] font-semibold text-ink-2 leading-snug">{c.name}</p>
                  </div>
                  {c.active && <ActiveBadge />}
                </div>
                <p className="font-mono text-[10px] ml-4.5 pl-[10px]" style={{ color: c.color }}>{c.org}</p>
                <p className="font-mono text-[10px] text-ghost ml-4.5 pl-[10px] mt-0.5">{c.period}</p>
              </div>

              {/* Desktop layout */}
              <div className="hidden sm:grid grid-cols-[2fr_1fr_1fr] gap-0 items-center">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: c.color }} />
                  <div>
                    {c.active && <ActiveBadge />}
                    <p className={`font-body text-[13.5px] font-semibold text-ink-2 leading-snug ${c.active ? "mt-1.5" : ""}`}>
                      {c.name}
                    </p>
                  </div>
                </div>
                <p className="font-body text-[13px] font-medium text-muted">{c.org}</p>
                <p className="font-mono text-[12px] text-ghost">{c.period}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

function ActiveBadge() {
  return (
    <span className="inline-flex items-center gap-1 text-[9px] font-bold px-2 py-[2px] rounded-full bg-emerald/10 border border-emerald/20 text-emerald">
      <span className="block w-[5px] h-[5px] rounded-full bg-emerald animate-pulse-dot" />
      Active
    </span>
  );
}
