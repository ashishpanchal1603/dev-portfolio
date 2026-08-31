export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  problemSolved: string;
  myContribution: string;
  technologies: string[];
  keyFeatures: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  featured?: boolean;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
  highlights?: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Service {
  title: string;
  description: string;
  iconName: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  location: string;
  linkedinUrl: string;
  githubUrl: string;
  summary: string;
  education: {
    degree: string;
    institution: string;
    duration: string;
    grade: string;
    location: string;
  };
  skills: SkillCategory[];
  experience: Experience[];
  projects: Project[];
  services: Service[];
}

export const portfolioData: PortfolioData = {
  name: "Ashish Panchal",
  title: "Frontend / React / Next.js Developer",
  subtitle: "Building fast, scalable & beautiful web experiences.",
  email: "ashishpanchal1609@gmail.com",
  phone: "+91 9664956491",
  location: "Ahmedabad, India",
  linkedinUrl: "https://linkedin.com/in/ashish-panchal-dev",
  githubUrl: "https://github.com/ashishpanchal1609",
  summary:
    "Frontend Developer with 4+ years of experience building scalable, high-performance web applications using React.js, Next.js, TypeScript, and Tailwind CSS. Strong experience in SSR, API integration, performance optimization, and modern UI architecture. Proven ability to work in Agile teams and deliver production-ready features.",
  education: {
    degree: "B.E. Information Technology",
    institution: "Government Engineering college Modasa",
    duration: "2018/08 – 2022/05",
    grade: "CGPA - 8.09",
    location: "Modasa, Gujarat, India",
  },
  skills: [
    {
      category: "Frontend",
      items: ["React.js", "Next.js", "Redux Toolkit", "React Query"],
    },
    {
      category: "Languages",
      items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SCSS"],
    },
    {
      category: "Styling",
      items: ["Tailwind CSS", "Material UI", "React Bootstrap"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "Sequelize"],
    },
    {
      category: "API & Data",
      items: ["REST APIs", "Axios", "Fetch"],
    },
    {
      category: "Tools & Workflow",
      items: ["Git", "GitHub", "Jira"],
    },
  ],
  experience: [
    {
      company: "Yodep Solutions",
      position: "Software Engineer",
      duration: "2026/01 – Present",
      location: "Ahmedabad, India",
      responsibilities: [
        "Working on a product-based HR ecosystem focused on employee management and workforce workflows.",
        "Contributing to modules such as employee portals, leave management, pay-condition leave, role-based permissions, and multi-tenant administration.",
        "Supporting multiple user roles including HR and Tenant Admin, with permission-driven access across different modules.",
        "Working in an Agile environment with Jira, collaborating with cross-functional teams to deliver scalable and production-ready features.",
      ],
      technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Agile", "Jira"],
    },
    {
      company: "Nimblechapps",
      position: "Jr Software Engineer",
      duration: "2024/01 – 2025/09",
      location: "Ahmedabad, India",
      responsibilities: [
        "Developed reusable React & Tailwind components, reducing UI development time by 30%.",
        "Optimized rendering performance using memoization, lazy loading, and code splitting.",
        "Designed scalable frontend architecture improving maintainability and onboarding speed.",
        "Worked with backend teams to integrate REST APIs using Axios.",
      ],
      technologies: ["React.js", "Tailwind CSS", "TypeScript", "REST APIs", "Axios", "Git"],
    },
    {
      company: "Yudiz Solutions Limited",
      position: "JR Software Engineer",
      duration: "2022/07 – 2024/01",
      location: "Ahmedabad, India",
      responsibilities: [
        "Revamped the Fantasy Sports product UI, enhancing user experience and engagement.",
        "Migrated projects to React v18 and React Query, improving responsiveness and maintainability.",
        "Delivered features in Agile sprints, collaborating with designers, backend engineers, and QA teams.",
      ],
      technologies: ["React.js", "Redux Toolkit", "React Query", "SCSS", "JavaScript", "Agile"],
    },
  ],
  projects: [
    {
      id: "caretopia",
      name: "CareTopia",
      shortDescription: "A multi-sided healthcare platform for home care, nursing, and physio services.",
      description: "CareTopia is a premium healthcare web platform where clients can post service requests for physical therapy, nursing, and home care, and connect directly with verified healthcare providers in real-time. It features a bidding/offer management flow, in-app chat, and video/voice calls.",
      problemSolved: "Traditional care provider hiring is slow and lacks direct, immediate communication. CareTopia solves this by providing a two-sided platform connecting clients and care providers with immediate bidding, real-time negotiation, and communication tools.",
      myContribution: "I built the entire client-provider negotiation system, integrated the Sendbird SDK for real-time messaging, voice, and video calls, and optimized the page loading speed using Next.js Server Components and selective client hydration.",
      technologies: ["Next.js", "React.js", "Sendbird Calls/Chat", "Tailwind CSS", "TypeScript"],
      keyFeatures: [
        "Post service requests for physio, nursing, and home care",
        "Bidding and offers management system between clients and providers",
        "Sendbird chat and voice/video calling integration",
        "Fully responsive dashboard and request panel",
      ],
      liveUrl: "https://caretopia-demo.example.com",
      githubUrl: "https://github.com/ashishpanchal1609/caretopia",
      image: "caretopia",
      featured: true,
    },
    {
      id: "fantasy-sports",
      name: "Fantasy Sports Products",
      shortDescription: "Real-time fantasy sports web products supporting large active user bases.",
      description: "Fansportiz and CartolaPix are premium fantasy sports products that enable users to create virtual teams, track live match updates, and compete in leagues. The application processes complex state transitions and real-time scores for thousands of concurrent players.",
      problemSolved: "Redux-based state management was causing performance bottlenecks and lag during peak traffic due to complex, nested state updates. Migrating to React Query optimized fetching, caching, rendering cycles, and reduced client state overhead.",
      myContribution: "I led the migration from Redux to React Query, which streamlined data caching and improved responsiveness. I revamped the product UI/UX to deliver a modern, intuitive layout, and integrated web sockets for real-time match details and leaderboard recalculation.",
      technologies: ["React.js", "Redux", "React Query", "WebSockets", "Tailwind CSS", "JavaScript"],
      keyFeatures: [
        "Real-time live match statistics and score updates",
        "Optimized client-side query caching and data syncing",
        "Clean, interactive draft boards and league tables",
        "Highly engaging UI revamp for fantasy drafts",
      ],
      liveUrl: "https://fansportiz-demo.example.com",
      githubUrl: "https://github.com/ashishpanchal1609/fantasy-sports",
      image: "fantasysports",
      featured: false,
    },
  ],
  services: [
    {
      title: "Frontend Development",
      description: "Building modern, component-driven React.js and Next.js applications focusing on code structure, reusability, and clean architectures.",
      iconName: "Code2",
    },
    {
      title: "UI Development",
      description: "Designing responsive, accessible, and polished user interfaces using Tailwind CSS with fluid, satisfying interactive transitions.",
      iconName: "Layers",
    },
    {
      title: "Performance Optimization",
      description: "Improving page speeds and rendering efficiency using code splitting, memoization, lazy loading, and intelligent caching.",
      iconName: "Gauge",
    },
    {
      title: "SEO & Next.js",
      description: "Implementing Server-Side Rendering (SSR), Server Components, search-engine-friendly metadata architectures, and custom sitemaps.",
      iconName: "Search",
    },
    {
      title: "API & SDK Integration",
      description: "Integrating RESTful APIs, Axios clients, and third-party SDKs (such as Sendbird Calls and Chat) for real-time app capabilities.",
      iconName: "Network",
    },
  ],
};
