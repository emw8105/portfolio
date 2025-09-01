import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { quotes } from "@/lib/quotes"

export default function HomePage() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex-1">
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
              <Button
                asChild
                size="lg"
                className="text-lg px-10 py-4 glow-hover transition-all duration-300 border-2 border-primary bg-primary text-primary-foreground hover:bg-primary/90 hover:border-primary/80"
              >
                <Link href="/projects">
                  View Projects <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-10 py-4 border-2 border-primary text-primary hover:bg-primary/30 hover:text-primary-foreground hover:border-primary/80 transition glow-hover bg-tertiary"
                asChild
              >
                <Link href="/about">About Me</Link>
              </Button>
            </div>
          </div>
          {/* Nojima Coffee Divider */}
          <div className="flex justify-center mt-20">
            <img
              src="/assets/nojima-coffee.gif"
              alt="Nojima drinking coffee"
              className="w-full max-w-2xl h-20 object-contain select-none pointer-events-none opacity-80"
              draggable={false}
              aria-hidden="true"
            />
          </div>
        </div>
      </section>
      {/* Footer with random quote and artist credit */}
      <footer className="w-full py-8 px-4 bg-background/80 border-t border-border mt-auto">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 text-center">
          <blockquote className="italic text-muted-foreground">“{randomQuote}”</blockquote>
          <div className="text-xs text-muted-foreground">
            Nojima GIFs by <a href="https://giphy.com/arisa0905m" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">arisa0905m</a>
            {" "}
            (<a href="https://arisa0905m.tumblr.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">tumblr</a>)
          </div>
        </div>
      </footer>
    </div>
  )
}
