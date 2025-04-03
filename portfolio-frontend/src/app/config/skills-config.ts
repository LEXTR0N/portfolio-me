// src/app/config/skills-config.ts
import { inject } from '@angular/core';
import { ConfigService } from '../services/config.service';

// Get config from the config service
const configService = inject(ConfigService);
const externalConfig = configService.getConfig();

export const SkillsConfig = {
  title: externalConfig?.skills?.title || 'SKILLS_TITLE',
  introduction: externalConfig?.skills?.introduction || 'SKILLS_INTRODUCTION',
  
  // Skill categories - add, remove or modify as needed
  categories: [
    {
      name: "Programming Languages",
      description: "Languages I've worked with professionally and on personal projects.",
      skills: [
        {
          name: "Python",
          level: 4,
          yearsExperience: 2,
          description: "Flask, Data Analysis, Machine Learning with scikit-learn"
        },
        {
          name: "Java",
          level: 5,
          yearsExperience: 3,
          description: "Enterprise Applications"
        },
        {
          name: "Kotlin",
          level: 2,
          yearsExperience: 1,
          description: "Android development"
        },
        {
          name: "Dart",
          level: 4,
          yearsExperience: 2,
          description: "Flutter app development, Cross-platform"
        },
        {
          name: "Go",
          level: 2,
          yearsExperience: 1,
          description: "Microservices, Backend applications"
        },
        {
          name: "C++",
          level: 2,
          yearsExperience: 2,
          description: "Systems programming, Performance-critical applications"
        },
        {
          name: "C",
          level: 2,
          yearsExperience: 2,
          description: "Embedded systems, Low-level programming"
        },
        {
          name: "Rust",
          level: 2,
          yearsExperience: 1,
          description: "Memory-safe systems programming"
        },
        {
          name: "HTML/CSS",
          level: 5,
          yearsExperience: 4,
          description: "Semantic HTML, CSS3, Sass/SCSS"
        },
        {
          name: "JavaScript",
          level: 5,
          yearsExperience: 4,
          description: "ES6+, Modern JS patterns"
        },
        {
          name: "TypeScript",
          level: 5,
          yearsExperience: 2,
          description: "Type-safe JavaScript, Interfaces, Generics"
        },
        {
          name: "SQL",
          level: 4,
          yearsExperience: 3,
          description: "MySQL, PostgreSQL, Oracle, DB2"
        }
      ]
    },
    {
      name: "Frameworks & Libraries",
      description: "Technologies I utilize to build modern applications.",
      skills: [
        {
          name: "Angular",
          level: 5,
          yearsExperience: 2,
          description: "Angular 2+, RxJS, NgRx"
        },
        {
          name: "React",
          level: 1,
          yearsExperience: 1,
          description: "Redux, Hooks, Context API"
        },
        {
          name: "Material-UI",
          level: 1,
          yearsExperience: 1,
          description: "React component library, Theming"
        },
        {
          name: "Vue.js",
          level: 2,
          yearsExperience: 2,
          description: "Vue 3, Composition API"
        },
        {
          name: "Node.js",
          level: 3,
          yearsExperience: 2,
          description: "Express, REST APIs"
        },
        {
          name: "Flutter",
          level: 4,
          yearsExperience: 2,
          description: "Cross-platform mobile development"
        }
      ]
    },
    {
      name: "Tools & Technologies",
      description: "Development tools and environments I'm proficient with.",
      skills: [
        {
          name: "Git",
          level: 4,
          yearsExperience: 4,
          description: "Version control, GitHub/GitLab workflows"
        },
        {
          name: "Docker",
          level: 4,
          yearsExperience: 2,
          description: "Containerization, Docker Compose"
        },
        {
          name: "REST APIs",
          level: 5,
          yearsExperience: 3,
          description: "API design, Implementation, Documentation"
        },
        {
          name: "SOAP",
          level: 2,
          yearsExperience: 1,
          description: "Enterprise integrations, XML processing"
        },
        {
          name: "CI/CD",
          level: 3,
          yearsExperience: 2,
          description: "Jenkins, GitHub Actions, GitLab CI"
        },
        {
          name: "Agile/Scrum",
          level: 4,
          yearsExperience: 3,
          description: "Sprint planning, Backlogs, User stories"
        },
        {
          name: "Testing",
          level: 3,
          yearsExperience: 3,
          description: "Jest, JUnit"
        }
      ]
    },
    {
      name: "Platforms & Operating Systems",
      description: "Platforms and operating systems I'm experienced with.",
      skills: [
        {
          name: "Linux",
          level: 4,
          yearsExperience: 3,
          description: "Ubuntu, Debian, Server administration"
        },
        {
          name: "Windows",
          level: 5,
          yearsExperience: 8,
          description: "Development environment, Windows Subsystem for Linux (WSL)"
        },
        {
          name: "macOS",
          level: 2,
          yearsExperience: 1,
          description: "Development environment, Unix tooling"
        },
        {
          name: "Android",
          level: 5,
          yearsExperience: 2,
          description: "App development, Platform features"
        },
        {
          name: "iOS",
          level: 2,
          yearsExperience: 1,
          description: "App development, Platform guidelines"
        }
      ]
    },
    {
      name: "Design & UX",
      description: "Design tools and principles I apply in my work.",
      skills: [
        {
          name: "Figma",
          level: 2,
          yearsExperience: 2,
          description: "UI design, Prototyping, Component libraries"
        },
        {
          name: "Photoshop",
          level: 2,
          yearsExperience: 2,
          description: "Image editing, Web assets, Mockups"
        }
      ]
    },
    {
      name: "Languages",
      description: "Human languages I can communicate in.",
      skills: [
        {
          name: "English",
          level: 4,
          description: "Professional working proficiency"
        },
        {
          name: "German",
          level: 5,
          description: "Native speaker"
        }
      ]
    }
  ],
  
  // Skill level descriptions - shown when hovering over skill bars
  levelDescriptions: [
    "Beginner",
    "Basic",
    "Intermediate",
    "Advanced",
    "Expert"
  ]
};