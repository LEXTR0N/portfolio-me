#!/bin/sh
# entrypoint.sh - Docker entrypoint script to generate frontend configuration

# Create config directory if it doesn't exist
mkdir -p /app/dist/browser/assets

# Generate config.json from environment variables
cat > /app/dist/browser/assets/config.json << EOF
{
  "name": "${PERSONAL_NAME:-PERSONAL_NAME}",
  "role": "${PERSONAL_ROLE:-PERSONAL_ROLE}",
  "tagline": "${PERSONAL_TAGLINE:-PERSONAL_TAGLINE}",
  "birthdate": "${PERSONAL_BIRTHDATE:-PERSONAL_BIRTHDATE}",
  "contact": {
    "email": "${PERSONAL_EMAIL:-PERSONAL_EMAIL}",
    "location": "${PERSONAL_LOCATION:-PERSONAL_LOCATION}",
    "social": {
      "github": {
        "username": "${PERSONAL_GITHUB:-PERSONAL_GITHUB}",
        "url": "https://github.com/${PERSONAL_GITHUB:-PERSONAL_GITHUB}"
      },
      "xing": {
        "username": "${PERSONAL_XING:-PERSONAL_XING}",
        "url": "https://xing.com/profile/${PERSONAL_XING:-PERSONAL_XING}"
      },
      "linkedin": {
        "username": "${PERSONAL_LINKEDIN:-PERSONAL_LINKEDIN}",
        "url": "https://linkedin.com/in/${PERSONAL_LINKEDIN:-PERSONAL_LINKEDIN}"
      },
      "behance": {
        "username": "${PERSONAL_BEHANCE:-PERSONAL_BEHANCE}",
        "url": "https://behance.net/${PERSONAL_BEHANCE:-PERSONAL_BEHANCE}"
      }
    }
  },
  "images": {
    "profile": "${PERSONAL_IMAGE_PROFILE:-assets/images/profil.png}",
    "logoLight": "${PERSONAL_IMAGE_LOGO_LIGHT:-assets/images/logo_light.png}",
    "logoDark": "${PERSONAL_IMAGE_LOGO_DARK:-assets/images/logo_dark.png}"
  },
  "home": {
    "greeting": {
      "prefix": "${HOME_GREETING_PREFIX:-HOME_GREETING_PREFIX}",
      "name": "${PERSONAL_NAME:-PERSONAL_NAME}"
    },
    "headline": {
      "prefix": "${HOME_HEADLINE_PREFIX:-HOME_HEADLINE_PREFIX}",
      "highlight": "${HOME_HEADLINE_HIGHLIGHT:-HOME_HEADLINE_HIGHLIGHT}",
      "suffix": "${HOME_HEADLINE_SUFFIX:-HOME_HEADLINE_SUFFIX}"
    },
    "biography": "${HOME_BIOGRAPHY:-HOME_BIOGRAPHY}",
    "ctaButtons": {
      "primary": {
        "text": "${HOME_CTA_PRIMARY_TEXT:-HOME_CTA_PRIMARY_TEXT}",
        "link": "${HOME_CTA_PRIMARY_LINK:-/projects}"
      },
      "secondary": {
        "text": "${HOME_CTA_SECONDARY_TEXT:-HOME_CTA_SECONDARY_TEXT}",
        "link": "${HOME_CTA_SECONDARY_LINK:-/contact}"
      }
    },
    "stats": {
      "stat_0": {
        "value": "${HOME_STAT_0_VALUE:-HOME_STAT_0_VALUE}",
        "label": "${HOME_STAT_0_LABEL:-HOME_STAT_0_LABEL}"
      },
      "stat_1": {
        "value": "${HOME_STAT_1_VALUE:-HOME_STAT_1_VALUE}",
        "label": "${HOME_STAT_1_LABEL:-HOME_STAT_1_LABEL}"
      }
    }
  },
  "about": {
    "title": "${ABOUT_TITLE:-ABOUT_TITLE}",
    "introduction": "${ABOUT_INTRODUCTION:-ABOUT_INTRODUCTION}",
    "sectionTabs": {
      "education": "${ABOUT_SECTION_EDUCATION:-Education}",
      "experience": "${ABOUT_SECTION_EXPERIENCE:-Experience}",
      "personal": "${ABOUT_SECTION_PERSONAL:-Personal}"
    },
    "profile": {
      "contactInfo": [
        { 
          "label": "Email", 
          "value": "${PERSONAL_EMAIL:-PERSONAL_EMAIL}" 
        },
        { 
          "label": "Location", 
          "value": "${PERSONAL_LOCATION:-PERSONAL_LOCATION}" 
        },
        { 
          "label": "Birthday", 
          "value": "${PERSONAL_BIRTHDATE:-PERSONAL_BIRTHDATE}" 
        }
      ],
      "bio": [
        "${ABOUT_BIO_1:-ABOUT_BIO_1}",
        "${ABOUT_BIO_2:-ABOUT_BIO_2}"
      ]
    }
  },
  "skills": {
    "title": "${SKILLS_TITLE:-SKILLS_TITLE}",
    "introduction": "${SKILLS_INTRODUCTION:-SKILLS_INTRODUCTION}"
  },
  "projects": {
    "title": "${PROJECTS_TITLE:-PROJECTS_TITLE}",
    "introduction": "${PROJECTS_INTRODUCTION:-PROJECTS_INTRODUCTION}"
  },
  "footer": {
    "tagline": "${FOOTER_TAGLINE:-FOOTER_TAGLINE}",
    "labels": {
      "pages": "${FOOTER_LABEL_PAGES:-Pages}",
      "connect": "${FOOTER_LABEL_CONNECT:-Connect}"
    },
    "copyrightName": "${PERSONAL_NAME:-PERSONAL_NAME}",
    "credits": "${FOOTER_CREDITS:-FOOTER_CREDITS}"
  },
  "header": {
    "navigation": {
      "home": "${HEADER_NAV_HOME:-Home}",
      "about": "${HEADER_NAV_ABOUT:-About}",
      "skills": "${HEADER_NAV_SKILLS:-Skills}",
      "projects": "${HEADER_NAV_PROJECTS:-Projects}"
    }
  }
}
EOF

echo "Generated frontend configuration"

# Execute the main command
exec "$@"