import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BurnAlert — Early Warning Before You Run Out of Money',
  description: 'Connect your bank accounts and get alerts when burn rate trends predict runway issues. Built for solo founders and small startup teams.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="720e3420-b0a2-4b9e-8b8c-530c1aad1145"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
