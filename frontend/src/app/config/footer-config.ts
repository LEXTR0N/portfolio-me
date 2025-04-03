// src/app/config/footer-config.ts
import { PersonalConfig } from './personal-config';

export const FooterConfig = {
  tagline: `${PersonalConfig.role} ${PersonalConfig.tagline}.`,
  labels: {
    pages: 'Pages',
    connect: 'Connect'
  },
  copyrightName: PersonalConfig.name,
  credits: 'Made with ❤ as an open-source template'
};