import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PackageCard } from "@/components/package-card"

export default function PackagesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-16 bg-gradient-to-r from-orange-100 to-yellow-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Nos forfaits</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">Choisissez votre forfait</h2>
          <p className="text-lg max-w-2xl mx-auto mb-12">
            Nous proposons des forfaits de smoothies à pédales adaptés aussi bien aux petits qu'aux grands événements : expositions, conférences, célébrations en entreprise, festivals communautaires, fêtes scolaires et programmes de vacances.
          </p>
          <div className="space-y-10">
            {/* Forfait Petite Koki */}
            <Card className="bg-pink-100 border-0 shadow-lg">
              <CardContent className="py-8 px-6">
                <h3 className="text-2xl font-bold mb-2 text-pink-700">1. Forfait Petite Koki</h3>
                <p className="italic mb-2">L'activité coup de cœur des enfants!</p>
                <p className="mb-4">Parfait pour les fêtes d'anniversaire, les graduations en garderie ou les festivals familiaux, ce forfait transforme chaque événement en une explosion de plaisir, de rires et de saveurs!</p>
                <p className="mb-2 font-semibold">Deux options selon vos besoins :</p>
                <ul className="mb-4 list-disc list-inside text-left mx-auto max-w-xl">
                  <li>Option 1 : 25 délicieux smoothies + 1 heure d'animation vitaminée</li>
                  <li>Option 2 : 50 délicieux smoothies + 2 heures d'animation vitaminée</li>
                </ul>
                <p className="mb-2 font-semibold">Ce que comprend le forfait :</p>
                <ul className="mb-4 list-disc list-inside text-left mx-auto max-w-xl">
                  <li>1 vélo-blender pour enfants (5 à 10 ans) — ils pédalent, ils mixent, ils s'éclatent!</li>
                  <li>Smoothies frais et colorés — préparés sur place avec l'énergie de notre enfant et une bonne dose de bonne humeur.</li>
                  <li>Animation dynamique — musique et ambiance festive garanties!</li>
                </ul>
                <p className="font-bold text-pink-700">Offrez aux enfants un moment santé, actif et 100 % fun!</p>
              </CardContent>
            </Card>
            {/* Forfait Pop Solo */}
            <Card className="bg-blue-100 border-0 shadow-lg">
              <CardContent className="py-8 px-6">
                <h3 className="text-2xl font-bold mb-2 text-blue-700">2. Forfait Pop Solo</h3>
                <p className="italic mb-2">Un succès assuré pour ados, adultes et familles!</p>
                <p className="mb-4">Idéal pour les événements scolaires, les fêtes d'entreprise, les festivals communautaires ou toute activité alliant plaisir et bien-être!</p>
                <p className="mb-2 font-semibold">Deux options selon vos besoins :</p>
                <ul className="mb-4 list-disc list-inside text-left mx-auto max-w-xl">
                  <li>Option 1 : 50 smoothies + 1h30 d'animation dynamique</li>
                  <li>Option 2 : 75 smoothies + 2h30 d'animation dynamique</li>
                </ul>
                <p className="mb-2 font-semibold">Ce que comprend le forfait :</p>
                <ul className="mb-4 list-disc list-inside text-left mx-auto max-w-xl">
                  <li>1 vélo-blender pour adultes (ados et adultes)</li>
                  <li>Smoothies préparés sur place — frais, savoureux et colorés</li>
                  <li>Ambiance festive — musique, énergie positive et rires garantis</li>
                </ul>
                <p className="font-bold text-blue-700">Mixé par toi, propulsé par le plaisir !</p>
              </CardContent>
            </Card>
            {/* Forfait Double Fun */}
            <Card className="bg-yellow-100 border-0 shadow-lg">
              <CardContent className="py-8 px-6">
                <h3 className="text-2xl font-bold mb-2 text-yellow-700">3. Forfait Double Fun</h3>
                <p className="italic mb-2">Deux fois plus de vélos, deux fois plus de fun!</p>
                <p className="mb-2 font-semibold">Idéal pour :</p>
                <ul className="mb-4 list-disc list-inside text-left mx-auto max-w-xl">
                  <li>Festivals communautaires</li>
                  <li>Activations de marque</li>
                  <li>Foires, événements corporatifs, fêtes de quartier, salons et plus</li>
                </ul>
                <p className="mb-2 font-semibold">Trois options :</p>
                <ul className="mb-4 list-disc list-inside text-left mx-auto max-w-xl">
                  <li>Option 1 : 100 smoothies + 2h d'animation</li>
                  <li>Option 2 : 200 smoothies + 3h d'animation</li>
                  <li>Option 3 : 300 smoothies + 4h d'animation</li>
                </ul>
                <p className="mb-2 font-semibold">Ce que comprend le forfait :</p>
                <ul className="mb-4 list-disc list-inside text-left mx-auto max-w-xl">
                  <li>Deux vélos-blenders pour adultes</li>
                  <li>Smoothies préparés sur place</li>
                  <li>Animation festive, musique et ambiance de folie</li>
                </ul>
              </CardContent>
            </Card>
            {/* Forfait Ready, Set, Blend */}
            <Card className="bg-green-100 border-0 shadow-lg">
              <CardContent className="py-8 px-6">
                <h3 className="text-2xl font-bold mb-2 text-green-700">4. Ready, Set, Blend</h3>
                <p className="italic mb-2">Un défi vitaminé pour électriser votre équipe!</p>
                <p className="mb-2 font-semibold">Idéal pour :</p>
                <ul className="mb-4 list-disc list-inside text-left mx-auto max-w-xl">
                  <li>Team building</li>
                  <li>Fêtes de Noël</li>
                  <li>Conférences & salons</li>
                  <li>Défis bien-être</li>
                  <li>Collectes de fonds dynamiques</li>
                </ul>
                <p className="mb-2 font-semibold">Deux options :</p>
                <ul className="mb-4 list-disc list-inside text-left mx-auto max-w-xl">
                  <li>Option 1 : 100 smoothies + 2h de compétition amicale</li>
                  <li>Option 2 : 200 smoothies + 3h de défis à vélo</li>
                </ul>
                <p className="mb-2 font-semibold">Ce que comprend le forfait :</p>
                <ul className="mb-4 list-disc list-inside text-left mx-auto max-w-xl">
                  <li>2 vélos-blenders pour adultes</li>
                  <li>Moniteurs de vitesse + tableau de classement en direct</li>
                  <li>Animateur dynamique pour motiver la foule</li>
                  <li>Smoothies préparés à la force des jambes</li>
                </ul>
                <p className="font-bold text-green-700">Un mini championnat de smoothie inoubliable — rires, esprit d'équipe et fierté assurés!</p>
              </CardContent>
            </Card>
            {/* Forfait Défi Parent-Enfant */}
            <Card className="bg-orange-100 border-0 shadow-lg">
              <CardContent className="py-8 px-6">
                <h3 className="text-2xl font-bold mb-2 text-orange-700">5. Forfait Défi Parent-Enfant</h3>
                <p className="italic mb-2">Un défi actif pour toute la famille!</p>
                <p className="mb-2 font-semibold">Idéal pour :</p>
                <ul className="mb-4 list-disc list-inside text-left mx-auto max-w-xl">
                  <li>Écoles</li>
                  <li>Fêtes familiales</li>
                  <li>Festivals</li>
                  <li>Événements communautaires</li>
                </ul>
                <p className="mb-2 font-semibold">Deux versions :</p>
                <ul className="mb-4 list-disc list-inside text-left mx-auto max-w-xl">
                  <li>Option 1 : 50 smoothies + 2h de défi</li>
                  <li>Option 2 : 100 smoothies + 3h de compétition</li>
                </ul>
                <p className="mb-2 font-semibold">Ce que comprend le forfait :</p>
                <ul className="mb-4 list-disc list-inside text-left mx-auto max-w-xl">
                  <li>1 vélo-blender enfant + 1 vélo-blender adulte</li>
                  <li>Classement en direct + moniteurs de vitesse</li>
                  <li>Animation festive</li>
                  <li>Médaille pour le duo gagnant</li>
                </ul>
                <p className="font-bold text-orange-700">Un moment intergénérationnel inoubliable!</p>
              </CardContent>
            </Card>
            {/* Forfait Signature */}
            <Card className="bg-purple-100 border-0 shadow-lg">
              <CardContent className="py-8 px-6">
                <h3 className="text-2xl font-bold mb-2 text-purple-700">6. Forfait Signature</h3>
                <p className="italic mb-2">Ajoutez votre saveur à l'événement!</p>
                <p className="mb-4">Personnalisez votre expérience avec notre Forfait Signature de Marquage Événementiel. Offrez à votre événement une touche unique et mémorable grâce à Voilà Vélo!</p>
                <p className="mb-2 font-semibold">Ce que nous proposons :</p>
                <ul className="mb-4 list-disc list-inside text-left mx-auto max-w-xl">
                  <li>Gobelets personnalisés</li>
                  <li>Caches-roues imprimés recto-verso</li>
                  <li>Affiches chevalets (format A-frame)</li>
                  <li>Décorations de table à votre image</li>
                </ul>
                <p className="mb-2 font-semibold">Idéal pour :</p>
                <ul className="mb-4 list-disc list-inside text-left mx-auto max-w-xl">
                  <li>Événements d'entreprise</li>
                  <li>Activations de marque</li>
                  <li>Campagnes de sensibilisation</li>
                  <li>Festivals et fêtes scolaires</li>
                  <li>Anniversaires, mariages et célébrations privées</li>
                </ul>
                <p className="font-bold text-purple-700">📩 Contactez-nous pour créer un événement à votre image!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
