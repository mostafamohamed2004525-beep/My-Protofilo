"use client";
import { memo, useState, useCallback } from "react";
import { Reveal } from "@/components/ui/RevealWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { ME } from "@/data";

type FormState = { name: string; email: string; subject: string; message: string };

export default memo(function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const set = useCallback(
    (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(prev => ({ ...prev, [key]: e.target.value })),
    [],
  );

  const send = useCallback(() => {
    const s = encodeURIComponent(form.subject || `Portfolio Enquiry from ${form.name}`);
    const b = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.open(`mailto:${ME.email}?subject=${s}&body=${b}`);
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  }, [form]);

  return (
    <section id="contact" className="py-30 px-8 bg-section">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-20 items-start">

          {/* Left */}
          <Reveal>
            <SectionHeader
              eyebrow="Get In Touch"
              headline={<>Available for<br /><span className="grad-text">the right opportunity</span></>}
              className="mb-6"
            />
            <p className="text-[14px] leading-[1.8] text-sub mb-10">
              Actively seeking full-time roles in data analytics, business intelligence, or financial analysis —
              with a focus on Big 4 advisory, investment banking, or multinational BI teams. Available immediately.
            </p>

            {/* Contact rows */}
            <div className="divide-y divide-border">
              {([
                { label: "Email",    value: ME.email,                          href: `mailto:${ME.email}` },
                { label: "Phone",    value: ME.phone,                          href: `tel:${ME.phone.replace(/\s/g,"")}` },
                { label: "LinkedIn", value: "linkedin.com/in/mostafa-farag2004", href: ME.linkedin },
                { label: "Location", value: ME.location,                       href: null },
              ] as { label: string; value: string; href: string | null }[]).map(x => (
                <div key={x.label} className="flex items-center gap-5 py-4">
                  <span className="font-mono text-[9px] text-ghost tracking-[.14em] uppercase w-16 flex-shrink-0">
                    {x.label}
                  </span>
                  {x.href ? (
                    <a href={x.href} target="_blank" rel="noopener noreferrer"
                      className="text-[13px] font-medium text-sub hover:text-blue transition-colors duration-fast">
                      {x.value}
                    </a>
                  ) : (
                    <span className="text-[13px] font-medium text-sub">{x.value}</span>
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.12}>
            <div className="card p-8">
              <h3 className="font-display text-[18px] font-bold text-ink mb-6">Send a message</h3>

              <div className="grid grid-cols-2 gap-3.5 mb-3.5">
                {([
                  { label: "Full Name",      key: "name",    type: "text",  ph: "Your full name" },
                  { label: "Email Address",  key: "email",   type: "email", ph: "your@email.com" },
                ] as { label: string; key: keyof FormState; type: string; ph: string }[]).map(f => (
                  <label key={f.key} className="flex flex-col gap-2">
                    <span className="font-mono text-[9px] font-bold text-ghost uppercase tracking-[.12em]">{f.label}</span>
                    <input
                      type={f.type}
                      placeholder={f.ph}
                      value={form[f.key]}
                      onChange={set(f.key)}
                      className="form-input"
                      autoComplete={f.key === "email" ? "email" : "name"}
                    />
                  </label>
                ))}
              </div>

              <label className="flex flex-col gap-2 mb-3.5">
                <span className="font-mono text-[9px] font-bold text-ghost uppercase tracking-[.12em]">Subject</span>
                <input
                  type="text"
                  placeholder="Role title or enquiry subject"
                  value={form.subject}
                  onChange={set("subject")}
                  className="form-input"
                />
              </label>

              <label className="flex flex-col gap-2 mb-5">
                <span className="font-mono text-[9px] font-bold text-ghost uppercase tracking-[.12em]">Message</span>
                <textarea
                  rows={5}
                  placeholder="Outline the role, team, or project — I respond within 24 hours."
                  value={form.message}
                  onChange={set("message")}
                  className="form-input resize-none"
                />
              </label>

              <button
                onClick={send}
                className="btn-primary w-full justify-center !py-3.5 !text-[14px]"
              >
                {sent ? "✓ Sent — I'll respond within 24 hours" : "Send Message →"}
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
});
