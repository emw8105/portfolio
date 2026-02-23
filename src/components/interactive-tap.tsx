"use client"

import { useState, useEffect } from "react"
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

export function InteractiveTap() {
    const [nojimaTap, setNojimaTap] = useState(false)
    const [particles, setParticles] = useState<Particle[]>([])
    const [bubbles, setBubbles] = useState<Bubble[]>([])
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (!nojimaTap) {
            setParticles([])
            setBubbles([])
            return
        }

        // Create TONS of particles for maximum drama
        const initialParticles: Particle[] = Array.from({ length: 80 }, (_, i) => ({
            id: Date.now() + i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 15 + 3,
            speedY: Math.random() * 1.2 + 0.4,
            speedX: (Math.random() - 0.5) * 0.6,
            opacity: Math.random() * 0.8 + 0.2,
            color: Math.random(),
        }))
        setParticles(initialParticles)

        // Create animated bubbles
        const initialBubbles: Bubble[] = Array.from({ length: 25 }, (_, i) => ({
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

    useEffect(() => {
        if (nojimaTap) {
            document.body.classList.add('nojima-tap-mode')
        } else {
            document.body.classList.remove('nojima-tap-mode')
        }
    }, [nojimaTap])

    return (
        <>
            <div className="relative">
                <button
                    onClick={handleTap}
                    className={`glass-card rounded-3xl p-8 relative cursor-pointer transition-all duration-700 w-full ${nojimaTap ? 'nojima-active' : ''}`}
                    aria-label="Interactive element"
                >
                    <div className={`absolute inset-0 rounded-3xl transition-all duration-700 ${nojimaTap
                        ? 'bg-gradient-to-br from-primary/40 via-accent/30 to-primary/40 opacity-100'
                        : 'opacity-0'
                        }`}></div>

                    <Image
                        src="/assets/nojima-tap.gif"
                        alt="Nojima tapping"
                        width={400}
                        height={400}
                        className={`w-full h-auto rounded-2xl transition-all duration-700 ${nojimaTap ? 'brightness-125 contrast-110' : ''}`}
                        unoptimized
                        priority
                    />
                </button>
            </div>

            {/* Portal the ocean effects to document.body for full viewport coverage */}
            {mounted && createPortal(
                <div className={`fixed inset-0 pointer-events-none transition-opacity duration-[1500ms] z-[9999] ${nojimaTap ? 'opacity-100' : 'opacity-0'}`}>
                    {/* Animated wave overlays - FULL PAGE */}
                    {/* <div className="absolute inset-0 pointer-events-none ocean-waves" /> */}

                    {/* Animated overlay gradients - FULL PAGE */}
                    <div className="absolute inset-0 pointer-events-none ocean-overlay" />

                    {/* Floating particles - FULL PAGE */}
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

                    {/* Animated bubbles rising - FULL PAGE */}
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

                    {/* Light rays effect - FULL PAGE */}
                    <div className="absolute inset-0 pointer-events-none ocean-rays" />
                </div>,
                document.body
            )}
        </>
    )
}
