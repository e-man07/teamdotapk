"use client"

import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "DeFi Yield Protocol",
    description: "Automated yield farming protocol with ML-driven optimization strategies",
    tags: ["Ethereum", "Solidity", "React", "DeFi"],
    links: { live: "#", github: "#" },
  },
  {
    title: "Cross-Chain NFT Marketplace",
    description: "Multi-chain marketplace supporting Ethereum, Solana, and Base",
    tags: ["Solana", "Ethereum", "Base", "NFTs"],
    links: { live: "#", github: "#" },
  },
  {
    title: "AI Trading Bot",
    description: "ML-driven trading bot with advanced analytics and portfolio management",
    tags: ["Python", "AI/ML", "Trading", "Analytics"],
    links: { live: "#", github: "#" },
  },
  {
    title: "DAO Governance Platform",
    description: "Decentralized governance with voting mechanisms and treasury controls",
    tags: ["Solana", "Governance", "DAO", "Web3"],
    links: { live: "#", github: "#" },
  },
  {
    title: "Multi-Chain Mobile Wallet",
    description: "Secure mobile wallet with built-in DeFi and NFT features",
    tags: ["React Native", "Mobile", "Multi-chain"],
    links: { live: "#", github: "#" },
  },
  {
    title: "Smart Contract Auditor",
    description: "Automated security analysis with vulnerability detection",
    tags: ["Security", "Solidity", "Auditing", "Tools"],
    links: { live: "#", github: "#" },
  },
]

export default function ProjectsPage() {
  return (
    <>

      {/* Projects */}
      <section className="px-6 pt-28 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-4">
            work
          </h1>
          <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl">
            a collection of blockchain projects we've built across different chains and technologies.
          </p>
          
          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <h3 className="text-xl font-light group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4">
                    <a
                      href={project.links.live}
                      className="text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    {project.links.github !== "#" && (
                      <a
                        href={project.links.github}
                        className="text-gray-400 hover:text-white transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-gray-800 text-gray-400 rounded font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
