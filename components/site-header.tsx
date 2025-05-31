"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/components/language-provider"

export function SiteHeader() {
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Voilà Vélo</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              {t("nav.home")}
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              {t("nav.about")}
            </Link>
            <Link href="/packages" className="text-sm font-medium transition-colors hover:text-primary">
              {t("nav.packages")}
            </Link>
            <Link href="/recipes" className="text-sm font-medium transition-colors hover:text-primary">
              {t("nav.recipes")}
            </Link>
            <Link href="/events" className="text-sm font-medium transition-colors hover:text-primary">
              {t("nav.events")}
            </Link>
            <LanguageSelector />
            <Button asChild size="sm" className="ml-4">
              <Link href="/contact">{t("hero.cta.book")}</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
