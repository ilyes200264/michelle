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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-yellow-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-green-600">
                  The Smoothie Parade is a drinkable show!
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Offer a moment of active, healthy and festive happiness to your community.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/packages">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    Discover Our Packages
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-600">
                  Smoothie Parade Package
                </h2>
                <p className="text-xl text-gray-600">
                  Three bikes. Triple the fun. An unforgettable vibe!
                </p>
                <p className="text-gray-600">
                  Roll out the energy, color, and joy! The Smoothie Parade is our most festive and interactive package — designed to turn any event into a celebration of movement and flavor.
                </p>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">This package includes:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>2 adult bikes + 1 kid-friendly bike (ages 5 to 10)</li>
                    <li>Fresh, colorful smoothies made on-site with crowd participation</li>
                    <li>Lively entertainment with music, festive energy, and fun interaction</li>
                  </ul>
                </div>
                <Link href="/packages">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    View All Packages
                  </Button>
                </Link>
              </div>
              <div className="relative h-[400px] bg-gray-200 rounded-lg">
                {/* Add image here */}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Healthy & Fun</h3>
                <p className="text-gray-600">
                  Combine physical activity with delicious, fresh smoothies for a unique experience.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Interactive</h3>
                <p className="text-gray-600">
                  Engage your guests in a fun, participatory activity that creates lasting memories.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Eco-Friendly</h3>
                <p className="text-gray-600">
                  Our pedal-powered bikes are environmentally friendly and promote sustainable fun.
                </p>
              </div>
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
