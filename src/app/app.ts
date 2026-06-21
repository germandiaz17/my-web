import { Component } from '@angular/core';
import { NavComponent } from './features/nav/nav';
import { HeroComponent } from './features/hero/hero';
import { TechStackComponent } from './features/tech-stack/tech-stack';
import { ProjectsComponent } from './features/projects/projects';
import { ExperienceComponent } from './features/experience/experience';
import { CoursesComponent } from './features/courses/courses';
import { ContactComponent } from './features/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavComponent,
    HeroComponent,
    TechStackComponent,
    //ProjectsComponent,
    ExperienceComponent,
    CoursesComponent,
    ContactComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
