"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import { LanguageProvider, useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RecipesPage() {
  return (
    <LanguageProvider>
      <RecipesContent />
    </LanguageProvider>
  )
}

function RecipesContent() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full bg-white border-b">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-yellow-500">Frooshy</span>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-start gap-4 mb-8">
              <Link href="/" className="flex items-center text-sm text-gray-600 hover:text-gray-900">
                <ChevronLeft className="mr-1 h-4 w-4" />
                {t("backToHome")}
              </Link>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-green-600">{t("smoothieRecipes")}</h1>
              <p className="text-gray-700 md:text-xl max-w-[800px]">{t("recipesDescription")}</p>
            </div>

            <div className="mt-8">
              <Tabs defaultValue="fruits" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="fruits">{t("fruitSmoothies")}</TabsTrigger>
                  <TabsTrigger value="vegetables">{t("vegetableSmoothies")}</TabsTrigger>
                  <TabsTrigger value="special">{t("specialSmoothies")}</TabsTrigger>
                </TabsList>
                <TabsContent value="fruits">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader>
                        <CardTitle>{t("tropicalParadise")}</CardTitle>
                        <CardDescription>{t("tropicalParadiseDescription")}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/verserdansunversmoothie.jpg-QQcJsWqwrRjHVYd2QRcTOv97g1FGyE.jpeg"
                          alt={t("tropicalParadise")}
                          className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <div className="space-y-2">
                          <h4 className="font-medium">{t("ingredients")}</h4>
                          <ul className="list-disc pl-5 text-sm">
                            <li>1 {t("banana")}</li>
                            <li>1 {t("mango")}</li>
                            <li>1/2 {t("pineapple")}</li>
                            <li>200ml {t("coconutMilk")}</li>
                            <li>{t("iceOptional")}</li>
                          </ul>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-yellow-500 hover:bg-yellow-600">{t("tryThisRecipe")}</Button>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>{t("berryBlast")}</CardTitle>
                        <CardDescription>{t("berryBlastDescription")}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="w-full h-48 bg-red-100 rounded-md mb-4 flex items-center justify-center">
                          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-red-400 to-purple-500"></div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-medium">{t("ingredients")}</h4>
                          <ul className="list-disc pl-5 text-sm">
                            <li>100g {t("strawberries")}</li>
                            <li>100g {t("blueberries")}</li>
                            <li>100g {t("raspberries")}</li>
                            <li>1 {t("yogurt")}</li>
                            <li>1 {t("honeySpoon")}</li>
                          </ul>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-red-500 hover:bg-red-600">{t("tryThisRecipe")}</Button>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>{t("greenAppleFresh")}</CardTitle>
                        <CardDescription>{t("greenAppleFreshDescription")}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="w-full h-48 bg-green-100 rounded-md mb-4 flex items-center justify-center">
                          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-300 to-green-500"></div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-medium">{t("ingredients")}</h4>
                          <ul className="list-disc pl-5 text-sm">
                            <li>2 {t("greenApples")}</li>
                            <li>1 {t("cucumber")}</li>
                            <li>1 {t("lemonJuice")}</li>
                            <li>1 {t("mintLeaves")}</li>
                            <li>200ml {t("water")}</li>
                          </ul>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-green-500 hover:bg-green-600">{t("tryThisRecipe")}</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="vegetables">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader>
                        <CardTitle>{t("greenDetox")}</CardTitle>
                        <CardDescription>{t("greenDetoxDescription")}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="w-full h-48 bg-green-100 rounded-md mb-4 flex items-center justify-center">
                          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-green-600"></div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-medium">{t("ingredients")}</h4>
                          <ul className="list-disc pl-5 text-sm">
                            <li>2 {t("kaleLeaves")}</li>
                            <li>1 {t("cucumber")}</li>
                            <li>1 {t("celeryStalk")}</li>
                            <li>1 {t("greenApple")}</li>
                            <li>1 {t("gingerPiece")}</li>
                            <li>200ml {t("water")}</li>
                          </ul>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-green-500 hover:bg-green-600">{t("tryThisRecipe")}</Button>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>{t("carrotGinger")}</CardTitle>
                        <CardDescription>{t("carrotGingerDescription")}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="w-full h-48 bg-orange-100 rounded-md mb-4 flex items-center justify-center">
                          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-300 to-orange-500"></div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-medium">{t("ingredients")}</h4>
                          <ul className="list-disc pl-5 text-sm">
                            <li>4 {t("carrots")}</li>
                            <li>1 {t("orange")}</li>
                            <li>1 {t("gingerPiece")}</li>
                            <li>1 {t("turmericPiece")}</li>
                            <li>200ml {t("water")}</li>
                          </ul>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-orange-500 hover:bg-orange-600">{t("tryThisRecipe")}</Button>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>{t("beetrootBoost")}</CardTitle>
                        <CardDescription>{t("beetrootBoostDescription")}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="w-full h-48 bg-red-100 rounded-md mb-4 flex items-center justify-center">
                          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-red-300 to-red-600"></div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-medium">{t("ingredients")}</h4>
                          <ul className="list-disc pl-5 text-sm">
                            <li>1 {t("beetroot")}</li>
                            <li>1 {t("carrot")}</li>
                            <li>1 {t("apple")}</li>
                            <li>1 {t("lemonJuice")}</li>
                            <li>200ml {t("water")}</li>
                          </ul>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-red-500 hover:bg-red-600">{t("tryThisRecipe")}</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
                <TabsContent value="special">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader>
                        <CardTitle>{t("proteinPower")}</CardTitle>
                        <CardDescription>{t("proteinPowerDescription")}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="w-full h-48 bg-blue-100 rounded-md mb-4 flex items-center justify-center">
                          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-300 to-blue-500"></div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-medium">{t("ingredients")}</h4>
                          <ul className="list-disc pl-5 text-sm">
                            <li>1 {t("banana")}</li>
                            <li>30g {t("proteinPowder")}</li>
                            <li>1 {t("peanutButterSpoon")}</li>
                            <li>1 {t("oats")}</li>
                            <li>250ml {t("almondMilk")}</li>
                          </ul>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-blue-500 hover:bg-blue-600">{t("tryThisRecipe")}</Button>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>{t("chocolateDelight")}</CardTitle>
                        <CardDescription>{t("chocolateDelightDescription")}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="w-full h-48 bg-amber-100 rounded-md mb-4 flex items-center justify-center">
                          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-700 to-amber-900"></div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-medium">{t("ingredients")}</h4>
                          <ul className="list-disc pl-5 text-sm">
                            <li>1 {t("banana")}</li>
                            <li>2 {t("cacaoPowderSpoons")}</li>
                            <li>1 {t("avocadoHalf")}</li>
                            <li>1 {t("honeySpoon")}</li>
                            <li>250ml {t("almondMilk")}</li>
                          </ul>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-amber-800 hover:bg-amber-900">{t("tryThisRecipe")}</Button>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>{t("energyBooster")}</CardTitle>
                        <CardDescription>{t("energyBoosterDescription")}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="w-full h-48 bg-yellow-100 rounded-md mb-4 flex items-center justify-center">
                          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500"></div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-medium">{t("ingredients")}</h4>
                          <ul className="list-disc pl-5 text-sm">
                            <li>1 {t("banana")}</li>
                            <li>1 {t("coffeeShotEspresso")}</li>
                            <li>1 {t("datesFruit")}</li>
                            <li>1 {t("cinnamonPinch")}</li>
                            <li>250ml {t("oatMilk")}</li>
                          </ul>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-yellow-500 hover:bg-yellow-600">{t("tryThisRecipe")}</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="mt-16 p-8 bg-white rounded-xl shadow-sm border">
              <h2 className="text-2xl font-bold text-green-600 mb-4">{t("createYourOwn")}</h2>
              <p className="text-gray-700 mb-6">{t("createYourOwnDescription")}</p>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-2">
                  <h3 className="font-bold text-lg">{t("step1")}</h3>
                  <p className="text-sm text-gray-600">{t("step1Description")}</p>
                  <div className="bg-green-100 p-4 rounded-lg">
                    <ul className="text-sm space-y-1">
                      <li>{t("banana")}</li>
                      <li>{t("apple")}</li>
                      <li>{t("mango")}</li>
                      <li>{t("berries")}</li>
                      <li>{t("pineapple")}</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-lg">{t("step2")}</h3>
                  <p className="text-sm text-gray-600">{t("step2Description")}</p>
                  <div className="bg-yellow-100 p-4 rounded-lg">
                    <ul className="text-sm space-y-1">
                      <li>{t("yogurt")}</li>
                      <li>{t("almondMilk")}</li>
                      <li>{t("coconutMilk")}</li>
                      <li>{t("oatMilk")}</li>
                      <li>{t("water")}</li>
                    </ul>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-lg">{t("step3")}</h3>
                  <p className="text-sm text-gray-600">{t("step3Description")}</p>
                  <div className="bg-red-100 p-4 rounded-lg">
                    <ul className="text-sm space-y-1">
                      <li>{t("honey")}</li>
                      <li>{t("chia")}</li>
                      <li>{t("flaxseeds")}</li>
                      <li>{t("proteinPowder")}</li>
                      <li>{t("cinnamon")}</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button className="bg-green-500 hover:bg-green-600 px-8">{t("shareYourRecipe")}</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-green-600 text-white py-6">
        <div className="container px-4 md:px-6 text-center">
          <p>© 2025 Frooshy. {t("allRightsReserved")}</p>
        </div>
      </footer>
    </div>
  )
}
