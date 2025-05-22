'use client'

import { useLanguage } from "@/components/language-provider"

export function PackagesContent() {
  const { t } = useLanguage()

  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="space-y-12">
            {/* Little Koki Package */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">1. {t("littleKokiPackage")}</h2>
              <p className="text-xl">{t("kidsActivity")}</p>
              <p>{t("littleKokiDescription")}</p>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">{t("twoOptions")}</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t("kokiOption1")}</li>
                  <li>{t("kokiOption2")}</li>
                </ul>
                <p className="italic">{t("chooseBasedOnChildren")}</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">{t("packageIncludes")}</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t("kidFriendlyBike")}</li>
                  <li>{t("freshColorfulSmoothies")}</li>
                  <li>{t("livelyEntertainment")}</li>
                </ul>
              </div>

              <p className="text-xl font-semibold">{t("giveKidsHealthyFun")}</p>
            </div>

            {/* Pop Solo Package */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">2. {t("popSoloPackage")}</h2>
              <p className="text-xl">{t("hitWithCrowds")}</p>
              <p>{t("popSoloDescription")}</p>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">{t("twoOptions")}</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t("soloOption1")}</li>
                  <li>{t("soloOption2")}</li>
                </ul>
                <p className="italic">{t("chooseBasedOnCrowd")}</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">{t("packageIncludes")}</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t("adultFriendlyBike")}</li>
                  <li>{t("freshColorfulSmoothies")}</li>
                  <li>{t("livelyEntertainment")}</li>
                </ul>
              </div>

              <p className="text-xl font-semibold">{t("giveGuestsMemorableExperience")}</p>
            </div>

            {/* Double the Fun Package */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">3. {t("doubleTheFun")}</h2>
              <p className="text-xl">{t("twiceBikesTwiceFun")}</p>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">{t("perfectFor")}</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <li>{t("communityFestivals")}</li>
                  <li>{t("brandActivations")}</li>
                  <li>{t("nonProfitFairs")}</li>
                  <li>{t("grandOpenings")}</li>
                  <li>{t("corporateEvents")}</li>
                  <li>{t("neighborhoodParties")}</li>
                  <li>{t("schoolOpenHouses")}</li>
                  <li>{t("universityOpenDays")}</li>
                  <li>{t("shoppingCenterEvents")}</li>
                  <li>{t("conferencesExhibitions")}</li>
                  <li>{t("teamBuilding")}</li>
                  <li>{t("christmasParties")}</li>
                  <li>{t("cocktailParties")}</li>
                  <li>{t("healthWellnessFairs")}</li>
                  <li>{t("awarenessCampaigns")}</li>
                  <li>{t("familyFestivals")}</li>
                  <li>{t("employeeAppreciation")}</li>
                  <li>{t("schoolCelebrations")}</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">{t("threeOptions")}</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t("doubleOption1")}</li>
                  <li>{t("doubleOption2")}</li>
                  <li>{t("doubleOption3")}</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">{t("packageIncludes")}</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t("twoAdultBikes")}</li>
                  <li>{t("freshColorfulSmoothies")}</li>
                  <li>{t("livelyEntertainment")}</li>
                </ul>
              </div>

              <p className="text-xl font-semibold">{t("perfectPackageForCrowds")}</p>
            </div>

            {/* Ready, Set, Blend Package */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">4. {t("readySetBlend")}</h2>
              <p>{t("readySetBlendDescription")}</p>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">{t("perfectFor")}</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t("corporateParties")}</li>
                  <li>{t("teamBuilding")}</li>
                  <li>{t("companyRetreats")}</li>
                  <li>{t("conferencesExhibitions")}</li>
                  <li>{t("fundraisers")}</li>
                  <li>{t("wellnessChallenges")}</li>
                  <li>{t("dynamicEvents")}</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">{t("twoOptions")}</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t("readyOption1")}</li>
                  <li>{t("readyOption2")}</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">{t("packageIncludes")}</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t("twoAdultBikes")}</li>
                  <li>{t("liveLeaderboard")}</li>
                  <li>{t("speedMonitor")}</li>
                  <li>{t("dynamicHost")}</li>
                  <li>{t("deliciousSmoothies")}</li>
                </ul>
              </div>

              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>{t("organizeChampionship")}</li>
                <li>{t("stimulateCompetition")}</li>
                <li>{t("getPartyStarted")}</li>
                <li>{t("createMemories")}</li>
              </ul>
            </div>

            {/* Parent-Child Challenge Package */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">5. {t("parentChildPackage")}</h2>
              <p className="text-xl">{t("vitaminChallenge")}</p>
              <p>{t("parentChildDescription")}</p>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">{t("twoOptions")}</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold">{t("option1Classic")}</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>{t("classic50Smoothies")}</li>
                      <li>{t("classic2Hours")}</li>
                      <li>{t("classicBikes")}</li>
                      <li>{t("liveLeaderboard")}</li>
                      <li>{t("speedMonitor")}</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold">{t("option2Challenge")}</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>{t("challenge100Smoothies")}</li>
                      <li>{t("challenge3Hours")}</li>
                      <li>{t("challengeBikes")}</li>
                      <li>{t("coordinationTable")}</li>
                      <li>{t("speedMonitor")}</li>
                      <li>{t("winningMedal")}</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">{t("packageIncludes")}</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t("uniqueActivity")}</li>
                  <li>{t("professionalEntertainment")}</li>
                  <li>{t("friendlyCompetition")}</li>
                </ul>
              </div>

              <p className="text-xl font-semibold">{t("bestTeamWins")}</p>
            </div>

            {/* Smoothie Parade Package */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">{t("smoothieParadePackage")}</h2>
              <p className="text-xl">{t("threeBikesTripleFun")}</p>
              <p>{t("paradeDescription")}</p>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">{t("packageIncludes")}</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t("paradeAdultKidBikes")}</li>
                  <li>{t("freshColorfulSmoothies")}</li>
                  <li>{t("livelyEntertainment")}</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">{t("optionsAvailable")}</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t("parade200Smoothies")}</li>
                  <li>{t("parade300Smoothies")}</li>
                  <li>{t("parade400Smoothies")}</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">{t("perfectFor")}</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t("communityParades")}</li>
                  <li>{t("openHouseEvents")}</li>
                  <li>{t("neighborhoodFestivals")}</li>
                  <li>{t("schoolEvents")}</li>
                  <li>{t("familyFunDays")}</li>
                  <li>{t("healthWellnessCampaigns")}</li>
                  <li>{t("youthEvents")}</li>
                  <li>{t("largeScaleLaunches")}</li>
                </ul>
              </div>

              <p className="text-xl font-semibold">{t("giveHealthyExperience")}</p>
              <p className="text-xl">{t("smoothieParadeShow")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 