import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { InteractiveTap } from "@/components/interactive-tap"

export default function HomePage() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navigation />

      <section className="flex-1 flex items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto w-full">
          {/* Asymmetric hero layout */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left column - Main content */}
            <div className="lg:col-span-7 space-y-6 opacity-0 animate-fade-in-up">
              <div className="space-y-3">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-serif leading-none opacity-0 animate-slide-in-left animation-delay-200">
                  <span className="block text-foreground">Evan</span>
                  <span className="block bg-gradient-ocean bg-clip-text mt-2">Wright</span>
                </h1>
                <div className="h-1 w-24 bg-gradient-ocean rounded-full opacity-0 animate-slide-in-left animation-delay-400"></div>
              </div>

              <p className="text-2xl sm:text-3xl text-muted-foreground leading-relaxed opacity-0 animate-slide-in-right animation-delay-400">
                Solutions Architect
              </p>

              <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed opacity-0 animate-fade-in-up animation-delay-600">
                Designing <span className="text-accent font-semibold">cloud-native architectures</span> and
                building <span className="text-accent font-semibold">intelligent systems</span> for enterprise-scale
                organizations. Specializing in <span className="text-accent font-semibold">scalable solutions</span> that
                bridge infrastructure, data, and AI.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0 animate-fade-in-up animation-delay-700">
                <Button
                  asChild
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 relative overflow-hidden group border-2 border-primary bg-primary/10 text-primary hover:bg-primary hover:text-background transition-all duration-300"
                >
                  <Link href="/projects" className="flex items-center gap-2">
                    <span className="relative z-10">View Projects</span>
                    <ArrowRight className="ml-1 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <span className="absolute inset-0 bg-gradient-ocean opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 border-2 border-border hover:border-accent hover:text-accent hover:bg-accent/10 transition-all duration-300"
                  asChild
                >
                  <Link href="/about">About Me</Link>
                </Button>
              </div>
            </div>

            {/* Right column - Interactive Nojima */}
            <div className="lg:col-span-5 flex items-center justify-center opacity-0 animate-fade-in-up animation-delay-600">
              <InteractiveTap />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
