import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function DiscoveryPackagePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="absolute inset-0">
          <Image
            src="/images/package-discovery.jpg"
            alt="Forfait Découverte - Frooshy"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">Forfait Découverte</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl animate-slide-up">
            Parfait pour les petits événements jusqu'à 50 personnes
          </p>
          <div className="text-3xl font-bold text-white mb-8">$599</div>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white animate-fade-in-delay">
            <Link href="/contact?package=discovery">Réserver maintenant</Link>
          </Button>
        </div>
      </section>

      {/* Package Details */}
      <section className="py-16 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Détails du forfait</h2>
              <p className="mb-6">
                Notre forfait Découverte est idéal pour les petits événements jusqu'à 50 personnes. Que ce soit pour une
                réunion d'équipe, un petit mariage ou une fête d'anniversaire, ce forfait offre une expérience de
                smoothies unique et mémorable pour vos invités.
              </p>
              <h3 className="text-xl font-semibold mb-4">Ce qui est inclus:</h3>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 text-primary"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>2 heures de service</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 text-primary"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>3 recettes de smoothies au choix</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 text-primary"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Équipement et ingrédients inclus</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 text-primary"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>1 membre d'équipe</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 text-primary"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Personnalisation de base (couleurs, menu personnalisé)</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 text-primary"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Installation et nettoyage</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Options de personnalisation:</h3>
              <p className="mb-6">
                Vous pouvez personnaliser votre expérience avec les options suivantes (des frais supplémentaires peuvent
                s'appliquer):
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 text-secondary"
                  >
                    <path d="M12 22v-5"></path>
                    <path d="M9 8V2"></path>
                    <path d="M15 8V2"></path>
                    <path d="M12 8v8"></path>
                    <path d="M19 8a7 7 0 1 0-14 0"></path>
                    <path d="M9 22h6"></path>
                  </svg>
                  <span>Recettes de smoothies supplémentaires</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 text-secondary"
                  >
                    <path d="M12 22v-5"></path>
                    <path d="M9 8V2"></path>
                    <path d="M15 8V2"></path>
                    <path d="M12 8v8"></path>
                    <path d="M19 8a7 7 0 1 0-14 0"></path>
                    <path d="M9 22h6"></path>
                  </svg>
                  <span>Heure de service supplémentaire</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 text-secondary"
                  >
                    <path d="M12 22v-5"></path>
                    <path d="M9 8V2"></path>
                    <path d="M15 8V2"></path>
                    <path d="M12 8v8"></path>
                    <path d="M19 8a7 7 0 1 0-14 0"></path>
                    <path d="M9 22h6"></path>
                  </svg>
                  <span>Branding personnalisé (logo sur les verres, bannières)</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 text-secondary"
                  >
                    <path d="M12 22v-5"></path>
                    <path d="M9 8V2"></path>
                    <path d="M15 8V2"></path>
                    <path d="M12 8v8"></path>
                    <path d="M19 8a7 7 0 1 0-14 0"></path>
                    <path d="M9 22h6"></path>
                  </svg>
                  <span>Service traiteur complémentaire</span>
                </li>
              </ul>

              <div className="bg-primary/5 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">Idéal pour:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 text-primary"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                      <path d="M9 14v1"></path>
                      <path d="M9 19v2"></path>
                      <path d="M9 3v2"></path>
                      <path d="M9 9v1"></path>
                      <path d="M15 14v1"></path>
                      <path d="M15 19v2"></path>
                      <path d="M15 3v2"></path>
                      <path d="M15 9v1"></path>
                    </svg>
                    <span>Réunions d'équipe</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 text-primary"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span>Petites fêtes d'anniversaire</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 text-primary"
                    >
                      <path d="M20 7h-9"></path>
                      <path d="M14 17H5"></path>
                      <circle cx="17" cy="17" r="3"></circle>
                      <circle cx="7" cy="7" r="3"></circle>
                    </svg>
                    <span>Événements de réseautage</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 text-primary"
                    >
                      <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
                      <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
                      <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
                      <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
                      <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                      <path d="M9 9h.01"></path>
                      <path d="M15 9h.01"></path>
                    </svg>
                    <span>Petites célébrations</span>
                  </div>
                </div>
              </div>

              <Button asChild size="lg" className="w-full md:w-auto">
                <Link href="/contact?package=discovery">Réserver ce forfait</Link>
              </Button>
            </div>

            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Vous avez des questions?</h3>
                  <p className="mb-6">
                    Contactez-nous pour discuter de vos besoins spécifiques ou pour obtenir un devis personnalisé.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 text-primary"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <span>(514) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 text-primary"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                      <span>info@voilavelo.ca</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Autres forfaits</h3>
                    <div className="space-y-4">
                      <Link
                        href="/packages/popular"
                        className="block p-4 border rounded-lg hover:bg-primary/5 transition-colors"
                      >
                        <div className="font-semibold">Forfait Populaire</div>
                        <div className="text-sm text-muted-foreground">Pour événements jusqu'à 100 personnes</div>
                      </Link>
                      <Link
                        href="/packages/premium"
                        className="block p-4 border rounded-lg hover:bg-primary/5 transition-colors"
                      >
                        <div className="font-semibold">Forfait Premium</div>
                        <div className="text-sm text-muted-foreground">Pour événements jusqu'à 200 personnes</div>
                      </Link>
                      <Link
                        href="/packages"
                        className="block p-4 border rounded-lg hover:bg-primary/5 transition-colors"
                      >
                        <div className="font-semibold">Voir tous les forfaits</div>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ce que nos clients disent</h2>
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
                  "Nous avons choisi le forfait Découverte pour notre petit événement d'entreprise et c'était parfait!
                  Le service était impeccable et les smoothies délicieux."
                </p>
                <div className="font-semibold">Sophie Tremblay</div>
                <div className="text-sm text-muted-foreground">Startup Montréal</div>
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
                  "Le forfait Découverte était parfait pour l'anniversaire de ma fille. Les enfants ont adoré faire
                  leurs propres smoothies et l'équipe était très professionnelle."
                </p>
                <div className="font-semibold">Marc Lavoie</div>
                <div className="text-sm text-muted-foreground">Client privé</div>
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
                  "Une expérience unique pour notre événement de réseautage. Les vélos à smoothies ont créé une ambiance
                  détendue et ont facilité les conversations entre participants."
                </p>
                <div className="font-semibold">Julie Côté</div>
                <div className="text-sm text-muted-foreground">Chambre de commerce de Québec</div>
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
            <Link href="/contact?package=discovery">Demander un devis</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
