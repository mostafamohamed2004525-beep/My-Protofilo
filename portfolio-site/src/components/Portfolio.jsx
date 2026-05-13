"use client";

import { useState, useEffect, useRef } from "react";

// ── DATA ──────────────────────────────────────────────────────────────────────
const INFO = {
  name: "Mostafa Mohamed",
  email: "mostafamohamed2004525@gmail.com",
  phone: "+20 128-340-9232",
  linkedin: "https://linkedin.com/in/mostafa-farag2004",
  gpa: "3.73",
  university: "Banha University",
  degree: "Bachelor of Accounting",
  graduation: "2026",
};

const PROJECTS = [
  {
    id:1, num:"01",
    title:"HR Analytics Dashboard",
    sub:"Power BI · 7-Page Report",
    file:"HR1.pbix",
    desc:"Comprehensive 7-page HR intelligence report covering attrition forecasting, headcount trends, compensation analysis, and workforce demographic segmentation with advanced DAX calculations.",
    tech:["Power BI","DAX","Data Modeling","HR Analytics","Attrition Forecast"],
    highlights:["7 Report Pages","20+ KPI Metrics","2,000+ Employee Records"],
    color:"#3FFFA8", accent:"rgba(63,255,168,0.08)",
  },
  {
    id:2, num:"02",
    title:"Excel Sales Analytics",
    sub:"Advanced Excel · $307M Revenue",
    file:"project_1.xlsm",
    desc:"60,398 transactions across 4 years analysed in advanced Excel — $307M total revenue, 41% profit margin, YoY comparisons, and product performance tracking across 606 products with interactive macros.",
    tech:["Advanced Excel","Pivot Tables","VBA Macros","Product Analysis","YoY Comparison"],
    highlights:["$307M Revenue Tracked","60,398 Transactions","41% Profit Margin"],
    color:"#C9A96E", accent:"rgba(201,169,110,0.08)",
  },
  {
    id:3, num:"03",
    title:"Call Center Dashboard",
    sub:"Power BI · Operations Intelligence",
    file:"Call_Center_Dashboard.pbix",
    desc:"Real-time call center performance dashboard tracking agent KPIs, call volume trends, resolution rates, and service-level metrics with a custom dark background design.",
    tech:["Power BI","Call Analytics","SLA Metrics","KPI Tracking"],
    highlights:["Live KPI Tracking","Agent Performance","Custom Dark Design"],
    color:"#FFB347", accent:"rgba(255,179,71,0.08)",
  },
  {
    id:4, num:"04",
    title:"Hospital Analytics Dashboard",
    sub:"Power BI · Healthcare Intelligence",
    file:"مستشفي__2_.pbix",
    desc:"Healthcare analytics dashboard with custom Power BI visuals tracking patient flow, operational KPIs, and resource utilization metrics for hospital management intelligence.",
    tech:["Power BI","Custom Visuals","Healthcare KPI","Patient Analytics"],
    highlights:["Custom Power BI Visual","Patient Flow Tracking","Apr 2026"],
    color:"#2DD4BF", accent:"rgba(45,212,191,0.08)",
  },
  {
    id:5, num:"05",
    title:"Sales Dashboard I",
    sub:"Power BI · Tidal Theme",
    file:"sales1.pbix",
    desc:"Interactive sales performance dashboard with dynamic filtering, product category breakdown, regional performance tracking, and monthly trend analysis across key revenue metrics.",
    tech:["Power BI","Sales Analytics","Dynamic Filtering","Tidal Theme"],
    highlights:["Interactive Filtering","Revenue Breakdown","Regional Analysis"],
    color:"#7B9FFF", accent:"rgba(123,159,255,0.08)",
  },
  {
    id:6, num:"06",
    title:"Sales Analytics II",
    sub:"Power BI · 2-Page Deep Dive",
    file:"sales3.pbix",
    desc:"Two-page advanced sales analytics report featuring an executive summary page and detailed drill-down analysis with year-over-year comparisons and product performance segmentation.",
    tech:["Power BI","DAX","YoY Analysis","Drill-down","Bloom Theme"],
    highlights:["2 Report Pages","YoY Comparison","Drill-down Capability"],
    color:"#A78BFA", accent:"rgba(167,139,250,0.08)",
  },
  {
    id:7, num:"07",
    title:"BI Dark Theme Dashboard",
    sub:"Power BI · Executive Reporting",
    file:"fbbbbbbbb.pbix",
    desc:"Sleek dark-theme business intelligence dashboard built with a custom dark theme configuration for executive-level reporting and data storytelling.",
    tech:["Power BI","Dark Theme","BI Reporting","Data Storytelling"],
    highlights:["Custom Dark Theme","Executive View","Mar 2026"],
    color:"#FF7BAC", accent:"rgba(255,123,172,0.08)",
  },
  {
    id:8, num:"08",
    title:"Oracle ERP Implementation",
    sub:"Financial Systems · Architecture",
    file:"Oracle ERP",
    desc:"6-month Oracle ERP training across AP, GL, AR & Fixed Assets modules. End-to-end AP transactions including vendor master data, 3-way matching, and variance analysis.",
    tech:["Oracle ERP","AP Module","GL","AR","Fixed Assets"],
    highlights:["5 ERP Modules","6-Month Program","End-to-end AP"],
    color:"#FFB347", accent:"rgba(255,179,71,0.08)",
  },
  {
    id:9, num:"09",
    title:"AI Automation Workshop",
    sub:"Google Gemini · Training Design",
    file:"Workshop",
    desc:"Designed and delivered 3 training modules on prompt engineering and AI automation to 40+ campus participants, achieving 85% engagement with hands-on coding exercises.",
    tech:["Google Gemini","Prompt Engineering","AI Automation","Workshop Design"],
    highlights:["40+ Participants Trained","85% Engagement Rate","3 Training Modules"],
    color:"#3FFFA8", accent:"rgba(63,255,168,0.08)",
  },
  {
    id:10, num:"10",
    title:"SME Financial Inclusion Study",
    sub:"Banking Policy · Research",
    file:"Research",
    desc:"Analysed 8+ CBE initiatives and NBE SME financing programs. Delivered 5+ strategic recommendations aligned with Egypt Vision 2030 — presented to regional executive leadership.",
    tech:["Financial Analysis","Policy Research","SME Finance","Risk Assessment"],
    highlights:["8+ CBE Initiatives Analysed","5+ Recommendations","Executive Recognition"],
    color:"#C9A96E", accent:"rgba(201,169,110,0.08)",
  },
];

