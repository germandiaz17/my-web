import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';
import { Experience } from '../../shared/models';

interface BilingualExperience {
  company: string;
  role: Record<string, string>;
  period: Record<string, string>;
  description: Record<string, string>;
  tech?: string[];
}

const RAW_EXPERIENCES: BilingualExperience[] = [
  {
    company: 'SKANHAWK SAS',
    role: { es: 'Mid FullStack Developer I', en: 'Mid FullStack Developer I' },
    period: { es: 'jul. 2025 - Presente', en: 'Jul 2025 - Present' },
    description: {
      es: 'Desarrollo fullstack en modalidad híbrida. Construcción y mantenimiento de aplicaciones web de extremo a extremo.',
      en: 'Hybrid fullstack development. Building and maintaining end-to-end web applications.',
    },
  },
  {
    company: 'Firefly Software Consulting',
    role: { es: 'Ingeniero Desarrollador', en: 'Software Engineer' },
    period: { es: 'dic. 2024 - jun. 2025', en: 'Dec 2024 - Jun 2025' },
    description: {
      es: 'Desarrollo de soluciones de software en remoto. Participación en proyectos de consultoría tecnológica para clientes.',
      en: 'Remote software solution development. Participation in technology consulting projects for clients.',
    },
  },
  {
    company: 'NEORIS',
    role: { es: 'Data Engineer Analyst', en: 'Data Engineer Analyst' },
    period: { es: 'ago. 2023 - sept. 2024', en: 'Aug 2023 - Sep 2024' },
    description: {
      es: 'Análisis e ingeniería de datos en remoto. Diseño e implementación de pipelines y soluciones de procesamiento de datos.',
      en: 'Remote data analysis and engineering. Design and implementation of data processing pipelines and solutions.',
    },
  },
  {
    company: 'Bluetab América, an IBM Company',
    role: { es: 'Desarrollador de Big Data', en: 'Big Data Developer' },
    period: { es: 'jul. 2022 - jul. 2023', en: 'Jul 2022 - Jul 2023' },
    description: {
      es: 'Desarrollo de soluciones de Big Data en Bogotá. Implementación de arquitecturas de datos a gran escala bajo el paraguas de IBM.',
      en: 'Big Data solution development in Bogotá. Implementation of large-scale data architectures under the IBM umbrella.',
    },
  },
  {
    company: 'Woombat Consulting Group S.A.S',
    role: { es: 'Analista Junior', en: 'Junior Analyst' },
    period: { es: 'sept. 2021 - jul. 2022', en: 'Sep 2021 - Jul 2022' },
    description: {
      es: 'Prácticas profesionales en Bogotá. Inicio en el mundo del análisis y desarrollo de software bajo mentoría de equipo senior.',
      en: 'Professional internship in Bogotá. Introduction to software analysis and development under senior team mentorship.',
    },
  },
];

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class ExperienceComponent {
  protected ls = inject(LanguageService);

  protected experiences = computed<Experience[]>(() =>
    RAW_EXPERIENCES.map(e => ({
      ...e,
      role: e.role[this.ls.lang()],
      period: e.period[this.ls.lang()],
      description: e.description[this.ls.lang()],
    }))
  );
}
