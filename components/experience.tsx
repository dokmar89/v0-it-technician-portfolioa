import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Senior IT Security Specialist",
    company: "TechGuard Solutions",
    location: "San Francisco, CA",
    period: "2022 - Present",
    description:
      "Lead cybersecurity initiatives including penetration testing, vulnerability assessments, and security architecture design for enterprise clients.",
    achievements: [
      "Reduced security incidents by 85% through proactive threat hunting",
      "Led security audits for 50+ enterprise applications",
      "Implemented zero-trust architecture for major financial client",
    ],
    technologies: ["Kali Linux", "Burp Suite", "SIEM", "AWS Security", "Python"],
  },
  {
    title: "Full-Stack Developer",
    company: "Digital Innovations Inc.",
    location: "Remote",
    period: "2020 - 2022",
    description:
      "Developed secure web applications and APIs while maintaining focus on security best practices and performance optimization.",
    achievements: [
      "Built 15+ production web applications with zero security breaches",
      "Improved application performance by 60% through optimization",
      "Mentored junior developers on secure coding practices",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
  },
  {
    title: "IT Systems Administrator",
    company: "CloudTech Corp",
    location: "Austin, TX",
    period: "2019 - 2020",
    description:
      "Managed enterprise IT infrastructure, implemented security policies, and provided technical support for 200+ users.",
    achievements: [
      "Achieved 99.9% system uptime through proactive monitoring",
      "Reduced help desk tickets by 40% through automation",
      "Successfully migrated legacy systems to cloud infrastructure",
    ],
    technologies: ["Linux", "VMware", "Active Directory", "Ansible", "Monitoring Tools"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30 lg:ml-64">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center font-[family-name:var(--font-playfair)]">
            Professional Experience
          </h2>

          <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto text-pretty">
            A track record of delivering secure, scalable solutions across diverse technology environments and industry
            sectors.
          </p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-border">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                      <div className="text-lg font-semibold text-accent">{exp.company}</div>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-pretty">{exp.description}</p>

                  <div>
                    <h4 className="font-semibold mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-pretty">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-accent/10 text-accent">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
