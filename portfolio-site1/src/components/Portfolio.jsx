"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";


// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────
const ME = {
  name: "Mostafa Mohamed",
  title: "Data Analyst & BI Developer",
  tagline: "Transforming raw data into strategic business intelligence — from banking operations to enterprise dashboards.",
  email: "mostafamohamed2004525@gmail.com",
  phone: "+20 128-340-9232",
  linkedin: "https://linkedin.com/in/mostafa-farag2004",
  location: "Egypt",
  gpa: "3.73 / 4.00",
  university: "Banha University · Faculty of Commerce (English)",
  graduation: "2026",
};


const SKILLS = [
  {
    category: "Business Intelligence",
    icon: "📊",
    color: "#2563EB",
    bg: "#EFF6FF",
    tools: [
      { name: "Power BI", level: 92 },
      { name: "DAX & Data Modeling", level: 88 },
      { name: "Dashboard Design", level: 90 },
      { name: "KPI Development", level: 85 },
    ],
  },
  {
    category: "Data Analysis",
    icon: "🔍",
    color: "#0891B2",
    bg: "#ECFEFF",
    tools: [
      { name: "Advanced Excel", level: 95 },
      { name: "SQL Query Optimization", level: 82 },
      { name: "Python (Analytics)", level: 75 },
      { name: "Statistical Analysis", level: 78 },
    ],
  },
  {
    category: "ERP & Business Systems",
    icon: "⚙️",
    color: "#7C3AED",
    bg: "#F5F3FF",
    tools: [
      { name: "Oracle ERP", level: 88 },
      { name: "SAP Fundamentals", level: 72 },
      { name: "Odoo ERP", level: 80 },
      { name: "AP/AR Cycles", level: 90 },
    ],
  },
  {
    category: "Financial Expertise",
    icon: "💰",
    color: "#059669",
    bg: "#ECFDF5",
    tools: [
      { name: "Credit Risk Assessment", level: 85 },
      { name: "Financial Reporting", level: 88 },
      { name: "Budgeting & Forecasting", level: 82 },
      { name: "Variance Analysis", level: 87 },
    ],
  },
  {
    category: "AI & Automation",
    icon: "🤖",
    color: "#EA580C",
    bg: "#FFF7ED",
    tools: [
      { name: "Prompt Engineering", level: 88 },
      { name: "Google Gemini API", level: 85 },
      { name: "Workflow Automation", level: 80 },
      { name: "Report Automation", level: 82 },
    ],
  },
  {
    category: "Soft Skills",
    icon: "💼",
    color: "#BE185D",
    bg: "#FDF2F8",
    tools: [
      { name: "Executive Presentations", level: 90 },
      { name: "Cross-functional Teams", level: 88 },
      { name: "Banking Operations", level: 92 },
      { name: "Critical Thinking", level: 90 },
    ],
  },
];


const STATS = [
  { value: "$307M", label: "Revenue Analysed",   color: "#2563EB", bg: "#EFF6FF" },
  { value: "98%",   label: "Data Accuracy Rate", color: "#059669", bg: "#ECFDF5" },
  { value: "10+",   label: "Dashboards Built",   color: "#7C3AED", bg: "#F5F3FF" },
  { value: "3.73",  label: "Academic GPA",       color: "#0891B2", bg: "#ECFEFF" },
];

const TOOLS = [
  { name: "Power BI",    color: "#F2C811", text: "#92400E" },
  { name: "Oracle ERP",  color: "#E0E7FF", text: "#3730A3" },
  { name: "SQL",         color: "#DCFCE7", text: "#166534" },
  { name: "Python",      color: "#FEF3C7", text: "#92400E" },
  { name: "Excel",       color: "#D1FAE5", text: "#065F46" },
  { name: "DAX",         color: "#FCE7F3", text: "#9D174D" },
];


const BAR_DATA = [34, 46, 40, 62, 56, 74, 88];

const CHART_DATA = [
  { v: 32 },
  { v: 38 },
  { v: 36 },
  { v: 54 },
  { v: 61 },
  { v: 70 },
  { v: 84 },
];

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const CERTS = [
  { name: "Power BI Data Analyst", org: "Microsoft", period: "2025", color: "#2563EB", active: true },
  { name: "Excel for Business Analysis", org: "LinkedIn Learning", period: "2025", color: "#0891B2", active: false },
  { name: "SQL for Data Analysis", org: "DataCamp", period: "2024", color: "#7C3AED", active: false },
  { name: "Financial Modeling", org: "Coursera", period: "2024", color: "#059669", active: false },
  { name: "ERP Fundamentals", org: "Oracle", period: "2024", color: "#D97706", active: false },
  { name: "Prompt Engineering", org: "Google", period: "2025", color: "#BE185D", active: false },
];

const EXPERIENCE = [
  {
    title: "Banking Operations Trainee",
    company: "National Bank of Egypt",
    period: "2025 · 3 months",
    color: "#2563EB",
    summary:
      "Processed high-volume daily transactions, supported branch operations, and strengthened control discipline in live banking workflows.",
    highlights: [
      "Handled 100+ daily transactions with high attention to accuracy.",
      "Worked with customer records, reconciliations, and operational reporting.",
      "Built a practical understanding of banking controls and service quality.",
    ],
  },
  {
    title: "BI & Reporting Analyst",
    company: "University / Personal Projects",
    period: "2024–2026",
    color: "#7C3AED",
    summary:
      "Designed dashboards and reporting assets across HR, revenue, operations, and healthcare use cases.",
    highlights: [
      "Built Power BI reports with DAX measures and cross-filtering.",
      "Automated recurring Excel analysis and executive reporting.",
      "Translated business problems into measurable KPI frameworks.",
    ],
  },
  {
    title: "Financial Research Contributor",
    company: "SME Inclusion Study",
    period: "2024",
    color: "#059669",
    summary:
      "Researched SME financing programs and shaped evidence-based recommendations for leadership review.",
    highlights: [
      "Analyzed public and institutional banking initiatives.",
      "Benchmarked policy approaches against regional and global practices.",
      "Presented findings in a structured executive format.",
    ],
  },
];

const SOCIALS = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/mostafa-farag2004",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:mostafamohamed2004525@gmail.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
];

// ─── font injection ───────────────────────────────────────────────────────────
function useFonts() {
  useEffect(() => {
    if (document.getElementById("hero-fonts")) return;
    const lk = document.createElement("link");
    lk.id = "hero-fonts";
    lk.href = "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500;600&family=DM+Mono:wght@400;500&display=swap";
    lk.rel = "stylesheet";
    document.head.appendChild(lk);
  }, []);
}

// ─── entrance hook ────────────────────────────────────────────────────────────
function useEntrance() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 60),
      setTimeout(() => setPhase(2), 180),
      setTimeout(() => setPhase(3), 340),
      setTimeout(() => setPhase(4), 500),
      setTimeout(() => setPhase(5), 640),
      setTimeout(() => setPhase(6), 780),
      setTimeout(() => setPhase(7), 940),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);
  const show = (n, extra = {}) => ({
    opacity: phase >= n ? 1 : 0,
    transform: phase >= n ? "translateY(0px)" : "translateY(22px)",
    transition: "opacity .65s cubic-bezier(.22,1,.36,1), transform .65s cubic-bezier(.22,1,.36,1)",
    ...extra,
  });
  const fadeIn = (n, extra = {}) => ({
    opacity: phase >= n ? 1 : 0,
    transition: "opacity .7s cubic-bezier(.22,1,.36,1)",
    ...extra,
  });
  return { show, fadeIn, phase };
}

// ─── mini bar chart ───────────────────────────────────────────────────────────
function MiniBarChart({ visible }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: "4px", height: "48px" }}>
      {BAR_DATA.map((h, i) => (
        <div key={i} style={{
          flex: 1, borderRadius: "3px 3px 0 0",
          background: i === BAR_DATA.length - 1
            ? "linear-gradient(180deg,#2563EB,#4F46E5)"
            : i >= BAR_DATA.length - 2 ? "#BFDBFE" : "#E0E7FF",
          height: visible ? `${h}%` : "0%",
          transition: `height .8s cubic-bezier(.22,1,.36,1) ${i * .06}s`,
        }} />
      ))}
    </div>
  );
}

// ─── floating stat card ───────────────────────────────────────────────────────
function StatCard({ stat, delay, animStyle }) {
  const [hov, setHov] = useState(false);
  return (
    <div style={{
      ...animStyle,
      background: "rgba(255,255,255,.85)",
      backdropFilter: "blur(20px) saturate(180%)",
      border: `1px solid rgba(255,255,255,.9)`,
      borderRadius: "16px",
      padding: "16px 20px",
      boxShadow: hov
        ? `0 20px 48px rgba(10,15,30,.14), 0 4px 12px rgba(10,15,30,.06), 0 0 0 1px rgba(37,99,235,.12)`
        : `0 8px 24px rgba(10,15,30,.08), 0 2px 6px rgba(10,15,30,.04)`,
      transform: hov ? "translateY(-4px)" : animStyle.transform || "none",
      transition: "box-shadow .3s ease, border-color .3s ease, " + (animStyle.transition || ""),
      cursor: "default",
      minWidth: "150px",
    }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}>
      <div style={{
        display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px",
      }}>
        <div style={{
          width: "28px", height: "28px", borderRadius: "8px",
          background: stat.bg, display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: stat.color }} />
        </div>
        <div style={{
          fontFamily: "'DM Mono', monospace", fontSize: "22px", fontWeight: 500,
          color: stat.color, letterSpacing: "-.03em", lineHeight: 1,
        }}>{stat.value}</div>
      </div>
      <div style={{
        fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 500,
        color: "#64748B", letterSpacing: ".02em",
      }}>{stat.label}</div>
    </div>
  );
}

