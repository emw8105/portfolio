import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { InteractiveTap } from "@/components/interactive-tap"
import { Fish, Pufferfish, BubblesBackdrop } from "@/components/ocean-creatures"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navigation />

      <section className="relative flex flex-1 items-center px-4 pt-24 pb-10 sm:px-6 sm:pt-28 sm:pb-12 lg:px-8 lg:pt-32 lg:pb-14 overflow-hidden">
        {/* Sun warmth glow — bright amber/golden haze at top-right, like sunlight
            filtered through shallow water. Uses mix-blend-mode:screen so it fades
            gracefully as the user scrolls deeper.                                */}
        <div aria-hidden style={{
          position: "absolute", top: "-15%", right: "5%",
          width: "55vw", height: "55vw", maxWidth: 640, maxHeight: 640,
          background: "radial-gradient(circle, rgba(255, 228, 139, 0.28) 0%, rgba(255, 184, 77, 0.10) 38%, transparent 68%)",
          pointerEvents: "none", zIndex: 0,
          mixBlendMode: "screen",
        }} />
        {/* Secondary softer cyan shimmer — light bouncing off the surface */}
        <div aria-hidden style={{
          position: "absolute", top: "-8%", left: "20%",
          width: "45vw", height: "30vw", maxWidth: 520, maxHeight: 340,
          background: "radial-gradient(ellipse, rgba(110, 255, 230, 0.16) 0%, transparent 60%)",
          pointerEvents: "none", zIndex: 0,
          mixBlendMode: "screen",
        }} />

        {/* Subtle ambient rising bubbles in the background */}
        <BubblesBackdrop count={14} opacity={0.30} />

        {/* Light rays filtering down from the surface */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="light-ray" style={{ left: "12%", "--ray-angle": "8deg" } as React.CSSProperties} />
          <div className="light-ray" style={{ left: "45%", "--ray-angle": "-5deg", animationDelay: "-3s", opacity: 0.7 } as React.CSSProperties} />
          <div className="light-ray" style={{ left: "76%", "--ray-angle": "6deg", animationDelay: "-6s", opacity: 0.65 } as React.CSSProperties} />
        </div>

        {/* Ambient swimming fish in the background */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
          {/* Large reef fish LR — already 25% through its cycle at load */}
          <div style={{
            position: "absolute", top: "55%",
            animationName: "swimLR, wiggle-y",
            animationDuration: "32s, 2.8s",
            animationDelay: "-8s, 0s",
            animationTimingFunction: "linear, ease-in-out",
            animationIterationCount: "infinite, infinite",
            display: "inline-block",
          }}>
            <Fish color="#4be0c1" color2="#2d9cdb" size={54} />
          </div>
          {/* Small puffer RL — already 38% through, appearing near 62% from left */}
          <div style={{
            position: "absolute", top: "72%",
            animationName: "swimRL, wiggle-y",
            animationDuration: "40s, 3.2s",
            animationDelay: "-15s, -1.4s",
            animationTimingFunction: "linear, ease-in-out",
            animationIterationCount: "infinite, infinite",
            display: "inline-block",
          }}>
            <Pufferfish color="#ffb84d" size={38} />
          </div>
          {/* Tiny coral fish LR — already 54% through, near screen center */}
          <div style={{
            position: "absolute", top: "30%",
            animationName: "swimLR, wiggle-y",
            animationDuration: "48s, 2.5s",
            animationDelay: "-26s, -0.9s",
            animationTimingFunction: "linear, ease-in-out",
            animationIterationCount: "infinite, infinite",
            display: "inline-block", opacity: 0.55,
          }}>
            <Fish color="#ff6b8a" color2="#ffb84d" size={34} />
          </div>
        </div>

        <div className="homepage-stage mx-auto max-w-6xl" style={{ position: "relative", zIndex: 1 }}>
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_23rem] lg:gap-20">
            <div className="space-y-10 pt-2 opacity-0 animate-fade-in-up">
              <div className="space-y-5">
                <h1
                  className="max-w-5xl font-serif text-[clamp(5rem,12vw,9rem)] font-light leading-[0.90] tracking-[-0.06em] text-foreground opacity-0 animate-slide-in-left animation-delay-200"
                  style={{ textShadow: "0 3px 24px rgba(0,0,0,0.45), 0 1px 4px rgba(0,0,0,0.3)" }}
                >
                  Evan Wright
                </h1>

                <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground opacity-0 animate-slide-in-right animation-delay-400 sm:text-base">
                  Solutions Architect
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-1 opacity-0 animate-fade-in-up animation-delay-700">
                <Button
                  asChild
                  size="lg"
                  className="group min-h-[3.75rem] rounded-full border border-primary/18 bg-primary px-8 text-[1.02rem] font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90"
                >
                  <Link href="/projects" className="flex items-center gap-2">
                    Projects
                    <ArrowRight className="h-[1.375rem] w-[1.375rem] transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="min-h-[3.75rem] rounded-full border-border/65 bg-transparent px-8 text-[1.02rem] hover:border-primary/24 hover:bg-background/18 hover:text-foreground"
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
