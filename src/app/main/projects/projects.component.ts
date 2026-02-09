import { CommonModule } from '@angular/common';
import { Component, inject, EventEmitter, Output } from '@angular/core';
import { TranslationsService } from '../../services/translations.service';

type DevOpsSectionKey =
  | 'terraform'
  | 'docker'
  | 'kubernetes'
  | 'ansible'
  | 'jenkins'
  | 'maven'
  | 'helm'
  | 'monitoring';

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
    this.activeGroup = this.activeGroup === group ? null : group;
  }

  // DevOps sub-tab
  activeDevOpsSection: DevOpsSectionKey | null = null;

  toggleDevOpsSection(sectionKey: DevOpsSectionKey) {
    this.activeDevOpsSection =
      this.activeDevOpsSection === sectionKey ? null : sectionKey;
  }

  devOpsSections = [
    {
      key: 'terraform' as DevOpsSectionKey,
      title: 'Terraform',
      subtitle: 'IaC • AWS',
      repos: [
        {
          title: 'Terraform-IaC-AWS',
          tech: 'EC2 | VPC | ALB/ASG | ELB | S3',
          url: 'https://github.com/OgulcanErdag/terraform-iac-aws.git'
        },
        {
          title: 'Terraform_Hands_On',
          tech: 'EC2 | VPC | IAM | ALB/ASG | ELB | S3',
          url: 'https://github.com/OgulcanErdag/Terraform_Hands_On.git'
        },
        {
          title: 'Terraform-aws-docker-instance',
          tech: 'Terraform Registry(Community)',
          url: 'https://github.com/OgulcanErdag/terraform-aws-docker-instance.git'
        },
      ]
    },
    {
      key: 'docker' as DevOpsSectionKey,
      title: 'Docker',
      subtitle: 'Containers • Images • Docker Compose',
      repos: []
    },
    {
      key: 'kubernetes' as DevOpsSectionKey,
      title: 'Kubernetes',
      subtitle: 'K8s • Pods • Services • Deployments',
      repos: []
    },
    {
      key: 'ansible' as DevOpsSectionKey,
      title: 'Ansible',
      subtitle: 'Configuration Management • Playbooks',
      repos: []
    },
    {
      key: 'jenkins' as DevOpsSectionKey,
      title: 'Jenkins',
      subtitle: 'CI/CD Pipelines • Automation',
      repos: []
    },
    {
      key: 'maven' as DevOpsSectionKey,
      title: 'Maven',
      subtitle: 'Build • Dependency Management (Java)',
      repos: []
    },
    {
      key: 'helm' as DevOpsSectionKey,
      title: 'Helm',
      subtitle: 'K8s Packaging • Charts',
      repos: []
    },
    {
      key: 'monitoring' as DevOpsSectionKey,
      title: 'Prometheus & Grafana',
      subtitle: 'Monitoring • Dashboards • Alerts',
      repos: []
    }
  ];

  // Hands-on collections (repo links)
  handsOnCollections = [
    {
      title: 'AWS Cloud Architecture — Django Blog',
      tech: 'EC2 | S3 | VPC | RDS | ALB/ASG | Route53 | CloudFormation',
      url: 'https://github.com/OgulcanErdag/aws-django-blog-capstone.git',
    },
    {
      title: 'Linux DevOps Automation Suite',
      tech: 'Bash | Automation | DevOps system tooling',
      url: 'https://github.com/OgulcanErdag/linux-devops-automation-suite.git',
    },
    {
      title: 'Django-CRM on AWS',
      tech: 'EC2 | RDS(MySQL) | VPC | IAM | ALB/ASG ',
      url: 'https://github.com/OgulcanErdag/Django-CRM.git',
    },
    {
      title: 'AWS Hands-Ons',
      tech: 'EC2 | IAM | VPC | S3 | ALB/ASG | CloudFormation',
      url: 'https://github.com/OgulcanErdag/AWS_Hands_On',
    },
    {
      title: 'Linux Hands-Ons',
      tech: 'Linux fundamentals | bash | users | services | networking',
      url: 'https://github.com/OgulcanErdag/Linux_Hands_On.git',
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
