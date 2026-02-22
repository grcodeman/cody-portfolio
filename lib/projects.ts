export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  categories: string[];
  image: string;
  links: ProjectLink[];
  featured: boolean;
  award?: string;
};

export const CATEGORIES = [
  "All",
  "AI/ML",
  "Web Dev",
  "Hackathon",
  "Mobile",
  "IT Tools",
  "AR/VR",
] as const;

export type Category = (typeof CATEGORIES)[number];

export const projects: Project[] = [
  // --- Featured Projects ---
  {
    slug: "nasa-bioexplorer",
    title: "NASA BioExplorer",
    description:
      "RAG chat assistant for space biology research papers, built for NASA Space Apps challenge.",
    tech: ["RAG", "Python", "AI"],
    categories: ["AI/ML"],
    image: "/projects/nasa-bioexplorer.svg",
    links: [{ label: "GitHub", url: "https://github.com/grcodeman/nasa-space-bio" }],
    featured: true,
  },
  {
    slug: "mwc3-python",
    title: "MWC3 2024 Python",
    description:
      "Competitive programming challenge — won 1st place at the MWC3 coding competition.",
    tech: ["Python"],
    categories: ["Hackathon"],
    image: "/projects/mwc3-python.svg",
    links: [{ label: "GitHub", url: "https://github.com/grcodeman/mwc3-python" }],
    featured: true,
    award: "1st Place - MWC3 2024",
  },
  {
    slug: "atom-medic",
    title: "ATOM Medic",
    description:
      "Heart-anatomy lab prototype using augmented/mixed reality with Unity, Flutter, and HoloLens.",
    tech: ["Unity", "Flutter", "Firebase", "Hololens"],
    categories: ["AR/VR"],
    image: "/projects/atom.png",
    links: [{ label: "Presentation", url: "https://drive.google.com/file/d/1XQR8a8fOhKnBW354L3MIUmQ4YsgYtl55/view" }],
    featured: true,
  },
  {
    slug: "cultivate269",
    title: "Cultivate269 Website",
    description: "Client website build for a local organization using Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind CSS"],
    categories: ["Web Dev"],
    image: "/projects/cultivate269.svg",
    links: [{ label: "Live Site", url: "https://cultivate269.com/" }],
    featured: true,
  },

  // --- Non-Featured Projects ---
  {
    slug: "ogiek-messenger",
    title: "Ogiek Messenger",
    description:
      "SMS system for the Ogiek community with preset menus and an LLM-powered RAG engine for custom queries.",
    tech: ["Python", "Ollama", "Langchain", "SMS"],
    categories: ["AI/ML"],
    image: "/projects/ogiek.png",
    links: [{ label: "GitHub", url: "https://github.com/grcodeman/sautiyaogiek" }],
    featured: false,
  },
  {
    slug: "minecraft-darts",
    title: "Minecraft Darts",
    description:
      "Hackathon-winning Minecraft mod adding a darts mini-game to the game.",
    tech: ["Java", "Minecraft"],
    categories: ["Hackathon"],
    image: "/projects/darts.png",
    links: [{ label: "GitHub", url: "https://github.com/grcodeman/sprintdev-partygames" }],
    featured: false,
    award: "1st Place - sprint.dev 2025",
  },
  {
    slug: "dsc-website",
    title: "DSC Website",
    description: "Website for Western Michigan University's Data Science Club.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    categories: ["Web Dev"],
    image: "/projects/dsc.png",
    links: [{ label: "GitHub", url: "https://github.com/grcodeman/dsc-website-fork" }],
    featured: false,
  },
  {
    slug: "shelf-inventory",
    title: "Shelf Inventory",
    description: "Mobile app for restaurant inventory management built with Flutter and Firebase.",
    tech: ["Flutter", "Firebase", "Dart"],
    categories: ["Mobile"],
    image: "/projects/shelf.png",
    links: [{ label: "Live Site", url: "https://www.shelfapp.io/" }],
    featured: false,
  },
  {
    slug: "w1-website",
    title: "W1 Website",
    description: "Website build for a student organization using Next.js and Tailwind CSS.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    categories: ["Web Dev"],
    image: "/projects/w1.png",
    links: [{ label: "GitHub", url: "https://github.com/grcodeman/w1-website-fork" }],
    featured: false,
  },
  {
    slug: "ecoclean",
    title: "EcoClean",
    description:
      "Sustainability challenge app built at the Bronco Sustainability Hackathon.",
    tech: ["Lovable", "React"],
    categories: ["Web Dev", "Hackathon"],
    image: "/projects/ecoclean.svg",
    links: [{ label: "Live Site", url: "https://clean-cloud-karma.lovable.app/" }],
    featured: false,
  },
  {
    slug: "cae-bucks",
    title: "CAE Bucks Dashboard",
    description: "Internal leaderboard for IT team ticket rewards at the CAE Center.",
    tech: ["HTML", "CSS", "JavaScript"],
    categories: ["IT Tools", "Web Dev"],
    image: "/projects/cae-bucks.svg",
    links: [],
    featured: false,
  },
  {
    slug: "flightbrief-ai",
    title: "FlightBrief AI",
    description:
      "AI-powered tool to generate flight log reports from plane numbers, built at the AI Localhost Hackathon.",
    tech: ["AI", "Python"],
    categories: ["AI/ML", "Hackathon"],
    image: "/projects/flightbrief-ai.svg",
    links: [{ label: "GitHub", url: "https://github.com/grcodeman/localhost-flightbriefai" }],
    featured: false,
    award: "Top 5 - Localhost 2025",
  },
  {
    slug: "hackwmu-2024",
    title: "HackWMU 2024",
    description:
      "Water research tracking app — won 1st place at HackWMU 2024.",
    tech: ["Flutter", "Dart"],
    categories: ["Hackathon"],
    image: "/projects/hackwmu-2024.svg",
    links: [],
    featured: false,
    award: "1st Place - HackWMU 2024",
  },
  {
    slug: "nfl-over-under",
    title: "NFL Over/Under ML Model",
    description: "Machine learning model for predicting NFL over/under outcomes.",
    tech: ["Python", "ML"],
    categories: ["AI/ML"],
    image: "/projects/nfl-ml-model.svg",
    links: [{ label: "GitHub", url: "https://github.com/grcodeman/cs5821-nfl" }],
    featured: false,
  },
  {
    slug: "inventory-llm",
    title: "Inventory LLM Chatbot",
    description: "LLM-powered chatbot assistant for managing inventory queries.",
    tech: ["Python", "LLM"],
    categories: ["AI/ML"],
    image: "/projects/inventory-llm.svg",
    links: [{ label: "GitHub", url: "https://github.com/grcodeman/inventory-llm" }],
    featured: false,
  },
  {
    slug: "stilltasty-scraper",
    title: "StillTasty Scraper",
    description: "Web scraper for collecting food expiration data from StillTasty.",
    tech: ["Python"],
    categories: ["IT Tools"],
    image: "/projects/stilltasty-scraper.svg",
    links: [{ label: "GitHub", url: "https://github.com/grcodeman/stilltasty-scraping" }],
    featured: false,
  },
];
