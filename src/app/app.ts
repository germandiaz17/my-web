import { Component } from '@angular/core';

interface Project {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  url?: string;
}

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  tech?: string[];
}

interface Course {
  name: string;
  institution: string;
  year: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly name = '[Gercode]';
  readonly role = 'Fullstack Developer';
  readonly tagline = 'Construyendo soluciones digitales, un byte a la vez.';
  readonly email = 'germanrodrigo48@gmail.com';
  readonly github = 'https://github.com/germandiaz17';
  readonly linkedin = 'https://www.linkedin.com/in/german-rodrigo-diaz-olarte-08b5631a8/';

  readonly techStack = [
    { name: 'Angular', category: 'frontend' },
    { name: 'React', category: 'frontend' },
    { name: 'TypeScript', category: 'language' },
    { name: 'JavaScript', category: 'language' },
    { name: 'Node.js', category: 'backend' },
    { name: 'Python', category: 'language' },
    { name: 'Java', category: 'language' },
    { name: 'PostgreSQL', category: 'database' },
    { name: 'MongoDB', category: 'database' },
    { name: 'Docker', category: 'devops' },
    { name: 'Git', category: 'tools' },
    { name: 'CSS / SCSS', category: 'frontend' },
    { name: 'HTML', category: 'frontend' },
    { name: 'Linux', category: 'tools' },
  ];

  readonly projects: Project[] = [
    {
      name: 'Proyecto 1',
      description:
        'Una breve descripción de tu proyecto más importante. Explica qué problema resuelve y qué tecnologías destacan.',
      tech: ['Angular', 'Node.js', 'MongoDB'],
      github: '#',
    },
    {
      name: 'Proyecto 2',
      description:
        'Descripción de otro proyecto relevante. Muestra tu versatilidad como desarrollador fullstack.',
      tech: ['React', 'Python', 'PostgreSQL'],
      github: '#',
    },
    {
      name: 'Proyecto 3',
      description:
        'Un proyecto adicional para demostrar tu rango de habilidades. Puede ser un proyecto personal o freelance.',
      tech: ['TypeScript', 'Docker', 'Node.js'],
      github: '#',
    },
    {
      name: 'Proyecto 4',
      description: 'Espacio para un cuarto proyecto. Borra o añade tantos como necesites.',
      tech: ['Java', 'Spring Boot', 'PostgreSQL'],
      github: '#',
    },
  ];

  readonly experiences: Experience[] = [
    {
      company: 'Empresa Actual',
      role: 'Fullstack Developer',
      period: '2024 - Presente',
      description:
        'Desarrollo y mantenimiento de aplicaciones web. Implementación de nuevas funcionalidades y optimización de rendimiento.',
      tech: ['Angular', 'Node.js', 'PostgreSQL'],
    },
    {
      company: 'Empresa Anterior',
      role: 'Desarrollador Web',
      period: '2022 - 2024',
      description:
        'Participación en el desarrollo de plataformas internas. Colaboración en migraciones y refactorización de código legacy.',
      tech: ['React', 'Python', 'MongoDB'],
    },
    {
      company: 'Primera Experiencia',
      role: 'Trainee / Junior Developer',
      period: '2021 - 2022',
      description:
        'Inicio en el mundo del desarrollo. Aprendizaje activo y contribución en proyectos pequeños bajo mentoría.',
      tech: ['JavaScript', 'Node.js', 'MySQL'],
    },
  ];

  readonly currentYear = new Date().getFullYear();

  readonly courses: Course[] = [
    {
      name: 'Curso Avanzado de Angular',
      institution: 'Plataforma de Cursos Online',
      year: '2024',
    },
    {
      name: 'Especialización en Backend con Node.js',
      institution: 'Bootcamp / Academia',
      year: '2023',
    },
    {
      name: 'Docker y Kubernetes: De cero a deploy',
      institution: 'Plataforma de Cursos Online',
      year: '2023',
    },
    {
      name: 'Fundamentos de Bases de Datos Relacionales',
      institution: 'Universidad / Plataforma',
      year: '2022',
    },
  ];
}
