"use client"
import { Navigation } from "@/components/navigation"
import { projectsData } from "@/lib/projects"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, ArrowUpRight } from "lucide-react"

export default function ProjectsPage() {
  const router = useRouter()
  const projects = Object.values(projectsData)

  // Find the most recent project by year (and optionally by order)
  const mostRecentYear = Math.max(...projects.map(p => parseInt(p.year.match(/\d{4}/)?.[0] || '0')))
  const mostRecentProject = projects.find(p => p.year.includes(mostRecentYear.toString()))

  const handleCardClick = (projectId: string) => {
    router.push(`/projects/${projectId}`)
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold font-serif mb-6 bg-gradient-to-r from-primary via-pink-500 to-blue-500 bg-clip-text text-transparent py-2">
              Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Check out the things I enjoyed making :D
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.id} onClick={() => handleCardClick(project.id)} className="relative">
                {/* put the "NEW" Nojima gif on the newest project in the list */}
                {mostRecentProject && project.id === mostRecentProject.id && (
                  <img
                    src="/assets/nojima-new.gif"
                    alt="New!"
                    className="absolute -top-6 -right-6 w-20 h-20 z-20 drop-shadow-xl pointer-events-none select-none"
                    draggable={false}
                  />
                )}
                <Card className="glass-card overflow-hidden hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group cursor-pointer h-full">
                  <div className="p-8 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold font-serif mb-3 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-3 flex-wrap">
                          <Badge variant="outline" className="flex flex-wrap gap-2 bg-muted/30 rounded-lg px-2 py-1">
                            {project.category}
                          </Badge>
                          <Badge variant={project.status === "Completed" ? "default" : "secondary"} className="text-xs">
                            {project.status}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{project.year}</span>
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
                          className="bg-transparent flex-1 border-2 border-primary hover:border-transparent"
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
                            className="bg-transparent flex-1 border-2 border-primary hover:border-transparent"
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