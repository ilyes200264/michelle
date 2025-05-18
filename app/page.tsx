"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Calendar, Users, MapPin, Phone, Mail, Globe, ChevronDown } from "lucide-react"
import { LanguageProvider, useLanguage } from "@/components/language-provider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  )
}

function HomePage() {
  const { language, setLanguage, t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const heroSlides = [
    {
      title: t("heroTitle"),
      description: t("heroDescription"),
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/produit-velo-blender-smoothie-smoocycle-30.jpg-d7ERP6jj8kIP1z1hVzzF0hAJD62pds.jpeg",
    },
    {
      title: t("pedalForFun"),
      description: t("corporateEventDescription"),
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/corporatesmakingsmoothies.jpg-wbL8hV3r6cgHixCeLRQ6e9b57IC8f4.jpeg",
    },
    {
      title: t("healthyAndFun"),
      description: t("festivalsMarketsDescription"),
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bike-n-blend-smoothie-bike-fun.jpg-WjlsqLWWpcQ5JIeg9d92tM53HvEjUd.jpeg",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroSlides.length])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
      >
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <motion.span
              className="text-2xl font-bold text-yellow-500"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Frooshy
            </motion.span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("about")
              }}
            >
              {t("about")}
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:underline underline-offset-4">
                {t("packages")}
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/packages/solo" className="w-full">
                    {t("soloPackage")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/packages/duo" className="w-full">
                    {t("duoPackage")}
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/packages/group" className="w-full">
                    {t("groupPackage")}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/events" className="text-sm font-medium hover:underline underline-offset-4">
              {t("events")}
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("contact")
              }}
            >
              {t("contact")}
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
              className="hidden md:flex"
            >
              <Globe className="h-5 w-5" />
              <span className="ml-2">{language === "fr" ? "EN" : "FR"}</span>
            </Button>
            <Button className="hidden md:flex bg-green-500 hover:bg-green-600">{t("bookNow")}</Button>
          </div>
          <Button variant="outline" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </>
              )}
            </svg>
          </Button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b">
            <div className="container py-4 px-4 space-y-3">
              <Link
                href="#about"
                className="block py-2 text-sm font-medium hover:text-green-600"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("about")
                }}
              >
                {t("about")}
              </Link>
              <div className="py-2">
                <div className="flex items-center justify-between text-sm font-medium">
                  <span>{t("packages")}</span>
                </div>
                <div className="pl-4 mt-2 space-y-2">
                  <Link
                    href="/packages/solo"
                    className="block py-1 text-sm hover:text-green-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t("soloPackage")}
                  </Link>
                  <Link
                    href="/packages/duo"
                    className="block py-1 text-sm hover:text-green-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t("duoPackage")}
                  </Link>
                  <Link
                    href="/packages/group"
                    className="block py-1 text-sm hover:text-green-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t("groupPackage")}
                  </Link>
                </div>
              </div>
              <Link
                href="/events"
                className="block py-2 text-sm font-medium hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {t("events")}
              </Link>
              <Link
                href="#contact"
                className="block py-2 text-sm font-medium hover:text-green-600"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("contact")
                }}
              >
                {t("contact")}
              </Link>
              <div className="flex items-center justify-between pt-2 border-t">
                <Button variant="ghost" size="sm" onClick={() => setLanguage(language === "fr" ? "en" : "fr")}>
                  <Globe className="h-4 w-4 mr-2" />
                  {language === "fr" ? "English" : "Français"}
                </Button>
                <Button size="sm" className="bg-green-500 hover:bg-green-600">
                  {t("bookNow")}
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
      <main className="flex-1">
        <section className="relative w-full h-[90vh] min-h-[600px] overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <div className="absolute inset-0 bg-black/30 z-10" />
              <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center z-20">
                <div className="container px-4 md:px-6">
                  <div className="max-w-[600px] space-y-6">
                    <motion.h1
                      className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl text-white"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      className="max-w-[600px] text-white/90 md:text-xl"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      {slide.description}
                    </motion.p>
                    <motion.div
                      className="flex flex-col gap-3 min-[400px]:flex-row"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <Button className="bg-green-500 hover:bg-green-600 text-lg">
                        {t("bookNow")}
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 text-lg"
                        onClick={() => scrollToSection("packages")}
                      >
                        {t("discoverPackages")}
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-30">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-white" : "bg-white/40"}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
          <div className="absolute bottom-10 left-0 right-0 flex justify-center z-30">
            <motion.div
              className="animate-bounce"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
                onClick={() => scrollToSection("about")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-white"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <span className="sr-only">Scroll down</span>
              </Button>
            </motion.div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <motion.div
                  className="inline-block rounded-lg bg-yellow-100 px-3 py-1 text-sm text-yellow-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {t("aboutUs")}
                </motion.div>
                <motion.h2
                  className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {t("whoWeAre")}
                </motion.h2>
                <motion.p
                  className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {t("aboutDescription")}
                </motion.p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <motion.img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/manshowingsmootiesmadewithrealfruits.jpg-HswSsR4OE4Zdu2vAlxcZgxB2zZf3ZC.jpeg"
                alt={t("ourTeam")}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <motion.li
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium leading-none">{t("eco")}</h3>
                      <p className="text-sm text-gray-700">{t("ecoDescription")}</p>
                    </div>
                  </motion.li>
                  <motion.li
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                        <line x1="9" x2="9.01" y1="9" y2="9" />
                        <line x1="15" x2="15.01" y1="9" y2="9" />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium leading-none">{t("fun")}</h3>
                      <p className="text-sm text-gray-700">{t("funDescription")}</p>
                    </div>
                  </motion.li>
                  <motion.li
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                      </svg>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium leading-none">{t("healthy")}</h3>
                      <p className="text-sm text-gray-700">{t("healthyDescription")}</p>
                    </div>
                  </motion.li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="packages" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <motion.div
                  className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {t("ourPackages")}
                </motion.div>
                <motion.h2
                  className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {t("chooseExperience")}
                </motion.h2>
                <motion.p
                  className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {t("packagesDescription")}
                </motion.p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <motion.div
                className="flex flex-col rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3 className="font-semibold">{t("soloPackage")}</h3>
                </div>
                <div className="mt-4 flex-1 space-y-2">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/T_1-large-and-1-small-bike-XRWepYeepNNXogQ6Y9Y6GtR0krBtPQ.jpeg"
                    alt={t("soloPackage")}
                    className="aspect-video w-full rounded-lg object-cover"
                  />
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{t("oneSmoothieBike")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{t("freshFruit50")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{t("oneHost")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{t("twoHours")}</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl font-bold">$299</span>
                    <span className="text-sm text-gray-700">/{t("event")}</span>
                  </div>
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600">
                    <Link href="/packages/solo">{t("learnMore")}</Link>
                  </Button>
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3 className="font-semibold">{t("duoPackage")}</h3>
                </div>
                <div className="mt-4 flex-1 space-y-2">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bike-n-blend-tandem-package.jpg-H6Md5Oq89bnoZH02MWwl7JSwaxpH3B.jpeg"
                    alt={t("duoPackage")}
                    className="aspect-video w-full rounded-lg object-cover"
                  />
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{t("twoSmoothieBikes")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{t("freshFruit100")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{t("twoHosts")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{t("threeHours")}</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl font-bold">$499</span>
                    <span className="text-sm text-gray-700">/{t("event")}</span>
                  </div>
                  <Button className="w-full bg-green-500 hover:bg-green-600">
                    <Link href="/packages/duo">{t("learnMore")}</Link>
                  </Button>
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3 className="font-semibold">{t("groupPackage")}</h3>
                </div>
                <div className="mt-4 flex-1 space-y-2">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Packages-596-Edit.jpg-mDzWpJaGg1PvSPBjAuWPeQ0LPsovtz.jpeg"
                    alt={t("groupPackage")}
                    className="aspect-video w-full rounded-lg object-cover"
                  />
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{t("fiveSmoothieBikes")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{t("freshFruit250")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{t("threeHosts")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{t("fourHours")}</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl font-bold">$899</span>
                    <span className="text-sm text-gray-700">/{t("event")}</span>
                  </div>
                  <Button className="w-full bg-red-500 hover:bg-red-600">
                    <Link href="/packages/group">{t("learnMore")}</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="events" className="w-full py-12 md:py-24 lg:py-32 bg-yellow-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <motion.div
                  className="inline-block rounded-lg bg-yellow-100 px-3 py-1 text-sm text-yellow-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {t("ourEvents")}
                </motion.div>
                <motion.h2
                  className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {t("perfectForAllOccasions")}
                </motion.h2>
                <motion.p
                  className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {t("eventsDescription")}
                </motion.p>
              </div>
            </div>
            <motion.div
              className="mt-6 mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/corporatesmakingsmoothies.jpg-wbL8hV3r6cgHixCeLRQ6e9b57IC8f4.jpeg"
                alt={t("corporateEventExample")}
                className="mx-auto rounded-xl overflow-hidden shadow-lg"
              />
            </motion.div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <motion.div
                className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-4 shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <Calendar className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">{t("corporateEvents")}</h3>
                <p className="text-center text-sm text-gray-700">{t("corporateEventsDescription")}</p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-4 shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">{t("privateParties")}</h3>
                <p className="text-center text-sm text-gray-700">{t("privatePartiesDescription")}</p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-4 shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">{t("festivalsMarkets")}</h3>
                <p className="text-center text-sm text-gray-700">{t("festivalsMarketsDescription")}</p>
              </motion.div>
              <motion.div
                className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-4 shadow-sm hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8"
                  >
                    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                    <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
                    <path d="M12 3v6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">{t("otherEvents")}</h3>
                <p className="text-center text-sm text-gray-700">{t("otherEventsDescription")}</p>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <motion.div
                  className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {t("contactUs")}
                </motion.div>
                <motion.h2
                  className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-600"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  {t("getInTouch")}
                </motion.h2>
                <motion.p
                  className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {t("contactDescription")}
                </motion.p>
              </div>
            </div>
            <div className="mx-auto grid max-w-4xl gap-8 py-12 md:grid-cols-2">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold">{t("contactDetails")}</h3>
                <p className="text-gray-700">{t("contactDetailsDescription")}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-gray-500" />
                    <span>{t("address")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-gray-500" />
                    <span>{t("phone")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-gray-500" />
                    <span>{t("email")}</span>
                  </div>
                </div>
              </motion.div>
              <motion.form
                className="space-y-4"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    {t("name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    {t("email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    {t("message")}
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  />
                </div>
                <Button className="w-full bg-green-500 hover:bg-green-600">{t("sendMessage")}</Button>
              </motion.form>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 border-t">
        <div className="container px-4 md:px-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Frooshy. {t("allRightsReserved")}
        </div>
      </footer>
    </div>
  )
}
