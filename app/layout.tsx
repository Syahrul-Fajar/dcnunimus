import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DCN UNIMUS - Developer Community Network",
  description:
    "Akselerasi kariermu menjadi Multi-Platform App Developer bersama DCN UNIMUS. Didukung Resmi oleh Dicoding Indonesia.",
  keywords: ["developer", "flutter", "mobile app", "community", "unimus", "dicoding"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
