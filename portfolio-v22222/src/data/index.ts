// ─────────────────────────────────────────────────────────────────────────────
// PORTFOLIO DATA — single source of truth
// ─────────────────────────────────────────────────────────────────────────────

export const ME = {
  name:       "Mostafa Mohamed",
  title:      "Data Analyst & BI Developer",
  tagline:    "Turning complex data into clear business decisions — across banking operations, enterprise BI, and financial analytics.",
  email:      "mostafamohamed2004525@gmail.com",
  phone:      "+20 128-340-9232",
  linkedin:   "https://linkedin.com/in/mostafa-farag2004",
  location:   "Egypt",
  gpa:        "3.73",
  university: "Banha University · Faculty of Commerce (English)",
  graduation: "2026",
} as const;

// ── Hero stats ───────────────────────────────────────────────────────────────
export const HERO_STATS = [
  { value: "$307M", label: "Revenue Analysed" },
  { value: "4",     label: "Internships" },
  { value: "10+",   label: "Dashboards Built" },
  { value: "3.73",  label: "Academic GPA" },
] as const;

// ── Hero tools ───────────────────────────────────────────────────────────────
export const TOOLS = [
  { name: "Power BI",   color: "#FEF3C7", text: "#92400E" },
  { name: "Oracle ERP", color: "#E0E7FF", text: "#3730A3" },
  { name: "SQL",        color: "#DCFCE7", text: "#166534" },
  { name: "Python",     color: "#FEF3C7", text: "#92400E" },
  { name: "Excel",      color: "#D1FAE5", text: "#065F46" },
  { name: "DAX",        color: "#FCE7F3", text: "#9D174D" },
] as const;

// ── Skills ───────────────────────────────────────────────────────────────────
export interface SkillItem { name: string; level: number }
export interface SkillCategory {
  category: string;
  icon: string;
  color: string;
  bg: string;
  tools: SkillItem[];
}

export const SKILLS: SkillCategory[] = [
  {
    category: "Business Intelligence",
    icon: "📊", color: "#2563EB", bg: "#EFF6FF",
    tools: [
      { name: "Power BI — DAX · Data Modeling", level: 92 },
      { name: "Power Query · KPI Development",  level: 88 },
      { name: "Dashboard Design · Drill-through",level: 90 },
      { name: "Attrition Forecasting",           level: 85 },
    ],
  },
  {
    category: "Data Analysis & Modelling",
    icon: "🔍", color: "#0891B2", bg: "#ECFEFF",
    tools: [
      { name: "Advanced Excel — Pivot Tables",   level: 95 },
      { name: "SQL Query Optimisation",           level: 82 },
      { name: "VBA Automation · Macros",          level: 90 },
      { name: "Python Analytics",                 level: 75 },
    ],
  },
  {
    category: "ERP & Accounting Systems",
    icon: "⚙️", color: "#7C3AED", bg: "#F5F3FF",
    tools: [
      { name: "Oracle ERP (GL · AP · AR · FA)", level: 88 },
      { name: "SAP Fundamentals",                level: 72 },
      { name: "Odoo ERP",                        level: 80 },
      { name: "3-Way Matching · Vendor Mgmt",    level: 90 },
    ],
  },
  {
    category: "Banking & Finance",
    icon: "🏦", color: "#059669", bg: "#ECFDF5",
    tools: [
      { name: "Credit Risk Assessment",          level: 85 },
      { name: "Financial Statements",            level: 88 },
      { name: "Budgeting · Forecasting",         level: 83 },
      { name: "Bank Reconciliation",             level: 87 },
    ],
  },
  {
    category: "AI & Automation",
    icon: "🤖", color: "#D97706", bg: "#FFFBEB",
    tools: [
      { name: "Prompt Engineering",              level: 88 },
      { name: "Google Gemini API",               level: 85 },
      { name: "Workflow Automation Design",      level: 80 },
      { name: "Report Generation",               level: 82 },
    ],
  },
  {
    category: "Communication & Leadership",
    icon: "💼", color: "#BE185D", bg: "#FDF2F8",
    tools: [
      { name: "Executive-Level Presentations",   level: 90 },
      { name: "Cross-Functional Collaboration",  level: 88 },
      { name: "Banking Operations Expertise",    level: 92 },
      { name: "Analytical Problem-Solving",      level: 90 },
    ],
  },
];

