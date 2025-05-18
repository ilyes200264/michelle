"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "fr" | "en"

type Translations = {
  [key: string]: {
    fr: string
    en: string
  }
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
