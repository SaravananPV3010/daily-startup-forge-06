
export interface IdeaType {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  marketSize: string;
  tags: string[];
  date: string;
}

export const featuredIdea: IdeaType = {
  id: "idea-1",
  title: "AI-Powered Content Recommendation Engine",
  description: "A platform that uses artificial intelligence to analyze user preferences and deliver highly personalized content recommendations across multiple media types.",
  problem: "Content overload is overwhelming users, making it difficult to discover relevant material that matches their interests and preferences.",
  solution: "Our AI algorithm analyzes consumption patterns, explicit preferences, and implicit behaviors to curate a personalized content feed that evolves with the user.",
  marketSize: "The global content recommendation engine market is projected to reach $14.8 billion by 2026, with a CAGR of 28.7% from 2021.",
  tags: ["AI", "Machine Learning", "Content", "Personalization"],
  date: "May 14, 2025"
};
