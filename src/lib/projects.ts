export interface Project {
  id: string
  title: string
  subtitle?: string
  description: string
  longDescription?: string
  category: string
  status: string
  year: string
  duration?: string
  team?: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
  icon?: string | null
  highlights?: string[]
  images?: { url: string; alt: string; caption: string }[]
  overview?: string
  challenge?: string
  solution?: string
  learnings?: string[]
  features?: string[]
  futureEnhancements?: string[]
}

export const projectsData: Record<string, Project> = {
    keylogger: {
        id: "keylogger",
        title: "Remote Keylogger System (PoC)",
        subtitle: "A Secure, Full-Stack Remote Logging and Monitoring System",
        description:
            "A system that collects, encrypts, and stores system information and key inputs from a client, utilizing secure data transmission, cloud-based storage, and web-based monitoring. Built for educational purposes.",
        category: "System Engineering / Cloud System",
        status: "Completed",
        year: "Summer 2025",
        duration: "2 months",
        team: "Solo Project",
        technologies: [
            "Go",
            "Python",
            "PyInstaller",
            "Next.js",
            "Typescript",
            "TailwindCSS",
            "AWS EC2",
            "AWS S3",
            "Firebase",
            "Linux/Bash Scripting",
            "Cryptography (AES-GCM, RSA-OAEP)",
            "Docker",
        ],
        githubUrl: "https://github.com/emw8105/keylogger",
        liveUrl: "http://keylogger-site.doypid.com/",
        images: [
            {
                url: "/projects/keylogger-landing.png",
                alt: "Web Client UI",
                caption: "The Next.js client homepage for downloading the executable and viewing logs.",
            },
            {
                url: "/projects/keylogger-page.png",
                alt: "Live Logs Dashboard",
                caption: "The web interface displaying live, decrypted logs from connected systems.",
            },
            {
                url: "/projects/keylogger-logs.png",
                alt: "Log Data Example",
                caption: "Example of decrypted log data showing keystrokes and system info.",
            }
        ],
        overview:
            "This project started as an exploration into secure client-server communication and a desire to understand tracking systems. The goal was to build a secure pipeline to capture system inputs and transmit them to a central server, by building a pipeline from the system-level client to the public-facing web interface.",
        challenge:
            "The primary challenge was ensuring end-to-end security. This involved implementing a robust cryptographic scheme (RSA for key exchange, AES-GCM for data encryption) to prevent the log contents from being accessible over a network during transmission. Since the client was written in Python and the server was written in Go, I had to work with different cryptography packages for encryption and decryption. I also had to manage multiple distinct parts of the system—a Python client that required compilation into a Windows executable, a Go server for secure API handling, and a Next.js frontend for data visualization and distribution. Each component introduced its own set of challenges, including environment variable management, cross-language data serialization, and cloud infrastructure setup on AWS.",
        solution:
            "The solution is a multi-layered system. The lightweight Python client, packaged with PyInstaller, securely captures keystrokes and system info. It performs a cryptographic handshake with the Go server to establish a secure AES session. The encrypted logs are then sent via an API endpoint to the Go server, which decrypts them and stores them in Firestore (Firebase database). A Next.js web client then fetches this data to provide a live, transparent view of the logs, while also serving the compiled client executable directly from an AWS S3 bucket.",
        learnings: [
            "Advanced cryptography concepts and their implementation (AES-GCM, RSA-OAEP)",
            "Troubleshooting complex issues across different technology stacks (e.g., JSON unmarshaling, API routing)",
            "Building, packaging, and distributing standalone applications (PyInstaller)",
            "Generating executables from Python scripts with special configurations (e.g. run in the background)",
        ],
        features: [
            "Secure end-to-end encryption using a hybrid cryptographic approach",
            "Centralized log storage and management in Firebase Firestore",
            "Public-facing web client built with Next.js for transparent log viewing",
            "Multi-platform API server and client (Linux server, Windows client)",
            "Automated deployment scripts for both client and server",
            "Scalable system architecture capable of handling multiple clients simultaneously",
        ],
        futureEnhancements: [
            "Rewrite the client in Go for improved cross-platform support and performance",
            "Create a macOS/Linux client to broaden platform support",
            "Add visual dashboards to analyze keyboard activity and system trends",
            "Integrate a live-updating WebSocket connection for real-time log display",
        ],
    },
    sage: {
        id: "sage",
        title: "SAGE",
        subtitle: "Automated Degree Plan Evaluator and Advising Platform",
        description:
            "A full-stack web application designed to help UTD students evaluate their degree progress, optimize course planning, and receive AI-powered advising using a RAG chatbot.",
        category: "Web Application / Cloud System",
        status: "In Progress",
        year: "2025",
        duration: "Ongoing (1 year)",
        team: "10+ ACM Developers | Role: Lead Developer",
        technologies: [
            "React",
            "Typescript",
            "TailwindCSS",
            "Python",
            "AWS Lambda",
            "AWS Step Functions",
            "AWS S3",
            "AWS DynamoDB",
            "Terraform",
            "Pinecone",
        ],
        githubUrl: "https://github.com/acmutd/sage-site",
        liveUrl: "https://utdsage.com/",
        images: [
            {
            url: "/projects/sage-landing.png",
            alt: "SAGE landing page",
            caption: "Landing page redesigned in React with Tailwind",
            },
            {
            url: "/projects/sage-architecture.png",
            alt: "AWS Architecture diagram",
            caption: "Cloud architecture using AWS Lambda, Step Functions, and S3",
            },
            {
            url: "/projects/sage-chatbot-course.png",
            alt: "SAGE chatbot course recommendations",
            caption: "RAG chatbot suggesting courses based on RMP/grades/availability",
            },
            {
            url: "/projects/sage-chatbot.png",
            alt: "SAGE chatbot page",
            caption: "RAG chatbot providing instant advising",
            },
        ],
        overview:
            "SAGE began as a student-led initiative in ACM UTD to automate advising and degree planning. Students often had difficulty understanding their transcript progress and catalog requirements, so our team built a platform that automatically parses transcripts, scrapes catalog data, and evaluates degree progress in real-time.",
        challenge:
            "The project faced several challenges, including handling formatting inconsistencies across multiple years of degree catalogs, parsing transcript PDF formats reliably, and architecting a scalable system capable of supporting thousands of students. Another major hurdle was managing a team of 45+ developers, maintaining code quality, and ensuring smooth collaboration across frontend, backend, and infrastructure teams. We also needed to construct the RAG chatbot to provide accurate advising responses based on the parsed data, and integrating the RMP and university grade data for course recommendations required some creativity on sourcing our data.",
        solution:
            "We built a modular AWS-based pipeline with multiple Lambda functions, orchestrated with Step Functions. A custom Python parser replaced AWS Textract for faster and more accurate transcript processing. Degree plans are generated and stored in S3 for fast retrieval, while Pinecone is used to support semantic chatbot queries. The frontend was migrated from React to Next.js + Typescript + Tailwind for performance and scalability, with a redesigned UI for usability.",
        learnings: [
            "How to lead and manage a large-scale technical team",
            "Complex AWS architectures with Lambda, Step Functions, and S3",
            "Building resilient parsing and ETL pipelines",
            "Infrastructure-as-Code with Terraform for dev/prod environments",
            "Balancing leadership, mentorship, and direct technical contributions"
        ],
        features: [
            "Automated transcript parsing using custom Python Lambda functions",
            "Scraping and standardizing degree catalog data across multiple years",
            "Degree plan progress evaluation and personalized recommendations",
            "Integrated chatbot using Pinecone for semantic advising queries",
            "React frontend with modern UI/UX for students",
            "Scalable AWS pipeline with S3, Lambda, and Step Functions",
            "Mobile-responsive design for on-the-go access",
        ],
        futureEnhancements: [
            "Expand support for graduate degree plans",
            "ML-driven models to handle catalog inconsistencies automatically",
            "Exportable and shareable degree progress reports",
            "Role-based dashboards for officers and developers to improve maintainability",
        ],
    },
    wallify: {
        id: "wallify",
        title: "Wallify",
        subtitle: "Transform Your Spotify Playlists into Beautiful Wallpapers",
        description:
        "A web application that connects to your Spotify account and integrates your top listening activity to generate customized wallpapers.",
        category: "Web Application",
        status: "Completed",
        year: "Fall 2024",
        duration: "3 months",
        team: "Solo Project",
        technologies: ["Typescript", "React", "Node.js", "Express.js", "Go", "AWS EC2", "AWS DynamoDB", "Docker", "Spotify API", "OAuth 2.0"],
        githubUrl: "https://github.com/emw8105/Wallify",
        liveUrl: "https://wallify.doypid.com/",
        images: [
        {
            url: "/projects/wallify-login.png",
            alt: "Login screen",
            caption: "Login screen with Spotify OAuth integration",
        },
        {
            url: "/projects/wallify-options-menu.png",
            alt: "Wallify main interface",
            caption: "Main interface showing style selection and customization options",
        },
        {
            url: "/projects/wallify-grid-andrew.png",
            alt: "Generated wallpaper example",
            caption: "Example of generated wallpaper using playlist album artwork",
        },
        ],
        overview:
        "The idea for Wallify began when a friend asked me to make an app to generate a phone background using his top Spotify activity. I started with writing a Node.js script to perform the Spotify API OAuth flow and fetch the user's top playlists and tracks, and then I realized the concept could be expanded into a full web application.",
        challenge:
        "There were several challenges involved with this project. When creating the frontend, I had to follow strict Spotify branding guidelines to ensure the app would be approved for public use. On the backend, the OAuth flow was quite tricky once implemented as a full-stack application rather than standalone, and I even rewrote the original Express.js server into Go, which I had never used before. Deploying the Go server to AWS EC2 was also a new experience for me, I had to work with nginx reverse proxies, buy my cloudflare domain (doypid.com), handle AWS IAM roles and EC2 configurations, write deployment scripts, work with Docker to containerize my application, and so much more.",
        solution:
        "The app was built using React and Typescript with tailwind for the frontend, with a Dockerized Go server deployed to an EC2 instance, storing data in DynamoDB and allowing users to modify their displayed data to customize their own wallpapers. Users can download the React fragment that contains the generated wallpaper and use it as their background or just as a collection to see their top listening activity.",
        learnings: [
        "Deep dive into the Spotify Web API and OAuth 2.0 authentication flow",
        "AWS EC2 deployment, nginx configuration, and Docker containerization",
        "Go programming language and ecosystem",
        "Cloudflare domain management and DNS configuration",
        ],
        features: [
        "Spotify OAuth 2.0 authentication for secure user login",
        "Fetch and display user's top playlists and tracks",
        "Multiple wallpaper styles and customization options",
        "Responsive design for mobile and desktop",
        "High-resolution wallpaper generation and download",
        "Activity data cached for quick retrieval and reduced API calls",
        ],
        futureEnhancements: [
        "Add cookie or account-based user profiles for saving preferences",
        "Improve the mobile experience with a dedicated mobile layout",
        "Petition the API to allow public app access without review",
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
    liveUrl: undefined,
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
    liveUrl: undefined,
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