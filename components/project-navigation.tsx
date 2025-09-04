"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronUp, FolderOpen, Shield, Video, Users, Globe, Zap, Database } from "lucide-react"
import Link from "next/link"
import { getAllProjects } from "@/lib/projects-data"

const categoryIcons = {
  "Security & Authentication": Shield,
  "Communication & Collaboration": Video,
  "Business Management": Users,
  "IoT & Smart Home": Globe,
  "Climate & Energy": Zap,
  "Development Framework": Database,
}

export function ProjectNavigation() {
  const [isExpanded, setIsExpanded] = useState(false)
  const projects = getAllProjects()

  const categories = Array.from(new Set(projects.map((p) => p.category)))

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-card/95 backdrop-blur-sm border border-border/20 rounded-lg shadow-2xl cyberpunk-border">
        {isExpanded && (
          <div className="p-4 max-h-96 overflow-y-auto">
            <div className="flex items-center gap-2 mb-4 text-sm font-medium text-muted-foreground">
              <FolderOpen className="w-4 h-4" />
              All Projects
            </div>

            <div className="space-y-3">
              {categories.map((category) => {
                const categoryProjects = projects.filter((p) => p.category === category)
                const Icon = categoryIcons[category as keyof typeof categoryIcons] || Database

                return (
                  <div key={category} className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-medium text-primary">
                      <Icon className="w-3 h-3" />
                      {category}
                    </div>

                    <div className="space-y-1 ml-5">
                      {categoryProjects.map((project) => (
                        <Link
                          key={project.slug}
                          href={`/projects/${project.slug}`}
                          className="block p-2 rounded-md hover:bg-muted/50 transition-colors group"
                          onClick={() => setIsExpanded(false)}
                        >
                          <div className="text-sm font-medium group-hover:text-primary transition-colors">
                            {project.title}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {project.technologies.slice(0, 2).join(", ")}
                            {project.technologies.length > 2 && "..."}
                          </div>
                          <Badge variant="outline" className="text-xs mt-1" size="sm">
                            {project.status}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        <div className="p-3 border-t border-border/20">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full justify-between cyberpunk-button"
          >
            <span className="flex items-center gap-2">
              <FolderOpen className="w-4 h-4" />
              Projects ({projects.length})
            </span>
            {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </Button>
        </div>
      </div>
    </div>
  )
}
