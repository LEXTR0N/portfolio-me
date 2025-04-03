// src/app/config/personal-config.ts

/**
 * Central configuration for personal information
 * This file contains all basic data that is used in multiple places
 */
export const PersonalConfig = {
  // Basic personal information
  name: 'Jonas Eck',
  role: 'Full-Stack Developer',
  tagline: 'specializing in modern web technologies',
  birthdate: 'September 4, 2000',
  
  // Contact information
  contact: {
    email: 'jonas.eck@lextron.dev',
    location: 'Schweinfurt, Germany',
    phone: null,
    
    // Social Media
    //TODO: Add your social media links
    social: {
      github: {
        username: 'LEXTR0N',
        url: 'https://github.com/LEXTR0N'
      },
      xing: {
        username: 'maxmustermann',
        url: 'https://twitter.com/maxmustermann'
      },
      linkedin: {
        username: 'maxmustermann',
        url: 'https://linkedin.com/in/maxmustermann'
      },
      behance: {
        username: 'max-mustermann',
        url: 'https://behance.net/max-mustermann'
      }
    }
  },
  
  // Images/Assets
  images: {
    profile: 'assets/images/profil.png',
    logoLight: 'assets/images/logo_light.png',
    logoDark: 'assets/images/logo_dark.png',
    projects: 'assets/images/projects/'
  }
};