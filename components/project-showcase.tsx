"use client"

import Link from "next/link"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const featuredProjects = [
  {
    id: "defi-protocol",
    title: "DeFi Yield Protocol",
    description:
      "A sophisticated yield farming protocol built on Ethereum with automated strategies and risk management.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Ethereum", "Solidity", "React", "DeFi"],
    status: "Live",
    links: { live: "#", github: "#" },
  },
  {
    id: "nft-marketplace",
    title: "Cross-Chain NFT Marketplace",
    description: "Multi-chain NFT marketplace supporting Ethereum, Solana, and Base with seamless cross-chain trading.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Solana", "Ethereum", "Base", "NFTs"],
    status: "Live",
    links: { live: "#", github: "#" },
  },
  {
    id: "ai-trading-bot",
    title: "AI-Powered Trading Bot",
    description: "Machine learning-driven trading bot with advanced analytics and automated portfolio management.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["AI/ML", "Python", "Trading", "Analytics"],
    status: "Beta",
    links: { live: "#", github: "#" },
  },
]

export default function ProjectShowcase() {
  return (
    <section className="py-20 px-4 border-t border-zinc-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-8">
            Showcasing our latest and greatest work across the blockchain ecosystem
          </p>
          <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-800 bg-transparent" asChild>
            <Link href="/projects">
              View All Projects <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors overflow-hidden"
            >
              <div className="relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      project.status === "Live" ? "bg-green-900 text-green-300" : "bg-yellow-900 text-yellow-300"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-zinc-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-zinc-800 text-zinc-300 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <Link
                    href={`/projects/${project.id}`}
                    className="text-white hover:text-zinc-300 font-medium flex items-center text-sm transition-colors"
                  >
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                  <div className="flex space-x-2">
                    <a
                      href={project.links.live}
                      className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
                      aria-label="View Live Project"
                    >
                      <ExternalLink className="w-4 h-4 text-zinc-400 hover:text-white transition-colors" />
                    </a>
                    <a
                      href={project.links.github}
                      className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
                      aria-label="View Source Code"
                    >
                      <Github className="w-4 h-4 text-zinc-400 hover:text-white transition-colors" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
