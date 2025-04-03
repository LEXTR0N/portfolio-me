// src/app/config/header-config.ts
import { PersonalConfig } from './personal-config';

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
    home: 'Home',
    projects: 'Projects', 
    about: 'About',
    skills: 'Skills'
  }
};