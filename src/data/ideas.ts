
export interface IdeaType {
  id: number;
  date: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  marketSize: string;
  tags: string[];
}

export const ideas: IdeaType[] = [
  {
    id: 1,
    date: "May 14, 2025",
    title: "VirtualMentor",
    description: "AI-powered mentorship platform for early-stage founders",
    problem: "First-time founders struggle with access to quality mentorship and guidance during crucial early stages.",
    solution: "An AI platform that analyzes startup metrics and provides personalized mentorship, connecting founders with relevant advisors when needed.",
    marketSize: "~$5B global startup mentorship market",
    tags: ["AI", "SaaS", "Entrepreneurship"]
  },
  {
    id: 2,
    date: "May 13, 2025",
    title: "EcoPackage",
    description: "Biodegradable packaging solution for e-commerce",
    problem: "E-commerce shipping creates massive packaging waste that harms our environment.",
    solution: "Plant-based packaging materials that decompose in 30 days while maintaining durability during shipping.",
    marketSize: "$8.5B sustainable packaging market",
    tags: ["Sustainability", "E-commerce", "Manufacturing"]
  },
  {
    id: 3,
    date: "May 12, 2025",
    title: "HealthSync",
    description: "Unified health data platform for personalized medicine",
    problem: "Healthcare data is fragmented across providers, limiting treatment effectiveness.",
    solution: "Secure platform that aggregates patient data from all providers for AI-powered treatment recommendations.",
    marketSize: "$15B healthcare analytics market",
    tags: ["Healthcare", "AI", "Data"]
  }
];

export const featuredIdea = ideas[0];
