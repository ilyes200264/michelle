import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const recipes = [
  {
    id: 1,
    name: "Berry Blast",
    description: "Un mélange explosif de baies fraîches",
    ingredients: ["Fraises", "Bleuets", "Framboises", "Yogourt grec", "Miel"],
    image: "/images/smoothie-1.jpg",
    color: "bg-red-100",
  },
  {
    id: 2,
    name: "Green Machine",
    description: "Énergie verte pour votre journée",
    ingredients: ["Épinards", "Kiwi", "Pomme verte", "Banane", "Jus de citron"],
    image: "/images/smoothie-2.jpg",
    color: "bg-green-100",
  },
  {
    id: 3,
    name: "Tropical Paradise",
    description: "Évadez-vous sous les tropiques",
    ingredients: ["Mangue", "Ananas", "Fruit de la passion", "Lait de coco", "Lime"],
    image: "/images/smoothie-3.jpg",
    color: "bg-yellow-100",
  },
  {
    id: 4,
    name: "Protein Power",
    description: "Pour les sportifs et actifs",
    ingredients: ["Banane", "Beurre d'arachide", "Cacao", "Protéine en poudre", "Lait d'amande"],
    image: "/images/smoothie-4.jpg",
    color: "bg-amber-100",
  },
  {
    id: 5,
    name: "Citrus Sunrise",
    description: "Réveillez vos papilles",
    ingredients: ["Orange", "Pamplemousse", "Carotte", "Gingembre", "Curcuma"],
    image: "/images/recipe-5.jpg",
    color: "bg-orange-100",
  },
  {
    id: 6,
    name: "Chocolate Dream",
    description: "Pour les amateurs de chocolat",
    ingredients: ["Banane", "Cacao", "Dattes", "Lait d'avoine", "Vanille"],
    image: "/images/recipe-6.jpg",
    color: "bg-brown-100",
  },
]

export default function RecipesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-r from-primary/20 to-secondary/20">
        <div className="absolute inset-0">
          <Image src="/images/recipes-hero.jpg" alt="Nos Recettes - Frooshy" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">Nos Recettes</h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl animate-slide-up">
            Des créations délicieuses et nutritives pour tous les goûts
          </p>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="py-16 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <Card key={recipe.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative h-48">
                  <Image src={recipe.image || "/placeholder.svg"} alt={recipe.name} fill className="object-cover" />
                </div>
                <CardContent className={`p-6 ${recipe.color}`}>
                  <h3 className="text-xl font-bold mb-2">{recipe.name}</h3>
                  <p className="text-muted-foreground mb-4">{recipe.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Ingrédients:</h4>
                    <ul className="text-sm space-y-1">
                      {recipe.ingredients.map((ingredient, index) => (
                        <li key={index} className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-2 text-primary"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                          </svg>
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Recipes Section */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Créons votre recette signature</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nous pouvons créer des recettes personnalisées pour votre événement, adaptées à votre thème et aux
            préférences de vos invités.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Discuter de vos idées</Link>
          </Button>
        </div>
      </section>

      {/* Dietary Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Options alimentaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                  >
                    <path d="M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14"></path>
                    <path d="M16 8c4 0 6-2 6-6-4 0-6 2-6 6"></path>
                    <path d="M17.41 3.6a10 10 0 1 0 3 3"></path>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Végane</h3>
                <p className="text-sm">100% végétal, sans produits d'origine animale</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600"
                  >
                    <path d="M2 12h20"></path>
                    <path d="M12 2v20"></path>
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Sans gluten</h3>
                <p className="text-sm">Options disponibles pour les intolérants au gluten</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-600"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Sans sucre ajouté</h3>
                <p className="text-sm">Naturellement sucré avec des fruits frais</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-yellow-600"
                  >
                    <path d="M12 2v20"></path>
                    <path d="M2 12h20"></path>
                    <path d="m4.93 4.93 14.14 14.14"></path>
                    <path d="m19.07 4.93-14.14 14.14"></path>
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Sans noix</h3>
                <p className="text-sm">Options sécuritaires pour les allergies aux noix</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à goûter nos délicieux smoothies?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Réservez Frooshy pour votre prochain événement et offrez une expérience gustative unique à vos invités.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
            <Link href="/contact">Réserver maintenant</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
