"use client"

import Link from "next/link"
import { ArrowUpRight, Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const projects = [
  {
    id: "defi-protocol",
    title: "PayPerUse",
    description: "A composable AI agents markeplace running on decentralized infra.",
    tags: ["Base", "TypeScript", "Next.js", "AI"],
    year: "2025",
    image: "/payperuse.png?height=400&width=600",
    links: { live: "https://payperuse.online", github: "https://github.com/kshitij-hash/PayPerUse" },
  },
  {
    id: "nft-marketplace",
    title: "Lavinth",
    description: "A DeFi security layer on Solana.",
    tags: ["Solana", "TypeScript", "Machine Learning"],
    year: "2025",
    image: "/lavinth.png?height=400&width=600",
    links: { live: "https://lavinth.com", github: "https://github.com/piyushjha0409/Lavinth" },
  },
  {
    id: "ai-trading-bot",
    title: "TradeX",
    description: "The Ultimate AI Agent for on-chain Solana interactions.",
    tags: ["Solana", "TypeScript", "Next.js", "AI", "Trading"],
    year: "2025",
    image: "/tradeX.png?height=400&width=600",
    links: { live: "https://tradxai.fun", github: "#" },
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-8">
              We build the future of <span className="italic font-normal">blockchain</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
              Three developers who met on Discord, now building cutting-edge blockchain solutions for the decentralized
              world.
            </p>
            <div className="flex items-center gap-6">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 rounded-full px-8" asChild>
                <Link href="/contact">
                  Let's work together
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Link
                href="/about"
                className="text-gray-400 hover:text-white transition-colors underline underline-offset-4"
              >
                Our story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="px-6 py-20 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <h2 className="text-4xl font-light">Selected Work</h2>
            <Link href="/projects" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
              View all projects
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <div key={project.id} className="group">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="aspect-[4/3] bg-gray-900 rounded-lg overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="space-y-6">
                      <div className="text-sm text-gray-500 font-mono">{project.year}</div>

                      <div>
                        <h3 className="text-3xl font-light mb-4 group-hover:text-gray-300 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">{project.description}</p>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 text-sm bg-gray-900 text-gray-300 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-6">
                        <Link
                          href={`/projects/${project.id}`}
                          className="text-white hover:text-gray-300 transition-colors flex items-center gap-2"
                        >
                          View project
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                        <div className="flex items-center gap-4">
                          <a
                            href={project.links.live}
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="Live demo"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                          <a
                            href={project.links.github}
                            className="text-gray-400 hover:text-white transition-colors"
                            aria-label="Source code"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-20 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light mb-16">What we do</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Blockchain Development",
                description: "Smart contracts, DeFi protocols, and dApps across multiple chains",
              },
              {
                title: "Full-Stack Applications",
                description: "End-to-end web applications with modern frameworks",
              },
              {
                title: "AI Integration",
                description: "Machine learning solutions integrated with blockchain technology",
              },
              {
                title: "Security Auditing",
                description: "Comprehensive security reviews for smart contracts",
              },
              {
                title: "Mobile Development",
                description: "Native and cross-platform apps with Web3 integration",
              },
              {
                title: "Technical Consulting",
                description: "Strategic guidance for blockchain projects and architecture",
              },
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="border border-gray-800 rounded-lg p-6 h-full hover:border-gray-700 transition-colors">
                  <h3 className="text-xl font-light mb-4 group-hover:text-gray-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-20 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Projects delivered", value: "10+" },
              { label: "Hackathons won", value: "5+" },
              { label: "Chains deployed on", value: "5+" },
              { label: "Years of experience", value: "2+" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-light mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
