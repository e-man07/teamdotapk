"use client"

import type React from "react"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    budget: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Header */}
      <section className="px-6 pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-8">
            Let's build something <span className="italic">together</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Ready to turn your blockchain vision into reality? We'd love to hear about your project.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-6 py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-400 mb-3 block">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-transparent border-gray-800 text-white placeholder-gray-500 focus:border-gray-600"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-400 mb-3 block">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-transparent border-gray-800 text-white placeholder-gray-500 focus:border-gray-600"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="company" className="text-gray-400 mb-3 block">
                    Company
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="bg-transparent border-gray-800 text-white placeholder-gray-500 focus:border-gray-600"
                    placeholder="Your company (optional)"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="project" className="text-gray-400 mb-3 block">
                      Project Type *
                    </Label>
                    <select
                      id="project"
                      name="project"
                      required
                      value={formData.project}
                      onChange={handleChange}
                      className="w-full p-3 bg-transparent border border-gray-800 rounded-md text-white focus:border-gray-600 focus:outline-none"
                    >
                      <option value="" className="bg-black">
                        Select project type
                      </option>
                      <option value="defi" className="bg-black">
                        DeFi Protocol
                      </option>
                      <option value="nft" className="bg-black">
                        NFT Marketplace
                      </option>
                      <option value="dapp" className="bg-black">
                        Full-Stack dApp
                      </option>
                      <option value="audit" className="bg-black">
                        Security Audit
                      </option>
                      <option value="ai" className="bg-black">
                        AI Integration
                      </option>
                      <option value="mobile" className="bg-black">
                        Mobile App
                      </option>
                      <option value="consulting" className="bg-black">
                        Consulting
                      </option>
                      <option value="other" className="bg-black">
                        Other
                      </option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="budget" className="text-gray-400 mb-3 block">
                      Budget Range
                    </Label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full p-3 bg-transparent border border-gray-800 rounded-md text-white focus:border-gray-600 focus:outline-none"
                    >
                      <option value="" className="bg-black">
                        Select budget
                      </option>
                      <option value="under-10k" className="bg-black">
                        Under $10K
                      </option>
                      <option value="10k-25k" className="bg-black">
                        $10K - $25K
                      </option>
                      <option value="25k-50k" className="bg-black">
                        $25K - $50K
                      </option>
                      <option value="50k-100k" className="bg-black">
                        $50K - $100K
                      </option>
                      <option value="100k-plus" className="bg-black">
                        $100K+
                      </option>
                      <option value="discuss" className="bg-black">
                        Let's discuss
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-400 mb-3 block">
                    Tell us about your project *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="bg-transparent border-gray-800 text-white placeholder-gray-500 focus:border-gray-600 resize-none"
                    placeholder="Describe your project, timeline, and any specific requirements..."
                  />
                </div>

                <Button type="submit" size="lg" className="bg-white text-black hover:bg-gray-100 rounded-full px-8">
                  Send message
                  <ArrowUpRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h3 className="text-lg font-light mb-4">Get in touch</h3>
                <div className="space-y-4 text-gray-400">
                  <div>
                    <div className="text-sm uppercase tracking-wider text-gray-500 mb-1">Email</div>
                    <a href="mailto:hello@teamdotapk.dev" className="hover:text-white transition-colors">
                      hello@teamdotapk.dev
                    </a>
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-wider text-gray-500 mb-1">Discord</div>
                    <span>teamdotapk#1234</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-light mb-4">Response time</h3>
                <p className="text-gray-400">We typically respond within 24 hours during business days.</p>
              </div>

              <div>
                <h3 className="text-lg font-light mb-4">What happens next?</h3>
                <div className="space-y-3 text-gray-400 text-sm">
                  <div>1. We'll review your project details</div>
                  <div>2. Schedule a discovery call</div>
                  <div>3. Provide a detailed proposal</div>
                  <div>4. Start building together</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
