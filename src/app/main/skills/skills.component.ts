import { Component, inject, ElementRef, ViewChild, HostListener } from '@angular/core';
import { TranslationsService } from '../../services/translations.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})

export class SkillsComponent {

  skills: Array<{ img: string, text: string }> = [
    { 'img': '../../../assets/img/skills/html.png', 'text': 'HTML' },
    { 'img': '../../../assets/img/skills/css-3.png', 'text': 'CSS' },
    { 'img': '../../../assets/img/skills/js.png', 'text': 'JavaScript' },
    { 'img': '../../../assets/img/skills/typescript.png', 'text': 'TypeScript' },
    { 'img': '../../../assets/img/skills/angular.png', 'text': 'Angular' },
    { 'img': '../../../assets/img/skills/firebase.png', 'text': 'Firebase' },
    { 'img': '../../../assets/img/skills/gear.png', 'text': 'REST-API' },
    { 'img': '../../../assets/img/skills/postgre-sql.png', 'text': 'PostgreSQL' },
    { 'img': '../../../assets/img/skills/python.png', 'text': 'Python' },
    { 'img': '../../../assets/img/skills/django.svg', 'text': 'Django' },
    { 'img': '../../../assets/img/skills/git.png', 'text': 'Git' },
    { 'img': '../../../assets/img/skills/linux.png', 'text': 'Linux' },
    { 'img': '../../../assets/img/skills/docker.png', 'text': 'Docker' },
    { 'img': '../../../assets/img/skills/kubernetes.png', 'text': 'Kubernetes' },
    { 'img': '../../../assets/img/skills/terraform.png', 'text': 'Terraform' },
    { 'img': '../../../assets/img/skills/jenkins.png', 'text': 'Jenkins' },
    { 'img': '../../../assets/img/skills/ansible.png', 'text': 'Ansible' },
    { 'img': '../../../assets/img/skills/aws.png', 'text': 'Amazon Web Services' },
    { 'img': '../../../assets/img/skills/azure.png', 'text': 'Azure' },
    { 'img': '../../../assets/img/skills/skill11.png', 'text': 'Growth mindset' },

  ]

  translationData = inject(TranslationsService);
  activeLang: 'en' | 'de' = 'en';

  setActiveLang(lang: 'en' | 'de') {
    this.activeLang = lang;
    this.translationData.setLanguage(lang);
  }

  getTranslation(key: string): string {
    return this.translationData.getTranslation(key);
  }

  isBubbleVisible = false;

  @ViewChild('bubbleRef') bubbleRef!: ElementRef;
  openBubble(event: MouseEvent) {
    this.isBubbleVisible = true;
    event.stopPropagation();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (this.bubbleRef && !this.bubbleRef.nativeElement.contains(event.target)) {
      this.isBubbleVisible = false;
    }
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}