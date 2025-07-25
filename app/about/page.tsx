"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-12">
            Three developers, <span className="italic">one vision</span>
          </h1>

          <div className="prose prose-invert max-w-none">
            <div className="text-xl text-gray-400 leading-relaxed space-y-8">
              <p>
                In 2024, three passionate developers from the same city found themselves in the same
                Discord server, discussing the latest developments in blockchain technology. What started as casual
                conversations about smart contracts and DeFi protocols quickly evolved into late-night coding sessions
                and collaborative projects.
              </p>

              <p>
                We discovered that our skills complemented each other perfectly — one specialized in smart contract
                development, another in full-stack applications, and the third in AI and security. Together, we formed
                an unstoppable team that could tackle any blockchain challenge thrown our way.
              </p>

              <p>
                Since that first collaboration, we've never looked back. We've built across multiple chains, won
                numerous hackathons, secured grants, and most importantly, formed a friendship that goes beyond just
                business partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 py-20 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light mb-16">Our Journey</h2>

          <div className="space-y-16">
            {[
              {
                year: "2024",
                title: "The Beginning",
                description:
                  "Three developers met on a Discord server, bonding over shared passion for blockchain technology.",
              },
              {
                year: "2025",
                title: "First Hackathon Win",
                description:
                  "Won our first major hackathon with a DeFi protocol that caught the attention of the community.",
              },
              {
                year: "2025",
                title: "Multi-Chain Expansion",
                description:
                  "Expanded our expertise across Solana, Ethereum, Base, and other emerging blockchain networks.",
              },
              {
                year: "2025",
                title: "teamdotapk Formation",
                description:
                  "Officially formed teamdotapk and started taking on larger, more complex blockchain projects.",
              },
            ].map((milestone, index) => (
              <div key={index} className="flex gap-8">
                <div className="w-20 flex-shrink-0">
                  <div className="text-sm text-gray-500 font-mono">{milestone.year}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-light mb-4">{milestone.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-20 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light mb-16">What drives us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Technical Excellence",
                description: "We believe in writing clean, efficient, and secure code that stands the test of time.",
              },
              {
                title: "Collaboration",
                description: "Our strength comes from working together, combining our unique skills and perspectives.",
              },
              {
                title: "Innovation",
                description: "We constantly push boundaries, exploring new technologies and creative solutions.",
              },
              {
                title: "Passion",
                description: "We genuinely love what we do, and it shows in every project we deliver.",
              },
            ].map((value, index) => (
              <div key={index}>
                <h3 className="text-xl font-light mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-8">Want to work with us?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            We're always excited to take on new challenges and build innovative blockchain solutions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors text-lg"
          >
            Let's talk
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
