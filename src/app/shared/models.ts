export interface Project {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  url?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tech?: string[];
}

export interface Course {
  name: string;
  institution: string;
  year: string;
}
