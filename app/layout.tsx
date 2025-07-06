import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DealBrief - Scout in 5 minutes. Deep-dive in 48 hours. Protect forever.",
  description:
    "Instant attack-surface scans for every company you touch, plus diligence-grade audits and continuous portfolio monitoring—no sales calls, no agents to install.",
  keywords: "cyber risk, due diligence, VC, private equity, M&A, portfolio monitoring, threat assessment, dealbrief.io",
  authors: [{ name: "DealBrief" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "DealBrief - Scout in 5 minutes. Deep-dive in 48 hours. Protect forever.",
    description: "Instant attack-surface scans for every company you touch, plus diligence-grade audits and continuous portfolio monitoring.",
    type: "website",
    url: "https://dealbrief.io",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
