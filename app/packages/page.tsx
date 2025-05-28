'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const packages = [
  {
    id: "smoothie-parade",
    title: "Smoothie Parade Package",
    subtitle: "Three bikes. Triple the fun. An unforgettable vibe!",
    description: "Roll out the energy, color, and joy! The Smoothie Parade is our most festive and interactive package — designed to turn any event into a celebration of movement and flavor.",
    includes: [
      "2 adult bikes + 1 kid-friendly bike (ages 5 to 10)",
      "Fresh, colorful smoothies made on-site with crowd participation",
      "Lively entertainment with music, festive energy, and fun interaction"
    ],
    options: [
      "200 smoothies – 3 hours",
      "300 smoothies – 4 hours",
      "400 smoothies – 5 hours"
    ],
    perfectFor: [
      "Community parades",
      "Open house events",
      "Neighborhood festivals",
      "School events and celebrations",
      "Family fun days",
      "Health & wellness campaigns",
      "Youth-focused events",
      "Large-scale launches and activations"
    ]
  },
  {
    id: "little-koki",
    title: "The Little Koki Package",
    subtitle: "Kids' favorite activity!",
    description: "Perfect for birthday parties, daycare graduations, or family festivals, this package turns every event into a burst of fun, laughter, and flavor!",
    options: [
      "Option 1: 25 delicious smoothies + 1 hour of high-energy entertainment",
      "Option 2: 50 delicious smoothies + 2 hours of high-energy entertainment"
    ],
    includes: [
      "1 kid-friendly blender bike (suitable for ages 5 to 10)",
      "Fresh and colorful smoothies — made on-site with energy and joy!",
      "Lively entertainment — music, and an unforgettable festive atmosphere!"
    ]
  },
  {
    id: "pop-solo",
    title: "Pop Solo",
    subtitle: "A hit with teens, adults, and family crowds!",
    description: "Perfect for school events, office parties, community festivals, or any gathering where you want to mix health with high vibes!",
    options: [
      "Option 1: 50 delicious smoothies + 1.5 hours of high-energy entertainment",
      "Option 2: 75 delicious smoothies + 2.5 hours of high-energy entertainment"
    ],
    includes: [
      "1 adult-friendly blender bike (suitable for teens and adults)",
      "Fresh and colorful smoothies — made on-site with flair and flavor!",
      "Lively entertainment — great music, positive energy, and a vibrant, festive atmosphere!"
    ]
  },
  {
    id: "double-fun",
    title: "Double the Fun",
    subtitle: "Twice the bikes, twice the fun, twice the impact",
    description: "The perfect package to draw crowds, create memorable experiences, and promote healthy, active living.",
    options: [
      "Option 1: 100 delicious smoothies + 2 hours of high-energy entertainment",
      "Option 2: 200 delicious smoothies + 3 hours of high-energy entertainment",
      "Option 3: 300 delicious smoothies + 4 hours of high-energy entertainment"
    ],
    includes: [
      "2 adult-friendly blender bikes",
      "Fresh, colorful, and tasty smoothies",
      "Lively entertainment — music, energy, and guaranteed smiles!"
    ],
    perfectFor: [
      "Community festivals",
      "Brand activations",
      "Corporate events",
      "School celebrations",
      "Health & wellness fairs",
      "Family festivals"
    ]
  },
  {
    id: "ready-set-blend",
    title: "Ready, Set, Blend!",
    subtitle: "Get your team racing — not just for fun, but for the title of fastest blender on the floor!",
    description: "This competition-style smoothie bike package is the perfect way to break the ice, spark laughter, and create unforgettable memories.",
    options: [
      "100 smoothies + 2 hours of interactive competition",
      "200 smoothies + 3 hours of high-energy racing fun"
    ],
    includes: [
      "2 adult smoothie bikes — designed for performance and fun!",
      "Live leaderboard display to track real-time rankings",
      "Speed monitor so riders can see their performance",
      "Friendly host to energize the crowd and moderate the race",
      "Delicious smoothies made by your own pedal power"
    ],
    perfectFor: [
      "Corporate parties and holiday events",
      "Team-building activities",
      "Christmas parties",
      "Company retreats",
      "Conferences and exhibitions",
      "Fundraisers with a fun twist"
    ]
  }
]

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-green-600 mb-4">Our Packages</h1>
          <p className="text-xl text-gray-600">Choose the perfect smoothie bike experience for your event</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-green-600 mb-2">{pkg.title}</h2>
                <p className="text-lg text-yellow-600 mb-4">{pkg.subtitle}</p>
                <p className="text-gray-600 mb-4">{pkg.description}</p>

                <div className="mb-4">
                  <h3 className="font-semibold text-lg mb-2">Package Includes:</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="text-gray-600">{item}</li>
                    ))}
                  </ul>
                </div>

                {pkg.options && (
                  <div className="mb-4">
                    <h3 className="font-semibold text-lg mb-2">Options Available:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {pkg.options.map((option, i) => (
                        <li key={i} className="text-gray-600">{option}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {pkg.perfectFor && (
                  <div className="mb-4">
                    <h3 className="font-semibold text-lg mb-2">Perfect For:</h3>
                    <div className="flex flex-wrap gap-2">
                      {pkg.perfectFor.map((item, i) => (
                        <span
                          key={i}
                          className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <Button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white">
                  Book This Package
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
