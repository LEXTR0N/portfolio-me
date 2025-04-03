# ReachMe Portfolio

ReachMe Portfolio is a customizable Angular portfolio template designed for developers and creatives to showcase their skills, projects, and experience. The template features a clean and modern design with responsive layouts, custom components, and easy configuration.

| ![Homepage Screenshot](/docs/images/screenshot_00.png) | ![Projects Screenshot](/docs/images/screenshot_01.png) |
|:------------------------------------------------------:|:------------------------------------------------------:|
| *Homepage view - Darkmode* | *Skills section - Lightmode* |



## Features

- 🎨 Modern UI with customizable themes
- 📱 Fully responsive design for all devices
- ⚡ Fast loading with Angular SSR (Server-Side Rendering)
- 🔧 Easy configuration through centralized config files
- 📝 Contact form with validation
- 🌓 Dark mode support


## Getting Started

### Prerequisites

- Node.js (v14.x or higher)
- npm (v6.x or higher)
- Angular CLI (v19.x)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/LEXTR0N/reach-me-portfolio.git
cd reach-me-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200`

## Customization Guide

### Basic Configuration

The main configuration files are located in the `src/app/config` directory:

- `personal-config.ts` - Your personal information, contact details, and social media links
- `home-config.ts` - Homepage content and layout
- `about-config.ts` - About page content and timeline data
- `skills-config.ts` - Your skills categorized by section
- `projects-config.ts` - Your projects with details and links
- `footer-config.ts` - Footer content
- `header-config.ts` - Header navigation and logo

### Updating Personal Information

Edit `src/app/config/personal-config.ts` to update your basic information:

```typescript
export const PersonalConfig = {
  name: 'Your Name',
  role: 'Your Job Title',
  tagline: 'your personal tagline',
  birthdate: 'Month DD, YYYY',
  
  contact: {
    email: 'your.email@example.com',
    location: 'City, Country',
    // Social media handles
    social: {
      github: { username: 'yourusername' },
      twitter: { username: 'yourusername' },
      linkedin: { username: 'yourusername' }
    }
  },
  
  // Image paths
  images: {
    profile: 'assets/images/your-profile.png',
    logo: 'assets/images/your-logo.png'
  }
};
```

### Adding Projects

Update `src/app/config/projects-config.ts` to showcase your work:

```typescript
export const ProjectsConfig = {
  items: [
    {
      id: 1,
      title: 'Project Name',
      subtitle: 'Project Type',
      description: 'Detailed description of your project',
      image: 'assets/images/projects/project1.jpg',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      category: 'web',
      featured: true,
      links: {
        live: 'https://example.com/project',
        github: 'https://github.com/yourusername/project',
        behance: null
      },
      date: '2023'
    },
    // Add more projects
  ]
};
```

### Customizing Skills

Edit `src/app/config/skills-config.ts` to update your skills:

```typescript
export const SkillsConfig = {
  categories: [
    {
      name: 'Programming Languages',
      description: 'Languages I work with',
      skills: [
        {
          name: 'JavaScript',
          level: 5, // On a scale of 1-5
          yearsExperience: 3,
          description: 'ES6+, TypeScript, etc.'
        },
        // Add more skills
      ]
    },
    // Add more categories
  ]
};
```

### Updating Experience and Education

Edit `src/app/config/about-config.ts` to update your experience and education:

```typescript
export const AboutConfig = {
  experience: [
    {
      id: 1,
      title: 'Job Title',
      organization: 'Company Name',
      duration: 'Month YYYY - Present',
      location: 'City, Country',
      description: ['Responsibility 1', 'Responsibility 2']
    },
    // Add more experience entries
  ],
  
  education: [
    {
      id: 1,
      title: 'Degree',
      organization: 'Institution Name',
      duration: 'YYYY - YYYY',
      location: 'City, Country',
      description: ['Description 1', 'Description 2']
    },
    // Add more education entries
  ]
};
```

## Credits

Images:
  - [Pexels Image by Simon Robben](https://www.pexels.com/de-de/foto/mann-in-roter-jacke-1681010/)
  - [Pixabay - Code Programming JavaScript](https://pixabay.com/de/photos/code-programming-javascript-5113374/)
  - [Pixabay - Design Internet WWW Webdesign](https://pixabay.com/de/photos/design-internet-www-webdesign-web-1210160/)
  - [Pixabay - Computer Code Programming](https://pixabay.com/de/illustrations/computer-computercode-programmierung-1833058/)
  - [Pixabay - App Mobile Die App](https://pixabay.com/de/vectors/app-handy-die-app-auf-dem-handy-3314295/)
  - [Pixabay - Server Data Calculator Network](https://pixabay.com/de/illustrations/server-daten-rechner-netzwerk-5451985/)

## License

This project is open source and available under the [MIT License](LICENSE).