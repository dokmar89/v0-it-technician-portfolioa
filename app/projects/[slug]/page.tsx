import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, Github, Calendar, Code, Star, TrendingUp, Zap, Shield, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getProject, getAllProjects } from "@/lib/projects-data"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject(params.slug)
  const allProjects = getAllProjects()
  const currentIndex = allProjects.findIndex((p) => p.slug === params.slug)
  const nextProject = allProjects[currentIndex + 1] || allProjects[0]
  const prevProject = allProjects[currentIndex - 1] || allProjects[allProjects.length - 1]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header with back navigation */}
      <div className="border-b border-border/20 bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Project Hero */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="cyberpunk-border">
                  {project.category}
                </Badge>
                <Badge variant={project.status === "Active Development" ? "default" : "secondary"}>
                  {project.status}
                </Badge>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold mb-4 cyberpunk-glow">{project.title}</h1>

              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">{project.longDescription}</p>

              <div className="flex flex-wrap gap-4 mb-8">
                {project.githubUrl && (
                  <Button asChild className="cyberpunk-button">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Source
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button asChild variant="outline" className="cyberpunk-border bg-transparent">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>

              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Started {project.startDate}
                </div>
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  {project.technologies.length} Technologies
                </div>
              </div>
            </div>

            <div className="lg:w-96">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="relative rounded-lg border border-border/20 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {project.metrics && (
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {project.metrics.map((metric, index) => (
              <Card key={index} className="cyberpunk-border bg-card/50 backdrop-blur-sm text-center">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Technologies */}
        <Card className="mb-12 cyberpunk-border bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="w-5 h-5" />
              Technologies & Tools
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="cyberpunk-border">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <Card className="mb-12 cyberpunk-border bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              Key Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-muted/20 border border-border/10 hover:bg-muted/30 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Architecture */}
        <Card className="mb-12 cyberpunk-border bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Technical Architecture
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(project.architecture).map(([key, value]) => (
                <div key={key} className="space-y-3 p-4 rounded-lg bg-muted/10 border border-border/10">
                  <h4 className="font-semibold capitalize text-primary flex items-center gap-2">
                    {key === "frontend" && <Zap className="w-4 h-4" />}
                    {key === "backend" && <TrendingUp className="w-4 h-4" />}
                    {key === "database" && <Users className="w-4 h-4" />}
                    {key === "security" && <Shield className="w-4 h-4" />}
                    {key}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Challenges */}
        <Card className="mb-12 cyberpunk-border bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Development Challenges & Solutions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {project.challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg bg-muted/10 border border-border/10 hover:bg-muted/20 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-accent">{index + 1}</span>
                  </div>
                  <span className="text-sm leading-relaxed">{challenge}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col md:flex-row gap-4 justify-between items-center pt-8 border-t border-border/20">
          <Link
            href={`/projects/${prevProject.slug}`}
            className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border/20 hover:bg-card/70 transition-colors group w-full md:w-auto"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <div>
              <div className="text-xs text-muted-foreground">Previous Project</div>
              <div className="font-medium">{prevProject.title}</div>
            </div>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="flex items-center gap-3 p-4 rounded-lg bg-card/50 border border-border/20 hover:bg-card/70 transition-colors group w-full md:w-auto"
          >
            <div className="text-right">
              <div className="text-xs text-muted-foreground">Next Project</div>
              <div className="font-medium">{nextProject.title}</div>
            </div>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  )
}
