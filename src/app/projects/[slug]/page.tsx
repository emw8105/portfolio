import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Target,
  Lightbulb,
  Code,
  Rocket,
  ImageIcon,
} from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const projectsData = {
  wallify: {
    id: "wallify",
    title: "Wallify",
    subtitle: "Transform Your Spotify Playlists into Beautiful Wallpapers",
    description:
      "A web application that connects to your Spotify account and transforms your favorite playlists into stunning, personalized wallpapers using album artwork and color analysis.",
    category: "Web Application",
    status: "In Progress",
    year: "2024",
    duration: "3 months",
    team: "Solo Project",
    technologies: ["JavaScript", "React", "Node.js", "Spotify API", "Canvas API", "Express", "OAuth 2.0"],
    githubUrl: "https://github.com/emw8105/Wallify",
    liveUrl: null,
    images: [
      {
        url: "/example.png",
        alt: "Wallify main interface",
        caption: "Main interface showing playlist selection and preview",
      },
      {
        url: "/example.png",
        alt: "Generated wallpaper example",
        caption: "Example of generated wallpaper using playlist album artwork",
      },
      {
        url: "/example.png",
        alt: "Color analysis feature",
        caption: "Color palette extraction and analysis from album covers",
      },
    ],
    overview:
      "Wallify was born from my love of music and design. I wanted to create something that could bridge the gap between my Spotify listening habits and my desktop aesthetic. The idea was simple: take the visual elements from my favorite playlists and turn them into beautiful wallpapers that reflect my musical taste.",
    challenge:
      "The main challenge was working with the Spotify API to fetch playlist data and album artwork, then processing these images to create cohesive, visually appealing wallpapers. I had to learn about color theory, image processing, and canvas manipulation to make the generated wallpapers look professional rather than just random collages.",
    solution:
      "I built a system that analyzes the dominant colors in album artwork, creates harmonious color palettes, and arranges the images using various layout algorithms. The app uses the HTML5 Canvas API for image manipulation and provides multiple layout options including grid, mosaic, and gradient overlay styles.",
    learnings: [
      "Deep dive into the Spotify Web API and OAuth 2.0 authentication flow",
      "Image processing techniques using Canvas API and color analysis algorithms",
      "Responsive design patterns for complex interactive applications",
      "User experience design for creative tools and customization interfaces",
    ],
    features: [
      "Spotify playlist integration with OAuth authentication",
      "Multiple wallpaper layout options (grid, mosaic, gradient)",
      "Color palette extraction and harmony analysis",
      "Custom resolution support for different screen sizes",
      "Real-time preview with adjustable parameters",
      "Export functionality for high-quality wallpapers",
    ],
    futureEnhancements: [
      "Add support for Apple Music and other streaming services",
      "Implement AI-powered layout suggestions based on music genre",
      "Create mobile app version for on-the-go wallpaper generation",
      "Add social sharing features to showcase created wallpapers",
    ],
  },
  "wordle-solver": {
    id: "wordle-solver",
    title: "Wordle Solver",
    subtitle: "Smart Strategy Tool for Daily Wordle Puzzles",
    description:
      "An intelligent web application that helps solve Wordle puzzles using optimal strategies, letter frequency analysis, and probability calculations.",
    category: "Web Application",
    status: "Completed",
    year: "2024",
    duration: "2 months",
    team: "Solo Project",
    technologies: ["JavaScript", "React", "Algorithm Design", "Data Analysis", "CSS3"],
    githubUrl: "https://github.com/emw8105/wordle-solver",
    liveUrl: null,
    images: [
      {
        url: "/example.png",
        alt: "Wordle Solver main interface",
        caption: "Main solving interface with letter frequency visualization",
      },
      {
        url: "/example.png",
        alt: "Algorithm visualization",
        caption: "Algorithm visualization showing word suggestion process",
      },
      {
        url: "/example.png",
        alt: "Statistics dashboard",
        caption: "Performance statistics and solving pattern analysis",
      },
    ],
    overview:
      "After getting frustrated with my inconsistent Wordle performance (and watching my friend Brian consistently solve puzzles faster than me), I decided to build a tool that could help me understand the optimal strategies for word guessing games. This project became an exploration into probability, linguistics, and game theory.",
    challenge:
      "The main challenge was developing an algorithm that could balance multiple factors: letter frequency in English, positional probability, and the elimination of impossible words based on previous guesses. I needed to create a system that could think several moves ahead while remaining fast enough for real-time suggestions.",
    solution:
      "I implemented a scoring system that weighs each potential guess based on information theory principles. The algorithm calculates the expected information gain for each possible word, considering letter frequency, position probability, and the current game state. The interface provides real-time suggestions and explains the reasoning behind each recommendation.",
    learnings: [
      "Information theory and entropy calculations for optimal decision making",
      "English language statistics and letter frequency analysis",
      "Algorithm optimization for real-time performance",
      "Game theory principles applied to word puzzle solving",
    ],
    features: [
      "Real-time optimal word suggestions based on current game state",
      "Letter frequency analysis and visualization",
      "Multiple solving strategies (conservative, aggressive, balanced)",
      "Performance tracking and statistics",
      "Educational mode explaining the reasoning behind suggestions",
      "Custom word list support for different puzzle variations",
    ],
    futureEnhancements: [
      "Add support for other word games like Absurdle and Quordle",
      "Implement machine learning to improve suggestions based on user success",
      "Create a practice mode with unlimited puzzles",
      "Add multiplayer features for competitive solving",
    ],
  },
  "form-autocomplete-ext": {
    id: "form-autocomplete-ext",
    title: "Form Autocomplete Extension",
    subtitle: "Streamlining UTD Administrative Processes",
    description:
      "A Chrome extension designed for UTD club officers to automate the tedious special room request process through intelligent form filling.",
    category: "Browser Extension",
    status: "Completed",
    year: "2024",
    duration: "1 month",
    team: "ACM UTD Development Team",
    technologies: ["JavaScript", "Chrome Extension APIs", "HTML/CSS", "Manifest V3", "Local Storage"],
    githubUrl: "https://github.com/acmutd/form-autocomplete-ext",
    liveUrl: null,
    images: [
      {
        url: "/example.png",
        alt: "Extension popup interface",
        caption: "Extension popup showing saved form data and settings",
      },
      {
        url: "/example.png",
        alt: "Automated form filling",
        caption: "Demonstration of automatic form filling in action",
      },
      {
        url: "/example.png",
        alt: "Settings and customization",
        caption: "Settings page for customizing form data and preferences",
      },
    ],
    overview:
      "As part of my role as Director of Development at ACM UTD, I noticed that our officers were spending significant time filling out repetitive room request forms for events. The process involved the same information being entered multiple times across different forms, which was both time-consuming and error-prone.",
    challenge:
      "The challenge was creating a browser extension that could intelligently detect and fill UTD's specific form fields while being flexible enough to handle form updates and variations. I also needed to ensure the extension was secure, user-friendly, and compliant with Chrome's Manifest V3 requirements.",
    solution:
      "I developed a Chrome extension that stores commonly used information (club details, officer information, event types) and automatically populates form fields when detected. The extension uses content scripts to identify form patterns and provides a simple interface for managing saved data and customizing auto-fill behavior.",
    learnings: [
      "Chrome Extension development with Manifest V3 architecture",
      "Content script injection and DOM manipulation techniques",
      "Browser security models and permission management",
      "User experience design for productivity tools",
    ],
    features: [
      "Automatic detection and filling of UTD room request forms",
      "Secure local storage of frequently used information",
      "Customizable form field mapping and data management",
      "One-click form completion with review option",
      "Support for multiple user profiles and club information",
      "Privacy-focused design with no external data transmission",
    ],
    futureEnhancements: [
      "Expand support to other UTD administrative forms",
      "Add form template creation for custom scenarios",
      "Implement data export/import for team sharing",
      "Create analytics dashboard for form completion tracking",
    ],
  },
}

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projectsData[params.slug as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="ghost" asChild className="hover:bg-muted/50">
              <Link href="/projects" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
          </div>

          {/* Project Header */}
          <Card className="glass-card p-8 mb-8">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold font-serif mb-2">{project.title}</h1>
                <p className="text-xl text-muted-foreground mb-4">{project.subtitle}</p>
                <p className="text-foreground leading-relaxed">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">{project.category}</Badge>
                  <Badge variant={project.status === "Completed" ? "default" : "secondary"}>{project.status}</Badge>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{project.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-muted-foreground" />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>{project.team}</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" />
                      GitHub
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Card>

          {/* Project Images */}
          <Card className="glass-card p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <ImageIcon className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold font-serif">Project Gallery</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.map((image, index) => (
                <div key={index} className="space-y-3">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <img src={image.url || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-sm text-muted-foreground">{image.caption}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Development Journey */}
          <Card className="glass-card p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="h-6 w-6 text-secondary" />
              <h2 className="text-2xl font-bold font-serif">Development Journey</h2>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Project Overview</h3>
                <p className="text-foreground leading-relaxed">{project.overview}</p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3">The Challenge</h3>
                <p className="text-foreground leading-relaxed">{project.challenge}</p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3">My Solution</h3>
                <p className="text-foreground leading-relaxed">{project.solution}</p>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3">Key Learnings</h3>
                <ul className="space-y-2">
                  {project.learnings.map((learning, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-foreground">{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>

          {/* Technical Details */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <Card className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Code className="h-5 w-5 text-accent" />
                <h3 className="text-xl font-bold font-serif">Technologies Used</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold font-serif">Key Features</h3>
              </div>
              <ul className="space-y-2">
                {project.features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* All Features */}
          <Card className="glass-card p-8 mb-8">
            <h3 className="text-xl font-bold font-serif mb-4">Complete Feature Set</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Future Enhancements */}
          <Card className="glass-card p-8">
            <h3 className="text-xl font-bold font-serif mb-4">Future Enhancements</h3>
            <p className="text-muted-foreground mb-4">
              Here are some ideas I'm considering for future versions of this project:
            </p>
            <ul className="space-y-3">
              {project.futureEnhancements.map((enhancement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                  <span className="text-foreground">{enhancement}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </main>
    </div>
  )
}
