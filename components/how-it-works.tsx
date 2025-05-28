"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

export function HowItWorks() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">{t("how.title")}</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">{t("how.subtitle")}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-md">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("how.step1.title")}</h3>
              <p>{t("how.step1.desc")}</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-md">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("how.step2.title")}</h3>
              <p>{t("how.step2.desc")}</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-md">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("how.step3.title")}</h3>
              <p>{t("how.step3.desc")}</p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-md">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("how.step4.title")}</h3>
              <p>{t("how.step4.desc")}</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold mb-4 text-center">{t("how.catering.title")}</h3>
          <p className="text-center mb-6">{t("how.catering.desc")}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center p-3 bg-primary/5 rounded-md">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
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
                  className="text-primary"
                >
                  <path d="M12 2v1"></path>
                  <path d="M12 21v-1"></path>
                  <path d="m4.9 4.9 0.7 0.7"></path>
                  <path d="m18.4 18.4 0.7 0.7"></path>
                  <path d="M2 12h1"></path>
                  <path d="M21 12h-1"></path>
                  <path d="m4.9 19.1 0.7-0.7"></path>
                  <path d="m18.4 5.6 0.7-0.7"></path>
                  <circle cx="12" cy="12" r="4"></circle>
                </svg>
              </div>
              <span>{t("how.catering.option1")}</span>
            </div>
            <div className="flex items-center p-3 bg-primary/5 rounded-md">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
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
                  className="text-primary"
                >
                  <path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.95 1 4.8a.2.2 0 0 1-.2.2h-.5a.8.8 0 0 0-.8.8V19a1 1 0 0 0 1 1h4.3a1 1 0 0 0 1-1v-.8a.2.2 0 0 1 .2-.2h.5a.2.2 0 0 1 .2.2v.8a1 1 0 0 0 1 1"></path>
                  <path d="M6.5 8.3V4.1a1 1 0 0 1 .8-1 .5.5 0 0 1 .7.5v2.2a.5.5 0 0 0 .5.5h2"></path>
                  <path d="M18.5 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 12 8.25c0 2.8.656 3.95 1 4.8a.2.2 0 0 1-.2.2h-.5a.8.8 0 0 0-.8.8V19a1 1 0 0 0 1 1h4.3a1 1 0 0 0 1-1v-.8a.2.2 0 0 1 .2-.2h.5a.2.2 0 0 1 .2.2v.8a1 1 0 0 0 1 1"></path>
                  <path d="M16.2 8.3V4.1a1 1 0 0 1 .8-1 .5.5 0 0 1 .7.5v2.2a.5.5 0 0 0 .5.5h2"></path>
                </svg>
              </div>
              <span>{t("how.catering.option2")}</span>
            </div>
            <div className="flex items-center p-3 bg-primary/5 rounded-md">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
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
                  className="text-primary"
                >
                  <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path>
                  <path d="M7 2v20"></path>
                  <path d="M21 15V2"></path>
                  <path d="M18 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
                  <path d="M18 8a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
                </svg>
              </div>
              <span>{t("how.catering.option3")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
