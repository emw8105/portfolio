"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

// ─── Ocean depth color palette ────────────────────────────────────────────────
// 8 stops: depth 0.0 (sky surface) → depth 1.0 (abyss)
// Each entry is [r, g, b]
const DEPTH_PALETTE: readonly [number, number, number][] = [
  [207, 238, 255], // 0.000 — sky / surface highlight
  [124, 198, 238], // 0.143 — shallow water
  [78,  168, 216], // 0.286 — upper-mid water
  [45,  143, 196], // 0.429 — mid-water (readable contrast for white text)
  [29,  101, 149], // 0.571 — mid-deep
  [11,   51,  88], // 0.714 — deep
  [6,    28,  54], // 0.857 — very deep
  [1,     4,  15], // 1.000 — abyss
]

function sampleDepth(d: number): string {
  const clamped = Math.max(0, Math.min(1, d))
  const scaled = clamped * (DEPTH_PALETTE.length - 1)
  const lo = Math.floor(scaled)
  const hi = Math.min(lo + 1, DEPTH_PALETTE.length - 1)
  const t = scaled - lo
  const [ar, ag, ab] = DEPTH_PALETTE[lo]
  const [br, bg, bb] = DEPTH_PALETTE[hi]
  return `rgb(${Math.round(ar + t * (br - ar))},${Math.round(ag + t * (bg - ag))},${Math.round(ab + t * (bb - ab))})`
}

// ─── Per-page depth zones ─────────────────────────────────────────────────────
// [depthAtPageTop, depthAtPageBottom]
// 0 = bright tropical surface, 1 = pitch-black abyss
const PAGE_ZONES: Record<string, [number, number]> = {
  "/"           : [0.26, 0.56], // surface → mid-water (bright tropical beach feel)
  "/about"      : [0.38, 0.65], // shallow → deep (underwater filtering light)
  "/projects"   : [0.52, 0.78], // reef zone → deep reef
  "/experience" : [0.68, 1.00], // deep → true abyss
}

function getZone(path: string): [number, number] {
  if (PAGE_ZONES[path]) return PAGE_ZONES[path]
  if (path.startsWith("/projects/")) return [0.55, 0.82] // slug pages: mid-reef
  return [0.38, 0.68]
}

// ─── Component ────────────────────────────────────────────────────────────────
export function ScrollDepth() {
  const pathname = usePathname()

  useEffect(() => {
    const [zStart, zEnd] = getZone(pathname)

    const apply = (scrollFrac: number) => {
      const depth = zStart + scrollFrac * (zEnd - zStart)
      // Three gradient stops: slightly above, at, and below current depth
      const spread = 0.07
      const root = document.documentElement
      root.style.setProperty("--bg-top", sampleDepth(Math.max(0, depth - spread)))
      root.style.setProperty("--bg-mid", sampleDepth(depth))
      root.style.setProperty("--bg-bot", sampleDepth(Math.min(1, depth + spread)))
      // Expose raw depth (0–1) for optional CSS consumers
      root.style.setProperty("--depth", depth.toFixed(3))
    }

    // Immediately set depth for the current page top (fixes flash on navigate)
    apply(0)

    const handler = () => {
      const maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1)
      apply(Math.min(window.scrollY / maxScroll, 1))
    }

    window.addEventListener("scroll", handler, { passive: true })
    window.addEventListener("resize", handler, { passive: true })
    return () => {
      window.removeEventListener("scroll", handler)
      window.removeEventListener("resize", handler)
    }
  }, [pathname])

  return null
}
