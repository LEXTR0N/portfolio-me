// src/app/config/home-config.ts
import { inject } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { PersonalConfig } from './personal-config';

// Get config from the config service
const configService = inject(ConfigService);
const externalConfig = configService.getConfig();

export const HomeConfig = {
  greeting: {
    prefix: externalConfig?.home?.greeting?.prefix || 'HOME_GREETING_PREFIX',
    name: PersonalConfig.name
  },
  headline: {
    prefix: externalConfig?.home?.headline?.prefix || 'HOME_HEADLINE_PREFIX',
    highlight: externalConfig?.home?.headline?.highlight || 'HOME_HEADLINE_HIGHLIGHT',
    suffix: externalConfig?.home?.headline?.suffix || 'HOME_HEADLINE_SUFFIX'
  },
  biography: externalConfig?.home?.biography || 'HOME_BIOGRAPHY',
  ctaButtons: {
    primary: {
      text: externalConfig?.home?.ctaButtons?.primary?.text || 'HOME_CTA_PRIMARY_TEXT',
      link: externalConfig?.home?.ctaButtons?.primary?.link || '/projects'
    },
    secondary: {
      text: externalConfig?.home?.ctaButtons?.secondary?.text || 'HOME_CTA_SECONDARY_TEXT',
      link: externalConfig?.home?.ctaButtons?.secondary?.link || '/contact'
    }
  },
  stats: {
    stat_0: {
      value: externalConfig?.home?.stats?.stat_0?.value || 'HOME_STAT_0_VALUE',
      label: externalConfig?.home?.stats?.stat_0?.label || 'HOME_STAT_0_LABEL'
    },
    stat_1: {
      value: externalConfig?.home?.stats?.stat_1?.value || 'HOME_STAT_1_VALUE',
      label: externalConfig?.home?.stats?.stat_1?.label || 'HOME_STAT_1_LABEL'
    }
  }
};