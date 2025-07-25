"use client"

import Link from "next/link"
import { ArrowUpRight, Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "PayPerUse",
    description: "A composable AI agents marketplace running on decentralized infra.",
    tags: ["Base", "TypeScript", "Next.js", "AI"],
    links: { live: "https://payperuse.online", github: "https://github.com/kshitij-hash/PayPerUse" },
  },
  {
    title: "Lavinth",
    description: "A DeFi security layer on Solana.",
    tags: ["Solana", "TypeScript", "Machine Learning"],
    links: { live: "https://lavinth.com", github: "https://github.com/piyushjha0409/Lavinth" },
  },
  {
    title: "TradeX",
    description: "The Ultimate AI Agent for on-chain Solana interactions.",
    tags: ["Solana", "TypeScript", "Next.js", "AI", "Trading"],
    links: { live: "https://tradxai.fun", github: "#" },
  },
]

const techStack = [
  "Next.js", "React", "TypeScript", "Solana", "Base", "Node.js", "Prisma", "TailwindCSS"
]

export default function HomePage() {
  return (
    <>

      {/* Intro */}
      <section className="px-6 pt-28 pb-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-4">
            teamdotapk
          </h1>
          <p className="text-xl text-gray-400 mb-4 leading-relaxed">
            Three developers building the future of blockchain.
          </p>
          <p className="text-gray-400 leading-relaxed max-w-2xl">
            We met on Discord and now create cutting-edge blockchain solutions, from DeFi protocols to AI-powered trading bots. 
            Currently working across Solana, Base, and other chains, building products that matter.
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-6 py-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-light mb-4">generally we build with:</h2>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm bg-gray-900 text-gray-300 rounded-full border border-gray-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="px-6 py-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-light mb-6">projects:</h2>
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
          
          {/* See more link */}
          <div className="mt-6">
            <Link 
              href="/projects" 
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              see more projects
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-400 leading-relaxed mb-4">
            if you're interested in collaborating on building some cool stuff, feel free to dm us on{" "}
            <a href="https://x.com/teamdotapk" className="text-white hover:text-gray-300 transition-colors">
              x
            </a>{" "}
            or drop us an{" "}
            <a href="mailto:teamdotapk@gmail.com" className="text-white hover:text-gray-300 transition-colors">
              email
            </a>
            . we will get back to you within 2 business days. we're always open to new ideas and projects!
          </p>
        </div>
      </section>

    </>
  )
}
