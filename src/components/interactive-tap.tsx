"use client"

import { useState, useEffect } from "react"
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

export function InteractiveTap() {
    const [oceanMode, setOceanMode] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)
    const [particles, setParticles] = useState<Particle[]>([])

    useEffect(() => {
        if (!oceanMode) {
            setParticles([])
            return
        }

        // Create MORE particles for dramatic effect
        const initialParticles: Particle[] = Array.from({ length: 60 }, (_, i) => ({
            id: Date.now() + i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 12 + 3,
            speedY: Math.random() * 0.8 + 0.3,
            speedX: (Math.random() - 0.5) * 0.5,
            opacity: Math.random() * 0.7 + 0.2,
            color: Math.random(), // 0-1 for color variation
        }))
        setParticles(initialParticles)

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
    }, [oceanMode])

    const handleTap = () => {
        setIsAnimating(true)
        setOceanMode(prev => !prev)

        setTimeout(() => setIsAnimating(false), 600)
    }

    useEffect(() => {
        if (oceanMode) {
            document.body.classList.add('ocean-mode')
        } else {
            document.body.classList.remove('ocean-mode')
        }
    }, [oceanMode])

    return (
        <>
            <div className="relative">
                <button
                    onClick={handleTap}
                    className={`glass-card rounded-3xl p-8 relative group cursor-pointer transition-all duration-700 w-full ${isAnimating ? 'scale-95' : 'hover:scale-[1.02]'
                        } ${oceanMode ? 'ocean-active' : ''}`}
                    aria-label="Interactive element"
                >
                    <div className={`absolute inset-0 rounded-3xl transition-all duration-700 ${oceanMode
                            ? 'bg-gradient-to-br from-primary/40 via-accent/30 to-primary/40 opacity-100'
                            : 'bg-gradient-ocean opacity-0 group-hover:opacity-10'
                        }`}></div>

                    <Image
                        src="/assets/nojima-tap.gif"
                        alt="Nojima tapping"
                        width={400}
                        height={400}
                        className={`w-full h-auto rounded-2xl transition-all duration-500 ${isAnimating ? 'scale-90 rotate-2' : ''
                            } ${oceanMode ? 'brightness-125 contrast-110' : ''}`}
                        unoptimized
                        priority
                    />
                </button>

                {/* DRAMATIC floating particles and effects when ocean mode is active */}
                {oceanMode && (
                    <>
                        {/* Animated overlay gradients */}
                        <div className="fixed inset-0 pointer-events-none z-[90] ocean-overlay" />

                        {/* Floating particles */}
                        <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
                            {particles.map(particle => {
                                const getParticleColor = (colorValue: number) => {
                                    if (colorValue < 0.4) return 'from-primary/50 to-primary/20'
                                    if (colorValue < 0.7) return 'from-accent/50 to-accent/20'
                                    return 'from-blue-400/50 to-cyan-400/20'
                                }

                                return (
                                    <div
                                        key={particle.id}
                                        className={`absolute rounded-full bg-gradient-to-br ${getParticleColor(particle.color)} blur-sm animate-pulse`}
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

                        {/* Light rays effect */}
                        <div className="fixed inset-0 pointer-events-none z-[95] ocean-rays" />
                    </>
                )}
            </div>

            <style jsx global>{`
        body.ocean-mode::before {
          background: radial-gradient(
            ellipse at top,
            oklch(0.20 0.14 195) 0%,
            oklch(0.14 0.10 210) 30%,
            oklch(0.10 0.06 230) 60%,
            oklch(0.08 0.03 245) 100%
          ) !important;
          transition: background 1s ease-out;
        }

        .ocean-active {
          box-shadow: 
            0 0 60px rgba(100, 200, 220, 0.6), 
            0 0 120px rgba(100, 200, 220, 0.3),
            0 0 180px rgba(255, 127, 80, 0.2);
          animation: ocean-pulse 3s ease-in-out infinite;
        }

        @keyframes ocean-pulse {
          0%, 100% {
            box-shadow: 
              0 0 60px rgba(100, 200, 220, 0.6), 
              0 0 120px rgba(100, 200, 220, 0.3),
              0 0 180px rgba(255, 127, 80, 0.2);
          }
          50% {
            box-shadow: 
              0 0 80px rgba(100, 200, 220, 0.8), 
              0 0 160px rgba(100, 200, 220, 0.4),
              0 0 240px rgba(255, 127, 80, 0.3);
          }
        }

        .ocean-overlay {
          background: 
            radial-gradient(ellipse at 20% 30%, rgba(100, 200, 220, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(255, 127, 80, 0.1) 0%, transparent 50%);
          animation: ocean-shift 8s ease-in-out infinite;
        }

        @keyframes ocean-shift {
          0%, 100% {
            opacity: 0.5;
            transform: translateY(0);
          }
          50% {
            opacity: 0.8;
            transform: translateY(-20px);
          }
        }

        .ocean-rays {
          background: 
            linear-gradient(180deg, 
              transparent 0%, 
              rgba(100, 200, 220, 0.03) 20%,
              transparent 40%,
              rgba(100, 200, 220, 0.03) 60%,
              transparent 80%
            );
          animation: ocean-rays 6s linear infinite;
        }

        @keyframes ocean-rays {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
      `}</style>
        </>
    )
}
