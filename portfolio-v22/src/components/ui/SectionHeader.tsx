import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  headline: React.ReactNode;
  sub?: string;
  counter?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  eyebrow,
  headline,
  sub,
  counter,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "flex flex-wrap gap-6 mb-14",
      align === "center" ? "flex-col items-center text-center" : "items-end justify-between",
      className,
    )}>
      <div>
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h2 className="section-headline text-balance">{headline}</h2>
        {sub && <p className="mt-3 text-sm text-muted max-w-xs leading-relaxed">{sub}</p>}
      </div>
      {counter && (
        <span
          aria-hidden
          className="font-display font-bold text-[80px] leading-none text-border select-none"
        >
          {counter}
        </span>
      )}
    </div>
  );
}
