// src/app/pages/config/config.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ConfigService } from '../../services/config.service';
import { AppConfig } from '../../config/app-config';

@Component({
  selector: 'app-config',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigPageComponent implements OnInit {
  configForm: FormGroup;
  saveSuccess = false;
  saveError = false;
  activeTab = 'personal';
  
  constructor(
    private fb: FormBuilder,
    private configService: ConfigService
  ) {
    this.configForm = this.fb.group({
      personal: this.fb.group({
        name: [''],
        role: [''],
        tagline: [''],
        birthdate: [''],
        email: [''],
        location: [''],
        github: [''],
        linkedin: [''],
        xing: ['']
      }),
      home: this.fb.group({
        greetingPrefix: [''],
        headlinePrefix: [''],
        headlineHighlight: [''],
        headlineSuffix: [''],
        biography: [''],
        ctaPrimaryText: [''],
        ctaSecondaryText: [''],
        stat0Value: [''],
        stat0Label: [''],
        stat1Value: [''],
        stat1Label: ['']
      }),
      about: this.fb.group({
        title: [''],
        introduction: [''],
        bio1: [''],
        bio2: ['']
      }),
      projects: this.fb.group({
        title: [''],
        introduction: ['']
      }),
      skills: this.fb.group({
        title: [''],
        introduction: ['']
      }),
      footer: this.fb.group({
        tagline: [''],
        credits: ['']
      }),
      header: this.fb.group({
        navHome: [''],
        navAbout: [''],
        navSkills: [''],
        navProjects: ['']
      })
    });
  }
  
  ngOnInit() {
    this.loadConfig();
  }
  
  loadConfig() {
    const config = this.configService.getConfig();
    if (!config) return;
    
    // Fill in the form with the current config values
    this.configForm.patchValue({
      personal: {
        name: config.name,
        role: config.role,
        tagline: config.tagline,
        birthdate: config.birthdate,
        email: config.contact?.email,
        location: config.contact?.location,
        github: config.contact?.social?.github?.username,
        linkedin: config.contact?.social?.linkedin?.username,
        xing: config.contact?.social?.xing?.username
      },
      home: {
        greetingPrefix: config.home?.greeting?.prefix,
        headlinePrefix: config.home?.headline?.prefix,
        headlineHighlight: config.home?.headline?.highlight,
        headlineSuffix: config.home?.headline?.suffix,
        biography: config.home?.biography,
        ctaPrimaryText: config.home?.ctaButtons?.primary?.text,
        ctaSecondaryText: config.home?.ctaButtons?.secondary?.text,
        stat0Value: config.home?.stats?.stat_0?.value,
        stat0Label: config.home?.stats?.stat_0?.label,
        stat1Value: config.home?.stats?.stat_1?.value,
        stat1Label: config.home?.stats?.stat_1?.label,
      },
      about: {
        title: config.about?.title,
        introduction: config.about?.introduction,
        bio1: config.about?.profile?.bio?.[0],
        bio2: config.about?.profile?.bio?.[1]
      },
      projects: {
        title: config.projects?.title,
        introduction: config.projects?.introduction
      },
      skills: {
        title: config.skills?.title,
        introduction: config.skills?.introduction
      },
      footer: {
        tagline: config.footer?.tagline,
        credits: config.footer?.credits
      },
      header: {
        navHome: config.header?.navigation?.home,
        navAbout: config.header?.navigation?.about,
        navSkills: config.header?.navigation?.skills,
        navProjects: config.header?.navigation?.projects
      }
    });
  }
  
  saveConfig() {
    if (this.configForm.invalid) {
      return;
    }
    
    // Build config object from form values
    const formValues = this.configForm.value;
    const configData = {
      name: formValues.personal.name,
      role: formValues.personal.role,
      tagline: formValues.personal.tagline,
      birthdate: formValues.personal.birthdate,
      contact: {
        email: formValues.personal.email,
        location: formValues.personal.location,
        social: {
          github: {
            username: formValues.personal.github,
            url: `https://github.com/${formValues.personal.github}`
          },
          linkedin: {
            username: formValues.personal.linkedin,
            url: `https://linkedin.com/in/${formValues.personal.linkedin}`
          },
          xing: {
            username: formValues.personal.xing,
            url: `https://xing.com/profile/${formValues.personal.xing}`
          }
        }
      },
      home: {
        greeting: {
          prefix: formValues.home.greetingPrefix
        },
        headline: {
          prefix: formValues.home.headlinePrefix,
          highlight: formValues.home.headlineHighlight,
          suffix: formValues.home.headlineSuffix
        },
        biography: formValues.home.biography,
        ctaButtons: {
          primary: {
            text: formValues.home.ctaPrimaryText
          },
          secondary: {
            text: formValues.home.ctaSecondaryText
          }
        },
        stats: {
          stat_0: {
            value: formValues.home.stat0Value,
            label: formValues.home.stat0Label
          },
          stat_1: {
            value: formValues.home.stat1Value,
            label: formValues.home.stat1Label
          }
        }
      },
      about: {
        title: formValues.about.title,
        introduction: formValues.about.introduction,
        profile: {
          bio: [
            formValues.about.bio1,
            formValues.about.bio2
          ]
        }
      },
      projects: {
        title: formValues.projects.title,
        introduction: formValues.projects.introduction
      },
      skills: {
        title: formValues.skills.title,
        introduction: formValues.skills.introduction
      },
      footer: {
        tagline: formValues.footer.tagline,
        credits: formValues.footer.credits
      },
      header: {
        navigation: {
          home: formValues.header.navHome,
          about: formValues.header.navAbout,
          skills: formValues.header.navSkills,
          projects: formValues.header.navProjects
        }
      }
    };
    
    this.configService.updateConfig(configData).subscribe({
      next: () => {
        this.saveSuccess = true;
        setTimeout(() => {
          this.saveSuccess = false;
        }, 3000);
        
        // Reload the configuration
        this.configService.loadConfig().subscribe();
      },
      error: (err) => {
        console.error('Error saving configuration:', err);
        this.saveError = true;
        setTimeout(() => {
          this.saveError = false;
        }, 3000);
      }
    });
  }
  
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}