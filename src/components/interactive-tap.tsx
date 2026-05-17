"use client"

import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"

interface Particle {
    id: number
    x: number
    y: number
    size: number
    speedY: number
    speedX: number
    opacity: number
    color: number
}

interface Bubble {
    id: number
    x: number
    y: number
    size: number
    delay: number
    duration: number
}

interface Ripple {
    id: number
    x: number
    y: number
}

export function InteractiveTap() {
    const [nojimaTap, setNojimaTap] = useState(false)
    const [particles, setParticles] = useState<Particle[]>([])
    const [bubbles, setBubbles] = useState<Bubble[]>([])
    const [ripples, setRipples] = useState<Ripple[]>([])
    const [mounted, setMounted] = useState(false)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const rippleCounter = useRef(0)
    const rippleTimeouts = useRef<number[]>([])

    useEffect(() => {
        setMounted(true)
        return () => {
            rippleTimeouts.current.forEach(clearTimeout)
        }
    }, [])

    useEffect(() => {
        if (!nojimaTap) {
            setParticles([])
            setBubbles([])
            return
        }

        const initialParticles: Particle[] = Array.from({ length: 48 }, (_, i) => ({
            id: Date.now() + i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 11 + 3,
            speedY: Math.random() * 1.2 + 0.4,
            speedX: (Math.random() - 0.5) * 0.6,
            opacity: Math.random() * 0.8 + 0.2,
            color: Math.random(),
        }))
        setParticles(initialParticles)

        const initialBubbles: Bubble[] = Array.from({ length: 16 }, (_, i) => ({
            id: Date.now() + i + 1000,
            x: Math.random() * 100,
            y: 100 + Math.random() * 20,
            size: Math.random() * 40 + 20,
            delay: Math.random() * 4,
            duration: Math.random() * 6 + 8,
        }))
        setBubbles(initialBubbles)

        // Animate particles
        const interval = setInterval(() => {
            setParticles(prev =>
                prev.map(p => ({
                    ...p,
                    y: p.y - p.speedY < -5 ? 105 : p.y - p.speedY,
                    x: (p.x + p.speedX + 100) % 100,
                }))
            )
        }, 50)

        return () => clearInterval(interval)
    }, [nojimaTap])

    const handleTap = () => {
        const newMode = !nojimaTap
        setNojimaTap(newMode)

        // Add smooth transition class to body
        if (newMode) {
            document.body.classList.add('ocean-transitioning')
            setTimeout(() => {
                document.body.classList.remove('ocean-transitioning')
            }, 1500)
        }
    }

    const createRipple = (event: ReactPointerEvent<HTMLButtonElement>) => {
        const bounds = event.currentTarget.getBoundingClientRect()
        const id = ++rippleCounter.current

        setRipples((current) => [
            ...current,
            {
                id,
                x: event.clientX - bounds.left,
                y: event.clientY - bounds.top,
            },
        ])

        const timeoutId = window.setTimeout(() => {
            setRipples((current) => current.filter((ripple) => ripple.id !== id))
            rippleTimeouts.current = rippleTimeouts.current.filter((t) => t !== timeoutId)
        }, 850)

        rippleTimeouts.current.push(timeoutId)
    }

    const handlePointerMove = (event: ReactPointerEvent<HTMLButtonElement>) => {
        const element = buttonRef.current

        if (!element) {
            return
        }

        const bounds = element.getBoundingClientRect()
        const offsetX = event.clientX - bounds.left
        const offsetY = event.clientY - bounds.top
        const tiltX = (0.5 - offsetY / bounds.height) * 7
        const tiltY = (offsetX / bounds.width - 0.5) * 7

        element.style.setProperty("--pointer-x", `${offsetX}px`)
        element.style.setProperty("--pointer-y", `${offsetY}px`)
        element.style.setProperty("--tilt-x", `${tiltX}deg`)
        element.style.setProperty("--tilt-y", `${tiltY}deg`)
    }

    const resetPointerState = () => {
        const element = buttonRef.current

        if (!element) {
            return
        }

        element.style.setProperty("--pointer-x", "50%")
        element.style.setProperty("--pointer-y", "50%")
        element.style.setProperty("--tilt-x", "0deg")
        element.style.setProperty("--tilt-y", "0deg")
    }

    const handlePress = (event: ReactPointerEvent<HTMLButtonElement>) => {
        createRipple(event)
    }

    useEffect(() => {
        if (nojimaTap) {
            document.body.classList.add('nojima-tap-mode')
        } else {
            document.body.classList.remove('nojima-tap-mode')
        }
    }, [nojimaTap])

    return (
        <>
            <div className="relative space-y-3">
                <button
                    ref={buttonRef}
                    onPointerDown={handlePress}
                    onClick={handleTap}
                    onPointerMove={handlePointerMove}
                    onPointerLeave={resetPointerState}
                    className={`interactive-tap-card home-surface border border-ocean-border bg-ocean-surface rounded-[1.75rem] p-5 relative cursor-pointer transition-all duration-700 w-full ${nojimaTap ? 'nojima-active' : ''}`}
                    aria-label={nojimaTap ? "Stop the ocean animation" : "Start the ocean animation"}
                    aria-pressed={nojimaTap}
                >
                    <div className="interactive-tap-glow" />

                    <div className="interactive-tap-grid" />

                    {ripples.map((ripple) => (
                        <span
                            key={ripple.id}
                            className="tap-ripple"
                            style={{
                                left: `${ripple.x}px`,
                                top: `${ripple.y}px`,
                            }}
                        />
                    ))}

                    <Image
                        src="/assets/nojima-tap.gif"
                        alt="Nojima tapping"
                        width={400}
                        height={400}
                        className={`w-full h-auto rounded-[1.2rem] transition-all duration-700 ${nojimaTap ? 'brightness-125 contrast-110' : ''}`}
                        unoptimized
                        priority
                    />
                </button>
            </div>

            {mounted && createPortal(
                <div className={`fixed inset-0 pointer-events-none transition-opacity duration-[1500ms] z-[9999] ${nojimaTap ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="absolute inset-0 pointer-events-none ocean-overlay" />

                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        {particles.map(particle => {
                            const getParticleColor = (colorValue: number) => {
                                if (colorValue < 0.3) return 'from-primary/60 to-primary/20'
                                if (colorValue < 0.6) return 'from-accent/60 to-accent/20'
                                if (colorValue < 0.8) return 'from-blue-400/60 to-cyan-400/20'
                                return 'from-cyan-300/60 to-blue-300/20'
                            }

                            return (
                                <div
                                    key={particle.id}
                                    className={`absolute rounded-full bg-gradient-to-br ${getParticleColor(particle.color)} blur-md animate-pulse`}
                                    style={{
                                        left: `${particle.x}%`,
                                        top: `${particle.y}%`,
                                        width: `${particle.size}px`,
                                        height: `${particle.size}px`,
                                        opacity: particle.opacity,
                                        transition: 'all 0.05s linear',
                                        animationDuration: `${2 + Math.random() * 2}s`,
                                    }}
                                />
                            )
                        })}
                    </div>

                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        {bubbles.map(bubble => (
                            <div
                                key={bubble.id}
                                className="absolute bubble"
                                style={{
                                    left: `${bubble.x}%`,
                                    bottom: '-100px',
                                    width: `${bubble.size}px`,
                                    height: `${bubble.size}px`,
                                    animationDelay: `${bubble.delay}s`,
                                    animationDuration: `${bubble.duration}s`,
                                }}
                            />
                        ))}
                    </div>

                    <div className="absolute inset-0 pointer-events-none ocean-rays" />
                </div>,
                document.body
            )}
        </>
    )
}
