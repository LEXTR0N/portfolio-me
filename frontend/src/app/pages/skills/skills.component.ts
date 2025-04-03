import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppConfig, displayIfExists } from '../../config/app-config';
import { FormsModule } from '@angular/forms';

interface Skill {
  name: string;
  level: number;
  yearsExperience?: number;
  description?: string;
}

interface SkillCategory {
  name: string;
  description: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  config = AppConfig;
  displayIfExists = displayIfExists;
  activeCategory: number = 0; // Index of the active category for mobile view
  
  // Holds all categories and skills from the config
  categories: SkillCategory[] = [];

  ngOnInit() {
    // Load categories from config
    this.categories = this.config.skills.categories;
  }

  // Get level description based on skill level (1-5)
  getLevelDescription(level: number): string {
    return this.config.skills.levelDescriptions[level - 1] || '';
  }

  // Calculate width for skill bar based on level (1-5 to percentage)
  getSkillBarWidth(level: number): string {
    return (level * 20) + '%';
  }

  // Change active category (for mobile view)
  setActiveCategory(index: any): void {
    // Convert to number explicitly, since select values are strings
    this.activeCategory = typeof index === 'string' ? parseInt(index, 10) : index;
  }

  // Utility method to generate an array of stars based on skill level
  getStars(level: number): number[] {
    return Array(level).fill(1);
  }

  // Utility method to generate empty stars to complete 5 stars
  getEmptyStars(level: number): number[] {
    return Array(5 - level).fill(1);
  }
}