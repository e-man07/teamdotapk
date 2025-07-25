"use client"

import Link from "next/link"
import { ArrowLeft, ArrowUpRight, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const projectData: Record<string, any> = {
  "defi-protocol": {
    title: "PayPerUse",
    description: "A composable AI agents markeplace running on decentralized infra.",
    year: "2025",
    category: "AI",
    image: "/payperuse.png?height=600&width=1200",
    overview:
      "Our DeFi Yield Protocol represents a breakthrough in automated yield farming, combining advanced smart contract architecture with machine learning-driven optimization strategies. Built on Ethereum, this protocol automatically allocates user funds across multiple DeFi platforms to maximize returns while minimizing risk.",
    challenge:
      "Traditional yield farming requires constant monitoring and manual rebalancing. Users often miss optimal opportunities or expose themselves to unnecessary risks due to market volatility and complexity.",
    solution:
      "We developed an intelligent protocol that uses machine learning algorithms to analyze market conditions, assess risks, and automatically rebalance portfolios across 15+ DeFi protocols in real-time.",
    tags: ["Base", "Next.js", "React", "Machine Learning", "AI"],
    links: { live: "https://payperuse.online", github: "#" },
    features: [
      "Automated yield optimization across 15+ protocols",
      "Real-time risk assessment and rebalancing",
      "Gas-optimized smart contracts",
      "Comprehensive analytics dashboard",
      "Community governance system",
    ],
    results: [
      "$2M+ total value locked within first month",
      "15%+ average APY for users",
      "Zero security incidents since launch",
      "Featured in major DeFi publications",
    ],
  },
  "nft-marketplace": {
    title: "Cross-Chain NFT Marketplace",
    description: "Multi-chain marketplace supporting Ethereum, Solana, and Base",
    year: "2024",
    category: "NFT",
    image: "/placeholder.svg?height=600&width=1200",
    overview:
      "A revolutionary NFT marketplace that breaks down barriers between blockchain ecosystems, enabling seamless trading across Ethereum, Solana, and Base networks through advanced bridging technology.",
    challenge:
      "NFT traders are limited to single blockchain ecosystems, missing opportunities and facing fragmented liquidity across different networks.",
    solution:
      "We built a unified marketplace with proprietary cross-chain bridge technology that maintains asset integrity while enabling true interoperability between major blockchain networks.",
    tags: ["Solana", "Ethereum", "Base", "NFTs", "Cross-chain"],
    links: { live: "#", github: "#" },
    features: [
      "Cross-chain NFT trading",
      "Unified wallet integration",
      "AI-powered recommendations",
      "Creator royalty management",
      "Real-time market analytics",
    ],
    results: [
      "10,000+ NFTs traded in first quarter",
      "$500K+ total trading volume",
      "50+ creator partnerships",
      "Featured in major NFT publications",
    ],
  },
  "ai-trading-bot": {
    title: "AI Trading Bot",
    description: "ML-driven trading bot with advanced analytics and portfolio management",
    year: "2024",
    category: "AI",
    image: "/placeholder.svg?height=600&width=1200",
    overview:
      "An intelligent trading bot that leverages cutting-edge machine learning algorithms to analyze market patterns and execute profitable trades across multiple cryptocurrency exchanges with institutional-grade security.",
    challenge:
      "Cryptocurrency markets operate 24/7 with high volatility, making it impossible for individual traders to monitor and react to opportunities in real-time.",
    solution:
      "We developed an AI system that continuously learns from market data, adapts strategies based on changing conditions, and implements sophisticated risk management to protect capital.",
    tags: ["Python", "AI/ML", "Trading", "Analytics", "Automation"],
    links: { live: "#", github: "#" },
    features: [
      "Multi-exchange trading support",
      "Advanced ML prediction models",
      "Real-time risk management",
      "Comprehensive backtesting",
      "Social sentiment analysis",
    ],
    results: [
      "25%+ average monthly returns",
      "$100K+ assets under management",
      "Featured in major crypto publications",
      "Winner of AI in Finance hackathon",
    ],
  },
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projectData[params.slug]

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4">Project not found</h1>
          <Link href="/projects">
            <Button variant="outline" className="border-gray-800 text-gray-400 bg-transparent">
              Back to projects
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Header */}
      <section className="px-6 pt-32 pb-16">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to projects
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm text-gray-500 font-mono">{project.year}</span>
                <span className="px-3 py-1 text-sm bg-gray-900 text-gray-400 rounded-full">{project.category}</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-8">{project.title}</h1>

              <p className="text-xl text-gray-400 mb-12 leading-relaxed">{project.description}</p>

              <div className="flex items-center gap-6">
                <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-6" asChild>
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View live
                  </a>
                </Button>
                <a
                  href={project.links.github}
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  Source code
                </a>
              </div>
            </div>

            <div className="aspect-[4/3] bg-gray-900 rounded-lg overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 py-16 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              {/* Overview */}
              <div>
                <h2 className="text-2xl font-light mb-6">Overview</h2>
                <p className="text-gray-400 leading-relaxed text-lg">{project.overview}</p>
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-light mb-4">Challenge</h3>
                  <p className="text-gray-400 leading-relaxed">{project.challenge}</p>
                </div>
                <div>
                  <h3 className="text-xl font-light mb-4">Solution</h3>
                  <p className="text-gray-400 leading-relaxed">{project.solution}</p>
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="text-2xl font-light mb-6">Key Features</h2>
                <ul className="space-y-3">
                  {project.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div>
                <h2 className="text-2xl font-light mb-6">Results</h2>
                <ul className="space-y-3">
                  {project.results.map((result: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-400">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-12">
              <div>
                <h3 className="text-lg font-light mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag: string, index: number) => (
                    <span key={index} className="px-3 py-1 text-sm bg-gray-900 text-gray-400 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-light mb-4">Links</h3>
                <div className="space-y-3">
                  <a
                    href={project.links.live}
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live demo
                  </a>
                  <a
                    href={project.links.github}
                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Source code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="px-6 py-16 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-light mb-8">Interested in working together?</h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
          >
            Let's discuss your project
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
