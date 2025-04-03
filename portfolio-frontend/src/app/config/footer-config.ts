// src/app/config/footer-config.ts
import { inject } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { PersonalConfig } from './personal-config';

// Get config from the config service
const configService = inject(ConfigService);
const externalConfig = configService.getConfig();

export const FooterConfig = {
  tagline: externalConfig?.footer?.tagline || 
    `${PersonalConfig.role} ${PersonalConfig.tagline}.`,
  labels: {
    pages: externalConfig?.footer?.labels?.pages || 'Pages',
    connect: externalConfig?.footer?.labels?.connect || 'Connect'
  },
  copyrightName: externalConfig?.footer?.copyrightName || PersonalConfig.name,
  credits: externalConfig?.footer?.credits || 'FOOTER_CREDITS'
};