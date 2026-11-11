import { Navigation } from "@/components/navigation"
import { Skeleton } from "@/components/ui/skeleton"

export default function ProjectLoading() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="px-4 pt-24 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Back link */}
          <div className="mb-14">
            <Skeleton className="h-9 w-28 rounded-full" />
          </div>

          {/* Hero */}
          <section className="mb-16 sm:mb-20">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
              <div className="space-y-7">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-16 w-3/4" />
                <Skeleton className="h-6 w-1/2" />
                <div className="space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
                <div className="flex gap-2">
                  <Skeleton className="h-8 w-20 rounded-full" />
                  <Skeleton className="h-8 w-24 rounded-full" />
                </div>
              </div>
              <div className="hidden lg:block w-52 space-y-6">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
          </section>

          {/* Gallery */}
          <div className="mb-16 space-y-6 sm:mb-20">
            <Skeleton className="h-4 w-36" />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="aspect-video w-full rounded-lg" />
              ))}
            </div>
          </div>

          {/* Narrative panel */}
          <Skeleton className="h-64 w-full rounded-2xl" />
        </div>
      </main>
    </div>
  )
}
