import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google"
import "./globals.css"
import { ScrollDepth } from "@/components/scroll-depth"

const inter = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
})

const sora = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
  axes: ["opsz"],
  weight: "variable",
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
      <body className="font-sans">
        <ScrollDepth />
        {children}
      </body>
    </html>
  )
}
