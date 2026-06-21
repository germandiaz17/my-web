import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';
import { Project } from '../../shared/models';

interface BilingualProject {
  name: Record<string, string>;
  description: Record<string, string>;
  tech: string[];
  github?: string;
  url?: string;
}

const RAW_PROJECTS: BilingualProject[] = [
  {
    name: { es: 'Proyecto 1', en: 'Project 1' },
    description: {
      es: 'Una breve descripción de tu proyecto más importante. Explica qué problema resuelve y qué tecnologías destacan.',
      en: 'A brief description of your most important project. Explain what problem it solves and which technologies stand out.',
    },
    tech: ['Angular', 'Node.js', 'MongoDB'],
    github: '#',
  },
  {
    name: { es: 'Proyecto 2', en: 'Project 2' },
    description: {
      es: 'Descripción de otro proyecto relevante. Muestra tu versatilidad como desarrollador fullstack.',
      en: 'Description of another relevant project. Show your versatility as a fullstack developer.',
    },
    tech: ['React', 'Python', 'PostgreSQL'],
    github: '#',
  },
  {
    name: { es: 'Proyecto 3', en: 'Project 3' },
    description: {
      es: 'Un proyecto adicional para demostrar tu rango de habilidades. Puede ser un proyecto personal o freelance.',
      en: 'An additional project to demonstrate your range of skills. Can be a personal or freelance project.',
    },
    tech: ['TypeScript', 'Docker', 'Node.js'],
    github: '#',
  },
  {
    name: { es: 'Proyecto 4', en: 'Project 4' },
    description: {
      es: 'Espacio para un cuarto proyecto. Borra o añade tantos como necesites.',
      en: 'Space for a fourth project. Delete or add as many as you need.',
    },
    tech: ['Java', 'Spring Boot', 'PostgreSQL'],
    github: '#',
  },
];

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class ProjectsComponent {
  protected ls = inject(LanguageService);

  protected projects = computed<Project[]>(() =>
    RAW_PROJECTS.map(p => ({
      ...p,
      name: p.name[this.ls.lang()],
      description: p.description[this.ls.lang()],
    }))
  );
}
