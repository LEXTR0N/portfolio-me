import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppConfig, displayIfExists } from '../../config/app-config';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  config = AppConfig;
  displayIfExists = displayIfExists;
  activeSection: 'education' | 'experience' | 'personal' = 'education';

  // Get timeline items for the active section 
  // Items are already ordered with newest first in the config
  getFilteredItems() {
    if (this.activeSection === 'education') {
      return this.config.about.education;
    } else if (this.activeSection === 'experience') {
      return this.config.about.experience;
    }
    return [];
  }

  setActiveSection(section: 'education' | 'experience' | 'personal'): void {
    this.activeSection = section;
  }
}