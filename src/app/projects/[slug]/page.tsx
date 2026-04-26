"use client"

import { useState } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"

import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import ProjectGallery from "@/components/ui/project-gallery"
import { projectsData } from "@/lib/projects"
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

  const [activeNarrative, setActiveNarrative] = useState(0)
  const hasTeam = Boolean(project.team?.trim())

  const narrativeSections = [
    { label: "Overview", title: "What this project is", content: project.overview },
    { label: "Challenge", title: "What made it difficult", content: project.challenge },
    { label: "Solution", title: "How I approached it", content: project.solution },
  ].filter((s): s is { label: string; title: string; content: string } => Boolean(s.content))

  const activeSection = narrativeSections[activeNarrative] ?? narrativeSections[0]

  const projectLinks = [
    project.githubUrl ? { href: project.githubUrl, label: "GitHub", icon: Github } : null,
    project.liveUrl ? { href: project.liveUrl, label: "Live Demo", icon: ExternalLink } : null,
  ].filter((l): l is { href: string; label: string; icon: typeof Github } => Boolean(l))

  const featureList = project.features?.filter(Boolean) ?? []
  const futureList = project.futureEnhancements?.filter(Boolean) ?? []

  const titleLen = project.title.length
  const titleFontSize =
    titleLen <= 10
      ? "clamp(3.2rem,7vw,5.5rem)"
      : titleLen <= 20
        ? "clamp(2.6rem,5.5vw,4.2rem)"
        : "clamp(2rem,4.2vw,3.2rem)"

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="px-4 pt-24 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">

          {/* Back */}
          <div className="mb-14">
            <Button
              variant="ghost"
              asChild
              className="group -ml-2 gap-2 text-muted-foreground hover:bg-transparent hover:text-foreground"
            >
              <Link href="/projects">
                <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
                All Projects
              </Link>
            </Button>
          </div>

          {/* ── Hero ── */}
          <section className="mb-16 sm:mb-20">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-16">

              <div className="space-y-7">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-primary/80">
                    Case Study
                  </span>
                  <span className="text-border">·</span>
                  <Badge
                    variant={project.status === "Completed" ? "default" : "accent"}
                    className="text-[0.68rem] uppercase tracking-[0.16em]"
                  >
                    {project.status}
                  </Badge>
                </div>

                <h1
                  className="font-serif font-extrabold uppercase leading-[0.92] tracking-[-0.05em] text-foreground"
                  style={{ fontSize: titleFontSize }}
                >
                  {project.title}
                </h1>

                {project.subtitle && (
                  <p className="max-w-xl text-[clamp(1.05rem,2vw,1.3rem)] leading-relaxed text-muted-foreground">
                    {project.subtitle}
                  </p>
                )}

                <div className="max-w-2xl text-[1rem] leading-8 text-foreground/82 sm:text-[1.05rem]">
                  {parseTextWithLinks(project.description)}
                </div>

                {project.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.categories.map((cat, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-border/50 bg-white/[0.04] px-3.5 py-1.5 text-sm text-foreground/68"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Metadata column */}
              <aside className="shrink-0 lg:w-52 lg:pt-2">
                <dl className="space-y-6">
                  <div>
                    <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Date</dt>
                    <dd className="mt-1.5 text-[0.97rem] text-foreground/88">{project.date}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Duration</dt>
                    <dd className="mt-1.5 text-[0.97rem] text-foreground/88">{project.duration}</dd>
                  </div>
                  {hasTeam && (
                    <div>
                      <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Team</dt>
                      <dd className="mt-1.5 break-words text-[0.97rem] leading-6 text-foreground/88">{project.team}</dd>
                    </div>
                  )}
                  {projectLinks.length > 0 && (
                    <div>
                      <dt className="mb-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Links</dt>
                      <dd className="flex flex-col gap-2.5">
                        {projectLinks.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[0.93rem] text-primary/80 transition-colors duration-200 hover:text-primary"
                          >
                            <link.icon className="h-3.5 w-3.5" />
                            {link.label}
                          </a>
                        ))}
                      </dd>
                    </div>
                  )}
                </dl>
              </aside>
            </div>
          </section>

          {/* ── Gallery ── */}
          {project.images && project.images.length > 0 && (
            <div className="mb-16 sm:mb-20">
              <ProjectGallery project={project} />
            </div>
          )}

          {/* ── Inside The Build ── */}
          {narrativeSections.length > 0 && (
            <section className="mb-16 sm:mb-20">
              <div
                role="tablist"
                aria-label="Project build sections"
                className="mb-10 flex gap-0 border-b border-border/40"
              >
                {narrativeSections.map((section, index) => {
                  const isActive = index === activeNarrative
                  return (
                    <button
                      key={section.label}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveNarrative(index)}
                      className={`relative pb-3.5 pr-8 text-sm font-medium transition-colors duration-200 ${isActive
                        ? "text-foreground after:absolute after:inset-x-0 after:bottom-[-1px] after:h-[2px] after:rounded-full after:bg-primary"
                        : "text-muted-foreground/70 hover:text-muted-foreground"
                        }`}
                    >
                      {section.label}
                    </button>
                  )
                })}
              </div>

              {activeSection && (
                <div className="grid gap-8 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-14">
                  <div>
                    <p className="mb-3 text-[0.67rem] font-semibold uppercase tracking-[0.3em] text-primary/75">
                      {activeSection.label}
                    </p>
                    <h3 className="font-serif text-[1.7rem] font-bold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-[2rem]">
                      {activeSection.title}
                    </h3>
                  </div>
                  <div className="text-[1rem] leading-8 text-foreground/82 sm:text-[1.05rem]">
                    {parseTextWithLinks(activeSection.content)}
                  </div>
                </div>
              )}
            </section>
          )}

          {/* ── Bottom: Tech + Lists ── */}
          <div className="space-y-12 sm:space-y-14">

            {/* Tech stack */}
            <section>
              <h3 className="mb-5 text-[0.67rem] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Built with
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border/50 bg-white/[0.04] px-3.5 py-1.5 text-sm text-foreground/75 transition-colors duration-200 hover:border-primary/30 hover:text-foreground/90"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Features + Future side by side */}
            {(featureList.length > 0 || futureList.length > 0) && (
              <div className="grid gap-10 sm:grid-cols-2 sm:gap-12 lg:gap-16">
                {featureList.length > 0 && (
                  <section>
                    <h3 className="mb-6 text-[0.67rem] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                      Current Features
                    </h3>
                    <ol className="space-y-5">
                      {featureList.map((feature, i) => (
                        <li key={i} className="flex gap-4 border-t border-border/35 pt-5 first:border-t-0 first:pt-0">
                          <span className="mt-0.5 shrink-0 font-serif text-[1.1rem] font-bold leading-none tracking-[-0.04em] text-primary/36">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[0.97rem] leading-7 text-foreground/82">
                            {parseTextWithLinks(feature)}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </section>
                )}

                {futureList.length > 0 && (
                  <section>
                    <h3 className="mb-6 text-[0.67rem] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                      Future Enhancements
                    </h3>
                    <ol className="space-y-5">
                      {futureList.map((enhancement, i) => (
                        <li key={i} className="flex gap-4 border-t border-border/35 pt-5 first:border-t-0 first:pt-0">
                          <span className="mt-0.5 shrink-0 font-serif text-[1.1rem] font-bold leading-none tracking-[-0.04em] text-accent/42">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[0.97rem] leading-7 text-foreground/82">
                            {parseTextWithLinks(enhancement)}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </section>
                )}
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  )
}
