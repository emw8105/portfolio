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
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-primary">
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
                  <p className="max-w-xl text-[clamp(1.05rem,2vw,1.3rem)] leading-relaxed text-foreground/72">
                    {project.subtitle}
                  </p>
                )}

                <div className="max-w-2xl text-[1rem] leading-8 text-foreground/90 sm:text-[1.05rem]">
                  {parseTextWithLinks(project.description)}
                </div>

                {project.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {project.categories.map((cat, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-primary/25 bg-primary/[0.08] px-3.5 py-1.5 text-sm text-primary/90"
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
                    <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-electric/70">Date</dt>
                    <dd className="mt-1.5 text-[0.97rem] text-foreground">{project.date}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-electric/70">Duration</dt>
                    <dd className="mt-1.5 text-[0.97rem] text-foreground">{project.duration}</dd>
                  </div>
                  {hasTeam && (
                    <div>
                      <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-electric/70">Team</dt>
                      <dd className="mt-1.5 break-words text-[0.97rem] leading-6 text-foreground">{project.team}</dd>
                    </div>
                  )}
                  {projectLinks.length > 0 && (
                    <div>
                      <dt className="mb-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-electric/70">Links</dt>
                      <dd className="flex flex-col gap-2.5">
                        {projectLinks.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[0.93rem] text-primary transition-colors duration-200 hover:text-primary/80"
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
            <section className="mb-16 overflow-hidden rounded-2xl border border-primary/12 bg-primary/[0.045] sm:mb-20">
              {/* Tab bar + arrows */}
              <div className="flex items-center justify-between gap-4 border-b border-primary/20 px-6 sm:px-8">
                <div role="tablist" aria-label="Project build sections" className="flex gap-0">
                  {narrativeSections.map((section, index) => {
                    const isActive = index === activeNarrative
                    return (
                      <button
                        key={section.label}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setActiveNarrative(index)}
                        className={`relative py-4 pr-8 text-sm font-medium transition-all duration-200 ${isActive
                            ? "text-primary after:absolute after:inset-x-0 after:bottom-[-1px] after:h-[2px] after:rounded-full after:bg-primary"
                            : "text-foreground/40 hover:text-foreground/70"
                          }`}
                      >
                        {section.label}
                      </button>
                    )
                  })}
                </div>

                {/* Step counter + arrows */}
                <div className="flex shrink-0 items-center gap-3">
                  <span className="text-[0.7rem] font-mono tabular-nums text-foreground/35">
                    {String(activeNarrative + 1).padStart(2, "0")}&nbsp;/&nbsp;{String(narrativeSections.length).padStart(2, "0")}
                  </span>
                  <div className="flex gap-1">
                    <button
                      type="button"
                      aria-label="Previous section"
                      onClick={() => setActiveNarrative((p) => (p - 1 + narrativeSections.length) % narrativeSections.length)}
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/20 text-foreground/40 transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:text-primary disabled:opacity-25"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      aria-label="Next section"
                      onClick={() => setActiveNarrative((p) => (p + 1) % narrativeSections.length)}
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/20 text-foreground/40 transition-all duration-200 hover:border-primary/50 hover:bg-primary/10 hover:text-primary disabled:opacity-25"
                    >
                      <ArrowLeft className="h-3.5 w-3.5 rotate-180" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              {activeSection && (
                <div className="relative grid gap-0 lg:grid-cols-[220px_minmax(0,1fr)]">
                  {/* Left: label + heading */}
                  <div className="relative border-b border-primary/12 px-6 py-7 lg:border-b-0 lg:border-r lg:px-8 lg:py-9">
                    {/* Large watermark number */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute right-4 top-4 select-none font-serif text-[5rem] font-extrabold leading-none tracking-[-0.06em] text-primary/6"
                    >
                      {String(activeNarrative + 1).padStart(2, "0")}
                    </span>
                    <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-primary">
                      {activeSection.label}
                    </p>
                    <h3 className="font-serif text-[1.55rem] font-bold leading-[1.08] tracking-[-0.03em] text-foreground sm:text-[1.85rem]">
                      {activeSection.title}
                    </h3>
                  </div>

                  {/* Right: body text */}
                  <div className="px-6 py-7 sm:px-8 sm:py-9">
                    <div className="text-[1rem] leading-[1.85] text-foreground/90 sm:text-[1.03rem]">
                      {parseTextWithLinks(activeSection.content)}
                    </div>
                  </div>
                </div>
              )}
            </section>
          )}

          {/* ── Bottom: Tech + Lists ── */}
          <div className="space-y-12 sm:space-y-14">

            {/* Tech stack */}
            <section>
              <h3 className="mb-5 text-[0.67rem] font-semibold uppercase tracking-[0.3em] text-primary/80">
                Built with
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-primary/20 bg-primary/[0.07] px-3.5 py-1.5 text-sm text-foreground/88 transition-colors duration-200 hover:border-primary/40 hover:bg-primary/[0.13] hover:text-primary"
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
                    <h3 className="mb-6 text-[0.67rem] font-semibold uppercase tracking-[0.3em] text-primary/85">
                      Current Features
                    </h3>
                    <ol className="space-y-5">
                      {featureList.map((feature, i) => (
                        <li key={i} className="flex gap-4 border-t border-primary/15 pt-5 first:border-t-0 first:pt-0">
                          <span className="mt-0.5 shrink-0 font-serif text-[1.1rem] font-bold leading-none tracking-[-0.04em] text-primary/65">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[0.97rem] leading-7 text-foreground/90">
                            {parseTextWithLinks(feature)}
                          </span>
                        </li>
                      ))}
                    </ol>
                  </section>
                )}

                {futureList.length > 0 && (
                  <section>
                    <h3 className="mb-6 text-[0.67rem] font-semibold uppercase tracking-[0.3em] text-accent/90">
                      Future Enhancements
                    </h3>
                    <ol className="space-y-5">
                      {futureList.map((enhancement, i) => (
                        <li key={i} className="flex gap-4 border-t border-accent/15 pt-5 first:border-t-0 first:pt-0">
                          <span className="mt-0.5 shrink-0 font-serif text-[1.1rem] font-bold leading-none tracking-[-0.04em] text-accent/70">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[0.97rem] leading-7 text-foreground/90">
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
