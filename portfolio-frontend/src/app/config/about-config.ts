// src/app/config/about-config.ts
import { inject } from '@angular/core';
import { ConfigService } from '../services/config.service';
import { PersonalConfig } from './personal-config';

// Get config from the config service
const configService = inject(ConfigService);
const externalConfig = configService.getConfig();

export const AboutConfig = {
  title: externalConfig?.about?.title || 'ABOUT_TITLE',
  introduction: externalConfig?.about?.introduction?.replace('{name}', PersonalConfig.name) || 
    `Hello! I'm ${PersonalConfig.name}, ABOUT_INTRODUCTION`,
  profile: {
    name: PersonalConfig.name,
    role: PersonalConfig.role,
    image: PersonalConfig.images.profile,
    contactInfo: externalConfig?.about?.profile?.contactInfo || [
      { label: "Email", value: PersonalConfig.contact.email },
      { label: "Location", value: PersonalConfig.contact.location },
      { label: "Birthday", value: PersonalConfig.birthdate }
    ],
    bio: externalConfig?.about?.profile?.bio || [
      'ABOUT_BIO_1',
      'ABOUT_BIO_2'
    ]
  },
  sectionTabs: {
    education: externalConfig?.about?.sectionTabs?.education || 'Education',
    experience: externalConfig?.about?.sectionTabs?.experience || 'Experience',
    personal: externalConfig?.about?.sectionTabs?.personal || 'Personal'
  },
  experience: [
    {
      id: 1,
      title: "Dual Student - Software Developer",
      organization: "Deutsche Rentenversicherung Bund",
      duration: "February 2022 - March 2025",
      location: "Würzburg",
      description: [
        "Collaborated on full-stack projects as part of a dual study program",
        "Implemented solutions using Java, Angular, and Oracle SQL",
        "Gained practical experience in enterprise software development"
      ]
    },
    {
      id: 2,
      title: "Baker & Department Shift Leader",
      organization: "Bäckerei Peter Schmitt GmbH",
      duration: "March 2019 - September 2021",
      location: "Bad Kissingen",
      description: [
        "Managed a department in the bakery production (March - August 2019)",
        "Operated production machinery and ensured quality control",
        "Worked multiple seasonal periods from 2019-2021"
      ]
    }
  ],
  education: [
    {
      id: 1,
      title: "Bachelor's in Informatics",
      organization: "Technische Hochschule Würzburg-Schweinfurt",
      duration: "October 2021 - Present",
      location: "Würzburg-Schweinfurt",
      description: [
        "Studying computer science with focus on software development",
        "Participating in dual study program with Deutsche Rentenversicherung Bund"
      ]
    },
    {
      id: 2,
      title: "Fachabitur (Specialized High School Diploma)",
      organization: "BOS Schweinfurt, Friedrich Fischer Schule",
      duration: "September 2019 - June 2021",
      location: "Schweinfurt",
      description: [
        "Completed vocational baccalaureate diploma"
      ]
    },
    {
      id: 3,
      title: "Professional Baker Training",
      organization: "Bäckerei Zimmermann",
      duration: "September 2016 - February 2019",
      location: "",
      description: [
        "Completed formal apprenticeship in baking"
      ]
    },
    {
      id: 4,
      title: "Mittlere Reife (Secondary School Diploma)",
      organization: "Wirtschaftsschule Müller",
      duration: "September 2012 - July 2016",
      location: "",
      description: [
        "Completed intermediate secondary education with focus on business"
      ]
    }
  ],
  hobbies: [
    {
      icon: "🕺",
      title: "Guard Dancing",
      description: "Member of FCSH Ebenhausen dance troupe"
    },
    {
      icon: "💻",
      title: "Coding",
      description: "Developing web applications and mobile apps using various technologies including Flutter, Angular, and other modern frameworks"
    },
  ]
};