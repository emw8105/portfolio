"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react"

interface ProjectImage {
    url: string
    alt: string
    caption: string
}

interface Project {
    images?: ProjectImage[]
}

interface ProjectGalleryProps {
    project: Project
}

export default function ProjectGallery({ project }: ProjectGalleryProps) {
    const [selectedImage, setSelectedImage] = useState<null | number>(null)
    const containerRef = useRef<HTMLDivElement | null>(null)
    const isPointerDownRef = useRef(false)
    const pointerStartScrollRef = useRef(0)
    const pointerStartXRef = useRef(0)
    const wasDraggingRef = useRef(false)
    const oneSetWidthRef = useRef(0)

    const originals = project.images ?? []
    const slides = [...originals, ...originals, ...originals]

    // compute width of one set (middle originals)
    const computeOneSetWidth = () => {
        const container = containerRef.current
        if (!container || originals.length === 0) return 0
        const n = originals.length
        let w = 0
        for (let i = n; i < n * 2; i++) {
            const el = container.children[i] as HTMLElement | undefined
            if (el) {
                w += el.offsetWidth + parseFloat(getComputedStyle(el).marginRight || "0")
            }
        }
        oneSetWidthRef.current = w
        return w
    }

    // center on middle set initially
    useEffect(() => {
        const container = containerRef.current
        if (!container || originals.length === 0) return

        const doLayout = () => {
            const w = computeOneSetWidth()
            container.scrollLeft = w
        }

        requestAnimationFrame(doLayout)
        window.addEventListener("resize", doLayout)
        return () => window.removeEventListener("resize", doLayout)
    }, [originals.length])

    // scroll looping behavior
    useEffect(() => {
        const container = containerRef.current
        if (!container || originals.length === 0) return

        const onScroll = () => {
            const oneSet = oneSetWidthRef.current
            if (!oneSet) return
            const left = container.scrollLeft
            const lower = oneSet * 0.5
            const upper = oneSet * 1.5

            if (left < lower) {
                container.style.scrollBehavior = "auto"
                container.scrollLeft = left + oneSet
                requestAnimationFrame(() => {
                    container.style.scrollBehavior = "smooth"
                })
            } else if (left > upper) {
                container.style.scrollBehavior = "auto"
                container.scrollLeft = left - oneSet
                requestAnimationFrame(() => {
                    container.style.scrollBehavior = "smooth"
                })
            }
        }

        container.addEventListener("scroll", onScroll, { passive: true })
        return () => container.removeEventListener("scroll", onScroll)
    }, [originals.length])

    // track dragging vs click
    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        function onPointerDown(e: PointerEvent) {
            isPointerDownRef.current = true
            wasDraggingRef.current = false
            pointerStartXRef.current = e.clientX
            if (container) {
                pointerStartScrollRef.current = container.scrollLeft
            }
            ; (e.target as Element).setPointerCapture?.(e.pointerId)
        }

        function onPointerMove(e: PointerEvent) {
            if (!isPointerDownRef.current) return
            const dx = Math.abs(e.clientX - pointerStartXRef.current)
            if (dx > 6) {
                wasDraggingRef.current = true
            }
        }

        function onPointerUp(e: PointerEvent) {
            isPointerDownRef.current = false
            try {
                ; (e.target as Element).releasePointerCapture?.(e.pointerId)
            } catch { }
        }

        container.addEventListener("pointerdown", onPointerDown)
        container.addEventListener("pointermove", onPointerMove)
        window.addEventListener("pointerup", onPointerUp)

        return () => {
            container.removeEventListener("pointerdown", onPointerDown)
            container.removeEventListener("pointermove", onPointerMove)
            window.removeEventListener("pointerup", onPointerUp)
        }
    }, [])

    const getSlideWidth = () => {
        const container = containerRef.current
        if (!container) return 300
        const n = originals.length
        const refEl = container.children[n] as HTMLElement | undefined
        return refEl ? refEl.offsetWidth + parseFloat(getComputedStyle(refEl).marginRight || "0") : 300
    }

    const scrollByOne = (dir: "left" | "right") => {
        const container = containerRef.current
        if (!container) return
        const w = getSlideWidth()
        container.scrollBy({ left: dir === "left" ? -w : w, behavior: "smooth" })
    }

    const onSlideClick = (index: number) => {
        if (wasDraggingRef.current) return
        const mappedIndex = index % originals.length
        setSelectedImage(mappedIndex)
    }

    // arrow key navigation in fullscreen
    useEffect(() => {
        function handleKeyDown(e: KeyboardEvent) {
            if (selectedImage === null || !project.images) return
            if (e.key === "ArrowRight") {
                setSelectedImage((prev) =>
                    prev !== null ? (prev + 1) % project.images!.length : prev
                )
            } else if (e.key === "ArrowLeft") {
                setSelectedImage((prev) =>
                    prev !== null
                        ? (prev - 1 + project.images!.length) % project.images!.length
                        : prev
                )
            } else if (e.key === "Escape") {
                setSelectedImage(null)
            }
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [selectedImage, project.images])

    return (
        <Card className="glass-card p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
                <ImageIcon className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold font-serif">Project Gallery</h2>
            </div>

            {originals.length > 0 ? (
                <div className="relative px-8">
                    {/* Carousel */}
                    <div
                        ref={containerRef}
                        className="flex gap-4 overflow-x-scroll scroll-smooth touch-pan-y no-scrollbar"
                    >
                        {slides.map((image, index) => (
                            <div
                                key={index}
                                className="shrink-0 w-[300px] cursor-pointer group"
                                onClick={() => onSlideClick(index)}
                            >
                                <div className="aspect-video rounded-lg overflow-hidden bg-muted relative transition-all duration-300 group-hover:shadow-lg group-hover:shadow-white/30">
                                    <Image
                                        src={image.url || "/placeholder.svg"}
                                        alt={image.alt}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        draggable={false}
                                    />
                                </div>
                                <p className="text-sm text-muted-foreground mt-2">
                                    {image.caption}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Navigation buttons */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-1/2 -left-4 -translate-y-1/2 bg-background/80 shadow-md hover:shadow-lg rounded-full"
                        onClick={() => scrollByOne("left")}
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-1/2 -right-4 -translate-y-1/2 bg-background/80 shadow-md hover:shadow-lg rounded-full"
                        onClick={() => scrollByOne("right")}
                    >
                        <ChevronRight className="h-5 w-5" />
                    </Button>
                </div>
            ) : (
                <p className="text-muted-foreground">No images available.</p>
            )}

            {/* Lightbox Modal */}
            <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
                <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 flex flex-col items-center justify-center bg-black">
                    {selectedImage !== null && project.images && (
                        <div className="flex flex-col items-center w-full">
                            <div className="flex items-center justify-center w-full h-full">
                                <Image
                                    src={project.images[selectedImage].url}
                                    alt={project.images[selectedImage].alt}
                                    width={3200}
                                    height={2400}
                                    className="w-auto h-auto max-w-[95vw] max-h-[85vh] object-contain rounded-lg"
                                    draggable={false}
                                />
                            </div>
                            <p className="text-sm text-muted-foreground mt-4 px-4 text-center max-w-[80ch]">
                                {project.images[selectedImage].caption}
                            </p>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </Card>
    )
}
