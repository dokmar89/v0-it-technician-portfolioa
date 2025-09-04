"use client"

import { CustomButton } from "@/components/custom-ui"
import { CustomIcons } from "@/components/custom-icons"
import { useEffect, useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export function Hero() {
  const { t } = useLanguage()
  const [typedText, setTypedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const texts = ["Web Developer", "IT Specialista", "Cybersecurity Expert", "Full-Stack Developer"]

  useEffect(() => {
    const currentText = texts[currentIndex]
    if (typedText.length < currentText.length) {
      const timeout = setTimeout(() => {
        setTypedText(currentText.slice(0, typedText.length + 1))
      }, 100)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setTypedText("")
        setCurrentIndex((prev) => (prev + 1) % texts.length)
      }, 2000)
      return () => clearTimeout(timeout)
    }
  }, [typedText, currentIndex, texts])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative lg:ml-64 bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-card to-dark-muted">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 animate-pulse"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 255, 157, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 157, 0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyber-primary rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyber-accent rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-cyber-primary rounded-full animate-bounce"></div>
        </div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-cyber-text mb-6 font-sans tracking-tight">
            <span className="cyber-glow">Marek Dokoupil</span>
          </h1>

          <div className="h-16 mb-6">
            <h2 className="text-2xl md:text-3xl text-cyber-muted font-mono">
              <span className="text-cyber-primary cyber-glow">&gt;</span>
              <span className="cyber-glow">{typedText}</span>
              <span className="animate-pulse text-cyber-primary cyber-glow">|</span>
            </h2>
          </div>

          <p className="text-lg md:text-xl text-cyber-muted max-w-2xl mx-auto leading-relaxed text-pretty">
            Vytvářím bezpečná digitální řešení prostřednictvím webového vývoje, autentifikačních systémů a komplexní
            správy ICT infrastruktury.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <CustomButton variant="tech" className="px-8 text-lg font-semibold" onClick={scrollToContact}>
            <span className="flex items-center gap-2">
              Kontaktujte mě
              <CustomIcons.External className="h-5 w-5" />
            </span>
          </CustomButton>

          <div className="flex gap-4">
            <CustomButton
              variant="ghost"
              className="border-cyber-primary/50 text-cyber-primary hover:bg-cyber-primary/10"
              onClick={() => window.open("https://github.com/dokmar89", "_blank")}
            >
              <CustomIcons.GitHub className="h-5 w-5" />
            </CustomButton>
            <CustomButton variant="ghost" className="border-cyber-accent/50 text-cyber-accent hover:bg-cyber-accent/10">
              <CustomIcons.External className="h-5 w-5" />
            </CustomButton>
          </div>
        </div>

        <div className="animate-bounce">
          <div className="h-6 w-6 mx-auto text-cyber-muted cyber-glow">
            <svg viewBox="0 0 24 24" className="w-full h-full">
              <path
                d="M7 10L12 15L17 10"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
