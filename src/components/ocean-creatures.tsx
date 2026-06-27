"use client"

// ─── SVG Ocean Creature Components ─────────────────────────────────────────
// Adapted from the temp-concept design by @girlfriend, ported to TSX.
// All components are decorative — pointer-events: none is applied at usage site.

interface FishProps {
  color?: string
  color2?: string
  size?: number
  accent?: string
}
export function Fish({ color = "#4be0c1", color2, size = 64, accent = "#fff" }: FishProps) {
  const c2 = color2 || color
  const gradId = `fg-${color.replace("#", "")}-${size}`
  return (
    <svg viewBox="0 0 120 70" width={size} height={(size * 70) / 120} aria-hidden>
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor={c2} />
        </linearGradient>
      </defs>
      {/* tail */}
      <path d="M0 35 L28 12 L28 58 Z" fill={`url(#${gradId})`} opacity="0.85" />
      {/* body */}
      <ellipse cx="65" cy="35" rx="42" ry="22" fill={`url(#${gradId})`} />
      {/* belly shimmer */}
      <path d="M30 40 Q65 60 100 40 Q90 50 65 52 Q40 50 30 40 Z" fill={accent} opacity="0.22" />
      {/* top fin */}
      <path d="M55 16 Q65 6 72 16 Q60 18 55 16 Z" fill={c2} opacity="0.7" />
      {/* bottom fin */}
      <path d="M58 56 Q66 62 74 54 Q66 56 58 56 Z" fill={c2} opacity="0.6" />
      {/* stripe */}
      <path d="M48 22 Q55 24 55 35 Q55 46 48 48" stroke={accent} strokeWidth="2" fill="none" opacity="0.3" />
      {/* eye */}
      <circle cx="95" cy="30" r="4" fill="#fff" />
      <circle cx="96" cy="30" r="2.2" fill="#0a1a2c" />
      <circle cx="96.8" cy="29.2" r="0.7" fill="#fff" />
    </svg>
  )
}

interface PufferfishProps { color?: string; size?: number }
export function Pufferfish({ color = "#ffb84d", size = 60 }: PufferfishProps) {
  const gradId = `pg-${color.replace("#", "")}-${size}`
  const spikes = Array.from({ length: 8 }, (_, i) => {
    const a = (i / 8) * Math.PI * 2
    return {
      x1: 48 + Math.cos(a) * 32, y1: 42 + Math.sin(a) * 32,
      x2: 48 + Math.cos(a) * 41, y2: 42 + Math.sin(a) * 41,
    }
  })
  return (
    <svg viewBox="0 0 100 80" width={size} height={(size * 80) / 100} aria-hidden>
      <defs>
        <radialGradient id={gradId} cx="40%" cy="40%">
          <stop offset="0%" stopColor="#fff5d6" />
          <stop offset="60%" stopColor={color} />
          <stop offset="100%" stopColor="#d97a1a" />
        </radialGradient>
      </defs>
      <circle cx="48" cy="42" r="32" fill={`url(#${gradId})`} />
      {spikes.map((s, i) => (
        <line key={i} x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2} stroke={color} strokeWidth="2" strokeLinecap="round" />
      ))}
      <path d="M78 42 L96 30 L96 54 Z" fill={color} opacity="0.85" />
      <circle cx="62" cy="36" r="5" fill="#fff" />
      <circle cx="63" cy="36" r="3" fill="#0a1a2c" />
      <circle cx="64" cy="35" r="1" fill="#fff" />
      <path d="M70 48 Q74 51 78 48" stroke="#0a1a2c" strokeWidth="1.5" fill="none" />
    </svg>
  )
}

interface JellyfishProps { color?: string; size?: number }
export function Jellyfish({ color = "#c78bff", size = 80 }: JellyfishProps) {
  const gradId = `jg-${color.replace("#", "")}-${size}`
  const tentacles = [20, 30, 42, 50, 58, 70, 80]
  return (
    <svg viewBox="0 0 100 140" width={size} height={(size * 140) / 100} aria-hidden>
      <defs>
        <radialGradient id={gradId} cx="50%" cy="40%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.9" />
          <stop offset="50%" stopColor={color} stopOpacity="0.6" />
          <stop offset="100%" stopColor={color} stopOpacity="0.2" />
        </radialGradient>
      </defs>
      <path
        d="M10 55 Q10 15 50 15 Q90 15 90 55 Q90 65 80 65 Q70 60 60 65 Q50 60 40 65 Q30 60 20 65 Q10 65 10 55 Z"
        fill={`url(#${gradId})`}
        stroke={color}
        strokeWidth="1"
        strokeOpacity="0.4"
      />
      <ellipse cx="50" cy="40" rx="20" ry="14" fill={color} opacity="0.22" />
      {tentacles.map((x, i) => (
        <path
          key={i}
          d={`M${x} 62 Q${x + 5} ${75 + i * 4} ${x - 3} ${95 + i * 3} Q${x + 4} ${110 + i * 2} ${x} 130`}
          stroke={color}
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
      ))}
    </svg>
  )
}

