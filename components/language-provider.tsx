"use client"

import React, { createContext, useContext, useState, type ReactNode } from "react"

type Language = 'fr' | 'en'

type Translation = {
  fr: string
  en: string
}

type Translations = {
  [key: string]: Translation
}

const translations: Translations = {
  about: {
    fr: "À propos",
    en: "About",
  },
  packages: {
    fr: "Forfaits",
    en: "Packages",
  },
  events: {
    fr: "Événements",
    en: "Events",
  },
  contact: {
    fr: "Contact",
    en: "Contact",
  },
  bookNow: {
    fr: "Réserver maintenant",
    en: "Book Now",
  },
  heroTitle: {
    fr: "Pédalez pour vos smoothies !",
    en: "Pedal for your smoothies!",
  },
  heroDescription: {
    fr: "Découvrez une expérience unique et écologique. Nos vélos à smoothie apportent du fun et de la santé à vos événements.",
    en: "Discover a unique and eco-friendly experience. Our smoothie bikes bring fun and health to your events.",
  },
  discoverPackages: {
    fr: "Découvrir nos forfaits",
    en: "Discover our packages",
  },
  colorfulSmoothieBikes: {
    fr: "Vélos à smoothie colorés",
    en: "Colorful smoothie bikes",
  },
  aboutUs: {
    fr: "À propos de nous",
    en: "About us",
  },
  whoWeAre: {
    fr: "Qui sommes-nous ?",
    en: "Who are we?",
  },
  aboutDescription: {
    fr: "Frooshy est né d'une passion pour les smoothies sains et l'activité physique. Nous proposons une expérience unique où vos invités peuvent créer leurs propres smoothies en pédalant sur nos vélos spécialement conçus.",
    en: "Frooshy was born from a passion for healthy smoothies and physical activity. We offer a unique experience where your guests can create their own smoothies by pedaling on our specially designed bikes.",
  },
  ourTeam: {
    fr: "Notre équipe",
    en: "Our team",
  },
  eco: {
    fr: "Écologique",
    en: "Eco-friendly",
  },
  ecoDescription: {
    fr: "Nos vélos fonctionnent sans électricité, uniquement avec l'énergie humaine.",
    en: "Our bikes work without electricity, only with human energy.",
  },
  fun: {
    fr: "Amusant",
    en: "Fun",
  },
  funDescription: {
    fr: "Une activité ludique qui crée des souvenirs mémorables pour vos invités.",
    en: "A fun activity that creates memorable memories for your guests.",
  },
  healthy: {
    fr: "Sain",
    en: "Healthy",
  },
  healthyDescription: {
    fr: "Des smoothies frais et nutritifs préparés avec des ingrédients de qualité.",
    en: "Fresh and nutritious smoothies prepared with quality ingredients.",
  },
  ourPackages: {
    fr: "Nos forfaits",
    en: "Our packages",
  },
  chooseExperience: {
    fr: "Choisissez votre expérience",
    en: "Choose your experience",
  },
  packagesDescription: {
    fr: "Nous proposons différents forfaits adaptés à tous types d'événements, des fêtes d'anniversaire aux événements d'entreprise.",
    en: "We offer different packages suitable for all types of events, from birthday parties to corporate events.",
  },
  soloPackage: {
    fr: "Forfait Solo",
    en: "Solo Package",
  },
  duoPackage: {
    fr: "Forfait Duo",
    en: "Duo Package",
  },
  groupPackage: {
    fr: "Forfait Groupe",
    en: "Group Package",
  },
  oneSmoothieBike: {
    fr: "1 vélo à smoothie",
    en: "1 smoothie bike",
  },
  twoSmoothieBikes: {
    fr: "2 vélos à smoothie",
    en: "2 smoothie bikes",
  },
  fiveSmoothieBikes: {
    fr: "5 vélos à smoothie",
    en: "5 smoothie bikes",
  },
  freshFruit50: {
    fr: "Fruits frais pour 50 smoothies",
    en: "Fresh fruit for 50 smoothies",
  },
  freshFruit100: {
    fr: "Fruits frais pour 100 smoothies",
    en: "Fresh fruit for 100 smoothies",
  },
  freshFruit250: {
    fr: "Fruits frais pour 250 smoothies",
    en: "Fresh fruit for 250 smoothies",
  },
  oneHost: {
    fr: "1 animateur",
    en: "1 host",
  },
  twoHosts: {
    fr: "2 animateurs",
    en: "2 hosts",
  },
  threeHosts: {
    fr: "3 animateurs",
    en: "3 hosts",
  },
  twoHours: {
    fr: "2 heures d'animation",
    en: "2 hours of animation",
  },
  threeHours: {
    fr: "3 heures d'animation",
    en: "3 hours of animation",
  },
  fourHours: {
    fr: "4 heures d'animation",
    en: "4 hours of animation",
  },
  event: {
    fr: "événement",
    en: "event",
  },
  book: {
    fr: "Réserver",
    en: "Book",
  },
  learnMore: {
    fr: "En savoir plus",
    en: "Learn more",
  },
  ourEvents: {
    fr: "Nos événements",
    en: "Our events",
  },
  perfectForAllOccasions: {
    fr: "Parfait pour toutes les occasions",
    en: "Perfect for all occasions",
  },
  eventsDescription: {
    fr: "Nos vélos à smoothie s'adaptent à tous types d'événements, apportant une touche d'originalité et de fun.",
    en: "Our smoothie bikes adapt to all types of events, bringing a touch of originality and fun.",
  },
  corporateEvents: {
    fr: "Événements d'entreprise",
    en: "Corporate events",
  },
  corporateEventsDescription: {
    fr: "Idéal pour les team buildings, salons professionnels et événements corporate.",
    en: "Ideal for team buildings, trade shows and corporate events.",
  },
  privateParties: {
    fr: "Fêtes privées",
    en: "Private parties",
  },
  privatePartiesDescription: {
    fr: "Parfait pour les anniversaires, mariages et autres célébrations.",
    en: "Perfect for birthdays, weddings and other celebrations.",
  },
  festivalsMarkets: {
    fr: "Festivals & marchés",
    en: "Festivals & markets",
  },
  festivalsMarketsDescription: {
    fr: "Une attraction unique pour les festivals, marchés et événements publics.",
    en: "A unique attraction for festivals, markets and public events.",
  },
  schoolsUniversities: {
    fr: "Écoles & universités",
    en: "Schools & universities",
  },
  schoolsUniversitiesDescription: {
    fr: "Sensibilisation à la santé et à l'écologie de façon ludique.",
    en: "Health and ecology awareness in a fun way.",
  },
  brandActivations: {
    fr: "Activations de marque",
    en: "Brand activations",
  },
  brandActivationsDescription: {
    fr: "Renforcez votre image de marque avec une expérience mémorable.",
    en: "Strengthen your brand image with a memorable experience.",
  },
  sportingEvents: {
    fr: "Événements sportifs",
    en: "Sporting events",
  },
  sportingEventsDescription: {
    fr: "Parfait pour les courses, tournois et autres événements sportifs.",
    en: "Perfect for races, tournaments and other sporting events.",
  },
  readyToPedal: {
    fr: "Prêt à pédaler ?",
    en: "Ready to pedal?",
  },
  contactDescription: {
    fr: "Contactez-nous pour réserver vos vélos à smoothie ou pour plus d'informations.",
    en: "Contact us to book your smoothie bikes or for more information.",
  },
  openingHours: {
    fr: "Horaires d'ouverture",
    en: "Opening hours",
  },
  mondayFriday: {
    fr: "Lundi - Vendredi",
    en: "Monday - Friday",
  },
  saturday: {
    fr: "Samedi",
    en: "Saturday",
  },
  sunday: {
    fr: "Dimanche",
    en: "Sunday",
  },
  closed: {
    fr: "Fermé",
    en: "Closed",
  },
  firstName: {
    fr: "Prénom",
    en: "First name",
  },
  lastName: {
    fr: "Nom",
    en: "Last name",
  },
  message: {
    fr: "Message",
    en: "Message",
  },
  yourMessageHere: {
    fr: "Votre message ici...",
    en: "Your message here...",
  },
  send: {
    fr: "Envoyer",
    en: "Send",
  },
  footerDescription: {
    fr: "Des vélos à smoothie pour des événements uniques et écologiques.",
    en: "Smoothie bikes for unique and eco-friendly events.",
  },
  quickLinks: {
    fr: "Liens rapides",
    en: "Quick links",
  },
  legal: {
    fr: "Légal",
    en: "Legal",
  },
  termsConditions: {
    fr: "Conditions générales",
    en: "Terms & conditions",
  },
  privacyPolicy: {
    fr: "Politique de confidentialité",
    en: "Privacy policy",
  },
  legalNotice: {
    fr: "Mentions légales",
    en: "Legal notice",
  },
  followUs: {
    fr: "Suivez-nous",
    en: "Follow us",
  },
  allRightsReserved: {
    fr: "Tous droits réservés.",
    en: "All rights reserved.",
  },
  packageDetails: {
    fr: "Détails du forfait",
    en: "Package details",
  },
  packageIncludes: {
    fr: "Ce forfait comprend",
    en: "This package includes",
  },
  bookThisPackage: {
    fr: "Réserver ce forfait",
    en: "Book this package",
  },
  backToPackages: {
    fr: "Retour aux forfaits",
    en: "Back to packages",
  },
  additionalOptions: {
    fr: "Options supplémentaires",
    en: "Additional options",
  },
  extraHour: {
    fr: "Heure supplémentaire",
    en: "Extra hour",
  },
  customFruitSelection: {
    fr: "Sélection de fruits personnalisée",
    en: "Custom fruit selection",
  },
  decorationPackage: {
    fr: "Forfait décoration",
    en: "Decoration package",
  },
  eventDate: {
    fr: "Date de l'événement",
    en: "Event date",
  },
  eventLocation: {
    fr: "Lieu de l'événement",
    en: "Event location",
  },
  enterEventLocation: {
    fr: "Entrez le lieu de l'événement",
    en: "Enter event location",
  },
  corporateEventExample: {
    fr: "Exemple d'événement d'entreprise avec nos vélos à smoothie",
    en: "Corporate event example with our smoothie bikes",
  },
  backToHome: {
    fr: "Retour à l'accueil",
    en: "Back to home",
  },
  smoothieRecipes: {
    fr: "Recettes de Smoothies",
    en: "Smoothie Recipes",
  },
  recipesDescription: {
    fr: "Découvrez nos délicieuses recettes de smoothies, faciles à préparer et pleines de saveurs. Parfaites pour être réalisées avec nos vélos à smoothie lors de vos événements!",
    en: "Discover our delicious smoothie recipes, easy to prepare and full of flavor. Perfect to be made with our smoothie bikes at your events!",
  },
  fruitSmoothies: {
    fr: "Smoothies aux fruits",
    en: "Fruit Smoothies",
  },
  vegetableSmoothies: {
    fr: "Smoothies aux légumes",
    en: "Vegetable Smoothies",
  },
  specialSmoothies: {
    fr: "Smoothies spéciaux",
    en: "Special Smoothies",
  },
  tropicalParadise: {
    fr: "Paradis Tropical",
    en: "Tropical Paradise",
  },
  tropicalParadiseDescription: {
    fr: "Un smoothie exotique aux saveurs de mangue, banane et ananas",
    en: "An exotic smoothie with mango, banana and pineapple flavors",
  },
  ingredients: {
    fr: "Ingrédients",
    en: "Ingredients",
  },
  banana: {
    fr: "banane",
    en: "banana",
  },
  mango: {
    fr: "mangue",
    en: "mango",
  },
  pineapple: {
    fr: "ananas",
    en: "pineapple",
  },
  coconutMilk: {
    fr: "lait de coco",
    en: "coconut milk",
  },
  iceOptional: {
    fr: "glaçons (optionnel)",
    en: "ice (optional)",
  },
  tryThisRecipe: {
    fr: "Essayer cette recette",
    en: "Try this recipe",
  },
  berryBlast: {
    fr: "Explosion de Baies",
    en: "Berry Blast",
  },
  berryBlastDescription: {
    fr: "Un smoothie riche en antioxydants avec un mélange de baies fraîches",
    en: "An antioxidant-rich smoothie with a mix of fresh berries",
  },
  strawberries: {
    fr: "fraises",
    en: "strawberries",
  },
  blueberries: {
    fr: "myrtilles",
    en: "blueberries",
  },
  raspberries: {
    fr: "framboises",
    en: "raspberries",
  },
  yogurt: {
    fr: "yaourt nature",
    en: "plain yogurt",
  },
  honeySpoon: {
    fr: "cuillère de miel",
    en: "spoon of honey",
  },
  greenAppleFresh: {
    fr: "Fraîcheur Pomme Verte",
    en: "Green Apple Fresh",
  },
  greenAppleFreshDescription: {
    fr: "Un smoothie rafraîchissant à base de pommes vertes et de concombre",
    en: "A refreshing smoothie made with green apples and cucumber",
  },
  greenApples: {
    fr: "pommes vertes",
    en: "green apples",
  },
  cucumber: {
    fr: "concombre",
    en: "cucumber",
  },
  lemonJuice: {
    fr: "jus de citron",
    en: "lemon juice",
  },
  mintLeaves: {
    fr: "feuilles de menthe",
    en: "mint leaves",
  },
  water: {
    fr: "eau",
    en: "water",
  },
  greenDetox: {
    fr: "Détox Verte",
    en: "Green Detox",
  },
  greenDetoxDescription: {
    fr: "Un smoothie détoxifiant riche en légumes verts et en nutriments",
    en: "A detoxifying smoothie rich in green vegetables and nutrients",
  },
  kaleLeaves: {
    fr: "feuilles de chou kale",
    en: "kale leaves",
  },
  celeryStalk: {
    fr: "branche de céleri",
    en: "celery stalk",
  },
  greenApple: {
    fr: "pomme verte",
    en: "green apple",
  },
  gingerPiece: {
    fr: "morceau de gingembre",
    en: "piece of ginger",
  },
  carrotGinger: {
    fr: "Carotte-Gingembre",
    en: "Carrot-Ginger",
  },
  carrotGingerDescription: {
    fr: "Un smoothie énergisant à base de carottes et de gingembre",
    en: "An energizing smoothie made with carrots and ginger",
  },
  carrots: {
    fr: "carottes",
    en: "carrots",
  },
  orange: {
    fr: "orange",
    en: "orange",
  },
  turmericPiece: {
    fr: "morceau de curcuma",
    en: "piece of turmeric",
  },
  beetrootBoost: {
    fr: "Boost à la Betterave",
    en: "Beetroot Boost",
  },
  beetrootBoostDescription: {
    fr: "Un smoothie revitalisant à la betterave, parfait après l'exercice",
    en: "A revitalizing beetroot smoothie, perfect after exercise",
  },
  beetroot: {
    fr: "betterave",
    en: "beetroot",
  },
  carrot: {
    fr: "carotte",
    en: "carrot",
  },
  apple: {
    fr: "pomme",
    en: "apple",
  },
  proteinPower: {
    fr: "Power Protéiné",
    en: "Protein Power",
  },
  proteinPowerDescription: {
    fr: "Un smoothie riche en protéines, idéal pour la récupération musculaire",
    en: "A protein-rich smoothie, ideal for muscle recovery",
  },
  proteinPowder: {
    fr: "poudre de protéine",
    en: "protein powder",
  },
  peanutButterSpoon: {
    fr: "cuillère de beurre de cacahuète",
    en: "spoon of peanut butter",
  },
  oats: {
    fr: "cuillère de flocons d'avoine",
    en: "spoon of oats",
  },
  almondMilk: {
    fr: "lait d'amande",
    en: "almond milk",
  },
  chocolateDelight: {
    fr: "Délice Chocolaté",
    en: "Chocolate Delight",
  },
  chocolateDelightDescription: {
    fr: "Un smoothie gourmand au cacao et à l'avocat, riche et onctueux",
    en: "A gourmet smoothie with cocoa and avocado, rich and creamy",
  },
  cacaoPowderSpoons: {
    fr: "cuillères de poudre de cacao",
    en: "spoons of cacao powder",
  },
  avocadoHalf: {
    fr: "demi-avocat",
    en: "half avocado",
  },
  energyBooster: {
    fr: "Booster d'Énergie",
    en: "Energy Booster",
  },
  energyBoosterDescription: {
    fr: "Un smoothie énergisant au café et à la banane pour bien commencer la journée",
    en: "An energizing coffee and banana smoothie to start the day right",
  },
  coffeeShotEspresso: {
    fr: "shot d'espresso",
    en: "shot of espresso",
  },
  datesFruit: {
    fr: "dattes",
    en: "dates",
  },
  cinnamonPinch: {
    fr: "pincée de cannelle",
    en: "pinch of cinnamon",
  },
  oatMilk: {
    fr: "lait d'avoine",
    en: "oat milk",
  },
  createYourOwn: {
    fr: "Créez votre propre smoothie",
    en: "Create your own smoothie",
  },
  createYourOwnDescription: {
    fr: "Suivez ces trois étapes simples pour créer votre propre recette de smoothie personnalisée",
    en: "Follow these three simple steps to create your own custom smoothie recipe",
  },
  step1: {
    fr: "Étape 1: Choisissez vos fruits",
    en: "Step 1: Choose your fruits",
  },
  step1Description: {
    fr: "Sélectionnez 2-3 fruits comme base de votre smoothie",
    en: "Select 2-3 fruits as the base of your smoothie",
  },
  step2: {
    fr: "Étape 2: Ajoutez un liquide",
    en: "Step 2: Add a liquid",
  },
  step2Description: {
    fr: "Choisissez un liquide pour obtenir la consistance parfaite",
    en: "Choose a liquid to get the perfect consistency",
  },
  step3: {
    fr: "Étape 3: Les extras",
    en: "Step 3: The extras",
  },
  step3Description: {
    fr: "Ajoutez des superaliments ou des édulcorants pour plus de saveur",
    en: "Add superfoods or sweeteners for more flavor",
  },
  berries: {
    fr: "baies",
    en: "berries",
  },
  honey: {
    fr: "miel",
    en: "honey",
  },
  chia: {
    fr: "graines de chia",
    en: "chia seeds",
  },
  flaxseeds: {
    fr: "graines de lin",
    en: "flaxseeds",
  },
  cinnamon: {
    fr: "cannelle",
    en: "cinnamon",
  },
  shareYourRecipe: {
    fr: "Partagez votre recette",
    en: "Share your recipe",
  },
  photoGallery: {
    fr: "Galerie de Photos",
    en: "Photo Gallery",
  },
  galleryDescription: {
    fr: "Découvrez nos vélos à smoothie en action lors de différents événements. Des festivals aux événements d'entreprise, nos vélos apportent toujours joie et fraîcheur!",
    en: "Discover our smoothie bikes in action at various events. From festivals to corporate events, our bikes always bring joy and freshness!",
  },
  smoothieBikeGreen: {
    fr: "Vélo à Smoothie Vert",
    en: "Green Smoothie Bike",
  },
  smoothieBikeGreenDescription: {
    fr: "Notre vélo à smoothie vert avec son design d'orange fraîche, parfait pour les événements estivaux",
    en: "Our green smoothie bike with its fresh orange design, perfect for summer events",
  },
  corporateEvent: {
    fr: "Événement d'Entreprise",
    en: "Corporate Event",
  },
  corporateEventDescription: {
    fr: "Nos vélos à smoothie colorés lors d'un événement d'entreprise dans un espace moderne",
    en: "Our colorful smoothie bikes at a corporate event in a modern space",
  },
  duoPackageEvent: {
    fr: "Forfait Duo en Action",
    en: "Duo Package in Action",
  },
  duoPackageEventDescription: {
    fr: "Deux de nos vélos à smoothie utilisés lors d'un événement avec notre forfait Duo",
    en: "Two of our smoothie bikes used at an event with our Duo package",
  },
  freshFruits: {
    fr: "Fruits Frais",
    en: "Fresh Fruits",
  },
  freshFruitsDescription: {
    fr: "Nous utilisons uniquement des fruits frais et de qualité pour nos smoothies",
    en: "We only use fresh, quality fruits for our smoothies",
  },
  smoothiePreparation: {
    fr: "Préparation de Smoothie",
    en: "Smoothie Preparation",
  },
  smoothiePreparationDescription: {
    fr: "Un smoothie à la mangue fraîchement préparé, prêt à être dégusté",
    en: "A freshly prepared mango smoothie, ready to be enjoyed",
  },
  ecoFriendlyApproach: {
    fr: "Approche Écologique",
    en: "Eco-Friendly Approach",
  },
  ecoFriendlyApproachDescription: {
    fr: "Notre engagement pour une approche zéro déchet avec des ingrédients naturels",
    en: "Our commitment to a zero-waste approach with natural ingredients",
  },
  groupEvent: {
    fr: "Événement de Groupe",
    en: "Group Event",
  },
  groupEventDescription: {
    fr: "Notre forfait Groupe en action, parfait pour les grands événements et festivals",
    en: "Our Group package in action, perfect for large events and festivals",
  },
  soloPackageEvent: {
    fr: "Forfait Solo en Action",
    en: "Solo Package in Action",
  },
  soloPackageEventDescription: {
    fr: "Notre forfait Solo, idéal pour les petits événements et fêtes privées",
    en: "Our Solo package, ideal for small events and private parties",
  },
  festivalEvent: {
    fr: "Événement Festival",
    en: "Festival Event",
  },
  festivalEventDescription: {
    fr: "Nos vélos à smoothie lors d'un festival d'été, apportant fraîcheur et fun",
    en: "Our smoothie bikes at a summer festival, bringing freshness and fun",
  },
  wantToSeeMore: {
    fr: "Vous voulez voir plus de photos de nos événements?",
    en: "Want to see more photos of our events?",
  },
  followOnInstagram: {
    fr: "Suivez-nous sur Instagram",
    en: "Follow us on Instagram",
  },
  contactForMorePhotos: {
    fr: "Contactez-nous pour plus de photos",
    en: "Contact us for more photos",
  },
  newExperience: {
    fr: "Nouvelle expérience",
    en: "New experience",
  },
  ecoFriendly: {
    fr: "Écologique",
    en: "Eco-friendly",
  },
  zeroCarbonFootprint: {
    fr: "Zéro empreinte carbone",
    en: "Zero carbon footprint",
  },
  eventsPerYear: {
    fr: "Événements par an",
    en: "Events per year",
  },
  happyCustomers: {
    fr: "Clients satisfaits",
    en: "Happy customers",
  },
  smoothieBikes: {
    fr: "Vélos à smoothie",
    en: "Smoothie bikes",
  },
  uniqueRecipes: {
    fr: "Recettes uniques",
    en: "Unique recipes",
  },
  eventsPageDescription: {
    fr: "Découvrez les différents types d'événements pour lesquels nos vélos à smoothie sont parfaits. De l'entreprise aux festivals, nous nous adaptons à toutes les occasions!",
    en: "Discover the different types of events for which our smoothie bikes are perfect. From corporate to festivals, we adapt to all occasions!",
  },
  corporateEventsDetailedDescription: {
    fr: "Nos vélos à smoothie apportent une touche d'originalité à vos événements d'entreprise. Parfaits pour les team buildings, les salons professionnels ou les lancements de produits.",
    en: "Our smoothie bikes bring a touch of originality to your corporate events. Perfect for team buildings, trade shows or product launches.",
  },
  teamBuilding: {
    fr: "Team building",
    en: "Team building",
  },
  productLaunches: {
    fr: "Lancements de produits",
    en: "Product launches",
  },
  tradeShows: {
    fr: "Salons professionnels",
    en: "Trade shows",
  },
  privatePartiesDetailedDescription: {
    fr: "Rendez vos fêtes privées inoubliables avec nos vélos à smoothie. Idéals pour les anniversaires, mariages, ou toute autre célébration spéciale.",
    en: "Make your private parties unforgettable with our smoothie bikes. Ideal for birthdays, weddings, or any other special celebration.",
  },
  birthdays: {
    fr: "Anniversaires",
    en: "Birthdays",
  },
  weddings: {
    fr: "Mariages",
    en: "Weddings",
  },
  familyReunions: {
    fr: "Réunions de famille",
    en: "Family reunions",
  },
  festivalsMarketsDetailedDescription: {
    fr: "Attirez l'attention sur votre stand avec nos vélos à smoothie colorés. Parfaits pour les festivals, marchés et événements publics.",
    en: "Draw attention to your booth with our colorful smoothie bikes. Perfect for festivals, markets and public events.",
  },
  musicFestivals: {
    fr: "Festivals de musique",
    en: "Music festivals",
  },
  farmersMarkets: {
    fr: "Marchés fermiers",
    en: "Farmers markets",
  },
  communityEvents: {
    fr: "Événements communautaires",
    en: "Community events",
  },
  schoolsUniversitiesDetailedDescription: {
    fr: "Sensibilisez les jeunes à la santé et à l'écologie de façon ludique. Nos vélos à smoothie sont parfaits pour les écoles, universités et campus.",
    en: "Raise awareness about health and ecology in a fun way. Our smoothie bikes are perfect for schools, universities and campuses.",
  },
  healthWorkshops: {
    fr: "Ateliers santé",
    en: "Health workshops",
  },
  campusEvents: {
    fr: "Événements de campus",
    en: "Campus events",
  },
  orientationDays: {
    fr: "Journées d'orientation",
    en: "Orientation days",
  },
  brandActivationsDetailedDescription: {
    fr: "Renforcez votre image de marque avec une expérience mémorable. Nos vélos à smoothie peuvent être personnalisés aux couleurs de votre marque.",
    en: "Strengthen your brand image with a memorable experience. Our smoothie bikes can be customized to your brand colors.",
  },
  productPromotions: {
    fr: "Promotions de produits",
    en: "Product promotions",
  },
  brandAwareness: {
    fr: "Notoriété de marque",
    en: "Brand awareness",
  },
  experientialMarketing: {
    fr: "Marketing expérientiel",
    en: "Experiential marketing",
  },
  sportingEventsDetailedDescription: {
    fr: "Offrez une expérience rafraîchissante lors de vos événements sportifs. Nos vélos à smoothie sont parfaits pour les marathons, tournois et courses caritatives.",
    en: "Offer a refreshing experience at your sporting events. Our smoothie bikes are perfect for marathons, tournaments and charity runs.",
  },
  marathons: {
    fr: "Marathons",
    en: "Marathons",
  },
  sportsTournaments: {
    fr: "Tournois sportifs",
    en: "Sports tournaments",
  },
  charityRuns: {
    fr: "Courses caritatives",
    en: "Charity runs",
  },
  readyToBookEvent: {
    fr: "Prêt à réserver pour votre événement ?",
    en: "Ready to book for your event?",
  },
  readyToBookEventDescription: {
    fr: "Contactez-nous dès aujourd'hui pour discuter de vos besoins spécifiques et obtenir un devis personnalisé pour votre prochain événement.",
    en: "Contact us today to discuss your specific needs and get a personalized quote for your next event.",
  },
  contactUsNow: {
    fr: "Contactez-nous maintenant",
    en: "Contact us now",
  },
  viewPackages: {
    fr: "Voir nos forfaits",
    en: "View our packages",
  },
  pedalForFun: {
    fr: "Pédalez pour le plaisir !",
    en: "Pedal for fun!",
  },
  healthyAndFun: {
    fr: "Santé et plaisir en un tour de pédale",
    en: "Health and fun in one pedal turn",
  },
  littleKokiPackage: {
    fr: "Le forfait Petit Koki",
    en: "Little Koki Package"
  },
  kidsActivity: {
    fr: "L'activité préférée des enfants !",
    en: "Kids' favorite activity!"
  },
  littleKokiDescription: {
    fr: "Parfait pour les fêtes d'anniversaire, les remises de diplômes de garderie ou les festivals familiaux, ce forfait transforme chaque événement en une explosion de plaisir, de rires et de saveurs !",
    en: "Perfect for birthday parties, daycare graduations, or family festivals, this package turns every event into a burst of fun, laughter, and flavor!"
  },
  twoOptions: {
    fr: "Deux options selon vos besoins",
    en: "Two options to fit your needs"
  },
  kokiOption1: {
    fr: "Option 1: 25 délicieux smoothies + 1 heure d'animation vitaminée",
    en: "Option 1: 25 delicious smoothies + 1 hour of high-energy entertainment"
  },
  kokiOption2: {
    fr: "Option 2: 50 délicieux smoothies + 2 heures d'animation vitaminée",
    en: "Option 2: 50 delicious smoothies + 2 hours of high-energy entertainment"
  },
  chooseBasedOnChildren: {
    fr: "(Choisissez selon le nombre d'enfants présents)",
    en: "(Choose based on the number of children attending)"
  },
  kidFriendlyBike: {
    fr: "1 vélo à smoothie adapté aux enfants (de 5 à 10 ans) — ils pédalent, ils mélangent, ils s'amusent !",
    en: "1 kid-friendly blender bike (suitable for ages 5 to 10) — they pedal, they blend, they have a blast!"
  },
  freshColorfulSmoothies: {
    fr: "Smoothies frais et colorés — préparés sur place avec énergie et joie !",
    en: "Fresh and colorful smoothies — made on-site with energy and joy!"
  },
  livelyEntertainment: {
    fr: "Animation dynamique — musique et ambiance festive inoubliable !",
    en: "Lively entertainment — music, and an unforgettable festive atmosphere!"
  },
  giveKidsHealthyFun: {
    fr: "Offrez aux enfants un moment sain, actif et totalement amusant !",
    en: "Give kids a healthy, active, and totally fun experience!"
  },
  popSoloPackage: {
    fr: "Le forfait Pop Solo",
    en: "Pop Solo Package"
  },
  hitWithCrowds: {
    fr: "Un succès garanti auprès des ados, adultes et familles !",
    en: "A hit with teens, adults, and family crowds!"
  },
  popSoloDescription: {
    fr: "Parfait pour les événements scolaires, fêtes d'entreprise, festivals communautaires ou toute occasion où vous souhaitez allier santé et ambiance festive !",
    en: "Perfect for school events, office parties, community festivals, or any gathering where you want to mix health with high vibes!"
  },
  soloOption1: {
    fr: "Option 1: 50 délicieux smoothies + 1,5 heures d'animation dynamique",
    en: "Option 1: 50 delicious smoothies + 1.5 hours of high-energy entertainment"
  },
  soloOption2: {
    fr: "Option 2: 75 délicieux smoothies + 2,5 heures d'animation dynamique",
    en: "Option 2: 75 delicious smoothies + 2.5 hours of high-energy entertainment"
  },
  chooseBasedOnCrowd: {
    fr: "(Choisissez selon la taille de votre groupe)",
    en: "(Choose based on the size of your crowd)"
  },
  adultFriendlyBike: {
    fr: "1 vélo à smoothie adapté aux adultes — ils pédalent, ils mélangent, ils s'éclatent !",
    en: "1 adult-friendly blender bike (suitable for teens and adults) — they pedal, they blend, they POP with fun!"
  },
  giveGuestsMemorableExperience: {
    fr: "Offrez à vos invités une expérience saine, active et inoubliable dont ils parleront longtemps !",
    en: "Give your guests a healthy, active, and unforgettable experience they'll be talking about long after the last sip!"
  },
  doubleTheFun: {
    fr: "Double le plaisir",
    en: "Double the Fun"
  },
  twiceBikesTwiceFun: {
    fr: "Deux fois plus de vélos, deux fois plus de plaisir, deux fois plus d'impact !",
    en: "Twice the bikes, twice the fun, twice the impact!"
  },
  perfectFor: {
    fr: "Parfait pour",
    en: "Perfect for"
  },
  communityFestivals: {
    fr: "Festivals communautaires",
    en: "Community festivals"
  },
  nonProfitFairs: {
    fr: "Foires à but non lucratif",
    en: "Non-profit fairs"
  },
  grandOpenings: {
    fr: "Inaugurations",
    en: "Grand openings"
  },
  neighborhoodParties: {
    fr: "Fêtes de quartier",
    en: "Neighborhood block parties"
  },
  schoolOpenHouses: {
    fr: "Portes ouvertes d'écoles",
    en: "School open houses"
  },
  universityOpenDays: {
    fr: "Journées portes ouvertes universitaires",
    en: "University Open Days"
  },
  shoppingCenterEvents: {
    fr: "Événements de centres commerciaux",
    en: "Shopping center events"
  },
  conferencesExhibitions: {
    fr: "Conférences et salons",
    en: "Conferences and exhibitions"
  },
  christmasParties: {
    fr: "Fêtes de Noël",
    en: "Christmas parties"
  },
  cocktailParties: {
    fr: "Soirées cocktail",
    en: "Cocktail parties"
  },
  healthWellnessFairs: {
    fr: "Salons santé et bien-être",
    en: "Health & wellness fairs"
  },
  awarenessCampaigns: {
    fr: "Campagnes de sensibilisation",
    en: "Public awareness campaigns"
  },
  familyFestivals: {
    fr: "Festivals familiaux",
    en: "Family festivals"
  },
  employeeAppreciation: {
    fr: "Journées d'appréciation des employés",
    en: "Employee appreciation days"
  },
  schoolCelebrations: {
    fr: "Célébrations scolaires",
    en: "School celebrations"
  },
  threeOptions: {
    fr: "Trois options selon vos besoins",
    en: "Three options to fit your needs"
  },
  doubleOption1: {
    fr: "Option 1: 100 délicieux smoothies + 2 heures d'animation énergique",
    en: "Option 1: 100 delicious smoothies + 2 hours of high-energy entertainment"
  },
  doubleOption2: {
    fr: "Option 2: 200 délicieux smoothies + 3 heures d'animation énergique",
    en: "Option 2: 200 delicious smoothies + 3 hours of high-energy entertainment"
  },
  doubleOption3: {
    fr: "Option 3: 300 délicieux smoothies + 4 heures d'animation énergique",
    en: "Option 3: 300 delicious smoothies + 4 hours of high-energy entertainment"
  },
  twoAdultBikes: {
    fr: "2 vélos à smoothie pour adultes — les participants pédalent ensemble, mélangent et créent une ambiance unique !",
    en: "2 adult-friendly blender bikes — guests pedal together, blend together, and bring the fun to life!"
  },
  perfectPackageForCrowds: {
    fr: "Le forfait idéal pour attirer les foules, créer des souvenirs durables et promouvoir un mode de vie actif et sain.",
    en: "The perfect package to draw crowds, create memorable experiences, and promote healthy, active living."
  },
  readySetBlend: {
    fr: "Prêts, Partez, Mixez !",
    en: "Ready, Set, Blend!"
  },
  readySetBlendDescription: {
    fr: "Offrez à vos employés une expérience unique où compétition et nutrition vont de pair ! Ce forfait spécial est conçu pour briser la glace, renforcer les liens et animer l'atmosphère de votre événement.",
    en: "Get your team racing — not just for fun, but for the title of fastest blender on the floor! This competition-style smoothie bike package is the perfect way to break the ice, spark laughter, and create unforgettable memories."
  },
  corporateParties: {
    fr: "Fêtes d'entreprise",
    en: "Corporate parties"
  },
  companyRetreats: {
    fr: "Retraites d'entreprise",
    en: "Company retreats"
  },
  fundraisers: {
    fr: "Collectes de fonds",
    en: "Fundraisers"
  },
  wellnessChallenges: {
    fr: "Défis bien-être",
    en: "Wellness challenges"
  },
  dynamicEvents: {
    fr: "Événements dynamiques",
    en: "Dynamic events"
  },
  readyOption1: {
    fr: "100 smoothies + 2 heures de compétition amusante",
    en: "100 smoothies + 2 hours of interactive competition"
  },
  readyOption2: {
    fr: "200 smoothies + 3 heures de courses énergiques",
    en: "200 smoothies + 3 hours of high-energy racing fun"
  },
  liveLeaderboard: {
    fr: "Tableau de classement en direct",
    en: "Live leaderboard display"
  },
  speedMonitor: {
    fr: "Moniteur de vitesse",
    en: "Speed monitor"
  },
  dynamicHost: {
    fr: "Animateur dynamique",
    en: "Friendly host"
  },
  deliciousSmoothies: {
    fr: "Délicieux smoothies préparés à la force des jambes",
    en: "Delicious smoothies made by your own pedal power"
  },
  organizeChampionship: {
    fr: "Organisez un mini championnat de smoothies",
    en: "Turn your event into a mini Grand Prix smoothie"
  },
  stimulateCompetition: {
    fr: "Stimulez une compétition amicale entre collègues",
    en: "Encourage friendly rivalry between departments or guests"
  },
  getPartyStarted: {
    fr: "Lancez la fête et récompensez les plus rapides",
    en: "Make it a highlight of your party with prizes for the fastest blenders"
  },
  createMemories: {
    fr: "Idéal pour créer des souvenirs positifs et des rires collectifs",
    en: "Promote health, movement, and team spirit — all at once!"
  },
  parentChildPackage: {
    fr: "Le forfait Défi Parent-Enfant",
    en: "Parent-Child Challenge Package"
  },
  vitaminChallenge: {
    fr: "Un défi vitaminé pour toute la famille !",
    en: "A smoothie-powered challenge for the whole family!"
  },
  parentChildDescription: {
    fr: "Transformez votre événement en un moment inoubliable avec ce forfait dynamique et engageant. Parfait pour les fêtes familiales, les écoles, les événements communautaires, les festivals ou les journées de quartier.",
    en: "Turn your event into an unforgettable moment with this dynamic and engaging package. Perfect for family parties, schools, community events, festivals, or neighborhood days."
  },
  option1Classic: {
    fr: "Option 1 – Classique",
    en: "Option 1 – Classic"
  },
  classic50Smoothies: {
    fr: "✓50 smoothies (270 ml)",
    en: "✓50 smoothies (270 ml)"
  },
  classic2Hours: {
    fr: "✓2 heures de compétition amicale",
    en: "✓2 hours of friendly competition"
  },
  classicBikes: {
    fr: "✓1 vélo enfant + 1 vélo adulte",
    en: "✓1 kid-sized blender bike + 1 adult-sized blender bike"
  },
  option2Challenge: {
    fr: "Option 2 – Le Grand Défi",
    en: "Option 2 – The Big Challenge"
  },
  challenge100Smoothies: {
    fr: "✓100 smoothies (270 ml)",
    en: "✓100 smoothies (270 ml)"
  },
  challenge3Hours: {
    fr: "✓3 heures d'animation énergique",
    en: "✓3 hours of energetic entertainment"
  },
  challengeBikes: {
    fr: "✓2 vélos (enfant + adulte)",
    en: "✓2 blender bikes (child + adult)"
  },
  coordinationTable: {
    fr: "✓Table de coordination pour votre équipe",
    en: "✓Table coordination for your team or organization"
  },
  winningMedal: {
    fr: "✓Médaille remise à la famille gagnante du défi !",
    en: "✓Medal awarded to the winning parent-child team!"
  },
  uniqueActivity: {
    fr: "Une activité intergénérationnelle unique et engageante",
    en: "A unique and engaging intergenerational activity"
  },
  professionalEntertainment: {
    fr: "Animation professionnelle et ambiance festive",
    en: "Professional entertainment and a festive atmosphere"
  },
  friendlyCompetition: {
    fr: "Compétition amicale et souvenirs mémorables",
    en: "Friendly competition and lasting memories"
  },
  bestTeamWins: {
    fr: "Que le meilleur duo parent-enfant gagne... et savoure le smoothie de la victoire !",
    en: "Let the best parent-child duo win… and taste victory in smoothie form!"
  },
  smoothieParadePackage: {
    fr: "Le forfait Parade de Smoothies",
    en: "Smoothie Parade Package"
  },
  threeBikesTripleFun: {
    fr: "Trois vélos. Triple plaisir. Une ambiance inoubliable !",
    en: "Three bikes. Triple the fun. An unforgettable vibe!"
  },
  paradeDescription: {
    fr: "Laissez l'énergie, la couleur et la joie circuler ! Le forfait Parade de Smoothies est notre offre la plus festive et interactive — conçue pour transformer n'importe quel événement en une célébration du mouvement et de la saveur.",
    en: "Roll out the energy, color, and joy! The Smoothie Parade is our most festive and interactive package — designed to turn any event into a celebration of movement and flavor."
  },
  paradeAdultKidBikes: {
    fr: "2 vélos adultes + 1 vélo enfant (5 à 10 ans)",
    en: "2 adult bikes + 1 kid-friendly bike (ages 5 to 10)"
  },
  optionsAvailable: {
    fr: "Options disponibles",
    en: "Options available"
  },
  parade200Smoothies: {
    fr: "200 smoothies – 3 heures",
    en: "200 smoothies – 3 hours"
  },
  parade300Smoothies: {
    fr: "300 smoothies – 4 heures",
    en: "300 smoothies – 4 hours"
  },
  parade400Smoothies: {
    fr: "400 smoothies – 5 heures",
    en: "400 smoothies – 5 hours"
  },
  communityParades: {
    fr: "Parades communautaires",
    en: "Community parades"
  },
  openHouseEvents: {
    fr: "Journées portes ouvertes (écoles, gymnases, centres communautaires)",
    en: "Open house events (schools, gyms, community centers)"
  },
  neighborhoodFestivals: {
    fr: "Festivals de quartier",
    en: "Neighborhood festivals"
  },
  schoolEvents: {
    fr: "Événements et fêtes scolaires",
    en: "School events and celebrations"
  },
  familyFunDays: {
    fr: "Journées familiales",
    en: "Family fun days"
  },
  healthWellnessCampaigns: {
    fr: "Campagnes santé et bien-être",
    en: "Health & wellness campaigns"
  },
  youthEvents: {
    fr: "Événements jeunesse",
    en: "Youth-focused events"
  },
  largeScaleLaunches: {
    fr: "Lancements et activations à grande échelle",
    en: "Large-scale launches and activations"
  },
  giveHealthyExperience: {
    fr: "Offrez à votre communauté une expérience saine, active et totalement festive.",
    en: "Give your community a healthy, active, and totally festive experience."
  },
  smoothieParadeShow: {
    fr: "La Parade de Smoothies — le spectacle à siroter !",
    en: "Smoothie Parade — the show you can sip!"
  },
}

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key "${key}" not found.`)
      return key
    }
    return translations[key][language]
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
