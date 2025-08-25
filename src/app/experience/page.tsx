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
      type: "Organization Role",
      description:
        "Leading technical initiatives and development projects for UTD's largest computer science organization.",
      technologies: ["React", "TypeScript", "Python", "Golang", "AWS", "GCP", "Firebase"],
      highlights: [
        "Developed internal tools to streamline operations",
        "Managed and mentored team of 45+ developers",
        "Conducted 100+ interviews for various technical roles",
        "Led transition to data consolidation and automated pipelines",
      ],
    },
    {
      title: "Lead Developer",
      company: "ACM UTD",
      location: "Dallas, TX",
      period: "Spring 2025",
      type: "Organization Role",
      description:
        "Worked to build the SAGE application by leading the development and managing a team of 10 officers.",
      technologies: ["React", "Typescript", "Python", "AWS Lambda", "AWS S3", "AWS DynamoDB"],
      highlights: [
        "Built Chrome extension for UTD officers",
        "Led SAGE website and backend development",
        "Created several data ingestion and ETL pipelines",
        "Architected extensive cloud infrastructure on AWS",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "JPMorgan Chase & Co.",
      location: "Dallas, TX",
      period: "Summer 2025",
      type: "Internship",
      description: "Developed maintenance features by extensively integrating existing systems for the external account import page to automate manual toil.",
      technologies: ["React", "Typescript", "Java", "Spring Framework", "SQL"],
      highlights: [
        "Delivered features for critical systems",
        "Improved system performance",
        "Collaborated with senior engineers",
      ],
    },
    {
      title: "Fullstack Software Developer Intern",
      company: "Verizon",
      location: "Dallas, TX",
      period: "Summer 2024",
      type: "Internship",
      description: "Developed enterprise financial systems and collaborated on large-scale applications.",
      technologies: ["React", "Node.js", "Express.js", "SQL"],
      highlights: [
        "Delivered features for critical systems",
        "Improved system performance",
        "Collaborated with senior engineers",
      ],
    },
    {
      title: "Software Developer Intern",
      company: "Voxai Solutions",
      location: "Dallas, TX",
      period: "Summer 2023 - Summer 2024",
      type: "Internship",
      description: "Developed enterprise financial systems and collaborated on large-scale applications.",
      technologies: ["C#", ".NET", "Node.js", "AWS Lambda", "SQL"],
      highlights: [
        "Delivered features for critical systems",
        "Improved system performance",
        "Collaborated with senior engineers",
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold font-serif mb-6 bg-gradient-to-r from-primary via-pink-500 to-blue-500 bg-clip-text text-transparent">
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
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
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
