# Portfolio – Full-Stack & DevOps Engineer

This repository contains my personal **portfolio website**, showcasing selected projects, skills, and my transition from frontend development to **Full-Stack & DevOps engineering**.

The portfolio is built with **Angular** and designed as a modern, performant single-page application (SPA), focusing on clean architecture, scalability, and maintainability.

---

## 🚀 Overview

The portfolio highlights:

- Full-Stack projects such as **Videoflix** and **Coderr**
- A modern **DevOps-oriented tech stack**
- Clean UI, responsive design, and optimized assets
- Production-ready build and deployment workflow

The site is intended for **recruiters, engineers, and technical decision-makers** who want a clear and structured overview of my skills and experience.

---

## 🧱 Tech Stack

### Frontend

- Angular (Standalone components)
- TypeScript
- HTML5 / SCSS
- Responsive Design

### Backend & Full-Stack

- Django / REST APIs (project showcase)
- PostgreSQL
- Authentication & role-based access concepts

### DevOps & Cloud

- Docker
- Kubernetes
- CI/CD concepts
- Linux
- AWS & Azure fundamentals
- Terraform (Infrastructure as Code)

---

## 📁 Project Structure

```text
src/
 ├── app/
 │   ├── main/        # Core sections (start, projects, skills, contact)
 │   ├── shared/      # Header, footer, shared UI
 │   └── models/      # Interfaces & typing
 ├── assets/
 │   ├── img/skills   # Skill & tech icons
 │   └── img/         # Project previews & assets
 └── styles.scss      # Global styles
```

🛠 Development
Install dependencies
npm install

Run development server
ng serve

Navigate to:

http://localhost:4200

The app reloads automatically on file changes.

🏗 Production Build

Create an optimized production build:

ng build

Build output:

dist/portfolio/

🔍 Local Preview of Production Build

To preview the production build locally:

npx serve dist/portfolio

Open:

http://localhost:3000

🚢 Deployment

The application is designed for static hosting, for example:

Nginx (VPS / Server)

AWS S3 + CloudFront

Other static hosting platforms

Note: The dist/ directory is not committed to Git and is generated per deployment.

🎯 Purpose

This portfolio reflects my professional journey toward Full-Stack & DevOps Engineering, with a strong focus on:

Clean code

System-oriented thinking

Automation and scalability

Production-ready applications

---
