// src/app/components/footer/footer.component.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppConfig, displayIfExists } from '../../config/app-config';

@Component({
  selector: 'footer',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  config = AppConfig;
  displayIfExists = displayIfExists;
  currentYear = new Date().getFullYear();
}