// ── Projects ─────────────────────────────────────────────────────────────────
export interface ProjectResult { metric: string; label: string }
export interface Project {
  id:          number;
  index:       string;
  featured:    boolean;
  category:    string;
  title:       string;
  subtitle:    string;
  description: string;
  problem:     string;
  solution:    string;
  results:     ProjectResult[];
  tech:        string[];
  color:       string;
  lightBg:     string;
  midBg:       string;
  github:      string;
  demo:        string;
  image?:      string;   // screenshot path in /public/projects/
  video?:      string;   // demo video path in /public/videos/
}

export const PROJECTS: Project[] = [
  {
    id: 1, index: "01", featured: true,
    category: "Workforce Intelligence",
    title:    "HR Analytics Dashboard",
    subtitle: "Power BI · 7-Page Enterprise Report · Advanced DAX",
    description: "A 7-page Power BI workforce intelligence system, consolidating disparate HR data into a structured, executive-ready reporting suite with automated refresh.",
    problem:  "HR leadership had no structured visibility into attrition drivers, compensation equity, or headcount trends. People decisions relied on intuition rather than evidence.",
    solution: "Delivered a 7-page Power BI report with advanced DAX measures covering attrition forecasting, turnover segmentation by department, compensation distribution heat maps, and demographic analytics with scheduled automated refresh.",
    results: [
      { metric: "12%",    label: "Turnover Reduction Identified" },
      { metric: "2,000+", label: "Employee Records Modelled" },
      { metric: "20+",    label: "Live KPI Measures" },
      { metric: "7",      label: "Integrated Report Pages" },
    ],
    tech:    ["Power BI", "DAX", "Data Modeling", "Power Query", "HR Analytics"],
    color:   "#2563EB", lightBg: "#EFF6FF", midBg: "#DBEAFE",
    github: "#", demo: "#",
    image: "/projects/hr-dashboard.png",
    video: "/videos/hr-demo.mp4",
  },
  {
    id: 2, index: "02", featured: true,
    category: "Financial Analytics",
    title:    "Sales Revenue Intelligence Platform",
    subtitle: "Advanced Excel · VBA Automation · $307M Revenue",
    description: "Engineered a macro-driven Excel analytics platform that structured four years of transaction data into a self-updating executive reporting system.",
    problem:  "$307M in revenue across 60,000+ transactions was stored in flat files with no analysis framework. Leadership had no visibility into margin trends, growth drivers, or segment performance.",
    solution: "Built 15 interconnected pivot tables, a VBA automation layer, and a one-click executive report generator — reducing reporting time from days to under 30 minutes, with dynamic YoY comparison and product-level drill-down.",
    results: [
      { metric: "$307M", label: "Revenue Structured & Tracked" },
      { metric: "8%",    label: "Quarterly Growth Uncovered" },
      { metric: "60K+",  label: "Transactions Modelled" },
      { metric: "41%",   label: "Gross Profit Margin Measured" },
    ],
    tech:    ["Advanced Excel", "VBA Macros", "Pivot Tables", "Financial Modelling", "Data Visualisation"],
    color:   "#0891B2", lightBg: "#ECFEFF", midBg: "#CFFAFE",
    github: "#", demo: "#",
    image: "/projects/sales-analytics.png",
    video: "/videos/sales-demo.mp4",
  },
  {
    id: 3, index: "03", featured: false,
    category: "Operations Analytics",
    title:    "Call Centre Performance Dashboard",
    subtitle: "Power BI · Live Operations · SLA Monitoring",
    description: "Real-time Power BI control dashboard giving call centre managers immediate visibility into agent performance, SLA status, and queue health — purpose-designed for wall-mounted display.",
    problem:  "Managers were reviewing performance at end of day. SLA breaches were identified after the fact, with no mechanism to intervene in real time.",
    solution: "Delivered a live-refresh Power BI dashboard with agent ranking tables, SLA threshold colour alerts, and an optimised dark layout for operations floor screens.",
    results: [
      { metric: "Live",  label: "Real-Time Data Feed" },
      { metric: "SLA",   label: "Breach Alerts Configured" },
      { metric: "100%",  label: "Agent Coverage" },
      { metric: "−40%",  label: "Reporting Delay Eliminated" },
    ],
    tech:    ["Power BI", "DAX", "Operations Analytics", "Custom Visuals", "Auto-Refresh"],
    color:   "#7C3AED", lightBg: "#F5F3FF", midBg: "#EDE9FE",
    github: "#", demo: "#",
    image: "/projects/call-center.png",
    video: "/videos/call-center-demo.mp4",
  },
  {
    id: 4, index: "04", featured: false,
    category: "Healthcare Analytics",
    title:    "Hospital Operations Intelligence",
    subtitle: "Power BI · Healthcare KPIs · Custom Visuals",
    description: "Cross-department hospital intelligence dashboard enabling management to monitor patient flow, resource utilisation, and KPIs from a single consolidated view.",
    problem:  "Departments operated in data silos. Management had no consolidated view of resource capacity, patient throughput, or operational bottlenecks.",
    solution: "Built a Power BI solution with custom visual components, cross-department drill-through pages, patient flow modelling, and auto-updating operational KPI summary cards.",
    results: [
      { metric: "5+",     label: "Departments Unified" },
      { metric: "Custom", label: "Visual Components Built" },
      { metric: "Live",   label: "Patient Flow Monitoring" },
      { metric: "Apr 26", label: "Delivered On Schedule" },
    ],
    tech:    ["Power BI", "Custom Visuals", "Healthcare Analytics", "DAX", "Cross-Filtering"],
    color:   "#059669", lightBg: "#ECFDF5", midBg: "#D1FAE5",
    github: "#", demo: "#",
    image: "/projects/hospital.png",
  },
  {
    id: 5, index: "05", featured: false,
    category: "Banking Policy Research",
    title:    "SME Financial Inclusion Study",
    subtitle: "CBE Policy Analysis · Egypt Vision 2030 · Executive Presentation",
    description: "Structured policy analysis of Central Bank of Egypt SME financing programmes, producing evidence-based recommendations presented to senior banking leadership.",
    problem:  "No formal evaluation framework existed for 8+ active CBE SME initiatives. Leadership required a prioritised, evidence-grounded view aligned with Egypt Vision 2030.",
    solution: "Analysed 8+ CBE and NBE programs, benchmarked international SME financing models, and delivered a five-recommendation brief — presented to the Head of North Cairo Region and acknowledged by leadership.",
    results: [
      { metric: "8+",   label: "Programs Formally Evaluated" },
      { metric: "5",    label: "Strategic Recommendations" },
      { metric: "Exec", label: "Leadership Endorsement" },
      { metric: "2030", label: "Vision-Aligned Framework" },
    ],
    tech:    ["Financial Analysis", "Policy Research", "SME Finance", "Strategic Reporting", "Risk Assessment"],
    color:   "#D97706", lightBg: "#FFFBEB", midBg: "#FEF3C7",
    github: "#", demo: "#",
    image: "/projects/sme-research.png",
  },
];

