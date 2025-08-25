import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Heart, Code2 } from "lucide-react"

export default function AboutPage() {
  const coreSkills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "AWS",
    "System Architecture",
  ]

  const interests = [
    "Full-Stack Web Development",
    "Cloud Architecture",
    "API Design",
    "System Architecture",
    "Open Source Contributions",
    "Technical Leadership",
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold font-serif mb-6 bg-gradient-to-r from-primary via-pink-500 to-blue-500 bg-clip-text text-transparent">
              About Me
            </h1>
          </div>

          <div className="space-y-12">
            <Card className="glass-card p-8 glow-hover transition-all duration-500">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 glow">
                  <User className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold font-serif mb-4">My Journey</h2>
                  <div className="space-y-4 text-foreground leading-relaxed">
                    <p>
                      I&apos;m Evan, a CS graduate student at UTD with a passion for building systems that matter. Currently
                      serving as Director of Development at ACM UTD, where I lead technical initiatives and mentor
                      fellow developers.
                    </p>
                    <p>
                      My experience spans from enterprise systems at JPMorgan Chase to personal projects like Wallify
                      and freelance work. I&apos;m drawn to the intersection of elegant code and real-world impact, whether
                      that&apos;s optimizing financial systems or turning Spotify playlists into art.
                    </p>
                    <p>
                      I believe in continuous learning, clean architecture, and building software that people actually
                      want to use. When I&apos;m not coding, you&apos;ll find me exploring new technologies or working on side
                      projects that solve interesting problems.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="glass-card p-8 glow-hover transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center glow">
                  <Code2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-serif">Core Expertise</h3>
              </div>
              <p className="text-muted-foreground mb-6">Technologies I&apos;m truly skilled with and use regularly</p>
              <div className="flex flex-wrap gap-3">
                {coreSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm py-2 px-4 hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="glass-card p-8 glow-hover transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-blue-500 rounded-full flex items-center justify-center glow">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-serif">What Drives Me</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {interests.map((interest) => (
                  <div key={interest} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex-shrink-0" />
                    <p className="text-foreground">{interest}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
