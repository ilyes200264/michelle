"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Check, Calendar } from "lucide-react"
import { LanguageProvider, useLanguage } from "@/components/language-provider"

export default function SoloPackagePage() {
  return (
    <LanguageProvider>
      <SoloPackage />
    </LanguageProvider>
  )
}

function SoloPackage() {
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
              <Link href="/#packages" className="flex items-center text-sm text-gray-600 hover:text-gray-900">
                <ChevronLeft className="mr-1 h-4 w-4" />
                {t("backToPackages")}
              </Link>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-600">{t("soloPackage")}</h1>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
              <div>
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/verserdansunversmoothie.jpg-QQcJsWqwrRjHVYd2QRcTOv97g1FGyE.jpeg"
                    alt={t("soloPackage")}
                    className="aspect-video w-full object-cover"
                  />
                </div>
                <div className="mt-8 space-y-4">
                  <h2 className="text-2xl font-bold">{t("packageDetails")}</h2>
                  <p className="text-gray-700">{t("aboutDescription")}</p>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{t("packageIncludes")}</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span>{t("oneSmoothieBike")}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span>{t("freshFruit50")}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span>{t("oneHost")}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span>{t("twoHours")}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="rounded-xl border bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">{t("bookThisPackage")}</h3>
                    <div className="text-2xl font-bold">$299</div>
                  </div>
                  <div className="mt-4 space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none" htmlFor="event-date">
                        {t("eventDate")}
                      </label>
                      <div className="relative">
                        <input
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          id="event-date"
                          type="date"
                        />
                        <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none" htmlFor="event-location">
                        {t("eventLocation")}
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        id="event-location"
                        placeholder={t("enterEventLocation")}
                      />
                    </div>
                    <Button className="w-full bg-yellow-500 hover:bg-yellow-600">{t("book")}</Button>
                  </div>
                </div>
                <div className="rounded-xl border bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold">{t("additionalOptions")}</h3>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="extra-hour"
                          className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                        />
                        <label htmlFor="extra-hour">{t("extraHour")}</label>
                      </div>
                      <div className="font-medium">+$50</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="custom-fruit"
                          className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                        />
                        <label htmlFor="custom-fruit">{t("customFruitSelection")}</label>
                      </div>
                      <div className="font-medium">+$30</div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="decoration"
                          className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                        />
                        <label htmlFor="decoration">{t("decorationPackage")}</label>
                      </div>
                      <div className="font-medium">+$75</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-green-600 text-white py-6">
        <div className="container px-4 md:px-6 text-center">
          <p>© 2025 Frooshy. {t("allRightsReserved")}</p>
        </div>
      </footer>
    </div>
  )
}
