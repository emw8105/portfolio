import { Navigation } from "@/components/navigation"
import { PageHeader } from "@/components/page-header"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { skills } from "@/lib/skills"
import { interests } from "@/lib/interests"
import { InteractiveStretch } from "@/components/interactive-stretch"
import { DriftingJellyfish, SeafloorDecor, BubblesBackdrop, SeaTurtle } from "@/components/ocean-creatures"

export default function AboutPage() {

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Ambient bubbles */}
        <BubblesBackdrop count={12} opacity={0.22} />

        {/* Light rays */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="light-ray" style={{ left: "8%", "--ray-angle": "6deg" } as React.CSSProperties} />
          <div className="light-ray" style={{ left: "62%", "--ray-angle": "-4deg", animationDelay: "-4s", opacity: 0.6 } as React.CSSProperties} />
        </div>

        {/* Drifting jellyfish in the background */}
        <DriftingJellyfish top={8} right={3} delay={0} size={80} color="#c78bff" />
        <DriftingJellyfish top={42} left={1} delay={-2.5} size={58} color="#ff9a6b" />
        <DriftingJellyfish top={72} right={2} delay={-4} size={50} color="#4be0c1" />

        {/* Sea turtle swimming across mid-page */}
        <div aria-hidden className="pointer-events-none absolute overflow-hidden" style={{ top: "38%", left: 0, right: 0, height: 110 }}>
          <div style={{
            animationName: "swimLR, wiggle-y",
            animationDuration: "52s, 4s",
            animationDelay: "-26s, -2s",
            animationTimingFunction: "linear, ease-in-out",
            animationIterationCount: "infinite, infinite",
            display: "inline-block", opacity: 0.45,
          }}>
            <SeaTurtle size={110} />
          </div>
        </div>

        <div className="max-w-6xl mx-auto" style={{ position: "relative", zIndex: 1 }}>
          <PageHeader title="A bit about me" />

          {/* Asymmetric grid layout */}
          <div className="grid lg:grid-cols-12 gap-8 mb-12">
            {/* Left column - Profile */}
            <div className="lg:col-span-4">
              <Card className="glass-card p-8 sticky top-24">
                <div className="relative mb-6 mx-auto w-48 h-48">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border border-primary/20">
                    <Image
                      src="/assets/EvanWright_headshot.jpg"
                      alt="Evan Wright"
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold font-serif mb-2">Evan Wright</h2>
                    <p className="text-primary font-medium">Solutions Architect</p>
                  </div>

                  <div className="pt-4 border-t border-border text-sm space-y-2 text-foreground/80">
                    <p>Amazon Web Services</p>
                    <p>MS CS, UT Dallas</p>
                    <p>Dallas, TX</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right column - Content */}
            <div className="lg:col-span-8 space-y-8">
              {/* Introduction */}
              <Card className="glass-card p-8">
                <h3 className="text-2xl font-semibold font-serif mb-6">What I&apos;m about</h3>
                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p>
                    I&apos;m a Solutions Architect at AWS, working
                    closely with some of the world&apos;s largest organizations to design and
                    implement AWS service-based architectures. My focus is being a technical advisor and approachable partner for teams of all backgrounds,
                    helping solve the most complex challenges faced by enterprises.
                  </p>
                  <p>
                    I earned my Master&apos;s degree in Computer Science from UT Dallas (specializing in Intelligent Systems), and my work spans
                    cloud architecture, full-stack development, and ML/AI systems.
                  </p>
                  <p className="text-primary/80 italic border-l-2 border-primary pl-4">
                    Outside of work, I like to stay active at the gym and pursue side projects whenever an idea sticks.
                  </p>
                </div>
              </Card>

              {/* Skills with visual flair */}
              <Card className="glass-card p-8">
                <h3 className="text-2xl font-semibold font-serif mb-6">Technical arsenal</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm py-2 px-4 hover:bg-primary/20 hover:border-primary/40 transition-colors cursor-default border border-border"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>

              {/* Current interests */}
              <Card className="glass-card p-8">
                <h3 className="text-2xl font-semibold font-serif mb-6">Currently exploring</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {interests.map((interest) => (
                    <div key={interest} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary/70 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-foreground/90">{interest}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* Fun Nojima section */}
          <div className="mt-12 lg:pl-[calc(33.333333%+2rem)]">
            <div className="flex justify-center lg:justify-start">
              <InteractiveStretch />
            </div>
          </div>
        </div>

        {/* Seafloor kelp + coral anchored to bottom of page */}
        <SeafloorDecor className="z-0" />
      </main>
    </div>
  )
}
