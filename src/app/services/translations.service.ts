import { Injectable } from '@angular/core';
import { translations } from '../translations/translations';
import { TranslationStructure } from '../models/translation.interface';

@Injectable({
  providedIn: 'root',
})
export class TranslationsService {
  private translations: { en: TranslationStructure; de: TranslationStructure } = translations;

  // ✅ default = de, ama önce localStorage'a bak
  private currentLanguage: 'en' | 'de' = this.getInitialLanguage();

  private getInitialLanguage(): 'en' | 'de' {
    const saved = localStorage.getItem('lang');
    if (saved === 'en' || saved === 'de') return saved;

    // İstediğin: başlangıç dili Almanca
    return 'de';
  }

  // ✅ Header vs. için dili okunabilir yap
  getCurrentLanguage(): 'en' | 'de' {
    return this.currentLanguage;
  }

  setLanguage(lang: 'en' | 'de') {
    this.currentLanguage = lang;
    localStorage.setItem('lang', lang);
  }

  getTranslation(key: string): any {
    return key
      .split('.')
      .reduce((o: any, i) => o?.[i], this.translations[this.currentLanguage]);
  }
}
