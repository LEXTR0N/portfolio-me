// src/app/config/personal-config.ts
import { inject } from '@angular/core';
import { ConfigService } from '../services/config.service';

// Get config from the config service
const configService = inject(ConfigService);
const externalConfig = configService.getConfig();

/**
 * Central configuration for personal information
 * This uses the loaded configuration from assets/config.json
 * which contains values from environment variables
 */
export const PersonalConfig = {
  // Basic personal information
  name: externalConfig?.name || 'PERSONAL_NAME',
  role: externalConfig?.role || 'PERSONAL_ROLE',
  tagline: externalConfig?.tagline || 'PERSONAL_TAGLINE',
  birthdate: externalConfig?.birthdate || 'PERSONAL_BIRTHDATE',
  
  // Contact information
  contact: {
    email: externalConfig?.contact?.email || 'PERSONAL_EMAIL',
    location: externalConfig?.contact?.location || 'PERSONAL_LOCATION',
    phone: null,
    
    // Social Media
    social: {
      github: {
        username: externalConfig?.contact?.social?.github?.username || 'PERSONAL_GITHUB',
        url: externalConfig?.contact?.social?.github?.url || 'https://github.com/PERSONAL_GITHUB'
      },
      xing: {
        username: externalConfig?.contact?.social?.xing?.username || 'PERSONAL_XING',
        url: externalConfig?.contact?.social?.xing?.url || 'https://xing.com/profile/PERSONAL_XING'
      },
      linkedin: {
        username: externalConfig?.contact?.social?.linkedin?.username || 'PERSONAL_LINKEDIN',
        url: externalConfig?.contact?.social?.linkedin?.url || 'https://linkedin.com/in/PERSONAL_LINKEDIN'
      },
      behance: {
        username: externalConfig?.contact?.social?.behance?.username || 'PERSONAL_BEHANCE',
        url: externalConfig?.contact?.social?.behance?.url || 'https://behance.net/PERSONAL_BEHANCE'
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