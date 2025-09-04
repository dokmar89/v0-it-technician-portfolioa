import type React from "react"
import type { Metadata } from "next"
import { GeistMono } from "geist/font/mono"
import { Montserrat, Open_Sans } from "next/font/google"
import { Suspense } from "react"
import { ThemeProvider } from "@/contexts/theme-context"
import { LanguageProvider } from "@/contexts/language-context"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"], // Added black weight for impact
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "Marek Dokoupil - IT technik & vývojář",
  description:
    "Moje profesionální portfolio - IT Technician specializing in web development, cybersecurity, and ICT solutions",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${openSans.variable} ${GeistMono.variable} ${montserrat.variable}`}>
        <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
          <LanguageProvider>
            <Suspense fallback={null}>{children}</Suspense>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
