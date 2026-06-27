"use client"

import { quotes } from "@/lib/quotes"
import { useState, useEffect } from "react"
import { Kelp, Coral, BubbleSvg } from "./ocean-creatures"

function splitQuote(quote: string) {
    const match = quote.match(/^"(.+)"\s-\s(.+)$/)

    if (!match) {
        return { body: quote.replace(/^"|"$/g, ""), author: "" }
    }

    return {
        body: match[1],
        author: match[2],
    }
}

export function Footer() {
    const [quoteIndex, setQuoteIndex] = useState<number | null>(null)

    useEffect(() => {
        const nextIndex = Math.floor(Math.random() * quotes.length)
        setQuoteIndex(nextIndex)
    }, [])

    const selectedQuote = quoteIndex === null ? null : quotes[quoteIndex]
    const { body, author } = splitQuote(selectedQuote ?? "")

    return (
        <footer className="footer-wrap mt-auto w-full px-4 pb-4 pt-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <div className="footer-panel home-surface border border-ocean-border bg-ocean-surface relative grid gap-4 rounded-[1.75rem] px-5 py-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_max-content] lg:items-end lg:gap-6 overflow-hidden">

                    {/* Seafloor corner decorations */}
                    <div aria-hidden className="pointer-events-none absolute bottom-0 left-0 flex items-end gap-1 opacity-55">
                        <div style={{ animationName: "kelp-sway", animationDuration: "4.2s", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite", transformOrigin: "bottom center" }}>
                            <Kelp color="#1a8a5e" height={72} />
                        </div>
                        <div style={{ animationName: "kelp-sway", animationDuration: "5.6s", animationDelay: "-1.5s", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite", transformOrigin: "bottom center", opacity: 0.7 }}>
                            <Kelp color="#2da97a" height={56} />
                        </div>
                        <div style={{ marginBottom: 2, animationName: "kelp-sway", animationDuration: "3.8s", animationDelay: "-2.8s", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite", transformOrigin: "bottom center" }}>
                            <Coral color="#ff6b8a" size={36} />
                        </div>
                    </div>
                    <div aria-hidden className="pointer-events-none absolute bottom-0 right-0 flex items-end gap-1 opacity-45">
                        <div style={{ animationName: "kelp-sway", animationDuration: "5s", animationDelay: "-0.8s", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite", transformOrigin: "bottom center", opacity: 0.65 }}>
                            <Coral color="#4be0c1" size={32} />
                        </div>
                        <div style={{ animationName: "kelp-sway", animationDuration: "4.4s", animationDelay: "-3.2s", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite", transformOrigin: "bottom center" }}>
                            <Kelp color="#1a8a5e" height={64} />
                        </div>
                        <div style={{ animationName: "kelp-sway", animationDuration: "6s", animationDelay: "-1s", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite", transformOrigin: "bottom center", opacity: 0.5 }}>
                            <Kelp color="#2da97a" height={50} />
                        </div>
                    </div>

                    {/* A few small rising bubbles in the footer */}
                    {[14, 35, 52, 68, 82].map((left, i) => (
                        <div
                            key={i}
                            aria-hidden
                            style={{
                                position: "absolute", bottom: -8, left: `${left}%`,
                                animationName: "ocean-bubble-rise",
                                animationDuration: `${10 + i * 3}s`,
                                animationDelay: `${i * 2.1}s`,
                                animationTimingFunction: "linear",
                                animationIterationCount: "infinite",
                                pointerEvents: "none", zIndex: 0,
                            }}
                        >
                            <BubbleSvg size={8 + i * 3} />
                        </div>
                    ))}

                    <blockquote className="footer-quote relative z-10 min-w-0 max-w-3xl text-[clamp(0.96rem,1.05vw,1.08rem)] leading-[1.68] text-foreground/90">
                        <div className="footer-quote-frame">
                            {selectedQuote ? (
                                <>
                                    <span key={quoteIndex} className="footer-quote-line">
                                        <q className="footer-quote-text">{body}</q>
                                    </span>
                                </>
                            ) : (
                                <span className="footer-quote-placeholder" aria-hidden="true" />
                            )}
                        </div>
                        {author ? <cite className="footer-quote-author">{author}</cite> : null}
                    </blockquote>

                    <div className="footer-credit relative z-10 self-end whitespace-nowrap text-[0.7rem] leading-5 text-muted-foreground/82 lg:text-right">
                        Nojima GIFs by <a href="https://giphy.com/arisa0905m" target="_blank" rel="noopener noreferrer" className="footer-link">arisa0905m</a>
                        {" "}
                        via <a href="https://arisa0905m.tumblr.com/" target="_blank" rel="noopener noreferrer" className="footer-link">Tumblr</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}