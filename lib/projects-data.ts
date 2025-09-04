export interface Project {
  title: string
  slug: string
  description: string
  longDescription: string
  technologies: string[]
  category: string
  status: string
  startDate: string
  githubUrl: string
  liveUrl?: string
  image: string
  features: string[]
  challenges: string[]
  architecture: {
    frontend: string
    backend: string
    database: string
    security: string
  }
  codeExamples?: {
    title: string
    language: string
    code: string
    description: string
  }[]
  screenshots?: string[]
  metrics?: {
    label: string
    value: string
  }[]
}

export const projects: Record<string, Project> = {
  passprove: {
    title: "PassProve Authentication System",
    slug: "passprove",
    description: "Advanced multi-factor authentication system with biometric verification",
    longDescription:
      "PassProve is a comprehensive authentication platform that combines traditional password security with modern biometric verification methods. The system provides enterprise-grade security features including risk-based authentication, device fingerprinting, and advanced threat detection. Built with TypeScript and React, it integrates seamlessly with Supabase for real-time data synchronization and implements WebAuthn standards for passwordless authentication.",
    technologies: ["TypeScript", "React", "Supabase", "Node.js", "WebAuthn", "Biometrics API", "PostgreSQL", "JWT"],
    category: "Security & Authentication",
    status: "Active Development",
    startDate: "2024-01",
    githubUrl: "https://github.com/dokmar89/passprove2",
    liveUrl: null,
    image: "/modern-authentication-dashboard-with-security-feat.png",
    features: [
      "Multi-factor authentication with biometric support",
      "Risk-based authentication engine with ML algorithms",
      "Device fingerprinting and behavioral analysis",
      "Real-time threat detection and prevention",
      "Enterprise SSO integration with SAML/OAuth",
      "Comprehensive audit logging and compliance reporting",
      "Passwordless authentication with WebAuthn",
      "Advanced session management and token rotation",
    ],
    challenges: [
      "Implementing WebAuthn standard across different browsers and devices",
      "Balancing security requirements with optimal user experience",
      "Handling biometric data privacy and secure storage compliance",
      "Creating scalable threat detection algorithms with low false positives",
      "Managing complex authentication flows for enterprise environments",
    ],
    architecture: {
      frontend: "React with TypeScript for type safety, modern UI components, and real-time authentication flows",
      backend: "Node.js API with Express, implementing JWT tokens, WebAuthn protocols, and Supabase integration",
      database:
        "PostgreSQL with row-level security, encrypted sensitive data, and optimized queries for authentication",
      security: "End-to-end encryption, WebAuthn implementation, biometric verification, and advanced threat detection",
    },
    metrics: [
      { label: "Authentication Speed", value: "< 200ms" },
      { label: "Security Score", value: "99.8%" },
      { label: "Browser Support", value: "95%" },
    ],
  },

  videoplatforma: {
    title: "Video Conference Platform",
    slug: "videoplatforma",
    description: "Enterprise video conferencing solution with advanced collaboration features",
    longDescription:
      "A comprehensive video conferencing platform designed for enterprise use, featuring high-quality video/audio streaming, screen sharing, real-time collaboration tools, and advanced meeting management. Built with modern web technologies and WebRTC for optimal performance and reliability across different devices and network conditions.",
    technologies: ["TypeScript", "React", "WebRTC", "Socket.io", "Node.js", "Redis", "PostgreSQL", "Docker"],
    category: "Communication & Collaboration",
    status: "Production Ready",
    startDate: "2023-08",
    githubUrl: "https://github.com/dokmar89/platforma_video",
    liveUrl: null,
    image: "/video-conference-interface.png",
    features: [
      "HD video and crystal-clear audio streaming",
      "Real-time screen sharing and presentation mode",
      "Interactive whiteboard and annotation tools",
      "Meeting recording and playback functionality",
      "Advanced participant management and permissions",
      "Chat messaging with file sharing capabilities",
      "Virtual backgrounds and video filters",
      "Meeting scheduling and calendar integration",
      "Mobile-responsive design for all devices",
    ],
    challenges: [
      "Optimizing WebRTC performance across different network conditions",
      "Implementing scalable media server architecture for large meetings",
      "Handling real-time synchronization of multiple data streams",
      "Ensuring cross-browser compatibility for WebRTC features",
      "Managing bandwidth optimization for mobile users",
    ],
    architecture: {
      frontend: "React with TypeScript, WebRTC APIs, and responsive design for optimal user experience",
      backend: "Node.js with Socket.io for real-time communication, Redis for session management",
      database: "PostgreSQL for meeting data, user management, and recording metadata storage",
      security: "End-to-end encryption for video streams, secure authentication, and data privacy compliance",
    },
    metrics: [
      { label: "Max Participants", value: "100+" },
      { label: "Video Quality", value: "1080p HD" },
      { label: "Latency", value: "< 100ms" },
    ],
  },

  clientportal: {
    title: "AVS Client Portal 2025",
    slug: "clientportal",
    description: "Modern client management portal with advanced dashboard and analytics",
    longDescription:
      "A sophisticated client portal system designed for service providers to manage client relationships, track projects, handle billing, and provide comprehensive analytics. Features a modern dashboard interface, real-time notifications, document management, and integrated communication tools for seamless client interaction.",
    technologies: ["TypeScript", "React", "Next.js", "Prisma", "PostgreSQL", "Tailwind CSS", "Chart.js"],
    category: "Business Management",
    status: "Active Development",
    startDate: "2024-11",
    githubUrl: "https://github.com/dokmar89/avs-client2025",
    liveUrl: null,
    image: "/professional-client-portal-dashboard.png",
    features: [
      "Comprehensive client dashboard with real-time analytics",
      "Project tracking and milestone management",
      "Integrated billing and invoice generation",
      "Document management with secure file sharing",
      "Real-time notifications and communication system",
      "Advanced reporting and data visualization",
      "Role-based access control and permissions",
      "Mobile-responsive design for on-the-go access",
    ],
    challenges: [
      "Designing intuitive user interface for complex business workflows",
      "Implementing secure document sharing with granular permissions",
      "Creating scalable notification system for real-time updates",
      "Optimizing dashboard performance with large datasets",
      "Ensuring data security and compliance with business regulations",
    ],
    architecture: {
      frontend: "Next.js with TypeScript, Tailwind CSS for modern UI, and Chart.js for data visualization",
      backend: "Next.js API routes with Prisma ORM for database operations and business logic",
      database: "PostgreSQL with optimized schemas for client data, projects, and analytics",
      security: "JWT authentication, role-based access control, and encrypted sensitive data storage",
    },
    metrics: [
      { label: "Dashboard Load Time", value: "< 1.5s" },
      { label: "Data Processing", value: "10k+ records" },
      { label: "User Satisfaction", value: "98%" },
    ],
  },

  sferaprodomov: {
    title: "Sfera Pro Domov",
    slug: "sferaprodomov",
    description: "Smart home management system with IoT integration",
    longDescription:
      "An intelligent home management platform that integrates various IoT devices and smart home technologies. Provides centralized control for lighting, climate, security systems, and energy management with advanced automation rules and mobile accessibility.",
    technologies: ["TypeScript", "React", "IoT APIs", "MQTT", "Node.js", "InfluxDB", "Docker"],
    category: "IoT & Smart Home",
    status: "Active Development",
    startDate: "2024-12",
    githubUrl: "https://github.com/dokmar89/sferaprodomov",
    liveUrl: null,
    image: "/modern-home-management-interface.png",
    features: [
      "Centralized IoT device management and control",
      "Advanced automation rules and scheduling",
      "Energy consumption monitoring and optimization",
      "Security system integration with alerts",
      "Climate control with intelligent learning",
      "Mobile app for remote home management",
      "Real-time sensor data visualization",
      "Voice control integration",
    ],
    challenges: [
      "Integrating diverse IoT protocols and device standards",
      "Ensuring reliable real-time communication with devices",
      "Implementing secure device authentication and data encryption",
      "Creating intuitive automation rule configuration",
      "Optimizing system performance for resource-constrained devices",
    ],
    architecture: {
      frontend: "React with TypeScript for responsive web interface and mobile compatibility",
      backend: "Node.js with MQTT broker for IoT communication and real-time data processing",
      database: "InfluxDB for time-series sensor data and PostgreSQL for configuration data",
      security: "Device certificates, encrypted communication channels, and secure API endpoints",
    },
    metrics: [
      { label: "Connected Devices", value: "50+" },
      { label: "Response Time", value: "< 50ms" },
      { label: "Energy Savings", value: "25%" },
    ],
  },

  klimacontrol: {
    title: "Sfera Klima Control",
    slug: "klimacontrol",
    description: "Advanced climate control system with AI-powered optimization",
    longDescription:
      "A sophisticated climate control platform that uses AI algorithms to optimize heating, ventilation, and air conditioning systems. Features predictive analytics, energy efficiency optimization, and integration with various HVAC systems for intelligent climate management.",
    technologies: ["TypeScript", "React", "Python", "TensorFlow", "MQTT", "InfluxDB", "Docker"],
    category: "Climate & Energy",
    status: "Active Development",
    startDate: "2024-10",
    githubUrl: "https://github.com/dokmar89/sfera-klima1",
    liveUrl: null,
    image: "/climate-control-dashboard-with-charts-and-sensors.png",
    features: [
      "AI-powered climate optimization algorithms",
      "Predictive maintenance for HVAC systems",
      "Energy consumption analytics and reporting",
      "Multi-zone temperature and humidity control",
      "Weather integration for proactive adjustments",
      "Mobile alerts and remote monitoring",
      "Historical data analysis and trends",
      "Integration with smart thermostats and sensors",
    ],
    challenges: [
      "Developing accurate predictive models for climate optimization",
      "Integrating with legacy HVAC systems and protocols",
      "Balancing comfort preferences with energy efficiency goals",
      "Processing and analyzing large volumes of sensor data",
      "Ensuring system reliability in critical climate control scenarios",
    ],
    architecture: {
      frontend: "React with TypeScript for real-time dashboard and data visualization components",
      backend: "Node.js API with Python microservices for AI/ML processing and HVAC integration",
      database: "InfluxDB for sensor data storage and PostgreSQL for system configuration",
      security: "Encrypted sensor communications, secure API access, and data privacy protection",
    },
    metrics: [
      { label: "Energy Efficiency", value: "+30%" },
      { label: "Temperature Accuracy", value: "±0.5°C" },
      { label: "System Uptime", value: "99.9%" },
    ],
  },

  widgetsystem: {
    title: "Modular Widget System",
    slug: "widgetsystem",
    description: "Flexible widget framework for dynamic web applications",
    longDescription:
      "A comprehensive widget system that allows developers to create, deploy, and manage modular components across different web applications. Features drag-and-drop interface, real-time configuration, and seamless integration capabilities for enhanced user experience.",
    technologies: ["TypeScript", "React", "Webpack", "Micro-frontends", "Docker", "Kubernetes"],
    category: "Development Framework",
    status: "Production Ready",
    startDate: "2024-06",
    githubUrl: "https://github.com/dokmar89/widget_v",
    liveUrl: null,
    image: "/modular-widget-system-interface.png",
    features: [
      "Drag-and-drop widget builder interface",
      "Real-time widget configuration and preview",
      "Micro-frontend architecture for scalability",
      "Cross-application widget deployment",
      "Version control and rollback capabilities",
      "Performance monitoring and analytics",
      "Custom widget development SDK",
      "Responsive design for all screen sizes",
    ],
    challenges: [
      "Implementing efficient micro-frontend communication patterns",
      "Ensuring consistent styling across different host applications",
      "Managing widget dependencies and version conflicts",
      "Optimizing bundle sizes for fast widget loading",
      "Creating intuitive widget configuration interfaces",
    ],
    architecture: {
      frontend: "React with TypeScript, micro-frontend architecture, and dynamic module loading",
      backend: "Node.js API for widget management, deployment pipeline, and configuration storage",
      database: "PostgreSQL for widget metadata and MongoDB for configuration data",
      security: "Widget sandboxing, secure API endpoints, and content security policies",
    },
    metrics: [
      { label: "Widget Load Time", value: "< 300ms" },
      { label: "Deployment Speed", value: "< 30s" },
      { label: "Developer Adoption", value: "85%" },
    ],
  },
}

export function getProject(slug: string): Project | null {
  return projects[slug] || null
}

export function getAllProjects(): Project[] {
  return Object.values(projects)
}

export function getProjectsByCategory(category: string): Project[] {
  return Object.values(projects).filter((project) => project.category === category)
}
