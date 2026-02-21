import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="max-w-6xl mx-auto">
          {/* Asymmetric hero layout */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mb-20">
            {/* Left column - Main content */}
            <div className="lg:col-span-7 space-y-8 opacity-0 animate-fade-in-up">
              <div className="space-y-4">
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold font-serif leading-none opacity-0 animate-slide-in-left animation-delay-200">
                  <span className="block text-foreground">Evan</span>
                  <span className="block bg-gradient-ocean bg-clip-text mt-2">Wright</span>
                </h1>
                <div className="h-1 w-24 bg-gradient-ocean rounded-full opacity-0 animate-slide-in-left animation-delay-400"></div>
              </div>

              <p className="text-2xl sm:text-3xl text-muted-foreground leading-relaxed opacity-0 animate-slide-in-right animation-delay-400">
                Solutions Architect
              </p>

              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed opacity-0 animate-fade-in-up animation-delay-600">
                {/* Building full-stack systems and cloud architecture while leading development at ACM UTD.
                Currently pursuing intelligent systems at UT Dallas. Still workshopping the following sentence but it seems to short for now*/}
                Building full-stack systems and cloud architecture.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4 opacity-0 animate-fade-in-up animation-delay-800">
                <Button
                  asChild
                  size="lg"
                  className="text-lg px-8 py-6 relative overflow-hidden group border-2 border-primary bg-primary/10 text-primary hover:bg-primary hover:text-background transition-all duration-300"
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
                  className="text-lg px-8 py-6 border-2 border-border hover:border-accent hover:text-accent transition-all duration-300"
                  asChild>
                  <Link href="/about">About Me</Link>
                </Button>
              </div>
            </div>

            {/* Right column - Visual accent */}
            <div className="lg:col-span-5 flex items-center justify-center opacity-0 animate-fade-in-up animation-delay-600">
              <div className="glass-card rounded-3xl p-8 relative group">
                <div className="absolute inset-0 bg-gradient-ocean opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500"></div>
                <Image
                  src="/assets/nojima-tap.gif"
                  alt="Nojima tapping"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                  unoptimized
                  priority
                />
                <div className="mt-6 space-y-3">
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 text-xs rounded-full bg-accent/20 text-accent border border-accent/30">
                      Full-Stack
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-accent/20 text-accent border border-accent/30">
                      Cloud
                    </span>
                    <span className="px-3 py-1 text-xs rounded-full bg-accent/20 text-accent border border-accent/30">
                      AI/ML
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nojima Coffee Divider */}
          <div className="flex justify-center opacity-0 animate-fade-in-up animation-delay-1000">
            <div className="relative group">
              <Image
                src="/assets/nojima-coffee.gif"
                alt="Nojima drinking coffee"
                width={800}
                height={80}
                className="w-full max-w-2xl h-20 object-contain select-none pointer-events-none opacity-70 group-hover:opacity-100 transition-opacity"
                draggable={false}
                aria-hidden="true"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
