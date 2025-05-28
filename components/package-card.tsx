"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"

interface PackageCardProps {
  title: string
  price: string
  description: string
  features: string[]
  popular?: boolean
  href: string
}

export function PackageCard({ title, price, description, features, popular = false, href }: PackageCardProps) {
  const { t } = useLanguage()

  return (
    <Card
      className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg ${popular ? "border-primary shadow-md scale-105 z-10" : "border-muted-foreground/20"}`}
    >
      {popular && (
        <div className="absolute top-0 right-0">
          <div className="bg-primary text-primary-foreground py-1 px-4 text-sm font-medium rotate-45 translate-x-5 -translate-y-1">
            {t("packages.popular.tag")}
          </div>
        </div>
      )}
      <CardHeader className="pb-0">
        <div className="text-center">
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="mt-2 text-3xl font-bold">{price}</div>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <ul className="space-y-2">
          {features.map((feature, index) => (
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
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className={`w-full ${popular ? "bg-primary hover:bg-primary/90" : ""}`}>
          <Link href={href}>{t("packages.book")}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
