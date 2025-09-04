import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Shield, Globe, Database, Video, Users, Zap } from "lucide-react"
import Link from "next/link"
import { getAllProjects } from "@/lib/projects-data"

const iconMap = {
  "Security & Authentication": Shield,
  "Communication & Collaboration": Video,
  "Business Management": Users,
  "IoT & Smart Home": Globe,
  "Climate & Energy": Zap,
  "Development Framework": Database,
}

export function Portfolio() {
  const projects = getAllProjects()

  return (
    <section id="portfolio" className="py-20 lg:ml-64">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center font-sans">Featured Projects</h2>

          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto text-pretty">
            A selection of real projects from my GitHub showcasing expertise in authentication systems, video platforms,
            client portals, and modern web applications.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = iconMap[project.category as keyof typeof iconMap] || Database
              return (
                <Card
                  key={index}
                  className="border-border hover:border-accent/50 transition-all duration-300 group bg-card/50 backdrop-blur-sm"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-accent text-accent-foreground glow-effect">
                        <Icon className="h-3 w-3 mr-1" />
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl font-sans">{project.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-pretty text-sm">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs border-accent/30">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs border-accent/30">
                          +{project.technologies.length - 4} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Button size="sm" className="bg-accent hover:bg-accent/90 glow-effect" asChild>
                        <Link href={`/projects/${project.slug}`}>
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Details
                        </Link>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </div>
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
