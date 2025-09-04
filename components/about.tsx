"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Database, Code, Video, Shield, Terminal, Zap } from "lucide-react"
import { useEffect, useState } from "react"

const highlights = [
  {
    icon: Code,
    title: "TypeScript & React",
    description:
      "Mám zkušenosti s vývojem webových aplikací. Moje preference je v TypeScript, React, Next.js and Supabase jako backend.",
  },
  {
    icon: Shield,
    title: "Autentifikační systémy a systémy pro rozpoznávání textu, obrázků a extrakce dat",
    description:
      "Dva roky jsem pracoval na systému ověření věku, kdy mou obrovskou výhodou bylo využití AI k odhadu věku uživatele na základě živého obrazu z webkamery.",
  },
  {
    icon: Video,
    title: "Platforma pro video pohovory",
    description: "Developing video conferencing and streaming platforms with real-time communication",
  },
  {
    icon: Database,
    title: "Full-Stack Solutions",
    description: "Creating complete client portals, management systems and home automation solutions",
  },
]

export function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="about" className="py-20 lg:ml-64 relative overflow-hidden">
      <div
        className="fixed pointer-events-none z-0 w-96 h-96 rounded-full opacity-60 blur-3xl transition-all duration-300 ease-out"
        style={{
          background:
            "radial-gradient(circle, rgba(34, 197, 94, 0.8) 0%, rgba(34, 197, 94, 0.4) 50%, rgba(34, 197, 94, 0.1) 100%)",
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center font-[family-name:var(--font-playfair)]">
            About Me
          </h2>

          <div className="text-center mb-16">
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-primary/5 to-accent/5 rounded-3xl blur-3xl"></div>

              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 bg-accent/80 rounded-full transition-all duration-500 ease-out shadow-lg shadow-accent/50"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + (i % 2) * 40}%`,
                      transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.02 * (i + 1)}px, ${(mousePosition.y - window.innerHeight / 2) * 0.02 * (i + 1)}px)`,
                    }}
                  />
                ))}
              </div>

              <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 md:p-12 hover:border-accent/30 transition-all duration-300">
                <div
                  className="absolute top-4 left-4 w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center transition-all duration-300"
                  style={{
                    transform: `translate(${(mousePosition.x - window.innerWidth / 2) * 0.01}px, ${(mousePosition.y - window.innerHeight / 2) * 0.01}px)`,
                  }}
                >
                  <Terminal className="h-4 w-4 text-accent" />
                </div>
                <div
                  className="absolute top-4 right-4 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center transition-all duration-300"
                  style={{
                    transform: `translate(${(mousePosition.x - window.innerWidth / 2) * -0.01}px, ${(mousePosition.y - window.innerHeight / 2) * -0.01}px)`,
                  }}
                >
                  <Zap className="h-4 w-4 text-primary" />
                </div>

                <div className="space-y-6">
                  <p className="text-xl leading-relaxed text-foreground mb-6 text-pretty font-medium">
                    Specializuji se na vývoj moderních webových aplikací s TypeScript, React a Next.js. Mám rozsáhlé
                    zkušenosti s vytvářením autentifikačních systémů, video platforem a komplexních klientských portálů
                    s využitím Supabase jako backend řešení.
                  </p>

                  <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
                    Mezi mé hlavní projekty patří PassProve (pokročilý autentifikační systém), video konferenční
                    platformy, systémy pro správu domácností a různé klientské portály. Neustále se vzdělávám v
                    nejnovějších technologiích a best practices.
                  </p>

                  <div className="flex justify-center gap-8 pt-6 border-t border-border/30">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">15+</div>
                      <div className="text-sm text-muted-foreground">Projektů</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">5+</div>
                      <div className="text-sm text-muted-foreground">Let zkušeností</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">100%</div>
                      <div className="text-sm text-muted-foreground">TypeScript</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <Card
                  key={index}
                  className="border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                      <Icon className="h-6 w-6 text-accent group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="font-semibold mb-2 text-balance">{item.title}</h3>
                    <p className="text-sm text-muted-foreground text-pretty">{item.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
