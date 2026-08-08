export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  stack: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  highlights: string[];
}

export interface Skill {
  name: string;
  category: 'DevOps' | 'Development' | 'Tools';
  icon: string;
  level: number;
  description: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  responsibilities: string[];
  technologies: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export const PERSONAL_INFO = {
  name: "Adithyan Pavithran",
  headline: "DevOps Engineer & Software Developer",
  titles: [
    "DevOps Engineer",
    "Flutter Developer",
    "Cloud Enthusiast",
    "Software Developer"
  ],
  bio: "Passionate developer focused on building scalable cloud infrastructure, modern applications, automation solutions, and intuitive digital experiences. I enjoy solving real-world problems through technology while continuously learning and adapting to new tools.",
  aboutBio: "I am passionate about designing scalable applications, automating infrastructure, and creating modern digital products. My interests span DevOps, cloud computing, Flutter development, Linux administration, and AI-powered applications. I enjoy learning emerging technologies and applying them to solve real-world problems efficiently.",
  email: "adithyanpavithran1@gmail.com",
  phone: "+91-7902482052",
  location: "Kerala, India",
  github: "https://github.com/Adithyanpavithran",
  linkedin: "https://www.linkedin.com/in/adithyan-pavithran-b80424352",
  twitter: "https://twitter.com/adithyan_p",
  resumeUrl: "/resume.pdf",
};

export const STATS = [
  { label: "Projects Completed", value: 15, suffix: "+" },
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Technologies Mastered", value: 25, suffix: "+" },
  { label: "Repositories Built", value: 35, suffix: "+" },
];

export const SKILLS: Skill[] = [
  // DevOps
  { name: "Docker", category: "DevOps", icon: "SiDocker", level: 90, description: "Containerization & Multi-stage builds" },
  { name: "Kubernetes", category: "DevOps", icon: "SiKubernetes", level: 82, description: "Cluster management & Orchestration" },
  { name: "Git", category: "DevOps", icon: "SiGit", level: 95, description: "Version control & Branching strategies" },
  { name: "GitHub", category: "DevOps", icon: "SiGithub", level: 95, description: "GitHub Actions & Repository management" },
  { name: "Jenkins", category: "DevOps", icon: "SiJenkins", level: 85, description: "Automated CI/CD Pipelines" },
  { name: "CI/CD", category: "DevOps", icon: "SiTurborepo", level: 90, description: "Continuous integration & deployment workflow" },
  { name: "Nginx", category: "DevOps", icon: "SiNginx", level: 88, description: "Reverse proxy & Load balancing" },
  { name: "AWS", category: "DevOps", icon: "SiAmazonwebservices", level: 85, description: "EC2, S3, IAM, CloudFront, EKS" },
  { name: "Google Cloud", category: "DevOps", icon: "SiGooglecloud", level: 80, description: "GCP Compute Engine & Cloud Run" },
  { name: "Prometheus", category: "DevOps", icon: "SiPrometheus", level: 86, description: "Metrics collection & Time-series monitoring" },
  { name: "Grafana", category: "DevOps", icon: "SiGrafana", level: 88, description: "Visual dashboarding & Alerting" },
  { name: "Infrastructure Automation", category: "DevOps", icon: "SiTerraform", level: 85, description: "Terraform & Ansible scripting" },
  { name: "Linux", category: "DevOps", icon: "SiLinux", level: 92, description: "System administration & Bash automation" },

  // Development
  { name: "Flutter", category: "Development", icon: "SiFlutter", level: 92, description: "Cross-platform mobile apps" },
  { name: "Dart", category: "Development", icon: "SiDart", level: 90, description: "Reactive OOP programming" },
  { name: "Python", category: "Development", icon: "SiPython", level: 88, description: "Scripting, AI integrations & backend" },
  { name: "Firebase", category: "Development", icon: "SiFirebase", level: 88, description: "Firestore, Auth & Cloud Functions" },
  { name: "REST APIs", category: "Development", icon: "SiPostman", level: 92, description: "API design, integration & documentation" },
  { name: "SQL", category: "Development", icon: "SiPostgresql", level: 85, description: "Database querying & Schema design" },
  { name: "HTML", category: "Development", icon: "SiHtml5", level: 95, description: "Semantic markup & Accessibility" },
  { name: "CSS", category: "Development", icon: "SiCss3", level: 92, description: "Modern styling & Layouts" },
  { name: "JavaScript", category: "Development", icon: "SiJavascript", level: 90, description: "ES6+ asynchronous web logic" },
  { name: "TypeScript", category: "Development", icon: "SiTypescript", level: 88, description: "Strict type-safe application development" },
  { name: "React", category: "Development", icon: "SiReact", level: 90, description: "Component-driven user interfaces" },
  { name: "Next.js", category: "Development", icon: "SiNextdotjs", level: 90, description: "App Router, SSR & Static Generation" },
  { name: "Tailwind CSS", category: "Development", icon: "SiTailwindcss", level: 95, description: "Utility-first design system" },

  // Tools
  { name: "VS Code", category: "Tools", icon: "SiVisualstudiocode", level: 95, description: "Primary IDE & extension ecosystem" },
  { name: "Figma", category: "Tools", icon: "SiFigma", level: 85, description: "UI/UX wireframing & prototype design" },
  { name: "Postman", category: "Tools", icon: "SiPostman", level: 92, description: "API testing & collection automation" },
  { name: "Linux Terminal", category: "Tools", icon: "SiGnubash", level: 95, description: "CLI operations, SSH & shell scripting" },
  { name: "Docker Desktop", category: "Tools", icon: "SiDocker", level: 90, description: "Local container environment manager" },
  { name: "VirtualBox", category: "Tools", icon: "SiVirtualbox", level: 85, description: "Virtualization & local sandbox testing" },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-3",
    role: "Customer Support Executive",
    company: "BCABS",
    period: "2026 - Present",
    location: "Cochin, India",
    type: "Full-time",
    responsibilities: [
      "Managed client communication, inbound user inquiries, and troubleshooting requests.",
      "Resolved complex software issues, system logging, and client ticket escalation workflows.",
      "Maintained CRM databases and client records to ensure maximum service uptime.",
      "Conducted issue tracking, regression reporting, and post-resolution client follow-ups.",
      "Achieved 98%+ client satisfaction rating across sustained support performance metrics."
    ],
    technologies: ["CRM Tools", "Customer Relations", "Issue Tracking", "Communication", "Documentation"]
  },
  {
    id: "exp-1",
    role: "DevOps Engineer",
    company: "Akumen",
    period: "2026 - Present",
    location: "Kochi, India",
    type: "Full-time",
    responsibilities: [
      "Containerization of microservices using Docker and multi-stage builds for optimized image sizes.",
      "Designed and implemented production-grade CI/CD pipelines in GitHub Actions and Jenkins.",
      "Managed Linux server administration, hardening, SSH configurations, and security audits.",
      "Built real-time system observability and metrics monitoring using Grafana and Prometheus.",
      "Configured Nginx reverse proxies, SSL/TLS certificates, rate limiting, and domain routing.",
      "Provisioned scalable Cloud Infrastructure on AWS & GCP with zero-downtime deployments."
    ],
    technologies: ["Docker", "Kubernetes", "Linux", "Nginx", "Jenkins", "Grafana", "Prometheus", "AWS"]
  },
  {
    id: "exp-2",
    role: "Flutter Developer",
    company: "Maitexa Technologies",
    period: "2022 - 2023",
    location: "Kozhikode, India",
    type: "Full-time",
    responsibilities: [
      "Developed high-performance cross-platform Android and iOS applications using Flutter & Dart.",
      "Integrated Firebase Authentication, Firestore real-time database, and Cloud Messaging.",
      "Architected clean REST API integrations with robust state management (Bloc / Provider).",
      "Collaborated with UI/UX designers to translate Figma mockups into pixel-perfect mobile layouts.",
      "Optimized app rendering performance, reduced launch times, and solved memory bottlenecks.",
      "Provided tier-2 technical customer support and rapid issue resolution for production apps."
    ],
    technologies: ["Flutter", "Dart", "Firebase", "REST APIs", "State Management", "Git"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "navi-ai",
    title: "Navi AI — Intelligent Navigation",
    category: "AI & Mobile",
    description: "AI-powered navigation platform combining intelligent route planning, real-time guidance, and voice interaction.",
    fullDescription: "Navi AI is an AI-powered navigation application that combines intelligent route planning, real-time guidance, and voice-assisted interactions to deliver a smarter, intuitive navigation experience. Built with Flutter and Firebase, it integrates Google Maps API and AI capabilities (Gemini/OpenAI) for contextual recommendations.",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80",
    stack: ["Flutter", "Dart", "Firebase", "Google Maps API", "AI APIs", "REST APIs"],
    githubUrl: "https://github.com/adithyan-pavithran/navi-ai-navigation",
    liveUrl: "https://navi-ai-navigation.vercel.app",
    featured: true,
    highlights: [
      "AI-powered navigation assistance & intelligent route recommendations",
      "Real-time location telemetry & interactive Google Maps integration",
      "Voice-enabled interaction & natural conversational guidance",
      "Fast, optimized performance built with Flutter & Firebase"
    ]
  },
  {
    id: "gather-up",
    title: "Gather Up — Event Platform",
    category: "Mobile Application",
    description: "Modern event management and social networking platform built with Flutter and Firebase.",
    fullDescription: "Gather Up is a cross-platform event management application that enables users to discover, organize, and participate in events. Built with Flutter and Firebase, the app provides secure authentication, real-time Firestore data synchronization, event management, RSVP tracking, and instant push notifications.",
    image: "/assets/projects/gather_up.jpg",
    stack: ["Flutter", "Firebase", "Dart", "Cloud Firestore", "Push Notifications"],
    githubUrl: "https://github.com/adithyan-pavithran/gather-up-app",
    liveUrl: "https://gatherup-events.vercel.app",
    featured: true,
    highlights: [
      "User authentication, profile management, and biometrics",
      "Event creation, edit management, search, and category filters",
      "RSVP, attendee tracking, and Cloud Firestore sync",
      "Real-time notifications and responsive modern mobile experience"
    ]
  },
  {
    id: "jarvis-ai",
    title: "Jarvis AI Assistant",
    category: "AI & Automation",
    description: "Personal AI assistant with voice interaction, system automation, and NLP processing.",
    fullDescription: "A sophisticated personal AI assistant engineered in Python that features natural voice recognition, desktop automation, smart API querying, and context-aware responses. Capable of controlling system utilities, launching cloud scripts, fetching live news/weather, and automating daily repetitive engineering workflows.",
    image: "/assets/projects/jarvis_ai.jpg",
    stack: ["Python", "AI APIs", "Speech Recognition", "Automation", "NLP"],
    githubUrl: "https://github.com/adithyan-pavithran/jarvis-ai-assistant",
    liveUrl: "https://jarvis-ai-demo.vercel.app",
    featured: true,
    highlights: [
      "Speech-to-Text and Text-to-Speech offline voice engine",
      "Automated system tasks and custom Python subprocess triggers",
      "Integration with OpenAI and custom LLM inference APIs",
      "Real-time news, system metrics, and task scheduler"
    ]
  },
  {
    id: "meetyou-tracker",
    title: "MeetYou Period Tracker",
    category: "Mobile Application",
    description: "Modern Flutter app for menstrual cycle tracking with smart analytics and reminders.",
    fullDescription: "A beautifully crafted, privacy-first Flutter mobile application designed for menstrual cycle tracking, symptom monitoring, ovulation prediction, and personalized health insights. Built with clean architecture, offline-first syncing, and encrypted data storage.",
    image: "/assets/projects/meetyou_tracker.jpg",
    stack: ["Flutter", "Firebase", "Dart", "Push Notifications", "Provider"],
    githubUrl: "https://github.com/adithyan-pavithran/meetyou-period-tracker",
    liveUrl: "https://meetyou-app.vercel.app",
    featured: true,
    highlights: [
      "Predictive cycle estimation algorithms and fertility window visualization",
      "Firebase Auth with biometrics security and Firestore cloud backup",
      "Interactive calendar views and symptom log tracking",
      "Custom dark/light mode with fluid Framer-like micro-animations"
    ]
  },

  {
    id: "taxi-booking",
    title: "Taxi Booking Platform",
    category: "Web & Cloud",
    description: "Interactive cab booking platform featuring route selection and responsive UI.",
    fullDescription: "A comprehensive web-based taxi reservation platform offering instant fare estimation, interactive pickup/drop location maps, vehicle fleet selection, and automated booking notifications.",
    image: "/assets/projects/bcabs.png",
    stack: ["Next.js", "Tailwind CSS", "Google Maps API", "REST APIs", "TypeScript"],
    githubUrl: "https://github.com/adithyan-pavithran/taxi-booking-platform",
    liveUrl: "https://taxi-booking-demo.vercel.app",
    featured: true,
    highlights: [
      "Interactive route calculation and distance estimation",
      "Responsive car selection grid with real-time rate multipliers",
      "Smooth booking confirmation flow with form validation",
      "Mobile-optimized progressive web app experience"
    ]
  },
  {
    id: "linux-monitoring",
    title: "Linux Monitoring Dashboard",
    category: "DevOps & Monitoring",
    description: "Enterprise server monitoring stack using Prometheus, Grafana, Node Exporter & Docker.",
    fullDescription: "A complete infrastructure monitoring solution deployed with Docker Compose. Collects low-level system metrics (CPU, RAM, Disk I/O, Network traffic, System Load) via Node Exporter into Prometheus time-series database and displays real-time telemetry on custom Grafana dashboards.",
    image: "/assets/projects/linux_monitoring.jpg",
    stack: ["Prometheus", "Grafana", "Node Exporter", "Docker", "Linux", "Bash"],
    githubUrl: "https://github.com/adithyan-pavithran/linux-monitoring-dashboard",
    liveUrl: "https://grafana-monitoring-demo.vercel.app",
    featured: true,
    highlights: [
      "Automated Docker Compose stack provisioning for zero-config startup",
      "Pre-configured alerts for high CPU utilization, memory pressure & disk space",
      "Custom Grafana dark dashboard with live refresh rate",
      "Secure Nginx reverse proxy with basic authentication"
    ]
  },

];

export const SERVICES: ServiceItem[] = [
  {
    id: "serv-1",
    title: "DevOps Engineering",
    description: "Containerization, automated CI/CD pipelines, build optimizations, and cloud infrastructure setup.",
    icon: "Server",
    features: ["Docker & Kubernetes Setup", "GitHub Actions & Jenkins CI/CD", "Automated Release Pipelines", "Zero-Downtime Deployments"]
  },
  {
    id: "serv-2",
    title: "Cloud Deployment",
    description: "Scalable AWS and Google Cloud platform architecture, server configuration, domain SSL, and CDN setup.",
    icon: "Cloud",
    features: ["AWS EC2, S3 & EKS Infrastructure", "GCP Cloud Run & Compute Services", "Nginx Reverse Proxying", "Cloudflare DNS & SSL Automation"]
  },
  {
    id: "serv-3",
    title: "Flutter Mobile Development",
    description: "Cross-platform mobile application development for iOS and Android with sleek UI and robust backends.",
    icon: "Smartphone",
    features: ["Native Performance Flutter & Dart", "Firebase Auth & Realtime Database", "REST API & GraphQL Integration", "State Management (Bloc/Provider)"]
  },
  {
    id: "serv-4",
    title: "Infrastructure Automation",
    description: "Infrastructure as Code (IaC) using Terraform and Ansible scripts for repeatable server deployments.",
    icon: "Cpu",
    features: ["Terraform Provisioning", "Ansible Configuration Management", "Bash Automation Scripts", "Security Hardening Protocols"]
  },
  {
    id: "serv-5",
    title: "Linux Administration",
    description: "Comprehensive Linux server administration, shell scripting, system security hardening, and performance tuning.",
    icon: "Terminal",
    features: ["Ubuntu/Debian Server Management", "User Access & SSH Hardening", "Cron Jobs & Service Daemon Automation", "Log Analysis & Diagnostics"]
  },
  {
    id: "serv-6",
    title: "Modern Web Development",
    description: "Ultra-fast Next.js, React, and Tailwind CSS web applications with 95+ Lighthouse scores and rich animations.",
    icon: "Code",
    features: ["Next.js App Router Architecture", "Tailwind CSS & Framer Motion", "SEO & OpenGraph Optimizations", "Responsive Mobile-First UI"]
  }
];

export const WHY_CHOOSE_ME = [
  {
    title: "Fast Learner",
    description: "Rapidly master emerging cloud technologies, tools, and frameworks to stay ahead of industry standards.",
    icon: "Zap"
  },
  {
    title: "Problem Solver",
    description: "Analytical mindset focused on breaking down complex engineering bottlenecks into elegant technical solutions.",
    icon: "Target"
  },
  {
    title: "Clean Code",
    description: "Committed to maintaining modular, documented, type-safe, and self-explanatory codebases.",
    icon: "CheckCircle2"
  },
  {
    title: "Team Collaboration",
    description: "Effective communicator with proven cross-functional experience alongside developers, designers, and support teams.",
    icon: "Users"
  },
  {
    title: "Continuous Learning",
    description: "Dedicated to continuous self-improvement through open-source contributions and active tech research.",
    icon: "BookOpen"
  },
  {
    title: "Scalable Solutions",
    description: "Designing systems that effortlessly scale from initial MVP launch to high-concurrency production loads.",
    icon: "TrendingUp"
  },
  {
    title: "Reliable Delivery",
    description: "Dependable execution with strict adherence to timelines, quality assurance, and production reliability.",
    icon: "ShieldCheck"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Alex Rivera",
    role: "Lead Systems Architect",
    company: "Akumen Tech Solutions",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    content: "Adithyan transformed our deployment pipeline completely. His Docker containerization and Nginx setup slashed our deployment downtime to zero. Extremely proactive and skilled DevOps engineer!",
    rating: 5
  },
  {
    id: "test-2",
    name: "Sarah Jenkins",
    role: "Product Manager",
    company: "Maitexa Technologies",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    content: "Working with Adithyan on our Flutter mobile app was a fantastic experience. He delivered pixel-perfect UI, seamless Firebase integration, and smooth animations ahead of schedule.",
    rating: 5
  },
  {
    id: "test-3",
    name: "Vikram Sharma",
    role: "Operations Director",
    company: "BCABS Global",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    content: "Adithyan's problem-solving ability and client communication skills are top notch. He handled technical escalations with supreme confidence and high customer satisfaction.",
    rating: 5
  }
];

export const GITHUB_STATS = {
  username: "adithyan-pavithran",
  totalContributions: 1428,
  totalRepos: 35,
  streakDays: 48,
  totalCommits: 2840,
  topLanguages: [
    { name: "Dart / Flutter", percentage: 38, color: "#45D1FD" },
    { name: "TypeScript / JS", percentage: 28, color: "#3178C6" },
    { name: "Python", percentage: 18, color: "#3572A5" },
    { name: "Shell / Dockerfile", percentage: 11, color: "#89E051" },
    { name: "HTML/CSS", percentage: 5, color: "#E34C26" }
  ]
};
