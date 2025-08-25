import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card rounded-2xl p-12 sm:p-16 mb-12 glow-hover transition-all duration-500 opacity-0 animate-fade-in-up">
            <h1 className="text-5xl sm:text-7xl font-bold font-serif mb-8 text-foreground opacity-0 animate-slide-in-left animation-delay-200">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Evan Wright
              </span>
            </h1>
            <p className="text-2xl sm:text-3xl text-muted-foreground mb-12 leading-relaxed opacity-0 animate-slide-in-right animation-delay-400">
              Software Engineer
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center opacity-0 animate-fade-in-up animation-delay-400">
              <Button asChild size="lg" className="text-lg px-10 py-4 glow-hover transition-all duration-300">
                <Link href="/projects">
                  View Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-10 py-4 bg-transparent hover:bg-white/10 transition-all duration-300"
                asChild
              >
                <Link href="/about">About Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