interface SeaTurtleProps { size?: number }
export function SeaTurtle({ size = 90 }: SeaTurtleProps) {
  return (
    <svg viewBox="0 0 140 90" width={size} height={(size * 90) / 140} aria-hidden>
      <defs>
        <radialGradient id="shellG" cx="50%" cy="40%">
          <stop offset="0%" stopColor="#76e7c5" />
          <stop offset="100%" stopColor="#1d6595" />
        </radialGradient>
      </defs>
      <ellipse cx="30" cy="60" rx="18" ry="10" fill="#2d8fc4" transform="rotate(-15 30 60)" />
      <ellipse cx="30" cy="30" rx="16" ry="9" fill="#2d8fc4" transform="rotate(15 30 30)" />
      <ellipse cx="105" cy="62" rx="14" ry="8" fill="#2d8fc4" transform="rotate(15 105 62)" />
      <ellipse cx="105" cy="28" rx="14" ry="8" fill="#2d8fc4" transform="rotate(-15 105 28)" />
      <circle cx="118" cy="45" r="13" fill="#2d8fc4" />
      <circle cx="125" cy="42" r="1.6" fill="#0a1a2c" />
      <ellipse cx="70" cy="45" rx="42" ry="32" fill="url(#shellG)" />
      <g stroke="#0a3b5b" strokeWidth="1" fill="none" opacity="0.45">
        <path d="M70 18 L70 72" /><path d="M40 35 L100 35" /><path d="M40 55 L100 55" />
        <path d="M55 22 L55 68" /><path d="M85 22 L85 68" />
      </g>
    </svg>
  )
}

interface AnglerfishProps { size?: number }
export function Anglerfish({ size = 200 }: AnglerfishProps) {
  return (
    <svg viewBox="0 0 260 180" width={size} height={(size * 180) / 260} aria-hidden>
      <defs>
        <radialGradient id="bodyG-af" cx="60%" cy="50%">
          <stop offset="0%" stopColor="#1a2b48" />
          <stop offset="100%" stopColor="#020a1f" />
        </radialGradient>
        <radialGradient id="lureG-af" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="40%" stopColor="#6effe6" />
          <stop offset="100%" stopColor="#6effe6" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path d="M20 90 L70 50 L70 130 Z" fill="#0a1828" />
      <ellipse cx="140" cy="95" rx="80" ry="55" fill="url(#bodyG-af)" />
      <path d="M110 45 Q140 25 170 50 Q150 55 110 45 Z" fill="#0a1828" />
      <path d="M110 145 Q140 168 175 145 Q150 140 110 145 Z" fill="#0a1828" />
      <path d="M180 60 Q205 30 215 20" stroke="#0a1828" strokeWidth="3" fill="none" />
      <circle cx="215" cy="18" r="22" fill="url(#lureG-af)" className="lure-bob" />
      <circle cx="215" cy="18" r="7" fill="#fff" />
      <circle cx="195" cy="80" r="6" fill="#ffe48b" />
      <circle cx="196" cy="80" r="3" fill="#0a1a2c" />
      <path d="M155 110 L160 122 L165 110 L170 122 L175 110 L180 122 L185 110 L190 122 L195 110"
        stroke="#fff" strokeWidth="1.5" fill="none" />
      <path d="M150 108 Q175 125 200 108" stroke="#0a1828" strokeWidth="2" fill="none" />
    </svg>
  )
}

