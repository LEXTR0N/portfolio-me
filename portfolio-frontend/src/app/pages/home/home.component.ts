// src/app/pages/home/home.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { AppConfig, displayIfExists } from '../../config/app-config';
import { ModalComponent } from '../../components/modal/modal.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  config = AppConfig;
  displayIfExists = displayIfExists;
  isContactModalOpen = false;
  private subscription = new Subscription();
  
  constructor(private modalService: ModalService) {}
  
  ngOnInit() {
    this.subscription.add(
      this.modalService.contactModalOpen$.subscribe(isOpen => {
        this.isContactModalOpen = isOpen;
      })
    );
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
  openContactModal() {
    this.modalService.openContactModal();
  }
}