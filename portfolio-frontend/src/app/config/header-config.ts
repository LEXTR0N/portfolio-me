// src/app/config/header-config.ts
import { inject } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { PersonalConfig } from './personal-config';

// Get config from the config service
const configService = inject(ConfigService);
const externalConfig = configService.getConfig();

export const HeaderConfig = {
  // Light Mode Logo
  logoImageLight: {
    path: PersonalConfig.images.logoLight,
    alt: `${PersonalConfig.name} Portfolio Logo - Light Mode`,
    width: 200,
    height: 80
  },
  // Dark Mode Logo
  logoImageDark: {
    path: PersonalConfig.images.logoDark,
    alt: `${PersonalConfig.name} Portfolio Logo - Dark Mode`,
    width: 200,
    height: 80
  },
  navigation: {
    home: externalConfig?.header?.navigation?.home || 'Home',
    projects: externalConfig?.header?.navigation?.projects || 'Projects', 
    about: externalConfig?.header?.navigation?.about || 'About',
    skills: externalConfig?.header?.navigation?.skills || 'Skills'
  }
};