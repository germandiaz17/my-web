import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';
import { Course } from '../../shared/models';

interface BilingualCourse {
  name: Record<string, string>;
  institution: string;
  year: string;
}

const RAW_COURSES: BilingualCourse[] = [
  {
    name: { es: 'Pregrado en Ingenieria de Sistemas', en: 'Systems Engineering Degree' },
    institution: 'Universidad Central / Uniminuto',
    year: '2026',
  },
  {
    name: { es: 'Desarrollo Web FullStack', en: 'FullStack Web Development' },
    institution: 'Bootcamp / Academlo',
    year: '2023',
  },
  {
    name: { es: 'Análisis y desarrollo de software', en: 'Software Analysis and Development' },
    institution: 'SENA',
    year: '2022',
  },
  {
    name: {
      es: 'Curso de Angular 17: Creación de Aplicaciones Web',
      en: 'Angular 17: Web Application Development',
    },
    institution: 'Platzi',
    year: '2024',
  },
  {
    name: {
      es: 'Curso de Maquetación con Angular CDK y Tailwind CSS',
      en: 'Layout with Angular CDK and Tailwind CSS',
    },
    institution: 'Platzi',
    year: '2024',
  },
  {
    name: { es: 'Curso de Python Orientado a Objetos', en: 'Object-Oriented Python' },
    institution: 'Platzi',
    year: '2025',
  },
  {
    name: {
      es: 'Curso de Python Avanzado para Arquitectura de Proyectos y PyPI',
      en: 'Advanced Python: Project Architecture and PyPI',
    },
    institution: 'Platzi',
    year: '2026',
  },
  {
    name: {
      es: 'Curso de Python Intermedio para Entornos virtuales y PEP8',
      en: 'Intermediate Python: Virtual Environments and PEP8',
    },
    institution: 'Platzi',
    year: '2026',
  },
  {
    name: { es: 'Curso de Complejidad Algorítmica con Python', en: 'Algorithmic Complexity with Python' },
    institution: 'Platzi',
    year: '2026',
  },
  {
    name: {
      es: 'Curso de Python: Comprehensions, Funciones y Manejo de Errores',
      en: 'Python: Comprehensions, Functions and Error Handling',
    },
    institution: 'Platzi',
    year: '2026',
  },
  {
    name: { es: 'Curso de Python: PIP y Entornos Virtuales', en: 'Python: PIP and Virtual Environments' },
    institution: 'Platzi',
    year: '2026',
  },
  {
    name: { es: 'Curso de Estadística Computacional con Python', en: 'Computational Statistics with Python' },
    institution: 'Platzi',
    year: '2026',
  },
  {
    name: { es: 'Curso de Rust básico', en: 'Basic Rust Course' },
    institution: 'Platzi',
    year: '2026',
  },
];

@Component({
  selector: 'app-courses',
  standalone: true,
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class CoursesComponent {
  protected ls = inject(LanguageService);

  protected courses = computed<Course[]>(() =>
    RAW_COURSES.map(c => ({
      ...c,
      name: c.name[this.ls.lang()],
    }))
  );
}