// ── Experience ───────────────────────────────────────────────────────────────
export interface Experience {
  role:    string;
  company: string;
  period:  string;
  type:    string;
  color:   string;
  points:  string[];
}

export const EXPERIENCE: Experience[] = [
  {
    role:    "BI Trainer & Brand Ambassador",
    company: "Career & WUZZUF",
    period:  "Aug 2025 – Present",
    type:    "Part-Time",
    color:   "#2563EB",
    points: [
      "Designed and delivered 3 AI automation training modules to 40+ participants — covering Google Gemini, prompt engineering, and practical report automation workflows",
      "Managed on-ground brand campaigns that directly engaged 100+ users, building execution and audience targeting skills",
      "Participated in CEO-level strategy sessions on organisational scaling, product positioning, and venture-backed growth models",
    ],
  },
  {
    role:    "Banking Operations Intern",
    company: "Banque Misr",
    period:  "Aug – Sep 2025",
    type:    "Internship",
    color:   "#0891B2",
    points: [
      "Processed 100+ live banking transactions daily across retail, credit operations, and treasury — sustaining accuracy under real operational pressure",
      "Identified and resolved workflow inefficiencies across departments, contributing to a 15% reduction in service delivery time",
      "Maintained a 98%+ accuracy rate across high-volume transaction processing and daily reconciliation tasks",
    ],
  },
  {
    role:    "Banking Operations Intern",
    company: "National Bank of Egypt",
    period:  "Jul – Aug 2025",
    type:    "Internship",
    color:   "#059669",
    points: [
      "Evaluated 50+ credit applications against formal risk frameworks, producing structured documentation that directly supported lending committee decisions",
      "Completed structured rotations across customer service, credit analysis, and operations — developing end-to-end understanding of integrated banking functions",
      "Authored operational procedure guides adopted across departments, measurably reducing new-hire onboarding time",
    ],
  },
];

