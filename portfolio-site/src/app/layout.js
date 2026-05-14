export const metadata = {
  title: "Mostafa Mohamed — Data Analyst & BI Developer",
  description: "Portfolio of Mostafa Mohamed — Data Analyst and BI Developer specialising in Power BI, Oracle ERP, financial analytics and banking operations.",
  keywords: ["data analyst","power bi","business intelligence","oracle erp","financial analytics","Egypt"],
  openGraph: { title:"Mostafa Mohamed — Data Analyst & BI Developer", description:"Transforming raw data into strategic business intelligence.", type:"website" },
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ margin:0, padding:0, background:"#FAFBFC" }}>{children}</body>
    </html>
  )
}
