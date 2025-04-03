// src/app/config/projects-config.ts
import { inject } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { PersonalConfig } from './personal-config';

// Get config from the config service
const configService = inject(ConfigService);
const externalConfig = configService.getConfig();

// Functions for easily creating link URLs
const createGithubLink = (repo: string) =>
  `${PersonalConfig.contact.social.github.url}/${repo}`;

const createBehanceLink = (project: string) =>
  `${PersonalConfig.contact.social.behance.url}/${project}`;

const getProjectImage = (filename: string) =>
  `${PersonalConfig.images.projects}${filename}`;

export const ProjectsConfig = {
  title: externalConfig?.projects?.title || 'PROJECTS_TITLE',
  introduction: externalConfig?.projects?.introduction || 'PROJECTS_INTRODUCTION',

  // Project filter categories
  filters: [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "embedded", label: "Embedded Systems" },
    { id: "dsl", label: "DSL Creation" }
  ],

  // Project items
  items: [
    {
      id: 1,
      title: "Portfolio Template",
      subtitle: "Angular Web Application",
      description: "A customizable portfolio template built with Angular, featuring responsive design and easy content management via a central configuration file.",
      image: getProjectImage("portfolio_template.png"),
      technologies: ["Angular", "TypeScript", "SCSS", "HTML"],
      categories: ["web"],
      featured: true,
      links: {
        live: null,
        github: createGithubLink("reach-me-portfolio"),
        behance: null
      },
      date: "2025"
    },
    {
      id: 2,
      title: "Video Markdown (VMD)",
      subtitle: "DSL for Educational Videos",
      description: "Video Markdown (VMD) is a domain-specific language for creating interactive educational videos, developed as part of my bachelor thesis. The project includes a VS Code extension, an interpreter for LaTeX conversion, and a template preview tool.",
      image: getProjectImage("video_markdown.png"),
      technologies: ["TypeScript", "Node.js", "Angular", "Python", "VS Code API", "LaTeX"],
      categories: ["dsl"],
      featured: true,
      links: {
        live: null,
        github: createGithubLink("Video-Markdown"),
        behance: null
      },
      date: "2025"
    },
    {
      "id": 3,
      "title": "Smartender",
      "subtitle": "IoT Automated Cocktail System",
      "description": "An intelligent bartender system that combines a Flutter mobile app, Go backend, and Raspberry Pi hardware to automate cocktail preparation with customizable recipes and secure user authentication.",
      "image": getProjectImage("smartender.png"),
      "technologies": ["Dart", "Flutter", "Python", "Go", "Raspberry Pi", "Docker", "PostgreSQL", "Google Cloud"],
      "categories": ["mobile", "embedded"],
      "featured": true,
      "links": {
        "live": null,
        "github": createGithubLink("smartender"),
        "behance": null
      },
      "date": "2025"
    },
    {
      "id": 4,
      "title": "Sharemap",
      "subtitle": "Mobile App for Campaign Management",
      "description": "A Flutter application that helps track poster and advertisement locations to ensure they're not forgotten after campaigns end. Features include location mapping with TomTom maps, campaign organization, dark/light mode support, and local storage for offline access.",
      "image": getProjectImage("sharemap.png"),
      "technologies": ["Flutter", "Dart", "TomTom Maps API"],
      "categories": ["mobile"],
      "featured": false,
      "links": {
        "live": null,
        "github": createGithubLink("sharemap_frontend"),
        "behance": null
      },
      "date": "2024"
    }
  ]
};