import { CommonModule } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { TranslationsService } from '../../services/translations.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMobileMenu = false;
  isScrolled = false;

  private router = inject(Router);
  translationData = inject(TranslationsService);

  activeLang: 'en' | 'de' = 'de';

  constructor() {
    this.activeLang = this.translationData.getCurrentLanguage();
  }

  toggleMobileMenu(event: Event) {
    event.stopPropagation();
    this.isMobileMenu = !this.isMobileMenu;
  }

  setActiveLang(lang: 'en' | 'de') {
    this.activeLang = lang;
    this.translationData.setLanguage(lang);
    if (this.isMobileMenu) {
      this.isMobileMenu = false;
    }
  }

  getTranslation(key: string): string {
    return this.translationData.getTranslation(key);
  }

  @HostListener('document:click')
  closeMobileMenu() {
    this.isMobileMenu = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > 768) {
      this.isMobileMenu = false;
    }
  }

  scrollToSection(sectionId: string) {
    this.isMobileMenu = false;

    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset =
            document.querySelector('#header-container')?.clientHeight || 0;
          const elementPosition =
            element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 100);
    });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
