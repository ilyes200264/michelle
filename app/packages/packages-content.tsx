'use client'

import { useLanguage } from "@/components/language-provider"

export function PackagesContent() {
  const { t } = useLanguage()

  return (
    <div className="space-y-16">
      {/* Smoothie Parade Package */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <p className="text-xl font-medium text-gray-600">
            Offer a moment of active, healthy and festive happiness to your community.
          </p>
          <p className="text-2xl font-bold text-green-600">
            The Smoothie Parade is a drinkable show!
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Smoothie Parade Package</h2>
          <p className="text-xl font-medium">Three bikes. Triple the fun. An unforgettable vibe!</p>
          <p className="text-gray-700">
            Roll out the energy, color, and joy! The Smoothie Parade is our most festive and interactive package — designed to turn any event into a celebration of movement and flavor.
          </p>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">This package includes:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>2 adult bikes + 1 kid-friendly bike (ages 5 to 10)</li>
              <li>Fresh, colorful smoothies made on-site with crowd participation</li>
              <li>Lively entertainment with music, festive energy, and fun interaction</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Options available:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>200 smoothies – 3 hours</li>
              <li>300 smoothies – 4 hours</li>
              <li>400 smoothies – 5 hours</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Perfect for:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Community parades</li>
              <li>Open house events (schools, gyms, community centers)</li>
              <li>Neighborhood festivals</li>
              <li>School events and celebrations</li>
              <li>Family fun days</li>
              <li>Health & wellness campaigns</li>
              <li>Youth-focused events</li>
              <li>Large-scale launches and activations</li>
            </ul>
          </div>

          <div className="text-center space-y-4 pt-4">
            <p className="text-xl font-medium">Give your community a healthy, active, and totally festive experience.</p>
            <p className="text-2xl font-bold text-green-600">Smoothie Parade — the show you can sip!</p>
          </div>
        </div>
      </section>

      {/* Little Koki Package */}
      <section className="space-y-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">1. The Little Koki Package</h2>
          <p className="text-xl font-medium">Kids' favorite activity!</p>
          <p className="text-gray-700">
            Perfect for birthday parties, daycare graduations, or family festivals, this package turns every event into a burst of fun, laughter, and flavor!
          </p>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Two options to fit your needs:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Option 1: 25 delicious smoothies + 1 hour of high-energy entertainment</li>
              <li>Option 2: 50 delicious smoothies + 2 hours of high-energy entertainment</li>
            </ul>
            <p className="italic">(Choose based on the number of children attending)</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">The package includes:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>1 kid-friendly blender bike (suitable for ages 5 to 10) — they pedal, they blend, they have a blast!</li>
              <li>Fresh and colorful smoothies — made on-site with energy and joy!</li>
              <li>Lively entertainment — music, and an unforgettable festive atmosphere!</li>
            </ul>
          </div>

          <p className="text-xl font-medium text-center pt-4">
            Give kids a healthy, active, and totally fun experience!
          </p>
        </div>
      </section>

      {/* Pop Solo */}
      <section className="space-y-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">2. Pop Solo</h2>
          <p className="text-xl font-medium">A hit with teens, adults, and family crowds!</p>
          <p className="text-gray-700">
            Perfect for school events, office parties, community festivals, or any gathering where you want to mix health with high vibes!
          </p>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Two options to fit your needs:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Option 1: 50 delicious smoothies + 1.5 hours of high-energy entertainment</li>
              <li>Option 2: 75 delicious smoothies + 2.5 hours of high-energy entertainment</li>
            </ul>
            <p className="italic">(Choose based on the size of your crowd)</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">The package includes:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>1 adult-friendly blender bike (suitable for teens and adults) — they pedal, they blend, they POP with fun!</li>
              <li>Fresh and colorful smoothies — made on-site with flair and flavor!</li>
              <li>Lively entertainment — great music, positive energy, and a vibrant, festive atmosphere!</li>
            </ul>
          </div>

          <p className="text-xl font-medium text-center pt-4">
            Give your guests a healthy, active, and unforgettable experience they'll be talking about long after the last sip!
          </p>
        </div>
      </section>

      {/* Double the Fun */}
      <section className="space-y-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">3. Double the Fun</h2>
          <p className="text-xl font-medium">Twice the bikes, twice the fun, twice the impact</p>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Perfect fit for:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <li>Community festivals</li>
              <li>Brand activations</li>
              <li>Non-profit fairs</li>
              <li>Grand openings</li>
              <li>Corporate events</li>
              <li>Neighborhood block parties</li>
              <li>School or community open houses</li>
              <li>University Open Days</li>
              <li>Shopping center events</li>
              <li>Conferences or exhibitions</li>
              <li>Team-building events</li>
              <li>Christmas parties</li>
              <li>Cocktail parties</li>
              <li>Health & wellness fairs</li>
              <li>Public awareness campaigns</li>
              <li>Family festivals</li>
              <li>Employee appreciation days</li>
              <li>School celebrations</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Three options to fit your needs:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Option 1: 100 delicious smoothies + 2 hours of high-energy entertainment</li>
              <li>Option 2: 200 delicious smoothies + 3 hours of high-energy entertainment</li>
              <li>Option 3: 300 delicious smoothies + 4 hours of high-energy entertainment</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">The package includes:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>2 adult-friendly blender bikes — guests pedal together, blend together, and bring the fun to life!</li>
              <li>Fresh, colorful, and tasty smoothies — made on-site in a festive, dynamic atmosphere</li>
              <li>Lively entertainment — music, energy, and guaranteed smiles!</li>
            </ul>
          </div>

          <p className="text-xl font-medium text-center pt-4">
            The perfect package to draw crowds, create memorable experiences, and promote healthy, active living.
          </p>
        </div>
      </section>

      {/* Ready, Set, Blend! */}
      <section className="space-y-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">4. Ready, Set, Blend!</h2>
          <p className="text-xl font-medium">Get your team racing — not just for fun, but for the title of fastest blender on the floor!</p>
          <p className="text-gray-700">
            This competition-style smoothie bike package is the perfect way to break the ice, spark laughter, and create unforgettable memories.
          </p>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Perfect fit for:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Corporate parties and holiday events</li>
              <li>Team-building activities</li>
              <li>Christmas parties</li>
              <li>Company retreats</li>
              <li>Conferences and exhibitions</li>
              <li>Fundraisers with a fun twist</li>
              <li>Fitness or wellness challenges</li>
              <li>Sports-themed events</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Two options available:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>100 smoothies + 2 hours of interactive competition</li>
              <li>200 smoothies + 3 hours of high-energy racing fun</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">The package includes:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>2 adult smoothie bikes — designed for performance and fun!</li>
              <li>Live leaderboard display to track real-time rankings</li>
              <li>Speed monitor so riders can see their performance</li>
              <li>Friendly host to energize the crowd and moderate the race</li>
              <li>Delicious smoothies made by your own pedal power</li>
            </ul>
          </div>

          <div className="space-y-4">
            <p className="font-medium">A powerful ice-breaker and the ultimate crowd-pleaser!</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Turn your event into a mini Grand Prix smoothie</li>
              <li>Encourage friendly rivalry between departments or guests</li>
              <li>Promote health, movement, and team spirit — all at once!</li>
              <li>Make it a highlight of your party with prizes for the fastest blenders</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Parent-Child Challenge Package */}
      <section className="space-y-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">5. Parent-Child Challenge Package</h2>
          <p className="text-xl font-medium">A smoothie-powered challenge for the whole family!</p>
          <p className="text-gray-700">
            Turn your event into an unforgettable moment with this dynamic and engaging package. Perfect for family parties, schools, community events, festivals, or neighborhood days.
          </p>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Two options depending on the size of your event:</h3>
            
            <div className="space-y-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4">Option 1 – Classic</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>✓50 smoothies (270 ml)</li>
                  <li>✓2 hours of friendly competition</li>
                  <li>✓1 kid-sized blender bike + 1 adult-sized blender bike</li>
                  <li>✓Speed monitor to track performance</li>
                  <li>✓Live leaderboard</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4">Option 2 – The Big Challenge</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>✓100 smoothies (270 ml)</li>
                  <li>✓3 hours of energetic entertainment</li>
                  <li>✓2 blender bikes (child + adult)</li>
                  <li>✓Table coordination for your team or organization</li>
                  <li>✓Speed monitor to track performance</li>
                  <li>✓Live leaderboard</li>
                  <li>✓Medal awarded to the winning parent-child team!</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">This package includes:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>A unique and engaging intergenerational activity</li>
              <li>Professional entertainment and a festive atmosphere</li>
              <li>Friendly competition and lasting memories</li>
            </ul>
          </div>

          <p className="text-xl font-medium text-center pt-4">
            Let the best parent-child duo win… and taste victory in smoothie form!
          </p>
        </div>
      </section>
    </div>
  )
} 