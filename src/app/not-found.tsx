import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4">
            <div className="max-w-md w-full text-center">
                <img
                    src="/assets/nojima-eating.gif"
                    alt="Nojima eating bread"
                    className="mx-auto mb-8 w-40 h-40 object-contain"
                    draggable={false}
                />
                <h1 className="text-5xl font-bold mb-4">404</h1>
                <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
                <p className="text-muted-foreground mb-8">
                    Oops! Whatever you're looking for, it's not here...<br />
                </p>
                <Link href="/" className="inline-block px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold shadow hover:bg-primary/90 transition">
                    Go Home
                </Link>
            </div>
        </div>
    );
}
