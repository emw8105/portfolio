import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
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
        slides: {
            perView: 1,
            spacing: 16,
        },
        breakpoints: {
            "(min-width: 640px)": {
                slides: { perView: 2, spacing: 16 },
            },
            "(min-width: 1024px)": {
                slides: { perView: 3, spacing: 24 },
            },
        },
    })

    return (
        <Card className="glass-card p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
                <ImageIcon className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold font-serif">Project Gallery</h2>
            </div>


            {project.images && project.images.length > 0 ? (
                <div className="relative  px-8">
                    {/* Carousel */}
                    <div ref={sliderRef} className="keen-slider">
                        {project.images.map((image: ProjectImage, index: number) => (
                            <div
                                key={index}
                                className="keen-slider__slide cursor-pointer group"
                                onClick={() => setSelectedImage(index)}
                            >
                                <div
                                    className="aspect-video rounded-lg overflow-hidden bg-muted relative transition-all duration-300 group-hover:shadow-lg group-hover:shadow-white/30">
                                    <Image
                                        src={image.url || "/placeholder.svg"}
                                        alt={image.alt}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>
                                <p className="text-sm text-muted-foreground mt-2">{image.caption}</p>
                            </div>
                        ))}
                    </div>

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
                            <div className="flex items-center justify-center w-full h-full">
                                <Image
                                    src={project.images[selectedImage].url}
                                    alt={project.images[selectedImage].alt}
                                    width={3200}
                                    height={2400}
                                    className="w-auto h-auto max-w-[95vw] max-h-[85vh] object-contain rounded-lg"
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
