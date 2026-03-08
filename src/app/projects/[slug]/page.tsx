"use client"

import { useState } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  CircleAlert,
  Code,
  ExternalLink,
  Github,
  Lightbulb,
  Rocket,
  Target,
  Users,
  Wrench,
} from "lucide-react"

import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
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
  const [activeNarrative, setActiveNarrative] = useState(0)
  const hasTeam = Boolean(project.team?.trim())

  if (!project) {
    notFound()
  }

  const narrativeSections = [
    {
      label: "Overview",
      title: "What this project is",
      icon: Lightbulb,
      content: project.overview,
    },
    {
      label: "Challenge",
      title: "What made it difficult",
      icon: CircleAlert,
      content: project.challenge,
    },
    {
      label: "Solution",
      title: "How I approached it",
      icon: Wrench,
      content: project.solution,
    },
  ].filter(
    (section): section is {
      label: string
      title: string
      icon: typeof Lightbulb
      content: string
    } => Boolean(section.content)
  )

  const activeSection = narrativeSections[activeNarrative] ?? narrativeSections[0]

  return (
    <div className="min-h-screen relative">
      <Navigation />

      <main className="relative overflow-hidden px-4 pt-24 pb-20 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-24 -left-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute top-[32rem] right-[-8rem] h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute bottom-24 left-1/3 h-64 w-64 rounded-full bg-electric/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-6xl space-y-8">
          <div>
            <Button
              variant="ghost"
              asChild
              className="group border border-border/60 bg-card/30 text-foreground transition-colors duration-300 hover:border-primary/40 hover:bg-card/55 hover:text-foreground"
            >
              <Link href="/projects" className="flex items-center gap-2 font-medium">
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                Back to Projects
              </Link>
            </Button>
          </div>

          <Card className="glass-card overflow-hidden p-6 sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="space-y-6">

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-1 rounded-full bg-gradient-coral" />
                    <h1 className="text-3xl font-bold font-serif sm:text-4xl lg:text-5xl">{project.title}</h1>
                  </div>

                  {project.subtitle && (
                    <p className="pl-4 text-lg text-muted-foreground sm:text-xl">{project.subtitle}</p>
                  )}

                  <p className="max-w-3xl pl-4 leading-relaxed text-foreground/90">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-2 pl-4">
                  {project.categories.map((category, idx) => (
                    <Badge key={idx} variant="outline" className="border-primary/30 bg-primary/5 text-sm">
                      {category}
                    </Badge>
                  ))}
                  <Badge variant={project.status === "Completed" ? "default" : "accent"} className="text-sm">
                    {project.status}
                  </Badge>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6 lg:grid-rows-[auto_auto]">
                <div className="rounded-2xl border border-border/60 bg-card/60 p-4 sm:col-span-2 lg:col-span-3">
                  <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5 text-accent" />
                    Date
                  </div>
                  <p className="text-lg font-semibold">{project.date}</p>
                </div>

                <div className="rounded-2xl border border-border/60 bg-card/60 p-4 sm:col-span-2 lg:col-span-3">
                  <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                    <Target className="h-3.5 w-3.5 text-accent" />
                    Duration
                  </div>
                  <p className="text-lg font-semibold">{project.duration}</p>
                </div>

                {hasTeam && (
                  <div className="rounded-2xl border border-border/60 bg-card/60 p-4 sm:col-span-2 lg:col-span-2">
                    <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                      <Users className="h-3.5 w-3.5 text-accent" />
                      Team
                    </div>
                    <p className="text-sm font-medium leading-relaxed text-foreground/90">{project.team}</p>
                  </div>
                )}

                <div className={`rounded-2xl border border-border/60 bg-card/60 p-4 sm:col-span-2 ${hasTeam ? "lg:col-span-4" : "lg:col-span-6"}`}>
                  <div className="mb-3 text-xs uppercase tracking-[0.24em] text-muted-foreground">Project Links</div>
                  <div className="flex flex-wrap gap-2">
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-2 border-primary/70 bg-card/50 transition-all duration-300 hover:border-transparent"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-2 border-primary/70 bg-card/50 transition-all duration-300 hover:border-transparent"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {project.images && project.images.length > 0 && <ProjectGallery project={project} />}

          <Card className="glass-card p-6 sm:p-8 glow-hover">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-8 w-1 rounded-full bg-gradient-coral" />
              <Lightbulb className="h-7 w-7 text-accent" />
              <h2 className="text-2xl font-bold font-serif">Inside The Build</h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-[180px_minmax(0,1fr)] xl:grid-cols-[200px_minmax(0,1fr)]">
              <div
                role="tablist"
                aria-label="Project build sections"
                className="flex flex-row gap-1 overflow-x-auto border-b border-border/50 pb-2 no-scrollbar lg:flex-col lg:gap-0 lg:border-b-0 lg:border-l lg:pb-0"
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
                      className={`min-w-fit cursor-pointer rounded-md border-b-2 px-3 py-2 text-left text-base font-medium transition-colors duration-200 lg:min-w-0 lg:border-b-0 lg:border-l-2 lg:px-4 ${isActive
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-transparent text-muted-foreground hover:border-primary/40 hover:bg-primary/5 hover:text-foreground"
                        }`}
                    >
                      <span className="block whitespace-nowrap">{section.label}</span>
                    </button>
                  )
                })}
              </div>

              <div className="min-h-[280px] rounded-2xl border border-border/60 bg-card/40 p-6 sm:p-7">
                {activeSection && (
                  <>
                    <div className="mb-4 flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-primary">
                      <activeSection.icon className="h-4 w-4" />
                      {activeSection.label}
                    </div>
                    <h3 className="mb-4 text-2xl font-bold font-serif sm:text-[1.75rem]">{activeSection.title}</h3>
                    <div className="text-base leading-8 text-foreground/90 sm:text-[1.05rem]">
                      {parseTextWithLinks(activeSection.content)}
                    </div>
                  </>
                )}
              </div>
            </div>
          </Card>

          <div className="space-y-8">
            <Card className="glass-card p-6 sm:p-8 glow-hover">
              <div className="mb-5 flex items-center gap-3">
                <div className="h-7 w-1 rounded-full bg-gradient-ocean" />
                <Code className="h-6 w-6 text-accent" />
                <h3 className="text-2xl font-bold font-serif">Technology Stack</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="border border-border/60 bg-secondary/45 px-3 py-1.5 text-base transition-colors duration-300 hover:bg-secondary/65"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>

            <div className="grid gap-8 lg:grid-cols-2">
              <Card className="glass-card p-6 sm:p-8 glow-hover">
                <div className="mb-5 flex items-center gap-3">
                  <div className="h-7 w-1 rounded-full bg-gradient-coral" />
                  <CheckCircle2 className="h-6 w-6 text-accent" />
                  <h3 className="text-2xl font-bold font-serif">Current Features</h3>
                </div>

                <div className="space-y-2">
                  {project.features?.map((feature, index) => (
                    <div
                      key={index}
                      className="rounded-xl border border-border/50 bg-card/50 px-3.5 py-3 transition-colors duration-300 hover:border-primary/25 hover:bg-card/65"
                    >
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                        <span className="text-base leading-[1.55] text-foreground/90">
                          {parseTextWithLinks(feature)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="glass-card p-6 sm:p-8 glow-hover">
                <div className="mb-5 flex items-center gap-3">
                  <div className="h-7 w-1 rounded-full bg-gradient-ocean" />
                  <Rocket className="h-6 w-6 text-accent" />
                  <h3 className="text-2xl font-bold font-serif">Future Enhancements</h3>
                </div>

                <ul className="space-y-2">
                  {project.futureEnhancements?.map((enhancement, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 rounded-xl border border-border/50 bg-card/50 px-3.5 py-3 transition-colors duration-300 hover:border-primary/25 hover:bg-card/65"
                    >
                      <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                      <span className="text-base leading-[1.55] text-foreground/90">
                        {parseTextWithLinks(enhancement)}
                      </span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
