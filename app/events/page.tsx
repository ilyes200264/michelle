"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, Calendar, Users, MapPin } from "lucide-react"
import { LanguageProvider, useLanguage } from "@/components/language-provider"
import { useState } from "react"
import { motion } from "framer-motion"

export default function EventsPage() {
  return (
    <LanguageProvider>
      <EventsContent />
    </LanguageProvider>
  )
}

function EventsContent() {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState("all")

  const eventCategories = [
    { id: "all", name: t("allEvents") },
    { id: "corporate", name: t("corporateEvents") },
    { id: "private", name: t("privateParties") },
    { id: "festivals", name: t("festivalsMarkets") },
    { id: "schools", name: t("schoolsUniversities") },
    { id: "brand", name: t("brandActivations") },
    { id: "sport", name: t("sportingEvents") },
  ]

  const events = [
    {
      id: 1,
      title: t("corporateTeamBuilding"),
      description: t("corporateTeamBuildingDesc"),
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/corporatesmakingsmoothies.jpg-wbL8hV3r6cgHixCeLRQ6e9b57IC8f4.jpeg",
      date: "2025-06-15",
      location: "Montréal, QC",
      category: "corporate",
      package: "group",
    },
    {
      id: 2,
      title: t("summerFestival"),
      description: t("summerFestivalDesc"),
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bike-n-blend-smoothie-bike-fun.jpg-WjlsqLWWpcQ5JIeg9d92tM53HvEjUd.jpeg",
      date: "2025-07-22",
      location: "Québec, QC",
      category: "festivals",
      package: "group",
    },
    {
      id: 3,
      title: t("weddingReception"),
      description: t("weddingReceptionDesc"),
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike-n-blend-tandem-package.jpg-H6Md5Oq89bnoZH02MWwl7JSwaxpH3B.jpeg",
      date: "2025-08-10",
      location: "Laval, QC",
      category: "private",
      package: "duo",
    },
    {
      id: 4,
      title: t("universityWellnessDay"),
      description: t("universityWellnessDayDesc"),
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/T_1-large-and-1-small-bike-XRWepYeepNNXogQ6Y9Y6GtR0krBtPQ.jpeg",
      date: "2025-09-05",
      location: "Sherbrooke, QC",
      category: "schools",
      package: "solo",
    },
    {
      id: 5,
      title: t("productLaunch"),
      description: t("productLaunchDesc"),
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Packages-596-Edit.jpg-mDzWpJaGg1PvSPBjAuWPeQ0LPsovtz.jpeg",
      date: "2025-10-12",
      location: "Montréal, QC",
      category: "brand",
      package: "group",
    },
    {
      id: 6,
      title: t("marathonRefreshment"),
      description: t("marathonRefreshmentDesc"),
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/produit-velo-blender-smoothie-smoocycle-30.jpg-d7ERP6jj8kIP1z1hVzzF0hAJD62pds.jpeg",
      date: "2025-05-30",
      location: "Trois-Rivières, QC",
      category: "sport",
      package: "group",
    },
  ]

  const filteredEvents = activeCategory === "all" ? events : events.filter((event) => event.category === activeCategory)

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
              <motion.h1
                className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {t("ourEvents")}
              </motion.h1>
              <motion.p
                className="text-gray-700 md:text-xl max-w-[800px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {t("eventsPageDescription")}
              </motion.p>
            </div>

            <div className="mb-10 overflow-x-auto">
              <div className="flex space-x-2 min-w-max pb-2">
                {eventCategories.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    className={activeCategory === category.id ? "bg-green-500 hover:bg-green-600" : "hover:bg-green-50"}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  className="flex flex-col overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {t(event.package + "Package")}
                    </div>
                  </div>
                  <div className="flex-1 p-6">
                    <h3 className="text-xl font-bold">{event.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{event.description}</p>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center text-sm">
                        <Calendar className="mr-2 h-4 w-4 text-green-500" />
                        <span>
                          {new Date(event.date).toLocaleDateString("fr-CA", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center text-sm">
                        <MapPin className="mr-2 h-4 w-4 text-green-500" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <Button className="w-full bg-green-500 hover:bg-green-600">{t("learnMoreEvent")}</Button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-white rounded-xl shadow-sm border">
              <h2 className="text-2xl font-bold text-green-600 mb-4">{t("planYourEvent")}</h2>
              <p className="text-gray-700 mb-6">{t("planYourEventDescription")}</p>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg">{t("step1Events")}</h3>
                  <p className="text-sm text-gray-600">{t("step1EventsDescription")}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg">{t("step2Events")}</h3>
                  <p className="text-sm text-gray-600">{t("step2EventsDescription")}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-lg">{t("step3Events")}</h3>
                  <p className="text-sm text-gray-600">{t("step3EventsDescription")}</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button className="bg-green-500 hover:bg-green-600 px-8">{t("contactUsEvents")}</Button>
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
