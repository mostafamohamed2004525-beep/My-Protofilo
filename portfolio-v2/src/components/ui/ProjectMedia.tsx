"use client";
import { useState, useRef, memo } from "react";
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
  image, video, title, accent = "#2563EB",
  lightBg = "#EFF6FF", index, featured, height = "h-52",
}: Props) {
  const [playing, setPlaying]   = useState(false);
  const [hovered, setHovered]   = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div
      className={cn("relative overflow-hidden border-b border-border group", height)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); }}
    >
      {/* ── Video player ───────────────────────────────── */}
      {video && (
        <video
          ref={videoRef}
          src={video}
          poster={image}
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 w-full h-full object-cover"
          onEnded={() => setPlaying(false)}
        />
      )}

      {/* ── Static image fallback ──────────────────────── */}
      {image && !playing && (
        <Image
          src={image}
          alt={`${title} dashboard screenshot`}
          fill
          sizes="(max-width:768px) 100vw, 50vw"
          className={cn(
            "object-cover transition-transform duration-500",
            hovered && "scale-[1.02]",
          )}
          priority={featured}
        />
      )}

      {/* ── Placeholder when no media ─────────────────── */}
      {!image && !video && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-2"
          style={{ background: `linear-gradient(145deg, ${lightBg}, #F8FAFC)` }}
        >
          <span className="text-3xl opacity-40">📊</span>
          <span className="font-mono text-[9px] tracking-widest uppercase text-ghost">Add Screenshot</span>
        </div>
      )}

      {/* ── Gradient overlay on hover ──────────────────── */}
      <div className={cn(
        "absolute inset-0 transition-opacity duration-300",
        hovered ? "opacity-100" : "opacity-0",
      )} style={{ background: "linear-gradient(to top, rgba(0,0,0,.45) 0%, transparent 55%)" }} />

      {/* ── Index badge ────────────────────────────────── */}
      {index && (
        <span
          className="absolute top-3 left-3 z-10 font-mono text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-white/80 shadow-sm"
          style={{ color: accent }}
        >
          {index}
        </span>
      )}

      {/* ── Featured badge ─────────────────────────────── */}
      {featured && (
        <span
          className="absolute top-3 right-3 z-10 font-body text-[9px] font-bold px-2.5 py-[3px] rounded-full text-white shadow-sm"
          style={{ background: accent }}
        >
          Featured
        </span>
      )}

      {/* ── Play/Pause button (only if has video) ──────── */}
      {video && (
        <button
          onClick={togglePlay}
          aria-label={playing ? `Pause ${title} demo` : `Play ${title} demo`}
          className={cn(
            "absolute bottom-3 right-3 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full",
            "bg-white/90 backdrop-blur-sm border border-white/80 shadow-md",
            "font-body text-[11px] font-semibold text-ink-2",
            "transition-all duration-fast hover:bg-white hover:shadow-lg",
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          )}
        >
          <span>{playing ? "⏸" : "▶"}</span>
          <span>{playing ? "Pause" : "Play Demo"}</span>
        </button>
      )}
    </div>
  );
});
