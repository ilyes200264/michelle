'use client'

import { useLanguage } from "@/components/language-provider"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import { PackagesContent } from "./packages-content"

export default function PackagesPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full bg-white border-b">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-yellow-500">Frooshy</span>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-yellow-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start gap-4 mb-8">
              <Link href="/" className="flex items-center text-sm text-gray-600 hover:text-gray-900">
                <ChevronLeft className="mr-1 h-4 w-4" />
                {t("backToHome")}
              </Link>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-600">{t("ourPackages")}</h1>
              <p className="text-gray-700 md:text-xl max-w-[800px]">{t("packagesDescription")}</p>
            </div>
            <PackagesContent />
          </div>
        </section>
      </main>
    </div>
  )
} 