# entrypoint.ps1 - Windows PowerShell version of entrypoint script

# Create config directory if it doesn't exist
New-Item -ItemType Directory -Path ".\dist\browser\assets" -Force | Out-Null

# Generate config.json from environment variables
$config = @{
  name = if ($env:PERSONAL_NAME) { $env:PERSONAL_NAME } else { "PERSONAL_NAME" }
  role = if ($env:PERSONAL_ROLE) { $env:PERSONAL_ROLE } else { "PERSONAL_ROLE" }
  tagline = if ($env:PERSONAL_TAGLINE) { $env:PERSONAL_TAGLINE } else { "PERSONAL_TAGLINE" }
  birthdate = if ($env:PERSONAL_BIRTHDATE) { $env:PERSONAL_BIRTHDATE } else { "PERSONAL_BIRTHDATE" }
  contact = @{
    email = if ($env:PERSONAL_EMAIL) { $env:PERSONAL_EMAIL } else { "PERSONAL_EMAIL" }
    location = if ($env:PERSONAL_LOCATION) { $env:PERSONAL_LOCATION } else { "PERSONAL_LOCATION" }
    social = @{
      github = @{
        username = if ($env:PERSONAL_GITHUB) { $env:PERSONAL_GITHUB } else { "PERSONAL_GITHUB" }
        url = "https://github.com/$((if ($env:PERSONAL_GITHUB) { $env:PERSONAL_GITHUB } else { "PERSONAL_GITHUB" }))"
      }
      xing = @{
        username = if ($env:PERSONAL_XING) { $env:PERSONAL_XING } else { "PERSONAL_XING" }
        url = "https://xing.com/profile/$((if ($env:PERSONAL_XING) { $env:PERSONAL_XING } else { "PERSONAL_XING" }))"
      }
      linkedin = @{
        username = if ($env:PERSONAL_LINKEDIN) { $env:PERSONAL_LINKEDIN } else { "PERSONAL_LINKEDIN" }
        url = "https://linkedin.com/in/$((if ($env:PERSONAL_LINKEDIN) { $env:PERSONAL_LINKEDIN } else { "PERSONAL_LINKEDIN" }))"
      }
      behance = @{
        username = if ($env:PERSONAL_BEHANCE) { $env:PERSONAL_BEHANCE } else { "PERSONAL_BEHANCE" }
        url = "https://behance.net/$((if ($env:PERSONAL_BEHANCE) { $env:PERSONAL_BEHANCE } else { "PERSONAL_BEHANCE" }))"
      }
    }
  }
  images = @{
    profile = if ($env:PERSONAL_IMAGE_PROFILE) { $env:PERSONAL_IMAGE_PROFILE } else { "assets/images/profil.png" }
    logoLight = if ($env:PERSONAL_IMAGE_LOGO_LIGHT) { $env:PERSONAL_IMAGE_LOGO_LIGHT } else { "assets/images/logo_light.png" }
    logoDark = if ($env:PERSONAL_IMAGE_LOGO_DARK) { $env:PERSONAL_IMAGE_LOGO_DARK } else { "assets/images/logo_dark.png" }
  }
  home = @{
    greeting = @{
      prefix = if ($env:HOME_GREETING_PREFIX) { $env:HOME_GREETING_PREFIX } else { "HOME_GREETING_PREFIX" }
      name = if ($env:PERSONAL_NAME) { $env:PERSONAL_NAME } else { "PERSONAL_NAME" }
    }
    headline = @{
      prefix = if ($env:HOME_HEADLINE_PREFIX) { $env:HOME_HEADLINE_PREFIX } else { "HOME_HEADLINE_PREFIX" }
      highlight = if ($env:HOME_HEADLINE_HIGHLIGHT) { $env:HOME_HEADLINE_HIGHLIGHT } else { "HOME_HEADLINE_HIGHLIGHT" }
      suffix = if ($env:HOME_HEADLINE_SUFFIX) { $env:HOME_HEADLINE_SUFFIX } else { "HOME_HEADLINE_SUFFIX" }
    }
    biography = if ($env:HOME_BIOGRAPHY) { $env:HOME_BIOGRAPHY } else { "HOME_BIOGRAPHY" }
    ctaButtons = @{
      primary = @{
        text = if ($env:HOME_CTA_PRIMARY_TEXT) { $env:HOME_CTA_PRIMARY_TEXT } else { "HOME_CTA_PRIMARY_TEXT" }
        link = if ($env:HOME_CTA_PRIMARY_LINK) { $env:HOME_CTA_PRIMARY_LINK } else { "/projects" }
      }
      secondary = @{
        text = if ($env:HOME_CTA_SECONDARY_TEXT) { $env:HOME_CTA_SECONDARY_TEXT } else { "HOME_CTA_SECONDARY_TEXT" }
        link = if ($env:HOME_CTA_SECONDARY_LINK) { $env:HOME_CTA_SECONDARY_LINK } else { "/contact" }
      }
    }
    stats = @{
      stat_0 = @{
        value = if ($env:HOME_STAT_0_VALUE) { $env:HOME_STAT_0_VALUE } else { "HOME_STAT_0_VALUE" }
        label = if ($env:HOME_STAT_0_LABEL) { $env:HOME_STAT_0_LABEL } else { "HOME_STAT_0_LABEL" }
      }
      stat_1 = @{
        value = if ($env:HOME_STAT_1_VALUE) { $env:HOME_STAT_1_VALUE } else { "HOME_STAT_1_VALUE" }
        label = if ($env:HOME_STAT_1_LABEL) { $env:HOME_STAT_1_LABEL } else { "HOME_STAT_1_LABEL" }
      }
    }
  }
  about = @{
    title = if ($env:ABOUT_TITLE) { $env:ABOUT_TITLE } else { "ABOUT_TITLE" }
    introduction = if ($env:ABOUT_INTRODUCTION) { $env:ABOUT_INTRODUCTION } else { "ABOUT_INTRODUCTION" }
    sectionTabs = @{
      education = if ($env:ABOUT_SECTION_EDUCATION) { $env:ABOUT_SECTION_EDUCATION } else { "Education" }
      experience = if ($env:ABOUT_SECTION_EXPERIENCE) { $env:ABOUT_SECTION_EXPERIENCE } else { "Experience" }
      personal = if ($env:ABOUT_SECTION_PERSONAL) { $env:ABOUT_SECTION_PERSONAL } else { "Personal" }
    }
    profile = @{
      contactInfo = @(
        @{ 
          label = "Email"
          value = if ($env:PERSONAL_EMAIL) { $env:PERSONAL_EMAIL } else { "PERSONAL_EMAIL" }
        },
        @{ 
          label = "Location"
          value = if ($env:PERSONAL_LOCATION) { $env:PERSONAL_LOCATION } else { "PERSONAL_LOCATION" }
        },
        @{ 
          label = "Birthday"
          value = if ($env:PERSONAL_BIRTHDATE) { $env:PERSONAL_BIRTHDATE } else { "PERSONAL_BIRTHDATE" }
        }
      )
      bio = @(
        if ($env:ABOUT_BIO_1) { $env:ABOUT_BIO_1 } else { "ABOUT_BIO_1" },
        if ($env:ABOUT_BIO_2) { $env:ABOUT_BIO_2 } else { "ABOUT_BIO_2" }
      )
    }
  }
  skills = @{
    title = if ($env:SKILLS_TITLE) { $env:SKILLS_TITLE } else { "SKILLS_TITLE" }
    introduction = if ($env:SKILLS_INTRODUCTION) { $env:SKILLS_INTRODUCTION } else { "SKILLS_INTRODUCTION" }
  }
  projects = @{
    title = if ($env:PROJECTS_TITLE) { $env:PROJECTS_TITLE } else { "PROJECTS_TITLE" }
    introduction = if ($env:PROJECTS_INTRODUCTION) { $env:PROJECTS_INTRODUCTION } else { "PROJECTS_INTRODUCTION" }
  }
  footer = @{
    tagline = if ($env:FOOTER_TAGLINE) { $env:FOOTER_TAGLINE } else { "FOOTER_TAGLINE" }
    labels = @{
      pages = if ($env:FOOTER_LABEL_PAGES) { $env:FOOTER_LABEL_PAGES } else { "Pages" }
      connect = if ($env:FOOTER_LABEL_CONNECT) { $env:FOOTER_LABEL_CONNECT } else { "Connect" }
    }
    copyrightName = if ($env:PERSONAL_NAME) { $env:PERSONAL_NAME } else { "PERSONAL_NAME" }
    credits = if ($env:FOOTER_CREDITS) { $env:FOOTER_CREDITS } else { "FOOTER_CREDITS" }
  }
  header = @{
    navigation = @{
      home = if ($env:HEADER_NAV_HOME) { $env:HEADER_NAV_HOME } else { "Home" }
      about = if ($env:HEADER_NAV_ABOUT) { $env:HEADER_NAV_ABOUT } else { "About" }
      skills = if ($env:HEADER_NAV_SKILLS) { $env:HEADER_NAV_SKILLS } else { "Skills" }
      projects = if ($env:HEADER_NAV_PROJECTS) { $env:HEADER_NAV_PROJECTS } else { "Projects" }
    }
  }
}

# Convert the config object to JSON and save it
$config | ConvertTo-Json -Depth 10 | Out-File -FilePath ".\dist\browser\assets\config.json" -Encoding UTF8

Write-Host "Generated frontend configuration"

# Execute the main command
$args = $MyInvocation.Line -split $MyInvocation.InvocationName, 2 | Select-Object -Last 1
if ($args) {
    Invoke-Expression $args.Trim()
}