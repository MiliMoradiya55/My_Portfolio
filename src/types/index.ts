export interface PersonalData {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  summary: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
}

export interface Certificate {
  name: string;
  platform: string;
}

export interface Skills {
  programming: string[];
  aiMl: string[];
  dataAnalytics: string[];
  databases: string[];
  frameworks: string[];
  tools: string[];
}