// ─── dashboard preview card ───────────────────────────────────────────────────
function DashboardCard({ phase }) {
  const visible = phase >= 5;
  return (
    <div style={{
      background: "rgba(255,255,255,.82)",
      backdropFilter: "blur(24px) saturate(200%)",
      border: "1px solid rgba(255,255,255,.95)",
      borderRadius: "20px",
      padding: "22px",
      boxShadow: "0 24px 64px rgba(10,15,30,.1), 0 8px 20px rgba(10,15,30,.06), inset 0 1px 0 rgba(255,255,255,.8)",
      width: "300px",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: "opacity .8s cubic-bezier(.22,1,.36,1) .5s, transform .8s cubic-bezier(.22,1,.36,1) .5s",
    }}>
      {/* Card header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
        <div>
          <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", fontWeight: 600, color: "#0F172A", letterSpacing: "-.01em" }}>Revenue Trend</div>
          <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "10px", color: "#94A3B8", marginTop: "1px" }}>Q1–Q4 · 2024</div>
        </div>
        <div style={{ padding: "4px 10px", borderRadius: "100px", background: "#DCFCE7", border: "1px solid #BBF7D0" }}>
          <span style={{ fontSize: "10px", fontWeight: 700, color: "#15803D" }}>↑ 18.4%</span>
        </div>
      </div>

      {/* Area chart */}
      <div style={{ height: "80px", marginBottom: "16px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={CHART_DATA} margin={{ top: 4, right: 0, bottom: 0, left: 0 }}>
            <defs>
              <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563EB" stopOpacity={0.18} />
                <stop offset="100%" stopColor="#2563EB" stopOpacity={0.01} />
              </linearGradient>
            </defs>
            <Tooltip
              contentStyle={{ background: "#fff", border: "1px solid #E2E8F0", borderRadius: "8px", fontSize: "11px", boxShadow: "0 4px 12px rgba(0,0,0,.08)" }}
              formatter={(v) => [`${v}%`, "Score"]}
              labelFormatter={() => ""}
            />
            <Area type="monotone" dataKey="v" stroke="#2563EB" strokeWidth={2} fill="url(#areaGrad)" dot={false} activeDot={{ r: 3, fill: "#2563EB" }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Bar mini chart */}
      <div style={{ marginBottom: "16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 600, color: "#475569" }}>Monthly KPIs</span>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "10px", color: "#94A3B8" }}>Last 7 months</span>
        </div>
        <MiniBarChart visible={visible} />
      </div>

      {/* KPI row */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
        {[["Accuracy", "98.2%", "#2563EB"], ["Records", "60K+", "#059669"], ["Dashboards", "10+", "#7C3AED"]].map(([l, v, c]) => (
          <div key={l} style={{ padding: "10px 8px", borderRadius: "10px", background: "#F8FAFC", border: "1px solid #E2E8F0", textAlign: "center" }}>
            <div style={{ fontFamily: "'DM Mono',monospace", fontSize: "12px", fontWeight: 500, color: c, lineHeight: 1 }}>{v}</div>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "9px", color: "#94A3B8", marginTop: "3px", letterSpacing: ".02em" }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── scroll indicator ─────────────────────────────────────────────────────────
function ScrollIndicator({ visible }) {
  return (
    <div style={{
      position: "absolute", bottom: "36px", left: "50%", transform: "translateX(-50%)",
      display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
      opacity: visible ? .5 : 0,
      transition: "opacity .8s ease 1.2s",
    }}>
      <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "9px", letterSpacing: ".16em", color: "#94A3B8", textTransform: "uppercase" }}>Scroll</span>
      <div style={{
        width: "24px", height: "38px", borderRadius: "12px",
        border: "1.5px solid #CBD5E1",
        display: "flex", justifyContent: "center", paddingTop: "6px",
      }}>
        <div style={{
          width: "3px", height: "8px", borderRadius: "2px",
          background: "#94A3B8",
          animation: "scrollDot 2s ease-in-out infinite",
        }} />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// HERO SECTION — MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function Hero() {
  useFonts();
  const { show, fadeIn, phase } = useEntrance();
  const [btnHov, setBtnHov] = useState(null);
  const [socialHov, setSocialHov] = useState(null);
  const [toolHov, setToolHov] = useState(null);

  // CSS keyframes injected once
  useEffect(() => {
    if (document.getElementById("hero-css")) return;
    const s = document.createElement("style");
    s.id = "hero-css";
    s.textContent = `
      @keyframes floatA { 0%,100%{transform:translateY(0px) rotate(-1deg)} 50%{transform:translateY(-12px) rotate(1deg)} }
      @keyframes floatB { 0%,100%{transform:translateY(0px) rotate(1deg)}  50%{transform:translateY(-9px) rotate(-1deg)} }
      @keyframes floatC { 0%,100%{transform:translateY(-4px)}               50%{transform:translateY(6px)} }
      @keyframes floatD { 0%,100%{transform:translateY(4px) rotate(-0.5deg)} 50%{transform:translateY(-8px) rotate(0.5deg)} }
      @keyframes pulseDot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(.85)} }
      @keyframes scrollDot { 0%{transform:translateY(0);opacity:1} 80%{transform:translateY(14px);opacity:0} 100%{transform:translateY(0);opacity:0} }
      @keyframes rotateOrb { to{transform:rotate(360deg)} }
      @keyframes shimmerText {
        0%{background-position:200% center}
        100%{background-position:-200% center}
      }
      @keyframes borderPulse {
        0%,100%{border-color:rgba(37,99,235,.25)}
        50%{border-color:rgba(37,99,235,.5)}
      }
      .hero-tool-chip:hover { transform:translateY(-2px)!important; }
    `;
    document.head.appendChild(s);
    return () => { const el = document.getElementById("hero-css"); if(el) el.remove(); };
  }, []);

  return (
    <section style={{
      position: "relative",
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      background: "#F8FAFD",
      fontFamily: "'DM Sans', system-ui, sans-serif",
    }}>

      {/* ── Background layers ─────────────────────────────────────────────── */}
      {/* Base gradient */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(145deg, #F0F5FF 0%, #F8FAFD 35%, #F4F9FF 65%, #EFF4FF 100%)",
      }} />

      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle, #C7D2FE 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        opacity: .4,
        maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
      }} />

      {/* Soft orbs */}
      <div style={{
        position: "absolute", top: "-10%", right: "5%",
        width: "640px", height: "640px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(37,99,235,.07) 0%, transparent 68%)",
        filter: "blur(40px)", pointerEvents: "none",
        ...fadeIn(1),
      }} />
      <div style={{
        position: "absolute", bottom: "-5%", left: "10%",
        width: "520px", height: "520px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,.05) 0%, transparent 68%)",
        filter: "blur(60px)", pointerEvents: "none",
        ...fadeIn(1),
      }} />
      <div style={{
        position: "absolute", top: "30%", left: "35%",
        width: "340px", height: "340px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(8,145,178,.04) 0%, transparent 70%)",
        filter: "blur(50px)", pointerEvents: "none",
        ...fadeIn(2),
      }} />

      {/* Thin diagonal line accent */}
      <div style={{
        position: "absolute", top: 0, right: "38%",
        width: "1px", height: "100vh",
        background: "linear-gradient(180deg, transparent 0%, rgba(37,99,235,.08) 30%, rgba(37,99,235,.12) 60%, transparent 100%)",
        ...fadeIn(3),
      }} />

      {/* ── Main content ──────────────────────────────────────────────────── */}
      <div style={{
        position: "relative", zIndex: 2,
        width: "100%", maxWidth: "1280px",
        margin: "0 auto",
        padding: "100px 48px 80px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "48px",
        alignItems: "center",
      }}>

        {/* ── LEFT: Text content ─────────────────────────────────────────── */}
        <div>

          {/* Status badge */}
          <div style={{ ...show(1), display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "36px" }}>
            <div style={{
              display: "flex", alignItems: "center", gap: "7px",
              padding: "6px 16px 6px 8px",
              background: "rgba(255,255,255,.9)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,.95)",
              borderRadius: "100px",
              boxShadow: "0 2px 12px rgba(10,15,30,.07), 0 1px 3px rgba(10,15,30,.05)",
              animation: "borderPulse 3s ease-in-out infinite",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "5px", background: "#DCFCE7", padding: "3px 10px", borderRadius: "100px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#16A34A", display: "block", animation: "pulseDot 2.5s ease infinite" }} />
                <span style={{ fontSize: "10px", fontWeight: 700, color: "#15803D", letterSpacing: ".04em" }}>Open to Opportunities</span>
              </div>
              <span style={{ fontSize: "11px", fontWeight: 500, color: "#64748B", letterSpacing: ".01em" }}>Available · Egypt</span>
            </div>
          </div>

          {/* Main headline */}
          <div style={{ marginBottom: "24px" }}>
            <div style={{
              ...show(2),
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: "clamp(38px, 5.5vw, 72px)",
              fontWeight: 400,
              letterSpacing: "-.03em",
              lineHeight: 1.02,
              color: "#0F172A",
              marginBottom: "6px",
            }}>
              Transforming Data
            </div>
            <div style={{
              ...show(2, { transitionDelay: ".08s" }),
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: "clamp(38px, 5.5vw, 72px)",
              fontWeight: 400,
              fontStyle: "italic",
              letterSpacing: "-.03em",
              lineHeight: 1.02,
              background: "linear-gradient(135deg, #1D4ED8 0%, #4338CA 40%, #6D28D9 80%, #7C3AED 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: phase >= 2 ? "shimmerText 6s linear infinite" : "none",
              display: "block",
            }}>
              Into Decisions
            </div>
          </div>

          {/* Divider with accent */}
          <div style={{ ...show(3), display: "flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}>
            <div style={{ width: "32px", height: "2px", borderRadius: "2px", background: "linear-gradient(90deg,#2563EB,#7C3AED)" }} />
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#2563EB", opacity: .4 }} />
          </div>

          {/* Subheadline */}
          <p style={{
            ...show(3, { transitionDelay: ".06s" }),
            fontSize: "clamp(16px,2vw,20px)",
            fontWeight: 300,
            lineHeight: 1.72,
            color: "#475569",
            maxWidth: "480px",
            marginBottom: "40px",
            letterSpacing: ".005em",
          }}>
            Data Analyst & BI Developer specialising in{" "}
            <strong style={{ fontWeight: 600, color: "#1E293B" }}>Power BI dashboards</strong>,{" "}
            <strong style={{ fontWeight: 600, color: "#1E293B" }}>financial analytics</strong>, and
            intelligence systems that drive{" "}
            <em style={{ fontStyle: "italic", color: "#2563EB" }}>strategic business decisions</em>.
          </p>

          {/* CTA buttons */}
          <div style={{ ...show(4), display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "48px" }}>
            {[
              { label: "View Projects →",    id: "primary",   primary: true },
              { label: "Download CV",         id: "secondary", primary: false },
              { label: "Contact Me",          id: "ghost",     primary: false, dashed: true },
            ].map((btn) => (
              <button key={btn.id}
                onMouseEnter={() => setBtnHov(btn.id)}
                onMouseLeave={() => setBtnHov(null)}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "7px",
                  padding: btn.primary ? "13px 28px" : "12px 26px",
                  borderRadius: "10px",
                  border: btn.primary
                    ? "none"
                    : btn.dashed
                    ? "1.5px dashed #CBD5E1"
                    : "1px solid #CBD5E1",
                  background: btn.primary
                    ? "linear-gradient(135deg, #2563EB, #4F46E5)"
                    : btnHov === btn.id
                    ? "#EFF6FF"
                    : "rgba(255,255,255,.85)",
                  backdropFilter: "blur(12px)",
                  color: btn.primary ? "#fff" : btnHov === btn.id ? "#2563EB" : "#334155",
                  fontSize: "14px",
                  fontWeight: 600,
                  fontFamily: "'DM Sans', sans-serif",
                  cursor: "pointer",
                  letterSpacing: "-.01em",
                  boxShadow: btn.primary
                    ? btnHov === btn.id
                      ? "0 8px 28px rgba(37,99,235,.42), 0 3px 8px rgba(37,99,235,.22)"
                      : "0 4px 16px rgba(37,99,235,.32), 0 2px 6px rgba(37,99,235,.18)"
                    : btnHov === btn.id
                    ? "0 4px 16px rgba(10,15,30,.1)"
                    : "0 1px 4px rgba(10,15,30,.06)",
                  transform: btnHov === btn.id ? "translateY(-2px)" : "none",
                  transition: "all .22s cubic-bezier(.22,1,.36,1)",
                  position: "relative",
                  overflow: "hidden",
                }}>
                {btn.primary && (
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(255,255,255,.15) 0%,transparent 60%)", pointerEvents: "none" }} />
                )}
                {btn.id === "secondary" && <span style={{ fontSize: "12px" }}>↓</span>}
                {btn.label}
              </button>
            ))}
          </div>

          {/* Social icons */}
          <div style={{ ...show(5), display: "flex", alignItems: "center", gap: "6px", marginBottom: "36px" }}>
            <span style={{ fontSize: "11px", fontWeight: 500, color: "#94A3B8", marginRight: "8px", letterSpacing: ".04em" }}>Connect</span>
            {SOCIALS.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                onMouseEnter={() => setSocialHov(s.name)}
                onMouseLeave={() => setSocialHov(null)}
                title={s.name}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  width: "36px", height: "36px", borderRadius: "10px",
                  border: "1px solid",
                  borderColor: socialHov === s.name ? "#93C5FD" : "#E2E8F0",
                  background: socialHov === s.name ? "#EFF6FF" : "rgba(255,255,255,.8)",
                  color: socialHov === s.name ? "#2563EB" : "#64748B",
                  backdropFilter: "blur(8px)",
                  boxShadow: socialHov === s.name ? "0 4px 12px rgba(37,99,235,.18)" : "0 1px 3px rgba(10,15,30,.05)",
                  transform: socialHov === s.name ? "translateY(-2px)" : "none",
                  transition: "all .2s ease",
                  textDecoration: "none",
                }}>
                {s.icon}
              </a>
            ))}
            <div style={{ width: "1px", height: "20px", background: "#E2E8F0", margin: "0 8px" }} />
            <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "11px", color: "#94A3B8" }}>
              mostafamohamed2004525@gmail.com
            </span>
          </div>

          {/* Tool chips */}
          <div style={{ ...show(6), display: "flex", flexWrap: "wrap", gap: "6px" }}>
            <span style={{ fontSize: "10px", fontWeight: 500, color: "#94A3B8", alignSelf: "center", marginRight: "4px", letterSpacing: ".04em" }}>Stack</span>
            {TOOLS.map((t) => (
              <span key={t.name} className="hero-tool-chip"
                onMouseEnter={() => setToolHov(t.name)}
                onMouseLeave={() => setToolHov(null)}
                style={{
                  display: "inline-flex", alignItems: "center",
                  padding: "4px 12px", borderRadius: "100px",
                  background: toolHov === t.name ? t.color : "rgba(255,255,255,.85)",
                  border: "1px solid #E2E8F0",
                  fontSize: "11px", fontWeight: 600,
                  color: toolHov === t.name ? t.text : "#475569",
                  boxShadow: "0 1px 3px rgba(10,15,30,.05)",
                  transition: "all .2s ease",
                  cursor: "default",
                  backdropFilter: "blur(8px)",
                }}>
                {t.name}
              </span>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Visual cluster ──────────────────────────────────────── */}
        <div style={{ position: "relative", height: "540px", display: "flex", justifyContent: "center", alignItems: "center" }}>

          {/* Central glow halo */}
          <div style={{
            position: "absolute", width: "360px", height: "360px", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(37,99,235,.06) 0%, transparent 70%)",
            filter: "blur(20px)",
            ...fadeIn(4),
          }} />

          {/* Decorative rings */}
          <div style={{
            position: "absolute", width: "320px", height: "320px", borderRadius: "50%",
            border: "1px solid rgba(37,99,235,.1)",
            ...fadeIn(4),
          }} />
          <div style={{
            position: "absolute", width: "420px", height: "420px", borderRadius: "50%",
            border: "1px dashed rgba(37,99,235,.07)",
            animation: "rotateOrb 40s linear infinite",
            ...fadeIn(4),
          }} />
          <div style={{
            position: "absolute", width: "520px", height: "520px", borderRadius: "50%",
            border: "1px dashed rgba(124,58,237,.05)",
            animation: "rotateOrb 60s linear infinite reverse",
            ...fadeIn(4),
          }} />

          {/* Main dashboard card — center */}
          <div style={{
            position: "absolute",
            top: "50%", left: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: 10,
            animation: phase >= 5 ? "floatC 6s ease-in-out infinite" : "none",
          }}>
            <DashboardCard phase={phase} />
          </div>

          {/* Stat cards — orbiting */}
          {STATS.map((stat, i) => {
            const positions = [
              { top: "6%",  left: "-8%",   anim: "floatA 5.5s ease-in-out infinite" },
              { top: "70%", left: "-12%",  anim: "floatB 6.5s ease-in-out infinite .8s" },
              { top: "4%",  right: "-10%", anim: "floatA 5s ease-in-out infinite 1.2s" },
              { top: "72%", right: "-8%",  anim: "floatD 7s ease-in-out infinite .4s" },
            ];
            const pos = positions[i];
            const visible = phase >= 6;
            return (
              <div key={i} style={{
                position: "absolute",
                ...pos,
                zIndex: 8,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(18px)",
                transition: `opacity .6s cubic-bezier(.22,1,.36,1) ${.7 + i*.1}s, transform .6s cubic-bezier(.22,1,.36,1) ${.7+i*.1}s`,
                animation: visible ? pos.anim : "none",
              }}>
                <StatCard stat={stat} delay={i} animStyle={{}} />
              </div>
            );
          })}

          {/* Floating insight chips */}
          {[
            { label: "📊 Power BI", x: "42%", y: "2%",  delay: "1s" },
            { label: "🏦 Banking Ops", x: "32%", y: "92%", delay: "1.4s" },
            { label: "🎯 Oracle ERP",  x: "56%", y: "91%", delay: "1.8s" },
          ].map((chip, i) => (
            <div key={i} style={{
              position: "absolute",
              left: chip.x, top: chip.y,
              transform: "translateX(-50%)",
              zIndex: 9,
              opacity: phase >= 7 ? 1 : 0,
              transition: `opacity .5s ease ${chip.delay}`,
              animation: phase >= 7 ? `floatB ${5 + i}s ease-in-out infinite ${chip.delay}` : "none",
            }}>
              <div style={{
                padding: "6px 14px",
                background: "rgba(255,255,255,.88)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,.95)",
                borderRadius: "100px",
                fontSize: "11px",
                fontWeight: 600,
                color: "#334155",
                boxShadow: "0 4px 14px rgba(10,15,30,.08)",
                whiteSpace: "nowrap",
              }}>{chip.label}</div>
            </div>
          ))}

          {/* Corner accent squares */}
          {[
            { top: "8%",  left: "8%",  rotate: "12deg",  c: "#DBEAFE", size: 18 },
            { top: "88%", left: "14%", rotate: "-8deg",  c: "#EDE9FE", size: 14 },
            { top: "10%", right: "8%", rotate: "-14deg", c: "#D1FAE5", size: 16 },
            { top: "85%", right: "6%", rotate: "10deg",  c: "#FEF3C7", size: 12 },
          ].map((sq, i) => (
            <div key={i} style={{
              position: "absolute",
              ...sq,
              width: `${sq.size}px`, height: `${sq.size}px`,
              background: sq.c,
              borderRadius: "4px",
              border: "1px solid rgba(255,255,255,.8)",
              transform: `rotate(${sq.rotate})`,
              opacity: phase >= 5 ? .8 : 0,
              transition: `opacity .5s ease ${.8 + i*.1}s`,
              boxShadow: "0 2px 8px rgba(10,15,30,.08)",
            }} />
          ))}
        </div>
      </div>

      {/* ── Bottom scroll indicator ─────────────────────────────────────────── */}
      <ScrollIndicator visible={phase >= 6} />

      {/* ── Bottom gradient fade ───────────────────────────────────────────── */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "120px",
        background: "linear-gradient(transparent, rgba(248,250,253,.6))",
        pointerEvents: "none",
      }} />
    </section>
  );
}

