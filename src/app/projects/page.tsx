"use client"
import { Navigation } from "@/components/navigation"
import { projectsData } from "@/lib/projects"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

export default function ProjectsPage() {
  const router = useRouter()
  const projects = Object.values(projectsData)

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
            {projects.map((project, index) => (
              <div key={project.id} onClick={() => handleCardClick(project.id)} className="relative">
                <Card className="flex flex-col glass-card relative hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group cursor-pointer h-full">

                  {/* highlight only the newest (first) project */}
                  {index === 0 && (
                    <Image
                      src="/assets/nojima-new.gif"
                      alt="New!"
                      width={80}
                      height={80}
                      className="absolute -top-8 -right-8 w-20 h-20 z-20 drop-shadow-xl pointer-events-none select-none"
                      draggable={false}
                      unoptimized
                    />
                  )}

                  <div className="p-8 flex flex-col flex-1">
                    {/* header */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold font-serif mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>

                      {/* categories as tags */}
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.categories.map((category: string, idx: number) => (
                          <Badge key={idx} variant="black">
                            {category}
                          </Badge>
                        ))}
                      </div>

                      {/* status + year get a line */}
                      <div className="flex items-center gap-2 text-sm">
                        <Badge variant={project.status === "Completed" ? "default" : "accent"}>
                          {project.status}
                        </Badge>
                        <span className="text-muted-foreground">{project.year}</span>
                      </div>
                    </div>


                    {/* description */}
                    <p className="text-foreground leading-relaxed mb-8 flex-grow">
                      {project.description}
                    </p>

                    {/* footer (buttons) */}
                    <div className="mt-auto flex gap-3">
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
                </Card>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}