"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

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

    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: "snap",
        slides: {
            perView: 3,
            spacing: 16,
        },
        breakpoints: {
            "(max-width: 1024px)": {
                slides: { perView: 2, spacing: 12 },
            },
            "(max-width: 768px)": {
                slides: { perView: 1, spacing: 8 },
            },
        },
    })

    useEffect(() => {
        if (selectedImage === null) return

        const handleKeyDown = (e: KeyboardEvent) => {
            if (!project.images) return
            if (e.key === "ArrowRight") {
                setSelectedImage((prev) => (prev! + 1) % project.images!.length)
            } else if (e.key === "ArrowLeft") {
                setSelectedImage((prev) =>
                    prev! === 0 ? project.images!.length - 1 : prev! - 1
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

            {project.images && project.images.length > 0 ? (
                <div className="relative px-8">
                    {/* Carousel */}
                    <div ref={sliderRef} className="keen-slider">
                        {project.images!.map((image, index) => (
                            <div
                                key={index}
                                className="keen-slider__slide cursor-pointer group"
                                onClick={() => setSelectedImage(index)}
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
                        onClick={() => instanceRef.current?.prev()}
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-1/2 -right-4 -translate-y-1/2 bg-background/80 shadow-md hover:shadow-lg rounded-full"
                        onClick={() => instanceRef.current?.next()}
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
                            <div className="relative w-[95vw] h-[85vh] flex items-center justify-center">
                                <Image
                                    src={project.images[selectedImage].url}
                                    alt={project.images[selectedImage].alt}
                                    fill
                                    className="object-contain rounded-lg"
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
