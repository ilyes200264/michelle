"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

export function WhyChooseUs() {
  const { t } = useLanguage()

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">{t("why.title")}</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">{t("why.subtitle")}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-secondary/20 hover:border-secondary transition-all duration-300 hover:shadow-md">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-secondary"
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
              <h3 className="text-xl font-semibold mb-2">{t("why.fresh.title")}</h3>
              <p>{t("why.fresh.desc")}</p>
            </CardContent>
          </Card>

          <Card className="border-secondary/20 hover:border-secondary transition-all duration-300 hover:shadow-md">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-secondary"
                >
                  <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
                  <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("why.interactive.title")}</h3>
              <p>{t("why.interactive.desc")}</p>
            </CardContent>
          </Card>

          <Card className="border-secondary/20 hover:border-secondary transition-all duration-300 hover:shadow-md">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-secondary"
                >
                  <path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.95 1 4.8a.2.2 0 0 1-.2.2h-.5a.8.8 0 0 0-.8.8V19a1 1 0 0 0 1 1h4.3a1 1 0 0 0 1-1v-.8a.2.2 0 0 1 .2-.2h.5a.2.2 0 0 1 .2.2v.8a1 1 0 0 0 1 1"></path>
                  <path d="M6.5 8.3V4.1a1 1 0 0 1 .8-1 .5.5 0 0 1 .7.5v2.2a.5.5 0 0 0 .5.5h2"></path>
                  <path d="M18.5 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 12 8.25c0 2.8.656 3.95 1 4.8a.2.2 0 0 1-.2.2h-.5a.8.8 0 0 0-.8.8V19a1 1 0 0 0 1 1h4.3a1 1 0 0 0 1-1v-.8a.2.2 0 0 1 .2-.2h.5a.2.2 0 0 1 .2.2v.8a1 1 0 0 0 1 1"></path>
                  <path d="M16.2 8.3V4.1a1 1 0 0 1 .8-1 .5.5 0 0 1 .7.5v2.2a.5.5 0 0 0 .5.5h2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("why.healthy.title")}</h3>
              <p>{t("why.healthy.desc")}</p>
            </CardContent>
          </Card>

          <Card className="border-secondary/20 hover:border-secondary transition-all duration-300 hover:shadow-md">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-secondary"
                >
                  <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("why.custom.title")}</h3>
              <p>{t("why.custom.desc")}</p>
            </CardContent>
          </Card>

          <Card className="border-secondary/20 hover:border-secondary transition-all duration-300 hover:shadow-md">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-secondary"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("why.eco.title")}</h3>
              <p>{t("why.eco.desc")}</p>
            </CardContent>
          </Card>

          <Card className="border-secondary/20 hover:border-secondary transition-all duration-300 hover:shadow-md">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-secondary"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("why.service.title")}</h3>
              <p>{t("why.service.desc")}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
