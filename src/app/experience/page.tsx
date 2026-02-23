
import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import { experiences } from "@/lib/experience"
import Image from "next/image"

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold font-serif mb-4 bg-gradient-ocean bg-clip-text text-transparent inline-block">
              Experience
            </h1>
            <div className="h-1 w-32 bg-gradient-coral rounded-full mb-4"></div>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Professional roles, leadership positions, and contributions to the tech community
            </p>
          </div>

          {/* Timeline */}
          <div className="relative space-y-8">
            {/* Vertical line for desktop */}
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <Card className="glass-card p-8 glow-hover transition-all duration-500 lg:ml-12">
                  <div className="grid lg:grid-cols-12 gap-6">
                    {/* Left section - Meta info */}
                    <div className="lg:col-span-4 space-y-4">
                      <div>
                        <Badge
                          variant="outline"
                          className="text-xs mb-3 bg-accent/10 border-accent/30 text-accent font-medium"
                        >
                          {exp.type}
                        </Badge>
                        <h3 className="text-xl font-bold font-serif mb-2 text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-semibold text-lg">{exp.company}</p>
                      </div>

                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-accent" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="pt-4 border-t border-border/50">
                        <h4 className="font-semibold mb-3 text-xs uppercase tracking-wide text-muted-foreground">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="text-xs hover:bg-primary/20 hover:border-primary/30 transition-colors border border-border"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right section - Description & highlights */}
                    <div className="lg:col-span-8 space-y-6">
                      <p className="text-foreground leading-relaxed text-lg">
                        {exp.description}
                      </p>

                      <div>
                        <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground flex items-center gap-2">
                          <span className="w-1 h-4 bg-gradient-coral rounded-full"></span>
                          Key Highlights
                        </h4>
                        <div className="grid gap-3">
                          {exp.highlights.map((highlight, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-3"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 flex-shrink-0"></div>
                              <span className="text-sm leading-relaxed text-foreground/90">
                                {highlight}
                              </span>
                            </div>
                          ))}
                        </div>
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
