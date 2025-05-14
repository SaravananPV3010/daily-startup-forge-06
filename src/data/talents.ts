
export interface TalentType {
  id: number;
  name: string;
  title: string;
  skills: string[];
  experience: string;
  avatarUrl: string;
  available: boolean;
}

export interface JobType {
  id: number;
  company: string;
  title: string;
  description: string;
  requirements: string[];
  location: string;
  remote: boolean;
  logoUrl: string;
}

export const talents: TalentType[] = [
  {
    id: 1,
    name: "Alex Chen",
    title: "Senior Full Stack Developer",
    skills: ["React", "Node.js", "MongoDB", "AWS"],
    experience: "8 years",
    avatarUrl: "/placeholder.svg",
    available: true
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "UI/UX Designer",
    skills: ["Figma", "User Research", "Wireframing", "Design Systems"],
    experience: "5 years",
    avatarUrl: "/placeholder.svg",
    available: true
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    title: "Growth Marketing Specialist",
    skills: ["SEO", "Content Strategy", "Social Media", "Analytics"],
    experience: "6 years",
    avatarUrl: "/placeholder.svg",
    available: false
  },
  {
    id: 4,
    name: "Priya Patel",
    title: "Product Manager",
    skills: ["Agile", "Roadmapping", "User Stories", "Analytics"],
    experience: "7 years",
    avatarUrl: "/placeholder.svg",
    available: true
  }
];

export const jobs: JobType[] = [
  {
    id: 1,
    company: "TechNova",
    title: "Frontend Engineer",
    description: "Join our team to build cutting-edge web applications with modern technologies.",
    requirements: ["3+ years React experience", "Strong TypeScript skills", "UI/UX sensibility"],
    location: "San Francisco, CA",
    remote: true,
    logoUrl: "/placeholder.svg"
  },
  {
    id: 2,
    company: "GreenGrowth",
    title: "Sustainability Consultant",
    description: "Help startups implement eco-friendly practices and develop sustainable business models.",
    requirements: ["Background in environmental science", "Business consulting experience", "Strong communication skills"],
    location: "Remote",
    remote: true,
    logoUrl: "/placeholder.svg"
  },
  {
    id: 3,
    company: "FinEdge",
    title: "Blockchain Developer",
    description: "Develop financial applications using blockchain technology for our growing startup.",
    requirements: ["Smart contract development", "Solidity", "Web3.js", "Security best practices"],
    location: "New York, NY",
    remote: false,
    logoUrl: "/placeholder.svg"
  }
];
