// src/app/config/app-config.ts

import { PersonalConfig } from './personal-config';
import { HeaderConfig } from './header-config';
import { FooterConfig } from './footer-config';
import { HomeConfig } from './home-config';
import { AboutConfig } from './about-config';
import { SkillsConfig } from './skills-config';
import { ProjectsConfig } from './projects-config';
import { displayIfExists } from './utils';

/**
 * Central configuration file for all text and layout properties
 * The structure is divided into logical sections, imported from separate files
 */
export const AppConfig = {
  // Zentrale persönliche Informationen
  personal: PersonalConfig,
  
  // Header section
  header: HeaderConfig,
  
  // Contact information
  contact: {
    email: PersonalConfig.contact.email,
    xing: PersonalConfig.contact.social.xing.username,
    linkedin: PersonalConfig.contact.social.linkedin.username,
    github: PersonalConfig.contact.social.github.username
  },
  
  // Homepage content
  home: HomeConfig,
  
  // About page content
  about: AboutConfig,
  
  // Skills page content
  skills: SkillsConfig,
  
  // Projects page content
  projects: ProjectsConfig,
  
  // Footer section
  footer: FooterConfig
};

// Re-export the utility function
export { displayIfExists };