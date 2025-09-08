import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Code2 } from "lucide-react"
import Image from "next/image"
import { skills } from "@/lib/skills"
import { interests } from "@/lib/interests"

export default function AboutPage() {

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold font-serif mb-6 bg-gradient-to-r from-primary via-pink-500 to-blue-500 bg-clip-text text-transparent py-2">
              About Me
            </h1>
          </div>

          <div className="space-y-12">
            <Card className="glass-card p-8 glow-hover transition-all duration-500">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="relative flex-shrink-0 mx-auto sm:mx-0">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-gradient-to-br from-purple-500 to-pink-500 glow">
                    <Image
                      src="/assets/EvanWright_headshot.jpg"
                      alt="Evan Wright"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 -z-10 blur-xl" />
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-2xl font-bold font-serif mb-4">Hi There! 👋</h2>
                  <div className="space-y-4 text-foreground leading-relaxed">
                    <p>🎓 CS grad student @ UT Dallas (Intelligent Systems)</p>
                    <p>👥 Director of Development @ ACM UTD (leading 45 officers)</p>
                    <p>💻 Full-stack + cloud systems → I like building stuff</p>
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
                {skills.map((skill) => (
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
                <h3 className="text-2xl font-bold font-serif">Current Interests</h3>
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
