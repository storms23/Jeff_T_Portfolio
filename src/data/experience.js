const withBase = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export const EXPERIENCE = [
  {
    company: "Eden Ventures",
    role: "Software Engineer",
    type: "Full-Time",
    startDate: "May 2026",
    endDate: "Present",
    location: "Philippines",
    logo: withBase("/images/EdenVentures.png"),
    responsibilities: [
      "Develop and maintain full-stack web applications as part of the engineering team.",
      "Build responsive interfaces and integrate APIs for production-ready features.",
      "Collaborate on software delivery, debugging, and iterative product improvements.",
    ],
    tags: ["Full-Stack", "React", "TypeScript", "Web Development"],
  },
  {
    company: "AWS User Group e:Novators Philippines",
    role: "Operations Committee Member",
    type: "Volunteer",
    startDate: "May 2026",
    endDate: "Present",
    location: "Philippines",
    logo: withBase("/images/AWS ENOVATOR LOGO.png"),
    responsibilities: [
      "Support community operations, event coordination, and member engagement initiatives.",
      "Help organize AWS-focused meetups, workshops, and technical community activities.",
      "Contribute to planning and execution behind the user group's programs and outreach.",
    ],
    tags: ["AWS", "Community", "Operations", "Events"],
  },
  {
    company: "Freelance",
    role: "Web Developer",
    type: "Contract",
    startDate: "2024",
    endDate: "Present",
    location: "Remote",
    logo: "",
    responsibilities: [
      "Design and develop client websites and web applications from concept to deployment.",
      "Deliver responsive UIs with React, Next.js, and Tailwind CSS.",
      "Handle landing pages, portfolio sites, and small business web solutions.",
    ],
    tags: ["React", "Next.js", "Tailwind CSS", "Vercel", "Freelance"],
  },
];
