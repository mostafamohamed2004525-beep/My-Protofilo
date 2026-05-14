"use client";
import { useState, useEffect, useRef, useCallback } from "react";

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

const STATS = [
  { value: "10+", label: "Projects Delivered" },
  { value: "$307M", label: "Revenue Analysed" },
  { value: "98%", label: "Accuracy Rate" },
  { value: "3.73", label: "GPA" },
];

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

const PROJECTS = [
  {
    id: 1,
    num: "01",
    featured: true,
    title: "HR Analytics Dashboard",
    category: "Power BI · Enterprise BI",
    problem: "HR leadership lacked visibility into workforce dynamics — attrition patterns, headcount trends, and compensation distribution were buried in spreadsheets.",
    solution: "Built a 7-page Power BI report with advanced DAX measures for attrition forecasting, demographic segmentation, and turnover reduction tracking.",
    results: ["12% turnover reduction identified", "2,000+ employee records modelled", "20+ live KPI metrics", "Exec-ready dashboard design"],
    tech: ["Power BI", "DAX", "Data Modeling", "HR Analytics"],
    color: "#2563EB",
    gradient: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)",
  },
  {
    id: 2,
    num: "02",
    featured: true,
    title: "Sales Analytics Platform",
    category: "Excel · Revenue Intelligence",
    problem: "Sales leadership had $307M in revenue data across 4 years and 60,000+ transactions with no structured analysis framework.",
    solution: "Engineered a macro-powered Excel analytics platform with 15 interconnected pivot tables, YoY comparison models, and automated executive reporting.",
    results: ["$307M revenue tracked", "8% quarterly growth identified", "60,398 transactions modelled", "41% profit margin measured"],
    tech: ["Advanced Excel", "VBA Macros", "Pivot Tables", "Financial Modelling"],
    color: "#0891B2",
    gradient: "linear-gradient(135deg, #ECFEFF 0%, #CFFAFE 100%)",
  },
  {
    id: 3,
    num: "03",
    featured: false,
    title: "Call Center Operations Dashboard",
    category: "Power BI · Operations Intelligence",
    problem: "Call centre managers had no real-time view of agent performance, SLA adherence, or call volume distribution.",
    solution: "Developed a real-time Power BI operations dashboard tracking agent KPIs, resolution rates, and SLA metrics with custom dark display-wall design.",
    results: ["Live KPI monitoring", "SLA tracking automated", "Custom display-wall layout", "Agent performance ranking"],
    tech: ["Power BI", "Operations Analytics", "SLA Metrics", "Custom Visuals"],
    color: "#7C3AED",
    gradient: "linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)",
  },
  {
    id: 4,
    num: "04",
    featured: false,
    title: "Hospital Analytics Dashboard",
    category: "Power BI · Healthcare BI",
    problem: "Hospital management had no unified view of patient flow, resource utilisation, or operational KPIs across departments.",
    solution: "Built a healthcare analytics dashboard with custom Power BI visuals, patient flow modelling, and operational efficiency metrics.",
    results: ["Custom visual components", "Patient flow tracking", "Resource optimisation insights", "Apr 2026 delivery"],
    tech: ["Power BI", "Custom Visuals", "Healthcare KPI", "Patient Analytics"],
    color: "#059669",
    gradient: "linear-gradient(135deg, #ECFDF5 0%, #D1FAE5 100%)",
  },
  {
    id: 5,
    num: "05",
    featured: false,
    title: "SME Financial Inclusion Study",
    category: "Research · Banking Policy",
    problem: "Needed to evaluate the effectiveness of 8+ Central Bank of Egypt SME financing initiatives against Egypt Vision 2030 objectives.",
    solution: "Conducted comprehensive analysis of CBE initiatives and NBE SME programs, delivering 5+ strategic recommendations presented to executive leadership.",
    results: ["8+ CBE initiatives analysed", "5+ strategic recommendations", "Executive presentation to NBE Head", "Egypt Vision 2030 alignment"],
    tech: ["Financial Analysis", "Policy Research", "SME Finance", "Strategic Reporting"],
    color: "#EA580C",
    gradient: "linear-gradient(135deg, #FFF7ED 0%, #FED7AA 100%)",
  },
];

