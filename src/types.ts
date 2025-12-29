export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string; // URL for the thumbnail/cover
  description: string;
  techStack: string[];
  link?: string;
  role: string;
  detailImages?: string[]; // Optional additional images for detail view
}