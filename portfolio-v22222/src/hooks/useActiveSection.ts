"use client";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/data";

export function useActiveSection() {
  const [active, setActive] = useState<string>("hero");

  useEffect(() => {
    const ids = ["hero", ...NAV_LINKS.map(l => l.href.slice(1))];
    const elements = ids.map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { threshold: 0.35 }
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return active;
}
