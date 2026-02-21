import type React from "react"
import type { Metadata } from "next"
import { Inter, Sora } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
})

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Evan Wright - Software Engineer Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
  description:
    "Portfolio showcasing software engineering projects and experience by Evan Wright",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
