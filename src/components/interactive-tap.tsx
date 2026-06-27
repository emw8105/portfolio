"use client"

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import {
    Fish, Pufferfish, Jellyfish, BubbleSvg, CausticsOverlay, SeaTurtle,
} from "./ocean-creatures"

// Deterministic seeded random helpers (no hydration mismatch)
function seeded(seed: number) { return ((Math.sin(seed) * 43758.5453123) % 1 + 1) % 1 }

interface Ripple { id: number; x: number; y: number }

// Fish that swim across the screen in the portal overlay when activated
const OVERLAY_FISH: Array<{
    Component: React.ComponentType<{ color?: string; color2?: string; size?: number }>
    color?: string; color2?: string; size: number; top: number
    duration: number; delay: number; reverse: boolean
}> = [
        { Component: Fish, color: "#4be0c1", color2: "#2d9cdb", size: 52, top: 18, duration: 22, delay: 0, reverse: false },
        { Component: Pufferfish, color: "#ffb84d", size: 44, top: 38, duration: 28, delay: 4, reverse: true },
        { Component: Fish, color: "#ff6b8a", color2: "#c78bff", size: 44, top: 62, duration: 20, delay: 8, reverse: false },
        { Component: Fish, color: "#6effe6", color2: "#4be0c1", size: 38, top: 78, duration: 34, delay: 2, reverse: true },
        { Component: SeaTurtle, size: 80, top: 50, duration: 48, delay: 12, reverse: false },
        { Component: Fish, color: "#c78bff", color2: "#ff6b8a", size: 36, top: 28, duration: 26, delay: 16, reverse: true },
    ]