const EXPERIENCE = [
  {
    role: "Campus Ambassador & BI Trainer",
    company: "Career & WUZZUF",
    period: "Aug 2025 – Present",
    type: "Part-Time",
    color: "#2563EB",
    highlights: ["3.73", "40+", "100+"],
    points: [
      "Designed and delivered AI automation training on Google Gemini to 40+ participants — covering prompt engineering, report automation, and productivity workflows",
      "Executed on-ground marketing campaigns engaging 100+ users through direct field activities",
      "Attended executive strategy sessions with CEO on startup scaling and venture-backed business models",
    ],
  },
  {
    role: "Banking Operations Intern",
    company: "Banque Misr",
    period: "Aug – Sep 2025",
    type: "Internship",
    color: "#0891B2",
    points: [
      "Processed 100+ banking transactions daily across retail, credit operations, and treasury functions",
      "Improved service delivery time by 15% through cross-functional workflow optimisation and process documentation",
      "Maintained 98%+ accuracy rate on transaction processing and reconciliation in a high-pressure environment",
    ],
  },
  {
    role: "Banking Operations Intern",
    company: "National Bank of Egypt",
    period: "Jul – Aug 2025",
    type: "Internship",
    color: "#059669",
    points: [
      "Analysed 50+ credit applications using risk assessment frameworks, supporting lending decisions with detailed documentation",
      "Rotated across customer service, credit analysis, and operations — gaining comprehensive banking function exposure",
      "Created operational reference guides that measurably improved staff onboarding efficiency",
    ],
  },
];

const CERTS = [
  { name: "Data Analytics Specialist – Microsoft Power BI", org: "DEPI & ITC", period: "Nov 2025 – Present", active: true, color: "#2563EB" },
  { name: "Oracle Financial Systems Specialist", org: "Next Academy & DEPI", period: "Nov 2024 – May 2025", active: false, color: "#7C3AED" },
  { name: "Professional Sales & Customer Relations", org: "American Chamber of Commerce", period: "Jul – Aug 2024", active: false, color: "#0891B2" },
  { name: "Employability Training Programme", org: "Aspire Academy & UCCD", period: "Jul – Aug 2024", active: false, color: "#059669" },
  { name: "Financial Education for Youth", org: "Egyptian Banking Institute", period: "Mar – Apr 2024", active: false, color: "#EA580C" },
  { name: "Credit Induction Programme in Banking", org: "Egyptian Banking Institute", period: "Mar – Apr 2024", active: false, color: "#BE185D" },
];

const NAV_SECTIONS = ["Hero", "About", "Skills", "Projects", "Experience", "Certifications", "Contact"];

// ─────────────────────────────────────────────────────────────────────────────
// HOOKS
// ─────────────────────────────────────────────────────────────────────────────
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function useActiveSection() {
  const [active, setActive] = useState("hero");
  useEffect(() => {
    const sections = NAV_SECTIONS.map(s => document.getElementById(s.toLowerCase())).filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { threshold: 0.3 }
    );
    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, []);
  return active;
}

