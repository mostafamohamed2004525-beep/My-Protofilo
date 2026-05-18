import { cn } from "@/lib/utils";

interface Props {
  height?: string;
  icon?: string;
  accent?: string;
  label?: string;
  badge?: string;
  featured?: boolean;
  index?: string;
  className?: string;
}

/** Drop-in replacement: swap with <Image> once you have screenshots */
export default function ImagePlaceholder({
  height = "h-44",
  icon = "⊕",
  accent = "#2563EB",
  label = "Replace with <Image />",
  badge,
  featured,
  index,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center gap-2.5",
        "border-b border-border overflow-hidden cursor-default",
        "bg-gradient-to-br from-section to-blue-lt/30",
        "transition-[background] duration-300",
        "group-hover:from-hover group-hover:to-blue-lt/50",
        height,
        className,
      )}
      aria-hidden
    >
      {/* Shine sweep on hover */}
      <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: "linear-gradient(105deg,transparent 30%,rgba(255,255,255,.35) 50%,transparent 70%)" }} />

      {/* Index badge */}
      {index && (
        <span className="absolute top-3.5 left-3.5 z-10 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-white"
          style={{ color: accent }}>
          {index}
        </span>
      )}
      {/* Featured badge */}
      {featured && (
        <span className="absolute top-3.5 right-3.5 z-10 text-[9px] font-semibold px-2.5 py-[3px] rounded-full text-white"
          style={{ background: accent }}>
          Featured
        </span>
      )}

      {/* Center icon */}
      <span className="z-10 flex items-center justify-center w-12 h-12 rounded-xl bg-white/80 backdrop-blur-sm border border-dashed text-xl"
        style={{ borderColor: `${accent}66`, color: accent }}>{icon}</span>

      {badge && (
        <span className="z-10 text-[9px] font-mono tracking-wider uppercase text-ghost">{badge}</span>
      )}
      <span className="z-10 text-[9px] font-mono tracking-widest uppercase text-subtle/70">{label}</span>
    </div>
  );
}
