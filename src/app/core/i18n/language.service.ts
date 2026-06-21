import { Injectable, signal } from '@angular/core';
import { translations, Lang } from './translations';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<Lang>('es');

  toggle(): void {
    this.lang.update(l => (l === 'es' ? 'en' : 'es'));
  }

  t(key: string): string {
    const keys = key.split('.');
    let value: any = translations[this.lang()];
    for (const k of keys) {
      value = value?.[k];
    }
    return typeof value === 'string' ? value : key;
  }
}
