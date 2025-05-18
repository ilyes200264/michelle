"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { motion } from "framer-motion"

export default function HomeHero() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-yellow-50 to-yellow-100 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-4"
          >
            <div className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm text-green-600 mb-4">
              {t("newExperience")}
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-green-600 to-yellow-500 bg-clip-text text-transparent">
              {t("heroTitle")}
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="max-w-[600px] text-gray-700 md:text-xl"
            >
              {t("heroDescription")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col gap-2 min-[400px]:flex-row pt-4"
            >
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 transform transition-transform duration-300 hover:scale-105"
              >
                {t("bookNow")}
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 hover:bg-yellow-100 transition-all duration-300"
                onClick={() => {
                  const packagesSection = document.getElementById("packages")
                  if (packagesSection) {
                    packagesSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                {t("discoverPackages")}
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9, rotate: isVisible ? 0 : -5 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 100 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-200 to-yellow-200 rounded-full blur-3xl opacity-30 transform -translate-y-4 translate-x-4"></div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/produit-velo-blender-smoothie-smoocycle-30.jpg-d7ERP6jj8kIP1z1hVzzF0hAJD62pds.jpeg"
              alt={t("colorfulSmoothieBikes")}
              className="relative z-10 mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full shadow-xl transform transition-transform duration-500 hover:scale-105"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg z-20"
            >
              <p className="text-sm font-medium text-green-600">{t("ecoFriendly")}</p>
              <p className="text-xs text-gray-600">{t("zeroCarbonFootprint")}</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm">
            <div className="font-bold text-2xl text-green-600">100+</div>
            <div className="text-sm text-gray-600">{t("eventsPerYear")}</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm">
            <div className="font-bold text-2xl text-yellow-600">5000+</div>
            <div className="text-sm text-gray-600">{t("happyCustomers")}</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm">
            <div className="font-bold text-2xl text-green-600">15+</div>
            <div className="text-sm text-gray-600">{t("smoothieBikes")}</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm">
            <div className="font-bold text-2xl text-yellow-600">20+</div>
            <div className="text-sm text-gray-600">{t("uniqueRecipes")}</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
