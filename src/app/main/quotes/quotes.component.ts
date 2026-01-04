import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslationsService } from '../../services/translations.service';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.scss',
})
export class QuotesComponent {
  private translationData = inject(TranslationsService);

  activeLang: 'en' | 'de' = 'en';

  currentIndex: number = 0;
  isTransformed = false;

  // Wenn du später mehr Quotes hinzufügst, hier anpassen (QUOTE1..QUOTE5)
  readonly quoteCount = 5;

  // Für die Dots im Template (0..quoteCount-1)
  get dots(): number[] {
    return Array.from({ length: this.quoteCount }, (_, i) => i);
  }

  get visibleQuotes(): Array<{ text: string; name: string }> {
    const total = this.quoteCount;

    return [
      this.getQuote((this.currentIndex - 1 + total) % total),
      this.getQuote(this.currentIndex),
      this.getQuote((this.currentIndex + 1) % total),
    ];
  }

  transformQuotes() {
    this.isTransformed = true;
  }

  nextQuote(): void {
    this.currentIndex = (this.currentIndex + 1) % this.quoteCount;
  }

  prevQuote(): void {
    this.currentIndex = (this.currentIndex - 1 + this.quoteCount) % this.quoteCount;
    this.transformQuotes();
  }

  setActiveLang(lang: 'en' | 'de') {
    this.activeLang = lang;
    this.translationData.setLanguage(lang);
  }

  getGeneralTranslation(key: string): string {
    return this.translationData.getTranslation(key);
  }

  // Zentrale Quote-Quelle: translations.ts (QUOTES.QUOTE1..n + QUOTES.PERSON1..n)
  private getQuote(index: number): { text: string; name: string } {
    const quoteKey = `QUOTES.QUOTE${index + 1}`;
    const personKey = `QUOTES.PERSON${index + 1}`;

    return {
      text: this.translationData.getTranslation(quoteKey),
      name: this.translationData.getTranslation(personKey),
    };
  }
}
