"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, ExternalLink, Github } from "lucide-react"
import { Input } from "@/components/ui/input"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const projects = [
  {
    id: "defi-protocol",
    title: "DeFi Yield Protocol",
    description: "Automated yield farming protocol with ML-driven optimization strategies",
    tags: ["Ethereum", "Solidity", "React", "DeFi"],
    category: "DeFi",
    year: "2024",
    image: "/placeholder.svg?height=400&width=600",
    links: { live: "#", github: "#" },
  },
  {
    id: "nft-marketplace",
    title: "Cross-Chain NFT Marketplace",
    description: "Multi-chain marketplace supporting Ethereum, Solana, and Base",
    tags: ["Solana", "Ethereum", "Base", "NFTs"],
    category: "NFT",
    year: "2024",
    image: "/placeholder.svg?height=400&width=600",
    links: { live: "#", github: "#" },
  },
  {
    id: "ai-trading-bot",
    title: "AI Trading Bot",
    description: "ML-driven trading bot with advanced analytics and portfolio management",
    tags: ["Python", "AI/ML", "Trading", "Analytics"],
    category: "AI",
    year: "2024",
    image: "/placeholder.svg?height=400&width=600",
    links: { live: "#", github: "#" },
  },
  {
    id: "dao-governance",
    title: "DAO Governance Platform",
    description: "Decentralized governance with voting mechanisms and treasury controls",
    tags: ["Solana", "Governance", "DAO", "Web3"],
    category: "DAO",
    year: "2023",
    image: "/placeholder.svg?height=400&width=600",
    links: { live: "#", github: "#" },
  },
  {
    id: "mobile-wallet",
    title: "Multi-Chain Mobile Wallet",
    description: "Secure mobile wallet with built-in DeFi and NFT features",
    tags: ["React Native", "Mobile", "Multi-chain"],
    category: "Mobile",
    year: "2024",
    image: "/placeholder.svg?height=400&width=600",
    links: { live: "#", github: "#" },
  },
  {
    id: "security-audit-tool",
    title: "Smart Contract Auditor",
    description: "Automated security analysis with vulnerability detection",
    tags: ["Security", "Solidity", "Auditing", "Tools"],
    category: "Security",
    year: "2023",
    image: "/placeholder.svg?height=400&width=600",
    links: { live: "#", github: "#" },
  },
]

const categories = ["All", "DeFi", "NFT", "AI", "DAO", "Mobile", "Security"]

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Header */}
      <section className="px-6 pt-32 pb-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-8">Our Work</h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            A collection of blockchain projects we've built across DeFi, NFTs, AI, and more.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 pb-16 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
            <div className="w-full max-w-md">
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-900 border-gray-800 text-white placeholder-gray-500"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm rounded-full transition-colors ${
                    selectedCategory === category ? "bg-white text-black" : "bg-gray-900 text-gray-400 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group">
                <div className="aspect-[4/3] bg-gray-900 rounded-lg overflow-hidden mb-6">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 font-mono">{project.year}</span>
                    <div className="flex items-center gap-3">
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

                  <div>
                    <h3 className="text-2xl font-light mb-3 group-hover:text-gray-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-4">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-sm bg-gray-900 text-gray-400 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
                  >
                    View project
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 mb-4">No projects found matching your criteria</p>
              <button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                }}
                className="text-white hover:text-gray-300 transition-colors underline underline-offset-4"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
