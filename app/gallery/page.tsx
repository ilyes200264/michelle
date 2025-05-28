import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const galleryImages = [
  { id: 1, src: "/images/gallery-1.jpg", alt: "Événement corporatif chez TechMontréal" },
  { id: 2, src: "/images/gallery-2.jpg", alt: "Mariage champêtre à Bromont" },
  { id: 3, src: "/images/gallery-3.jpg", alt: "Festival d'été de Québec" },
  { id: 4, src: "/images/gallery-4.jpg", alt: "Anniversaire d'enfant" },
  { id: 5, src: "/images/gallery-5.jpg", alt: "Conférence sur la santé" },
  { id: 6, src: "/images/gallery-6.jpg", alt: "Marché Jean-Talon" },
  { id: 7, src: "/images/gallery-7.jpg", alt: "Événement de réseautage" },
  { id: 8, src: "/images/gallery-8.jpg", alt: "Festival Éco-Québec" },
  { id: 9, src: "/images/gallery-9.jpg", alt: "Lancement de produit" },
]

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="absolute inset-0">
          <Image src="/images/gallery-hero.jpg" alt="Galerie - Frooshy" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">Galerie</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl animate-slide-up">
            Découvrez nos événements en images
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="relative h-64 overflow-hidden rounded-lg hover:shadow-lg transition-all duration-300 group"
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                  <p className="text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Suivez-nous sur Instagram</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Pour plus de photos et vidéos de nos événements, suivez-nous @frooshy_quebec
          </p>
          <Button asChild size="lg">
            <Link href="https://www.instagram.com/frooshy_quebec" target="_blank" rel="noopener noreferrer">
              Voir notre Instagram
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Créons ensemble des moments mémorables</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Votre événement pourrait être le prochain dans notre galerie!
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
            <Link href="/contact">Réserver maintenant</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
