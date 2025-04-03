// src/app/components/project-detail-modal/project-detail-modal.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-detail-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-detail-modal.component.html',
  styleUrls: ['./project-detail-modal.component.scss']
})
export class ProjectDetailModalComponent {
  @Input() isOpen = false;
  @Input() project: any;
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
  
  onOverlayClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.close.emit();
    }
  }
  
  hasLink(linkType: 'live' | 'github' | 'behance'): boolean {
    return !!this.project?.links?.[linkType];
  }
  
  getLink(linkType: 'live' | 'github' | 'behance'): string {
    return this.project?.links?.[linkType] || '#';
  }
}