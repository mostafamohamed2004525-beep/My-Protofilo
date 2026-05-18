import { ME } from "@/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-white py-14 px-8">
      <div className="max-w-[1240px] mx-auto flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-[7px] flex items-center justify-center font-display font-bold text-[13px] text-white"
            style={{ background: "linear-gradient(135deg,#2563EB,#4F46E5)" }}>
            M
          </div>
          <div className="leading-none">
            <p className="font-display font-bold text-[15px] tracking-tight">{ME.name}</p>
            <p className="text-[11px] text-ghost mt-0.5">Data Analyst & BI Developer</p>
          </div>
        </div>

        <div className="flex gap-6">
          {([["LinkedIn", ME.linkedin], [`mailto:${ME.email}`, "Email"], [`tel:${ME.phone.replace(/\s/g,"")}`, "Phone"]] as [string, string][]).map(([href, label]) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              className="text-[12px] font-medium text-ghost hover:text-white tracking-wide uppercase transition-colors duration-fast">
              {label}
            </a>
          ))}
        </div>

        <p className="text-[12px] text-[#475569]">
          © {year} · {ME.name}
        </p>
      </div>
    </footer>
  );
}
