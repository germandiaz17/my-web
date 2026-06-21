import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class HeroComponent {
  readonly name = '[Gercode]';
  readonly role = 'Fullstack Developer';
  protected ls = inject(LanguageService);
}
