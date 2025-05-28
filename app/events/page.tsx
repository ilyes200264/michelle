import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const upcomingEvents = [
  {
    id: 1,
    date: "15-17 Juin 2024",
    name: "Festival Eco-Responsable de Montréal",
    location: "Parc Jean-Drapeau",
    description: "Venez nous rencontrer et déguster nos smoothies bio!",
  },
  {
    id: 2,
    date: "8 Juillet 2024",
    name: "Marché des Saveurs de Sherbrooke",
    location: "Centre-ville de Sherbrooke",
    description: "Une journée dédiée aux produits locaux et artisanaux.",
  },
  {
    id: 3,
    date: "22-23 Juillet 2024",
    name: "Festival des Traditions du Monde",
    location: "Drummondville",
    description: "Célébrez la diversité culturelle avec nos smoothies exotiques.",
  },
  {
    id: 4,
    date: "5-6 Août 2024",
    name: "Fête des Récoltes",
    location: "Saint-Hyacinthe",
    description: "Smoothies préparés avec les fruits frais de la saison.",
  },
]

const pastEvents = [
  {
    id: 1,
    name: "Mariage de Sophie et Jean",
    type: "Événement privé",
    testimonial: "Frooshy a ajouté une touche unique à notre mariage. Nos invités ont adoré!",
  },
  {
    id: 2,
    name: "Conférence TechMontréal 2023",
    type: "Événement corporatif",
    testimonial: "Un service impeccable et des smoothies délicieux. Hautement recommandé!",
  },
  {
    id: 3,
    name: "Festival d'été de Québec 2023",
    type: "Festival",
    testimonial: "Les vélos à smoothies ont été un grand succès auprès des festivaliers.",
  },
]

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="absolute inset-0">
          <Image src="/images/events-hero.jpg" alt="Événements - Frooshy" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">Événements</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl animate-slide-up">
            Retrouvez-nous lors de nos prochains événements
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Événements à venir</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{event.name}</h3>
                      <p className="text-primary font-semibold">{event.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{event.location}</p>
                    </div>
                  </div>
                  <p className="mb-4">{event.description}</p>
                  <Button asChild variant="outline">
                    <Link href="/contact">Plus d'infos</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Événements passés</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <Card key={event.id} className="bg-muted">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.name}</h3>
                  <p className="text-sm text-primary mb-4">{event.type}</p>
                  <p className="italic">"{event.testimonial}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Book Us Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Réservez-nous pour votre événement</h2>
            <p className="text-xl mb-8">
              Que ce soit pour un événement corporatif, un mariage, un anniversaire ou tout autre célébration, nous
              apportons une touche unique et mémorable avec nos vélos à smoothies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <p>Événements réalisés</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50,000+</div>
                <p>Smoothies servis</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p>Clients satisfaits</p>
              </div>
            </div>
            <Button asChild size="lg">
              <Link href="/contact">Réserver maintenant</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ne manquez pas nos prochains événements</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Suivez-nous sur les réseaux sociaux pour rester informé de nos apparitions publiques et événements spéciaux.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
              <Link href="https://www.facebook.com/frooshy" target="_blank" rel="noopener noreferrer">
                Facebook
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
              <Link href="https://www.instagram.com/frooshy" target="_blank" rel="noopener noreferrer">
                Instagram
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
