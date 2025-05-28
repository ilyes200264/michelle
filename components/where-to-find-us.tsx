"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

export function WhereToFindUs() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">{t("where.title")}</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">{t("where.subtitle")}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="relative h-48">
              <Image src="/images/event-1.jpg" alt="Festival d'été de Québec" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-bold">Festival d'été de Québec</h3>
                  <p className="text-sm">Juillet 2023</p>
                </div>
              </div>
            </div>
            <CardContent className="p-4">
              <p>
                Venez nous voir au Festival d'été de Québec où nous servirons nos délicieux smoothies rafraîchissants.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="relative h-48">
              <Image src="/images/event-2.jpg" alt="Marché Jean-Talon" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-bold">Marché Jean-Talon</h3>
                  <p className="text-sm">Tous les samedis</p>
                </div>
              </div>
            </div>
            <CardContent className="p-4">
              <p>
                Retrouvez-nous chaque samedi au Marché Jean-Talon pour déguster nos smoothies préparés avec des produits
                frais du marché.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="relative h-48">
              <Image src="/images/event-3.jpg" alt="Expo Manger Santé" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4 text-white">
                  <h3 className="text-xl font-bold">Expo Manger Santé</h3>
                  <p className="text-sm">Mars 2023</p>
                </div>
              </div>
            </div>
            <CardContent className="p-4">
              <p>
                Participez à nos ateliers et dégustations lors de l'Expo Manger Santé et découvrez nos recettes
                exclusives.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 text-center">{t("where.upcoming.title")}</h3>
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center p-4 bg-primary/5 rounded-md">
              <div className="md:w-1/4 font-semibold">15-17 Juin 2023</div>
              <div className="md:w-1/2">Festival Eco-Responsable de Montréal</div>
              <div className="md:w-1/4 text-right">Parc Jean-Drapeau</div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center p-4 bg-primary/5 rounded-md">
              <div className="md:w-1/4 font-semibold">8 Juillet 2023</div>
              <div className="md:w-1/2">Marché des Saveurs de Sherbrooke</div>
              <div className="md:w-1/4 text-right">Centre-ville</div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center p-4 bg-primary/5 rounded-md">
              <div className="md:w-1/4 font-semibold">22-23 Juillet 2023</div>
              <div className="md:w-1/2">Festival des Traditions du Monde</div>
              <div className="md:w-1/4 text-right">Drummondville</div>
            </div>
            <div className="flex flex-col md:flex-row md:items-center p-4 bg-primary/5 rounded-md">
              <div className="md:w-1/4 font-semibold">5-6 Août 2023</div>
              <div className="md:w-1/2">Fête des Récoltes</div>
              <div className="md:w-1/4 text-right">Saint-Hyacinthe</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
