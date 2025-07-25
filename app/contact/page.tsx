"use client"

import { ArrowUpRight } from "lucide-react"

export default function ContactPage() {

  return (
    <>

      {/* Contact */}
      <section className="px-6 pt-28 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-4">
            contact
          </h1>
          <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl">
            if you're interested in collaborating on building some cool stuff, feel free to dm us or drop us an email. 
            we will get back to you within 2 business days. we're always open to new ideas and projects!
          </p>
          
          <div className="space-y-5">
            <div>
              <h3 className="text-xl font-light mb-3">email:</h3>
              <a 
                href="mailto:teamdotapk@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
              >
                teamdotapk@gmail.com
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            
            <div>
              <h3 className="text-xl font-light mb-3">twitter:</h3>
              <a 
                href="https://x.com/teamdotapk" 
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                @teamdotapk
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
            
            <div>
              <h3 className="text-xl font-light mb-3">response time:</h3>
              <p className="text-gray-400">we typically respond within 2 business days.</p>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