const EXPERIENCE = [
  {
    role: "Campus Ambassador & Project Contributor",
    company: "Career & WUZZUF",
    period: "Aug 2025 – Present",
    type: "Part-time",
    color: "#C9A96E",
    points: [
      "Delivered AI-focused training on Google Gemini to 40+ participants covering business automation",
      "Executed marketing campaigns with Vegeta, engaging 100+ users through direct field activities",
      "Attended executive strategy sessions with CEO Akram Marwan on startup scaling & leadership",
    ],
  },
  {
    role: "Summer Intern – Rowed Banking Program",
    company: "Banque Misr",
    period: "Aug – Sep 2025",
    type: "Internship",
    color: "#7B9FFF",
    points: [
      "Processed 100+ banking transactions daily across retail, credit, and treasury functions",
      "Improved service delivery time by 15% through cross-functional workflow optimization",
      "Maintained 98%+ accuracy rate on transaction processing and reconciliation tasks",
    ],
  },
  {
    role: "Summer Intern – Banking Operations",
    company: "National Bank of Egypt",
    period: "Jul – Aug 2025",
    type: "Internship",
    color: "#3FFFA8",
    points: [
      "Analysed 50+ credit applications using risk assessment frameworks supporting lending decisions",
      "Rotated across customer service, credit analysis, and operations departments",
      "Created reference guides improving staff onboarding efficiency across departments",
    ],
  },
];

const CERTS = [
  { name: "Data Analytics Specialist – Microsoft Power BI", issuer: "DEPI & ITC", period: "Nov 2025 – Present", active: true },
  { name: "Oracle Financial Systems Specialist", issuer: "Next Academy & DEPI", period: "Nov 2024 – May 2025", active: false },
  { name: "Professional Sales & Customer Relations", issuer: "American Chamber of Commerce", period: "Jul – Aug 2024", active: false },
  { name: "Employability Training Program", issuer: "Aspire Academy & UCCD", period: "Jul – Aug 2024", active: false },
  { name: "Financial Education for Youth", issuer: "Egyptian Banking Institute", period: "Mar – Apr 2024", active: false },
  { name: "Credit Induction Program in Banking", issuer: "Egyptian Banking Institute", period: "Mar – Apr 2024", active: false },
];

const SKILLS = [
  { cat: "ERP & Accounting Systems", color: "#C9A96E", icon: "⬡", items: ["Oracle ERP (GL · AP · AR · FA)", "SAP Fundamentals", "Odoo ERP", "Accounts Payable/Receivable", "3-Way Matching", "Vendor Management"] },
  { cat: "Data Analytics & BI", color: "#3FFFA8", icon: "◈", items: ["Power BI Dashboards", "DAX Calculations", "Advanced Excel", "SQL Query Optimization", "Python (Analytics)", "Data Modeling"] },
  { cat: "Banking & Finance", color: "#7B9FFF", icon: "◇", items: ["Credit Risk Assessment", "Bank Reconciliation", "Cash Flow Tracking", "Financial Statements", "Budgeting & Forecasting", "Variance Analysis"] },
  { cat: "AI & Automation", color: "#FF7BAC", icon: "⬟", items: ["Prompt Engineering", "Google Gemini API", "ChatGPT", "Business Automation", "Report Generation", "Workflow Optimization"] },
];

const SERVICES = [
  { icon: "◈", title: "Financial Analysis", desc: "End-to-end financial reporting, variance analysis, and ERP-driven accounting workflows.", color: "#C9A96E" },
  { icon: "⬡", title: "Data Dashboards", desc: "Power BI and Excel dashboards delivering real-time KPIs and actionable business intelligence.", color: "#3FFFA8" },
  { icon: "◇", title: "Banking Operations", desc: "Credit analysis, transaction processing, and operational efficiency optimization.", color: "#7B9FFF" },
  { icon: "⬟", title: "AI Automation", desc: "Prompt engineering and AI-powered automation of accounting and reporting workflows.", color: "#FF7BAC" },
];

// ── HOOKS ─────────────────────────────────────────────────────────────────────
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

