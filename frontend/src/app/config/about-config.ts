// src/app/config/about-config.ts
import { PersonalConfig } from './personal-config';

export const AboutConfig = {
  title: "About Me",
  introduction: `Hello! I'm ${PersonalConfig.name}, a passionate Software Developer specializing in innovative digital solutions. From my home base in Hambach, I develop efficient and user-centered applications that combine technical excellence with intuitive design. Below you'll find an overview of the skills I've developed throughout my professional journey.`,
  profile: {
    name: PersonalConfig.name,
    role: "Software Developer",
    image: PersonalConfig.images.profile,
    contactInfo: [
      { label: "Email", value: "jonas.eck55@gmail.com" },
      { label: "Location", value: "Hambach, Germany" },
      { label: "Birthday", value: "September 4, 2000" }
    ],
    bio: [
      "I started my journey in tech with a deep curiosity about how software works. After starting my Informatics studies at the Technical University of Würzburg-Schweinfurt, I've worked with the Deutsche Rentenversicherung Bund as a dual student to develop solutions that combine robust backend systems with intuitive frontend interfaces.",
      "My background in practical work has taught me the value of attention to detail and teamwork. I'm particularly interested in full-stack development using Java and Angular, and I enjoy applying my skills to create high-performance applications."
    ]
  },
  sectionTabs: {
    education: "Education",
    experience: "Experience",
    personal: "Personal"
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