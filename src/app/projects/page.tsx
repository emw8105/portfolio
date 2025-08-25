"use client"
import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import { useRouter } from "next/navigation"

const projects = [
  {
    id: "wallify",
    title: "Wallify",
    description:
      "A web application that transforms your Spotify playlists into beautiful, personalized wallpapers using playlist data and album artwork.",
    longDescription:
      "Wallify connects to your Spotify account and analyzes your playlists to generate stunning wallpapers. It uses album artwork, color palettes, and playlist metadata to create unique designs.",
    category: "Web Application",
    status: "In Progress",
    technologies: ["JavaScript", "React", "Spotify API", "Canvas API", "Node.js"],
    githubUrl: "https://github.com/emw8105/Wallify",
    liveUrl: null,
    featured: true,
    icon: null,
    year: "2024",
    highlights: ["Spotify API Integration", "Dynamic Wallpaper Generation", "Custom Color Palettes"],
  },
  {
    id: "wordle-solver",
    title: "Wordle Solver",
    description:
      "A smart web application that helps solve daily Wordle puzzles using optimal strategies and algorithms.",
    longDescription:
      "This tool analyzes letter frequency, position probability, and word patterns to suggest the best possible guesses for Wordle puzzles.",
    category: "Web Application",
    status: "Completed",
    technologies: ["JavaScript", "React", "Algorithm Design", "Data Analysis"],
    githubUrl: "https://github.com/emw8105/wordle-solver",
    liveUrl: null,
    featured: true,
    icon: null,
    year: "2024",
    highlights: ["Optimal Strategy Algorithm", "Letter Frequency Analysis", "Interactive UI"],
  },
  {
    id: "form-autocomplete-ext",
    title: "Form Autocomplete Extension",
    description:
      "Chrome Extension designed for UTD club officers to simplify the special room request process through automated form filling.",
    longDescription:
      "This extension streamlines the bureaucratic process of requesting special rooms at UTD by automatically filling out repetitive form fields.",
    category: "Browser Extension",
    status: "Completed",
    technologies: ["JavaScript", "Chrome APIs", "HTML/CSS", "Manifest V3"],
    githubUrl: "https://github.com/acmutd/form-autocomplete-ext",
    liveUrl: null,
    featured: true,
    icon: null,
    year: "2024",
    highlights: ["Chrome Extension API", "Form Automation", "UTD Integration"],
  },
  {
    id: "sage-site",
    title: "SAGE Advisor Site",
    description:
      "Client website for the SAGE advisor application, helping UTD students with academic planning and course selection.",
    longDescription:
      "A comprehensive web application that serves as the client interface for SAGE, providing students with intelligent academic advising.",
    category: "Web Application",
    status: "Completed",
    technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
    githubUrl: "https://github.com/acmutd/sage-site",
    liveUrl: null,
    featured: false,
    icon: null,
    year: "2024",
    highlights: ["Academic Planning", "Student Interface", "UTD Integration"],
  },
  {
    id: "sieve-database",
    title: "Sieve Database",
    description:
      "Implementation of a conceptual database Sieve, a learned data-skipping index for data analytics by HUST researchers.",
    longDescription:
      "An academic implementation of cutting-edge database research, focusing on learned indexes and data-skipping techniques for improved query performance.",
    category: "Research Project",
    status: "Completed",
    technologies: ["Python", "Database Systems", "Machine Learning", "Data Analytics"],
    githubUrl: "https://github.com/emw8105/sieve-database",
    liveUrl: null,
    featured: false,
    icon: null,
    year: "2024",
    highlights: ["Learned Indexes", "Query Optimization", "Research Implementation"],
  },
  {
    id: "professor-ratings-script",
    title: "Professor Ratings Script",
    description:
      "A data pipeline tool to calculate, aggregate, and combine professor information from various sources for comprehensive analysis.",
    longDescription:
      "This tool scrapes and processes professor rating data from multiple sources, providing students with consolidated information for course selection.",
    category: "Data Tool",
    status: "Completed",
    technologies: ["Python", "Data Processing", "Web Scraping", "APIs"],
    githubUrl: "https://github.com/emw8105/professor-ratings-script",
    liveUrl: null,
    featured: false,
    icon: null,
    year: "2024",
    highlights: ["Data Pipeline", "Multi-source Aggregation", "Student Tool"],
  },
  {
    id: "psychology-site",
    title: "Clinical Psychology Website",
    description:
      "Professional website design and development for a clinical psychologist, featuring appointment booking and patient resources.",
    longDescription:
      "A custom-built professional website for a clinical psychologist, including patient portal, appointment scheduling, and resource library.",
    category: "Freelance Project",
    status: "In Progress",
    technologies: ["React", "Next.js", "Tailwind CSS", "Vercel", "CMS"],
    githubUrl: "https://github.com/emw8105/ishan-psych-profile",
    liveUrl: null,
    featured: false,
    icon: null,
    year: "2024",
    highlights: ["Professional Design", "Patient Portal", "Appointment System"],
  },
]

export default function ProjectsPage() {
  const router = useRouter()

  const handleCardClick = (projectId: string) => {
    router.push(`/projects/${projectId}`)
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold font-serif mb-6 bg-gradient-to-r from-primary via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A showcase of software engineering projects that solve real problems and push technical boundaries.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.id} onClick={() => handleCardClick(project.id)}>
                <Card className="glass-card overflow-hidden hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group cursor-pointer h-full">
                  <div className="p-8 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold font-serif mb-3 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-3 flex-wrap">
                          <Badge variant="outline" className="text-sm">
                            {project.category}
                          </Badge>
                          <Badge variant={project.status === "Completed" ? "default" : "secondary"} className="text-sm">
                            {project.status}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{project.year}</span>
                        </div>
                      </div>
                      <ArrowUpRight className="h-6 w-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </div>

                    <p className="text-foreground leading-relaxed mb-8 flex-grow">{project.description}</p>

                    <div className="flex flex-col gap-4 mt-auto">
                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="flex-1 bg-transparent"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            <Github className="h-4 w-4" />
                            Code
                          </a>
                        </Button>
                        {project.liveUrl && (
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="flex-1 bg-transparent"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2"
                            >
                              <ExternalLink className="h-4 w-4" />
                              Live
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
