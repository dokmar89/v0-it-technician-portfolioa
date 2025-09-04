"use client"

import { useState, useEffect } from "react"
import { CustomButton } from "@/components/custom-ui"
import { CustomIcons } from "@/components/custom-icons"
import { ThemeToggle } from "./theme-toggle"
import { LanguageToggle } from "./language-toggle"
import { useLanguage } from "@/contexts/language-context"

const navItems = [
  { name: "Domů", href: "#hero", icon: "Home" },
  { name: "O mně", href: "#about", icon: "User" },
  { name: "Dovednosti", href: "#skills", icon: "Code" },
  { name: "Live Demo", href: "#demo", icon: "Video" },
  { name: "Portfolio", href: "#portfolio", icon: "Database" },
  { name: "Kontakt", href: "#contact", icon: "External" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [scrollProgress, setScrollProgress] = useState(0)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const renderIcon = (iconName: string, className = "h-4 w-4") => {
    const IconComponent = CustomIcons[iconName as keyof typeof CustomIcons]
    return IconComponent ? <IconComponent className={className} /> : null
  }

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-1 bg-background/20 z-40">
        <div
          className="h-full bg-gradient-to-r from-primary via-primary/80 to-accent transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav className="fixed top-1/2 left-8 -translate-y-1/2 z-50 hidden lg:block">
        <div className="relative">
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5 rounded-3xl blur-xl" />

          <div className="relative bg-background/90 backdrop-blur-md border border-border/50 rounded-3xl p-6 shadow-2xl">
            {/* Logo Section */}
            <div className="mb-8 text-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-md group-hover:blur-lg transition-all duration-300" />
                <div className="relative p-4 bg-background/80 rounded-2xl border border-border/50">
                  <div className="flex flex-col items-center gap-2">
                    <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl">
                      <CustomIcons.Security className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-foreground text-lg tracking-wide">Marek</div>
                      <div className="text-sm text-muted-foreground font-medium">Dokoupil</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Items */}
            <div className="space-y-2">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.substring(1)

                return (
                  <div key={item.name} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100" />

                    <button
                      onClick={() => scrollToSection(item.href)}
                      className={`relative w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${
                        isActive
                          ? "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                          : "text-foreground hover:bg-accent/30 hover:scale-105 hover:shadow-md"
                      }`}
                    >
                      <div
                        className={`p-2 rounded-lg transition-all duration-300 ${
                          isActive ? "bg-primary-foreground/20" : "bg-primary/10 group-hover:bg-primary/20"
                        }`}
                      >
                        {renderIcon(item.icon)}
                      </div>

                      <span className="font-medium text-sm tracking-wide">{item.name}</span>

                      {isActive && (
                        <div className="ml-auto flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse" />
                          <div className="w-1 h-1 bg-primary-foreground/60 rounded-full animate-ping" />
                        </div>
                      )}

                      {!isActive && (
                        <div className="ml-auto w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100" />
                      )}
                    </button>
                  </div>
                )
              })}
            </div>

            {/* Controls */}
            <div className="mt-8 pt-6 border-t border-border/50">
              <div className="flex justify-center gap-2">
                <ThemeToggle />
                <LanguageToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed top-8 right-8 z-50">
        <CustomButton
          variant="ghost"
          className="rounded-full bg-background/90 backdrop-blur-md border border-border shadow-lg hover:shadow-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CustomIcons.Close className="h-6 w-6" /> : <CustomIcons.Menu className="h-6 w-6" />}
        </CustomButton>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="absolute top-full right-0 mt-4 w-64 bg-background/95 backdrop-blur-md border border-border rounded-2xl p-6 shadow-xl">
            <div className="space-y-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1)

                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${
                      isActive ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-accent/50"
                    }`}
                  >
                    {renderIcon(item.icon, "h-5 w-5")}
                    {item.name}
                  </button>
                )
              })}

              <div className="border-t border-border pt-3 mt-4">
                <div className="flex gap-2">
                  <ThemeToggle />
                  <LanguageToggle />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
