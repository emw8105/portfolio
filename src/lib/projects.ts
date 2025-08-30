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
  features?: string[]
  futureEnhancements?: string[]
}

export const projectsData: Record<string, Project> = {
  "keylogger": {
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
        "Golang",
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
            url: "/projects/keylogger-architecture.png",
            alt: "System Architecture Diagram",
            caption: "Architectural overview showing client-server communication and cloud services.",
        },
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
"sage": {
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
"rating-script": {
    id: "rating-script",
    title: "Professor Ratings Data Aggregator",
    subtitle: "Combining RateMyProfessors and UTD Grade Data for More Comprehensive Insights",
    description: "A Python script that aggregates and matches professor ratings from RateMyProfessors with UTD grade distributions, handling name inconsistencies and duplicates for more accurate professor profiles.",
    category: "Data Engineering",
    status: "Completed",
    year: "Spring 2025",
    duration: "2 Months",
    team: "Solo",
    technologies: [
      "Python",
      "Selenium",
      "BeautifulSoup",
      "Regex",
      "FuzzyWuzzy",
    ],
    githubUrl: "https://github.com/emw8105/professor-ratings-script",
    images: [
        {
        url: "/projects/ratings-script-utdgrades.png",
        alt: "UTD Grades ratings integration",
        caption: "UTD Grades site enhanced with professor ratings data",
        },
        {
        url: "/projects/sage-chatbot-course.png",
        alt: "SAGE chatbot course recommendations",
        caption: "RAG chatbot suggesting courses based on RMP/grades data",
        },
        {
        url: "/projects/ratings-script-logs.png",
        alt: "Professor ratings script logs",
        caption: "Logs & metrics from the professor ratings data aggregation script",
        },
        {
        url: "/projects/ratings-script-json.png",
        alt: "Professor ratings script JSON output",
        caption: "Structured JSON output from the professor ratings data aggregation script",
        },
    ],
    featured: true,
    highlights: [
      "Combines RMP and UTD grade data for comprehensive professor profiles",
      "Handles name inconsistencies and duplicates with normalization and fuzzy matching",
      "Supports manual mapping for edge cases",
      "Outputs structured JSON for easy integration",
      "Automates data scraping from RateMyProfessors"
    ],
    overview: "For many years, my organization, ACM UTD, has managed UTD Grades, the premier site for course optimization through grade visualization. However, I felt as though grades don't tell the full story. Many professors I've taken were tough, but I learned the most from them and appreciated them much more than courses which I had sailed by with an easy A in. I decided during the creation of SAGE's course optimizer that I would find a way to integrate more insights. The site I looked towards was RMP.",
    challenge: "Existing solutions struggled with inconsistent professor names, duplicate names and duplicate student-created RMP profiles, professors whose names have changed during their tenure, and incomplete data when merging RMP and grade sources. Similarly, RMP uses internal ids for each professor's URL, so we can't easily webscrape them. My initial approach used Selenium to navigate to the UTD page of RMP and then click the 'Show More' button to list professors until it wasn't available. However, each button click would take about 2 seconds to retrieve more professors, causing the full scrape to take several minutes. After some other attempts to speed up this process, Michael Zhao (https://www.michaelzhao.xyz/) showed me a program he had written that uses the internal GraphQL API of the RMP site to query for 1000 professors at once, drastically speeding up my RMP data sourcing.",
    solution: "The GraphQL API implementation was a huge improvement to the overall speed of the retrieval, reducing the time taken to gather data by over 95% (Selenium startup being the majority of the remainder). In addition to that, the solution implemented robust name normalization, fuzzy matching, and course overlap logic, plus manual mapping, to accurately match and merge professor data. Subsequent data obtained 20% more successful matches due to improved edge case handling and was used to enhance SAGE and UTD Grades, applications that receive tens of thousands of students worth of network traffic every semester",
    features: [
      "Enhanced professor matching (normalization, fuzzy, manual, and course overlap)",
      "Duplicate entry resolution",
      "Comprehensive JSON output with RMP and grade data",
      "Automated scraping of RMP using Selenium and GraphQL",
      "Handles unmatched data gracefully"
    ],
    futureEnhancements: [
      "Improve handling of missing or partial RMP data",
      "Add a web interface for manual mapping and review",
      "Support additional universities or data sources",
      "Automate regular data updates",
    ]
},
"wallify": {
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
    subtitle: "Optimization Tool for Daily Wordle Puzzles",
    description:
      "A web application that helps solve Wordle puzzles by analyzing existing guesses and resulting hints to provide optimal suggestions.",
    category: "Web Application",
    status: "Completed",
    year: "2024",
    duration: "2 months",
    team: "Solo Project",
    technologies: ["JavaScript", "Typescript", "React", "Algorithm Design", "Data Analysis",],
    githubUrl: "https://github.com/emw8105/wordle-solver",
    liveUrl: undefined,
    images: [
      {
        url: "/projects/wordle.png",
        alt: "Wordle Solver main interface",
        caption: "Main solving interface with existing suggestions",
      },
      {
        url: "/projects/wordle-solution.png",
        alt: "Algorithm visualization",
        caption: "Algorithm narrows down suggestions based on guesses and hints",
      },
      {
        url: "/projects/wordle-completed.png",
        alt: "Wordle site",
        caption: "Suggestions can be entered into the Wordle game to complete the puzzle.",
      },
    ],
    overview:
      "Every day, my coworker Brian would send me the results of his daily games, and he would always beat me in the Wordle. I also took forever to make guesses, it feels like I was brute forcing every possible solution. So I decided to build a crutch tool to beat Brian, and I also wanted an excuse to practice React.",
    challenge:
      "The main challenge was finding a way to analyze the game state and provide real-time suggestions. Part of this was the UI, I felt like existing tools didn't take into account the context of the guessed colors. For example, there might be 3 M's in the word 'MOMMY', but we can have one M as green, one as yellow, and one as gray, which tells us that there are 2 M's in the solution, and one of them is in the right place, whereas the other is located somewhere else. Coming up with an algorithm for applying these conditions on a list of possible solution words was the other primary challenge.",
    solution:
      "I was able to develop a tool that takes in the existing guesses and their resulting hints, and applies a series of filters to narrow down the list of possible solutions. The algorithm considers letter frequency, position, and exclusion criteria to suggest the most optimal next guess. The frontend was built using React and Typescript, with a focus on usability and clarity.",
    features: [
      "Real-time optimal word suggestions based on current game state",
      "Custom word list support for different puzzle variations",
      "Intuitive UI with letter color coding and feedback",
    ],
    futureEnhancements: [
      "Rewrite as a Deno/Preact application to learn more about Deno (see https://github.com/emw8105/wordle-solver-v2)",
      "Performance tracking and analytics",
      "User account system for saving preferences and history",
      "Enhanced mobile experience with responsive design",
      "Integration as a browser extension that can read existing guesses"
    ],
  },
  "astra-extension": {
    id: "astra-extension",
    title: "Astra Autofill Chrome Extension",
    subtitle: "Automated Form Filler for UTD Room Requests",
    description:
      "A Chrome extension that autofills the UTD Astra Special Room Request Form by saving and entering common info, including dynamic questions.",
    category: "Browser Extension",
    status: "Completed",
    year: "Fall 2024",
    duration: "1 month",
    team: "Me & Michael Zhao",
    technologies: [
      "JavaScript",
      "Chrome Extensions API",
      "HTML",
      "CSS",
      "MutationObserver",
      "Browser Storage"
    ],
    githubUrl: "https://github.com/acmutd/form-autocomplete-ext",
    liveUrl: undefined,
    images: [
      {
        url: "/projects/astra-extension.png",
        alt: "Astra Autofill popup interface",
        caption: "Extension popup for entering and saving user information",
      },
      {
        url: "/projects/astra-extension-form.png",
        alt: "Astra form autofilled",
        caption: "Astra form with fields automatically filled by the extension and inputs recognized",
      }
    ],
    overview:
      "For directors at ACM UTD, filling out the UTD Astra room request form for student organizations is a repetitive and time-consuming task, especially when most answers remain the same for each submission (Name, email phone #, President's name, email phone #, advisor's name, email, phone #, RUO's name, email, phone #, etc.). This extension was built to automate the process, saving time and reducing errors.",
    challenge:
      "The main challenge was handling the dynamic nature of the form, where new questions appear based on previous answers. Additionally, directly setting input values did not always update the form's internal state. The original form was likely built with a framework like React, so the extension needed to integrate with the framework's event handlers to register that the input fields had been filled out. Ensuring compatibility and reliability required simulating real user input and observing DOM changes.",
    solution:
      "The extension uses a combination of Chrome's scripting API and a MutationObserver to detect and fill both static and dynamically loaded questions. For text fields, it simulates user input to ensure the form's state is updated correctly. User information is stored in Chrome storage for quick reuse. Dynamic questions are iterated over to fill each one in as it appears, effectively instantly filling out 80% of the form for every request.",
    features: [
      "One-click autofill for all static and dynamic form questions",
      "Persistent storage of user and organization information",
      "Handles dynamic form elements that appear based on previous answers",
      "Easy to use popup interface"
    ],
    futureEnhancements: [
      "Support for additional forms and custom field mapping",
      "Cloud-based storage for user data (e.g., Firebase integration)",
      "Options for multiple user profiles and organization settings",
      "Improved error handling and feedback for unsupported form changes",
      "Publish the extension to the Chrome Web Store for wider distribution"
    ],
  },
  "visio-parsing-tool": {
    id: "visio-parsing-tool",
    title: "Visio Parsing Tool",
    subtitle: "Automated Test Case Generation from Visio Callflows",
    description:
      "A C# tool that parses Microsoft Visio files to extract callflow data, build multi-page graphs, and generate optimal test case paths for QA automation. Designed to streamline IVR testing and facilitate integration with platforms like TestRail.",
    category: "QA Automation Tool",
    status: "Completed",
    year: "2024",
    duration: "4 months",
    team: "Solo Project",
    technologies: [
      "C#",
      ".NET 7",
      "XML Parsing",
      "Graph Algorithms",
      "Microsoft Visio"
    ],
    githubUrl: "https://github.com/emw8105/visio-parser-tool",
    liveUrl: undefined,
    images: [
      {
        url: "/projects/visio-parser-menu.png",
        alt: "Menu for selecting Visio files",
        caption: "Menu for selecting Visio files and parsing process"
      },
      {
        url: "/projects/visio-parser-example.png",
        alt: "Example of graph visualization",
        caption: "Example of graph visualization and Visio design issues"
      },
      {
        url: "/projects/visio-parser-output.png",
        alt: "Output for dense Visio diagrams",
        caption: "Output for dense Visio diagrams"
      },
      {
        url: "/projects/visio-parser-output-debugging.png",
        alt: "Debugging output for Visio parsing tool",
        caption: "Debugging output for Visio parsing tool using recompiled Visio"
      },
    ],
    overview:
      "The Visio Parsing Tool automates the extraction and analysis of callflow diagrams from Visio files, enabling efficient test case generation for IVR systems. It builds a graph representation of callflows, identifies start/end nodes, and computes all possible and minimum test paths, reducing manual QA effort.",
    challenge:
      "Parsing Visio files is complex due to their XML structure, multi-page references, and cyclical callflows. The tool needed to handle on-page and off-page references to connect nodes in the graph without edges to link them, avoid infinite loops, and allow user configuration for ambiguous node identification. Additionally, there were numerous challenges in ensuring the tool worked for multiple Visio design formats, as different shapes can be used in different ways. Determining start and end nodes of a path for example began as just 'nodes with outgoing edges but no incoming edges' seemed rigid enough to determine start nodes, but many designers use that same pattern for extracting database information, where the database element would now be considered a start node.",
    solution:
      "The tool unzips and parses Visio files, constructs a directed multi-graph of callflows, and provides a menu-driven interface for user configuration. It uses iterative graph traversal to avoid stack overflows, detects cycles, and outputs both exhaustive and minimal test paths. The output is designed for easy integration with QA platforms. It also utilizes the Microsoft Visual Studio testing framework for automated testing. Extensive documentation was written to ensure IVR developers can maintain consistency with design requirements to integrate with automated tool usage.",
    features: [
      "Automatic Visio file selection and XML parsing",
      "Graph construction across multiple pages with reference handling",
      "User-configurable start/end node and reference identification",
      "Generation of all possible and minimum test case paths",
      "Cycle detection and prevention of infinite loops",
      "Output files for test case integration and Visio ID mapping"
    ],
    futureEnhancements: [
      "Function return detection for off-page references",
      "Unique global shape IDs for cross-page flows",
      "Modular test case generation by page",
      "Direct integration with TestRail/Cyara",
      "User interface for easier configuration"
    ]
  }
}