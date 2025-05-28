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
      <section className="relative h-[50vh] bg-yellow-200 flex items-center justify-center">
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-6 animate-fade-in">Événements</h1>
          <p className="text-xl md:text-2xl text-green-700 mb-8 max-w-2xl animate-slide-up">
            Retrouvez-nous lors de nos prochains événements
          </p>
        </div>
        {/* Pastilles décoratives */}
        <div className="absolute top-6 left-10 w-8 h-8 bg-pink-400 rounded-full opacity-70"></div>
        <div className="absolute bottom-8 right-16 w-12 h-12 bg-green-300 rounded-full opacity-60"></div>
        <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-orange-300 rounded-full opacity-70"></div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-orange-500">Événements à venir</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3 mb-8 md:mb-0 flex-shrink-0 flex flex-col gap-4 items-center">
              <Image src="/images/velo-smoothie-2.jpg" alt="Ambiance vélo à smoothie" width={400} height={400} className="rounded-xl shadow-lg object-cover border-4 border-pink-300" />
              <span className="inline-block w-8 h-8 bg-blue-300 rounded-full"></span>
              <span className="inline-block w-4 h-4 bg-yellow-300 rounded-full"></span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              {upcomingEvents.map((event, idx) => {
                const bgColors = ["bg-pink-100", "bg-green-100", "bg-yellow-100", "bg-blue-100"];
                const borderColors = ["border-pink-300", "border-green-300", "border-yellow-300", "border-blue-300"];
                return (
                  <Card key={event.id} className={`${bgColors[idx % bgColors.length]} ${borderColors[idx % borderColors.length]} border-2 shadow-lg transition-all duration-300`}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-orange-600">{event.name}</h3>
                          <span className="inline-block px-3 py-1 rounded-full text-white text-xs font-bold bg-pink-400 shadow">{event.date}</span>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-blue-500 font-semibold">{event.location}</p>
                        </div>
                      </div>
                      <p className="mb-4 text-green-700">{event.description}</p>
                      <Button asChild variant="outline" className="border-pink-400 text-pink-600 hover:bg-pink-100"> 
                        <Link href="/contact">Plus d'infos</Link>
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-green-600">Événements passés</h2>
          <div className="flex justify-center mb-8">
            <Image src="/images/equipe-frooshy.jpg" alt="L'équipe Frooshy" width={350} height={250} className="rounded-lg shadow-md object-cover border-4 border-yellow-300" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastEvents.map((event, idx) => {
              const bgColors = ["bg-yellow-100", "bg-pink-100", "bg-green-100"];
              const borderColors = ["border-yellow-300", "border-pink-300", "border-green-300"];
              return (
                <Card key={event.id} className={`${bgColors[idx % bgColors.length]} ${borderColors[idx % borderColors.length]} border-2 shadow-lg`}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-blue-600">{event.name}</h3>
                    <p className="text-sm text-orange-500 mb-4 font-semibold">{event.type}</p>
                    <p className="italic text-green-700">"{event.testimonial}"</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Book Us Section */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-pink-600">Réservez-nous pour votre événement</h2>
            <p className="text-xl mb-8 text-blue-700">
              Que ce soit pour un événement corporatif, un mariage, un anniversaire ou tout autre célébration, nous
              apportons une touche unique et mémorable avec nos vélos à smoothies.
            </p>
            <div className="flex justify-center mb-8">
              <Image src="/images/velo-smoothie-3.jpg" alt="Vélo à smoothie événement" width={350} height={250} className="rounded-lg shadow-md object-cover border-4 border-green-300" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-500 mb-2">500+</div>
                <p className="text-green-700">Événements réalisés</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-500 mb-2">50,000+</div>
                <p className="text-blue-700">Smoothies servis</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-500 mb-2">100%</div>
                <p className="text-orange-700">Clients satisfaits</p>
              </div>
            </div>
            <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-white">
              <Link href="/contact">Réserver maintenant</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-100 text-green-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-pink-600">Ne manquez pas nos prochains événements</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-700">
            Suivez-nous sur les réseaux sociaux pour rester informé de nos apparitions publiques et événements spéciaux.
          </p>
          <div className="flex justify-center mb-8">
            <Image src="/images/velo-smoothie-1.jpg" alt="Vélo à smoothie" width={200} height={200} className="rounded-full shadow-lg object-cover border-4 border-pink-300" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="bg-pink-400 text-white border-none hover:bg-pink-500">
              <Link href="https://www.facebook.com/frooshy" target="_blank" rel="noopener noreferrer">
                Facebook
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-yellow-400 text-white border-none hover:bg-yellow-500">
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
