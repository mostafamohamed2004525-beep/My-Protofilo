import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      // ── Color palette ──────────────────────────────────────────────
      colors: {
        // Surfaces
        bg:      "#FAFBFD",
        surface: "#FFFFFF",
        "surface-2": "#F6F9FF",
        section: "#F2F6FC",
        "section-2": "#EBF1F9",
        hover:   "#EBF4FF",

        // Ink scale
        ink: {
          DEFAULT: "#07101F",
          2:       "#1A2540",
        },
        sub:    "#3A4E6C",
        muted:  "#5A6E8C",
        ghost:  "#8BA0BC",
        subtle: "#B8CCD8",

        // Border
        border: {
          DEFAULT: "#DCE6F2",
          hi:      "#BAC8D6",
          focus:   "#2563EB",
        },

        // Brand
        blue: {
          DEFAULT: "#2563EB",
          hi:      "#1A4FCC",
          lt:      "#EEF5FF",
          mid:     "#D4E6FF",
        },
        navy:   "#091526",
        indigo: "#4338CA",

        // Accent palette
        teal:   "#0891B2",
        violet: "#7C3AED",
        emerald:"#059669",
        amber:  "#D97706",
        rose:   "#BE185D",
        slate:  "#475569",
      },

      // ── Typography ─────────────────────────────────────────────────
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        body:    ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono:    ["DM Mono", "SF Mono", "Fira Code", "monospace"],
        serif:   ["Instrument Serif", "Georgia", "serif"],
      },
      fontSize: {
        "display-hero": ["clamp(44px,7vw,88px)", { lineHeight: "1.0",  letterSpacing: "-0.04em" }],
        "display-xl":   ["clamp(38px,5.5vw,72px)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-lg":   ["clamp(34px,4.5vw,58px)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-md":   ["clamp(28px,3.5vw,44px)", { lineHeight: "1.1",  letterSpacing: "-0.025em" }],
        "display-sm":   ["clamp(22px,2.5vw,32px)", { lineHeight: "1.2",  letterSpacing: "-0.02em" }],
      },

      // ── Spacing ─────────────────────────────────────────────────────
      spacing: {
        "4.5": "18px",
        "13":  "52px",
        "15":  "60px",
        "17":  "68px",
        "18":  "72px",
        "22":  "88px",
        "26":  "104px",
        "30":  "120px",
        "34":  "136px",
        "38":  "152px",
      },

      // ── Shadows ─────────────────────────────────────────────────────
      boxShadow: {
        "xs":    "0 1px 2px rgba(7,16,31,.04)",
        "sm":    "0 2px 8px rgba(7,16,31,.06), 0 1px 2px rgba(7,16,31,.04)",
        "md":    "0 4px 16px rgba(7,16,31,.07), 0 2px 4px rgba(7,16,31,.04)",
        "lg":    "0 12px 40px rgba(7,16,31,.09), 0 4px 8px rgba(7,16,31,.04)",
        "xl":    "0 24px 64px rgba(7,16,31,.11), 0 8px 16px rgba(7,16,31,.05)",
        "blue":  "0 4px 20px rgba(37,99,235,.22)",
        "focus": "0 0 0 3px rgba(37,99,235,.2)",
        "card":  "0 1px 3px rgba(7,16,31,.05), 0 1px 2px rgba(7,16,31,.04)",
      },

      // ── Border radius ───────────────────────────────────────────────
      borderRadius: {
        "sm": "8px",
        "md": "12px",
        "lg": "16px",
        "xl": "20px",
        "2xl":"28px",
      },

      // ── Transition easing ───────────────────────────────────────────
      transitionTimingFunction: {
        "spring":    "cubic-bezier(.22,1,.36,1)",
        "out-expo":  "cubic-bezier(0,0,.2,1)",
        "in-expo":   "cubic-bezier(.4,0,1,1)",
      },
      transitionDuration: {
        "fast": "180ms",
        "base": "260ms",
        "slow": "440ms",
      },

      // ── Background images ───────────────────────────────────────────
      backgroundImage: {
        "gradient-brand":    "linear-gradient(135deg, #1E50D4 0%, #4338CA 45%, #6426C8 100%)",
        "gradient-brand-2":  "linear-gradient(135deg, #0778C8 0%, #1E50D4 100%)",
        "gradient-hero":     "linear-gradient(160deg, #F7F9FE 0%, #EEF4FF 25%, #F9FBFF 60%, #F3F7FF 100%)",
        "gradient-section":  "linear-gradient(180deg, #FDFDFF 0%, #F5F8FD 45%, #FDFDFF 100%)",
        "dot-grid":          "radial-gradient(circle, #C2CFE0 1px, transparent 1px)",
        "gradient-footer":   "linear-gradient(180deg, #07111F 0%, #0D1E38 100%)",
      },
      backgroundSize: {
        "dot": "30px 30px",
      },

      // ── Animations ──────────────────────────────────────────────────
      keyframes: {
        "fade-up":    { from: { opacity: "0", transform: "translateY(20px)" }, to: { opacity: "1", transform: "none" } },
        "fade-in":    { from: { opacity: "0" },                                to: { opacity: "1" } },
        "scale-in":   { from: { opacity: "0", transform: "scale(.96)" },       to: { opacity: "1", transform: "none" } },
        "float":      { "0%,100%": { transform: "translateY(0)" },             "50%": { transform: "translateY(-8px)" } },
        "pulse-dot":  { "0%,100%": { opacity: "1", transform: "scale(1)" },    "50%": { opacity: ".4", transform: "scale(.8)" } },
        "shimmer":    { "0%": { backgroundPosition: "200% center" },           "100%": { backgroundPosition: "-200% center" } },
        "ping-slow":  { "0%": { transform: "scale(1)", opacity: ".7" },        "75%,100%": { transform: "scale(2.1)", opacity: "0" } },
        "scroll-dot": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "80%": { transform: "translateY(14px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "0" },
        },
      },
      animation: {
        "fade-up":    "fade-up .6s cubic-bezier(.22,1,.36,1) both",
        "fade-in":    "fade-in .5s ease both",
        "scale-in":   "scale-in .4s cubic-bezier(.22,1,.36,1) both",
        "float":      "float 4s ease-in-out infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "pulse-dot":  "pulse-dot 2.5s ease infinite",
        "shimmer":    "shimmer 5s linear infinite",
        "ping-slow":  "ping-slow 2.5s ease infinite",
        "scroll-dot": "scroll-dot 2s ease-in-out infinite",
      },

      // ── Max widths ──────────────────────────────────────────────────
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};

export default config;
