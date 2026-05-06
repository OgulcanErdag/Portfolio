import { CommonModule } from '@angular/common';
import { Component, inject, EventEmitter, Output } from '@angular/core';
import { TranslationsService } from '../../services/translations.service';

type DevOpsSectionKey =
  | 'end-to-end-devops'
  | 'terraform'
  | 'docker'
  | 'kubernetes'
  | 'ansible'
  | 'jenkins'
  | 'maven'
  | 'helm'
  | 'monitoring';

type CloudSectionKey = 'aws' | 'linux';

interface Repo {
  title: string;
  tech: string;
  url: string;
}

interface Section<T extends string> {
  key: T;
  title: string;
  subtitle: string;
  repos: Repo[];
}

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

  devOpsSections: Section<DevOpsSectionKey>[] = [
    {
      key: 'end-to-end-devops',
      title: 'End-to-End DevOps',
      subtitle: 'Microservices • Kubernetes • Jenkins • AWS',
      repos: [
        {
          title: 'DevOps Pipeline',
          tech: 'K8s | Terraform | Jenkins | Docker | AWS',
          url: 'https://github.com/OgulcanErdag/petclinic-microservices-with-db'
        }
      ]
    },
    {
      key: 'terraform',
      title: 'Terraform',
      subtitle: 'IaC • AWS',
      repos: [
        {
          title: 'Terraform-IaC-AWS',
          tech: 'EC2 | VPC | ALB/ASG | ELB | S3',
          url: 'https://github.com/OgulcanErdag/terraform-iac-aws.git'
        },
        {
          title: 'Hands-On',
          tech: 'EC2 | VPC | IAM | ALB/ASG | ELB | S3',
          url: 'https://github.com/OgulcanErdag/Terraform_Hands_On.git'
        },
        {
          title: 'Terraform-aws-docker-instance',
          tech: 'Terraform Registry (Community)',
          url: 'https://github.com/OgulcanErdag/terraform-aws-docker-instance.git'
        },
        {
          title: 'Phonebook-V2',
          tech: 'EC2 | RDS | ASG/ALB/TG | VPC',
          url: 'https://github.com/OgulcanErdag/phonebook-v2.git'
        },
      ]
    },
    {
      key: 'docker',
      title: 'Docker',
      subtitle: 'Containers • Images • Docker Compose',
      repos: [
        {
          title: 'Hands-On',
          tech: 'Images | Compose | Volumes | Networking',
          url: 'https://github.com/OgulcanErdag/Docker_Hands_On.git'
        },
        {
          title: 'Dockerization Bookstore App',
          tech: 'Terraform | AWS | Docker | Compose | MySQL',
          url: 'https://github.com/OgulcanErdag/dockerization-bookstore-app.git'
        },
      ]
    },
    {
      key: 'kubernetes',
      title: 'Kubernetes',
      subtitle: 'K8s • Pods • Services • Deployments',
      repos: [
        {
          title: 'Hands-On',
          tech: 'Core | Networking | Storage | EKS',
          url: 'https://github.com/OgulcanErdag/Kubernetes_Hands_On.git'
        },
        {
          title: 'K8s Microservice Phonebook',
          tech: 'PV/PVC | Ingress | Service | Deploy',
          url: 'https://github.com/OgulcanErdag/K8s-Microservice-Phonebook.git'
        },
        {
          title: 'Phonebook K8s Helm Chart',
          tech: 'Helm | Values | Templates',
          url: 'https://github.com/OgulcanErdag/phonebook-k8s-helm-chart.git'
        },
      ]
    },
    {
      key: 'ansible',
      title: 'Ansible',
      subtitle: 'Configuration Management • Playbooks',
      repos: [
        {
          title: 'Ansible-Project',
          tech: 'AWS | Terraform | SQL',
          url: 'https://github.com/OgulcanErdag/Ansible-Project.git'
        },
        {
          title: 'Hands-On',
          tech: 'Playbooks | Roles | Vault',
          url: 'https://github.com/OgulcanErdag/Ansible_Hands_on.git'
        },
      ]
    },
    {
      key: 'maven',
      title: 'Maven',
      subtitle: 'Build • Dependency Management (Java)',
      repos: [
        {
          title: 'Hands-On',
          tech: 'Build | Dependencies | Plugins',
          url: 'https://github.com/OgulcanErdag/Maven_Hands_on.git'
        }
      ]
    },
    {
      key: 'jenkins',
      title: 'Jenkins',
      subtitle: 'CI/CD Pipelines • Automation',
      repos: [
        {
          title: 'Hands-On',
          tech: 'Freestyle | Pipeline | K8s Deploy',
          url: 'https://github.com/OgulcanErdag/Jenkins_Hands_on.git'
        }
      ]
    },
    {
      key: 'monitoring',
      title: 'Prometheus & Grafana',
      subtitle: 'Monitoring • Dashboards • Alerts',
      repos: [
        {
          title: 'Hands-On',
          tech: 'EC2 Setup | K8s Cluster Monitoring',
          url: 'https://github.com/OgulcanErdag/Prometheus-Grafana_Hands_on.git'
        }
      ]
    }
  ];

  // Cloud (AWS + Linux)
  activeCloudSection: CloudSectionKey | null = null;

  toggleCloudSection(sectionKey: CloudSectionKey) {
    this.activeCloudSection =
      this.activeCloudSection === sectionKey ? null : sectionKey;
  }

  cloudSections: Section<CloudSectionKey>[] = [
    {
      key: 'aws',
      title: 'AWS',
      subtitle: 'Cloud • Architecture • Services',
      repos: [
        {
          title: 'Hands-On',
          tech: 'EC2 | IAM | VPC | S3 | ALB/ASG | CloudFormation',
          url: 'https://github.com/OgulcanErdag/AWS_Hands_On'
        },
        {
          title: 'AWS Mini Projects',
          tech: 'Cloud mini apps & demos (various AWS services)',
          url: 'https://github.com/OgulcanErdag/aws-projects.git'
        },
        {
          title: 'AWS Cloud Architecture — Django Blog',
          tech: 'EC2 | S3 | VPC | RDS | ALB/ASG | Route53 | CloudFormation',
          url: 'https://github.com/OgulcanErdag/aws-django-blog-capstone.git'
        },
        {
          title: 'Django-CRM on AWS',
          tech: 'EC2 | RDS (MySQL) | VPC | IAM | ALB/ASG',
          url: 'https://github.com/OgulcanErdag/Django-CRM.git'
        }
      ]
    },
    {
      key: 'linux',
      title: 'Linux',
      subtitle: 'Fundamentals • Scripting • Ops',
      repos: [
        {
          title: 'Hands-On',
          tech: 'Fundamentals | Bash | Users | Services | Networking',
          url: 'https://github.com/OgulcanErdag/Linux_Hands_On.git'
        },
        {
          title: 'Linux DevOps Automation Suite',
          tech: 'Bash | Automation | DevOps System Tooling',
          url: 'https://github.com/OgulcanErdag/linux-devops-automation-suite.git'
        }
      ]
    }
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

  getTranslation(key: string): string {
    return this.translationData.getTranslation(key);
  }
}
