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

      <section className="relative flex flex-1 items-center px-4 pt-24 pb-10 sm:px-6 sm:pt-28 sm:pb-12 lg:px-8 lg:pt-32 lg:pb-14">
        <div className="homepage-stage mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_23rem] lg:gap-18">
            <div className="space-y-10 pt-2 opacity-0 animate-fade-in-up">
              <div className="space-y-5">
                <h1 className="max-w-5xl font-sans text-[clamp(5rem,12vw,9rem)] font-semibold leading-[0.84] tracking-[-0.09em] text-foreground opacity-0 animate-slide-in-left animation-delay-200">
                  Evan Wright
                </h1>

                <p className="text-l08retext-smm uppercase tracking-[0.28em] text-muted-foreground opacity-0 animate-slide-in-right animation-delay-400 sm:text-base">
                  Solutions Architect
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-1 opacity-0 animate-fade-in-up animation-delay-700">
                <Button
                  asChild
                  size="lg"
                  className="group min-h-15 rounded-full border border-primary/18 bg-primary px-8 text-[1.02rem] font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90"
                >
                  <Link href="/projects" className="flex items-center gap-2">
                    Projects
                    <ArrowRight className="h-5.5 w-5.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="min-h-15 rounded-full border-border/65 bg-transparent px-8 text-[1.02rem] hover:border-primary/24 hover:bg-background/18 hover:text-foreground"
                  asChild
                >
                  <Link href="/about">About</Link>
                </Button>
              </div>
            </div>

            <div className="tap-stage mx-auto w-full max-w-[23rem] opacity-100 lg:ml-auto lg:pt-8">
              <InteractiveTap />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
