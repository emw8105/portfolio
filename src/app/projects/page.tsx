"use client"
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { projectsData } from "@/lib/projects"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

interface ProjectImageData {
  url: string
  alt: string
  caption: string
}

function ProjectPreviewImage({
  image,
  title,
  sizes,
  compact = false,
  priority = false,
}: {
  image: ProjectImageData
  title: string
  sizes: string
  compact?: boolean
  priority?: boolean
}) {
  const [fitClassName, setFitClassName] = useState(
    compact ? "object-contain p-2.5" : "object-contain p-3"
  )

  return (
    <Image
      src={image.url}
      alt={image.alt || `${title} preview image`}
      fill
      className={`${fitClassName} transition-transform duration-500 group-hover:scale-[1.02]`}
      sizes={sizes}
      priority={priority}
      onLoadingComplete={(img) => {
        const ratio = img.naturalWidth / img.naturalHeight

        if (ratio >= 1.45) {
          setFitClassName(compact ? "object-cover" : "object-cover")
          return
        }

        if (ratio >= 1.05) {
          setFitClassName(compact ? "object-contain p-2.5" : "object-contain p-3.5")
          return
        }

        setFitClassName(compact ? "object-contain p-3.5" : "object-contain p-5")
      }}
    />
  )
}

export default function ProjectsPage() {
  const router = useRouter()
  const projectEntries = Object.entries(projectsData)
  const [featuredProjectId, featuredProject] = projectEntries[0]
  const remainingProjects = projectEntries.slice(1)
  const layoutPattern = ["lg:col-span-4", "lg:col-span-2", "lg:col-span-3", "lg:col-span-3"]

  const handleCardClick = (projectId: string) => {
    router.push(`/projects/${projectId}`)
  }

  const renderProjectMosaic = (
    images: typeof featuredProject.images,
    title: string,
    options?: { compact?: boolean; reverse?: boolean }
  ) => {
    if (!images || images.length === 0) {
      return null
    }

    const previewImages = images.slice(0, 3)
    const compact = options?.compact ?? false
    const reverse = options?.reverse ?? false
    const frameClass = compact ? "h-[188px]" : "min-h-[340px]"
    const leadImageClass = reverse ? "col-start-2 row-span-2" : "row-span-2"
    const sideColumnClass = reverse ? "col-start-1" : "col-start-2"
    const leadFrameClass = compact ? "rounded-[1.3rem]" : "rounded-[1.6rem]"
    const supportingFrameClass = compact ? "rounded-[1rem]" : "rounded-[1.15rem]"
    const leadSurfaceClass = compact
      ? "bg-[rgba(6,22,50,0.88)]"
      : "bg-[rgba(5,18,44,0.92)]"
    const supportSurfaceClass = compact
      ? "bg-[rgba(4,16,40,0.85)]"
      : "bg-[rgba(4,14,36,0.88)]"

    if (previewImages.length === 1) {
      const image = previewImages[0]

      return (
        <div className={`relative ${frameClass} overflow-hidden ${leadFrameClass} border border-primary/14 ${leadSurfaceClass} shadow-[inset_0_1px_0_rgba(75,224,193,0.06)]`}>
          <ProjectPreviewImage
            image={image}
            title={title}
            compact={compact}
            priority={!compact}
            sizes={compact ? "(min-width: 1024px) 24vw, 100vw" : "(min-width: 1024px) 40vw, 100vw"}
          />
        </div>
      )
    }

    if (previewImages.length === 2) {
      return (
        <div className={`grid ${frameClass} gap-2 sm:gap-3 ${reverse ? "grid-cols-[0.92fr_1.15fr]" : "grid-cols-[1.15fr_0.92fr]"}`}>
          <div className={`relative overflow-hidden ${leadFrameClass} border border-primary/14 ${leadSurfaceClass} shadow-[inset_0_1px_0_rgba(75,224,193,0.06)] ${reverse ? "order-2" : ""}`}>
            <ProjectPreviewImage
              image={previewImages[0]}
              title={title}
              compact={compact}
              priority={!compact}
              sizes={compact ? "(min-width: 1024px) 16vw, 100vw" : "(min-width: 1024px) 28vw, 100vw"}
            />
          </div>
          <div className={`relative overflow-hidden ${supportingFrameClass} border border-primary/10 ${supportSurfaceClass} shadow-[inset_0_1px_0_rgba(75,224,193,0.05)] ${reverse ? "order-1" : ""}`}>
            <ProjectPreviewImage
              image={previewImages[1]}
              title={title}
              compact={compact}
              sizes={compact ? "(min-width: 1024px) 10vw, 100vw" : "(min-width: 1024px) 18vw, 100vw"}
            />
          </div>
        </div>
      )
    }

    return (
      <div className={`grid ${frameClass} gap-2 sm:gap-3 ${reverse ? "grid-cols-[0.92fr_1.15fr]" : "grid-cols-[1.15fr_0.92fr]"} grid-rows-2`}>
        <div className={`relative overflow-hidden ${leadFrameClass} border border-primary/14 ${leadSurfaceClass} shadow-[inset_0_1px_0_rgba(75,224,193,0.06)] ${leadImageClass}`}>
          <ProjectPreviewImage
            image={previewImages[0]}
            title={title}
            compact={compact}
            priority={!compact}
            sizes={compact ? "(min-width: 1024px) 16vw, 100vw" : "(min-width: 1024px) 28vw, 100vw"}
          />
        </div>

        <div className={`relative overflow-hidden ${supportingFrameClass} border border-primary/10 ${supportSurfaceClass} shadow-[inset_0_1px_0_rgba(75,224,193,0.05)] ${sideColumnClass}`}>
          <ProjectPreviewImage
            image={previewImages[1]}
            title={title}
            compact={compact}
            sizes={compact ? "(min-width: 1024px) 10vw, 100vw" : "(min-width: 1024px) 14vw, 100vw"}
          />
        </div>

        <div className={`relative overflow-hidden ${supportingFrameClass} border border-primary/10 ${supportSurfaceClass} shadow-[inset_0_1px_0_rgba(75,224,193,0.05)] ${sideColumnClass}`}>
          <ProjectPreviewImage
            image={previewImages[2]}
            title={title}
            compact={compact}
            sizes={compact ? "(min-width: 1024px) 10vw, 100vw" : "(min-width: 1024px) 14vw, 100vw"}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 max-w-4xl space-y-5">
            <div className="space-y-4">
              <h1 className="font-serif text-[clamp(3rem,7vw,6rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.05em] text-foreground">
                Projects
              </h1>
              {/* <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                Products and systems, open whichever ones look interesting.
              </p> */}
            </div>
          </div>

          <div className="group relative mb-10 pt-8 pr-2 sm:pt-10 sm:pr-4">
            <Image
              src="/assets/nojima-new.gif"
              alt="New"
              width={96}
              height={96}
              className="pointer-events-none absolute right-0 top-0 z-30 h-20 w-20 select-none drop-shadow-xl transition-transform duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[5px] sm:h-24 sm:w-24"
              draggable={false}
              unoptimized
            />

            <div
              onClick={() => handleCardClick(featuredProjectId)}
              className="editorial-card glow-hover relative cursor-pointer rounded-[2rem]"
            >
              <div className="grid gap-6 p-4 sm:p-6 lg:grid-cols-[minmax(280px,0.95fr)_minmax(0,1.05fr)] lg:gap-8 lg:p-8">
                <div className="relative">
                  {renderProjectMosaic(featuredProject.images, featuredProject.title)}
                  <div className="absolute left-5 top-5 rounded-full border border-primary/25 bg-background/65 px-4 py-1.5 text-xs uppercase tracking-[0.24em] text-primary backdrop-blur-sm">
                    Start here
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

                  <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.categories.map((category) => (
                        <Badge key={category} variant="outline" className="border-primary/25 bg-primary/5 px-3 py-1 text-xs uppercase tracking-[0.12em] text-foreground/88">
                          {category}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row xl:justify-end">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-6">
            {remainingProjects.map(([projectId, project], index) => {
              const projectMosaic = renderProjectMosaic(project.images, project.title, {
                compact: true,
                reverse: index % 2 === 1,
              })

              return (
                <div
                  key={projectId}
                  onClick={() => handleCardClick(projectId)}
                  className={`group relative cursor-pointer ${layoutPattern[index % layoutPattern.length]}`}
                >
                  <Card className="glow-hover flex h-full flex-col rounded-[1.75rem] border-primary/14 bg-[linear-gradient(180deg,rgba(7,24,52,0.85),rgba(4,14,34,0.93))] p-6 shadow-[0_24px_80px_rgba(0,6,22,0.45)]">
                    {projectMosaic && <div className="mb-5">{projectMosaic}</div>}

                    <div className="mb-5 flex items-start justify-between gap-3">
                      <div>
                        <p className="mb-2 text-xs uppercase tracking-[0.22em] text-primary">{project.date}</p>
                        <h3 className="font-serif text-[1.9rem] font-bold leading-[0.95] tracking-[-0.05em] text-foreground">
                          {project.title}
                        </h3>
                        {project.subtitle && (
                          <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground">
                            {project.subtitle}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="mb-4 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      <Badge variant={project.status === "Completed" ? "default" : "accent"} className="text-[0.65rem] uppercase tracking-[0.18em]">
                        {project.status}
                      </Badge>
                      <span>{project.categories.slice(0, 2).join(" / ")}</span>
                    </div>

                    <p className="mb-6 flex-grow text-sm leading-7 text-foreground/86 sm:text-base">
                      {project.description}
                    </p>

                    <div className="mt-auto flex items-center justify-end gap-3">
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
                      <div className="flex flex-wrap gap-3">
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
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}
