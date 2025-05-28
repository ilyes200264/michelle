import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PackageCard } from "@/components/package-card"

export default function PackagesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="absolute inset-0">
          <Image src="/images/packages-hero.jpg" alt="Nos Forfaits - Frooshy" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">Nos Forfaits</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl animate-slide-up">
            Des solutions adaptées à tous types d'événements avec service traiteur complet disponible
          </p>
        </div>
      </section>

      {/* Event Type Categories */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Par type d'événement</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto">
            Choisissez la catégorie qui correspond le mieux à votre événement
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary">
              <div className="relative h-48">
                <Image src="/images/corporate-events.jpg" alt="Événements corporatifs" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-bold p-4">Événements Corporatifs</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="mb-4">Parfait pour les réunions d'équipe, lancements de produits et conférences.</p>
                <Button asChild className="w-full">
                  <Link href="/packages/corporate">Voir les forfaits</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary">
              <div className="relative h-48">
                <Image src="/images/private-events.jpg" alt="Événements privés" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-bold p-4">Événements Privés</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="mb-4">Idéal pour les mariages, anniversaires et fêtes familiales.</p>
                <Button asChild className="w-full">
                  <Link href="/packages/private">Voir les forfaits</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary">
              <div className="relative h-48">
                <Image src="/images/festivals.jpg" alt="Festivals et grands événements" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-bold p-4">Festivals & Grands Événements</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="mb-4">Solutions pour festivals, salons et événements de grande envergure.</p>
                <Button asChild className="w-full">
                  <Link href="/packages/festivals">Voir les forfaits</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* All Packages */}
      <section className="py-16 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Tous nos forfaits</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto">
            Découvrez nos différentes options pour tous les budgets et besoins
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PackageCard
              title="Forfait Découverte"
              price="$599"
              description="Parfait pour les petits événements jusqu'à 50 personnes"
              features={[
                "2 heures de service",
                "3 recettes de smoothies",
                "Équipement et ingrédients inclus",
                "1 membre d'équipe",
                "Personnalisation de base",
              ]}
              popular={false}
              href="/packages/discovery"
            />
            <PackageCard
              title="Forfait Populaire"
              price="$999"
              description="Idéal pour les événements moyens jusqu'à 100 personnes"
              features={[
                "3 heures de service",
                "5 recettes de smoothies",
                "Équipement et ingrédients inclus",
                "2 membres d'équipe",
                "Personnalisation complète",
                "Service traiteur disponible",
              ]}
              popular={true}
              href="/packages/popular"
            />
            <PackageCard
              title="Forfait Premium"
              price="$1499"
              description="Pour les grands événements jusqu'à 200 personnes"
              features={[
                "4 heures de service",
                "6 recettes de smoothies",
                "Équipement et ingrédients premium",
                "3 membres d'équipe",
                "Personnalisation complète",
                "Service traiteur complet",
                "Branding personnalisé",
              ]}
              popular={false}
              href="/packages/premium"
            />
            <PackageCard
              title="Forfait Corporatif"
              price="$1299"
              description="Spécialement conçu pour les événements d'entreprise"
              features={[
                "3 heures de service",
                "4 recettes de smoothies",
                "Équipement et ingrédients inclus",
                "2 membres d'équipe",
                "Branding personnalisé avec logo",
                "Service traiteur disponible",
                "Options santé pour professionnels",
              ]}
              popular={false}
              href="/packages/corporate-package"
            />
            <PackageCard
              title="Forfait Mariage"
              price="$1599"
              description="Pour rendre votre jour spécial encore plus mémorable"
              features={[
                "4 heures de service",
                "5 recettes de smoothies",
                "Équipement et ingrédients premium",
                "3 membres d'équipe",
                "Décoration assortie à votre thème",
                "Service traiteur disponible",
                "Options avec ou sans alcool",
              ]}
              popular={false}
              href="/packages/wedding"
            />
            <PackageCard
              title="Forfait Festival"
              price="$2499"
              description="Pour les grands événements et festivals"
              features={[
                "8 heures de service",
                "6 recettes de smoothies",
                "Équipement et ingrédients premium",
                "4 membres d'équipe",
                "Installation complète avec tente",
                "Signalisation personnalisée",
                "Capacité de servir jusqu'à 500 personnes",
              ]}
              popular={false}
              href="/packages/festival"
            />
          </div>
        </div>
      </section>

      {/* Custom Packages */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Vous ne trouvez pas ce que vous cherchez?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nous pouvons créer un forfait sur mesure adapté à vos besoins spécifiques et à votre budget.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Demander un devis personnalisé</Link>
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Questions fréquentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Quelle est la zone de service?</h3>
                <p>
                  Nous servons principalement la région de Montréal et ses environs, mais nous pouvons nous déplacer
                  partout au Québec moyennant des frais de déplacement.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Comment réserver un forfait?</h3>
                <p>
                  Vous pouvez réserver en nous contactant par téléphone, email ou en remplissant le formulaire de
                  contact sur notre site. Un acompte de 30% est requis pour confirmer la réservation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Peut-on personnaliser les recettes?</h3>
                <p>
                  Absolument! Nous pouvons adapter nos recettes selon vos préférences et les besoins diététiques de vos
                  invités (options sans gluten, véganes, etc.).
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Que se passe-t-il en cas de mauvais temps?</h3>
                <p>
                  Pour les événements en extérieur, nous recommandons d'avoir un espace couvert. En cas d'intempéries
                  majeures, nous pouvons reporter l'événement selon nos disponibilités.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à offrir une expérience unique à vos invités?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de votre événement et obtenir un devis personnalisé.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
            <Link href="/contact">Demander un devis</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
