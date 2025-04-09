
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
// import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GRC Information Portal",
  description: "Comprehensive information about Governance, Risk, and Compliance",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange> */}
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <footer className="border-t py-4 md:py-6">
              <div className="container flex flex-col items-center justify-between gap-2 md:flex-row">
                <p className="text-center text-xs md:text-sm text-muted-foreground md:text-left">
                  &copy; {new Date().getFullYear()} GRC Information Portal. All rights reserved.
                </p>
              </div>
            </footer>
          </div>
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
