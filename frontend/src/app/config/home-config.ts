// src/app/config/home-config.ts
import { PersonalConfig } from './personal-config';

export const HomeConfig = {
  greeting: {
    prefix: 'Hello, I\'m',
    name: PersonalConfig.name
  },
  headline: {
    prefix: 'I built',
    highlight: 'this portfolio template',
    suffix: 'for everyone'
  },
  biography: 'I developed this website as an open-source portfolio template that anyone can adapt and use. While this is just one example of my work, I enjoy creating various digital solutions beyond portfolio websites.',
  ctaButtons: {
    primary: {
      text: 'View my work',
      link: '/projects'
    },
    secondary: {
      text: 'Contact me',
      link: '/contact'
    }
  },
  stats: {
    stat_0: {
      value: '26',
      label: 'Pizza Slices Eaten'
    },
    stat_1: {
      value: '9+',
      label: 'Eureka Moments'
    }
  }
};