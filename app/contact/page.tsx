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
import { contactFormSchema, type ContactFormValues, mapFormToDbSchema } from "@/lib/schemas/contact"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      project: "",
      budget: "",
      message: "",
    },
  })

  const handleSubmit = async (data: ContactFormValues) => {
    try {
      setIsSubmitting(true)
      
      // Map form data to database schema format
      const dbData = mapFormToDbSchema(data)
      
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dbData),
      })
      
      if (!response.ok) {
        throw new Error("Failed to submit form")
      }
      
      toast.success("Message sent successfully! We'll be in touch soon.")
      form.reset()
    } catch (error) {
      console.error("Error submitting form:", error)
      toast.error("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
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
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-400 mb-3 block">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      className="bg-transparent border-gray-800 text-white placeholder-gray-500 focus:border-gray-600"
                      placeholder="Your name"
                      {...form.register("name")}
                    />
                    {form.formState.errors.name && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-400 mb-3 block">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      className="bg-transparent border-gray-800 text-white placeholder-gray-500 focus:border-gray-600"
                      placeholder="your@email.com"
                      {...form.register("email")}
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="company" className="text-gray-400 mb-3 block">
                    Company
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    className="bg-transparent border-gray-800 text-white placeholder-gray-500 focus:border-gray-600"
                    placeholder="Your company (optional)"
                    {...form.register("company")}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="project" className="text-gray-400 mb-3 block">
                      Project Type *
                    </Label>
                    <select
                      id="project"
                      className="w-full p-3 bg-transparent border border-gray-800 rounded-md text-white focus:border-gray-600 focus:outline-none"
                      {...form.register("project")}
                    >
                    {form.formState.errors.project && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.project.message}</p>
                    )}
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
                      className="w-full p-3 bg-transparent border border-gray-800 rounded-md text-white focus:border-gray-600 focus:outline-none"
                      {...form.register("budget")}
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
                    rows={6}
                    className="bg-transparent border-gray-800 text-white placeholder-gray-500 focus:border-gray-600 resize-none"
                    placeholder="Describe your project, timeline, and any specific requirements..."
                    {...form.register("message")}
                  />
                  {form.formState.errors.message && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="bg-white text-black hover:bg-gray-100 rounded-full px-8"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                  {!isSubmitting && <ArrowUpRight className="ml-2 w-4 h-4" />}
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
                    <a href="mailto:teamdotapk@gmail.com" className="hover:text-white transition-colors">
                      teamdotapk@gmail.com
                    </a>
                  </div>
                  <div>
                    <div className="text-sm uppercase tracking-wider text-gray-500 mb-1">Twitter</div>
                    <a href="https://x.com/teamdotapk" className="hover:text-white transition-colors">
                      teamdotapk
                    </a>
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
