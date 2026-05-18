import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Variants } from "framer-motion";

/** Merge Tailwind classes safely */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format large numbers for display */
export function formatNumber(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
  return String(n);
}

// ── Shared Framer Motion variants ──────────────────────────────────────────────

/** Fade up — default reveal for most elements */
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: .6, ease: [.22, 1, .36, 1] } },
};

/** Staggered container — wraps a list of children */
export const stagger = (delay = .06): Variants => ({
  hidden:  {},
  visible: { transition: { staggerChildren: delay, delayChildren: .05 } },
});

/** Scale in — for cards and modals */
export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: .96 },
  visible: { opacity: 1, scale: 1, transition: { duration: .45, ease: [.22, 1, .36, 1] } },
};

/** Slide right — for progress bars */
export const slideRight = (width: string): Variants => ({
  hidden:  { width: "0%" },
  visible: { width, transition: { duration: 1.1, ease: [.22, 1, .36, 1], delay: .2 } },
});

/** Float — ambient floating elements */
export const float: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 4, ease: "easeInOut", repeat: Infinity },
  },
};

/** Common viewport options for intersection triggers */
export const viewport = { once: true, margin: "-80px" } as const;
