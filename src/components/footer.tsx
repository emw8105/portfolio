"use client"

import { quotes } from "@/lib/quotes"
import { useState, useEffect } from "react"

function getQuoteOfTheDay() {
    const now = new Date()
    const daySeed = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate())
    return quotes[Math.floor(daySeed / 86400000) % quotes.length]
}

export function Footer() {
    const [featuredQuote, setFeaturedQuote] = useState<string>(quotes[0])

    useEffect(() => {
        setFeaturedQuote(getQuoteOfTheDay())
    }, [])

    return (
        <footer className="mt-auto w-full px-4 pb-5 pt-3 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-4 rounded-[1.5rem] border border-border/70 bg-background/45 px-4 py-4 backdrop-blur-md sm:px-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
                    <div className="space-y-2">
                        <p className="text-[0.68rem] uppercase tracking-[0.24em] text-muted-foreground">
                            Featured quote
                        </p>
                        <blockquote className="max-w-3xl font-serif text-sm leading-6 text-foreground/88 sm:text-[0.95rem] sm:leading-7">
                            {featuredQuote}
                        </blockquote>
                    </div>

                    <div className="text-xs leading-5 text-muted-foreground lg:text-right">
                        Nojima GIFs by <a href="https://giphy.com/arisa0905m" target="_blank" rel="noopener noreferrer" className="underline decoration-primary/40 underline-offset-3 transition-colors hover:text-primary">arisa0905m</a>
                        {" "}
                        via <a href="https://arisa0905m.tumblr.com/" target="_blank" rel="noopener noreferrer" className="underline decoration-primary/40 underline-offset-3 transition-colors hover:text-primary">Tumblr</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}