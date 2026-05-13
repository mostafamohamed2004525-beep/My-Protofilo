export const metadata = {
  title: 'Mostafa Mohamed — Portfolio',
  description: 'Accounting & Financial Analytics Professional',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body style={{ margin: 0, padding: 0, background: '#040404' }}>
        {children}
      </body>
    </html>
  )
}
