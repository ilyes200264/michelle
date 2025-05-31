"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "fr" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string, fallback?: string) => string
}

const translations = {
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.packages": "Forfaits",
    "nav.recipes": "Recettes",
    "nav.gallery": "Galerie",
    "nav.events": "Événements",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Voilà Vélo",
    "hero.subtitle": "Service de smoothies pour vos événements corporatifs et privés au Québec",
    "hero.cta.book": "Réserver maintenant",
    "hero.cta.discover": "Découvrir nos forfaits",

    // How it works
    "how.title": "Comment ça fonctionne",
    "how.subtitle": "Offrir des smoothies à votre événement n'a jamais été aussi simple",
    "how.step1.title": "Contactez-nous",
    "how.step1.desc": "Parlez-nous de votre événement et de vos besoins spécifiques",
    "how.step2.title": "Personnalisation",
    "how.step2.desc": "Choisissez vos recettes et options de personnalisation",
    "how.step3.title": "Installation",
    "how.step3.desc": "Nous arrivons et installons tout l'équipement nécessaire",
    "how.step4.title": "Profitez",
    "how.step4.desc": "Détendez-vous pendant que nous servons des smoothies délicieux",
    "how.catering.title": "Service traiteur complet disponible",
    "how.catering.desc":
      "En plus de nos délicieux smoothies, nous proposons un service traiteur complet pour votre événement.",
    "how.catering.option1": "Options végétariennes et véganes",
    "how.catering.option2": "Collations et amuse-bouches",
    "how.catering.option3": "Boissons et cocktails",

    // Smoothies
    "smoothies.title": "Nos Smoothies Populaires",
    "smoothies.viewAll": "Voir toutes nos recettes",

    // Packages
    "packages.title": "Nos Forfaits",
    "packages.subtitle": "Des forfaits adaptés à tous types d'événements avec service traiteur complet disponible",
    "packages.corporate.title": "Événements Corporatifs",
    "packages.corporate.desc": "Parfait pour les réunions d'équipe, lancements de produits et conférences.",
    "packages.private.title": "Événements Privés",
    "packages.private.desc": "Idéal pour les mariages, anniversaires et fêtes familiales.",
    "packages.festivals.title": "Festivals & Grands Événements",
    "packages.festivals.desc": "Solutions pour festivals, salons et événements de grande envergure.",
    "packages.featured.title": "Forfaits Populaires",
    "packages.discovery.title": "Forfait Découverte",
    "packages.discovery.price": "$599",
    "packages.discovery.desc": "Parfait pour les petits événements jusqu'à 50 personnes",
    "packages.popular.title": "Forfait Populaire",
    "packages.popular.price": "$999",
    "packages.popular.desc": "Idéal pour les événements moyens jusqu'à 100 personnes",
    "packages.premium.title": "Forfait Premium",
    "packages.premium.price": "$1499",
    "packages.premium.desc": "Pour les grands événements jusqu'à 200 personnes",
    "packages.feature.hours2": "2 heures de service",
    "packages.feature.hours3": "3 heures de service",
    "packages.feature.hours4": "4 heures de service",
    "packages.feature.recipes3": "3 recettes de smoothies",
    "packages.feature.recipes5": "5 recettes de smoothies",
    "packages.feature.recipes6": "6 recettes de smoothies",
    "packages.feature.equipment": "Équipement et ingrédients inclus",
    "packages.feature.equipmentPremium": "Équipement et ingrédients premium",
    "packages.feature.staff1": "1 membre d'équipe",
    "packages.feature.staff2": "2 membres d'équipe",
    "packages.feature.staff3": "3 membres d'équipe",
    "packages.feature.customBasic": "Personnalisation de base",
    "packages.feature.customFull": "Personnalisation complète",
    "packages.feature.catering": "Service traiteur disponible",
    "packages.feature.cateringFull": "Service traiteur complet",
    "packages.feature.branding": "Branding personnalisé",
    "packages.viewAll": "Voir tous nos forfaits",
    "packages.book": "Réserver ce forfait",
    "packages.popular.tag": "Populaire",

    // Why Choose Us
    "why.title": "Pourquoi choisir Voilà Vélo?",
    "why.subtitle": "Une expérience unique et mémorable pour vos événements, pour tous les âges",
    "why.fresh.title": "Ingrédients frais et locaux",
    "why.fresh.desc":
      "Nous utilisons uniquement des fruits frais et des ingrédients de qualité, en privilégiant les producteurs locaux du Québec.",
    "why.interactive.title": "Expérience interactive",
    "why.interactive.desc":
      "Nos vélos à smoothies créent une animation ludique et engageante qui divertit vos invités tout en les rafraîchissant.",
    "why.healthy.title": "Options saines et délicieuses",
    "why.healthy.desc":
      "Nos recettes sont conçues pour être à la fois nutritives et savoureuses, avec des options adaptées à tous les goûts et régimes alimentaires.",
    "why.custom.title": "Personnalisation complète",
    "why.custom.desc":
      "Nous adaptons nos services à votre événement, avec des options de branding, de décoration et de recettes sur mesure.",
    "why.eco.title": "Éco-responsable",
    "why.eco.desc":
      "Notre concept de vélos à smoothies est écologique et nous utilisons des contenants compostables pour réduire notre impact environnemental.",
    "why.service.title": "Service professionnel",
    "why.service.desc":
      "Notre équipe expérimentée assure un service impeccable et s'occupe de tout, de l'installation au nettoyage, pour que vous puissiez profiter pleinement de votre événement.",

    // Where to find us
    "where.title": "Où nous trouver",
    "where.subtitle": "Retrouvez-nous dans ces événements et festivals à travers le Québec",
    "where.upcoming.title": "Événements à venir",

    // Testimonials
    "testimonials.title": "Ce que nos clients disent",

    // CTA
    "cta.title": "Prêt à offrir une expérience unique à vos invités?",
    "cta.subtitle": "Contactez-nous dès aujourd'hui pour discuter de votre événement et obtenir un devis personnalisé.",
    "cta.button": "Demander un devis",

    // About page
    "about.title": "À propos de Voilà Vélo",
    "about.subtitle": "Une passion pour les smoothies et le bien-être",
    "about.story.title": "Notre histoire",
    "about.story.p1":
      "Voilà Vélo est né de la passion de deux amies pour la santé, le bien-être et l'envie de créer des moments de joie lors d'événements. Inspirées par le concept des vélos à smoothies découvert lors d'un voyage, nous avons décidé d'apporter cette expérience unique au Québec.",
    "about.story.p2":
      "Depuis 2021, nous parcourons la province avec nos vélos à smoothies, transformant chaque événement en une expérience mémorable. Notre mission est simple : offrir des boissons saines et délicieuses tout en créant une animation interactive qui rassemble les gens.",
    "about.story.p3":
      "Aujourd'hui, Voilà Vélo est devenu le leader du service de smoothies pour événements au Québec, avec une équipe passionnée et des milliers de clients satisfaits.",
    "about.founders.alt": "Les fondatrices de Voilà Vélo",
    "about.values.title": "Nos valeurs",
    "about.values.health.title": "Santé et bien-être",
    "about.values.health.desc": "Nous croyons que manger sainement peut être délicieux et amusant.",
    "about.values.sustainability.title": "Durabilité",
    "about.values.sustainability.desc": "Nous privilégions les produits locaux et les pratiques éco-responsables.",
    "about.values.community.title": "Communauté",
    "about.values.community.desc": "Nous créons des moments de partage et de connexion à travers nos smoothies.",
    "about.cta.title": "Envie de nous rencontrer?",
    "about.cta.desc":
      "Contactez-nous pour discuter de votre prochain événement ou venez nous voir lors de nos prochaines apparitions publiques.",
    "about.cta.contact": "Nous contacter",
    "about.cta.events": "Voir nos événements",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.packages": "Packages",
    "nav.recipes": "Recipes",
    "nav.gallery": "Gallery",
    "nav.events": "Events",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Voilà Vélo",
    "hero.subtitle": "Smoothie service for your corporate and private events in Quebec",
    "hero.cta.book": "Book Now",
    "hero.cta.discover": "Discover Our Packages",

    // How it works
    "how.title": "How It Works",
    "how.subtitle": "Offering smoothies at your event has never been easier",
    "how.step1.title": "Contact Us",
    "how.step1.desc": "Tell us about your event and your specific needs",
    "how.step2.title": "Customization",
    "how.step2.desc": "Choose your recipes and customization options",
    "how.step3.title": "Setup",
    "how.step3.desc": "We arrive and set up all the necessary equipment",
    "how.step4.title": "Enjoy",
    "how.step4.desc": "Relax while we serve delicious smoothies",
    "how.catering.title": "Full Catering Service Available",
    "how.catering.desc": "In addition to our delicious smoothies, we offer full catering service for your event.",
    "how.catering.option1": "Vegetarian and vegan options",
    "how.catering.option2": "Snacks and appetizers",
    "how.catering.option3": "Drinks and cocktails",

    // Smoothies
    "smoothies.title": "Our Popular Smoothies",
    "smoothies.viewAll": "View All Recipes",

    // Packages
    "packages.title": "Our Packages",
    "packages.subtitle": "Packages adapted to all types of events with full catering service available",
    "packages.corporate.title": "Corporate Events",
    "packages.corporate.desc": "Perfect for team meetings, product launches, and conferences.",
    "packages.private.title": "Private Events",
    "packages.private.desc": "Ideal for weddings, birthdays, and family celebrations.",
    "packages.festivals.title": "Festivals & Large Events",
    "packages.festivals.desc": "Solutions for festivals, trade shows, and large-scale events.",
    "packages.featured.title": "Popular Packages",
    "packages.discovery.title": "Discovery Package",
    "packages.discovery.price": "$599",
    "packages.discovery.desc": "Perfect for small events up to 50 people",
    "packages.popular.title": "Popular Package",
    "packages.popular.price": "$999",
    "packages.popular.desc": "Ideal for medium events up to 100 people",
    "packages.premium.title": "Premium Package",
    "packages.premium.price": "$1499",
    "packages.premium.desc": "For large events up to 200 people",
    "packages.feature.hours2": "2 hours of service",
    "packages.feature.hours3": "3 hours of service",
    "packages.feature.hours4": "4 hours of service",
    "packages.feature.recipes3": "3 smoothie recipes",
    "packages.feature.recipes5": "5 smoothie recipes",
    "packages.feature.recipes6": "6 smoothie recipes",
    "packages.feature.equipment": "Equipment and ingredients included",
    "packages.feature.equipmentPremium": "Premium equipment and ingredients",
    "packages.feature.staff1": "1 staff member",
    "packages.feature.staff2": "2 staff members",
    "packages.feature.staff3": "3 staff members",
    "packages.feature.customBasic": "Basic customization",
    "packages.feature.customFull": "Full customization",
    "packages.feature.catering": "Catering service available",
    "packages.feature.cateringFull": "Full catering service",
    "packages.feature.branding": "Custom branding",
    "packages.viewAll": "View All Packages",
    "packages.book": "Book This Package",
    "packages.popular.tag": "Popular",

    // Why Choose Us
    "why.title": "Why Choose Voilà Vélo?",
    "why.subtitle": "A unique and memorable experience for your events, for all ages",
    "why.fresh.title": "Fresh and Local Ingredients",
    "why.fresh.desc": "We only use fresh fruits and quality ingredients, prioritizing local Quebec producers.",
    "why.interactive.title": "Interactive Experience",
    "why.interactive.desc":
      "Our smoothie bikes create a fun and engaging animation that entertains your guests while refreshing them.",
    "why.healthy.title": "Healthy and Delicious Options",
    "why.healthy.desc":
      "Our recipes are designed to be both nutritious and tasty, with options adapted to all tastes and dietary requirements.",
    "why.custom.title": "Complete Customization",
    "why.custom.desc": "We adapt our services to your event, with branding, decoration, and custom recipe options.",
    "why.eco.title": "Eco-Friendly",
    "why.eco.desc":
      "Our smoothie bike concept is ecological, and we use compostable containers to reduce our environmental impact.",
    "why.service.title": "Professional Service",
    "why.service.desc":
      "Our experienced team ensures impeccable service and takes care of everything, from setup to cleanup, so you can fully enjoy your event.",

    // Where to find us
    "where.title": "Where You Can Find Us",
    "where.subtitle": "Find us at these events and festivals throughout Quebec",
    "where.upcoming.title": "Upcoming Events",

    // Testimonials
    "testimonials.title": "What Our Clients Say",

    // CTA
    "cta.title": "Ready to offer a unique experience to your guests?",
    "cta.subtitle": "Contact us today to discuss your event and get a personalized quote.",
    "cta.button": "Request a Quote",

    // About page
    "about.title": "About Voilà Vélo",
    "about.subtitle": "A passion for smoothies and well-being",
    "about.story.title": "Our Story",
    "about.story.p1":
      "Voilà Vélo was born from the passion of two friends for health, well-being, and the desire to create moments of joy at events. Inspired by the concept of smoothie bikes discovered during a trip, we decided to bring this unique experience to Quebec.",
    "about.story.p2":
      "Since 2021, we have been traveling the province with our smoothie bikes, transforming each event into a memorable experience. Our mission is simple: to offer healthy and delicious drinks while creating an interactive animation that brings people together.",
    "about.story.p3":
      "Today, Voilà Vélo has become the leader in smoothie services for events in Quebec, with a passionate team and thousands of satisfied customers.",
    "about.founders.alt": "The founders of Voilà Vélo",
    "about.values.title": "Our Values",
    "about.values.health.title": "Health and Well-being",
    "about.values.health.desc": "We believe that eating healthy can be delicious and fun.",
    "about.values.sustainability.title": "Sustainability",
    "about.values.sustainability.desc": "We prioritize local products and eco-friendly practices.",
    "about.values.community.title": "Community",
    "about.values.community.desc": "We create moments of sharing and connection through our smoothies.",
    "about.cta.title": "Want to meet us?",
    "about.cta.desc": "Contact us to discuss your next event or come see us at our upcoming public appearances.",
    "about.cta.contact": "Contact Us",
    "about.cta.events": "See Our Events",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")

  const t = (key: string, fallback?: string): string => {
    return translations[language][key] || fallback || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
