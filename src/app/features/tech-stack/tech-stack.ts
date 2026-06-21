import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  templateUrl: './tech-stack.html',
  styleUrl: './tech-stack.css',
})
export class TechStackComponent {
  protected ls = inject(LanguageService);

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
}
