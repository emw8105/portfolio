"use client"
import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Target,
  Lightbulb,
  Code,
} from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { projectsData } from "@/lib/projects"
import ProjectGallery from "@/components/ui/project-gallery"
import { parseTextWithLinks } from "@/lib/utils"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData[params.slug as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="ghost" asChild className="hover:bg-muted/50">
              <Link href="/projects" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </div>

          {/* Project Header */}
          <Card className="glass-card p-8 mb-8 glow-hover">
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-10 bg-gradient-coral rounded-full"></div>
                  <h1 className="text-3xl sm:text-4xl font-bold font-serif">{project.title}</h1>
                </div>
                <p className="text-lg text-muted-foreground mb-4 pl-4">{project.subtitle}</p>
                <p className="text-foreground leading-relaxed pl-4">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-4 pl-4">
                <div className="flex flex-wrap items-center gap-2">
                  {project.categories.map((category: string, idx: number) => (
                    <Badge key={idx} variant="outline" className="border-primary/30 bg-primary/5 text-sm">{category}</Badge>
                  ))}
                  <Badge variant={project.status === "Completed" ? "default" : "accent"} className="text-sm">{project.status}</Badge>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm pl-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-accent" />
                  <span>{project.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-accent" />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-accent" />
                  <span>{project.team}</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild className="border-2 border-primary hover:border-transparent transition-all duration-300">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button variant="outline" size="sm" asChild className="border-2 border-primary hover:border-transparent transition-all duration-300">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Card>

          {/* Project Images */}
          {project.images && project.images.length > 0 && (
            <ProjectGallery project={project} />
          )}

          {/* Development Journey */}
          <Card className="glass-card p-8 mb-8 glow-hover">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-gradient-coral rounded-full"></div>
              <Lightbulb className="h-7 w-7 text-accent" />
              <h2 className="text-2xl font-bold font-serif">Development Journey</h2>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Project Overview</h3>
                <p className="text-foreground leading-relaxed">{project.overview}</p>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

              <div>
                <h3 className="text-lg font-semibold mb-3">The Challenge</h3>
                <p className="text-foreground leading-relaxed">{project.challenge}</p>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

              <div>
                <h3 className="text-lg font-semibold mb-3">My Solution</h3>
                <p className="text-foreground leading-relaxed">{parseTextWithLinks(project.solution)}</p>
              </div>
            </div>
          </Card>

          {/* Technical Details */}
          <Card className="glass-card p-8 mb-8 glow-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-gradient-ocean rounded-full"></div>
              <Code className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-bold font-serif">Technologies Used</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>

          {/* All Features */}
          <Card className="glass-card p-8 mb-8 glow-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-gradient-coral rounded-full"></div>
              <h3 className="text-xl font-bold font-serif">Complete Feature Set</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features && project.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-foreground">{parseTextWithLinks(feature)}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Future Enhancements */}
          <Card className="glass-card p-8 glow-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-6 bg-gradient-ocean rounded-full"></div>
              <h3 className="text-xl font-bold font-serif">Future Enhancements</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Here are some ideas I&apos;m considering for future versions of this project:
            </p>
            <ul className="space-y-3">
              {project.futureEnhancements && project.futureEnhancements.map((enhancement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">{parseTextWithLinks(enhancement)}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </main>
    </div>
  )
}
