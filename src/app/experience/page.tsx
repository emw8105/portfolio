import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Director of Development",
      company: "ACM UTD",
      location: "Dallas, TX",
      period: "Current",
      type: "Leadership",
      description:
        "Leading technical initiatives and development projects for UTD's largest computer science organization.",
      technologies: ["JavaScript", "TypeScript", "React", "Node.js"],
      highlights: [
        "Built Chrome extension for UTD officers",
        "Led SAGE website development",
        "Mentored development team",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "JPMorgan Chase & Co.",
      location: "Dallas, TX",
      period: "Summer 2023",
      type: "Internship",
      description: "Developed enterprise financial systems and collaborated on large-scale applications.",
      technologies: ["Java", "Python", "Spring Framework", "SQL"],
      highlights: [
        "Delivered features for critical systems",
        "Improved system performance",
        "Collaborated with senior engineers",
      ],
    },
    {
      title: "Freelance Developer",
      company: "Independent",
      location: "Dallas, TX",
      period: "Ongoing",
      type: "Freelance",
      description: "Building custom web applications and professional websites for clients.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Vercel"],
      highlights: ["Clinical psychologist website", "Multiple successful projects", "Long-term client relationships"],
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold font-serif mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Experience
            </h1>
            <p className="text-xl text-muted-foreground">Professional roles and contributions</p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="glass-card p-8 glow-hover transition-all duration-500">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs bg-primary/10 border-primary/30">
                        {exp.type}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold font-serif mb-2">{exp.title}</h3>
                    <p className="text-primary font-semibold mb-2">{exp.company}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-2/3 space-y-6">
                    <p className="text-foreground leading-relaxed">{exp.description}</p>

                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Key Highlights</h4>
                      <div className="grid gap-2">
                        {exp.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs hover:bg-primary/20 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
