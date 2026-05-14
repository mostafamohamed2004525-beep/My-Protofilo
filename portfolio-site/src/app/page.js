import Portfolio from '@/components/Portfolio'

export const metadata = {
  title: 'Mostafa Mohamed — Accounting & Financial Analytics',
  description: 'Portfolio of Mostafa Mohamed — Accounting professional specializing in banking operations, Oracle ERP, Power BI, and financial data analytics.',
  keywords: ['accounting', 'financial analytics', 'power bi', 'oracle erp', 'banking', 'Egypt'],
  openGraph: {
    title: 'Mostafa Mohamed — Portfolio',
    description: 'Accounting & Financial Analytics Professional',
    type: 'website',
  },
}

export default function Home() {
  return <Portfolio />
}
