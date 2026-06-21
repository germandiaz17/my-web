import { Component, inject } from '@angular/core';
import { LanguageService } from '../../core/i18n/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  readonly name = '[Gercode]';
  readonly email = 'germanrodrigo48@gmail.com';
  readonly github = 'https://github.com/germandiaz17';
  readonly linkedin = 'https://www.linkedin.com/in/german-rodrigo-diaz-olarte-08b5631a8/';
  readonly currentYear = new Date().getFullYear();
  protected ls = inject(LanguageService);
}
