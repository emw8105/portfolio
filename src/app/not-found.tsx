import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground px-4">
            <div className="max-w-md w-full text-center">
                <Image
                    src="/assets/nojima-eating.gif"
                    alt="Nojima cat eating bread"
                    width={200}
                    height={200}
                    className="mx-auto"
                    unoptimized
                />
                <h1 className="font-serif text-6xl font-light tracking-[-0.03em] mb-3">404</h1>
                <p className="text-muted-foreground mb-8">
                    Whatever you&apos;re looking for, it&apos;s not here.
                </p>
                <Link href="/" className="inline-flex items-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                    Go home
                </Link>
            </div>
        </div>
    );
}
