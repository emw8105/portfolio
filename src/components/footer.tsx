import { quotes } from "@/lib/quotes"

export function Footer() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    return (
        <footer className="w-full py-4 px-4 bg-background/80 border-t border-border mt-auto">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-2 text-center">
                <blockquote className="italic text-muted-foreground text-sm">"{randomQuote}"</blockquote>
                <div className="text-xs text-muted-foreground">
                    Nojima GIFs by <a href="https://giphy.com/arisa0905m" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">arisa0905m</a>
                    {" "}
                    (<a href="https://arisa0905m.tumblr.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">tumblr</a>)
                </div>
            </div>
        </footer>
    )
}