interface KelpProps { color?: string; height?: number }
export function Kelp({ color = "#1a8a5e", height = 200 }: KelpProps) {
  return (
    <svg viewBox="0 0 60 200" width="60" height={height} aria-hidden>
      <path d="M30 200 Q20 160 28 130 Q38 100 26 70 Q18 40 30 0"
        stroke={color} strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M30 200 Q20 160 28 130 Q38 100 26 70 Q18 40 30 0"
        stroke="#6cdfae" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.55" />
      <ellipse cx="20" cy="170" rx="8" ry="3" fill={color} transform="rotate(-30 20 170)" />
      <ellipse cx="36" cy="140" rx="9" ry="3" fill={color} transform="rotate(30 36 140)" />
      <ellipse cx="22" cy="105" rx="8" ry="3" fill={color} transform="rotate(-25 22 105)" />
      <ellipse cx="34" cy="75" rx="9" ry="3" fill={color} transform="rotate(35 34 75)" />
      <ellipse cx="24" cy="40" rx="8" ry="3" fill={color} transform="rotate(-30 24 40)" />
    </svg>
  )
}

interface CoralProps { color?: string; size?: number }
export function Coral({ color = "#ff6b8a", size = 120 }: CoralProps) {
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} aria-hidden>
      <g fill={color}>
        <path d="M60 120 Q58 80 50 60 Q42 40 50 20 Q55 35 60 50 Q65 35 70 20 Q78 40 70 60 Q62 80 60 120 Z" />
        <circle cx="35" cy="80" r="6" />
        <circle cx="85" cy="75" r="7" />
        <circle cx="45" cy="55" r="5" />
        <circle cx="75" cy="50" r="5" />
        <circle cx="60" cy="35" r="4" />
      </g>
      <g fill="#fff" opacity="0.28">
        <circle cx="60" cy="35" r="2" />
        <circle cx="45" cy="55" r="2" />
        <circle cx="75" cy="50" r="2" />
      </g>
    </svg>
  )
}

interface BubbleSvgProps { size?: number }
export function BubbleSvg({ size = 20 }: BubbleSvgProps) {
  return (
    <svg viewBox="0 0 30 30" width={size} height={size} aria-hidden>
      <circle cx="15" cy="15" r="13" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
      <circle cx="11" cy="11" r="3.5" fill="rgba(255,255,255,0.45)" />
      <circle cx="10" cy="10" r="1.5" fill="rgba(255,255,255,0.85)" />
    </svg>
  )
}

// ─── Caustics overlay (animated SVG light ripples) ──────────────────────────
export function CausticsOverlay({ opacity = 0.25 }: { opacity?: number }) {
  return (
    <svg
      style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
        opacity, mixBlendMode: "screen", pointerEvents: "none",
        preserveAspectRatio: "none",
      } as React.CSSProperties}
      viewBox="0 0 800 400"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <filter id="caust-portfolio">
          <feTurbulence type="fractalNoise" baseFrequency="0.009 0.014" numOctaves="2" seed="5">
            <animate attributeName="baseFrequency"
              dur="18s"
              values="0.009 0.014; 0.013 0.009; 0.009 0.014"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feColorMatrix values="0 0 0 0 0.3   0 0 0 0 0.9   0 0 0 0 0.8   0 0 0 1.8 -0.8" />
        </filter>
      </defs>
      <rect width="800" height="400" filter="url(#caust-portfolio)" />
    </svg>
  )
}

// ─── Rising bubbles backdrop ─────────────────────────────────────────────────
interface BubblesBackdropProps {
  count?: number
  opacity?: number
  className?: string
}
export function BubblesBackdrop({ count = 18, opacity = 0.55, className = "" }: BubblesBackdropProps) {
  // deterministic so no hydration mismatch — seeded by index
  const items = Array.from({ length: count }, (_, i) => ({
    size: 8 + ((i * 17 + 3) % 28),
    left: ((i * 37 + 11) % 100),
    delay: (i * 1.7) % 14,
    duration: 10 + ((i * 7) % 12),
  }))
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} style={{ opacity }} aria-hidden>
      {items.map((b, i) => (
        <span
          key={i}
          className="bubble-rise"
          style={{
            position: "absolute",
            bottom: -40,
            left: `${b.left}%`,
            width: b.size,
            height: b.size,
            borderRadius: "50%",
            background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.7), rgba(255,255,255,0.05) 60%, transparent)",
            border: "1px solid rgba(255,255,255,0.45)",
            animationName: "ocean-bubble-rise",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
          }}
        />
      ))}
    </div>
  )
}

