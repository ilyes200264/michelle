import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/components/language-provider"
import ClientLayout from "@/components/client-layout"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Frooshy - Vélos à smoothie pour vos événements | Smoothie bikes for your events",
  description:
    "Location de vélos à smoothie pour tous vos événements. Une expérience unique, écologique et amusante ! | Smoothie bike rental for all your events. A unique, eco-friendly and fun experience!",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <ClientLayout>{children}</ClientLayout>
        </LanguageProvider>
      </body>
    </html>
  )
}
