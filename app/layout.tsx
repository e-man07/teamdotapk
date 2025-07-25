import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'teamdotapk',
  description: 'Created by teamdotapk'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body className="min-h-screen bg-black text-white flex flex-col">
        {/* Simple Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="text-xl font-light">
                teamdotapk
              </Link>
              <nav className="flex items-center space-x-8">
                <Link href="/projects" className="text-sm text-gray-400 hover:text-white transition-colors">
                  work
                </Link>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">
                  contact
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-4 flex-grow">
          {children}
        </main>

        {/* Simple Footer */}
        <footer className="px-6 py-6 border-t border-gray-800 mt-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">
                built and maintained by{" "}
                <a href="https://x.com/teamdotapk" className="text-gray-400 hover:text-white transition-colors">
                  teamdotapk
                </a>
                .
              </p>
              <div className="flex items-center gap-6">
                <a href="https://x.com/teamdotapk" className="text-gray-400 hover:text-white transition-colors">
                  twitter
                </a>
                <a href="mailto:teamdotapk@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  email
                </a>
              </div>
            </div>
          </div>
        </footer>
        <Analytics />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  )
}
