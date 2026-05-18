"use client";
import { useState, useRef, useCallback, memo } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props {
  image?:    string;
  video?:    string;
  title:     string;
  accent?:   string;
  lightBg?:  string;
  index?:    string;
  featured?: boolean;
  height?:   string;
}

export default memo(function ProjectMedia({
  image, video, title,
  accent  = "#2563EB",
  lightBg = "#EFF6FF",
  index, featured,
  height  = "h-52",
}: Props) {
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = useCallback((e: React.MouseEvent) => {
    // Stop any link/card navigation
    e.preventDefault();
    e.stopPropagation();

    const vid = videoRef.current;
    if (!vid) return;

    if (playing) {
      vid.pause();
      setPlaying(false);
    } else {
      vid.play().catch(() => {});
      setPlaying(true);
    }
  }, [playing]);

  return (
    <div
      className={cn("relative overflow-hidden border-b border-border group cursor-default", height)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Video element ─────────────────────────────── */}
      {video && (
        <video
          ref={videoRef}
          src={video}
          poster={image ?? undefined}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover"
          onEnded={() => setPlaying(false)}
        />
      )}

      {/* ── Static image (shown when not playing) ────── */}
      {image && !playing && (
        <Image
          src={image}
          alt={`${title} dashboard screenshot`}
          fill
          sizes="(max-width:768px) 100vw, 50vw"
          className={cn(
            "object-cover transition-transform duration-500",
            hovered && !playing && "scale-[1.02]",
          )}
          priority={featured}
        />
      )}

      {/* ── No-media placeholder ──────────────────────── */}
      {!image && !video && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2"
          style={{ background: `linear-gradient(145deg, ${lightBg}, #F8FAFC)` }}
        >
          <span className="text-3xl opacity-40">📊</span>
          <span className="font-mono text-[9px] tracking-widest uppercase text-ghost">
            Add Screenshot
          </span>
        </div>
      )}

      {/* ── Gradient overlay on hover ─────────────────── */}
      <div className={cn(
        "absolute inset-0 transition-opacity duration-300 pointer-events-none",
        hovered ? "opacity-100" : "opacity-0",
      )} style={{ background: "linear-gradient(to top,rgba(0,0,0,.4) 0%,transparent 55%)" }} />

      {/* ── Index badge ───────────────────────────────── */}
      {index && (
        <span
          className="absolute top-3 left-3 z-20 font-mono text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-white/80 shadow-sm"
          style={{ color: accent }}
        >
          {index}
        </span>
      )}

      {/* ── Featured badge ────────────────────────────── */}
      {featured && (
        <span
          className="absolute top-3 right-3 z-20 font-body text-[9px] font-bold px-2.5 py-[3px] rounded-full text-white shadow-sm"
          style={{ background: accent }}
        >
          Featured
        </span>
      )}

      {/* ── Play / Pause button ───────────────────────── */}
      {video && (
        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? `Pause ${title} demo` : `Play ${title} demo`}
          className={cn(
            "absolute bottom-3 right-3 z-20",
            "flex items-center gap-1.5 px-3 py-1.5 rounded-full",
            "bg-white/90 backdrop-blur-sm border border-white/80 shadow-md",
            "font-body text-[11px] font-semibold text-ink-2",
            "transition-all duration-200",
            "hover:bg-white hover:shadow-lg active:scale-95",
            // always visible when playing, fade in on hover otherwise
            playing ? "opacity-100 translate-y-0"
                    : hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          )}
        >
          <span className="text-[13px]">{playing ? "⏸" : "▶"}</span>
          <span>{playing ? "Pause" : "Play Demo"}</span>
        </button>
      )}
    </div>
  );
});
