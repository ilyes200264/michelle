import type React from "react"
import "@/app/globals.css"
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Frooshy - Vélos à smoothie pour vos événements | Smoothie bikes for your events",
  description:
    "Location de vélos à smoothie pour tous vos événements. Une expérience unique, écologique et amusante ! | Smoothie bike rental for all your events. A unique, eco-friendly and fun experience!",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center">
              <div className="mr-4 flex">
                <Link href="/" className="mr-6 flex items-center space-x-2">
                  <span className="font-bold">Frooshy</span>
                </Link>
                <nav className="flex items-center space-x-6 text-sm font-medium">
                  <Link href="/" className="transition-colors hover:text-foreground/80">
                    Home
                  </Link>
                  <Link href="/events" className="transition-colors hover:text-foreground/80">
                    Events
                  </Link>
                  <Link href="/gallery" className="transition-colors hover:text-foreground/80">
                    Gallery
                  </Link>
                  <Link href="/recipes" className="transition-colors hover:text-foreground/80">
                    Recipes
                  </Link>
                  <div className="relative group">
                    <span className="transition-colors hover:text-foreground/80 cursor-pointer">Packages</span>
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-background border hidden group-hover:block">
                      <div className="py-1">
                        <Link href="/packages/solo" className="block px-4 py-2 text-sm hover:bg-accent">
                          Solo
                        </Link>
                        <Link href="/packages/duo" className="block px-4 py-2 text-sm hover:bg-accent">
                          Duo
                        </Link>
                        <Link href="/packages/group" className="block px-4 py-2 text-sm hover:bg-accent">
                          Group
                        </Link>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </header>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
