import { Component, inject } from '@angular/core';
import { StartComponent } from './start/start.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SkillsComponent } from "./skills/skills.component";
import { ProjectsComponent } from "./projects/projects.component";
import { ContactComponent } from './contact/contact.component';
import { QuotesComponent } from './quotes/quotes.component';
import { CommonModule } from '@angular/common';
import { TranslationsService } from '../services/translations.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [StartComponent, CommonModule, AboutmeComponent, SkillsComponent, ProjectsComponent, ContactComponent, QuotesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})

export class MainComponent {

  projects = [
    {
      number: '01',
      name: 'Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      skills: ['CSS', 'HTML', 'JavaScript'],
      imageUrl: '../../assets/img/preview_join.png',
      githubLink: 'https://github.com/OgulcanErdag/Join.git',
      liveLink: 'https://join.ogulcan-erdag.com/'
    },
    {
      number: '02',
      name: 'DABubble',
      description: 'Messenger like Slack or Discord including direct messaging as well as channels with the possibiliy of opening threads to specific messages.',
      skills: ['CSS', 'HTML', 'TypeScript', 'Angular', 'Firebase'],
      imageUrl: '../../assets/img/preview_dabubble.png',
      githubLink: 'https://github.com/OgulcanErdag/DABubble.git',
      liveLink: 'https://dabubble.ogulcan-erdag.com/'
    },
    {
      number: '03',
      name: 'El Pollo Loco',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      skills: ['CSS', 'HTML', 'Angular', 'TypeScript'],
      imageUrl: '../../assets/img/preview_pollo.png',
      githubLink: 'https://github.com/OgulcanErdag/El_Pollo_Loco.git',
      liveLink: 'https://el-pollo-loco.ogulcan-erdag.com/'
    },
    {
      number: '04',
      name: 'Coderr',
      description: 'Test.',
      skills: ['CSS', 'HTML', 'JavaScript', 'Django'],
      imageUrl: '../../assets/img/preview_coderr.png',
      githubLink: 'https://github.com/OgulcanErdag/Coderr_deploy_backend.git',
      liveLink: 'https://coderr.ogulcan-erdag.com/'
    },

    {
      number: '05',
      name: 'KanMind',
      description: 'KanMind is a web-based application that provides a structured and user-friendly dashboard experience. The project was created to practice and showcase full-stack development, API integration, authentication, and production-ready deployment.',
      skills: ['CSS', 'HTML', 'JavaScript', 'Django'],
      imageUrl: '../../assets/img/preview_kanmind.png',
      githubLink: 'https://github.com/OgulcanErdag/kanmind_frontend.git',
      liveLink: 'https://kanmind.ogulcan-erdag.com/'
    },

    {
      number: '06',
      name: 'Videoflix',
      description: `Videoflix is a full-stack video streaming platform designed to deliver scalable, high-performance media experiences.
      It combines a modern frontend with a robust backend, featuring HLS streaming, asynchronous video processing, and cloud-ready architecture.
      The project demonstrates real-world use of Full-Stack and DevOps practices, from application development to deployment and operations.`,
      skills: ['CSS', 'HTML', 'JavaScript', 'Django', 'PostgreSQL', 'Redis'],
      imageUrl: '../../assets/img/preview_videoflix.png',
      githubLink: 'https://github.com/OgulcanErdag/Videoflix_Backend.git',
      liveLink: 'https://videoflix.ogulcan-erdag.com/'
    }
  ];

  currentProjectIndex = 0;
  isProjectLayerVisible = false;

  showLayer(projectIndex: number) {
    this.currentProjectIndex = projectIndex;
    this.isProjectLayerVisible = true;
    document.body.style.overflow = 'hidden';  // Scrollen verhindern
  }

  hideLayer() {
    this.isProjectLayerVisible = false;
    document.body.style.overflow = ''; // Scrollen wieder aktivieren
  }

  nextProject() {
    if (this.currentProjectIndex < this.projects.length - 1) {
      this.currentProjectIndex++;
    } else {
      this.currentProjectIndex = 0;
    }
  }

  previousProject() {
    if (this.currentProjectIndex > 0) {
      this.currentProjectIndex--;
    } else {
      this.currentProjectIndex = this.projects.length - 1;
    }
  }

  get currentProject() {
    return this.projects[this.currentProjectIndex];
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