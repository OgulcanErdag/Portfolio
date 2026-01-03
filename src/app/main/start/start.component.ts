import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslationsService } from '../../services/translations.service';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})

export class StartComponent {

  translationData = inject(TranslationsService);
  activeLang: 'en' | 'de' = 'en';

  setActiveLang(lang: 'en' | 'de') {
    this.activeLang = lang;
    this.translationData.setLanguage(lang);
  }

  getTranslation(key: string): string {
    return this.translationData.getTranslation(key);
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const yOffset = -140; // header yüksekliği kadar negatif
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}