export function InteractiveTap() {
    const [nojimaTap, setNojimaTap] = useState(false)
    const [ripples, setRipples] = useState<Ripple[]>([])
    const [mounted, setMounted] = useState(false)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const rippleCounter = useRef(0)
    const rippleTimeouts = useRef<number[]>([])

    useEffect(() => {
        setMounted(true)
        return () => { rippleTimeouts.current.forEach(clearTimeout) }
    }, [])

    const handleTap = () => {
        const newMode = !nojimaTap
        setNojimaTap(newMode)
        if (newMode) {
            document.body.classList.add("ocean-transitioning")
            setTimeout(() => document.body.classList.remove("ocean-transitioning"), 1500)
        }
    }

    const createRipple = (event: ReactPointerEvent<HTMLButtonElement>) => {
        const bounds = event.currentTarget.getBoundingClientRect()
        const id = ++rippleCounter.current
        setRipples((current) => [...current, { id, x: event.clientX - bounds.left, y: event.clientY - bounds.top }])
        const tid = window.setTimeout(() => {
            setRipples((current) => current.filter((r) => r.id !== id))
            rippleTimeouts.current = rippleTimeouts.current.filter((t) => t !== tid)
        }, 950)
        rippleTimeouts.current.push(tid)
    }

    const handlePointerMove = (event: ReactPointerEvent<HTMLButtonElement>) => {
        const el = buttonRef.current
        if (!el) return
        const bounds = el.getBoundingClientRect()
        const offsetX = event.clientX - bounds.left
        const offsetY = event.clientY - bounds.top
        el.style.setProperty("--pointer-x", `${offsetX}px`)
        el.style.setProperty("--pointer-y", `${offsetY}px`)
        el.style.setProperty("--tilt-x", `${(0.5 - offsetY / bounds.height) * 7}deg`)
        el.style.setProperty("--tilt-y", `${(offsetX / bounds.width - 0.5) * 7}deg`)
    }

    const resetPointerState = () => {
        const el = buttonRef.current
        if (!el) return
        el.style.setProperty("--pointer-x", "50%")
        el.style.setProperty("--pointer-y", "50%")
        el.style.setProperty("--tilt-x", "0deg")
        el.style.setProperty("--tilt-y", "0deg")
    }

    useEffect(() => {
        document.body.classList.toggle("nojima-tap-mode", nojimaTap)
    }, [nojimaTap])

    // Rising SVG bubbles — deterministic
    const risingBubbles = Array.from({ length: 22 }, (_, i) => ({
        id: i,
        x: seeded(i * 7 + 1) * 100,
        size: 10 + seeded(i * 3 + 2) * 28,
        delay: seeded(i * 5 + 3) * 10,
        duration: 9 + seeded(i * 11 + 4) * 8,
    }))

    return (
        <>
            <div className="relative space-y-3">
                <button
                    ref={buttonRef}
                    onPointerDown={createRipple}
                    onClick={handleTap}
                    onPointerMove={handlePointerMove}
                    onPointerLeave={resetPointerState}
                    className={`interactive-tap-card home-surface border border-ocean-border bg-ocean-surface rounded-[1.75rem] p-5 relative cursor-pointer transition-all duration-700 w-full ${nojimaTap ? "nojima-active" : ""}`}
                    aria-label={nojimaTap ? "Stop the ocean animation" : "Start the ocean animation"}
                    aria-pressed={nojimaTap}
                >
                    <div className="interactive-tap-glow" />
                    <div className="interactive-tap-grid" />

                    {/* Caustics sheen visible even when off (subtle) */}
                    <div style={{ opacity: nojimaTap ? 0.3 : 0.08, transition: "opacity 1.2s ease", position: "absolute", inset: 0, borderRadius: "inherit", overflow: "hidden", pointerEvents: "none" }}>
                        <CausticsOverlay opacity={1} />
                    </div>

                    {ripples.map((ripple) => (
                        <span
                            key={ripple.id}
                            className="tap-ripple"
                            style={{ left: `${ripple.x}px`, top: `${ripple.y}px` }}
                        />
                    ))}

                    <Image
                        src="/assets/nojima-tap.gif"
                        alt="Nojima tapping"
                        width={400}
                        height={400}
                        className={`w-full h-auto rounded-[1.2rem] transition-all duration-700 ${nojimaTap ? "brightness-115 saturate-110" : ""}`}
                        unoptimized
                        priority
                    />

                    {/* Small ambient fish inside the card (always present, subtle) */}
                    <div style={{
                        position: "absolute", bottom: "12%", left: 0, right: 0,
                        pointerEvents: "none", overflow: "hidden", height: 40,
                        opacity: nojimaTap ? 0.9 : 0.28, transition: "opacity 1s ease",
                    }}>
                        <div style={{
                            animationName: "swimLR, wiggle-y",
                            animationDuration: "14s, 2.2s",
                            animationDelay: "-3s, 0s",
                            animationTimingFunction: "linear, ease-in-out",
                            animationIterationCount: "infinite, infinite",
                            display: "inline-block",
                        }}>
                            <Fish color="#4be0c1" color2="#6effe6" size={30} />
                        </div>
                    </div>
                    <div style={{
                        position: "absolute", bottom: "22%", left: 0, right: 0,
                        pointerEvents: "none", overflow: "hidden", height: 36,
                        opacity: nojimaTap ? 0.8 : 0.15, transition: "opacity 1.3s ease",
                    }}>
                        <div style={{
                            animationName: "swimRL, wiggle-y",
                            animationDuration: "18s, 2.8s",
                            animationDelay: "-9s, -1.4s",
                            animationTimingFunction: "linear, ease-in-out",
                            animationIterationCount: "infinite, infinite",
                            display: "inline-block",
                        }}>
                            <Fish color="#ff9a6b" color2="#ffb84d" size={26} />
                        </div>
                    </div>
                </button>
            </div>

            {mounted && createPortal(
                <div className={`fixed inset-0 pointer-events-none transition-opacity duration-[1200ms] z-[9990] ${nojimaTap ? "opacity-100" : "opacity-0"}`}>
                    {/* Deep teal ocean overlay */}
                    <div className="absolute inset-0 pointer-events-none"
                        style={{
                            background: "radial-gradient(ellipse at 30% 60%, rgba(11,51,88,0.55) 0%, transparent 60%), radial-gradient(ellipse at 75% 30%, rgba(75,224,193,0.10) 0%, transparent 50%), radial-gradient(ellipse at 50% 100%, rgba(2,10,31,0.65) 0%, transparent 50%)",
                        }}
                    />

                    {/* Caustics over entire viewport */}
                    <div className="absolute inset-0 pointer-events-none" style={{ mixBlendMode: "screen", opacity: 0.18 }}>
                        <CausticsOverlay opacity={1} />
                    </div>

                    {/* Rising SVG bubbles */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        {risingBubbles.map((b) => (
                            <div
                                key={b.id}
                                style={{
                                    position: "absolute",
                                    left: `${b.x}%`,
                                    bottom: -50,
                                    animationName: "ocean-bubble-rise",
                                    animationTimingFunction: "linear",
                                    animationIterationCount: "infinite",
                                    animationDelay: `${b.delay}s`,
                                    animationDuration: `${b.duration}s`,
                                }}
                            >
                                <BubbleSvg size={b.size} />
                            </div>
                        ))}
                    </div>

                    {/* Swimming fish across the full viewport */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        {OVERLAY_FISH.map((f, i) => (
                            <div
                                key={i}
                                style={{
                                    position: "absolute",
                                    top: `${f.top}%`,
                                    left: 0, right: 0,
                                    animationName: `${f.reverse ? "swimRL" : "swimLR"}, wiggle-y`,
                                    animationDuration: `${f.duration}s, ${2.0 + i * 0.35}s`,
                                    animationDelay: `${-f.delay}s, ${-(i * 0.6)}s`,
                                    animationTimingFunction: "linear, ease-in-out",
                                    animationIterationCount: "infinite, infinite",
                                    display: "inline-block",
                                }}
                            >
                                <f.Component
                                    color={f.color}
                                    {...(f.color2 ? { color2: f.color2 } : {})}
                                    size={f.size}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Jellyfish drifting */}
                    <div style={{ position: "absolute", top: "8%", right: "6%", pointerEvents: "none", animationName: "jelly-drift", animationDuration: "7s", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite", opacity: 0.7 }}>
                        <Jellyfish color="#c78bff" size={80} />
                    </div>
                    <div style={{ position: "absolute", top: "55%", left: "4%", pointerEvents: "none", animationName: "jelly-drift", animationDuration: "9s", animationDelay: "-3s", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite", opacity: 0.55 }}>
                        <Jellyfish color="#ff9a6b" size={58} />
                    </div>
                </div>,
                document.body
            )}
        </>
    )
}

