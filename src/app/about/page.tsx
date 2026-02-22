import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { skills } from "@/lib/skills"
import { interests } from "@/lib/interests"

export default function AboutPage() {

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header with personality */}
          <div className="mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold font-serif mb-4 bg-gradient-ocean bg-clip-text text-transparent inline-block">
              A bit about me
            </h1>
            <div className="h-1 w-32 bg-gradient-coral rounded-full"></div>
          </div>

          {/* Asymmetric grid layout */}
          <div className="grid lg:grid-cols-12 gap-8 mb-12">
            {/* Left column - Profile */}
            <div className="lg:col-span-4">
              <Card className="glass-card p-8 glow-hover transition-all duration-500 sticky top-24">
                <div className="relative mb-6 mx-auto w-48 h-48">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-ocean blur-xl opacity-40"></div>
                  <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary/30">
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

                  <div className="pt-4 border-t border-border text-sm space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-1 h-3 bg-gradient-ocean rounded-full"></div>
                      <p className="text-foreground">Amazon Web Services</p>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-1 h-3 bg-gradient-coral rounded-full"></div>
                      <p className="text-foreground">MS in CS, UT Dallas</p>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-1 h-3 bg-gradient-ocean rounded-full"></div>
                      <p className="text-foreground">Dallas, TX</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right column - Content */}
            <div className="lg:col-span-8 space-y-8">
              {/* Introduction */}
              <Card className="glass-card p-8 glow-hover transition-all duration-500">
                <h3 className="text-2xl font-bold font-serif mb-6 flex items-center gap-3">
                  <span className="w-1 h-8 bg-gradient-ocean rounded-full"></span>
                  What I'm about
                </h3>
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p>
                    I'm a Solutions Architect at <span className="text-accent font-semibold">AWS</span>, working
                    closely with <span className="text-accent font-semibold">some of the world's largest organizations</span> to design and
                    implement cloud-native architectures. My focus is being a knowledgeable and approachable partner for technical teams,
                    helping solve the most complex challenges faced by enterprises.
                  </p>
                  <p>
                    I earned my Master's degree in Computer Science from UT Dallas (specializing in Intelligent Systems), and my work spans
                    cloud architecture, full-stack development, and <span className="text-accent font-semibold">ML/AI systems</span>.
                  </p>
                  <p className="text-primary/80 italic border-l-2 border-primary pl-4">
                    Outside of work, I'm staying active at the gym and tend to jump into side projects whenever an idea sticks, but time is short and the ideas are many.
                  </p>
                </div>
              </Card>

              {/* Skills with visual flair */}
              <Card className="glass-card p-8 glow-hover transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-ocean rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold font-serif">Technical Arsenal</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm py-2 px-4 hover:bg-primary/20 hover:border-primary/40 transition-all cursor-default border border-border"
                      style={{
                        animationDelay: `${index * 50}ms`
                      }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>

              {/* Current interests */}
              <Card className="glass-card p-8 glow-hover transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-coral opacity-5 rounded-full blur-3xl"></div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-coral rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold font-serif">Currently exploring</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {interests.map((interest, index) => (
                    <div key={interest} className="flex items-start gap-3 group">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                      <p className="text-foreground group-hover:text-primary transition-colors">{interest}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* Fun Nojima section */}
          <div className="mt-12 lg:pl-[calc(33.333333%+2rem)]">
            <div className="flex justify-center lg:justify-start">
              <Image
                src="/assets/nojima-stretch.gif"
                alt="Nojima stretching"
                width={300}
                height={200}
                className="rounded-xl hover:scale-105 transition-transform duration-300"
                unoptimized
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