function About() {
  const [ref, on] = useInView();
  const stats = [
    { v: "3.73", l: "GPA", sub: "/ 4.00 · Excellent", c: "#2563EB" },
    { v: "98%", l: "Accuracy", sub: "Banking Ops", c: "#059669" },
    { v: "100+", l: "Daily Trans.", sub: "Processed at NBE", c: "#0891B2" },
    { v: "$307M", l: "Revenue", sub: "Tracked & Analysed", c: "#7C3AED" },
  ];

  return (
    <section id="about" style={{ padding: "120px 32px", background: "var(--surface)" }} ref={ref}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <div className={`rv${on ? " on" : ""}`}>
          <div className="section-eyebrow"><span className="t-label">About Me</span></div>
          <h2 className="t-headline" style={{ fontSize: "clamp(32px,4vw,52px)", marginBottom: "56px", maxWidth: "640px" }}>
            Bridging finance, data, and<br />
            <span className="grad-text-2">modern intelligence</span>
          </h2>
        </div>

        <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: "72px", alignItems: "start" }}>
          <div>
            {[
              { d: "s1", text: <>Final-year accounting student at <strong style={{ color: "var(--ink-2)", fontWeight: 600 }}>Banha University</strong> (English Section) with hands-on experience at two of Egypt's premier financial institutions — processing real transactions in live banking environments.</> },
              { d: "s2", text: <>My expertise spans the full analytics stack: from <strong style={{ color: "var(--ink-2)", fontWeight: 600 }}>Oracle ERP implementation</strong> and <strong style={{ color: "var(--ink-2)", fontWeight: 600 }}>Power BI enterprise dashboards</strong> with advanced DAX, to SQL-based financial modelling and AI-powered reporting automation.</> },
              { d: "s3", text: <>I'm driven toward a career in data analytics and BI at <strong style={{ color: "var(--blue)", fontWeight: 600 }}>Big 4 or multinational financial services</strong> — where I can combine analytical precision with real business impact.</> },
            ].map(({ d, text }, i) => (
              <p key={i} className={`rv${on ? " on" : ""} ${d} t-body`} style={{ marginBottom: "18px" }}>{text}</p>
            ))}

            <div className={`rv${on ? " on" : ""} s4`} style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "12px" }}>
              {["Power BI & Advanced DAX Development", "Oracle ERP · GL · AP · AR · Fixed Assets", "Financial Analysis & Credit Risk Assessment", "AI Automation & Prompt Engineering"].map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--blue)", flexShrink: 0 }} />
                  <span style={{ fontSize: "14px", fontWeight: 500, color: "var(--ink-2)" }}>{s}</span>
                </div>
              ))}
            </div>

            <div className={`rv${on ? " on" : ""} s5`} style={{ marginTop: "32px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href={ME.linkedin} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: "13px", padding: "10px 22px" }}>View LinkedIn →</a>
              <a href={`mailto:${ME.email}`} className="btn-secondary" style={{ fontSize: "13px", padding: "10px 22px" }}>Download CV</a>
            </div>
          </div>

          {/* Right side */}
          <div className={`rv${on ? " on" : ""} s2`}>
            {/* Stat grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "var(--border)", borderRadius: "var(--r-xl)", overflow: "hidden", boxShadow: "var(--sh-lg)", marginBottom: "16px" }}>
              {stats.map((st, i) => (
                <div key={i} style={{ background: "var(--surface)", padding: "28px 24px", cursor: "default", transition: "background .2s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "var(--blue-lt)"}
                  onMouseLeave={e => e.currentTarget.style.background = "var(--surface)"}>
                  <div style={{ fontFamily: "var(--ff-display)", fontSize: "38px", fontWeight: 800, color: st.c, letterSpacing: "-.04em", lineHeight: 1, marginBottom: "4px" }}>{st.v}</div>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--ink-2)", marginBottom: "2px" }}>{st.l}</div>
                  <div style={{ fontSize: "11px", color: "var(--ghost)" }}>{st.sub}</div>
                </div>
              ))}
            </div>

            {/* Education card */}
            <div className="card-flat" style={{ padding: "24px", background: "linear-gradient(135deg, #F8FAFF, #F0F4FF)" }}>
              <div className="t-label" style={{ marginBottom: "10px" }}>Education</div>
              <div style={{ fontFamily: "var(--ff-display)", fontSize: "16px", fontWeight: 700, color: "var(--ink)", marginBottom: "4px" }}>Bachelor of Accounting</div>
              <div style={{ fontSize: "13px", color: "var(--sub)", marginBottom: "6px" }}>{ME.university}</div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "11px", fontWeight: 600, padding: "3px 10px", borderRadius: "100px", background: "var(--blue)", color: "#fff" }}>GPA {ME.gpa}</span>
                <span style={{ fontSize: "11px", color: "var(--muted)" }}>Class of {ME.graduation}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SKILLS
