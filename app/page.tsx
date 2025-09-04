import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { LiveDemo } from "@/components/live-demo"
import { Portfolio } from "@/components/portfolio"
import { Achievements } from "@/components/achievements"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { ProjectNavigation } from "@/components/project-navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <LiveDemo />
        <Portfolio />
        <Achievements />
        <Experience />
        <Contact />
      </main>
      <ProjectNavigation />
    </div>
  )
}
