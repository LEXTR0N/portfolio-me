// src/app/config/personal-config.ts
import { inject } from '@angular/core';
import { ConfigService } from '../services/config.service';

// Get config from the config service
const configService = inject(ConfigService);
const externalConfig = configService.getConfig();

/**
 * Central configuration for personal information
 * This uses the loaded configuration from assets/config.json if available,
 * otherwise falls back to default values
 */
export const PersonalConfig = {
  // Basic personal information
  name: externalConfig?.name || 'Jonas Eck',
  role: externalConfig?.role || 'Full-Stack Developer',
  tagline: externalConfig?.tagline || 'specializing in modern web technologies',
  birthdate: externalConfig?.birthdate || 'September 4, 2000',
  
  // Contact information
  contact: {
    email: externalConfig?.contact?.email || 'jonas.eck@lextron.dev',
    location: externalConfig?.contact?.location || 'Schweinfurt, Germany',
    phone: null,
    
    // Social Media
    social: {
      github: {
        username: externalConfig?.contact?.social?.github?.username || 'LEXTR0N',
        url: externalConfig?.contact?.social?.github?.url || 'https://github.com/LEXTR0N'
      },
      xing: {
        username: externalConfig?.contact?.social?.xing?.username || 'maxmustermann',
        url: externalConfig?.contact?.social?.xing?.url || 'https://twitter.com/maxmustermann'
      },
      linkedin: {
        username: externalConfig?.contact?.social?.linkedin?.username || 'maxmustermann',
        url: externalConfig?.contact?.social?.linkedin?.url || 'https://linkedin.com/in/maxmustermann'
      },
      behance: {
        username: externalConfig?.contact?.social?.behance?.username || 'max-mustermann',
        url: externalConfig?.contact?.social?.behance?.url || 'https://behance.net/max-mustermann'
      }
    }
  },
  
  // Images/Assets
  images: {
    profile: externalConfig?.images?.profile || 'assets/images/profil.png',
    logoLight: externalConfig?.images?.logoLight || 'assets/images/logo_light.png',
    logoDark: externalConfig?.images?.logoDark || 'assets/images/logo_dark.png',
    projects: 'assets/images/projects/'
  }
};