// ─── SwimmingFish ─────────────────────────────────────────────────────────────
interface SwimmingFishProps {
  top: number          // % from top of container
  duration?: number
  delay?: number
  reverse?: boolean
  scale?: number
  children: React.ReactNode
  fixed?: boolean      // use fixed positioning (for full-page layer)
}
export function SwimmingFish({
  top, duration = 24, delay = 0, reverse = false, scale = 1, children, fixed = false,
}: SwimmingFishProps) {
  // delay is treated as a positive spread offset — negate it so the fish is
  // already mid-swim at mount rather than sitting frozen at the start position.
  const negDelay = -Math.abs(delay)
  return (
    <div
      aria-hidden
      style={{
        position: fixed ? "fixed" : "absolute",
        top: `${top}%`,
        left: 0,
        right: 0,
        pointerEvents: "none",
        zIndex: 0,
        // Combine swim + vertical wiggle in one declaration so both work
        animationName: `${reverse ? "swimRL" : "swimLR"}, wiggle-y`,
        animationDuration: `${duration}s, 2.8s`,
        animationDelay: `${negDelay}s, ${negDelay * 0.1}s`,
        animationTimingFunction: "linear, ease-in-out",
        animationIterationCount: "infinite, infinite",
        transform: `scale(${scale})`,
        display: "inline-block",
      }}
    >
      {children}
    </div>
  )
}

// ─── DriftingJellyfish ────────────────────────────────────────────────────────
interface DriftingJellyfishProps {
  top?: number
  right?: number
  left?: number
  delay?: number
  size?: number
  color?: string
}
export function DriftingJellyfish({ top = 10, right, left, delay = 0, size = 70, color = "#c78bff" }: DriftingJellyfishProps) {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        top: `${top}%`,
        ...(right !== undefined ? { right: `${right}%` } : {}),
        ...(left !== undefined ? { left: `${left}%` } : {}),
        pointerEvents: "none",
        zIndex: 0,
        animationName: "jelly-drift",
        animationDuration: "7s",
        animationDelay: `${delay}s`,
        animationTimingFunction: "ease-in-out",
        animationIterationCount: "infinite",
        opacity: 0.65,
      }}
    >
      <Jellyfish color={color} size={size} />
    </div>
  )
}

// ─── SeafloorDecor ────────────────────────────────────────────────────────────
// Kelp + coral decorations anchored to the bottom of a section
interface SeafloorDecorProps {
  className?: string
}
export function SeafloorDecor({ className = "" }: SeafloorDecorProps) {
  return (
    <div className={`pointer-events-none absolute bottom-0 left-0 right-0 overflow-hidden ${className}`} aria-hidden>
      <div style={{ position: "absolute", bottom: 0, left: "1.5vw", animationName: "kelp-sway", animationDuration: "4s", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite", transformOrigin: "bottom center" }}>
        <Kelp color="#1a8a5e" height={180} />
      </div>
      <div style={{ position: "absolute", bottom: 0, left: "5vw", opacity: 0.4, animationName: "kelp-sway", animationDuration: "5.2s", animationDelay: "-1.8s", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite", transformOrigin: "bottom center" }}>
        <Kelp color="#2da97a" height={140} />
      </div>
      <div style={{ position: "absolute", bottom: 0, left: "8vw", animationName: "kelp-sway", animationDuration: "3.8s", animationDelay: "-3s", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite", transformOrigin: "bottom center" }}>
        <Coral color="#ff6b8a" size={80} />
      </div>
      <div style={{ position: "absolute", bottom: 0, right: "1.5vw", animationName: "kelp-sway", animationDuration: "4.6s", animationDelay: "-0.7s", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite", transformOrigin: "bottom center" }}>
        <Kelp color="#1a8a5e" height={160} />
      </div>
      <div style={{ position: "absolute", bottom: 0, right: "5.5vw", opacity: 0.5, animationName: "kelp-sway", animationDuration: "4.2s", animationDelay: "-2.4s", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite", transformOrigin: "bottom center" }}>
        <Coral color="#4be0c1" size={70} />
      </div>
      <div style={{ position: "absolute", bottom: 0, right: "8.5vw", opacity: 0.45, animationName: "kelp-sway", animationDuration: "5.8s", animationDelay: "-1.1s", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite", transformOrigin: "bottom center" }}>
        <Kelp color="#2da97a" height={120} />
      </div>
    </div>
  )
}
