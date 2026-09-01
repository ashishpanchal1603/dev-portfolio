export interface Project {
  id: string;
  name: string;
  category?: string;
  role?: string;
  shortDescription: string;
  description: string;
  problemSolved?: string;
  myContribution?: string;
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
      items: ['React.js', 'Next.js', 'Redux Toolkit', 'React Query', 'Zustand'],
    },
    {
      category: "Languages",
      items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "SCSS"],
    },
    {
      category: "Styling",
      items: ["Tailwind CSS", "Material UI", "React Bootstrap", "Shadcn UI", "Framer Motion"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "Sequelize"],
    },
    {
      category: "API & Data",
      items: ["REST APIs", "GraphQL", "Axios", "Fetch"],
    },
    {
      category: "Tools & Workflow",
      items: ["Git", "GitHub", "GitHub Desktop", "Jira", "Agile Method"],
    },
  ],
  experience: [
    {
      company: "Yodep Solutions",
      position: "Software Engineer",
      duration: "Jan 2026 – Present",
      location: "Ahmedabad, India",
      responsibilities: [
        "Engineering enterprise HR SaaS modules including multi-tenant administration, employee self-service portals, and automated leave management systems.",
        "Implementing fine-grained Role-Based Access Control (RBAC) supporting multi-tier roles (HR, Tenant Admin, Employee) with permission-driven routing.",
        "Developing high-performance, modular UI components with Next.js, React, TypeScript, and Tailwind CSS for streamlined workforce workflows.",
        "Collaborating actively in Agile sprints via Jira, ensuring robust code quality, peer reviews, and scalable production feature releases.",
      ],
      technologies: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "RBAC", "Agile", "Jira"],
    },
    {
      company: "Nimblechapps",
      position: "Jr Software Engineer",
      duration: "Jan 2024 – Jan 2026",
      location: "Ahmedabad, India",
      responsibilities: [
        "Architected a reusable React & Tailwind component library, cutting frontend development turnaround time by 30%.",
        "Optimized client-side rendering performance using memoization, dynamic code splitting, and lazy loading strategies.",
        "Designed scalable, maintainable frontend structures, accelerating team onboarding and code maintainability.",
        "Integrated complex RESTful API endpoints with Axios, handling structured error boundaries and state synchronization.",
      ],
      technologies: ["React.js", "Tailwind CSS", "TypeScript", "REST APIs", "Axios", "Git"],
    },
    {
      company: "Yudiz Solutions Limited",
      position: "Jr Software Engineer",
      duration: "Jul 2022 – Jan 2024",
      location: "Ahmedabad, India",
      responsibilities: [
        "Revamped the UI/UX architecture for high-traffic Fantasy Sports platforms, delivering smooth, interactive user experiences.",
        "Spearheaded project migration to React 18 and React Query (TanStack Query), replacing legacy state bottlenecks with efficient server-state caching.",
        "Collaborated across cross-functional Agile sprint teams with designers, backend developers, and QA to ship production features.",
        "Implemented responsive, pixel-perfect interfaces using Redux Toolkit, SCSS, and modern ES6+ JavaScript standards.",
      ],
      technologies: ["React.js", "Redux Toolkit", "React Query", "SCSS", "JavaScript", "Agile"],
    },
  ],
  projects: [
    {
      id: "caretopia",
      name: "CareTopia",
      category: "Client Platform",
      shortDescription:
        "A high-impact healthcare marketplace connecting patients with verified providers in real-time, featuring dynamic bidding workflows, live WebRTC audio/video consultations, and Sendbird chat.",
      description:
        "CareTopia is an enterprise-grade healthcare marketplace designed to streamline on-demand home care, physical therapy, and specialized nursing services. The platform bridges the gap between clients and verified healthcare professionals through real-time request broadcasts, dynamic offer bidding, integrated Sendbird chat, and secure WebRTC video/voice consultations.",
      problemSolved:
        "Traditional care hiring suffers from high agency overheads, delayed scheduling, and fragmented communication channels. CareTopia eliminates friction with a two-sided negotiation portal that facilitates instant service requests, direct provider bidding, automated availability matching, and low-latency telehealth consultations.",
      myContribution:
        "Engineered the end-to-end client-provider negotiation engine, integrated Sendbird SDK for real-time messaging and video/voice calls, structured modular Next.js dashboard workflows, and achieved sub-second page loads via SSR and intelligent client-side hydration.",
      technologies: ["Next.js", "React.js", "TypeScript", "Sendbird SDK", "WebRTC", "Tailwind CSS"],
      keyFeatures: [
        "On-demand service request broadcasting for physio, nursing & home care",
        "Real-time competitive bidding and negotiation engine",
        "Sendbird SDK integration for low-latency live chat & calling",
        "WebRTC voice and video telehealth consultation flows",
        "Interactive client dashboard & provider verification portal",
        "Mobile-responsive Next.js architecture with SSR performance",
      ],
      liveUrl: "https://caretopia-demo.example.com",
      githubUrl: "https://github.com/ashishpanchal1609/caretopia",
      image: "caretopia",
      featured: true,
    },
    {
      id: "fantasy-sports",
      name: "Fantasy Sports Products",
      category: "Enterprise Product",
      shortDescription:
        "High-concurrency fantasy sports platforms powering live match leaderboards, interactive draft systems, and millisecond-level score updates for thousands of concurrent users.",
      description:
        "Fansportiz and CartolaPix are high-performance fantasy sports web ecosystems serving massive active user bases across competitive sporting leagues. The application handles complex real-time match state transitions, live player point calculations, dynamic leaderboards, and interactive draft room experiences.",
      problemSolved:
        "Managing high-velocity live score streams with legacy Redux architectures caused significant UI lag, re-render cascading, and memory overhead during peak match events. The system required a modern server-state architecture capable of caching, deduplicating, and rendering live data streams at 60 FPS.",
      myContribution:
        "Spearheaded the architectural migration from Redux to React Query (TanStack Query), reducing client memory overhead by 40% and eliminating redundant network roundtrips. Revamped the core product UI/UX with smooth Tailwind CSS transitions and integrated WebSocket streams for real-time leaderboard recalculations.",
      technologies: ["React.js", "React Query", "Redux Toolkit", "WebSockets", "TypeScript", "Tailwind CSS"],
      keyFeatures: [
        "Millisecond-level live score streaming & match statistics",
        "Optimized React Query caching & real-time server state syncing",
        "High-performance interactive draft board & team roster builder",
        "Real-time WebSocket event listeners for instant leaderboard updates",
        "Revamped UI/UX delivering 60 FPS smooth animations and transitions",
        "Scalable frontend architecture supporting high-traffic spikes",
      ],
      liveUrl: "https://fansportiz-demo.example.com",
      githubUrl: "https://github.com/ashishpanchal1609/fantasy-sports",
      image: "fantasysports",
      featured: false,
    },
    {
      id: "panchal-interior",
      name: "Panchal Interior & Furniture Solutions",
      category: "Personal Project",
      role: "Independent Developer",
      shortDescription:
        "A full-featured digital web platform built for my father's 15+ year carpentry and turnkey interior design business in Ahmedabad, featuring service showcases, modular estimates, SEO optimization, and WhatsApp lead flows.",
      description:
        "Built as a complete digital transformation for my father's 15+ year carpentry and custom furniture manufacturing business in Ahmedabad. The platform elevates traditional craftsmanship into a modern online presence, enabling clients to explore bespoke furniture, modular kitchens, luxury sofas, and turnkey interior services with factory-direct pricing.",
      problemSolved:
        "Traditional local carpentry and interior craft rely primarily on word-of-mouth with limited reach against large commercial brands. The business needed a high-performance web platform to establish digital trust, showcase past work, rank for local search queries in Ahmedabad, and provide frictionless quotation & site-visit scheduling for homeowners.",
      myContribution:
        "Independently designed and developed the entire web application using Next.js (App Router), React, TypeScript, and Tailwind CSS. Implemented rich local SEO schema (JSON-LD LocalBusiness & FurnitureStore), integrated instant WhatsApp lead generation with structured quotation inquiries, built interactive product & service catalogs, and optimized performance for 100% mobile responsiveness.",
      technologies: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Local SEO (JSON-LD)", "Vercel", "WhatsApp API"],
      keyFeatures: [
        "Custom furniture & sofa manufacturing showcase",
        "Modular kitchen & wardrobe service catalogs",
        "Instant WhatsApp quotation & lead generation flow",
        "Free site visit & digital estimate booking system",
        "Advanced Local SEO with JSON-LD structured schemas",
        "Mobile-first responsive UI with smooth animations",
        "Factory-direct pricing calculator & package offers",
        "Production deployment & edge caching on Vercel",
      ],
      liveUrl: "https://panchal-interior.vercel.app/",
      image: "panchal-interior",
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
