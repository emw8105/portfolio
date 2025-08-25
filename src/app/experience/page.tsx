import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Director of Development",
      company: "ACM UTD",
      location: "Richardson, TX",
      period: "May 2025 - Present",
      type: "Organization Role",
      description:
        "Leads ACM UTD's engineering division, overseeing multiple project teams and officers in developing software for over 2,500 university members, with a focus on architectural strategy and technical mentorship.",
      technologies: ["JavaScript", "TypeScript", "React", "Python", "Golang", "AWS", "GCP", "Firebase", "GitHub"],
      highlights: [
        "Led engineering division, maintaining software for 2,500+ members.",
        "Provided architectural guidance and technical mentorship to project teams.",
        "Recruited skilled developers and team leads.",
        "Served on the ACM Board of Directors, aligning technical projects with organizational strategy.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "J.P. Morgan Chase & Co.",
      location: "Plano, TX",
      period: "Jun 2025 - Aug 2025",
      type: "Internship",
      description:
        "Engineered an automated maintenance scheduling system for Connected Banking, significantly reducing manual deployments and engineer intervention.",
      technologies: ["Java", "Spring Boot", "React", "TypeScript", "SQL", "Oracle DB", "Jira", "Bitbucket", "JUnit"],
      highlights: [
        "Automated maintenance scheduling, eliminating manual deployments.",
        "Enhanced Java microservices to query Oracle DB for dynamic splash page activation.",
        "Developed full-stack features for internal admin and customer-facing web apps.",
        "Created comprehensive JUnit test suites for backend endpoints, ensuring robustness.",
      ],
    },
    {
      title: "Development Lead",
      company: "ACM UTD",
      location: "Richardson, TX",
      period: "Dec 2024 - May 2025",
      type: "Organization Role",
      description:
        "Directed the full-stack development of SAGE, an AI-powered academic advising platform for UT Dallas students, managing architecture, sprint planning, and code quality.",
      technologies: ["TypeScript", "React", "Python", "AWS Lambda", "AWS S3", "LangChain", "Pinecone"],
      highlights: [
        "Led end-to-end development of SAGE, an AI-powered academic advising platform.",
        "Developed RAG-based chatbot with advanced AI models for academic queries.",
        "Designed scalable AWS infrastructure with automated CI/CD.",
        "Created custom asynchronous pipelines for university data, enhancing maintainability.",
      ],
    },
    {
      title: "Fullstack Software Developer Intern",
      company: "Verizon",
      location: "Irving, TX",
      period: "Jun 2024 - Aug 2024",
      type: "Internship",
      description:
        "Developed a self-service Oracle AWR Report generation tool using React.js and Express.js, improving database analysis efficiency and resource optimization.",
      technologies: ["React.js", "Node.js", "Express.js", "SQL", "Oracle DB"],
      highlights: [
        "Developed a self-service reporting solution, improving database analysis and resource usage.",
        "Integrated New Relic agents into servers, enhancing database observability.",
        "Enabled secure report generation for offshore teams, ensuring regulatory compliance.",
        "Implemented self-help and automation workflows, reducing operational toil.",
      ],
    },
    {
      title: "Software Developer Intern",
      company: "Voxai Solutions",
      location: "Dallas, TX",
      period: "Jun 2023 - Jun 2024",
      type: "Internship",
      description:
        "Built C# tools to automate Genesys OnPrem to Genesys Cloud migrations and developed AWS Lambda functions in Node.js and Python for payment processing and data transfer services.",
      technologies: ["C#", ".NET", "Node.js", "Python", "AWS Lambda", "SQL", "Microsoft SQL Server", "Azure"],
      highlights: [
        "Constructed C# tools for automated CX cloud migration, enabling reliable data transfer.",
        "Created AWS Lambda functions in Node.js for secure payment workflows and automated call flow procedures.",
        "Designed custom front-end web forms with HTML/CSS/JavaScript for Genesys CX functionality.",
        "Boosted migration tool performance through test-driven profiling and optimizations.",
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
