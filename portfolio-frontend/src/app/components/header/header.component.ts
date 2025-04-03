// src/app/components/header/header.component.ts
import { Component, OnInit, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AppConfig, displayIfExists } from '../../config/app-config';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  config = AppConfig;
  displayIfExists = displayIfExists;
  
  mobileMenuOpen = false;
  dropdownOpen = false;
  isDarkMode = false;
  isBrowser: boolean;
  
  constructor(
    private modalService: ModalService,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }
  
  ngOnInit() {
    if (this.isBrowser) {
      // Check for system dark mode preference
      this.checkDarkMode();
      
      // Listen for changes in color scheme preference
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', () => {
        this.checkDarkMode();
      });
    }
  }
  
  checkDarkMode() {
    if (this.isBrowser) {
      this.isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  }
  
  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    if (this.isBrowser) {
      if (this.mobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    }
  }
  
  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
    this.dropdownOpen = false;
    if (this.isBrowser) {
      document.body.style.overflow = '';
    }
  }
  
  toggleDropdown(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.dropdownOpen = !this.dropdownOpen;
  }
  
  openContactModal(event: Event): void {
    event.preventDefault();
    this.modalService.openContactModal();
  }
}