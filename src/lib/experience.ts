export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

export const experiences: Experience[] = [
  // {
  //   title: "Solutions Architect",
  //   company: "Amazon Web Services",
  //   location: "Dallas, TX",
  //   period: "January 2025 - Present",
  //   type: "Full-Time",
  //   description:
  //       "Working as a dedicated technical advisor for enterprise organizations, building relationships as a trusted partner for cloud architecture and AWS solutions. After initial training, I'll be assigned to a specific customer account within a key industry (automotive, manufacturing, financial services, or energy) to serve as their primary AWS contact.",
  //   technologies: ["AWS", "Python", "TypeScript", "Infrastructure as Code", "Cloud Architecture", "Solution Design"],
  //   highlights: [
  //       "Serving as a trusted technical advisor and primary point of contact for enterprise AWS customers, independent of sales quotas to ensure unbiased guidance.",
  //       "Designing cloud-native architectures and providing strategic direction for implementation while collaborating with customer technical teams.",
  //       "Building proof-of-concept prototypes to demonstrate specific AWS capabilities and validate architectural approaches before full-scale implementation.",
  //       "Tackling complex technical challenges across customer projects, from infrastructure optimization to application modernization.",
  //       "Developing custom tools and automation to accelerate customer outcomes and improve operational efficiency.",
  //   ],
  // },
  {
    title: "Director of Development",
    company: "ACM UTD",
    location: "Richardson, TX",
    period: "May 2025 - December 2025",
    type: "Organization Role",
    description:
        "Oversee ACM UTD's largest division, managing 6 project teams and 45 officers to build and maintain software serving hundreds of ACM members and thousands of UTD students while driving recruiting, planning, and cross-divisional initiatives.",
    technologies: ["TypeScript", "React", "Next.js", "Python", "Golang", "AWS", "GCP", "Firebase", "GitHub"],
    highlights: [
        "Directed engineering operations as both technical leader and major code contributor, ensuring delivery and maintainability of software used by thousands of UTD students.",
        "Provided architectural guidance and technical mentorship to project teams, reviewing designs and code contributions.",
        "Recruited skilled developers and team leads by reviewing 200+ applications and conducting 80+ interviews.",
        "Launched division-wide initiatives to improve project maintainability, including building an officer database and leading development of an ACM API that centralizes university and third-party data.",
        "Designed the ACM API as a shared infrastructure to enable cross-divisional collaboration, powering projects within ACM Development and other ACM divisions such as HackUTD, the largest collegiate hackathon in North America (1200+ participants).",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "J.P. Morgan Chase & Co.",
    location: "Plano, TX",
    period: "Jun 2025 - Aug 2025",
    type: "Internship",
    description:
        "Worked on the Connected Banking Import Aggregation team, delivering backend and full-stack solutions to improve vendor outage handling, system reliability, and engineer efficiency.",
    technologies: ["Java", "Spring Boot", "React", "TypeScript", "SQL", "Oracle DB", "Jira", "Bitbucket", "JUnit"],
    highlights: [
        "Automated maintenance scheduling, eliminating manual weekend and late-night deployments and saving 300+ engineer hours annually.",
        "Enhanced Java microservices to query Oracle DB and return structured outage data for dynamic splash page activation.",
        "Developed React + TypeScript features for both internal admin and customer-facing web apps, enabling API-driven outage handling.",
        "Created comprehensive JUnit test suites for backend endpoints, ensuring robustness and reducing production issues.",
    ],
  },
  {
    title: "Development Lead",
    company: "ACM UTD",
    location: "Richardson, TX",
    period: "Dec 2024 - May 2025",
    type: "Organization Role",
    description:
        "Led end-to-end development of SAGE, an AI-powered academic advising platform, overseeing system design, sprint planning, and team coordination while ensuring scalability and maintainability.",
    technologies: ["TypeScript", "React", "Python", "AWS Lambda", "AWS S3", "LangChain", "Pinecone"],
    highlights: [
        "Directed architecture and development of SAGE, delivering an AI-powered advising platform for UT Dallas students.",
        "Developed a RAG-based chatbot with advanced AI models to answer complex academic queries.",
        "Designed scalable AWS infrastructure with automated CI/CD pipelines to support multiple deployments.",
        "Built custom asynchronous data pipelines to process university catalog data, improving accuracy and maintainability.",
    ],
  },
  {
    title: "Fullstack Software Developer Intern",
    company: "Verizon",
    location: "Irving, TX",
    period: "Jun 2024 - Aug 2024",
    type: "Internship",
    description:
        "Worked on the Database Engineering team to improve observability and database performance analysis through self-service tools, automation, and compliance-focused solutions.",
    technologies: ["React.js", "Node.js", "Express.js", "SQL", "Oracle DB"],
    highlights: [
        "Developed a self-service Oracle AWR reporting solution, reducing analysis time by 60% and optimizing resource usage by 40%.",
        "Integrated New Relic agents into servers, enhancing monitoring and database observability through centralized dashboards.",
        "Enabled secure report generation for offshore teams accessing regulated databases, ensuring compliance with data restrictions.",
        "Implemented self-help automation workflows, significantly reducing repetitive engineering tasks and operational toil.",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "Voxai Solutions",
    location: "Dallas, TX",
    period: "Jun 2023 - Jun 2024",
    type: "Internship",
    description:
        "Worked on the .NET Development team building migration tools, AWS serverless functions, and custom front-end solutions to support enterprise contact center clients transitioning to Genesys Cloud.",
    technologies: ["C#", ".NET", "Node.js", "Python", "AWS Lambda", "SQL", "Microsoft SQL Server", "Azure"],
    highlights: [
        "Built C# tools to automate OnPrem → Cloud migrations, enabling reliable and scalable CX data transfer.",
        "Created AWS Lambda functions in Node.js for secure payment workflows and automated call flow procedures.",
        "Designed front-end web forms with HTML/CSS/JavaScript for custom Genesys CX integrations.",
        "Improved migration tool performance through test-driven profiling, boosting execution speed by 70%.",
    ],
  },
];
