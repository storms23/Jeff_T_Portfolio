const withBase = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export const PROJECTS = [
  {
    title: "Nike Sneaker",
    subtitle: "Product Landing Page",
    description:
      "A high-fidelity Nike Air More Uptempo landing page with a dark, premium layout. Features interactive size selection, product storytelling sections, and a scroll-driven showcase built for a polished e-commerce experience.",
    image: withBase("/images/Projects/Nike.PNG"),
    liveUrl: "https://nike-two-phi.vercel.app/",
    githubUrl: "#",
    tags: ["React", "Tailwind CSS", "JavaScript", "Vercel"],
    gradient: "from-zinc-800 to-black",
  },
  {
    title: "firstur",
    subtitle: "Fragrance E-Commerce Landing Page",
    description:
      "A minimalist fragrance storefront landing page with elegant serif typography, hero product showcases, and shop-focused sections for perfumes, brands, and curated guides.",
    image: withBase("/images/Projects/Firstur.PNG"),
    liveUrl: "#",
    githubUrl: "#",
    tags: ["React", "Tailwind CSS", "JavaScript", "UI/UX"],
    gradient: "from-zinc-800 to-zinc-950",
  },
  {
    title: "ValsKonnect",
    subtitle: "Web-Based Citizen Services Platform",
    description:
      "Developed a centralized platform that connects citizens with local government services, including announcements, service requests, and community updates. Built a responsive UI and integrated REST APIs with dynamic components.",
    image: withBase("/images/Projects/Valskonnect.PNG"),
    liveUrl: "https://val-skonnect.vercel.app/",
    githubUrl: "#",
    tags: ["React", "Tailwind CSS", "JavaScript", "REST API"],
    gradient: "from-zinc-800 to-black",
  },
  {
    title: "Serviam Church Choir",
    subtitle: "Church Choir Website",
    description:
      "A responsive website for Serviam Church Choir showcasing mission, vision, and worship performances. Includes a hero section, performance gallery with video links, and contact pages for church event inquiries.",
    image: withBase("/images/Projects/Serviam.PNG"),
    liveUrl: "https://serviam-church.vercel.app/",
    githubUrl: "#",
    tags: ["React", "Tailwind CSS", "JavaScript", "Vercel"],
    gradient: "from-zinc-800 to-zinc-950",
  },
  {
    title: "BoardMetrics PH",
    subtitle: "Educational Analytics Platform",
    description:
      "A web-based educational analytics platform that converts PRC licensure examination results into a centralized, searchable database. Users can analyze school performance, rankings, historical trends, board exam statistics, and comparative insights.",
    image: withBase("/images/Projects/Boardmetrics.PNG"),
    liveUrl: "https://board-metrics-ph.vercel.app/",
    githubUrl: "#",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Python"],
    gradient: "from-zinc-800 to-black",
  },
  {
    title: "ARTA Feedback Survey System",
    subtitle: "Public Service Feedback Web App",
    description:
      "Developed a feedback system aligned with ARTA standards. Designed a MySQL database to store survey responses, implemented validated forms, and built CRUD functionality for accurate data collection and reporting.",
    image: withBase("/images/Projects/ARTA.PNG"),
    liveUrl: "#",
    githubUrl: "#",
    tags: ["React", "Tailwind CSS", "JavaScript", "MySQL", "PHP"],
    gradient: "from-zinc-800 to-zinc-950",
  },
  {
    title: "Gym Management System",
    subtitle: "Desktop/Web Member Management",
    description:
      "Built a management system for member registration, attendance tracking, and subscription management. Implemented CRUD operations, data validation, and membership/payment tracking to streamline daily operations.",
    image: withBase("/images/Projects/GymManagement.png"),
    liveUrl: "#",
    githubUrl: "#",
    tags: ["C#", ".NET", "MySQL", "CRUD"],
    gradient: "from-zinc-800 to-zinc-950",
  },
  {
    title: "The H4LLS",
    subtitle: "Digital Game (Itch.io)",
    description: "A digital game project published on itch.io.",
    image: withBase("/images/Projects/Theh4lls.PNG"),
    liveUrl: "https://4rcana.itch.io/the-halls",
    githubUrl: "#",
    tags: ["Digital Game", "Itch.io"],
    gradient: "from-zinc-800 to-zinc-950",
  },
];
