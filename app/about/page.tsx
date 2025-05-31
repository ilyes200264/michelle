"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="absolute inset-0">
          <Image src="/images/about-hero.jpg" alt="À propos de Voilà Vélo" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            {t("about.title", "À propos de Voilà Vélo")}
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl animate-slide-up">
            {t("about.subtitle", "Une passion pour les smoothies et le bien-être")}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-orange-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Qui sommes-nous&nbsp;?</h2>
              <p className="mb-4">
                Nous sommes Leen et Micha, deux sœurs complices, unies par une passion commune pour la nature, l'alimentation saine et le vélo. De cette passion est née Voilà Vélo Smoothie Vélo : une entreprise rafraîchissante qui transforme l'énergie en plaisir… au sens propre !
              </p>
              <p className="mb-4">
                Avec nos vélos-blenders, nous permettons aux gens de créer leur propre smoothie en pédalant, dans une ambiance festive, interactive et écoresponsable. Voilà Vélo insuffle vitalité, bonne humeur et énergie positive partout où elle passe — événements, écoles, festivals, entreprises ou journées d'activités, en intérieur comme en extérieur.
              </p>
              <p>
                Chez Voilà Vélo Smoothie Vélo, on ne regarde pas… on pédale, on rit, on crée.
              </p>
            </div>
            <div className="relative h-96">
              <Image
                src="/images/founders.jpg"
                alt="Les fondatrices de Voilà Vélo"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Notre mission</h2>
          <p className="text-xl text-center max-w-3xl mx-auto mb-8">
            Notre mission est de rendre les saines habitudes de vie amusantes, accessibles et engageantes. En mariant mouvement, environnement et nutrition, nous voulons éveiller les consciences tout en créant des souvenirs joyeux et savoureux.<br />
            Nous croyons qu'un simple coup de pédale peut reconnecter chacun à son corps, à la nature et aux autres — et Voilà Vélo est là pour le prouver.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t("about.cta.title", "Envie de nous rencontrer?")}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t(
              "about.cta.desc",
              "Contactez-nous pour discuter de votre prochain événement ou venez nous voir lors de nos prochaines apparitions publiques.",
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
              <Link href="/contact">{t("about.cta.contact", "Nous contacter")}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10"
            >
              <Link href="/events">{t("about.cta.events", "Voir nos événements")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
