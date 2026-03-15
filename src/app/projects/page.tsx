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
  const projectEntries = Object.entries(projectsData)
  const [featuredProjectId, featuredProject] = projectEntries[0]
  const remainingProjects = projectEntries.slice(1)
  const layoutPattern = ["lg:col-span-4", "lg:col-span-2", "lg:col-span-3", "lg:col-span-3"]

  const handleCardClick = (projectId: string) => {
    router.push(`/projects/${projectId}`)
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 grid gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(220px,0.35fr)] lg:items-end">
            <div className="space-y-5">
              <span className="eyebrow">Selected Depths</span>
              <div className="space-y-4">
                <h1 className="max-w-4xl font-serif text-[clamp(3rem,7vw,6rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.05em] text-foreground">
                  Work that holds up
                  <span className="block text-primary">under pressure</span>
                </h1>
                <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                  A mix of cloud infrastructure, ML systems, and product experiments. The goal is not volume. It is technical judgment, range, and build quality.
                </p>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-primary/15 bg-background/25 px-5 py-5 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.24em] text-primary">Project spread</p>
              <div className="mt-4 space-y-3">
                <div>
                  <p className="font-serif text-3xl font-bold tracking-[-0.05em] text-foreground">{projectEntries.length}</p>
                  <p className="text-sm text-muted-foreground">deep dives with narrative case studies</p>
                </div>
                <p className="text-sm leading-6 text-muted-foreground">Infrastructure, full-stack products, machine learning, and experimental interfaces.</p>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <div
              onClick={() => handleCardClick(featuredProjectId)}
              className="editorial-card group cursor-pointer rounded-[2rem]"
            >
              <div className="grid gap-6 p-4 sm:p-6 lg:grid-cols-[minmax(280px,0.95fr)_minmax(0,1.05fr)] lg:gap-8 lg:p-8">
                <div className="relative min-h-[280px] overflow-hidden rounded-[1.6rem] border border-primary/12 bg-gradient-depth">
                  {featuredProject.images?.[0] && (
                    <Image
                      src={featuredProject.images[0].url}
                      alt={featuredProject.images[0].alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(min-width: 1024px) 40vw, 100vw"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full border border-primary/20 bg-background/55 px-4 py-1.5 text-xs uppercase tracking-[0.24em] text-primary backdrop-blur-sm">
                    Featured case study
                  </div>
                </div>

                <div className="relative z-10 flex flex-col justify-between gap-6 py-2">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <Badge variant={featuredProject.status === "Completed" ? "default" : "accent"} className="text-[0.65rem] uppercase tracking-[0.18em]">
                        {featuredProject.status}
                      </Badge>
                      <span>{featuredProject.date}</span>
                    </div>

                    <div className="space-y-3">
                      <h2 className="max-w-2xl font-serif text-4xl font-bold tracking-[-0.05em] text-foreground sm:text-5xl">
                        {featuredProject.title}
                      </h2>
                      {featuredProject.subtitle && (
                        <p className="max-w-2xl text-lg leading-relaxed text-[color:color-mix(in_oklch,var(--foreground)_78%,var(--primary)_22%)]">
                          {featuredProject.subtitle}
                        </p>
                      )}
                    </div>

                    <p className="max-w-2xl text-base leading-7 text-foreground/88 sm:text-lg">
                      {featuredProject.description}
                    </p>
                  </div>

                  <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_230px]">
                    <div>
                      <p className="mb-3 text-xs uppercase tracking-[0.24em] text-primary">Why it matters</p>
                      <div className="flex flex-wrap gap-2">
                        {featuredProject.categories.map((category) => (
                          <Badge key={category} variant="outline" className="border-primary/25 bg-primary/5 px-3 py-1 text-xs uppercase tracking-[0.12em] text-foreground/88">
                            {category}
                          </Badge>
                        ))}
                      </div>
                      <div className="mt-4 grid gap-2 text-sm leading-6 text-muted-foreground">
                        {featuredProject.features?.slice(0, 2).map((feature) => (
                          <p key={feature} className="rounded-xl border border-border/60 bg-background/24 px-3 py-2">
                            {feature}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 self-end">
                      {featuredProject.githubUrl && (
                        <Button
                          variant="outline"
                          size="lg"
                          asChild
                          className="rounded-full border-primary/30 bg-transparent hover:border-transparent"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a href={featuredProject.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            View Code
                          </a>
                        </Button>
                      )}
                      <Button
                        size="lg"
                        className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleCardClick(featuredProjectId)
                        }}
                      >
                        Read Case Study
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-6">
            {remainingProjects.map(([projectId, project], index) => (
              <div
                key={projectId}
                onClick={() => handleCardClick(projectId)}
                className={`group relative cursor-pointer ${layoutPattern[index % layoutPattern.length]}`}
              >
                <Card className="glow-hover flex h-full flex-col rounded-[1.75rem] border-primary/12 p-6">
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div>
                      <p className="mb-2 text-xs uppercase tracking-[0.22em] text-primary">{project.date}</p>
                      <h3 className="font-serif text-[1.9rem] font-bold leading-[0.95] tracking-[-0.05em] text-foreground transition-colors duration-300 group-hover:text-primary">
                        {project.title}
                      </h3>
                    </div>
                    {index === 0 && (
                      <Image
                        src="/assets/nojima-new.gif"
                        alt="New"
                        width={70}
                        height={70}
                        className="pointer-events-none h-16 w-16 select-none drop-shadow-xl"
                        draggable={false}
                        unoptimized
                      />
                    )}
                  </div>

                  <div className="mb-4 flex flex-wrap gap-2">
                    <Badge variant={project.status === "Completed" ? "default" : "accent"} className="text-[0.65rem] uppercase tracking-[0.18em]">
                      {project.status}
                    </Badge>
                    {project.categories.slice(0, 2).map((category) => (
                      <Badge key={category} variant="outline" className="border-primary/20 bg-primary/5 text-[0.65rem] uppercase tracking-[0.15em] text-foreground/88">
                        {category}
                      </Badge>
                    ))}
                  </div>

                  <p className="mb-6 flex-grow text-sm leading-7 text-foreground/86 sm:text-base">
                    {project.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-3">
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="rounded-full border-primary/25 bg-transparent hover:border-transparent"
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
                    )}
                    {project.liveUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="rounded-full border-accent/35 bg-transparent hover:border-transparent"
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
                </Card>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}