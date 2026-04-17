const withBase = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export const PROJECTS = [
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