// ── GLOBAL STYLES ─────────────────────────────────────────────────────────────
function Styles() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    const style = document.createElement("style");
    style.textContent = `
      *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
      :root{
        --bg:#040404;--s1:#090909;--s2:#0f0f0f;
        --border:rgba(255,255,255,0.055);--borderhi:rgba(255,255,255,0.11);
        --gold:#C9A96E;--goldhi:#E8C880;--mint:#3FFFA8;--blue:#7B9FFF;--pink:#FF7BAC;--amber:#FFB347;
        --text:#EDE8DC;--muted:#666;--subtle:#333;
        --fd:'Cormorant Garamond',serif;--fs:'Syne',sans-serif;--fm:'JetBrains Mono',monospace;
      }
      html{scroll-behavior:smooth;}
      body{background:var(--bg);color:var(--text);font-family:var(--fs);-webkit-font-smoothing:antialiased;overflow-x:hidden;}
      ::-webkit-scrollbar{width:3px;}
      ::-webkit-scrollbar-track{background:var(--bg);}
      ::-webkit-scrollbar-thumb{background:var(--gold);border-radius:2px;}
      
      @keyframes orb1{0%,100%{transform:translate(0,0) scale(1);}40%{transform:translate(80px,-100px) scale(1.2);}70%{transform:translate(-60px,80px) scale(0.85);}}
      @keyframes orb2{0%,100%{transform:translate(0,0) scale(1);}35%{transform:translate(-100px,60px) scale(1.1);}70%{transform:translate(80px,-80px) scale(0.9);}}
      @keyframes pulse{0%,100%{opacity:.5;}50%{opacity:1;}}
      @keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-10px);}}
      @keyframes shimmer{0%{background-position:-200% center;}100%{background-position:200% center;}}
      @keyframes lineDown{from{height:0;}to{height:100%;}}
      @keyframes spin{to{transform:rotate(360deg);}}
      @keyframes scanline{0%{transform:translateY(-100%);}100%{transform:translateY(100vh);}}
      @keyframes fadeUp{from{opacity:0;transform:translateY(28px);}to{opacity:1;transform:translateY(0);}}
      @keyframes glitch{0%,95%{clip-path:none;transform:none;}96%{clip-path:rect(10px,9999px,20px,0);transform:skewX(-2deg);}97%{clip-path:rect(60px,9999px,80px,0);transform:skewX(1deg);}98%{clip-path:none;transform:none;}}
      
      .reveal{opacity:0;transform:translateY(24px);transition:opacity .7s ease,transform .7s ease;}
      .reveal.on{opacity:1;transform:none;}
      .d1{transition-delay:.08s!important;}.d2{transition-delay:.16s!important;}.d3{transition-delay:.24s!important;}.d4{transition-delay:.32s!important;}.d5{transition-delay:.40s!important;}.d6{transition-delay:.48s!important;}
      
      .shimmer{
        background:linear-gradient(90deg,var(--gold) 0%,var(--goldhi) 35%,#fff 50%,var(--goldhi) 65%,var(--gold) 100%);
        background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
        animation:shimmer 5s linear infinite;
      }
      
      .nav-a{font-family:var(--fm);font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);text-decoration:none;transition:color .3s;position:relative;}
      .nav-a::after{content:'';position:absolute;bottom:-2px;left:0;width:0;height:1px;background:var(--gold);transition:width .3s;}
      .nav-a:hover{color:var(--gold);}
      .nav-a:hover::after{width:100%;}
      
      .btn-g{background:var(--gold);color:#000;border:none;padding:13px 28px;font-family:var(--fm);font-size:10px;letter-spacing:.14em;text-transform:uppercase;cursor:pointer;transition:all .3s;text-decoration:none;display:inline-flex;align-items:center;gap:8px;}
      .btn-g:hover{background:var(--goldhi);transform:translateY(-2px);box-shadow:0 12px 40px rgba(201,169,110,.3);}
      .btn-o{background:transparent;color:var(--text);border:1px solid var(--borderhi);padding:12px 28px;font-family:var(--fm);font-size:10px;letter-spacing:.14em;text-transform:uppercase;cursor:pointer;transition:all .3s;text-decoration:none;display:inline-flex;align-items:center;gap:8px;}
      .btn-o:hover{border-color:var(--gold);color:var(--gold);transform:translateY(-2px);}
      
      .lbl{font-family:var(--fm);font-size:9px;letter-spacing:.22em;text-transform:uppercase;color:var(--gold);display:flex;align-items:center;gap:12px;}
      .lbl::before{content:'';display:block;width:20px;height:1px;background:var(--gold);}
      
      .card{border:1px solid var(--border);background:rgba(255,255,255,.015);transition:all .35s;position:relative;overflow:hidden;}
      .card::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,255,255,.02),transparent);opacity:0;transition:opacity .35s;}
      .card:hover{border-color:var(--borderhi);transform:translateY(-3px);box-shadow:0 24px 60px rgba(0,0,0,.5);}
      .card:hover::before{opacity:1;}
      
      .img-ph{background:linear-gradient(135deg,rgba(255,255,255,.015),rgba(255,255,255,.035));border:1px dashed rgba(255,255,255,.07);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;transition:all .3s;cursor:pointer;}
      .img-ph:hover{background:rgba(255,255,255,.04);border-color:rgba(255,255,255,.14);}
      
      .tag{font-family:var(--fm);font-size:9px;letter-spacing:.08em;padding:4px 10px;border:1px solid var(--border);color:var(--muted);transition:all .3s;}
      .tag:hover{border-color:var(--gold);color:var(--gold);}
      
      .cert-row{border-bottom:1px solid var(--border);transition:all .3s;position:relative;overflow:hidden;}
      .cert-row::before{content:'';position:absolute;left:0;top:0;bottom:0;width:2px;background:var(--gold);transform:scaleY(0);transform-origin:bottom;transition:transform .3s;}
      .cert-row:hover{background:rgba(255,255,255,.02);padding-left:8px;}
      .cert-row:hover::before{transform:scaleY(1);}
      
      input,textarea{background:rgba(255,255,255,.02);border:1px solid var(--border);color:var(--text);font-family:var(--fs);font-size:14px;padding:14px 18px;width:100%;outline:none;transition:border-color .3s;-webkit-appearance:none;}
      input:focus,textarea:focus{border-color:var(--gold);}
      input::placeholder,textarea::placeholder{color:var(--subtle);}
      
      @media(max-width:900px){
        .grid-2{grid-template-columns:1fr!important;}
        .grid-3{grid-template-columns:1fr!important;}
        .sticky-left{position:relative!important;top:auto!important;}
        .hide-sm{display:none!important;}
      }
      @media(max-width:600px){
        .px-page{padding-left:20px!important;padding-right:20px!important;}
        .show-sm{display:flex!important;}
      }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(link); document.head.removeChild(style); };
  }, []);
  return null;
}

// ── NAVBAR ────────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = ["About","Skills","Projects","Experience","Certifications","Contact"];
  return (
    <nav style={{
      position:"fixed",top:0,left:0,right:0,zIndex:1000,
      padding:"0 48px",height:"60px",
      display:"flex",alignItems:"center",justifyContent:"space-between",
      background: scrolled ? "rgba(4,4,4,.93)" : "transparent",
      backdropFilter: scrolled ? "blur(24px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      transition:"all .4s ease",
    }}>
      <a href="#" style={{textDecoration:"none",display:"flex",alignItems:"center",gap:"2px"}}>
        <span style={{fontFamily:"var(--fd)",fontSize:"22px",fontWeight:600,color:"var(--gold)"}}>M</span>
        <span style={{fontFamily:"var(--fd)",fontSize:"22px",fontWeight:300,color:"var(--text)"}}>M</span>
        <span style={{fontFamily:"var(--fm)",fontSize:"9px",color:"var(--subtle)",letterSpacing:".1em",marginLeft:"10px"}} className="hide-sm">Portfolio</span>
      </a>
      <div className="hide-sm" style={{display:"flex",gap:"32px",alignItems:"center"}}>
        {links.map(l=><a key={l} href={`#${l.toLowerCase()}`} className="nav-a">{l}</a>)}
      </div>
      <a href="#contact" className="btn-g hide-sm" style={{padding:"9px 18px",fontSize:"9px"}}>Hire Me →</a>
      <button onClick={()=>setOpen(!open)} style={{display:"none",background:"none",border:"none",cursor:"pointer",flexDirection:"column",gap:"5px",padding:"8px"}} className="show-sm">
        {[0,1,2].map(i=><span key={i} style={{display:"block",width:"20px",height:"1px",background:"var(--gold)",transition:"all .3s",transform:open?(i===0?"rotate(45deg) translate(4px,4px)":i===2?"rotate(-45deg) translate(4px,-4px)":"scaleX(0)"):"none"}}/>)}
      </button>
      {open && (
        <div style={{position:"fixed",top:"60px",left:0,right:0,background:"rgba(4,4,4,.98)",backdropFilter:"blur(20px)",borderBottom:"1px solid var(--border)",padding:"24px 20px",display:"flex",flexDirection:"column",gap:"20px",zIndex:999}}>
          {links.map(l=><a key={l} href={`#${l.toLowerCase()}`} className="nav-a" onClick={()=>setOpen(false)} style={{fontSize:"13px",letterSpacing:".12em"}}>{l}</a>)}
          <a href="#contact" className="btn-g" style={{width:"fit-content",marginTop:"8px"}}>Hire Me →</a>
        </div>
      )}
    </nav>
  );
}