// ─────────────────────────────────────────────────────────────────────────────
// GLOBAL STYLES
// ─────────────────────────────────────────────────────────────────────────────
function GlobalStyles() {
  useEffect(() => {
    const lk = document.createElement("link");
    lk.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap";
    lk.rel = "stylesheet";
    document.head.appendChild(lk);

    const s = document.createElement("style");
    s.id = "portfolio-styles";
    s.textContent = `
:root {
  /* Backgrounds */
  --bg: #FAFBFC;
  --surface: #FFFFFF;
  --surface2: #F8FAFF;
  --section: #F4F6FA;
  --hover-bg: #F0F4FF;

  /* Ink */
  --ink: #0A0F1E;
  --ink-2: #1E293B;
  --sub: #475569;
  --muted: #64748B;
  --ghost: #94A3B8;

  /* Borders */
  --border: #E2E8F0;
  --border-hi: #CBD5E1;
  --border-focus: #3B82F6;

  /* Brand */
  --blue: #2563EB;
  --blue-lt: #EFF6FF;
  --blue-mid: #DBEAFE;
  --navy: #0F172A;
  --indigo: #4F46E5;

  /* Fonts */
  --ff-display: 'Space Grotesk', system-ui, sans-serif;
  --ff-body: 'Inter', system-ui, sans-serif;

  /* Shadows */
  --sh-xs: 0 1px 2px rgba(10,15,30,.04);
  --sh-sm: 0 1px 3px rgba(10,15,30,.06), 0 1px 2px rgba(10,15,30,.04);
  --sh-md: 0 4px 12px rgba(10,15,30,.06), 0 2px 4px rgba(10,15,30,.04);
  --sh-lg: 0 12px 32px rgba(10,15,30,.08), 0 4px 8px rgba(10,15,30,.04);
  --sh-xl: 0 20px 48px rgba(10,15,30,.10), 0 8px 16px rgba(10,15,30,.05);
  --sh-blue: 0 4px 20px rgba(37,99,235,.16);

  /* Radii */
  --r-sm: 8px; --r-md: 12px; --r-lg: 16px; --r-xl: 20px; --r-2xl: 24px;

  /* Transitions */
  --ease: cubic-bezier(.22,1,.36,1);
  --ease-out: cubic-bezier(.0,0,.2,1);
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; font-size: 16px; }
body {
  background: var(--bg);
  color: var(--ink);
  font-family: var(--ff-body);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  line-height: 1.6;
}
::selection { background: #DBEAFE; color: var(--blue); }
::-webkit-scrollbar { width: 5px; }
::-webkit-scrollbar-track { background: var(--section); }
::-webkit-scrollbar-thumb { background: var(--border-hi); border-radius: 10px; }
::-webkit-scrollbar-thumb:hover { background: var(--ghost); }

/* Animations */
@keyframes fadeUp    { from { opacity:0; transform:translateY(24px) } to { opacity:1; transform:none } }
@keyframes fadeIn    { from { opacity:0 } to { opacity:1 } }
@keyframes scaleUp   { from { opacity:0; transform:scale(.96) } to { opacity:1; transform:none } }
@keyframes slideRight{ from { width:0 } to { width:var(--target-w) } }
@keyframes pulse     { 0%,100%{opacity:1} 50%{opacity:.4} }
@keyframes float     { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
@keyframes shimmer   { 0%{background-position:-200% center} 100%{background-position:200% center} }
@keyframes spinSlow  { to{transform:rotate(360deg)} }
@keyframes breathe   { 0%,100%{transform:scale(1)} 50%{transform:scale(1.04)} }

/* Reveal system */
.rv { opacity:0; transform:translateY(20px); transition:opacity .6s var(--ease), transform .6s var(--ease); }
.rv.on { opacity:1; transform:none; }
.rv.s1{transition-delay:.06s} .rv.s2{transition-delay:.12s} .rv.s3{transition-delay:.18s}
.rv.s4{transition-delay:.24s} .rv.s5{transition-delay:.30s} .rv.s6{transition-delay:.36s}

/* Typography */
.t-display {
  font-family: var(--ff-display);
  font-weight: 700;
  letter-spacing: -.03em;
  line-height: 1.04;
  color: var(--ink);
}
.t-headline {
  font-family: var(--ff-display);
  font-weight: 600;
  letter-spacing: -.025em;
  line-height: 1.12;
  color: var(--ink-2);
}
.t-label {
  font-family: var(--ff-body);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--blue);
}
.t-body { font-size: 15px; line-height: 1.75; color: var(--sub); }
.t-small { font-size: 13px; line-height: 1.6; color: var(--muted); }
.t-mono { font-family: 'SF Mono','Fira Code','JetBrains Mono',monospace; font-size: 12px; }

/* Gradient text */
.grad-text {
  background: linear-gradient(135deg, #2563EB 0%, #4F46E5 50%, #7C3AED 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.grad-text-2 {
  background: linear-gradient(135deg, #0891B2 0%, #2563EB 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Buttons */
.btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--blue);
  color: #fff;
  border: none;
  padding: 13px 28px;
  border-radius: var(--r-md);
  font-family: var(--ff-body);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -.01em;
  cursor: pointer;
  text-decoration: none;
  transition: all .22s var(--ease);
  box-shadow: 0 2px 8px rgba(37,99,235,.28), 0 1px 2px rgba(37,99,235,.15);
  position: relative;
  overflow: hidden;
}
.btn-primary::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,255,255,.15) 0%, transparent 100%);
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(37,99,235,.36), 0 2px 6px rgba(37,99,235,.2);
}
.btn-secondary {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--surface);
  color: var(--ink-2);
  border: 1px solid var(--border-hi);
  padding: 12px 28px;
  border-radius: var(--r-md);
  font-family: var(--ff-body);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all .22s var(--ease);
  box-shadow: var(--sh-sm);
}
.btn-secondary:hover {
  border-color: var(--blue);
  color: var(--blue);
  background: var(--blue-lt);
  transform: translateY(-2px);
  box-shadow: var(--sh-md);
}

/* Cards */
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--r-xl);
  box-shadow: var(--sh-sm);
  transition: all .3s var(--ease);
  overflow: hidden;
}
.card:hover {
  box-shadow: var(--sh-xl);
  border-color: var(--border-hi);
  transform: translateY(-3px);
}
.card-flat {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--r-lg);
  box-shadow: var(--sh-xs);
  transition: all .25s var(--ease);
}
.card-flat:hover {
  box-shadow: var(--sh-lg);
  border-color: var(--border-hi);
  transform: translateY(-2px);
}

/* Chip / Tag */
.chip {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  font-weight: 500;
  padding: 4px 12px;
  border-radius: 100px;
  border: 1px solid var(--border);
  background: var(--section);
  color: var(--sub);
  transition: all .2s;
  font-family: var(--ff-body);
}
.chip:hover { border-color: var(--blue); color: var(--blue); background: var(--blue-lt); }

/* Divider */
.section-divider { height: 1px; background: var(--border); }

/* Input */
input, textarea {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--r-md);
  color: var(--ink);
  font-family: var(--ff-body);
  font-size: 14px;
  padding: 13px 16px;
  width: 100%;
  outline: none;
  transition: border-color .2s, box-shadow .2s;
  -webkit-appearance: none;
}
input:focus, textarea:focus {
  border-color: var(--blue);
  box-shadow: 0 0 0 3px rgba(37,99,235,.12);
}
input::placeholder, textarea::placeholder { color: var(--ghost); }

/* Nav link */
.nav-link {
  font-size: 13.5px;
  font-weight: 500;
  color: var(--muted);
  text-decoration: none;
  padding: 6px 10px;
  border-radius: var(--r-sm);
  transition: all .2s;
  letter-spacing: -.01em;
}
.nav-link:hover { color: var(--ink); background: var(--section); }
.nav-link.active { color: var(--blue); background: var(--blue-lt); }

/* Progress bar */
.progress-track {
  height: 5px;
  background: var(--section);
  border-radius: 100px;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  border-radius: 100px;
  width: 0%;
  transition: width 1.2s var(--ease);
}

/* Section label row */
.section-eyebrow {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 16px;
}
.section-eyebrow::before {
  content: '';
  display: block;
  width: 20px;
  height: 2px;
  border-radius: 2px;
  background: var(--blue);
  flex-shrink: 0;
}

/* Placeholder image */
.img-placeholder {
  background: linear-gradient(145deg, #F0F4FF 0%, #E8EFF8 50%, #EDF2FF 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  cursor: pointer;
  transition: background .25s;
  border-bottom: 1px solid var(--border);
  position: relative;
  overflow: hidden;
}
.img-placeholder::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, transparent 60%, rgba(37,99,235,.04) 100%);
}
.img-placeholder:hover { background: linear-gradient(145deg, #E8EEFF, #DDE6FF, #E4ECFF); }

/* Responsive */
@media(max-width:1024px) {
  .grid-2 { grid-template-columns:1fr!important; }
  .grid-3 { grid-template-columns:1fr 1fr!important; }
  .grid-4 { grid-template-columns:1fr 1fr!important; }
  .hide-lg { display:none!important; }
}
@media(max-width:768px) {
  .grid-3 { grid-template-columns:1fr!important; }
  .grid-4 { grid-template-columns:1fr!important; }
  .grid-2-sm { grid-template-columns:1fr!important; }
  .px-page { padding-left:20px!important; padding-right:20px!important; }
  .hide-md { display:none!important; }
  .show-md { display:flex!important; }
}
    `;
    document.head.appendChild(s);
    return () => {
      document.head.removeChild(lk);
      const el = document.getElementById("portfolio-styles");
      if (el) document.head.removeChild(el);
    };
  }, []);
  return null;
}

