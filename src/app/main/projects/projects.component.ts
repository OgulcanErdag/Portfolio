import { CommonModule } from '@angular/common';
import { Component, inject, EventEmitter, Output } from '@angular/core';
import { TranslationsService } from '../../services/translations.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  @Output() projectClicked = new EventEmitter<number>();

  // Accordion state
  activeGroup: 'fullstack' | 'handsOn' | 'devops' | null = null;



  toggleGroup(group: 'fullstack' | 'handsOn' | 'devops') {
    if (group === 'devops') return;
    this.activeGroup = this.activeGroup === group ? null : group;
  }

  // Hands-on collections (repo links)
  handsOnCollections = [
    {
      title: 'AWS Hands-On',
      tech: 'EC2 | IAM | VPC | S3 | ALB/ASG | CloudFormation',
      url: 'https://github.com/OgulcanErdag/AWS_Hands_On',
    },
    {
      title: 'AWS Mini Projects',
      tech: 'Cloud mini apps & demos (various AWS services)',
      url: 'https://github.com/OgulcanErdag/aws-projects.git',
    },
    {
      title: 'Phonebook Web App',
      tech: 'Full-stack cloud-ready web application',
      url: 'https://github.com/OgulcanErdag/phonebook-web-app.git',
    },
    {
      title: 'Linux Hands-On',
      tech: 'Linux fundamentals, bash, users, services, networking',
      url: 'https://github.com/OgulcanErdag/Linux_Hands_On.git',
    },
    {
      title: 'Linux DevOps Automation Suite',
      tech: 'Bash | Automation | DevOps system tooling',
      url: 'https://github.com/OgulcanErdag/linux-devops-automation-suite.git',
    },
  ];


  onProjectClick(projectIndex: number) {
    this.projectClicked.emit(projectIndex);
  }

  hoveredIndex: number | null = null;

  previews: string[] = [
    '../../../assets/img/preview_join.png',
    '../../../assets/img/preview_dabubble.png',
    '../../../assets/img/preview_pollo.png',
    '../../../assets/img/preview_coderr.png',
    '../../../assets/img/preview_kanmind.png',
    '../../../assets/img/preview_videoflix.png',
  ];

  setHoveredIndex(index: number | null) {
    this.hoveredIndex = index;
  }

  translationData = inject(TranslationsService);
  activeLang: 'en' | 'de' = 'en';

  setActiveLang(lang: 'en' | 'de') {
    this.activeLang = lang;
    this.translationData.setLanguage(lang);
  }

  getTranslation(key: string): string {
    return this.translationData.getTranslation(key);
  }
}