// ── Certifications ───────────────────────────────────────────────────────────
export interface Certification {
  name:   string;
  org:    string;
  period: string;
  active: boolean;
  color:  string;
}

export const CERTS: Certification[] = [
  { name: "Data Analytics Specialist – Microsoft Power BI", org: "DEPI & ITC",                 period: "Nov 2025 – Present", active: true,  color: "#2563EB" },
  { name: "Oracle Financial Systems Specialist",            org: "Next Academy & DEPI",          period: "Nov 2024 – May 2025",active: false, color: "#7C3AED" },
  { name: "Professional Sales & Customer Relations",        org: "American Chamber of Commerce", period: "Jul – Aug 2024",    active: false, color: "#0891B2" },
  { name: "Employability Training Programme",               org: "Aspire Academy & UCCD",        period: "Jul – Aug 2024",    active: false, color: "#059669" },
  { name: "Financial Education for Youth",                  org: "Egyptian Banking Institute",   period: "Mar – Apr 2024",    active: false, color: "#D97706" },
  { name: "Credit Induction Programme in Banking",          org: "Egyptian Banking Institute",   period: "Mar – Apr 2024",    active: false, color: "#BE185D" },
];

// ── Achievements ─────────────────────────────────────────────────────────────
export interface Achievement { value: string; label: string; description: string; color: string }

export const ACHIEVEMENTS: Achievement[] = [
  { value: "3.73",  label: "Cumulative GPA",      color: "#2563EB", description: "Excellent Standing at Banha University, Faculty of Commerce English Section." },
  { value: "98%",   label: "Accuracy Rate",       color: "#0891B2", description: "Transaction processing accuracy maintained in high-pressure banking environment." },
  { value: "$307M", label: "Revenue Analysed",    color: "#7C3AED", description: "Total revenue tracked across 60,398 transactions in the Excel Analytics project." },
  { value: "10+",   label: "Projects Built",      color: "#059669", description: "Power BI dashboards, Excel analytics, ERP implementation, AI workshop, and policy research." },
  { value: "85%",   label: "Engagement Rate",     color: "#D97706", description: "Participant engagement during AI Automation workshop with 40+ campus students." },
  { value: "50+",   label: "Credit Applications", color: "#BE185D", description: "Credit applications formally evaluated using risk assessment frameworks at NBE." },
];

// ── Nav sections ─────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "About",          href: "#about"          },
  { label: "Skills",         href: "#skills"         },
  { label: "Projects",       href: "#projects"       },
  { label: "Experience",     href: "#experience"     },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact",        href: "#contact"        },
] as const;
