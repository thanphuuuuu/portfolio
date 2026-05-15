export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  about: string;
  email: string;
  github: string;
  linkedin: string;
  experience: Experience[];
  projects: Project[];
  skills: string[];
}
