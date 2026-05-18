import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title:       "Mostafa Mohamed — Data Analyst & BI Developer",
  description: "Portfolio of Mostafa Mohamed — Data Analyst specialising in Power BI, Oracle ERP, financial modelling, and banking analytics.",
  keywords:    ["data analyst","power bi","oracle erp","financial analytics","business intelligence","Egypt"],
  authors:     [{ name: "Mostafa Mohamed" }],
  openGraph: {
    title:       "Mostafa Mohamed — Data Analyst & BI Developer",
    description: "Turning complex data into clear business decisions.",
    type:        "website",
    locale:      "en_US",
  },
  twitter:     { card: "summary_large_image", title: "Mostafa Mohamed — Portfolio" },
  robots:      { index: true, follow: true },
};

export const viewport: Viewport = {
  width:        "device-width",
  initialScale: 1,
  themeColor:   "#FAFBFD",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head />
      <body>
        <a href="#hero"
          className="fixed top-[-40px] left-4 z-[9999] px-4 py-2 bg-blue text-white rounded-b-lg font-semibold text-sm no-underline focus:top-0 transition-[top] duration-200">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
