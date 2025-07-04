import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SimplCyber - Simplified Cybersecurity for Small Businesses",
  description:
    "Only platform that converts every risk into concrete costs so you can act in minutes. Get your free risk snapshot in 5 minutes.",
  keywords: "cybersecurity, small business, risk assessment, security audit, cyber risk",
  authors: [{ name: "SimplCyber" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "SimplCyber - Simplified Cybersecurity for Small Businesses",
    description: "Only platform that converts every risk into concrete costs so you can act in minutes.",
    type: "website",
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
