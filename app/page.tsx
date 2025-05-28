"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { SmoothieCard } from "@/components/smoothie-card"
import { PackageCard } from "@/components/package-card"
import { WhyChooseUs } from "@/components/why-choose-us"
import { HowItWorks } from "@/components/how-it-works"
import { WhereToFindUs } from "@/components/where-to-find-us"
import { SocialIcons } from "@/components/social-icons"
import { useLanguage } from "@/components/language-provider"

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh]">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Packages-596-Edit.jpg-veTSUiKvW0z4E2gZWmU1rhawwuphD1.jpeg"
            alt="Frooshy - Service de smoothies pour événements"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">{t("hero.title")}</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl animate-slide-up">{t("hero.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/contact">{t("hero.cta.book")}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border-white"
            >
              <Link href="#packages">{t("hero.cta.discover")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Featured Smoothies */}
      <section className="py-16 bg-gradient-to-r from-background to-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t("smoothies.title")}</h2>
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <SmoothieCard
                  name="Berry Blast"
                  description="Fraises, bleuets, framboises et yogourt"
                  image="/images/smoothie-1.jpg"
                  color="bg-red-100"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <SmoothieCard
                  name="Green Machine"
                  description="Épinards, kiwi, pomme et banane"
                  image="/images/smoothie-2.jpg"
                  color="bg-green-100"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <SmoothieCard
                  name="Tropical Paradise"
                  description="Mangue, ananas, fruit de la passion"
                  image="/images/smoothie-3.jpg"
                  color="bg-yellow-100"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <SmoothieCard
                  name="Protein Power"
                  description="Banane, beurre d'arachide, cacao et protéine"
                  image="/images/smoothie-4.jpg"
                  color="bg-amber-100"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/recipes">{t("smoothies.viewAll")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-16 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">{t("packages.title")}</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto">{t("packages.subtitle")}</p>

          {/* Event Type Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary">
              <div className="relative h-48">
                <Image
                  src="/images/corporate-events.jpg"
                  alt={t("packages.corporate.title")}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-bold p-4">{t("packages.corporate.title")}</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="mb-4">{t("packages.corporate.desc")}</p>
                <Button asChild className="w-full">
                  <Link href="/packages/corporate">{t("packages.viewAll")}</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary">
              <div className="relative h-48">
                <Image
                  src="/images/private-events.jpg"
                  alt={t("packages.private.title")}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-bold p-4">{t("packages.private.title")}</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="mb-4">{t("packages.private.desc")}</p>
                <Button asChild className="w-full">
                  <Link href="/packages/private">{t("packages.viewAll")}</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary">
              <div className="relative h-48">
                <Image src="/images/festivals.jpg" alt={t("packages.festivals.title")} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-bold p-4">{t("packages.festivals.title")}</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="mb-4">{t("packages.festivals.desc")}</p>
                <Button asChild className="w-full">
                  <Link href="/packages/festivals">{t("packages.viewAll")}</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Featured Packages */}
          <h3 className="text-2xl font-bold text-center mb-8">{t("packages.featured.title")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PackageCard
              title={t("packages.discovery.title")}
              price={t("packages.discovery.price")}
              description={t("packages.discovery.desc")}
              features={[
                t("packages.feature.hours2"),
                t("packages.feature.recipes3"),
                t("packages.feature.equipment"),
                t("packages.feature.staff1"),
                t("packages.feature.customBasic"),
              ]}
              popular={false}
              href="/packages/discovery"
            />
            <PackageCard
              title={t("packages.popular.title")}
              price={t("packages.popular.price")}
              description={t("packages.popular.desc")}
              features={[
                t("packages.feature.hours3"),
                t("packages.feature.recipes5"),
                t("packages.feature.equipment"),
                t("packages.feature.staff2"),
                t("packages.feature.customFull"),
                t("packages.feature.catering"),
              ]}
              popular={true}
              href="/packages/popular"
            />
            <PackageCard
              title={t("packages.premium.title")}
              price={t("packages.premium.price")}
              description={t("packages.premium.desc")}
              features={[
                t("packages.feature.hours4"),
                t("packages.feature.recipes6"),
                t("packages.feature.equipmentPremium"),
                t("packages.feature.staff3"),
                t("packages.feature.customFull"),
                t("packages.feature.cateringFull"),
                t("packages.feature.branding"),
              ]}
              popular={false}
              href="/packages/premium"
            />
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg">
              <Link href="/packages">{t("packages.viewAll")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Where To Find Us Section */}
      <WhereToFindUs />

      {/* Testimonials */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t("testimonials.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-amber-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="italic mb-4">
                  "Frooshy a transformé notre événement d'entreprise! Les smoothies étaient délicieux et le service
                  impeccable. Nos employés en parlent encore!"
                </p>
                <div className="font-semibold">Marie Tremblay</div>
                <div className="text-sm text-muted-foreground">Directrice RH, TechMontréal</div>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-amber-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="italic mb-4">
                  "Pour notre mariage, nous voulions quelque chose d'unique. Frooshy a dépassé nos attentes avec un bar
                  à smoothies personnalisé qui a ravi tous nos invités!"
                </p>
                <div className="font-semibold">Jean et Sophie Lavoie</div>
                <div className="text-sm text-muted-foreground">Mariés en 2023</div>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-amber-400 flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="italic mb-4">
                  "Notre festival avait besoin d'options de boissons saines. Frooshy a fourni un service exceptionnel
                  pendant 3 jours, avec des smoothies adaptés à notre thématique!"
                </p>
                <div className="font-semibold">Pierre Gagnon</div>
                <div className="text-sm text-muted-foreground">Organisateur, Festival Éco-Québec</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t("cta.title")}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{t("cta.subtitle")}</p>
          <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
            <Link href="/contact">{t("cta.button")}</Link>
          </Button>
        </div>
      </section>

      {/* Social Icons */}
      <SocialIcons />
    </div>
  )
}
