import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslationsService } from '../../services/translations.service';

const HEADER_HEIGHT_OFFSET = -140;

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent {

  translationData = inject(TranslationsService);

  getTranslation(key: string): string {
    return this.translationData.getTranslation(key);
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const y = element.getBoundingClientRect().top + window.scrollY + HEADER_HEIGHT_OFFSET;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
