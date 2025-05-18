"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { LanguageProvider, useLanguage } from "@/components/language-provider"

export default function GalleryPage() {
  return (
    <LanguageProvider>
      <GalleryContent />
    </LanguageProvider>
  )
}

function GalleryContent() {
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-600">{t("photoGallery")}</h1>
              <p className="text-gray-700 md:text-xl max-w-[800px]">{t("galleryDescription")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/produit-velo-blender-smoothie-smoocycle-30.jpg-d7ERP6jj8kIP1z1hVzzF0hAJD62pds.jpeg"
                    alt={t("smoothieBikeGreen")}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-lg">{t("smoothieBikeGreen")}</h3>
                <p className="text-sm text-gray-600">{t("smoothieBikeGreenDescription")}</p>
              </div>

              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/corporatesmakingsmoothies.jpg-wbL8hV3r6cgHixCeLRQ6e9b57IC8f4.jpeg"
                    alt={t("corporateEvent")}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-lg">{t("corporateEvent")}</h3>
                <p className="text-sm text-gray-600">{t("corporateEventDescription")}</p>
              </div>

              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike-n-blend-tandem-package.jpg-H6Md5Oq89bnoZH02MWwl7JSwaxpH3B.jpeg"
                    alt={t("duoPackageEvent")}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-lg">{t("duoPackageEvent")}</h3>
                <p className="text-sm text-gray-600">{t("duoPackageEventDescription")}</p>
              </div>

              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/manshowingsmootiesmadewithrealfruits.jpg-HswSsR4OE4Zdu2vAlxcZgxB2zZf3ZC.jpeg"
                    alt={t("freshFruits")}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-lg">{t("freshFruits")}</h3>
                <p className="text-sm text-gray-600">{t("freshFruitsDescription")}</p>
              </div>

              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/verserdansunversmoothie.jpg-QQcJsWqwrRjHVYd2QRcTOv97g1FGyE.jpeg"
                    alt={t("smoothiePreparation")}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-lg">{t("smoothiePreparation")}</h3>
                <p className="text-sm text-gray-600">{t("smoothiePreparationDescription")}</p>
              </div>

              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zero-waste-store-trader-sells-pasta_482257-76265.jpg-zvQBUMYJgKHgbkK8x0SpA2wrTnKsWP.jpeg"
                    alt={t("ecoFriendlyApproach")}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-lg">{t("ecoFriendlyApproach")}</h3>
                <p className="text-sm text-gray-600">{t("ecoFriendlyApproachDescription")}</p>
              </div>

              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Packages-596-Edit.jpg-mDzWpJaGg1PvSPBjAuWPeQ0LPsovtz.jpeg"
                    alt={t("groupEvent")}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-lg">{t("groupEvent")}</h3>
                <p className="text-sm text-gray-600">{t("groupEventDescription")}</p>
              </div>

              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/T_1-large-and-1-small-bike-XRWepYeepNNXogQ6Y9Y6GtR0krBtPQ.jpeg"
                    alt={t("soloPackageEvent")}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-lg">{t("soloPackageEvent")}</h3>
                <p className="text-sm text-gray-600">{t("soloPackageEventDescription")}</p>
              </div>

              <div className="space-y-4">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bike-n-blend-smoothie-bike-fun.jpg-WjlsqLWWpcQ5JIeg9d92tM53HvEjUd.jpeg"
                    alt={t("festivalEvent")}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-lg">{t("festivalEvent")}</h3>
                <p className="text-sm text-gray-600">{t("festivalEventDescription")}</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-700 mb-4">{t("wantToSeeMore")}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-green-500 hover:bg-green-600">
                  <Link href="https://www.instagram.com/frooshy" target="_blank">
                    {t("followOnInstagram")}
                  </Link>
                </Button>
                <Button variant="outline">
                  <Link href="/contact">{t("contactForMorePhotos")}</Link>
                </Button>
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