// ── HERO ──────────────────────────────────────────────────────────────────────
function Hero() {
  const [on, setOn] = useState(false);
  useEffect(() => { setTimeout(() => setOn(true), 80); }, []);
  const t = (d, extra = {}) => ({ opacity: on?1:0, transform: on?"none":"translateY(28px)", transition:`opacity .9s cubic-bezier(.16,1,.3,1) ${d}s, transform .9s cubic-bezier(.16,1,.3,1) ${d}s`, ...extra });
  return (
    <section id="hero" style={{minHeight:"100vh",display:"flex",alignItems:"center",position:"relative",overflow:"hidden",padding:"100px 48px 80px"}}>
      {/* Orbs */}
      <div style={{position:"absolute",top:"8%",right:"12%",width:"560px",height:"560px",borderRadius:"50%",background:"radial-gradient(circle,rgba(201,169,110,.1) 0%,transparent 68%)",filter:"blur(50px)",animation:"orb1 18s ease-in-out infinite",pointerEvents:"none"}}/>
      <div style={{position:"absolute",bottom:"15%",left:"2%",width:"440px",height:"440px",borderRadius:"50%",background:"radial-gradient(circle,rgba(63,255,168,.055) 0%,transparent 68%)",filter:"blur(70px)",animation:"orb2 22s ease-in-out infinite",pointerEvents:"none"}}/>
      {/* Grid */}
      <div style={{position:"absolute",inset:0,backgroundImage:"linear-gradient(rgba(255,255,255,.012) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.012) 1px,transparent 1px)",backgroundSize:"64px 64px",pointerEvents:"none"}}/>
      {/* Scanline */}
      <div style={{position:"absolute",top:0,left:0,right:0,height:"1px",background:"linear-gradient(90deg,transparent,rgba(201,169,110,.2),transparent)",animation:"scanline 8s linear infinite",pointerEvents:"none"}}/>

      <div style={{maxWidth:"1200px",margin:"0 auto",width:"100%",position:"relative",zIndex:1}}>
        {/* Badge */}
        <div style={{...t(.05),display:"inline-flex",alignItems:"center",gap:"8px",padding:"7px 16px",border:"1px solid var(--borderhi)",marginBottom:"52px"}}>
          <span style={{width:"6px",height:"6px",borderRadius:"50%",background:"var(--mint)",animation:"pulse 2s ease infinite",display:"block"}}/>
          <span style={{fontFamily:"var(--fm)",fontSize:"9px",letterSpacing:".16em",color:"var(--muted)",textTransform:"uppercase"}}>Available · Full-time Opportunities</span>
        </div>

        {/* Name */}
        <div style={{marginBottom:"28px"}}>
          <h1 style={{fontFamily:"var(--fd)",fontWeight:300,lineHeight:.93,letterSpacing:"-.03em",fontSize:"clamp(58px,10vw,130px)"}}>
            <span style={{...t(.12),display:"block",color:"var(--text)",animation:"glitch 8s ease-in-out infinite"}}>Mostafa</span>
            <span className="shimmer" style={{...t(.22),display:"block",fontSize:"clamp(58px,10vw,130px)",fontFamily:"var(--fd)",fontWeight:600,lineHeight:.93,letterSpacing:"-.03em"}}>Mohamed</span>
          </h1>
        </div>

        {/* Meta row */}
        <div style={{...t(.32),display:"flex",alignItems:"center",gap:"14px",flexWrap:"wrap",marginBottom:"44px"}}>
          <span style={{width:"28px",height:"1px",background:"var(--gold)"}}/>
          <span style={{fontFamily:"var(--fs)",fontSize:"12px",letterSpacing:".1em",color:"var(--muted)",textTransform:"uppercase"}}>Accounting & Financial Analytics</span>
          <span style={{width:"4px",height:"4px",borderRadius:"50%",background:"var(--subtle)"}}/>
          <span style={{fontFamily:"var(--fm)",fontSize:"11px",color:"var(--gold)"}}>GPA 3.73 / 4.00</span>
          <span style={{width:"4px",height:"4px",borderRadius:"50%",background:"var(--subtle)"}}/>
          <span style={{fontFamily:"var(--fm)",fontSize:"11px",color:"var(--muted)"}}>Banha University · Class of '26</span>
        </div>

        {/* Description */}
        <p style={{...t(.4),maxWidth:"520px",fontSize:"16px",lineHeight:1.82,color:"var(--muted)",marginBottom:"48px"}}>
          Banking operations expert with hands-on exposure at{" "}
          <span style={{color:"var(--text)"}}>National Bank of Egypt</span> &{" "}
          <span style={{color:"var(--text)"}}>Banque Misr</span>. Specializing in Oracle ERP systems, Power BI intelligence, and AI-driven financial automation.
        </p>

        {/* CTAs */}
        <div style={{...t(.48),display:"flex",gap:"14px",alignItems:"center",flexWrap:"wrap",marginBottom:"64px"}}>
          <a href="#projects" className="btn-g">View Work <span>↗</span></a>
          <a href="#contact" className="btn-o">Get In Touch</a>
          <a href={`mailto:${INFO.email}`} style={{fontFamily:"var(--fm)",fontSize:"9px",letterSpacing:".12em",color:"var(--subtle)",textDecoration:"none",marginLeft:"8px",transition:"color .3s"}}
            onMouseEnter={e=>e.currentTarget.style.color="var(--gold)"}
            onMouseLeave={e=>e.currentTarget.style.color="var(--subtle)"}>↓ Download CV</a>
        </div>

        {/* Social */}
        <div style={{...t(.56),display:"flex",gap:"28px",borderTop:"1px solid var(--border)",paddingTop:"32px"}}>
          {[["LinkedIn","https://linkedin.com/in/mostafa-farag2004"],["Email",`mailto:${INFO.email}`],["Phone",`tel:${INFO.phone.replace(/\s/g,"")}`]].map(([l,h])=>(
            <a key={l} href={h} target="_blank" rel="noopener noreferrer" style={{fontFamily:"var(--fm)",fontSize:"9px",letterSpacing:".14em",color:"var(--subtle)",textDecoration:"none",textTransform:"uppercase",transition:"color .3s"}}
              onMouseEnter={e=>e.currentTarget.style.color="var(--gold)"}
              onMouseLeave={e=>e.currentTarget.style.color="var(--subtle)"}>{l}</a>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{position:"absolute",bottom:"36px",right:"48px",display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",opacity:.3,animation:"float 3s ease-in-out infinite"}}>
        <span style={{fontFamily:"var(--fm)",fontSize:"8px",letterSpacing:".18em",color:"var(--gold)",textTransform:"uppercase",writingMode:"vertical-rl"}}>Scroll</span>
        <span style={{color:"var(--gold)",fontSize:"12px"}}>↓</span>
      </div>
    </section>
  );
}

// ── ABOUT ─────────────────────────────────────────────────────────────────────
function About() {
  const [ref, on] = useInView();
  const stats = [
    { v:"3.73", l:"Cumulative GPA", s:"Out of 4.00", c:"var(--gold)" },
    { v:"98%",  l:"Accuracy Rate",  s:"Transaction Processing", c:"var(--mint)" },
    { v:"100+", l:"Daily Trans.",   s:"Banking Operations",     c:"var(--blue)" },
    { v:"15%",  l:"Efficiency Gain",s:"Workflow Optimization",  c:"var(--pink)" },
  ];
  return (
    <section id="about" style={{padding:"120px 48px"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto"}} ref={ref}>
        <div className={`reveal${on?" on":""}`} style={{marginBottom:"80px"}}>
          <div className="lbl" style={{marginBottom:"20px"}}>About Me</div>
          <h2 style={{fontFamily:"var(--fd)",fontSize:"clamp(36px,5vw,64px)",fontWeight:300,lineHeight:1.08,letterSpacing:"-.02em"}}>
            Bridging Finance<br/><em style={{fontStyle:"italic",color:"var(--gold)"}}>& Technology</em>
          </h2>
        </div>

        <div className="grid-2" style={{display:"grid",gridTemplateColumns:"1.1fr .9fr",gap:"72px",alignItems:"start"}}>
          <div>
            {[
              {delay:"d1",text:<>I'm a final-year accounting student at <span style={{color:"var(--text)"}}>Banha University</span> with a strong academic record and hands-on experience at two of Egypt's premier financial institutions — processing real transactions in live banking environments.</>},
              {delay:"d2",text:<>My work sits at the intersection of traditional finance and modern technology — from implementing <span style={{color:"var(--text)"}}>Oracle ERP modules</span> and building <span style={{color:"var(--text)"}}>Power BI dashboards</span> with advanced DAX, to delivering AI automation workshops and banking policy research presented to executive leadership.</>},
              {delay:"d3",text:<>Driven by an ambitious trajectory aligned with <span style={{color:"var(--gold)"}}>Big 4 or multinational financial services</span>, I bring both analytical precision and business intuition to every challenge I take on.</>},
            ].map(({delay,text},i)=>(
              <p key={i} className={`reveal${on?" on":""} ${delay}`} style={{fontSize:"16px",lineHeight:1.85,color:"var(--muted)",marginBottom:"22px"}}>{text}</p>
            ))}
            <div className={`reveal${on?" on":""} d4`} style={{display:"flex",flexDirection:"column",gap:"10px",marginTop:"36px"}}>
              {["Financial Systems Architecture","Data-Driven Decision Making","Banking Operations Excellence","AI & Process Automation"].map((s,i)=>(
                <div key={i} style={{display:"flex",alignItems:"center",gap:"12px"}}>
                  <span style={{width:"14px",height:"1px",background:"var(--gold)",flexShrink:0}}/>
                  <span style={{fontFamily:"var(--fm)",fontSize:"11px",color:"var(--text)",letterSpacing:".04em"}}>{s}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`reveal${on?" on":""} d2`}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1px",background:"var(--border)"}}>
              {stats.map((s,i)=>(
                <div key={i} style={{background:"var(--bg)",padding:"32px 24px",transition:"background .3s",cursor:"default"}}
                  onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,.025)"}
                  onMouseLeave={e=>e.currentTarget.style.background="var(--bg)"}>
                  <div style={{fontFamily:"var(--fd)",fontSize:"52px",fontWeight:600,color:s.c,lineHeight:1,marginBottom:"6px"}}>{s.v}</div>
                  <div style={{fontFamily:"var(--fs)",fontSize:"13px",fontWeight:600,color:"var(--text)",marginBottom:"4px"}}>{s.l}</div>
                  <div style={{fontFamily:"var(--fm)",fontSize:"9px",color:"var(--muted)",letterSpacing:".05em"}}>{s.s}</div>
                </div>
              ))}
            </div>
            {/* Education card */}
            <div style={{marginTop:"1px",background:"var(--s1)",border:"1px solid var(--border)",padding:"28px 24px"}}>
              <div style={{fontFamily:"var(--fm)",fontSize:"9px",letterSpacing:".16em",color:"var(--gold)",textTransform:"uppercase",marginBottom:"12px"}}>Education</div>
              <div style={{fontFamily:"var(--fs)",fontSize:"15px",fontWeight:600,color:"var(--text)",marginBottom:"4px"}}>Bachelor of Accounting</div>
              <div style={{fontFamily:"var(--fs)",fontSize:"12px",color:"var(--muted)",marginBottom:"2px"}}>Banha University · Faculty of Commerce (English)</div>
              <div style={{fontFamily:"var(--fm)",fontSize:"10px",color:"var(--subtle)"}}>2022 – 2026</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── SKILLS ────────────────────────────────────────────────────────────────────
function Skills() {
  const [ref, on] = useInView();
  const [active, setActive] = useState(null);
  return (
    <section id="skills" style={{padding:"120px 48px",background:"rgba(255,255,255,.008)",borderTop:"1px solid var(--border)",borderBottom:"1px solid var(--border)"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto"}} ref={ref}>
        <div className={`reveal${on?" on":""}`} style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:"72px",flexWrap:"wrap",gap:"20px"}}>
          <div>
            <div className="lbl" style={{marginBottom:"20px"}}>Expertise</div>
            <h2 style={{fontFamily:"var(--fd)",fontSize:"clamp(36px,5vw,64px)",fontWeight:300,lineHeight:1.08,letterSpacing:"-.02em"}}>
              Technical<br/><em style={{fontStyle:"italic",color:"var(--gold)"}}>Arsenal</em>
            </h2>
          </div>
          <p style={{maxWidth:"280px",fontSize:"13px",lineHeight:1.7,color:"var(--muted)"}}>
            A versatile skill set spanning ERP systems, data analytics, banking operations, and AI automation.
          </p>
        </div>

        <div className="grid-2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1px",background:"var(--border)"}}>
          {SKILLS.map((sk,i)=>(
            <div key={sk.cat} className={`reveal${on?" on":""} d${i+1}`}
              style={{background:active===i?"rgba(255,255,255,.03)":"var(--bg)",padding:"44px",transition:"background .3s",cursor:"default"}}
              onMouseEnter={()=>setActive(i)} onMouseLeave={()=>setActive(null)}>
              <div style={{display:"flex",alignItems:"center",gap:"14px",marginBottom:"28px"}}>
                <span style={{fontSize:"22px",color:sk.color,transition:"transform .3s",transform:active===i?"scale(1.15)":"none"}}>{sk.icon}</span>
                <span style={{fontFamily:"var(--fs)",fontSize:"14px",fontWeight:600,color:"var(--text)"}}>{sk.cat}</span>
              </div>
              <div style={{display:"flex",flexWrap:"wrap",gap:"7px"}}>
                {sk.items.map((item,j)=>(
                  <span key={j} style={{fontFamily:"var(--fm)",fontSize:"10px",padding:"5px 11px",border:`1px solid ${active===i?sk.color+"45":"var(--border)"}`,color:active===i?sk.color:"var(--muted)",letterSpacing:".05em",transition:"all .25s",transitionDelay:`${j*.025}s`}}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── PROJECTS ──────────────────────────────────────────────────────────────────
function Projects() {
  const [ref, on] = useInView();
  return (
    <section id="projects" style={{padding:"120px 48px"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto"}} ref={ref}>
        <div className={`reveal${on?" on":""}`} style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:"72px",flexWrap:"wrap",gap:"20px"}}>
          <div>
            <div className="lbl" style={{marginBottom:"20px"}}>Work</div>
            <h2 style={{fontFamily:"var(--fd)",fontSize:"clamp(36px,5vw,64px)",fontWeight:300,lineHeight:1.08,letterSpacing:"-.02em"}}>
              Featured<br/><em style={{fontStyle:"italic",color:"var(--gold)"}}>Projects</em>
            </h2>
          </div>
          <div style={{fontFamily:"var(--fd)",fontSize:"72px",fontWeight:300,color:"var(--border)",lineHeight:1}}>05</div>
        </div>

        {/* Top 2 – large */}
        <div className="grid-2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1px",background:"var(--border)",marginBottom:"1px"}}>
          {PROJECTS.slice(0,2).map((p,i)=>(
            <div key={p.id} className={`card reveal${on?" on":""} d${i+1}`} style={{border:"none",background:"var(--bg)"}}>
              {/* Image placeholder */}
              <div className="img-ph" style={{height:"220px"}}>
                <div style={{width:"52px",height:"52px",border:`1px dashed ${p.color}35`,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:p.color,fontSize:"20px",opacity:.35}}>⊕</div>
                <span style={{fontFamily:"var(--fm)",fontSize:"8px",color:"var(--subtle)",letterSpacing:".18em",textTransform:"uppercase"}}>Add Screenshot</span>
                <span style={{fontFamily:"var(--fm)",fontSize:"7px",color:"var(--subtle)",letterSpacing:".08em",opacity:.6}}>Replace .img-ph with &lt;img&gt;</span>
              </div>
              <div style={{padding:"32px"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"14px"}}>
                  <div>
                    <div style={{fontFamily:"var(--fm)",fontSize:"8px",letterSpacing:".18em",color:p.color,marginBottom:"6px",textTransform:"uppercase"}}>{p.num} — {p.sub}</div>
                    <h3 style={{fontFamily:"var(--fd)",fontSize:"26px",fontWeight:500,color:"var(--text)",lineHeight:1.15}}>{p.title}</h3>
                  </div>
                  <span style={{color:p.color,opacity:.5,fontSize:"18px",marginTop:"4px"}}>↗</span>
                </div>
                <p style={{fontSize:"13px",lineHeight:1.72,color:"var(--muted)",marginBottom:"20px"}}>{p.desc}</p>
                <div style={{display:"flex",flexWrap:"wrap",gap:"14px",marginBottom:"18px"}}>
                  {p.highlights.map((h,hi)=>(
                    <div key={hi} style={{display:"flex",alignItems:"center",gap:"6px"}}>
                      <span style={{width:"3px",height:"3px",borderRadius:"50%",background:p.color,flexShrink:0}}/>
                      <span style={{fontFamily:"var(--fm)",fontSize:"9px",color:"var(--muted)"}}>{h}</span>
                    </div>
                  ))}
                </div>
                <div style={{display:"flex",flexWrap:"wrap",gap:"5px"}}>
                  {p.tech.map((t,ti)=><span key={ti} className="tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 3 – compact */}
        <div className="grid-3" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1px",background:"var(--border)"}}>
          {PROJECTS.slice(2).map((p,i)=>(
            <div key={p.id} className={`card reveal${on?" on":""} d${i+3}`} style={{border:"none",background:"var(--bg)"}}>
              <div className="img-ph" style={{height:"150px"}}>
                <div style={{width:"38px",height:"38px",border:`1px dashed ${p.color}35`,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:p.color,fontSize:"14px",opacity:.35}}>⊕</div>
                <span style={{fontFamily:"var(--fm)",fontSize:"7px",color:"var(--subtle)",letterSpacing:".16em",textTransform:"uppercase"}}>Add Screenshot</span>
              </div>
              <div style={{padding:"24px"}}>
                <div style={{fontFamily:"var(--fm)",fontSize:"8px",letterSpacing:".16em",color:p.color,marginBottom:"7px",textTransform:"uppercase"}}>{p.num}</div>
                <h3 style={{fontFamily:"var(--fd)",fontSize:"20px",fontWeight:500,color:"var(--text)",marginBottom:"10px",lineHeight:1.15}}>{p.title}</h3>
                <p style={{fontSize:"12px",lineHeight:1.65,color:"var(--muted)",marginBottom:"14px"}}>{p.desc.slice(0,110)}…</p>
                <div style={{display:"flex",flexWrap:"wrap",gap:"4px"}}>
                  {p.tech.slice(0,3).map((t,ti)=><span key={ti} className="tag" style={{fontSize:"8px",padding:"3px 8px"}}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── EXPERIENCE ────────────────────────────────────────────────────────────────
function Experience() {
  const [ref, on] = useInView();
  return (
    <section id="experience" style={{padding:"120px 48px",background:"rgba(255,255,255,.008)",borderTop:"1px solid var(--border)"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto"}} ref={ref}>
        <div className="grid-2" style={{display:"grid",gridTemplateColumns:"1fr 2fr",gap:"80px",alignItems:"start"}}>
          <div className={`reveal${on?" on":""} sticky-left`} style={{position:"sticky",top:"90px"}}>
            <div className="lbl" style={{marginBottom:"20px"}}>Career</div>
            <h2 style={{fontFamily:"var(--fd)",fontSize:"clamp(34px,4vw,60px)",fontWeight:300,lineHeight:1.08,letterSpacing:"-.02em",marginBottom:"24px"}}>
              Professional<br/><em style={{fontStyle:"italic",color:"var(--gold)"}}>Experience</em>
            </h2>
            <p style={{fontSize:"13px",lineHeight:1.7,color:"var(--muted)"}}>Banking rotations and professional contributions across Egypt's premier financial institutions.</p>
          </div>

          <div style={{position:"relative",paddingLeft:"36px"}}>
            {/* Animated line */}
            <div style={{position:"absolute",left:0,top:"8px",bottom:"8px",width:"1px",background:"var(--border)"}}>
              <div style={{position:"absolute",top:0,left:0,right:0,background:"linear-gradient(to bottom,var(--gold),transparent)",height:on?"100%":"0%",transition:"height 2.2s ease .5s"}}/>
            </div>

            <div style={{display:"flex",flexDirection:"column",gap:"48px"}}>
              {EXPERIENCE.map((exp,i)=>(
                <div key={i} className={`reveal${on?" on":""} d${i+1}`} style={{position:"relative"}}>
                  {/* Dot */}
                  <div style={{position:"absolute",left:"-41px",top:"7px",width:"10px",height:"10px",borderRadius:"50%",border:"1px solid var(--gold)",background:"var(--bg)",display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <div style={{width:"3px",height:"3px",borderRadius:"50%",background:"var(--gold)"}}/>
                  </div>
                  <div style={{border:"1px solid var(--border)",background:"rgba(255,255,255,.012)",padding:"28px 30px",transition:"all .3s"}}
                    onMouseEnter={e=>{e.currentTarget.style.borderColor="var(--borderhi)";e.currentTarget.style.background="rgba(255,255,255,.025)";}}
                    onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--border)";e.currentTarget.style.background="rgba(255,255,255,.012)";}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"8px",marginBottom:"18px"}}>
                      <div>
                        <div style={{fontFamily:"var(--fm)",fontSize:"8px",letterSpacing:".16em",color:exp.color,textTransform:"uppercase",marginBottom:"5px"}}>{exp.type}</div>
                        <h3 style={{fontFamily:"var(--fs)",fontSize:"15px",fontWeight:600,color:"var(--text)",marginBottom:"3px"}}>{exp.role}</h3>
                        <div style={{fontFamily:"var(--fs)",fontSize:"13px",color:exp.color}}>{exp.company}</div>
                      </div>
                      <div style={{fontFamily:"var(--fm)",fontSize:"9px",color:"var(--muted)",letterSpacing:".04em",whiteSpace:"nowrap"}}>{exp.period}</div>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",gap:"9px"}}>
                      {exp.points.map((pt,pi)=>(
                        <div key={pi} style={{display:"flex",gap:"11px"}}>
                          <span style={{color:exp.color,fontSize:"9px",flexShrink:0,marginTop:"4px"}}>▸</span>
                          <span style={{fontSize:"12px",lineHeight:1.65,color:"var(--muted)"}}>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── CERTIFICATIONS ────────────────────────────────────────────────────────────
function Certifications() {
  const [ref, on] = useInView();
  return (
    <section id="certifications" style={{padding:"120px 48px"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto"}} ref={ref}>
        <div className={`reveal${on?" on":""}`} style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:"64px",flexWrap:"wrap",gap:"20px"}}>
          <div>
            <div className="lbl" style={{marginBottom:"20px"}}>Credentials</div>
            <h2 style={{fontFamily:"var(--fd)",fontSize:"clamp(36px,5vw,64px)",fontWeight:300,lineHeight:1.08,letterSpacing:"-.02em"}}>
              Certifications<br/><em style={{fontStyle:"italic",color:"var(--gold)"}}>& Training</em>
            </h2>
          </div>
          <div style={{fontFamily:"var(--fd)",fontSize:"80px",fontWeight:300,color:"var(--border)",lineHeight:1}}>06</div>
        </div>

        <div className="grid-2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1px",background:"var(--border)"}}>
          {CERTS.map((c,i)=>(
            <div key={i} className={`cert-row reveal${on?" on":""} d${i+1}`} style={{background:"var(--bg)",padding:"26px 30px",transition:"all .3s"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"14px"}}>
                <div style={{flex:1}}>
                  {c.active && (
                    <div style={{display:"inline-flex",alignItems:"center",gap:"5px",fontFamily:"var(--fm)",fontSize:"8px",letterSpacing:".1em",color:"var(--mint)",padding:"2px 8px",border:"1px solid rgba(63,255,168,.2)",marginBottom:"8px",textTransform:"uppercase"}}>
                      <span style={{width:"4px",height:"4px",borderRadius:"50%",background:"var(--mint)",animation:"pulse 2s infinite"}}/>
                      Active
                    </div>
                  )}
                  <h3 style={{fontFamily:"var(--fs)",fontSize:"13px",fontWeight:600,color:"var(--text)",marginBottom:"5px",lineHeight:1.4}}>{c.name}</h3>
                  <div style={{fontFamily:"var(--fm)",fontSize:"9px",color:"var(--gold)",letterSpacing:".05em",marginBottom:"3px"}}>{c.issuer}</div>
                  <div style={{fontFamily:"var(--fm)",fontSize:"9px",color:"var(--subtle)"}}>{c.period}</div>
                </div>
                <div style={{width:"32px",height:"32px",border:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--subtle)",fontSize:"13px",flexShrink:0}}>◈</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── SERVICES ──────────────────────────────────────────────────────────────────
function Services() {
  const [ref, on] = useInView();
  return (
    <section id="services" style={{padding:"120px 48px",background:"rgba(255,255,255,.008)",borderTop:"1px solid var(--border)",borderBottom:"1px solid var(--border)"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto"}} ref={ref}>
        <div className={`reveal${on?" on":""}`} style={{marginBottom:"72px"}}>
          <div className="lbl" style={{marginBottom:"20px"}}>What I Offer</div>
          <h2 style={{fontFamily:"var(--fd)",fontSize:"clamp(36px,5vw,64px)",fontWeight:300,lineHeight:1.08,letterSpacing:"-.02em"}}>
            Services &<br/><em style={{fontStyle:"italic",color:"var(--gold)"}}>Capabilities</em>
          </h2>
        </div>

        <div className="grid-2" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"1px",background:"var(--border)"}}>
          {SERVICES.map((s,i)=>(
            <div key={i} className={`reveal${on?" on":""} d${i+1}`}
              style={{background:"var(--bg)",padding:"36px 28px",transition:"background .3s",cursor:"default"}}
              onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,.025)"}
              onMouseLeave={e=>e.currentTarget.style.background="var(--bg)"}>
              <div style={{fontSize:"24px",color:s.color,marginBottom:"20px"}}>{s.icon}</div>
              <h3 style={{fontFamily:"var(--fs)",fontSize:"14px",fontWeight:600,color:"var(--text)",marginBottom:"12px"}}>{s.title}</h3>
              <p style={{fontSize:"12px",lineHeight:1.7,color:"var(--muted)"}}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── ACHIEVEMENTS ──────────────────────────────────────────────────────────────
function Achievements() {
  const [ref, on] = useInView();
  const items = [
    { n:"3.73", l:"GPA", d:"Excellent Standing — top academic performance at Faculty of Commerce English Section.", c:"var(--gold)" },
    { n:"98%",  l:"Accuracy", d:"Transaction processing accuracy rate maintained under high-pressure banking environment at Banque Misr.", c:"var(--mint)" },
    { n:"85%",  l:"Engagement", d:"Workshop participant engagement rate achieved during AI Automation training with 40+ campus participants.", c:"var(--blue)" },
    { n:"15%",  l:"Efficiency", d:"Service delivery improvement identified and implemented through cross-functional workflow optimization.", c:"var(--pink)" },
    { n:"5+",   l:"ERP Modules", d:"Oracle ERP Financial Suite modules completed: GL, AP, AR, Fixed Assets, Cash Management.", c:"var(--amber)" },
    { n:"8+",   l:"CBE Initiatives", d:"Central Bank of Egypt SME programs analysed for financial inclusion research presented to executive leadership.", c:"var(--gold)" },
  ];
  return (
    <section id="achievements" style={{padding:"120px 48px"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto"}} ref={ref}>
        <div className={`reveal${on?" on":""}`} style={{marginBottom:"72px"}}>
          <div className="lbl" style={{marginBottom:"20px"}}>Impact</div>
          <h2 style={{fontFamily:"var(--fd)",fontSize:"clamp(36px,5vw,64px)",fontWeight:300,lineHeight:1.08,letterSpacing:"-.02em"}}>
            Key<br/><em style={{fontStyle:"italic",color:"var(--gold)"}}>Achievements</em>
          </h2>
        </div>
        <div className="grid-3" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1px",background:"var(--border)"}}>
          {items.map((a,i)=>(
            <div key={i} className={`reveal${on?" on":""} d${i+1}`}
              style={{background:"var(--bg)",padding:"36px 28px",borderBottom:"none",transition:"background .3s",cursor:"default"}}
              onMouseEnter={e=>e.currentTarget.style.background="rgba(255,255,255,.025)"}
              onMouseLeave={e=>e.currentTarget.style.background="var(--bg)"}>
              <div style={{fontFamily:"var(--fd)",fontSize:"52px",fontWeight:600,color:a.c,lineHeight:1,marginBottom:"6px"}}>{a.n}</div>
              <div style={{fontFamily:"var(--fs)",fontSize:"13px",fontWeight:600,color:"var(--text)",marginBottom:"10px"}}>{a.l}</div>
              <p style={{fontSize:"12px",lineHeight:1.65,color:"var(--muted)"}}>{a.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CONTACT ───────────────────────────────────────────────────────────────────
function Contact() {
  const [ref, on] = useInView();
  const [form, setForm] = useState({ name:"", email:"", message:"" });
  const set = k => e => setForm(p=>({...p,[k]:e.target.value}));
  const send = () => {
    const s = encodeURIComponent(`Portfolio Contact: ${form.name}`);
    const b = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:${INFO.email}?subject=${s}&body=${b}`);
  };
  return (
    <section id="contact" style={{padding:"120px 48px",background:"rgba(255,255,255,.008)",borderTop:"1px solid var(--border)"}}>
      <div style={{maxWidth:"1200px",margin:"0 auto"}} ref={ref}>
        <div className="grid-2" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"80px",alignItems:"start"}}>
          <div className={`reveal${on?" on":""}`}>
            <div className="lbl" style={{marginBottom:"20px"}}>Contact</div>
            <h2 style={{fontFamily:"var(--fd)",fontSize:"clamp(36px,5vw,64px)",fontWeight:300,lineHeight:1.08,letterSpacing:"-.02em",marginBottom:"28px"}}>
              Let's Build<br/><em style={{fontStyle:"italic",color:"var(--gold)"}}>Something Great</em>
            </h2>
            <p style={{fontSize:"14px",lineHeight:1.78,color:"var(--muted)",marginBottom:"48px"}}>
              Open to full-time opportunities in accounting, banking operations, or financial data analytics. Targeting Big 4 or multinational financial services organizations.
            </p>
            <div style={{display:"flex",flexDirection:"column",gap:"0px"}}>
              {[
                {l:"Email",v:INFO.email,h:`mailto:${INFO.email}`},
                {l:"Phone",v:INFO.phone,h:`tel:${INFO.phone.replace(/\s/g,"")}`},
                {l:"LinkedIn",v:"linkedin.com/in/mostafa-farag2004",h:INFO.linkedin},
                {l:"Location",v:"Egypt",h:null},
              ].map((x,i)=>(
                <div key={i} style={{display:"flex",gap:"20px",alignItems:"center",padding:"18px 0",borderBottom:"1px solid var(--border)"}}>
                  <span style={{fontFamily:"var(--fm)",fontSize:"9px",color:"var(--subtle)",letterSpacing:".12em",textTransform:"uppercase",width:"58px",flexShrink:0}}>{x.l}</span>
                  {x.h
                    ? <a href={x.h} target="_blank" rel="noopener noreferrer" style={{fontSize:"12px",color:"var(--text)",textDecoration:"none",transition:"color .3s"}}
                        onMouseEnter={e=>e.currentTarget.style.color="var(--gold)"}
                        onMouseLeave={e=>e.currentTarget.style.color="var(--text)"}>{x.v}</a>
                    : <span style={{fontSize:"12px",color:"var(--text)"}}>{x.v}</span>
                  }
                </div>
              ))}
            </div>
          </div>

          <div className={`reveal${on?" on":""} d2`} style={{display:"flex",flexDirection:"column",gap:"14px"}}>
            {[
              {l:"Full Name",k:"name",type:"text",ph:"Your name"},
              {l:"Email Address",k:"email",type:"email",ph:"your@email.com"},
            ].map(f=>(
              <div key={f.k}>
                <label style={{fontFamily:"var(--fm)",fontSize:"9px",letterSpacing:".14em",color:"var(--muted)",textTransform:"uppercase",display:"block",marginBottom:"7px"}}>{f.l}</label>
                <input type={f.type} placeholder={f.ph} value={form[f.k]} onChange={set(f.k)}/>
              </div>
            ))}
            <div>
              <label style={{fontFamily:"var(--fm)",fontSize:"9px",letterSpacing:".14em",color:"var(--muted)",textTransform:"uppercase",display:"block",marginBottom:"7px"}}>Message</label>
              <textarea rows={5} placeholder="Tell me about the opportunity…" value={form.message} onChange={set("message")} style={{resize:"none"}}/>
            </div>
            <button className="btn-g" style={{width:"100%",justifyContent:"center",marginTop:"6px"}} onClick={send}>
              Send Message <span>→</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div style={{marginTop:"80px",paddingTop:"28px",borderTop:"1px solid var(--border)",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"14px"}}>
          <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
            <span style={{fontFamily:"var(--fd)",fontSize:"22px",fontWeight:600}}>
              <span style={{color:"var(--gold)"}}>M</span>
              <span style={{color:"var(--text)"}}>M</span>
            </span>
            <span style={{width:"1px",height:"16px",background:"var(--border)"}}/>
            <span style={{fontFamily:"var(--fm)",fontSize:"9px",color:"var(--subtle)",letterSpacing:".1em"}}>Mostafa Mohamed</span>
          </div>
          <div style={{fontFamily:"var(--fm)",fontSize:"9px",color:"var(--subtle)",letterSpacing:".08em"}}>
            © {new Date().getFullYear()} · Accounting & Financial Analytics Professional · Egypt
          </div>
        </div>
      </div>
    </section>
  );
}

// ── ROOT ──────────────────────────────────────────────────────────────────────
export default function Portfolio() {
  return (
    <div style={{background:"var(--bg)",minHeight:"100vh",overflowX:"hidden"}}>
      <Styles/>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Certifications/>
      <Services/>
      <Achievements/>
      <Contact/>
    </div>
  );
}
