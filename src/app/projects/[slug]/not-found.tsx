import { Navigation } from "@/components/navigation"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ProjectNotFound() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-serif text-4xl font-light tracking-[-0.03em] mb-4">Project not found</h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            This project doesn&apos;t exist or may have been moved.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to projects
            </Link>
            <Link
              href="/"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Go home
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