// ─────────────────────────────────────────────────────────────────────────────
function SkillCard({ sk, visible, idx }) {
  const [barOn, setBarOn] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setBarOn(true), idx * 80);
    return () => clearTimeout(t);
  }, [visible, idx]);

  return (
    <div className={`card rv${visible ? " on" : ""} s${Math.min(idx + 1, 6)}`}
      style={{ padding: "28px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "22px" }}>
        <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: sk.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", border: `1px solid ${sk.color}22` }}>
          {sk.icon}
        </div>
        <div>
          <div style={{ fontFamily: "var(--ff-display)", fontSize: "15px", fontWeight: 700, color: "var(--ink-2)" }}>{sk.category}</div>
          <div style={{ fontSize: "11px", color: "var(--muted)", marginTop: "1px" }}>{sk.tools.length} skills</div>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {sk.tools.map((tool, ti) => (
          <div key={ti}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
              <span style={{ fontSize: "13px", fontWeight: 500, color: "var(--ink-2)" }}>{tool.name}</span>
              <span style={{ fontSize: "11px", fontWeight: 600, color: sk.color }}>{tool.level}%</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: barOn ? `${tool.level}%` : "0%", background: `linear-gradient(90deg, ${sk.color}cc, ${sk.color})`, transitionDelay: `${ti * 0.1}s` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  const [ref, on] = useInView();
  return (
    <section id="skills" style={{ padding: "120px 32px", background: "var(--section)" }} ref={ref}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className={`rv${on ? " on" : ""}`} style={{ marginBottom: "56px", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <div className="section-eyebrow"><span className="t-label">Skills & Tools</span></div>
            <h2 className="t-headline" style={{ fontSize: "clamp(32px,4vw,52px)" }}>
              Technical<br /><span className="grad-text">expertise</span>
            </h2>
          </div>
          <p style={{ maxWidth: "320px", fontSize: "14px", lineHeight: 1.7, color: "var(--sub)" }}>
            From ERP implementation to real-time BI dashboards — a complete data professional toolkit.
          </p>
        </div>

        <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px" }}>
          {SKILLS.map((sk, i) => <SkillCard key={i} sk={sk} visible={on} idx={i} />)}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PROJECTS
// ─────────────────────────────────────────────────────────────────────────────
function ProjectCard({ p, large, visible }) {
  const [hov, setHov] = useState(false);
  return (
    <div className={`rv${visible ? " on" : ""}`}
      style={{
        background: "var(--surface)", border: `1px solid ${hov ? "#CBD5E1" : "var(--border)"}`,
        borderRadius: "var(--r-xl)", overflow: "hidden",
        boxShadow: hov ? "var(--sh-xl)" : "var(--sh-sm)",
        transform: hov ? "translateY(-4px)" : "none",
        transition: "all .3s var(--ease)",
        display: "flex", flexDirection: "column",
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}>

      {/* Image area */}
      <div className="img-placeholder" style={{ height: large ? "240px" : "180px" }}>
        {/* Top badge */}
        <div style={{ position: "absolute", top: "14px", left: "14px", display: "flex", gap: "6px" }}>
          <span style={{ fontFamily: "var(--ff-body)", fontSize: "10px", fontWeight: 700, padding: "4px 10px", borderRadius: "100px", background: "rgba(255,255,255,.92)", color: p.color, border: `1px solid ${p.color}30`, backdropFilter: "blur(8px)" }}>
            {p.num}
          </span>
          {p.featured && (
            <span style={{ fontSize: "10px", fontWeight: 600, padding: "4px 10px", borderRadius: "100px", background: p.color, color: "#fff" }}>Featured</span>
          )}
        </div>

        {/* Placeholder icon */}
        <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: p.gradient, border: `1.5px dashed ${p.color}60`, display: "flex", alignItems: "center", justifyContent: "center", color: p.color, fontSize: "22px", zIndex: 1 }}>⊕</div>
        <span style={{ fontSize: "10px", fontWeight: 500, color: "var(--ghost)", letterSpacing: ".1em", textTransform: "uppercase", zIndex: 1 }}>Add Screenshot</span>
      </div>

      {/* Content */}
      <div style={{ padding: large ? "28px" : "22px", flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: ".08em", color: p.color, textTransform: "uppercase", marginBottom: "6px" }}>{p.category}</div>
        <h3 style={{ fontFamily: "var(--ff-display)", fontSize: large ? "22px" : "17px", fontWeight: 700, color: "var(--ink)", lineHeight: 1.25, marginBottom: "12px", letterSpacing: "-.02em" }}>{p.title}</h3>

        {large && (
          <>
            <div style={{ marginBottom: "16px" }}>
              <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--muted)", letterSpacing: ".06em", textTransform: "uppercase", marginBottom: "6px" }}>Problem</div>
              <p style={{ fontSize: "13px", lineHeight: 1.65, color: "var(--sub)" }}>{p.problem}</p>
            </div>
            <div style={{ marginBottom: "16px" }}>
              <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--muted)", letterSpacing: ".06em", textTransform: "uppercase", marginBottom: "6px" }}>Solution</div>
              <p style={{ fontSize: "13px", lineHeight: 1.65, color: "var(--sub)" }}>{p.solution}</p>
            </div>

            {/* Results */}
            <div style={{ background: p.gradient, borderRadius: "var(--r-md)", padding: "14px 16px", marginBottom: "16px" }}>
              <div style={{ fontSize: "11px", fontWeight: 700, color: p.color, letterSpacing: ".06em", textTransform: "uppercase", marginBottom: "8px" }}>Results & Impact</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
                {p.results.map((r, ri) => (
                  <div key={ri} style={{ display: "flex", alignItems: "flex-start", gap: "6px" }}>
                    <span style={{ color: p.color, fontSize: "11px", marginTop: "1px", flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: "12px", color: "var(--ink-2)", fontWeight: 500 }}>{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {!large && (
          <p style={{ fontSize: "13px", lineHeight: 1.65, color: "var(--sub)", marginBottom: "12px", flex: 1 }}>{p.problem.slice(0, 100)}…</p>
        )}

        {/* Tech chips */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: large ? "20px" : "0" }}>
          {p.tech.map((t, ti) => <span key={ti} className="chip">{t}</span>)}
        </div>

        {large && (
          <div style={{ display: "flex", gap: "10px", paddingTop: "4px" }}>
            <button className="btn-primary" style={{ fontSize: "12px", padding: "9px 18px" }}>View Demo →</button>
            <button className="btn-secondary" style={{ fontSize: "12px", padding: "9px 18px" }}>GitHub ↗</button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    index: "01",
    featured: true,
    category: "Business Intelligence",
    title: "HR Analytics & Workforce Intelligence Dashboard",
    subtitle: "Enterprise BI · Power BI · 7-Page Report",
    description:
      "Built a comprehensive 7-page executive HR intelligence system that transformed scattered spreadsheet data into a single source of truth for workforce decision-making.",
    problem:
      "HR leadership had zero visibility into attrition patterns, compensation trends, and headcount distribution. Critical people decisions were made on gut feel, not data.",
    solution:
      "Engineered a 7-page Power BI report with advanced DAX measures, custom visuals, and automated refresh — covering attrition forecasting, turnover segmentation, compensation heat maps, and demographic analytics.",
    results: [
      { metric: "12%", label: "Turnover Reduction Identified" },
      { metric: "2,000+", label: "Employee Records Modelled" },
      { metric: "20+", label: "Live KPI Metrics" },
      { metric: "7", label: "Report Pages Built" },
    ],
    tech: ["Power BI", "DAX", "Data Modeling", "Power Query", "HR Analytics"],
    accentColor: "#2563EB",
    lightBg: "#EFF6FF",
    midBg: "#DBEAFE",
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    index: "02",
    featured: true,
    category: "Financial Analytics",
    title: "Sales Revenue Intelligence Platform",
    subtitle: "Excel Analytics · VBA · $307M Revenue",
    description:
      "Transformed 60,000+ raw transaction records spanning 4 fiscal years into a fully automated executive analytics platform with dynamic filtering and instant YoY comparisons.",
    problem:
      "$307M in revenue data was trapped in flat Excel files with no analysis framework. Leadership had no clear view of growth drivers, underperforming segments, or margin trends.",
    solution:
      "Built a macro-powered Excel analytics engine with 15 interconnected pivot tables, VBA automation, dynamic charts, and a one-click executive report generator — slashing reporting time from days to minutes.",
    results: [
      { metric: "$307M", label: "Revenue Tracked" },
      { metric: "8%",    label: "Quarterly Growth Identified" },
      { metric: "60K+",  label: "Transactions Modelled" },
      { metric: "41%",   label: "Profit Margin Measured" },
    ],
    tech: ["Advanced Excel", "VBA Macros", "Pivot Tables", "Financial Modelling", "Data Visualisation"],
    accentColor: "#0891B2",
    lightBg: "#ECFEFF",
    midBg: "#CFFAFE",
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    index: "03",
    featured: false,
    category: "Operations Analytics",
    title: "Call Center Performance Dashboard",
    subtitle: "Power BI · Real-Time Operations · SLA Monitoring",
    description:
      "Designed a real-time operations control dashboard that gave call centre managers instant clarity on agent performance, SLA adherence, and queue health.",
    problem:
      "Managers relied on end-of-day reports to assess performance. By then, SLA breaches had already occurred and corrective action was too late.",
    solution:
      "Created a live Power BI dashboard with auto-refresh, custom dark display-wall layout, agent performance rankings, and SLA threshold alerts — built for wall-mounted monitoring screens.",
    results: [
      { metric: "Live", label: "Real-Time KPI Feed" },
      { metric: "SLA", label: "Threshold Alerts Active" },
      { metric: "100%", label: "Agent Coverage" },
      { metric: "−40%", label: "Reporting Lag Eliminated" },
    ],
    tech: ["Power BI", "DAX", "Operations Analytics", "Custom Visuals", "Auto-Refresh"],
    accentColor: "#7C3AED",
    lightBg: "#F5F3FF",
    midBg: "#EDE9FE",
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    index: "04",
    featured: false,
    category: "Healthcare Analytics",
    title: "Hospital Operations Intelligence Dashboard",
    subtitle: "Power BI · Healthcare KPIs · Custom Visuals",
    description:
      "Delivered a multi-department hospital intelligence dashboard enabling management to track patient flow, bed utilisation, and operational KPIs from a single unified view.",
    problem:
      "Hospital departments operated in silos with disconnected data. Executive leadership had no consolidated view of resource utilisation or patient experience metrics.",
    solution:
      "Built a healthcare Power BI solution with custom visual components, cross-department drill-through, patient flow modelling, and auto-updating operational KPI cards.",
    results: [
      { metric: "5+",    label: "Departments Unified" },
      { metric: "Custom", label: "Visual Components Built" },
      { metric: "Live",  label: "Patient Flow Tracking" },
      { metric: "Apr 26", label: "Delivered On Schedule" },
    ],
    tech: ["Power BI", "Custom Visuals", "Healthcare Analytics", "DAX", "Cross-Filtering"],
    accentColor: "#059669",
    lightBg: "#ECFDF5",
    midBg: "#D1FAE5",
    github: "#",
    demo: "#",
  },
  {
    id: 5,
    index: "05",
    featured: false,
    category: "Banking Policy Research",
    title: "SME Financial Inclusion Study",
    subtitle: "CBE Initiatives · Egypt Vision 2030 · Executive Research",
    description:
      "Conducted a comprehensive policy analysis of Central Bank of Egypt SME financing initiatives, delivering strategic recommendations directly to executive banking leadership.",
    problem:
      "No structured evaluation existed for 8+ CBE SME financing programs. Leadership needed evidence-based recommendations aligned with Egypt Vision 2030 economic objectives.",
    solution:
      "Performed deep-dive analysis across 8+ CBE and NBE programs, benchmarked international SME financing models, and delivered a 5-recommendation strategic report presented to the Head of North Cairo Region.",
    results: [
      { metric: "8+",   label: "CBE Initiatives Analysed" },
      { metric: "5+",   label: "Strategic Recommendations" },
      { metric: "Exec", label: "Leadership Presentation" },
      { metric: "2030", label: "Vision-Aligned Outcomes" },
    ],
    tech: ["Financial Analysis", "Policy Research", "SME Finance", "Strategic Reporting", "Risk Assessment"],
    accentColor: "#D97706",
    lightBg: "#FFFBEB",
    midBg: "#FEF3C7",
    github: "#",
    demo: "#",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// HOOKS
// ─────────────────────────────────────────────────────────────────────────────
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ─────────────────────────────────────────────────────────────────────────────
// STYLES
// ─────────────────────────────────────────────────────────────────────────────
function useStyles() {
  useEffect(() => {
    if (document.getElementById("proj-styles")) return;
    const lk = document.createElement("link");
    lk.href = "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap";
    lk.rel = "stylesheet";
    document.head.appendChild(lk);

    const s = document.createElement("style");
    s.id = "proj-styles";
    s.textContent = `
      .proj-section * { box-sizing: border-box; }
      .proj-section {
        --ff-serif: 'Instrument Serif', Georgia, serif;
        --ff-sans: 'DM Sans', system-ui, sans-serif;
        --ff-mono: 'DM Mono', 'Courier New', monospace;
        --ink: #0F172A;
        --ink2: #1E293B;
        --sub: #475569;
        --muted: #64748B;
        --ghost: #94A3B8;
        --border: #E2E8F0;
        --borderhi: #CBD5E1;
        --surface: #FFFFFF;
        --section: #F8FAFC;
        --section2: #F1F5F9;
        --ease: cubic-bezier(.22,1,.36,1);
      }

      @keyframes proj-fadeUp {
        from { opacity:0; transform:translateY(24px) }
        to   { opacity:1; transform:none }
      }
      @keyframes proj-scaleIn {
        from { opacity:0; transform:scale(.97) }
        to   { opacity:1; transform:none }
      }
      @keyframes proj-shimmer {
        0%   { background-position: -200% center }
        100% { background-position:  200% center }
      }
      @keyframes proj-pulse {
        0%,100% { opacity:1; transform:scale(1) }
        50%      { opacity:.5; transform:scale(.85) }
      }
      @keyframes proj-slideBar {
        from { width: 0 }
        to   { width: var(--bar-w) }
      }
      @keyframes proj-borderGlow {
        0%,100% { box-shadow: 0 0 0 0 transparent }
        50%     { box-shadow: 0 0 0 3px var(--glow-c) }
      }

      .proj-rv {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity .65s var(--ease), transform .65s var(--ease);
      }
      .proj-rv.on { opacity:1; transform:none; }
      .proj-rv.d1 { transition-delay: .06s }
      .proj-rv.d2 { transition-delay: .12s }
      .proj-rv.d3 { transition-delay: .18s }
      .proj-rv.d4 { transition-delay: .24s }
      .proj-rv.d5 { transition-delay: .30s }
      .proj-rv.d6 { transition-delay: .36s }

      .proj-card {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 20px;
        overflow: hidden;
        transition: box-shadow .32s var(--ease), border-color .32s var(--ease), transform .32s var(--ease);
        box-shadow: 0 2px 8px rgba(10,15,30,.05), 0 1px 3px rgba(10,15,30,.04);
        cursor: default;
      }
      .proj-card:hover {
        box-shadow: 0 20px 60px rgba(10,15,30,.10), 0 8px 20px rgba(10,15,30,.06);
        border-color: var(--borderhi);
        transform: translateY(-4px);
      }

      .proj-compact-card {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 16px;
        overflow: hidden;
        transition: all .3s var(--ease);
        box-shadow: 0 1px 4px rgba(10,15,30,.05);
        cursor: default;
      }
      .proj-compact-card:hover {
        box-shadow: 0 16px 48px rgba(10,15,30,.09), 0 6px 16px rgba(10,15,30,.05);
        border-color: var(--borderhi);
        transform: translateY(-3px);
      }

      .proj-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-family: var(--ff-sans);
        font-size: 13px;
        font-weight: 600;
        padding: 10px 20px;
        border-radius: 9px;
        cursor: pointer;
        text-decoration: none;
        transition: all .22s var(--ease);
        border: none;
        letter-spacing: -.01em;
      }
      .proj-btn-primary {
        color: #fff;
        box-shadow: 0 2px 8px rgba(0,0,0,.2);
        position: relative;
        overflow: hidden;
      }
      .proj-btn-primary::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, rgba(255,255,255,.16) 0%, transparent 60%);
        pointer-events: none;
      }
      .proj-btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(0,0,0,.28);
      }
      .proj-btn-outline {
        background: var(--surface);
        color: var(--ink2);
        border: 1px solid var(--border);
        box-shadow: 0 1px 3px rgba(10,15,30,.06);
      }
      .proj-btn-outline:hover {
        border-color: var(--borderhi);
        background: var(--section);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(10,15,30,.08);
      }

      .proj-tech-chip {
        display: inline-flex;
        align-items: center;
        font-family: var(--ff-mono);
        font-size: 10.5px;
        font-weight: 500;
        padding: 4px 11px;
        border-radius: 100px;
        border: 1px solid var(--border);
        background: var(--section);
        color: var(--sub);
        letter-spacing: .02em;
        transition: all .2s;
        white-space: nowrap;
      }
      .proj-tech-chip:hover {
        background: var(--section2);
        border-color: var(--borderhi);
        color: var(--ink2);
      }

      .proj-metric-card {
        border-radius: 12px;
        padding: 14px 16px;
        border: 1px solid;
        transition: transform .25s var(--ease), box-shadow .25s var(--ease);
      }
      .proj-metric-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 24px rgba(10,15,30,.08);
      }

      .proj-img-ph {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        border-bottom: 1px solid var(--border);
        cursor: pointer;
        transition: background .25s;
        position: relative;
        overflow: hidden;
      }
      .proj-img-ph::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(135deg, transparent 50%, rgba(255,255,255,.3) 100%);
        pointer-events: none;
      }

      .proj-category-badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-family: var(--ff-sans);
        font-size: 10px;
        font-weight: 700;
        letter-spacing: .1em;
        text-transform: uppercase;
        padding: 4px 12px;
        border-radius: 100px;
      }

      @media (max-width: 900px) {
        .proj-featured-grid { grid-template-columns: 1fr !important; }
        .proj-compact-grid  { grid-template-columns: 1fr !important; }
        .proj-metrics-grid  { grid-template-columns: 1fr 1fr !important; }
        .proj-header-row    { flex-direction: column !important; align-items: flex-start !important; }
        .proj-px            { padding-left: 24px !important; padding-right: 24px !important; }
      }
      @media (max-width: 600px) {
        .proj-metrics-grid  { grid-template-columns: 1fr 1fr !important; }
        .proj-btn-row       { flex-direction: column !important; }
        .proj-px            { padding-left: 20px !important; padding-right: 20px !important; }
      }
    `;
    document.head.appendChild(s);
    return () => {
      const el = document.getElementById("proj-styles");
      if (el) el.remove();
    };
  }, []);
}

// ─────────────────────────────────────────────────────────────────────────────
// IMAGE PLACEHOLDER
// ─────────────────────────────────────────────────────────────────────────────
function ImgPlaceholder({ project, height = 260 }) {
  const [hov, setHov] = useState(false);
  return (
    <div className="proj-img-ph"
      style={{
        height,
        background: hov
          ? `linear-gradient(145deg, ${project.midBg}, ${project.lightBg})`
          : `linear-gradient(145deg, ${project.lightBg}, #F8FAFC, ${project.lightBg})`,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}>

      {/* Index watermark */}
      <div style={{
        position: "absolute", top: "16px", left: "20px",
        fontFamily: "var(--ff-mono)", fontSize: "10px", fontWeight: 500,
        color: project.accentColor, letterSpacing: ".14em",
        padding: "3px 10px", borderRadius: "100px",
        background: "rgba(255,255,255,.85)",
        border: `1px solid ${project.accentColor}30`,
        backdropFilter: "blur(8px)",
      }}>
        {project.index}
      </div>

      {/* Category badge */}
      {project.featured && (
        <div style={{
          position: "absolute", top: "16px", right: "20px",
          background: project.accentColor, color: "#fff",
          borderRadius: "100px", padding: "3px 10px",
          fontSize: "9px", fontWeight: 700, letterSpacing: ".08em",
          fontFamily: "var(--ff-sans)",
          boxShadow: `0 2px 8px ${project.accentColor}40`,
        }}>Featured</div>
      )}

      {/* Center icon */}
      <div style={{
        width: "56px", height: "56px", borderRadius: "16px",
        background: "rgba(255,255,255,.85)",
        border: `1.5px dashed ${project.accentColor}55`,
        display: "flex", alignItems: "center", justifyContent: "center",
        backdropFilter: "blur(8px)",
        boxShadow: "0 4px 16px rgba(10,15,30,.06)",
        transform: hov ? "scale(1.06)" : "scale(1)",
        transition: "transform .3s cubic-bezier(.22,1,.36,1)",
        zIndex: 1,
      }}>
        <span style={{ fontSize: "24px" }}>
          {project.id === 1 ? "📊" : project.id === 2 ? "💰" : project.id === 3 ? "📞" : project.id === 4 ? "🏥" : "🏦"}
        </span>
      </div>
      <span style={{
        fontFamily: "var(--ff-mono)", fontSize: "9px",
        color: "#94A3B8", letterSpacing: ".16em", textTransform: "uppercase", zIndex: 1,
      }}>
        Replace with screenshot
      </span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// METRICS ROW
// ─────────────────────────────────────────────────────────────────────────────
function MetricsRow({ project, visible }) {
  return (
    <div className="proj-metrics-grid" style={{
      display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "10px",
    }}>
      {project.results.map((r, i) => (
        <div key={i} className="proj-metric-card"
          style={{
            background: project.lightBg,
            borderColor: `${project.accentColor}20`,
            opacity: visible ? 1 : 0,
            transform: visible ? "none" : "translateY(10px)",
            transition: `opacity .5s ease ${.3 + i * .08}s, transform .5s ease ${.3 + i * .08}s`,
          }}>
          <div style={{
            fontFamily: "var(--ff-mono)",
            fontSize: "22px", fontWeight: 500,
            color: project.accentColor,
            letterSpacing: "-.03em", lineHeight: 1,
            marginBottom: "5px",
          }}>{r.metric}</div>
          <div style={{
            fontFamily: "var(--ff-sans)",
            fontSize: "10.5px", fontWeight: 500,
            color: "#64748B", lineHeight: 1.4,
          }}>{r.label}</div>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FEATURED CARD (large — 2 col layout)
// ─────────────────────────────────────────────────────────────────────────────
function FeaturedCard({ project, visible, delay }) {
  const [hov, setHov] = useState(false);
  const [tab, setTab] = useState("problem");

  return (
    <div className={`proj-card proj-rv${visible ? " on" : ""} d${delay}`}
      style={{ display: "flex", flexDirection: "column" }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}>

      {/* Image */}
      <ImgPlaceholder project={project} height={240} />

      {/* Body */}
      <div style={{ padding: "28px", flex: 1, display: "flex", flexDirection: "column" }}>

        {/* Category */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px", flexWrap: "wrap", gap: "8px" }}>
          <span className="proj-category-badge"
            style={{ color: project.accentColor, background: project.lightBg, border: `1px solid ${project.accentColor}25` }}>
            <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: project.accentColor, animation: "proj-pulse 2.5s ease infinite" }} />
            {project.category}
          </span>
          <span style={{ fontFamily: "var(--ff-mono)", fontSize: "10px", color: "#94A3B8" }}>
            {project.subtitle.split("·")[0].trim()}
          </span>
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: "var(--ff-serif)",
          fontSize: "22px", fontWeight: 400,
          color: "#0F172A", lineHeight: 1.25,
          letterSpacing: "-.02em", marginBottom: "10px",
        }}>{project.title}</h3>

        {/* Description */}
        <p style={{
          fontFamily: "var(--ff-sans)",
          fontSize: "14px", lineHeight: 1.72,
          color: "#475569", marginBottom: "20px",
        }}>{project.description}</p>

        {/* Tabbed content — Problem / Solution */}
        <div style={{ marginBottom: "20px" }}>
          <div style={{ display: "flex", gap: "0", marginBottom: "14px", background: "#F1F5F9", borderRadius: "10px", padding: "3px" }}>
            {["problem", "solution"].map((t) => (
              <button key={t} onClick={() => setTab(t)}
                style={{
                  flex: 1, padding: "8px 14px", border: "none", cursor: "pointer",
                  borderRadius: "8px", fontFamily: "var(--ff-sans)", fontSize: "12px",
                  fontWeight: 600, letterSpacing: ".02em",
                  color: tab === t ? "#0F172A" : "#64748B",
                  background: tab === t ? "#FFFFFF" : "transparent",
                  boxShadow: tab === t ? "0 1px 4px rgba(10,15,30,.08)" : "none",
                  transition: "all .2s ease",
                  textTransform: "capitalize",
                }}>
                {t === "problem" ? "🔍 Problem" : "💡 Solution"}
              </button>
            ))}
          </div>
          <p style={{
            fontFamily: "var(--ff-sans)", fontSize: "13px", lineHeight: 1.7,
            color: "#475569",
            padding: "14px 16px",
            background: tab === "problem" ? "#FFFBEB" : project.lightBg,
            borderRadius: "10px",
            border: `1px solid ${tab === "problem" ? "#FDE68A" : project.accentColor + "25"}`,
            transition: "all .25s ease",
            minHeight: "80px",
          }}>
            {tab === "problem" ? project.problem : project.solution}
          </p>
        </div>

        {/* Metrics */}
        <MetricsRow project={project} visible={visible} />

        {/* Tech chips */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", margin: "18px 0" }}>
          {project.tech.map((t, i) => (
            <span key={i} className="proj-tech-chip">{t}</span>
          ))}
        </div>

        {/* Buttons */}
        <div className="proj-btn-row" style={{ display: "flex", gap: "10px", marginTop: "auto", paddingTop: "4px" }}>
          <a href={project.demo} className="proj-btn proj-btn-primary"
            style={{ background: `linear-gradient(135deg, ${project.accentColor}, ${project.accentColor}cc)`, flex: 1, justifyContent: "center" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="m10 15 5-3-5-3v6z"/></svg>
            Live Demo
          </a>
          <a href={project.github} className="proj-btn proj-btn-outline" style={{ justifyContent: "center" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPACT CARD (smaller — 3 col)
// ─────────────────────────────────────────────────────────────────────────────
function CompactCard({ project, visible, delay }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`proj-compact-card proj-rv${visible ? " on" : ""} d${delay}`}
      style={{ display: "flex", flexDirection: "column" }}>

      <ImgPlaceholder project={project} height={170} />

      <div style={{ padding: "22px", flex: 1, display: "flex", flexDirection: "column" }}>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
          <span className="proj-category-badge"
            style={{ color: project.accentColor, background: project.lightBg, border: `1px solid ${project.accentColor}22`, fontSize: "9px" }}>
            <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: project.accentColor }} />
            {project.category}
          </span>
          <span style={{ fontFamily: "var(--ff-mono)", fontSize: "9px", color: "#CBD5E1" }}>{project.index}</span>
        </div>

        <h3 style={{
          fontFamily: "var(--ff-serif)", fontSize: "17px", fontWeight: 400,
          color: "#0F172A", lineHeight: 1.3, letterSpacing: "-.01em", marginBottom: "8px",
        }}>{project.title}</h3>

        <p style={{
          fontFamily: "var(--ff-sans)", fontSize: "12.5px", lineHeight: 1.68,
          color: "#64748B", marginBottom: "14px", flex: 1,
        }}>{project.description}</p>

        {/* Expandable detail */}
        <div style={{
          overflow: "hidden", maxHeight: expanded ? "400px" : "0",
          transition: "max-height .4s cubic-bezier(.22,1,.36,1)",
        }}>
          <div style={{ padding: "12px 14px", background: project.lightBg, borderRadius: "10px", marginBottom: "12px", border: `1px solid ${project.accentColor}20` }}>
            <div style={{ fontSize: "10px", fontWeight: 700, color: project.accentColor, letterSpacing: ".08em", textTransform: "uppercase", marginBottom: "6px" }}>Problem</div>
            <p style={{ fontSize: "12px", lineHeight: 1.65, color: "#475569" }}>{project.problem}</p>
          </div>
          <div className="proj-metrics-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "7px", marginBottom: "12px" }}>
            {project.results.map((r, i) => (
              <div key={i} style={{ padding: "10px 12px", borderRadius: "10px", background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                <div style={{ fontFamily: "var(--ff-mono)", fontSize: "17px", fontWeight: 500, color: project.accentColor, lineHeight: 1 }}>{r.metric}</div>
                <div style={{ fontSize: "10px", color: "#64748B", marginTop: "3px" }}>{r.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech chips */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "14px" }}>
          {project.tech.slice(0, 3).map((t, i) => (
            <span key={i} className="proj-tech-chip" style={{ fontSize: "9.5px", padding: "3px 9px" }}>{t}</span>
          ))}
          {project.tech.length > 3 && (
            <span className="proj-tech-chip" style={{ fontSize: "9.5px", padding: "3px 9px", color: project.accentColor }}>
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        {/* Action row */}
        <div style={{ display: "flex", gap: "8px" }}>
          <button onClick={() => setExpanded(!expanded)}
            style={{
              flex: 1, padding: "9px 14px",
              background: expanded ? project.lightBg : "#F8FAFC",
              border: `1px solid ${expanded ? project.accentColor + "40" : "#E2E8F0"}`,
              borderRadius: "8px", cursor: "pointer",
              fontFamily: "var(--ff-sans)", fontSize: "11px", fontWeight: 600,
              color: expanded ? project.accentColor : "#475569",
              transition: "all .2s ease",
            }}>
            {expanded ? "↑ Less" : "↓ Case Study"}
          </button>
          <a href={project.demo}
            style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              width: "38px", height: "38px", borderRadius: "8px",
              background: project.accentColor, color: "#fff", textDecoration: "none",
              boxShadow: `0 2px 8px ${project.accentColor}40`,
              transition: "all .2s ease", fontSize: "14px",
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 6px 18px ${project.accentColor}50`; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = `0 2px 8px ${project.accentColor}40`; }}>
            ↗
          </a>
          <a href={project.github}
            style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              width: "38px", height: "38px", borderRadius: "8px",
              background: "#fff", border: "1px solid #E2E8F0", color: "#475569",
              textDecoration: "none", transition: "all .2s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#CBD5E1"; e.currentTarget.style.background = "#F8FAFC"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.background = "#fff"; }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION HEADER
// ─────────────────────────────────────────────────────────────────────────────
function SectionHeader({ visible }) {
  return (
    <div className={`proj-rv${visible ? " on" : ""}`}
      style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "56px", flexWrap: "wrap", gap: "24px" }}
      className="proj-header-row">

      <div>
        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
          <div style={{ width: "22px", height: "2px", borderRadius: "2px", background: "linear-gradient(90deg,#2563EB,#7C3AED)" }} />
          <span style={{ fontFamily: "var(--ff-sans)", fontSize: "10px", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "#2563EB" }}>
            Case Studies
          </span>
        </div>

        {/* Headline */}
        <h2 style={{
          fontFamily: "var(--ff-serif)",
          fontSize: "clamp(34px,4.5vw,58px)",
          fontWeight: 400,
          letterSpacing: "-.03em",
          lineHeight: 1.06,
          color: "#0F172A",
          marginBottom: "0",
        }}>
          Real projects,
          <br />
          <span style={{
            fontStyle: "italic",
            background: "linear-gradient(135deg, #1D4ED8 0%, #4338CA 45%, #6D28D9 100%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: visible ? "proj-shimmer 5s linear infinite" : "none",
          }}>
            measurable impact
          </span>
        </h2>
      </div>

      {/* Right side */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "10px" }}>
        <div style={{
          fontFamily: "var(--ff-mono)",
          fontSize: "80px", fontWeight: 500,
          color: "#E2E8F0", lineHeight: 1,
          letterSpacing: "-.04em",
          userSelect: "none",
        }}>
          0{PROJECTS.length}
        </div>
        <p style={{ maxWidth: "260px", fontFamily: "var(--ff-sans)", fontSize: "13px", lineHeight: 1.65, color: "#64748B", textAlign: "right" }}>
          From banking operations to enterprise dashboards — analytics that drove real decisions.
        </p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PROJECTS SECTION — MAIN EXPORT
// ─────────────────────────────────────────────────────────────────────────────
function Projects() {
  useStyles();
  const [ref, visible] = useInView(0.08);
  const featured = PROJECTS.filter((p) => p.featured);
  const compact  = PROJECTS.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      ref={ref}
      className="proj-section proj-px"
      style={{
        padding: "120px 48px",
        background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 40%, #FFFFFF 100%)",
        position: "relative",
        overflow: "hidden",
      }}>

      {/* Ambient bg shape */}
      <div style={{
        position: "absolute", top: "10%", right: "-5%",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(37,99,235,.04) 0%, transparent 70%)",
        filter: "blur(50px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", left: "-5%",
        width: "400px", height: "400px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,.03) 0%, transparent 70%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1240px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Header */}
        <SectionHeader visible={visible} />

        {/* Featured — 2 col */}
        <div className="proj-featured-grid" style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "20px", marginBottom: "20px",
        }}>
          {featured.map((p, i) => (
            <FeaturedCard key={p.id} project={p} visible={visible} delay={i + 1} />
          ))}
        </div>

        {/* Compact — 3 col */}
        <div className="proj-compact-grid" style={{
          display: "grid", gridTemplateColumns: "repeat(3,1fr)",
          gap: "16px",
        }}>
          {compact.map((p, i) => (
            <CompactCard key={p.id} project={p} visible={visible} delay={i + 1} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`proj-rv${visible ? " on" : ""} d5`}
          style={{ display: "flex", justifyContent: "center", marginTop: "56px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "20px",
            padding: "20px 36px",
            background: "rgba(255,255,255,.85)",
            backdropFilter: "blur(16px)",
            border: "1px solid #E2E8F0",
            borderRadius: "16px",
            boxShadow: "0 4px 20px rgba(10,15,30,.06)",
          }}>
            <div>
              <div style={{ fontFamily: "var(--ff-sans)", fontSize: "14px", fontWeight: 600, color: "#0F172A", marginBottom: "2px" }}>
                Want to see more work?
              </div>
              <div style={{ fontFamily: "var(--ff-sans)", fontSize: "12px", color: "#64748B" }}>
                Get in touch to discuss analytics challenges
              </div>
            </div>
            <div style={{ width: "1px", height: "36px", background: "#E2E8F0" }} />
            <a href="#contact" className="proj-btn proj-btn-primary"
              style={{ background: "linear-gradient(135deg,#2563EB,#4F46E5)", whiteSpace: "nowrap" }}>
              Let's Talk →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

function Experience() {
  const [ref, on] = useInView();
  const [active, setActive] = useState(0);
  const exp = EXPERIENCE[active];

  return (
    <section id="experience" style={{ padding: "120px 32px", background: "var(--section)" }} ref={ref}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <div className={`rv${on ? " on" : ""}`} style={{ marginBottom: "56px" }}>
          <div className="section-eyebrow"><span className="t-label">Experience</span></div>
          <h2 className="t-headline" style={{ fontSize: "clamp(32px,4vw,52px)" }}>
            Banking &<br /><span className="grad-text">professional journey</span>
          </h2>
        </div>

        <div className="grid-2" style={{ display: "grid", gridTemplateColumns: ".9fr 1.1fr", gap: "40px", alignItems: "start" }}>

          {/* Tab buttons */}
          <div className={`rv${on ? " on" : ""} s1`} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {EXPERIENCE.map((e, i) => (
              <button key={i} onClick={() => setActive(i)}
                style={{
                  display: "flex", flexDirection: "column", alignItems: "flex-start",
                  padding: "20px 22px", border: "none", cursor: "pointer", textAlign: "left",
                  borderRadius: "var(--r-lg)",
                  background: active === i ? "var(--surface)" : "transparent",
                  boxShadow: active === i ? "var(--sh-md)" : "none",
                  borderLeft: `3px solid ${active === i ? e.color : "transparent"}`,
                  transition: "all .25s var(--ease)",
                }}>
                <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: ".08em", color: active === i ? e.color : "var(--ghost)", textTransform: "uppercase", marginBottom: "4px" }}>{e.type}</div>
                <div style={{ fontFamily: "var(--ff-display)", fontSize: "15px", fontWeight: 700, color: active === i ? "var(--ink)" : "var(--sub)", marginBottom: "2px" }}>{e.company}</div>
                <div style={{ fontSize: "11px", color: "var(--muted)", fontWeight: 500 }}>{e.period}</div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className={`rv${on ? " on" : ""} s2`}>
            <div className="card" key={active} style={{ padding: "32px", borderLeft: `4px solid ${exp.color}`, animation: "scaleUp .35s var(--ease)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px", flexWrap: "wrap", gap: "12px" }}>
                <div>
                  <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: ".08em", color: exp.color, textTransform: "uppercase", marginBottom: "6px" }}>{exp.type}</div>
                  <h3 style={{ fontFamily: "var(--ff-display)", fontSize: "20px", fontWeight: 700, color: "var(--ink)", letterSpacing: "-.02em", marginBottom: "4px" }}>{exp.role}</h3>
                  <div style={{ fontSize: "14px", fontWeight: 600, color: exp.color }}>{exp.company}</div>
                </div>
                <div style={{ padding: "6px 14px", borderRadius: "100px", background: "var(--section)", border: "1px solid var(--border)", fontSize: "12px", fontWeight: 600, color: "var(--muted)", whiteSpace: "nowrap" }}>
                  {exp.period}
                </div>
              </div>

              <div style={{ height: "1px", background: "var(--border)", marginBottom: "22px" }} />

              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {exp.points.map((pt, pi) => (
                  <div key={pi} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                    <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: `${exp.color}15`, border: `1.5px solid ${exp.color}40`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
                      <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: exp.color }} />
                    </div>
                    <p style={{ fontSize: "14px", lineHeight: 1.65, color: "var(--sub)", flex: 1 }}>{pt}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CERTIFICATIONS
// ─────────────────────────────────────────────────────────────────────────────
function Certifications() {
  const [ref, on] = useInView();
  return (
    <section id="certifications" style={{ padding: "120px 32px", background: "var(--surface)" }} ref={ref}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <div className={`rv${on ? " on" : ""}`} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "56px", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <div className="section-eyebrow"><span className="t-label">Certifications</span></div>
            <h2 className="t-headline" style={{ fontSize: "clamp(32px,4vw,52px)" }}>
              Credentials &<br /><span className="grad-text">training</span>
            </h2>
          </div>
          <div style={{ fontFamily: "var(--ff-display)", fontSize: "72px", fontWeight: 800, color: "var(--border)", lineHeight: 1 }}>06</div>
        </div>

        {/* Table-style list */}
        <div className={`rv${on ? " on" : ""} s1`} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--r-xl)", overflow: "hidden", boxShadow: "var(--sh-md)" }}>
          {/* Header */}
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "0", padding: "14px 24px", background: "var(--section)", borderBottom: "1px solid var(--border)" }}>
            {["Certification", "Issuing Organisation", "Period"].map((h, i) => (
              <div key={i} style={{ fontSize: "11px", fontWeight: 700, color: "var(--muted)", letterSpacing: ".06em", textTransform: "uppercase" }}>{h}</div>
            ))}
          </div>

          {CERTS.map((c, i) => (
            <div key={i}
              className={`rv${on ? " on" : ""} s${(i % 3) + 1}`}
              style={{
                display: "grid", gridTemplateColumns: "2fr 1fr 1fr",
                gap: "0", padding: "18px 24px",
                borderBottom: i < CERTS.length - 1 ? "1px solid var(--border)" : "none",
                transition: "background .2s",
                alignItems: "center",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "var(--blue-lt)"}
              onMouseLeave={e => e.currentTarget.style.background = "transparent"}>

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: c.color, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 600, color: "var(--ink-2)", lineHeight: 1.35 }}>{c.name}</div>
                  {c.active && (
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "10px", fontWeight: 600, padding: "2px 8px", borderRadius: "100px", background: "#DCFCE7", color: "#15803D", marginTop: "4px" }}>
                      <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#16A34A", animation: "pulse 2.5s infinite" }} />
                      Active
                    </span>
                  )}
                </div>
              </div>

              <div style={{ fontSize: "13px", color: "var(--muted)", fontWeight: 500 }}>{c.org}</div>
              <div style={{ fontSize: "12px", color: "var(--ghost)", fontFamily: "monospace" }}>{c.period}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CONTACT
// ─────────────────────────────────────────────────────────────────────────────
function Contact() {
  const [ref, on] = useInView();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const set = k => e => setForm(p => ({ ...p, [k]: e.target.value }));

  const send = () => {
    const s = encodeURIComponent(form.subject || `Portfolio Enquiry from ${form.name}`);
    const b = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:${ME.email}?subject=${s}&body=${b}`);
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" style={{ padding: "120px 32px", background: "var(--section)" }} ref={ref}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: "72px", alignItems: "start" }}>
          <div className={`rv${on ? " on" : ""}`}>
            <div className="section-eyebrow"><span className="t-label">Get In Touch</span></div>
            <h2 className="t-headline" style={{ fontSize: "clamp(32px,4vw,52px)", marginBottom: "20px" }}>
              Let's build<br /><span className="grad-text">something great</span>
            </h2>
            <p className="t-body" style={{ marginBottom: "40px" }}>
              Open to full-time opportunities in data analytics, BI development, or financial analytics. Targeting Big 4 or multinational financial services organisations.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                { label: "Email", val: ME.email, href: `mailto:${ME.email}` },
                { label: "Phone", val: ME.phone, href: `tel:${ME.phone.replace(/\s/g, "")}` },
                { label: "LinkedIn", val: "linkedin.com/in/mostafa-farag2004", href: ME.linkedin },
                { label: "Location", val: ME.location, href: null },
              ].map((x, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "20px", padding: "16px 0", borderBottom: "1px solid var(--border)" }}>
                  <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: ".08em", color: "var(--ghost)", textTransform: "uppercase", width: "64px", flexShrink: 0 }}>{x.label}</span>
                  {x.href
                    ? <a href={x.href} target="_blank" rel="noopener noreferrer" style={{ fontSize: "13px", fontWeight: 500, color: "var(--sub)", textDecoration: "none", transition: "color .2s" }}
                        onMouseEnter={e => e.target.style.color = "var(--blue)"}
                        onMouseLeave={e => e.target.style.color = "var(--sub)"}>{x.val}</a>
                    : <span style={{ fontSize: "13px", fontWeight: 500, color: "var(--sub)" }}>{x.val}</span>
                  }
                </div>
              ))}
            </div>
          </div>

          <div className={`rv${on ? " on" : ""} s2`}>
            <div className="card" style={{ padding: "36px" }}>
              <div style={{ fontFamily: "var(--ff-display)", fontSize: "18px", fontWeight: 700, color: "var(--ink)", marginBottom: "24px" }}>Send a message</div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
                {[{ l: "Your Name", k: "name", t: "text", ph: "John Smith" }, { l: "Email Address", k: "email", t: "email", ph: "john@company.com" }].map(f => (
                  <div key={f.k}>
                    <label style={{ fontSize: "11px", fontWeight: 700, color: "var(--muted)", letterSpacing: ".06em", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>{f.l}</label>
                    <input type={f.t} placeholder={f.ph} value={form[f.k]} onChange={set(f.k)} />
                  </div>
                ))}
              </div>

              <div style={{ marginBottom: "14px" }}>
                <label style={{ fontSize: "11px", fontWeight: 700, color: "var(--muted)", letterSpacing: ".06em", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>Subject</label>
                <input type="text" placeholder="Job opportunity / Project enquiry" value={form.subject} onChange={set("subject")} />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={{ fontSize: "11px", fontWeight: 700, color: "var(--muted)", letterSpacing: ".06em", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>Message</label>
                <textarea rows={5} placeholder="Tell me about the role or project…" value={form.message} onChange={set("message")} style={{ resize: "none" }} />
              </div>

              <button className="btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: "14px", padding: "14px" }} onClick={send}>
                {sent ? "✓ Message sent successfully!" : "Send Message →"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: "var(--navy)", color: "#fff", padding: "48px 32px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "24px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <div style={{ width: "28px", height: "28px", borderRadius: "7px", background: "linear-gradient(135deg, #2563EB, #4F46E5)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--ff-display)", fontWeight: 700, fontSize: "13px", color: "#fff" }}>M</div>
              <span style={{ fontFamily: "var(--ff-display)", fontWeight: 700, fontSize: "15px", letterSpacing: "-.02em" }}>Mostafa Mohamed</span>
            </div>
            <div style={{ fontSize: "12px", color: "#94A3B8" }}>Data Analyst & BI Developer · Egypt</div>
          </div>

          <div style={{ display: "flex", gap: "24px" }}>
            {[["LinkedIn", ME.linkedin], [`mailto:${ME.email}`, "Email"], [`tel:${ME.phone.replace(/\s/g,"")}`, "Phone"]].map(([h, l]) => (
              <a key={l} href={h} target="_blank" rel="noopener noreferrer"
                style={{ fontSize: "12px", fontWeight: 500, color: "#64748B", textDecoration: "none", letterSpacing: ".04em", transition: "color .2s" }}
                onMouseEnter={e => e.target.style.color = "#fff"}
                onMouseLeave={e => e.target.style.color = "#64748B"}>
                {l}
              </a>
            ))}
          </div>

          <div style={{ fontSize: "12px", color: "#475569" }}>
            © {new Date().getFullYear()} · Built with React & deployed on Vercel
          </div>
        </div>
      </div>
    </footer>
  );
}


function Navbar() {
  const links = NAV_ITEMS;
  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 40,
      backdropFilter: "blur(16px)",
      background: "rgba(248,250,252,.72)",
      borderBottom: "1px solid rgba(226,232,240,.85)",
    }}>
      <div style={{
        maxWidth: "1240px",
        margin: "0 auto",
        padding: "14px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "20px",
        flexWrap: "wrap",
      }}>
        <a href="#hero" style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          textDecoration: "none",
          color: "var(--ink)",
          fontWeight: 700,
        }}>
          <span style={{
            width: 30,
            height: 30,
            borderRadius: 8,
            background: "linear-gradient(135deg, #2563EB, #4F46E5)",
            color: "#fff",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--ff-display)",
          }}>M</span>
          <span>Mostafa Mohamed</span>
        </a>

        <nav style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                fontSize: "13px",
                color: "var(--sub)",
                textDecoration: "none",
                fontWeight: 500,
                padding: "6px 10px",
                borderRadius: "999px",
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function GlobalStyles() {
  useEffect(() => {
    if (document.getElementById("global-portfolio-styles")) return;
    const style = document.createElement("style");
    style.id = "global-portfolio-styles";
    style.textContent = `
      :root {
        --bg: #F8FAFC;
        --surface: #FFFFFF;
        --section: #F8FAFC;
        --section2: #F1F5F9;
        --border: #E2E8F0;
        --ink: #0F172A;
        --ink-2: #1E293B;
        --sub: #475569;
        --muted: #64748B;
        --ghost: #94A3B8;
        --blue: #2563EB;
        --blue-lt: #EFF6FF;
        --navy: #0F172A;
        --r-xl: 20px;
        --r-md: 12px;
        --sh-sm: 0 1px 4px rgba(10,15,30,.05);
        --sh-md: 0 8px 24px rgba(10,15,30,.08);
        --sh-lg: 0 12px 36px rgba(10,15,30,.10);
        --sh-xl: 0 20px 60px rgba(10,15,30,.12);
        --ff-display: 'Instrument Serif', Georgia, serif;
        --ff-body: 'DM Sans', system-ui, sans-serif;
      }
      html { scroll-behavior: smooth; }
      body {
        margin: 0;
        background: var(--bg);
        color: var(--ink);
        font-family: var(--ff-body);
      }
      * { box-sizing: border-box; }
      a { color: inherit; }
      .section-eyebrow { margin-bottom: 10px; }
      .t-label {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: .08em;
        text-transform: uppercase;
        color: var(--muted);
      }
      .t-headline {
        margin: 0;
        font-family: var(--ff-display);
        font-weight: 700;
        line-height: 1;
        letter-spacing: -.04em;
        color: var(--ink);
      }
      .t-body {
        color: var(--sub);
        line-height: 1.75;
        font-size: 15px;
      }
      .grad-text {
        background: linear-gradient(135deg, #2563EB, #7C3AED);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      .grad-text-2 {
        background: linear-gradient(135deg, #1D4ED8, #6D28D9);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      .btn-primary, .btn-secondary {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        text-decoration: none;
        border-radius: 10px;
        border: 1px solid transparent;
        transition: transform .2s ease, box-shadow .2s ease, background .2s ease, color .2s ease;
        cursor: pointer;
      }
      .btn-primary {
        background: linear-gradient(135deg, #2563EB, #4F46E5);
        color: #fff;
        box-shadow: 0 8px 18px rgba(37,99,235,.18);
      }
      .btn-secondary {
        background: #fff;
        color: var(--ink-2);
        border-color: var(--border);
      }
      .btn-primary:hover, .btn-secondary:hover { transform: translateY(-2px); }
      .card, .card-flat {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: var(--r-xl);
        box-shadow: var(--sh-sm);
      }
      .chip {
        display: inline-flex;
        align-items: center;
        padding: 5px 10px;
        border-radius: 999px;
        background: #F8FAFC;
        border: 1px solid var(--border);
        font-size: 11px;
        font-weight: 600;
        color: var(--sub);
      }
      .progress-track {
        width: 100%;
        height: 8px;
        border-radius: 999px;
        background: #E2E8F0;
        overflow: hidden;
      }
      .progress-fill {
        height: 100%;
        border-radius: inherit;
      }
      input, textarea {
        width: 100%;
        border-radius: 12px;
        border: 1px solid var(--border);
        background: #fff;
        padding: 13px 14px;
        font: inherit;
        color: var(--ink-2);
        outline: none;
        transition: border-color .2s ease, box-shadow .2s ease;
      }
      input:focus, textarea:focus {
        border-color: #93C5FD;
        box-shadow: 0 0 0 4px rgba(59,130,246,.10);
      }
      .img-placeholder {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        background: linear-gradient(135deg, #F8FAFC, #EEF2FF);
        border-bottom: 1px solid var(--border);
        overflow: hidden;
      }
      .proj-px { padding-left: 48px; padding-right: 48px; }
      @media (max-width: 900px) {
        .proj-px { padding-left: 24px; padding-right: 24px; }
      }
      @media (max-width: 768px) {
        .grid-2, .grid-3, .proj-featured-grid, .proj-compact-grid {
          grid-template-columns: 1fr !important;
        }
      }
    `;
    document.head.appendChild(style);
  }, []);
  return null;
}

// ─────────────────────────────────────────────────────────────────────────────
// ROOT
// ─────────────────────────────────────────────────────────────────────────────
export default function Portfolio() {
  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", overflowX: "hidden" }}>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}
