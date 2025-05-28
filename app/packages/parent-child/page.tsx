'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ChevronLeft } from "lucide-react"

export default function ParentChildPackagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <Link href="/packages" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8">
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Packages
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-green-600 mb-4">Parent-Child Challenge Package</h1>
          <p className="text-xl text-yellow-600 mb-8">A smoothie-powered challenge for the whole family!</p>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <p className="text-gray-600 text-lg mb-8">
              Turn your event into an unforgettable moment with this dynamic and engaging package. Perfect for family parties, 
              schools, community events, festivals, or neighborhood days.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-50 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-green-600 mb-4">Option 1 – Classic</h2>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    50 smoothies (270 ml)
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    2 hours of friendly competition
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    1 kid-sized blender bike + 1 adult-sized blender bike
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    Speed monitor to track performance
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span>
                    Live leaderboard
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-yellow-600 mb-4">Option 2 – The Big Challenge</h2>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <span className="text-yellow-500 mr-2">✓</span>
                    100 smoothies (270 ml)
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-yellow-500 mr-2">✓</span>
                    3 hours of energetic entertainment
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-yellow-500 mr-2">✓</span>
                    2 blender bikes (child + adult)
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-yellow-500 mr-2">✓</span>
                    Table coordination for your team or organization
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-yellow-500 mr-2">✓</span>
                    Speed monitor to track performance
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-yellow-500 mr-2">✓</span>
                    Live leaderboard
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-yellow-500 mr-2">✓</span>
                    Medal awarded to the winning parent-child team!
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Package Includes</h2>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">•</span>
                  A unique and engaging intergenerational activity
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">•</span>
                  Professional entertainment and a festive atmosphere
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">•</span>
                  Friendly competition and lasting memories
                </li>
                <li className="flex items-start text-gray-600">
                  <span className="text-green-500 mr-2">•</span>
                  Let the best parent-child duo win… and taste victory in smoothie form!
                </li>
              </ul>
            </div>

            <div className="text-center">
              <Button className="bg-green-600 hover:bg-green-700 text-white text-lg px-8 py-4">
                Book This Package
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