// ─────────────────────────────────────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mOpen, setMOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      transition: "all .35s var(--ease)",
    }}>
      <nav style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: scrolled ? "10px 32px" : "18px 32px",
        display: "flex",
        alignItems: "center",
        gap: "0",
        background: scrolled ? "rgba(250,251,252,.92)" : "transparent",
        backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        borderRadius: scrolled ? "0 0 16px 16px" : "0",
        boxShadow: scrolled ? "0 2px 20px rgba(10,15,30,.06)" : "none",
        transition: "all .35s var(--ease)",
      }}>
        {/* Logo */}
        <a href="#hero" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px", marginRight: "auto" }}>
          <div style={{
            width: "32px", height: "32px", borderRadius: "8px",
            background: "linear-gradient(135deg, #2563EB, #4F46E5)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontFamily: "var(--ff-display)", fontWeight: 700, fontSize: "14px",
            boxShadow: "0 2px 8px rgba(37,99,235,.3)",
          }}>M</div>
          <div>
            <div style={{ fontFamily: "var(--ff-display)", fontWeight: 700, fontSize: "15px", color: "var(--ink)", letterSpacing: "-.02em", lineHeight: 1 }}>Mostafa Mohamed</div>
            <div style={{ fontSize: "10px", color: "var(--muted)", letterSpacing: ".02em", lineHeight: 1, marginTop: "2px" }}>Data Analyst & BI Developer</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hide-md" style={{ display: "flex", alignItems: "center", gap: "4px", marginRight: "20px" }}>
          {NAV_SECTIONS.slice(1).map(s => (
            <a key={s} href={`#${s.toLowerCase()}`} className={`nav-link${active === s.toLowerCase() ? " active" : ""}`}>{s}</a>
          ))}
        </div>

        <a href={`mailto:${ME.email}`} className="btn-primary hide-md" style={{ padding: "9px 20px", fontSize: "13px" }}>
          Hire Me →
        </a>

        {/* Hamburger */}
        <button onClick={() => setMOpen(!mOpen)} style={{ display: "none", background: "none", border: "1px solid var(--border)", cursor: "pointer", padding: "8px", borderRadius: "8px", flexDirection: "column", gap: "4px", transition: "all .2s" }} className="show-md">
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: "block", width: "18px", height: "1.5px", background: "var(--ink)", borderRadius: "2px", transition: "all .25s",
              transform: mOpen ? (i === 0 ? "rotate(45deg) translate(4px,4px)" : i === 2 ? "rotate(-45deg) translate(4px,-4px)" : "scaleX(0)") : "none",
              opacity: mOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>

        {/* Mobile drawer */}
        {mOpen && (
          <div style={{
            position: "fixed", top: "70px", left: "16px", right: "16px",
            background: "rgba(250,251,252,.97)", backdropFilter: "blur(24px)",
            border: "1px solid var(--border)", borderRadius: "16px",
            padding: "16px", display: "flex", flexDirection: "column", gap: "4px",
            boxShadow: "var(--sh-xl)", zIndex: 999,
          }}>
            {NAV_SECTIONS.slice(1).map(s => (
              <a key={s} href={`#${s.toLowerCase()}`} onClick={() => setMOpen(false)}
                style={{ padding: "12px 16px", borderRadius: "10px", fontWeight: 500, fontSize: "15px", color: "var(--ink)", textDecoration: "none", transition: "background .15s" }}
                onMouseEnter={e => e.target.style.background = "var(--section)"}
                onMouseLeave={e => e.target.style.background = "transparent"}>
                {s}
              </a>
            ))}
            <div style={{ height: "1px", background: "var(--border)", margin: "8px 0" }} />
            <a href={`mailto:${ME.email}`} className="btn-primary" style={{ justifyContent: "center" }}>Hire Me →</a>
          </div>
        )}
      </nav>
    </header>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────────────────────
