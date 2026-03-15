import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { InteractiveTap } from "@/components/interactive-tap"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navigation />

      <section className="relative flex-1 px-4 pt-24 pb-10 sm:px-6 sm:pt-28 sm:pb-12 lg:px-8 lg:pt-32 lg:pb-14">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
            <div className="space-y-8 pt-2 opacity-0 animate-fade-in-up">
              <div className="space-y-4">
                <h1 className="max-w-4xl font-sans text-[clamp(4.5rem,12vw,9rem)] font-semibold leading-[0.86] tracking-[-0.09em] text-foreground opacity-0 animate-slide-in-left animation-delay-200">
                  Evan Wright
                </h1>

                <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground opacity-0 animate-slide-in-right animation-delay-400 sm:text-base">
                  Solutions Architect
                </p>

              </div>

              <div className="flex flex-wrap gap-3 pt-1 opacity-0 animate-fade-in-up animation-delay-700">
                <Button
                  asChild
                  size="lg"
                  className="group min-h-13 rounded-full border border-primary/20 bg-primary px-7 text-base font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90"
                >
                  <Link href="/projects" className="flex items-center gap-2">
                    Projects
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="min-h-13 rounded-full border-border/70 bg-transparent px-7 text-base hover:border-primary/30 hover:bg-background/20 hover:text-foreground"
                  asChild
                >
                  <Link href="/about">About</Link>
                </Button>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[20rem] opacity-0 animate-fade-in-up animation-delay-600 lg:ml-auto lg:pt-8">
              <div className="rounded-[1.75rem] border border-border/60 bg-background/18 p-3 backdrop-blur-sm">
                <InteractiveTap />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
