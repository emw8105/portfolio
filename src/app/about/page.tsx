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
    "Python",
    "Firebase",
    "AWS",
    "C#/.NET",
    "Spring Boot",
    "Golang",
    "Docker",
    "RAG + Langchain",
    "LLM Integration",
    "System Architecture",
  ]

  const interests = [
    "Creating D&D Campaigns",
    "Hitting the gym",
    "Organizing music playlists",
    "Playing video games",
    "Building personal projects",
    "Cooking and baking",
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
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 glow">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold font-serif mb-4">Hi There! 👋</h2>
                  <div className="space-y-4 text-foreground leading-relaxed">
                    <p>
                      My name is Evan Wright, I&apos;m an experienced software engineer currently pursuing my Master&apos;s in Computer Science studying Intelligent Systems at UT Dallas.
                    </p>
                    <p>
                      I serve as the Director of Development for ACM UTD, the largest student organization on campus, where I lead my division of 45 officers to build and maintain web applications that support our members, officers, and the student body.
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
                <h3 className="text-2xl font-bold font-serif">My Core Skills & Technologies</h3>
              </div>
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
                <h3 className="text-2xl font-bold font-serif">Outside of work, I&apos;m interested in...</h3>
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
