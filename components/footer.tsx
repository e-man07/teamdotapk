"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-800 bg-black">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-4xl font-light mb-6">Ready to build something amazing?</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-md">
              Let's discuss your next blockchain project and turn your vision into reality.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
            >
              Get in touch
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Navigation</h3>
              <ul className="space-y-2">
                {[
                  { label: "Home", href: "/" },
                  { label: "Work", href: "/projects" },
                  { label: "About", href: "/about" },
                  { label: "Contact", href: "/contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Connect</h3>
              <ul className="space-y-2">
                {[
                  { label: "GitHub", href: "#" },
                  { label: "Twitter", href: "#" },
                  { label: "Discord", href: "#" },
                  { label: "Email", href: "/contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="text-sm text-gray-500">© {currentYear} teamdotapk. All rights reserved.</div>
          <div className="text-sm text-gray-500 mt-4 md:mt-0">Built with ❤️ and blockchain technology</div>
        </div>
      </div>
    </footer>
  )
}
