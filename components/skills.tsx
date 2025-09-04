import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Video, Settings } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    color: "text-blue-400",
    skills: ["TypeScript", "React", "Next.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
  },
  {
    title: "Backend & Database",
    icon: Database,
    color: "text-emerald-400",
    skills: [
      "Supabase",
      "PostgreSQL",
      "Node.js",
      "REST APIs",
      "Authentication",
      "Real-time Data",
      "SQL",
      "Database Design",
    ],
  },
  {
    title: "Specialized Applications",
    icon: Video,
    color: "text-purple-400",
    skills: [
      "Video Conferencing",
      "Real-time Communication",
      "Client Portals",
      "Authentication Systems",
      "Home Automation",
      "Climate Control",
    ],
  },
  {
    title: "Development Tools",
    icon: Settings,
    color: "text-orange-400",
    skills: ["Git", "GitHub", "VS Code", "npm/yarn", "Vercel", "Docker", "Linux", "Bash Scripting"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-900/30 lg:ml-64">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-[family-name:var(--font-playfair)] text-white">
              Technical Skills
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto text-pretty">
              Specializuji se na moderní webové technologie s důrazem na TypeScript, React aplikace a Supabase backend
              řešení pro komplexní systémy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card
                  key={index}
                  className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors duration-200"
                >
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold flex items-center gap-3">
                      <IconComponent className={`h-6 w-6 ${category.color}`} />
                      <span className="text-slate-200">{category.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="bg-slate-700/50 text-slate-300 border-slate-600 hover:bg-slate-700 transition-colors duration-200"
                        >
                          {skill}
                        </Badge>
                      ))}
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