function Hero() {
  const [on, setOn] = useState(false);
  useEffect(() => { const t = setTimeout(() => setOn(true), 80); return () => clearTimeout(t); }, []);

  const anim = (delay, y = 22) => ({
    opacity: on ? 1 : 0,
    transform: on ? "none" : `translateY(${y}px)`,
    transition: `opacity .75s var(--ease) ${delay}s, transform .75s var(--ease) ${delay}s`,
  });

  return (
    <section id="hero" style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      padding: "100px 32px 80px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Mesh gradient background */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(165deg, #F8FAFF 0%, #F0F4FF 30%, #FAFBFE 60%, #F5F8FF 100%)", zIndex: 0 }} />

      {/* Grid dots */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "radial-gradient(circle, #CBD5E1 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        opacity: 0.35,
      }} />

      {/* Ambient glows */}
      <div style={{ position: "absolute", top: "10%", right: "8%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,.08) 0%, transparent 70%)", filter: "blur(40px)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "15%", left: "5%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(79,70,229,.06) 0%, transparent 70%)", filter: "blur(60px)", pointerEvents: "none", zIndex: 0 }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "780px" }}>

          {/* Status badge */}
          <div style={{ ...anim(.05), marginBottom: "32px" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "6px 14px 6px 8px",
              background: "var(--surface)", border: "1px solid var(--border)",
              borderRadius: "100px", boxShadow: "var(--sh-md)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", background: "#DCFCE7", padding: "3px 10px", borderRadius: "100px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#16A34A", animation: "pulse 2.5s ease infinite", display: "block" }} />
                <span style={{ fontSize: "11px", fontWeight: 600, color: "#15803D", letterSpacing: ".03em" }}>Open to Work</span>
              </div>
              <span style={{ fontSize: "12px", color: "var(--muted)", fontWeight: 500 }}>Available for full-time roles · Egypt</span>
            </div>
          </div>

          {/* Headline */}
          <h1 style={{ ...anim(.1), fontFamily: "var(--ff-display)", fontWeight: 800, fontSize: "clamp(44px,7vw,88px)", letterSpacing: "-.04em", lineHeight: 1.0, marginBottom: "8px", color: "var(--ink)" }}>
            Data Analyst
          </h1>
          <h1 style={{ ...anim(.16), fontFamily: "var(--ff-display)", fontWeight: 800, fontSize: "clamp(44px,7vw,88px)", letterSpacing: "-.04em", lineHeight: 1.0, marginBottom: "28px" }}>
            <span className="grad-text">&amp; BI Developer</span>
          </h1>

          {/* Tagline */}
          <p style={{ ...anim(.22), fontSize: "clamp(16px,2.2vw,20px)", lineHeight: 1.7, color: "var(--sub)", maxWidth: "560px", marginBottom: "44px", fontWeight: 400 }}>
            {ME.tagline}
          </p>

          {/* CTA row */}
          <div style={{ ...anim(.28), display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "60px" }}>
            <a href="#projects" className="btn-primary" style={{ fontSize: "14px" }}>
              <span>View Projects</span> <span>↗</span>
            </a>
            <a href="#contact" className="btn-secondary">
              <span>Contact Me</span>
            </a>
            <a href={`mailto:${ME.email}`} className="btn-secondary" style={{ borderStyle: "dashed" }}>
              <span>↓</span> <span>Download CV</span>
            </a>
          </div>

          {/* Social */}
          <div style={{ ...anim(.34), display: "flex", alignItems: "center", gap: "20px", paddingTop: "32px", borderTop: "1px solid var(--border)" }}>
            {[["LinkedIn", ME.linkedin], ["Email", `mailto:${ME.email}`], ["Phone", `tel:${ME.phone.replace(/\s/g,"")}`]].map(([l, h]) => (
              <a key={l} href={h} target="_blank" rel="noopener noreferrer"
                style={{ fontSize: "12px", fontWeight: 500, color: "var(--muted)", textDecoration: "none", letterSpacing: ".04em", transition: "color .2s" }}
                onMouseEnter={e => e.target.style.color = "var(--blue)"}
                onMouseLeave={e => e.target.style.color = "var(--muted)"}>
                {l} →
              </a>
            ))}
          </div>
        </div>

        {/* Floating stat cards */}
        <div style={{ ...anim(.4), position: "absolute", right: "0", top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: "12px" }} className="hide-lg">
          {STATS.map((st, i) => (
            <div key={i} className="card-flat" style={{ padding: "16px 22px", minWidth: "170px", animation: `float ${3.5 + i * 0.4}s ease-in-out infinite`, animationDelay: `${i * 0.5}s` }}>
              <div style={{ fontFamily: "var(--ff-display)", fontSize: "28px", fontWeight: 800, color: "var(--blue)", letterSpacing: "-.03em", lineHeight: 1 }}>{st.value}</div>
              <div style={{ fontSize: "12px", color: "var(--muted)", fontWeight: 500, marginTop: "4px" }}>{st.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", opacity: .4, animation: "float 3s ease-in-out infinite" }}>
        <span style={{ fontSize: "10px", fontWeight: 500, color: "var(--muted)", letterSpacing: ".1em", textTransform: "uppercase" }}>Scroll</span>
        <span style={{ color: "var(--muted)", fontSize: "16px" }}>↓</span>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ABOUT
// ─────────────────────────────────────────────────────────────────────────────
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

function Projects() {
  const [ref, on] = useInView();
  const featured = PROJECTS.filter(p => p.featured);
  const rest = PROJECTS.filter(p => !p.featured);

  return (
    <section id="projects" style={{ padding: "120px 32px", background: "var(--surface)" }} ref={ref}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <div className={`rv${on ? " on" : ""}`} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "56px", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <div className="section-eyebrow"><span className="t-label">Featured Projects</span></div>
            <h2 className="t-headline" style={{ fontSize: "clamp(32px,4vw,52px)" }}>
              Real projects,<br /><span className="grad-text">real impact</span>
            </h2>
          </div>
          <div style={{ fontFamily: "var(--ff-display)", fontSize: "72px", fontWeight: 800, color: "var(--border)", lineHeight: 1, userSelect: "none" }}>
            0{PROJECTS.length}
          </div>
        </div>

        {/* Featured 2 large */}
        <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
          {featured.map((p, i) => <ProjectCard key={p.id} p={p} large visible={on} />)}
        </div>

        {/* Remaining compact */}
        <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px" }}>
          {rest.map((p, i) => <ProjectCard key={p.id} p={p} visible={on} />)}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// EXPERIENCE TIMELINE
// ─────────────────────────────────────────────────────────────────────────────
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
